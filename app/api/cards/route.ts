import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CreateCardSchema } from "@/lib/validation/card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { ZodError } from "zod";

async function handler(req: NextRequest) {
   try {
      switch (req.method) {
         case "GET":
            const session = await getServerSession(authOptions);
            if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

            let cards = await prisma.card.findMany({
               where: { userId: session.user.id },
               include: { creditCard: true, debitCard: true, transaction: true },
            });

            // Calculate balance and usedLimit by transactions
            cards = cards.map((card) => {
               card.transaction.forEach((transaction) => {
                  const amount = transaction.amount * (transaction.type === "INCOME" ? 1 : -1);

                  if (card.debitCard && transaction.method === "DEBIT") {
                     card.debitCard.initialBalance = card.debitCard.initialBalance + amount;
                  } else if (card.creditCard && transaction.method === "CREDIT") {
                     card.creditCard.initialUsedLimit = card.creditCard.initialUsedLimit - amount;
                  }
               });

               return card;
            });

            const formattedCards = cards.map((card) => ({
               id: card.id,
               nickname: card.nickname,
               number: card.number ?? "",
               expiration: card.expiration ?? "",
               cvv: card.cvv ?? "",
               issuerId: card.issuerId,
               debit: !!card.debitCard,
               balance: card.debitCard?.initialBalance,
               credit: !!card.creditCard,
               limit: card.creditCard?.limit,
               usedLimit: card.creditCard?.initialUsedLimit,
            }));

            return NextResponse.json(formattedCards, { status: 200 });

         case "POST":
            const data = await req.json();
            const cardData = CreateCardSchema.parse(data);

            const newCard = await prisma.card.create({
               data: {
                  number: cardData.number,
                  nickname: cardData.nickname,
                  expiration: cardData.expiration || null,
                  cvv: cardData.cvv || null,
                  user: { connect: { id: cardData.userId } },
                  issuer: { connect: { id: cardData.issuerId } },
                  credit: cardData.credit,
                  creditCard: cardData.credit
                     ? {
                          create: {
                             limit: cardData.limit || 0,
                             initialUsedLimit: cardData.usedLimit || 0.0,
                          },
                       }
                     : undefined,
                  debit: cardData.debit,
                  debitCard: cardData.debit ? { create: { initialBalance: cardData.balance } } : undefined,
               },
            });

            return NextResponse.json(newCard, { status: 201 });
         default:
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof ZodError) return NextResponse.json({ errors: error.errors }, { status: 400 });
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as POST };
