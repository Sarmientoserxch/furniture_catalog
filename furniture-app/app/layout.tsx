import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Muebles Sarmiento Sanchez - Catálogo de Muebles Premium",
  description: "Descubre nuestra exclusiva colección de muebles de alta calidad para sala, comedor, alcoba y decoración. Diseños únicos que transforman espacios.",
  keywords: "muebles, sala, comedor, alcoba, decoración, muebles premium, diseño interior",
  openGraph: {
    title: "Muebles Sarmiento Sanchez",
    description: "Catálogo de muebles premium para tu hogar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen bg-cream">
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
