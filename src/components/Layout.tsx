import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, ChevronRight, Phone, Mail, MapPin, ArrowUp, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import { NAV, COMPANY, OFFICES, SERVICES } from '../lib/data';
import { Cursor, CircleArrow, EASE } from './ui';

/* ── NAVBAR — mega-menu representation from jaikviktechnology.com ── */
function Navbar({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [solid, setSolid] = useState(false);
  const [mobGroup, setMobGroup] = useState<string | null>('Services');
  const closeTimer = useRef<number>(0);
  const loc = useLocation();

  useEffect(() => { setMobile(false); setOpen(null); onNavigate(); }, [loc.pathname]);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    fn(); window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);

  const enter = (k: string) => { window.clearTimeout(closeTimer.current); setOpen(k); };
  const leave = () => { closeTimer.current = window.setTimeout(() => setOpen(null), 180); };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[900] transition-all duration-500 ${solid ? 'bg-void/85 backdrop-blur-xl border-b border-paper/10' : 'border-b border-transparent'}`}>
        {/* utility strip — offices + phone, as on the source site */}
        <div className={`hidden lg:block overflow-hidden transition-all duration-500 ${solid ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 h-9 flex items-center justify-between mono text-[0.58rem] tracking-[0.18em] uppercase text-paper/45 border-b border-paper/8">
            <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-solar" /> Noida · Kolkata · Mumbai</span>
            <span className="flex items-center gap-6">
              <a href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-solar transition-colors"><Phone className="h-3 w-3" /> {COMPANY.phones[0]}</a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-solar transition-colors"><Mail className="h-3 w-3" /> {COMPANY.email}</a>
            </span>
          </div>
        </div>

        {/* main bar */}
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 h-[62px] flex items-center justify-between gap-6">
          <Link to="/" data-cursor="Home" className="flex items-center gap-2.5 shrink-0">
            <span className="relative grid h-8 w-8 place-items-center">
              <span className="absolute inset-0 rounded-full border border-paper/60" />
              <span className="absolute inset-[9px] rounded-full bg-solar shadow-[0_0_14px_rgba(232,116,44,.85)]" />
              <span className="absolute inset-0 rounded-full border border-dashed border-paper/25 spin-slow" />
            </span>
            <span className="leading-none">
              <span className="block display text-[15px] text-paper">ARKA<span className="text-solar">.</span></span>
              <span className="hidden sm:block mono text-[0.5rem] tracking-[0.24em] uppercase text-paper/45 mt-0.5">{COMPANY.tagline}</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center h-full" onMouseLeave={leave}>
            {NAV.map(item => {
              const active = item.to === '/' ? loc.pathname === '/' : loc.pathname.startsWith(item.to);
              return (
                <div key={item.label} className="relative h-full" onMouseEnter={() => item.children && enter(item.label)}>
                  <NavLink to={item.to}
                    className={`relative h-full flex items-center gap-1.5 px-4 text-[13px] font-medium transition-colors duration-300 ${active ? 'text-solar' : 'text-paper/75 hover:text-paper'}`}>
                    {item.label}
                    {item.children && <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open === item.label ? 'rotate-180' : ''}`} />}
                    {item.badge && <span className="mono text-[0.5rem] px-1.5 py-0.5 rounded-full bg-solar/15 text-solar border border-solar/25">{item.badge}</span>}
                    <span className={`absolute bottom-0 left-4 right-4 h-px bg-solar origin-left transition-transform duration-500 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                  </NavLink>

                  {/* mega dropdown */}
                  <AnimatePresence>
                    {item.children && open === item.label && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .3, ease: EASE }}
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-1 ${item.label === 'Services' ? 'w-[680px]' : 'w-[260px]'}`}>
                        <div className="bg-coal/97 backdrop-blur-xl border border-paper/12 shadow-[0_28px_70px_rgba(0,0,0,.65)] overflow-hidden">
                          {item.label === 'Services' ? (
                            <div className="grid grid-cols-2">
                              <div className="p-2.5">
                                {item.children.slice(0, 5).map((c, i) => <DropLink key={c.to} c={c} i={i} onGo={onNavigate} />)}
                              </div>
                              <div className="p-2.5 border-l border-paper/10">
                                {item.children.slice(5).map((c, i) => <DropLink key={c.to} c={c} i={i + 5} onGo={onNavigate} />)}
                              </div>
                            </div>
                          ) : (
                            <div className="p-2.5">{item.children.map((c, i) => <DropLink key={c.to} c={c} i={i} onGo={onNavigate} />)}</div>
                          )}
                          {item.label === 'Services' && (
                            <Link to="/services" onClick={onNavigate} className="flex items-center justify-between px-5 py-3.5 border-t border-paper/10 bg-paper/[0.04] group hover:bg-solar hover:text-void transition-colors duration-400">
                              <span className="mono text-[0.6rem] tracking-[0.2em] uppercase">View all services</span>
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          )}
                        </div>
                      </motion.div>)}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contact" data-hover className="hidden sm:inline-flex mono text-[10.5px] tracking-[0.14em] uppercase h-[36px] px-5 items-center rounded-full bg-paper text-void hover:bg-solar transition-colors duration-400">Start a project</Link>
            <button onClick={() => setMobile(true)} className="lg:hidden grid h-10 w-10 place-items-center border border-paper/20" aria-label="Open menu" data-hover><Menu className="h-4.5 w-4.5 h-[18px] w-[18px]" /></button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>{mobile && (
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: .5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-y-0 right-0 w-full max-w-sm bg-void z-[950] flex flex-col lg:hidden">
          <div className="h-[62px] px-5 flex items-center justify-between border-b border-paper/10">
            <span className="display text-[15px]">ARKA<span className="text-solar">.</span></span>
            <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center border border-paper/20" aria-label="Close" data-hover><X className="h-[18px] w-[18px]" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            {NAV.map(item => (
              <div key={item.label} className="border-b border-paper/10">
                <div className="flex items-center">
                  <Link to={item.to} onClick={() => setMobile(false)} className="flex-1 py-4 px-5 display text-[17px]">{item.label}</Link>
                  {item.children && (
                    <button onClick={() => setMobGroup(m => m === item.label ? null : item.label)} className="px-5 py-4" aria-label={`Toggle ${item.label}`}>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobGroup === item.label ? 'rotate-180 text-solar' : ''}`} />
                    </button>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {item.children && mobGroup === item.label && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: .4, ease: EASE }} className="overflow-hidden">
                      <div className="pb-3">{item.children.map(c => (
                        <Link key={c.to} to={c.to} onClick={() => setMobile(false)} className="block py-2.5 pl-6 pr-5 text-[13.5px] font-light text-paper/65 hover:text-solar transition-colors">{c.label}</Link>
                      ))}</div>
                    </motion.div>)}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-paper/10 space-y-2 mono text-[0.6rem] tracking-[0.16em] uppercase text-paper/50">
            <p>{COMPANY.phones[0]} · {COMPANY.phones[1]}</p>
            <p>{COMPANY.email}</p>
            <p>Noida · Kolkata · Mumbai</p>
          </div>
        </motion.div>)}
      </AnimatePresence>
    </>
  );
}

