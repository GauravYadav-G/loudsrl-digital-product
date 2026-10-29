'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users2,
  Building2,
  ShieldCheck,
  Zap,
  Code2,
  Video,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  HeartHandshake,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Library,
  BookOpen,
  ChevronDown,
  Globe,
  TrendingUp,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

export default function WhoWeArePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '15+', label: 'Years Enterprise Heritage' },
    { value: '1,500+', label: 'Clients Served Globally' },
    { value: '100%', label: 'In-House Noida Team' },
    { value: 'Zero', label: 'Outsourced Contractors' },
  ];

  const teamPods = [
    {
      role: 'Full-Stack Software & Cloud Architecture',
      icon: Code2,
      members: 'Next.js 15, React, Node.js, Python, PostgreSQL, AWS & Docker Specialists',
      desc: 'Architecting mission-critical web platforms, custom ERP/CRM engines, high-concurrency microservices, and secure API gateways with complete source code ownership.',
      deliverables: ['Custom CRM/ERP builds', 'Scalable Next.js frontends', 'Database optimization', 'Cloud DevOps & CI/CD'],
    },
    {
      role: 'Search Engine & Performance Media',
      icon: Search,
      members: 'Technical SEO Engineers, PPC Managers & CRO Data Analysts',
      desc: 'Managing commercial Google page-one rankings, Core Web Vitals speed optimization, Google Guaranteed ads, addressable geofencing, and multi-touch attribution.',
      deliverables: ['Enterprise SEO audits', 'High-ROAS Google/Meta ads', 'Core Web Vitals tuning', 'Call tracking attribution'],
    },
    {
      role: 'Human-Centered UX & Design Systems',
      icon: Layers,
      members: 'Product Designers, Design System Leads & Motion Animators',
      desc: 'Creating atomic Figma design systems, WCAG 2.2 accessibility compliance, and silky Framer Motion frontends that elevate brand prestige and accelerate conversions.',
      deliverables: ['Interactive Figma prototypes', 'Design tokens & UI kits', 'ADA / WCAG 2.2 audits', 'Friction & heatmap analysis'],
    },
    {
      role: 'Cinematography & Visual Production',
      icon: Video,
      members: 'Cinema Directors, Cinematographers, DaVinci Colorists & Editors',
      desc: 'Shooting 4K/8K corporate films, brand documentaries, factory tours, and high-converting commercial video ads that build undeniable credibility and trust.',
      deliverables: ['4K/8K cinema shoots', 'Product demo videos', 'Explainer animations', 'Broadcast TV commercials'],
    },
  ];

  const methodology = [
    {
      num: '01',
      title: 'Zero Outsourcing Philosophy',
      desc: 'Every single line of code, design layout, marketing campaign, and film shoot is executed directly by our full-time in-house team in Sector 63, Noida. By eliminating middle-tier subcontractors, we maintain absolute quality control, data security, and uninterrupted accountability.',
    },
    {
      num: '02',
      title: 'Agile Two-Week Sprints',
      desc: 'We operate in disciplined two-week development sprints with demonstrable milestone reviews. You test working code on staging servers every fortnight—eliminating guesswork and ensuring complete alignment with commercial objectives.',
    },
    {
      num: '03',
      title: 'Direct Specialist Access',
      desc: 'Our clients communicate directly with senior software architects, performance marketing directors, and filmmakers—never junior account coordinators passing messages back and forth. You receive immediate answers and rapid execution.',
    },
    {
      num: '04',
      title: 'Radical Reporting Transparency',
      desc: 'You see the exact same real-time dashboards and analytics telemetry we see internally. Complete visibility into organic search rankings, Cost Per Acquisition (CPA), conversion bottlenecks, and every rupee of advertising spend.',
    },
  ];

  const pricingGuides = [
    {
      discipline: 'Custom Web & Software Development',
      range: 'From ₹1.2 Lakh (Fixed Scope)',
      desc: 'High-performance responsive websites, web portals, and custom CRM platforms built with Next.js, React, Node.js, and cloud infrastructure.',
      includes: [
        'Technical architecture specification & schema design',
        'Bespoke UI/UX design system in Figma',
        'Full-stack development with automated testing',
        'Production cloud deployment & full source code handover',
      ],
    },
    {
      discipline: 'SEO & Inbound Lead Generation',
      range: '₹40,000 – ₹1,80,000 / month',
      desc: 'Full-service enterprise search engine optimization covering technical crawl health, Core Web Vitals, authoritative backlinks, and high-volume commercial ranking.',
      includes: [
        'Deep technical crawl and speed audit',
        'Commercial keyword intent mapping & clustering',
        'Monthly on-page optimization & content publishing',
        'High-authority editorial backlink acquisition',
      ],
    },
    {
      discipline: 'PPC & Digital Advertising Management',
      range: '10% – 15% of Ad Spend or Retainer',
      desc: 'Data-driven paid media campaigns across Google Ads, Meta, LinkedIn, and addressable geofencing networks focused on ROAS and pipeline growth.',
      includes: [
        'Account structure setup & query management',
        'Competitor keyword research & bid war mitigation',
        'Ad copy & creative variant split-testing',
        'Conversion tracking & click fraud protection',
      ],
    },
    {
      discipline: 'Corporate Film & Video Production',
      range: 'Custom Quote by Production Scale',
      desc: 'Broadcast-quality corporate documentaries, product demo films, TV commercial ads, and factory shoots produced by our in-house cinematography crew.',
      includes: [
        'Concept treatment, scripting & storyboarding',
        'On-location filming with 4K/8K cinema cameras & lighting',
        'DaVinci Resolve color grading & sound mastering',
        'Optimized aspect ratio cut-downs for social and landing pages',
      ],
    },
  ];

  const guides = [
    {
      title: 'Why the Unified In-House Pod Model Beats Fragmented Agency Outsourcing',
      cat: 'Organizational Strategy',
      readTime: '6 min read',
      desc: 'When code, creative, search marketing, and video production sit under one roof, projects ship faster with zero architectural miscommunications and 100% intellectual property security.',
    },
    {
      title: 'Radical Reporting Transparency: Why We Share the Exact Dashboards We Use',
      cat: 'Governance & Ethics',
      readTime: '5 min read',
      desc: 'How traditional agency reporting hides underperforming campaigns. Why ARKA Technovation shares live, unfiltered telemetry connecting digital spend directly to pipeline revenue.',
    },
    {
      title: 'Corporate Social Responsibility (CSR) in Enterprise Technology',
      cat: 'Community Impact',
      readTime: '4 min read',
      desc: 'How our STEM mentorship programs, university engineering workshops across Delhi NCR, and pro-bono small business assistance foster long-term technological empowerment.',
    },
  ];

  const faqs = [
    {
      q: 'Who founded and leads ARKA Technovation?',
      a: 'ARKA Technovation is founded and led by Mr. Kranti Parashar, an eminent technology leader with over 15 years of industry experience across enterprise web engineering, digital marketing strategy, and corporate film production.',
    },
    {
      q: 'Where is your corporate headquarters located?',
      a: 'Our corporate headquarters is located at Royace Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India. Our facility houses our engineering development bays, design studios, 4K editing and color grading suites, and meeting rooms.',
    },
    {
      q: 'Why does ARKA Technovation refuse to outsource work to freelancers or third-party agencies?',
      a: 'Outsourcing creates fragmented communication, security risks, variable code quality, and intellectual property ambiguities. By keeping 100% of our software developers, SEO specialists, designers, and cinematographers in-house in Sector 63, Noida, we guarantee institutional quality, rigorous accountability, and direct client communication.',
    },
    {
      q: 'What is the ARKA Centralized Content Library?',
      a: 'Our Centralized Content Library is an institutional repository that stores, manages, and organizes all digital assets utilized in client operations—marketing collateral, product specifications, training videos, brand guidelines, cinema b-roll, and interactive presentations. It ensures version stability, rapid retrieval, and seamless collaboration across enterprise teams.',
    },
    {
      q: 'How does ARKA Technovation contribute to the local community in Uttar Pradesh and Delhi NCR?',
      a: 'We believe technology companies have a responsibility to uplift their local ecosystems. We run quarterly STEM workshops for government school students in Noida, mentor university engineering undergraduates in modern web frameworks (Next.js, Python), and provide pro-bono digital strategy to emerging local manufacturers and small businesses in the industrial sectors of Delhi NCR.',
    },
    {
      q: 'Can we schedule an in-person meeting at your Noida headquarters?',
      a: 'Yes, absolutely. We welcome enterprise executives, founders, and marketing directors to visit our corporate office at Royace Business Park, Office No- 202, C-4, Sector 63, Noida, Uttar Pradesh 201301, India. You can meet our team, inspect our development bays and film editing suites, and review your project roadmap in person.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-solar">Who We Are</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-solar" />
            <span>Founded &amp; Guided by Mr. Kranti Parashar · Headquartered in Sector 63, Noida</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] max-w-4xl mx-auto">
            Who We Are — ARKA Technovation.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to {COMPANY.legalName}, a renowned company in the fields of enterprise web development, digital marketing, and corporate filmmaking. Guided by Mr. Kranti Parashar, our dedicated team of full-stack developers, cinematographers, and digital marketing strategists helps businesses unlock their full digital potential and achieve sustainable, compounding market growth.
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-black/10 pt-8 max-w-4xl mx-auto">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
                <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15-Year Heritage & The Unified In-House Advantage ── */}
      <section id="story" className="scroll-mt-36 py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Our Heritage &amp; Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
              15+ Years of Dedicated Engineering &amp; Market Growth
            </h2>
            <p className="mt-5 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              For over 15 years, {COMPANY.name} has been dedicated to helping businesses across diverse industries augment their digital marketing efforts, build scalable software, and gain an undeniable competitive edge. We follow strict institutional values that have established us as an undisputed leader in business growth and corporate promotions.
            </p>
            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              We offer actionable services and strategic insights at every stage of an enterprise’s life cycle. By continuously investing in industry-leading tools, top-tier engineering talent, and 4K cinema production equipment, we ensure our partners benefit from the most forward-thinking digital approaches in India and globally.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-black/10 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl">
                A
              </div>
              <div>
                <h3 className="text-xl font-bold text-black tracking-tight">{COMPANY.name}</h3>
                <p className="text-xs text-zinc-500 font-mono">Founded &amp; Led by Mr. Kranti Parashar</p>
              </div>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed font-light mb-6">
              &quot;Our mission from day one has been simple: eliminate agency fluff, banish outsourcing, and bring elite software engineers, technical SEO minds, and cinema directors together under one roof. When specialists collaborate in the same room, extraordinary things happen for our clients.&quot;
            </p>
            <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Corporate HQ: Sector 63, Noida</span>
              <span className="text-solar font-semibold">100% In-House</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Working Methodology Pillars ── */}
      <section id="methodology" className="scroll-mt-36 py-20 sm:py-28 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Our Working Culture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
              How Ambitious Companies Work With ARKA
            </h2>
            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              We operate with the discipline of an engineering firm and the creative standards of a boutique studio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methodology.map((m) => (
              <div
                key={m.num}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 hover:border-black/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-100 border border-black/10 text-solar font-medium tracking-wide">
                    Methodology {m.num}
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-4 tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <CheckCircle2 className="w-4 h-4 text-solar" />
                  <span>Standardized on every ARKA engagement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── In-House Specialist Pods ── */}
      <section className="py-20 sm:py-28 bg-zinc-950 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Specialized Pods
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              One Cross-Functional Team Under One Roof
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              No disconnected silos or third-party agencies. Our engineers, designers, marketers, and filmmakers sit together in Sector 63, Noida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {teamPods.map((pod) => {
              const Icon = pod.icon;
              return (
                <div key={pod.role} className="p-8 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-solar mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{pod.role}</h3>
                    <p className="text-xs font-mono text-zinc-400 mt-2">{pod.members}</p>
                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-light">{pod.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {pod.deliverables.map((item, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Centralized Content Library & Operational Efficiency ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-black/10">
            <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-solar mb-6 shadow-sm">
              <Library className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Institutional Asset Governance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              The ARKA Centralized Content Library
            </h3>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
              A Content Library within a software company is an institutional repository that stores, manages, and organizes all digital assets utilized in company operations. This contains marketing collateral, product technical descriptions, training materials, executive presentations, cinema b-roll, high-resolution imagery, and production master files.
            </p>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
              Our Content Library enhances operational efficiency, preserves brand consistency, and streamlines the process of creating and handling client collateral. Team members across departments can instantly access the most up-to-date version of any asset, enabling rapid execution without version conflicts.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
              Community &amp; Corporate Social Responsibility (CSR)
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
              Positive Community Impact in Noida &amp; Delhi NCR
            </h2>
            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Community impact in a technology company refers to the positive influence that the organization exercises on its local, regional, and national ecosystem. At {COMPANY.name}, we believe our responsibility extends far beyond commercial engagements.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-solar shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700 font-light">
                  <strong className="font-semibold text-black">STEM Mentorship:</strong> Quarterly coding and digital literacy workshops for students in government schools across Noida and Greater Noida.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-solar shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700 font-light">
                  <strong className="font-semibold text-black">University Engineering Support:</strong> Mentoring computer science undergraduates in Uttar Pradesh on production frameworks (Next.js, Python, Docker).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-solar shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700 font-light">
                  <strong className="font-semibold text-black">Pro-Bono Small Business Assistance:</strong> Free digital strategy audits and web support for emerging traditional manufacturers and local enterprises in Delhi NCR.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-solar shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-700 font-light">
                  <strong className="font-semibold text-black">Open-Source Contributions:</strong> Sponsoring and releasing open-source software libraries and web development components for the global developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transparent Pricing Guides ── */}
      <section id="pricing" className="scroll-mt-36 py-20 sm:py-28 bg-zinc-50 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Honest Commercials
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-3">
              Transparent Pricing Guides
            </h2>
            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              We believe in upfront commercial clarity. No hidden fees, no opaque contracts—just fixed scopes and measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingGuides.map((guide, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 hover:border-black/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-100 border border-black/10 text-solar font-medium tracking-wide">
                    Pricing Guide
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-4 tracking-tight">
                    {guide.discipline}
                  </h3>
                  <div className="mt-2 text-lg font-mono font-bold text-solar">
                    {guide.range}
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-light">
                    {guide.desc}
                  </p>

                  <div className="mt-6 border-t border-black/8 pt-5">
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                      Scope Highlights:
                    </p>
                    <ul className="space-y-2">
                      {guide.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-solar shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/8 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">Fixed Milestone Scopes</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-solar transition-colors"
                  >
                    <span>Request Custom Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Educational Guides & Playbooks ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Company Culture &amp; Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Strategic Playbooks on Enterprise Execution
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group"
            >
              <div>
                <span className="text-xs font-mono text-solar uppercase tracking-wider font-medium block mb-3">
                  {g.cat} · {g.readTime}
                </span>
                <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-zinc-800 transition-colors leading-snug">
                  {g.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-1.5 text-xs font-semibold text-black group-hover:text-solar transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Corporate Headquarters & Contact Information ── */}
      <section id="leadership" className="scroll-mt-36 py-16 bg-zinc-50 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-zinc-700 mb-4">
                <Building2 className="w-3.5 h-3.5 text-solar" />
                <span>Headquarters &amp; Engineering Center</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Visit Us in Sector 63, Noida
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                {COMPANY.legalName} is located at {COMPANY.hq}. Our facility houses dedicated full-stack development bays, design review suites, 4K video editing rooms, and testing stations covering all modern mobile and desktop browsers.
              </p>
              <div className="mt-6 space-y-2.5 text-sm text-zinc-700">
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-solar shrink-0" />
                  <span>{COMPANY.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-solar shrink-0" />
                  <span>{COMPANY.phone} · Mon–Sat 9:30 AM – 6:30 PM IST</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-solar shrink-0" />
                  <span>{COMPANY.email}</span>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
                Direct Leadership Access
              </span>
              <h4 className="text-xl font-bold text-black mt-2">
                Meet With Our Leadership Team
              </h4>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-light">
                We believe executive leadership should be accessible. When evaluating an enterprise software development build, corporate film campaign, or enterprise SEO engagement, you will meet directly with Mr. Kranti Parashar and our discipline directors to align on goals and deliverables.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-solar">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-black">Sector 63, Noida HQ Consultation</p>
                  <p className="text-xs text-zinc-500">In-person &amp; virtual discovery sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Answers on Culture, Governance &amp; Location
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-black leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-600 font-light leading-relaxed border-t border-black/5 pt-4">
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
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-zinc-900 text-white border border-black shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Work With Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Let&apos;s Build Something Unmistakable
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Talk directly with Mr. Kranti Parashar and our senior pod directors in Sector 63, Noida. Receive an honest audit and fixed-milestone scope.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-solar text-white hover:bg-orange-600 font-semibold text-sm transition-all shadow-md"
              >
                <span>Initiate a Conversation</span>
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
