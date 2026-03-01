import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Real Estate Intelligence & Guides | DealSheet CRE Blog",
  description: "Expert analysis, market intelligence, and actionable guides for CRE investors, brokers, and developers. Cap rates, market trends, and deal-finding strategies.",
  keywords: "commercial real estate blog, CRE market analysis, cap rate guide, off-market deals, CRE investing, commercial property intelligence",
  openGraph: {
    title: "Commercial Real Estate Intelligence & Guides | DealSheet CRE Blog",
    description: "Expert analysis and actionable intelligence for CRE professionals",
    type: "website",
  },
  alternates: {
    canonical: "https://dealsheetcre.com/blog"
  }
};

const blogPosts = [
  {
    id: 1,
    title: "How to Find Off-Market Commercial Real Estate Deals in 2026",
    slug: "how-to-find-off-market-commercial-real-estate-deals-2026",
    description: "Discover proven strategies to source off-market CRE deals that never hit public listings. From direct mail campaigns to broker networks, learn how top investors find hidden opportunities.",
    category: "Strategy",
    readTime: "12 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Off-Market Deals", "Deal Sourcing", "CRE Investing"],
    stats: { value: "70%", metric: "Deals Off-Market" }
  },
  {
    id: 2,
    title: "Cap Rate Calculator: Understanding CRE Valuations",
    slug: "cap-rate-calculator-understanding-cre-valuations",
    description: "Master capitalization rates with our comprehensive guide. Learn how to calculate, compare, and use cap rates to evaluate commercial real estate investments across property types.",
    category: "Guide",
    readTime: "14 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Cap Rates", "Valuations", "Investment Analysis"],
    stats: { value: "6.5%", metric: "Avg Cap Rate" }
  },
  {
    id: 3,
    title: "Top 10 CRE Markets to Watch in 2026",
    slug: "top-10-cre-markets-to-watch-2026",
    description: "Data-driven analysis of the hottest commercial real estate markets in 2026. Population growth, job creation, and investment volume metrics reveal where smart money is flowing.",
    category: "Analysis",
    readTime: "16 min read",
    publishDate: "Feb 28, 2026",
    featured: true,
    tags: ["Market Analysis", "CRE Markets", "Investment Trends"],
    stats: { value: "$800B+", metric: "CRE Volume" }
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-navy via-navy-300 to-navy-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#c9a84c" opacity="0.4"/>
                <rect x="15" y="15" width="30" height="30" rx="4" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-pattern)" />
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gold text-sm font-semibold">📊 Expert CRE Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Commercial Real Estate 
              <span className="text-gold block">Intelligence & Guides</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Master commercial real estate investing with our expert analysis, deal-finding strategies, and market intelligence. 
              From cap rate calculations to off-market deal sourcing, we decode the 
              <span className="text-gold font-semibold"> $800+ billion CRE market</span> for you.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-navy-500/50 border border-navy-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">$800B+</div>
                <div className="text-sm text-gray-400">Annual Volume</div>
              </div>
              <div className="bg-navy-500/50 border border-navy-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">6.5%</div>
                <div className="text-sm text-gray-400">Avg Cap Rate</div>
              </div>
              <div className="bg-navy-500/50 border border-navy-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">70%</div>
                <div className="text-sm text-gray-400">Off-Market Deals</div>
              </div>
              <div className="bg-navy-500/50 border border-navy-50/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-gold mb-1">50+</div>
                <div className="text-sm text-gray-400">Markets Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Intelligence & Guides</h2>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-gradient-to-r from-navy-500/50 to-navy-500/20 border border-navy-50/30 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 card-hover"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="text-gray-400 text-sm">{post.readTime}</div>
                      <div className="text-gray-400 text-sm">{post.publishDate}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, j) => (
                          <span key={j} className="bg-navy/50 text-gray-400 px-2 py-1 rounded text-xs">{tag}</span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-300 font-medium text-sm">
                        Read Full Guide →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-navy/50 p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold mb-2">{post.stats.value}</div>
                      <div className="text-gray-400 text-sm">{post.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Get Weekly CRE Intelligence</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join <span className="text-gold font-semibold">CRE professionals</span> who get 
              our latest deal intelligence, market analysis, and investment opportunities delivered weekly.
            </p>
            <Link 
              href="/#subscribe" 
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Subscribe Free →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
