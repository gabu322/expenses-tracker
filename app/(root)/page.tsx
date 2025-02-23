"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { lighten, darken } from "polished";
import axios from "axios";

import Button from "@/components/Button";
import { CardType, IssuerType } from "@/utils/types/index";
import { useCards } from "./contex";

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

interface CardProps {
   className?: string;
   card: CardType;
   issuer?: IssuerType;
}

export function Card({ className, card, issuer }: CardProps) {
   const router = useRouter();

   const lightenedColor = lighten(0.1, issuer?.color || "#000");
   const darkenedColor = darken(0.1, issuer?.color || "#000");

   return (
      <div
         className={`w-full aspect-[8/5] p-3 rounded-lg flex flex-col shadow-lg ${className || ""} text-white max-w-[400px]`}
         style={{ background: `linear-gradient(to bottom, ${darkenedColor}, ${lightenedColor})` }}
      >
         <div className="flex flex-row justify-between mb-2 h-10">
            <img
               src={issuer?.icon}
               alt={issuer?.name}
               className="h-10 w-16"
            />
            <h4>{card.nickname}</h4>
         </div>

         <div className="flex-grow flex flex-col justify-between">
            {card.debit ? <h3 className="leading-none">$ {card.balance?.toFixed(2)}</h3> : <div />}

            {card.credit && (
               <div className="flex flex-col mb-1">
                  <h6 className="text-gray-300 leading-none">Used credit: (of ${card.limit} limit)</h6>
                  <h3>$ {card.usedLimit}</h3>
               </div>
            )}
         </div>
         <div className="w-full flex flex-row justify-between">
            <div>{card.number}</div>

            <div
               className="flex cursor-pointer"
               onClick={() => router.push("/cards/" + card.id)}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="4"
                  />
               </svg>

               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="4"
                  />
               </svg>

               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="4"
                  />
               </svg>
            </div>
         </div>
      </div>
   );
}
