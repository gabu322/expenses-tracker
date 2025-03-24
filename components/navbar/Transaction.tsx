"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { handleChangeType } from "@/utils/types/handleChange";
import { TransactionType } from "@/utils/types";
import { useCards } from "@/app/(root)/CardContext";
import { toast } from "react-toastify";

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
      toggleNavbar();

      setNewTransaction({
         cardId: null,
         amount: 0,
         type: null,
         method: null,
         date: "",
         description: "",
      });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newTransaction.cardId === null) return;

      const toastId = toast.loading("Salvando transação...", { position: "top-center" });
      try {
         // Submit the transaction and if successful, clear the form and close the navbar
         await axios.post(`/api/transactions/?cardId=${newTransaction.cardId}`, newTransaction);

         handleClear();
         fetchCards();
         setTransactions((prev) => [...(prev ?? []), newTransaction]);

         toast.update(toastId, {
            render: "Transação salva com sucesso!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
         });
      } catch (error) {
         console.error("Error saving transaction:", error);
         toast.update(toastId, {
            render: "Erro ao salvar transação: " + (error as Error).message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
         });
      }
   };

   return (
      <div
         className={`w-full p-4 absolute bg-white duration-500 z-[33] left-0 bottom-0 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
         {cards.length === 0 ? (
            <div className="flex flex-col gap-4 items-center">
               <h2 className="text-2xl font-bold text-left">Sem cartões disponíveis</h2>
               <p className="text-center">Você precisa ter um cartão cadastrado para adicionar transações</p>
               <Button text="Adicionar cartão" color="blue" href="/cards" className="w-full" />
            </div>
         ) : (
            <form onSubmit={handleSubmit} className={`flex flex-col gap-4 items-center `}>
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
                     options={cards
                        .filter((card) => card.id !== undefined)
                        .map((card) => ({ value: card.id as string, text: card.nickname }))}
                     value={newTransaction.cardId}
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
                     value={newTransaction.method}
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
                        {
                           value: "INCOME",
                           text: newTransaction.method === "DEBIT" ? "Receita" : "Pagamento de Fatura",
                        },
                        { value: "EXPENSE", text: newTransaction.method === "DEBIT" ? "Despesa" : "Compra" },
                     ]}
                     value={newTransaction.type}
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
                     disabled={
                        newTransaction.cardId === null ||
                        newTransaction.method === null ||
                        newTransaction.type === null ||
                        newTransaction.amount === 0 ||
                        newTransaction.date === "" ||
                        newTransaction.description === ""
                     }
                  />

                  <Button className="w-full" text="Cancelar" color="red" onClick={handleClear} />
               </div>
            </form>
         )}
      </div>
   );
}
