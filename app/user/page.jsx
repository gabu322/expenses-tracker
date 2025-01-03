import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Page({ params }) {
   return <main className="flex flex-col justify-center items-center h-screen">

      <h1 className="text-2xl">Login</h1>

      <form className="flex flex-col gap-4">
         <Input
            name="email"
            label="Email"
            type="email"
            required
         />

         <Input
            name="password"
            label="Senha"
            type="password"
            required
         />

         <Button type="submit">Entrar</Button>

         <hr />

         <p className="text-left">Ainda não possui cadastro?</p>
         <Button type="button">Cadastrar</Button>
      </form>
   </main>;
};
