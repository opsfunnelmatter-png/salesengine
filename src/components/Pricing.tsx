"use client";

import React, { useState } from "react";
import { Check, Sparkles, X, HelpCircle, Zap, Rocket, Shield, Lock, ChevronDown, ChevronUp } from "lucide-react";
import PackageContactModal from "./PackageContactModal";

const TOOLTIPS: Record<string, { title: string; desc: string }> = {
  "Struktur CRO 7-Lapisan": {
    title: "Struktur CRO 7-Lapisan",
    desc: "Susunan halaman web yang disusun khusus mengikut psikologi pembeli (menarik perhatian, membina kepercayaan, menjawab keraguan) untuk memaksimumkan jualan."
  },
  "CRO Copywriting": {
    title: "CRO Copywriting",
    desc: "Seni penulisan ayat jualan interaktif yang memujuk pelawat bertindak membeli. Kami tuliskan semuanya untuk anda."
  },
  "Lighthouse Score": {
    title: "Lighthouse Score",
    desc: "Skor audit rasmi Google untuk mengukur kelajuan web. Skor 100/100 bermaksud kelajuan web anda berada di tahap maksima."
  },
  "Meta Pixel + TikTok Pixel + GA4": {
    title: "Tracking Pixel (Meta, TikTok, GA4)",
    desc: "Kod penjejak iklan. Sangat penting supaya Facebook/TikTok tahu siapa yang masuk web anda untuk tujuan mencari pembeli yang tepat (retargeting)."
  },
  "Payment Gateway Integration": {
    title: "Payment Gateway Integration",
    desc: "Sistem gerbang pembayaran automatik. Customer boleh bayar terus guna online banking (FPX), kad, atau e-wallet, dan duit terus masuk akaun anda."
  },
  "Order Bump": {
    title: "Order Bump",
    desc: "Tawaran tambahan bernilai rendah di checkout page yang boleh ditambah oleh pembeli dengan satu klik sebelum bayar (cth: menambah warranty/aksesori)."
  },
  "OTO Page (One-Time Offer)": {
    title: "OTO Page (One-Time Offer)",
    desc: "Tawaran istimewa sekali seumur hidup yang muncul automatik selepas customer bayar produk utama untuk menaikkan purata nilai jualan (upsell)."
  },
  "Conversion API server-side": {
    title: "Conversion API server-side",
    desc: "Teknologi tracking moden yang menghantar data pembelian terus dari server web ke FB Ads. Data iklan anda tetap tepat walaupun pelanggan menggunakan AdBlock atau iOS terbaru."
  },
  "Microsoft Clarity Heatmap": {
    title: "Microsoft Clarity Heatmap",
    desc: "Sistem rakaman visual yang menunjukkan di mana pelanggan klik, scroll, dan di mana mereka tersangkut di dalam website anda."
  },
  "Google Sheets CRM Sync": {
    title: "Google Sheets CRM Sync",
    desc: "Menghubungkan data borang terus ke Google Sheets anda secara automatik. Tiada lagi leads yang hilang atau tersilap salin."
  }
};

