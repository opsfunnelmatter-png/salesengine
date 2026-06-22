"use client";

import React, { useState, useEffect } from "react";
import { Zap, Clock, Smartphone, Calculator, ClipboardList, Check, RotateCcw, AlertTriangle, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

export default function WidgetShowcase() {
  const [activeTab, setActiveTab] = useState<"timer" | "button" | "calculator" | "form">("calculator");

  return (
    <section id="widget" className="relative z-10 w-full bg-white py-20 text-slate-800 overflow-hidden border-t border-slate-200/60 bg-dot-grid">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 shadow-sm">
            <Zap className="w-3.5 h-3.5" /> DEMO INTERAKTIF
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-slate-900 leading-tight">
            Cuba Sendiri Widget{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Conversion CRO
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Ini adalah komponen interaktif Next.js yang kami pasang pada sales page anda. Semua komponen dibina secara native, ultra-ringan, dan dioptimumkan sepenuhnya untuk conversion di telefon pintar.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "calculator", label: "Kalkulator Kebocoran Ads", icon: Calculator },
            { id: "timer", label: "Smart Urgency Timer", icon: Clock },
            { id: "button", label: "Sticky Mobile Button", icon: Smartphone },
            { id: "form", label: "Diagnostic Triage Form", icon: ClipboardList },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border cursor-pointer select-none ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-[1.02]"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-350"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-slate-50/50 border border-slate-200/80 p-6 md:p-10 lg:p-12 rounded-[32px] min-h-[480px] flex items-center justify-center relative overflow-hidden shadow-xl shadow-slate-100/40 backdrop-blur-md">
          {activeTab === "timer" && <TimerWidget />}
          {activeTab === "button" && <StickyButtonWidget />}
          {activeTab === "calculator" && <CalculatorWidget />}
          {activeTab === "form" && <MultistepFormWidget />}
        </div>

      </div>
    </section>
  );
}

/* ==========================================================================
   WIDGET 1: SMART URGENCY TIMER
   ========================================================================== */
function TimerWidget() {
  const DEFAULT_TIME = 600; // 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("timer_end_time");
    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
    } else {
      endTime = Date.now() + DEFAULT_TIME * 1000;
      localStorage.setItem("timer_end_time", endTime.toString());
      setTimeLeft(DEFAULT_TIME);
    }

    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    const newEndTime = Date.now() + DEFAULT_TIME * 1000;
    localStorage.setItem("timer_end_time", newEndTime.toString());
    setTimeLeft(DEFAULT_TIME);
  };

  return (
    <div className="text-center space-y-8 max-w-md w-full animate-float-medium">
      <div className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
        Smart Urgency Countdown
      </div>

      {/* Visual Timer Grid */}
      <div className="flex justify-center gap-4">
        <div className="bg-white border border-slate-200/80 w-24 py-5 rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-primary-dark" />
          <div className="text-4xl md:text-5xl font-black text-slate-800 font-mono tracking-tight">
            {Math.floor(timeLeft / 60).toString().padStart(2, "0")}
          </div>
          <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">Minit</div>
        </div>
        
        <div className="text-4xl md:text-5xl font-black text-primary self-center animate-pulse">:</div>
        
        <div className="bg-white border border-slate-200/80 w-24 py-5 rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-primary-dark" />
          <div className="text-4xl md:text-5xl font-black text-slate-800 font-mono tracking-tight">
            {(timeLeft % 60).toString().padStart(2, "0")}
          </div>
          <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">Saat</div>
        </div>
      </div>

      <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-xs mx-auto">
        Cuba refresh halaman web ini. Pemasa ini <strong className="text-slate-800">TIDAK AKAN SET SEMULA</strong> ke 10:00 kerana ia diikat pada pelayar anda (localStorage). Pelawat anda tidak boleh menipu pemasa ini!
      </p>

      <button
        onClick={handleReset}
        className="inline-flex items-center gap-1.5 px-4.5 py-2.5 border border-slate-200 bg-white text-xs font-mono font-bold rounded-xl hover:bg-slate-50 text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm hover:border-slate-350"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Reset Pemasa (Simulasi Baru)
      </button>
    </div>
  );
}

/* ==========================================================================
   WIDGET 2: STICKY MOBILE CTA BUTTON
   ========================================================================== */
