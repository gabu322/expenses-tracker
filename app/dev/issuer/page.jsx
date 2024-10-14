'use client';

import Button from "@/components/Button"
import Input from "@/components/Input"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(params) {
    const router = useRouter();
    const [bankData, setBankData] = useState({
        name: "",
        color: "",
        icon: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBankData({ ...bankData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send data to API
        try {
            const response = await axios.post("/api/issuers", {
                ...bankData,
            });
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    }

    return <form className="flex flex-col gap-5 p-5 pb-16" onSubmit={handleSubmit}>
        <h2>Informações gerais</h2>

        <Input
            name="name"
            label="Nome do banco"
            onChange={handleChange}
            required
        />

        <Input
            name="color"
            label="Cor"
            type="color"
            onChange={handleChange}
            required
        />

        <Input
            name="icon"
            label="Ícone"
            onChange={handleChange}
        />

        <Button type="submit">Criar banco</Button>

    </form>
};
