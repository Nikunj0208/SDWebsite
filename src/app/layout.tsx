import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LenisProvider } from "@/components/providers/lenis-provider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "Silverstone Developers | Ready to Live Luxury Residences, Bungalows & Plots in Surat",
  description: "Experience 100% complete, ready-to-move luxury row houses, bungalows and plots by Silverstone Developers in Surat. Spring Hill, Raj Mahel, Mahel, and Applewood Homes. Zero waiting, immediate BU/OC possession.",
  keywords: [
    "Silverstone Developers",
    "Ready to Live Surat",
    "Springhill Homes",
    "Raj Mahel Surat",
    "Mahel Bungalows",
    "Applewood Homes Surat",
    "Pal Gauravpath Surat",
    "Surat 2nd Ring Road Plots",
    "Luxury Bungalow Plots Surat",
    "Ready Possession Surat"
  ],
  authors: [{ name: "Silverstone Developers" }],
  openGraph: {
    title: "Silverstone Developers | Ready to Live Luxury Residences in Surat",
    description: "Inspect actual campus, experience verified carpet area & natural sunlight, and move in immediately with zero construction risk.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF8F5] text-[#18181B] antialiased selection:bg-[#B4833E]/20 selection:text-[#B4833E] overflow-x-hidden min-h-screen">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
