"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CardType } from "@/utils/types";
import axios from "axios";

interface CardContextType {
   cards: CardType[];
   setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
   const { data: session } = useSession();
   const [cards, setCards] = useState<CardType[]>([]);

   useEffect(() => {
      const fetchCards = async () => {
         try {
            const response = await axios.get("/api/cards");
            setCards(response.data);
         } catch (error) {
            console.error("Failed to fetch cards:", error);
         }
      };

      if (session?.user) fetchCards(); // Fetch user's cards after login
   }, [session]);

   return <CardContext.Provider value={{ cards, setCards }}>{children}</CardContext.Provider>;
};

export function useCards() {
   const context = useContext<CardContextType | null>(CardContext);

   if (!context) throw new Error("useCards must be used within a CardProvider");

   return context;
}
