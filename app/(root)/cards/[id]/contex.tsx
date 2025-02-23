"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { CardType, TransactionType } from "@/utils/types/index";

interface CurrentCardContextType {
   card?: CardType;
   transactions: TransactionType[];
   debitNet: number;
}

const CurrentCardContext = createContext<CurrentCardContextType | null>(null);

export function CurrentCardProvider({ children }: { children: React.ReactNode }) {
   const { id } = useParams();
   const [card, setCard] = useState<CardType>();
   const [transactions, setTransactions] = useState<TransactionType[]>([]);
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
            const transactionsResponse = await axios.get<TransactionType[]>("/api/transactions");
            const cardTransactions = transactionsResponse.data.filter((transaction) => transaction.cardId == id);
            setTransactions(cardTransactions);

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

   return <CurrentCardContext.Provider value={{ card, transactions, debitNet }}>{children}</CurrentCardContext.Provider>;
}

export function useCurrentCard() {
   const context = useContext<CurrentCardContextType | null>(CurrentCardContext);

   if (!context) throw new Error("useCurrentCard must be used within a CurrentCardProvider");

   return context;
}
