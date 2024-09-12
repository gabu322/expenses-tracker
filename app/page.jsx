'use client';

import Button from "@/components/Button";
import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        axios.get("/api/cards")
            .then(response => setCardList(response.data))
            .catch(err => console.error(err));
    }, []);

    return <main className="min-h-screen ">
        <Button href="/cards">Criar novo cartão</Button>
        <Card className="bg-[#8612d2]" />
        <Card className={"bg-blue-400"}></Card>
    </main>

}
