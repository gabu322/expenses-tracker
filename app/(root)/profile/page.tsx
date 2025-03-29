import Image from "next/image";

export default function Page() {
   return (
      <>
         <h1>Perfil</h1>

         <div className="flex flex-col gap-4 mt-4">
            <div className="h-24 w-24 rounded-full bg-gray-300">
               <Image
                  src="/images/placeholder.png"
                  alt="Imagem de perfil"
                  width={200}
                  height={200}
                  className="rounded-full"
               />
            </div>
         </div>
      </>
   );
}
