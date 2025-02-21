"use server";

import UsersService from "@/services/Users";

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const record = await UsersService.signUp(data);

  return {};
};
