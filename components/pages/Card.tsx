import { CardType, IssuerType } from "@/lib/types";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { darken, lighten } from "polished";
import CountUp from "react-countup";

interface CardProps {
   className?: string;
   card: CardType;
   issuer?: IssuerType;
}

export function Card({ className, card, issuer }: CardProps) {
   const lightenedColor = lighten(0.1, issuer?.color || "#000");
   const darkenedColor = darken(0.1, issuer?.color || "#000");

   return (
      <div
         className={`w-full aspect-[8/5] p-3 rounded-lg flex flex-col shadow-lg ${className || ""} text-white max-w-[400px]`}
         style={{ background: `linear-gradient(to bottom, ${darkenedColor}, ${lightenedColor})` }}
      >
         <div className="flex flex-row justify-between mb-2 h-10">
            <Image
               src={issuer?.icon || "/default-icon.png"}
               alt={issuer?.name || "Issuer Icon"}
               className="h-10"
               width={200}
               height={40}
               style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <h4>{card.nickname}</h4>
         </div>

         <div className="flex-grow flex flex-col justify-between">
            {card.debit && (
               <CountUp
                  className="text-xl leading-none font-semibold"
                  end={card.balance || 0}
                  prefix={"R$"}
                  decimals={2}
               />
            )}

            {card.credit && (
               <div className="flex flex-col mb-1">
                  <h6 className="text-gray-300 leading-none">Used credit: (of ${card.limit} limit)</h6>
                  <CountUp className="text-xl font-semibold" end={card.usedLimit || 0} prefix={"R$"} decimals={2} />
               </div>
            )}
         </div>
         <div className="w-full flex flex-row justify-between">
            <div>{card.number}</div>

            <Link href={`/cards/${card.id}`} className="h-4 -translate-y-3">
               <Ellipsis size={40} className="cursor-pointer" />
            </Link>
         </div>
      </div>
   );
}
