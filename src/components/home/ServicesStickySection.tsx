import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { creerReleve, ReleveInstance } from './releve';

const SERVICES = [
  {
    num: 'Service 01',
    title: 'Websites',
    link: '/services/development',
    text: 'Your technology has matured. Your website still explains the first prototype. We design and build the one that catches up.',
    img: '/images/services/investor-ready-website/header.webp',
  },
  {
    num: 'Service 02',
    title: '3D & Motion',
    link: '/services/ux-interactive',
    text: 'Your product sits in a housing, flies above the clouds or works at the scale of a city. We model it and show how it works.',
    img: '/images/services/3d-websites/header-lettres.webp',
  },
  {
    num: 'Service 03',
    title: 'Brand',
    link: '/services/digital-marketing',
    text: 'The product is ready for its next round. The logo was made for the first pitch.',
    img: '/images/services/rebranding/header.webp',
  },
  {
    num: 'Service 04',
    title: 'Fundraising',
    link: '/services/crm-software',
    text: 'The round opens in three months. The deck was made the night before the last one.',
    img: '/images/services/fundraising/header.webp',
  },
  {
    num: 'Service 05',
    title: 'SEO & GEO',
    link: '/services/seo-lead-generation',
    text: 'Your buyers search Google, then ask an AI. Both should find you, and describe you correctly.',
    img: '/images/home/services-seo-geo.webp',
  },
];

