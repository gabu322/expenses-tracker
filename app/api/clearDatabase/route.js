// clear the database
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
   try {
      return;
      await prisma.creditCard.deleteMany();
      await prisma.debitCard.deleteMany();
      await prisma.transaction.deleteMany();
      await prisma.card.deleteMany();
      await prisma.issuer.deleteMany();
      await prisma.session.deleteMany();
      await prisma.user.deleteMany();

      console.log("Database cleared");

      // send user to the home page
      return NextResponse.redirect(new URL("/signup", req.url));
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
