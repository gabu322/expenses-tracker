import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateCardSchema } from "@/lib/validation/cardValidation.js";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getIdFromRequest } from "@/utils/functions/api/getIdFromRequest";

export async function GET(req: NextRequest) {
   const { id, error } = getIdFromRequest(req);
   if (error) return error;

   try {
      const card = await prisma.card.findUnique({
         where: {
            id: Number(id),
         },
         include: {
            creditCard: true,
            debitCard: true,
         },
      });

      return NextResponse.json(card, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function PUT(req: NextRequest) {
   const { id, error } = getIdFromRequest(req);
   if (error) return error;

   try {
      const session = await getServerSession(authOptions);

      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const data = await req.json();
      const cardData = updateCardSchema.parse(data);

      if (cardData.userId !== session.user.id) throw new Error("Card does not belong to user");

      const updatedCard = await prisma.card.update({
         where: {
            id: Number(id),
         },
         data: {
            nickname: cardData.nickname,
            number: cardData.number,
            expiration: cardData.expiration,
            cvv: cardData.cvv,
            // userId: 1, // Hardcoded for now

            // Used like this for consistency
            issuer: { connect: { id: cardData.issuerId } },

            credit: cardData.credit,
            creditCard: cardData.credit
               ? {
                    update: {
                       creditLimit: cardData.creditLimit,
                       currentCredit: cardData.currentCredit || 0.0,
                    },
                 }
               : undefined,

            debit: cardData.debit,
            debitCard: cardData.debit ? { update: { balance: cardData.balance } } : undefined,
         },
      });

      return NextResponse.json(updatedCard, { status: 200 });
   } catch (error: any) {
      if (error.name === "ZodError") return NextResponse.json({ error: error.errors }, { status: 400 });

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function DELETE(req: NextRequest) {
   const { id, error } = getIdFromRequest(req);
   if (error) return error;

   try {
      await prisma.card.delete({
         where: {
            id,
         },
      });

      return NextResponse.json({ message: "Card deleted" }, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
