import Link from "next/link";
import { ChartColumnIncreasing, CircleUserRound, Settings, WalletCards } from "lucide-react";

export default function Navigation({ isOpen }: { isOpen: boolean }) {
   return (
      <div className={`w-full h-16 p-3 gap-11 fixed flex justify-between bg-white transition-all duration-500 z-10 ${isOpen ? "-bottom-16" : "bottom-0"}`}>
         <Link href="/">
            <WalletCards
               color="black"
               size={40}
               strokeWidth="1.8"
            />
         </Link>

         <Link href="/cards">
            <ChartColumnIncreasing
               color="black"
               size={40}
               strokeWidth="1.8"
            />
         </Link>

         <div className="flex-grow" />

         <Link href="/settings">
            <Settings
               color="black"
               size={40}
               strokeWidth="1.8"
            />
         </Link>

         <Link href="/profile">
            <CircleUserRound
               color="black"
               size={40}
               strokeWidth="1.8"
            />
         </Link>
      </div>
   );
}
