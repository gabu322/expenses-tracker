import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Page({ params }) {
   return <main className="flex flex-col justify-center items-center h-screen w-full gap-4">

      <h1 className="text-2xl">Login</h1>

      <form className="flex flex-col gap-4 w-4/5">
         <Input
            className="w-full"
            name="email"
            label="Email"
            type="email"
            required
         />

         <Input
            className="w-full"
            name="password"
            label="Senha"
            type="password"
            required
         />

         <Button
            className="w-full"
            type="submit"
            text={"Entrar"}
         />
         <hr />

         <p className="text-left">Ainda não possui cadastro?</p>
         <Button
            className="w-full"
            text={"Cadastrar"}
         />
      </form>
   </main>;
};