export default function Pricing() {
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPackage, setModalPackage] = useState("");

  const toggleFeature = (name: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleOpenModal = (packageName: string) => {
    setModalPackage(packageName);
    setIsModalOpen(true);
  };

  const handleScrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const COMPARISON_SECTIONS = [
    {
      title: "ASAS & STRUKTUR JUALAN",
      features: [
        {
          name: "Reka Bentuk Laman (Struktur CRO 7-Lapisan)",
          desc: "Sama seperti struktur yang digunakan oleh brand global bernilai RM10M+",
          launch: "✓",
          authority: "✓",
        },
        {
          name: "Penulisan Ayat Jualan (CRO Copywriting)",
          desc: "Teks penuh disediakan mengikut psikologi jualan — anda tak perlu tulis satu ayat pun",
          launch: "✓",
          authority: "✓",
        },
        {
          name: "Jaminan Kelajuan Mutlak (Sub-0.5s Speed)",
          desc: "Website dibuka sepantas kilat dengan skor Lighthouse above 95% dijamin bertulis",
          launch: "✓",
          authority: "✓",
        },
        {
          name: "Pengurusan Leads Pantas",
          desc: "Data pelawat masuk automatik ke WhatsApp tanpa manual key-in",
          launch: "✓",
          authority: "✓",
        },
        {
          name: "Sistem Dokumentasi Automatik",
          desc: "Semua data leads direkodkan terus ke dalam Google Sheets anda",
          launch: "✓ (Leads sahaja)",
          authority: "✓ (Leads & Semua Orders)",
        },
        {
          name: "Sistem Pengurusan Domain",
          desc: "Percuma domain (.com / .my) untuk tahun pertama termasuk setup A ke Z",
          launch: "✓",
          authority: "✓",
        },
      ],
    },
    {
      title: "SISTEM FUNNEL & AUTOMASI",
      features: [
        {
          name: "Borang Checkout & Payment Gateway",
          desc: "Pelanggan boleh bayar terus di website menggunakan Stripe, Billplz, atau ToyyibPay",
          launch: "✗",
          authority: "✓",
        },
        {
          name: "Fungsi Jualan Tambahan (Order Bump)",
          desc: "Tawaran add-on satu klik sebelum bayar — purata naikkan 15-35% nilai jualan",
          launch: "✗",
          authority: "✓",
        },
        {
          name: "Halaman Upsell Automatik (OTO Page)",
          desc: "Tawaran One-Time Offer selepas pembayaran untuk maksimumkan keuntungan",
          launch: "✗",
          authority: "✓",
        },
        {
          name: "Notifikasi Pengesahan Automatik",
          desc: "Halaman Thank You + WhatsApp/Email confirmation dihantar dalam 5 minit",
          launch: "✗",
          authority: "✓",
        },
      ],
    },
    {
      title: "PEMANTAUAN DATA & IKLAN",
      features: [
        {
          name: "Setup Penjejakan Iklan Asas",
          desc: "Integrasi Meta Pixel, TikTok Pixel, dan Google Analytics 4 (GA4) dari hari pertama",
          launch: "✓",
          authority: "✓",
        },
        {
          name: "Tracking Tepat iOS Block (Conversion API)",
          desc: "Penjejakan data iklan 97% tepat di peringkat server walaupun disekat iOS/AdBlock",
          launch: "✗",
          authority: "✓",
        },
        {
          name: "Rakaman Visual Pelawat (Heatmap)",
          desc: "Boleh tengok tepat di mana pelawat skrol, klik, dan berhenti membaca menggunakan Microsoft Clarity",
          launch: "✗",
          authority: "✓",
        },
      ],
    },
    {
      title: "TEMPOH SIAP, SOKONGAN & BONUS",
      features: [
        {
          name: "Jaminan Tempoh Penghantaran SLA",
          desc: "Draf pertama siap dalam masa bekerja. Lewat? Refund 100% tanpa drama",
          launch: "72 Jam (3 Hari)",
          authority: "5 Hari Bekerja",
        },
        {
          name: "Sokongan Teknikal Priority",
          desc: "Bantuan teknikal premium selama 12 bulan terus daripada pembangun sistem",
          launch: "✗",
          authority: "✓",
        },
        {
          name: "30-Day Funnel Review",
          desc: "Audit prestasi funnel anda secara peribadi via WhatsApp selepas sistem go-live",
          launch: "✗",
          authority: "✓",
        },
      ],
    },
  ];

  const bundles = [
    {
      name: "Launch Stack",
      badge: "🚀 MULA DENGAN LENGKAP",
      items: ["Pakej Launch (RM 999)", "Google Ads Setup (RM 1,799)"],
      original: "RM 2,798",
      price: "RM 1,999",
      saving: "Jimat RM 799",
      desc: "Pakej Launch + setup kempen Google Ads lengkap untuk mula dapatkan trafik berkualiti tinggi dari hari pertama.",
      cta: "Hubungi Kami Sekarang →",
    },
    {
      name: "Growth Stack",
      badge: "📈 SKALA DENGAN PANTAS",
      items: [
        "Pakej Authority (RM 1,899)",
        "Google Ads Setup (RM 1,799)",
      ],
      original: "RM 3,698",
      price: "RM 2,899",
      saving: "Jimat RM 799",
      desc: "Sistem funnel lengkap (Checkout, Order Bump, OTO) + setup kempen Google Ads untuk hasil jualan & conversion yang maksimum.",
      cta: "Hubungi Kami Sekarang →",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-10 w-full bg-transparent py-24 md:py-32 text-slate-200 overflow-hidden border-t border-white/5"
    >
      {/* Background radial glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.01)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 shadow-sm">
            💰 PELABURAN DENGAN PULANGAN JELAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
            Pilih Sistem Anda.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)]">
              Bayar Sekali.
            </span>{" "}
            <span className="block mt-2 text-slate-300 font-black">Hasilnya? Selamanya.</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Tiada yuran bulanan tersembunyi. Tiada hosting mahal. Tiada lock-in kontrak. Bayar sekali, website anda milik anda selama-lamanya.
          </p>
          {/* Cost of Inaction */}
          <div className="mt-6 inline-flex items-start gap-2.5 bg-red-500/8 border border-red-500/20 rounded-2xl px-5 py-3.5 text-left max-w-2xl mx-auto">
            <span className="text-red-400 text-base shrink-0 mt-0.5">⚠️</span>
            <p className="text-xs text-red-300/90 leading-relaxed font-medium">
              <strong className="text-red-300">Kos sebenar &quot;tunggu dulu&quot;:</strong> Setiap bulan tanpa website yang convert bermakna leads yang anda bagar dengan iklan pergi ke pesaing. Purata kerugian:{" "}
              <strong className="text-red-200">RM 500–2,000 iklan buang sia-sia setiap bulan.</strong>
            </p>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-white/10 bg-[#121A2E]/80 backdrop-blur-md shadow-2xl shadow-black/40 relative">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[370px] sm:min-w-[750px] table-fixed">
              {/* Table Head */}
              <thead>
                <tr className="border-b border-white/10 bg-[#0B1329]/90">
                  <th className="p-2.5 sm:p-4 text-[9px] sm:text-[10px] font-mono font-black text-slate-400 w-[150px] sm:w-[320px] md:w-[380px] sticky left-0 z-20 bg-[#0B1329] border-r border-white/5">
                    CIRI & SISTEM
                  </th>
                  <th className="p-2 sm:p-4 text-center w-[110px] sm:w-[215px] md:w-[240px]">
                    <div className="text-xs sm:text-sm md:text-base font-black text-white leading-tight">
                      Pakej <span className="block sm:inline">Launch</span>
                    </div>
                    <div className="text-base sm:text-xl md:text-2xl font-black text-amber-400 font-mono mt-0.5 sm:mt-1">RM 999</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-500 font-mono font-bold mt-0.5 sm:mt-1 uppercase tracking-wider">Sekali Bayar</div>
                  </th>
                  <th className="p-2 sm:p-4 text-center w-[110px] sm:w-[215px] md:w-[240px] bg-amber-500/10 border-l border-amber-400/20 relative">
                    <div className="flex justify-center w-full">
                      <span className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-amber-400 via-yellow-250 to-amber-500 text-slate-950 text-[7px] sm:text-[9px] font-mono font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm mb-1.5 select-none text-center">
                        RECOMMENDED ⚡
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-black text-white leading-tight">
                      Pakej <span className="block sm:inline">Authority</span>
                    </div>
                    <div className="text-base sm:text-xl md:text-2xl font-black text-amber-400 font-mono mt-0.5 sm:mt-1">RM 1,899</div>
                    <div className="text-[8px] sm:text-[9px] text-yellow-300/80 font-mono font-bold mt-0.5 sm:mt-1 uppercase tracking-wider">Sekali Bayar</div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {COMPARISON_SECTIONS.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    {/* Section Header Row */}
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                      <td colSpan={3} className="p-2.5 pl-4 sm:p-4 sm:pl-6 text-[10px] sm:text-xs font-mono font-black tracking-widest text-amber-300 uppercase sticky left-0 z-10 bg-[#162035]">
                        {section.title}
                      </td>
                    </tr>

                    {/* Features Rows */}
                    {section.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                        {/* Feature Name & Description (Clickable to Expand) */}
                        <td 
                          className="py-2.5 px-2.5 sm:py-3 sm:px-4 text-left sticky left-0 bg-[#121A2E] group-hover:bg-[#18233c] transition-colors border-r border-white/5 z-10 cursor-pointer select-none"
                          onClick={() => toggleFeature(feat.name)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-black text-white leading-tight">{feat.name}</span>
                            <span className="text-slate-500 group-hover:text-amber-400 transition-colors shrink-0">
                              {expandedFeatures[feat.name] ? (
                                <ChevronUp className="w-3.5 h-3.5" />
                              ) : (
                                <ChevronDown className="w-3.5 h-3.5" />
                              )}
                            </span>
                          </div>
                          {expandedFeatures[feat.name] && (
                            <div className="text-[11px] text-slate-400 leading-normal mt-1.5 font-medium animate-fade-in pr-2">
                              {feat.desc}
                            </div>
                          )}
                        </td>

                        {/* Pakej Launch Value */}
                        <td 
                          className="py-2.5 px-1.5 sm:py-3 sm:px-4 text-center text-xs sm:text-sm font-mono font-bold text-slate-300 cursor-pointer"
                          onClick={() => toggleFeature(feat.name)}
                        >
                          {feat.launch === "✓" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-black text-base sm:text-lg">✓</span>
                          ) : feat.launch === "✗" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-500/10 text-red-500/60 font-black text-sm sm:text-base">✗</span>
                          ) : (
                            <span className="text-slate-250 font-sans font-bold text-[8.5px] sm:text-xs bg-white/5 border border-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg block sm:inline-block leading-tight">{feat.launch}</span>
                          )}
                        </td>

                        {/* Pakej Authority Value (Highlighted Column) */}
                        <td 
                          className="py-2.5 px-1.5 sm:py-3 sm:px-4 text-center text-xs sm:text-sm font-mono font-bold bg-amber-500/5 border-l border-amber-400/10 group-hover:bg-amber-500/8 transition-colors cursor-pointer"
                          onClick={() => toggleFeature(feat.name)}
                        >
                          {feat.authority === "✓" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-black text-base sm:text-lg shadow-sm shadow-emerald-400/5">✓</span>
                          ) : feat.authority === "✗" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-500/10 text-red-500/60 font-black text-sm sm:text-base">✗</span>
                          ) : (
                            <span className="text-amber-300 font-sans font-bold text-[8.5px] sm:text-xs bg-amber-400/10 border border-amber-400/25 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg shadow-xs block sm:inline-block leading-tight">{feat.authority}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}

                {/* Bottom CTA Action Row - Hidden on Mobile, Visible on Desktop */}
                <tr className="hidden sm:table-row border-t border-white/10 bg-[#0B1329]/70">
                  <td className="p-2 sm:p-4 sticky left-0 bg-[#0B1329] border-r border-white/5 z-10">
                    <div className="text-[9px] sm:text-xs font-mono font-black text-slate-450 tracking-wider">MULAKAN PROJEK ANDA</div>
                  </td>
                  <td className="p-2 sm:p-4 text-center">
                    <button
                      onClick={() => handleOpenModal("Pakej Launch (RM999)")}
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white font-black text-[9px] sm:text-xs rounded-xl border border-white/10 transition-all cursor-pointer shadow-sm active:scale-[0.98] select-none"
                    >
                      Hubungi Kami Sekarang →
                    </button>
                  </td>
                  <td className="p-2 sm:p-4 text-center bg-amber-500/10 border-l border-amber-400/20">
                    <button
                      onClick={() => handleOpenModal("Pakej Authority (RM1,899)")}
                      className="w-full py-2.5 bg-gradient-to-r from-amber-400 via-yellow-250 to-amber-500 text-slate-950 font-black text-[9px] sm:text-xs rounded-xl border border-amber-350/20 transition-all cursor-pointer shadow-md shadow-amber-400/15 animate-premium-pulse active:scale-[0.98] select-none"
                    >
                      Hubungi Kami Sekarang →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Single Mobile CTA Button (Visible on Mobile only) */}
          <div className="p-4 sm:hidden flex justify-center bg-[#090f1f]/95 border-t border-white/10 rounded-b-[32px]">
            <button
              onClick={() => handleOpenModal("Pakej Authority (RM1,899)")}
              className="w-full max-w-[280px] py-3 bg-gradient-to-r from-amber-400 via-yellow-250 to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-400/15 active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer border-0"
            >
              Hubungi Kami Sekarang →
            </button>
          </div>
        </div>


        {/* Authority Funnel Diagram */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-7 space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20">
              ✦ PAKEJ AUTHORITY — COMPLETE FUNNEL SISTEM
            </span>
            <p className="text-xs text-slate-400 font-medium">Ini bukan sekadar 1 page. Ini ekosistem jualan yang berjalan 24/7.</p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-2">
            {[
              {
                step: "01",
                icon: "📣",
                title: "Sales Page",
                desc: "Visitor klik iklan → landing page CRO yang convert",
                badge: null,
                color: "amber",
              },
              {
                step: "02",
                icon: "🛒",
                title: "Checkout + Order Bump",
                desc: "One-click add-on sebelum bayar",
                badge: "+15–35% AOV",
                color: "amber",
              },
              {
                step: "03",
                icon: "🔥",
                title: "OTO Page",
                desc: "Upsell automatik — warm buyer, close rate tertinggi",
                badge: "AOV ↑↑",
                color: "amber",
              },
              {
                step: "04",
                icon: "✅",
                title: "Thank You + Auto Follow-Up",
                desc: "Konfirmasi + WhatsApp automation dalam 5 minit",
                badge: "Zero manual",
                color: "emerald",
              },
            ].map((node, i, arr) => (
              <div key={i} className="flex md:flex-col items-center gap-2 flex-1">
                <div className={`flex-1 w-full bg-gradient-to-b ${
                  node.color === "emerald"
                    ? "from-emerald-400/10 to-[#121A2E]/80 border-emerald-400/30"
                    : "from-amber-400/8 to-[#121A2E]/80 border-amber-400/20"
                } border rounded-2xl p-4 flex flex-col gap-2 relative`}>
                  <span className={`text-[9px] font-mono font-black tracking-widest uppercase ${
                    node.color === "emerald" ? "text-emerald-400" : "text-amber-400/70"
                  }`}>Langkah {node.step}</span>
                  <div className="text-xl">{node.icon}</div>
                  <div className="text-xs font-black text-white leading-tight">{node.title}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{node.desc}</div>
                  {node.badge && (
                    <span className={`mt-1 self-start text-[9px] font-black px-2 py-0.5 rounded-full border ${
                      node.color === "emerald"
                        ? "bg-emerald-400/15 text-emerald-300 border-emerald-400/25"
                        : "bg-amber-400/15 text-amber-300 border-amber-400/25"
                    }`}>{node.badge}</span>
                  )}
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block text-amber-400/30 text-lg font-black shrink-0 mt-0 -mr-1">›</div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-slate-500 mt-4 font-mono">
            Competitor anda bagi 1 page. Anda bagi 4-step selling machine.
          </p>
        </div>

        {/* Guarantee Strip - Premium Glassmorphic Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap className="w-5 h-5 text-amber-400" />,
              title: "72 Jam Delivery",
              body: "Pakej Launch: draf siap dalam 3 hari bekerja — atau refund penuh.",
              color: "from-amber-500/10 to-transparent"
            },
            {
              icon: <Rocket className="w-5 h-5 text-blue-400" />,
              title: "5 Hari Funnel Live",
              body: "Pakej Authority: funnel lengkap live dalam 5 hari kerja — atau refund.",
              color: "from-blue-500/10 to-transparent"
            },
            {
              icon: <Shield className="w-5 h-5 text-emerald-400" />,
              title: "Refund Jika Lambat",
              body: "Lambat dari janji? Bayaran balik 100% serta-merta tanpa soalan remeh.",
              color: "from-emerald-500/10 to-transparent"
            },
            {
              icon: <Lock className="w-5 h-5 text-purple-400" />,
              title: "Tanpa Lock-In",
              body: "Kod 100% milik anda. Bawa dan deploy ke mana-mana sahaja. Selamanya.",
              color: "from-purple-500/10 to-transparent"
            },
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.04] flex flex-col items-center text-center space-y-3 relative overflow-hidden group shadow-sm hover:scale-[1.01]"
            >
              {/* Subtle top color glow */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color} opacity-70`} />
              
              {/* Icon Container with subtle glow */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <div className="space-y-1">
                <h4 className="font-black text-white text-xs tracking-wide uppercase">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Offers Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 px-3.5 py-1.5 rounded-full border border-emerald-400/20">
              🎁 BUNDLE & JIMAT LEBIH
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Pakej Bundle — Lebih Lengkap, Lebih Jimat</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              Gabungkan pakej + add-on untuk savings tambahan dan ecosystem yang berfungsi sebagai satu mesin jualan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bundles.map((bundle, bIdx) => (
              <div
                key={bIdx}
                className="bg-[#121A2E]/80 border border-emerald-400/20 rounded-3xl p-7 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 shadow-sm relative overflow-hidden group"
              >
                {/* Top glow bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rounded-t-3xl" />

                <div className="space-y-4">
                  <span className="inline-flex text-[10px] font-mono font-black tracking-widest text-emerald-400 uppercase bg-emerald-400/10 px-3 py-1 rounded border border-emerald-400/20">
                    {bundle.badge}
                  </span>
                  <h4 className="text-xl font-black text-white">{bundle.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{bundle.desc}</p>
                  <ul className="space-y-1.5 pt-1">
                    {bundle.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 line-through block">{bundle.original}</span>
                    <span className="text-2xl font-black text-white font-mono">{bundle.price}</span>
                    <span className="ml-2 text-[10px] font-black text-emerald-400 font-mono">{bundle.saving}</span>
                  </div>
                  <button
                    onClick={() => handleOpenModal(bundle.name === "Launch Stack" ? "Launch Stack (RM1,999)" : "Growth Stack (RM2,899)")}
                    className="shrink-0 py-2.5 px-5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 font-black text-xs rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    {bundle.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-on Services Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 shadow-xs">
              ⚡ PERKASAKAN ENGINE ANDA (ADD-ONS)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Pakej Tambahan & Servis Add-On</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Pilih servis add-on ini untuk disepadukan terus ke dalam sales page atau website anda bagi memaksimumkan ROI iklan dan jualan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Add-on 1 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  💬
                </div>
                <div>
                  <h4 className="text-white font-black text-base">AI Sales Agent di WhatsApp</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Chatbot pintar berasaskan LLM/ChatGPT yang jawab FAQ, qualify leads, hantar tawaran, dan capture data pelanggan secara automatik 24/7 — purata jimat 3–5 jam/hari pengurusan WhatsApp manual.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Setup Fee (Sekali)</span>
                  <span className="font-black text-white font-mono text-sm">RM 499</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-medium">Bulanan (Akaun Sendiri)</span>
                  <span className="font-black text-amber-400 font-mono text-sm">RM 89/bln</span>
                </div>
              </div>
            </div>

            {/* Add-on 2 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  🤖
                </div>
                <div>
                  <h4 className="text-white font-black text-base">AI Chatbot On-Page</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Widget chatbot AI terapung di website yang qualify pelawat ragu-ragu dan push ke WhatsApp secara automatik — gantikan RM 500/bulan live chat agent dengan setup sekali bayar.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Setup Fee (Sekali)</span>
                  <span className="font-black text-white font-mono text-sm">RM 299</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-medium">Bulanan</span>
                  <span className="font-black text-amber-400 font-mono text-sm">RM 59/bln</span>
                </div>
              </div>
            </div>

            {/* Add-on 3 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  📈
                </div>
                <div>
                  <h4 className="text-white font-black text-base">Google Ads Setup & Management</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Setup kempen Search/Performance Max yang berstruktur + pengurusan & optimasi penuh selama 30 hari untuk minimumkan CPC dan maksimumkan ROI iklan anda. <span className="text-amber-400/80 font-bold">Tidak termasuk ad spend.</span>
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Harga Biasa (NP)</span>
                  <span className="font-bold text-slate-400 line-through font-mono">RM 1,799</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-emerald-400 font-black">Dengan Mana-mana Pakej</span>
                  <div className="text-right">
                    <span className="font-black text-amber-400 font-mono text-sm block">RM 1,000</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold block leading-none">Jimat RM 799!</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: 50-50 cards for SEO and Custom Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

            {/* Add-on 4 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  🔍
                </div>
                <div>
                  <h4 className="text-white font-black text-base">Complete SEO + Programmatic SEO</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Fasa 1: Bina 500+ halaman programmatic dalam 60 hari yang menguasai ratusan kata kunci Google & kedudukan carian AI/LLM — duduk di Google selama-lamanya tanpa bayar iklan bulanan.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Setup Biasa / Bulanan</span>
                  <div className="text-right leading-tight">
                    <span className="font-bold text-slate-400 line-through font-mono text-xs block">Setup: RM 2,999</span>
                    <span className="font-bold text-white font-mono text-xs block">RM 299/bln</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-emerald-400 font-black">Dengan Mana-mana Pakej</span>
                  <div className="text-right">
                    <span className="font-black text-amber-400 font-mono text-sm block">RM 2,000 Setup</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold block leading-none">Jimat RM 999! + RM 299/bln</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-on 5 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  🛠️
                </div>
                <div>
                  <h4 className="text-white font-black text-base">Custom Service & Development</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Sistem tempahan khas, fungsi e-learning, portal ejen, integrasi API pihak ketiga (EasyParcel, payment gateway custom) atau sebarang pembangunan web app Next.js yang spesifik kepada perniagaan anda.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5 block font-bold">Skop Projek Khas</span>
                  <span className="text-lg font-black text-amber-400 font-mono">Contact Us</span>
                </div>
                <button
                  onClick={() => handleOpenModal("Custom Service / Add-On")}
                  className="py-2.5 px-5 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Hubungi Kami Sekarang →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <PackageContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage={modalPackage}
      />
    </section>
  );
}
