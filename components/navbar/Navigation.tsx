import Image from "next/image";
import Link from "next/link";

type NavItem = {
   href: string;
   icon: string;
   label: string;
} | null;

const navItems: NavItem[] = [
   { href: "/", icon: "/icons/black/wallet.svg", label: "Wallet" },
   { href: "/", icon: "/icons/black/x.svg", label: "Close" },
   null, // Placeholder for the center empty slot
   { href: "/", icon: "/icons/black/x.svg", label: "Close" },
   { href: "/dev", icon: "/icons/black/settings.svg", label: "Settings" },
];

export default function Navigation({ isOpen }: { isOpen: boolean }) {
   return (
      <div className={`w-full h-16 fixed flex justify-between bg-white transition-all duration-500 z-10 ${isOpen ? "-bottom-16" : "bottom-0"}`}>
         {navItems.map((item, index) =>
            item ? (
               <Link
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
            ) : (
               <div
                  key={index}
                  className="w-24"
               />
            )
         )}
      </div>
   );
}
