"use server";

import UsersService from "@/services/Users";

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

const validateSignUpForm = (formData: FormData) => {
  const errors: SignUpError = {
    name: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  };

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirmation = formData.get("passwordConfirmation") as string;

  try {
    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "E-mail is required";
    }

    if (!email.includes("@")) {
      errors.email = "E-mail is invalid";
    }

    if (password.length < 10) {
      errors.password = "Password should be at least 10 characters";
    }

    if (!password || passwordConfirmation !== password) {
      errors.passwordConfirmation = "Password confirmation is not the same";
    }

    const isValid = Object.values(errors || {}).every(
      (value) => value === undefined
    );

    return { isValid, errors };
  } catch (_) {
    return { isValid: false, errors };
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

  return { ...prevState, isValid: true };
};
