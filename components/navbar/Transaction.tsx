"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { handleChangeType } from "@/utils/types/handleChange";
import { TransactionType } from "@/utils/types";
import { useCards } from "@/app/(root)/CardContext";

interface Option {
   value: string;
   text: string;
}

interface TransactionProps {
   isOpen: boolean;
   toggleNavbar: () => void;
}

export default function Transaction({ isOpen, toggleNavbar }: TransactionProps) {
   const { cards, fetchCards, setTransactions } = useCards();
   const [newTransaction, setNewTransaction] = useState<TransactionType>({
      cardId: null,
      type: null,
      method: null,
      amount: 0,
      date: "",
      description: "",
   });

   useEffect(() => {
      if (newTransaction.cardId === null) setNewTransaction((prev) => ({ ...prev, method: null, type: null }));
   }, [newTransaction.cardId]);

   const [cardMethods, setCardMethods] = useState<Option[]>([]);
   useEffect(() => {
      const currentSelectedCard = cards.find((card) => card.id === newTransaction.cardId);
      setCardMethods([]);

      const methods = [];
      if (currentSelectedCard?.debit) {
         methods.push({ value: "DEBIT", text: "Débito" });
      }
      if (currentSelectedCard?.credit) {
         methods.push({ value: "CREDIT", text: "Crédito" });
      }
      setCardMethods(methods);
   }, [newTransaction.cardId, cards]);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setNewTransaction((prev) => ({ ...prev, [name]: value }));
   };

   const handleClear = () => {
      setNewTransaction({
         cardId: null,
         amount: 0,
         type: null,
         date: "",
         description: "",
         method: null,
      });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newTransaction.cardId === null) return;

      try {
         // Submit the transaction and if successful, clear the form and close the navbar
         console.log("here");
         await axios.post(`/api/transactions/?cardId=${newTransaction.cardId}`, newTransaction);

         handleClear();
         toggleNavbar();
         fetchCards();
         setTransactions((prev) => [...(prev ?? []), newTransaction]);
      } catch (error) {
         console.error("Error saving transaction:", error);
      }
   };

   return (
      <form
         onSubmit={handleSubmit}
         className={`w-full h-96 px-4 pt-9 fixed bg-white flex flex-col gap-4 items-center transition-all duration-500 ${isOpen ? "-bottom-0" : "-bottom-80"}`}
      >
         <h2 className="text-2xl font-bold text-left w-full">Nova transação</h2>

         <div className="flex flex-row gap-4 w-full">
            <Input
               className="w-1/2"
               name="amount"
               label="Valor"
               currency="R$"
               onChange={handleChange}
               value={newTransaction.amount}
               rounded
               required
            />

            <Select
               className="w-1/2"
               name="cardId"
               label="Cartão"
               options={cards.filter((card) => card.id !== undefined).map((card) => ({ value: card.id as string, text: card.nickname }))}
               initialValue={newTransaction.cardId}
               onChange={handleChange}
               rounded
               required
            />
         </div>

         <div className="flex flex-row gap-4 w-full">
            <Select
               className="w-1/2"
               name="method"
               label="Método de pagamento"
               options={cardMethods}
               initialValue={newTransaction.method}
               onChange={handleChange}
               rounded
               disabled={newTransaction.cardId == null}
               required
            />

            <Select
               className="w-1/2"
               name="type"
               label="Tipo"
               options={[
                  { value: "INCOME", text: newTransaction.method === "DEBIT" ? "Receita" : "Pagamento de Fatura" },
                  { value: "EXPENSE", text: newTransaction.method === "DEBIT" ? "Despesa" : "Compra" },
               ]}
               initialValue={newTransaction.type}
               onChange={handleChange}
               rounded
               disabled={newTransaction.cardId === null}
               required
            />
         </div>

         <Input
            className="w-full"
            name="date"
            label="Data"
            type="datetime-local"
            value={newTransaction.date}
            onChange={handleChange}
            rounded
            required
         />

         <Input
            className="w-full"
            name="description"
            label="Descrição"
            value={newTransaction.description}
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
      </form>
   );
}
