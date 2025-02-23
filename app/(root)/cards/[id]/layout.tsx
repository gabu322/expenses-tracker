"use client";

import { CurrentCardProvider } from "./contex";

export default function Layout({ children }: { children: React.ReactNode }) {
   return <CurrentCardProvider>{children}</CurrentCardProvider>;
}
