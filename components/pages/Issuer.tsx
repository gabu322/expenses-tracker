import { IssuerType } from "@/utils/types";
import { PencilLine, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IssuerProps {
   issuer: IssuerType;
   handleDelete: (id: string) => void;
}

export function Issuer({ issuer, handleDelete }: IssuerProps) {
   const router = useRouter();

   return (
      <div
         className="flex flex-row items-center justify-between rounded p-4 text-white font-bold"
         style={{ backgroundColor: issuer.color }}
      >
         <div className="flex-row-3">
            {issuer.icon && (
               <Image
                  src={issuer.icon}
                  alt="icon"
                  width={32}
                  height={128}
               />
            )}
            <p>{issuer.name}</p>
         </div>

         <div className="flex flex-row gap-4">
            <Link href={`/dev/issuers/${issuer.id}`}>
               <PencilLine size={20} />
            </Link>

            <X
               size={20}
               onClick={() => issuer.id && handleDelete(issuer.id)}
               className="cursor-pointer"
            />
         </div>
      </div>
   );
}
