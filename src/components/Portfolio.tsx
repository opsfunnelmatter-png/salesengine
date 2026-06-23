"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Zap, Eye, MousePointer, Smartphone, ShieldCheck, Sparkles, Layout, ArrowDown, ArrowUp, ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useSpring, useMotionValue, animate } from "framer-motion";

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  speed: string;
  speedLabel: string;
  features: string[];
  demoUrl?: string;
  headline?: string;
  isIframe?: boolean;
  isSingleScreen?: boolean;
}

const TEMPLATES: Template[] = [
  {
    id: "petworld",
    name: "Pet World Makanan Kucing",
    category: "Produk Makanan Haiwan",
    description: "Poster jualan makanan kucing organik dan premium. Reka bentuk bersih dengan visual kucing oren yang sangat menarik perhatian pencinta haiwan.",
    image: "/images/Gemini_Generated_Image_yhmih3yhmih3yhmi.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Visual pembungkusan beg makanan kucing dengan bahan salmon segar",
      "Lencana jaminan kelulusan doktor veterinar tempatan",
      "Struktur minimalis dengan tumpuan penuh kepada haiwan peliharaan",
      "Tawaran promosi harga menarik dengan butang tindakan WhatsApp"
    ],
    headline: "Pet World — Poster Jualan Makanan Kucing Organik (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "fitmelt",
    name: "FitMelt Suplemen",
    category: "Suplemen Kesihatan & Diet",
    description: "Landing page jualan suplemen kapsul pelangsingan badan. Reka bentuk moden pastel dengan penerangan faedah komprehensif dan testimoni doktor.",
    image: "/images/Gemini_Generated_Image_y4uq9dy4uq9dy4uq.png",
    speed: "0.2",
    speedLabel: "20x lebih pantas daripada WordPress biasa",
    features: [
      "Kombinasi warna ungu dan kuning pastel yang mesra pengguna",
      "Lencana pengesahan doktor perubatan bertauliah untuk membina autoriti",
      "Ikon kemas untuk faedah (lemak, kulit berseri, tidur lena, rambut)",
      "Tawaran harga promosi jualan yang telus dan jelas"
    ],
    headline: "FitMelt — Landing Page Suplemen Pembakar Lemak Kapsul",
    isSingleScreen: true,
  },
  {
    id: "ignitecore",
    name: "IgniteCore Burner",
    category: "Suplemen Pembakar Lemak",
    description: "Poster jualan pembakar lemak degil berasaskan pengaktifan selular. Reka bentuk dinamik dengan visual model cergas dan penerangan sains metabolisme.",
    image: "/images/Gemini_Generated_Image_tjqgo2tjqgo2tjqg.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Skim warna kontras tinggi teal-emas yang bertenaga",
      "Slogan tarikan metabolisme 'Aktifkan Kuasa Pembakaran Dari Dalam'",
      "Ikon pembakar lemak klinikal 15X mempercepatkan pembakaran",
      "Penilaian pengguna 4.8/5 bintang berdasarkan 15,000+ pengguna"
    ],
    headline: "IgniteCore — Poster Jualan Formula Pembakar Lemak Selular (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "dermavant",
    name: "Derma-Vant Serum",
    category: "Skincare & Penjagaan Kulit",
    description: "Poster jualan serum parut jerawat, parut lama dan parut accident. Menggunakan grid visual jenis parut dan anugerah formula untuk menutup keraguan pembeli.",
    image: "/images/Gemini_Generated_Image_pa3i24pa3i24pa3i.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Headline jaminan pemudaran parut seawal 3 hari",
      "Ikon anugerah inovasi terkini V5.0 & lencana 1 Juta botol terjual",
      "Visualisasi parut jerawat, parut lama, parut melecur & parut bedah",
      "Slogan dermatologi terbukti 'Penyelamat Kulit Sempurna'"
    ],
    headline: "Derma-Vant — Poster Jualan Serum Pemulihan Parut Kulit (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "nurcahaya",
    name: "Infaq Al-Quran",
    category: "Kempen CSR & Kebajikan",
    description: "Poster sumbangan Infaq Al-Quran. Reka bentuk bertemakan Islami premium dengan pengesahan zakat negeri bagi membina ketelusan kebajikan.",
    image: "/images/Gemini_Generated_Image_qhhnn3qhhnn3qhhn.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Rekaan bingkai geometri arabesque emas-hijau yang elegan",
      "Mesej rohani 'Setiap Ayat Dibaca, Amalan Jariyah Untuk Anda'",
      "Paparan logo agensi zakat negeri (Zakat Perak) untuk ketelusan dana",
      "Visual anak-anak tahfiz tersenyum menyokong emosi penderma"
    ],
    headline: "Yayasan Nur Cahaya — Poster Kempen Infaq Al-Quran Jariah (Single Screen)",
    isSingleScreen: true,
  },

  {
    id: "melt10",
    name: "Melt-10 Kemam",
    category: "Suplemen Slimming Coklat",
    description: "Poster jualan tablet kunyah coklat pelangsing badan. Reka bentuk bertenaga yang menonjolkan visual produk dan kemudahan menurunkan berat badan tanpa derita.",
    image: "/images/Gemini_Generated_Image_kevg56kevg56kevg.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Konsep jualan kemam coklat berkilo-kilo turun dalam 7 hari",
      "Visual penimbang berat yang membina keinginan pengguna untuk kurus",
      "Lencana rasmi 100% Halal JAKIM untuk pasaran Muslim tempatan",
      "Promosi 'Beli 2 Percuma 1' dengan butang jaminan pulangan wang"
    ],
    headline: "Melt-10 — Poster Jualan Tablet Kemam Pelangsing Badan (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "biocore",
    name: "BioCore Sunnah Gold",
    category: "Kesihatan Jantung & Sendi",
    description: "Poster jualan produk kapsul kesihatan 3 serangkai. Menampilkan logo-logo media cetak dan penyiaran tempatan untuk membina status autoriti jenama segera.",
    image: "/images/Gemini_Generated_Image_rmz10lrmz10lrmz1.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Gaya visual klinikal kemas berlatarkan marmar putih premium",
      "Pendedahan logo publisiti televisyen & akhbar (TV3, Kosmo, KKM)",
      "Lencana Certified Organic Ingredients untuk produk bebas bau hanyir",
      "Penerangan ramuan minyak zaitun murni dan kompleks tocotrienol"
    ],
    headline: "BioCore — Poster Jualan Suplemen Jantung & Kesihatan Am (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "majakani",
    name: "Majakani Plus",
    category: "Suplemen & Kesihatan Wanita",
    description: "Poster jualan satu skrin (single screen ad) untuk kapsul herba wanita. Reka bentuk tersusun rapi memaparkan visual botol produk, kelulusan KKM, dan wajah pengguna berpuas hati.",
    image: "/images/Gemini_Generated_Image_nkc27vnkc27vnkc2.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Copywriting emosional menyasarkan penjagaan dalaman wanita",
      "Lencana kelulusan rasmi KKM Approved Certified untuk kredibiliti tinggi",
      "Susun atur satu skrin dioptimumkan untuk kadar penukaran (CRO)",
      "Butang tempahan WhatsApp terus dengan jaminan 100% wang dikembalikan"
    ],
    headline: "Herbal Majakani Plus — Poster Jualan Suplemen Intim Wanita (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "herbani",
    name: "Herbani Wak Aman",
    category: "Minyak Sapuan & Sakit Sendi",
    description: "Poster jualan minyak sapuan sendi dan lutut. Copywriting memfokuskan emosi kekeluargaan melalui visual mesra datuk dan cucu berlari cergas di taman.",
    image: "/images/Gemini_Generated_Image_lobypzlobypzloby.png",
    speed: "0.1",
    speedLabel: "Pemuatan serta-merta (Single Screen)",
    features: [
      "Headline berasaskan emosi kebebasan bergerak bebas sakit lutut",
      "Visual botol herba eksklusif dengan penutup kayu di atas podium",
      "Penerangan visual kesan 15X Efektif Semulajadi tanpa bahan kimia",
      "Jaminan wang dikembalikan jika tidak berkesan untuk keyakinan pembeli"
    ],
    headline: "Herbani Wak Aman — Poster Rawatan Sendi & Sakit Lutut (Single Screen)",
    isSingleScreen: true,
  },
  {
    id: "lauratynan",
    name: "Kursus Live 3 Hari",
    category: "Kursus & Pendidikan Profesional",
    description: "Landing page jualan kursus intensif keusahawanan bertaraf mewah. Memaparkan logo publisiti akhbar kewangan terkemuka dunia.",
    image: "/images/Gemini_Generated_Image_uiy1uquiy1uquiy1.png",
    speed: "0.2",
    speedLabel: "15x lebih pantas daripada WordPress biasa",
    features: [
      "Reka bentuk bersih berkelas tinggi dengan kombinasi warna emas & krim",
      "Senarai anugerah media antarabangsa (Forbes, Financial Times, Yahoo Finance)",
      "Penerangan modul minda usahawan, bisnes mapan dan perkongsian mesej",
      "Susunan kad tawaran hadiah bonus bernilai tinggi"
    ],
    headline: "Laura Tynan — Landing Page Pendaftaran Kursus Keusahawanan",
    isSingleScreen: true,
  },
  {
    id: "drsmile_mobile",
    name: "Dr. Smile (Mobile)",
    category: "Servis Temujanji & Kesihatan Lokal",
    description: "Tangkapan skrin paparan mudah alih (Samsung Galaxy S20 Ultra) untuk Klinik Pergigian Dr. Smile. Dioptimumkan sepenuhnya untuk navigasi telefon pintar.",
    image: "/images/screencapture-localhost-3000-portfolio-dr-smile-2026-06-22-00_01_52.png",
    speed: "0.2",
    speedLabel: "18x lebih pantas daripada WordPress biasa",
    features: [
      "Susun atur temujanji gigi mesra telefon pintar",
      "Borang saringan rawatan interaktif berimpak tinggi",
      "Visual galeri sebelum & selepas rawatan gigi",
      "Peta lokasi klinik Waze & Google Maps sekali klik"
    ],
    headline: "Dr. Smile — Landing Page Temujanji Rawatan Gigi (Mobile View)",
  },
  {
    id: "bromover",
    name: "Bromover Travel",
    category: "Pakej Pelancongan & Kembara Bromo",
    description: "Tangkapan skrin panjang pakej pelancongan eksklusif ke Gunung Bromo, Indonesia. Memaparkan itinerari lengkap dan galeri gambar pelancongan memukau.",
    image: "/images/screencapture-aros-bromover-2026-06-22-01_46_51.png",
    speed: "0.2",
    speedLabel: "20x lebih pantas daripada WordPress biasa",
    features: [
      "Copywriting tarikan emosi & gambar kembara memukau",
      "Struktur itinerari hari demi hari yang sangat terperinci",
      "Borang tempahan WhatsApp terus dengan slot harga promosi",
      "Pakej harga telus merangkumi penginapan & pemandu arah"
    ],
    headline: "Bromover — Landing Page Pakej Kembara Gunung Bromo",
  },
  {
    id: "grademotion",
    name: "Grademotion Creative",
    category: "Servis Videografi & Produksi Video",
    description: "Tangkapan skrin panjang agensi produksi video korporat dan perkahwinan. Memaparkan showreel video and kad pakej harga bertingkat.",
    image: "/images/screencapture-grademotion-2026-06-22-01_46_17.png",
    speed: "0.2",
    speedLabel: "20x lebih pantas daripada WordPress biasa",
    features: [
      "Paparan galeri video showreel yang dioptimumkan",
      "Struktur pakej harga bertingkat mengikut bajet syarikat",
      "Senarai pelanggan korporat terdahulu (Logos)",
      "Borang sebut harga interaktif untuk tempahan kru"
    ],
    headline: "Grademotion — Landing Page Agensi Videografi & Kreatif",
  },
  {
    id: "smilebright",
    name: "Smile Bright Pergigian",
    category: "Rawatan Gigi Kanak-Kanak & Keluarga",
    description: "Tangkapan skrin panjang landing page pergigian keluarga. Reka bentuk mesra dengan copywriting penjinak trauma kanak-kanak.",
    image: "/images/screencapture-localhost-3000-portfolio-smile-bright-2026-06-22-00_33_13.png",
    speed: "0.2",
    speedLabel: "20x lebih pantas daripada WordPress biasa",
    features: [
      "Copywriting bertemakan penjinak trauma kanak-kanak",
      "Bahagian hadiah ganjaran (keberanian kid kit) selepas rawatan",
      "Borang tempahan mesra ibu bapa",
      "Senarai ulasan maklum balas positif keluarga"
    ],
    headline: "Smile Bright — Landing Page Pergigian Keluarga",
  },
  {
    id: "flowfest",
    name: "FlowFest UK Concert",
    category: "Landing Page Tiket Konsert & Festival",
    description: "Tangkapan skrin panjang festival muzik terbesar di United Kingdom. Reka bentuk bertenaga dengan kaunter masa tamat (countdown timer) untuk urgency.",
    image: "/images/screencapture-flowfest-co-uk-2026-06-21-23_35_38.png",
    speed: "0.3",
    speedLabel: "15x lebih pantas daripada WordPress biasa",
    features: [
      "Kaunter unduran masa (countdown timer) fasa tiket",
      "Paparan senarai artis jemputan (lineup) interaktif",
      "Integrasi sistem pembayaran pantas & pilihan jenis tiket",
      "Maklumat keselamatan & FAQ lengkap untuk pengunjung"
    ],
    headline: "FlowFest — Landing Page Festival & Konsert Muzik VVIP",
  },
  {
    id: "novanest",
    name: "NovaNest Real Estate",
    category: "Halaman Jualan Hartanah & Kondominium",
    description: "Tangkapan skrin panjang jualan projek kondominium mewah berdekatan KLCC. Memaparkan fasiliti, pelan lantai, dan borang pendaftaran VIP.",
    image: "/images/portfolio-novanest.png",
    speed: "0.2",
    speedLabel: "20x lebih pantas daripada WordPress biasa",
    features: [
      "Borang pendaftaran VIP & tempahan unit masa nyata",
      "Gubahan visual galeri fasiliti bertaraf 5-bintang",
      "Penerangan ROI & pelan jangka panjang pelaburan",
      "Peta interaktif kemudahan berdekatan (MRT & Mall)"
    ],
    headline: "NovaNest — Landing Page Pelancaran Kondominium Mewah",
  },
  {
    id: "urip",
    name: "Urip Layout Portfolio",
    category: "Landing Page Minimalis & Seni",
    description: "Tangkapan skrin panjang reka bentuk minimalis dengan fokus kepada seni visual. Reka bentuk bersih untuk hasil kerja kreatif.",
    image: "/images/portfolio-urip.png",
    speed: "0.1",
    speedLabel: "25x lebih pantas daripada WordPress biasa",
    features: [
      "Tipografi minimalis berimpak tinggi",
      "Galeri seni visual dengan kelajuan memuatkan segera",
      "Susun atur bersih (clean space) mengurangkan gangguan",
      "Pautan portfolio interaktif & butang hubungi"
    ],
    headline: "Urip Layout — Portofolio Minimalis & Agensi Seni Kreatif",
  },
];

