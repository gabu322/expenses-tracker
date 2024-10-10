'use client';

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({ }) {
    const router = useRouter();
    const [cardData, setCardData] = useState({
        name: "",
        description: "",
        acceptsCredit: false,
        acceptsDebit: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cardData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCardData({ ...cardData, [name]: checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send data to API
        try {
            const response = await axios.post("/api/cards", {
                ...cardData,
                creditLimit: +cardData.creditLimit || undefined,
                currentCredit: +cardData.currentCredit || undefined,
                balance: +cardData.balance || undefined,
            });
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className="min-h-screen flex flex-col gap-8 p-8">
            <h1>Criando novo cartão</h1>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">

                    <h2>Informações gerais</h2>
                    <Input
                        name="name"
                        label="Nome do cartão*"
                        onChange={handleChange}
                        required
                    />
                    <Input
                        name="description"
                        label="Descrição"
                        onChange={handleChange}
                    />
                    <Input
                        name="cardNumber"
                        label="Número do cartão*"
                        onChange={handleChange}
                        mask="____ ____ ____ ____"
                        required
                    />
                    <Input
                        name="cvv"
                        label="CVV"
                        onChange={handleChange}
                        mask="___"
                        type="number"
                    />
                    <Input
                        name="expiration"
                        label="Data de expiração"
                        onChange={handleChange}
                        type="date"
                    />

                    <div className="flex justify-between">
                        <div>Tipo do cartão</div>
                        <div className="flex gap-4">
                            <Checkbox
                                name="acceptsCredit"
                                onChange={handleCheckboxChange}
                                label={"Crédito"}
                            />
                            <Checkbox
                                name="acceptsDebit"
                                onChange={handleCheckboxChange}
                                label="Débito"
                            />
                        </div>
                    </div>
                </div>

                {cardData.acceptsCredit && <div className="flex flex-col gap-4">
                    <h2>Informações de crédito</h2>
                    <Input
                        type="number"
                        name="creditLimit"
                        label="Limite de crédito"
                        onChange={handleChange}
                    />
                    <Input
                        type="number"
                        name="currentCredit"
                        label="Crédito atual"
                        onChange={handleChange}
                    />
                </div>}

                {cardData.acceptsDebit && <div className="flex flex-col gap-4">
                    <h2>Informações de débito</h2>
                    <Input
                        name="balance"
                        label="Saldo da conta"
                        onChange={handleChange}
                        mask="___.__"
                    />
                </div>}
                <Button type={"submit"} className={"text-white"} >Adicionar</Button>
            </form>
        </main>
    );
}
