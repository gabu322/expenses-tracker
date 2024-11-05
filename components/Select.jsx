'use client';

import Image from 'next/image';
import { useState, useEffect, useTransition } from 'react';

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
    onChange,
    options,
    getOptionInfo,
    label,
    disabled,
    required,
    size = "md",
    showOptionId = false,
}) {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [infoColor, setInfoColor] = useState({ outline: "#d1d5db", text: "#9ca3af" });
    const sizes = sizeConfig[size];

    useEffect(() => {
        if (isFocused && infoColor.outline != "#fca5a5") setInfoColor({ outline: "#3b82f6", text: "#3b82f6" });
    }, [isFocused])

    const handleInputChange = (e) => {
        let newValue = e.target.value;
        setValue(newValue);
        if (onChange) onChange({ target: { name, value: newValue } });
    };

    const handleOptionClick = (option) => {
        setValue(option.name);
        setTimeout(() => setIsFocused(false), 0);
        setInfoColor({ outline: "#d1d5db", text: "#9ca3af" });
        if (getOptionInfo) getOptionInfo(option);
    };

    return <div className={`relative rounded outline outline-offset-[-1px] ${className} ${sizes.base} ${isFocused ? "outline-2" : "outline-1"} hover:outline-2 ${disabled ? "bg-gray-100" : "bg-white"}`}
        onMouseLeave={() => {
            setIsFocused(false);
            setInfoColor({ outline: "#d1d5db", text: "#9ca3af" });
        }}
        onClick={() => setIsFocused(true)}
        style={{ outlineColor: infoColor.outline }}

    >
        <input
            id={id || name}
            name={name}
            className={`outline-none w-full ${sizes.inputMargin}`}
            type='text'
            value={value}
            onChange={handleInputChange}
            onInvalid={() => setInfoColor({ outline: "#fca5a5", text: "#f87171" })}
            autoComplete="off"
            disabled={disabled}
            required={required}
        />

        {label && <label
            htmlFor={id || name}
            className={`absolute transition-all rounded whitespace-nowrap font-medium left-2 z-2 ${isFocused || value ? `${sizes.labelSelected} px-1 cursor-default` : `${sizes.labelUnselected} cursor-text`} ${disabled ? 'bg-gray-200' : 'bg-white'} color`}
            style={{ color: infoColor.text }}
        >
            {label}
        </label>}

        {isFocused && <div
            className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded max-h-60 overflow-y-auto transition-all z-10 ${isFocused ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
            {options.filter(option =>
                option.name.toLowerCase().includes((value || '').toLowerCase())).map(option =>
                    <div
                        key={option.id}
                        className={`p-2 transition cursor-pointer ${option.disabled ? "opacity-60 bg-gray-100" : "hover:bg-gray-200"}`}
                        onClick={() => !option.disabled && handleOptionClick(option)}
                    >
                        {showOptionId && `${option.id} - `}{option.name}
                    </div>
                )}
        </div>}
        <div
            className='absolute right-1 top-1 p-2 bg-white z-2'
            onClick={() => {
                setValue("");
                console.log("clicked");
                setTimeout(() => setIsFocused(false), 0);
            }}
        >

            <Image src="/icons/black/x.svg" width={16} height={16} />
        </div>
    </div>;
}
