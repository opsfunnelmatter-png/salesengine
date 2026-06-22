"use client";

import React from "react";
import { Send, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Isi Borang (5 Minit) — Hari 0",
      desc: "Isi borang ringkas dalam 5 minit. Kongsi apa yang anda jual, siapa pelanggan anda, dan apa yang anda nak orang buat di website tu. Kami akan hubungi anda untuk perbincangan.",
      microcopy: "Tiada meeting panjang. Tiada Zoom call yang membazirkan masa anda.",
      icon: Send,
      image: "/images/step-form-mockup.png",
    },
    {
      step: "02",
      title: "Kami Buat Semua, Anda Review — Hari 1-2",
      desc: "Kami rangka visual, tulis copywriting jualan, dan siapkan draf pertama. Anda hanya perlu review dan bagi thumbs up. Tak faham sesuatu? Kami terangkan dalam bahasa manusia, bukan bahasa IT.",
      microcopy: "Copywriting jualan termasuk. Anda tak perlu tulis satu ayat pun.",
      icon: FileText,
      image: "/images/step-design-mockup.png",
    },
    {
      step: "03",
      title: "Launch — Website Live & Ad-Ready — Hari 3",
      desc: "Domain di-connect. Pixel iklan dipasang (Meta, Google, TikTok). Dashboard leads anda disiapkan. Website anda go-live dan bersedia untuk receive trafik iklan dari minit pertama.",
      microcopy: "72 jam dari borang ke live. Atau refund penuh. Itulah janji kami.",
      icon: Globe,
      image: "/images/step-live-mockup.png",
    },
  ];

  return (
    <section id="process" className="relative z-10 w-full bg-transparent py-24 md:py-32 text-slate-200 overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 shadow-sm">
            DARI BORANG KE LIVE — 72 JAM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
            3 Langkah. 72 Jam.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)] block mt-2">Website Anda Live Dan Bersedia Untuk Iklan.</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
            Anda isi borang ringkas. Kami buat selebihnya. Senang macam tu.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[80px] left-[15%] right-[15%] h-0.5 z-0 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-white/5 via-primary/40 to-white/5" />
            {/* Animated dots */}
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                />
              ))}
            </div>
          </div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col group hover:border-primary/30 transition-all duration-300 shadow-2xl shadow-black/30 z-10"
              >
                {/* Glow bar */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Step Illustration */}
                <div className="w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5 mb-4" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-6">
                  {/* Top content */}
                  <div className="space-y-4">
                    {/* Step Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                        LANGKAH {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:text-[#0B1329] group-hover:bg-primary transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2 text-left">
                      <h4 className="text-lg font-black text-white group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom microcopy */}
                  {item.microcopy && (
                    <p className="text-[10px] font-mono font-bold text-primary uppercase tracking-wide border-t border-white/5 pt-3">
                      ⚡ {item.microcopy}
                    </p>
                  )}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14 space-y-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative overflow-hidden group inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-black text-sm px-8 py-4 rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
            <span className="relative z-10">Hubungi Kami Sekarang →</span>
          </button>
          <p className="text-xs text-slate-500 font-mono">Percuma. 3 soalan. Jawab dalam 60 saat.</p>
          {/* Bridge to Backstory */}
          <p className="text-xs text-slate-500 font-mono pt-2 max-w-sm mx-auto leading-relaxed">
            Dan orang yang buat semua tu untuk anda —{" "}
            <span className="text-slate-400 font-bold">pasukan yang pernah berada di tempat yang sama dengan anda.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
