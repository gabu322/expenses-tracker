import Input from "@/components/Input";

export default function Page({ }) {
    return <main className="min-h-screen flex flex-col gap-8 p-8">
        <h1>Criando novo cartão</h1>
        <form className="flex flex-col gap-4">
            <Input
                name="name"
                label="Nome do cartão"
            />
            <Input
                name="description"
                label="Descrição"
            />
        </form>
    </main>

};
