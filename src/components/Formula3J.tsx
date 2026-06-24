"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Zap, Coins } from "lucide-react";

export default function Formula3J() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  } as const;

  const pillars = [
    {
      title: "JELAS",
      subtitle: "Strategic UI/UX & Flow",
      desc: "Kami tak sumbat semua benda dalam satu page sampai semak. Kami susun aliran maklumat ikut psikologi pelanggan membaca. Masuk, faham, nak beli.",
      icon: Map,
      color: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "LAJU",
      subtitle: "Next-Gen Engine",
      desc: "Dijamin loading kurang 1 saat. Trafik dari Google Ads takkan membazir sebab menunggu page berpusing-pusing.",
      icon: Zap,
      color: "from-amber-400 to-yellow-500",
      bgGlow: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      iconColor: "text-amber-400",
    },
    {
      title: "MENJUAL",
      subtitle: "CRO & Copywriting",
      desc: "Kami bantu drafkan ayat jualan yang memikat. Butang CTA diletakkan di zon mudah klik (Hot Zone) pada paparan telefon pintar.",
      icon: Coins,
      color: "from-emerald-400 to-teal-500",
      bgGlow: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section className="relative z-10 w-full bg-transparent py-24 text-slate-200 overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.02)_0%,transparent_60%)] pointer-events-none blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#FF9900] bg-[#FF9900]/10 px-3.5 py-1.5 rounded-full border border-[#FF9900]/20 shadow-sm">
              🎯 FORMULA 3J
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
            Kenapa Pemilik Bisnes Pilih Kami{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)] block mt-2">
              Untuk Bina Website Mereka?
            </span>
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white/5 ${pillar.borderColor} border rounded-[32px] p-8 flex flex-col justify-between shadow-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Ambient backglow */}
                <div className={`absolute -top-16 -right-16 w-32 h-32 ${pillar.bgGlow} rounded-full blur-3xl pointer-events-none`} />

                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bgGlow} border ${pillar.borderColor} flex items-center justify-center ${pillar.iconColor} shadow-md`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Header Texts */}
                  <div className="space-y-1">
                    <h3 className={`text-2xl font-black bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
