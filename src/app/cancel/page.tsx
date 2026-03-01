import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled — DealSheet CRE",
  description: "Your checkout was cancelled. Return anytime to subscribe to DealSheet CRE Pro.",
};

export default function CancelPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Checkout Cancelled
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          No worries! Your checkout was cancelled and no payment was processed.
        </p>
      </div>

      {/* What You're Missing */}
      <div className="bg-gradient-to-b from-navy-500/80 to-navy-500/40 border border-gold/30 rounded-xl p-8 mb-8 text-left">
        <h2 className="text-xl font-bold mb-6 text-center">Not quite ready? Here&apos;s what you&apos;re missing:</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
            <div>
              <h3 className="font-semibold text-white mb-1">Daily Deal Intelligence</h3>
              <p className="text-gray-400 text-sm">Get overnight CRE transactions, cap rate movements, and market shifts delivered every morning at 7 AM EST.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
            <div>
              <h3 className="font-semibold text-white mb-1">Full Deal Database Access</h3>
              <p className="text-gray-400 text-sm">Search and filter our complete CRE transaction database. Export to CSV/Excel for your analysis and underwriting.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
            <div>
              <h3 className="font-semibold text-white mb-1">Market Comp Intelligence</h3>
              <p className="text-gray-400 text-sm">Track comparable transactions, monitor cap rate trends by market, and identify emerging investment opportunities.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
            <div>
              <h3 className="font-semibold text-white mb-1">14-Day Free Trial</h3>
              <p className="text-gray-400 text-sm">Try everything risk-free. No commitment required — cancel anytime during your trial period.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gradient-to-b from-navy-500/40 to-navy-500/20 border border-navy-50/20 rounded-xl p-6 mb-8">
        <p className="text-gray-300 italic mb-4">
          &ldquo;DealSheet CRE has completely changed how I source deals. The daily intel on cap rates and transaction volumes gives me an edge over other buyers in my market.&rdquo;
        </p>
        <div className="text-sm text-gray-400">
          <strong className="text-white">Marcus Rivera</strong> — VP of Acquisitions, Meridian Capital
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-gold mb-2">🎯 Limited Time: Extended Trial</h3>
        <p className="text-gray-300 mb-4">
          Still on the fence? Use code <strong className="text-white bg-navy-600 px-2 py-1 rounded">EXTRA7</strong> for a 21-day free trial instead of 14 days.
        </p>
        <p className="text-xs text-gray-500">Offer expires in 24 hours. Valid for new subscriptions only.</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center mb-8">
        <Link 
          href="/pricing"
          className="block sm:inline-block bg-gold text-navy px-8 py-3 rounded font-semibold hover:bg-gold-300 transition-colors"
        >
          Try 14-Day Free Trial
        </Link>
        <Link 
          href="/#subscribe"
          className="block sm:inline-block border border-gold text-gold px-8 py-3 rounded font-semibold hover:bg-gold hover:text-navy transition-colors"
        >
          Start with Free Plan
        </Link>
      </div>

      {/* Alternative Actions */}
      <div className="text-center text-sm text-gray-500">
        <p className="mb-2">Questions about pricing or features?</p>
        <div className="space-x-4">
          <a href="mailto:support@dealsheetcre.com" className="text-gold hover:underline">
            Email Support
          </a>
          <span className="text-gray-500">•</span>
          <Link href="/" className="text-gold hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
