"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Backstory() {
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
            Kami Tak Jual Website.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)] block mt-1">
              Kami Plug Kebocoran Untung Iklan Anda.
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
            Ini kisah bagaimana kami sedar kelajuan loading adalah nadi utama penentu kejayaan kempen Google/Meta Ads kami sendiri.
          </p>
        </div>

        {/* Balanced Grid Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN — Founder Photo & Justification Box */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch space-y-6 lg:sticky lg:top-24">
            
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

            {/* Trust Badge */}
            <div className="text-center lg:text-left space-y-2 w-full max-w-[380px] mx-auto lg:mx-0 bg-white/5 border border-white/10 p-5 rounded-2xl">
              <span className="text-xs font-mono font-bold tracking-widest uppercase bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 inline-block">
                🤝 DIUJI PADA PROJEK SENDIRI
              </span>
              <p className="text-slate-350 text-xs leading-relaxed font-medium">
                Ini bukan sekadar bisnes. Ini pengalaman kami sendiri yang kami tukarkan jadi penyelesaian untuk anda.
              </p>
            </div>

            {/* Conclusion Box & Price Justification */}
            <div className="p-6 rounded-2xl bg-amber-500/[0.03] border border-amber-500/15 space-y-4 w-full max-w-[380px] mx-auto lg:mx-0">
              <p className="font-bold text-white text-xs md:text-sm leading-relaxed">
                Itu masa kami sedar: masalah iklan ramai peniaga Malaysia bukan di targeting atau creative. Ia di landing page yang perlahan. Dan kami ada penyelesaiannya.
              </p>
              <div className="border-t border-white/5 pt-4 space-y-2">
                <h4 className="text-amber-400 font-black text-xs md:text-sm flex items-center gap-2">
                  <span>🤝</span> Mengapa Harga RM999?
                </h4>
                <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                  Kami tidak akan pretend ini "murah." RM999 adalah launching price sebagai komitmen kepada peniaga Malaysia yang faham pelaburan dalam sales tool yang betul. Selepas 5 slot pertama ini, harga Pakej Launch akan naik kepada RM1,499. Pakej Authority naik ke RM2,899. Bukan scarcity palsu — ini kapasiti operasi kami yang sebenar.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — Timeline & Diff Cards */}
          <div className="lg:col-span-7 space-y-8">

            {/* Narrative Timeline (Vertical Stack for better balance and flow) */}
            <div className="space-y-4">
              
              {/* Card 1: 2024 Pain */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-[10px] font-mono font-black text-red-400 bg-red-950/40 border border-red-900/30 px-2.5 py-0.5 rounded-full w-fit block">
                  FASA 1: REALITI 2024
                </span>
                <h3 className="text-sm font-bold text-white">RM3,000 Sebulan Hangus</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Kami run Google Ads untuk platform sendiri. Budget RM3,000 sebulan. Leads ada, tapi conversion jatuh teruk. Kami buntu — copywriting dah padu, targeting dah tepat. <strong className="text-white">Di mana silapnya?</strong>
                </p>
              </div>

              {/* Card 2: Lighthouse Discovery */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-[10px] font-mono font-black text-amber-400 bg-amber-950/40 border border-amber-900/30 px-2.5 py-0.5 rounded-full w-fit block">
                  FASA 2: PENEMUAN KEBOCORAN
                </span>
                <h3 className="text-sm font-bold text-white">Lighthouse 4.8 Saat</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Data Lighthouse dedah realiti. Website WordPress kami ambil 4.8 saat untuk load. Hampir <strong className="text-white">separuh pelawat lari</strong> sebelum nampak offer kami.
                </p>
              </div>

              {/* Card 3: Formula AROS */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-primary/20 transition-colors shadow-sm">
                <span className="text-[10px] font-mono font-black text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-0.5 rounded-full w-fit block">
                  FASA 3: FORMULA AROS
                </span>
                <h3 className="text-sm font-bold text-white">Loading 0.3s, Conversion +30%</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Kami bina semula dari awal dengan teknologi yang lebih pantas. Loading jatuh kepada 0.3 saat — 16x lebih laju dari sebelumnya.
                </p>
              </div>

            </div>

            {/* 3 Differentiator Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: "🎯", title: "Kami Faham Bisnes, Bukan Hanya Kod", body: "Setiap website yang kami bina bermula dari satu soalan: 'Apa yang anda nak orang buat selepas masuk website ni?' Jawapan itu tentukan segalanya." },
                { icon: "⚡", title: "Kami Ukur Hasil, Bukan Jam Kerja", body: "KPI kami bukan 'website siap.' KPI kami adalah: adakah website ini convert lebih baik dari sebelumnya? Itu yang kami kejar." },
                { icon: "🔒", title: "Anda Tak Terikat. Selamanya.", body: "Semua kod adalah milik anda 100%. Anda boleh pergi bila-bila masa, bawa kod ke mana-mana developer." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start shadow-sm hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-black text-xs md:text-sm mb-1.5">{item.title}</h3>
                  <p className="text-slate-350 text-xs leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>



          </div>
        </div>
      </div>
    </section>
  );
}
