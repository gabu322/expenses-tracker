import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/lib/validation/transactionValidation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { TransactionType, TransactionMethod } from "@/prisma/generated/client";

// GET all transactions of logged in user
export async function GET() {
   try {
      const session = await getServerSession(authOptions);

      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const transactions = await prisma.transaction.findMany({
         where: { userId: session.user.id },
         orderBy: { date: "desc" },
      });

      return NextResponse.json(transactions, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

// POST a new transaction
export async function POST(req: NextRequest) {
   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const data = await req.json();
      const transactionData = createTransactionSchema.parse(data);

      const newTransaction = await prisma.$transaction(async (tx) => {
         const card = await tx.card.findUnique({
            where: { id: transactionData.cardId },
            include: { debitCard: true, creditCard: true },
         });

         if (!card) throw new Error("Card not found");
         if (card.userId !== session.user.id) throw new Error("Card does not belong to user");

         const inverter = transactionData.type === "INCOME" ? 1 : -1;

         if (transactionData.method === "DEBIT" && card.debit) {
            await tx.debitCard.update({
               where: { cardId: transactionData.cardId },
               data: { balance: { increment: transactionData.amount * inverter } },
            });
         } else if (transactionData.method === "CREDIT" && card.credit) {
            await tx.creditCard.update({
               where: { cardId: transactionData.cardId },
               data: { usedLimit: { increment: transactionData.amount * inverter * -1 } },
            });
         }

         return tx.transaction.create({
            data: {
               ...transactionData,
               type: transactionData.type as TransactionType,
               method: transactionData.method as TransactionMethod,
               userId: session.user.id,
            },
         });
      });

      return NextResponse.json(newTransaction, { status: 201 });
   } catch (error: any) {
      if (error.name === "ZodError") return NextResponse.json({ errors: error.errors }, { status: 400 });

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
