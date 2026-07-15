"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

interface TestimonialCard {
  name: string;
  role: string;
  avatar_initial: string;
  avatar_bg: string;
  avatar_image: string;
  stars: number;
  badge_text: string;
  badge_color: string;
  quote_headline: string;
  quote_body: string;
  industry_icon: string;
  industry: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    name: "Hafizuddin Roslan",
    role: "Founder, HR Realty",
    avatar_initial: "HR",
    avatar_bg: "bg-blue-600",
    avatar_image: "/images/avatar-hafizuddin.png",
    stars: 5,
    badge_text: "+3x Leads Dalam 2 Minggu",
    badge_color: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20",
    quote_headline: "Dalam masa 2 minggu selepas launch, borang enquiry kami naik 3x ganda.",
    quote_body: "Loading WordPress kami 6-7 saat, leads jatuh je. Lepas AROS, 2 minggu pertama enquiry naik 3x — sekarang kami naikkan bajet sebab tahu website boleh handle.",
    industry_icon: "🏠",
    industry: "Hartanah",
  },
  {
    name: "Syazwina Mazlan",
    role: "Business Coach",
    avatar_initial: "SM",
    avatar_bg: "bg-amber-600",
    avatar_image: "/images/avatar-syazwina.png",
    stars: 5,
    badge_text: "Leads Organik Daily ✅",
    badge_color: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20",
    quote_headline: "Orang bukan IT macam saya pun boleh faham.",
    quote_body: "Dashboard senang guna, website load laju kat phone. Leads masuk hampir setiap hari sekarang.",
    industry_icon: "🎓",
    industry: "Coaching",
  },
  {
    name: "Amirul Hakim",
    role: "Pengasas Agensi Acara",
    avatar_initial: "AH",
    avatar_bg: "bg-amber-600",
    avatar_image: "/images/avatar-amirul.png",
    stars: 5,
    badge_text: "Sistem Booking Lancar ⚡",
    badge_color: "text-amber-400 bg-amber-400/5 border-amber-400/20",
    quote_headline: "Sistem booking yang AROS bina sangat fast-responsive.",
    quote_body: "Website lama crash setiap kali blast kempen. Lepas AROS setup funnel, pelanggan bayar terus dari website. Zero lag.",
    industry_icon: "🎟️",
    industry: "Acara & Tiket",
  },
  {
    name: "Khairul Anuar",
    role: "Founder, KA Travel & Tours",
    avatar_initial: "KA",
    avatar_bg: "bg-teal-600",
    avatar_image: "/images/avatar-khairul.png",
    stars: 5,
    badge_text: "+35% Closing Rate Ads",
    badge_color: "text-teal-400 bg-teal-400/5 border-teal-400/20",
    quote_headline: "Prospek yang masuk WhatsApp sekarang dah ready nak bayar.",
    quote_body: "Dulu prospek tanya harga pastu senyap. Lepas AROS susun CRO, prospek yang masuk dah ready bayar deposit.",
    industry_icon: "✈️",
    industry: "Pelancongan",
  },
  {
    name: "Dr. Sarah Amina",
    role: "Ketua Doktor, Klinik Dr. Smile",
    avatar_initial: "SA",
    avatar_bg: "bg-rose-600",
    avatar_image: "/images/avatar-sarah.png",
    stars: 5,
    badge_text: "-80% Spam Chat WhatsApp",
    badge_color: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20",
    quote_headline: "Borang saringan pintar sangat menjimatkan masa klinik kami.",
    quote_body: "Borang saringan AROS menyaring pesakit secara automatik — mereka dah tahu harga & slot. Admin cuma perlu sahkan temujanji.",
    industry_icon: "🦷",
    industry: "Kesihatan Gigi",
  },
  {
    name: "Nadia Mansor",
    role: "Founder, NM Botanicals",
    avatar_initial: "NM",
    avatar_bg: "bg-amber-600",
    avatar_image: "/images/avatar-nadia.png",
    stars: 5,
    badge_text: "Conversion Rate Naik 📈",
    badge_color: "text-amber-400 bg-amber-400/5 border-amber-400/20",
    quote_headline: "TikTok Ads convert lebih baik.",
    quote_body: "Tukar ke AROS speed engine — conversion rate TikTok Ads naik mendadak. Orang klik, terus nampak produk.",
    industry_icon: "🌿",
    industry: "Kesihatan",
  },
];



export default function Testimonials() {
  return (
    <section className="relative z-10 w-full bg-transparent py-24 px-6 overflow-hidden border-t border-white/5">


      {/* Subtle Dot-Grid Pattern Mask */}
      <div className="absolute inset-0 bg-dot-grid-masked pointer-events-none z-0 opacity-45" />

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_60%)] pointer-events-none blur-3xl" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              🗣️ MEREKA YANG DAH CUBA BERKATA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
            Bukan Kami Yang Cakap.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)]">
              Dengar Dari Orang Yang Dah Tengok Hasilnya.
            </span>
          </h2>
          <p className="text-slate-350 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Dari hartanah ke klinik ke e-commerce — hasilnya sama: lebih leads, lebih sales.
          </p>
        </div>

        {/* 3 Full Testimonial Cards Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header: Stars & Badge */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <span className={`inline-flex text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${t.badge_color}`}>
                    {t.badge_text}
                  </span>
                </div>

                {/* Quote Content */}
                <div className="relative pt-2">
                  <span className="absolute -top-3 -left-2 text-6xl text-amber-400/10 font-serif leading-none select-none">“</span>
                  <h4 className="text-white font-bold text-base leading-snug italic relative z-10">
                    {t.quote_headline}
                  </h4>
                  <p className="text-slate-350 text-sm leading-relaxed mt-2">
                    {t.quote_body}
                  </p>
                </div>
              </div>

              {/* Separator & Footer details */}
              <div className="border-t border-white/5 mt-6 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-slate-800 shrink-0">
                    <Image
                      src={t.avatar_image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-slate-200 font-bold text-sm leading-none">{t.name}</h5>
                    <span className="text-slate-400 text-xs mt-1 block leading-none">{t.role}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl" title={t.industry}>{t.industry_icon}</span>
                  <span className="text-[9px] font-mono font-bold text-slate-500 block mt-0.5 leading-none">{t.industry}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Aggregate Proof Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-10 max-w-3xl mx-auto shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="py-2 sm:py-0">
              <div className="text-3xl font-black font-mono text-white">⭐ 4.9/5</div>
              <div className="text-xs text-slate-350 font-medium mt-1">Purata Rating Dari 47 Klien</div>
            </div>
            <div className="py-2 sm:py-0 sm:px-4">
              <div className="text-3xl font-black font-mono text-white">📈 +30%</div>
              <div className="text-xs text-slate-350 font-medium mt-1">Purata Kenaikan Kadar Conversion</div>
            </div>
            <div className="py-2 sm:py-0 sm:px-4">
              <div className="text-3xl font-black font-mono text-white">⚡ 100%</div>
              <div className="text-xs text-slate-350 font-medium mt-1">Menepati Tempoh SLA</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
