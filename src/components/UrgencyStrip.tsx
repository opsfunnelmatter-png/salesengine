"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UrgencyStrip() {
  const TOTAL_SLOTS = 5;
  const FILLED_SLOTS = 3; // Hardcode, update manually each month

  return (
    <section className="relative z-10 w-full bg-transparent py-14 px-6 overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-yellow-400/5 blur-2xl rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center space-y-6 relative z-10"
      >
        {/* Pulsing Red Alert Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] font-mono font-black uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            AMARAN: SLOT TERHAD
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-white leading-tight">
          Hanya{" "}
          <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(234,179,8,0.25)]">{TOTAL_SLOTS - FILLED_SLOTS} Slot</span>{" "}
          Lagi Dibuka Bulan Ini.
        </h2>

        {/* Subtext */}
        <p className="text-blue-200/80 text-sm leading-relaxed max-w-xl mx-auto">
          Kami sengaja hadkan kepada <strong className="text-white">{TOTAL_SLOTS} projek sebulan sahaja</strong> untuk pastikan kualiti setiap delivery. Bulan ini, <strong className="text-amber-300 font-semibold">{FILLED_SLOTS} daripada {TOTAL_SLOTS} slot</strong> telah ditempah.
        </p>

        {/* Slot Progress Bar */}
        <div className="max-w-sm mx-auto space-y-2">
          <div className="flex justify-between text-[10px] font-mono font-bold">
            <span className="text-blue-200/60 uppercase tracking-wider">Slot Ditempah</span>
            <span className="text-amber-300 font-black">{FILLED_SLOTS}/{TOTAL_SLOTS} Penuh</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(FILLED_SLOTS / TOTAL_SLOTS) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-full bg-gradient-to-r from-amber-400 via-yellow-100 to-amber-500 rounded-full"
            />
          </div>
          {/* Slot dots visual */}
          <div className="flex gap-2 justify-center pt-1">
            {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-mono font-black transition-all ${
                  i < FILLED_SLOTS
                    ? "bg-amber-400/15 border-amber-400/40 text-amber-300 font-extrabold shadow-[0_0_10px_rgba(234,179,8,0.1)]"
                    : "bg-white/5 border-white/15 text-white/30"
                }`}
              >
                {i < FILLED_SLOTS ? "✓" : String(i + 1)}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(234, 179, 8, 0.55)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-black text-sm px-8 py-4 rounded-full shadow-lg cursor-pointer overflow-hidden group"
        >
          {/* Shiny sweep animation glare */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
          <span className="relative z-10">Semak Ketersediaan Slot Saya →</span>
        </motion.button>

        {/* Trust micro-copy */}
        <p className="text-blue-200/40 text-[10px] font-mono">
          Slot dikira berdasarkan kapasiti operasi sebenar — bukan taktik marketing semata
        </p>
      </motion.div>
    </section>
  );
}
