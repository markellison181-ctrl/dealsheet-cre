"use client";

import Link from "next/link";
import { useState } from "react";
import ExitIntentPopup from "../components/ExitIntentPopup";

/* ── CRE-focused SVG Icons ── */
const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 9h1.5m-1.5 2.25h1.5m-1.5 2.25h1.5m3-6H15m-1.5 2.25H15m-1.5 2.25H15M9 21v-3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V21" />
  </svg>
);
const IconTrendingUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);
const IconCurrencyDollar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182C10.464 7.69 11.232 7.47 12 7.47c.768 0 1.536.22 2.121.659L15 9" />
  </svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);
const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gold mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gold text-navy px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe Free"}
        </button>
      </form>
      {message && (
        <p className={`text-sm mt-3 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-300 to-navy" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Free weekly edition every Tuesday</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Know which{" "}
              <span className="text-gold">CRE deals</span>{" "}
              are moving before your competitors do.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              DealSheet CRE delivers daily intelligence on commercial real estate
              transactions, cap rates, market trends, and investment flows across
              US markets. The edge you need to win more deals.
            </p>
            <div id="subscribe">
              <SubscribeForm />
              <p className="text-slate-400 text-xs mt-4">
                Free weekly digest. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-10 bg-navy-500 border-y border-navy-50/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-300 text-sm leading-relaxed">
            Built for CRE brokers, investors, developers, and lenders who need deal intelligence first.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Every issue delivers <span className="text-gold">five critical signals</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              No fluff, no filler. Each edition of DealSheet CRE is structured to give you
              the deal intelligence that matters in 5 minutes or less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconTrendingUp />,
                title: "Deal of the Week",
                description: "The one transaction that signals where the market is heading. Full analysis with buyer motivation, cap rate, and market implications.",
              },
              {
                icon: <IconBuilding />,
                title: "Major Transactions",
                description: "5-7 significant CRE deals with buyer/seller details, cap rates, and market context. The deals that moved this week.",
              },
              {
                icon: <IconUsers />,
                title: "Who's Moving",
                description: "Key personnel changes at major CRE firms, REITs, and investment shops. New hires and departures that shift deal flow.",
              },
              {
                icon: <IconMapPin />,
                title: "Market Intelligence",
                description: "City-specific trends, zoning changes, and development pipeline updates. Know which markets are heating up or cooling down.",
              },
              {
                icon: <IconCurrencyDollar />,
                title: "Cap Rate Watch",
                description: "Weekly cap rate movements by asset class and metro. Compression alerts and investment grade thresholds by market.",
              },
              {
                icon: <IconBolt />,
                title: "Pro: Daily Alerts",
                description: "Pro subscribers get instant deal alerts filtered to their asset classes and geographies. Plus full transaction database access.",
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-navy-500/50 border border-navy-50/20 rounded-lg p-6 hover:border-gold/30">
                <div className="text-gold mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="py-20 bg-navy-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">See what you'll get</h2>
            <p className="text-slate-300">Read a real issue of DealSheet CRE</p>
          </div>
          <div className="max-w-3xl mx-auto sample-glow">
            <div className="bg-navy border border-navy-50/30 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-navy-50/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                    <span className="text-navy font-bold text-xs">DS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">DealSheet CRE Weekly</div>
                    <div className="text-slate-400 text-xs">Issue #1 — February 28, 2026</div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-gold label-uppercase mb-1">Deal of the Week</div>
                  <h3 className="text-lg font-bold tracking-tight">Blackstone Acquires Miami Office Portfolio for $2.1B</h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Blackstone Real Estate Income Trust purchased a 4.2M SF Miami office portfolio at a 6.8% cap rate,
                    signaling institutional appetite for grade-A office assets in gateway markets despite work-from-home headwinds...
                  </p>
                </div>
                <div className="border-t border-navy-50/20 pt-4">
                  <div className="text-gold label-uppercase mb-2">Major Transactions This Week</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Industrial Portfolio — Dallas/Fort Worth</span>
                      <span className="text-gold font-semibold">$847M @ 4.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Luxury Apartments — Austin</span>
                      <span className="text-gold font-semibold">$285M @ 5.4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Retail Center — Phoenix</span>
                      <span className="text-gold font-semibold">$124M @ 6.1%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Link
                    href="/archive/sample"
                    className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
                  >
                    Read the Full Issue
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Start free. Upgrade when you need more.
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            The free weekly edition gives you the essential signals. Pro and Enterprise unlock
            daily alerts, full transaction access, and team features.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-hover bg-gradient-to-b from-navy-500/80 to-navy-500/40 border border-navy-50/30 rounded-xl p-8">
              <div className="text-slate-300 label-uppercase mb-2">Free</div>
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-slate-400 text-sm mb-6">forever</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Weekly digest every Tuesday</li>
                <li className="flex items-start gap-2"><IconCheck /> Deal of the Week</li>
                <li className="flex items-start gap-2"><IconCheck /> Major transactions summary</li>
                <li className="flex items-start gap-2"><IconCheck /> Cap rate highlights</li>
              </ul>
              <Link href="/#subscribe" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-navy transition-all duration-200">
                Subscribe Free
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-navy-500/80 to-navy-500/40 border-2 border-gold rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-gold label-uppercase mb-2">Pro</div>
              <div className="text-4xl font-bold mb-1">$29</div>
              <div className="text-slate-400 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Free</li>
                <li className="flex items-start gap-2"><IconCheck /> Daily transaction alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> Full deal database access</li>
                <li className="flex items-start gap-2"><IconCheck /> Asset class filters</li>
                <li className="flex items-start gap-2"><IconCheck /> Excel/CSV data export</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center bg-gold text-navy px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                Start Pro Trial
              </Link>
            </div>
            <div className="card-hover bg-gradient-to-b from-navy-500/80 to-navy-500/40 border border-navy-50/30 rounded-xl p-8">
              <div className="text-slate-300 label-uppercase mb-2">Enterprise</div>
              <div className="text-4xl font-bold mb-1">$99</div>
              <div className="text-slate-400 text-sm mb-6">per month</div>
              <ul className="space-y-3 text-sm text-gray-300 text-left mb-8">
                <li className="flex items-start gap-2"><IconCheck /> Everything in Pro</li>
                <li className="flex items-start gap-2"><IconCheck /> Up to 10 team seats</li>
                <li className="flex items-start gap-2"><IconCheck /> API access</li>
                <li className="flex items-start gap-2"><IconCheck /> Custom market alerts</li>
                <li className="flex items-start gap-2"><IconCheck /> Priority support</li>
              </ul>
              <Link href="/pricing" className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-navy transition-all duration-200">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Latest Intelligence */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Latest Intelligence</h2>
            <p className="text-gray-400">Deep-dive analysis from our research team</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/blog/cre-market-intelligence-guide-2026" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all group">
              <span className="text-gold group-hover:underline font-medium">CRE Market Intelligence Guide 2026</span>
              <span className="block text-gray-400 text-sm mt-1">Read article →</span>
            </Link>
            <Link href="/blog/cap-rate-calculator-understanding-cre-valuations" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all group">
              <span className="text-gold group-hover:underline font-medium">Cap Rate Calculator: Understanding CRE Valuations</span>
              <span className="block text-gray-400 text-sm mt-1">Read article →</span>
            </Link>
            <Link href="/blog/how-to-find-off-market-commercial-real-estate-deals-2026" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 transition-all group">
              <span className="text-gold group-hover:underline font-medium">How to Find Off-Market CRE Deals in 2026</span>
              <span className="block text-gray-400 text-sm mt-1">Read article →</span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-gold font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            The best CRE deals happen fast.
          </h2>
          <p className="text-slate-300 mb-8">
            Join the brokers, investors, and developers who start every week
            with DealSheet CRE intelligence.
          </p>
          <div className="flex justify-center">
            <SubscribeForm />
          </div>
        </div>
      </section>
      <ExitIntentPopup />
    </>
  );
}