export default function ServicesStickySection() {
  const pfRef = useRef<HTMLElement>(null);
  const pfTrackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = pfTrackRef.current;
    const canvas = canvasRef.current;
    if (!track) return;

    const steps = [...track.querySelectorAll<HTMLElement>('[data-pf-step]')];
    const figures = [...track.querySelectorAll<HTMLElement>('[data-pf-fig]')];
    const digits = track.querySelector<HTMLElement>('[data-pf-digits]');
    const sCount = steps.length;
    let currentStep = -1;

    // 1. Initialize WebGL2 Three.js Particle Relief Wave Animation (creerReleve)
    let releve: ReleveInstance | null = null;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (canvas) {
      releve = creerReleve(canvas, {
        seed: 5.3,
        reduce: isReduced,
        vague: true,
        souris: true,
      });
      releve?.setStep(0, sCount);
      releve?.start();
    }

    const updateHoles = () => {
      if (!releve || !canvas || !pfRef.current) return;
      const cRect = canvas.getBoundingClientRect();
      const numEl = pfRef.current.querySelector('.pf__num');
      const activeStep = steps[currentStep >= 0 ? currentStep : 0];
      const infoEl = activeStep?.querySelector('.pf__info');
      const targets = [numEl, infoEl].filter(Boolean) as HTMLElement[];

      releve.setHoles(
        targets.map((el) => {
          const r = el.getBoundingClientRect();
          return {
            left: r.left - cRect.left,
            top: r.top - cRect.top,
            right: r.right - cRect.left,
            bottom: r.bottom - cRect.top,
          };
        })
      );
    };

    setTimeout(updateHoles, 80);

    // 2. Continuous Scroll Listener (Always active, NEVER detached by intersection observer)
    const handleScroll = () => {
      if (!track) return;
      const top = -track.getBoundingClientRect().top;
      const stepH = window.innerHeight * 0.7;
      const idx = Math.max(0, Math.min(sCount - 1, Math.floor(top / stepH)));

      if (idx !== currentStep) {
        currentStep = idx;
        steps.forEach((s, n) => {
          s.classList.toggle('is-active', n === idx);
          s.classList.toggle('is-before', n < idx);
        });
        figures.forEach((f, n) => {
          f.classList.toggle('is-on', n <= idx);
        });
        if (digits) {
          digits.style.setProperty('--a', String(idx));
        }
        releve?.setStep(idx, sCount);
        updateHoles();
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. Pause/Resume particle render loop when out of viewport for efficiency
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          releve?.start();
          handleScroll();
        } else {
          releve?.stop();
        }
      },
      { threshold: 0 }
    );
    observer.observe(track);

    // 4. Mouse Follower Tag & Particle Pointer Interaction
    const cursor = cursorRef.current;
    const pf = pfRef.current;
    let rafId = 0;
    let cx = 0, cy = 0, tx = 0, ty = 0, isHover = false;

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursor) {
        cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      }
      if (isHover || Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = 0;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      if (canvas && releve) {
        const cRect = canvas.getBoundingClientRect();
        releve.setMouse(e.clientX - cRect.left, e.clientY - cRect.top);
      }
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as HTMLElement | null;
      const onLink = !!target?.closest('[data-pf-link]');
      if (onLink !== isHover) {
        isHover = onLink;
        cursor?.classList.toggle('is-on', isHover);
        if (isHover && !rafId) {
          cx = tx;
          cy = ty;
        }
      }
      if (!rafId) rafId = requestAnimationFrame(loop);
    };

    const onPointerLeave = () => {
      releve?.setMouse(null);
      isHover = false;
      cursor?.classList.remove('is-on');
    };

    if (pf) {
      pf.addEventListener('pointermove', onPointerMove);
      pf.addEventListener('pointerleave', onPointerLeave);
    }

    const onResize = () => {
      handleScroll();
      updateHoles();
    };
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onResize);
      if (pf) {
        pf.removeEventListener('pointermove', onPointerMove);
        pf.removeEventListener('pointerleave', onPointerLeave);
      }
      if (rafId) cancelAnimationFrame(rafId);
      releve?.destroy();
    };
  }, []);

  return (
    <section
      id="services"
      ref={pfRef}
      className="pf pf--papier relative"
      data-pf
      data-seed="5.3"
      data-vague="0"
      data-souris="1"
      style={
        {
          '--n': '5',
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        } as React.CSSProperties
      }
    >
      <div
        className="pf__track"
        ref={pfTrackRef}
        data-pf-track
        style={{
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
          height: 'calc(100vh + 5 * 70vh)',
        }}
      >
        <div
          className="pf__stage sticky top-0 h-screen overflow-hidden"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          {/* WebGL Three.js Particle Relief Canvas */}
          <canvas
            ref={canvasRef}
            className="pf__bg !block absolute inset-0 w-full h-full pointer-events-none z-0"
            data-pf-bg
            aria-hidden={true}
          />

          {/* Sticky Counter */}
          <p className="pf__num z-10" aria-hidden={true}>
            <span className="pf__lbl">Service</span>
            <span className="pf__roll">
              <span className="pf__digits" data-pf-digits>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
              </span>
            </span>
            <span className="pf__lbl">/ 05</span>
          </p>

          {/* Step Cards with Polygon Transition & Text */}
          <ol className="pf__steps">
            {SERVICES.map((s, idx) => (
              <li
                key={s.num}
                className={`pf__step ${idx === 0 ? 'is-active' : ''}`}
                data-pf-step
              >
                <figure
                  className={`pf__fig z-20 ${idx === 0 ? 'is-on' : ''}`}
                  data-pf-fig
                  style={{ '--i': String(idx) } as React.CSSProperties}
                >
                  <Link
                    className="pf__figlink"
                    to={s.link}
                    data-pf-link
                    tabIndex={-1}
                    aria-hidden={true}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      width="1800"
                      height="1200"
                    />
                  </Link>
                </figure>
                <div className="pf__info z-30">
                  <p className="pf__n">{s.num}</p>
                  <h3 className="pf__title">
                    <Link to={s.link}>{s.title}</Link>
                  </h3>
                  <p className="pf__text">{s.text}</p>
                  <div className="pf__cta">
                    <Link to={s.link} className="cta cta--ink">
                      <span className="cta__text">
                        <span className="cta__label">Explore {s.title}</span>
                        <span className="cta__label cta__label--hover" aria-hidden={true}>
                          Explore {s.title}
                        </span>
                      </span>
                      <svg
                        className="cta__arrow"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden={true}
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Floating Interactive Mouse Cursor */}
      <div className="pf__cursor" ref={cursorRef} data-pf-cursor aria-hidden={true}>
        <span className="pf__cursor-in">
          <span className="pf__cursor-txt">View services</span>
          <span className="pf__cursor-arr">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </span>
        </span>
      </div>
    </section>
  );
}
