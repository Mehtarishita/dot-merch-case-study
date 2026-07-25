import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dot Merchandise | Designed for Curious Minds",
  description: "Explore the Dot merchandise collection. Designed for curious minds, created to celebrate learning.",
};

import { C } from "@/lib/colors";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}
