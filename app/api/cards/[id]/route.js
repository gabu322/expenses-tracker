import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   const { id } = await res.params;

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

      return new Response(JSON.stringify(card), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}

export async function PUT(req, res) {
   const { id } = await res.params;

   try {
      const requestData = await req.json();
      console.log(requestData);


      const updatedCard = await prisma.card.update({
         where: {
            id: Number(id),
         },
         data: {
            name: requestData.name,
            number: requestData.cardNumber,
            nickname: requestData.description,
            expiration: requestData.expiration,
            cvv: requestData.cvv,
            // userId: 1, // Hardcoded for now

            // Used like this for consistency
            issuer: { connect: { id: requestData.issuer } },

            credit: requestData.credit,
            creditCard: requestData.credit
               ? {
                  update: {
                     creditLimit: requestData.creditLimit,
                     currentCredit: requestData.currentCredit || 0.0,
                  },
               }
               : undefined,

            debit: requestData.debit,
            debitCard: requestData.debit
               ? { update: { balance: requestData.balance, }, }
               : undefined,
         },
      });

      return new Response(JSON.stringify(updatedCard), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}

export async function DELETE(req, res) {
   const { id } = await res.params;

   try {
      await prisma.card.delete({
         where: {
            id: Number(id),
         },
      });

      return new Response(null, { status: 204 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}
