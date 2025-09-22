import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function GET() {
   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const users = await prisma.user.findUnique({
         where: { id: session.user.id },
      });

      return NextResponse.json(users, { status: 200 });
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}
