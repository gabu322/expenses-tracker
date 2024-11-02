import Button from "@/components/Button";

export default function Page({ }) {
    return <main className="flex flex-col gap-5 p-5">
        <Button
            text="Wallet"
            href={"/"}
            className={"w-full"}
        />
        <Button
            text="Criar novo cartão"
            href={"/cards"}
            className={"w-full"}
        />
        <Button
            text="Adicionar Banco"
            href={"/dev/issuers"}
            className={"w-full"}
        />
        <Button
            text="Listagem de Bancos"
            href={"/dev/issuers/list"}
            className={"w-full"}
        />
    </main>
};
