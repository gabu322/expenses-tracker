"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { handleChangeType } from "@/lib/types/handleChange";
import { Category } from "./Categories";
import { CategoryType, CreateCategoryType } from "@/lib/types";
import { handleToastError } from "@/lib/functions";
import { toast } from "react-toastify";

export default function Page() {
   const [categories, setCategories] = useState<CategoryType[]>([]);
   const [filter, setFilter] = useState<string>("");
   const [newCategory, setNewCategory] = useState<CreateCategoryType>({
      name: "",
   });

   useEffect(() => {
      const loadingToast = toast.loading("Carregando categorias...");

      axios
         .get("/api/categories")
         .then((response) => {
            setCategories(response.data);
            toast.update(loadingToast, {
               render: "Categorias carregadas!",
               type: "success",
               isLoading: false,
               autoClose: 2000,
            });
         })
         .catch((err) => handleToastError(err, loadingToast));
   }, []);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setNewCategory({ ...newCategory, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
         const response = await axios.post("/api/categories", { ...newCategory });
         const newAddedCategory = response.data;
         setCategories([...categories, newAddedCategory]);
      } catch (error) {
         console.error(error);
      }
   };

   const handleDelete = async (id: string) => {
      try {
         await axios.delete(`/api/categories/${id}`);
         setCategories(categories.filter((category) => category.id !== id));
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="flex flex-col gap-4">
         <div className="form">
            <h2>Adicionar categoria</h2>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
               <Input name="name" label="Nome do categoria" onChange={handleChange} required />

               <Input name="color" label="Cor" type="color" onChange={handleChange} required />

               <Input name="icon" label="Ícone" onChange={handleChange} />

               <Button type="submit">Criar categoria</Button>
            </form>
         </div>

         <div className="form">
            <h2>Listagem de categorias</h2>
            <Input id="Filter" name="Filter" label="Filtro" onChange={(e) => setFilter(e.target.value as string)} />
         </div>

         {categories
            .filter((category) => category.name.toLowerCase().includes(filter.toLowerCase()))
            .map((category) => (
               <Category key={category.id} category={category} handleDelete={handleDelete} />
            ))}
      </div>
   );
}
