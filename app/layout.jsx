import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
    title: "Expenses Tracker",
    // description: "",
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
