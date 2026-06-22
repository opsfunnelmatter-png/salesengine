"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";
import LogoMarquee from "./LogoMarquee";

export default function HeroSectionGroup() {
  const { scrollY } = useScroll();
  // Parallax translation for the shared background grid lines
  const gridY = useTransform(scrollY, [0, 800], [0, 180]);

  return (
    <div className="relative bg-[#0B1329] w-full overflow-hidden">
      {/* SHARED MASKED GRID-LINES PARALLAX BACKGROUND */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-[10%] -bottom-[10%] left-0 right-0 bg-grid-lines-masked pointer-events-none z-0" 
        style={{ 
          y: gridY,
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 150px, rgba(0,0,0,1) calc(100% - 80px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 150px, rgba(0,0,0,1) calc(100% - 80px), transparent 100%)"
        }}
      />
      
      {/* Background Ambient Glows shared across both sections */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_65%)] pointer-events-none blur-3xl z-0" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.04)_0%,transparent_65%)] pointer-events-none blur-3xl z-0" />

      {/* Hero Component */}
      <Hero />

      {/* Logo Marquee Component */}
      <LogoMarquee />
    </div>
  );
}
