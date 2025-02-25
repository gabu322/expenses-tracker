import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCardSchema } from "@/lib/validation/cardValidation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { ZodError } from "zod";

async function handler(req: NextRequest) {
   try {
      switch (req.method) {
         case "GET":
            const session = await getServerSession(authOptions);
            if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

            const cards = await prisma.card.findMany({
               where: { userId: session.user.id },
               include: { creditCard: true, debitCard: true },
            });

            const formattedCards = cards.map((card) => ({
               id: card.id,
               nickname: card.nickname,
               number: card.number ?? "",
               expiration: card.expiration ?? "",
               cvv: card.cvv ?? "",
               issuerId: card.issuerId,
               debit: !!card.debitCard,
               balance: card.debitCard?.balance,
               credit: !!card.creditCard,
               limit: card.creditCard?.limit,
               usedLimit: card.creditCard?.usedLimit,
            }));

            return NextResponse.json(formattedCards, { status: 200 });

         case "POST":
            const data = await req.json();
            const cardData = createCardSchema.parse(data);

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
                             usedLimit: cardData.usedLimit || 0.0,
                          },
                       }
                     : undefined,
                  debit: cardData.debit,
                  debitCard: cardData.debit ? { create: { balance: cardData.balance } } : undefined,
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
