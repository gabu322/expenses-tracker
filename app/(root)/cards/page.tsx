"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { CreateCardType, IssuerType, handleChangeType } from "@/lib/types/index";

export default function Page() {
   const router = useRouter();
   const { data: session } = useSession();
   const [issuers, setIssuers] = useState<IssuerType[]>([]);
   const [cardData, setCardData] = useState<CreateCardType>({
      nickname: "",
      issuerId: "",
      userId: "",
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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
         <h1>Criando cartão</h1>

         <div className="form">
            <h2>Informações gerais</h2>

            <Input name="nickname" label="Nome do cartão" onChange={handleChange} required />

            <Select
               name="issuerId"
               label="Banco"
               options={issuers
                  .filter((issuer) => issuer.id)
                  .map((issuer) => ({ value: issuer.id as string, text: issuer.name }))}
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

            <Input name="expiration" label="Data de expiração" onChange={handleChange} type="month" />

            <Input name="cvv" label="CVV" onChange={handleChange} mask="000" />

            <div className="flex justify-between">
               <div>Tipo do cartão</div>

               <div className="flex gap-4">
                  <Checkbox
                     name="credit"
                     onChange={(e) => {
                        const checked = e.target.checked;
                        setCardData((prev) => {
                           const next = { ...prev, credit: checked };
                           if (checked) {
                              next.limit = 0;
                              next.usedLimit = 0;
                           } else {
                              delete next.limit;
                              delete next.usedLimit;
                           }
                           return next;
                        });
                     }}
                     label="Crédito"
                  />

                  <Checkbox
                     name="debit"
                     onChange={(e) => {
                        const checked = e.target.checked;
                        setCardData((prev) => {
                           const next = { ...prev, debit: checked };
                           if (checked) next.balance = 0;
                           else delete next.balance;

                           return next;
                        });
                     }}
                     label="Débito"
                  />
               </div>
            </div>
         </div>

         {cardData.credit && (
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
               <h2>Informações de crédito</h2>

               <Input
                  name="limit"
                  label="Limite de crédito"
                  onChange={handleChange}
                  currency={"R$"}
                  required={cardData.credit}
               />

               <Input
                  name="usedLimit"
                  label="Crédito atual"
                  onChange={handleChange}
                  currency={"R$"}
                  required={cardData.credit}
               />
            </div>
         )}

         {cardData.debit && (
            <div className="flex flex-col gap-4 bg-white rounded-lg p-4 shadow-md">
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

         <Button type={"submit"} className={"text-white"}>
            Adicionar
         </Button>
      </form>
   );
}
