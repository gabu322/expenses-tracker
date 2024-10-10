'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";

export function Card({
    cardName,
    className,
    card,
    backgroundColor = "#abcabc"
}) {
    return <div
        className={`w-full aspect-[8/5] p-3 rounded-lg flex flex-col ${className || ""} text-white ` }
        style={{ backgroundColor: backgroundColor }}
    >
        <div className="flex flex-row justify-between">
            <h2 className="">{cardName}</h2>
            <h4>{card.acceptsDebit
                ? card.acceptsCredit
                    ? "Debit/Credit"
                    : "Debit"
                : "Credit"
            }</h4>
        </div>
        <div className="flex-grow flex flex-col justify-between">
            {card.acceptsDebit ? <h3 className="leading-none">$ {card.debitCard.balance}</h3> : <div />}

            {card.acceptsCredit && <div className="flex flex-col mb-1">
                <h6 className="text-gray-300 leading-none">Used credit: (of ${card.creditCard.creditLimit} limit)</h6>
                <h3 className="">$ {card.creditCard.currentCredit}</h3>
            </div>}
        </div>
        <div className="w-full flex flex-row justify-between">
            <div>{"**** **** **** " + card.number.slice(-4)}</div>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="4" />
                </svg>
                </div>
        </div>
    </div>;
};
