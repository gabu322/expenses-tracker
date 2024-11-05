'use client';

import { useState, useEffect } from 'react';

const sizeConfig = {
    sm: {
        base: "h-8 text-sm",
        inputMargin: "m-1.5",
        labelSelected: "-top-1.5 text-xs",
        labelUnselected: "top-1.5 text-sm",
        underText: "bottom-[-15px] text-xs",
    },
    md: {
        base: "h-10 text-base",
        inputMargin: "m-2",
        labelSelected: "-top-2 text-xs",
        labelUnselected: "top-2 text-base",
        underText: "bottom-[-16px] text-xs",
    },
    lg: {
        base: "h-12 text-xl",
        inputMargin: "m-3",
        labelSelected: "-top-3 text-base",
        labelUnselected: "top-2.5 text-xl pl-1",
        underText: "bottom-[-19px] text-sm",
    },
    xl: {
        base: "h-14 text-2xl",
        inputMargin: "m-4",
        labelSelected: "-top-3.5 text-lg",
        labelUnselected: "top-3.5 text-2xl pl-1",
        underText: "bottom-[-22px] text-base",
    }
};

export default function Input({
    id,
    className = "",
    name,
    label,
    type = "text",
    initialValue = "",
    onChange,
    size = "md",
    mask,
    underText,
    required,
    disabled,
}) {
    const [value, setValue] = useState(initialValue);
    const [infoColor, setInfoColor] = useState({ outline: "#d1d5db", text: "#9ca3af" });
    const [isFocused, setIsFocused] = useState(false);
    const sizes = sizeConfig[size];

    useEffect(() => {
        if (isFocused && infoColor.outline != "#fca5a5") setInfoColor({ outline: "#3b82f6", text: "#3b82f6" });
    }, [isFocused])

    // a for any letter, 0 for any number, _ for any letter or number, any other character for itself
    const applyMask = (value, mask) => {
        let formattedValue = '';
        let valueIndex = 0;

        for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
            if (valueIndex >= value.length) {
                break;
            }

            const maskChar = mask[maskIndex];
            const valueChar = value[valueIndex];

            if (maskChar === 'a' && /[a-zA-Z]/.test(valueChar)) {
                formattedValue += valueChar;
                valueIndex++;
            } else if (maskChar === '0' && /\d/.test(valueChar)) {
                formattedValue += valueChar;
                valueIndex++;
            } else if (maskChar === '_' && /[a-zA-Z0-9]/.test(valueChar)) {
                formattedValue += valueChar;
                valueIndex++;
            } else if (maskChar !== 'a' && maskChar !== '0' && maskChar !== '_') {
                formattedValue += maskChar;
                if (maskChar === valueChar) {
                    valueIndex++;
                }
            } else {
                valueIndex++;
                maskIndex--;
            }
        }

        return formattedValue;
    };

    const handleInputChange = (e) => {
        let newValue = e.target.value;
        // Apply mask if provided
        if (mask) newValue = applyMask(newValue, mask);

        setValue(newValue);

        if (onChange) onChange({ target: { name, value: newValue } });
    };


    return <div
        className={`hover:outline-blue-500 flex items-center relative box-border outline outline-offset-[-1px] rounded transition text-black ${sizes.base} ${className} ${isFocused ? "outline-2" : "outline-1"} ${disabled ? "bg-gray-200 border-gray-500 cursor-not-allowed" : "cursor-text bg-white"} hover:outline-2`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
            setIsFocused(false);
            setInfoColor({ outline: "#d1d5db", text: "#9ca3af" });
        }}
        onClick={() => document.getElementById(id || name).focus()}
        style={{ outlineColor: infoColor.outline }}
    >

        <input
            id={id || name}
            name={name}
            className={`outline-none w-full ${sizes.inputMargin}`}
            type={type}
            value={value}
            onChange={handleInputChange}
            onInvalid={() => setInfoColor({ outline: "#fca5a5", text: "#f87171" })}
            disabled={disabled}
            required={required}
        />

        {label && <label
            htmlFor={id || name}
            className={`absolute transition-all rounded whitespace-nowrap font-medium left-2 z-2 ${isFocused || value || type == "date" || type == "month" ? `${sizes.labelSelected} px-1 cursor-default` : `${sizes.labelUnselected} cursor-text`} ${disabled ? 'bg-gray-200' : 'bg-white'}`}
            style={{ color: infoColor.text }}
        >
            {label}
        </label>}

        {underText && <div className={`absolute left-1.5 ${sizes.underText} text-left text-gray-400`}>
            {underText}
        </div>}
    </div>;
}
