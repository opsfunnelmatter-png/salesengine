import React from "react";
import HeroV2 from "@/components/HeroV2";
import RealitiPahit from "@/components/RealitiPahit";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import PerformanceShowcase from "@/components/PerformanceShowcase";
import WidgetShowcase from "@/components/WidgetShowcase";
import Backstory from "@/components/Backstory";
import HowItWorks from "@/components/HowItWorks";
import UrgencyStrip from "@/components/UrgencyStrip";
import PricingV2 from "@/components/PricingV2";
import GuaranteeV2 from "@/components/GuaranteeV2";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import BottomCTA from "@/components/BottomCTA";
import FixedBackground from "@/components/FixedBackground";

export default function HomeV2() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1329] relative text-slate-200 overflow-x-hidden">
      {/* Viewport-Fixed Global Background */}
      <FixedBackground />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {/* Hero Section V2 (Contains Integrated Navbar & Logo Marquee) */}
        <HeroV2 />

        {/* Realiti Pahit Comparison Section */}
        <RealitiPahit />

        {/* Portfolio Showcase */}
        <Portfolio />

        {/* Testimonials Showcase */}
        <Testimonials />

        {/* Performance Statistics Comparison - HIDDEN
        <PerformanceShowcase />
        */}

        {/* Interactive CRO Widgets Showcase - HIDDEN
        <WidgetShowcase />
        */}
        
        {/* Founders Transparent Backstory */}
        <Backstory />

        {/* 3-Step Timeline Process (NEW Fasa 6 Element) */}
        <HowItWorks />

        {/* Urgency Progress Strip - TEMPORARILY HIDDEN
        <UrgencyStrip />
        */}

        {/* Pricing Matrix & Checkout Bumps V2 */}
        <PricingV2 />

        {/* Jaminan Refund 48 Jam V2 */}
        <GuaranteeV2 />

        {/* FAQ Section */}
        <FAQ />

        {/* Bottom Call to Action Scroll-Up */}
        <BottomCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 bg-[#070C19]/80 backdrop-blur-md relative z-10 text-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left mb-12">
            {/* Logo/Brand column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF9900] flex items-center justify-center text-white font-black text-base shadow-lg shadow-[#FF9900]/20 select-none">
                  A
                </div>
                <span className="font-extrabold text-white text-base tracking-wider uppercase">AROS SYSTEM</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[280px]">
                Membina sistem jualan automatik 24/7 untuk pemilik bisnes Malaysia.
              </p>
            </div>

            {/* Corporate Info column */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                CORPORATE INFO
              </h4>
              <p className="font-extrabold text-white text-xs tracking-tight">
                BROMOVER RESOURCES SDN. BHD.
              </p>
              <p className="text-xs text-slate-400 font-mono">
                SSM REG: 201901003230 (1312556-H)
              </p>
            </div>

            {/* Registered Office column */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                REGISTERED OFFICE
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Unit B-3A-22, 4th Floor, Block B,<br />
                Ativo Plaza @ Damansara Avenue,<br />
                52200 Kuala Lumpur, Wilayah Persekutuan.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-white/5 my-8" />

          {/* Middle Section: Legal Disclaimer */}
          <div className="text-[10px] font-mono text-slate-500 leading-relaxed max-w-5xl mx-auto text-justify md:text-center mb-8">
            <p>
              Disclaimer: This website is not part of the Facebook, Instagram, TikTok, or Twitter/X websites, nor is it affiliated with Meta Platforms, Inc., ByteDance Ltd., or X Corp. Additionally, this site is NOT endorsed by Facebook, Instagram, TikTok, or Twitter/X in any way. Facebook and Instagram are trademarks of Meta Platforms, Inc. TikTok is a trademark of ByteDance Ltd. Twitter/X is a trademark of X Corp.
            </p>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p>© 2026 Bromover Resources Sdn. Bhd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Footer */}
      <StickyCTA />
    </div>
  );
}
