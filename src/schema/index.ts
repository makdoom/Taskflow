import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email id" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be atleast 6 characters" }),
});
export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    name: z.string({ required_error: "Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Enter a valid email id" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be atleast 6 characters" })
      .max(32, { message: "Password must be less than 32 characters" }),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
