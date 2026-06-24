"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqData: FAQItem[] = [
    {
      question: "Saya bukan orang IT. Adakah saya akan sesat dengan website ni nanti?",
      answer: "Langsung tidak perlu. Kami design sistem ini khusus untuk peniaga bukan-teknikal. Dashboard yang kami berikan semudah edit dokumen Word — tukar teks, upload gambar, lihat leads masuk. Tidak ada terminal, tidak ada kod, tidak ada sakit kepala. Kalau ada masalah, WhatsApp kami. Kami jelaskan dalam 5 minit.",
    },
    {
      question: "Adakah ada kos bulanan yang tersembunyi selepas website siap?",
      answer: "Sila lupakan bil hosting RM100-300 sebulan. Website kami di-deploy di platform hosting yang sama digunakan oleh lebih 3 juta syarikat global — stabil, laju, dan percuma untuk jenis website yang kami bina. Kos yang perlu anda tanggung hanya pembaharuan domain tahunan (~RM40-60 setahun). Tiada surprise, tiada caj tambahan. Kami beritahu semua kos dari awal sebelum anda bayar satu sen pun.",
    },
    {
      question: "Pixel Facebook, Google Ads, TikTok — semua tu anda setup sekali ke?",
      answer: "Ya, semuanya. Meta Pixel + Conversion API (server-side), Google Analytics 4, Google Tag Manager, dan TikTok Pixel — semua dipasang dan diuji sebagai standard dalam semua pakej, tanpa bayaran tambahan. Website anda siap receive trafik iklan dengan tracking 100% tepat dari hari pertama launch.",
    },
    {
      question: "Saya lemah dalam tulis copywriting. Adakah saya perlu sediakan teks sendiri?",
      answer: "Tidak langsung. Copywriting jualan (CRO copy) disiapkan sepenuhnya oleh kami berdasarkan borang briefing ringkas yang anda isi — tentang produk anda, target pelanggan, dan USP bisnes anda. Kami rangka headline yang hook, body copy yang convince, dan CTA yang mendorong tindakan. Anda hanya perlu approve.",
    },
    {
      question: "72 jam delivery nampak macam terlalu cepat. Apa yang siap dalam masa tu?",
      answer: "Dalam 72 jam, anda terima draf pertama website anda yang sudah fully coded, live, dan berfungsi — termasuk borang, tracking pixel, dan domain. Ia mungkin ada satu atau dua tweak kecil berdasarkan feedback anda, tapi website anda sudah boleh receive trafik ads. Kenapa boleh buat secepat ini? Kerana proses kami sudah streamlined dari pengalaman membina puluhan website — bukan kerana kami potong corner. Dalam 72 jam itu, bukan sekadar website yang siap — mesin jualan anda yang lengkap dengan tracking, copywriting, dan borang lead sudah bersedia untuk menerima pelawat pertama anda.",
    },
    {
      question: "Jika saya tak puas hati atau nak developer lain sambung nanti, macam mana?",
      answer: "Tiada masalah langsung. Semua kod website anda adalah 100% milik anda dari hari pertama — tiada proprietary lock-in, tiada sistem yang hanya kami sahaja boleh akses. Anda boleh bawa kod ke mana-mana developer, bila-bila masa. Kami confident dengan kerja kami, jadi kami tak perlu tahan anda dengan cara teknikal.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 w-full bg-transparent py-24 text-slate-200 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 shadow-sm">
            🤔 KERAGUAN BIASA — KAMI JAWAB SEJUJURNYA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
            Benda Yang Biasanya Orang Nak Tanya{" "}
            <span className="text-primary block mt-2">Tapi Malu Nak Tanya</span>
          </h2>
          <p className="text-slate-350 text-sm md:text-base font-medium">
            Kalau soalan anda tak ada di sini, WhatsApp kami terus. Kami jawab dalam bahasa manusia.
          </p>
        </div>

        {/* FAQ List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-4"
        >
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Question trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-200 hover:text-white transition-all cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-xl font-bold text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    ＋
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  className={`transition-all duration-305 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/10 bg-slate-950/40" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* WhatsApp CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/20 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
        >
          {/* WhatsApp Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/20">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448{11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          {/* Text */}
          <div className="flex-1 space-y-1">
            <h4 className="font-black text-white text-base">Soalan lain? Hubungi kami terus.</h4>
            <p className="text-slate-300 text-xs font-medium leading-relaxed">
              Tak jumpa jawapan yang anda cari di atas? WhatsApp kami terus. Kami sedia membantu anda.
            </p>
          </div>
          {/* CTA Button */}
          <a
            href="https://wa.me/60125065516?text=Hi%2C%20saya%20ada%20soalan%20tentang%20AROS%20Sales%20Engine."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-black text-xs px-6 py-3 rounded-xl shadow-md shadow-[#25D366]/20 hover:bg-[#128C7E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Chat WhatsApp →
          </a>
        </motion.div>

        {/* Bridge to BottomCTA */}
        <p className="text-center text-xs text-slate-500 font-mono mt-10 leading-relaxed">
          Soalan dah terjawab.{" "}
          <span className="text-slate-400 font-bold">Satu langkah yang tinggal.</span>
        </p>

      </div>
    </section>
  );
}
