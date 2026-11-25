import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import NavHeader from "@/component/NavHeader";
import PriceMarquee from "@/component/PriceMarquee";
import Footer from "@/component/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "বাজার-দর | Shirsendu Biswas",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজার দর",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="bn" cz-shortcut-listen="true">
      <body className={hindSiliguri.className}>
        <NavHeader></NavHeader>
        <PriceMarquee></PriceMarquee>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
};