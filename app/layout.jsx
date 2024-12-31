import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const roboto = Roboto({
   subsets: ["latin"],
   weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
   title: "Expenses Tracker",
   description: "A mobile-focused web application designed to help users track their income and expenses.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            {children}
            <Navbar />
         </body>
      </html>
   );
}
