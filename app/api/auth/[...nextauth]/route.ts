import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

interface User {
   id: string;
   email: string;
   name: string | null;
}

// Session type declaration
declare module "next-auth" {
   interface Session {
      user: {
         id: string;
         email: string;
         name: string | null;
      };
   }
}

export const authOptions: NextAuthOptions = {
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
         async authorize(credentials): Promise<User | null> {
            if (!credentials?.email || !credentials?.password) throw new Error("Email and password are required");

            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            });

            if (!user) throw new Error("Invalid email or password");

            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
            if (!isValidPassword) throw new Error("Invalid email or password");

            return {
               id: user.id.toString(),
               email: user.email,
               name: user.name,
            };
         },
      }),
   ],
   callbacks: {
      // TODO - Fix the any types
      async jwt({ token, user }: { token: any; user?: any }) {
         if (user) {
            token.id = user.id;
            token.email = user.email ?? "";
            token.name = user.name ?? "";
         }
         return token;
      },

      async session({ session, token }: { session: any; token: JWT }) {
         session.user = {
            id: token.id,
            email: token.email,
            name: token.name,
         };
         return session;
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
