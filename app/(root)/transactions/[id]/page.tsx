import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { TransactionType } from "@/prisma/generated/client";
import axios from "axios";

export default function Page() {
   const { id } = useParams();
   const [transaction, setTransaction] = useState<TransactionType | null>(null);

   useEffect(() => {
      try {
         axios.get(`/api/transactions/${id}`).then((response) => {
            setTransaction(response.data);
         });
      } catch (error) {
         console.error("Failed to fetch transaction:", error);
      }
   }, [id]);

   return (
      <div>
         <h1>Transaction</h1>
         <pre>{JSON.stringify(transaction, null, 2)}</pre>
      </div>
   );
}
