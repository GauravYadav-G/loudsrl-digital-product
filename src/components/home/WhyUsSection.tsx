'use client';

import React, { useEffect, useRef } from 'react';

const WHY_US_ITEMS = [
  {
    num: '01',
    bg: '#260503',
    title: 'Direct access to the designers',
    sub: 'No filter, no salesperson.',
    text: 'At ARKA, you work directly with the people who design and engineer your product. It’s faster, smoother, and your vision doesn’t get lost along the way.',
    img: '/_astro/why-direct-access.DJj_3vDy_2ilzqR.webp',
    alt: 'Direct access to senior designers and engineers',
  },
  {
    num: '02',
    bg: '#4b0b06',
    title: 'A clear and fast process',
    sub: 'Everything centralized, everything simple.',
    text: 'We give you access to our dedicated client portal to follow every step: schedule, copy reviews, approvals, documents, and production deliverables. Clear, efficient, collaborative.',
    img: '/_astro/why-portail-junca.C3vy8lcq_Z1IoLuu.webp',
    alt: 'Clear and fast process tracking portal',
  },
  {
    num: '03',
    bg: '#711009',
    title: 'No-code sites autonomous clients',
    sub: 'No developer needed to change a line of text.',
    text: 'Your team updates the site on its own, in modern headless CMS platforms, with zero technical dependency.',
    img: '/_astro/why-no-code.CD2pE0cx_ZupfLj.webp',
    alt: 'Modern headless CMS architecture',
  },
  {
    num: '04',
    bg: '#97150c',
    last: true,
    title: 'A team that’s ultra responsive',
    sub: 'Small team, big availability.',
    text: 'We’re an independent, human-sized studio, and genuinely available from our Sector 63, Noida headquarters. Got a question? An idea to test? We’re here, fast, no delays.',
    img: '/_astro/why-responsive-team.CUOm7YkS_2rEQPE.webp',
    alt: 'Ultra responsive agile engineering studio',
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-ws-item]'));
    const bodies = items.map((item) => item.querySelector<HTMLElement>('[data-ws-body]'));
    const images = items.map((item) => item.querySelector<HTMLElement>('.ws__fig img'));
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktopQuery = window.matchMedia('(min-width: 810px)');
    const clamp01 = (val: number) => Math.min(1, Math.max(0, val));

    let rafId = 0;
    let isInView = false;

    let imageHeights = images.map((image) => image?.offsetHeight ?? 0);
    const measureHeights = () => {
      imageHeights = images.map((image) => image?.offsetHeight ?? 0);
    };
    measureHeights();

    const updateParallax = () => {
      rafId = 0;
      if (!isInView) return;

      const winH = window.innerHeight;
      const isDesktop = desktopQuery.matches;
      const rects = items.map((item) => item.getBoundingClientRect());

      for (let idx = 0; idx < items.length; idx++) {
        const rect = rects[idx];

        // Parallax image shift
        if (!isReduced && images[idx]) {
          const progress = clamp01((winH - rect.top) / (winH + rect.height));
          const offset = (progress * (imageHeights[idx] * 0.153)).toFixed(1);
          images[idx].style.setProperty('--py', offset);
        }

        // Stacking card body fade out as next card slides over
        if (isDesktop && idx < items.length - 1 && bodies[idx]) {
          const nextTop = rects[idx + 1].top;
          const fadeProg = clamp01((rect.bottom - nextTop) / Math.max(1, rect.height - 64));
          bodies[idx].style.opacity = String(1 - Math.min(1, fadeProg * 1.4));
        } else if (bodies[idx]) {
          bodies[idx].style.opacity = '1';
        }
      }
    };

    const scheduleUpdate = () => {
      if (isInView && !rafId) rafId = requestAnimationFrame(updateParallax);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) scheduleUpdate();
        else if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { rootMargin: '20% 0px' }
    );

    observer.observe(el);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', measureHeights, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', measureHeights);
      window.removeEventListener('resize', scheduleUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="why-us" className="ws" data-ws style={{ '--n': '4' } as React.CSSProperties}>
      <div className="container ws__head">
        <div className="ws__headtxt">
          <p className="eyebrow">Why work with us</p>
          <h2 className="ws__h2">Why work with us?</h2>
        </div>
        <p className="ws__intro">
          At ARKA, we believe a great digital product starts with a great relationship. No complex process, no middlemen. Just a dedicated, responsive team and a smooth workflow to move your projects forward, fast and well.
        </p>
      </div>
      <ul className="ws__list">
        {WHY_US_ITEMS.map((item, idx) => (
          <li
            key={item.num}
            className={`ws__item ${item.last ? 'ws__item--last' : ''}`}
            style={{ '--i': String(idx), '--bg': item.bg } as React.CSSProperties}
            data-ws-item
          >
            <article className="ws__card" style={{ color: '#ffffff' }}>
              <div className="container ws__grid">
                <p className="ws__num" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>{item.num}</p>
                <h3 className="ws__title" style={{ color: '#ffffff' }}>{item.title}</h3>
                <div className="ws__right" data-ws-body>
                  <div className="ws__txt">
                    <p className="ws__sub" style={{ color: '#ffffff' }}>{item.sub}</p>
                    <p className="ws__text" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>{item.text}</p>
                  </div>
                  <figure className="ws__fig">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width="1400"
                      height="897"
                    />
                  </figure>
                </div>
              </div>
            </article>
          </li>
        ))}
        <li className="ws__hold" aria-hidden={true} />
      </ul>
    </section>
  );
}
