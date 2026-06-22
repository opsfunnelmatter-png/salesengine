"use client";

import React, { useState } from "react";
import { Phone, Calendar, CheckCircle2, ChevronDown, ShieldCheck, Heart, Sparkles, Star, Smile, Award } from "lucide-react";

export default function SmileBrightPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "Pakej A: Junior Shine (RM129)",
    date: "",
    time: "",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = "60125065516"; // Rule WhatsApp
    const message = `Salam Smile Bright, saya ingin menempah slot Dental Temujanji:\n\n*Nama:* ${formData.name}\n*WhatsApp:* ${formData.phone}\n*Pakej Pilihan:* ${formData.package}\n*Tarikh Pilihan:* ${formData.date}\n*Masa Pilihan:* ${formData.time}\n\nBoleh sahkan slot saya? Terima kasih.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans antialiased selection:bg-rose-500 selection:text-white">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center tracking-wide shadow-sm relative z-20">
        📢 TAWARAN SMILE BRIGHT: Pakej penjagaan gigi seisi keluarga dengan potongan harga sehingga 30%!
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-450 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-rose-500/20">
              🦷
            </div>
            <div className="text-left">
              <span className="font-black text-base tracking-tight text-slate-900 block leading-tight">Smile Bright</span>
              <span className="text-[9px] font-mono font-bold text-rose-550 uppercase tracking-widest block">Klinik Pergigian Keluarga</span>
            </div>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-650 hover:to-amber-600 text-white font-black text-xs rounded-xl shadow-md shadow-rose-500/10 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Tempah Slot
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200/60 px-3.5 py-1.5 rounded-full text-rose-600 text-[10px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" /> Rawatan Bebas Fobia & Selesa
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Anak Takut Klinik Gigi? 
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-500 -mt-4">
            Tukar Fobia Menjadi Ceria Dengan Pakej 'Junior Shine' Kami!
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
            Jangan tunggu sehingga kerosakan gusi dan gigi melarat menjadi pembedahan yang mahal. Di <strong className="text-slate-900">Klinik Pergigian Smile Bright</strong>, kami menggabungkan teknik <strong>'Magic Touch'</strong> yang mesra kanak-kanak untuk melindungi senyuman seisi keluarga.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#booking"
              className="px-6 py-3.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-center font-black text-sm rounded-xl shadow-md shadow-rose-500/10 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Lihat Tawaran Smile Bright
            </a>
            <a
              href="https://wa.me/60125065516?text=Hi%20Smile%20Bright,%20saya%20nak%20tanya%20harga%20pakej%20gigi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-center font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-500" /> Hubungi Klinik
            </a>
          </div>

          {/* Micro Trust badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 text-xs font-bold text-slate-650">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Magic Touch Handling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Fluoride Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Sanitasi Selamat</span>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="md:col-span-5 relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-amber-500/10 rounded-3xl blur-2xl -z-10" />
          <div className="w-72 h-80 rounded-3xl border-8 border-white shadow-2xl overflow-hidden aspect-[4/5] bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
              alt="Friendly children dentist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Pain Points / Features Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-rose-600 uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              KENAPA TANGGUH?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kenapa Ramai Ibu Bapa Tangguh Rawatan Gigi Anak?</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">Kami memahami kebimbangan anda. Di bawah adalah faktor utama yang sering menghalang rawatan awal.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              { title: "Takut Anak Trauma", desc: "Tidak sanggup melihat atau mendengar si manja melolong ketakutan di dalam bilik rawatan pergigian." },
              { title: "Takut Bil 'Meletup'", desc: "Bimbang masuk ke klinik gigi swasta dan dikenakan caj rawatan beribu-ribu ringgit secara mengejut." },
              { title: "Mitos Gigi Susu", desc: "Anggapan salah bahawa 'gigi susu akan luruh jadi tidak apa jika rosak', walhal ia merosakkan tunas gigi kekal." },
              { title: "Fobia Kena 'Judge'", desc: "Rasa segan atau takut ditegur kasar oleh doktor apabila melihat gigi anak mula reput atau hitam." }
            ].map((box, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 font-extrabold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900">{box.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning/Educational Banner */}
      <section className="bg-rose-500 text-white py-10 px-6 text-center shadow-inner">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="font-black text-xs sm:text-sm md:text-base leading-relaxed">
            ⚠️ Realitinya: Kerosakan gigi susu yang dibiarkan bukan sahaja menyakitkan, malah boleh menjejaskan pertumbuhan gigi kekal dan keyakinan diri anak anda. Anda mahu cegah sekarang dengan bajet kecil, atau tanggung kos pembedahan mahal kemudian?
          </p>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          {/* Left image */}
          <div className="md:col-span-5 relative flex justify-center order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-2xl -z-10" />
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-[8px] border-slate-50 shadow-2xl overflow-hidden aspect-square bg-slate-150">
              <img
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80"
                alt="Pakej Smile Bright"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="md:col-span-7 space-y-5 text-left order-1 md:order-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-rose-600 bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full">
              FORMULA PERLINDUNGAN GIGI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">Pakej "Smile Bright" Smile Bright</h2>
            <p className="text-slate-650 text-sm leading-relaxed font-medium">
              Rawatan pencegahan gigi menyeluruh merangkumi pembersihan (Scaling), pengilapan gigi (Polishing), dan sapuan pelindung Fluoride berkualiti tinggi untuk melindungi gigi seisi keluarga daripada jangkitan karies. Sesi cepat yang selesa dalam masa 30-45 minit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-[#FDFBF7] border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kenapa Ibu Bapa Memilih Klinik Kami?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { icon: <Smile className="w-6 h-6" />, title: "Magic Touch Handling", desc: "Doktor kami sangat terlatih dan bersabar dalam memujuk kanak-kanak yang takut. Tiada lagi drama air mata." },
              { icon: <Award className="w-6 h-6" />, title: "Fluoride Premium", desc: "Sapuan pelindung gigi gred premium yang diimport, selamat untuk enamel gigi susu anak anda." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Pemeriksaan Teliti & Percuma", desc: "Kami memeriksa setiap sudut gusi dan permukaan gigi secara teliti untuk mengesan tanda reput awal." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-150 p-6 rounded-3xl space-y-4 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">{item.title}</h3>
                <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Bukti Kami Pilihan No. 1 di Cheras</h2>
            <div className="flex justify-center items-center gap-1.5 text-xs font-bold text-amber-500">
              <span className="bg-amber-100 px-3 py-1 rounded-full text-[10px] font-mono">GOOGLE REVIEWS</span>
              <span className="text-slate-650">⭐ 4.9 / 5.0 Bintang di Google Maps!</span>
            </div>
          </div>

          <div className="bg-[#FDFBF7] border border-slate-150 p-6 sm:p-8 rounded-3xl text-left flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200 shrink-0">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Reviewer" />
            </div>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold italic text-slate-700 leading-relaxed">
                "Anak saya yang sebelum ni fobia doktor gigi pun boleh duduk diam dan ketawa di sini. Doktor sangat sabar dan klinik nampak cantik macam taman permainan!"
              </p>
              <h4 className="text-[10px] font-mono font-bold text-slate-450 uppercase">— PUAN AMINAH, IBU KEPADA 3 ANAK</h4>
            </div>
          </div>

          {/* Happy Clients Gallery */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-455 uppercase">GALERI PESAKIT HAPPY KAMI</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=150&q=80",
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/50">
                  <img className="w-full h-full object-cover" src={img} alt={`Happy client ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-b from-[#9ab8d7] to-[#7a9ab9] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-300/20">
              PILIHAN PAKEJ KELUARGA
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Pilih Pakej Senyuman Anda</h2>
            <p className="text-slate-100 text-xs sm:text-sm font-medium">Melindungi gigi seisi keluarga daripada ancaman kaviti gigi.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left text-slate-800">
            {/* Package A */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow shadow-sm">
              <div>
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500&q=80" alt="Junior Shine" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-extrabold text-base text-slate-900">PAKEJ A: Junior Shine (Sesuai Untuk 1 Anak)</h3>
                  <ul className="space-y-2 text-xs text-slate-650 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Scaling & Polishing (Kanak-kanak)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Fluoride Treatment Upgrade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Edukasi Penjagaan Kesihatan Mulut</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-1">
                <div className="text-[9px] font-bold text-slate-400 uppercase">HARGA PROMO</div>
                <div className="font-black text-lg text-rose-500">
                  RM 129 <span className="text-xs text-slate-400 line-through font-normal font-mono ml-1.5">RM 180</span>
                </div>
              </div>
            </div>

            {/* Package B */}
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow shadow-sm">
              <div>
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=500&q=80" alt="Family Sparkle" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-extrabold text-base text-slate-900">PAKEJ B: Family Sparkle (2 Dewasa + 2 Anak)</h3>
                  <ul className="space-y-2 text-xs text-slate-650 font-bold">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>2x Scaling & Polishing (Dewasa)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>2x Junior Shine (Kanak-kanak)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Dental Consultation untuk Seisi Keluarga</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-1">
                <div className="text-[9px] font-bold text-slate-400 uppercase">HARGA PROMO</div>
                <div className="font-black text-lg text-rose-500">
                  RM 399 <span className="text-xs text-slate-400 line-through font-normal font-mono ml-1.5">RM 550++</span>
                </div>
                <span className="text-[9px] text-slate-500 font-bold italic mt-0.5">Nota: Hanya RM99/seorang! Lebih jimat bila hadir sekeluarga.</span>
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-white/10 border border-white/15 rounded-3xl p-6 text-left grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="space-y-1">
              <h4 className="text-xs font-black text-amber-300">🎁 BONUS PERCUMA 1</h4>
              <p className="text-[11px] text-slate-200 leading-normal">"Sparkle Tooth Kit" (Berus & ubat gigi khas kanak-kanak).</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-amber-300">🎁 BONUS PERCUMA 2</h4>
              <p className="text-[11px] text-slate-200 leading-normal">"Sticker Keberanian" & mainan hadiah kecil untuk 10 pesakit terawal hari ini!</p>
            </div>
          </div>

        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center text-left">
          
          <div className="md:col-span-7 space-y-5">
            <span className="text-[9.5px] font-mono font-bold tracking-widest text-rose-600 bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-full">
              SLA GUARANTEE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Jaminan "Hati Tenang" Smile Bright</h2>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-medium">
              Kami menjaga kesihatan mulut anak anda seperti anak kami sendiri. Sekiranya rawatan kami tidak memuaskan atau anak anda menunjukkan stres melampau semasa sesi temujanji, kami bersetuju melakukan pemeriksaan semula dan rawatan susulan secara <strong>PERCUMA</strong>. Kebajikan si manja adalah janji kami.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-56 h-56 rounded-full overflow-hidden bg-slate-100 border-[6px] border-rose-100 shadow-xl">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=400&q=80" alt="Jaminan Smile Bright" />
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Tempah Slot Temujanji KELUARGA</h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Slot pemeriksaan kami terhad. Tempah sekarang untuk mengelakkan anak mengadu sakit gigi di tengah malam.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/40 text-left space-y-4">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nama Ibu/Bapa</label>
              <input
                type="text"
                placeholder="Mohd Farhan"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-rose-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nombor WhatsApp</label>
              <input
                type="tel"
                placeholder="0123456789"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-rose-500"
              />
            </div>

            {/* Pakej */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pilihan Pakej</label>
              <select
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-rose-500"
              >
                <option>Pakej A: Junior Shine (RM129)</option>
                <option>Pakej B: Family Sparkle (RM399)</option>
                <option>Scaling Gigi Dewasa Sahaja (RM100)</option>
                <option>Konsultasi Gigi Kanak-Kanak Sahaja (RM40)</option>
              </select>
            </div>

            {/* Date and Time Group */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tarikh Pilihan</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Masa Pilihan</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-650 hover:to-amber-600 text-white font-black text-xs rounded-xl shadow-md transition-all text-center cursor-pointer"
            >
              Hantar Permintaan Temujanji
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Soalan Lazim (FAQ)</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Semua kemusykilan lazim ibu bapa.</p>
          </div>

          <div className="space-y-3">
            {[
              { q: "Adakah anak perlu berpuasa sebelum pemeriksaan?", a: "Tidak perlu. Anak anda boleh makan dan minum seperti biasa sebelum sesi pemeriksaan pergigian." },
              { q: "Adakah terdapat pakar bedah bersedia jika perlu?", a: "Ya. Kami mempunyai rangkaian kerjasama dengan hospital pakar pergigian berdekatan untuk kes-kes kecemasan 24 jam." },
              { q: "Adakah klinik menyediakan ruang menunggu mesra kanak-kanak?", a: "Ya! Kami menyediakan sudut permainan (play area) khas kanak-kanak yang dilengkapi dengan mainan dan buku cerita supaya anak anda rasa tenang sebelum rawatan." }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 flex justify-between items-center text-left bg-slate-50 hover:bg-slate-100/50 transition-colors"
                  >
                    <span className="font-extrabold text-slate-800 text-xs sm:text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-450 py-16 text-center text-xs space-y-6">
        <div className="max-w-md mx-auto space-y-3">
          <p className="font-black text-white text-sm">© {new Date().getFullYear()} Klinik Pergigian Smile Bright.</p>
          <p className="text-[10px] text-slate-500 leading-relaxed">
            Klinik ini berdaftar secara rasmi di bawah Kementerian Kesihatan Malaysia.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-650 pt-6 border-t border-slate-900 max-w-sm mx-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-rose-450" />
          <span>SSL Secured · Data anda dilindungi secara sulit di bawah Akta PDPA.</span>
        </div>
      </footer>

    </div>
  );
}
