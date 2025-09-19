import { TransactionType } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface TransactionProps {
   transaction: TransactionType;
   index: number;
   categoryName?: string;
}

export default function Transactions({ transaction, index, categoryName }: TransactionProps) {
   return (
      <div className={`flex flex-row gap-2 pl-3 pr-1 py-2 ${index > 0 ? "border-t-2" : ""}`} key={index}>
         <div className="grow flex flex-col gap-1 truncate">
            <span className="truncate font-bold">{transaction.description}</span>

            <span className="text-slate-400 text-[14px]">
               {transaction.method === "DEBIT" ? "Débito" : "Crédito"}
               {transaction.categoryId && " - " + categoryName}
            </span>
         </div>

         <div className="flex flex-col gap-1 text-right shrink-0">
            <span className={`font-bold ${transaction.type == "EXPENSE" ? "text-red-500" : "text-green-500"}`}>
               {transaction.type == "EXPENSE" && "-"}R${transaction.amount.toFixed(2)}
            </span>

            <span className="text-slate-400 text-[14px]">
               {new Date(transaction.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
               })}
            </span>
         </div>

         <Link href={`/transactions/${transaction.id}`}>
            <ChevronRight className="h-[34px] w-[34px] cursor-pointer shrink-0 -ml-1.5 -mx-1" />
         </Link>
      </div>
   );
}
