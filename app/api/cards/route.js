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
                       create: {
                          creditLimit: requestData.creditLimit,
                          currentCredit: requestData.currentCredit || 0.0,
                       },
                    }
                  : undefined,
            DebitCard:
               requestData.acceptsDebit && requestData.balance
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
      // Log detailed error to the console
      console.error("Error creating card:", error);

      // Detailed logging for debugging
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);

      // Return the error message and stack trace to the client (for debugging purposes)
      return new Response(
         JSON.stringify({
            error: "Error creating card",
            message: error.message,
            stack: error.stack,
         }),
         { status: 500 }
      );
   }
}

export async function DELETE(req, res) {
   try {
      const { id } = req.params;

      const deletedCard = await prisma.card.delete({
         where: {
            id: parseInt(id),
         },
      });

      return new Response(JSON.stringify(deletedCard), { status: 200 });
   } catch (error) {
      console.error("Error deleting card:", error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}
