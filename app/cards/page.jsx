'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Select from "@/components/Select";

export default function Page({ }) {
   const router = useRouter();
   const [issuers, setIssuers] = useState([]);
   const [cardData, setCardData] = useState({
      name: "",
      description: "",
   });

   useEffect(() => {
      axios.get("/api/issuers")
         .then(response => setIssuers(response.data))
         .catch(console.error);
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setCardData({ ...cardData, [name]: value });
   };

   const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;

      setCardData({ ...cardData, [name]: checked });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await axios.post("/api/cards", { ...cardData, });
         router.push("/");
      } catch (error) {
         console.error(error);
      }
   }

   return <main className="min-h-screen flex flex-col gap-4">
      <h1 className="">Criando novo cartão</h1>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
         <div className="flex flex-col gap-4">

            <h2>Informações gerais</h2>
            <Input
               name="name"
               label="Nome do cartão"
               onChange={handleChange}
               required
            />

            <Input
               name="description"
               label="Descrição"
               onChange={handleChange}
            />

            <Input
               name="cardNumber"
               label="Número do cartão"
               onChange={handleChange}
               mask="**** **** **** 0000"
               initialValue="**** **** **** "
               required
            />

            <Input
               name="cvv"
               label="CVV"
               onChange={handleChange}
               mask="000"
               type="number"
            />

            <Input
               name="expiration"
               label="Data de expiração"
               onChange={handleChange}
               type="month"
            />

            <Select
               name="issuer"
               label="Banco"
               options={issuers}
               onChange={handleChange}
               required
            />

            <div className="flex justify-between">
               <div>Tipo do cartão</div>

               <div className="flex gap-4">
                  <Checkbox
                     name="credit"
                     onChange={handleCheckboxChange}
                     label={"Crédito"}
                     checked={cardData.credit}
                  />

                  <Checkbox
                     name="debit"
                     onChange={handleCheckboxChange}
                     label="Débito"
                     checked={cardData.debit}
                  />
               </div>
            </div>
         </div>

         {(cardData.credit) && <div className="flex flex-col gap-4">
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
         </div>}

         {cardData.debit && <div className="flex flex-col gap-4">
            <h2>Informações de débito</h2>

            <Input
               name="balance"
               label="Saldo da conta"
               onChange={handleChange}
               currency={"R$"}
               required={cardData.debit}
            />
         </div>}

         <Button type={"submit"} className={"text-white"} >Adicionar</Button>
      </form>
   </main>;
}
