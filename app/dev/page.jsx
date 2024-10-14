import Button from "@/components/Button";

export default function Page(params) {
    return <main className="flex flex-col gap-5 p-5">
        <Button
            text="Wallet"
            href={"/"}
            className={"w-full"}
        />
        <Button
            text="Criar novo cartão"
            href={"/cards"}
        />
        <Button
            text="Issuer"
            href={"/dev/issuer"}
        />
    </main>
};
