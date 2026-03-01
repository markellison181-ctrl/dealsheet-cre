import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Issue — DealSheet CRE Weekly | Commercial Real Estate Intelligence",
  description: "Read a full sample issue of DealSheet CRE Weekly, featuring major CRE transactions, cap rate analysis, and market intelligence from February 2026.",
};

export default function SampleNewsletter() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Newsletter Header */}
        <div className="bg-navy border border-navy-50/30 rounded-xl overflow-hidden mb-12">
          <div className="p-8 border-b border-navy-50/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-lg">DS</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DealSheet CRE Weekly</h1>
                <div className="text-slate-300 text-sm">Issue #1 — February 28, 2026</div>
              </div>
            </div>
            <div className="bg-gold/10 border border-gold/20 rounded-lg p-4">
              <p className="text-gold text-sm font-medium mb-2">📈 Market Pulse</p>
              <p className="text-gray-300 text-sm">
                Transaction volume up 12% WoW to $8.2B. Industrial assets driving activity 
                with $2.1B in trades. Cap rates compressed 15 bps in gateway markets.
              </p>
            </div>
          </div>

          {/* Deal of the Week */}
          <div className="p-8 border-b border-navy-50/20">
            <div className="text-gold label-uppercase mb-3">Deal of the Week</div>
            <h2 className="text-2xl font-bold mb-4 leading-tight">
              Blackstone Acquires Miami Office Portfolio for $2.1B
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">Property Details</div>
                <div className="text-gray-300 text-sm">
                  4.2M SF across 8 buildings<br/>
                  Brickell & Downtown Miami<br/>
                  Average building age: 12 years<br/>
                  92% leased, WAL 7.2 years
                </div>
              </div>
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">Transaction</div>
                <div className="text-gray-300 text-sm">
                  Purchase Price: $2.1B<br/>
                  Price/SF: $500<br/>
                  Cap Rate: 6.8%<br/>
                  Buyer: Blackstone BREIT
                </div>
              </div>
              <div>
                <div className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">Market Context</div>
                <div className="text-gray-300 text-sm">
                  Miami office avg: 7.4%<br/>
                  Gateway premium: -60 bps<br/>
                  YoY cap compression: -45 bps<br/>
                  Last trade (2024): $425/SF
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Blackstone Real Estate Income Trust's $2.1 billion acquisition of Miami's premier office 
              portfolio marks the largest single-asset office trade in Florida history and signals 
              continued institutional appetite for grade-A office assets in gateway markets despite 
              persistent work-from-home headwinds.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The 6.8% cap rate represents a 60-basis-point premium to the broader Miami office market, 
              reflecting the portfolio's trophy asset quality and irreplaceable Brickell locations. 
              At $500 per square foot, the pricing matches recent comparable trades and suggests 
              institutional pricing power in the trophy office segment remains intact.
            </p>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 mt-6">
              <div className="text-gold text-sm font-semibold mb-2">💡 Intelligence Insight</div>
              <p className="text-gray-300 text-sm">
                Blackstone's move signals confidence in Miami's long-term fundamentals despite national 
                office challenges. The acquisition aligns with BREIT's strategy of concentrating in 
                gateway markets with population and job growth. Watch for similar institutional plays 
                in Austin, Nashville, and Charlotte where office fundamentals remain strong.
              </p>
            </div>
          </div>

          {/* Major Transactions */}
          <div className="p-8 border-b border-navy-50/20">
            <div className="text-gold label-uppercase mb-4">Major Transactions This Week</div>
            <div className="space-y-6">
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">Industrial Portfolio — Dallas/Fort Worth</h3>
                  <span className="text-gold font-bold text-lg">$847M</span>
                </div>
                <div className="text-sm text-slate-300 mb-2">
                  Buyer: Prologis | Seller: TA Realty | Cap Rate: 4.2%
                </div>
                <p className="text-gray-300 text-sm">
                  23-property last-mile distribution portfolio totaling 8.3M SF. Average lease term 
                  6.8 years with 94% occupancy. Properties average 15 minutes from DFW population centers.
                </p>
              </div>
              
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">Luxury Apartments — Austin</h3>
                  <span className="text-gold font-bold text-lg">$285M</span>
                </div>
                <div className="text-sm text-slate-300 mb-2">
                  Buyer: Camden Property Trust | Seller: Greystar | Cap Rate: 5.4%
                </div>
                <p className="text-gray-300 text-sm">
                  Two Class A apartment communities (624 units) in Central Austin. Built 2021-2022, 
                  current occupancy 96%, average rent $2,250/month. Near Tesla and Apple facilities.
                </p>
              </div>
              
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">Retail Center — Phoenix</h3>
                  <span className="text-gold font-bold text-lg">$124M</span>
                </div>
                <div className="text-sm text-slate-300 mb-2">
                  Buyer: Kimco Realty | Seller: Regency Centers | Cap Rate: 6.1%
                </div>
                <p className="text-gray-300 text-sm">
                  485,000 SF power center anchored by Target, Home Depot, and Nordstrom Rack. 
                  Located in high-growth Scottsdale submarket with strong demographics.
                </p>
              </div>
              
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">Data Center — Northern Virginia</h3>
                  <span className="text-gold font-bold text-lg">$450M</span>
                </div>
                <div className="text-sm text-slate-300 mb-2">
                  Buyer: Digital Realty | Seller: CyrusOne | Cap Rate: 5.8%
                </div>
                <p className="text-gray-300 text-sm">
                  125MW hyperscale data center in Ashburn. Fully leased to cloud provider under 
                  20-year triple-net lease. Reflects 15% pricing premium to 2025 comparable sales.
                </p>
              </div>
            </div>
          </div>

          {/* Who's Moving */}
          <div className="p-8 border-b border-navy-50/20">
            <div className="text-gold label-uppercase mb-4">Who's Moving</div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                <div>
                  <div className="font-semibold text-white">Sarah Chen named CIO at Starwood Capital</div>
                  <div className="text-sm text-slate-300">
                    Former Brookfield Properties investment chief takes over $65B real estate portfolio. 
                    Signals continued focus on value-add and opportunistic strategies.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                <div>
                  <div className="font-semibold text-white">Marcus Thompson joins KKR Real Estate</div>
                  <div className="text-sm text-slate-300">
                    Ex-Blackstone MD hired to lead West Coast acquisitions. Previously closed $2.8B 
                    in industrial and logistics investments.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                <div>
                  <div className="font-semibold text-white">Lisa Rodriguez promoted at Hines</div>
                  <div className="text-sm text-slate-300">
                    Senior Vice President elevation to lead Southeast development. Oversees $1.2B 
                    pipeline including mixed-use projects in Miami and Atlanta.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Intelligence */}
          <div className="p-8 border-b border-navy-50/20">
            <div className="text-gold label-uppercase mb-4">Market Intelligence</div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">🏢 Office Recovery Watch</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><strong>Austin:</strong> Class A occupancy hits 87%, up 3% QoQ</li>
                  <li><strong>Miami:</strong> Brickell vacancy drops to 12%, tightest since 2019</li>
                  <li><strong>Nashville:</strong> Flight-to-quality driving 15% rent premiums</li>
                  <li><strong>Denver:</strong> Tech layoffs push vacancy to 25% in CBD</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">🏭 Industrial Hotspots</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><strong>Phoenix:</strong> Land prices up 18% YoY, supply constrained</li>
                  <li><strong>Atlanta:</strong> Port expansion driving Savannah corridor demand</li>
                  <li><strong>Dallas:</strong> Last-mile rents hit $8.50/SF, up from $6.75</li>
                  <li><strong>Inland Empire:</strong> First signs of demand softening after 3-year run</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cap Rate Watch */}
          <div className="p-8">
            <div className="text-gold label-uppercase mb-4">Cap Rate Watch</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-navy-50/20">
                    <th className="text-left text-slate-300 font-medium py-2">Asset Class</th>
                    <th className="text-right text-slate-300 font-medium py-2">Current</th>
                    <th className="text-right text-slate-300 font-medium py-2">Last Week</th>
                    <th className="text-right text-slate-300 font-medium py-2">Change</th>
                    <th className="text-right text-slate-300 font-medium py-2">YoY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-50/10">
                  <tr>
                    <td className="py-2 text-white">Gateway Office (Class A)</td>
                    <td className="text-right text-white">6.85%</td>
                    <td className="text-right text-slate-300">7.00%</td>
                    <td className="text-right text-green-400">-15 bps</td>
                    <td className="text-right text-red-400">+45 bps</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-white">Industrial (Last-Mile)</td>
                    <td className="text-right text-white">4.25%</td>
                    <td className="text-right text-slate-300">4.30%</td>
                    <td className="text-right text-green-400">-5 bps</td>
                    <td className="text-right text-green-400">-25 bps</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-white">Multifamily (Core)</td>
                    <td className="text-right text-white">5.60%</td>
                    <td className="text-right text-slate-300">5.65%</td>
                    <td className="text-right text-green-400">-5 bps</td>
                    <td className="text-right text-red-400">+35 bps</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-white">Retail (Anchored)</td>
                    <td className="text-right text-white">6.40%</td>
                    <td className="text-right text-slate-300">6.40%</td>
                    <td className="text-right text-slate-300">0 bps</td>
                    <td className="text-right text-red-400">+20 bps</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-white">Data Centers</td>
                    <td className="text-right text-white">5.75%</td>
                    <td className="text-right text-slate-300">5.80%</td>
                    <td className="text-right text-green-400">-5 bps</td>
                    <td className="text-right text-green-400">-50 bps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get weekly intelligence like this</h2>
          <p className="text-slate-300 mb-6">
            Join the CRE professionals who start every Tuesday with DealSheet CRE intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#subscribe"
              className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Subscribe Free
            </Link>
            <Link 
              href="/pricing"
              className="border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-200"
            >
              See Pro Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}