function DropLink({ c, i, onGo }: { c: { label: string; to: string; note?: string }; i: number; onGo: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .04 + i * .035, duration: .3 }}>
      <Link to={c.to} onClick={onGo} data-hover className="group flex items-start gap-3 px-3.5 py-2.5 rounded-lg hover:bg-paper/8 transition-colors duration-300">
        <span className="mono text-[0.55rem] text-solar/70 mt-1 w-4 shrink-0">{String(i + 1).padStart(2, '0')}</span>
        <span className="min-w-0">
          <span className="block text-[13.5px] font-normal text-paper group-hover:text-solar transition-colors leading-snug">{c.label}</span>
          {c.note && <span className="block mono text-[0.55rem] tracking-[0.1em] uppercase text-paper/35 mt-1 leading-relaxed">{c.note}</span>}
        </span>
      </Link>
    </motion.div>
  );
}

/* ── FOOTER — USEFUL LINKS / OUR SERVICES / GET IN TOUCH, as on source ── */
function Footer() {
  const serviceList = SERVICES.slice(0, 7);
  return (
    <footer className="relative bg-void border-t border-paper/12 overflow-hidden">
      {/* CTA band */}
      <div className="border-b border-paper/12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(90%_140%_at_15%_130%,rgba(232,116,44,.22),transparent_65%)]" />
        <div className="relative xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-14 lg:py-20 flex flex-col md:flex-row gap-8 justify-between md:items-end">
          <div>
            <p className="mono text-[0.6rem] tracking-[0.26em] uppercase text-solar">Get in touch with us today</p>
            <p className="mt-4 display text-[clamp(1.6rem,3.8vw,2.9rem)] leading-[1.12] max-w-[520px]">Let’s build something great together.</p>
          </div>
          <Link to="/contact" data-hover className="group flex items-center gap-4 font-light text-lg md:text-2xl shrink-0">
            <span className="hover-line">Start a project</span><CircleArrow className="text-solar transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      {/* columns */}
      <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 text-[13.5px] font-light">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center">
              <span className="absolute inset-0 rounded-full border border-paper/25" />
              <span className="absolute inset-[10px] rounded-full bg-solar" />
              <span className="absolute inset-0 rounded-full border border-dashed border-paper/25 spin-slower" />
            </span>
            <span className="leading-none">
              <span className="block display text-base">ARKA</span>
              <span className="block mono text-[0.52rem] tracking-[0.28em] uppercase text-paper/45 mt-1">Technovation</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-paper/55 leading-[1.8]">Welcome to {COMPANY.name}. We utilise our experience and world-class knowledge to help businesses reach their full online and digital potential, and ensure steady growth.</p>
          <p className="mt-4 text-[12px] text-paper/35">Carrying forward {COMPANY.years} years of work from {COMPANY.legacy}.</p>
          <div className="mt-6 flex gap-2">
            {['FB', 'IN', 'YT', 'X', 'IG'].map(s => (
              <a key={s} href="#" aria-label={s} data-hover className="grid h-9 w-9 place-items-center border border-paper/20 mono text-[0.55rem] hover:bg-paper hover:text-void transition-colors duration-400">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5">Useful Links</p>
          <ul className="space-y-3">{[['Who We Are', '/who-we-are'], ['Our Work', '/work'], ['Blog', '/insights#blog'], ['Careers', '/careers'], ['FAQ', '/insights#faq'], ['Contact Us', '/contact']].map(([l, to]) => (
            <li key={l}><Link to={to} data-hover className="text-paper/70 hover:text-solar transition-colors">{l}</Link></li>
          ))}</ul>
        </div>

        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5">Our Services</p>
          <ul className="space-y-3">{serviceList.map(s => (
            <li key={s.slug}><Link to={`/services/${s.slug}`} data-hover className="text-paper/70 hover:text-solar transition-colors">{s.title}</Link></li>
          ))}<li><Link to="/services" data-hover className="text-solar hover:underline">View all →</Link></li></ul>
        </div>

        <div>
          <p className="mono text-[0.6rem] tracking-[0.24em] uppercase text-paper/40 mb-5">Get In Touch</p>
          <ul className="space-y-5">
            {OFFICES.map(o => (
              <li key={o.city}>
                <p className="mono text-[0.55rem] tracking-[0.18em] uppercase text-paper/35">{o.label}</p>
                <p className="mt-1.5 text-paper/70 leading-relaxed">{o.lines.map(l => <span key={l} className="block">{l}</span>)}</p>
              </li>
            ))}
            <li><a href={`mailto:${COMPANY.email}`} className="text-paper/70 hover:text-solar transition-colors break-all">{COMPANY.email}</a></li>
            <li className="space-y-1">{COMPANY.phones.map(p => <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-paper/70 hover:text-solar transition-colors">{p}</a>)}</li>
          </ul>
        </div>
      </div>

      {/* legal */}
      <div className="border-t border-paper/10">
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 mono text-[0.56rem] tracking-[0.14em] uppercase text-paper/35">
          <span>© 2026 {COMPANY.name} — Founded by Kranti</span>
          <span className="flex gap-5"><a href="#" className="hover:text-paper transition-colors">Privacy Policy</a><a href="#" className="hover:text-paper transition-colors">Terms</a><span>Noida · Kolkata · Mumbai</span></span>
        </div>
      </div>
      <p className="select-none text-center display leading-[0.72] text-[clamp(4rem,18vw,15rem)] text-transparent bg-clip-text bg-gradient-to-b from-paper/[0.1] to-transparent -mb-[0.1em]">ARKA</p>
    </footer>
  );
}

/* ── LAYOUT ── */
export type ScrollControls = {
  setHeroLocked: (locked: boolean) => void;
  scrollTo: (target: string | number) => void;
};

export default function Layout() {
  const lenis = useRef<Lenis | null>(null);
  const [heroLocked, setHeroLocked] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });

  const scrollControls = useMemo<ScrollControls>(() => ({
    setHeroLocked: locked => {
      setHeroLocked(locked);
      if (locked) lenis.current?.stop();
      else lenis.current?.start();
    },
    scrollTo: target => lenis.current?.scrollTo(target, { duration: 1.4 }),
  }), []);

  useEffect(() => {
    const l = new Lenis({ lerp: .085, smoothWheel: true });
    lenis.current = l;
    if (heroLocked) l.stop();
    let raf = 0; const loop = (t: number) => { l.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); l.destroy(); lenis.current = null; };
  }, []);

  useEffect(() => {
    if (heroLocked) lenis.current?.stop();
    else lenis.current?.start();
  }, [heroLocked]);

  const toTop = () => lenis.current?.scrollTo(0, { duration: 1.4 });

  return (
    <div className="no-cursor grain-layer min-h-screen bg-void text-paper">
      <Cursor />
      <motion.div style={{ scaleX: bar }} className="fixed left-0 top-0 z-[980] h-[2px] w-full origin-left bg-gradient-to-r from-rust via-solar to-gold" />
      <Navbar onNavigate={() => setTimeout(() => lenis.current?.scrollTo(0, { immediate: true }), 10)} />

      <motion.main initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: EASE }}>
        <Outlet context={scrollControls} />
      </motion.main>

      <Footer />

      {!heroLocked && <button onClick={toTop} aria-label="Back to top" data-cursor="Top"
        className="fixed bottom-5 left-5 z-[880] grid h-11 w-11 place-items-center rounded-full border border-paper/25 bg-void/70 backdrop-blur-md text-paper hover:bg-paper hover:text-void transition-colors duration-500">
        <ArrowUp className="h-4 w-4" />
      </button>}

      {!heroLocked && <motion.a initial={{ scale: .8 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: .6, ease: EASE }}
        href="https://wa.me/919220826934" target="_blank" rel="noreferrer" data-hover
        className="fixed bottom-5 right-5 z-[880] flex items-center gap-3 rounded-full bg-[#1f7a4d] text-paper pl-4 pr-5 py-3.5 text-[13px] font-medium shadow-[0_12px_40px_rgba(0,0,0,.5)] hover:bg-[#25915c] transition-colors duration-500">
        <Phone className="h-4 w-4" /><span className="hidden sm:inline">WhatsApp us</span><span className="sm:hidden">Chat</span>
      </motion.a>}
    </div>
  );
}
