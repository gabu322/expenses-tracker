import { IssuerType } from "@/lib/types";
import Image from "next/image";
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
            <Image
               onClick={() => router.push(`/dev/issuers/${issuer.id}`)}
               className="cursor-pointer"
               src={"/icons/white/edit.svg"}
               alt="edit"
               width={16}
               height={16}
            />

            <Image
               onClick={() => issuer.id && handleDelete(issuer.id)}
               className="cursor-pointer"
               src={"/icons/white/x.svg"}
               alt="x"
               width={16}
               height={16}
            />
         </div>
      </div>
   );
}
