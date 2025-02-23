"use client";

import Navbar from "@/components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { CardProvider } from "./contex";

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <main>
         <SessionProvider>
            <CardProvider>{children}</CardProvider>
         </SessionProvider>

         <Navbar />
      </main>
   );
}
