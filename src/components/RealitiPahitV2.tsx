"use client";

import React from "react";
import { motion } from "framer-motion";

export default function RealitiPahitV2() {
  // Framer Motion Animation Variants for Entrance Reveal
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  } as const;

  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 14 }
    }
  } as const;

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  } as const;

  return (
    <section className="relative z-10 w-full bg-transparent py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle Dot-Grid Pattern */}
      <div className="absolute inset-0 bg-dot-grid-masked pointer-events-none z-0" />

      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_60%)] pointer-events-none blur-3xl z-0" />

      {/* Headline & Subheadline (Centered) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center space-y-6 px-6 relative z-10"
      >
        <motion.div variants={badgeVariants} className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase bg-amber-400/10 text-amber-300 px-3.5 py-1.5 rounded-full border border-amber-300/20 shadow-xs">
            💸 KENAPA 'SHOWROOM' DIGITAL ANDA SUNYI WALAUPUN ANDA RUN ADS
          </span>
        </motion.div>
        
        <motion.h2 variants={textVariants} className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight leading-tight text-white">
          Website Yang Tidak Pandai Menjual Bukan Masalah Rekaan.{" "}
          <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)] block mt-2">
            Ia Adalah Mesin Pembaziran Wang Yang Paling Mahal Anda Miliki.
          </span>
        </motion.h2>
        
        <motion.p variants={textVariants} className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
          Bayangkan situasi ini: Anda habiskan <strong className="text-amber-400 font-black">RM500</strong> untuk iklan. <strong className="text-amber-400 font-black">200</strong> orang klik. Halaman dimuatkan. Mereka tatal. Tapi tiada yang membeli. Tiada yang mengisi borang. Tiada yang menghubungi.
          <br /><br />
          Kenapa? Sebab website anda bukan direka untuk menjual — ia direka untuk dipandang sahaja. Dan RM500 anda itu hangus <strong className="text-red-500 font-black">untuk TIADA APA-APA.</strong>
        </motion.p>
        
        <motion.div variants={textVariants} className="h-px w-16 bg-white/10 mx-auto my-2" />
        <motion.p variants={textVariants} className="text-slate-400 text-xs font-mono tracking-wider uppercase">
          👉 Lihat perbandingan audit sebenar. Lihat sendiri bezanya:
        </motion.p>
      </motion.div>

      {/* Speed Comparison Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto space-y-4 px-6 mt-12 w-full relative z-10"
      >
        <p className="text-center text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
          ⏱️ Simulasi Masa Loading — Setiap Saat Itu Mahal
        </p>
        {/* WordPress Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono font-bold">
            <span className="text-slate-350">💸 WordPress / Template</span>
            <span className="text-red-500">4.8 saat</span>
          </div>
          <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "96%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-end pr-2"
            >
              <span className="text-[9px] font-black text-white">4.8s</span>
            </motion.div>
          </div>
        </div>
        {/* AROS Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono font-bold">
            <span className="text-slate-350">⚡ AROS Speed Engine</span>
            <span className="text-emerald-500">0.3 saat</span>
          </div>
          <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-end pr-1"
            />
          </div>
        </div>
        <p className="text-center text-[10px] font-mono text-slate-300">
          Perbezaan 16x — bermakna wang iklan anda berfungsi 16x lebih efisien
        </p>
      </motion.div>

      {/* Pain Stats Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="bg-[#0B1329]/80 border border-white/10 rounded-3xl p-8 md:p-10 max-w-5xl mx-auto mt-16 relative overflow-hidden z-10"
      >
        {/* Ambient glow inside dark box */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-400/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

          {/* STAT 1: 40% Bounce — Horizontal Split Bar */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-center space-y-3"
          >
            <div className="text-3xl mb-1">📉</div>
            <div className="text-5xl font-black font-mono text-red-400">40%</div>
            <div className="text-white font-bold text-base">Pelawat Lari</div>
            {/* Mini Stacked Bar Chart */}
            <div className="mx-auto max-w-[160px] space-y-1.5">
              <div className="flex rounded-full overflow-hidden h-4 w-full border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full bg-red-500 flex items-center justify-center"
                >
                  <span className="text-[8px] font-black text-white">40%</span>
                </motion.div>
                <div className="h-full bg-white/15 flex-1 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white/50">60%</span>
                </div>
              </div>
              <div className="flex justify-between text-[9px] font-mono text-blue-200/50">
                <span>Lari</span>
                <span>Stay</span>
              </div>
            </div>
            <div className="text-blue-200/70 text-xs leading-relaxed max-w-[220px] mx-auto">
              Dalam 3 saat pertama — sebelum tengok tawaran anda
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 h-16 border-l border-white/10" />

          {/* STAT 2: 7% per second — Mini Line Chart */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } } }}
            className="text-center space-y-3"
          >
            <div className="text-3xl mb-1">💸</div>
            <div className="text-5xl font-black font-mono text-red-400">7%</div>
            <div className="text-white font-bold text-base">Conversion Jatuh</div>
            {/* Mini descending bar chart (5 bars for 1s-5s) */}
            <div className="mx-auto max-w-[140px] flex items-end justify-center gap-1.5 h-12">
              {[100, 93, 86, 79, 72, 65].map((pct, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${pct * 0.4}px` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className={`w-4 rounded-t-sm ${i === 0 ? "bg-emerald-400" : i < 3 ? "bg-amber-400" : "bg-red-400"}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[8px] font-mono text-blue-200/40 max-w-[140px] mx-auto">
              <span>1s</span><span>2s</span><span>3s</span><span>4s</span><span>5s</span><span>6s</span>
            </div>
            <div className="text-blue-200/70 text-xs leading-relaxed max-w-[220px] mx-auto">
              Setiap saat kelewatan loading — ini data Google
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 h-16 border-l border-white/10" />

          {/* STAT 3: +30% — Before/After Bar */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } } }}
            className="text-center space-y-3"
          >
            <div className="text-3xl mb-1">🚀</div>
            <div className="text-5xl font-black font-mono text-emerald-400">+30%</div>
            <div className="text-white font-bold text-base">Lebih Leads</div>
            {/* Mini before/after comparison bars */}
            <div className="mx-auto max-w-[140px] space-y-2">
              <div className="space-y-0.5">
                <div className="flex justify-between text-[8px] font-mono text-blue-200/50">
                  <span>Sebelum</span><span className="text-slate-400">100%</span>
                </div>
                <div className="w-full h-3.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "77%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="h-full bg-slate-400/60 rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex justify-between text-[8px] font-mono text-blue-200/50">
                  <span>Selepas</span><span className="text-emerald-400">+30%</span>
                </div>
                <div className="w-full h-3.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-blue-200/70 text-xs leading-relaxed max-w-[220px] mx-auto">
              Purata peningkatan conversion klien AROS berbanding sebelum
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Soft CTA */}
      <div className="text-center mt-12 relative z-10">
        <button
          onClick={() => {
            const el = document.getElementById("process") || document.getElementById("how-it-works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group"
        >
          Tengok Macam Mana Kami Selesaikannya
          <span className="group-hover:translate-y-0.5 transition-transform inline-block">↓</span>
        </button>
      </div>

    </section>
  );
}
