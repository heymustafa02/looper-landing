import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Loopra - AI Automation Platform",
  description: "Automate workflows like never before. Less friction. More flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} selection:bg-blue-500/30 text-white bg-[#000000]`}>
        {children}
      </body>
    </html>
  );
}