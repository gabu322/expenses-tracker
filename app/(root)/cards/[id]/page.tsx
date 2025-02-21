"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

import IDollar from "@/public/icons/dynamic/dollar";
import CountUp from "react-countup";

interface Card {
   id: string;
   nickname: string;
   debit: boolean;
   credit: boolean;
   debitCard?: {
      balance: number;
   };
   creditCard?: {
      creditLimit: number;
      currentCredit: number;
   };
}

interface Transaction {
   id: string;
   cardId: string;
   date: string;
   amount: number;
   method: "DEBIT" | "CREDIT";
   type: "EXPENSE" | "INCOME";
}

export default function Page() {
   const { id } = useParams();
   const [card, setCard] = useState<Card>();
   const [transactions, setTransactions] = useState<Transaction[]>([]);
   const [debitNet, setDebitNet] = useState<number>(0);

   useEffect(() => {
      const fetchCardData = async () => {
         try {
            const cardResponse = await axios.get(`/api/cards/${id}`);
            setCard(cardResponse.data);
         } catch (error) {
            console.error(error);
         }
      };

      const fetchTransactions = async () => {
         try {
            const transactionsResponse = await axios.get<Transaction[]>("/api/transactions");
            const cardTransactions = transactionsResponse.data.filter((transaction) => transaction.cardId == id);
            setTransactions(cardTransactions);

            // Filter debit transactions and calculate net amount
            const debitTransactions = cardTransactions.filter((transaction) => transaction.method === "DEBIT");

            const netAmount = debitTransactions.reduce((net, transaction) => {
               return net + (transaction.type == "INCOME" ? transaction.amount : -transaction.amount);
            }, 0);

            setDebitNet(netAmount);
         } catch (error) {
            console.error(error);
         }
      };

      fetchCardData();
      fetchTransactions();
   }, [id]);

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
                           end={card.debitCard?.balance || 0}
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
                        <span>Limite de crédito</span>

                        <CountUp
                           className="font-bold"
                           prefix="$"
                           end={card.creditCard?.creditLimit || 0}
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
                           end={card.creditCard?.currentCredit || 0}
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
