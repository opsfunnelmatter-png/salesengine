"use client";

import React from "react";
import { ChevronDown, MessageSquare } from "lucide-react";

export default function HairCarePage() {
  const handleCTA = () => {
    const targetPhone = "60125065516";
    const message = "Salam, saya berminat dengan Spray Conditioner untuk rambut kusut & kering. Boleh tahu harga promosi?";
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="h-screen w-full bg-[#13c2f1] text-slate-900 overflow-hidden flex flex-col justify-between p-3.5 relative select-none border border-black/10">
      
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
          -webkit-text-stroke: 1.5px #000;
          text-shadow: 2.5px 2.5px 0px #000;
        }
        .text-outline-pink {
          color: #ff3377;
          -webkit-text-stroke: 1.5px #000;
          text-shadow: 2.5px 2.5px 0px #000;
        }
      `}} />

      {/* 1. Top Headlines (Cartoon Outlined Style) */}
      <div className="text-center mt-1 space-y-0.5 shrink-0 font-luckiest">
        <h1 className="text-[23px] tracking-wide leading-[1.1] text-white text-outline-white uppercase">
          RAMBUT <span className="text-outline-pink">KUSUT &</span>
        </h1>
        <h1 className="text-[23px] tracking-wide leading-[1.1] text-white text-outline-white uppercase">
          <span className="text-outline-pink">KERING</span> SUSAH NAK
        </h1>
        <h2 className="text-[25px] tracking-wide leading-[1.1] text-white text-outline-white uppercase">
          STYLE ?
        </h2>
      </div>

      {/* 2. Magenta Announcement Badge */}
      <div className="mx-auto my-1.5 shrink-0 w-[95%] font-fredoka">
        <div className="bg-[#ff3377] border-2 border-black rounded shadow-[2.5px_2.5px_0px_#000] py-1 px-1.5 text-center">
          <p className="text-[8.5px] font-black tracking-wide text-white uppercase leading-tight">
            SPRAY JE, RAMBUT TERUS LEMBUT SEBELUM KELUAR RUMAH.
          </p>
        </div>
      </div>

      {/* 3. Before & After Polaroid Cards (Overlapping) */}
      <div className="flex justify-center items-center gap-2.5 my-1.5 shrink-0 relative px-2 font-fredoka">
        
        {/* Before Polaroid (Left, rotated slightly left) */}
        <div className="w-[47%] bg-white border-2 border-black p-1.5 pb-2.5 rotate-[-3deg] shadow-[3.5px_3.5px_0px_rgba(0,0,0,0.15)] flex flex-col items-center relative">
          <div className="w-full aspect-[4/5] bg-slate-100 border border-black overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Messy Dry Frizzy Hair Before"
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
          
          {/* Hand-drawn style White Star outline overlapping bottom-left corner */}
          <svg className="absolute -bottom-2.5 -left-2.5 w-7 h-7 text-white drop-shadow-[1px_1.5px_0px_#000]" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2.5">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
          </svg>

          <div className="mt-1 bg-black text-white text-[7.5px] font-black px-2 py-0.5 rounded border border-black tracking-widest uppercase">
            BEFORE
          </div>
        </div>

        {/* After Polaroid (Right, rotated slightly right, with yellow tape) */}
        <div className="w-[47%] bg-white border-2 border-black p-1.5 pb-2.5 rotate-[3deg] shadow-[3.5px_3.5px_0px_rgba(0,0,0,0.15)] flex flex-col items-center relative">
          
          {/* Yellow Tape sticker */}
          <div className="absolute -top-2.5 -right-1 w-6 h-3 bg-[#ffd300] border-2 border-black rotate-[20deg] shadow-sm z-10" />

          <div className="w-full aspect-[4/5] bg-slate-100 border border-black overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=300&q=80"
              alt="Smooth Straight Styled Hair After"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-1 bg-white text-black text-[7.5px] font-black px-2.5 py-0.5 rounded border border-black tracking-widest uppercase shadow-[1px_1px_0px_#000]">
            AFTER
          </div>
        </div>

      </div>

      {/* 4. Yellow Accent Highlight Box */}
      <div className="mx-auto my-1.5 shrink-0 w-[95%] font-fredoka">
        <div className="bg-[#ffd300] border-2 border-black rounded shadow-[2.5px_2.5px_0px_#000] py-1 px-1.5 text-center">
          <p className="text-[8.5px] font-black text-black uppercase leading-tight tracking-wide">
            CONDITIONER FIRST DALAM BENTUK SPRAY
          </p>
        </div>
      </div>

      {/* 5. Pink Checkmarks Bullet List */}
      <div className="space-y-1.5 my-1 px-5 text-left shrink-0 font-fredoka">
        {[
          "Tak perlu bilas.",
          "Tak perlu basahkan rambut lama-lama.",
          "Tak perlu banyak step."
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#ff3377] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[10px] font-extrabold text-black leading-tight">{item}</span>
          </div>
        ))}
      </div>

      {/* 6. Bottom Banner & Floating Interactive Actions */}
      <div className="relative w-full h-[70px] shrink-0 mt-1 flex items-end justify-center px-1">
        {/* Product Application Person Shot - Centered */}
        <div className="w-[105px] h-[70px] relative overflow-hidden border-t-2 border-x-2 border-black rounded-t-xl">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80"
            alt="Woman Hair Styling"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Floating Circular Buttons - Absolute Bottom-Right */}
        <div className="absolute bottom-1 right-2.5 flex flex-col gap-1.5 pb-1 z-30">
          
          {/* Scroll/Chevron Down Green Button */}
          <button 
            onClick={handleCTA}
            aria-label="Scroll down"
            className="w-7 h-7 rounded-full bg-[#10b981] hover:bg-[#059669] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer"
          >
            <ChevronDown className="w-4 h-4 stroke-[3px]" />
          </button>

          {/* Chat Bubble Yellow Button */}
          <button 
            onClick={handleCTA}
            aria-label="Contact agent"
            className="w-7 h-7 rounded-full bg-[#ffd300] hover:bg-[#e6be00] border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 stroke-[3px]" />
          </button>
        </div>

      </div>

    </div>
  );
}
