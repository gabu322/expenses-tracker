"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "@/components/Button";
import { IssuerType } from "@/lib/types/index";
import { useCards } from "./CardContext";
import { Card } from "@/components/pages/Card";

export default function Home() {
   const { cards } = useCards();
   const [issuers, setIssuers] = useState<IssuerType[]>([]);

   useEffect(() => {
      try {
         axios.get("/api/issuers").then((response) => setIssuers(response.data));
      } catch (error) {
         console.error("Failed to fetch issuers:", error);
      }
   }, []);

   return (
      <div className="flex flex-col gap-5">
         <div className="flex flex-row justify-between">
            <h1>Seus cartões</h1>
            <Button href={"/cards"}>Novo Cartão</Button>
         </div>

         {cards.map((card) => (
            <Card
               key={card.id}
               card={card}
               issuer={issuers.find((issuer) => issuer.id === card.issuerId)}
            />
         ))}
      </div>
   );
}
