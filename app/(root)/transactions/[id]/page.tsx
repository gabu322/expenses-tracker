"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import axios from "axios";
import { handleChangeType, TransactionType } from "@/utils/types";
import Input from "@/components/Input";
import { useCards } from "../../CardContext";
import Select from "@/components/Select";
import Button from "@/components/Button";

interface Option {
   value: string;
   text: string;
}

export default function Page() {
   const { id } = useParams();
   const { cards, transactions } = useCards();
   const [transactionInitialValue, setTransactionInitialValue] = useState<number>(0);
   const [transaction, setTransaction] = useState<TransactionType>({
      cardId: null,
      type: null,
      method: null,
      amount: 0,
      date: "",
      description: "",
   });

   const [methods, setMethods] = useState<Option[]>([]);
   useEffect(() => {
      const selectedCardMethods = cards.find((card) => card.id === transaction.cardId);

      const methods = [];
      if (selectedCardMethods?.debit) methods.push({ value: "DEBIT", text: "Débito" });
      if (selectedCardMethods?.credit) methods.push({ value: "CREDIT", text: "Crédito" });

      setMethods(methods);
   }, [cards]);

   useEffect(() => {
      const foundTransaction = transactions?.find((transaction) => transaction.id === id) || null;
      if (foundTransaction) {
         setTransaction(foundTransaction);
      } else {
         axios.get(`/api/transactions/${id}`).then((response) => {
            setTransaction(response.data);
         });
      }
   }, [id]);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setTransaction((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         await axios.put(`/api/transactions/${id}`, transaction);
         console.log("Transaction updated!");
      } catch (error) {
         console.error("Failed to update transaction:", error);
      }
   };

   return (
      <form
         className="flex flex-col gap-4"
         onSubmit={handleSubmit}
      >
         <h2 className="text-2xl font-bold text-left w-full">Atualizar transação</h2>
         <Input
            name="amount"
            label="Valor"
            currency="R$"
            onChange={handleChange}
            initialValue={transaction.amount}
            required
         />
         <Select
            name="method"
            label="Método de pagamento"
            options={methods}
            onChange={handleChange}
            initialValue={transaction.method}
            required
         />
         <Select
            name="type"
            label="Tipo"
            options={[
               { value: "INCOME", text: transaction.method === "DEBIT" ? "Receita" : "Pagamento de Fatura" },
               { value: "EXPENSE", text: transaction.method === "DEBIT" ? "Despesa" : "Compra" },
            ]}
            initialValue={transaction.type}
            onChange={handleChange}
            required
         />
         <Input
            name="date"
            label="Data"
            type="datetime-local"
            onChange={handleChange}
            // initialValue={new Date(transaction.date).toISOString()}
            required
         />
         <Input
            name="description"
            label="Descrição"
            onChange={handleChange}
            initialValue={transaction.description}
         />
         <Button type="submit">Atualizar</Button>
         <Button
            type="button"
            onClick={() => console.log(transaction)}
         >
            Log
         </Button>
      </form>
   );
}
