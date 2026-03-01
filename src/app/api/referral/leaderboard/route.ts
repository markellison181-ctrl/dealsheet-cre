import { NextResponse } from 'next/server';

const mockLeaderboard = [
  { name: 'Marcus R.', referralCount: 14, creditsEarned: 4, joinedMonth: 'Jan 2026' },
  { name: 'Jennifer K.', referralCount: 11, creditsEarned: 3, joinedMonth: 'Feb 2026' },
  { name: 'David L.', referralCount: 8, creditsEarned: 2, joinedMonth: 'Dec 2025' },
  { name: 'Sarah M.', referralCount: 7, creditsEarned: 2, joinedMonth: 'Jan 2026' },
  { name: 'Robert T.', referralCount: 5, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Amanda C.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Chris W.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Nicole P.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Brian H.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Dec 2025' },
  { name: 'Emily S.', referralCount: 2, creditsEarned: 0, joinedMonth: 'Feb 2026' },
];

export async function GET() {
  const leaderboard = mockLeaderboard
    .sort((a, b) => b.referralCount - a.referralCount)
    .map((entry, index) => ({ ...entry, rank: index + 1, isCurrentUser: false }));

  return NextResponse.json({
    success: true,
    leaderboard,
    stats: {
      totalReferrers: leaderboard.length,
      totalReferrals: leaderboard.reduce((s, e) => s + e.referralCount, 0),
      totalCredits: leaderboard.reduce((s, e) => s + e.creditsEarned, 0),
      lastUpdated: new Date().toISOString(),
    },
  });
}
