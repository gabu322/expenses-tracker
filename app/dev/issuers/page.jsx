'use client';

import Button from "@/components/Button"
import Input from "@/components/Input"
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page({ }) {
   const [issuers, setIssuers] = useState([]);
   const [filter, setFilter] = useState("");
   const [newIssuer, setNewIssuer] = useState({
      name: "",
      color: "",
      icon: "",
   });

   useEffect(() => {
      axios.get("/api/issuers")
         .then(response => setIssuers(response.data))
         .catch(err => console.error(err));
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setNewIssuer({ ...newIssuer, [name]: value });
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post("/api/issuers", { ...newIssuer, });
         const newAddedIssuer = response.data;
         setIssuers([...issuers, newAddedIssuer]);
      } catch (error) {
         console.error(error);
      }
   }

   const handleDelete = async (id) => {
      try {
         await axios.delete(`/api/issuers/${id}`);
         setIssuers(issuers.filter(issuer => issuer.id !== id));
      } catch (error) {
         console.error(error);
      }
   }

   return <main className="flex flex-col gap-5 p-5">
      <div className="flex flex-row justify-between">
         <h1>Bancos</h1>
         <Button
            text={"cl"}
            onClick={() => console.log(issuers)}
         />
      </div>

      <h2>Adicionar banco</h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
         <Input
            name="name"
            label="Nome do banco"
            onChange={handleChange}
            initialValue="a"
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

      <h2>Listagem de bancos</h2>
      <Input
         id="Filter"
         name="Filter"
         label="Filtro"
         initialValue=""
         onChange={(e) => setFilter(e.target.value)}
      />
      {issuers.map((issuer) => (
         <Issuer key={issuer.id} issuer={issuer} handleDelete={handleDelete} />
      ))}
   </main>
};

export function Issuer({ issuer, handleDelete }) {
   const router = useRouter();

   return <div
      className="flex flex-row items-center justify-between rounded p-4 text-white font-bold"
      style={{ backgroundColor: issuer.color }}
   >
      <div className="flex-row-3">
         {issuer.icon && <Image src={issuer.icon} alt="icon" width={32} height={128} />}
         <p>{issuer.name}</p>
      </div>

      <div className="flex flex-row gap-4">
         <Image
            onClick={() => router.push(`/dev/issuers/${issuer.id}`)}
            className="cursor-pointer"
            src={"/icons/white/edit.svg"}
            alt="edit"
            width={16}
            height={16}
         />

         <Image
            onClick={() => handleDelete(issuer.id)}
            className="cursor-pointer"
            src={"/icons/white/x.svg"}
            alt="x"
            width={16}
            height={16}
         />
      </div>
   </div>
};
