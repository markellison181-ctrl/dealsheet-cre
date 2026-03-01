import type { Metadata } from "next";
import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export const metadata: Metadata = {
  title: "Welcome to DealSheet CRE Pro! — DealSheet CRE",
  description: "Your DealSheet CRE Pro subscription is active. Get ready for daily commercial real estate deal intelligence.",
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-6 py-16 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
