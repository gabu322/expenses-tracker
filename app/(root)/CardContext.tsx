"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CardType, TransactionType } from "@/utils/types";
import axios from "axios";

interface CardContextType {
   cards: CardType[];
   setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
   fetchCards: () => Promise<void>;
   transactions: TransactionType[] | null;
   setTransactions: React.Dispatch<React.SetStateAction<TransactionType[] | null>>;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
   const { data: session } = useSession();
   const [cards, setCards] = useState<CardType[]>([]);
   const [transactions, setTransactions] = useState<TransactionType[] | null>(null);

   const fetchCards = async () => {
      try {
         const response = await axios.get("/api/cards");
         setCards(response.data);
      } catch (error) {
         console.error("Failed to fetch cards:", error);
      }
   };

   useEffect(() => {
      if (window.location.pathname === "/") return; // Return early if the path is "/"

      if (session?.user) fetchCards(); // Fetch user's cards after login
   }, [session]);

   return <CardContext.Provider value={{ cards, setCards, fetchCards, transactions, setTransactions }}>{children}</CardContext.Provider>;
};

export function useCards() {
   const context = useContext<CardContextType | null>(CardContext);

   if (!context) throw new Error("useCards must be used within a CardProvider");

   return context;
}
