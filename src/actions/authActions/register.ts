"use server";

import { ActionResponse } from "@/lib/response";
import { sendVerificationMail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/token";
import { createNewUser, getUserByEmail } from "@/lib/user";
import { RegisterSchema, RegisterSchemaType } from "@/schema";
import bcrypt from "bcryptjs";

export const handleRegister = async (data: RegisterSchemaType) => {
  try {
    const validatedFields = RegisterSchema.safeParse(data);
    if (!validatedFields.success)
      return ActionResponse(0, "Invalid data provided", null, "register");

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await getUserByEmail(email);
    if (userExists)
      return ActionResponse(
        0,
        "Email address is already taken",
        null,
        "register"
      );

    const newUser = await createNewUser(name, email, hashedPassword);

    // TODO: Send verification token to users
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationMail(name, email, verificationToken.token);

    return ActionResponse(
      1,
      `Email verification link sent to ${email}`,
      newUser,
      "email-verification"
    );
  } catch (error) {
    console.log("🚀 ~ handleRegister ~ error:", error);
    throw error;
  }
};
