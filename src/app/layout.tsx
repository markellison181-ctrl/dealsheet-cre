import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DealSheet CRE — Commercial Real Estate Deal Intelligence",
  description:
    "Daily intelligence on commercial real estate transactions, cap rates, and market trends across US markets. Built for CRE brokers, investors, and developers.",
  metadataBase: new URL("https://dealsheetcre.com"),
  alternates: { canonical: "https://dealsheetcre.com" },
  authors: [{ name: "SignalStack Media" }],
  creator: "SignalStack Media",
  publisher: "SignalStack Media",
  openGraph: {
    title: "DealSheet CRE — Commercial Real Estate Deal Intelligence",
    description:
      "Daily intelligence on commercial real estate transactions, cap rates, and market trends across US markets.",
    type: "website",
    url: "https://dealsheetcre.com",
    siteName: "DealSheet CRE",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DealSheet CRE - Commercial Real Estate Deal Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DealSheet CRE — Commercial Real Estate Deal Intelligence", 
    description:
      "Daily intelligence on commercial real estate transactions, cap rates, and market trends across US markets.",
    images: ["/og-image.png"],
  },
};

function Header() {
  return (
    <header className="border-b border-navy-50/20 bg-navy/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-navy font-bold text-sm">DS</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">
            DealSheet<span className="text-gold">CRE</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/archive" className="text-gray-300 hover:text-gold transition-colors text-sm">
            Archive
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-gold transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-gold transition-colors text-sm">
            Blog
          </Link>
          <Link
            href="/#subscribe"
            className="bg-gold text-navy px-5 py-2 rounded text-sm font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
          >
            Subscribe Free
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy-50/20 bg-navy-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy font-bold text-xs">DS</span>
              </div>
              <span className="text-white font-semibold">
                DealSheet<span className="text-gold">CRE</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Commercial real estate deal intelligence, delivered daily.
            </p>
            <p className="text-slate-400 text-xs mt-4">
              A <a href="https://signalstackmedia.com" className="text-gold hover:text-gold-300 transition-colors">SignalStack</a> newsletter.
            </p>
          </div>
          <div>
            <h4 className="text-gold/80 font-semibold mb-4 label-uppercase">Content</h4>
            <ul className="space-y-2">
              <li><Link href="/archive" className="text-slate-300 hover:text-gold transition-colors text-sm">Newsletter Archive</Link></li>
              <li><Link href="/archive/sample" className="text-slate-300 hover:text-gold transition-colors text-sm">Sample Issue</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-gold transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold/80 font-semibold mb-4 label-uppercase">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-slate-300 hover:text-gold transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/#subscribe" className="text-slate-300 hover:text-gold transition-colors text-sm">Subscribe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold/80 font-semibold mb-4 label-uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-slate-300 hover:text-gold transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-gold transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-navy-50/20 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} SignalStack Media Inc. All rights reserved.
            <br />
            181 Bay Street, Suite 1400, Toronto ON M5J 2T3, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-navy text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}