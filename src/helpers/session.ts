import { User } from "@prisma/client";
import { cookies } from "next/headers";
import { decrypt, encrypt } from "./jwt";

const SESSION_NAME = "session";
const generateExpires = () => new Date(Date.now() + 60 * 60 * 1000);

export const createSession = (payload: string) => {
  cookies().set(SESSION_NAME, payload, {
    expires: generateExpires(),
    httpOnly: true,
  });
};

export const getSession = async () => {
  const session = cookies().get(SESSION_NAME)?.value;

  if (!session) return null;

  return (await decrypt(session)) as Pick<User, "uuid" | "name" | "email">;
};

export const updateSession = async () => {
  const session = await getSession();
  if (!session) return null;

  const expires = generateExpires();
  const jwt = await encrypt({ ...session, expires });

  const updateSession = {
    name: SESSION_NAME,
    value: jwt,
    expires,
    httpOnly: true,
  };

  return updateSession;
};

export const logout = async () => {
  cookies().set(SESSION_NAME, "", { expires: new Date(0) });
};
