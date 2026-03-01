import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cap Rate Calculator: Understanding CRE Valuations | DealSheet CRE",
  description: "Master capitalization rates with our comprehensive guide. Learn how to calculate, compare, and use cap rates to evaluate commercial real estate investments across all property types.",
  keywords: "cap rate calculator, capitalization rate, CRE valuations, commercial real estate cap rate, how to calculate cap rate, cap rate by property type, CRE investment analysis",
  openGraph: {
    title: "Cap Rate Calculator: Understanding CRE Valuations",
    description: "Master capitalization rates and CRE valuation with our comprehensive guide",
    type: "article",
    publishedTime: "2026-02-28T12:00:00Z",
    authors: ["DealSheet CRE Research Team"],
    tags: ["Cap Rates", "CRE Valuations", "Investment Analysis"],
  },
  alternates: {
    canonical: "https://dealsheetcre.com/blog/cap-rate-calculator-understanding-cre-valuations"
  }
};

export default function CapRatePost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-navy via-navy-300 to-navy-500">
      <section className="relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="mb-8">
            <Link href="/blog" className="text-gold hover:text-gold-300 text-sm font-medium">← Back to Blog</Link>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">Guide</span>
            <span className="text-gray-400 text-sm">14 min read</span>
            <span className="text-gray-400 text-sm">Feb 28, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
            Cap Rate Calculator: Understanding <span className="text-gold">CRE Valuations</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The capitalization rate is the most fundamental metric in commercial real estate. Master it, and you&apos;ll 
            instantly evaluate any investment opportunity with confidence.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-invert prose-lg max-w-none">

          <div className="bg-navy-500/50 border border-gold/20 rounded-xl p-6 mb-12 not-prose">
            <h3 className="text-xl font-bold text-gold mb-4 text-center">The Cap Rate Formula</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Cap Rate = NOI ÷ Property Value × 100</div>
              <div className="text-gray-400">Net Operating Income divided by Current Market Value (or Purchase Price)</div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div><div className="text-xl font-bold text-gold">NOI</div><div className="text-xs text-gray-400">Revenue minus operating expenses (excluding debt service)</div></div>
              <div><div className="text-xl font-bold text-gold">÷</div><div className="text-xs text-gray-400">Divided by</div></div>
              <div><div className="text-xl font-bold text-gold">Value</div><div className="text-xs text-gray-400">Current market value or purchase price</div></div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Is a Cap Rate?</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            The capitalization rate — commonly called the &quot;cap rate&quot; — is the ratio of a commercial property&apos;s net operating income (NOI) to its current market value. It represents the <strong className="text-gold">unlevered return</strong> an investor would earn if they purchased the property with all cash. Think of it as the property&apos;s yield, similar to a bond yield or dividend yield.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            For example, if a retail strip center generates $200,000 in annual NOI and is valued at $3,000,000, the cap rate is 6.67% ($200,000 ÷ $3,000,000). This tells you that for every dollar you invest, you&apos;ll earn approximately 6.67 cents in annual net income before debt service.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Cap rates are inversely related to property values: <strong className="text-white">lower cap rates mean higher prices</strong> (and presumably lower risk), while <strong className="text-white">higher cap rates mean lower prices</strong> (and presumably higher risk or value-add opportunity). This inverse relationship is crucial to understanding CRE valuations.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cap Rates by Property Type (2026 Data)</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Cap rates vary significantly across property types, reflecting different risk profiles, growth expectations, and capital market dynamics. Here&apos;s where national average cap rates stand as of Q1 2026, according to MSCI Real Capital Analytics and Green Street:
          </p>

          <div className="bg-navy-500/50 border border-navy-50/20 rounded-xl p-6 my-8 not-prose">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-navy-50/20 pb-3">
                <span className="text-white font-semibold">Property Type</span>
                <span className="text-white font-semibold">Avg Cap Rate</span>
              </div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Multifamily (Class A)</span><span className="text-gold font-bold">4.8 - 5.5%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Industrial / Warehouse</span><span className="text-gold font-bold">5.0 - 5.8%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Retail (NNN Single-Tenant)</span><span className="text-gold font-bold">5.5 - 6.5%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Office (Class A CBD)</span><span className="text-gold font-bold">6.0 - 7.5%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Office (Suburban Class B)</span><span className="text-gold font-bold">7.5 - 9.5%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Self-Storage</span><span className="text-gold font-bold">5.5 - 6.5%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Hotel / Hospitality</span><span className="text-gold font-bold">7.0 - 9.0%</span></div>
              <div className="flex justify-between items-center"><span className="text-gray-300">Medical Office</span><span className="text-gold font-bold">5.5 - 6.5%</span></div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            These ranges reflect national averages. Primary markets like New York, San Francisco, and Los Angeles typically trade at cap rates 100-200 basis points below these averages, while secondary and tertiary markets may be 100-300 basis points higher. For a deeper look at which metros are moving, see our <Link href="/blog/top-10-cre-markets-to-watch-2026" className="text-gold underline hover:text-gold-300">top 10 CRE markets to watch in 2026</Link>. And if you&apos;re looking to source deals at better cap rates, check out our guide to <Link href="/blog/how-to-find-off-market-commercial-real-estate-deals-2026" className="text-gold underline hover:text-gold-300">finding off-market CRE deals</Link>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Calculate NOI Correctly</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            The accuracy of your cap rate analysis depends entirely on correctly calculating Net Operating Income. NOI is the property&apos;s gross revenue minus all operating expenses, <strong className="text-white">excluding debt service, capital expenditures, and depreciation</strong>. Getting this wrong is the #1 mistake new CRE investors make.
          </p>

          <div className="bg-navy-500/50 border border-gold/20 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-gold mb-4">NOI Calculation Example</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between"><span>Gross Potential Rent (GPR)</span><span className="text-white font-bold">$500,000</span></div>
              <div className="flex justify-between"><span>− Vacancy & Credit Loss (5%)</span><span className="text-red-400">−$25,000</span></div>
              <div className="flex justify-between border-b border-navy-50/20 pb-2"><span>+ Other Income (laundry, parking, etc.)</span><span className="text-green-400">+$15,000</span></div>
              <div className="flex justify-between font-semibold"><span className="text-white">Effective Gross Income (EGI)</span><span className="text-white">$490,000</span></div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between"><span>− Property Taxes</span><span className="text-red-400">−$60,000</span></div>
                <div className="flex justify-between"><span>− Insurance</span><span className="text-red-400">−$18,000</span></div>
                <div className="flex justify-between"><span>− Property Management (6%)</span><span className="text-red-400">−$29,400</span></div>
                <div className="flex justify-between"><span>− Repairs & Maintenance</span><span className="text-red-400">−$25,000</span></div>
                <div className="flex justify-between"><span>− Utilities (owner-paid)</span><span className="text-red-400">−$32,000</span></div>
                <div className="flex justify-between border-b border-navy-50/20 pb-2"><span>− Administrative / Legal</span><span className="text-red-400">−$8,000</span></div>
              </div>
              <div className="flex justify-between font-bold text-xl pt-2"><span className="text-gold">Net Operating Income (NOI)</span><span className="text-gold">$317,600</span></div>
              <div className="mt-4 pt-4 border-t border-navy-50/20 text-center">
                <div className="text-gray-400">At a purchase price of $5,000,000:</div>
                <div className="text-2xl font-bold text-gold mt-1">Cap Rate = $317,600 ÷ $5,000,000 = 6.35%</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common NOI Mistakes to Avoid</h2>

          <ul className="space-y-3 text-gray-300 text-lg">
            <li><strong className="text-white">Using the seller&apos;s pro forma NOI:</strong> Always underwrite your own NOI based on actual operating statements (T-12), rent rolls, and market data. Sellers routinely overstate income and understate expenses.</li>
            <li><strong className="text-white">Forgetting management fees:</strong> Even if you self-manage, include a 4-8% management fee in your analysis. This ensures you&apos;re comparing properties on an apples-to-apples basis and accounts for the true cost of management.</li>
            <li><strong className="text-white">Ignoring reserves for replacement:</strong> While technically a capital expense (not included in NOI), smart investors adjust their cap rate expectations to account for near-term capital needs like roof replacements, HVAC systems, and parking lot resurfacing.</li>
            <li><strong className="text-white">Using above-market rents:</strong> If current rents are above market (likely due to legacy leases about to expire), your NOI will decline. Use market rents for your stabilized underwriting.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cap Rate vs. Other Valuation Methods</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            While the cap rate is the quickest way to evaluate a CRE opportunity, sophisticated investors use it alongside other methods:
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Discounted Cash Flow (DCF):</strong> Projects future cash flows over a hold period (typically 5-10 years) and discounts them back to present value. More accurate for value-add properties where NOI will change significantly over time. The DCF accounts for rent growth, lease rollovers, capital expenditures, and exit cap rates.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Gross Rent Multiplier (GRM):</strong> Property price divided by annual gross rent. Useful for quick screening but ignores expenses entirely. A property with a low GRM might still be a bad deal if operating expenses are exceptionally high.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Price Per Square Foot / Unit:</strong> Useful for comparing similar properties but says nothing about income or returns. A $200/SF industrial building in Nashville and a $200/SF industrial building in rural Alabama are very different investments.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Cash-on-Cash Return:</strong> Unlike cap rate, this accounts for financing. It measures annual pre-tax cash flow relative to the total cash invested (down payment + closing costs). More relevant for leveraged investors.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Drives Cap Rate Changes?</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Understanding what moves cap rates helps you anticipate market shifts and identify opportunities:
          </p>

          <ul className="space-y-3 text-gray-300 text-lg">
            <li><strong className="text-white">Interest rates:</strong> The strongest single driver. When the Federal Reserve raises rates, borrowing costs increase, reducing what buyers can pay, which pushes cap rates up. The 2022-2024 rate hiking cycle expanded CRE cap rates by 100-200 basis points across most property types.</li>
            <li><strong className="text-white">Risk perception:</strong> Market uncertainty, economic recession fears, or property-type-specific risks (like office post-COVID) push cap rates higher as investors demand more return for perceived risk.</li>
            <li><strong className="text-white">Supply and demand:</strong> Markets with strong rent growth and limited new supply (like many Sun Belt industrial markets) see cap rate compression as investors pay premium prices for growth.</li>
            <li><strong className="text-white">Capital flows:</strong> When institutional investors and foreign capital flood a market, increased competition drives cap rates down. Conversely, when capital retreats, cap rates expand.</li>
            <li><strong className="text-white">Tenant credit quality:</strong> A Walgreens NNN lease trades at a much lower cap rate than a local restaurant lease because of the credit quality differential. Investment-grade tenants command premium pricing.</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Spread: Cap Rates vs. Treasury Yields</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Professional CRE investors constantly monitor the <strong className="text-gold">spread between cap rates and the 10-year Treasury yield</strong>. This spread represents the risk premium investors demand for holding commercial real estate versus &quot;risk-free&quot; government bonds.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Historically, the average spread has been approximately 150-250 basis points. As of early 2026, with the 10-year Treasury at approximately 4.2%, a 6.5% average cap rate implies a spread of around 230 basis points — roughly in line with historical norms. When spreads compress below 100 basis points, CRE may be overvalued relative to bonds. When spreads expand above 300 basis points, CRE may offer compelling relative value.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Practical Application: Using Cap Rates to Make Decisions</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Here&apos;s how to apply cap rate analysis in real-world investment decisions:
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Screening opportunities:</strong> Set minimum cap rate thresholds for your investment criteria. If you need a 7% unlevered return to hit your target cash-on-cash with current financing terms, immediately filter out properties trading below 7%.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Estimating value:</strong> If a property generates $150,000 in NOI and comparable properties trade at a 6% cap rate, the estimated market value is $2,500,000 ($150,000 ÷ 0.06). This is the income approach to valuation, and it&apos;s the primary method used by commercial appraisers.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-white">Projecting exit value:</strong> Estimate your NOI at the end of your hold period, then apply a conservative exit cap rate (typically 50-100 basis points higher than your going-in cap rate to account for property aging) to project your sale price.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Takeaways</h2>

          <div className="bg-navy-500/50 border border-gold/20 rounded-xl p-6 my-8 not-prose">
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3"><span className="text-gold font-bold">1.</span> Cap Rate = NOI ÷ Property Value. It&apos;s the unlevered return on a commercial property.</div>
              <div className="flex items-start gap-3"><span className="text-gold font-bold">2.</span> Lower cap rates = higher prices and lower perceived risk. Higher cap rates = lower prices and higher perceived risk.</div>
              <div className="flex items-start gap-3"><span className="text-gold font-bold">3.</span> Always calculate your own NOI from actual operating data — never trust seller pro formas.</div>
              <div className="flex items-start gap-3"><span className="text-gold font-bold">4.</span> Cap rates vary by property type, market, and individual property risk profile.</div>
              <div className="flex items-start gap-3"><span className="text-gold font-bold">5.</span> Monitor the cap rate vs. Treasury spread to gauge relative CRE value.</div>
              <div className="flex items-start gap-3"><span className="text-gold font-bold">6.</span> Use cap rates for quick screening, but supplement with DCF for serious underwriting.</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8 mt-12 not-prose text-center">
            <h3 className="text-2xl font-bold mb-4">Track Cap Rates Across 50+ Markets</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              DealSheet CRE delivers weekly cap rate data, transaction analysis, and market intelligence straight to your inbox.
              <span className="text-gold font-semibold"> Subscribe free and stay ahead of the market.</span>
            </p>
            <Link 
              href="/#subscribe" 
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200"
            >
              Subscribe Free →
            </Link>
          </div>
        </div>
      </article>
    
      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border-t border-gold/20 pt-12">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="space-y-3">
                <Link href="/blog/cre-market-intelligence-guide-2026" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 hover:bg-gold/5 transition-all">
                  <span className="text-gold text-sm font-medium">→</span>
                  <span className="ml-2 text-gray-200 hover:text-white">CRE Market Intelligence Guide 2026</span>
                </Link>
                <Link href="/blog/how-to-find-off-market-commercial-real-estate-deals-2026" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 hover:bg-gold/5 transition-all">
                  <span className="text-gold text-sm font-medium">→</span>
                  <span className="ml-2 text-gray-200 hover:text-white">How to Find Off-Market CRE Deals in 2026</span>
                </Link>
                <Link href="/blog/top-10-cre-markets-to-watch-2026" className="block p-4 rounded-lg border border-gold/20 hover:border-gold/40 hover:bg-gold/5 transition-all">
                  <span className="text-gold text-sm font-medium">→</span>
                  <span className="ml-2 text-gray-200 hover:text-white">Top 10 CRE Markets to Watch in 2026</span>
                </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
