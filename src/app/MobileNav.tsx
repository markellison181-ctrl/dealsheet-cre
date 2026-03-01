"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-300 hover:text-gold transition-colors"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-lg border-b border-navy-50/20 p-6 space-y-4 z-50">
          <Link href="/archive" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-gold transition-colors py-2 text-lg">
            Archive
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-gold transition-colors py-2 text-lg">
            Pricing
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-gold transition-colors py-2 text-lg">
            Blog
          </Link>
          <Link href="/#subscribe" onClick={() => setOpen(false)} className="block bg-gold text-navy px-5 py-3 rounded font-semibold text-center hover:bg-gold-300 transition-colors mt-4">
            Subscribe Free
          </Link>
        </div>
      )}
    </div>
  );
}
