import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AFRINOVA FOOD LIMITED | Tanzania Sausage",
  description:
    "AFRINOVA FOOD LIMITED — quality sausages from East African pastures. Products, WhatsApp consultation, delivery & agent partnership. Karibu · Wasiliana nasi.",
  openGraph: {
    title: "AFRINOVA FOOD LIMITED | Tanzania Sausage",
    description:
      "From East African pastures to your table — products, delivery, and agent applications.",
    locale: "en_TZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
