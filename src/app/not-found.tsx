import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-gold text-3xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-300 mb-8 leading-relaxed">
          This deal may have closed already. Let&apos;s get you back to the transactions that matter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-gold-300 transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/#subscribe"
            className="border border-gold/40 text-gold px-6 py-3 rounded font-semibold hover:bg-gold/10 transition-all duration-200"
          >
            Subscribe Free
          </Link>
        </div>
        <div className="mt-10 flex justify-center gap-6 text-sm">
          <Link href="/archive" className="text-slate-300 hover:text-gold transition-colors">Archive</Link>
          <Link href="/blog" className="text-slate-300 hover:text-gold transition-colors">Blog</Link>
          <Link href="/pricing" className="text-slate-300 hover:text-gold transition-colors">Pricing</Link>
        </div>
      </div>
    </div>
  );
}
