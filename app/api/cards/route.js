import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   try {
      const cards = await prisma.card.findMany({
         include: {
            CreditCard: true,
            DebitCard: true,
         },
      });

      return new Response(JSON.stringify(cards), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}

export async function POST(req, res) {
   try {
      const requestData = await req.json();

      const newCard = await prisma.card.create({
         data: {
            name: requestData.name,
            description: requestData.description || null,
            number: requestData.cardNumber,
            expiration: requestData.expiration || null,
            cvv: requestData.cvv || null,

            Issuer: {
               connect: {
                  id: requestData.issuer,
               },
            },

            acceptsCredit: requestData.acceptsCredit,
            CreditCard: requestData.acceptsCredit
               ? {
                    create: {
                       creditLimit: requestData.creditLimit,
                       currentCredit: requestData.currentCredit || 0.0,
                    },
                 }
               : undefined,

            acceptsDebit: requestData.acceptsDebit,
            DebitCard: requestData.acceptsDebit
               ? {
                    create: {
                       balance: requestData.balance,
                    },
                 }
               : undefined,
         },
      });

      return new Response(JSON.stringify(newCard), { status: 201 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}
