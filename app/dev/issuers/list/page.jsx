'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/components/Button";
import Image from "next/image";
import Select from "@/components/Select";
import Input from "@/components/Input";

export default function Page({ }) {
   const [issuerList, setIssuerList] = useState([]);
   const [filter, setFilter] = useState("");

   useEffect(() => {
      axios.get("/api/issuers")
         .then(response => setIssuerList(response.data))
         .catch(err => console.error(err));
   }, []);

   return <main className="flex flex-col gap-5 p-5">
      <div className="flex flex-row justify-between">
         <h1>Bancos</h1>
         <Button
            text={"cl"}
            onClick={() => console.log(issuerList)}
         />
      </div>
      <h2>Adicionar banco</h2>

      <Input
         id="Filter"
         name="Filter"
         label="Filtro"
         initialValue="a"
         onChange={(e) => setFilter(e.target.value)}
      />
      {issuerList
         .filter(issuer => issuer.name.toLowerCase().includes(filter.toLowerCase()))
         .map(issuer =>
            <div
               key={issuer.id}
               className="flex flex-row items-center justify-between rounded p-4 text-white font-bold"
               style={{ backgroundColor: issuer.color }}
            >
               <div className="flex-col-3">
                  {issuer.icon && <Image src={issuer.icon} width={50} height={50} />}
                  <p>{issuer.name}</p>
               </div>
               <Image src={"/icons/white/x.svg"} alt="x" width={16} height={16} />
            </div>
         )}
   </main>
};
