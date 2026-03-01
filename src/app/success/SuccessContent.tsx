'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReferralCard from "./ReferralCard";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showConfetti, setShowConfetti] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    setShowConfetti(true);
    if (sessionId) {
      setUserEmail('user@example.com');
    }
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [sessionId]);

  const shareText = "Just subscribed to @DealSheetCRE — finally, real intel on commercial real estate deals. 🏢";
  const shareUrl = "https://dealsheetcre.com";

  return (
    <>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="confetti-animation">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: Math.random() > 0.5 ? '#c9a84c' : '#1a2332',
                  width: `${4 + Math.random() * 8}px`,
                  height: `${4 + Math.random() * 8}px`,
                  borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                }}
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.2 8.8L20 10L13.2 11.2L12 18L10.8 11.2L4 10L10.8 8.8L12 2Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="relative mx-auto mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-gold via-yellow-400 to-gold rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-gold/50 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-16 h-16 text-navy">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div className="absolute inset-0 w-32 h-32 border-4 border-gold/30 rounded-full animate-ping mx-auto"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              🎉 You&apos;re In!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Welcome to DealSheet CRE Pro
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your subscription is active and your 14-day free trial has begun. 
              Get ready for daily CRE deal intelligence, exclusive data access, and the market insights 
              that close more deals.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium">Subscription Active</span>
              </div>
              <div className="flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gold font-medium">14-Day Free Trial</span>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-10 mb-16 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                What happens next?
              </h2>
              <p className="text-gray-300">Your DealSheet CRE Pro journey begins now</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="group text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">Daily Deal Digest Starts Tomorrow</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Your first daily digest arrives at 7 AM EST with overnight CRE transactions, cap rate movements, and market intelligence.</p>
              </div>
              
              <div className="group text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">Deal Database Unlocked</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Search and filter our complete CRE transaction database, export comps to CSV/Excel, and track market trends.</p>
              </div>
              
              <div className="group text-center hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">Premium Features Activated</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Market analytics, cap rate trackers, deal flow alerts, and priority email support are now live in your account.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="bg-gradient-to-b from-navy-500/80 to-navy-500/40 border border-gold/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Help spread the word</h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Love DealSheet CRE? Share it with your network and help other CRE professionals discover the deal intelligence they need.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#1DA1F2] text-white px-6 py-3 rounded font-semibold hover:bg-[#1a8cd8] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0077B5] text-white px-6 py-3 rounded font-semibold hover:bg-[#005885] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Share on LinkedIn
            </a>
            <button
              onClick={() => { navigator.clipboard.writeText(shareUrl); alert('Link copied!'); }}
              className="flex items-center justify-center gap-3 border border-gold text-gold px-6 py-3 rounded font-semibold hover:bg-gold hover:text-navy transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              Copy Link
            </button>
          </div>
        </div>

        <ReferralCard userEmail={userEmail} />

        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center">
            <Link href="/archive" className="block sm:inline-block bg-gold text-navy px-8 py-3 rounded font-semibold hover:bg-gold-300 transition-colors">
              Browse Archive
            </Link>
            <Link href="/" className="block sm:inline-block border border-gold text-gold px-8 py-3 rounded font-semibold hover:bg-gold hover:text-navy transition-colors">
              Return Home
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Questions? Email us at{" "}
            <a href="mailto:support@dealsheetcre.com" className="text-gold hover:underline">support@dealsheetcre.com</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .confetti-animation { position: absolute; width: 100%; height: 100%; overflow: hidden; }
        .confetti-piece { position: absolute; width: 8px; height: 8px; animation: confetti-fall 3s linear forwards; }
        @keyframes confetti-fall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
      `}</style>
    </>
  );
}
