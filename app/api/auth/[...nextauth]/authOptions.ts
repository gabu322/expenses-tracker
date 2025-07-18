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

export const authOptions: NextAuthOptions = {
   session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
   },
   providers: [
      CredentialsProvider({
         name: "Email and Password",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials): Promise<User> {
            if (!credentials?.email || !credentials?.password) throw new Error("Email e senha são obrigatórios");

            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            });

            if (!user) throw new Error("Email inválido");

            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
            if (!isValidPassword) throw new Error("Senha incorreta");

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
