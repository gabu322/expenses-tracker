'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/components/Button";
import Image from "next/image";
import Select from "@/components/Select";
import Input from "@/components/Input";

export default function Page({ }) {
    const [issuerList, setIssuerList] = useState([]);

    useEffect(() => {
        axios.get("/api/issuers")
            .then(response => setIssuerList(response.data))
            .catch(err => console.error(err));
    }, []);

    return <main className="flex flex-col gap-5 p-5">
        <div className="flex flex-row justify-between">
            <h1>Lista de Bancos</h1>
            <Button
                text={"cl"}
                onClick={() => console.log(issuerList)}
            />
        </div>
        <Select id="issuer" name="issuer" label="Banco" options={issuerList} />
        <Input id="name" name="name" label="Nome" />
        {issuerList.map((issuer) =>
            <div key={issuer.id} className="flex flex-row items-center gap-5 rounded p-4 text-white font-bold" style={{ backgroundColor: issuer.color }}>
                {issuer.icon && <Image src={issuer.icon} width={50} height={50} />}
                <p>{issuer.name}</p>
            </div>
        )}
    </main>
};
