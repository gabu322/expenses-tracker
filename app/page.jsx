'use client';

import Button from "@/components/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components";
import { useRouter } from "next/navigation";

export default function Home() {
   const router = useRouter();
   const [cardList, setCardList] = useState([]);
   const [issuers, setIssuers] = useState([]);

   useEffect(() => {
      axios.get("/api/cards")
         .then(response => setCardList(response.data))
         .catch(err => console.error(err));

      axios.get("/api/issuers")
         .then(response => setIssuers(response.data))
         .catch(err => console.error(err));
   }, []);

   const getIssuerColor = (issuerId) => {
      const issuer = issuers.find(issuer => issuer.id === issuerId);
      return issuer ? issuer.color : "#000"; // Default color if issuer not found
   };

   return <main className="min-h-screen flex flex-col gap-5">
      <div className="flex flex-row justify-between">
         <h1>Seus cartões</h1>
         <Button onClick={() => console.log(issuers, cardList)}>Add cartão</Button>
      </div>
      {cardList.map((card) =>
         <Card key={card.id} cardName={card.name} backgroundColor={getIssuerColor(card.issuerId)} card={card} />
      )}
   </main>
}
