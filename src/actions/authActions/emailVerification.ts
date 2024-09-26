"use server";

import { prisma } from "@/lib/prisma";
import { ActionResponse } from "@/lib/response";
import { getUserByEmail } from "@/lib/user";
import { getVerificationTokenByToken } from "@/lib/verification-token";

export const emailVerification = async (token: string) => {
  try {
    console.log({ token });
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken)
      return ActionResponse(0, "Token does not exists", null, "email-verified");

    if (existingToken.expires < new Date())
      return ActionResponse(0, "The token has expired", null, "email-verified");

    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser)
      return ActionResponse(
        0,
        "Email does not exists !",
        null,
        "email-verified"
      );

    await prisma.user.update({
      where: { id: existingUser.id },
      data: { emailVerified: new Date(), email: existingToken.email },
    });

    await prisma.verificationToken.delete({ where: { id: existingToken.id } });
    console.log("deleted token");
    return ActionResponse(
      1,
      "Email verified successfully",
      null,
      "email-verified"
    );
  } catch (error) {
    throw error;
  }
};
