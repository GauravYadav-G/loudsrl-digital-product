import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Layout() {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const l = new Lenis({ lerp: 0.12, smoothWheel: true });
    lenis.current = l;
    let raf = 0;
    const loop = (t: number) => {
      l.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
      lenis.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <a className="site-skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Floating WhatsApp Quick Connect Button */}
      <motion.a
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        href="https://wa.me/919220826934"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-white/95 border border-[#25d366]/50 text-[#16a34a] hover:bg-[#25d366] hover:text-black transition-all px-4 py-2.5 text-xs font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-md group"
      >
        <span className="w-2 h-2 rounded-full bg-[#25d366] group-hover:bg-black animate-pulse" />
        <Phone className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">WhatsApp Support</span>
        <span className="sm:hidden">Chat</span>
      </motion.a>
    </div>
  );
}
