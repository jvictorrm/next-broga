"use server";

import { logout } from "@/helpers/session";
import { redirect } from "next/navigation";

export const handleSignOutForm = async () => {
  await logout();
  return redirect("/");
};
