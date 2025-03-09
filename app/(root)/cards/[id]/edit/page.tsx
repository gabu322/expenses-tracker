"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { handleChangeType } from "@/lib/types/handleChange";
import { CardType, IssuerType } from "@/lib/types";

export default function Page() {
   const { id } = useParams();
   const router = useRouter();
   const [issuers, setIssuers] = useState<IssuerType[]>([]);
   const [cardData, setCardData] = useState<CardType>({
      nickname: "",
      issuerId: "",
      number: "",
      expiration: "",
      cvv: "",
      credit: false,
      debit: false,
   });

   useEffect(() => {
      try {
         axios.get(`/api/cards/${id}`).then((response) => setCardData(response.data));
         axios.get("/api/issuers").then((response) => setIssuers(response.data));
      } catch (error) {
         console.error(error);
      }
   }, [id]);

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
      try {
         await axios.put(`/api/cards/${id}`, cardData);
         router.push("/");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="min-h-screen flex flex-col gap-8">
         <h1>Editando cartão</h1>
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
                  initialValue={cardData.nickname}
                  required
               />

               <Input
                  name="number"
                  label="Número do cartão"
                  onChange={handleChange}
                  mask="**** **** **** 0000"
                  initialValue={cardData.number}
                  required
               />

               <Input
                  name="cvv"
                  label="CVV"
                  onChange={handleChange}
                  mask="000"
                  initialValue={cardData.cvv}
                  type="number"
               />

               <Input
                  name="expiration"
                  label="Data de expiração"
                  onChange={handleChange}
                  initialValue={cardData.expiration}
                  type="month"
               />

               <Select
                  name="issuer"
                  label="Banco"
                  options={issuers.map((issuer) => ({ value: issuer.id || "", text: issuer.name }))}
                  onChange={handleChange}
                  initialValue={cardData.issuerId}
                  required
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
                     initialValue={cardData.limit}
                  />

                  <Input
                     name="currentCredit"
                     label="Crédito atual"
                     onChange={handleChange}
                     currency={"R$"}
                     required={cardData.credit}
                     initialValue={cardData.usedLimit}
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
                     initialValue={cardData.balance}
                  />
               </div>
            )}

            <Button
               type={"submit"}
               className={"text-white"}
            >
               Adicionar
            </Button>

            <Button
               onClick={() => console.log(cardData)}
               className={"text-white"}
            >
               Log
            </Button>
         </form>
      </div>
   );
}
