"use client";

import React from "react";
import { ChevronDown, MessageSquare } from "lucide-react";

export default function SugarControlPage() {
  const handleCTA = () => {
    const targetPhone = "60125065516";
    const message = "Salam, saya berminat dengan Neogluco untuk kawalan gula darah & kolestrol. Boleh tahu promosi terkini?";
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#0a1931] via-[#15305b] to-[#0b1b3d] text-white overflow-hidden flex flex-col justify-between p-3 relative select-none border border-white/5 font-fredoka">
      
      {/* Cartoon text stroke and custom Google Fonts stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Fredoka:wght@400;600;700;900&display=swap');
        
        .font-luckiest {
          font-family: 'Luckiest Guy', cursive, sans-serif;
        }
        .font-fredoka {
          font-family: 'Fredoka', sans-serif;
        }
        .text-outline-white {
          color: #fff;
          -webkit-text-stroke: 1.2px #000;
          text-shadow: 2px 2px 0px #000;
        }
        .text-outline-gold {
          color: #fbbf24;
          -webkit-text-stroke: 1.2px #000;
          text-shadow: 2px 2px 0px #000;
        }
        .text-outline-red {
          color: #ef4444;
          -webkit-text-stroke: 1.2px #000;
          text-shadow: 2px 2px 0px #000;
        }
        .text-outline-badge {
          color: #10b981;
          -webkit-text-stroke: 1px #000;
          text-shadow: 1px 1px 0px #000;
        }
      `}} />

      {/* Background Organic/Cell Motif Overlays */}
      <div className="absolute top-1/4 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* 1. Top Brand Banner */}
      <div className="flex justify-center mt-1 shrink-0">
        <div className="bg-white border-2 border-black rounded-lg px-4 py-0.5 shadow-[2px_2px_0px_#000] flex items-center gap-1">
          <span className="font-luckiest text-[13px] tracking-wider text-[#1e3a8a] select-none">NEOGLUCO</span>
          <span className="text-[6.5px] font-black text-[#10b981] border border-[#10b981] px-0.5 rounded leading-none">ORGANIC</span>
        </div>
      </div>

      {/* 2. Headline Group (Cartoon Outlined Style) */}
      <div className="text-center mt-2 space-y-0 shrink-0 font-luckiest uppercase">
        <h1 className="text-[20px] tracking-wide leading-[1.1] text-outline-white">
          CEGAH KOMPLIKASI
        </h1>
        <h1 className="text-[20px] tracking-wide leading-[1.1] text-outline-red">
          KENCING MANIS,
        </h1>
        <h2 className="text-[21px] tracking-wide leading-[1.1] text-outline-gold">
          KONTROL KOLESTROL
        </h2>
        <h3 className="text-[13px] tracking-wide leading-[1.1] text-white/90 font-fredoka font-bold lowercase italic text-center mt-0.5">
          formulasi klinikal dengan bio-aktif semulajadi
        </h3>
      </div>

      {/* 3. Three Value-Proposition Pills (White Pill with Green Checkmark) */}
      <div className="space-y-1.5 my-2 px-1 shrink-0 font-fredoka">
        
        {/* Pill 1 */}
        <div className="bg-white border-2 border-black rounded-full py-0.5 px-2.5 flex items-center gap-2 shadow-[2px_2px_0px_#000] hover:scale-[1.01] transition-transform">
          <div className="w-4 h-4 rounded-full bg-[#10b981] border border-black flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-black text-[8.5px] leading-tight font-black select-none flex-1">
            <span className="text-[#ef4445] font-black">15X Berkesan</span> Mengawal Bacaan Gula Darah
          </div>
        </div>

        {/* Pill 2 */}
        <div className="bg-white border-2 border-black rounded-full py-0.5 px-2.5 flex items-center gap-2 shadow-[2px_2px_0px_#000] hover:scale-[1.01] transition-transform">
          <div className="w-4 h-4 rounded-full bg-[#10b981] border border-black flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-black text-[8.5px] leading-tight font-black select-none flex-1">
            <span className="text-[#10b981] font-black">80% Penurunan</span> Kolestrol LDL (Jahat)
          </div>
        </div>

        {/* Pill 3 */}
        <div className="bg-white border-2 border-black rounded-full py-0.5 px-2.5 flex items-center gap-2 shadow-[2px_2px_0px_#000] hover:scale-[1.01] transition-transform">
          <div className="w-4 h-4 rounded-full bg-[#10b981] border border-black flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="text-black text-[8.5px] leading-tight font-black select-none flex-1">
            Formulasi Disokong <span className="text-[#1e3a8a] font-black">Kajian Klinikal Saintis</span>
          </div>
        </div>

      </div>

      {/* 4. Bottom Main Visual Area (Doctor, Supplement Box, Gold Seal) */}
      <div className="relative flex-1 w-full my-1.5 flex items-end justify-between min-h-[140px]">
        
        {/* Left Side: 3D Supplement Box (CSS Styled) */}
        <div className="w-[45%] h-[125px] absolute bottom-2 left-1 z-10 flex flex-col justify-end">
          
          {/* Main 3D Box Container */}
          <div className="relative w-[75px] h-[95px] mx-auto bg-gradient-to-br from-white via-slate-55 to-slate-100 border-2 border-black rounded-lg shadow-[3px_3.5px_0px_rgba(0,0,0,0.3)] flex flex-col justify-between p-1 overflow-hidden transform hover:scale-105 transition-transform">
            
            {/* Box Top Header banner */}
            <div className="w-full bg-[#1e3a8a] text-[4.5px] font-black text-white py-0.5 px-1 rounded-sm text-center leading-none tracking-widest uppercase">
              PREMIUM
            </div>

            {/* Box Logo & Leaves illustration in CSS */}
            <div className="flex-1 flex flex-col items-center justify-center py-1">
              {/* Leaf Icon SVG representation */}
              <svg className="w-5 h-5 text-[#10b981] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.1 5 21C7.1 20 13.9 17.5 17 8M16 2C13 5 11 9 10 13C12.1 11 16.9 8.2 20 4C18 3.5 17.1 2.8 16 2Z" />
              </svg>
              <span className="font-luckiest text-[8.5px] leading-none text-[#1e3a8a] tracking-wide">NEOGLUCO</span>
              <span className="text-[3.5px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none mt-0.5">Bio-Active Herbal</span>
            </div>

            {/* Box Footer specifications */}
            <div className="border-t border-slate-300 pt-0.5 flex justify-between items-center text-[3.5px] font-mono font-bold text-slate-650">
              <span>60 CAPSULES</span>
              <span className="text-[#10b981]">100% ORG</span>
            </div>

            {/* Glowing border glare effect */}
            <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shiny-sweep pointer-events-none" />
          </div>

          {/* Under-Box mini text badge */}
          <div className="text-center mt-1.5 bg-[#ffd300] border border-black rounded text-[6px] font-black text-black uppercase py-0.5 px-1 tracking-wider shadow-[1px_1px_0px_#000] w-[88px] mx-auto font-fredoka">
            ⚡ BOTOL PERCUMA VIP
          </div>
        </div>

        {/* Right Side: Doctor/Researcher Smiling (Absolute positioning to overlay nicely) */}
        <div className="w-[58%] h-[155px] absolute bottom-[-4px] right-[-10px] z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=320&q=80"
              alt="Smiling Medical Scientist Researcher"
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)"
              }}
            />
          </div>
        </div>

        {/* Floating Circular 100% Money Back Seal (Overlaps Doctor/Box on the Right-Center) */}
        <div className="absolute top-6 right-[42%] z-20 w-[42px] h-[42px] rounded-full bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fbbf24] border-2 border-black flex flex-col items-center justify-center shadow-[2px_2.5px_0px_rgba(0,0,0,0.45)] transform rotate-[8deg] hover:scale-105 transition-all select-none">
          {/* Ribbons around the badge */}
          <div className="text-[4px] font-black tracking-widest text-[#1e3a8a] leading-none uppercase font-fredoka">MONEY BACK</div>
          <div className="text-[10px] font-luckiest text-[#1e3a8a] leading-none my-0.5 drop-shadow-[0.5px_0.5px_0px_#fff]">100%</div>
          <div className="text-[4px] font-black tracking-widest text-[#1e3a8a] leading-none uppercase font-fredoka">GUARANTEE</div>
          
          {/* Inner dotted border */}
          <div className="absolute inset-[1px] border border-dashed border-[#1e3a8a]/40 rounded-full pointer-events-none" />
        </div>

      </div>

      {/* 5. Certificates Row (KKM, Halal, Lab-Tested, local medals) */}
      <div className="bg-[#0b1329]/80 border-2 border-black rounded-lg py-1 px-1.5 mt-1 shrink-0 flex items-center justify-around gap-1.5 shadow-[1.5px_1.5px_0px_#000] relative z-10 font-fredoka">
        
        {/* Certificate Badge 1: KKM */}
        <div className="flex flex-col items-center">
          <div className="bg-white text-black font-black text-[5.5px] px-1 rounded border border-black leading-none">
            KKM
          </div>
          <span className="text-[4.5px] font-mono font-bold text-slate-400 mt-0.5">LULUS UJIAN</span>
        </div>

        {/* Divider line */}
        <div className="w-[1px] h-4 bg-slate-700 shrink-0" />

        {/* Certificate Badge 2: Halal */}
        <div className="flex flex-col items-center">
          <div className="bg-white text-black font-black text-[5.5px] px-1 rounded border border-black leading-none flex items-center gap-0.5">
            <svg className="w-1 h-1 text-[#10b981]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            HALAL
          </div>
          <span className="text-[4.5px] font-mono font-bold text-slate-400 mt-0.5">JAKIM LULUS</span>
        </div>

        {/* Divider line */}
        <div className="w-[1px] h-4 bg-slate-700 shrink-0" />

        {/* Certificate Badge 3: Gold Award */}
        <div className="flex flex-col items-center">
          <div className="bg-[#ffd300] text-black font-black text-[5.5px] px-1 rounded border border-black leading-none flex items-center gap-0.5">
            ⭐ EMAS
          </div>
          <span className="text-[4.5px] font-mono font-bold text-slate-400 mt-0.5">ANUGERAH INOVASI</span>
        </div>

        {/* Divider line */}
        <div className="w-[1px] h-4 bg-slate-700 shrink-0" />

        {/* Certificate Badge 4: Lab Tested */}
        <div className="flex flex-col items-center">
          <div className="bg-white text-[#10b981] font-black text-[5.5px] px-1 rounded border border-black leading-none">
            100%
          </div>
          <span className="text-[4.5px] font-mono font-bold text-slate-400 mt-0.5">BIO-ORGANIK</span>
        </div>

      </div>

      {/* 6. Footer Tagline & WhatsApp Floating Indicators */}
      <div className="mt-1.5 shrink-0 flex items-center justify-between px-1 relative z-10">
        
        {/* Footer clinical tagline */}
        <p className="text-[6.5px] font-bold text-slate-300 w-[68%] leading-snug">
          *Inovasi penyelidikan biosains tempatan membantu meningkatkan kualiti kesihatan harian secara berperingkat.
        </p>

        {/* Floating Interactive Actions Container */}
        <div className="flex items-center gap-1.5 z-30 shrink-0">
          {/* Scroll Down Green Button */}
          <button 
            onClick={handleCTA}
            aria-label="Kawal Gula Darah Sekarang"
            className="w-6.5 h-6.5 rounded-full bg-[#10b981] hover:bg-[#059669] border border-black flex items-center justify-center text-white shadow-[1.5px_1.5px_0px_#000] active:translate-y-0.5 active:shadow-[0.5px_0.5px_0px_#000] transition-all cursor-pointer"
          >
            <ChevronDown className="w-3.5 h-3.5 stroke-[3px]" />
          </button>

          {/* Chat Bubble Yellow Button */}
          <button 
            onClick={handleCTA}
            aria-label="Hubungi WhatsApp"
            className="w-6.5 h-6.5 rounded-full bg-[#ffd300] hover:bg-[#e6be00] border border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_#000] active:translate-y-0.5 active:shadow-[0.5px_0.5px_0px_#000] transition-all cursor-pointer"
          >
            <MessageSquare className="w-3 h-3 stroke-[3px]" />
          </button>
        </div>

      </div>

    </div>
  );
}
