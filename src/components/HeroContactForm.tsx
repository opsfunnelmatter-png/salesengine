"use client";

import React, { useState } from "react";
import { User, Phone, Mail, Globe, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroContactFormProps {
  isTablet?: boolean;
}

export default function HeroContactForm({ isTablet = false }: HeroContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    websiteUrl: "",
    noWebsite: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setInvalidFields((prev) => ({ ...prev, [field]: false }));
  };

  const validate = () => {
    const newInvalidFields: Record<string, boolean> = {};
    let isValid = true;

    if (!formData.name.trim()) { newInvalidFields.name = true; isValid = false; }
    if (!formData.phone.trim()) { newInvalidFields.phone = true; isValid = false; }
    if (!formData.email.trim() || !formData.email.includes("@")) { newInvalidFields.email = true; isValid = false; }
    if (!formData.noWebsite && !formData.websiteUrl.trim()) { newInvalidFields.websiteUrl = true; isValid = false; }

    setInvalidFields(newInvalidFields);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          websiteUrl: formData.noWebsite ? "Tiada Website" : formData.websiteUrl,
          hasWebsite: !formData.noWebsite,
        }),
      });

      if (res.ok) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        alert("Pendaftaran gagal. Sila cuba lagi.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert("Masalah rangkaian. Sila cuba lagi.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={
      isTablet 
        ? "w-full bg-transparent p-2 sm:p-3 px-4 sm:px-5 pb-2 relative select-none text-left flex-1 flex flex-col justify-between"
        : "w-full bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-[24px] p-4.5 sm:p-5.5 shadow-[0_20px_40px_rgba(15,23,42,0.06)] relative overflow-hidden select-none text-left"
    }>
      
      {/* Form Header */}
      <div className={isTablet ? "mb-1.5" : "mb-2.5"}>
        <div className="flex items-center gap-1.5 mb-0.5 select-none">
          <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold tracking-widest text-primary uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            <Sparkles className="w-2.5 h-2.5 text-primary animate-pulse" /> KONSULTASI PERCUMA
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
          Hubungi Kami, Audit Percuma.
        </h3>
        <p className="text-[10px] text-slate-500 font-medium leading-normal mt-0.5">
          Isi maklumat dibawah, kami akan hubungi anda secepat mungkin.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={
        isTablet 
          ? "flex-1 flex flex-col justify-center gap-2 sm:gap-2.5 py-1" 
          : "space-y-3"
      }>
        {/* Name */}
        <div className="space-y-0.5 text-left">
          <label className="text-[8.5px] font-mono font-bold text-slate-400 uppercase">Nama Penuh</label>
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">
              <User className="w-3.5 h-3.5" />
            </span>
            <input
              type="text"
              placeholder="Nadia Mansor"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className={`w-full pl-8.5 pr-2.5 bg-white border rounded-lg text-slate-800 text-[12px] font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 shadow-sm ${
                isTablet ? "py-1.5" : "py-2"
              } ${
                invalidFields.name ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
              }`}
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div className="space-y-0.5 text-left">
          <label className="text-[8.5px] font-mono font-bold text-slate-400 uppercase">Nombor WhatsApp</label>
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <input
              type="text"
              placeholder="0125065516"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={`w-full pl-8.5 pr-2.5 bg-white border rounded-lg text-slate-800 text-[12px] font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 shadow-sm ${
                isTablet ? "py-1.5" : "py-2"
              } ${
                invalidFields.phone ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
              }`}
            />
          </div>
        </div>

        {/* Emel */}
        <div className="space-y-0.5 text-left">
          <label className="text-[8.5px] font-mono font-bold text-slate-400 uppercase">Emel Perniagaan</label>
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <input
              type="email"
              placeholder="nadia@email.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={`w-full pl-8.5 pr-2.5 bg-white border rounded-lg text-slate-800 text-[12px] font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 shadow-sm ${
                isTablet ? "py-1.5" : "py-2"
              } ${
                invalidFields.email ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
              }`}
            />
          </div>
        </div>

        {/* Website URL */}
        {!formData.noWebsite && (
          <div className="space-y-0.5 text-left">
            <label className="text-[8.5px] font-mono font-bold text-slate-400 uppercase">URL Website Sekarang</label>
            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                <Globe className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                placeholder="www.kedaisaya.com"
                value={formData.websiteUrl}
                onChange={(e) => updateField("websiteUrl", e.target.value)}
                className={`w-full pl-8.5 pr-2.5 bg-white border rounded-lg text-slate-800 text-[12px] font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 shadow-sm ${
                  isTablet ? "py-1.5" : "py-2"
                } ${
                  invalidFields.websiteUrl ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
                }`}
              />
            </div>
          </div>
        )}

        {/* Toggle No Website */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 mt-0.5">
          <input
            type="checkbox"
            id="noWebsite"
            checked={formData.noWebsite}
            onChange={(e) => updateField("noWebsite", e.target.checked)}
            className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary/20 cursor-pointer"
          />
          <label htmlFor="noWebsite" className="text-[10.5px] font-bold text-slate-600 cursor-pointer select-none">
            Belum ada website, nak bina baru.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full relative overflow-hidden group bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-black text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-primary/20 hover:scale-[1.01] disabled:opacity-50 ${
            isTablet ? "py-2" : "py-2.5"
          }`}
        >
          {/* Shiny sweep animation glare */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
          <span className="flex items-center gap-1.5 relative z-10">
            {isSubmitting ? "Menghantar..." : "Hubungi Kami Sekarang"} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </form>

      {/* SSL Secure footnote */}
      <div className={`border-t border-slate-100 flex items-center justify-center gap-1 text-[8.5px] font-mono text-slate-400 ${
        isTablet ? "mt-2 pt-2" : "mt-3 pt-3"
      }`}>
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
        <span>SSL Secured · Data peribadi anda terjamin.</span>
      </div>
      
      {/* Small css */}
      <style dangerouslySetInnerHTML={{__html: `
        .pl-8.5 { padding-left: 2.125rem; }
      `}} />
    </div>
  );
}
