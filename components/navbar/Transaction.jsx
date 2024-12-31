'use client';

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

export default function Transaction({ isOpen, cardId = 1 }) {
   const [cards, setCards] = useState([]);
   const [transaction, setTransaction] = useState({
      cardId: cardId,
      amount: '',
      type: '',
      date: '',
      hour: '',
      description: '',
      method: ''
   });

   useEffect(() => {
      axios.get('/api/cards')
         .then(response => setCards(response.data))
         .catch(error => console.error('Error fetching cards:', error));
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setTransaction((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async () => {
      try {
         const response = await fetch('/api/transactions', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
         });
         if (!response.ok) throw new Error('Network response was not ok');
         console.log('Transaction saved successfully');
      } catch (error) {
         console.error('Error saving transaction:', error);
      }
   };

   return <div className={`w-full h-96 px-4 pt-11 fixed bg-white flex flex-col gap-4 items-center transition-all duration-500 ${isOpen ? "-bottom-0" : "-bottom-80"}`}>

      <div className="flex flex-row gap-4 w-full">
         <Input
            label="Valor"
            name="amount"
            currency="R$"
            required
            className="w-1/2 rounded-full"
            onChange={handleChange}
         />

         <Select
            label="Tipo"
            name="type"
            options={[
               { id: "income", name: "Receita" },
               { id: "expense", name: "Despesa" },
            ]}
            required
            className="w-1/2 rounded-full"
            onChange={handleChange}
         />
      </div>

      <div className="flex flex-row gap-4 w-full">
         <Input
            label="Data"
            name="date"
            type="date"
            required
            className="w-1/2"
            onChange={handleChange}
         />

         <Input
            label="Hora"
            name="hour"
            type="time"
            required
            className="w-1/2"
            onChange={handleChange}
         />
      </div>

      <Input
         label="Descrição"
         name="description"
         className="w-full"
         onChange={handleChange}
      />

      <Select
         label="Método de pagamento"
         name="method"
         options={[
            { id: "debit", name: "Débito" },
            { id: "credit", name: "Crédito" },
         ]}
         required
         className="w-full"
         onChange={handleChange}
      />

      <Button text="Adicionar" color="green" className="w-full" onClick={handleSubmit} />
   </div>;
}
