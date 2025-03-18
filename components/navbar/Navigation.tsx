import Link from "next/link";
import { ChartColumnIncreasing, CircleUserRound, Plus, Settings, WalletCards } from "lucide-react";

interface NavigationProps {
   isOpen: boolean;
   toggleNavbar: () => void;
}

export default function Navigation({ toggleNavbar }: NavigationProps) {
   return (
      <div className="absolute w-full h-16 p-3 gap-11 flex z-[32] bg-white bottom-0 sm:bottom-10 sm:w-[420px] sm:rounded-full sm:left-1/2 sm:-translate-x-1/2 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
         <Link href="/">
            <WalletCards color="black" size={40} strokeWidth="1.8" />
         </Link>

         <Link href="/cards">
            <ChartColumnIncreasing color="black" size={40} strokeWidth="1.8" />
         </Link>

         <div className="absolute h-20 w-20 rounded-full z-[31] bg-white left-1/2 -translate-x-1/2 -top-6" />
         <div className="flex-grow flex items-center justify-center z-[40]">
            <Plus
               size={64}
               strokeWidth={2.5}
               className={`bg-black rounded-full duration-500 absolute bottom-4 cursor-pointer`}
               color="white"
               onClick={toggleNavbar}
            />
         </div>

         <Link href="/settings">
            <Settings color="black" size={40} strokeWidth="1.8" />
         </Link>

         <Link href="/profile">
            <CircleUserRound color="black" size={40} strokeWidth="1.8" />
         </Link>
      </div>
   );
}
