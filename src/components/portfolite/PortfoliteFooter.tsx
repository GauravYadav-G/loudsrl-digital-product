'use client';

import Link from '@/components/Link';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { SERVICES, COMPANY, OFFICES } from '../../lib/data';
import { CircleArrow } from '../ui';

export default function PortfoliteFooter() {
  const serviceList = SERVICES.slice(0, 7);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { label: 'FB', href: '#' },
    { label: 'IN', href: 'https://linkedin.com' },
    { label: 'YT', href: 'https://youtube.com' },
    { label: 'X', href: 'https://x.com' },
    { label: 'IG', href: 'https://instagram.com' },
  ];

  return (
    <footer className="relative bg-void text-paper border-t border-paper/12 overflow-hidden selection:bg-solar selection:text-white font-framer">
      {/* ── Top CTA Band ── */}
      <div className="border-b border-paper/12 relative overflow-hidden bg-coal/40">
        <div className="absolute inset-0 bg-[radial-gradient(90%_140%_at_15%_130%,rgba(232,116,44,.12),transparent_65%)] pointer-events-none" />
        <div className="relative xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-14 lg:py-20 flex flex-col md:flex-row gap-8 justify-between md:items-end">
          <div>
            <p className="mono text-[0.62rem] tracking-[0.26em] uppercase text-solar font-medium">
              Get in touch with us today
            </p>
            <p className="mt-4 display text-[clamp(1.6rem,3.8vw,2.9rem)] leading-[1.12] max-w-[540px] text-paper">
              Let’s build something great together.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-4 font-light text-lg md:text-2xl shrink-0 hover:text-solar transition-colors"
          >
            <span className="hover-line text-paper group-hover:text-solar transition-colors">Start a project</span>
            <CircleArrow className="text-solar transition-transform duration-500 group-hover:rotate-45" size={38} />
          </Link>
        </div>
      </div>

      {/* ── 5-Column Navigation Grid ── */}
      <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 text-[13.5px] font-light">
        {/* Col 1 & 2: Brand Heritage & Spin Logo */}
        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="inline-flex items-center group cursor-pointer" aria-label="ARKA Technovation">
            <img
              src="/images/logo/arka-logo-black.png"
              alt="ARKA Technovation"
              className="h-20 sm:h-24 md:h-28 w-auto max-w-[340px] sm:max-w-[420px] object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            />
          </Link>

          <p className="max-w-sm text-paper/60 leading-[1.8] text-xs sm:text-sm">
            Welcome to {COMPANY.name}. We utilise our experience and world-class knowledge to help businesses reach their full online and digital potential, and ensure steady growth.
          </p>

          <p className="text-[12px] text-paper/40 font-mono">
            Carrying forward {COMPANY.years} years of craft from {COMPANY.legacy}.
          </p>

          {/* Social Badges */}
          <div className="flex gap-2 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center border border-paper/20 rounded-md mono text-[0.55rem] text-paper/70 hover:bg-paper hover:text-void hover:border-paper transition-all duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3: Useful Links */}
        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5 font-semibold">
            Useful Links
          </p>
          <ul className="space-y-3">
            {[
              ['Home', '/'],
              ['Our Services', '/services'],
              ['Our Work', '/work'],
              ['Careers', '/careers'],
              ['Contact & Support', '/contact'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-paper/70 hover:text-solar transition-colors block text-xs sm:text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Our Services */}
        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5 font-semibold">
            Our Services
          </p>
          <ul className="space-y-3">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-paper/70 hover:text-solar transition-colors block text-xs sm:text-sm truncate"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                to="/services"
                className="text-solar hover:underline inline-flex items-center gap-1 text-xs font-medium"
              >
                <span>View all 10 disciplines →</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: Get In Touch & Regional Offices */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 font-semibold">
              Get In Touch
            </p>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full border border-paper/20 flex items-center justify-center text-paper/60 hover:text-paper hover:bg-paper/10 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <ul className="space-y-4 text-xs">
            {OFFICES.map((o) => (
              <li key={o.city}>
                <p className="mono text-[0.55rem] tracking-[0.18em] uppercase text-solar font-medium">
                  {o.label}
                </p>
                <p className="mt-1 text-paper/70 leading-relaxed font-light">
                  {o.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </p>
              </li>
            ))}
            <li className="pt-1">
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-paper/80 hover:text-solar transition-colors block font-mono text-xs break-all"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="space-y-1">
              {COMPANY.phones.slice(0, 2).map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="block text-paper/80 hover:text-solar transition-colors font-mono text-xs"
                >
                  {p}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* ── Legal Band ── */}
      <div className="border-t border-paper/10 relative z-10">
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 mono text-[0.56rem] tracking-[0.14em] uppercase text-paper/35">
          <span>© 2026 {COMPANY.name} — Founded by Kranti</span>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-paper transition-colors">Support SLA</Link>
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
            <span className="text-paper/50">Sector 63, Noida (Delhi NCR)</span>
          </div>
        </div>
      </div>

      {/* ── Colossal Signature Bottom ARKA Animation ── */}
      <div className="relative overflow-hidden select-none pointer-events-none -mt-4 sm:-mt-6">
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center"
        >
          <p
            className="select-none text-center display leading-[0.72] text-[clamp(4.5rem,19vw,16rem)] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-paper/[0.14] via-paper/[0.05] to-transparent -mb-[0.11em] transition-all duration-700"
          >
            ARKA
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
