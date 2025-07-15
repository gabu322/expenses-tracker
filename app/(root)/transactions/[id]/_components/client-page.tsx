"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import axios from "axios";
import { handleChangeType, TransactionType } from "@/lib/types";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import { useCards } from "@/app/(root)/CardContext";

interface Option {
   value: string;
   text: string;
}
function toLocalDatetimeLocal(input: string): string {
   const date = new Date(input);
   const offsetMs = date.getTimezoneOffset() * 60000;
   const localDate = new Date(date.getTime() - offsetMs);
   return localDate.toISOString().slice(0, 16); // "YYYY-MM-DDThh:mm"
}
interface ClientPageProps {
   initialTransaction: TransactionType;
}

export default function ClientPage({ initialTransaction }: ClientPageProps) {
   const router = useRouter();
   const { cards, categories } = useCards();

   const [transaction, setTransaction] = useState<TransactionType>(initialTransaction);

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
      if (transaction.method === "") setTransaction((prev) => ({ ...prev, type: "" }));

      const types = [];
      types.push({ value: "INCOME", text: transaction.method === "DEBIT" ? "Receita" : "Pagamento de fatura" });
      types.push({ value: "EXPENSE", text: transaction.method === "DEBIT" ? "Despesa" : "Compra" });
      setTypes(types);
   }, [cards, transaction.cardId, methods, transaction.method]);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setTransaction((prev) => ({ ...prev, [name]: value }));
   };

   const submitHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         await axios.put(`/api/transactions/${transaction.id}`, transaction);

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
               initialValue={initialTransaction.method}
               value={transaction.method}
               required
            />

            <Select
               name="type"
               label="Tipo"
               options={types}
               initialValue={initialTransaction.type}
               value={transaction.type}
               onChange={handleChange}
               disabled={!transaction.method}
               required
            />

            <Select
               name="categoryId"
               label="Categoria"
               initialValue={initialTransaction.categoryId}
               options={categories.map((category) => ({
                  value: category.id,
                  text: category.name,
               }))}
               onChange={handleChange}
               value={transaction.categoryId}
               required
            />

            {/* <Input
               name="date"
               label="Data"
               type="datetime-local"
               onChange={handleChange}
               initialValue={toLocalDatetimeLocal(transaction.date)}
               required
            /> */}

            <Input name="description" label="Descrição" onChange={handleChange} value={transaction.description} />
         </div>

         <Button type="submit">Atualizar</Button>
      </form>
   );
}
