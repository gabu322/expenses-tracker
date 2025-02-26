import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET last month's transactions of logged in user
// or transactions between start and end dates
export async function GET(req: NextRequest) {
   try {
      const session = await getServerSession(authOptions);

      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const searchParams = new URL(req.url).searchParams;
      const now = new Date();

      const startDate = searchParams.get("start") ? new Date(searchParams.get("start") as string) : new Date(now.getFullYear(), now.getMonth(), 1);
      const endDate = searchParams.get("end") ? new Date(searchParams.get("end") as string) : new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const whereClause = {
         userId: session.user.id,
         date: { gte: startDate, lte: endDate },
      };

      const transactions = await prisma.transaction.findMany({
         where: whereClause,
         orderBy: { date: "desc" },
      });

      return NextResponse.json(transactions, { status: 200 });
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}
