import { useEffect, useRef } from 'react';
import { ArrowRight, Lightbulb, ListChecks, Rocket } from 'lucide-react';
import { ArtcraftGalaxyCanvas } from '../ArtcraftGalaxyCanvas';

export default function PortfoliteProcess() {
  const galaxyContainerRef = useRef<HTMLDivElement>(null);
  const galaxyInstanceRef = useRef<ArtcraftGalaxyCanvas | null>(null);

  useEffect(() => {
    const container = galaxyContainerRef.current;
    if (!container) return;

    try {
      const galaxy = new ArtcraftGalaxyCanvas(container, {
        theme: 'light',
        offsetX: 0,
        offsetY: 0,
      });
      galaxyInstanceRef.current = galaxy;
    } catch (err) {
      console.warn('Failed to initialize ArtcraftGalaxyCanvas in Process section:', err);
    }

    return () => {
      if (galaxyInstanceRef.current) {
        galaxyInstanceRef.current.destroy();
        galaxyInstanceRef.current = null;
      }
    };
  }, []);

  const steps = [
    {
      num: '1',
      title: 'Define Your Vision',
      desc: 'Find the commercial and technical roadmap tailored to your needs, establishing clear KPIs, target buyer personas, and system architecture to ensure predictable execution.',
      icon: Lightbulb,
    },
    {
      num: '2',
      title: 'Submit Your Request',
      desc: 'Seamless collaboration through our dedicated project portal, ensuring your requirements are refined and engineered with speed, precision, and rigorous code reviews.',
      icon: ListChecks,
    },
    {
      num: '3',
      title: 'Project Delivered',
      desc: 'Tested and deployed on modern edge infrastructure with continuous CRO and ranking compounds, ensuring your product launches on time and beats business expectations.',
      icon: Rocket,
    },
  ];

  return (
    <section
      id="process"
      className="relative py-20 sm:py-32 font-framer bg-white text-black border-t border-black/10 overflow-hidden"
    >
      {/* 3D Artcraft Celestial Galaxy Wheel in Background (Centered) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dynamic Warm Ambient Light Pool in Center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[500px] blur-[120px] rounded-full opacity-20 bg-[#FF8A00]"
        />

        <div
          ref={galaxyContainerRef}
          className="w-full h-full opacity-90"
        />
        {/* Soft radial vignette so typography & cards remain razor-sharp while wheel is visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(255,255,255,0.6)_75%,#ffffff_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Photo with Glassmorphic Frame & HUD Spec */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 bg-white/70 backdrop-blur-xl shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="/portfolite/process-banner.png"
                  alt="ARKA Engineering & Production Process"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[520px] sm:h-[640px] object-cover opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80" />

                {/* HUD Spec Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-black/10 shadow-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="mono text-[10px] uppercase tracking-[0.18em] font-bold text-zinc-900">
                      Engineering Discipline
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    Full-stack architecture verified against enterprise SLAs and production telemetry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, CTAs & 3 Step Cards */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Design &amp; Engineering Process</span>
            </div>

            {/* Title & Subtitle with protective glass scrim */}
            <div className="relative p-3 -ml-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-black/5">
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-none">
                Process
              </h2>

              <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Crafting bold digital products and scalable systems that inspire and elevate forward-thinking brands with proven engineering discipline.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center gap-2 framer-btn-primary shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="px-6 py-2.5 bg-white/90 hover:bg-zinc-100 border border-black/10 text-zinc-800 text-xs sm:text-sm font-medium rounded-full transition-colors backdrop-blur-sm shadow-sm"
              >
                See Projects
              </a>
            </div>

            {/* 3 Step Cards Stack */}
            <div className="mt-10 w-full flex flex-col gap-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="relative p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 hover:border-black/25 transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    {/* Top Row: Icon + Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:text-solar transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-zinc-400 font-mono text-xs">{step.num}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
