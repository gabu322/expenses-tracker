"use client";

import { useState, useEffect } from "react";

interface CheckboxProps {
   id?: string;
   className?: string;
   name: string;
   label?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   initialChecked?: boolean;
   disabled?: boolean;
   required?: boolean;
}

export default function Checkbox({
   id,
   className,
   name,
   label,
   onChange,
   initialChecked = false,
   disabled,
   required,
}: CheckboxProps) {
   const [isChecked, setIsChecked] = useState<boolean>(initialChecked);
   const htmlFor = id || name;

   useEffect(() => {
      setIsChecked(initialChecked);
   }, [initialChecked]);

   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.checked;
      setIsChecked(newValue);
      if (onChange) onChange({ target: { name, checked: newValue } } as React.ChangeEvent<HTMLInputElement>);
   };

   return (
      <div
         className={`flex items-center relative ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className || ""}`}
      >
         <input
            id={htmlFor}
            className={`cursor-pointer ${disabled ? "bg-gray-200" : "bg-white"} border-gray-300   rounded-sm mr-2`}
            type="checkbox"
            name={name}
            checked={isChecked}
            onChange={handleCheckboxChange}
            disabled={disabled}
            required={required}
            aria-required={required}
         />
         {label && <label htmlFor={htmlFor}>{label}</label>}
      </div>
   );
}
