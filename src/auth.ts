import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    // async signIn({ user, account }) {
    //   if (account?.provider !== "credentials") return true;

    //   if (user.id) {
    //     const existingUser = await getUserById(user?.id);
    //     if (!existingUser?.emailVerified) return false;

    //     // if (existingUser.isTwoFactorEnabled) {
    //     //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
    //     //     existingUser.id
    //     //   );

    //     //   if (!twoFactorConfirmation) return false;

    //     //   // Delete two factor confirmation for next sign in
    //     //   // await prisma.twoFactorConfirmation.delete({
    //     //   //   where: { id: twoFactorConfirmation.id },
    //     //   // });
    //     // }
    //   }

    //   return true;
    // },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  ...authConfig,
});
