"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LogoMarquee() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getGlowColor = (id: string) => {
    switch (id) {
      case 'nextjs':
      case 'vercel':
      case 'billplz':
        return 'rgba(255, 255, 255, 0.4)';
      case 'railway':
        return 'rgba(243, 0, 180, 0.4)';
      case 'googleads':
        return 'rgba(60, 139, 217, 0.4)';
      case 'meta':
      case 'curlec':
        return 'rgba(0, 100, 224, 0.4)';
      case 'replyla':
        return 'rgba(0, 240, 255, 0.4)';
      case 'googleanalytics':
        return 'rgba(244, 180, 0, 0.4)';
      case 'senangpay':
        return 'rgba(0, 168, 89, 0.4)';
      case 'toyyibpay':
        return 'rgba(6, 118, 71, 0.4)';
      case 'stripe':
        return 'rgba(99, 91, 255, 0.4)';
      case 'hostinger':
        return 'rgba(103, 61, 230, 0.4)';
      default:
        return 'rgba(255, 255, 255, 0.3)';
    }
  };

  // 12 OFFICIAL BRAND LOGOS - High-fidelity exact SVG paths with consistent text labels
  const logos = [
    {
      name: 'next.js',
      id: 'nextjs',
      colorClass: 'text-white',
      textColor: 'text-white',
      fontClass: 'font-nextjs',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
        </svg>
      )
    },
    {
      name: 'vercel',
      id: 'vercel',
      colorClass: 'text-white',
      textColor: 'text-white',
      fontClass: 'font-vercel',
      svg: (
        <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475l12 21.05z" />
        </svg>
      )
    },
    {
      name: 'railway',
      id: 'railway',
      colorClass: 'text-[#F300B4]',
      textColor: 'text-white',
      fontClass: 'font-railway',
      svg: (
        <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z" />
        </svg>
      )
    },
    {
      name: 'Google Ads',
      id: 'googleads',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-google',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 250.8 312.8">
          <path fill="#3C8BD9" d="M85.9,28.6c2.4-6.3,5.7-12.1,10.6-16.8c19.6-19.1,52-14.3,65.3,9.7c10,18.2,20.6,36,30.9,54c17.2,29.9,34.6,59.8,51.6,89.8c14.3,25.1-1.2,56.8-29.6,61.1c-17.4,2.6-33.7-5.4-42.7-21c-15.1-26.3-30.3-52.6-45.4-78.8c-0.3-0.6-0.7-1.1-1.1-1.6c-1.6-1.3-2.3-3.2-3.3-4.9c-6.7-11.8-13.6-23.5-20.3-35.2c-4.3-7.6-8.8-15.1-13.1-22.7c-3.9-6.8-5.7-14.2-5.5-22C83.6,36.2,84.1,32.2,85.9,28.6" />
          <path fill="#FABC04" d="M85.9,28.6c-0.9,3.6-1.7,7.2-1.9,11c-0.3,8.4,1.8,16.2,6,23.5C101,82,112,101,122.9,120c1,1.7,1.8,3.4,2.8,5c-6,10.4-12,20.7-18.1,31.1c-8.4,14.5-16.8,29.1-25.3,43.6c-0.4,0-0.5-0.2-0.6-0.5c-0.1-0.8,0.2-1.5,0.4-2.3c4.1-15,0.7-28.3-9.6-39.7c-6.3-6.9-14.3-10.8-23.5-12.1c-12-1.7-22.6,1.4-32.1,8.9c-1.7,1.3-2.8,3.2-4.8,4.2c-0.4,0-0.6-0.2-0.7-0.5c4.8-8.3,9.5-16.6,14.3-24.9C45.5,98.4,65.3,64,85.2,29.7C85.4,29.3,85.7,29,85.9,28.6" />
          <path fill="#34A852" d="M11.8,158c1.9-1.7,3.7-3.5,5.7-5.1c24.3-19.2,60.8-5.3,66.1,25.1c1.3,7.3,0.6,14.3-1.6,21.3c-0.1,0.6-0.2,1.1-0.4,1.7c-0.9,1.6-1.7,3.3-2.7,4.9c-8.9,14.7-22,22-39.2,20.9C20,225.4,4.5,210.6,1.8,191c-1.3-9.5,0.6-18.4,5.5-26.6c1-1.8,2.2-3.4,3.3-5.2C11.1,158.8,10.9,158,11.8,158" />
        </svg>
      )
    },
    {
      name: 'Meta',
      id: 'meta',
      colorClass: 'text-[#0064E0]',
      textColor: 'text-white',
      fontClass: 'font-meta',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
        </svg>
      )
    },
    {
      name: 'reply.la',
      id: 'replyla',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-replyla',
      svg: (
        <svg className="h-7 w-auto text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: 'Google Analytics',
      id: 'googleanalytics',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-google',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 24 24">
          <path fill="#F4B400" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619z" />
          <path fill="#F9AB00" d="M4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726z" />
          <path fill="#E37400" d="M12.0054 9.045c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z" />
        </svg>
      )
    },
    {
      name: '',
      id: 'senangpay',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-senangpay',
      svg: (
        <div className="flex items-center space-x-1 font-sans font-extrabold tracking-tight text-[#00A859] leading-none">
          <span className="text-2xl">senang</span>
          <span className="text-2xl relative">Pay<span className="absolute -top-1 -right-4 text-xs text-[#00A859]">✓</span></span>
        </div>
      )
    },
    {
      name: '',
      id: 'curlec',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-curlec',
      svg: (
        <div className="flex flex-col items-start font-sans leading-none text-[#0064E0]">
          <span className="text-2xl font-black tracking-tighter">curlec</span>
          <span className="text-[11px] tracking-widest uppercase opacity-70">by Razorpay</span>
        </div>
      )
    },
    {
      name: '',
      id: 'billplz',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-billplz',
      svg: (
        <div className="flex items-center font-sans font-semibold text-white tracking-tight leading-none text-2xl">
          <span className="text-white">bill</span>
          <span className="bg-[#00a7f7] text-white px-1.5 py-0.5 rounded-md text-xl font-black ml-0.5">plz</span>
        </div>
      )
    },
    {
      name: '',
      id: 'toyyibpay',
      colorClass: '',
      textColor: 'text-white',
      fontClass: 'font-toyyibpay',
      svg: (
        <div className="flex items-center font-sans font-extrabold text-2xl tracking-tight leading-none">
          <span className="text-[#067647]">toyyib</span>
          <span className="text-[#8cc63f]">Pay</span>
        </div>
      )
    },
    {
      name: 'stripe',
      id: 'stripe',
      colorClass: 'text-[#635BFF]',
      textColor: 'text-white',
      fontClass: 'font-stripe',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
        </svg>
      )
    },
    {
      name: 'hostinger',
      id: 'hostinger',
      colorClass: 'text-[#673DE6]',
      textColor: 'text-white',
      fontClass: 'font-hostinger',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.415 0v7.16l5.785 3.384V2.949L16.415 0ZM1.8 0v11.237h18.815L14.89 8.09l-7.457-.003V3.024L1.8 0Zm14.615 20.894v-5.019l-7.514-.005c.007.033-5.82-3.197-5.82-3.197l19.119.091V24l-5.785-3.106ZM1.8 13.551v7.343l5.633 2.949v-6.988L1.8 13.551Z" />
        </svg>
      )
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="w-full bg-transparent py-14 relative overflow-hidden"
    >

      {/* Import brand Google Fonts and style them realistically */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-infinite-marquee:hover {
          animation-play-state: paused;
        }

        /* Brand Typography classes */
        .font-nextjs {
          font-family: var(--font-inter), sans-serif;
          font-weight: 800;
          letter-spacing: -0.06em;
        }
        .font-vercel {
          font-family: var(--font-inter), sans-serif;
          font-weight: 700;
          letter-spacing: -0.05em;
        }
        .font-railway {
          font-family: var(--font-space-grotesk), sans-serif;
          font-weight: 700;
          letter-spacing: -0.04em;
        }
        .font-google {
          font-family: 'Product Sans', 'Google Sans', var(--font-outfit), sans-serif;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .font-meta {
          font-family: var(--font-inter), sans-serif;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .font-wordpress {
          font-family: var(--font-eb-garamond), Georgia, serif;
          font-weight: 700;
          font-size: 1.45rem !important;
          letter-spacing: -0.01em;
        }
        .font-elementor {
          font-family: var(--font-inter), sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .font-hostinger {
          font-family: var(--font-inter), sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .font-stripe {
          font-family: var(--font-inter), sans-serif;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: lowercase;
        }

        /* Default fallback styling for senangPay, Curlec, and reply.la */
        .font-senangpay, .font-curlec, .font-replyla {
          font-family: var(--font-jakarta), sans-serif;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
      `}} />

      {/* Section Header Label */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center relative z-20 mt-4">
        <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase font-semibold">
          DIPERCAYAI & DIINTEGRASIKAN DENGAN
        </span>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Soft edge blending masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1329] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1329] to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-marquee flex items-center gap-20">
          
          {/* Loop 1 */}
          {logos.map((logo, index) => {
            const isDimmed = hoveredId !== null && hoveredId !== logo.id;
            const isHovered = hoveredId === logo.id;
            return (
              <motion.div 
                key={`loop1-${logo.id}-${index}`} 
                onHoverStart={() => setHoveredId(logo.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isDimmed ? "opacity-30 filter grayscale" : "opacity-100"
                } group/item cursor-pointer`}
                style={{
                  filter: isHovered ? `drop-shadow(0 0 12px ${getGlowColor(logo.id)})` : undefined
                }}
              >
                <div className={`${logo.colorClass}`}>
                  {logo.svg}
                </div>
                <span className={`text-xl text-white ${logo.fontClass}`}>
                  {logo.name}
                </span>
              </motion.div>
            );
          })}

          {/* Loop 2 */}
          {logos.map((logo, index) => {
            const isDimmed = hoveredId !== null && hoveredId !== logo.id;
            const isHovered = hoveredId === logo.id;
            return (
              <motion.div 
                key={`loop2-${logo.id}-${index}`} 
                onHoverStart={() => setHoveredId(logo.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isDimmed ? "opacity-30 filter grayscale" : "opacity-100"
                } group/item cursor-pointer`}
                style={{
                  filter: isHovered ? `drop-shadow(0 0 12px ${getGlowColor(logo.id)})` : undefined
                }}
              >
                <div className={`${logo.colorClass}`}>
                  {logo.svg}
                </div>
                <span className={`text-xl text-white ${logo.fontClass}`}>
                  {logo.name}
                </span>
              </motion.div>
            );
          })}

        </div>
      </div>
    </motion.section>
  );
}
