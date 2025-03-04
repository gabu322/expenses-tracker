"use client";

import React, { useState, useEffect, useRef } from "react";

interface InputProps {
   id?: string;
   className?: string;
   name: string;
   label?: string;
   type?: string;
   initialValue?: string | number;
   value?: string | number;
   onChange?: (event: { target: { name: string; value: string | number } }) => void;
   size?: keyof typeof sizeConfig;
   mask?: string;
   currency?: string;
   underText?: string;
   rounded?: boolean;
   required?: boolean;
   disabled?: boolean;
}

const sizeConfig = {
   sm: {
      base: "h-8 text-sm",
      labelSelected: "-top-1.5 text-xs",
      labelUnselected: "top-1.5 text-sm",
      underText: "bottom-[-15px] text-xs",
   },
   md: {
      base: "h-10 text-base",
      labelSelected: "-top-2 text-xs",
      labelUnselected: "top-2 text-base",
      underText: "bottom-[-16px] text-xs",
   },
   lg: {
      base: "h-12 text-xl",
      labelSelected: "-top-3 text-base",
      labelUnselected: "top-2.5 text-xl pl-1",
      underText: "bottom-[-19px] text-sm",
   },
   xl: {
      base: "h-14 text-2xl",
      labelSelected: "-top-3.5 text-lg",
      labelUnselected: "top-3.5 text-2xl pl-1",
      underText: "bottom-[-22px] text-base",
   },
};

export default function Input({ id, className = "", name, label, type = "text", initialValue = "", value, onChange, size = "md", mask, currency, underText, rounded, required, disabled }: InputProps) {
   const [internalValue, setInternalValue] = useState<string | number>("");
   const [infoColor, setInfoColor] = useState<{ outline: string; text: string }>({ outline: "#d1d5db", text: "#9ca3af" });
   const [isFocused, setIsFocused] = useState<boolean>(false);
   const sizes = sizeConfig[size];
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      let formattedValue = initialValue.toString() || "";
      formattedValue = formatValue(formattedValue);

      setInternalValue(formattedValue);
   }, []);

   useEffect(() => {
      let formattedValue = value?.toString() || "";

      if (formatted) {
         setFormatted(false);
      } else {
         formattedValue = formatValue(formattedValue);
         setInternalValue(formattedValue);
      }
   }, [value]);

   useEffect(() => {
      if (isFocused && infoColor.outline != "#fca5a5") setInfoColor({ outline: "#3b82f6", text: "#3b82f6" });
   }, [isFocused, infoColor.outline]);

   const [formatted, setFormatted] = useState<boolean>(false);
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      newValue = formatValue(newValue);
      setInternalValue(newValue);

      if (onChange) {
         onChange({
            target: {
               name,
               value: currency ? parseFloat(newValue.replace(currency, "")) : newValue,
            },
         });
      }

      setFormatted(true);
   };

   const formatMask = (value: string): string => {
      if (!mask) return value; // If there is no mask, return the value as is
      let formattedValue = "";
      let valueIndex = 0;

      for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
         if (valueIndex >= value.length) {
            break;
         }

         const maskChar = mask[maskIndex];
         const valueChar = value[valueIndex];

         if ((maskChar === "a" && /[a-zA-Z]/.test(valueChar)) || (maskChar === "0" && /\d/.test(valueChar)) || (maskChar === "_" && /[a-zA-Z0-9]/.test(valueChar))) {
            formattedValue += valueChar;
            valueIndex++;
         } else if (maskChar !== "a" && maskChar !== "0" && maskChar !== "_") {
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

   const formatCurrency = (value: string): string => {
      if (value === currency) return currency + "0.00"; // If everything is deleted, return a default value

      const cleanValue = value
         .replace(/[^\d.]/g, "") // Remove invalid characters
         .replace(/(\..*)\./g, "$1"); // Remove extra dots

      // If the value is not a number or is a single character, return a default value
      if (isNaN(+cleanValue) || String(value).length <= 1) {
         const returnValue = !isNaN(+cleanValue) && cleanValue != "" ? cleanValue : 0;
         return currency + returnValue.toString() + ".00";
      }

      let numericValue = parseFloat(cleanValue);

      // If the value has more than 2 decimal places, shift the value to the left
      const decimalPlaces = (cleanValue.split(".")[1] || "").length;
      if (decimalPlaces > 2) numericValue = numericValue * 10;
      else if (decimalPlaces == 1) numericValue = numericValue / 10;

      return currency + numericValue.toFixed(2);
   };

   const formatColor = (value: string): string => {
      if (value === "#" || value === "") return "#000000"; // If everything is deleted, return a default value

      return "#" + value.replace(/[^a-fA-F0-9]/g, "").slice(0, 6);
   };

   const formatValue = (value: string): string => {
      if (currency) return formatCurrency(value);
      else if (mask) return formatMask(value);
      else if (type === "color") return formatColor(value);

      return value;
   };

   return (
      <div
         className={`flex flex-row gap-2 px-2 relative transition-all text-black box-border outline outline-offset-[-1px] hover:outline-2 hover:outline-blue-500 ${rounded ? "rounded-full" : "rounded"} ${sizes.base} ${className} ${isFocused ? "outline-2" : "outline-1"} ${disabled ? "bg-gray-200 border-gray-500 cursor-not-allowed" : "cursor-text bg-white"}`}
         onFocus={() => setIsFocused(true)}
         onBlur={() => {
            setIsFocused(false);
            setInfoColor({ outline: "#d1d5db", text: "#9ca3af" });
         }}
         onClick={() => inputRef.current && inputRef.current.focus()}
         style={{ outlineColor: infoColor.outline }}
      >
         {type === "color" && (
            <div
               className="rounded-md h-6 w-6 my-auto overflow-hidden relative cursor-pointer flex-shrink-0"
               style={{ backgroundColor: internalValue.toString() }}
               onClick={() => {
                  const colorInput = document.getElementById(`${id || name}-color`);
                  if (colorInput) colorInput.click();
               }}
            >
               <input
                  ref={inputRef}
                  id={`${id || name}-color`}
                  type="color"
                  value={internalValue}
                  onChange={handleInputChange}
                  className="w-0 h-0 cursor-pointer absolute bottom-0"
               />
            </div>
         )}

         <input
            ref={inputRef}
            id={id || name}
            name={name}
            className={`outline-none w-full bg-transparent my-auto`}
            type={type == "color" ? "text" : type}
            value={internalValue}
            onChange={handleInputChange}
            onInvalid={() => setInfoColor({ outline: "#fca5a5", text: "#f87171" })}
            disabled={disabled}
            required={required}
            aria-label={label}
            aria-invalid={infoColor.outline === "#fca5a5"}
         />

         {label && (
            <label
               htmlFor={id || name}
               className={`absolute transition-all rounded whitespace-nowrap font-medium left-2 z-2 leading-1
            ${isFocused || internalValue || type == "date" || type == "month" || type == "color" || type == "datetime-local" ? `${sizes.labelSelected} px-1 cursor-default` : `${sizes.labelUnselected} cursor-text`} 
            ${disabled ? "bg-gray-200" : "bg-white"}`}
               style={{ color: infoColor.text }}
            >
               {label}
               {required && "*"}
            </label>
         )}

         {underText && <div className={`absolute left-1.5 ${sizes.underText} text-left text-gray-400`}>{underText}</div>}
      </div>
   );
}
