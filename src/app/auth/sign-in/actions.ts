"use server";

import { encrypt } from "@/helpers/jwt";
import { createSession } from "@/helpers/session";
import { getZodErrors } from "@/helpers/zod";
import UsersService from "@/services/Users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type SignInError = {
  email?: string | undefined;
  password?: string | undefined;
};

export type SignInState = {
  isValid?: boolean;
  errors: SignInError;
};

const validateSignInForm = (formData: FormData) => {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  try {
    userSchema.parse(Object.fromEntries(formData));
    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    const zodErrors = getZodErrors(error);
    return { isValid: false, errors: zodErrors || {} };
  }
};

export const handleSignInForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignInForm(formData);

  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const user = await UsersService.signIn(data);
  if (!user) return { isValid: false, errors: {} };

  const payload = {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
  };

  const jwt = await encrypt(payload);
  createSession(jwt);

  revalidatePath("/");
  return redirect("/");
};
