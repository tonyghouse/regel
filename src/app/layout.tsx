import "../styles/globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import ThemeContextDefaultProvider from "@/context/ThemeContextProvider";
import Navbar from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Regel",
  description: "Regular Expression Helper Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeContextDefaultProvider>

    
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased mx-1 my-1",
          fontSans.variable
        )}>
           <Navbar/>
          {children}</body>
          </ThemeContextDefaultProvider>
    </html>
  );
}


