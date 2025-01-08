import { NextResponse } from "next/server";

export async function POST(req, res) {
   try {
      // Create a response object for redirect
      const response = NextResponse.redirect(new URL('/signin', req.url));

      // Clear the session and CSRF cookies
      response.cookies.set('next-auth.session-token', '', { expires: new Date(0) });
      response.cookies.set('next-auth.csrf-token', '', { expires: new Date(0) });

      // Set CORS headers
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

      return response;
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
