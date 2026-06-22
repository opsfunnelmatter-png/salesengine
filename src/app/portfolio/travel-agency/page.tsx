"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Award, Star } from "lucide-react";

export default function TravelAgencyPage() {
  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetPhone = "60125065516"; // WhatsApp contact rule
    const message = `Salam Ziarah Haramain, saya berminat dengan Pakej Umrah VVIP 2026. Boleh tahu lebih lanjut tentang kekosongan slot?\n\n*Nama:* \n*Bilangan Pax:* `;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`, "_blank");
  };

  return (
    <div className="h-screen w-full relative text-white font-sans overflow-hidden flex flex-col justify-between select-none">
      
      {/* 1. Full-Screen Canva-style Background Image & Dark Emerald Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80')" 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-emerald-950/85 to-slate-950/98 z-10" />

      {/* 2. Top Alert Ribbon (Loud Ad Style) */}
      <div className="bg-red-650 text-white text-[9px] font-black tracking-wider py-1.5 text-center uppercase relative z-20 shrink-0 shadow-md">
        ⚠️ AMARAN: TINGGAL 7 SLOT SAHAJA UNTUK HARGA PROMO AWAL!
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-between p-3.5 relative z-20">
        
        {/* 3. Real Local Client Branding */}
        <div className="text-center space-y-1">
          <div className="inline-block bg-white text-emerald-900 border-2 border-emerald-500 px-3 py-0.5 rounded font-black text-[9px] tracking-widest uppercase shadow-md">
            ZIARAH HARAMAIN TRAVEL
          </div>
          <p className="text-[7.5px] font-bold text-slate-350 tracking-wider">KPK/LN: 4892 · Agensi Umrah Berlesen MOTAC</p>
        </div>

        {/* 4. Giant Ad-Style Headlines (High Contrast & Shadows) */}
        <div className="text-center my-1.5 space-y-1">
          <h1 className="text-sm font-extrabold tracking-tight leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] uppercase">
            KAJIAN MEMBUKTIKAN JEMAAH MAHU
          </h1>
          
          {/* Highlight Yellow Box (Pina Tox style) */}
          <div className="inline-block bg-yellow-400 text-slate-950 font-black text-sm px-2.5 py-1 rounded shadow-lg transform -rotate-1 tracking-tight my-1 uppercase">
            KESELESAAN & HOTEL JARAK DEKAT!
          </div>
          
          <h2 className="text-[17px] font-black text-amber-300 tracking-tight leading-none drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] uppercase">
            Pakej Umrah VVIP 2026
          </h2>
        </div>

        {/* 5. Visual Selling Points (Glossy Card Layout) */}
        <div className="space-y-1.5 my-1">
          {[
            { title: "🏨 Hotel 5-Bintang Depan Masjid", desc: "Jarak kurang 50 meter, mesra warga emas & anak-anak." },
            { title: "✈️ Penerbangan Terus (Direct Flight)", desc: "Tanpa transit meletihkan, terus mendarat di Jeddah/Madinah." },
            { title: "🕋 Bimbingan Rapat Mutawwif", desc: "Tunjuk ajar ibadah secara praktikal bermula dari tanah air." },
            { title: "🍱 Makanan Fullboard Sajian Melayu", desc: "Sarapan, makan tengah hari, & malam bercitarasa tempatan." }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2 bg-emerald-950/70 border border-emerald-500/25 rounded-xl p-2 shadow-lg backdrop-blur-xs">
              <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[10px] font-black text-amber-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{item.title}</p>
                <p className="text-[8px] text-slate-300 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 6. Professional CSS Badges / Seals (KKM, MOTAC, TH, IATA style) */}
        <div className="grid grid-cols-4 gap-2 py-2 border-y border-white/10 bg-black/30 rounded-xl justify-items-center items-center shrink-0 my-1">
          {/* Badge 1: Gold Seal for Guarantee */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 via-yellow-100 to-amber-500 flex flex-col items-center justify-center border border-amber-600 shadow-md relative">
              <Award className="w-4 h-4 text-amber-950" />
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-950/20" />
            </div>
            <span className="text-[6.5px] text-amber-300 font-black mt-1 uppercase text-center leading-none">100% Terbang</span>
          </div>

          {/* Badge 2: MOTAC Cert Stamp */}
          <div className="flex flex-col items-center">
            <div className="h-8 px-2 bg-blue-600 border border-blue-400 rounded flex flex-col items-center justify-center shadow-md">
              <span className="text-[8px] font-black tracking-tighter text-white">MOTAC</span>
              <span className="text-[5px] text-blue-200 font-bold leading-none">KPK/LN 4892</span>
            </div>
            <span className="text-[6.5px] text-slate-400 font-bold mt-1 uppercase text-center leading-none">Berlesen Penuh</span>
          </div>

          {/* Badge 3: Tabung Haji Style */}
          <div className="flex flex-col items-center">
            <div className="h-8 px-2 bg-emerald-600 border border-emerald-400 rounded flex flex-col items-center justify-center shadow-md">
              <span className="text-[8px] font-black tracking-tighter text-white">TABUNG HAJI</span>
              <span className="text-[5px] text-emerald-200 font-bold leading-none">Rakan Bersekutu</span>
            </div>
            <span className="text-[6.5px] text-slate-400 font-bold mt-1 uppercase text-center leading-none">Sokongan TH</span>
          </div>

          {/* Badge 4: IATA Member */}
          <div className="flex flex-col items-center">
            <div className="h-8 px-2.5 bg-white border border-slate-300 rounded flex flex-col items-center justify-center shadow-md">
              <span className="text-[9px] font-black tracking-tighter text-blue-900 leading-none">IATA</span>
              <span className="text-[5px] text-slate-500 font-bold leading-none">MEMBER</span>
            </div>
            <span className="text-[6.5px] text-slate-400 font-bold mt-1 uppercase text-center leading-none">Global Standard</span>
          </div>
        </div>

        {/* 7. Large Glowing CTA Button */}
        <div className="space-y-1.5 shrink-0">
          <button
            onClick={handleBooking}
            className="w-full py-3 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-950 font-black text-xs rounded-2xl shadow-xl shadow-yellow-500/25 active:scale-95 transition-all text-center flex flex-col items-center justify-center leading-none uppercase cursor-pointer border border-yellow-300 relative overflow-hidden animate-pulse"
          >
            <div className="font-extrabold text-[11px] tracking-wide">TEMPAH SLOT UMRAH ANDA SEKARANG</div>
            <span className="text-[7.5px] text-slate-800 font-bold mt-0.5">Tekan Untuk Hubungi Mutawwif via WhatsApp</span>
          </button>
          
          <div className="flex justify-center items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <p className="text-[7px] text-slate-400 text-center font-medium">
              *Tawaran tertakluk kepada kekosongan bilik hotel & tiket penerbangan semasa.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
