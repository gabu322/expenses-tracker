import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/lib/validation/transactionValidation";

export async function GET(req, res) {
   try {
      const transactions = await prisma.transaction.findMany();

      return NextResponse.json(transactions, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}


export async function POST(req) {
   const userId = 1; // Hardcoded for now

   try {
      const data = await req.json();
      console.log(data);

      const transactionData = createTransactionSchema.parse(data);

      // Initiate a Prisma transaction to ensure data integrity
      const newTransaction = await prisma.$transaction(async (tx) => {
         // Check if the card exists
         const card = await tx.card.findUnique({
            where: { id: transactionData.cardId },
            include: { debitCard: true, creditCard: true },
         });

         if (!card) throw new Error("Card not found");

         // Determine if the amount should be added or subtracted
         const inverter = transactionData.type === "INCOME" ? 1 : -1;

         // Update card balance based on method
         if (transactionData.method === "DEBIT" && card.debit) {
            await tx.debitCard.update({
               where: { id: transactionData.cardId },
               data: { balance: { increment: transactionData.amount * inverter } },
            });
         } else if (transactionData.method === "CREDIT" && card.credit) {
            await tx.creditCard.update({
               where: { id: transactionData.cardId },
               data: {
                  currentCredit: { increment: transactionData.amount * inverter * -1 }, // Subtract for credit card
               },
            });
         }

         return tx.transaction.create({
            data: {
               ...transactionData,
               userId,
            },
         });
      });

      return NextResponse.json(newTransaction, { status: 201 });
   } catch (error) {
      if (error.name === "ZodError")
         return NextResponse.json({ errors: error.errors }, { status: 400 });

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
