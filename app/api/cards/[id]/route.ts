import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateCardSchema } from "@/lib/validation/cardValidation.js";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getParams, ParamsType } from "@/utils/params";

async function handler(req: NextRequest, context: ParamsType) {
   const { id } = getParams(context);

   try {
      const session = await getServerSession(authOptions);
      if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const card = await prisma.card.findUnique({
         where: { id },
         include: { creditCard: true, debitCard: true },
      });
      if (!card) return NextResponse.json({ error: "Card not found" }, { status: 404 });

      if (card.userId !== session.user.id) return NextResponse.json({ error: "Card does not belong to user" }, { status: 401 });

      switch (req.method) {
         case "GET":
            // Return card data as a 1d object
            const cardData = {
               ...card,
               issuerId: card.issuerId.toString(),
               credit: card.creditCard,
               debit: card.debitCard,
               creditLimit: card.creditCard?.limit,
               currentCredit: card.creditCard?.usedLimit,
               balance: card.debitCard?.balance,
            };

            return NextResponse.json(cardData, { status: 200 });

         case "PUT":
            const requestData = await req.json();
            const updatedCardData = updateCardSchema.parse(requestData);

            const updatedCard = await prisma.card.update({
               where: { id },
               data: {
                  nickname: updatedCardData.nickname,
                  number: updatedCardData.number,
                  expiration: updatedCardData.expiration,
                  cvv: updatedCardData.cvv,
                  issuer: { connect: { id: updatedCardData.issuerId } },
                  credit: updatedCardData.credit,
                  creditCard: updatedCardData.credit
                     ? {
                          update: {
                             limit: updatedCardData.limit,
                             usedLimit: updatedCardData.usedLimit || 0.0,
                          },
                       }
                     : undefined,
                  debit: updatedCardData.debit,
                  debitCard: updatedCardData.debit ? { update: { balance: updatedCardData.balance } } : undefined,
               },
            });

            return NextResponse.json(updatedCard, { status: 200 });

         case "DELETE":
            await prisma.card.delete({
               where: { id },
            });

            return NextResponse.json({ message: "Card deleted" }, { status: 200 });
         default:
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
      }
   } catch (error: any) {
      if (error.name === "ZodError") return NextResponse.json({ errors: error.errors }, { status: 400 });

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export { handler as GET, handler as PUT, handler as DELETE };
