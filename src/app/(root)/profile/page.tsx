"use client";

import Button from "@/components/Button";
import { ChevronRight, Heart, UserRound } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Page() {
   const { data: session } = useSession();

   return (
      <>
         <h1>Perfil</h1>

         <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
               <div className="h-32 w-32 rounded-full bg-gray-300 overflow-hidden">
                  {false ? ( // TODO: replace with actual condition to check if user has a profile picture
                     <Image
                        src="/images/placeholder.png"
                        alt="Imagem de perfil"
                        width={200}
                        height={200}
                        className="rounded-full"
                     />
                  ) : (
                     <UserRound size={128} />
                  )}
               </div>

               <div className="flex flex-col flex-1">
                  <h2 className="text-2xl font-bold">{session?.user.name}</h2>

                  <p className="text-gray-500">{session?.user.email}</p>

                  <Button text="Editar perfil" className="w-full mt-4 h-9 text-base!" href="/profile/edit" />
               </div>
            </div>

            <div className="flex flex-row gap-2 items-center">
               <Heart />
               <h4>Favoritos</h4>
               <ChevronRight className="ml-auto" />
            </div>
         </div>
      </>
   );
}
