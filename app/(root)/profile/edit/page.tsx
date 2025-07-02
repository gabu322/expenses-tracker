"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleChangeType } from "@/lib/types/handleChange";
import { toast } from "react-toastify";
import { UserType } from "@/lib/types";
import { handleToastError } from "@/lib/functions";

export default function Page() {
   const router = useRouter();
   const [userData, setUserData] = useState<UserType>({
      id: "",
      email: "",
      password: "",
      name: "",
      cpf: "",
      phone: "",
   });

   useEffect(() => {
      const toastId = toast.loading("Buscando informações...");

      try {
         console.log("here");
         axios.get(`/api/users`).then((response) => {
            setUserData(response.data);

            toast.update(toastId, {
               render: "Informações econtradas!",
               type: "success",
               isLoading: false,
               autoClose: 1500,
            });
         });
      } catch (error) {
         handleToastError(error, toastId);
      }
   }, []);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setUserData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         await axios.put(`/api/users/`, userData);
         router.push("/");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <form className="flex flex-col gap-4 form" onSubmit={handleSubmit}>
         <h1>Editar informações</h1>

         <Input name="name" label="Nome" onChange={handleChange} value={userData.name} required />

         <Input name="email" label="Email" onChange={handleChange} value={userData.email} />

         <Input name="phone" label="Telefone" onChange={handleChange} value={userData.phone} />

         <Input name="cpf" label="CPF" onChange={handleChange} value={userData.cpf} />

         <Button type={"submit"} className={"text-white"}>
            Adicionar
         </Button>
      </form>
   );
}
