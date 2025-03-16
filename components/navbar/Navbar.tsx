"use client";

import { useState } from "react";

import Overlay from "./Overlay";
import Transaction from "./Transaction";
import Navigation from "./Navigation";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const toggleNavbar = () => setIsOpen(!isOpen);

   return (
      <div className={` fixed w-full z-30 left-0 bottom-0`}>
         <Navigation
            isOpen={isOpen}
            toggleNavbar={toggleNavbar}
         />

         <Overlay
            isOpen={isOpen}
            toggleNavbar={toggleNavbar}
         />

         <Transaction
            isOpen={isOpen}
            toggleNavbar={toggleNavbar}
         />
      </div>
   );
}
