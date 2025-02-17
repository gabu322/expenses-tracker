'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

export default function Page({ }) {
   const router = useRouter();
   const [login, setLogin] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin((prev) => ({ ...prev, [name]: value }));
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const loginResponse = await signIn("credentials", {
            redirect: false,
            email: login.email,
            password: login.password,
         });

         if (!loginResponse.ok) {
            throw new Error("Failed to login");
         }

         router.push("/");
      } catch (error) {
         // TODO: Show error message to the user
         // May imply that the email or password is incorrect, or that the user is not registered
         console.error("Login failed:", error);
      }
   }

   return <div className="flex flex-col justify-center items-center w-full gap-4 bg-white p-6 rounded-2xl shadow-lg max-w-md">
      <h1 className="text-3xl">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
         <Input
            name="email"
            label="Email"
            type="email"
            onChange={handleChange}
            required
         />

         <Input
            name="password"
            label="Senha"
            type="password"
            onChange={handleChange}
            required
         />

         <Button
            type="submit"
            text={"Entrar"}
         />
         <hr />

         <p className="text-left">Ainda não possui cadastro?</p>
         <Button
            className="w-full"
            text={"Cadastrar"}
            href={"/signup"}
         />
      </form>
   </div>;
};
