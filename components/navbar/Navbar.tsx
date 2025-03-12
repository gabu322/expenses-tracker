"use client";

import { useState } from "react";

import Overlay from "./Overlay";
import Transaction from "./Transaction";
import ToggleButton from "./ToggleButton";
import Navigation from "./Navigation";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const toggleNavbar = () => setIsOpen(!isOpen);

   return (
      <div className={`w-full h-96 fixed bg-white z-30 transition-all duration-500 left-0 shadow-[0px_-1px_10px_rgba(0,0,0,0.1)] ${isOpen ? "-bottom-0" : "-bottom-80"}`}>
         <Overlay
            isOpen={isOpen}
            toggleNavbar={toggleNavbar}
         />

         <Transaction
            isOpen={isOpen}
            toggleNavbar={toggleNavbar}
         />

         <ToggleButton
            isOpen={isOpen}
            toggleNavbar={toggleNavbar}
         />

         <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 mt-[1px] z-10 bg-gray-700 w- rounded-full p-2 duration-500 shadow-[0px_-3px_10px_rgba(0,0,0,0.15)] ${isOpen ? "-translate-y-10" : "-translate-y-5"}`} />

         <Navigation isOpen={isOpen} />
      </div>
   );
}
