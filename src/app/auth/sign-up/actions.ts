"use server";

import UsersService from "@/services/Users";
import { z } from "zod";

export type SignUpError = {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  passwordConfirmation?: string | undefined;
};

export type SignUpState = {
  isValid?: boolean;
  errors: SignUpError;
};

const getZodErrors = (error: unknown) => {
  const isZodError = error instanceof z.ZodError;
  if (!isZodError) return null;

  const { fieldErrors } = error.flatten();
  const errors = Object.keys(fieldErrors).reduce((acc, key) => {
    const message = fieldErrors[key]?.at(0);
    return { ...acc, [key]: message };
  }, {} as SignUpError);

  return errors;
};

const validateSignUpForm = (formData: FormData) => {
  const userSchema = z
    .object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(10),
      passwordConfirmation: z.string().min(10),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords don't match",
      path: ["passwordConfirmation"],
    });

  try {
    userSchema.parse(Object.fromEntries(formData));
    return { isValid: true, errors: {} };
  } catch (error: unknown) {
    const zodErrors = getZodErrors(error);
    return { isValid: false, errors: zodErrors || {} };
  }
};

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  const validation = validateSignUpForm(formData);

  if (!validation.isValid) {
    return { ...prevState, ...validation };
  }

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  await UsersService.signUp(data);

  return { isValid: true, errors: {} };
};
