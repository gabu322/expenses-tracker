"use client";

import Button from "@/components/Button";

export default function Page() {
   return (
      <div className="flex flex-col gap-5 ">
         <Button
            text="Wallet"
            href={"/"}
            className={"w-full"}
         />

         <Button
            text="Criar novo cartão"
            href={"/cards"}
            className={"w-full"}
         />

         <Button
            text="Adicionar Banco"
            href={"/dev/issuers"}
            className={"w-full"}
         />

         {/* <Button
         text="Logout"
         onClick={() => {
            axios.post("/api/auth/logout");
         }}
         className={"w-full"}
      /> */}
      </div>
   );
}
