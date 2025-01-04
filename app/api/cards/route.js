import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

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
      const reqData = await req.json();

      const newCard = await prisma.card.create({
         data: {
            name: reqData.name,
            number: reqData.cardNumber,
            nickname: reqData.description || null,
            expiration: reqData.expiration || null,
            cvv: reqData.cvv || null,
            userId: 1, // Hardcoded for now

            // Used like this for consistency
            issuer: {
               connect: {
                  id: reqData.issuer
               },
            },

            // Add credit info if it's a credit card
            credit: requestData.credit,
            creditCard: reqData.credit
               ? {
                  create: {
                     creditLimit: reqData.creditLimit,
                     currentCredit: reqData.currentCredit || 0.0,
                  },
               }
               : undefined,

            // Add debit info if it's a debit card
            debit: requestData.debit,
            debitCard: reqData.debit
               ? { create: { balance: reqData.balance } }
               : undefined,
         },
      });

      return NextResponse.json(newCard, { status: 201 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
