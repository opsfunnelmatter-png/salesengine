"use client";

import React from "react";
import { Star, Award, Check } from "lucide-react";

export default function CateringHeroPage() {
  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetPhone = "60125065516"; // WhatsApp contact rule
    const message = `Salam Seri Mahligai Catering, saya berminat untuk menempah Food Tasting Percuma bagi Pakej Katering Kahwin 'Zero Worry'. Boleh sahkan slot kosong?\n\n*Nama:* \n*Tarikh Kahwin:* \n*Jumlah Tetamu:* `;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`, "_blank");
  };

  return (
    <div className="h-screen w-full relative text-slate-800 font-sans overflow-hidden flex flex-col justify-between p-3.5 select-none bg-[#FDFDFD]">
      
      {/* 1. Fine, Subtle Grey Grid Lines Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px"
        }}
      />
      
      {/* Subtle luxury gold gradient glow in the corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none z-10" />

      {/* Main Content (Z-Index 20) */}
      <div className="flex-1 flex flex-col justify-between relative z-20">
        
        {/* 2. Top Header & Brand */}
        <div className="text-center space-y-0.5 mt-1">
          <div className="inline-flex items-center gap-1 bg-[#7A1C1C]/5 border border-[#7A1C1C]/15 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[7.5px] font-bold text-[#7A1C1C] uppercase tracking-wider">
              SERI MAHLIGAI CATERING
            </span>
          </div>
        </div>

        {/* 3. Text Overlay at the Top (Maroon, Gold, White Theme) */}
        <div className="text-center mt-2 space-y-1">
          <h1 className="text-[19px] font-black tracking-tight leading-none text-[#7A1C1C] drop-shadow-xs uppercase">
            KATERING KAHWIN <span className="block text-[#D4AF37] text-2xl font-black mt-0.5 drop-shadow-xs">"ZERO WORRY"</span>
          </h1>
          
          <p className="text-[9.5px] font-bold text-slate-600 leading-relaxed max-w-xs mx-auto px-2">
            Lauk Sedap, Tetamu Puas. Servis Profesional Bertaraf 5-Bintang Untuk Hari Bahagia Anda.
          </p>
        </div>

        {/* 4. Central Focus: Gold-Bordered Plated Dish Image Card */}
        <div className="my-2.5 flex justify-center">
          <div className="w-[85%] aspect-[1/1] rounded-2xl overflow-hidden border-4 border-[#D4AF37] shadow-xl relative bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Plated Nasi Minyak / Ayam Masak Merah / Golek Generated Visual */}
            <img
              src="/images/portfolio-catering.png"
              alt="Premium Malaysian Nasi Minyak Plated Dish"
              className="w-full h-full object-cover"
            />
            
            {/* Luxurious Plated Badge Overlay */}
            <div className="absolute top-2 left-2 bg-[#7A1C1C] text-[#D4AF37] border border-[#D4AF37]/50 text-[7px] font-black px-2 py-0.5 rounded shadow-md uppercase">
              MASAKAN PANAS & SEGAR
            </div>

            {/* Stars Overlay */}
            <div className="absolute bottom-2 right-2 flex items-center gap-0.5 bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded-full text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2 h-2 fill-yellow-400" />
              ))}
              <span className="text-[6.5px] font-black text-white ml-1">5.0</span>
            </div>
          </div>
        </div>

        {/* 5. Trust Badges / Checklists */}
        <div className="grid grid-cols-3 gap-1 py-1.5 border-y border-slate-200/60 bg-white/40 justify-items-center items-center shrink-0">
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#7A1C1C]/10 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-[#7A1C1C]" />
            </div>
            <span className="text-[7.5px] font-bold text-slate-700">100% Halal</span>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#7A1C1C]/10 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-[#7A1C1C]" />
            </div>
            <span className="text-[7.5px] font-bold text-slate-700">Pramusaji VVIP</span>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#7A1C1C]/10 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-[#7A1C1C]" />
            </div>
            <span className="text-[7.5px] font-bold text-slate-700">Sajian Panas</span>
          </div>
        </div>

        {/* 6. Glowing Call-To-Action Button */}
        <div className="space-y-1 mt-2.5 shrink-0">
          <button
            onClick={handleBooking}
            className="w-full py-3 bg-[#7A1C1C] hover:bg-[#661616] text-[#D4AF37] font-black text-[11px] tracking-wide rounded-xl shadow-lg shadow-[#7A1C1C]/15 active:scale-95 transition-all text-center flex flex-col items-center justify-center leading-none uppercase cursor-pointer border-2 border-[#D4AF37] relative overflow-hidden animate-pulse"
          >
            <span className="drop-shadow-sm font-extrabold">TEMPAH FOOD TASTING PERCUMA</span>
            <span className="text-[6.5px] text-white/80 font-bold mt-0.5 normal-case tracking-normal">
              *Tawaran terhad untuk 15 pasangan terawal minggu ini
            </span>
          </button>
          
          <div className="flex justify-center items-center gap-1">
            <Award className="w-3 h-3 text-[#D4AF37]" />
            <p className="text-[7px] text-slate-500 text-center font-bold">
              Katering Perkahwinan Eksklusif Bertaraf 5-Bintang
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
