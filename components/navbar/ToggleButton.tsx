import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

interface ToggleButtonProps {
   isOpen: boolean;
   toggleNavbar: () => void;
}

export default function ToggleButton({ isOpen, toggleNavbar }: ToggleButtonProps) {
   return (
      <div
         className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center z-[12] scale-150 transition-all duration-500 ${isOpen ? "-translate-y-7" : "-translate-y-3"}`}
         onClick={toggleNavbar}
         role="button"
         tabIndex={0}
         aria-label="Toggle Navbar"
      >
         <div className="absolute w-12 h-12 bg-white rounded-full"></div>

         <div className="bg-black rounded-full z-10 w-10 h-10">
            <ChevronRight
               size={40}
               className={`absolute transition duration-500 ${isOpen ? "rotate-90 translate-x-0" : "-translate-x-[4.5px]"}`}
               color="white"
            />

            <ChevronLeft
               size={40}
               className={`absolute transition duration-500 ${isOpen ? "-rotate-90 translate-x-0" : "translate-x-[4.5px]"}`}
               color="white"
            />
         </div>
      </div>
   );
}
