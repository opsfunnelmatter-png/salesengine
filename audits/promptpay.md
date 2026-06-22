# Contender: PromptPay (Round 7 Winner - Picks & Shovels for AI)

## 1. Core Problem
AI Automation Agencies (AAAs) build chatbots and voice agents for their clients using platforms like Make.com, n8n, and OpenAI. Because clients don't know how to set up OpenAI API keys, the agency uses its own Master API key. The agency ends up bleeding cash paying for their clients' OpenAI token usage. Calculating individual client usage manually and chasing them for invoice payments is a nightmare.

## 2. The Solution
An "LLM Reverse Proxy & Automated Client Billing Layer". Instead of sending API calls to `api.openai.com`, the agency sends them to `api.promptpay.io`. 
Our Edge Proxy (built on Cloudflare Workers for near-zero latency):
1. Forwards the request to OpenAI.
2. Intercepts the response and logs the exact token usage per client.
3. Automatically applies the agency's markup (e.g., charge the client 2x the OpenAI cost).
4. Automatically bills the client's credit card via Stripe at the end of the month.

## 3. The True Moat
**Absolute Infrastructure Lock-In.** 
This is the holy grail of B2B SaaS. PromptPay sits directly in the critical path of the agency's production data. If the agency cancels their PromptPay subscription, every single AI bot they built for their clients immediately breaks. Churn will be virtually 0%.

## 4. The Market Proof
Agencies are actively complaining in Make.com and Vapi forums about how to bill clients for token usage. Existing generic billing tools (like Stripe Metered Billing) are too complex to integrate with raw LLM JSON responses.

## 5. $0 CAC Strategy
**The Trojan Tutorial in Skool Communities.**
We infiltrate paid Skool and Discord communities where AAA founders hang out. We post a massive, high-value "Free Tutorial" on how to build your own billing proxy using Make.com.
*The Catch:* In the tutorial, we explain that Make.com is too slow (adds 2-second latency to AI responses) and breaks easily. At the end, we drop the link: "If you want a 10-millisecond Edge Proxy that handles Stripe automatically, just use PromptPay."

## 6. Target User & Willingness to Pay
- **User:** AI Automation Agency (AAA) Founders.
- **Pain Level:** 9/10 (Direct cash flow bleeding and administrative nightmare).
- **Willingness to pay:** $99 - $299/month (Agencies will gladly pay this because the software literally forces their clients to pay them automatically).
