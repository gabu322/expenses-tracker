'use client';

import Navbar from "@/components/navbar/Navbar";

import { SessionProvider } from "next-auth/react";

export default function Layout({ children }) {
   return <main>
      <SessionProvider>
         {children}
      </SessionProvider>
      <Navbar />
   </main>;
}
