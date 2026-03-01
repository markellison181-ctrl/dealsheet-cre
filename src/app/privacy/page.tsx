import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DealSheet CRE",
  description: "Privacy Policy for DealSheet CRE by SignalStack Media — CAN-SPAM and GDPR compliant.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-400 mb-12">Last updated: March 1, 2026</p>
      <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>SignalStack Media LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates DealSheet CRE (dealsheetcre.com). This Privacy Policy explains how we collect, use, disclose, and protect your personal information in compliance with the CAN-SPAM Act, applicable U.S. federal and state privacy laws, and the EU General Data Protection Regulation (GDPR) where applicable.</p>
          <p className="mt-3">SignalStack Media LLC is located at 1209 Orange St, Wilmington, DE 19801, United States.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
          <p><strong className="text-white">Directly provided:</strong> Email address (subscription), name and company (optional), payment information (via Stripe — we do not store card numbers), and support communications.</p>
          <p className="mt-3"><strong className="text-white">Automatically collected:</strong> IP address and approximate location, browser and device info, pages visited and engagement patterns, email open and click rates, and referral source.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <p>We use your information to deliver newsletters and services, process payments, improve our content and user experience, send service communications, comply with legal obligations, and analyze aggregate usage trends.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Consent</h2>
          <p>By subscribing, you provide express consent to receive commercial electronic messages per the CAN-SPAM Act. You may withdraw consent at any time by clicking unsubscribe in any email, or emailing privacy@dealsheetcre.com. Withdrawal is processed within 10 business days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Disclosure</h2>
          <p>We may share information with service providers (SendGrid for email, Stripe for payments, Vercel for hosting), when required by law, or in connection with a business transfer (with advance notice). We do not sell or rent your personal information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Data Storage and Transfers</h2>
          <p>Your data is stored in the United States where our service providers operate. For users in the EEA, we ensure appropriate safeguards are in place for international data transfers in compliance with the GDPR.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
          <p>We implement appropriate technical and organizational measures including TLS encryption, secure storage, and access controls. No system is 100% secure; we cannot guarantee absolute security.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Retention</h2>
          <p>Active subscriber data: duration of subscription plus 30 days. Payment records: 7 years (U.S. tax law). Analytics: 26 months. Support communications: 3 years.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Your Rights</h2>
          <p>You may request access to your personal information, request correction of inaccuracies, request deletion, and withdraw consent (subject to legal restrictions). GDPR users may also request data portability. Contact us at privacy@dealsheetcre.com. We respond within 30 days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Cookies</h2>
          <p>We use essential cookies (site functionality), analytics cookies (usage understanding), and preference cookies (your settings). Control cookies through your browser settings.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
          <p>SignalStack Media LLC<br />1209 Orange St, Wilmington, DE 19801<br />Email: privacy@dealsheetcre.com</p>
        </section>
      </div>
    </div>
  );
}
