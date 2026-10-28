'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, Cpu, Compass, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { SERVICES, COMPANY, PROCESS } from '../lib/data';

export default function PortfoliteServicesPage() {
  const [selectedCat, setSelectedCat] = useState<'All' | 'Marketing' | 'Technology' | 'Creative'>('All');

  const categories = ['All', 'Marketing', 'Technology', 'Creative'] as const;
  const filteredServices =
    selectedCat === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.cat === selectedCat);

  const capabilities = [
    {
      domain: 'Engineering & Cloud',
      icon: Cpu,
      stack: ['Next.js 15 & React', 'Node.js & Python', 'PostgreSQL & Redis', 'Docker & AWS', 'GraphQL & REST APIs', 'Microservices'],
    },
    {
      domain: 'Search & Attribution',
      icon: Zap,
      stack: ['Technical Crawl Audits', 'Entity & Semantic Schema', 'Dynamic Call Tracking', 'Multi-Touch Attribution', 'Negative Keyword Libraries', 'Local Search Cluster'],
    },
    {
      domain: 'Design & Visual Craft',
      icon: Layers,
      stack: ['Design Tokens & Systems', 'Figma Prototyping', '4K Cinema Workflows', 'DaVinci Color Grading', 'Interactive WebGL', 'Accessible Typography'],
    },
    {
      domain: 'Governance & Security',
      icon: ShieldCheck,
      stack: ['Role-Based Access Control', 'SSL / TLS Hardening', 'Automated Daily Backups', 'Audit Trails & Logs', 'GDPR / DPDP Compliance', '24/7 SLA Guarantee'],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-solar shadow-[0_0_8px_#e8742c]" />
            <span>10 Disciplines · Engineering, Search &amp; Motion</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08]"
          >
            Capabilities engineered for scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            From high-throughput Next.js software and custom ERP architectures to page-one organic search dominance and cinema film production — we build full-cycle solutions under one roof.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {categories.map((c) => {
              const count = c === 'All' ? SERVICES.length : SERVICES.filter((s) => s.cat === c).length;
              const active = selectedCat === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                    active
                      ? '!bg-black !text-white shadow-lg shadow-black/20'
                      : '!bg-zinc-100 !text-zinc-700 hover:!text-black hover:!bg-zinc-200 !border !border-black/10'
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      active ? '!bg-white/20 !text-white font-bold' : '!bg-black/10 !text-zinc-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div layout className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden shadow-sm"
                >
                  {/* Subtle top-right hover glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-black/[0.03] to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-solar/10 transition-colors duration-500" />

                  {/* Top Bar: Kicker + Index + Stat */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-600 font-mono">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-solar" />
                        <span className="uppercase tracking-widest">{service.kicker}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 border border-black/8 text-zinc-700">
                        {service.stat} <span className="text-zinc-500 font-sans text-[10px]">{service.statLabel}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-zinc-800 transition-colors">
                        {service.title}
                      </h2>
                      <div className="w-9 h-9 rounded-full bg-zinc-100 border border-black/10 flex items-center justify-center text-zinc-600 group-hover:bg-black group-hover:text-white transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 text-zinc-600 text-sm font-light leading-relaxed">
                      {service.short}
                    </p>
                  </div>

                  {/* Sub-services Pills & Read Details */}
                  <div className="mt-8 pt-6 border-t border-black/[0.08] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.subs.slice(0, 4).map((sub) => (
                        <span
                          key={sub.name}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-black/6 text-xs text-zinc-600 font-light"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {service.subs.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-zinc-100 text-xs text-zinc-500">
                          +{service.subs.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 group-hover:text-black pt-1">
                      <span>View Scope &amp; Deliverables</span>
                      <span className="text-solar group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Capabilities & Engineering Stack Matrix */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
                Tech Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Under the hood of every build.
              </h2>
            </div>
            <p className="text-zinc-600 text-sm font-light max-w-md leading-relaxed">
              We never outsource core engineering or use fragile, unmaintainable templates. Every deliverable runs on verified production-tested architecture.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.domain}
                  className="p-6 rounded-2xl bg-white border border-black/10 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-solar mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-black tracking-tight">{cap.domain}</h3>
                    <ul className="mt-4 space-y-2">
                      {cap.stack.map((item) => (
                        <li key={item} className="text-xs text-zinc-600 font-light flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6-Step Delivery Framework */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block mb-2">
            Execution Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Six steps. Zero surprises.
          </h2>
          <p className="mt-4 text-zinc-600 text-sm font-light leading-relaxed">
            The same disciplined delivery lifecycle runs across every client engagement, ensuring full code ownership and transparent milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS.map((step) => (
            <div
              key={step.n}
              className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/20 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-solar">{step.n}</span>
                <span className="w-2 h-2 rounded-full bg-black/20" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black tracking-tight">{step.t}</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {step.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden border-t border-black/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Ready to upgrade your digital footprint?
          </h2>
          <p className="mt-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            Schedule a direct technical consultation with our engineering and growth directors. We will review your current architecture and provide an actionable strategy roadmap.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="site-button px-7 py-3 rounded-full !bg-black !text-white text-sm font-semibold hover:!bg-zinc-800 transition-colors flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
            >
              <span style={{ color: '#FFFFFF' }}>Start a Project</span>
              <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
            </Link>
            <Link
              to="/work"
              className="px-7 py-3 rounded-full bg-zinc-100 border border-black/10 text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Inspect Case Studies
            </Link>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
