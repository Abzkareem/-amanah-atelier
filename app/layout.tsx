import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amanahatelier.com"),
  title: {
    default: "Amanah Atelier — Made with Intention",
    template: "%s — Amanah Atelier",
  },
  description:
    "Amanah Atelier creates considered pieces for everyday living — rooted in faith, modesty, and craftsmanship.",
  openGraph: {
    title: "Amanah Atelier — Made with Intention",
    description:
      "Considered pieces for everyday living — rooted in faith, modesty, and craftsmanship.",
    url: "https://amanahatelier.com",
    siteName: "Amanah Atelier",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanah Atelier — Made with Intention",
    description:
      "Considered pieces for everyday living — rooted in faith, modesty, and craftsmanship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
