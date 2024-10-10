'use client';

import { useState, useEffect } from 'react';

const sizeConfig = {
    sm: {
        base: "h-8 text-sm",
        checkboxSize: "w-4 h-4",
        labelMargin: "ml-2",
        labelSelected: "text-xs",
        labelUnselected: "text-sm",
        underText: "text-xs",
        underTextMargin: "mb-1"
    },
    md: {
        base: "h-10 text-base",
        checkboxSize: "w-5 h-5",
        labelMargin: "ml-2.5",
        labelSelected: "text-xs",
        labelUnselected: "text-base",
        underText: "text-xs",
        underTextMargin: "mb-2"
    },
    lg: {
        base: "h-12 text-lg",
        checkboxSize: "w-6 h-6",
        labelMargin: "ml-3",
        labelSelected: "text-sm",
        labelUnselected: "text-lg",
        underText: "text-sm",
        underTextMargin: "mb-3"
    },
    xl: {
        base: "h-14 text-xl",
        checkboxSize: "w-7 h-7",
        labelMargin: "ml-4",
        labelSelected: "text-base",
        labelUnselected: "text-xl",
        underText: "text-base",
        underTextMargin: "mb-4"
    }
};

export default function Checkbox({
    id,
    className,
    name,
    label,
    onChange,
    initialChecked = false,
    disabled,
    required,
}) {
    const [isChecked, setIsChecked] = useState(initialChecked);
    const htmlFor = id || name;

    useEffect(() => {
        setIsChecked(initialChecked);
    }, [initialChecked]);

    const handleCheckboxChange = (e) => {
        let newValue = e.target.checked;
        setIsChecked(newValue);
        if (onChange) onChange({ target: { name, checked: newValue } });
    };

    return (
        <div
            className={`flex items-center relative ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className || ''}`}
        >
            <input
                id={htmlFor}
                className={`cursor-pointer ${disabled ? 'bg-gray-200' : 'bg-white'} border-gray-300   rounded-sm mr-2`}
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                required={required}
                aria-required={required}
            />
            {label && (
                <label htmlFor={htmlFor} >
                    {label}
                </label>
            )}

        </div>
    );
}
