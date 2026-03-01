'use client';

import { useState, useEffect } from 'react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  referralCount: number;
  creditsEarned: number;
  joinedMonth: string;
  isCurrentUser?: boolean;
}

export default function ReferralLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch('/api/referral/leaderboard');
        if (response.ok) {
          const data = await response.json();
          setLeaderboard(data.leaderboard);
        }
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank: number) => {
    const icons: Record<number, string> = { 1: '👑', 2: '🥈', 3: '🥉' };
    if (icons[rank]) {
      return <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg"><span className="text-sm">{icons[rank]}</span></div>;
    }
    return <div className="w-8 h-8 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full flex items-center justify-center"><span className="text-gold text-sm font-bold">#{rank}</span></div>;
  };

  if (loading) {
    return <div className="text-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div><p className="text-gray-400">Loading leaderboard...</p></div>;
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">🏆 Referral Champions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Top referrers helping grow the DealSheet CRE community.</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {leaderboard.slice(0, 3).map((entry) => (
          <div key={entry.rank} className={`text-center p-6 rounded-2xl border shadow-2xl transition-all duration-300 hover:scale-105 ${
            entry.rank === 1 ? 'bg-gradient-to-br from-gold/30 to-gold/10 border-gold/50' :
            entry.rank === 2 ? 'bg-gradient-to-br from-gray-400/20 to-gray-600/10 border-gray-400/30' :
            'bg-gradient-to-br from-orange-400/20 to-orange-600/10 border-orange-400/30'
          }`}>
            <div className="flex justify-center mb-4">{getRankIcon(entry.rank)}</div>
            <h3 className="font-bold text-white text-lg mb-2">{entry.name}</h3>
            <div className="text-2xl font-bold text-gold mb-2">{entry.referralCount}</div>
            <p className="text-gray-400 text-sm mb-2">Successful Referrals</p>
            <div className="text-sm text-gray-500">
              <p>💰 ${entry.creditsEarned * 29} in credits</p>
              <p>📅 Joined {entry.joinedMonth}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Table */}
      <div className="bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-6 bg-gradient-to-r from-gold/20 to-gold/10 border-b border-white/10">
          <h3 className="text-xl font-bold text-white text-center">Complete Leaderboard</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-gray-300 font-medium">Rank</th>
                <th className="text-left p-4 text-gray-300 font-medium">Name</th>
                <th className="text-center p-4 text-gray-300 font-medium">Referrals</th>
                <th className="text-center p-4 text-gray-300 font-medium">Credits</th>
                <th className="text-center p-4 text-gray-300 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.rank} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-4">{getRankIcon(entry.rank)}</td>
                  <td className="p-4"><span className="font-medium text-white">{entry.name}</span></td>
                  <td className="p-4 text-center"><span className="text-2xl font-bold text-gold">{entry.referralCount}</span></td>
                  <td className="p-4 text-center">
                    <div className="text-green-400 font-semibold">${entry.creditsEarned * 29}</div>
                    <div className="text-xs text-gray-500">{entry.creditsEarned} months free</div>
                  </td>
                  <td className="p-4 text-center text-gray-400 text-sm">{entry.joinedMonth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-white mb-6">Referral Milestones</h3>
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { emoji: '🌱', title: 'First Referral', desc: 'Share the love', color: 'green' },
            { emoji: '🚀', title: '3 Referrals', desc: '1 month free', color: 'blue' },
            { emoji: '⭐', title: '10 Referrals', desc: 'Community Star', color: 'purple' },
            { emoji: '👑', title: '25+ Referrals', desc: 'Champion Status', color: 'gold' },
          ].map((m) => (
            <div key={m.title} className={`bg-gradient-to-br from-${m.color === 'gold' ? 'gold' : m.color + '-500'}/20 to-${m.color === 'gold' ? 'gold' : m.color + '-600'}/10 border border-${m.color === 'gold' ? 'gold' : m.color + '-500'}/30 rounded-xl p-4`}>
              <div className="text-2xl mb-2">{m.emoji}</div>
              <div className={`font-semibold text-sm ${m.color === 'gold' ? 'text-gold' : `text-${m.color}-300`}`}>{m.title}</div>
              <div className="text-xs text-gray-400">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
