import NextAuth from "next-auth";
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";

interface User {
   id: string;
   email: string;
   name: string | null;
}

declare module "next-auth" {
   interface Session {
      user: {
         id: string;
         email: string;
         name: string | null;
      };
   }
}

const authOptions: NextAuthOptions = {
   session: {
      strategy: "jwt",
      maxAge: 24 * 60 * 60,
   },
   providers: [
      CredentialsProvider({
         name: "Email and Password",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials): Promise<User> {
            if (!credentials?.email || !credentials?.password) throw new Error("Email and password are required");

            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            });

            if (!user) throw new Error("Invalid email or password");

            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
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
            token.email = user.email ?? "";
            token.name = user.name ?? "";
         }
         return token;
      },
      async session({ session, token }: { session: Session; token: JWT }) {
         session.user = {
            id: token.id as string,
            email: token.email as string,
            name: token.name as string,
         };
         return session;
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
