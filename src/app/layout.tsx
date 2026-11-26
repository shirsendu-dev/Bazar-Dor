import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import NavHeader from "@/component/NavHeader";
import PriceMarquee from "@/component/PriceMarquee";
import Footer from "@/component/Footer";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"])

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার-দর | Shirsendu Biswas",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজার দর",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="bn" cz-shortcut-listen="true">
      <body className={notoSansBengali.className} >
        <Suspense>
          <NavHeader></NavHeader>
          <PriceMarquee></PriceMarquee>
        </Suspense>
        {children}
        <Footer></Footer>
        
        <Toaster></Toaster>
      </body>
    </html>
  );
};