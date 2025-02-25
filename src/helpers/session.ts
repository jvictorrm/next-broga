import { cookies } from "next/headers";
import { decrypt } from "./jwt";

export const createSession = (payload: string) => {
  const expires = new Date(Date.now() + 60 + 1000);
  cookies().set("session", payload, { expires, httpOnly: true });
};

export const getSession = async () => {
  const session = cookies().get("session")?.value;

  if (!session) return null;

  return await decrypt(session);
};
