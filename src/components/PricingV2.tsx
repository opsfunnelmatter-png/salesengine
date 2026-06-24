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

export default function PricingV2() {
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

  const COMPARISON_SECTIONS = [
    {
      title: "ASAS & STRUKTUR JUALAN",
      features: [
        {
          name: "Reka Bentuk Laman (Struktur CRO 7-Lapisan)",
          desc: "Sama seperti struktur yang digunakan oleh brand global bernilai RM10M+",
          launch: "✓",
          authority: "✓",
          corporate: "✓ (Penuh)",
        },
        {
          name: "Penulisan Ayat Jualan (CRO Copywriting)",
          desc: "Teks penuh disediakan mengikut psikologi jualan — anda tak perlu tulis satu ayat pun",
          launch: "✓",
          authority: "✓",
          corporate: "✓ (Penuh)",
        },
        {
          name: "Jaminan Kelajuan Mutlak (Sub-0.5s Speed)",
          desc: "Website dibuka sepantas kilat dengan skor Lighthouse above 95% dijamin bertulis",
          launch: "✓",
          authority: "✓",
          corporate: "✓ (Next.js)",
        },
        {
          name: "Pengurusan Leads Pantas",
          desc: "Data pelawat masuk automatik ke WhatsApp tanpa manual key-in",
          launch: "✓",
          authority: "✓",
          corporate: "✓ (Borang Premium)",
        },
        {
          name: "Sistem Dokumentasi Automatik",
          desc: "Semua data leads direkodkan terus ke dalam Google Sheets anda",
          launch: "✓ (Leads sahaja)",
          authority: "✓ (Leads & Orders)",
          corporate: "✓ (Integrasi CRM)",
        },
        {
          name: "Sistem Pengurusan Domain",
          desc: "Percuma domain (.com / .my) untuk tahun pertama termasuk setup A ke Z",
          launch: "✓",
          authority: "✓",
          corporate: "✓",
        },
        {
          name: "Laman Web Penuh (Multi-page)",
          desc: "Halaman khusus seperti Home, About Us, Services, Contact, dll. (Pakej korporat asas meliputi maksimum 7 halaman)",
          launch: "1 Halaman (Landing Page)",
          authority: "1 Halaman + Funnel Pages",
          corporate: "✓ (Maks 7 Halaman)",
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
          corporate: "✓ (Boleh ditambah)",
        },
        {
          name: "Fungsi Jualan Tambahan (Order Bump)",
          desc: "Tawaran add-on satu klik sebelum bayar — purata naikkan 15-35% nilai jualan",
          launch: "✗",
          authority: "✓",
          corporate: "✗",
        },
        {
          name: "Halaman Upsell Automatik (OTO Page)",
          desc: "Tawaran One-Time Offer selepas pembayaran untuk maksimumkan keuntungan",
          launch: "✗",
          authority: "✓",
          corporate: "✗",
        },
        {
          name: "Notifikasi Pengesahan Automatik",
          desc: "Halaman Thank You + WhatsApp/Email confirmation dihantar dalam 5 minit",
          launch: "✗",
          authority: "✓",
          corporate: "✓ (Hubungi Asas)",
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
          corporate: "✓",
        },
        {
          name: "Tracking Tepat iOS Block (Conversion API)",
          desc: "Penjejakan data iklan 97% tepat di peringkat server walaupun disekat iOS/AdBlock",
          launch: "✗",
          authority: "✓",
          corporate: "✗ (Pilihan Add-on)",
        },
        {
          name: "Rakaman Visual Pelawat (Heatmap)",
          desc: "Boleh tengok tepat di mana pelawat skrol, klik, dan berhenti membaca menggunakan Microsoft Clarity",
          launch: "✗",
          authority: "✓",
          corporate: "✓",
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
          corporate: "7 Hari Bekerja",
        },
        {
          name: "Sokongan Teknikal Priority",
          desc: "Bantuan teknikal premium selama 12 bulan terus daripada pembangun sistem",
          launch: "✗",
          authority: "✓",
          corporate: "✓",
        },
        {
          name: "30-Day Performance Review",
          desc: "Audit prestasi web/funnel anda secara peribadi via WhatsApp selepas sistem go-live",
          launch: "✗",
          authority: "✓",
          corporate: "✓ (Web Review)",
        },
      ],
    },
  ];

  const bundles = [
    {
      name: "The Sniper Stack",
      badge: "🚀 SESUAI UNTUK PELANCARAN PANTAS & LEADS",
      items: ["Pakej Launch (RM 999)", "Google Ads Setup (RM 1,799)"],
      original: "RM 2,798",
      price: "RM 1,999",
      saving: "Jimat RM 799",
      desc: "Tapak Landing Page + Enjin Trafik (Bina & Urus Iklan). Retainer Google Ads RM 350/bln bermula pada bulan kedua.",
      cta: "Pilih Sniper Stack →",
    },
    {
      name: "The Growth Stack",
      badge: "📈 SESUAI UNTUK MEROKETKAN JUALAN E-COMMERCE",
      items: [
        "Pakej Authority (RM 1,899)",
        "Google Ads Setup (RM 1,799)",
      ],
      original: "RM 3,698",
      price: "RM 2,899",
      saving: "Jimat RM 799",
      desc: "Sistem Funnel Lengkap + OTO + Enjin Trafik. Retainer Google Ads RM 350/bln bermula pada bulan kedua.",
      cta: "Pilih Growth Stack →",
    },
    {
      name: "The Enterprise Stack",
      badge: "🏢 SISTEM AUTONOMI KORPORAT PENUH",
      items: [
        "Pakej Corporate (RM 2,500)",
        "AI Sales Agent Setup (RM 799)",
        "Google Ads Setup (RM 1,799)",
      ],
      original: "RM 5,098",
      price: "RM 3,899",
      saving: "Jimat RM 1,199",
      desc: "Website Penuh + AI Salesman 24/7 + Enjin Trafik. Retainer AI & Google Ads RM 449/bln bermula pada bulan kedua.",
      cta: "Pilih Enterprise Stack →",
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
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#FF9900] bg-[#FF9900]/10 px-3 py-1.5 rounded-md border border-[#FF9900]/20 shadow-sm">
            💰 PILIH PAKEJ ENJIN JUALAN ANDA — BAYAR SEKALI, BEROPERASI SEUMUR HIDUP.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
            Sistem Asas Bayar Sekali.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)]">
              Skala Sistem Anda
            </span>{" "}
            <span className="block mt-2 text-slate-350 font-black">Bila-Bila Masa.</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Kebanyakan website hanyalah showroom digital—cantik tapi tidak pandai menjual. Sistem AROS bertindak sebagai pekerja jualan anda yang beroperasi 24/7. Tiada yuran bulanan tersembunyi untuk struktur asas. Bebas kontrak ("No Lock-In").
          </p>
          {/* Cost of Inaction */}
          <div className="mt-6 inline-flex items-start gap-2.5 bg-red-500/8 border border-red-500/20 rounded-2xl px-5 py-3.5 text-left max-w-2xl mx-auto">
            <span className="text-red-400 text-base shrink-0 mt-0.5">⚠️</span>
            <p className="text-xs text-red-300/90 leading-relaxed font-medium">
              <strong className="text-red-300">Kos sebenar &quot;tunggu dulu&quot;:</strong> Setiap hari showroom sunyi anda masih online, trafik iklan yang anda bayar sedang memberi makan kepada pesaing. Purata:{" "}
              <strong className="text-red-200">RM 500–2,000 bajet iklan hangus setiap bulan.</strong>
            </p>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-white/10 bg-[#121A2E]/80 backdrop-blur-md shadow-2xl shadow-black/40 relative">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[700px] sm:min-w-[850px] table-fixed">
              {/* Table Head */}
              <thead>
                <tr className="border-b border-white/10 bg-[#0B1329]/90">
                  <th className="p-2.5 sm:p-4 text-[9px] sm:text-[10px] font-mono font-black text-slate-400 w-[150px] sm:w-[250px] md:w-[280px] sticky left-0 z-20 bg-[#0B1329] border-r border-white/5">
                    CIRI & SISTEM
                  </th>
                  <th className="p-2 sm:p-4 text-center w-[100px] sm:w-[180px] md:w-[200px]">
                    <div className="text-xs sm:text-sm md:text-base font-black text-white leading-tight">
                      Pakej <span className="block sm:inline">Launch</span>
                    </div>
                    <div className="text-base sm:text-xl md:text-2xl font-black text-amber-400 font-mono mt-0.5 sm:mt-1">RM 999</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-500 font-mono font-bold mt-0.5 sm:mt-1 uppercase tracking-wider">Sekali Bayar</div>
                  </th>
                  <th className="p-2 sm:p-4 text-center w-[100px] sm:w-[180px] md:w-[200px] bg-amber-500/10 border-l border-amber-400/20 relative">
                    <div className="flex justify-center w-full">
                      <span className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-amber-400 via-yellow-250 to-amber-500 text-slate-950 text-[7px] sm:text-[9px] font-mono font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm mb-1.5 select-none text-center">
                        POPULAR ⚡
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-black text-white leading-tight">
                      Pakej <span className="block sm:inline">Authority</span>
                    </div>
                    <div className="text-base sm:text-xl md:text-2xl font-black text-amber-400 font-mono mt-0.5 sm:mt-1">RM 1,899</div>
                    <div className="text-[8px] sm:text-[9px] text-yellow-300/80 font-mono font-bold mt-0.5 sm:mt-1 uppercase tracking-wider">Sekali Bayar</div>
                  </th>
                  <th className="p-2 sm:p-4 text-center w-[100px] sm:w-[180px] md:w-[200px]">
                    <div className="text-xs sm:text-sm md:text-base font-black text-white leading-tight">
                      Pakej <span className="block sm:inline">Corporate</span>
                    </div>
                    <div className="text-base sm:text-xl md:text-2xl font-black text-amber-400 font-mono mt-0.5 sm:mt-1">RM 2,500*</div>
                    <div className="text-[8px] sm:text-[9px] text-slate-500 font-mono font-bold mt-0.5 sm:mt-1 uppercase tracking-wider">Bermula Dari</div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {COMPARISON_SECTIONS.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    {/* Section Header Row */}
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                      <td colSpan={4} className="p-2.5 pl-4 sm:p-4 sm:pl-6 text-[10px] sm:text-xs font-mono font-black tracking-widest text-amber-300 uppercase sticky left-0 z-10 bg-[#162035]">
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
                          className="py-2.5 px-1.5 sm:py-3 sm:px-4 text-center text-xs sm:text-sm font-mono font-bold text-slate-350 cursor-pointer"
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

                        {/* Pakej Corporate Value */}
                        <td 
                          className="py-2.5 px-1.5 sm:py-3 sm:px-4 text-center text-xs sm:text-sm font-mono font-bold text-slate-350 cursor-pointer"
                          onClick={() => toggleFeature(feat.name)}
                        >
                          {feat.corporate === "✓" || feat.corporate === "✓ (Penuh)" || feat.corporate === "✓ (Next.js)" || feat.corporate === "✓ (Borang Premium)" || feat.corporate === "✓ (Maks 7 Halaman)" || feat.corporate === "✓ (Integrasi CRM)" || feat.corporate === "✓ (Web Review)" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-black text-base sm:text-lg">✓</span>
                          ) : feat.corporate === "✗" ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-500/10 text-red-500/60 font-black text-sm sm:text-base">✗</span>
                          ) : (
                            <span className="text-slate-250 font-sans font-bold text-[8.5px] sm:text-xs bg-white/5 border border-white/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg block sm:inline-block leading-tight">{feat.corporate}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}

                {/* Bottom CTA Action Row */}
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
                      className="w-full py-2.5 bg-gradient-to-r from-amber-400 via-yellow-250 to-amber-500 text-slate-950 font-black text-[9px] sm:text-xs rounded-xl border border-amber-350/20 transition-all cursor-pointer shadow-md shadow-amber-400/15 active:scale-[0.98] select-none"
                    >
                      Hubungi Kami Sekarang →
                    </button>
                  </td>
                  <td className="p-2 sm:p-4 text-center">
                    <button
                      onClick={() => handleOpenModal("Pakej Corporate (Bermula RM2,500)")}
                      className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white font-black text-[9px] sm:text-xs rounded-xl border border-white/10 transition-all cursor-pointer shadow-sm active:scale-[0.98] select-none"
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

        <p className="text-center text-[10px] sm:text-[11px] text-slate-500 mt-4 max-w-4xl mx-auto font-medium">
          *Pakej Corporate RM2,500 merangkumi reka bentuk laman web penuh sehingga maksimum 7 halaman asas. Pakej asas ini TIDAK termasuk e-commerce checkout, automasi bertingkat, setup CRM premium, atau custom dashboard. Integrasi khusus ini boleh ditambah sebagai add-on atau melalui rundingan sebut harga mengikut kerumitan projek.
        </p>

        {/* Authority Funnel Diagram */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-7 space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20">
              ✦ PAKEJ AUTHORITY — COMPLETE FUNNEL SISTEM (RM 1,899)
            </span>
            <p className="text-xs text-slate-400 font-medium">Ini bukan sekadar 1 page. Ini ekosistem jualan e-commerce yang berjalan 24/7 untuk gandakan Nilai Pesanan Purata (AOV).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {[
              {
                step: "01",
                icon: "📣",
                title: "Sales Page",
                desc: "Visitor klik iklan → landing page CRO dengan copywriting berfokuskan konversi.",
                badge: null,
                color: "amber",
              },
              {
                step: "02",
                icon: "🛒",
                title: "Checkout + Order Bump",
                desc: "Sistem pembayaran terus. Prospek boleh tambah produk add-on dalam satu klik sebelum bayar.",
                badge: "+15–35% AOV",
                color: "amber",
              },
              {
                step: "03",
                icon: "🔥",
                title: "OTO Page (One Time Offer)",
                desc: "Tawaran upsell eksklusif automatik sejurus selepas bayar. Prospek dah warm, close rate tertinggi!",
                badge: "Close Rate Max",
                color: "amber",
              },
              {
                step: "04",
                icon: "✅",
                title: "Thank You + Auto Follow-Up",
                desc: "Pengesahan automatik dan integrasi mesej ke WhatsApp dalam 5 minit. Zero kerja manual.",
                badge: "Zero Manual",
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
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] text-slate-500 mt-4 font-mono">
            Pesaing anda bina 1 page biasa. Anda bina mesin jualan 4 langkah berturut-turut.
          </p>
        </div>

        {/* Add-on Services Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 shadow-xs">
              ⚡ PERKASAKAN ENJIN ANDA (ADD-ONS EKOSISTEM)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Tambahan Servis Automasi & Trafik</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Tapak sudah laju, sekarang kita automatikkan operasi. Tambah servis ini untuk ubah website anda menjadi ekosistem jualan mandiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Add-on 1 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  💬
                </div>
                <div>
                  <h4 className="text-white font-black text-base">24/7 Salesman (AI Agent)</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Staf jualan maya on-page & WhatsApp. Menyaring pelawat ragu-ragu di website, tarik mereka ke WhatsApp, jawab FAQ, kumpul data pelanggan atau close jualan pada jam 3 pagi semasa anda tidur. Jimat 3–5 jam pengurusan manual setiap hari.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Setup Fee (Sekali)</span>
                  <span className="font-black text-white font-mono text-sm">RM 799</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-medium">Pengurusan AI</span>
                  <span className="font-black text-amber-400 font-mono text-sm">RM 99/bln</span>
                </div>
              </div>
            </div>

            {/* Add-on 2 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  📈
                </div>
                <div>
                  <h4 className="text-white font-black text-base">Google Ads Setup & Manage</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Website laju tiada makna jika tiada pelawat berkualiti. Kami bina kempen Search/Performance Max berstruktur tinggi, urus, dan optimumkan setiap minggu untuk memastikan Kos Per Lead anda rendah. (Tidak termasuk bajet iklan harian).
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Setup Fee (Sekali)</span>
                  <span className="font-black text-white font-mono text-sm">RM 1,799</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-medium">Optimasi & Pengurusan</span>
                  <span className="font-black text-amber-400 font-mono text-sm">RM 350/bln</span>
                </div>
              </div>
            </div>

            {/* Add-on 3 */}
            <div className="bg-[#121A2E]/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                  🔍
                </div>
                <div>
                  <h4 className="text-white font-black text-base">Complete SEO + Programmatic</h4>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    Tawan carian Google dan AI (ChatGPT/Perplexity). Kami bina 500+ halaman berskala besar secara automatik dalam masa 60 hari untuk mendominasi ratusan kata kunci industri anda. Duduk di muka depan Google tanpa bayar PPC harian.
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-6 border-t border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Setup Fee (Sekali)</span>
                  <span className="font-black text-white font-mono text-sm">RM 2,999</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-medium">Penyelenggaraan Data</span>
                  <span className="font-black text-amber-400 font-mono text-sm">RM 350/bln</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bundle Offers Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 px-3.5 py-1.5 rounded-full border border-emerald-400/20">
              🎁 BUNDLE "DONE-FOR-YOU" (JIMAT LEBIH BESAR)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Pakej Stack AROS — Beroperasi Dari Hari Pertama</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              Nak kami uruskan semuanya dari A hingga Z tanpa pening kepala? Pilih salah satu ekosistem stack di bawah.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bundles.map((bundle, bIdx) => (
              <div
                key={bIdx}
                className="bg-[#121A2E]/80 border border-emerald-400/20 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 shadow-sm relative overflow-hidden group"
              >
                {/* Top glow bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rounded-t-3xl" />

                <div className="space-y-4">
                  <span className="inline-flex text-[8px] sm:text-[9px] font-mono font-black tracking-wider text-emerald-300 uppercase bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 leading-tight">
                    {bundle.badge}
                  </span>
                  <h4 className="text-lg font-black text-white">{bundle.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{bundle.desc}</p>
                  <ul className="space-y-1.5 pt-1">
                    {bundle.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2 text-xs text-slate-350 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 line-through block">{bundle.original}</span>
                    <span className="text-xl font-black text-white font-mono">{bundle.price}</span>
                    <span className="ml-1 text-[10px] font-black text-emerald-400 font-mono block sm:inline">{bundle.saving}</span>
                  </div>
                  <button
                    onClick={() => handleOpenModal(bundle.name)}
                    className="shrink-0 py-2 px-3 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 font-black text-[11px] rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    Hubungi Kami →
                  </button>
                </div>
              </div>
            ))}
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
