'use client';

import Button from "@/components/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components";
import { useRouter } from "next/navigation";

const cardColors = [
    "#0033a0",
    "#9108db",
    "#21c25e",
    "#21c25e",
]
export default function Home() {
    const router = useRouter();
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        axios.get("/api/cards")
            .then(response => setCardList(response.data))
            .catch(err => console.error(err));
    }, []);

    return <main className="min-h-screen flex flex-col gap-5">
        <div className="flex flex-row justify-between">
            <h1>Seus cartões</h1>
            <Button onClick={() => router.push("/cards")}>Add cartão</Button>

        </div>
        {cardList.map((card, index) =>
            <Card key={card.id} cardName={card.name} backgroundColor={cardColors[index]} card={card} />
        )}
    </main>

}
