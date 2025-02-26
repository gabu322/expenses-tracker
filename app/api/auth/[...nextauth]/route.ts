import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
