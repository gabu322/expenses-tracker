import Link from "next/link";
import { ReactNode } from "react";

const bgColors = {
   blue: { bg: "bg-blue-600", hover: "hover:bg-blue-700" },
   red: { bg: "bg-red-500", hover: "hover:bg-red-600" },
   green: { bg: "bg-green-600", hover: "hover:bg-green-700" },
   yellow: { bg: "bg-yellow-300", hover: "hover:bg-yellow-400" },
   orange: { bg: "bg-orange-400", hover: "hover:bg-orange-500" },
   black: { bg: "bg-black", hover: "hover:bg-gray-800" },
};

interface ButtonProps {
   className?: string;
   type?: "button" | "submit" | "reset" | undefined;
   onClick?: () => void;
   color?: keyof typeof bgColors;
   bgColor?: string;
   hoverColor?: string;
   text?: string;
   textColor?: string;
   href?: string;
   blank?: boolean;
   children?: ReactNode;
   rounded?: boolean;
   disabled?: boolean;
}

export default function Button({ className = "", type = "button", onClick, color = "blue", bgColor, hoverColor, text, textColor = "text-white", href, blank = false, children, rounded = false, disabled = false }: ButtonProps) {
   const colors = bgColors[color] || bgColors.blue;
   const bg_color = bgColor || colors.bg;
   const hover_color = hoverColor || colors.hover;

   return href ? (
      <Link
         href={href}
         target={blank ? "_blank" : "_self"}
         className={`flex items-center justify-center relative h-10 px-3 shadow-sm hover:shadow transition-all duration-200 font-semibold text-sm ${textColor} ${className} ${bg_color} ${hover_color} ${rounded ? "rounded-full" : "rounded"}`}
      >
         {children || text}
      </Link>
   ) : (
      <button
         type={type}
         className={`flex items-center justify-center relative h-10 px-3 shadow-sm hover:shadow transition-all duration-200 font-semibold text-sm ${disabled ? "cursor-default" : "cursor-pointer"} ${textColor} ${className} ${bg_color} ${hover_color} ${rounded ? "rounded-full" : "rounded"}`}
         onClick={onClick}
         disabled={disabled}
      >
         {disabled && <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full cursor-default"></div>}
         {children || text}
      </button>
   );
}
