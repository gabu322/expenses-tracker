import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   const { id } = (await res.params);

   try {
      const card = await prisma.card.findUnique({
         where: {
            id: Number(id),
         },
         include: {
            CreditCard: true,
            DebitCard: true,
         },
      });

      return new Response(JSON.stringify(card), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}

export async function PUT(req, res) {
   const { id } = (await res.params);

   try {
      const requestData = await req.json();

      const updatedCard = await prisma.card.update({
         where: {
            id: Number(id),
         },
         data: {
            name: requestData.name,
            description: requestData.description,
            acceptsCredit: requestData.acceptsCredit,
            acceptsDebit: requestData.acceptsDebit,
            number: requestData.cardNumber,
            expiration: requestData.expiration,
            cvv: requestData.cvv,

            Issuer: { connect: { id: requestData.issuer } },
            CreditCard:
               requestData.acceptsCredit && requestData.creditLimit
                  ? {
                       update: {
                          creditLimit: requestData.creditLimit,
                          currentCredit: requestData.currentCredit || 0.0,
                       },
                    }
                  : undefined,
            DebitCard:
               requestData.acceptsDebit && requestData.balance
                  ? {
                       update: {
                          balance: requestData.balance,
                       },
                    }
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
   const { id } = (await res.params);

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
