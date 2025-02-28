import { getParams, ParamsType } from "@/utils/params";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";

async function handler(req: NextRequest, context: ParamsType) {
   const { id } = await getParams(context);

   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      switch (req.method) {
         case "GET":
            const transactions = await prisma.transaction.findUnique({
               where: { id },
            });

            const card = await prisma.card.findUnique({
               where: { id: transactions?.cardId },
               include: { debitCard: true, creditCard: true },
            });

            if (card?.userId !== session.user.id) throw new Error("Card does not belong to user");

            return NextResponse.json(transactions, { status: 200 });

         default:
            return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as POST };
