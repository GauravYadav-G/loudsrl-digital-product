'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LiquidBackground, { PRESETS } from '../LiquidBackground';

export default function PortfoliteHero() {
  // Default to ARKA Solar Fire palette (index 0)
  const [presetIndex, setPresetIndex] = useState(0);

  useEffect(() => {
    // Check if user previously saved a theme preference for testing
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arka-hero-theme');
      if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (!isNaN(idx) && idx >= 0 && idx < PRESETS.length) {
          setPresetIndex(idx);
        }
      }

      const handleThemeChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ index: number }>;
        if (typeof customEvent.detail?.index === 'number') {
          setPresetIndex(customEvent.detail.index);
        }
      };

      window.addEventListener('arka:theme-change', handleThemeChange);
      return () => window.removeEventListener('arka:theme-change', handleThemeChange);
    }
  }, []);

  const line1Words = ['Digital', 'Products', 'that', 'you'];
  const line2Words = ['need', 'Indeed'];

  const scrollToProjects = () => {
    const target = document.querySelector('#projects') || document.querySelector('#works');
    if (!target) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element | string, opt?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -70 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 sm:pt-40 pb-12 sm:pb-16 font-framer bg-white text-black overflow-hidden flex flex-col justify-between items-center text-center isolate select-none" style={{ contain: 'layout style' }}>
      {/* Interactive Liquid WebGL Canvas Background (Defaults to Solar Fire) */}
      <LiquidBackground preset={presetIndex} />

      {/* Subtle Feathered Bottom Blend into White Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/40 to-transparent z-10"
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center my-auto pt-6 sm:pt-10">
        {/* Hero Title with Framer Word Blur-Fade-In Animation */}
        <h1
          style={{ color: '#ffffff' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal tracking-tight text-white leading-[1.05] sm:leading-[1.02] max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
            {line1Words.map((word, i) => (
              <motion.span
                key={word}
                style={{ color: '#ffffff' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 mt-1 sm:mt-2">
            {line2Words.map((word, i) => (
              <motion.span
                key={word}
                style={{ color: word === 'Indeed' ? 'rgba(255, 255, 255, 0.75)' : '#ffffff' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block ${word === 'Indeed' ? 'font-light' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-white text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed text-balance drop-shadow-md"
        >
          We think, design and develop custom enterprise software, high-performance web platforms, and search engine dominance for forward-thinking brands.
        </motion.p>

        {/* Action Buttons (Framer Authentic Glow + Outline) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary Button with Radial Glow Backing */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-full blur-md opacity-40 group-hover:opacity-80 transition duration-500" />
            <a
              href="#contact"
              className="site-button site-button--light relative px-7 sm:px-8 py-3 rounded-full bg-white hover:bg-zinc-100 text-black text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 transition-all shadow-[0_4px_24px_rgba(255,255,255,0.25)]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Secondary Ghost Button */}
          <button
            onClick={scrollToProjects}
            style={{ color: '#ffffff' }}
            className="px-7 sm:px-8 py-3 rounded-full bg-black/25 hover:bg-black/40 border border-white/30 hover:border-white/60 text-white text-xs sm:text-sm font-medium tracking-wide transition-all backdrop-blur-md shadow-sm cursor-pointer"
          >
            See Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Mouse Indicator — Pure icon button, no text */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mt-10 flex items-center justify-center select-none"
      >
        <button
          onClick={scrollToProjects}
          aria-label="Scroll down to projects"
          className="w-5 h-8 rounded-full border border-white/40 bg-white/15 hover:bg-white/25 hover:border-white transition-all backdrop-blur-sm flex justify-center pt-1.5 cursor-pointer shadow-sm group"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          />
        </button>
      </motion.div>
    </section>
  );
}
