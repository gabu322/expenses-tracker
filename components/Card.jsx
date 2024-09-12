import Input from "./Input";

export default function Card({
    cardName,
    className,
    backgroundColor,
}) {
    return <div className={` w-11/12 aspect-[8/5] p-4 rounded-lg mx-auto ${className || ""}`}>
        <h2>{cardName}</h2>
        <Input label="teste" />
    </div>;
};
