import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Briefcase, Sparkles, CheckCircle2, Send, ShieldCheck, HeartHandshake, Zap, Compass } from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { ROLES, COMPANY } from '../lib/data';

export default function PortfoliteCareers() {
  const [selectedTeam, setSelectedTeam] = useState('All');
  const [selectedRoleForModal, setSelectedRoleForModal] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    portfolio: '',
    message: '',
  });

  const teams = ['All', 'Marketing', 'Technology', 'Creative', 'Growth'];
  const filteredRoles =
    selectedTeam === 'All'
      ? ROLES
      : ROLES.filter((r) => r.team === selectedTeam);

  const perks = [
    {
      title: 'Director-Led Mentorship',
      desc: 'Work directly alongside directors and senior engineers. Every single project is reviewed by craft leadership, not an account coordinator.',
      icon: Compass,
    },
    {
      title: 'Real Production Ownership',
      desc: 'Your name on the production. You participate from client discovery through architecture, engineering, and live launch.',
      icon: ShieldCheck,
    },
    {
      title: 'Cross-Discipline Stack',
      desc: 'Master full-stack Next.js, search engine algorithm models, CRM cloud architectures, and 4K cinema cameras all in one team.',
      icon: Zap,
    },
    {
      title: 'Humane & Hybrid Culture',
      desc: 'Flexible hours, high autonomy, hybrid and remote allowances, and zero performative overtime. We value craft over seat-time.',
      icon: HeartHandshake,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRoleForModal(null);
      setForm({ name: '', email: '', phone: '', role: '', portfolio: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center text-center">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-xs font-medium text-zinc-700 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span>We are hiring · Noida Sector 63 &amp; Remote</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08]"
          >
            Come and build with us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            We hire for craft, curiosity, and high standards. Join an in-house team of engineers, SEO architects, and filmmakers scaling 1,500+ global brands and manufacturers.
          </motion.p>
        </div>
      </section>

      {/* Open Roles Showcase */}
      <section id="roles" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-black/10">
          <div className="flex flex-wrap gap-2">
            {teams.map((t) => {
              const count = t === 'All' ? ROLES.length : ROLES.filter((r) => r.team === t).length;
              const active = selectedTeam === t;
              return (
                <button
                  key={t}
                  onClick={() => setSelectedTeam(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                    active
                      ? '!bg-black !text-white font-semibold shadow-md'
                      : '!bg-zinc-100 !border !border-black/10 !text-zinc-700 hover:!text-black hover:!bg-zinc-200'
                  }`}
                >
                  <span>{t}</span>
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
          </div>

          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            {filteredRoles.length} Open Positions
          </span>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredRoles.map((role) => (
              <motion.div
                key={role.role}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 border border-black/10 text-zinc-700">
                      {role.team}
                    </span>
                    <span className="text-zinc-500 font-mono text-xs flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight group-hover:text-solar transition-colors">
                    {role.role}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-600">
                    <MapPin className="w-3.5 h-3.5 text-solar" />
                    <span>{role.place}</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-black/8 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-light">
                    Direct Team Interview
                  </span>
                  <button
                    onClick={() => {
                      setSelectedRoleForModal(role.role);
                      setForm((p) => ({ ...p, role: role.role }));
                    }}
                    className="px-4 py-2 rounded-full !bg-black text-white hover:!bg-zinc-800 text-xs font-semibold tracking-wide border border-black/15 transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Apply for this role</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Perks & Culture Bento Grid */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs font-medium text-zinc-700 mb-4">
            <Sparkles className="w-3 h-3 text-solar" />
            <span>Why Join ARKA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Built for craftspeople who take pride in their work.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-black/10 hover:border-black/25 transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-zinc-700 group-hover:text-solar transition-colors mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                  {perk.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-light">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form Drawer / Modal */}
      <AnimatePresence>
        {selectedRoleForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="career-application-heading"
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border border-black/15 shadow-2xl overflow-hidden text-black"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-solar font-mono font-semibold">
                    Application
                  </span>
                  <h3 id="career-application-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-black mt-1">
                    {selectedRoleForModal}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedRoleForModal(null)}
                  aria-label="Close application form"
                  className="w-11 h-11 rounded-full border border-black/15 bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 hover:text-black transition-colors"
                >
                  ✕
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="career-name" className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="career-name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="career-email" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="career-email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="career-phone" className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="career-phone"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 9xxxxxxxx"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="career-portfolio" className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Portfolio, GitHub, or LinkedIn Link *
                    </label>
                    <input
                      type="url"
                      id="career-portfolio"
                      required
                      value={form.portfolio}
                      onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                      placeholder="https://github.com/yourhandle"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="career-message" className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Why you? (Brief note on your best projects)
                    </label>
                    <textarea
                      rows={3}
                      id="career-message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about the hardest problem you solved..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-black/15 focus:border-black text-sm text-black placeholder-zinc-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="site-button w-full py-3 rounded-full !bg-black !text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:!bg-zinc-800 shadow-lg"
                    >
                      <span>Send Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-4 shadow-lg">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">Application Received</h4>
                  <p className="text-zinc-600 text-sm max-w-xs font-light">
                    Our craft director will review your links and respond directly within 3 business days.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PortfoliteFooter />
    </div>
  );
}
