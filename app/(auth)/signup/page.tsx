"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleChangeType } from "@/utils/types/handleChange";
import { toast } from "react-toastify";
import { handleToastError } from "@/lib/functions/handleToastError";
import { ChevronLeft } from "lucide-react";

interface SignupData {
   email: string;
   name: string;
   cpf: string;
   phone: string;
   password: string;
   confirmPassword: string;
}

export default function Page() {
   const router = useRouter();
   const [loading, setLoading] = useState<boolean>(false);
   const [signup, setSignup] = useState<SignupData>({
      email: "",
      name: "",
      cpf: "",
      phone: "",
      password: "",
      confirmPassword: "",
   });

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setSignup((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true);
      const toastId = toast.loading("Fazendo cadastro...");
      try {
         if (signup.password !== signup.confirmPassword) throw new Error("Senhas diferentes");

         // Call the custom register API
         const response = await axios.post("/api/auth/register", signup);
         if (!(response.status === 201)) throw new Error("Contate o suporte");

         // Automatically log in the user
         const loginResponse = await signIn("credentials", {
            redirect: false,
            email: signup.email,
            password: signup.password,
         });

         if (!loginResponse || !loginResponse.ok) throw new Error("Contate o suporte");

         toast.update(toastId, { render: "Cadastro bem-sucedido!", type: "success", isLoading: false, autoClose: 3000 });
         router.push("/");
      } catch (error) {
         handleToastError(error, toastId);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="relative flex flex-col justify-center items-center w-full gap-4 bg-white p-6 rounded-2xl shadow-lg max-w-md">
         <ChevronLeft
            className="cursor-pointer absolute top-4 left-3"
            size={40}
            onClick={() => router.back()}
         />

         <h1 className="text-3xl">Signup</h1>

         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full"
         >
            <Input
               name="email"
               label="Email"
               type="email"
               onChange={handleChange}
               required
            />

            <Input
               name="name"
               label="Name"
               type="text"
               onChange={handleChange}
            />

            <Input
               name="cpf"
               label="CPF"
               type="text"
               mask={"000.000.000-00"}
               onChange={handleChange}
            />

            <Input
               name="phone"
               label="Phone"
               type="text"
               mask={"(00) 00000-0000"}
               onChange={handleChange}
            />

            <Input
               name="password"
               label="Password"
               type="password"
               onChange={handleChange}
               required
            />

            <Input
               name="confirmPassword"
               label="Confirm Password"
               type="password"
               onChange={handleChange}
               required
            />

            <Button
               className="w-full"
               type="submit"
               text={"Sign Up"}
               disabled={loading}
            />
         </form>
      </div>
   );
}
