import { Plus } from "lucide-react";

interface ToggleButtonProps {
   isOpen: boolean;
   toggleNavbar: () => void;
}

export default function ToggleButton({ isOpen, toggleNavbar }: ToggleButtonProps) {
   return (
      <div
         className={`absolute top-0 left-1/2 -translate-x-1/2 z-[33] bg-white rounded-full p-2 duration-500 ${isOpen ? "-translate-y-10" : "-translate-y-5"}`}
         onClick={toggleNavbar}
         role="button"
         tabIndex={0}
         aria-label="Toggle Navbar"
      >
         <Plus
            size={64}
            strokeWidth={2.5}
            className={`bg-black rounded-full duration-700 ease-in-out ${isOpen ? "rotate-45" : "rotate-0 "}`}
            color="white"
         />
      </div>
   );
}
