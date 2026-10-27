import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { NAV, COMPANY } from '../../lib/data';

export default function PortfoliteNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [solid, setSolid] = useState(false);
  const [mobGroup, setMobGroup] = useState<string | null>('Services');
  const closeTimer = useRef<number | null>(null);
  const loc = useLocation();

  // Scroll listener to toggle solid backdrop vs transparent blend
  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 35);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [loc.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobile]);

  const enter = (k: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(k);
  };

  const leave = () => {
    closeTimer.current = window.setTimeout(() => {
      setOpen(null);
    }, 180);
  };

  // Above the hero section on the home page: completely transparent with pure white text
  const isHome = loc.pathname === '/';
  const isOverHero = isHome && !solid;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[900] transition-all duration-500 font-sans ${
          isOverHero
            ? 'bg-transparent border-b border-white/10'
            : 'bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* ── Utility Strip (Offices + Contact, collapses on scroll) ── */}
        <div
          className={`hidden lg:block overflow-hidden transition-all duration-500 ${
            solid ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
          }`}
        >
          <div
            className={`xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 h-9 flex items-center justify-between font-mono text-[9.5px] tracking-[0.16em] uppercase border-b transition-colors duration-300 ${
              isOverHero ? 'text-white border-white/15' : 'text-zinc-500 border-black/[0.06]'
            }`}
          >
            <span className="flex items-center gap-2">
              <MapPin className={`h-3 w-3 ${isOverHero ? 'text-white' : 'text-solar'}`} />
              <span>Noida · Kolkata · Mumbai</span>
            </span>
            <span className="flex items-center gap-6">
              <a
                href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                className={`flex items-center gap-1.5 transition-colors ${
                  isOverHero ? 'hover:text-white/80' : 'hover:text-solar'
                }`}
              >
                <Phone className="h-3 w-3" />
                <span>{COMPANY.phones[0]}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className={`flex items-center gap-1.5 transition-colors ${
                  isOverHero ? 'hover:text-white/80' : 'hover:text-solar'
                }`}
              >
                <Mail className="h-3 w-3" />
                <span>{COMPANY.email}</span>
              </a>
            </span>
          </div>
        </div>

        {/* ── Main Edge-to-Edge Navigation Bar ── */}
        <div className="xl:max-w-[1280px] xl:mx-auto px-4 lg:px-10 h-[84px] sm:h-[96px] flex items-center justify-between gap-6">
          {/* Official ARKA Technovation Logo: White for Hero section, Black for rest of website */}
          <Link to="/" className="flex items-center group cursor-pointer shrink-0 py-1" aria-label="ARKA Technovation Home">
            <img
              src={isOverHero ? '/images/logo/arka-logo-white.png' : '/images/logo/arka-logo-black.png'}
              alt="ARKA Technovation"
              className={`h-14 sm:h-20 lg:h-[84px] w-auto max-w-[320px] sm:max-w-[420px] object-contain transition-all duration-300 group-hover:scale-105 ${
                isOverHero
                  ? 'drop-shadow-[0_0_14px_rgba(255,255,255,0.4)]'
                  : 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.12)]'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links with Full Height & Underline Indicator */}
          <nav
            className="hidden lg:flex items-center h-full"
            style={{ color: isOverHero ? '#ffffff' : undefined }}
            onMouseLeave={leave}
          >
            {NAV.map((item) => {
              const active = item.to === '/' ? loc.pathname === '/' : loc.pathname.startsWith(item.to);
              const isOpen = open === item.label;

              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.children && enter(item.label)}
                >
                  <Link
                    to={item.to}
                    style={{ color: isOverHero ? '#ffffff' : undefined }}
                    className={`relative h-full flex items-center gap-1.5 px-4 text-[13px] font-medium transition-colors duration-300 ${
                      isOverHero
                        ? active
                          ? 'text-white font-bold'
                          : 'text-white hover:text-white/80'
                        : active
                        ? 'text-solar font-semibold'
                        : 'text-zinc-700 hover:text-black'
                    }`}
                  >
                    <span style={{ color: isOverHero ? '#ffffff' : undefined }}>{item.label}</span>
                    {item.badge && (
                      <span
                        style={{
                          color: isOverHero ? '#ffffff' : undefined,
                          borderColor: isOverHero ? 'rgba(255,255,255,0.45)' : undefined,
                          backgroundColor: isOverHero ? 'rgba(255,255,255,0.18)' : undefined,
                        }}
                        className={`font-mono text-[9px] px-1.5 py-0.2 rounded-full font-semibold ${
                          isOverHero
                            ? 'text-white border'
                            : 'bg-solar/20 text-solar border border-solar/35'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.children && (
                      <ChevronDown
                        style={{ color: isOverHero ? '#ffffff' : undefined }}
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        } ${isOverHero ? 'text-white' : isOpen ? 'text-solar' : 'text-zinc-400 group-hover:text-black'}`}
                      />
                    )}
                    <span
                      style={{
                        backgroundColor: isOverHero ? '#ffffff' : undefined,
                        boxShadow: isOverHero ? '0 0 10px rgba(255,255,255,0.9)' : undefined,
                      }}
                      className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left transition-transform duration-300 ${
                        isOverHero ? 'bg-white' : 'bg-solar'
                      } ${active ? 'scale-x-100' : 'scale-x-0'}`}
                    />
                  </Link>

                  {/* Mega Dropdown for Services or Submenu */}
                  <AnimatePresence>
                    {item.children && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.99 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-1.5 z-50 ${
                          item.label === 'Services' ? 'w-[680px]' : 'w-[280px]'
                        }`}
                      >
                        <div className="bg-white/98 backdrop-blur-2xl border border-black/10 shadow-[0_25px_60px_rgba(0,0,0,0.14)] rounded-2xl overflow-hidden text-black">
                          {item.label === 'Services' ? (
                            <>
                              <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-black/6">
                                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
                                  One Growth Engine · 10 Disciplines
                                </span>
                                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-solar font-semibold">
                                  Enterprise Ready
                                </span>
                              </div>
                              <div className="grid grid-cols-2 p-2 gap-1">
                                <div className="space-y-0.5">
                                  {item.children.slice(0, 5).map((c, i) => (
                                    <DropLink key={c.to} c={c} i={i} onGo={() => setOpen(null)} />
                                  ))}
                                </div>
                                <div className="space-y-0.5 border-l border-black/6 pl-2">
                                  {item.children.slice(5).map((c, i) => (
                                    <DropLink key={c.to} c={c} i={i + 5} onGo={() => setOpen(null)} />
                                  ))}
                                </div>
                              </div>
                              <div className="border-t border-black/6 px-4 py-3 flex items-center justify-between bg-zinc-50/70">
                                <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-zinc-500">
                                  Full-Spectrum Capabilities
                                </span>
                                <Link
                                  to="/services"
                                  onClick={() => setOpen(null)}
                                  className="font-mono text-[10px] tracking-[0.14em] uppercase text-solar hover:underline inline-flex items-center gap-1 font-semibold"
                                >
                                  <span>View All 10 Services</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </>
                          ) : (
                            <div className="p-2 space-y-0.5">
                              {item.children.map((c, i) => (
                                <DropLink key={c.to} c={c} i={i} onGo={() => setOpen(null)} />
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className={`hidden sm:inline-flex font-mono text-[10.5px] tracking-[0.14em] uppercase h-[38px] px-5 items-center gap-2 rounded-full font-semibold shadow-sm group transition-all duration-300 ${
                isOverHero
                  ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-black text-white hover:bg-zinc-800'
              }`}
            >
              <span>Start a project</span>
              <CircleArrow
                size={14}
                className={`${isOverHero ? 'text-black' : 'text-white'} group-hover:rotate-45 transition-transform duration-300`}
              />
            </Link>

            <button
              onClick={() => setMobile(true)}
              className={`lg:hidden grid h-9 w-9 place-items-center rounded-lg border transition-colors ${
                isOverHero
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-black/15 text-zinc-800 hover:text-black hover:bg-black/5'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Slide-in Drawer ── */}
      <AnimatePresence>
        {mobile && (
          <>
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobile(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[940] lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white/98 backdrop-blur-2xl z-[950] border-l border-black/10 shadow-2xl flex flex-col lg:hidden text-black font-sans"
            >
              <div className="h-[84px] px-5 flex items-center justify-between border-b border-black/8">
                <Link to="/" onClick={() => setMobile(false)} className="flex items-center" aria-label="ARKA Technovation">
                  <img
                    src="/images/logo/arka-logo-black.png"
                    alt="ARKA Technovation"
                    className="h-14 sm:h-16 w-auto max-w-[260px] object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobile(false)}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-black/15 text-zinc-700 hover:text-black hover:bg-black/5"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
                {NAV.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isGroupOpen = mobGroup === item.label;

                  return (
                    <div key={item.label} className="border-b border-black/6 pb-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          onClick={() => {
                            if (!hasChildren) setMobile(false);
                          }}
                          className="flex-1 py-3 px-3 font-medium text-[15px] text-zinc-900 hover:text-solar transition-colors flex items-center gap-2"
                        >
                          <span>{item.label}</span>
                          {item.badge && (
                            <span className="font-mono text-[9px] px-1.5 py-0.2 rounded-full bg-solar/15 text-solar border border-solar/25 font-semibold">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                        {hasChildren && (
                          <button
                            onClick={() => setMobGroup(isGroupOpen ? null : item.label)}
                            className="p-3 text-zinc-500 hover:text-black"
                            aria-label={`Toggle ${item.label}`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isGroupOpen ? 'rotate-180 text-solar' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {hasChildren && isGroupOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 pr-2 pb-2 space-y-1 bg-zinc-50/70 rounded-xl"
                          >
                            {item.children!.map((c) => (
                              <Link
                                key={c.to}
                                to={c.to}
                                onClick={() => setMobile(false)}
                                className="block py-2 px-3 text-[13px] text-zinc-700 hover:text-solar transition-colors rounded-lg hover:bg-zinc-100"
                              >
                                <div className="font-medium">{c.label}</div>
                                {c.note && (
                                  <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider mt-0.5">
                                    {c.note}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 border-t border-black/8 space-y-3 bg-zinc-50/50">
                <Link
                  to="/contact"
                  onClick={() => setMobile(false)}
                  className="w-full h-[40px] rounded-full bg-black text-white hover:bg-zinc-800 transition-colors font-mono text-[10.5px] tracking-[0.14em] uppercase font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Start a Project</span>
                  <CircleArrow size={14} className="text-white" />
                </Link>
                <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-zinc-500 space-y-1 text-center">
                  <p>{COMPANY.phones[0]}</p>
                  <p>{COMPANY.email}</p>
                  <p>Noida · Kolkata · Mumbai</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function DropLink({
  c,
  i,
  onGo,
}: {
  c: { label: string; to: string; note?: string };
  i: number;
  onGo: () => void;
}) {
  return (
    <Link
      to={c.to}
      onClick={onGo}
      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-100/90 transition-colors duration-200"
    >
      <span className="font-mono text-[10px] text-solar/80 mt-0.5 w-4 shrink-0 font-medium">
        {String(i + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <span className="block text-[13px] font-medium text-black group-hover:text-solar transition-colors leading-snug truncate">
          {c.label}
        </span>
        {c.note && (
          <span className="block font-mono text-[9px] tracking-[0.08em] uppercase text-zinc-400 mt-0.5 truncate">
            {c.note}
          </span>
        )}
      </div>
    </Link>
  );
}

// Inline CircleArrow icon for precision styling
function CircleArrow({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      className={`fill-none stroke-current shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="25" cy="25" r="24" strokeWidth="2.5" />
      <g transform="rotate(-45 25 25) translate(7 10)">
        <path d="M 9 15 L 27.45 15" strokeWidth="2.5" />
        <path d="M 27 15 L 21 9" strokeWidth="2.5" />
        <path d="M 27 15 L 21 21" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
