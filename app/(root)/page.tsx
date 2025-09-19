"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "@/components/Button";
import { IssuerType } from "@/lib/types/index";
import { useCards } from "./CardContext";
import { Card } from "@/components/pages/Card";
import Skeleton from "@/components/Skeleton";
import { Plus } from "lucide-react";

export default function Home() {
   const { cards, isLoading } = useCards();
   const [issuers, setIssuers] = useState<IssuerType[]>([]);
   const [loadingIssuers, setLoadingIssuers] = useState<boolean>(true);

   useEffect(() => {
      const fetchIssuers = async () => {
         try {
            const response = await axios.get("/api/issuers");
            setIssuers(response.data);
         } catch (error) {
            console.error("Failed to fetch issuers:", error);
         } finally {
            setLoadingIssuers(false);
         }
      };

      fetchIssuers();
   }, []);

   return (
      <div className="flex flex-col gap-4">
         <h1>Seus cartões</h1>

         {isLoading || loadingIssuers ? (
            <>
               <Skeleton className="aspect-8/5 rounded-lg shadow-lg max-w-[400px]" />
               <Skeleton className="aspect-8/5 rounded-lg shadow-lg max-w-[400px]" />
            </>
         ) : cards.length === 0 ? (
            <div
               className={`w-full aspect-8/5 p-3 rounded-lg flex flex-col gap-4 shadow-lg text-white max-w-[400px] bg-slate-600`}
               style={{ background: `linear-gradient(to bottom, #323c4b, #5c6e87)` }}
            >
               <h2 className="text-2xl font-bold text-left">Sem cartões disponíveis</h2>
               <p>Você ainda não possui cartões cadastrados.</p>
               <p>Clique no botão abaixo para criar um cartão.</p>
            </div>
         ) : (
            cards.map((card) => (
               <Card key={card.id} card={card} issuer={issuers.find((issuer) => issuer.id === card.issuerId)} />
            ))
         )}

         <Button href="/cards" className="bg-slate-600 hover:bg-slate-700 rounded-full h-9">
            Criar cartão
            <Plus size={20} className="ml-1" />
         </Button>
      </div>
   );
}
