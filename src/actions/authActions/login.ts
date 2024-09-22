"use server";

import { LoginSchemaType } from "@/schema";
import { AuthError } from "next-auth";

export const handleCredentialLogin = async ({
  email,
  password,
}: LoginSchemaType) => {
  try {
    console.log("🚀 ~ email:, password:", email, password);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: 0,
            message: "Invalid credentials provided",
            data: null,
          };

        default:
          return {
            success: 0,
            message: "Something went wrong while login",
            data: null,
          };
      }
    }

    throw error;
  }
};
