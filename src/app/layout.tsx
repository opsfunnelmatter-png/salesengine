import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Space_Grotesk, Outfit, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "AROS Sales Engine — Bina Website Yang Menjual, Bukan Sekadar Cantik",
  description: "Kami bina website berkelajuan kilat (sub-0.5s) dengan struktur CRO untuk menukar pelawat menjadi pembeli secara automatik — Landing Page, Funnel E-Commerce, hingga Website Korporat.",
  metadataBase: new URL("https://salesengine.bromover.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
  },
  openGraph: {
    title: "AROS Sales Engine — Bina Website Yang Menjual, Bukan Sekadar Cantik",
    description: "Kami bina website berkelajuan kilat (sub-0.5s) dengan struktur CRO untuk menukar pelawat menjadi pembeli secara automatik — Landing Page, Funnel E-Commerce, hingga Website Korporat.",
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
      lang="ms"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${outfit.variable} ${inter.variable} ${ebGaramond.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-background">
        {children}
      </body>
    </html>
  );
}
