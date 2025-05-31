import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-white `} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
