"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();
  
  const gateway = searchParams.get("gateway") || "Stripe";
  const total = searchParams.get("total") || "999";
  const addonsRaw = searchParams.get("addons") || "";
  const addons = addonsRaw ? addonsRaw.split(",") : [];

  const getAddonName = (id: string) => {
    switch (id) {
      case "ads":
        return "Google Ads Setup & Management";
      case "capi":
        return "Thank You Page + CAPI Setup";
      case "easyparcel":
        return "Courier EasyParcel Integration";
      case "hosting":
        return "Managed Hosting & Tech Care";
      default:
        return id;
    }
  };

  return (
    <main className="min-h-screen py-24 flex items-center justify-center px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-xl w-full p-8 md:p-10 border border-primary/20 bg-card rounded-3xl space-y-8 text-center shadow-2xl">
        {/* Animated Check */}
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary text-3xl animate-bounce">
          ✓
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-gray-200">
            Pembayaran Berjaya! 🎉
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            Terima kasih atas tempahan anda. Kami teruja untuk membina sales page super-pantas anda.
          </p>
        </div>

        {/* Order Details Panel */}
        <div className="p-6 rounded-2xl bg-gray-950/50 border border-border text-left text-xs md:text-sm space-y-3 font-mono">
          <div className="flex justify-between border-b border-border/40 pb-2">
            <span className="text-gray-500">Kaedah Pembayaran:</span>
            <span className="text-foreground capitalize">{gateway} (Simulated)</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Pakej Utama:</span>
            <span className="text-foreground">Next.js Sales Page (RM 999)</span>
          </div>

          {addons.length > 0 && (
            <div className="space-y-1">
              <span className="text-gray-500">Add-ons:</span>
              <div className="pl-4 space-y-1 text-2xs md:text-xs">
                {addons.map((addon) => (
                  <div key={addon} className="flex justify-between text-gray-400">
                    <span>• {getAddonName(addon)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <hr className="border-border/40" />

          <div className="flex justify-between items-baseline pt-2">
            <span className="font-semibold text-gray-200">Jumlah Dibayar:</span>
            <span className="text-xl md:text-2xl font-extrabold text-primary font-display">
              RM {total}
            </span>
          </div>
        </div>

        {/* Next Steps Guide */}
        <div className="text-left space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Langkah Seterusnya:</h3>
          <ol className="space-y-3 text-xs md:text-sm text-gray-300">
            <li className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xs shrink-0 mt-0.5">
                1
              </span>
              <span>
                Kami telah menghantar borang maklumat copywriting ke e-mel anda untuk draf teks sales page.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xs shrink-0 mt-0.5">
                2
              </span>
              <span>
                Sila klik butang WhatsApp di bawah untuk menghubungi **Ejen Projek** anda secara langsung bagi memulakan rekaan visual.
              </span>
            </li>
          </ol>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <a
            href={`https://wa.me/60123456789?text=Hai%20Ejen%20Projek%2C%20saya%20telah%20selesai%20membuat%20tempahan%20Sales%20Page%20bernilai%20RM%20${total}%20melalui%20${gateway}.%20Boleh%20kita%20mula%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-primary text-background hover:bg-primary-dark font-extrabold text-sm rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            Hubungi Ejen Projek di WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Memuatkan pengesahan pembayaran...
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
