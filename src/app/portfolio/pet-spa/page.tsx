"use client";

import React, { useState } from "react";
import { Phone, Calendar, CheckCircle2, ChevronDown, ShieldCheck, Heart, Sparkles, Star, Scissors, Sparkle, Award } from "lucide-react";

export default function PetSpaPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    petType: "Kucing",
    package: "Pakej Spa & Glow (RM119)",
    date: "",
    time: "",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = "60125065516"; // Rule WhatsApp
    const message = `Salam Fluffy Haven, saya ingin menempah slot Pet Grooming/Spa:\n\n*Nama:* ${formData.name}\n*WhatsApp:* ${formData.phone}\n*Jenis Haiwan:* ${formData.petType}\n*Pakej:* ${formData.package}\n*Tarikh Pilihan:* ${formData.date}\n*Masa Pilihan:* ${formData.time}\n\nBoleh sahkan slot saya? Terima kasih.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FDF8F6] text-slate-800 font-sans antialiased selection:bg-violet-500 selection:text-white">
      
      {/* Top Announcement Banner */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold py-2.5 px-4 text-center tracking-wide shadow-sm relative z-20">
        🐈 TEMPAHAN CUTI SEKOLAH KINI DIBUKA: Slot Hotel Kucing Berhawa Dingin Terhad! Tempah Sekarang.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-violet-500/20">
              🐾
            </div>
            <div className="text-left">
              <span className="font-black text-base tracking-tight text-slate-900 block leading-tight">Fluffy Haven</span>
              <span className="text-[9px] font-mono font-bold text-violet-600 uppercase tracking-widest block">Premium Pet Spa & Hotel</span>
            </div>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white font-black text-xs rounded-xl shadow-md shadow-violet-500/10 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Tempah Grooming
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 bg-violet-50 border border-violet-200/60 px-3.5 py-1.5 rounded-full text-violet-600 text-[10px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" /> Rawatan Lembut & Selesa
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Anak Bulu Berbau & Bulu Berkerak? 
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-violet-600 -mt-4">
            Jangan Biarkan Si Manja Stres Dengan Servis Kasar & Sempit!
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
            Di <strong className="text-slate-900">Fluffy Haven</strong>, kami menyediakan rawatan mandi & spa yang lembut, tanpa paksaan, serta hotel tanpa sangkar yang membuatkan si manja anda rasa bebas seperti di rumah sendiri.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#booking"
              className="px-6 py-3.5 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white text-center font-black text-sm rounded-xl shadow-md shadow-violet-500/10 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Booking Slot Grooming Sekarang
            </a>
            <a
              href="https://wa.me/60125065516?text=Hi%20Fluffy%20Haven,%20saya%20nak%20tanya%20harga%20hotel%20grooming"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-center font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-violet-500" /> Hubungi Kami
            </a>
          </div>

          {/* Micro Trust badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 text-xs font-bold text-slate-650">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Certified Groomer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Organic Shampoo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Bebas Sangkar</span>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="md:col-span-5 relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-indigo-500/10 rounded-full blur-2xl -z-10" />
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden aspect-square bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80"
              alt="Mandi kucing pet spa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Pain Points / Features Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-violet-600 uppercase bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
              MASALAH PET PARENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kenapa Ramai Risau Nak Hantar Grooming?</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">Kami faham ketakutan anda. Sebab itu kami wujudkan kaedah rawatan alternatif yang selamat.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Takut Pengendalian Kasar",
                desc: "Risau kucing atau anjing dikendalikan secara paksaan sehingga mendatangkan kecederaan atau trauma psikologi berpanjangan.",
                image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Takut Jangkitan Kutu/Kurap",
                desc: "Klinik atau kedai yang tidak menjaga sanitasi boleh menjadi lubuk pembiakan hama, fungus, dan penyakit berjangkit yang berbahaya.",
                image: "https://images.unsplash.com/photo-1537151608828-ea2b117b6297?auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Takut Kurungan Sangkar Sempit",
                desc: "Kurungan berjam-jam dalam ruang gelap dan bising meningkatkan paras hormon kortisol (stres) menyebabkan pet murung selepas pulang.",
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80"
              }
            ].map((box, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-44 bg-slate-200 overflow-hidden">
                  <img className="w-full h-full object-cover" src={box.image} alt={box.title} />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-violet-500" /> {box.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning/Educational Banner */}
      <section className="bg-amber-400 py-10 px-6 text-center shadow-inner">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-slate-950 font-black text-xs sm:text-sm md:text-base leading-relaxed">
            ⚠️ AMARAN: Bulu bergumpal (matted) yang dibiarkan boleh memerangkap kelembapan dan menyebabkan jangkitan kulit kronik yang menyakitkan. Anda mahu rawat si manja dengan penuh kasih sayang hari ini, atau membayar bil veterinar beribu ringgit esok?
          </p>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          {/* Left image */}
          <div className="md:col-span-5 relative flex justify-center order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-2xl -z-10" />
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-[6px] border-amber-400/30 shadow-2xl overflow-hidden aspect-square bg-slate-150">
              <img
                src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=600&q=80"
                alt="Full grooming kucing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="md:col-span-7 space-y-5 text-left order-1 md:order-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-violet-600 bg-violet-50 border border-violet-100 px-3.5 py-1.5 rounded-full">
              PAKEJ TERLARIS KAMI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">Pakej "Glow-Up Spa" Fluffy Haven</h2>
            <p className="text-slate-650 text-sm leading-relaxed font-medium">
              Rawatan pembersihan mendalam (Deep Cleansing) menggunakan syampu organik premium dan teknik urutan mandian air suam yang menenangkan. Khas untuk menukarkan bulu si manja daripada kusut, berdaki, dan berbau hapak menjadi super wangi, gebu, dan bebas kutu dalam masa 60 minit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-[#FDF8F6] border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center text-left">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Kenapa Pemilik Kucing & Anjing Memilih Kami?</h2>
            
            <div className="space-y-4">
              {[
                { title: "Gentle Handling Specialist", desc: "Kakitangan kami terlatih menggunakan teknik aromaterapi dan pemujukan suara lembut untuk menenangkan pet yang sangat agresif, penakut, atau trauma." },
                { title: "Syampu Organik Bebas Paraben", desc: "Hanya menggunakan syampu hypoallergenic berasaskan oat dan lidah buaya yang selamat untuk kulit sensitif, gatal, atau kering. Bulu menjadi 2x lebih lembut." },
                { title: "Pemeriksaan Kesihatan Percuma", desc: "Kami melakukan pemeriksaan asas 5-langkah termasuk keadaan kulit, kutu, kebersihan telinga, kesihatan kuku, dan mata sebelum memulakan sesi mandian." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-600 shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 h-72 rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&w=500&q=80" alt="Pet grooming service" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Ulasan Ikhlas Pelanggan Kami</h2>
            <div className="flex justify-center items-center gap-1.5 text-xs font-bold text-amber-500">
              <span className="bg-amber-100 px-3 py-1 rounded-full text-[10px] font-mono">GOOGLE MAPS</span>
              <div className="flex">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-slate-600">4.9 / 5.0 Bintang di Kuala Lumpur!</span>
            </div>
          </div>

          <div className="bg-[#FDF8F6] border border-slate-100 p-6 sm:p-8 rounded-3xl text-left flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200 shrink-0">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Reviewer" />
            </div>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold italic text-slate-700 leading-relaxed">
                "Kucing saya sebelum ni kalau pergi kedai lain mesti trauma dan demam 2 hari. Tapi hantar ke Fluffy Haven, balik-balik rileks sangat. Bulu yang bergumpal haritu pun diorang potong kemas gila. Sangat recommended!"
              </p>
              <h4 className="text-[10px] font-mono font-bold text-slate-450 uppercase">— SITI NURHALIZA, CHERAS</h4>
            </div>
          </div>

          {/* Happy Client Pets Grid */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">WAJAH-WAJAH GEMBIRA SELEPAS SPA</h3>
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
                  <img className="w-full h-full object-cover" src={img} alt={`Happy pet ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="bg-gradient-to-b from-violet-500 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-lg mx-auto text-center space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-300/20">
              TAWARAN HEBAT
            </span>
            <h2 className="text-3xl font-black tracking-tight">Promosi Spa & Mandian Khas</h2>
            <p className="text-indigo-100 text-xs sm:text-sm font-medium">Bulu bersih, kutu hapus, pet kekal wangi sepanjang minggu.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 text-left space-y-4">
            <h3 className="font-mono font-black text-xs text-amber-300 tracking-wider uppercase border-b border-white/10 pb-2">SENARAI RAWATAN KANDUNGAN</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-indigo-50 font-bold">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Full Grooming (Mandi + Gunting + Kuku)</span>
                <span>RM 100</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Medicated/Scented Shampoo Upgrade</span>
                <span>RM 30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Pembersihan Telinga & Mata</span>
                <span>RM 20</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Pet Cologne & Finishing Touch</span>
                <span>RM 10</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-white/15 text-center text-xs text-indigo-200">
              JUMLAH NILAI SEBENAR: <span className="line-through text-red-300 font-bold">RM 160</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-amber-400 text-slate-900 font-black text-xl sm:text-2xl px-6 py-4 rounded-2xl shadow-xl shadow-slate-950/20 inline-block">
              HANYA RM 119 SAHAJA!
            </div>
            <p className="text-amber-300 font-bold text-xs sm:text-sm">(Susu, mandi, potong kuku, & anti-kutu. Jimat RM41!)</p>
          </div>

          {/* Bonus block */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h4 className="text-xs font-black text-amber-300">🎁 BONUS PERCUMA 1</h4>
              <p className="text-[11px] text-slate-200 leading-normal">Rawatan Anti-Kutu (Hapus kutu aktif secara berkesan semasa mandian).</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-black text-amber-300">🎁 BONUS PERCUMA 2</h4>
              <p className="text-[11px] text-slate-200 leading-normal">Pet Bandana Comel khusus untuk 10 pelanggan pertama hari ini!</p>
            </div>
          </div>

        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center text-left">
          
          <div className="md:col-span-7 space-y-5">
            <span className="text-[9.5px] font-mono font-bold tracking-widest text-violet-600 bg-violet-50 border border-violet-100 px-3.5 py-1.5 rounded-full">
              GUARANTEE PERIBADI
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Jaminan "Hati Tenang" Fluffy Haven</h2>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-medium">
              Kami menjaga haiwan kesayangan anda seolah-olah mereka adalah ahli keluarga kami sendiri. Sekiranya anda mendapati kekemasan bulu tidak memuaskan atau si manja anda pulang dalam keadaan stres melampau, bawa mereka kembali. Kami akan lakukan pembersihan dan rawatan semula secara <strong>PERCUMA</strong>. Kepuasan anda dan kebahagiaan anak bulu adalah keutamaan kami.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-56 h-56 rounded-full overflow-hidden bg-slate-100 border-[6px] border-violet-100 shadow-xl">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=400&q=80" alt="Jaminan Fluffy Haven" />
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form Area */}
      <section id="booking" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Tempah Slot Spa Si Manja</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Isi borang di bawah untuk menempah. Kami akan sahkan slot di WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/40 text-left space-y-4">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nama Anda</label>
              <input
                type="text"
                placeholder="Fatin Nabilah"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-violet-500"
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
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-violet-500"
              />
            </div>

            {/* Pet Type */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Jenis Haiwan</label>
                <select
                  value={formData.petType}
                  onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-violet-500"
                >
                  <option>Kucing</option>
                  <option>Anjing</option>
                  <option>Arnab</option>
                  <option>Lain-lain</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pakej Pilihan</label>
                <select
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-violet-500"
                >
                  <option>Pakej Spa & Glow (RM119)</option>
                  <option>Basic Grooming (RM60)</option>
                  <option>Mandi Kutu/Medicated (RM80)</option>
                  <option>Hotel Menginap (RM35/malam)</option>
                </select>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tarikh Pilihan</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Masa Pilihan</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white font-black text-xs rounded-xl shadow-md transition-all text-center cursor-pointer"
            >
              Hantar Booking Temujanji
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Soalan Lazim (FAQ)</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Kemusykilan lazim pemilik haiwan bulu.</p>
          </div>

          <div className="space-y-3">
            {[
              { q: "Berapa lama sesi basic grooming / full spa?", a: "Sesi basic grooming biasanya mengambil masa sekitar 45 minit. Sesi full spa berserta potongan kuku, cuci telinga, dan mandi anti-kutu mengambil masa kira-kira 60 hingga 90 minit bergantung kepada saiz pet dan keadaan bulu." },
              { q: "Adakah hotel kucing selamat dan bebas sangkar?", a: "Ya! Di Fluffy Haven, kami mengamalkan konsep 'cage-free playland' untuk hotel kami. Kucing akan diberikan bilik VIP berhawa dingin tersendiri tanpa sangkar kawat sempit, dengan pengawasan CCTV 24 jam." },
              { q: "Adakah saya perlu bawa barang mandi pet sendiri?", a: "Tidak perlu. Kami menyediakan semua kelengkapan premium termasuk syampu organik berasaskan oat/lidah buaya gred tinggi, tuala microfiber bersih yang dinyahjangkit, dan alat pengering bersuhu selamat." }
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
          <p className="font-black text-white text-sm">© {new Date().getFullYear()} Fluffy Haven Premium Pet Spa.</p>
          <p className="text-[10.5px] text-slate-500 leading-relaxed">
            Pengendali & kakitangan kami memegang sijil profesional Dandanan Haiwan (Professional Pet Grooming) berdaftar.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-600 pt-6 border-t border-slate-900 max-w-sm mx-auto">
          <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
          <span>SSL Secured · Data anda dilindungi secara sulit di bawah Akta PDPA.</span>
        </div>
      </footer>

    </div>
  );
}
