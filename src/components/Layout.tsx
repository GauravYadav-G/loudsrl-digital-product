import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import FloatingSocialWidget from './FloatingSocialWidget';

export default function Layout() {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const l = new Lenis({
      lerp: 0.1,
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false,
    });
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

      {/* Floating Glassmorphic Social & Quick Connect Hub */}
      <FloatingSocialWidget />
    </div>
  );
}
