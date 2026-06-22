"use client";

import React, { useState } from "react";
import { Phone, Calendar, Clock, MapPin, Award, CheckCircle2, ChevronDown, ShieldCheck, Heart, Sparkles, Star, ArrowRight, UserCheck } from "lucide-react";

export default function DrSmilePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "Pemeriksaan & Scaling (Pembersihan)",
    date: "",
    time: "",
    message: "",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const targetPhone = "60125065516"; // Rule WhatsApp
    const message = `Salam Dr. Smile, saya ingin menempah slot temujanji rawatan:\n\n*Nama Penuh:* ${formData.name}\n*WhatsApp:* ${formData.phone}\n*Rawatan:* ${formData.treatment}\n*Tarikh Pilihan:* ${formData.date}\n*Masa Pilihan:* ${formData.time}\n*Nota Tambahan:* ${formData.message || "Tiada"}\n\nBoleh sahkan slot saya? Terima kasih.`;
    const encoded = encodeURIComponent(message);
    
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4]/30 text-slate-800 font-sans antialiased selection:bg-teal-500 selection:text-white">
      
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-semibold py-2.5 px-4 text-center tracking-wide shadow-sm relative z-20">
        🎉 PROMO KHAS AWAL BULAN: Diskaun 20% untuk rawatan Pemutihan Gigi (Teeth Whitening) & Percuma X-Ray Gigi!
      </div>

      {/* Modern Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-teal-500/20">
              S
            </div>
            <div className="text-left">
              <span className="font-black text-base tracking-tight text-slate-900 block leading-tight">Dr. Smile</span>
              <span className="text-[9px] font-mono font-bold text-teal-600 uppercase tracking-widest block">Klinik Pergigian</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-650">
            <a href="#services" className="hover:text-teal-600 transition-colors">Rawatan</a>
            <a href="#doctors" className="hover:text-teal-600 transition-colors">Doktor Kami</a>
            <a href="#reviews" className="hover:text-teal-600 transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-black text-xs rounded-xl shadow-md shadow-teal-500/10 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Tempah Slot Percuma
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-white via-teal-50/20 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200/60 px-3.5 py-1.5 rounded-full text-teal-600 text-[10px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" /> JAMINAN SELESA & TIADA TRAUMA
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Sakit Gigi Atau Mahukan Senyuman Menawan?
            </h1>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Klinik pergigian keluarga moden yang menawarkan rawatan premium tanpa rasa sakit. Menggunakan teknologi terkini dengan harga telus, tanpa caj tersembunyi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#booking"
                className="px-7 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-center font-black text-sm rounded-2xl shadow-lg shadow-teal-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Slot Temujanji Sekarang
              </a>
              <a
                href="https://wa.me/60125065516?text=Hi%20Dr.Smile,%20saya%20nak%20tanya%20tentang%20rawatan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-750 text-center font-black text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-500" /> Tanya Harga Rawatan
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-700 pt-2 border-t border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                <span>KKM Certified Clinic</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                <span>100% Telus (Tiada Caj Kejutan)</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="border-8 border-white rounded-[2.5rem] shadow-2xl overflow-hidden bg-slate-100 aspect-[4/5] relative">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Doktor Gigi Dr. Smile"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 text-left shadow-lg">
                <p className="text-[10px] font-mono font-bold text-teal-600 uppercase tracking-wider">Ketua Doktor Pakar</p>
                <h4 className="text-sm font-black text-slate-900">Dr. Sarah Amina Binti Razak</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-black text-slate-900">Perkhidmatan Pergigian Kami</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">Kami memaparkan harga secara terus dan telus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Scaling & Pembersihan (Pembersihan)",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
                desc: "Pembersihan menyeluruh daripada karang gigi tebal, plak bakteria, serta semburan gilapan mutiara.",
                price: "RM 80 - RM 150",
                duration: "30 - 45 minit"
              },
              {
                title: "Teeth Whitening (Pemutihan)",
                image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=500&q=80",
                desc: "Rawatan kosmetik menggunakan gel hidrogen peroksida aktif gred perubatan bersama sistem cahaya LED sejuk.",
                price: "RM 450 - RM 800",
                duration: "60 minit"
              },
              {
                title: "Orthodontics (Pendakap Gigi / Braces)",
                image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=80",
                desc: "Meluruskan gigi berlapis, renggang, atau susunan rahang terkeluar menggunakan braket logam (metal) berkualiti tinggi.",
                price: "RM 3,500+",
                duration: "18 - 24 bulan"
              }
            ].map((srv, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img className="w-full h-full object-cover" src={srv.image} alt={srv.title} />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-black text-slate-900 leading-snug">{srv.title}</h3>
                    <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">{srv.desc}</p>
                  </div>
                </div>
                <div className="p-6 bg-slate-100/50 border-t border-slate-200/35 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-450 uppercase">Harga</span>
                  <span className="font-extrabold text-sm text-teal-600">{srv.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-black text-slate-900">Doktor Gigi Professional Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Amina Binti Razak",
                role: "Ketua Doktor Gigi & Pakar Ortodontik",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
                spec: "BDS (Malaya), Fellow in Aesthetic Dentistry (Germany)."
              },
              {
                name: "Dr. Adrian Lim Cheng Yee",
                role: "Pakar Bedah Pergigian (Dental Surgeon)",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
                spec: "DDS (UKM), Fellowship in Implantology."
              },
              {
                name: "Dr. Nurul Jannah Binti Kassim",
                role: "Pakar Pergigian Kanak-Kanak (Pedodontist)",
                image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=500&q=80",
                spec: "BDS (UiTM)."
              }
            ].map((doc, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-3xl p-5 text-left space-y-4 shadow-sm">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img className="w-full h-full object-cover" src={doc.image} alt={doc.name} />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">{doc.name}</h3>
                  <p className="text-[10px] font-mono text-teal-600 uppercase">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Tempah Slot Temujanji Gigi</h2>
          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-4 text-left shadow-sm">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Nama Penuh</label>
              <input
                type="text"
                placeholder="Mohd Farhan"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Nombor WhatsApp</label>
              <input
                type="tel"
                placeholder="0123456789"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Jenis Rawatan</label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-teal-500"
              >
                <option>Pemeriksaan & Scaling (Pembersihan)</option>
                <option>Teeth Whitening (Pemutihan)</option>
                <option>Orthodontics (Pendakap Gigi / Braces)</option>
                <option>Tampalan / Cabutan Gigi</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Tarikh</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Masa</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow-md transition-all text-center cursor-pointer"
            >
              Hantar Permintaan Temujanji
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-450 py-12 text-center text-xs border-t border-slate-900">
        <p className="font-black text-white">© {new Date().getFullYear()} Klinik Pergigian Dr. Smile.</p>
        <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-600 pt-4 max-w-sm mx-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
          <span>SSL Secured · Akta PDPA.</span>
        </div>
      </footer>

    </div>
  );
}
