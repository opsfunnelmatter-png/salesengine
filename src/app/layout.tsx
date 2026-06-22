import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AROS Sales Engine — High-Performance Landing Pages",
  description: "Hentikan pembaziran bajet ads anda akibat landing page lambat. Bina sales page Next.js super-pantas (load <0.5s) mesra Grab PayLater & FPX.",
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
    title: "AROS Sales Engine — High-Performance Landing Pages",
    description: "Landing page super-pantas (load <0.5s) untuk usahawan ads Malaysia.",
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-background">
        {children}
      </body>
    </html>
  );
}
