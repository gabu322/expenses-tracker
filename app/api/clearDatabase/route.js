// clear the database
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
   try {
      await prisma.creditCard.deleteMany();
      await prisma.debitCard.deleteMany();
      await prisma.transaction.deleteMany();
      await prisma.card.deleteMany();
      await prisma.issuer.deleteMany();
      await prisma.session.deleteMany();
      await prisma.user.deleteMany();
      return NextResponse.json({ message: "Database cleared" }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
