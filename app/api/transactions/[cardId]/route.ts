import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/lib/validation/transactionValidation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { TransactionType, TransactionMethod } from "@/prisma/generated/client";
import { getParams, ParamsType } from "@/utils/params";
import { ZodError } from "zod";

async function handler(req: NextRequest, context: ParamsType) {
   const { cardId } = await getParams(context);

   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const card = await prisma.card.findUnique({
         where: { id: cardId },
         include: { debitCard: true, creditCard: true },
      });

      if (!card) throw new Error("Card not found");
      if (card.userId !== session.user.id) throw new Error("Card does not belong to user");

      switch (req.method) {
         case "GET":
            const transactions = await prisma.transaction.findMany({
               where: { cardId },
               orderBy: { date: "desc" },
            });

            return NextResponse.json(transactions, { status: 200 });

         case "POST":
            const data = await req.json();
            const transactionData = createTransactionSchema.parse(data);

            const inverter = transactionData.type === "INCOME" ? 1 : -1;

            const newTransaction = await prisma.$transaction(async (tx) => {
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
                  },
               });
            });

            return NextResponse.json(newTransaction, { status: 201 });

         default:
            return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof ZodError) return NextResponse.json({ errors: error.errors }, { status: 400 });
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as POST };
