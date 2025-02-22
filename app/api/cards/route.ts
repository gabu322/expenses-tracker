import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCardSchema } from "@/lib/validation/cardValidation";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// GET all cards of logged in user
export async function GET() {
   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const cards = await prisma.card.findMany({
         where: { userId: session.user.id },
         include: { creditCard: true, debitCard: true },
      });

      const formattedCards = cards.map((card) => ({
         ...card,
         issuerId: card.issuerId.toString(),
         credit: card.creditCard,
         debit: card.debitCard,
         limit: card.creditCard?.limit,
         usedLimit: card.creditCard?.usedLimit,
         balance: card.debitCard?.balance,
      }));

      return NextResponse.json(formattedCards, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

// POST a new card
export async function POST(req: NextRequest) {
   const data = await req.json();

   try {
      console.log(data);
      const cardData = createCardSchema.parse(data);

      const newCard = await prisma.card.create({
         data: {
            number: cardData.number,
            nickname: cardData.nickname,
            expiration: cardData.expiration || null,
            cvv: cardData.cvv || null,
            user: { connect: { id: cardData.userId } },
            issuer: { connect: { id: cardData.issuerId } },

            // Add credit info if it's a credit card
            credit: cardData.credit,
            creditCard: cardData.credit
               ? {
                    create: {
                       limit: cardData.limit || 0,
                       usedLimit: cardData.usedLimit || 0.0,
                    },
                 }
               : undefined,

            // Add debit info if it's a debit card
            debit: cardData.debit,
            debitCard: cardData.debit ? { create: { balance: cardData.balance } } : undefined,
         },
      });

      return NextResponse.json(newCard, { status: 201 });
   } catch (error: any) {
      if (error.name === "ZodError") return NextResponse.json({ error: error.errors }, { status: 400 });

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
