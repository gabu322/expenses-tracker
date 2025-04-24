import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/lib/validation/transactionValidation";
import { TransactionMethod, TransactionType } from "@/prisma/generated/client";

export async function POST(req: NextRequest) {
   try {
      const data = await req.json();
      const { userId, transaction } = data;

      // Validate data
      if (!userId || !transaction) {
         return NextResponse.json({ error: "UserId or Transaction not specified" }, { status: 400 });
      }

      const transactionData = createTransactionSchema.parse(transaction);

      // Find user by id and get cards
      const user = await prisma.user.findUnique({
         where: { id: userId },
         include: { card: true },
      });

      // If user don't exist, or card doesn't belong to user, return 404
      if (!user || !user.card.some((card) => card.id === transactionData.cardId)) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
      }

      // Create transaction
      const newTransaction = await prisma.transaction.create({
         data: {
            cardId: transactionData.cardId,
            method: transactionData.method as TransactionMethod,
            amount: transactionData.amount,
            date: new Date(transactionData.date),
            description: transactionData.description,
            type: transactionData.type as TransactionType,
         },
      });

      console.log("Transaction created", newTransaction);

      return NextResponse.json("Transaction created!", { status: 200 });
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}
