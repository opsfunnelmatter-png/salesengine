"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function FixedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking the cursor
  const springConfig = { stiffness: 120, damping: 25 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Spotlight radial gradient mask
  const spotlightBg = useMotionTemplate`radial-gradient(circle 350px at ${mouseXSpring}px ${mouseYSpring}px, rgba(234, 179, 8, 0.12) 0%, transparent 100%)`;

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B1329]">
      {/* 1. Spotlight Mask (follows mouse globally) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{ background: spotlightBg }}
      />

      {/* 2. Coned Spotlight at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[650px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_45%,transparent_75%)] origin-top z-10" />

      {/* 3. Grid Lines (Fixed in Viewport) */}
      <div 
        className="absolute -top-[50px] -left-[50px] -right-[50px] -bottom-[50px] bg-grid-lines-masked opacity-30 z-0" 
        style={{ 
          maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 150px, rgba(0,0,0,1) calc(100% - 80px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 150px, rgba(0,0,0,1) calc(100% - 80px), transparent 100%)"
        }}
      />

      {/* 4. Ambient Glow Orbs (Fixed in Viewport) */}
      {/* Top primary blue orb */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(234,179,8,0.05)_0%,transparent_70%)] rounded-full animate-orb-drift-1" />
      
      {/* Middle amber/yellow orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(251,191,36,0.04)_0%,transparent_70%)] rounded-full animate-orb-drift-2" />
      
      {/* Center glowing gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_60%)] blur-3xl" />
    </div>
  );
}
