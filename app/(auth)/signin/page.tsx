"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleChangeType } from "@/utils/types/handleChange";

interface LoginData {
   email: string;
   password: string;
}

export default function Page() {
   const router = useRouter();
   const [login, setLogin] = useState<LoginData>({
      email: "",
      password: "",
   });
   const [loading, setLoading] = useState(false);

   const handleChange = (e: handleChangeType) => {
      const { name, value } = e.target;
      setLogin((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      const toastId = toast.loading("Fazendo login...");
      try {
         const loginResponse = await signIn("credentials", {
            redirect: false,
            email: login.email,
            password: login.password,
         });

         if (!loginResponse || !loginResponse.ok) throw new Error(loginResponse?.error ?? "Failed to login");

         toast.update(toastId, { render: "Login bem-sucedido!", type: "success", isLoading: false, autoClose: 3000 });
         router.push("/");
      } catch (error) {
         toast.update(toastId, { render: "Falha no login: " + (error as Error).message, type: "error", isLoading: false, autoClose: 3000 });
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="flex flex-col justify-center items-center w-full gap-4 bg-white p-6 rounded-2xl shadow-lg max-w-md">
         <h1 className="text-3xl">Login</h1>

         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
         >
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
               disabled={loading}
            />
            <hr />

            <p className="text-left">Ainda não possui cadastro?</p>
            <Button
               className="w-full"
               text={"Cadastrar"}
               href={"/signup"}
            />
         </form>
      </div>
   );
}
