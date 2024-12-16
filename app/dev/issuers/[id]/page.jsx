'use client';

import { useEffect, use, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Page({ params }) {
   const router = useRouter();
   const { id } = use(params);
   const [issuer, setIssuer] = useState({
      name: "",
      color: "",
      icon: "",
   });

   useEffect(() => {
      axios.get(`/api/issuers/${id}`).then((response) => {
         setIssuer(response.data);
      });
   }, [id]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setIssuer({ ...issuer, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.put(`/api/issuers/${id}`, issuer);
         router.push("/dev/issuers");
      } catch (error) {
         console.error(error);
      }
   }

   return <main className="flex-col-4">
      <h1>Editar banco: {issuer?.name}</h1>
      <form onSubmit={handleSubmit} className="flex-col-4">
         <Input
            name="name"
            label="Nome"
            initialValue={issuer?.name}
            onChange={handleChange}
         />

         <Input
            name="color"
            label="Cor"
            type="color"
            initialValue={issuer?.color}
            onChange={handleChange}
         />

         <Input
            name="icon"
            label="Ícone"
            initialValue={issuer?.icon}
            onChange={handleChange}
         />

         <Button
            type="submit"
            text="Salvar"
            className="w-full"
         />
      </form>
   </main>

};
