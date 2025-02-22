"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { handleChangeType } from "@/utils/types/handleChange";

interface Issuer {
   id: string;
   name: string;
   icon: string;
   color: string;
}

interface CardData {
   nickname: string;
   issuerId: string;
   number: string;
   expiration: string;
   cvv: string;
   credit: boolean;
   debit: boolean;
   creditLimit?: number;
   currentCredit?: number;
   balance?: number;
}

export default function Page() {
   const router = useRouter();
   const { data: session } = useSession();
   const [issuers, setIssuers] = useState<Issuer[]>([]);
   const [cardData, setCardData] = useState<CardData>({
      nickname: "",
      issuerId: "",
      number: "",
      expiration: "",
      cvv: "",
      credit: false,
      debit: false,
   });

   useEffect(() => {
      axios
         .get("/api/issuers")
         .then((response) => setIssuers(response.data))
         .catch(console.error);
   }, []);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setCardData((prev) => ({ ...prev, [name]: value }));
   };

   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setCardData((prev) => ({ ...prev, [name]: checked }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!session?.user?.id) {
         router.push("/login");
         return;
      }

      try {
         await axios.post("/api/cards", { ...cardData, userId: session.user.id });
         router.push("/");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="flex flex-col gap-4">
         <h1 className="">Criando novo cartão</h1>

         <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
         >
            <div className="flex flex-col gap-4">
               <h2>Informações gerais</h2>
               <Input
                  name="nickname"
                  label="Nome do cartão"
                  onChange={handleChange}
                  required
               />

               <Select
                  name="issuerId"
                  label="Banco"
                  options={issuers.map((issuer) => ({ value: issuer.id, text: issuer.name }))}
                  onChange={handleChange}
                  required
               />

               <Input
                  name="number"
                  label="Número do cartão"
                  onChange={handleChange}
                  mask="**** **** **** 0000"
                  initialValue="**** **** **** "
                  required
               />

               <Input
                  name="expiration"
                  label="Data de expiração"
                  onChange={handleChange}
                  type="month"
               />

               <Input
                  name="cvv"
                  label="CVV"
                  onChange={handleChange}
                  mask="000"
               />

               <div className="flex justify-between">
                  <div>Tipo do cartão</div>

                  <div className="flex gap-4">
                     <Checkbox
                        name="credit"
                        onChange={handleCheckboxChange}
                        label={"Crédito"}
                     />

                     <Checkbox
                        name="debit"
                        onChange={handleCheckboxChange}
                        label="Débito"
                     />
                  </div>
               </div>
            </div>

            {cardData.credit && (
               <div className="flex flex-col gap-4">
                  <h2>Informações de crédito</h2>

                  <Input
                     name="creditLimit"
                     label="Limite de crédito"
                     onChange={handleChange}
                     currency={"R$"}
                     required={cardData.credit}
                  />

                  <Input
                     name="currentCredit"
                     label="Crédito atual"
                     onChange={handleChange}
                     currency={"R$"}
                     required={cardData.credit}
                  />
               </div>
            )}

            {cardData.debit && (
               <div className="flex flex-col gap-4">
                  <h2>Informações de débito</h2>

                  <Input
                     name="balance"
                     label="Saldo da conta"
                     onChange={handleChange}
                     currency={"R$"}
                     required={cardData.debit}
                  />
               </div>
            )}

            <Button
               type={"submit"}
               className={"text-white"}
            >
               Adicionar
            </Button>
         </form>
      </div>
   );
}
