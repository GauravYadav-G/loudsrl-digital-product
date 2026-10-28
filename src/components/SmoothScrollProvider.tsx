'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import FloatingSocialWidget from './FloatingSocialWidget';

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const l = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
      syncTouch: false,
      autoRaf: true,
    });
    lenis.current = l;
    if (typeof window !== 'undefined') {
      (window as unknown as { __lenis?: Lenis | null }).__lenis = l;
    }

    return () => {
      l.destroy();
      lenis.current = null;
      if (typeof window !== 'undefined') {
        (window as unknown as { __lenis?: Lenis | null }).__lenis = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      <a className="site-skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Floating Glassmorphic Social & Quick Connect Hub */}
      <FloatingSocialWidget />
    </div>
  );
}
