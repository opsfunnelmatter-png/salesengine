"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import PackageContactModal from "./PackageContactModal";

export default function BottomCTAV2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 border-t border-white/5 bg-transparent relative text-center overflow-hidden">
      {/* Background Masked Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid-masked pointer-events-none z-0 opacity-60" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" /> ⏰ SLOT TERBUKA HARI INI
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-white tracking-tight leading-tight">
          Showroom Sunyi Dah Cukup Lama.{" "}
          <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)] block mt-2">Masa Untuk Bina Mesin Yang Bekerja Untuk Anda.</span>
        </h2>
        <div className="space-y-3">
          <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Anda dah baca sampai sini. Anda tahu website yang tidak pandai menjual bukan sekadar kerugian masa — ia kerugian wang dan peluang setiap hari. Satu-satunya langkah yang tinggal adalah ambil tindakan.{" "}
            <strong className="text-white">Isi borang dalam 5 minit. Kami akan hubungi anda secepat mungkin.</strong>
          </p>
          <p className="text-slate-400 text-xs">
            Atau biarkan showroom sunyi tu terus makan bajet iklan anda setiap hari. Pilihan memang ada di tangan anda — tapi masa tidak tunggu sesiapa.
          </p>
        </div>
        <div className="pt-2">
          <a
            href="#"
            onClick={handleOpenModal}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-black text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer overflow-hidden group border-0"
          >
            {/* Shiny sweep animation glare */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
            <span className="flex items-center gap-2 relative z-10">
              Hubungi Kami Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <p className="text-xs font-mono text-slate-450 mt-3">
            🔒 Maklumat anda 100% selamat · Tiada commitment diperlukan
          </p>
          <a
            href="https://wa.me/60125065516?text=Hi%2C%20saya%20berminat%20nak%20tanya%20pasal%20pakej%20anda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors mt-2"
          >
            💬 Atau tanya dulu via WhatsApp
          </a>
        </div>
      </div>

      <PackageContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage="Pakej Authority (RM1,899)"
      />
    </section>
  );
}
