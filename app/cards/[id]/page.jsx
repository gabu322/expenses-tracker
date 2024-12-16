import Button from "@/components/Button";
import { use } from "react";

export default async function Page({ params }) {
   const { id } = await params;

   return <main>
      <div className="w-full h-24 grid grid-cols-2 gap-4">
         <div className="bg-white shadow rounded">

         </div>
         <div className="bg-white shadow rounded">

         </div>
      </div>
      {id}
   </main>;
};

