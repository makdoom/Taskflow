import GitHub from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schema";
import { getUserByEmail } from "./lib/user";
import bcrypt from "bcryptjs";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    GitHub,
    credentials({
      credentials: {},
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (isPasswordMatched) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;