"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

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
   const router = useRouter();
   const { cards, transactions } = useCards();

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
      const selectedCard = cards.find((card) => card.id === transaction.cardId);

      const methods = [];
      if (selectedCard?.debit) methods.push({ value: "DEBIT", text: "Débito" });
      if (selectedCard?.credit) methods.push({ value: "CREDIT", text: "Crédito" });

      setMethods(methods);
   }, [cards, transaction.cardId]);

   const [types, setTypes] = useState<Option[]>([]);
   useEffect(() => {
      if (transaction.method === null) setTransaction((prev) => ({ ...prev, type: null }));

      const types = [];
      types.push({ value: "INCOME", text: transaction.method === "DEBIT" ? "Receita" : "Pagamento de fatura" });
      types.push({ value: "EXPENSE", text: transaction.method === "DEBIT" ? "Despesa" : "Compra" });
      setTypes(types);
   }, [cards, transaction.cardId, methods, transaction.method]);

   useEffect(() => {
      const getTransaction = async () => {
         try {
            let foundTransaction = transactions?.find((transaction) => transaction.id === id) || null;
            if (!foundTransaction)
               foundTransaction = await axios.get(`/api/transactions/${id}`).then((response) => response.data);

            if (foundTransaction) setTransaction(foundTransaction);
         } catch (error) {
            console.error("Failed to fetch transaction:", error);
         }
      };

      getTransaction();
   }, [id]);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setTransaction((prev) => ({ ...prev, [name]: value }));
   };

   const submitHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      console.log("Submitting transaction:", transaction);
      e.preventDefault();
      try {
         await axios.put(`/api/transactions/${id}`, transaction);

         if (transaction.cardId) router.push(`/cards/${transaction.cardId}`);
      } catch (error) {
         console.error("Failed to update transaction:", error);
      }
   };

   return (
      <form onSubmit={submitHandleSubmit} className="flex flex-col gap-4">
         <h1>Atualizar transação</h1>
         <div className="form">
            <h2>Informações gerais</h2>

            <Input
               name="amount"
               label="Valor"
               currency="R$"
               onChange={handleChange}
               value={transaction.amount}
               required
            />

            <Select
               name="method"
               label="Método de pagamento"
               options={methods}
               onChange={handleChange}
               value={transaction.method}
               required
            />

            <Select
               name="type"
               label="Tipo"
               options={types}
               value={transaction.type}
               onChange={handleChange}
               disabled={transaction.method === null}
               required
            />

            <Input
               name="date"
               label="Data"
               type="datetime-local"
               onChange={handleChange}
               value={transaction.date.substring(0, 16)}
               required
            />

            <Input name="description" label="Descrição" onChange={handleChange} value={transaction.description} />
         </div>

         <Button type="submit">Atualizar</Button>
      </form>
   );
}
