"use client";

import React from "react";
import Image from "next/image";
import { Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function PerformanceShowcase() {
  return (
    <section className="relative z-10 w-full bg-white py-20 text-slate-800 overflow-hidden border-t border-slate-200/60 bg-dot-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 shadow-sm">
            <Zap className="w-3.5 h-3.5" /> PANDUAN PRESTASI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-slate-900 leading-tight">
            Mengapa Kelajuan Laman Web Menentukan{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Untung Rugi Ads
            </span>
            ?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Sama ada anda mahu bina tapak perniagaan baharu atau menaik taraf yang sedia ada—kelajuan adalah kunci penukaran. Laman web yang lambat hanya akan membazirkan bajet iklan anda.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Comparison Dashboard (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Laman Web WordPress / Shopify Biasa vs Next.js Speed Engine
            </h3>
            
            {/* Speed Comparison Bars Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-md shadow-slate-100/50 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-red-600 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Laman Web WordPress / Shopify Biasa
                  </span>
                  <span className="text-red-500">4.8 Saat (Membazir Clicks)</span>
                </div>
                <div className="w-full bg-slate-100 border border-slate-200/40 rounded-full h-3.5 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full w-[85%] transition-all duration-1000" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Next.js Speed Engine
                  </span>
                  <span className="text-emerald-650">0.2 Saat (Maksimum Conversion)</span>
                </div>
                <div className="w-full bg-slate-100 border border-slate-200/40 rounded-full h-3.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary-dark h-full rounded-full w-[10%] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Financial Leakage Info Card with Image */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Card 1: 3D Leakage Funnel */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200/60 shadow-md shadow-slate-100/50 flex flex-col space-y-4 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-32 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-inner">
                  <Image
                    src="/images/ad_funnel_leakage.png"
                    alt="Ad Funnel Leakage Graphic showing lost ad budget"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-red-700 text-[10px] font-mono font-bold uppercase tracking-wider">Bajet Iklan Lebur (Google/Deloitte)</div>
                  <div className="text-3xl font-black text-red-600 font-mono">53%</div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-normal">
                  Kajian Google/Deloitte menunjukkan 53% pelawat mobile lari jika loading melebihi 3 saat. Bajet Ads anda terbuang sia-sia.
                </p>
              </div>

              {/* Card 2: Next.js Retention */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200/60 shadow-md shadow-slate-100/50 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-32 rounded-2xl border border-slate-200/40 bg-gradient-to-b from-primary/5 to-transparent flex flex-col items-center justify-center p-4">
                    <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-1">Pengekalan Pelawat</span>
                    <div className="text-4xl font-black text-primary font-mono tracking-tight animate-pulse-glow">90%+</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-emerald-700 text-[10px] font-mono font-bold uppercase tracking-wider">Optimasi Maksimum</div>
                    <div className="text-xs font-bold text-slate-800">Menangkap Setiap Klik Ads</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-normal">
                  Mengekalkan pelawat secara maksimum dengan kelajuan sub-saat. Pelawat terus mendarat pada offer anda tanpa penantian.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Lighthouse Score Presentation (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm p-6 sm:p-8 rounded-[36px] border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden bg-gradient-to-b from-white to-slate-50">
              {/* Decorative phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-slate-900 border-b border-l border-r border-slate-850 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-8 h-1 bg-slate-700 rounded-full" />
              </div>
              
              {/* Screen Content */}
              <div className="mt-6 space-y-6 text-center">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Lighthouse Mobile Audit
                </span>
                
                {/* 100 Score Circular Indicator */}
                <div className="relative w-36 h-36 mx-auto flex items-center justify-center rounded-full border-8 border-primary bg-primary/[0.01] shadow-[0_0_30px_rgba(249,115,22,0.04)] animate-float-medium">
                  <div className="text-4xl sm:text-5xl font-black text-primary font-mono">100</div>
                  <div className="absolute -top-3.5 px-3 py-1 bg-primary text-white text-[9px] font-mono font-black rounded-full uppercase tracking-wider shadow-md shadow-primary/20">
                    PERFECT
                  </div>
                </div>

                {/* Score Stats */}
                <div className="grid grid-cols-4 gap-2 text-[10px] font-mono font-bold border-b border-slate-100 pb-4">
                  {[
                    { val: "100", label: "Performance" },
                    { val: "100", label: "Accessibility" },
                    { val: "100", label: "Best Practices" },
                    { val: "100", label: "SEO" },
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-primary-dark font-black text-xs">{stat.val}</div>
                      <div className="text-slate-400 text-[7px] uppercase tracking-tighter leading-none">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Performance diagnostics */}
                <div className="p-4 rounded-2xl bg-slate-100/60 border border-slate-200/50 text-left text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">First Contentful Paint</span>
                    <span className="text-primary-dark font-bold">0.1s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Speed Index</span>
                    <span className="text-primary-dark font-bold">0.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Largest Contentful Paint</span>
                    <span className="text-primary-dark font-bold">0.2s</span>
                  </div>
                </div>

                <a
                  href="https://pagespeed.web.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] font-mono font-bold text-primary hover:text-primary-dark transition-all underline cursor-pointer"
                >
                  Uji Halaman di Google PageSpeed
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
