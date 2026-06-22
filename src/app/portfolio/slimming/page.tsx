"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles, Flame } from "lucide-react";

export default function SlimmingProductPage() {
  const handleOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetPhone = "60125065516"; // WhatsApp contact rule
    const message = `Salam SlymTox HQ, saya nak order Pakej Promo Diskaun 50% SlymTox Berry Juice!\n\n*Nama:* \n*Pakej Pilihan:* (1 Botol / 2 Botol + Percuma Shaker) `;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`, "_blank");
  };

  return (
    <div className="h-screen w-full relative text-white font-sans overflow-hidden flex flex-col justify-between select-none">
      
      {/* 1. Background Purple-Magenta Gradient & Sparkles Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b0764] via-[#581c87] to-[#170530] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15)_0%,transparent_70%)] pointer-events-none z-10" />

      {/* 2. Top Warning Strip */}
      <div className="bg-yellow-400 text-slate-950 text-[9.5px] font-black tracking-wider py-1.5 text-center uppercase relative z-20 shrink-0 shadow-md">
        🔥 DISKAUN 50% + PERCUMA SHAKER & POSTAGE HARI INI SAHAJA!
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-between p-3 relative z-20">
        
        {/* 3. Branding Header */}
        <div className="text-center space-y-0.5">
          <div className="inline-block bg-pink-600 text-white font-extrabold text-[8.5px] px-2.5 py-0.5 rounded-full border border-pink-400 uppercase tracking-widest shadow-sm">
            SLYMTOX BOTANICALS
          </div>
          <p className="text-[7.5px] text-pink-300 font-bold tracking-wide">Formula Kurus Selamat & Lulus KKM/MeSTI</p>
        </div>

        {/* 4. Giant Headlines */}
        <div className="text-center my-1 space-y-0.5">
          <h1 className="text-xs font-black text-white uppercase drop-shadow-md leading-none">
            KAJIAN SAINS MEMBUKTIKAN
          </h1>
          <div className="inline-block bg-white text-slate-950 font-black text-sm px-2 py-0.5 rounded shadow-lg transform rotate-1 uppercase leading-none">
            "FAT BURNER BERRY"
          </div>
          <h2 className="text-base font-extrabold text-yellow-350 tracking-tight leading-none uppercase drop-shadow-md">
            Mampu Cair Lemak Sehingga 85%!
          </h2>
        </div>

        {/* 5. Product & Person Dual Visual Area (Split Overlay) */}
        <div className="grid grid-cols-2 gap-2 my-1 items-center bg-purple-950/40 border border-purple-500/20 rounded-2xl p-2 shadow-inner shrink-0">
          
          {/* Left Column: Fit Person Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-purple-900 shadow-lg border border-purple-500/30">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80"
              alt="Fitness Weight Loss Result"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 left-1.5 bg-yellow-400 text-slate-950 text-[7px] font-black px-1.5 py-0.5 rounded shadow-sm">
              SEAWAL 7 HARI
            </span>
          </div>

          {/* Right Column: Product Image & Badges */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-purple-900 shadow-lg border border-purple-500/30">
            <img
              src="https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&w=300&q=80"
              alt="SlymTox Berry Juice Product Shot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />
            
            {/* Money Back Shield Seal */}
            <div className="absolute bottom-1.5 right-1.5 bg-pink-600/90 border border-pink-400 px-1 py-0.5 rounded flex items-center gap-0.5">
              <Flame className="w-2.5 h-2.5 text-yellow-300 fill-yellow-300 shrink-0" />
              <span className="text-[6.5px] font-extrabold text-white">FAT BURNER</span>
            </div>
          </div>

        </div>

        {/* 6. Feature Selling Checklist */}
        <div className="space-y-1 my-1">
          {[
            "Menukarkan Lemak Tepu Kepada Tenaga Aktif",
            "Menyekat Selera Makan & Mengelak Makan Berlebihan",
            "Melawaskan Sistem Pencernaan & Membuang Toksin",
            "Lulus Saringan KKM & 100% Halal Dikilangkan di Malaysia"
          ].map((feat, index) => (
            <div key={index} className="flex items-center gap-2 bg-purple-900/30 border border-purple-500/10 rounded-lg py-1 px-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-bold text-white">✓</span>
              </div>
              <span className="text-[8.5px] text-slate-200 font-bold text-left leading-tight">{feat}</span>
            </div>
          ))}
        </div>

        {/* 7. Local Cert Badges */}
        <div className="grid grid-cols-4 gap-1.5 py-1.5 border-y border-white/10 bg-black/20 rounded-xl justify-items-center items-center shrink-0">
          <div className="flex flex-col items-center">
            <div className="h-7 px-1.5 bg-emerald-600 border border-emerald-400 rounded flex items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-white">HALAL JAKIM</span>
            </div>
            <span className="text-[5.5px] text-slate-400 font-bold mt-0.5 uppercase">100% Halal</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-7 px-1.5 bg-blue-600 border border-blue-400 rounded flex items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-white">KKM LULUS</span>
            </div>
            <span className="text-[5.5px] text-slate-400 font-bold mt-0.5 uppercase">Selamat Amal</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-7 px-1.5 bg-amber-600 border border-amber-400 rounded flex items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-white">MeSTI APPROVED</span>
            </div>
            <span className="text-[5.5px] text-slate-400 font-bold mt-0.5 uppercase">Kualiti Makanan</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-7 px-1.5 bg-pink-600 border border-pink-400 rounded flex items-center justify-center shadow-md">
              <span className="text-[7.5px] font-black text-white">GMP CERTIFIED</span>
            </div>
            <span className="text-[5.5px] text-slate-400 font-bold mt-0.5 uppercase">Kilang Selamat</span>
          </div>
        </div>

        {/* 8. Call To Action (CTA) Button */}
        <div className="space-y-1 shrink-0">
          <button
            onClick={handleOrder}
            className="w-full py-3 bg-gradient-to-r from-yellow-400 via-amber-350 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-950 font-black text-xs rounded-2xl shadow-xl shadow-yellow-500/25 active:scale-95 transition-all text-center flex flex-col items-center justify-center leading-none uppercase cursor-pointer border border-yellow-300 relative overflow-hidden animate-pulse"
          >
            <div className="font-extrabold text-[11px] tracking-wide flex items-center gap-1">
              🛒 TEMPAH DENGAN HARGA PROMO HARI INI!
            </div>
            <span className="text-[7.5px] text-slate-800 font-bold mt-0.5">Tekan Untuk Hubungi Ejen Jualan via WhatsApp</span>
          </button>
          
          <div className="flex justify-center items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <p className="text-[7px] text-slate-400 text-center font-medium">
              *Jaminan Wang Dikembalikan Sekiranya Tiada Kesan Dalam 30 Hari.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
