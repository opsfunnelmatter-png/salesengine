import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AROS Sales Engine — Bina Website Yang Menjual, Bukan Sekadar Cantik",
  description: "Kami bina website berkelajuan kilat (sub-0.5s) dengan struktur CRO untuk menukar pelawat menjadi pembeli secara automatik — Landing Page, Funnel E-Commerce, hingga Website Korporat.",
  openGraph: {
    title: "AROS Sales Engine — Bina Website Yang Menjual, Bukan Sekadar Cantik",
    description: "Kami bina website berkelajuan kilat (sub-0.5s) dengan struktur CRO untuk menukar pelawat menjadi pembeli secara automatik — Landing Page, Funnel E-Commerce, hingga Website Korporat.",
    type: "website",
  },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
