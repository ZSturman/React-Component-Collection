import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Component Collection",
  description: "A collection of reusable components created by Zachary Sturman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex flex-col justify-between  bg-slate-100`}>
        <Header/>
   

        {children}

        <Footer />
        
        </body>
    </html>
  );
}
