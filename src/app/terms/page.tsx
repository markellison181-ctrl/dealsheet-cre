import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — DealSheet CRE",
  description: "Terms of Service for DealSheet CRE newsletter by SignalStack Media.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-gray-400 mb-12">Last updated: March 1, 2026</p>
      <div className="space-y-8 text-gray-300 leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
          <p>These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Subscriber,&quot; &quot;you,&quot; or &quot;your&quot;) and SignalStack Media LLC (&quot;SignalStack,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a limited liability company organized under the laws of Delaware, with its principal office at 1209 Orange St, Wilmington, DE 19801.</p>
          <p className="mt-3">By accessing DealSheet CRE (dealsheetcre.com), subscribing to our newsletter, or using any of our services, you agree to be bound by these Terms and our Privacy Policy.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
          <p>DealSheet CRE is a niche intelligence newsletter service providing analysis of commercial real estate transactions, market trends, deal flow data, and investment intelligence. Our services include free and paid newsletter subscriptions, web-based content and archives, searchable deal data (Pro and Enterprise tiers), and API access (Enterprise tier).</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Subscription and Account</h2>
          <p>To subscribe, you must provide a valid email address. For paid subscriptions, valid payment information is required. You represent that you are at least 18 years of age and that all information you provide is accurate. You are responsible for maintaining the confidentiality of your account.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Paid Subscriptions and Billing</h2>
          <p>Paid subscriptions are billed monthly through Stripe. Applicable taxes will be added. You may cancel at any time; cancellation takes effect at the end of your billing period. No partial refunds except as required by law. We may change pricing with 30 days&apos; notice.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
          <p>All content is the property of SignalStack Media LLC or its licensors. Your subscription grants a limited, non-exclusive, non-transferable license for personal or internal business use. Redistribution, republication, or resale of our content is prohibited without written consent.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer</h2>
          <p>Our content is for informational purposes only and does not constitute legal, financial, investment, or professional advice. While we make reasonable efforts to ensure accuracy, we do not guarantee completeness or accuracy. Verify information through official sources before making business or investment decisions.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, SignalStack Media LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total aggregate liability shall not exceed amounts paid by you in the 12 months preceding the claim.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. CAN-SPAM Compliance</h2>
          <p>We comply with the U.S. CAN-SPAM Act. By subscribing, you provide express consent to receive commercial electronic messages. Every message identifies SignalStack Media LLC as the sender, includes our physical mailing address, and provides a functioning unsubscribe mechanism. Unsubscribe requests are processed within 10 business days.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Delaware, United States. Disputes are subject to the exclusive jurisdiction of the federal and state courts located in Delaware.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
          <p>SignalStack Media LLC<br />1209 Orange St, Wilmington, DE 19801<br />Email: hello@dealsheetcre.com</p>
        </section>
      </div>
    </div>
  );
}
