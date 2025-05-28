"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { handleChangeType } from "@/lib/types/handleChange";
import { IssuerType } from "@/lib/types";
import { Issuer } from "@/components/pages/Issuer";

export default function Page() {
   const [issuers, setIssuers] = useState<IssuerType[]>([]);
   const [filter, setFilter] = useState<string>("");
   const [newIssuer, setNewIssuer] = useState({
      name: "",
      color: "",
      icon: "",
   });

   useEffect(() => {
      axios
         .get("/api/issuers")
         .then((response) => setIssuers(response.data))
         .catch((err) => console.error(err));
   }, []);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setNewIssuer({ ...newIssuer, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         const response = await axios.post("/api/issuers", { ...newIssuer });
         const newAddedIssuer = response.data;
         setIssuers([...issuers, newAddedIssuer]);
      } catch (error) {
         console.error(error);
      }
   };

   const handleDelete = async (id: string) => {
      try {
         await axios.delete(`/api/issuers/${id}`);
         setIssuers(issuers.filter((issuer) => issuer.id !== id));
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="flex flex-col gap-4">
         <div className="form">
            <h2>Adicionar banco</h2>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
               <Input name="name" label="Nome do banco" onChange={handleChange} required />

               <Input name="color" label="Cor" type="color" onChange={handleChange} required />

               <Input name="icon" label="Ícone" onChange={handleChange} />

               <Button type="submit">Criar banco</Button>
            </form>
         </div>

         <div className="form">
            <h2>Listagem de bancos</h2>
            <Input id="Filter" name="Filter" label="Filtro" onChange={(e) => setFilter(e.target.value as string)} />
         </div>

         {issuers
            .filter((issuer) => issuer.name.toLowerCase().includes(filter.toLowerCase()))
            .map((issuer) => (
               <Issuer key={issuer.id} issuer={issuer} handleDelete={handleDelete} />
            ))}
      </div>
   );
}
