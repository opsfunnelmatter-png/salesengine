"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { User, Phone, Mail, Globe, ArrowRight, ShieldCheck, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage: string;
}

export default function PackageContactModal({ isOpen, onClose, initialPackage }: PackageContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selectedPackage: "",
    websiteUrl: "",
    noWebsite: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});

  // Reset selected package when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        selectedPackage: initialPackage || "Pakej Launch (RM999)",
      }));
    }
  }, [isOpen, initialPackage]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Set mounted true on client
  useEffect(() => {
    setMounted(true);
  }, []);

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
          selectedPackage: formData.selectedPackage,
          websiteUrl: formData.noWebsite ? "Tiada Website" : formData.websiteUrl,
          hasWebsite: !formData.noWebsite,
        }),
      });

      if (res.ok) {
        // Close modal and redirect to thank you page
        onClose();
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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070b15]/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="w-full max-w-lg bg-white border border-slate-200/90 rounded-[28px] p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden select-none z-10 text-slate-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4.5 top-4.5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center cursor-pointer border-0"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Form Header */}
            <div className="mb-5 pr-8">
              <div className="flex items-center gap-1.5 mb-1 select-none">
                <span className="inline-flex items-center gap-1 text-[8.5px] font-mono font-bold tracking-widest text-[#d97706] bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase">
                  <Sparkles className="w-2.5 h-2.5 animate-pulse text-[#d97706]" /> INKUIRI PAKEJ
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                Tanya Mengenai Pakej AROS.
              </h3>
              <p className="text-[11px] text-slate-500 font-medium leading-normal mt-0.5">
                Isi butiran di bawah untuk mulakan perbincangan dan bertanya soalan tanpa sebarang komitmen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div className="space-y-0.5 text-left">
                <label className="text-[9px] font-mono font-bold text-slate-400 uppercase">Nama Penuh</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Nadia Mansor"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-xl text-slate-800 text-[13px] font-medium focus:outline-none focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 shadow-xs transition-colors ${
                      invalidFields.name ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-0.5 text-left">
                <label className="text-[9px] font-mono font-bold text-slate-400 uppercase">Nombor WhatsApp</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="0125065516"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-xl text-slate-800 text-[13px] font-medium focus:outline-none focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 shadow-xs transition-colors ${
                      invalidFields.phone ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                </div>
              </div>

              {/* Emel */}
              <div className="space-y-0.5 text-left">
                <label className="text-[9px] font-mono font-bold text-slate-400 uppercase">Emel Perniagaan</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="nadia@email.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-xl text-slate-800 text-[13px] font-medium focus:outline-none focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 shadow-xs transition-colors ${
                      invalidFields.email ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
                    }`}
                  />
                </div>
              </div>

              {/* Package Dropdown Selector */}
              <div className="space-y-0.5 text-left">
                <label className="text-[9px] font-mono font-bold text-slate-400 uppercase">Pakej Yang Ingin Ditanya</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d97706]">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => updateField("selectedPackage", e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-[13px] font-bold focus:outline-none focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 shadow-xs transition-colors cursor-pointer appearance-none"
                  >
                    <option value="Pakej Launch (RM999)">Pakej Launch (RM999)</option>
                    <option value="Pakej Authority (RM1,899)">Pakej Authority (RM1,899) [RECOMMENDED]</option>
                    <option value="Launch Stack (RM1,999)">Launch Stack (RM1,999)</option>
                    <option value="Growth Stack (RM2,899)">Growth Stack (RM2,899)</option>
                    <option value="Custom Service / Add-On">Custom Service / Add-On</option>
                  </select>
                  {/* Custom arrow down */}
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 font-bold text-[9px]">▼</span>
                </div>
              </div>

              {/* Website URL */}
              {!formData.noWebsite && (
                <div className="space-y-0.5 text-left">
                  <label className="text-[9px] font-mono font-bold text-slate-400 uppercase">URL Website Sekarang</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <Globe className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="www.kedaisaya.com"
                      value={formData.websiteUrl}
                      onChange={(e) => updateField("websiteUrl", e.target.value)}
                      className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-xl text-slate-800 text-[13px] font-medium focus:outline-none focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 shadow-xs transition-colors ${
                        invalidFields.websiteUrl ? "border-red-500 ring-2 ring-red-500/20 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* Toggle No Website */}
              <div className="flex items-center gap-2 pt-1 border-t border-slate-100 mt-1">
                <input
                  type="checkbox"
                  id="modalNoWebsite"
                  checked={formData.noWebsite}
                  onChange={(e) => updateField("noWebsite", e.target.checked)}
                  className="w-4 h-4 text-[#d97706] border-slate-350 rounded focus:ring-amber-400/20 cursor-pointer accent-amber-500"
                />
                <label htmlFor="modalNoWebsite" className="text-[11px] font-bold text-slate-650 cursor-pointer select-none">
                  Belum ada website, nak bina baru.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 relative overflow-hidden group bg-gradient-to-r from-amber-500 via-amber-450 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-amber-400/10 hover:scale-[1.01] active:scale-95 disabled:opacity-50 border-0"
              >
                {/* Shiny sweep animation glare */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
                <span className="flex items-center gap-1.5 relative z-10">
                  {isSubmitting ? "Menghantar..." : "Mulakan Perbincangan"} <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </form>

            {/* Footnote */}
            <div className="border-t border-slate-100 flex items-center justify-center gap-1 text-[9px] font-mono text-slate-400 mt-4 pt-3.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>SSL Secured · Data peribadi anda terjamin.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
