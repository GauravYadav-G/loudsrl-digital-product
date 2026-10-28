import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import LiquidBackground, { PRESETS, PRESET_NAMES, PRESET_ACCENTS } from '../LiquidBackground';

export default function PortfoliteHero() {
  // Default to ARKA Solar Fire palette without random blue presets
  const [presetIndex, setPresetIndex] = useState(0);

  const shuffleColor = () => {
    setPresetIndex((prev) => (prev + 1) % PRESETS.length);
  };

  const line1Words = ['Digital', 'Products', 'that', 'you'];
  const line2Words = ['need', 'Indeed'];

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 sm:pt-40 pb-12 sm:pb-16 font-framer bg-white text-black overflow-hidden flex flex-col justify-between items-center text-center isolate select-none" style={{ contain: 'layout style' }}>
      {/* Interactive Liquid WebGL Canvas Background */}
      <LiquidBackground preset={presetIndex} />

      {/* Subtle Feathered Bottom Blend into White Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/40 to-transparent z-10"
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center my-auto">
        {/* Top Badges Row: Framer Badge + Interactive Liquid Palette Shuffle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {/* Framer "Crafting Unique" Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/25 border border-white/25 backdrop-blur-xl shadow-sm cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="text-xs sm:text-[13px] text-white font-medium tracking-wide">
              Digital Product Company · Noida, India
            </span>
          </motion.div>

          {/* Interactive Palette Shuffle Badge */}
          <motion.button
            initial={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={shuffleColor}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 border border-white/25 hover:border-white/50 backdrop-blur-xl shadow-sm transition-all cursor-pointer group"
            title="Click to shuffle fluid shader animation colors"
          >
            <span
              className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: PRESET_ACCENTS[presetIndex] }}
            />
            <span className="text-[11px] uppercase tracking-wider text-white font-medium">
              {PRESET_NAMES[presetIndex]}
            </span>
            <Sparkles className="w-3 h-3 text-solar group-hover:rotate-12 transition-transform" />
          </motion.button>
        </div>

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
                initial={{ opacity: 0.001, y: 16, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.08,
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
                initial={{ opacity: 0.001, y: 16, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + i * 0.08,
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
            className="px-7 sm:px-8 py-3 rounded-full bg-black/25 hover:bg-black/40 border border-white/30 hover:border-white/60 text-white text-xs sm:text-sm font-medium tracking-wide transition-all backdrop-blur-md shadow-sm"
          >
            See Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Mouse Indicator (Exact Framer Structure) */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mt-10 w-full max-w-xl mx-auto px-4 flex items-center justify-center gap-4 text-xs sm:text-[13px] text-white/80 font-light select-none"
      >
        <span className="whitespace-nowrap">Scroll down</span>

        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/35" />

        {/* Interactive Mouse Icon with Animated Dot */}
        <button
          onClick={scrollToProjects}
          aria-label="Scroll down to projects"
          className="w-5 h-8 rounded-full border border-white/40 bg-white/15 backdrop-blur-sm flex justify-center pt-1.5 hover:border-white transition-colors cursor-pointer group shadow-sm"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          />
        </button>

        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/35" />

        <span className="whitespace-nowrap">to see projects</span>
      </motion.div>
    </section>
  );
}
