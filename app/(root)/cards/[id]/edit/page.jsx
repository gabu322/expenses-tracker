'use client';

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Select from "@/components/Select";

export default function Page({ params }) {
   const { id } = use(params);
   const router = useRouter();
   const [issuers, setIssuers] = useState([]);
   const [card, setCard] = useState({});

   useEffect(() => {
      try {
         axios.get(`/api/cards/${id}`)
            .then((response) => setCard(response.data))
         axios.get("/api/issuers")
            .then(response => setIssuers(response.data))
      } catch (error) {
         console.error(error);
      }
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setCard({ ...card, [name]: value });
   };

   const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;

      setCard({ ...card, [name]: checked });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.put(`/api/cards/${id}`, card);
         router.push("/");
      } catch (error) {
         console.error(error);
      }
   }

   return <div className="min-h-screen flex flex-col gap-8">
      <h1>Editando cartão</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
         <div className="flex flex-col gap-4">

            <h2>Informações gerais</h2>
            <Input
               name="nickname"
               label="Nome do cartão"
               onChange={handleChange}
               initialValue={card.nickname}
               required
            />

            <Input
               name="number"
               label="Número do cartão"
               onChange={handleChange}
               mask="**** **** **** 0000"
               initialValue={card.number}
               required
            />

            <Input
               name="cvv"
               label="CVV"
               onChange={handleChange}
               mask="000"
               initialValue={card.cvv}
               type="number"
            />

            <Input
               name="expiration"
               label="Data de expiração"
               onChange={handleChange}
               initialValue={card.expiration}
               type="month"
            />

            <Select
               name="issuer"
               label="Banco"
               options={issuers.map(issuer => ({ value: issuer.id, text: issuer.name }))}
               onChange={handleChange}
               initialValue={card.issuerId}
               required
            />

            <div className="flex justify-between">
               <div>Tipo do cartão</div>

               <div className="flex gap-4">
                  <Checkbox
                     name="credit"
                     onChange={handleCheckboxChange}
                     label={"Crédito"}
                     checked={card.credit}
                  />

                  <Checkbox
                     name="debit"
                     onChange={handleCheckboxChange}
                     label="Débito"
                     checked={card.debit}
                  />
               </div>
            </div>
         </div>

         {(card.credit) && <div className="flex flex-col gap-4">
            <h2>Informações de crédito</h2>

            <Input
               name="creditLimit"
               label="Limite de crédito"
               onChange={handleChange}
               currency={"R$"}
               required={card.credit}
               initialValue={card.creditCard.creditLimit}
            />

            <Input
               name="currentCredit"
               label="Crédito atual"
               onChange={handleChange}
               currency={"R$"}
               required={card.credit}
               initialValue={card.creditCard.currentCredit}
            />
         </div>}

         {card.debit && <div className="flex flex-col gap-4">
            <h2>Informações de débito</h2>

            <Input
               name="balance"
               label="Saldo da conta"
               onChange={handleChange}
               currency={"R$"}
               required={card.debit}
               initialValue={card.debitCard.balance}
            />
         </div>}

         <Button type={"submit"} className={"text-white"} >Adicionar</Button>

         <Button onClick={() => console.log(card)} className={"text-white"} >Log</Button>
      </form>
   </div>;
}
