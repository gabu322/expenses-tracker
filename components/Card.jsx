import Input from "./Input";

export default function Card({ className }) {
    return <div className={`w-96 h-60 rounded-lg mx-auto ${className || ""}`}>
        teste do cartão
        <Input label="teste" />
    </div>;
};
