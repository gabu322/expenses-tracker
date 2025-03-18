"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { handleChangeType } from "@/utils/types/handleChange";
import { CardType, IssuerType } from "@/utils/types";

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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
         <div className="form">
            <h2>Informações gerais</h2>
            <Input name="nickname" label="Nome do cartão" onChange={handleChange} value={cardData.nickname} required />

            <Input
               name="number"
               label="Número do cartão"
               onChange={handleChange}
               mask="**** **** **** 0000"
               value={cardData.number}
               required
            />

            <Input name="cvv" label="CVV" onChange={handleChange} mask="000" value={cardData.cvv} type="number" />

            <Input
               name="expiration"
               label="Data de expiração"
               onChange={handleChange}
               value={cardData.expiration}
               type="month"
            />

            <Select
               name="issuer"
               label="Banco"
               options={issuers.map((issuer) => ({ value: issuer.id || "", text: issuer.name }))}
               onChange={handleChange}
               value={cardData.issuerId}
               required
            />

            <div className="flex justify-between">
               <div>Tipo do cartão</div>

               <div className="flex gap-4">
                  <Checkbox
                     name="credit"
                     onChange={handleCheckboxChange}
                     label={"Crédito"}
                     initialChecked={cardData.credit}
                  />

                  <Checkbox
                     name="debit"
                     onChange={handleCheckboxChange}
                     label="Débito"
                     initialChecked={cardData.debit}
                  />
               </div>
            </div>
         </div>

         {cardData.credit && (
            <div className="form">
               <h2>Informações de crédito</h2>

               <Input
                  name="creditLimit"
                  label="Limite de crédito"
                  onChange={handleChange}
                  currency={"R$"}
                  required={cardData.credit}
                  value={cardData.limit}
               />

               <Input
                  name="currentCredit"
                  label="Crédito atual"
                  onChange={handleChange}
                  currency={"R$"}
                  required={cardData.credit}
                  value={cardData.usedLimit}
               />
            </div>
         )}

         {cardData.debit && (
            <div className="form">
               <h2>Informações de débito</h2>

               <Input
                  name="balance"
                  label="Saldo da conta"
                  onChange={handleChange}
                  currency={"R$"}
                  required={cardData.debit}
                  value={cardData.balance}
               />
            </div>
         )}

         <Button type={"submit"} className={"text-white"}>
            Adicionar
         </Button>
      </form>
   );
}
