import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — DealSheet CRE",
  description: "DealSheet CRE pricing: Free weekly digest, $29/mo Pro with daily deal alerts and cap rate data, $99/mo Enterprise for teams and API access.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
