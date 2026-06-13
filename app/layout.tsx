import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import GsapProvider from "@/components/providers/GsapProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://nadaz.co.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NADAZ — Spesialis Kaca & Aluminium Premium Jabodetabek",
    template: "%s | NADAZ",
  },
  description:
    "NADAZ — pemasangan kaca tempered & aluminium profesional di Jabodetabek. Glassboard, cermin gym, partisi kaca — gratis ongkir & pemasangan. PT. Arta Prima Glassindo sejak 2016.",
  keywords: [
    "glassboard jakarta",
    "kaca tempered depok",
    "partisi kaca jabodetabek",
    "cermin gym jakarta",
    "pintu aluminium depok",
    "magnetic glassboard",
    "NADAZ",
    "kaca premium jabodetabek",
    "glassboard depok",
  ],
  authors: [{ name: "PT. Arta Prima Glassindo" }],
  creator: "PT. Arta Prima Glassindo",
  publisher: "NADAZ",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "NADAZ",
    title: "NADAZ — Spesialis Kaca & Aluminium Premium Jabodetabek",
    description:
      "Kaca & aluminium premium dipasang profesional di Jabodetabek. Glassboard, cermin gym, partisi kaca — gratis ongkir & pemasangan sejak 2016.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NADAZ — Spesialis Kaca & Aluminium Premium Jabodetabek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NADAZ — Spesialis Kaca & Aluminium Premium Jabodetabek",
    description:
      "Kaca & aluminium premium dipasang profesional di Jabodetabek. Gratis ongkir & pemasangan sejak 2016.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/nadaz-logo.jpg", type: "image/jpeg" },
      { url: "/icons/nadaz-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/nadaz-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={outfit.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <GsapProvider>
          <SmoothScroll>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </GsapProvider>
      </body>
    </html>
  );
}
