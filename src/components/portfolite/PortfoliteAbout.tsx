'use client';

import { MapPin } from 'lucide-react';
import { OFFICES } from '../../lib/data';

export default function PortfoliteAbout() {
  const capabilities = [
    'Relationship Management',
    'Financial Management',
    'Marketing Strategy',
    'Team Leadership',
    'Strategic Planning',
    'Full-Stack Web & Next.js',
    'Technical SEO & Rankings',
    'Corporate Film Production',
  ];

  const workedIn = [
    'Tata Teleservices Ltd',
    'Kotak Mahindra Bank',
    'Aegon Religare',
    'Care Ratings Ltd.',
    'Indiamart Intermesh Ltd.',
    'Resurgent India Ltd.',
  ];

  const experienceRows = [
    {
      role: 'Enterprise Digital Product Company',
      company: 'ARKA Technovation',
      period: 'Currently',
    },
    {
      role: 'Executive & Industry Leadership',
      company: 'Director Kranti Parashar',
      period: '17+ Years',
    },
    {
      role: 'B2B Enterprise & Industrial Growth',
      company: 'National & Global Brands',
      period: 'Heritage',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* Background ambient light pool (GPU accelerated) */}
      <div
        className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(228,228,231,0.5)_0%,rgba(228,228,231,0)_70%)] rounded-full pointer-events-none"
        style={{ transform: 'translate3d(0, -50%, 0)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Clean Framer Editorial Layout) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-solar" />
              <span>Who We Are · Founded by Kranti Parashar</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
              Meet ARKA
            </h2>

            <p className="mt-6 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Led by Founder &amp; Director <strong className="font-semibold text-black">Mr. Kranti Parashar</strong>, an eminent figure in Indian industry circles with over 17 years of exposure across financial levels, advertising, and communication sectors. With an MBA background, focus on execution, strategic planning, and relationship management, he drives integrated technology and branding solutions for enabling business transformations across sectors.
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

            {/* Worked in Companies */}
            <div className="mt-8 pt-6 border-t border-black/10 w-full">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Worked in:
              </p>
              <div className="flex flex-wrap gap-2">
                {workedIn.map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 border border-black/8 text-zinc-800"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience / Heritage Table (Authentic Framer Style) */}
            <div className="mt-8 pt-6 border-t border-black/10 w-full flex flex-col divide-y divide-black/8 text-xs sm:text-sm">
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

          {/* Right Column: Clean Editorial Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/12 bg-zinc-100 aspect-[4/4.8] sm:aspect-[4/5] shadow-xl group">
              <img
                src="/portfolite/kranti-parashar.jpg"
                alt="Mr. Kranti Parashar — Founder & Director, ARKA Technovation"
                loading="eager"
                decoding="async"
                width="768"
                height="1024"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-6 inset-x-6 flex items-end justify-between z-10">
                <div>
                  <p className="text-white font-bold text-base sm:text-lg">Mr. Kranti Parashar</p>
                  <p className="text-zinc-300 text-xs">Founder &amp; Director · ARKA Technovation</p>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Noida · Kolkata · Mumbai</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-semibold">
                  17+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
