'use client';

import { useState, useEffect } from 'react';
import Link from '@/components/Link';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, MapPin, Sparkles, Palette } from 'lucide-react';
import { SERVICES, COMPANY, OFFICES } from '../../lib/data';
import { CircleArrow } from '../ui';
import { PRESETS, PRESET_NAMES, PRESET_ACCENTS } from '../LiquidBackground';

/* ─────────────────────────────────────────────────────────────
   BOTTOM THEME TESTER COMPONENT
   Default theme: Solar Fire (0)
   Allows interactive testing of all 12 fluid WebGL palettes
   ───────────────────────────────────────────────────────────── */
function ThemeTesterButton() {
  const [currentPreset, setCurrentPreset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arka-hero-theme');
      if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (!isNaN(idx) && idx >= 0 && idx < PRESETS.length) {
          setCurrentPreset(idx);
        }
      }

      const handleThemeChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ index: number }>;
        if (typeof customEvent.detail?.index === 'number') {
          setCurrentPreset(customEvent.detail.index);
        }
      };

      window.addEventListener('arka:theme-change', handleThemeChange);
      return () => window.removeEventListener('arka:theme-change', handleThemeChange);
    }
  }, []);

  const selectTheme = (index: number) => {
    setCurrentPreset(index);
    if (typeof window !== 'undefined') {
      localStorage.setItem('arka-hero-theme', String(index));
      window.dispatchEvent(new CustomEvent('arka:theme-change', { detail: { index } }));
    }
  };

  const nextTheme = () => {
    const next = (currentPreset + 1) % PRESETS.length;
    selectTheme(next);
  };

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative inline-flex items-center gap-2">
      {/* Quick Test Theme Swatch Icon Button — No text, icon itself is button */}
      <button
        type="button"
        onClick={nextTheme}
        className="w-8 h-8 rounded-full bg-paper/5 hover:bg-paper/15 border border-paper/15 hover:border-paper/30 flex items-center justify-center transition-all cursor-pointer group shadow-sm"
        title={`Fluid theme: ${PRESET_NAMES[currentPreset]} (Click to test next)`}
        aria-label="Cycle theme"
      >
        <span
          className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor] transition-colors group-hover:scale-110"
          style={{ backgroundColor: PRESET_ACCENTS[currentPreset] }}
        />
      </button>

      {/* Palette Tray Trigger Icon Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-paper/5 hover:bg-paper/15 border border-paper/15 hover:border-paper/30 flex items-center justify-center text-paper/60 hover:text-white transition-colors cursor-pointer"
        title="Open theme palette"
        aria-label="Toggle theme picker tray"
      >
        <Palette className="w-3.5 h-3.5" />
      </button>

      {/* Popover Tray with All 12 Themes */}
      {isOpen && (
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[340px] p-4 rounded-2xl bg-void/95 backdrop-blur-xl border border-paper/20 shadow-2xl z-50 text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-paper/10">
            <span className="text-xs font-mono uppercase tracking-wider text-paper/80 font-semibold">
              Test Fluid Themes ({PRESETS.length})
            </span>
            <button
              type="button"
              onClick={() => selectTheme(0)}
              className="text-[10px] font-mono text-solar hover:underline cursor-pointer"
            >
              Reset to Solar Fire
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 max-h-[220px] overflow-y-auto pr-1">
            {PRESET_NAMES.map((name, idx) => {
              const isSelected = idx === currentPreset;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => {
                    selectTheme(idx);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-solar/20 text-white border border-solar/40 font-medium'
                      : 'hover:bg-paper/5 text-paper/70 hover:text-white border border-transparent'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                    style={{ backgroundColor: PRESET_ACCENTS[idx] }}
                  />
                  <span className="truncate text-[11px]">{name}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-paper/10 flex items-center justify-between text-[10px] font-mono text-paper/50">
            <span>Defaults to Solar Fire</span>
            <button
              type="button"
              onClick={scrollToHero}
              className="text-solar hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Scroll to Hero</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortfoliteFooter() {
  const serviceList = SERVICES.slice(0, 7);

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

        {/* Col 4: Services */}
        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5 font-semibold">
            Services
          </p>
          <ul className="space-y-3">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="text-paper/70 hover:text-solar transition-colors block text-xs sm:text-sm truncate max-w-[200px]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Location & Contact */}
        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5 font-semibold">
            Contact Details
          </p>
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

      {/* ── Legal Band & Interactive Theme Tester ── */}
      <div className="border-t border-paper/10 relative z-20">
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 mono text-[0.58rem] tracking-[0.14em] uppercase text-paper/40">
            <span>© 2026 {COMPANY.name} — Founded by Kranti</span>
            <span className="hidden sm:inline text-paper/20">•</span>
            <span className="text-paper/50">Sector 63, Noida (Delhi NCR)</span>
          </div>

          {/* Theme Tester Button in the bottom of website */}
          <div className="flex items-center gap-3">
            <ThemeTesterButton />
          </div>

          <div className="flex items-center gap-5 mono text-[0.58rem] tracking-[0.14em] uppercase text-paper/40">
            <Link to="/contact" className="hover:text-paper transition-colors">Support SLA</Link>
            <a href="#" className="hover:text-paper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
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
