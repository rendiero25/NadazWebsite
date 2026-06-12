import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import GsapProvider from "@/components/providers/GsapProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
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
    "NADAZ — spesialis glassboard Jakarta, kaca tempered Depok, cermin gym, partisi kaca & pintu aluminium Jabodetabek. Free ongkir & pemasangan. PT. Arta Prima Glassindo sejak 2016.",
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
      "Solusi kaca premium untuk ruang profesional Anda. Glassboard, cermin gym, partisi kaca & aluminium — free ongkir & pemasangan Jabodetabek.",
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
      "Solusi kaca premium untuk ruang profesional Anda. Free ongkir & pemasangan Jabodetabek.",
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
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
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
