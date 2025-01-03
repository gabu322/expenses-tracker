import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   try {
      const transactions = await prisma.transaction.findMany();

      return new Response(JSON.stringify(transactions), { status: 200 });
   } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 });
   }
}

export async function POST(req, res) {
   const transaction = await req.json();
   const formattedDate = new Date(transaction.date).toISOString();

   const userId = 1; // Hardcoded for now

   try {
      // Initiate a prisma transaction to ensure data integrity
      await prisma.$transaction(async (tx) => {

         // Fetch the card to check if it exists
         const card = await tx.card.findUnique({
            where: { id: transaction.cardId },
            include: { debitCard: true, creditCard: true }
         });

         if (!card) throw new Error("Card not found", { status: 404 });

         // Check if the card belongs to the user
         // if (card.userId != userId) throw new Error("Unauthorized access to card", { status: 403 });

         // Error if the transaction type is not valid
         if (transaction.type !== "income" && transaction.type !== "expense") throw new Error("Invalid transaction type");

         // Variable to determine if the amount should be added or subtracted, based on the transaction type
         let inverter = (transaction.type === "income") ? 1 : -1;

         // Increment or decrement the card balance based on the transaction method
         if (transaction.method === 'debit' && card.debit) {
            await tx.debitCard.update({
               where: { id: transaction.cardId },
               data: { balance: { increment: transaction.amount * inverter } },
            });
         } else if (transaction.method === 'credit' && card.credit) {
            await tx.creditCard.update({
               where: { id: transaction.cardId },
               data: { currentCredit: { increment: transaction.amount * inverter * -1 } }, // Negative increment to subtract from the credit card
            });
         } else {
            throw new Error("Invalid transaction transaction.method");
         }

         // Finally, create the transaction
         await tx.transaction.create({
            data: {
               type: transaction.type.toUpperCase(),
               amount: parseFloat(transaction.amount.toFixed(2)),
               method: transaction.method.toUpperCase(),
               date: formattedDate,
               description: transaction.description,
               cardId: transaction.cardId,
               userId,
            }
         });

      }); // End of prisma transaction

      return new Response("Transaction added", { status: 201 });
   } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 });
   }
}
