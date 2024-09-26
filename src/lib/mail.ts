import { verificationEmailTemplateRenderer } from "@/components/auth/verification-email-template";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS_KEY?.toString(),
  },
});

export const sendVerificationMail = async (
  name: string,
  email: string,
  token: string
) => {
  const confirmationLink = `http://localhost:3000/auth/email-verification?token=${token}`;
  const verificationEmailTemplate = await verificationEmailTemplateRenderer(
    name,
    confirmationLink
  );

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Email Verification",
    text: "Verify your email address",
    html: verificationEmailTemplate,
  });
};
