import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// GET last month's transactions of logged in user
// or transactions between start and end dates
export async function GET(request) {
   try {
      const session = await getServerSession(authOptions)

      const searchParams = new URL(request.url).searchParams
      const now = new Date()

      const startDate = searchParams.get('start')
         ? new Date(searchParams.get('start'))
         : new Date(now.getFullYear(), now.getMonth(), 1)
      const endDate = searchParams.get('end')
         ? new Date(searchParams.get('end'))
         : new Date(now.getFullYear(), now.getMonth() + 1, 0)

      const whereClause = {
         userId: session.user.id,
         date: { gte: startDate, lte: endDate }
      }

      const transactions = await prisma.transaction.findMany({
         where: whereClause,
         orderBy: { date: 'desc' }
      })

      return NextResponse.json(transactions, { status: 200 })
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
   }
}
