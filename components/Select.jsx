'use client';

import { useState, useEffect } from 'react';


const sizeConfig = {
    sm: {
        base: "h-8 text-sm",
        inputMargin: "m-1.5",
        labelSelected: "-top-1.5 text-xs",
        labelUnselected: "top-1.5 text-sm",
        underText: "bottom-[-15px] text-xs",
        underTextMargin: "mb-3"
    },
    md: {
        base: "h-10 text-base",
        inputMargin: "m-2",
        labelSelected: "-top-2 text-xs",
        labelUnselected: "top-2 text-base",
        underText: "bottom-[-16px] text-xs",
        underTextMargin: "mb-3.5"
    },
    lg: {
        base: "h-12 text-xl",
        inputMargin: "m-3",
        labelSelected: "-top-3 text-base",
        labelUnselected: "top-2.5 text-xl pl-1",
        underText: "bottom-[-19px] text-sm",
        underTextMargin: "mb-4"
    },
    xl: {
        base: "h-14 text-2xl",
        inputMargin: "m-4",
        labelSelected: "-top-3.5 text-lg",
        labelUnselected: "top-3.5 text-2xl pl-1",
        underText: "bottom-[-22px] text-base",
        underTextMargin: "mb-5"
    }
};

export default function Select({
    id,
    className = "",
    name,
    options,
    label,
    disabled,
    required,
    size = "md",
}) {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const sizes = sizeConfig[size];

    const handleInputChange = (e) => {
        let newValue = e.target.value;
        if (type === "currency") {
            newValue = newValue.replace(/[^0-9.]/g, '');
        }
        setValue(newValue);
        onChange({ target: { name, value: newValue } });
    };

    const handleOptionClick = (option) => {
        setValue(option.name);
        setIsFocused(false);
        if (getOptionInfo) getOptionInfo(option);
    };

    const commonAttributes = {
        id: id || name,
        name: name,
        onChange: handleInputChange,
        onInvalid: (e) => {
            e.target.setCustomValidity("Este campo é obrigatório");
            setValid(false);
        },
        onInput: (e) => {
            e.target.setCustomValidity("");
            setValid(true);
        },
        outline: "none",
        disabled: disabled,
        required: required
    };

    return <div className={`relative rounded outline outline-offset-[-1px] ${className} ${sizes.base} ${isFocused ? " outline-blue-500 outline-2 " : "outline-gray-300 outline-1"}`}
        onMouseLeave={() => setIsFocused(false)}
        onClick={() => setIsFocused(true)}
    >
        <input {...commonAttributes} autoComplete="off" />
        {isFocused}
        <div className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded max-h-60 overflow-y-auto transition-all z-10 ${isFocused ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}>
            {options.filter(option => option.name.toLowerCase().includes((value || '').toLowerCase())).map(option => (
                <div
                    key={option.id}
                    className={`p-2 transition cursor-pointer ${option.disabled ? "opacity-60 bg-gray-100" : "hover:bg-gray-200"
                        }`}
                    onClick={() => !option.disabled && handleOptionClick(option)}
                >
                    {option.id} - {option.name}
                </div>
            ))}
        </div>
        <div className='absolute right-1 top-1 p-2 bg-white z-2' onClick={() => setValue("")}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2L8 8L2 2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 14L8 8L14 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </div>;
}
