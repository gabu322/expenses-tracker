import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const bgColors = {
   blue: { bg: "bg-blue-600", hover: "hover:bg-blue-700", disabled: "bg-blue-400" },
   red: { bg: "bg-red-500", hover: "hover:bg-red-600", disabled: "bg-red-300" },
   green: { bg: "bg-green-600", hover: "hover:bg-green-700", disabled: "bg-green-400" },
   yellow: { bg: "bg-yellow-300", hover: "hover:bg-yellow-400", disabled: "bg-yellow-200" },
   orange: { bg: "bg-orange-400", hover: "hover:bg-orange-500", disabled: "bg-orange-300" },
   black: { bg: "bg-black", hover: "hover:bg-gray-800", disabled: "bg-gray-700" },
};

interface ButtonProps {
   className?: string;
   type?: "button" | "submit" | "reset";
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
   loading?: boolean;
   disabled?: boolean;
}

export default function Button({ className = "", type = "button", onClick, color = "blue", bgColor, hoverColor, text, textColor = "text-white", href, blank = false, children, rounded = false, loading = false, disabled = false }: ButtonProps) {
   const colors = bgColors[color] || bgColors.blue;
   const bg_color = disabled ? colors.disabled : bgColor || colors.bg;
   const hover_color = disabled ? "" : hoverColor || colors.hover;
   const router = useRouter();

   const handleClick = () => {
      if (loading || disabled) return;
      if (href) {
         if (blank) window.open(href, "_blank");
         else router.push(href);
      } else if (onClick) onClick();
   };

   return (
      <button
         type={type}
         className={`flex items-center justify-center relative h-10 px-3 shadow-sm transition-all duration-200 font-semibold text-sm ${disabled ? "cursor-not-allowed opacity-60" : loading ? "cursor-wait" : "cursor-pointer"} ${textColor} ${className} ${bg_color} ${!loading && hover_color} hover:shadow ${rounded ? "rounded-full" : "rounded"}`}
         onClick={handleClick}
         disabled={disabled}
      >
         {(loading && <Loader2 className="animate-spin h-5 w-5 mr-2" />) || children || text}
      </button>
   );
}
