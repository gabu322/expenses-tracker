import { prisma } from "@/lib/prisma";
import ClientPage from "./_components/client-page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { TransactionSchema } from "@/lib/validation/transaction";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const session = await getServerSession(authOptions);
   if (!id || !session) return null;

   const transaction = await prisma.transaction.findUnique({
      where: {
         id,
         card: { userId: session.user.id },
      },
   });
   if (!transaction) return null;

   const formattedTransaction = TransactionSchema.parse({ ...transaction, date: transaction.date.toISOString() });

   return <ClientPage initialTransaction={formattedTransaction} />;
}
