import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
   try {
      const users = await prisma.user.findMany();

      return NextResponse.json(users, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
