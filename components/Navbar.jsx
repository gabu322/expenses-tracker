'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavbar = () => setIsOpen(!isOpen);

   return <div className={`w-full h-80 fixed bg-white z-10 transition-all duration-500 ${isOpen ? "-bottom-0" : "-bottom-64"}`}>
      <Overlay isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <TransactionInfo isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <ToggleButton isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <Navigation isOpen={isOpen} />
   </div>;
}

export function Overlay({ isOpen, toggleNavbar }) {
   return <div
      className={`w-full h-full fixed bg-black transition-opacity duration-500 top-0 ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      aria-hidden="true"
      onClick={toggleNavbar}
   />;
}

export function TransactionInfo({ isOpen, toggleNavbar }) {
   return <div className={`w-full h-80 px-4 pt-11 fixed bg-white flex flex-col gap-4 items-center transition-all duration-500 ${isOpen ? "-bottom-0" : "-bottom-64"}`}>

      <div className="flex flex-row gap-4 w-full">
         <Input
            label="Valor"
            name="amount"
            currency="R$"
            required
            className="w-1/2"
            onChange={(e) => console.log(e.target.value)}
         />

         <Select
            label="Tipo"
            name="type"
            options={[
               { id: "income", name: "Receita" },
               { id: "expense", name: "Despesa" },
            ]}
            required
            className="w-1/2"
            onChange={(e) => console.log(e.target.value)}
         />
      </div>

      <div className="flex flex-row gap-4 w-full">
         <Input
            label="Data"
            name="date"
            type="date"
            required
            className="w-1/2"
            onChange={(e) => console.log(e.target.value)}
         />

         <Input
            label="Hora"
            name="hour"
            type="time"
            required
            className="w-1/2"
            onChange={(e) => console.log(e.target.value)}
         />
      </div>

      <Input
         label="Descrição"
         name="description"
         className="w-full"
         onChange={(e) => console.log(e.target.value)}
      />

      <div className="flex flex-row gap-4 w-full">
         <Button text="Débito" className="w-full" />

         <Button text="Crédito" color="green" className="w-full" />
      </div>
   </div>;
}

export function ToggleButton({ isOpen, toggleNavbar }) {
   return <div
      className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center z-[12] scale-150 transition-all duration-500 ${isOpen ? "-translate-y-7" : "-translate-y-3"}`}
      onClick={toggleNavbar}
      role="button"
      tabIndex={0}
      aria-label="Toggle Navbar"
   >
      <Image
         src="/icons/black/addCircled.svg"
         alt="Toggle Navbar"
         width={48}
         height={48}
         className="z-10"
      />
      <div className="absolute w-12 h-12 bg-white rounded-full"></div>
   </div>;
}


const navItems = [
   { href: "/", icon: "/icons/black/wallet.svg", label: "Wallet" },
   { href: "/", icon: "/icons/black/x.svg", label: "Close" },
   null, // Placeholder for the center empty slot
   { href: "/", icon: "/icons/black/x.svg", label: "Close" },
   { href: "/dev", icon: "/icons/black/settings.svg", label: "Settings" },
];

export function Navigation({ isOpen }) {
   return <div
      className={`w-full h-16 fixed flex justify-between bg-white transition-all duration-500 z-10 ${isOpen ? "-bottom-16" : "bottom-0"}`}
   >
      {navItems.map((item, index) => item
         ? <Link
            key={index}
            href={item.href}
            className="w-16 h-16 flex items-center justify-center"
            aria-label={item.label}
         >
            <Image
               src={item.icon}
               alt={item.label}
               width={32}
               height={32}
            />
         </Link>
         : <div key={index} className="w-24" />
      )}
   </div>;
}
