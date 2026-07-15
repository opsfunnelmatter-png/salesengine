"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BackstoryV2() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  } as const;

  return (
    <section id="backstory" className="py-24 md:py-32 border-t border-white/5 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/3 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Full-width Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 shadow-sm">
            📖 KISAH DI SEBALIK AROS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight leading-tight text-white">
            Kami Pun Pernah Ada 'Showroom Sunyi'.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)] block mt-1">
              Ini Yang Kami Buat Untuk Mengatasinya.
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
            Website cantik tapi senyap tanpa sales — itu realiti yang kami sendiri alami. Ini cerita bagaimana kami reka semula formula dari asas.
          </p>
        </div>

        {/* Balanced Grid Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN — Founder Photo */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch lg:sticky lg:top-24">
            
            {/* Photo Card */}
            <div className="relative w-full max-w-[380px] mx-auto lg:mx-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src="/images/founder_bright.png"
                  alt="Amin — Founder AROS Sales Engine"
                  width={400}
                  height={480}
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-all duration-500"
                  priority={false}
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
                  <p className="font-serif italic text-white text-lg font-bold">Amin</p>
                  <p className="text-[10px] font-mono font-bold text-white/70 uppercase tracking-widest">Founder & Pengarah Operasi</p>
                  <p className="text-[9px] font-mono text-white/50">Bromover Resources Sdn. Bhd.</p>
                </div>
              </div>
              {/* Primary accent corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-[#0B1329] shadow-md" />
            </div>

          </div>

          {/* RIGHT COLUMN — Timeline */}
          <div className="lg:col-span-7 space-y-8">

            {/* Narrative Timeline (Vertical Stack for better balance and flow) */}
            <div className="space-y-4">
              
              {/* Card 1: Realiti Pasaran */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-[10px] font-mono font-black text-red-400 bg-red-950/40 border border-red-900/30 px-2.5 py-0.5 rounded-full w-fit block">
                  FASA 1: SHOWROOM SUNYI KAMI
                </span>
                <h3 className="text-sm font-bold text-white">Sama Macam Anda, Kami Pernah Gagal</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Kami labur ribuan bina website cantik. Jalankan ads — pengunjung masuk, tengok sekejap, pastu lari. Wang iklan hangus begitu sahaja.
                </p>
              </div>

              {/* Card 2: Penemuan Kebocoran */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-[10px] font-mono font-black text-amber-400 bg-amber-950/40 border border-amber-900/30 px-2.5 py-0.5 rounded-full w-fit block">
                  FASA 2: KAMI JUMPA PUNCA KEBOCORAN
                </span>
                <h3 className="text-sm font-bold text-white">Rupanya Masalah Bukan Ads. Ia Struktur Website.</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Loading melebihi 4 saat, tiada struktur CRO langsung. Iklan betul, produk bagus — tapi website sendiri yang membakar bajet.
                </p>
              </div>

              {/* Card 3: Formula AROS */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-[10px] font-mono font-black text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-0.5 rounded-full w-fit block">
                  FASA 3: LAHIRNYA FORMULA AROS
                </span>
                <h3 className="text-sm font-bold text-white">Bina Untuk Diri Sendiri, Kini Untuk Anda</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Kami bina semula dari awal — Next.js 0.3 saat, CRO agresif. Jualan melonjak. Formula ini kini jadi <strong className="text-white">AROS</strong> untuk bisnes anda.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
