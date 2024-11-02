'use client';

import { useState, useEffect } from 'react';

export default function Select({
    id,
    className,
    name,
    options,
    label,
    disabled,
    required,
}) {

    const sizes = {
        sm: {
            base: "h-8 p-1.5 text-sm",
            labelSelected: "-top-1.5 text-xs px-1",
            labelUnselected: "top-1.5 text-sm",
        },
        md: {
            base: "h-10 p-2",
            labelSelected: "-top-2 text-xs px-1",
            labelUnselected: "top-2 text-base",
        },
        lg: {
            base: "h-12 p-3 text-xl",
            labelSelected: "-top-3 text-sm px-1",
            labelUnselected: "top-2.5 text-xl pl-1",
        }
    };

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

    return <select {...commonAttributes} className='w-full p-2 border-black border-2 rounded'>
        <option key="default" value="" disabled>Selecione uma opção</option>
        {options.map(option => (
            <option key={option.id} value={option.id} disabled={option.disabled}>
                {option.name}
            </option>
        ))}
    </select>;
}