function SpeedCountDown({ to }: { to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(1.0, to, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        node.textContent = value.toFixed(1);
      }
    });

    return () => controls.stop();
  }, [to]);

  return <span ref={nodeRef}>1.0</span>;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("petworld");
  const activeTemplate = TEMPLATES.find(t => t.id === activeTab) || TEMPLATES[0];
  const activeIndex = TEMPLATES.findIndex(t => t.id === activeTab);

  // Phone Mouse-Tracking 3D Tilt
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const phoneX = useMotionValue(0);
  const phoneY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 20 };
  const phoneRotateX = useSpring(phoneY, springConfig); // note: mouseY controls rotateX
  const phoneRotateY = useSpring(phoneX, springConfig); // note: mouseX controls rotateY

  const handlePhoneMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = phoneContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rY = (mouseX / (width / 2)) * 10; // max rotateY 10deg
    const rX = -(mouseY / (height / 2)) * 6; // max rotateX 6deg
    
    phoneX.set(rY);
    phoneY.set(rX);
  };

  const handlePhoneMouseLeave = () => {
    phoneX.set(0);
    phoneY.set(0);
  };

  // Entrance reveal variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 14 }
    }
  } as const;

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  } as const;

  const phoneEntranceVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.3 }
    }
  } as const;
  
  const handlePrevTemplate = () => {
    const prevIdx = (activeIndex - 1 + TEMPLATES.length) % TEMPLATES.length;
    setActiveTab(TEMPLATES[prevIdx].id);
  };

  const handleNextTemplate = () => {
    const nextIdx = (activeIndex + 1) % TEMPLATES.length;
    setActiveTab(TEMPLATES[nextIdx].id);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 20) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  const handleScrollClick = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (isAtBottom) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ top: 350, behavior: "smooth" });
    }
  };

  // Reset scroll when tab changes
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setIsAtBottom(false);
    }
  }, [activeTab]);

  return (
    <section id="portfolio" className="relative z-10 w-full bg-transparent py-24 text-slate-200 overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_60%)] pointer-events-none blur-3xl" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Copywriting & Switcher */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center w-full">
            
            {/* Static Section Header (Now inside Left Column) */}
            <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.span variants={badgeVariants} className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-md border border-primary/20 shadow-sm w-fit">
                  ⚡ DESIGN OPTIMIZED FOR CONVERSION
                </motion.span>
              <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl lg:text-[38px] font-black tracking-tight text-white leading-tight">
                Lihat Apa Yang Pelanggan Anda Bakal Tengok{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(234,179,8,0.25)]">
                  Dalam Masa Kurang Dari Sekelip Mata
                </span>
              </motion.h2>
              <motion.p variants={textVariants} className="text-slate-300 text-sm md:text-base font-medium leading-relaxed text-center lg:text-left">
                Bukan sekadar cantik. Setiap piksel, setiap baris teks, setiap butang — semua diposisikan secara strategik berdasarkan data conversion. Swipe, teka masa loading, dan nilai sendiri.
              </motion.p>
            </div>
 
            {/* Static General Speed & Features Checklist */}
            <div className="space-y-6 pt-6 border-t border-white/5 w-full">
              
              {/* Speed Metric Pill */}
              <div className="pt-1 flex justify-center lg:justify-start w-full">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-center">
                  ⚡ Purata Load 0.2s — Pemuatan Segera (20x Lebih Laju Dari WordPress)
                </span>
              </div>

              {/* Core Features Checkmarks */}
              <div className="space-y-3 pt-2 w-full">
                <p className="text-xs font-mono font-black text-slate-400 uppercase tracking-wider text-center lg:text-left">
                  🧩 Elemen Conversion Yang Dibina Dalam:
                </p>
                <div className="flex justify-center lg:justify-start w-full">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-md lg:max-w-none text-left">
                    {[
                      "Copywriting berimpak tinggi yang disusun berfokuskan jualan (CRO)",
                      "Reka bentuk UI/UX premium yang dioptimumkan sepenuhnya untuk mobile",
                      "Struktur halaman ultra-laju (Core Web Vitals hijau) mesra trafik iklan",
                      "Integrasi butang Call-to-Action (CTA) & borang saringan yang strategik"
                    ].map((feat, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-2.5 text-xs text-slate-350 font-medium leading-relaxed"
                      >
                        <ShieldCheck className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom CTA Row */}
            <div className="pt-4 border-t border-white/5 flex justify-center lg:justify-end w-full">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-[#0B1329] font-black text-xs px-6 py-3 rounded-xl shadow-md shadow-primary/10 hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden group w-full sm:w-auto justify-center"
              >
                {/* Shiny sweep animation glare */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0 animate-shiny-sweep" />
                <span className="flex items-center gap-2 relative z-10">
                  Hubungi Kami Sekarang
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-12 lg:mt-0 w-full">

            {/* SmartPhone Wrapper */}
            <motion.div
              ref={phoneContainerRef}
              onMouseMove={handlePhoneMouseMove}
              onMouseLeave={handlePhoneMouseLeave}
              variants={phoneEntranceVariants}
              animate={{ y: [0, -12, 0] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                rotateX: phoneRotateX,
                rotateY: phoneRotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              className="relative mx-auto w-[285px] h-[585px] bg-slate-950 rounded-[2.5rem] p-2.5 shadow-2xl ring-1 ring-slate-900/10 border-4 border-slate-800 flex flex-col cursor-pointer"
            >
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ml-auto mr-4" />
              </div>

              {/* Speaker Ear Piece */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1 bg-slate-800 rounded-full z-30" />

              {/* Inner Screen Frame */}
              <div className="relative w-full h-full rounded-[1.85rem] overflow-hidden bg-slate-900 flex flex-col border border-slate-900/40">
                
                {/* Mock Phone Status Bar */}
                <div className="bg-slate-900 text-[10px] font-mono font-bold text-slate-400 px-5 pt-3.5 pb-2 flex justify-between items-center select-none z-20">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px]">5G</span>
                    <Smartphone className="w-3 h-3 text-slate-450" />
                  </div>
                </div>

                {/* Main Scrollable Screenshot Area */}
                <div 
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex-1 w-full overflow-y-auto scrollbar-none relative group bg-slate-950 scroll-smooth"
                >
                  <div className="w-full h-full relative min-h-full">
                    {activeTemplate.isIframe ? (
                      <iframe
                        src={activeTemplate.demoUrl}
                        title={activeTemplate.name}
                        className="w-full h-full border-none pointer-events-none select-none"
                        style={{ height: "100%", width: "100%" }}
                      />
                    ) : (
                      <Image
                        src={activeTemplate.image}
                        alt={`Long screenshot of ${activeTemplate.name} template`}
                        width={300}
                        height={activeTemplate.isSingleScreen ? 600 : 1800}
                        priority={true}
                        className={activeTemplate.isSingleScreen 
                          ? "w-full h-full object-cover object-top select-none pointer-events-none" 
                          : "w-full h-auto object-top select-none pointer-events-none"
                        }
                      />
                    )}
                  </div>
                </div>


                {/* Floating Mockup WhatsApp Button */}
                <div className="absolute bottom-8 right-3 z-30 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 pointer-events-none select-none">
                  <svg className="w-5.5 h-5.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>

                {/* Mock Phone Home Bar Indicator */}
                <div className="bg-slate-900 py-2 flex justify-center items-center z-20">
                  <div className="w-28 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>

              {/* Side Volume Buttons visual shadow */}
              <div className="absolute left-[-6px] top-24 w-1 h-10 bg-slate-800 rounded-l" />
              <div className="absolute left-[-6px] top-38 w-1 h-10 bg-slate-800 rounded-l" />
              {/* Power Button visual shadow */}
              <div className="absolute right-[-6px] top-32 w-1 h-12 bg-slate-800 rounded-r" />

            </motion.div>

            {/* Template Navigation Controls (< >) */}
            <div className="mt-6 flex items-center gap-4 bg-slate-900/80 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-2xl shadow-sm">
              <button 
                onClick={handlePrevTemplate}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white active:scale-95 transition-all"
                aria-label="Previous template"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 min-w-[80px] justify-center">
                {TEMPLATES.map((tpl, idx) => (
                  <button
                    key={tpl.id}
                    onClick={() => setActiveTab(tpl.id)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTab === tpl.id 
                        ? "w-5 bg-primary" 
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to template ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNextTemplate}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white active:scale-95 transition-all"
                aria-label="Next template"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
