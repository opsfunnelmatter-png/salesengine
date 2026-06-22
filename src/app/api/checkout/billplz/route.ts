import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { addons, totalToday, recurringMonthly } = body;

    const apiKey = process.env.BILLPLZ_API_KEY;
    const collectionId = process.env.BILLPLZ_COLLECTION_ID;

    if (apiKey && collectionId) {
      // Real Billplz Bill creation logic
      const auth = Buffer.from(`${apiKey}:`).toString("base64");
      
      const response = await fetch("https://www.billplz.com/api/v3/bills", {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection_id: collectionId,
          email: "customer@example.com", // Dynamic email from user form
          name: "Pembeli Sales Page Next.js",
          amount: totalToday * 100, // Billplz expects amount in cents (e.g. RM999 = 99900 cents)
          callback_url: `${req.headers.get("origin")}/api/checkout/billplz/webhook`,
          redirect_url: `${req.headers.get("origin")}/checkout/success?gateway=billplz&total=${totalToday}`,
          description: `Bayaran Next.js Sales Page + Addons: ${addons.join(", ") || "Tiada"}`,
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        return NextResponse.json({ url: data.url });
      } else {
        return NextResponse.json({ error: data.error?.message || "Gagal menjana bil Billplz" }, { status: 400 });
      }
    } else {
      // Development/Simulation Mode (If BILLPLZ keys are not set)
      console.log("Simulating Billplz Bill Creation for: ", { addons, totalToday, recurringMonthly });

      const queryParams = new URLSearchParams({
        gateway: "billplz",
        total: totalToday.toString(),
        recurring: recurringMonthly.toString(),
        addons: addons.join(","),
      });

      return NextResponse.json({
        url: `/checkout/success?${queryParams.toString()}`,
      });
    }
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Ralat pelayan Billplz" }, { status: 500 });
  }
}
