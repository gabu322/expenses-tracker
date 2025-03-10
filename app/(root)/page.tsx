"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "@/components/Button";
import { IssuerType } from "@/utils/types/index";
import { useCards } from "./CardContext";
import { Card } from "@/components/pages/Card";
import { toast } from "react-toastify";
import Skeleton from "@/components/Skeleton";

export default function Home() {
   const { cards } = useCards();
   const [issuers, setIssuers] = useState<IssuerType[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchIssuers = async () => {
         try {
            const response = await axios.get("/api/issuers");
            setIssuers(response.data);
         } catch (error) {
            console.error("Failed to fetch issuers:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchIssuers();
   }, []);

   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-row justify-between">
            <h1>Seus cartões</h1>
            <Button href={"/cards"}>Novo Cartão</Button>
         </div>

         {loading ? (
            <>
               <Skeleton className="aspect-[8/5] rounded-lg shadow-lg max-w-[400px]" />
               <Skeleton className="aspect-[8/5] rounded-lg shadow-lg max-w-[400px]" />
               <Skeleton className="aspect-[8/5] rounded-lg shadow-lg max-w-[400px]" />
            </>
         ) : (
            cards.map((card) => (
               <Card
                  key={card.id}
                  card={card}
                  issuer={issuers.find((issuer) => issuer.id === card.issuerId)}
               />
            ))
         )}
      </div>
   );
}
