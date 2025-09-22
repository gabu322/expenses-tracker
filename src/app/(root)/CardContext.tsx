"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { CardType, CategoryType, TransactionType } from "@/lib/types";

interface CardContextType {
   cards: CardType[];
   setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
   fetchCards: () => Promise<void>;
   transactions: TransactionType[] | null;
   setTransactions: React.Dispatch<React.SetStateAction<TransactionType[] | null>>;
   categories: CategoryType[];
   isLoading: boolean;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
   const { data: session } = useSession();
   const [cards, setCards] = useState<CardType[]>([]);
   const [transactions, setTransactions] = useState<TransactionType[] | null>(null);
   const [categories, setCategories] = useState<CategoryType[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const fetchCards = async () => {
      setIsLoading(true);

      try {
         const response = await axios.get("/api/cards");
         setCards(response.data);
      } catch (error) {
         console.error("Failed to fetch cards:", error);
      } finally {
         setIsLoading(false);
      }
   };

   const fetchCategories = async () => {
      setIsLoading(true);

      try {
         const response = await axios.get("/api/categories");
         setCategories(response.data);
      } catch (error) {
         console.error("Failed to fetch categories:", error);
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      if (!session?.user) return;

      fetchCards();
      fetchCategories();

      setIsLoading(false);
   }, [session]);

   return (
      <CardContext.Provider
         value={{ cards, setCards, fetchCards, transactions, setTransactions, categories, isLoading }}
      >
         {children}
      </CardContext.Provider>
   );
};

export function useCards() {
   const context = useContext<CardContextType | null>(CardContext);

   if (!context) throw new Error("useCards must be used within a CardProvider");

   return context;
}
