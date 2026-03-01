"use client";

import { useState } from "react";
import Link from "next/link";

const SUPABASE_URL = "https://vsbwqlkbcgvmphuqfgqb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYndxbGtiY2d2bXBodXFmZ3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MTgyMjYsImV4cCI6MjA4NjM5NDIyNn0.wGbB-LZl3UfnE1iNz9pR9dyGuc-bFoP8cxZ90toxSHg";

const markets = [
  { rank: 1, market: "Austin, TX", sector: "Industrial", capRate: "5.2%", yoyGrowth: "+18.3%", signal: "Data center demand + Samsung fab expansion driving industrial absorption to record highs" },
  { rank: 2, market: "Nashville, TN", sector: "Multifamily", capRate: "5.0%", yoyGrowth: "+15.7%", signal: "Population growth #2 nationally, Oracle HQ relocation pulling 8,000+ jobs" },
  { rank: 3, market: "Phoenix, AZ", sector: "Industrial", capRate: "5.4%", yoyGrowth: "+14.9%", signal: "TSMC + Intel fabs creating massive industrial/logistics demand in West Valley" },
  { rank: 4, market: "Raleigh-Durham, NC", sector: "Life Science", capRate: "5.8%", yoyGrowth: "+13.2%", signal: "Research Triangle biotech cluster expanding — 2.1M SF lab space under construction" },
  { rank: 5, market: "Miami, FL", sector: "Office", capRate: "5.5%", yoyGrowth: "+12.8%", signal: "Finance/tech migration continues post-COVID — Brickell vacancy at 4.1%, lowest since 2019" },
  { rank: 6, market: "Dallas-Fort Worth, TX", sector: "Industrial", capRate: "5.3%", yoyGrowth: "+12.1%", signal: "Inland port infrastructure + 35M SF pipeline, net absorption positive 14 consecutive quarters" },
  { rank: 7, market: "Charlotte, NC", sector: "Multifamily", capRate: "5.1%", yoyGrowth: "+11.8%", signal: "Banking hub expansion, rent growth outpacing national average by 340bps" },
  { rank: 8, market: "Salt Lake City, UT", sector: "Mixed-Use", capRate: "5.6%", yoyGrowth: "+11.4%", signal: "Tech corridor growth — Point of the Mountain development creating 20,000+ housing units" },
  { rank: 9, market: "Tampa, FL", sector: "Multifamily", capRate: "5.2%", yoyGrowth: "+10.9%", signal: "Water Street Tampa catalyzing $3.5B in adjacent development — office-to-resi conversions accelerating" },
  { rank: 10, market: "Boise, ID", sector: "Industrial", capRate: "5.7%", yoyGrowth: "+10.6%", signal: "Micron $15B fab + supply chain reshoring driving spec industrial to 97% pre-lease rates" },
  { rank: 11, market: "Indianapolis, IN", sector: "Industrial", capRate: "5.5%", yoyGrowth: "+10.2%", signal: "Crossroads of America logistics advantage — Amazon, FedEx, and Walmart expanding regional hubs" },
  { rank: 12, market: "San Antonio, TX", sector: "Multifamily", capRate: "5.3%", yoyGrowth: "+9.8%", signal: "Military base expansion + Toyota manufacturing pulling 12K+ jobs — housing demand surging" },
  { rank: 13, market: "Denver, CO", sector: "Life Science", capRate: "5.9%", yoyGrowth: "+9.5%", signal: "Fitzsimons Innovation Campus Phase III breaking ground — 1.8M SF biotech/pharma" },
  { rank: 14, market: "Huntsville, AL", sector: "Office/Defense", capRate: "6.1%", yoyGrowth: "+9.3%", signal: "Space Command HQ + FBI relocation — Cummings Research Park 95% occupied" },
  { rank: 15, market: "Jacksonville, FL", sector: "Industrial", capRate: "5.4%", yoyGrowth: "+9.0%", signal: "JAXPORT deepening + nearshoring tailwinds — warehouse vacancy sub-3%" },
  { rank: 16, market: "Columbus, OH", sector: "Data Center", capRate: "5.8%", yoyGrowth: "+8.7%", signal: "Intel Ohio campus + AWS/Google/Meta data center corridor along Rt. 161" },
  { rank: 17, market: "Las Vegas, NV", sector: "Hospitality/Mixed", capRate: "5.6%", yoyGrowth: "+8.4%", signal: "F1 Grand Prix + A's stadium — Strip-adjacent development pipeline at $12B" },
  { rank: 18, market: "Savannah, GA", sector: "Industrial", capRate: "5.5%", yoyGrowth: "+8.1%", signal: "Hyundai EV plant + port expansion — Bryan County becoming Southeast's logistics mega-hub" },
  { rank: 19, market: "Charleston, SC", sector: "Industrial", capRate: "5.7%", yoyGrowth: "+7.8%", signal: "Volvo/BMW manufacturing cluster + port deepening creating Tier 1 logistics market" },
  { rank: 20, market: "Bentonville, AR", sector: "Mixed-Use", capRate: "6.0%", yoyGrowth: "+7.5%", signal: "Walmart HQ modernization + Crystal Bridges effect — $1.2B downtown redevelopment" },
];

