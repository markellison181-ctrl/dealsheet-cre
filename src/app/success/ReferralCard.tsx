'use client';

import { useState, useEffect } from 'react';

interface ReferralCardProps {
  userEmail: string;
}

export default function ReferralCard({ userEmail }: ReferralCardProps) {
  const [referralCode, setReferralCode] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (userEmail) {
      const hash = btoa(userEmail).substring(0, 8).toUpperCase();
      setReferralCode(hash);
    }
  }, [userEmail]);

  const referralUrl = referralCode ? `https://dealsheetcre.com?ref=${referralCode}` : '';

  const copyReferralLink = async () => {
    if (referralUrl) {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!referralCode) return null;

  return (
    <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/50 rounded-xl p-8 mb-12">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-navy">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">🎁 Earn Free Months</h2>
        <p className="text-gray-300">
          Refer 3 friends to DealSheet CRE and get 1 month free. Here&apos;s your unique referral link:
        </p>
      </div>

      <div className="bg-navy-600/50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <label className="block text-sm text-gray-400 mb-1">Your referral link</label>
            <div className="text-white font-mono text-sm break-all">{referralUrl}</div>
          </div>
          <button
            onClick={copyReferralLink}
            className="flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded font-semibold hover:bg-gold-300 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                Copied!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-center">
        <div className="bg-navy-600/30 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">0</div>
          <div className="text-sm text-gray-400">Successful Referrals</div>
        </div>
        <div className="bg-navy-600/30 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">3</div>
          <div className="text-sm text-gray-400">Referrals Needed</div>
        </div>
        <div className="bg-navy-600/30 rounded-lg p-4">
          <div className="text-2xl font-bold text-gold mb-1">$29</div>
          <div className="text-sm text-gray-400">Value Earned</div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">
          Share your link on social media, in CRE groups, or directly with colleagues.
          <br />We&apos;ll track your referrals and credit your account automatically.
        </p>
      </div>
    </div>
  );
}
