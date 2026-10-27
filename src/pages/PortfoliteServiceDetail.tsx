import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck, Clock, Layers } from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { SERVICES, COMPANY } from '../lib/data';

export default function PortfoliteServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white font-framer flex flex-col justify-between">
        <PortfoliteNav />
        <div className="py-44 text-center px-4 max-w-lg mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-solar mb-3">Service Not Found</p>
          <h1 className="text-4xl font-bold tracking-tight">Discipline unavailable.</h1>
          <p className="mt-4 text-sm text-zinc-400">
            The service discipline you requested does not exist or has been renamed in our catalog.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>
        <PortfoliteFooter />
      </div>
    );
  }

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8"
          >
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-black transition-colors">Services</Link>
            <span>/</span>
            <span className="text-solar">{service.title}</span>
          </motion.div>

          {/* Kicker Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-solar" />
            <span>{service.cat} · {service.kicker}</span>
          </motion.div>

          {/* Title & Metric Split */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] max-w-3xl"
            >
              {service.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-black/10 shrink-0 self-start lg:self-auto min-w-[200px]"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                Verified Benchmark
              </span>
              <p className="text-3xl sm:text-4xl font-bold text-black tracking-tight">{service.stat}</p>
              <p className="text-xs text-zinc-500 mt-1">{service.statLabel}</p>
            </motion.div>
          </div>

          {/* Deep Overview */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-8 border-t border-black/10 grid md:grid-cols-12 gap-8 items-start"
          >
            <p className="md:col-span-8 text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              {service.desc}
            </p>
            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="site-button w-full py-3 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className="w-full py-3 rounded-full bg-zinc-100 border border-black/10 text-zinc-800 text-sm font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                <span>Speak with Lead Engineer</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope of Work: Sub-services Bento Grid */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Scope of Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            What is included in this discipline.
          </h2>
          <p className="mt-3 text-sm text-zinc-600 font-light leading-relaxed">
            Every submodule is executed in-house with dedicated craft leads and guaranteed deliverables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.subs.map((sub, i) => (
            <div
              key={sub.name}
              className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/25 transition-all group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                  <span>MODULE {String(i + 1).padStart(2, '0')}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-solar transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-black tracking-tight group-hover:text-zinc-800 transition-colors">
                  {sub.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Roadmap & Deliverables Split */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Execution Roadmap */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block mb-2">
                  Delivery Framework
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Step-by-step roadmap.
                </h2>
              </div>

              <div className="space-y-6 pt-4">
                {service.process.map(([phase, desc], i) => (
                  <div
                    key={phase}
                    className="p-6 rounded-2xl bg-white border border-black/10 flex gap-5 items-start shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-solar font-mono text-xs shrink-0 font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">{phase}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Deliverables List & Quick Action */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-black/10 shadow-xl space-y-6 sticky top-28">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-1">
                  Guaranteed Output
                </span>
                <h3 className="text-xl font-bold tracking-tight text-black">
                  What you receive
                </h3>
              </div>

              <ul className="space-y-3.5 pt-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-black/10 space-y-3">
                <Link
                  to="/contact"
                  className="site-button w-full py-3.5 rounded-full !bg-black !text-white text-sm font-semibold flex items-center justify-center gap-2 hover:!bg-zinc-800 transition-colors shadow-lg"
                >
                  <span>Start this Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-[11px] text-zinc-500 font-mono">
                  Average kickoff timeline: 5–7 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between adjacent services */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-b border-black/10">
          <Link
            to={`/services/${prevService.slug}`}
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Previous</span>
              <span className="font-semibold">{prevService.title}</span>
            </div>
          </Link>

          <Link
            to="/services"
            className="px-5 py-2 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 hover:text-black hover:bg-zinc-200 transition-colors"
          >
            All 10 Services Directory
          </Link>

          <Link
            to={`/services/${nextService.slug}`}
            className="flex items-center gap-3 text-sm text-zinc-600 hover:text-black transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Next</span>
              <span className="font-semibold">{nextService.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
