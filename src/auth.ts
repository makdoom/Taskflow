import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {},
      async authorize() {
        let user = null;

        // user = {
        //   id: "1",
        //   name: "Makdoom Shaikh",
        //   email: "makshaikh99@gmail.com",
        // };

        return user;
      },
    }),
  ],
});
