"use server";

import { signOut } from "@/auth";

export const handleLogout = async () => {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    throw error;
  }
};
