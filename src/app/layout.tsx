import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/AIChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Madware Solutions | Akıllı Yazılım. Gerçek Çözümler.",
    template: "%s | Madware Solutions",
  },
  description:
    "İş süreçlerini kolaylaştıran ve dijital dönüşümü destekleyen yazılım çözümleri. Web Yazılım, Otomasyon & Süreç Yönetimi, Özel Yazılım Geliştirme ve Ölçeklenebilir Sistemler.",
  keywords: [
    "yazılım geliştirme",
    "web yazılım",
    "otomasyon",
    "süreç yönetimi",
    "özel yazılım",
    "ölçeklenebilir sistemler",
    "dijital dönüşüm",
    "madware solutions",
    "mobile applications",
    "digital transformation",
  ],
  authors: [{ name: "Madware Solutions" }],
  icons: {
    icon: '/images/madware.png',
    apple: '/images/madware.png',
    shortcut: '/images/madware.png',
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Madware Solutions",
    title: "Madware Solutions | Akıllı Yazılım. Gerçek Çözümler.",
    description:
      "Modern, ölçeklenebilir ve akıllı dijital çözümler. İş süreçlerini kolaylaştırır, dijital dönüşümü destekleriz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madware Solutions | Akıllı Yazılım. Gerçek Çözümler.",
    description:
      "Modern, ölçeklenebilir ve akıllı dijital çözümler. İş süreçlerini kolaylaştırır, dijital dönüşümü destekleriz.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
