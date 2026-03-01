"use client";

import Link from "next/link";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gold mt-0.5 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const PRICE_IDS = {
  pro_monthly: "price_1T5xsIPs7Nw0EhG0r3HBzVq0",
  pro_annual: "price_1T5xsIPs7Nw0EhG00DsfIyHS",
  enterprise_monthly: "price_1T5xsNPs7Nw0EhG04p5rgMTu",
  enterprise_annual: "price_1T5xsOPs7Nw0EhG0BwmIWmS3",
};

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const handleCheckout = async (priceId: string, planName: string) => {
    setLoading(planName);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to start checkout. Please try again.");
      setLoading(null);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Simple pricing for <span className="text-gold">CRE professionals</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Start with our free weekly digest. Upgrade to Pro for daily alerts and full transaction access. 
            Scale with Enterprise for your entire team.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-white" : "text-slate-300"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className={`relative w-12 h-6 rounded-full transition-colors ${billingCycle === "annual" ? "bg-gold" : "bg-gray-600"}`}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === "annual" ? "text-white" : "text-slate-300"}`}>
              Annual
            </span>
            {billingCycle === "annual" && (
              <span className="text-gold text-sm font-medium bg-gold/10 px-2 py-1 rounded">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="card-hover bg-gradient-to-b from-navy-500/80 to-navy-500/40 border border-navy-50/30 rounded-xl p-8">
            <div className="text-slate-300 label-uppercase mb-2">Free</div>
            <div className="text-4xl font-bold mb-1">$0</div>
            <div className="text-slate-400 text-sm mb-8">forever</div>
            
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Weekly CRE digest every Tuesday</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Deal of the Week analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Top 5 transaction highlights</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Market trend summaries</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Cap rate highlights</span>
              </li>
            </ul>
            
            <Link 
              href="/#subscribe"
              className="block w-full text-center border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-navy transition-all duration-200"
            >
              Subscribe Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="card-hover bg-gradient-to-b from-navy-500/80 to-navy-500/40 border-2 border-gold rounded-xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="text-gold label-uppercase mb-2">Pro</div>
            <div className="flex items-baseline gap-2 mb-1">
              <div className="text-4xl font-bold">
                ${billingCycle === "monthly" ? "29" : "24"}
              </div>
              {billingCycle === "annual" && (
                <div className="text-slate-400 line-through text-lg">$29</div>
              )}
            </div>
            <div className="text-slate-400 text-sm mb-8">
              per month{billingCycle === "annual" && " (billed annually)"}
            </div>
            
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Daily transaction alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Full deal database access</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Asset class & geography filters</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Excel/CSV data export</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Mobile app access</span>
              </li>
            </ul>
            
            <button
              onClick={() => handleCheckout(
                billingCycle === "monthly" ? PRICE_IDS.pro_monthly : PRICE_IDS.pro_annual,
                "Pro"
              )}
              disabled={loading === "Pro"}
              className="w-full bg-gold text-navy px-6 py-3 rounded font-semibold text-sm hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50"
            >
              {loading === "Pro" ? "Loading..." : "Start Pro Trial"}
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">14-day free trial</p>
          </div>

          {/* Enterprise Tier */}
          <div className="card-hover bg-gradient-to-b from-navy-500/80 to-navy-500/40 border border-navy-50/30 rounded-xl p-8">
            <div className="text-slate-300 label-uppercase mb-2">Enterprise</div>
            <div className="flex items-baseline gap-2 mb-1">
              <div className="text-4xl font-bold">
                ${billingCycle === "monthly" ? "99" : "82"}
              </div>
              {billingCycle === "annual" && (
                <div className="text-slate-400 line-through text-lg">$99</div>
              )}
            </div>
            <div className="text-slate-400 text-sm mb-8">
              per month{billingCycle === "annual" && " (billed annually)"}
            </div>
            
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Up to 10 team seats</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>API access for integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Custom market alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Quarterly market reports</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck />
                <span>Priority support & training</span>
              </li>
            </ul>
            
            <button
              onClick={() => handleCheckout(
                billingCycle === "monthly" ? PRICE_IDS.enterprise_monthly : PRICE_IDS.enterprise_annual,
                "Enterprise"
              )}
              disabled={loading === "Enterprise"}
              className="w-full border border-gold text-gold px-6 py-3 rounded font-semibold text-sm hover:bg-gold hover:text-navy transition-all duration-200 disabled:opacity-50"
            >
              {loading === "Enterprise" ? "Loading..." : "Contact Sales"}
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gold">What markets do you cover?</h3>
              <p className="text-slate-300 text-sm">
                We track all major US metropolitan markets including NYC, LA, Chicago, Dallas, 
                Miami, San Francisco, and 50+ additional metro areas. Coverage prioritizes 
                markets with $10M+ transaction volumes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gold">What asset classes are included?</h3>
              <p className="text-slate-300 text-sm">
                Office, retail, industrial, multifamily, hospitality, and specialty assets. 
                We focus on investment-grade transactions ($5M+ for most asset classes).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gold">How fresh is the data?</h3>
              <p className="text-slate-300 text-sm">
                Pro subscribers get alerts within 24-48 hours of transaction announcements. 
                Weekly digest includes deals from the past 7 days with verified details.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gold">Can I cancel anytime?</h3>
              <p className="text-slate-300 text-sm">
                Yes, you can cancel your subscription at any time. No contracts or 
                cancellation fees. Your access continues until the end of your billing period.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to stay ahead of the market?</h2>
          <p className="text-slate-300 mb-8">Join hundreds of CRE professionals who trust DealSheet CRE for market intelligence.</p>
          <Link 
            href="/#subscribe"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
          >
            Start with Free Weekly Digest
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}