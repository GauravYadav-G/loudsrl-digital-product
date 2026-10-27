import { MapPin, ArrowRight } from 'lucide-react';
import { COMPANY, OFFICES } from '../../lib/data';

export default function PortfoliteAbout() {
  const capabilities = [
    'Full-Stack Web & Next.js',
    'Technical SEO & Rankings',
    'Custom CRM & Cloud ERP',
    'Corporate Film Production',
    'Headless E-Commerce',
    'UI / UX Design Systems',
    'Performance PPC & Meta Ads',
    'API & WhatsApp Automation',
  ];

  const experienceRows = [
    {
      role: 'Enterprise Digital Product Company',
      company: 'ARKA Technovation',
      period: 'Currently',
    },
    {
      role: 'Digital Marketing & Web Agency',
      company: 'Jaikvik Technology Legacy',
      period: '2012 – 2025',
    },
    {
      role: 'B2B Industrial Growth Engine',
      company: '600+ Manufacturing Plants',
      period: '2018 – 2024',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-zinc-200/[0.4] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Framer "Meet Meily" Layout) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-solar" />
              <span>Who We Are · Founded by Kranti</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
              Meet ARKA
            </h2>

            <p className="mt-6 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Founded by Kranti, ARKA Technovation brings together 12+ years of enterprise engineering, search engine dominance, and high-production corporate filmmaking under one roof. Carrying forward the team, technology, and 1,500+ client relationships of {COMPANY.legacy}.
            </p>

            {/* Capability Pills (Framer Badges) */}
            <div className="mt-8 flex flex-wrap gap-2">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 border border-black/10 text-zinc-700 hover:text-black hover:border-black/25 transition-colors cursor-default"
                >
                  {cap}
                </span>
              ))}
            </div>

            {/* Experience / Heritage Table (Authentic Framer Style) */}
            <div className="mt-10 pt-8 border-t border-black/10 w-full flex flex-col divide-y divide-black/8 text-xs sm:text-sm">
              {experienceRows.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between text-zinc-700 font-light"
                >
                  <span className="text-black font-semibold">{row.role}</span>
                  <span className="text-zinc-600">{row.company}</span>
                  <span className="text-zinc-500 font-mono text-xs">{row.period}</span>
                </div>
              ))}
            </div>

            {/* Office Locations */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-600">
              {OFFICES.map((off) => (
                <span key={off.city} className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-solar" />
                  <span>{off.city} (Sector 63)</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Large Editorial Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/4.5] shadow-xl group">
              <img
                src="/portfolite/designer.jpg"
                alt="ARKA Technovation Team & Leadership"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 inset-x-6 flex items-end justify-between z-10">
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">Engineering & Storytelling</p>
                  <p className="text-zinc-300 text-xs">Noida · Kolkata · Mumbai</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold">
                  12+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
