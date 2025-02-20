'use client';

import { useState } from "react";

import Overlay from "./Overlay";
import Transaction from "./Transaction";
import ToggleButton from "./ToggleButton";
import Navigation from "./Navigation";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const toggleNavbar = () => setIsOpen(!isOpen);

   return <div className={`w-full h-96 fixed bg-white z-10 transition-all duration-500 left-0 ${isOpen ? "-bottom-0" : "-bottom-80"}`}>
      <Overlay isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <Transaction isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <ToggleButton isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <Navigation isOpen={isOpen} />
   </div>;
}
