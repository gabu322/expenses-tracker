import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
   const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

   if (!token) {
      return NextResponse.redirect(new URL("/signin", request.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: [
      "/((?!_next|api/auth|signin|signup).*)",
   ],
};
