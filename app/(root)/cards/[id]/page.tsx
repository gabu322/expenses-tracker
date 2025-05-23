"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useCards } from "@/app/(root)/CardContext";
import axios from "axios";
import { ChevronRight, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

interface CurrentValuesType {
   balance: number;
   net: number;
   limit: number;
   usedLimit: number;
}

export default function Page() {
   const { id } = useParams();
   const router = useRouter();
   const { cards, transactions, setTransactions } = useCards();
   const [monthTotal, setMonthTotal] = useState<number>(0);
   const [currentCardIndex, setCurrentCardIndex] = useState<number>(-1);
   const [currentValues, setCurrentValues] = useState<CurrentValuesType>({
      balance: 0,
      net: 0,
      limit: 0,
      usedLimit: 0,
   });

   useEffect(() => {
      const currentCard = cards.findIndex((card) => card.id === id);
      if (currentCard === -1) return;
      setCurrentCardIndex(currentCard);
   }, [id, cards]);

   useEffect(() => {
      const fetchTransactions = async () => {
         try {
            const response = await axios.get(`/api/transactions`, { params: { cardId: id } });
            setTransactions(response.data);
         } catch (error) {
            console.error("Failed to fetch transactions:", error);
         }
      };

      fetchTransactions();
   }, [id]);

   useEffect(() => {
      const currentDate = new Date();

      const debitTransactions = transactions?.filter((transaction) => {
         const transactionDate = new Date(transaction.date);
         return (
            transaction.method === "DEBIT" &&
            transactionDate.getMonth() === currentDate.getMonth() &&
            transactionDate.getFullYear() === currentDate.getFullYear()
         );
      });

      let net = 0;
      if (debitTransactions) {
         net = debitTransactions.reduce((acc, transaction) => {
            if (transaction.type === "EXPENSE") return acc - transaction.amount;
            if (transaction.type === "INCOME") return acc + transaction.amount;
            return acc;
         }, 0);
      }

      setMonthTotal(net);
   }, [transactions]);

   return (
      <div className="flex flex-col gap-4">
         <h1>
            {cards[currentCardIndex]?.nickname ? "Cartão: " + cards[currentCardIndex]?.nickname : "Nome do cartão"}
         </h1>

         <div className="w-full grid grid-cols-2 gap-4">
            {/* Debit card info */}
            {cards[currentCardIndex]?.debit && (
               <>
                  <div className="card p-3 h-16 flex-row-4">
                     <DollarSign className="h-10 w-10 p-1 bg-lime-200 rounded-md text-green-800" />

                     <div className="flex flex-col justify-around">
                        <span>Saldo</span>
                        <CountUp
                           className="font-bold"
                           prefix="R$"
                           start={currentValues.balance}
                           end={cards[currentCardIndex]?.balance || 0}
                           onEnd={() =>
                              setCurrentValues((prev) => ({
                                 ...prev,
                                 balance: cards[currentCardIndex]?.balance || 0,
                                 net: monthTotal,
                              }))
                           }
                           decimals={2}
                        />
                     </div>
                  </div>
                  <div className="card p-3 h-16 flex-row-4">
                     <DollarSign
                        className={`h-10 w-10 p-1 rounded-md ${monthTotal > 0 ? "bg-lime-200 text-green-800" : "bg-red-200 text-red-700"}`}
                     />
                     <div className="flex flex-col justify-around">
                        <span>Total do mês</span>
                        <CountUp
                           className="font-bold"
                           prefix="R$"
                           start={currentValues.net}
                           end={monthTotal}
                           onEnd={() =>
                              setCurrentValues((prev) => ({
                                 ...prev,
                                 net: monthTotal,
                                 balance: cards[currentCardIndex]?.balance || 0,
                              }))
                           }
                           decimals={2}
                        />
                     </div>
                  </div>
               </>
            )}

            {/* Credit card info */}
            {cards[currentCardIndex]?.credit && (
               <>
                  <div className="card p-3 h-16 flex-row-4">
                     <DollarSign className="h-10 w-10 p-1 bg-lime-200 rounded-md text-green-800" />
                     <div className="flex flex-col justify-around">
                        <span>Limite</span>
                        <CountUp
                           className="font-bold"
                           prefix="R$"
                           start={currentValues.limit}
                           end={cards[currentCardIndex]?.limit || 0}
                           onEnd={() =>
                              setCurrentValues((prev) => ({ ...prev, limit: cards[currentCardIndex]?.limit || 0 }))
                           }
                           decimals={2}
                        />
                     </div>
                  </div>
                  <div className="card p-3 h-16 flex-row-4">
                     <DollarSign className="h-10 w-10 p-1 bg-red-200 rounded-md text-red-700" />

                     <div className="flex flex-col justify-around">
                        <span>Limite gasto</span>
                        <CountUp
                           className="font-bold"
                           prefix="R$"
                           start={currentValues.usedLimit}
                           end={cards[currentCardIndex]?.usedLimit || 0}
                           onEnd={() =>
                              setCurrentValues((prev) => ({
                                 ...prev,
                                 usedLimit: cards[currentCardIndex]?.usedLimit || 0,
                              }))
                           }
                           decimals={2}
                        />
                     </div>
                  </div>
               </>
            )}
         </div>

         {/* Transactions */}
         <h2>Transações</h2>

         <div className="flex flex-col card py-1">
            {transactions
               ?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
               .map((transaction, index) => (
                  <div className={`flex flex-row gap-2 pl-3 pr-1 py-2 ${index > 0 ? "border-t-2" : ""}`} key={index}>
                     <div className="flex flex-col gap-1 w-full">
                        <div className="w-full flex flex-row justify-between font-bold">
                           <span>{transaction.description}</span>

                           <span className={transaction.type == "EXPENSE" ? "text-red-500" : "text-green-400"}>
                              {transaction.type == "EXPENSE" && "-"}R${transaction.amount.toFixed(2)}
                           </span>
                        </div>

                        <div className="w-full flex flex-row justify-between text-slate-400 text-[14px]">
                           <div>{transaction.method === "DEBIT" ? "Débito" : "Crédito"}</div>

                           <div>
                              {new Date(transaction.date).toLocaleDateString("pt-BR", {
                                 day: "2-digit",
                                 month: "2-digit",
                                 year: "2-digit",
                              })}
                           </div>
                        </div>
                     </div>

                     <ChevronRight
                        className="h-[34px] w-[34px] cursor-pointer"
                        onClick={() => router.push(`/transactions/${transaction.id}`)}
                     />
                  </div>
               ))}
         </div>
      </div>
   );
}
