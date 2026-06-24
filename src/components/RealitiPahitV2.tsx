"use client";

import React, { useState, useRef } from "react";
import { AlertTriangle, Zap, RotateCw } from "lucide-react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function RealitiPahitV2() {
  const [isFlipped, setIsFlipped] = useState(false);
  const lastFlippedTimeRef = useRef(0);

  const handleFlip = () => {
    if (Date.now() - lastFlippedTimeRef.current > 350) {
      setIsFlipped(!isFlipped);
      lastFlippedTimeRef.current = Date.now();
    }
  };

  const handleTouchStart = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      lastFlippedTimeRef.current = Date.now();
    }
  };

  // AROS Card Mouse-Tracking 3D Tilt (Desktop)
  const arosCardRef = useRef<HTMLDivElement>(null);
  const arosX = useMotionValue(0);
  const arosY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20 };
  const arosRotateX = useSpring(arosY, springConfig); // note: mouse Y controls rotateX
  const arosRotateY = useSpring(arosX, springConfig); // note: mouse X controls rotateY

  const handleArosMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = arosCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Normalize to range
    const rY = (mouseX / (width / 2)) * 12; // max rotateY 12deg
    const rX = -(mouseY / (height / 2)) * 8; // max rotateX 8deg
    
    arosX.set(rY);
    arosY.set(rX);
  };

  const handleArosMouseLeave = () => {
    arosX.set(0);
    arosY.set(0);
  };

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

  const cardLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  } as const;

  const cardRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  } as const;

  return (
    <section className="relative z-10 w-full bg-transparent py-24 md:py-32 px-6 overflow-hidden">

      {/* CSS for 3D Card Flip & Border Beam Overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-container {
          perspective: 1500px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}} />

      {/* Subtle Dot-Grid Pattern (Matches PerformanceShowcase) */}
      <div className="absolute inset-0 bg-dot-grid-masked pointer-events-none z-0" />

      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_60%)] pointer-events-none blur-3xl z-0" />

      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Headline Top (Row 1), Side-by-Side Cards (Row 2)            */}
      {/* ========================================================================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="hidden lg:block max-w-6xl mx-auto w-full relative z-10 space-y-14"
      >
        
        {/* Row 1: Headline & Subheadline (Centered) */}
        <motion.div variants={containerVariants} className="text-center max-w-3xl mx-auto space-y-5">
          <motion.div variants={badgeVariants} className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase bg-amber-400/10 text-amber-300 px-3.5 py-1.5 rounded-full border border-amber-300/20 shadow-xs">
              💸 KENAPA 'SHOWROOM' DIGITAL ANDA SUNYI WALAUPUN ANDA RUN ADS
            </span>
          </motion.div>
          
          <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight leading-tight text-white">
            Website Yang Tidak Pandai Menjual Bukan Masalah Rekaan.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)] inline-block">
              Ia Adalah Mesin Pembaziran Wang Yang Paling Mahal Anda Miliki.
            </span>
          </motion.h2>
          
          <motion.p variants={textVariants} className="text-slate-200 text-base leading-relaxed font-semibold">
            Bayangkan situasi ini: Anda habiskan RM500 untuk iklan. 200 orang klik. Website load. Mereka scroll. Tapi tiada yang beli. Tiada yang isi borang. Tiada yang hubungi. Kenapa? Sebab website anda bukan direka untuk menjual — ia direka untuk dipandang sahaja. Dan RM500 anda tu hangus <strong className="text-red-500">untuk TIADA APA-APA.</strong>
          </motion.p>
          <motion.p variants={textVariants} className="text-slate-350 text-sm leading-relaxed">
            Website lembap baru separuh masalah. Masalah yang lebih besar adalah website yang macam labirin (sesat).
            <br /><br />
            Cuba cek website anda sekarang: Adakah menu dia terlalu banyak? Adakah teks tulisan berpusing-pusing sampai pelawat pening? Adakah butang untuk hubungi anda tersorok?
            <br /><br />
            Website yang berserabut, tiada aliran visitor journey yang jelas, dan CTA yang mengelirukan adalah pembunuh senyap wang iklan anda. Pelawat masuk, pening, dan terus pangkah.
          </motion.p>
          <motion.p variants={textVariants} className="text-slate-400 text-sm leading-relaxed">
            Berikut adalah perbandingan audit sebenar. Lihat sendiri bezanya.
          </motion.p>
        </motion.div>

        {/* Speed Comparison Bar — Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto space-y-4 px-4"
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
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-end pr-2"
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

        {/* Row 2: Two Columns Symmetrical Side-by-Side Comparison */}
        <div style={{ perspective: "1200px" }} className="grid grid-cols-2 gap-8 items-stretch max-w-[960px] mx-auto relative">
          
          {/* Central VS Badge */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-mono font-black flex items-center justify-center shadow-lg border-4 border-white text-xs select-none pointer-events-none"
          >
            VS
          </motion.div>

          {/* LEFT COLUMN: WORDPRESS CARD (Static Front) */}
          <motion.div 
            variants={cardLeftVariants}
            className="bg-[#121A2E]/80 border border-red-500/20 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-black/40 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden select-none h-full"
          >
            {/* Ambient Red Glow Pulse */}
            <motion.div
              animate={{ opacity: [0.03, 0.08, 0.03], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-red-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
            />
            {/* Soft background red glow */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <span className="text-red-500 shrink-0">💸</span>
                    <span className="text-left leading-tight">
                      Website Perlahan
                      <span className="block text-xs text-red-400 font-mono font-medium mt-1">(WordPress/Template)</span>
                    </span>
                  </h3>
                </div>
              </div>

              {/* PageSpeed Audit Title */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 font-bold">Lighthouse Audit Report</span>
                <span className="text-red-500 font-bold">STATUS: KRITIKAL</span>
              </div>

              {/* Main Dashboard Visual: Score + Grid */}
              <div className="grid grid-cols-12 gap-6 items-center">
                
                {/* Large Circle Gauge (5 cols) */}
                <div className="col-span-5 flex flex-col items-center justify-center bg-red-500/5 border border-red-500/20 rounded-2xl py-5">
                  <div className="relative flex items-center justify-center w-24 h-24">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        className="text-slate-800"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                      />
                      <circle
                        className="text-red-500"
                        strokeWidth="8"
                        strokeDasharray="251.3"
                        strokeDashoffset="155.8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="48"
                        cy="48"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-3xl font-mono font-black text-red-500">38</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-black text-slate-450 uppercase tracking-widest mt-3">
                    Performance
                  </span>
                </div>

                {/* Metrics Grid (7 cols) */}
                <div className="col-span-7 grid grid-cols-2 gap-3">
                  {/* Metric 1 */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 space-y-1 text-left">
                    <span className="text-[9px] text-slate-400 font-mono block leading-none">First Contentful Paint</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 bg-red-500 transform rotate-45 shrink-0 block" title="Kritikal" />
                      <span className="text-sm font-mono font-bold text-red-500">4.1s</span>
                    </div>
                  </div>
                  {/* Metric 2 */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 space-y-1 text-left">
                    <span className="text-[9px] text-slate-400 font-mono block leading-none">Speed Index</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 bg-red-500 transform rotate-45 shrink-0 block" title="Kritikal" />
                      <span className="text-sm font-mono font-bold text-red-500">5.2s</span>
                    </div>
                  </div>
                  {/* Metric 3 */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 space-y-1 text-left">
                    <span className="text-[9px] text-slate-400 font-mono block leading-none">Largest Contentful Paint</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 bg-red-500 transform rotate-45 shrink-0 block" title="Kritikal" />
                      <span className="text-sm font-mono font-bold text-red-500">6.8s</span>
                    </div>
                  </div>
                  {/* Metric 4 */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 space-y-1 text-left">
                    <span className="text-[9px] text-slate-400 font-mono block leading-none">Page Size</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 bg-red-500 transform rotate-45 shrink-0 block" title="Kritikal" />
                      <span className="text-sm font-mono font-bold text-red-500">4.8MB</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Diagnostic Message */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 flex gap-2.5 items-start text-xs text-red-300 text-left">
                <span className="text-red-500 text-sm font-bold leading-none mt-0.5">⚠️</span>
                <p className="leading-relaxed font-medium">
                  5 saat loading = 38% pelawat dah cabut. Tiap hari anda run ads, tiap hari wang anda terbakar sebelum orang sempat tengok tawaran anda.
                </p>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-8">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Kos Sebenar Per Bulan</span>
                <div className="text-2xl font-black text-red-500 font-mono">RM200-800 Hangus</div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] text-red-400 bg-red-500/10 border border-red-500/30 px-3.5 py-2.5 rounded-xl font-bold">
                💸 Mesin Pembaziran
              </span>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: AROS CARD (Static Back Card style) */}
          <motion.div 
            ref={arosCardRef}
            onMouseMove={handleArosMouseMove}
            onMouseLeave={handleArosMouseLeave}
            variants={cardRightVariants}
            style={{
              rotateX: arosRotateX,
              rotateY: arosRotateY,
              transformStyle: "preserve-3d"
            }}
            className="border-beam-wrapper rounded-3xl !p-[1.5px] shadow-lg shadow-emerald-500/5 flex flex-col justify-stretch h-full cursor-pointer"
          >
            <div className="border-beam-inner bg-[#121A2E]/95 border border-emerald-500/30 rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden select-none">
              {/* Soft background emerald glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      <span className="text-emerald-500 shrink-0">⚡</span>
                      <span className="text-left leading-tight">
                        AROS Speed Engine
                        <span className="block text-xs text-emerald-400/90 font-mono font-medium mt-1">(Sub-0.5 Saat)</span>
                      </span>
                    </h3>
                  </div>
                </div>

                {/* PageSpeed Audit Title */}
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 font-bold">Lighthouse Audit Report</span>
                  <span className="text-emerald-500 font-bold">STATUS: SEMPURNA</span>
                </div>

                {/* Main Dashboard Visual: Score + Grid */}
                <div className="grid grid-cols-12 gap-6 items-center">
                  
                  {/* Large Circle Gauge (5 cols) */}
                  <div className="col-span-5 flex flex-col items-center justify-center bg-emerald-500/5 border border-emerald-500/15 rounded-2xl py-5">
                    <div className="relative flex items-center justify-center w-24 h-24">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          className="text-slate-800"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="48"
                          cy="48"
                        />
                        <circle
                          className="text-emerald-500"
                          strokeWidth="8"
                          strokeDasharray="251.3"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="48"
                          cy="48"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-3xl font-mono font-black text-emerald-450 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]">100</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest mt-3">
                      Performance
                    </span>
                  </div>

                  {/* Metrics Grid (7 cols) */}
                  <div className="col-span-7 grid grid-cols-2 gap-3">
                    {/* Metric 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 space-y-1 text-left">
                      <span className="text-[9px] text-slate-400 font-mono block leading-none">First Contentful Paint</span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0 block" title="Sempurna" />
                        <span className="text-sm font-mono font-black text-emerald-400">0.1s</span>
                      </div>
                    </div>
                    {/* Metric 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 space-y-1 text-left">
                      <span className="text-[9px] text-slate-400 font-mono block leading-none">Speed Index</span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0 block" title="Sempurna" />
                        <span className="text-sm font-mono font-black text-emerald-400">0.3s</span>
                      </div>
                    </div>
                    {/* Metric 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 space-y-1 text-left">
                      <span className="text-[9px] text-slate-400 font-mono block leading-none">Largest Contentful Paint</span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0 block" title="Sempurna" />
                        <span className="text-sm font-mono font-black text-emerald-400">0.4s</span>
                      </div>
                    </div>
                    {/* Metric 4 */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 space-y-1 text-left">
                      <span className="text-[9px] text-slate-400 font-mono block leading-none">Page Size</span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0 block" title="Sempurna" />
                        <span className="text-sm font-mono font-black text-emerald-400">120KB</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Diagnostic Message */}
                <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-3 flex gap-2.5 items-start text-xs text-slate-300 text-left">
                  <span className="text-emerald-500 text-sm font-bold leading-none mt-0.5">✓</span>
                  <p className="leading-relaxed font-medium">
                    0.4 saat loading — pelawat stay, scroll, dan beli. Setiap ringgit iklan anda sampai kepada orang yang betul, dalam keadaan yang betul untuk membeli.
                  </p>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-8">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">ROI Iklan Bertukar</span>
                  <div className="text-2xl font-black text-emerald-400 font-mono">+30% Lebih Leads</div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2.5 rounded-xl font-bold">
                  🚀 Enjin Keuntungan
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW: Headline + Sliding Switcher + Flippable 3D Card (Stacked)    */}
      {/* ========================================================================= */}
      <div className="block lg:hidden max-w-xl mx-auto w-full relative z-10 space-y-8">
        
        {/* Header (Centered) */}
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase bg-primary/10 text-primary px-3.5 py-1.5 rounded-full border border-primary/20 shadow-xs">
              💸 KENAPA 'SHOWROOM' DIGITAL ANDA SUNYI WALAUPUN ANDA RUN ADS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight leading-tight text-white">
            Website Cantik Tapi Senyap ={" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)] block">
              Mesin Membakar Wang
            </span>
          </h2>
          
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-semibold">
            Bayangkan situasi ini: Anda habiskan RM500 untuk iklan. 200 orang klik. Website load. Mereka scroll. Tapi tiada yang beli. Tiada yang isi borang. Tiada yang hubungi. Kenapa? Sebab website anda bukan direka untuk menjual — ia direka untuk dipandang sahaja. Dan RM500 anda tu hangus <strong className="text-red-500">untuk TIADA APA-APA.</strong>
          </p>
          <p className="text-slate-400 text-xs leading-relaxed mt-3">
            Website lembap baru separuh masalah. Masalah yang lebih besar adalah website yang macam labirin (sesat).
            <br /><br />
            Cuba cek website anda sekarang: Adakah menu dia terlalu banyak? Adakah teks tulisan berpusing-pusing sampai pelawat pening? Adakah butang untuk hubungi anda tersorok?
            <br /><br />
            Website yang berserabut, tiada aliran visitor journey yang jelas, dan CTA yang mengelirukan adalah pembunuh senyap wang iklan anda. Pelawat masuk, pening, dan terus pangkah.
          </p>

          {/* Switcher Button */}
          <div className="pt-2 flex justify-center">
            <div className="bg-white/5 p-1.5 rounded-2xl flex items-center border border-white/10 shadow-lg w-full max-w-[320px]">
              <button
                onClick={() => setIsFlipped(false)}
                className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border flex items-center justify-center gap-1.5 ${
                  !isFlipped
                    ? "bg-red-500/20 text-red-400 shadow-md border-red-500/30"
                    : "text-slate-400 hover:text-white border-transparent animate-pulse"
                }`}
              >
                <span>❌ WordPress</span>
                {isFlipped && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />}
              </button>
              <button
                onClick={() => setIsFlipped(true)}
                className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer border flex items-center justify-center gap-1.5 ${
                  isFlipped
                    ? "bg-emerald-500/20 text-emerald-300 shadow-md border-emerald-500/30"
                    : "text-slate-400 hover:text-white border-transparent animate-pulse"
                }`}
              >
                <span>⚡ AROS</span>
                {!isFlipped && <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
              </button>
            </div>
          </div>
        </div>

        {/* Flippable Card Container */}
        <div className="flex justify-center w-full">
          <div className="perspective-container w-full max-w-[450px] h-[580px]">
            
            <div 
              onClick={handleFlip}
              onTouchStart={handleTouchStart}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setIsFlipped(true);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") setIsFlipped(false);
              }}
              className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}
            >
              {/* CARD FRONT: WORDPRESS (Flippable Front) */}
              <div className="flip-card-front">
                <div className="bg-[#121A2E]/80 border border-red-500/20 rounded-3xl p-6 flex flex-col justify-between h-full shadow-2xl shadow-black/45 cursor-pointer relative overflow-hidden select-none">
                  {/* Soft background red glow */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-5">
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-black text-white flex items-center gap-1.5">
                          <span className="text-red-500 shrink-0">💸</span>
                          <span className="text-left leading-tight">
                            Website Perlahan
                            <span className="block text-[10px] text-red-400 font-mono font-medium mt-0.5">(WordPress/Template)</span>
                          </span>
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-md animate-pulse">
                        <span>TAP TO FLIP</span>
                        <RotateCw className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '4s' }} />
                      </div>
                    </div>

                    {/* PageSpeed Audit Title */}
                    <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400 font-bold">Lighthouse Audit Report</span>
                      <span className="text-red-500 font-bold">STATUS: KRITIKAL</span>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                      {/* Score Circle */}
                      <div className="flex flex-col items-center justify-center bg-red-500/5 border border-red-500/20 rounded-2xl py-3 w-full max-w-[150px]">
                        <div className="relative flex items-center justify-center w-16 h-16">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="transparent" r="26" cx="32" cy="32" />
                            <circle className="text-red-500" strokeWidth="6" strokeDasharray="163.3" strokeDashoffset="101.2" strokeLinecap="round" stroke="currentColor" fill="transparent" r="26" cx="32" cy="32" />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center">
                            <span className="text-xl font-mono font-black text-red-500">38</span>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-black text-slate-500 uppercase tracking-widest mt-1">Performance</span>
                      </div>

                      {/* Metrics List */}
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                          <span className="text-[8px] text-slate-400 font-mono block leading-none">FCP</span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-red-500 transform rotate-45 shrink-0 block" />
                            <span className="text-xs font-mono font-bold text-red-500">4.1s</span>
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                          <span className="text-[8px] text-slate-400 font-mono block leading-none">Speed Index</span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-red-500 transform rotate-45 shrink-0 block" />
                            <span className="text-xs font-mono font-bold text-red-500">5.2s</span>
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                          <span className="text-[8px] text-slate-400 font-mono block leading-none">LCP</span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-red-500 transform rotate-45 shrink-0 block" />
                            <span className="text-xs font-mono font-bold text-red-500">6.8s</span>
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                          <span className="text-[8px] text-slate-400 font-mono block leading-none">Page Size</span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-red-500 transform rotate-45 shrink-0 block" />
                            <span className="text-xs font-mono font-bold text-red-500">4.8MB</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Diagnostic Message */}
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-2.5 flex gap-2 items-start text-[10px] text-red-300 text-left">
                      <span className="text-red-500 text-xs font-bold leading-none mt-0.5">⚠️</span>
                      <p className="leading-relaxed font-medium">
                        5 saat loading = 38% pelawat dah cabut. Tiap hari anda run ads, tiap hari wang anda terbakar sebelum orang sempat tengok tawaran anda.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">Kos Sebenar Per Bulan</span>
                      <div className="text-lg font-black text-red-500 font-mono leading-none">RM200-800 Hangus</div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[9px] text-red-400 bg-red-500/10 border border-red-500/30 px-2.5 py-1.5 rounded-lg font-bold">
                      💸 Mesin Pembaziran
                    </span>
                  </div>

                </div>
              </div>

              {/* CARD BACK: AROS (Flippable Back) */}
              <div className="flip-card-back">
                <div className="border-beam-wrapper rounded-3xl !p-[1.5px] h-full shadow-lg shadow-emerald-500/5 cursor-pointer">
                  <div className="border-beam-inner bg-[#121A2E]/95 border border-emerald-500/30 rounded-3xl p-6 flex flex-col justify-between h-full relative overflow-hidden select-none">
                    {/* Soft background emerald glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="space-y-5">
                      {/* Card Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-black text-white flex items-center gap-1.5">
                          <span className="text-emerald-500 shrink-0">⚡</span>
                          <span className="text-left leading-tight">
                            AROS Speed Engine
                            <span className="block text-[10px] text-emerald-400/90 font-mono font-medium mt-0.5">(Sub-0.5 Saat)</span>
                          </span>
                        </h3>
                        
                        <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md animate-pulse">
                          <span>TAP TO RETURN</span>
                          <RotateCw className="w-2.5 h-2.5 animate-pulse" />
                        </div>
                      </div>

                      {/* PageSpeed Audit Title */}
                      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-2.5 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400 font-bold">Lighthouse Audit Report</span>
                        <span className="text-emerald-500 font-bold">SEMPURNA</span>
                      </div>

                      <div className="flex flex-col gap-4 items-center">
                        {/* Score Circle */}
                        <div className="flex flex-col items-center justify-center bg-emerald-500/5 border border-emerald-500/15 rounded-2xl py-3 w-full max-w-[150px]">
                          <div className="relative flex items-center justify-center w-16 h-16">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="transparent" r="26" cx="32" cy="32" />
                              <circle className="text-emerald-500" strokeWidth="6" strokeDasharray="163.3" strokeDashoffset="0" strokeLinecap="round" stroke="currentColor" fill="transparent" r="26" cx="32" cy="32" />
                            </svg>
                            <div className="absolute flex flex-col items-center justify-center">
                              <span className="text-xl font-mono font-black text-emerald-400">100</span>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest mt-1">Performance</span>
                        </div>

                        {/* Metrics List */}
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                            <span className="text-[8px] text-slate-400 font-mono block leading-none">FCP</span>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 block" />
                              <span className="text-xs font-mono font-bold text-emerald-400">0.1s</span>
                            </div>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                            <span className="text-[8px] text-slate-400 font-mono block leading-none">Speed Index</span>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 block" />
                              <span className="text-xs font-mono font-bold text-emerald-400">0.3s</span>
                            </div>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                            <span className="text-[8px] text-slate-400 font-mono block leading-none">LCP</span>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 block" />
                              <span className="text-xs font-mono font-bold text-emerald-400">0.4s</span>
                            </div>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-xl p-2 space-y-0.5 text-left">
                            <span className="text-[8px] text-slate-400 font-mono block leading-none">Page Size</span>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 block" />
                              <span className="text-xs font-mono font-bold text-emerald-400">120KB</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Diagnostic Message */}
                      <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-3 flex gap-2.5 items-start text-[10px] text-slate-350 text-left">
                        <span className="text-emerald-500 text-sm font-bold leading-none mt-0.5">✓</span>
                        <p className="leading-relaxed font-medium">
                          0.4 saat loading — pelawat stay, scroll, dan beli. Setiap ringgit iklan anda sampai kepada orang yang betul, dalam keadaan yang betul untuk membeli.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">ROI Iklan Bertukar</span>
                        <div className="text-lg font-black text-emerald-400 font-mono leading-none">+30% Lebih Leads</div>
                      </div>
                      <span className="text-[9px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5 rounded-lg font-bold">
                        🚀 Enjin Keuntungan
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Pain Stats Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="bg-[#0B1329] border border-white/10 rounded-3xl p-8 md:p-10 max-w-5xl mx-auto mt-16 relative overflow-hidden"
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
            <div className="text-white font-bold text-base">Pelawat Kabur</div>
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
      <div className="text-center mt-12">
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
