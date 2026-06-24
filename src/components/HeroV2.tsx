"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Award, CheckCircle } from "lucide-react";
import { motion, animate, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import HeroContactForm from "./HeroContactForm";
import LogoMarquee from "./LogoMarquee";

export default function HeroV2() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTabletPulsing, setIsTabletPulsing] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const expandY = useMotionValue(0);

  const { scrollY: framerScrollY } = useScroll();
  const textY = useTransform(framerScrollY, [0, 800], [0, 40]);
  const tabletScrollY = useTransform(framerScrollY, [0, 800], [0, -64]);
  const finalTabletY = useTransform(
    [tabletScrollY, expandY],
    ([latestScrollY, latestExpandY]) => (latestScrollY as number) + (latestExpandY as number)
  );
  
  // Exit animations (fade out/scale down on scroll)
  const desktopOpacity = useTransform(framerScrollY, [300, 600], [1, 0]);
  const desktopScale = useTransform(framerScrollY, [300, 600], [1, 0.95]);
  const heroOpacity = isDesktop ? desktopOpacity : 1;
  const heroScale = isDesktop ? desktopScale : 1;

  const benefits = [
    "💰 BERHENTI BINA 'SHOWROOM' SUNYI. BINA MESIN JUALAN MANDIRI.",
    "⚡ SISTEM ASAS BAYAR SEKALI. SKALA SISTEM ANDA BILA-BILA MASA.",
    "⚠️ KOS SEBENAR \"TUNGGU DULU\": RM 500–2,000 BAJET IKLAN HANGUS SETIAP BULAN.",
    "⚡ KELAJUAN BAWAH 0.5 SAAT (NEXT.JS) — PELAWAT STAY, CONVERSION NAIK",
    "🛡️ META PIXEL + GOOGLE ADS TRACKING SIAP — TANPA BAYAR EXTRA",
    "💼 JAMINAN REFUND 100% JIKA MELEBIHI SLA — TANPA SOAL JAWAB",
    "🔓 TIADA YURAN BULANAN TERSEMBUNYI. BEBAS KONTRAK (\"NO LOCK-IN\").",
  ];

  const [benefitIndex, setBenefitIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkMobile = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const flipTimer = setInterval(() => {
      setIsFlipped(true);
      setTimeout(() => {
        setBenefitIndex((prev) => (prev + 1) % benefits.length);
        setIsFlipped(false);
      }, 250);
    }, 3000);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      
      // Sticky when scrolled past the navbar area (approx 96px)
      if (currentScroll > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(flipTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const targetY = isDesktop ? 0 : (isFormExpanded ? 0 : 0);
    const controls = animate(expandY, targetY, {
      type: "spring",
      stiffness: 85,
      damping: 18
    });
    return () => controls.stop();
  }, [isFormExpanded, expandY, isDesktop]);

  useEffect(() => {
    if (isDesktop) return;
    const unsubscribe = framerScrollY.on("change", (latest) => {
      if (latest > 120) {
        setIsFormExpanded(true);
      } else if (latest < 20) {
        setIsFormExpanded(false);
      }
    });
    return () => unsubscribe();
  }, [framerScrollY, isDesktop]);

  useEffect(() => {
    let pulseTimer: NodeJS.Timeout;

    const handlePulse = () => {
      setIsTabletPulsing(true);
      clearTimeout(pulseTimer);
      pulseTimer = setTimeout(() => {
        setIsTabletPulsing(false);
      }, 2500);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestBtn = target.closest("button, a");
      if (closestBtn) {
        if (closestBtn.getAttribute("type") === "submit") return;
        const text = closestBtn.textContent?.toUpperCase() || "";
        if (text.includes("HUBUNGI KAMI")) {
          // Wait a short delay to let scroll start, then trigger pulse
          setTimeout(() => {
            handlePulse();
          }, 300);
        }
      }
    };

    window.addEventListener("pulse-tablet", handlePulse);
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("pulse-tablet", handlePulse);
      window.removeEventListener("click", handleGlobalClick);
      clearTimeout(pulseTimer);
    };
  }, []);

  const handleCtaClick = () => {
    setIsFormExpanded(true);
    setTimeout(() => {
      formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
    window.dispatchEvent(new CustomEvent("pulse-tablet"));
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // premium out-expo
      }
    }
  } as const;

  const badgeVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 14
      }
    }
  } as const;

  const scoresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const circlePopVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  } as const;

  const tabletVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95, rotate: 1.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 14,
        delay: 0.45
      }
    }
  } as const;

  const footerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.9
      }
    }
  } as const;

  const footerItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14
      }
    }
  } as const;

  const footnoteVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <section className="relative z-20 w-full bg-transparent pt-4 md:pt-6 pb-0 px-6 overflow-hidden lg:min-h-screen lg:flex lg:flex-col lg:justify-between">

      {/* STICKY HEADER AND BANNER CONTAINER */}
      {/* PREMIUM HEADER NAVBAR */}
      <motion.div 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0B1329] border-b border-white/5 -mt-4 md:-mt-6 -mx-6 px-6 py-4 relative z-30 shrink-0"
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* FLAT GEOMETRIC LOGO MARK */}
            <svg className="w-16 h-16 text-yellow-400 shrink-0" viewBox="0 0 100 100" fill="currentColor" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg">
              <mask id="star-mask">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                <path d="M50 22 Q50 50 22 50 Q50 50 50 78 Q50 50 78 50 Q50 50 50 22 Z" fill="black" />
              </mask>
              <rect x="15" y="15" width="70" height="70" rx="18" transform="rotate(45 50 50)" mask="url(#star-mask)" />
            </svg>
            <div className="flex flex-col select-none text-left justify-center">
              <span className="text-2xl md:text-3xl font-black tracking-[0.08em] text-white leading-none mr-[-0.08em]">AROS</span>
              <span className="text-[10px] md:text-[12px] font-mono font-bold tracking-[0.22em] text-yellow-300 uppercase mt-1.5 mr-[-0.22em]">
                Sales Engine
              </span>
            </div>
          </div>

          {/* Desktop & Tablet Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-mono font-bold text-slate-350 tracking-wider">
            <a href="#portfolio" className="hover:text-yellow-400 transition-colors hover:scale-105 transform active:scale-95 duration-200">
              HASIL KERJA
            </a>
            <a href="#process" className="hover:text-yellow-400 transition-colors hover:scale-105 transform active:scale-95 duration-200">
              PROSES
            </a>
            <a href="#pricing" className="hover:text-yellow-400 transition-colors hover:scale-105 transform active:scale-95 duration-200">
              PAKEJ
            </a>
            <a href="#faq" className="hover:text-yellow-400 transition-colors hover:scale-105 transform active:scale-95 duration-200">
              FAQ
            </a>
          </nav>

          <div className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight text-right select-none leading-tight">
            <span>🛡️ </span><span className="text-yellow-400">Sub-0.5s Loading</span>
            <span className="block text-[10px] sm:text-xs md:text-sm text-white font-medium mt-1">
              Dijamin atau Refund Penuh
            </span>
          </div>
        </div>

        {/* Mobile Sub-Navbar Links */}
        <div className="md:hidden flex justify-center items-center gap-4 pt-3.5 mt-3.5 border-t border-white/5 text-[10px] font-mono font-bold text-slate-400 tracking-wider">
          <a href="#portfolio" className="hover:text-yellow-400 active:text-yellow-400 transition-colors">HASIL KERJA</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#process" className="hover:text-yellow-400 active:text-yellow-400 transition-colors">PROSES</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#pricing" className="hover:text-yellow-400 active:text-yellow-400 transition-colors">PAKEJ</a>
          <span className="text-white/10 select-none">|</span>
          <a href="#faq" className="hover:text-yellow-400 active:text-yellow-400 transition-colors">FAQ</a>
        </div>
      </motion.div>

      {/* FULL WIDTH STICKY VERTICAL FLIP BANNER */}
      <div 
        className={`${
          isSticky 
            ? "fixed top-0 left-0 right-0 z-50 bg-[#dc2626] shadow-[0_6px_20px_-4px_rgba(0,0,0,0.4)] border-b border-black/15" 
            : "relative -mx-6 mb-8 bg-[#dc2626] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.15)]"
        } text-white h-8 shrink-0 select-none overflow-hidden flex items-center justify-center`}
      >
        <div 
          className={`transition-all duration-300 transform text-[9px] md:text-xs font-mono font-black uppercase tracking-wider text-center flex items-center justify-center h-full ${
            isFlipped ? "opacity-0 -translate-y-3 scale-95" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {benefits[benefitIndex]}
        </div>
      </div>
      {/* Spacer to prevent layout shift when banner becomes fixed */}
      {isSticky && <div className="h-8 mb-8 shrink-0" />}

      {/* MAIN CONTENT GRID CONTAINER */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex items-center pt-8 pb-0 px-6"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          
          {/* LEFT COLUMN: CRITICAL B2B COPY & CTA (8 Cols) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
            className="lg:col-span-7 space-y-4 text-center lg:text-left"
          >
            {/* TOP ANCHOR BRANDING BADGE */}
            <motion.div variants={badgeVariants} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest uppercase bg-yellow-400/10 text-yellow-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-yellow-400/20 shadow-sm shadow-yellow-400/5 select-none whitespace-nowrap">
                <Zap className="w-3 h-3 fill-current animate-pulse-glow" /> 
                BERHENTI BINA SHOWROOM SUNYI
              </span>
            </motion.div>

            {/* HEADLINE with elegant overflow-hidden lines reveal */}
            <h1 className="text-[5.8vw] sm:text-3xl md:text-4xl lg:text-[38px] font-black tracking-tight leading-[1.2] lg:leading-[1.1] text-white">
              <span className="inline sm:block overflow-hidden pb-1">
                <motion.span variants={itemVariants} className="inline sm:block">
                  Berhenti Bina 'Showroom'
                </motion.span>
              </span>
              <span className="inline sm:block overflow-hidden pb-1">
                <motion.span
                  variants={itemVariants}
                  className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(234,179,8,0.3)] inline sm:block mt-1 sm:mt-2"
                >
                  Digital Yang Sunyi.
                </motion.span>
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <h2 className="text-sm font-mono font-bold tracking-widest text-yellow-300 uppercase block mb-1">
              Bina Mesin Jualan Automatik Beroperasi 24/7.
            </h2>
            <motion.p
              variants={itemVariants}
              className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              Laman web yang cantik tiada makna jika ia tidak pandai menjual. Kami bina sistem AROS berkelajuan kilat (sub-0.5s) yang direka khusus dengan struktur CRO untuk menyaring pelawat dan menutup jualan secara automatik.
            </motion.p>

            {/* GLOWING PRIMARY CTA BUTTON */}
            <motion.div variants={itemVariants} className="pt-2 flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(234, 179, 8, 0.55)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCtaClick}
                className="relative inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-[#0B1329] bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 rounded-full border border-amber-300/40 shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:brightness-110 transition-all duration-300 cursor-pointer overflow-hidden z-20 group"
              >
                {/* Shiny sweep animation glare */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
                <span className="flex items-center gap-2 relative z-10">
                  <span>HUBUNGI KAMI SEKARANG</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </motion.div>

            {/* SPESIFIKASI ENJIN JUALAN AROS */}
            <motion.div variants={itemVariants} className="pt-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-blue-200 uppercase">
                    Spesifikasi Utama Enjin Jualan AROS
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                </div>
                
                <motion.div 
                  variants={scoresContainerVariants}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-xl py-0.5"
                >
                  {[
                    { emoji: "⚡", title: "Kelajuan Ultra-Laju (<0.5s)", desc: "Halang pelawat lari sebelum sempat tengok produk." },
                    { emoji: "🗺️", title: "Aliran Prospek Terancang", desc: "Pelawat dipandu terus ke butang beli tanpa sesat." },
                    { emoji: "🎨", title: "UI/UX Premium & Bersih", desc: "Reka bentuk moden, dioptimumkan untuk telefon pintar." },
                    { emoji: "📈", title: "Struktur CRO Ditapis", desc: "CTA diletakkan strategik ikut psikologi jualan." }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={circlePopVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                      className="bg-white/5 border border-white/5 rounded-xl p-2 flex items-center gap-2 text-left transition-colors duration-300"
                    >
                      <span className="text-xl sm:text-2xl select-none filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] shrink-0">{item.emoji}</span>
                      <div className="flex flex-col">
                        <span className="text-[10px] sm:text-xs font-bold text-white tracking-tight leading-tight">{item.title}</span>
                        <span className="text-[9px] text-blue-200 font-medium tracking-tight mt-0.5 leading-tight">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* STATS BLOCK BELOW 4 POINTS */}
                <div className="flex items-center justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.08)]"
                  >
                    <span className="text-base sm:text-lg font-black text-emerald-400 tracking-tight leading-none">
                      +30%
                    </span>
                    <span className="w-[1px] h-4 bg-emerald-500/30" />
                    <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                      Purata Peningkatan Leads
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: HIGH-FIDELITY TABLET MOCKUP WITH INTEGRATED FORM (4 Cols) */}
          <motion.div
            ref={formContainerRef}
            variants={tabletVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full flex items-center justify-center mt-4 lg:mt-0"
          >
            <motion.div 
              style={{ y: isDesktop ? finalTabletY : 0 }} 
              animate={isTabletPulsing ? {
                scale: [1, 1.03, 0.98, 1.015, 1],
              } : {}}
              transition={{ 
                duration: 1.2, 
                ease: "easeInOut",
                repeat: 1
              }}
              className="relative w-full max-w-[400px]"
            >
              {/* Soft ambient backing glow specifically for the tablet */}
              <motion.div 
                animate={isTabletPulsing ? {
                  scale: [1, 1.25, 0.95, 1.1, 1],
                  opacity: [0.5, 0.95, 0.4, 0.8, 0.5]
                } : {}}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeInOut",
                  repeat: 1
                }}
                className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-amber-500/20 rounded-[44px] blur-3xl -z-10 transform scale-95 pointer-events-none" 
              />
              
              {/* Tablet Outer Rim (Dark Shiny Silver Metallic Finish) */}
              <div className="relative mx-auto p-[3px] bg-gradient-to-br from-slate-600 via-slate-400 to-slate-700 rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] w-full">
                
                {/* Shiny highlight overlay on the metallic rim */}
                <div className="absolute inset-0 rounded-[40px] border border-white/20 pointer-events-none z-10" />

                {/* Physical buttons on the mockup */}
                <div className="absolute top-[80px] -right-[2px]. w-[2px] h-[32px] bg-slate-800 rounded-r-xs z-30" />
                <div className="absolute top-[124px] -right-[2px] w-[2px] h-[32px] bg-slate-800 rounded-r-xs z-30" />
                <div className="absolute top-[60px] -left-[2px] w-[2px] h-[40px] bg-slate-800 rounded-l-xs z-30" />

                {/* Inner Black Bezel */}
                <div className="relative border-[11px] border-slate-950 bg-slate-950 rounded-[37px] overflow-hidden w-full">
                  {/* Camera Notch/Lenses */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 z-30 animate-pulse" />

                  {/* Screen Content - Light Gray Web Canvas */}
                  <div className="relative w-full bg-slate-100 pt-8 pb-3 select-none h-[570px] flex flex-col overflow-hidden">
                    
                    {/* Subtle simulated iOS status bar (dark text) */}
                    <div className="absolute top-1.5 left-0 right-0 px-5 flex justify-between items-center text-[8px] font-semibold text-slate-700 select-none z-20">
                      <span>9:41 AM</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5 items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        </div>
                        <span className="font-semibold text-[8px] ml-0.5">LTE</span>
                        <div className="w-5 h-2.5 border border-slate-700 rounded-sm p-0.5 flex items-center">
                          <div className="w-full h-full bg-slate-800 rounded-xs" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Web Browser Safari Frame */}
                    <motion.div 
                      initial={{ y: -15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                      className="flex items-center justify-between gap-3 px-4 py-2 mb-2.5 bg-slate-300 border-b border-slate-400 text-[9px] text-slate-650 z-10 relative"
                    >
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-4 h-4 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[7px] font-black cursor-default text-slate-400 select-none">‹</span>
                        <span className="w-4 h-4 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[7px] font-black cursor-default text-slate-400 select-none">›</span>
                      </div>
                      <div className="flex-1 max-w-[220px] mx-auto bg-white border border-slate-300 rounded-md py-0.5 px-3 flex items-center justify-center gap-1 shadow-sm">
                        <span className="text-[7px] text-slate-400">🔒</span>
                        <span className="truncate text-[8.5px] text-slate-650 font-medium tracking-tight">audit.agspeed.io</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[7px] text-slate-500 cursor-default select-none shrink-0">
                        ↻
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 flex flex-col"
                    >
                      <HeroContactForm isTablet={true} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* FULL-WIDTH ROW FOR TRUST STRIP & FOOTNOTE (CENTER ALIGNED) */}
      <motion.div
        variants={footerContainerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 pt-4 pb-4 flex flex-col items-center justify-center gap-3 text-center w-full shrink-0 relative z-20"
      >
        {/* TRUST ELEMENTS STRIP */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {[
            "✅ Lighthouse Score Above 95% Dijamin",
            "⚡ Draf Siap 72 Jam atau Refund Penuh",
            "🔓 Kod 100% Milik Anda — Tiada Lock-In",
          ].map((label, i) => (
            <motion.span
              key={i}
              variants={footerItemVariants}
              className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-[10px] font-mono font-bold text-white uppercase tracking-widest shadow-sm shadow-black/10"
            >
              {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />}
              {label}
            </motion.span>
          ))}
        </div>

        {/* SECURITY / INTEGRATION FOOTNOTE */}
        <motion.div 
          variants={footnoteVariants}
          className="flex items-center justify-center gap-2 text-xs font-mono text-blue-100 tracking-wider"
        >
          <span className="flex items-center gap-1.5 text-blue-100">
            <ShieldCheck className="w-4 h-4 text-yellow-300 shrink-0" /> META PIXEL + GOOGLE ADS + TIKTOK TRACKING — SETUP PENUH, SIAP HARI PERTAMA, TANPA CAJ TAMBAHAN
          </span>
        </motion.div>
      </motion.div>

      {/* Tech Stack & Integration Infinite Marquee */}
      <div className="-mx-6 relative z-20">
        <LogoMarquee />
      </div>
    </section>
  );
}
