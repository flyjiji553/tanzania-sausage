import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "坦桑尼亚香肠 | AFRINOVA FOOD LIMITED",
  description:
    "AFRINOVA FOOD LIMITED — Tanzania sausage. East African flavours, WhatsApp consultation, delivery & agent partnership. Karibu · Wasiliana nasi.",
  openGraph: {
    title: "坦桑尼亚香肠 | AFRINOVA FOOD LIMITED",
    description:
      "From East African pastures to your table — products, delivery, and agent applications.",
    locale: "zh_CN",
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
      lang="zh-CN"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
