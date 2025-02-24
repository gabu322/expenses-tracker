import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const transactions = await prisma.transaction.findMany({
         where: {
            card: {
               userId: session.user.id,
            },
         },
      });

      return NextResponse.json(transactions, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
