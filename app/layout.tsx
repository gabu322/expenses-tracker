import { Nunito } from "next/font/google";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

const nunito = Nunito({
   subsets: ["latin"],
   weight: ["200", "300", "400", "500", "700", "900"],
});

export const metadata = {
   title: "Expenses Tracker",
   description: "A mobile-focused web application designed to help users track their income and expenses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={nunito.className}>
            {children}
            <ToastContainer
               autoClose={3000}
               pauseOnHover={false}
               position="bottom-right"
               transition={Slide}
            />
         </body>
      </html>
   );
}
