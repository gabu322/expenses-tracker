import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { CardType, TransactionType } from "@/utils/types/index";
import { useCards } from "../../contex";

interface CurrentCardContextType {
   card: CardType | null;
   setCard: React.Dispatch<React.SetStateAction<CardType | null>>;
   transactions: TransactionType[];
   setTransactions?: React.Dispatch<React.SetStateAction<TransactionType[]>>;
   loading: boolean;
}

const CurrentCardContext = createContext<CurrentCardContextType | null>(null);

export function CurrentCardProvider({ children }: { children: React.ReactNode }) {
   const { id } = useParams();
   const { cards } = useCards();
   const [card, setCard] = useState<CardType | null>(null);
   const [transactions, setTransactions] = useState<TransactionType[]>([]);
   const [loading, setLoading] = useState(true);

   const fetchTransactions = async () => {
      try {
         const response = await axios.get(`/api/transactions/${id}`);
         setTransactions(response.data);
         setLoading(false);
      } catch (error) {
         console.error("Failed to fetch transactions:", error);
      }
   };

   useEffect(() => {
      const foundCard = cards.find((card) => card.id === id || null);

      if (id && foundCard) {
         setCard(foundCard);
         fetchTransactions();
      }
   }, [id, cards]);

   return <CurrentCardContext.Provider value={{ card, setCard, transactions, setTransactions, loading }}>{children}</CurrentCardContext.Provider>;
}

export function useCurrentCard() {
   const context = useContext<CurrentCardContextType | null>(CurrentCardContext);

   if (!context) throw new Error("useCurrentCard must be used within a CurrentCardProvider");

   return context;
}
