import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AROS Sales Engine — High-Performance Landing Pages",
  description: "Hentikan pembaziran bajet ads anda akibat landing page lambat. Bina sales page Next.js super-pantas (load <0.5s) mesra Grab PayLater & FPX.",
  openGraph: {
    title: "AROS Sales Engine — High-Performance Landing Pages",
    description: "Hentikan pembaziran bajet ads anda akibat landing page lambat. Bina sales page Next.js super-pantas (load <0.5s) mesra Grab PayLater & FPX.",
    type: "website",
  },
};

export default function OldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
