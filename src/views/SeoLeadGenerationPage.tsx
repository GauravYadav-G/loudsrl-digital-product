'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Zap,
  TrendingUp,
  MapPin,
  Target,
  Share2,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Phone,
  HelpCircle,
  FileText,
  Compass,
  Cpu,
  Layers,
  Award,
  ChevronDown,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

export default function SeoLeadGenerationPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'organic' | 'paid' | 'social'>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '+210%', label: 'Average Organic Traffic Lift' },
    { value: '450+', label: 'In-House Tech & Growth Specialists' },
    { value: '4.8×', label: 'Verified Client Pipeline ROAS' },
    { value: '<1.2s', label: 'Average Core Web Vitals LCP' },
  ];

  const allServices = [
    // ── Organic Search Category
    {
      id: 'enterprise-seo',
      category: 'organic',
      tag: 'Organic Search',
      title: 'Enterprise SEO Services',
      subtitle: 'Dominating high-volume commercial keywords for large firms',
      desc: 'With over 90% of online journeys beginning on a search engine, top rankings in competitive search results enable your enterprise to connect with ready-to-buy consumers and B2B procurement heads. Enterprise SEO requires advanced methods tailored to massive site architectures, high competition keywords, and multi-tier indexing hierarchies.',
      highlights: [
        'Custom enterprise keyword cluster modeling and commercial intent mapping',
        'Large-scale website architecture audits and internal link juice optimization',
        'Entity-based SEO and semantic search schema engineering',
        'Competitive gap analysis against market incumbents with automated rank tracking',
      ],
    },
    {
      id: 'local-seo',
      category: 'organic',
      tag: 'Local Dominance',
      title: 'Local SEO & Google Guaranteed Services',
      subtitle: 'Capturing high-intent local buyers in Noida, Delhi NCR & nationwide',
      desc: 'More than half of online searchers visit a business or request a quote within 24 hours of conducting a local search. Our fully-managed local SEO services ensure your enterprise dominates Google Maps 3-pack, local directory citations, and Google Guaranteed Local Services Ads.',
      highlights: [
        'Google Business Profile (GBP) complete verification and weekly optimization',
        'Google Guaranteed & Local Services Ads (LSA) full onboarding and badge approval',
        'Multi-location map cluster ranking and NAP citation consistency across 70+ directories',
        'Local phone call attribution, appointment scheduling, and localized review acceleration',
      ],
    },
    {
      id: 'audit-services',
      category: 'organic',
      tag: 'Technical Health',
      title: 'Full Technical SEO & Crawl Audits',
      subtitle: 'Deep architectural diagnosis to eliminate crawl traps and ranking blocks',
      desc: 'Our comprehensive technical audits begin with an overall analysis of your website codebase, server responses, and analytics telemetry to assess what action is required to optimize for search engines. We inspect and repair every factor impacting indexation.',
      highlights: [
        'Detection and resolution of duplicate content, thin pages, and canonical tag conflicts',
        'Meta title, description, and OpenGraph audit across every indexed URL',
        'HTTP to HTTPS migration validation and mixed-content security resolution',
        'Robots.txt, XML sitemap verification, and 404 / soft-404 error page elimination',
      ],
    },
    {
      id: 'core-web-vitals',
      category: 'organic',
      tag: 'Speed Engineering',
      title: 'Page Speed & Core Web Vitals Optimization',
      subtitle: 'Sub-second LCP, zero layout shift (CLS), and instantaneous interaction (INP)',
      desc: 'Website speed optimization is often an overlooked part of SEO, but it is critical for commercial success. A slow-loading website loses conversions and revenue, as nearly half of web visitors will not wait more than 3 seconds for a page to load. We engineer your frontend for instant performance.',
      highlights: [
        'Largest Contentful Paint (LCP) reduction below 1.2 seconds through server optimization',
        'Cumulative Layout Shift (CLS) elimination with explicit image & container dimensions',
        'Interaction to Next Paint (INP) tuning for 60fps responsiveness across mobile devices',
        'Asset minification, Brotli compression, next-gen WebP/AVIF images, and CDN caching',
      ],
    },

    // ── Paid Advertising Category
    {
      id: 'ppc-management',
      category: 'paid',
      tag: 'Digital Advertising',
      title: 'PPC Management & Paid Search Advertising',
      subtitle: 'High-ROAS Google Search, Display, and Performance Max campaigns',
      desc: 'Pay-per-click (PPC) advertising provides immediate qualified traffic and high-intent leads. At ARKA Technovation, our performance marketing specialists architect data-driven Google Ads and Bing campaigns with negative keyword protection, conversion value rules, and automated bidding strategies.',
      highlights: [
        'Granular single-keyword ad groups (SKAGs) and intent-tiered campaign structure',
        'Continuous negative keyword pruning to eliminate wasted ad spend',
        'High-converting landing page creation paired with dynamic text insertion',
        'Full conversion tracking integration with CRM pipelines and phone call attribution',
      ],
    },
    {
      id: 'geofencing',
      category: 'paid',
      tag: 'Location Intelligence',
      title: 'Competitor & Addressable Geofencing Services',
      subtitle: 'Hyper-targeted mobile advertising down to 1,000 square foot boundaries',
      desc: 'Take location-based advertising to the next level. Competitor geofencing allows you to draw virtual boundaries around competitor locations, industry trade shows, and commercial hubs to serve ads directly to prospects visiting those premises. Addressable geofencing takes postal mailing lists and delivers digital ads to exact household physical boundaries.',
      highlights: [
        '1,000 sq ft precision geofences around competitor showrooms and office hubs',
        'Addressable geofencing mapping CRM physical mailing lists to mobile advertising IDs',
        'Cross-device retargeting on mobile apps, desktop browsers, and connected TV (CTV)',
        'Conversion Zone tracking: measure how many ad recipients physically walk into your facility',
      ],
    },
    {
      id: 'programmatic',
      category: 'paid',
      tag: 'Enterprise Media',
      title: 'Programmatic Advertising & Recruitment Marketing',
      subtitle: 'Automated bidding across premium ad networks and employment portals',
      desc: 'Harness machine-learning ad exchanges to buy impressions in real-time across thousands of premium publisher websites. Additionally, our recruitment marketing campaigns target skilled engineers, executives, and specialists to fill critical talent pipelines.',
      highlights: [
        'Real-time bidding (RTB) across Google Ad Manager, AppNexus, and OpenX',
        'Audience lookalike modeling based on your highest-value customer segments',
        'Recruitment ad campaigns targeting top passive candidates on LinkedIn and niche boards',
        'Strict brand-safety controls and click-fraud elimination algorithms',
      ],
    },

    // ── Social Media & Reputation Category
    {
      id: 'social-ads',
      category: 'social',
      tag: 'Social Media',
      title: 'Social Media Advertising & Video Marketing',
      subtitle: 'High-impact paid campaigns across Meta, LinkedIn & YouTube',
      desc: 'Social media platforms provide unmatched demographic, behavioral, and firmographic targeting. We design, produce, and manage video-first ad campaigns that capture attention, explain complex B2B solutions, and drive qualified inquiries.',
      highlights: [
        'LinkedIn Ads targeting B2B decision-makers by job title, company size, and revenue',
        'Meta (Facebook & Instagram) lookalike campaigns with dynamic creative variations',
        'YouTube in-stream and shorts video ads designed by our in-house film studio',
        'Multi-touch social attribution connected to your CRM pipeline stages',
      ],
    },
    {
      id: 'review-acceleration',
      category: 'social',
      tag: 'Reputation Management',
      title: 'Online Review Acceleration & Reputation Engineering',
      subtitle: 'Building overwhelming digital trust and 5-star customer proof',
      desc: 'Over 92% of B2B and retail buyers read online reviews before initiating contact. Our review acceleration platform automates post-purchase review requests, captures customer sentiment, and showcases verified feedback on high-ranking directories.',
      highlights: [
        'Automated SMS and email review request triggers after client milestones',
        'Review funnels that direct happy clients to Google Maps, Trustpilot, and Clutch',
        'Negative feedback resolution workflows to address concerns before public posting',
        'Review schema markup on your website to display golden stars in Google search results',
      ],
    },
  ];

  const filteredServices =
    activeTab === 'all'
      ? allServices
      : allServices.filter((s) => s.category === activeTab);

  const guides = [
    {
      title: 'What Is an SEO Company & How Does It Drive Growth?',
      desc: 'An SEO company partners with your enterprise to discover, create, optimize, and measure search engine visibility. True SEO success requires quality content that is thematically structured, lightning-fast pages that load in under 2 seconds, robust technical crawlability, full HTTPS security, and schema metadata that search engines can easily understand.',
    },
    {
      title: 'How to Find the Best SEO Partner For Your Business',
      desc: 'When evaluating an SEO partner, look beyond generic promises. Demand to see verified case studies in your specific industry, transparent reporting methodologies, and a dedicated in-house team of engineers and copywriters. Avoid agencies that outsource their work or rely on risky black-hat link schemes that jeopardize your domain authority.',
    },
    {
      title: 'The SEO Guide for Marketing Directors & Leadership',
      desc: 'Marketing leaders must look at SEO as a predictable revenue generator rather than an isolated vanity metric. Key performance indicators should include qualified pipeline generated, customer acquisition cost (CAC) reduction over time, and Core Web Vitals health rather than purely surface-level keyword rankings.',
    },
    {
      title: 'Inbound Search vs Outbound Paid Media Synergy',
      desc: 'The highest-performing enterprises do not choose between organic SEO and paid advertising—they use search intelligence to run both in concert. Organic search keywords with high conversion rates are amplified through PPC, while PPC keyword data reveals commercial search intent to guide your long-term organic content strategy.',
    },
  ];

  const faqs = [
    {
      q: 'How long does it take to see tangible results from an enterprise SEO campaign?',
      a: 'While technical fixes and Core Web Vitals optimizations yield measurable speed and indexing improvements within 2 to 4 weeks, significant organic keyword movements and inbound lead volume typically compound between months 3 and 6 as domain authority and content clusters mature.',
    },
    {
      q: 'What makes Competitor and Addressable Geofencing different from standard radius targeting?',
      a: 'Standard radius targeting casts a wide net around an entire city or postal code. Competitor Geofencing draws razor-sharp virtual boundaries down to 1,000 square feet around specific competitor buildings or convention halls. Addressable Geofencing takes a street-level list of client addresses and matches mobile advertising IDs to deliver ads directly to those exact households.',
    },
    {
      q: 'How does ARKA Technovation handle Google Guaranteed and Local Services Ads?',
      a: 'We guide your company through the entire Google Guaranteed verification process, including background checks, license verification, and insurance compliance. Once approved, your business displays the green Google Guaranteed badge at the very top of local search results, and you only pay for valid phone inquiries.',
    },
    {
      q: 'Does ARKA Technovation outsource any SEO or content development?',
      a: 'No. Every technical audit, schema implementation, keyword strategy, and copywriting piece is executed by our full-time, in-house team located at our Corporate Headquarters in Sector 63, Noida. We believe in 100% direct accountability.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl text-left">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-solar font-semibold">SEO &amp; Lead Generation</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-solar" />
              <span>Organic Search, Digital Advertising &amp; Lead Engine</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] text-left">
              SEO &amp; Lead Generation Services That Generate High Quality Leads.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-light text-left">
              With over 90% of online journeys beginning on search engines, top rankings in competitive search results connect your enterprise with ready-to-buy customers and procurement leaders. At {COMPANY.name}, our data-powered SEO campaigns provide an all-in-one revenue acceleration solution covering technical health, Core Web Vitals, hyper-targeted PPC, addressable geofencing, and review acceleration.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="site-button px-7 py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]"
                style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
              >
                <span style={{ color: '#FFFFFF' }}>Request SEO Audit &amp; Proposal</span>
                <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-solar" />
                <span>Speak with SEO Strategist</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-black/10 pt-8">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
                <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs ── */}
      <section className="py-10 border-b border-black/8 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white border border-black/10 text-zinc-600 hover:text-black'
              }`}
            >
              All Capabilities (9)
            </button>
            <button
              onClick={() => setActiveTab('organic')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'organic'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white border border-black/10 text-zinc-600 hover:text-black'
              }`}
            >
              Organic Search &amp; Core Web Vitals (4)
            </button>
            <button
              onClick={() => setActiveTab('paid')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'paid'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white border border-black/10 text-zinc-600 hover:text-black'
              }`}
            >
              PPC &amp; Geofencing (3)
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'social'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-white border border-black/10 text-zinc-600 hover:text-black'
              }`}
            >
              Social Media &amp; Reviews (2)
            </button>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            Noida HQ In-House Growth Pods
          </div>
        </div>
      </section>

      {/* ── Core Service Offerings Grid ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div id="full-scope" className="scroll-mt-36 text-left max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Full Service Scope
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
            Search, Paid Advertising &amp; Growth Intelligence
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
            Every campaign is tailored to your commercial objectives, combining technical speed engineering, competitive telemetry, and multi-channel marketing automation to build an unshakeable digital footprint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-36 p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-black/8 hover:border-black/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              {service.id === 'enterprise-seo' && (
                <span id="organic-search" className="absolute -top-36 left-0" aria-hidden="true" />
              )}
              {service.id === 'ppc-management' && (
                <span id="ppc" className="absolute -top-36 left-0" aria-hidden="true" />
              )}
              {service.id === 'review-acceleration' && (
                <span id="reviews" className="absolute -top-36 left-0" aria-hidden="true" />
              )}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white border border-black/10 text-solar font-medium tracking-wide">
                    {service.tag}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    ARKA Standard
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black mt-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-solar font-medium mt-1">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-light">
                  {service.desc}
                </p>

                <div className="mt-6 border-t border-black/8 pt-5">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                    Deliverables &amp; Technical Capabilities:
                  </p>
                  <ul className="space-y-2.5">
                    {service.highlights.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-solar shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/8 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">100% In-House Delivery</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-solar transition-colors"
                >
                  <span>Request Custom Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Knowledge & Strategic Guidance Strip ── */}
      <section className="py-20 sm:py-28 bg-zinc-950 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-left max-w-3xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Executive Guidance
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              The Search &amp; Growth Playbook
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              Clear, honest analysis of how modern search algorithms operate and how ambitious companies outmaneuver legacy competitors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {guides.map((g, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-solar mb-5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{g.title}</h3>
                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-light">{g.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-solar" />
                  <span>Strategic Standard at ARKA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Section ── */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mt-3">
            Common Inquiries on Search &amp; Lead Generation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            Everything you need to know about our SEO contracts, reporting cadences, and Noida HQ engineering.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden bg-zinc-50/50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-black hover:text-solar transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-solar' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed font-light border-t border-black/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-zinc-900 text-white border border-black shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Free Growth Diagnosis
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Get an Honest SEO &amp; Lead Generation Audit
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Our senior search engineers in Sector 63, Noida will review your technical speed, keyword gaps, and competitor footprint—completely free of charge.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-solar text-white hover:bg-orange-600 font-semibold text-sm transition-all shadow-md"
              >
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-zinc-800 text-white hover:bg-zinc-700 font-semibold text-sm transition-all"
              >
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
