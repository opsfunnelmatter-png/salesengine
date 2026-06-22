import React from "react";
import { CheckCircle2, MessageSquare, ArrowLeft, Calendar, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Pendaftaran Berjaya! | AROS Sales Engine",
  description: "Terima kasih atas minat anda. Konsultasi percuma anda sedang diproses.",
};

export default function ThankYouPage() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=60125065516&text=Salam%20Boss%20Amin%2C%20saya%20baru%20hantar%20butiran%20lead%20di%20website%20AROS.%20Boleh%20bantu%20saya%20rancang%20landing%20page%20baru%3F`;

  return (
    <main className="min-h-screen bg-[#060A13] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* Header Space */}
      <header className="max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            AROS
          </span>
          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-primary">
            ENGINE
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <div className="max-w-xl mx-auto w-full px-6 py-12 flex-1 flex flex-col justify-center items-center text-center z-10">
        
        {/* Success Icon Animation */}
        <div className="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Headlines */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
          Permintaan Anda Berjaya Dihantar!
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8">
          Terima kasih atas kepercayaan anda. Kami telah menerima butiran dan sedang membuat analisa awal untuk struktur landing page anda.
        </p>

        {/* What's Next Steps Card */}
        <div className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 text-left mb-8 space-y-4">
          <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-2">
            Apa yang akan berlaku seterusnya?
          </h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-400">
                1
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-slate-400" /> Analisa Awal
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                  Kami menyemak URL / status bisnes anda untuk merangka cadangan susun atur CRO.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-400">
                2
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" /> Sesi Hubungan 24 Jam
                </h4>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                  Kami akan menghubungi anda melalui WhatsApp untuk memberikan draf rangka (wireframe).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fast Action WhatsApp Booster */}
        <div className="w-full bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent border border-emerald-500/20 rounded-2xl p-6 text-center mb-8">
          <span className="inline-block text-[9px] font-mono font-bold text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded mb-2.5">
            ⚡ MAHU RESPONS SEGERA?
          </span>
          <h3 className="text-sm font-black text-white mb-1.5">
            Skip waktu menunggu 24 jam!
          </h3>
          <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed mb-4">
            Klik butang di bawah untuk terus maklumkan kami di WhatsApp. Kami boleh bincang idea website anda sekarang.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-[#040811] font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-[#040811]" /> Terus WhatsApp Boss Amin
          </a>
        </div>

        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-all font-semibold"
        >
          <ArrowLeft className="w-3 h-3" /> Kembali ke Laman Utama
        </Link>

      </div>

      {/* Footer / Safety Badge */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-6 text-center border-t border-slate-900 z-10">
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>SSL Secured · Data anda selamat bersama kami.</span>
        </div>
      </footer>
    </main>
  );
}
