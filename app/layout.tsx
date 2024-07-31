import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Providers from "@/components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BMW lifestyle",
  description:
    "crafted from the finest materials and designed to embody the spirit of the BMW brand, the latest collections of BMW Lifestyle accessories, clothing and gear are the perfect complement to your BMW. Embrace the BMW Lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="min-h-screen flex flex-col">{children}</div>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright BMW LIFESTYLE © BMW ZA 2024</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
