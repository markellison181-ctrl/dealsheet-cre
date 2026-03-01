import type { Metadata } from "next";
import ReferralLeaderboard from "./ReferralLeaderboard";

export const metadata: Metadata = {
  title: "Community — DealSheet CRE",
  description: "Join the DealSheet CRE community. See top referrers and earn free months by sharing with your network.",
};

export default function CommunityPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-gold via-yellow-400 to-gold rounded-full flex items-center justify-center shadow-2xl shadow-gold/30">
            <svg className="w-12 h-12 text-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
          DealSheet CRE Community
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed mb-8">
          Join CRE professionals sharing deal intelligence and growing together. 
          Refer friends and earn free months on your subscription.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '892', label: 'Active Subscribers' },
            { value: '67', label: 'Referral Champions' },
            { value: '234', label: 'Successful Referrals' },
            { value: '$1,847', label: 'Credits Earned' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ReferralLeaderboard />

      {/* How Referrals Work */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">How Referrals Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Share DealSheet CRE with your network and earn free months when they upgrade.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z', title: 'Share Your Link', desc: 'Get your unique referral link and share it with colleagues, on social media, or in CRE groups.' },
            { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'Friends Subscribe', desc: 'When someone uses your link to subscribe to Pro, we automatically track the referral.' },
            { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1', title: 'Earn Free Months', desc: 'For every 3 successful referrals, earn 1 month free. Credits applied automatically.' },
          ].map((step) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <div className="bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border border-gold/30 rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Referring?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Subscribe to DealSheet CRE Pro to get your unique referral link.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="bg-gold text-navy px-8 py-4 rounded-xl font-bold hover:bg-gold-300 transition-all hover:scale-105">Start Pro Trial →</a>
            <a href="/#subscribe" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-navy transition-all hover:scale-105">Try Free Plan</a>
          </div>
        </div>
      </div>
    </div>
  );
}
