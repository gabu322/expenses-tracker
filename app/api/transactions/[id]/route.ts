import { getParams, ParamsType } from "@/utils/params";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { prisma } from "@/lib/prisma";
import { createTransactionSchema } from "@/lib/validation/transactionValidation";
import { TransactionMethod, TransactionType } from "@/prisma/generated/client";

async function handler(req: NextRequest, context: ParamsType) {
   const { id } = await getParams(context);

   try {
      const session = await getServerSession(authOptions);
      if (!session || !session.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      switch (req.method) {
         case "GET":
            const transaction = await prisma.transaction.findUnique({
               where: {
                  id,
                  card: { userId: session.user.id },
               },
            });

            if (!transaction) throw new Error("Transaction not found");

            return NextResponse.json(transaction, { status: 200 });

         case "PUT":
            const data = await req.json();
            const transactionData = createTransactionSchema.parse(data);

            const updatedTransaction = await prisma.transaction.update({
               where: { id },
               data: {
                  ...transactionData,
                  type: transactionData.type as TransactionType,
                  method: transactionData.method as TransactionMethod,
               },
            });

            return NextResponse.json(updatedTransaction, { status: 200 });
         default:
            return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as PUT };
