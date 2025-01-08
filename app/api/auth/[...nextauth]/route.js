import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
   session: {
      strategy: "jwt", // Use only JWT for sessions
      maxAge: 24 * 60 * 60,
   },
   providers: [
      CredentialsProvider({
         name: "Email and Password",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            });
            if (!user) throw new Error("Invalid email or password");

            // Compare passwords
            const isValidPassword = await bcrypt.compare(
               credentials.password,
               user.password
            );
            if (!isValidPassword) throw new Error("Invalid email or password");

            return {
               id: user.id,
               email: user.email,
               name: user.name,
            };
         },
      }),
   ],
   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            token.id = user.id;
            token.email = user.email;
            token.name = user.name;
         }
         return token;
      },

      async session({ session, token }) {
         if (token) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
         }

         return session;
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
