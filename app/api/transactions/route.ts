import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";
import { TransactionMethod, TransactionType } from "@/prisma/generated/client";
import { CreateTransactionSchema } from "@/lib/validation/transaction";

async function handler(req: NextRequest) {
   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const searchParams = req.nextUrl.searchParams;

      switch (req.method) {
         case "GET":
            const cardId = searchParams.get("cardId") ?? undefined;
            const where = { cardId };

            const transactions = await prisma.transaction.findMany({
               where,
               orderBy: { date: "desc" },
            });

            return NextResponse.json(transactions, { status: 200 });

         case "POST":
            const data = await req.json();
            const transactionData = CreateTransactionSchema.parse(data);

            const card = await prisma.card.findUnique({
               where: { id: transactionData.cardId },
               include: { debitCard: true, creditCard: true },
            });

            if (!card) throw new Error("Card not found");
            if (card.userId !== session.user.id) throw new Error("Card does not belong to user");

            const newTransaction = await prisma.transaction.create({
               data: {
                  cardId: transactionData.cardId,
                  method: transactionData.method as TransactionMethod,
                  amount: transactionData.amount,
                  date: new Date(transactionData.date),
                  description: transactionData.description,
                  type: transactionData.type as TransactionType,
                  categoryId: transactionData.categoryId,
               },
            });

            return NextResponse.json(newTransaction, { status: 201 });
         default:
            return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as POST };
