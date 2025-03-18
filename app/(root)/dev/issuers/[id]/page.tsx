"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { handleChangeType } from "@/utils/types/handleChange";

interface Issuer {
   name: string;
   color: string;
   icon: string;
}

export default function Page() {
   const router = useRouter();
   const { id } = useParams();
   const [issuer, setIssuer] = useState<Issuer>({
      name: "",
      color: "",
      icon: "",
   });

   useEffect(() => {
      axios.get(`/api/issuers/${id}`).then((response) => {
         setIssuer(response.data);
      });
   }, [id]);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setIssuer({ ...issuer, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         await axios.put(`/api/issuers/${id}`, issuer);
         router.push("/dev/issuers");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="form">
         <h2>Editar banco</h2>

         <Input name="name" label="Nome" value={issuer?.name} onChange={handleChange} />

         <Input name="color" label="Cor" type="color" value={issuer?.color} onChange={handleChange} />

         <Input name="icon" label="Ícone" value={issuer?.icon} onChange={handleChange} />

         <Button type="submit" text="Salvar" className="w-full" />
      </form>
   );
}
