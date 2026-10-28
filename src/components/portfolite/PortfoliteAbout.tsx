'use client';

import { MapPin, Building2, Award, Briefcase, CheckCircle2 } from 'lucide-react';
import { COMPANY, OFFICES } from '../../lib/data';

export default function PortfoliteAbout() {
  const leadershipStrengths = [
    'Relationship Management',
    'Financial Management',
    'Marketing Strategy',
    'Team Leadership',
    'Strategic Planning',
    'Enterprise Transformations',
  ];

  const careerInstitutions = [
    { name: 'Tata Teleservices Ltd', domain: 'Telecom & Enterprise Networks' },
    { name: 'Kotak Mahindra Bank', domain: 'Banking & Financial Services' },
    { name: 'Aegon Religare', domain: 'Life Insurance & Asset Planning' },
    { name: 'Care Ratings Ltd.', domain: 'Credit Ratings & Risk Analysis' },
    { name: 'Indiamart Intermesh Ltd.', domain: 'B2B Commerce & Marketplace' },
    { name: 'Resurgent India Ltd.', domain: 'Merchant Banking & Corporate Finance' },
  ];

  const experienceRows = [
    {
      role: 'Founder & Visionary Leader',
      company: 'ARKA Technovation',
      period: 'Present',
    },
    {
      role: 'CEO & Managing Director',
      company: 'Jaikvik Technology India Pvt. Ltd.',
      period: '2012 – Present',
    },
    {
      role: 'Executive & Strategic Leadership',
      company: 'Premier Indian Financial & Corporate Institutions',
      period: '17+ Years Pedigree',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* Background ambient light pool (GPU accelerated) */}
      <div
        className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(228,228,231,0.5)_0%,rgba(228,228,231,0)_70%)] rounded-full pointer-events-none"
        style={{ transform: 'translate3d(0, -50%, 0)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Executive Biography & Pedigree */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-solar" />
              <span>Who We Are · Leadership &amp; 17+ Years Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-black leading-[1.08]">
              Meet ARKA &amp; Founder <br className="hidden sm:inline" />
              <span className="text-solar">Kranti Parashar</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-500">
              CEO &amp; Director, Jaikvik Technology India Pvt. Ltd. · Founder, ARKA Technovation
            </p>

            {/* Core Narrative */}
            <div className="mt-6 space-y-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              <p>
                The CEO and Director of Jaikvik Technology India Private Limited and Founder of ARKA Technovation,{' '}
                <strong className="font-semibold text-black">Mr. Kranti Parashar</strong> has emerged as an eminent figure in Indian industry circles with his wide exposure into different domains comprising financial levels, advertising, and communication sectors for nearly over 17 years.
              </p>
              <p>
                With a great focus on execution, he entered the higher levels of leadership with an MBA background, excelling at strategic planning and relationship building. His professional strengths include{' '}
                <span className="text-zinc-900 font-medium">Relationship Management, Financial Management, Marketing Strategy, and Team Leadership</span>. Mr. Parashar is strong at networking with key players in the industry.
              </p>
              <p>
                With his pragmatic approach, cheerful nature, and much zeal, Mr. Parashar joins the purposes of achieving integrated technology and branding solutions for enabling business transformations across sectors. Currently, under his able leadership, Jaikvik Technology stands as a well-known name in software development, digital marketing, and corporate communication, now powering ARKA Technovation’s design-led enterprise engineering era.
              </p>
            </div>

            {/* Professional Strengths Badges */}
            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-solar" />
                <span>Executive Competencies &amp; Strengths</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {leadershipStrengths.map((strength) => (
                  <span
                    key={strength}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 border border-black/10 text-zinc-700 hover:text-black hover:border-black/25 transition-colors cursor-default"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Leadership & Corporate Pedigree ("Worked in") */}
            <div className="mt-9 pt-8 border-t border-black/10 w-full">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-solar" />
                <span>Distinguished Career &amp; Institutional Pedigree</span>
              </h3>
              <p className="text-xs text-zinc-500 mb-4 font-light">
                Executive experience spanning leading Indian financial powerhouses, rating agencies, telecom, and enterprise platforms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {careerInstitutions.map((inst) => (
                  <div
                    key={inst.name}
                    className="p-3 rounded-xl bg-zinc-50 border border-black/8 hover:border-black/20 transition-all flex items-start gap-2.5 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-solar mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs sm:text-[13px] font-semibold text-zinc-900 leading-snug">
                        {inst.name}
                      </div>
                      <div className="text-[11px] text-zinc-500 font-light mt-0.5">
                        {inst.domain}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience / Heritage Table */}
            <div className="mt-8 pt-6 border-t border-black/10 w-full flex flex-col divide-y divide-black/8 text-xs sm:text-sm">
              {experienceRows.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between text-zinc-700 font-light"
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
                  <span>{off.city} (Sector 63 HQ)</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Executive Portrait of Mr. Kranti Parashar */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/15 bg-zinc-900 shadow-2xl group">
              {/* Executive Portrait Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-950">
                <img
                  src="/portfolite/kranti-parashar.jpg"
                  alt="Mr. Kranti Parashar — CEO & Director, Jaikvik Technology and Founder, ARKA Technovation"
                  loading="eager"
                  decoding="async"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay at bottom for frosted card contrast */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none" />

                {/* Top Corner Experience Pill */}
                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
                    <span>17+ Years Leadership</span>
                  </span>
                </div>

                {/* Bottom Profile Details Card */}
                <div className="absolute bottom-5 inset-x-5 z-20">
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 text-white shadow-xl">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                          <span>Mr. Kranti Parashar</span>
                        </h4>
                        <p className="text-zinc-300 text-xs sm:text-[13px] font-light mt-0.5 leading-snug">
                          CEO &amp; Director · Jaikvik Technology India Pvt. Ltd.
                        </p>
                        <p className="text-solar text-xs font-medium mt-0.5">
                          Founder · ARKA Technovation
                        </p>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 border border-white/15 shrink-0">
                        <Building2 className="w-5 h-5 text-solar" />
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-zinc-300 font-mono">
                      <span>Noida HQ · Kolkata · Mumbai</span>
                      <span className="text-white font-semibold">1,500+ Brand Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote / Philosophy Card below photo */}
            <div className="mt-4 p-4 rounded-2xl bg-zinc-50 border border-black/10 text-xs text-zinc-700 leading-relaxed font-light">
              <span className="font-semibold text-black">Executive Philosophy: </span>
              &ldquo;Achieving integrated technology and branding solutions for enabling business transformations across sectors through pragmatic execution, financial discipline, and enduring client partnerships.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
