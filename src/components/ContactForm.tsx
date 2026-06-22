"use client";

import React, { useState } from "react";
import { User, Phone, Mail, Globe, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    painPoint: "",
    websiteStatus: "",
    goal: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    websiteUrl: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setValidationError("");
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.painPoint) {
        setValidationError("Sila pilih salah satu pilihan di bawah untuk meneruskan.");
        return false;
      }
    } else if (step === 2) {
      if (!formData.goal) {
        setValidationError("Sila pilih matlamat utama laman web anda.");
        return false;
      }
      if (!formData.budget) {
        setValidationError("Sila pilih anggaran bajet iklan anda.");
        return false;
      }
    } else if (step === 3) {
      if (!formData.name.trim()) {
        setValidationError("Nama penuh diperlukan.");
        return false;
      }
      if (!formData.phone.trim()) {
        setValidationError("Nombor WhatsApp diperlukan.");
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setValidationError("Alamat emel yang sah diperlukan.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setValidationError("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitted(true);

    // Format WhatsApp Message
    const targetPhone = "60125065516"; // User's WhatsApp number
    let message = `Salam Boss Amin, saya berminat untuk dapatkan khidmat bina website/sales page Next.js.\n\n`;
    message += `*NAMA:* ${formData.name}\n`;
    message += `*WHATSAPP:* ${formData.phone}\n`;
    message += `*EMEL:* ${formData.email}\n`;
    
    if (formData.painPoint === "tiada_website") {
      message += `*STATUS:* Tiada website lagi (Pindah dari TikTok/WhatsApp)\n`;
    } else {
      message += `*STATUS:* Mahu upgrade website sedia ada\n`;
      message += `*MASALAH SEBELUM INI:* ${
        formData.painPoint === "ghosted"
          ? "Developer lama culas/ghosting"
          : formData.painPoint === "lembab"
          ? "Website sedia ada lembab/selalu crash"
          : formData.painPoint === "susah_edit"
          ? "Susah edit teks/harga sendiri"
          : "Masalah pixel/tracking iklan rosak"
      }\n`;
      if (formData.websiteUrl) {
        message += `*URL SEKARANG:* ${formData.websiteUrl}\n`;
      }
    }

    message += `*MATLAMAT:* ${
      formData.goal === "leads"
        ? "Kumpul leads/borang prospek"
        : formData.goal === "ecommerce"
        ? "Jualan terus (E-commerce)"
        : "Kredibiliti / Profil Syarikat"
    }\n`;
    message += `*BAJET ADS BULANAN:* ${formData.budget}\n\n`;
    message += `Boleh bantu saya untuk rancang rangka (wireframe) website yang laju dan berkonversi tinggi?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodedMessage}`;

    // Redirect to WhatsApp after a short delay to allow success animation
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1500);
  };

  const painPointsOptions = [
    {
      id: "tiada_website",
      label: "Saya Tiada Website Lagi",
      desc: "Baru nak bermula, sebelum ini hanya niaga di TikTok / WhatsApp / Facebook.",
    },
    {
      id: "lembab",
      label: "Website Sedia Ada Lembab & Berat",
      desc: "Loading mengambil masa lama (Elementor/WordPress), pelanggan lari (bounce rate tinggi).",
    },
    {
      id: "ghosted",
      label: "Kena 'Ghosting' Dengan Developer",
      desc: "Developer culas atau hilang terus selepas bayaran deposit dibuat.",
    },
    {
      id: "susah_edit",
      label: "Susah Edit Teks & Harga Sendiri",
      desc: "Terpaksa bayar dan tunggu developer setiap kali ingin menukar promosi atau harga.",
    },
    {
      id: "tracking_rosak",
      label: "Pixel & Tracking Ads Rosak",
      desc: "Data conversion tidak masuk ke dashboard Google/Meta Ads, lebur bajet kempen.",
    },
  ];

  return (
    <section id="contact-form" className="py-24 border-t border-slate-200/60 bg-white relative bg-dot-grid">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.04)_0%,transparent_50%)] pointer-events-none blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> DIAGNOSTIC FORM PERCUMA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-slate-900 leading-tight">
            Rancang Website Anda Bersama Kami
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Isi borang ringkas di bawah. Kami akan buat analisa dan sediakan draf rangka website (Next.js) khusus untuk perniagaan anda.
          </p>
        </div>

        {/* Form Box (Glassmorphic Container) */}
        <div className="bg-white/80 backdrop-blur-lg border border-slate-200/75 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl shadow-slate-200/40 relative overflow-hidden">
          
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="mb-10">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                <span>Langkah {step} daripada 3</span>
                <span className="text-primary">{step === 1 ? "Masalah & Status" : step === 2 ? "Matlamat & Bajet" : "Butiran Peribadi"}</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/20">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {validationError && (
            <div className="mb-6 p-4.5 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2">
              <span>⚠️</span> {validationError}
            </div>
          )}

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-emerald-50 border-4 border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">Borang Berjaya Dihantar!</h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium">
                  Sistem sedang membuka WhatsApp untuk menghantar butiran diagnostic anda secara automatik ke akaun **Boss Amin**.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-500 inline-block rounded-2xl">
                ⚡ Memindahkan anda ke WhatsApp...
              </div>
              <p className="text-[10px] text-slate-400">
                Jika tetingkap baru tidak dibuka secara automatik, sila klik butang WhatsApp di bawah atau hubungi kami terus.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* STEP 1: PAIN POINTS & STATUS */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    Apakah masalah terbesar anda, atau status perniagaan anda sekarang?
                  </h4>
                  <div className="grid gap-3.5">
                    {painPointsOptions.map((opt, i) => {
                      const isSelected = formData.painPoint === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => updateField("painPoint", opt.id)}
                          className={`p-5 rounded-2xl border transition-all duration-350 cursor-pointer text-left block relative hover:border-slate-350 hover:bg-slate-50/50 ${
                            isSelected
                              ? "border-primary bg-primary/[0.03] ring-2 ring-primary/20 shadow-md shadow-primary/5 scale-[1.01]"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            
                            {/* Custom Checkbox circle indicator */}
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
                              isSelected 
                                ? "bg-primary border-primary text-white scale-110" 
                                : "border-slate-300 bg-white"
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                            </div>

                            <div>
                              <span className="font-bold text-slate-800 text-sm sm:text-base block">{opt.label}</span>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">{opt.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: GOALS & BUDGET */}
              {step === 2 && (
                <div className="space-y-8">
                  {/* Goal Select */}
                  <div className="space-y-3.5">
                    <h4 className="text-base font-black text-slate-900">
                      Apakah matlamat utama laman web / sales page anda?
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {[
                        { id: "leads", title: "Kumpul Prospek / Leads", desc: "Isi borang / WhatsApp click" },
                        { id: "ecommerce", title: "E-Commerce / Sales", desc: "Direct payment Stripe/FPX" },
                        { id: "branding", title: "Profil & Kredibiliti", desc: "Branding & maklumat syarikat" },
                      ].map((item) => {
                        const isSelected = formData.goal === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => updateField("goal", item.id)}
                            className={`p-4.5 rounded-2xl border text-center cursor-pointer transition-all duration-300 flex flex-col justify-center gap-1 hover:border-slate-350 hover:bg-slate-50/50 ${
                              isSelected
                                ? "border-primary bg-primary/[0.03] ring-2 ring-primary/20 shadow-md shadow-primary/5 scale-[1.02] font-bold"
                                : "border-slate-200 bg-white"
                            }`}
                          >
                            <h5 className="font-bold text-xs sm:text-sm text-slate-800">{item.title}</h5>
                            <p className="text-[10px] text-slate-500 leading-snug font-medium">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Select */}
                  <div className="space-y-3.5">
                    <h4 className="text-base font-black text-slate-900">
                      Berapakah anggaran bajet iklan (Google/Meta/Tiktok) anda sebulan?
                    </h4>
                    <div className="grid sm:grid-cols-4 gap-3">
                      {[
                        { id: "tiada", label: "Tiada Iklan Lagi" },
                        { id: "bawah_1k", label: "Bawah RM1,000" },
                        { id: "1k_5k", label: "RM1,000 - RM5,000" },
                        { id: "atas_5k", label: "Lebih RM5,000" },
                      ].map((item) => {
                        const isSelected = formData.budget === item.label;
                        return (
                          <div
                            key={item.id}
                            onClick={() => updateField("budget", item.label)}
                            className={`p-4 rounded-xl border text-center cursor-pointer font-bold text-xs sm:text-sm transition-all duration-300 ${
                              isSelected
                                ? "border-primary bg-primary/[0.03] text-primary-dark ring-2 ring-primary/20 shadow-md shadow-primary/5 scale-[1.02]"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50"
                            }`}
                          >
                            {item.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: PERSONAL DETAILS */}
              {step === 3 && (
                <div className="space-y-6">
                  <h4 className="text-base sm:text-lg font-black text-slate-900">
                    Sila berikan butiran hubungi anda untuk kami hantarkan analisa draf
                  </h4>
                  
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Nama Penuh</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <User className="w-4.5 h-4.5" />
                      </span>
                      <input
                        type="text"
                        placeholder="Cth: Khairul Anuar"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone Input */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">No. WhatsApp</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Phone className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="text"
                          placeholder="Cth: 0123456789"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Alamat Emel</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="email"
                          placeholder="zaki@email.com"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Web (Conditional) */}
                  {formData.painPoint !== "tiada_website" && (
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        URL Website Sekarang (Opsional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Globe className="w-4.5 h-4.5" />
                        </span>
                        <input
                          type="text"
                          placeholder="www.kedaisaya.com"
                          value={formData.websiteUrl}
                          onChange={(e) => updateField("websiteUrl", e.target.value)}
                          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 text-sm font-medium focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm transition-all"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex justify-between items-center pt-4 gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-850 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" /> Kembali
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="relative overflow-hidden group px-7 py-3.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-1.5 ml-auto cursor-pointer shadow-md shadow-primary/15 hover:scale-[1.01]"
                  >
                    {/* Shiny sweep animation glare */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
                    <span className="flex items-center gap-1.5 relative z-10">
                      Seterusnya <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="relative overflow-hidden group px-8 py-3.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-1.5 ml-auto cursor-pointer shadow-lg shadow-primary/25 hover:scale-[1.02]"
                  >
                    {/* Shiny sweep animation glare */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
                    <span className="flex items-center gap-1.5 relative z-10">
                      Hantar Diagnostik & Rundingan <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Secure footnote */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Maklumat anda dilindungi SSL & digunakan hanya untuk analisa website sahaja.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
