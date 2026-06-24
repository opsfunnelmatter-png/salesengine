"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle } from "lucide-react";

export default function GuaranteeV2() {
  return (
    <section id="guarantee" className="relative z-10 w-full bg-transparent py-20 text-slate-800 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_60%)] pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Certificate Style Border Frame */}
        <div className="border-4 border-double border-amber-400/35 p-2.5 rounded-[36px] bg-white/5 shadow-2xl shadow-black/40">
          <div className="bg-[#121A2E]/90 border border-white/10 rounded-[28px] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-black/45 text-center flex flex-col items-center">
            
            {/* Ambient gold inner glows */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            {/* Official SLA Certificate Seal */}
            <div className="relative w-28 h-28 rounded-full bg-amber-400/5 border-4 border-amber-400/30 flex items-center justify-center text-amber-500 shadow-md shadow-amber-900/10 mb-6 animate-float-medium">
              {/* Decorative outer circle dashed */}
              <div className="absolute inset-1 rounded-full border-2 border-dashed border-amber-300/40" />
              <Award className="w-12 h-12 text-amber-400" />
            </div>

            <div className="mb-6 space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest text-amber-300 uppercase bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-300/20">
                🛡️ KAMI TANGGUNG RISIKO — BUKAN ANDA
              </span>
              <h2 className="text-sm font-mono font-black text-slate-350 uppercase tracking-widest">
                Perjanjian Jaminan Penghantaran Rasmi (SLA)
              </h2>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-tight max-w-2xl mb-6">
              Kalau Kami Lambat,{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_2.5px_8px_rgba(234,179,8,0.25)] font-black">
                Anda Dapat Duit Balik.
              </span>
              <br />
              <span className="text-slate-400 text-lg sm:text-xl font-medium block mt-1">
                Tanpa Drama. Tanpa Terma Kecil.
              </span>
            </h3>

            {/* Content Body */}
            <div className="max-w-2xl space-y-5 text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
              <p className="font-semibold text-slate-200">
                Ini bukan sekadar janji pemasaran kosong. Ini adalah komitmen bertulis yang kami pegang dengan penuh integriti sejak hari pertama AROS diasaskan:
              </p>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-left space-y-4">
                {[
                  { title: "1. Refund Dalam 3 Hari Bekerja", desc: "Jika kami lewat menghantar draf pertama anda dari tempoh SLA yang dijanjikan, bayaran anda dikembalikan 100% serta-merta ke akaun asal dalam masa 3 hari bekerja." },
                  { title: "2. Perlindungan Penuh SLA", desc: "Jaminan bertulis ini meliputi Pakej Launch (72 jam), Pakej Authority (5 hari bekerja), dan Pakej Corporate (7 hari bekerja)." },
                  { title: "3. Tiada Lock-In Kontrak", desc: "Kod sistem dan infrastruktur 100% milik anda. Bebas bawa dan deploy ke mana-mana server atau developer lain pada bila-bila masa." }
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-black text-white text-xs sm:text-sm">{point.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-350 leading-relaxed mt-0.5 font-medium">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sign-off Block */}
            <div className="w-full max-w-2xl flex justify-end mt-8 pt-5 border-t border-white/5 select-none">
              <div className="text-right">
                <p className="font-serif italic text-white text-xl pr-4 font-bold tracking-wide">Amin</p>
                <p className="font-mono font-bold tracking-widest text-[9px] uppercase text-slate-400">Founder & Pengarah Operasi</p>
                <p className="text-[8px] font-mono text-slate-500">Bromover Resources Sdn. Bhd.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
