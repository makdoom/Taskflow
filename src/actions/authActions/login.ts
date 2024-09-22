"use server";

import { ActionResponse } from "@/lib/response";
import { getUserByEmail } from "@/lib/user";
import { LoginSchema, LoginSchemaType } from "@/schema";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";

export const handleCredentialLogin = async (data: LoginSchemaType) => {
  try {
    const validatedFields = LoginSchema.safeParse(data);
    if (!validatedFields.success)
      return ActionResponse(0, "Invalid payload provided", null, "login");

    const { email, password } = validatedFields.data;
    const existingUser = await getUserByEmail(email);
    if (!existingUser)
      return ActionResponse(
        0,
        "Account not found with this email address",
        null,
        "login"
      );

    if (existingUser?.password) {
      const isPasswordMatched = bcrypt.compare(
        password,
        existingUser?.password
      );

      if (!isPasswordMatched)
        return ActionResponse(
          0,
          "Your email or password is incorrect, Please try again",
          null,
          "login"
        );
    }

    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return ActionResponse(1, "Logged in successfully", null, "login");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return ActionResponse(
            0,
            "Invalid credentials provided",
            null,
            "login"
          );

        default:
          return ActionResponse(
            0,
            "Something went wrong while login",
            null,
            "login"
          );
      }
    }

    throw error;
  }
};
