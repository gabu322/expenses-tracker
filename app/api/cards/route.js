import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCardSchema } from "@/lib/validation/cardValidation";

export async function GET(req, res) {
   try {
      const cards = await prisma.card.findMany({
         include: {
            creditCard: true,
            debitCard: true,
         },
      });

      return NextResponse.json(cards, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req, res) {
   try {
      const data = await req.json();

      const cardData = createCardSchema.parse(data);

      const newCard = await prisma.card.create({
         data: {
            number: cardData.number,
            nickname: cardData.nickname,
            expiration: cardData.expiration || null,
            cvv: cardData.cvv || null,

            user: { connect: { id: cardData.userId } },

            // Used like this for consistency
            issuer: { connect: { id: cardData.issuerId } },

            // Add credit info if it's a credit card
            credit: cardData.credit,
            creditCard: cardData.credit
               ? {
                  create: {
                     creditLimit: cardData.creditLimit,
                     currentCredit: cardData.currentCredit || 0.0,
                  },
               }
               : undefined,

            // Add debit info if it's a debit card
            debit: cardData.debit,
            debitCard: cardData.debit
               ? { create: { balance: cardData.balance } }
               : undefined,
         },
      });

      return NextResponse.json(newCard, { status: 201 });
   } catch (error) {
      if (error.name === "ZodError") return NextResponse.json({ error: error.errors }, { status: 400 });

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