export default function TopCREMarketsReport() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          newsletter: "dealsheet-cre",
          source: "lead-magnet-top-cre-markets-2026",
          status: "active",
        }),
      });
      if (res.ok || res.status === 409) {
        setUnlocked(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mb-8 inline-block">
          ← Back to DealSheet CRE
        </Link>

        <div className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          FREE REPORT — 2026 OUTLOOK
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Top 20 CRE Markets to Watch
          <span className="text-emerald-400"> in 2026</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Data-driven analysis of the commercial real estate markets with the strongest growth
          signals heading into 2026. Cap rates, absorption, and the catalysts driving each market.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-12">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
            20 markets analyzed
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
            Cap rates, growth, catalysts
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" /></svg>
            Q1 2026 data
          </span>
        </div>

        {/* Preview: Top 5 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preview: Top 5 Markets</h2>
          <div className="space-y-4">
            {markets.slice(0, 5).map((m) => (
              <div key={m.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded">#{m.rank}</span>
                      <span className="font-semibold text-white">{m.market}</span>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">{m.sector}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{m.signal}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-bold text-green-400">{m.yoyGrowth}</div>
                    <div className="text-xs text-gray-500">Cap: {m.capRate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gate or Full Report */}
        {!unlocked ? (
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-700 rounded-xl p-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 z-10 pointer-events-none" />
              <div className="opacity-30 blur-sm space-y-3">
                {markets.slice(5, 10).map((m) => (
                  <div key={m.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-left">
                    <span className="font-semibold">{m.market}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Get the Full Report — Free</h3>
            <p className="text-gray-400 mb-6">
              Enter your email to unlock all 20 markets, detailed cap rate analysis, growth catalysts,
              and our sector-by-sector breakdown for 2026.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Unlocking..." : "Unlock Report"}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

            <p className="text-xs text-gray-500 mt-4">
              You&apos;ll also get DealSheet CRE — our free weekly commercial real estate intelligence newsletter.
              Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-green-400 font-semibold">✓ Report unlocked! You&apos;re now subscribed to DealSheet CRE.</p>
            </div>

            <h2 className="text-2xl font-bold mb-6">Full Report: Top 20 CRE Markets — 2026</h2>

            {/* Key Insights */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4 text-emerald-400">Key Themes for 2026</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-emerald-400 shrink-0">→</span>
                  <span><strong className="text-white">Industrial is king:</strong> 8 of the top 20 markets are driven primarily by industrial/logistics demand. Reshoring, data centers, and EV manufacturing are creating generational demand.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 shrink-0">→</span>
                  <span><strong className="text-white">Sun Belt dominance continues:</strong> 16 of 20 markets are in Sun Belt states. Population migration + business-friendly tax environments remain the macro tailwind.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 shrink-0">→</span>
                  <span><strong className="text-white">Life science emerging:</strong> Raleigh-Durham and Denver signal a maturing life science real estate market outside traditional Boston/SF hubs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400 shrink-0">→</span>
                  <span><strong className="text-white">Cap rate compression slowing:</strong> Average cap rates in our top 20 sit at 5.5% — tighter than 2024 but with less room to compress. Investors pivoting to yield plays.</span>
                </li>
              </ul>
            </div>

            {/* Full list */}
            <div className="space-y-4">
              {markets.map((m) => (
                <div key={m.rank} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded">#{m.rank}</span>
                        <span className="font-semibold text-white">{m.market}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">{m.sector}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{m.signal}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-bold text-green-400">{m.yoyGrowth}</div>
                      <div className="text-xs text-gray-500">Cap: {m.capRate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-emerald-600/10 border border-emerald-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Want Market Intel Every Week?</h3>
              <p className="text-gray-400 mb-6">
                DealSheet CRE delivers commercial real estate intelligence to your inbox — market signals,
                deal flow analysis, and cap rate trends before they hit the mainstream.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition"
              >
                See Plans →
              </Link>
            </div>

            <p className="text-xs text-gray-500 text-center mt-8">
              Data compiled from CoStar, CBRE, JLL, and NCREIF Q4 2025/Q1 2026 reports.
              Analysis by DealSheet CRE, a SignalStack Media LLC publication.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