function StickyButtonWidget() {
  const [pulseStyle, setPulseStyle] = useState<"soft" | "whatsapp" | "glow">("glow");

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl w-full">
      
      {/* Control Panel */}
      <div className="space-y-6 text-left">
        <h4 className="text-2xl font-black text-slate-900 tracking-tight">Sticky Mobile CTA Button</h4>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          Butang terapung di bahagian bawah peranti mudah alih sangat kritikal bagi memudahkan pelawat bertindak. Klik jenis animasi untuk melihat pratonton mockup:
        </p>

        <div className="flex flex-col gap-3">
          {[
            { id: "soft", label: "Denyutan Lembut (Soft Bounce)", desc: "Animasi lonjakan mikro berkala untuk menarik perhatian." },
            { id: "whatsapp", label: "Butang Hubungi WhatsApp (Emerald Glow)", desc: "Warna rasmi WhatsApp dengan denyutan glow berterusan." },
            { id: "glow", label: "Kesan Kilauan Neon (Glow Shimmer)", desc: "Garis berkilau menyapu butang secara automatik." },
          ].map((style) => (
            <button
              key={style.id}
              onClick={() => setPulseStyle(style.id as any)}
              className={`p-4 rounded-2xl text-left border cursor-pointer select-none transition-all duration-300 ${
                pulseStyle === style.id
                  ? "bg-primary/5 text-slate-950 border-primary ring-2 ring-primary/20 shadow-md shadow-primary/5"
                  : "bg-white border-slate-200/80 hover:bg-slate-50 text-slate-600 hover:border-slate-300"
              }`}
            >
              <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${pulseStyle === style.id ? "bg-primary" : "bg-slate-300"}`} />
                {style.label}
              </div>
              <div className="text-[10px] opacity-70 mt-1 pl-4 leading-normal">{style.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Screen Mockup */}
      <div className="flex justify-center">
        <div className="relative w-64 h-96 border-4 border-slate-800 bg-white rounded-[38px] p-4 overflow-hidden shadow-2xl flex flex-col justify-between">
          
          {/* Speaker notch */}
          <div className="w-20 h-4 bg-slate-900 border-b border-l border-r border-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="w-8 h-1 bg-slate-700 rounded-full" />
          </div>

          <div className="text-center text-[8px] font-mono text-slate-400 mt-2 select-none">MOCKUP SMARTPHONE</div>

          {/* Mock scroll content */}
          <div className="flex-1 mt-4 space-y-3.5 overflow-hidden opacity-30 select-none">
            <div className="w-3/4 h-2 bg-slate-300 rounded-full" />
            <div className="w-full h-2 bg-slate-300 rounded-full" />
            <div className="w-5/6 h-2 bg-slate-300 rounded-full" />
            <div className="w-full h-20 bg-slate-50 border border-slate-200 rounded-2xl" />
            <div className="w-2/3 h-2 bg-slate-300 rounded-full" />
          </div>

          {/* Dynamic Sticky Mobile Button Container */}
          <div className="border-t border-slate-100 pt-3 bg-white relative z-10">
            {pulseStyle === "soft" && (
              <button className="w-full py-3 bg-primary text-white font-black text-xs rounded-xl shadow-lg shadow-primary/20 animate-bounce cursor-default tracking-wider uppercase">
                Hubungi Kami Sekarang
              </button>
            )}
            {pulseStyle === "whatsapp" && (
              <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-1.5 animate-pulse cursor-default tracking-wider uppercase">
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.028 14.11 1.002 11.49 1c-5.445 0-9.87 4.373-9.874 9.8.001 1.737.472 3.435 1.364 4.968l-1.01 3.682 3.774-.98z" />
                </svg>
                WhatsApp Rundingan
              </button>
            )}
            {pulseStyle === "glow" && (
              <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-black text-xs rounded-xl shadow-lg shadow-primary/25 relative overflow-hidden group cursor-default tracking-wider uppercase">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
                Bincang Projek Anda
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

/* ==========================================================================
   WIDGET 3: ROI & OPPORTUNITY COST CALCULATOR
   ========================================================================== */
function CalculatorWidget() {
  const [adSpend, setAdSpend] = useState(3000);
  const [websiteStatus, setWebsiteStatus] = useState<"none" | "slow" | "good">("slow");

  const dropOffRate = websiteStatus === "none" ? 0.35 : websiteStatus === "slow" ? 0.22 : 0;
  const wastedBudget = Math.round(adSpend * dropOffRate);
  const savedBudget = wastedBudget;

  return (
    <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl w-full">
      
      {/* Input panel (7 Cols) */}
      <div className="lg:col-span-7 space-y-8 text-left">
        <div className="space-y-2">
          <h4 className="text-2xl font-black text-slate-900 tracking-tight">Kalkulator Kebocoran Iklan</h4>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Ketahui anggaran kasar bajet iklan Google/Meta Ads anda yang terbazir berpunca daripada kadar bounce laman web semasa yang lambat.
          </p>
        </div>
        
        {/* Slider 1: Ad Spend */}
        <div className="space-y-3 p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
          <div className="flex justify-between items-center text-xs sm:text-sm font-bold">
            <span className="text-slate-500 font-mono">BAJET ADS BULANAN</span>
            <span className="text-primary-dark font-mono text-base bg-primary/5 border border-primary/20 px-3 py-1 rounded-lg">
              RM {adSpend.toLocaleString()}
            </span>
          </div>
          
          <div className="pt-2">
            <input
              type="range"
              min="500"
              max="15000"
              step="500"
              value={adSpend}
              onChange={(e) => setAdSpend(parseInt(e.target.value, 10))}
              className="premium-range-slider"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5 font-bold">
              <span>RM 500</span>
              <span>RM 5,000</span>
              <span>RM 10,000</span>
              <span>RM 15,000</span>
            </div>
          </div>
        </div>

        {/* Option 2: Website Status */}
        <div className="space-y-3.5">
          <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Status Laman Web Semasa</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "none", label: "Tiada Laman Web", desc: "Klik terus WhatsApp" },
              { id: "slow", label: "WordPress/Shopify", desc: "Loading 4s+ lambat" },
              { id: "good", label: "Next.js Engine", desc: "Ultra-laju sub-0.5s" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setWebsiteStatus(opt.id as any)}
                className={`p-3.5 rounded-2xl border text-center cursor-pointer select-none transition-all duration-300 flex flex-col justify-center items-center gap-1.5 ${
                  websiteStatus === opt.id
                    ? "border-primary bg-primary/5 text-primary-dark font-bold ring-2 ring-primary/20 shadow-md shadow-primary/5 scale-[1.02]"
                    : "border-slate-200/80 bg-white text-slate-600 hover:border-slate-350 hover:bg-slate-50"
                }`}
              >
                <div className="text-xs font-black">{opt.label}</div>
                <div className="text-[9px] opacity-70 leading-none font-medium text-slate-400">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>
        
        <p className="text-[9px] text-slate-400 leading-normal font-mono uppercase tracking-wider font-bold">
          *Berasaskan purata bounce rate mudah alih pasaran Malaysia bagi laman web &gt; 3 saat.
        </p>
      </div>

      {/* Output Dashboard (5 Cols) */}
      <div className="lg:col-span-5 space-y-6 w-full">
        
        {/* Wasted Alert Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-lg text-center space-y-3 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-red-500" />
          
          <div className="flex items-center justify-center gap-1.5 text-red-600 text-[10px] font-mono font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" /> Bajet Terbazir (Estimasi)
          </div>
          
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-red-600 font-mono tracking-tight">
              {wastedBudget === 0 ? "RM 0" : `RM ${wastedBudget.toLocaleString()}`}
            </div>
            <p className="text-[10px] font-mono font-bold text-red-500 uppercase">
              Kerugian Kos Iklan: {Math.round(dropOffRate * 100)}% Drop-off
            </p>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-red-500 h-full transition-all duration-500" 
              style={{ width: `${dropOffRate * 100}%` }}
            />
          </div>

          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            {websiteStatus === "none"
              ? "Trafik lari kerana tiada funnel tersusun, tiada maklumat jualan lengkap, dan lambat balas chat."
              : websiteStatus === "slow"
              ? "Pelawat keluar (bounce) kerana website mengambil masa &gt; 4 saat untuk loading di telefon pintar."
              : "Hebat! Laman web anda dioptimumkan sepenuhnya untuk mengekalkan pelawat."}
          </p>
        </div>

        {/* Saved Alert Card */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-lg text-center space-y-3 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500" />
          
          <div className="flex items-center justify-center gap-1.5 text-emerald-600 text-[10px] font-mono font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" /> Penjimatan Dengan Next.js
          </div>
          
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono tracking-tight">
              {savedBudget === 0 ? "RM 0" : `RM ${savedBudget.toLocaleString()} / bln`}
            </div>
            <p className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
              Trafik Terselamat
            </p>
          </div>

          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            {savedBudget > 0 
              ? "Dengan menukar ke Next.js Speed Engine, bajet yang bocor di atas diselamatkan untuk dijadikan jualan."
              : "Laman web anda berada pada prestasi optimum maksima."}
          </p>
        </div>

      </div>

    </div>
  );
}

/* ==========================================================================
   WIDGET 4: MULTISTEP SMART FORM (TRIAGE SYSTEM)
   ========================================================================== */
function MultistepFormWidget() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState("");
  const [platform, setPlatform] = useState("");
  const [pain, setPain] = useState("");

  const handleNext = () => setStep((prev) => prev + 1);
  const handleReset = () => {
    setStep(1);
    setBudget("");
    setPlatform("");
    setPain("");
  };

  return (
    <div className="max-w-md w-full p-6 sm:p-8 border border-slate-200/80 bg-white rounded-[28px] space-y-6 relative overflow-hidden text-left shadow-xl shadow-slate-100/40">
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-primary-dark" />

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
          <span>LANGKAH DIAGNOSTIK</span>
          <span className="text-primary">{step} / 4</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h5 className="text-base font-black text-slate-900 leading-snug">Langkah 1: Berapakah bajet iklan bulanan anda?</h5>
          <div className="grid gap-3">
            {["Tiada / Baru Nak Mula", "Bawah RM1,000", "RM1,000 - RM5,000", "Lebih RM5,000"].map((opt, i) => (
              <button
                key={opt}
                onClick={() => {
                  setBudget(opt);
                  handleNext();
                }}
                className="w-full py-4 px-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary/50 text-xs font-mono font-bold text-left text-slate-700 hover:text-slate-900 transition-all duration-200 cursor-pointer flex items-center justify-between group hover:shadow-md hover:shadow-slate-100/50 hover:scale-[1.01]"
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-600 font-mono text-[10px] font-black flex items-center justify-center group-hover:bg-primary/15 group-hover:text-primary transition-all">
                    {i + 1}
                  </span>
                  {opt}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h5 className="text-base font-black text-slate-900 leading-snug">Langkah 2: Apakah platform website anda sekarang?</h5>
          <div className="grid gap-3">
            {["WordPress / WooCommerce", "Shopify / Wix", "WhatsApp / Guna TikTok Shop terus", "Tiada Laman Web Lagi"].map((opt, i) => (
              <button
                key={opt}
                onClick={() => {
                  setPlatform(opt);
                  handleNext();
                }}
                className="w-full py-4 px-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary/50 text-xs font-mono font-bold text-left text-slate-700 hover:text-slate-900 transition-all duration-200 cursor-pointer flex items-center justify-between group hover:shadow-md hover:shadow-slate-100/50 hover:scale-[1.01]"
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-600 font-mono text-[10px] font-black flex items-center justify-center group-hover:bg-primary/15 group-hover:text-primary transition-all">
                    {i + 1}
                  </span>
                  {opt}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h5 className="text-base font-black text-slate-900 leading-snug">Langkah 3: Apakah pengalaman teruk anda sebelum ini?</h5>
          <div className="grid gap-3">
            {["Kena ghosting / kerja lembab", "Website berat & susah edit teks", "Tiada / Saya baru nak cuba bina pertama kali"].map((opt, i) => (
              <button
                key={opt}
                onClick={() => {
                  setPain(opt);
                  handleNext();
                }}
                className="w-full py-4 px-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-primary/50 text-xs font-mono font-bold text-left text-slate-700 hover:text-slate-900 transition-all duration-200 cursor-pointer flex items-center justify-between group hover:shadow-md hover:shadow-slate-100/50 hover:scale-[1.01]"
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-600 font-mono text-[10px] font-black flex items-center justify-center group-hover:bg-primary/15 group-hover:text-primary transition-all">
                    {i + 1}
                  </span>
                  {opt}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
            <Check className="w-7 h-7" />
          </div>
          
          <div className="space-y-1">
            <h5 className="text-lg font-black text-slate-900 leading-tight">Saringan Selesai!</h5>
            <p className="text-xs text-slate-500 font-medium">Borang diagnos anda telah dianalisis:</p>
          </div>

          <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-mono text-left space-y-2 text-slate-600 shadow-inner">
            <p>💰 <strong className="text-slate-800">Bajet Ads:</strong> {budget}</p>
            <p>💻 <strong className="text-slate-800">Platform Semasa:</strong> {platform}</p>
            <p>⚠️ <strong className="text-slate-800">Isu Utama:</strong> {pain}</p>
            <hr className="border-slate-200 my-2" />
            <p className="text-primary-dark font-bold text-center leading-relaxed text-[11px] uppercase tracking-wide">
              Sistem mencadangkan struktur Next.js tersuai bagi memulihkan kebocoran bajet. Tebus tawaran diskaun anda dengan WhatsApp sekarang.
            </p>
          </div>

          <a
            href="https://wa.me/60125065516?text=Salam%20Boss%20Amin%2C%20saya%20sudah%20selesai%20buat%20saringan%20diagnos%20dan%20ingin%20tebus%20promo%20bina%20website%20Next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-black text-xs sm:text-sm rounded-2xl shadow-md text-center justify-center items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 transition-all shadow-primary/20"
          >
            Hubungi WhatsApp untuk Rundingan
          </a>
          
          <button
            onClick={handleReset}
            className="text-[10px] font-mono font-bold text-slate-400 hover:text-slate-600 underline block mx-auto cursor-pointer"
          >
            Mula Semula (Reset Form)
          </button>
        </div>
      )}
    </div>
  );
}
