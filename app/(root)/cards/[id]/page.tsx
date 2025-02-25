"use client";

import { useCurrentCard } from "./contex";
import IDollar from "@/public/icons/dynamic/dollar";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Page() {
   const { card, transactions, loading } = useCurrentCard();
   const [debitNet, setDebitNet] = useState<number>(0);

   useEffect(() => {
      const debitTransactions = transactions.filter((transaction) => transaction.method === "DEBIT");

      const net = debitTransactions.reduce((acc, transaction) => {
         if (transaction.type === "EXPENSE") return acc - transaction.amount;
         if (transaction.type === "INCOME") return acc + transaction.amount;
         return acc;
      }, 0);

      setDebitNet(net);
   }, [transactions]);

   if (loading)
      return (
         <div className="flex flex-col gap-4">
            <h2>Carregando...</h2>
         </div>
      );

   return (
      <div className="flex flex-col gap-4">
         <h2>{card?.nickname}</h2>

         <div className="w-full grid grid-cols-2 gap-4">
            {/* Debit card info */}
            {card?.debit && (
               <>
                  <div className="card h-16 flex-row-4">
                     <IDollar
                        className="h-10 w-10 p-1 bg-lime-200 rounded-md"
                        color="darkgreen"
                     />
                     <div className="flex flex-col justify-around">
                        <span>Saldo</span>
                        <CountUp
                           className="font-bold"
                           prefix="$"
                           end={card.balance || 0}
                           decimals={2}
                        />
                     </div>
                  </div>
                  <div className="card h-16 flex-row-4">
                     <IDollar
                        className={`h-10 w-10 p-1 rounded-md ${debitNet > 0 ? "bg-lime-200" : "bg-red-200"}`}
                        color={debitNet > 0 ? "darkgreen" : "red"}
                     />
                     <div className="flex flex-col justify-around">
                        <span>Total do mês</span>
                        <CountUp
                           className="font-bold"
                           prefix="$"
                           end={debitNet}
                           decimals={2}
                        />
                     </div>
                  </div>
               </>
            )}

            {/* Credit card info */}
            {card?.credit && (
               <>
                  <div className="card h-16 flex-row-4">
                     <IDollar
                        className="h-10 w-10 p-1 bg-lime-200 rounded-md"
                        color="darkgreen"
                     />
                     <div className="flex flex-col justify-around">
                        <span>Limite</span>
                        <CountUp
                           className="font-bold"
                           prefix="$"
                           end={card.limit || 0}
                           decimals={2}
                        />
                     </div>
                  </div>
                  <div className="card h-16 flex-row-4">
                     <IDollar
                        className="h-10 w-10 p-1 bg-red-200 rounded-md"
                        color="red"
                     />
                     <div className="flex flex-col justify-around">
                        <span>Limite gasto</span>
                        <CountUp
                           className="font-bold"
                           prefix="$"
                           end={card.usedLimit || 0}
                           decimals={2}
                        />
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}
