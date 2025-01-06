'use client';

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

export default function Transaction({ isOpen, toggleNavbar, cardId = 1 }) {
   const [cards, setCards] = useState([]);
   const [transaction, setTransaction] = useState({
      cardId: cardId,
      userId: 1,
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

   const handleClear = () => {
      setTransaction({
         cardId: '',
         amount: '',
         type: '',
         date: '',
         hour: '',
         description: '',
         method: ''
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // Submit the transaction and if successful, clear the form and close the navbar
         await axios.post('/api/transactions', transaction).then(() => {
            handleClear();
            toggleNavbar();
         });
      } catch (error) {
         console.error('Error saving transaction:', error);
      }
   };

   return <form onSubmit={handleSubmit} className={`w-full h-96 px-4 pt-9 fixed bg-white flex flex-col gap-4 items-center transition-all duration-500 ${isOpen ? "-bottom-0" : "-bottom-80"}`}>
      <h2 className="text-2xl font-bold text-left w-full">Nova transação</h2>

      <div className="flex flex-row gap-4 w-full">
         <Input
            className="w-1/2"
            name="amount"
            label="Valor"
            currency="R$"
            initialValue={transaction.amount}
            onChange={handleChange}
            rounded
            required
         />

         <Select
            className="w-1/2"
            name="type"
            label="Tipo"
            options={[
               { id: "income", name: "Receita" },
               { id: "expense", name: "Despesa" },
            ]}
            initialValue={transaction.type}
            onChange={handleChange}
            rounded
            required
         />
      </div>

      <div className="flex flex-row gap-4 w-full">
         <Select
            className="w-1/2"
            name="cardId"
            label="Cartão"
            options={cards.map(card => ({ id: card.id, name: card.name }))}
            initialValue={transaction.cardId}
            onChange={handleChange}
            rounded
            required
         />

         <Select
            className="w-1/2"
            name="method"
            label="Método de pagamento"
            options={[
               { id: "debit", name: "Débito" },
               { id: "credit", name: "Crédito" },
            ]}
            initialValue={transaction.method}
            onChange={handleChange}
            rounded
            required
         />
      </div>

      <Input
         className="w-full"
         name="date"
         label="Data"
         type="datetime-local"
         initialValue={transaction.date}
         onChange={handleChange}
         rounded
         required
      />

      <Input
         className="w-full"
         name="description"
         label="Descrição"
         initialValue={transaction.description}
         onChange={handleChange}
         rounded
         required
      />

      <div className="flex flex-row gap-4 w-full">
         <Button
            className="w-full"
            text="Adicionar"
            color="green"
            type="submit"
         />

         <Button
            className="w-full"
            text="Cancelar"
            color="red"
            onClick={handleClear}
         />
      </div>
   </form>;
}
