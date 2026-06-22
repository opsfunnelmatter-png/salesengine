import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { addons, totalToday, recurringMonthly } = body;

    // Check if Stripe API Keys are set up
    const stripeApiKey = process.env.STRIPE_SECRET_KEY;

    if (stripeApiKey) {
      // Real Stripe session creation logic (if keys are available)
      const stripe = require("stripe")(stripeApiKey);
      
      const lineItems = [
        {
          price_data: {
            currency: "myr",
            product_data: {
              name: "Next.js Speed Engine Sales Page Base Setup",
              description: "Bina custom sales page super-laju Next.js + penulisan copywriting conversion",
            },
            unit_amount: 99900, // RM999.00 in cents
          },
          quantity: 1,
        },
      ];

      // Add one-time addons to Stripe line items
      if (addons.includes("ads")) {
        lineItems.push({
          price_data: {
            currency: "myr",
            product_data: {
              name: "Google Ads Setup & Management (Bulan 1)",
              description: "Setup akaun ads premium & pengurusan kempen awal",
            },
            unit_amount: 79900,
          },
          quantity: 1,
        });
      }

      if (addons.includes("capi")) {
        lineItems.push({
          price_data: {
            currency: "myr",
            product_data: {
              name: "Thank You Page + Conversion API Setup",
              description: "Server-side event tracking untuk TikTok & Meta Ads",
            },
            unit_amount: 19900,
          },
          quantity: 1,
        });
      }

      if (addons.includes("easyparcel")) {
        lineItems.push({
          price_data: {
            currency: "myr",
            product_data: {
              name: "Integrasi Courier EasyParcel",
              description: "Webhook auto-generate consignment note kurier",
            },
            unit_amount: 29900,
          },
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "grabpay"], // Stripe Malaysia supports GrabPay & Grab PayLater
        line_items: lineItems,
        mode: "payment",
        success_url: `${req.headers.get("origin")}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/#pricing`,
      });

      return NextResponse.json({ url: session.url });
    } else {
      // Development/Simulation Mode (If STRIPE_SECRET_KEY is not set)
      console.log("Simulating Stripe Checkout for: ", { addons, totalToday, recurringMonthly });
      
      // We simulate a redirect to a mock checkout success page inside our app
      // This allows testing the flow in localhost without credentials
      const queryParams = new URLSearchParams({
        gateway: "stripe",
        total: totalToday.toString(),
        recurring: recurringMonthly.toString(),
        addons: addons.join(","),
      });

      // Simulated Stripe test checkout checkout URL
      return NextResponse.json({
        url: `/checkout/success?${queryParams.toString()}`,
      });
    }
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Ralat pelayan Stripe" }, { status: 500 });
  }
}
