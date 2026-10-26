import React, { useEffect, useRef } from 'react';

export default function JuncaBody() {
  const pfTrackRef = useRef<HTMLDivElement>(null);

  // Scroll handler for PF sticky track
  useEffect(() => {
    const handleScroll = () => {
      if (!pfTrackRef.current) return;
      const rect = pfTrackRef.current.getBoundingClientRect();
      const top = -rect.top;
      const totalH = rect.height - window.innerHeight;
      if (top > 0 && totalH > 0) {
        const progress = Math.min(1, Math.max(0, top / totalH));
        const step = Math.min(4, Math.floor(progress * 5));
        const digits = document.querySelector<HTMLElement>('[data-pf-digits]');
        if (digits) {
          digits.style.setProperty('--a', String(step));
        }
        document.querySelectorAll<HTMLElement>('[data-pf-step]').forEach((el, idx) => {
          el.classList.toggle('is-active', idx === step);
          el.classList.toggle('is-before', idx < step);
        });
        document.querySelectorAll<HTMLElement>('[data-pf-fig]').forEach((el, idx) => {
          el.classList.toggle('is-on', idx <= step);
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Trigger original Junca animations and transitions
    document.documentElement.classList.remove('is-preloading');
    document.documentElement.classList.remove('is-pre');

    const triggerAnimations = () => {
      document.dispatchEvent(new CustomEvent('preloader:done'));
      document.dispatchEvent(new CustomEvent('astro:page-load'));
    };

    const t1 = setTimeout(triggerAnimations, 80);
    const t2 = setTimeout(triggerAnimations, 350);
    // Industries tabs
    const indImgs = document.querySelectorAll<HTMLElement>('[data-ind-img]');
    const indSlides = document.querySelectorAll<HTMLElement>('[data-ind-slide]');
    const indNotes = document.querySelectorAll<HTMLElement>('[data-ind-note]');
    const indGoLinks = document.querySelectorAll<HTMLAnchorElement>('[data-ind-go]');

    indGoLinks.forEach((link, idx) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        indImgs.forEach((img, i) => img.classList.toggle('is-on', i === idx));
        indSlides.forEach((slide) => slide.classList.toggle('is-on', Number(slide.dataset.indSlide) === idx));
        indNotes.forEach((note) => note.classList.toggle('is-on', Number(note.dataset.indNote) === idx));
      });
    });

    // Voice cards hover/focus
    const voiceCards = document.querySelectorAll<HTMLElement>('[data-voice-card]');
    voiceCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        voiceCards.forEach(c => c.classList.remove('is-on'));
        card.classList.add('is-on');
      });
    });

    // News strip arrow buttons
    const prevBtn = document.querySelector<HTMLButtonElement>('[data-hn-prev]');
    const nextBtn = document.querySelector<HTMLButtonElement>('[data-hn-next]');
    const hnTrack = document.querySelector<HTMLElement>('[data-hn-track]');

    if (hnTrack && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        hnTrack.scrollBy({ left: -380, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        hnTrack.scrollBy({ left: 380, behavior: 'smooth' });
      });
    }

    // FW Card hover tags
    const fwCards = document.querySelectorAll<HTMLElement>('[data-fw-card]');
    fwCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.remove('is-reset');
        card.classList.add('is-hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-hover');
        setTimeout(() => card.classList.add('is-reset'), 200);
      });
    });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.dispatchEvent(new CustomEvent('astro:before-swap'));
    };
  }, []);

  return (
    <div className="junca-body-root" id="home-content">
<div className="page-white"><section className="clients container" data-suite>
        {/* Sub-Hero Client Trust & Brand Showcase Stage with high-res Stock Images */}
        <div className="clients-showcase">
          {/* Left Column: Visual Showcase Gallery (Stock Images from Internet) */}
          <div className="clients-showcase__visuals">
            <div className="clients-showcase__card" style={{ aspectRatio: '16/11' }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Architectural Digital Product Studio"
                loading="eager"
                decoding="async"
              />
              <div className="clients-showcase__card-overlay">
                <span className="clients-showcase__badge">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#e8742c' }} />
                  Digital Product Studio
                </span>
                <div className="clients-showcase__info">
                  <p className="clients-showcase__card-title">Arka Product Engineering</p>
                  <p className="clients-showcase__card-desc">Full-stack software, headless e-commerce &amp; WebGL</p>
                </div>
              </div>
            </div>

            <div className="clients-showcase__card" style={{ aspectRatio: '16/11' }}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Hardware and Robotics Laboratory"
                loading="eager"
                decoding="async"
              />
              <div className="clients-showcase__card-overlay">
                <span className="clients-showcase__badge">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#4050a7' }} />
                  Hardware &amp; DeepTech
                </span>
                <div className="clients-showcase__info">
                  <p className="clients-showcase__card-title">Advanced Computing</p>
                  <p className="clients-showcase__card-desc">Robotics, sensory data pipelines &amp; edge systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Trust Metrics & Narrative */}
          <div className="clients-showcase__content">
            <div className="clients-showcase__header">
              <span className="clients-showcase__kicker">Enterprise Validation</span>
              <h2 className="clients-showcase__title">Engineered for companies changing global infrastructure.</h2>
              <p className="clients-showcase__desc">
                From pre-seed deeptech prototypes to Series C market champions, we bridge complex engineering with world-class digital experiences, verifiable growth metrics, and high-conversion architectures.
              </p>
            </div>

            {/* KPI Live Stats Grid */}
            <div className="clients-showcase__metrics">
              <div className="clients-showcase__metric">
                <span className="clients-showcase__metric-val">6,256+</span>
                <span className="clients-showcase__metric-lbl">Digital Products Shipped</span>
              </div>
              <div className="clients-showcase__metric">
                <span className="clients-showcase__metric-val">1,500+</span>
                <span className="clients-showcase__metric-lbl">Global Enterprise Clients</span>
              </div>
              <div className="clients-showcase__metric">
                <span className="clients-showcase__metric-val">98%</span>
                <span className="clients-showcase__metric-lbl">Client Retention Rate</span>
              </div>
              <div className="clients-showcase__metric">
                <span className="clients-showcase__metric-val">12+</span>
                <span className="clients-showcase__metric-lbl">Years Industry Leadership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Marquee Strip */}
        <div className="clients__stage" data-marquee style={{ '--mar-dur': '50s' } as React.CSSProperties}>
          <div className="clients__mask clients__mask--left" aria-hidden={true} />
          <div className="clients__mask clients__mask--right" aria-hidden={true} />
          <div className="clients__track" data-marquee-track>
            <ul className="clients__list" data-marquee-list>
              {['BotBlox', 'Kestrix', 'Hylight', 'Artefact', 'Skipper NDT', 'Siemens', 'Vast Space', 'Quantum Silicon', 'Cognitive Energy', 'DeepOptics', 'NVIDIA Bio', 'Apex Robotics', 'Orbital Lab', 'BioGrid Corp', 'Synapse Dynamics', 'Plexus AI', 'NanoMatrix', 'Hyperion Dynamics', 'Aether Dynamics', 'Cortex Tech', 'Helios Energy'].map((brand, i) => (
                <li key={i} className="clients__item">
                  <span className="mono text-xs uppercase tracking-[0.2em] font-medium text-black/70 hover:text-[#e8742c] transition-colors cursor-default whitespace-nowrap px-4 py-2 border border-black/10 rounded-full bg-black/[0.02]">
                    {brand}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section><section className="statement container" data-statement>
        <p className="statement__p" data-scrub="words">
          We design and build websites, brands, and real-time 3D experiences for ambitious tech companies. A dedicated team with senior engineers and designers on every sprint.
        </p>

        {/* 4-Column Core Capabilities Grid */}
        <div className="statement__grid">
          <div className="statement__card">
            <span className="statement__card-num">01 / CAPABILITY</span>
            <h3 className="statement__card-title">Web Engineering</h3>
            <p className="statement__card-text">Islands architecture, sub-second load times, headless CMS integration, and resilient full-stack TypeScript.</p>
            <span className="statement__card-tag">Astro · Next.js · React</span>
          </div>

          <div className="statement__card">
            <span className="statement__card-num">02 / CAPABILITY</span>
            <h3 className="statement__card-title">Interactive 3D &amp; WebGL</h3>
            <p className="statement__card-text">Custom GLSL fluid shaders, CAD-to-web pipelines, Three.js shaders, and real-time physical product configurators.</p>
            <span className="statement__card-tag">Three.js · GLSL · WebGL</span>
          </div>

          <div className="statement__card">
            <span className="statement__card-num">03 / CAPABILITY</span>
            <h3 className="statement__card-title">Organic Search &amp; GEO</h3>
            <p className="statement__card-text">Generative Engine Optimization, structured schema graphs, and authority citations across AI answer engines.</p>
            <span className="statement__card-tag">LLM Citation · Search Graph</span>
          </div>

          <div className="statement__card">
            <span className="statement__card-num">04 / CAPABILITY</span>
            <h3 className="statement__card-title">Cinema Brand &amp; Film</h3>
            <p className="statement__card-text">High-fidelity 3D rendering, motion design systems, interactive pitch collages, and investor-ready visual narratives.</p>
            <span className="statement__card-tag">Blender · Motion · Identity</span>
          </div>
        </div>
      </section><section className="pf pf--papier" data-pf data-seed="5.3" data-vague="0" data-souris="1" style={{ '--n': '5' } as React.CSSProperties}><div className="pf__head container"><p className="eyebrow" data-reveal>Our services</p><div className="pf__lead"><h2 className="pf__h2" data-reveal>Websites, 3D, brand, fundraising and search, from one team.</h2><p className="pf__intro" data-reveal>Each category has its own page: the services inside it, the projects that prove them and how we work.</p><div className="pf__headcta" data-reveal><a href="/services" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--light"><span className="cta__text"><span className="cta__label">Discover all services</span><span className="cta__label cta__label--hover" aria-hidden={true}>Discover all services</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></div><div className="pf__track" data-pf-track><div className="pf__stage"><canvas className="pf__bg" data-pf-bg aria-hidden={true}></canvas><p className="pf__num" aria-hidden={true}><span className="pf__lbl">Service</span><span className="pf__roll"><span className="pf__digits" data-pf-digits><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span></span></span><span className="pf__lbl">/ 05</span></p><ol className="pf__steps"><li className="pf__step is-active" data-pf-step><figure className="pf__fig is-on" data-pf-fig style={{ '--i': '0' } as React.CSSProperties}><a className="pf__figlink" href="/services/websites" data-pf-link tabIndex={-1} aria-hidden={true}><img src="/images/services/investor-ready-website/header.webp" alt="" loading="lazy" decoding="async" width="1800" height="1200" /></a></figure><div className="pf__info"><p className="pf__n">Service 01</p><h3 className="pf__title"><a href="/services/websites">Websites</a></h3><p className="pf__text">Your technology has matured. Your website still explains the first prototype. We design and build the one that catches up.</p><div className="pf__cta"><a href="/services/websites" className="cta cta--ink"><span className="cta__text"><span className="cta__label">Explore Websites</span><span className="cta__label cta__label--hover" aria-hidden={true}>Explore Websites</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li className="pf__step" data-pf-step><figure className="pf__fig" data-pf-fig style={{ '--i': '1' } as React.CSSProperties}><a className="pf__figlink" href="/services/3d-motion" data-pf-link tabIndex={-1} aria-hidden={true}><img src="https://cdn.sanity.io/images/j2nbmkw7/production/e2eeedfab889e74d390d912bcc206a8fb0a8d3d8-1920x1080.webp?w=1800&amp;auto=format" alt="" loading="lazy" decoding="async" width="1800" height="1200" /></a></figure><div className="pf__info"><p className="pf__n">Service 02</p><h3 className="pf__title"><a href="/services/3d-motion">3D &amp; Motion</a></h3><p className="pf__text">Your product sits in a housing, flies above the clouds or works at the scale of a city. We model it and show how it works.</p><div className="pf__cta"><a href="/services/3d-motion" className="cta cta--ink"><span className="cta__text"><span className="cta__label">Explore 3D &amp; Motion</span><span className="cta__label cta__label--hover" aria-hidden={true}>Explore 3D &amp; Motion</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li className="pf__step" data-pf-step><figure className="pf__fig" data-pf-fig style={{ '--i': '2' } as React.CSSProperties}><a className="pf__figlink" href="/services/branding" data-pf-link tabIndex={-1} aria-hidden={true}><img src="/images/services/rebranding/header.webp" alt="" loading="lazy" decoding="async" width="1800" height="1200" /></a></figure><div className="pf__info"><p className="pf__n">Service 03</p><h3 className="pf__title"><a href="/services/branding">Brand</a></h3><p className="pf__text">The product is ready for its next round. The logo was made for the first pitch.</p><div className="pf__cta"><a href="/services/branding" className="cta cta--ink"><span className="cta__text"><span className="cta__label">Explore Brand</span><span className="cta__label cta__label--hover" aria-hidden={true}>Explore Brand</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li className="pf__step" data-pf-step><figure className="pf__fig" data-pf-fig style={{ '--i': '3' } as React.CSSProperties}><a className="pf__figlink" href="/services/fundraising" data-pf-link tabIndex={-1} aria-hidden={true}><img src="https://cdn.sanity.io/images/j2nbmkw7/production/c125ed90b6c0a96df8600f7a460894caa25996c2-2560x1440.webp?w=1800&amp;auto=format" alt="" loading="lazy" decoding="async" width="1800" height="1200" /></a></figure><div className="pf__info"><p className="pf__n">Service 04</p><h3 className="pf__title"><a href="/services/fundraising">Fundraising</a></h3><p className="pf__text">The round opens in three months. The deck was made the night before the last one.</p><div className="pf__cta"><a href="/services/fundraising" className="cta cta--ink"><span className="cta__text"><span className="cta__label">Explore Fundraising</span><span className="cta__label cta__label--hover" aria-hidden={true}>Explore Fundraising</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li><li className="pf__step" data-pf-step><figure className="pf__fig" data-pf-fig style={{ '--i': '4' } as React.CSSProperties}><a className="pf__figlink" href="/services/seo-geo" data-pf-link tabIndex={-1} aria-hidden={true}><img src="/images/home/services-seo-geo.webp" alt="" loading="lazy" decoding="async" width="1800" height="1200" /></a></figure><div className="pf__info"><p className="pf__n">Service 05</p><h3 className="pf__title"><a href="/services/seo-geo">SEO &amp; GEO</a></h3><p className="pf__text">Your buyers search Google, then ask an AI. Both should find you, and describe you correctly.</p><div className="pf__cta"><a href="/services/seo-geo" className="cta cta--ink"><span className="cta__text"><span className="cta__label">Explore SEO &amp; GEO</span><span className="cta__label cta__label--hover" aria-hidden={true}>Explore SEO &amp; GEO</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></li></ol></div></div><div className="pf__cursor" data-pf-cursor aria-hidden={true}><span className="pf__cursor-in"><span className="pf__cursor-txt">View services</span><span className="pf__cursor-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></div></section><section className="fw container" data-fw><div className="fw__top"><p className="eyebrow" data-reveal>Selected work</p><div className="fw__head"><h2 className="fw__h2"><span className="fw__line" data-reveal data-split="words">They trusted us with</span><span className="fw__line" data-reveal data-split="words">their image.</span></h2><p className="fw__intro" data-reveal>Extraordinary products, undersold by their websites: that&#39;s the gap we close for tech and deeptech companies. End to end: art direction, custom development, real-time 3D, content.</p></div></div><ol className="fw__grid"><li className="fw__card" data-fw-card><a className="fw__link" href="/projects/botblox" data-morph aria-label="View project: BotBlox: Moving data where ethernet was never meant to run"><figure className="fw__fig" data-fw-fig data-morph-tile style={{ '--t': '2' } as React.CSSProperties}><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" alt="BotBlox Systems Hardware Architecture" loading="lazy" decoding="async" width="1620" height="1080" /><figcaption className="fw__tags"><span className="fw__tag" style={{ '--j': '0' } as React.CSSProperties}>DeepTech</span><span className="fw__tag" style={{ '--j': '1' } as React.CSSProperties}>Corporate website</span></figcaption></figure><div className="fw__art"><span className="fw__dot" aria-hidden={true}></span><div className="fw__txt"><span className="fw__kicker">01 / 05 · New York, United States</span><h3 className="fw__title" data-scr-skip-mobile>BotBlox: Moving data where ethernet was never meant to run</h3></div><span className="fw__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li className="fw__card" data-fw-card><a className="fw__link" href="/projects/kestrix" data-morph aria-label="View project: Kestrix: Mapping heat loss at urban scale"><figure className="fw__fig" data-fw-fig data-morph-tile style={{ '--t': '2' } as React.CSSProperties}><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" alt="Kestrix Urban Thermal Scanning" loading="lazy" decoding="async" width="1280" height="1600" /><figcaption className="fw__tags"><span className="fw__tag" style={{ '--j': '0' } as React.CSSProperties}>Climate</span><span className="fw__tag" style={{ '--j': '1' } as React.CSSProperties}>Showcase website</span></figcaption></figure><div className="fw__art"><span className="fw__dot" aria-hidden={true}></span><div className="fw__txt"><span className="fw__kicker">02 / 05 · London, United Kingdom</span><h3 className="fw__title" data-scr-skip-mobile>Kestrix: Mapping heat loss at urban scale</h3><p className="fw__text">Kestrix: making thermal data readable to accelerate building retrofit</p></div><span className="fw__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li className="fw__card" data-fw-card><a className="fw__link" href="/projects/hylight" data-morph aria-label="View project: Hylight: Deeptech startup in aerial inspection"><figure className="fw__fig" data-fw-fig data-morph-tile style={{ '--t': '2' } as React.CSSProperties}><img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80" alt="Hylight Aerial Inspection Airship" loading="lazy" decoding="async" width="1920" height="1080" /><figcaption className="fw__tags"><span className="fw__tag" style={{ '--j': '0' } as React.CSSProperties}>DeepTech</span><span className="fw__tag" style={{ '--j': '1' } as React.CSSProperties}>Showcase website</span></figcaption></figure><div className="fw__art"><span className="fw__dot" aria-hidden={true}></span><div className="fw__txt"><span className="fw__kicker">03 / 05 · Paris, France</span><h3 className="fw__title" data-scr-skip-mobile>Hylight: Deeptech startup in aerial inspection</h3><p className="fw__text">Hylight: an aerial inspection technology driven by design.</p></div><span className="fw__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li className="fw__card" data-fw-card><a className="fw__link" href="/projects/artefact" data-morph aria-label="View project: Artefact: Visual exploration studio"><figure className="fw__fig" data-fw-fig data-morph-tile style={{ '--t': '2' } as React.CSSProperties}><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80" alt="Artefact Visual Exploration Studio" loading="lazy" decoding="async" width="1006" height="1258" /><figcaption className="fw__tags"><span className="fw__tag" style={{ '--j': '0' } as React.CSSProperties}>Studio</span><span className="fw__tag" style={{ '--j': '1' } as React.CSSProperties}>Showcase website, portfolio</span></figcaption></figure><div className="fw__art"><span className="fw__dot" aria-hidden={true}></span><div className="fw__txt"><span className="fw__kicker">04 / 05 · Nantes, France</span><h3 className="fw__title" data-scr-skip-mobile>Artefact: Visual exploration studio</h3><p className="fw__text">Building the showcase website for Artefact, a space for their creative work</p></div><span className="fw__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li><li className="fw__card" data-fw-card><a className="fw__link" href="/projects/skipperndt" data-morph aria-label="View project: Skipper NDT: Automating energy infrastructure maintenance"><figure className="fw__fig" data-fw-fig data-morph-tile style={{ '--t': '2' } as React.CSSProperties}><img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80" alt="Skipper NDT Energy Pipeline Maintenance" loading="lazy" decoding="async" width="1800" height="1200" /><figcaption className="fw__tags"><span className="fw__tag" style={{ '--j': '0' } as React.CSSProperties}>DeepTech</span><span className="fw__tag" style={{ '--j': '1' } as React.CSSProperties}>Showcase website</span></figcaption></figure><div className="fw__art"><span className="fw__dot" aria-hidden={true}></span><div className="fw__txt"><span className="fw__kicker">05 / 05 · Paris, France</span><h3 className="fw__title" data-scr-skip-mobile>Skipper NDT: Automating energy infrastructure maintenance</h3></div><span className="fw__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></a></li></ol><div className="fw__cta" data-reveal><a href="/projects" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--light"><span className="cta__text"><span className="cta__label">View all projects</span><span className="cta__label cta__label--hover" aria-hidden={true}>View all projects</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><div className="fw__cursor" data-fw-cursor aria-hidden={true}><span className="fw__cursor-in"><span className="fw__cursor-txt">View project</span><span className="fw__cursor-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></div></section></div><section className="reel" data-reel><div className="container"><h2 className="reel__h2"><span className="reel__line" data-reveal data-split="words">Great technology, undersold by its website.</span><span className="reel__line" data-reveal data-split="words">That&#39;s what founders tell us, every week.</span></h2><div className="reel__stage" data-reel-stage><div className="reel__aside" data-reel-aside><p className="reel__label">( What we fix )</p><div className="reel__text" data-reel-text><p>Founders and researchers build extraordinary technology, and rarely have the eye, or the time, for the design it deserves.</p><p>We give complex technology the clarity it needs: sleek, premium websites that present hard things simply, so investors, clients and talent get it in seconds. A small team, and a direct line to the people who design and build.</p></div><div className="reel__row"><div className="reel__cta"><a href="/studio" style={{ '--cta-w': '280px' } as React.CSSProperties} className="cta cta--light"><span className="cta__text"><span className="cta__label">Discover the studio</span><span className="cta__label cta__label--hover" aria-hidden={true}>Discover the studio</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><img className="reel__team" src="/images/team/team-pixel.webp" alt="Jules, Nathan and Corentin, the Junca team" width="720" height="480" loading="lazy" decoding="async" /></div></div><div className="reel__box"><div className="reel__video" data-reel-video><video className="fvideo" poster="/_astro/reel-poster.DxqQjAMW_Z1SjGf3.webp" muted loop playsInline preload="none" crossOrigin="anonymous" data-lazy-video><source src="https://assets.juncastudio.com/Home/botblox-home.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" media="(min-width: 810px)" /><source src="https://assets.juncastudio.com/Home/botblox-home.mp4" type="video/mp4" media="(min-width: 810px)" /><source src="https://assets.juncastudio.com/Home/botblox-home-sm.av1.mp4" type="video/mp4; codecs=av01.0.08M.08" /><source src="https://assets.juncastudio.com/Home/botblox-home-sm.mp4" type="video/mp4" /></video></div></div></div></div></section><section className="ws" data-ws style={{ '--n': '4' } as React.CSSProperties}><div className="container ws__head"><div className="ws__headtxt"><p className="eyebrow">Why work with us</p><h2 className="ws__h2">Why work with us?</h2></div><p className="ws__intro">At Junca, we believe a great website starts with a great relationship. No complex process, no middlemen. Just a dedicated, responsive team and a smooth workflow to move your projects forward, fast and well.</p></div><ul className="ws__list"><li className="ws__item" style={{ '--i': '0', '--bg': '#260503' } as React.CSSProperties} data-ws-item><article className="ws__card"><div className="container ws__grid"><p className="ws__num">01</p><h3 className="ws__title">Direct access to the designers</h3><div className="ws__right" data-ws-body><div className="ws__txt"><p className="ws__sub">No filter, no salesperson.</p><p className="ws__text">At Junca, you work directly with the people who design your website. It&#39;s faster, smoother, and your ideas don&#39;t get lost along the way.</p></div><figure className="ws__fig"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80" alt="Direct access to senior designers and engineers" loading="lazy" decoding="async" width="1600" height="897" /></figure></div></div></article></li><li className="ws__item" style={{ '--i': '1', '--bg': '#4b0b06' } as React.CSSProperties} data-ws-item><article className="ws__card"><div className="container ws__grid"><p className="ws__num">02</p><h3 className="ws__title">A clear and fast process</h3><div className="ws__right" data-ws-body><div className="ws__txt"><p className="ws__sub">Everything centralized, everything simple.</p><p className="ws__text">We give you access to the Junca client portal to follow every step: schedule, copy reviews, approvals, documents and deliverables. Clear, efficient, collaborative.</p></div><figure className="ws__fig"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="Clear and fast process tracking portal" loading="lazy" decoding="async" width="1400" height="897" /></figure></div></div></article></li><li className="ws__item" style={{ '--i': '2', '--bg': '#711009' } as React.CSSProperties} data-ws-item><article className="ws__card"><div className="container ws__grid"><p className="ws__num">03</p><h3 className="ws__title">No-code sites autonomous clients</h3><div className="ws__right" data-ws-body><div className="ws__txt"><p className="ws__sub">No developer needed to change a line of text.</p><p className="ws__text">Your team updates the site on its own, in the Framer CMS or in Sanity, with zero technical dependency.</p></div><figure className="ws__fig"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80" alt="Modern no-code and headless CMS architecture" loading="lazy" decoding="async" width="1400" height="897" /></figure></div></div></article></li><li className="ws__item ws__item--last" style={{ '--i': '3', '--bg': '#97150c' } as React.CSSProperties} data-ws-item><article className="ws__card"><div className="container ws__grid"><p className="ws__num">04</p><h3 className="ws__title">A team that&#39;s ultra responsive</h3><div className="ws__right" data-ws-body><div className="ws__txt"><p className="ws__sub">Small team, big availability.</p><p className="ws__text">We&#39;re an independent, human-sized studio, and genuinely available. Got a question? An idea to test? We&#39;re here, fast, no delays.</p></div><figure className="ws__fig"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80" alt="Ultra responsive agile engineering studio" loading="lazy" decoding="async" width="1400" height="897" /></figure></div></div></article></li><li className="ws__hold" aria-hidden={true}></li></ul></section><section className="ind theme-dark" data-ind style={{ '--dur': '8500ms' } as React.CSSProperties}><div className="ind__stage"><picture><source media="(max-width: 809px)" srcSet="/images/industries/deeptech-por.webp" /><img className="ind__img is-on" src="/images/industries/deeptech.webp" alt="DeepTech: looking into a vacuum chamber, laser light across machined steel" data-ind-img srcSet="/images/industries/deeptech-sm.webp 900w, /images/industries/deeptech.webp 1600w" sizes="100vw" loading="eager" decoding="async" crossOrigin="anonymous" /></picture><picture><source media="(max-width: 809px)" srcSet="/images/industries/climate-tech-por.webp" /><img className="ind__img" src="/images/industries/climate-tech.webp" alt="Climate Tech: a wind turbine alone in a sunlit field, seen from above" data-ind-img srcSet="/images/industries/climate-tech-sm.webp 900w, /images/industries/climate-tech.webp 1600w" sizes="100vw" loading="lazy" decoding="async" crossOrigin="anonymous" /></picture><picture><source media="(max-width: 809px)" srcSet="/images/industries/ai-automation-por.webp" /><img className="ind__img" src="/images/industries/ai-automation.webp" alt="AI &amp; Data: streams of light folding into one another on a black ground" data-ind-img srcSet="/images/industries/ai-automation-sm.webp 900w, /images/industries/ai-automation.webp 1600w" sizes="100vw" loading="lazy" decoding="async" crossOrigin="anonymous" /></picture><picture><source media="(max-width: 809px)" srcSet="/images/industries/industries-manufacturing-por.webp" /><img className="ind__img" src="/images/industries/industries-manufacturing.webp" alt="Industry 4.0: the floor of a production hall, machines lined up under the lights" data-ind-img srcSet="/images/industries/industries-manufacturing-sm.webp 900w, /images/industries/industries-manufacturing.webp 1600w" sizes="100vw" loading="lazy" decoding="async" crossOrigin="anonymous" /></picture><picture><source media="(max-width: 809px)" srcSet="/images/industries/robotics-hardware-por.webp" /><img className="ind__img" src="/images/industries/robotics-hardware.webp" alt="Robotics &amp; Hardware: a white collaborative robot arm with its gripper open, rim-lit on a black background" data-ind-img srcSet="/images/industries/robotics-hardware-sm.webp 900w, /images/industries/robotics-hardware.webp 1600w" sizes="100vw" loading="lazy" decoding="async" crossOrigin="anonymous" /></picture><picture><source media="(max-width: 809px)" srcSet="/images/industries/saas-por.webp" /><img className="ind__img" src="/images/industries/saas.webp" alt="SaaS B2B: a glass atrium seen straight up, floor after floor of lit offices" data-ind-img srcSet="/images/industries/saas-sm.webp 900w, /images/industries/saas.webp 1600w" sizes="100vw" loading="lazy" decoding="async" crossOrigin="anonymous" /></picture><div className="ind__veil" aria-hidden={true}></div><a className="ind__hit" href="/industries/deeptech" data-ind-hit aria-label="DeepTech: see how we work with this industry"></a></div><div className="container ind__top"><div className="ind__head"><p className="eyebrow" data-reveal>Industries</p><h2 className="ind__title" data-reveal data-split="words">Every tech sector convinces a different way.</h2><p className="ind__text" data-reveal>Deeptech, climate, industry 4.0, AI, robotics, B2B SaaS: we shape each site around what your field has to prove, and to whom.</p></div></div><div className="ind__rail" aria-hidden={true}><div className="ind__track" data-ind-track style={{ '--k': '1' } as React.CSSProperties}><div className="ind__slide" data-ind-slide="5"><p className="ind__sname" data-ind-sname data-scr-skip>SaaS B2B</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$316B</span></span><span className="ind__lab">Global SaaS market</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">61%</span></span><span className="ind__lab">Rep-free buying</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">57%</span></span><span className="ind__lab">Decision before contact</span></div></div></div><div className="ind__slide is-on" data-ind-slide="0"><p className="ind__sname" data-ind-sname data-scr-skip>DeepTech</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$20.3B</span></span><span className="ind__lab">European VC, 2025</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">$690B</span></span><span className="ind__lab">Ecosystem value</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">32%</span></span><span className="ind__lab">Capital shift</span></div></div></div><div className="ind__slide" data-ind-slide="1"><p className="ind__sname" data-ind-sname data-scr-skip>Climate Tech</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$40.5B</span></span><span className="ind__lab">Global investment</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">24%</span></span><span className="ind__lab">Market growth</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">−18%</span></span><span className="ind__lab">Deal count</span></div></div></div><div className="ind__slide" data-ind-slide="2"><p className="ind__sname" data-ind-sname data-scr-skip>AI &amp; Data</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$581.7B</span></span><span className="ind__lab">Global investment</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">44%</span></span><span className="ind__lab">Scaling</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">37%</span></span><span className="ind__lab">Real impact</span></div></div></div><div className="ind__slide" data-ind-slide="3"><p className="ind__sname" data-ind-sname data-scr-skip>Industry 4.0</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$394B</span></span><span className="ind__lab">Smart manufacturing</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">$206B</span></span><span className="ind__lab">Industry 4.0</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">14.7%</span></span><span className="ind__lab">Market growth</span></div></div></div><div className="ind__slide" data-ind-slide="4"><p className="ind__sname" data-ind-sname data-scr-skip>Robotics &amp; Hardware</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$50B</span></span><span className="ind__lab">Global market</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">14%</span></span><span className="ind__lab">Market growth</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">$27B</span></span><span className="ind__lab">Industrial robots</span></div></div></div><div className="ind__slide" data-ind-slide="5"><p className="ind__sname" data-ind-sname data-scr-skip>SaaS B2B</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$316B</span></span><span className="ind__lab">Global SaaS market</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">61%</span></span><span className="ind__lab">Rep-free buying</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">57%</span></span><span className="ind__lab">Decision before contact</span></div></div></div><div className="ind__slide is-on" data-ind-slide="0"><p className="ind__sname" data-ind-sname data-scr-skip>DeepTech</p><div className="ind__rows"><div className="ind__row"><span className="ind__band"><span className="ind__val">$20.3B</span></span><span className="ind__lab">European VC, 2025</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">$690B</span></span><span className="ind__lab">Ecosystem value</span></div><div className="ind__row"><span className="ind__band"><span className="ind__val">32%</span></span><span className="ind__lab">Capital shift</span></div></div></div></div></div><ul className="ind__list sr-only" data-ind-list><li data-ind-li><a href="/industries/deeptech" data-ind-go="0" data-ind-label="DeepTech">DeepTech</a></li><li data-ind-li><a href="/industries/climate-tech" data-ind-go="1" data-ind-label="Climate Tech">Climate Tech</a></li><li data-ind-li><a href="/industries/ai-automation" data-ind-go="2" data-ind-label="AI &amp; Data">AI &amp; Data</a></li><li data-ind-li><a href="/industries/industries-manufacturing" data-ind-go="3" data-ind-label="Industry 4.0">Industry 4.0</a></li><li data-ind-li><a href="/industries/robotics-hardware" data-ind-go="4" data-ind-label="Robotics &amp; Hardware">Robotics &amp; Hardware</a></li><li data-ind-li><a href="/industries/saas" data-ind-go="5" data-ind-label="SaaS B2B">SaaS B2B</a></li></ul><div className="container ind__bottom"><div className="ind__notes"><div className="ind__note is-on" data-ind-note="0"><p>The page opens on the physics, not on the problem it solves. Investors and buyers leave before they know what you do.</p></div><div className="ind__note" data-ind-note="1"><p>Sensors, models and protocols stack up. The visitor drowns before the impact lands.</p></div><div className="ind__note" data-ind-note="2"><p>Models, agents, copilots: the words pile up, and the visitor still cannot picture what the product does.</p></div><div className="ind__note" data-ind-note="3"><p>Standards, tolerances and part numbers come first. The buyer stalls before the value is clear.</p></div><div className="ind__note" data-ind-note="4"><p>Payloads, axes and components everywhere. The visitor stalls before the value is clear.</p></div><div className="ind__note" data-ind-note="5"><p>The same layout, gradient, and stock illustration as every competitor. Nothing signals you&#39;re the category leader.</p></div></div><div className="ind__cta"><a href="/industries" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--dark"><span className="cta__text"><span className="cta__label">Discover all Industries</span><span className="cta__label cta__label--hover" aria-hidden={true}>Discover all Industries</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div></section><section className="hn" data-hn>
  <div className="container hn__head">
    <div className="hn__headtxt">
      <p className="eyebrow" data-reveal>Latest news</p>
      <h2 className="hn__h2" data-reveal data-split="words">Our take on design, technology and what makes a website convert.</h2>
      <div className="hn__cta" data-reveal>
        <a href="/news" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--light">
          <span className="cta__text">
            <span className="cta__label">See all articles</span>
            <span className="cta__label cta__label--hover" aria-hidden={true}>See all articles</span>
          </span>
          <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="hn__nav" data-reveal>
      <button className="hn__arrow hn__arrow--prev" type="button" data-hn-prev aria-label="Previous articles">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
          <path d="M19 12H5"></path>
          <path d="m12 19-7-7 7-7"></path>
        </svg>
      </button>
      <button className="hn__arrow hn__arrow--next" type="button" data-hn-next aria-label="Next articles">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
  <div className="hn__strip" data-hn-strip data-reveal>
    <ul className="hn__track" data-hn-track>
        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/deeptech-branding-identity-for-invisible-technology" data-morph aria-label={`Read the article: Deeptech branding: how to build an identity for invisible technology`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Branding</span></span>
              <span className="hn__date"><span className="hn__pill">Oct 15, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">01 / 08</span>
                <span className="hn__editorial-topic">Branding</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">Deeptech branding: how to build an identity for invisible technology</h3>
              <p className="hn__sub">9 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">Your technology is years ahead and your brand looks like everyone else's. A method to build a deeptech identity from your mechanism, a worked example and a one-minute checklist.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/startup-website-after-seed-round" data-morph aria-label={`Read the article: Startup website after a seed round: what to change before Series A`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Digital Strategy</span></span>
              <span className="hn__date"><span className="hn__pill">Oct 5, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">02 / 08</span>
                <span className="hn__editorial-topic">Digital Strategy</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">Startup website after a seed round: what to change before Series A</h3>
              <p className="hn__sub">6 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">The median gap between seed and Series A is now 616 days. The site that helped you raise was written for investors; here is what to change so it sells, hires and prepares the next round.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/how-to-show-a-hardware-product-on-your-website" data-morph aria-label={`Read the article: How to show a hardware product on your website when photos fall short`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Web design</span></span>
              <span className="hn__date"><span className="hn__pill">Sep 25, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">03 / 08</span>
                <span className="hn__editorial-topic">Web design</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">How to show a hardware product on your website when photos fall short</h3>
              <p className="hn__sub">7 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">A photo shows the outside of your hardware. Buyers need the inside, the motion and the proof: five visuals that show them, one honesty rule for renders, and a realistic CAD-to-web timeline.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/the-12-best-deeptech-websites-in-2026" data-morph aria-label={`Read the article: The 12 best deeptech websites in 2026, and why they work`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Web design</span></span>
              <span className="hn__date"><span className="hn__pill">Sep 16, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">04 / 08</span>
                <span className="hn__editorial-topic">Web design</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">The 12 best deeptech websites in 2026, and why they work</h3>
              <p className="hn__sub">9 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">Twelve deeptech sites that won Awwwards Site of the Day, from Vast to Breakthrough Energy, and the four design moves that put them there.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/how-to-explain-complex-technology-on-a-website" data-morph aria-label={`Read the article: How to explain complex technology on a website (without dumbing it down)`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">UX & Conversion</span></span>
              <span className="hn__date"><span className="hn__pill">Aug 4, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">05 / 08</span>
                <span className="hn__editorial-topic">UX & Conversion</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">How to explain complex technology on a website (without dumbing it down)</h3>
              <p className="hn__sub">4 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">Jargon repels even when you define it, and visitors read 25% of your words. The layered-narrative method we use to make deeptech legible, from Hylight to Kestrix.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/astro-vs-nextjs-stack-for-immersive-websites" data-morph aria-label={`Read the article: Astro vs Next.js in 2026: which one should you choose for your website?`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Digital Strategy</span></span>
              <span className="hn__date"><span className="hn__pill">Jul 22, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">06 / 08</span>
                <span className="hn__editorial-topic">Digital Strategy</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">Astro vs Next.js in 2026: which one should you choose for your website?</h3>
              <p className="hn__sub">11 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">Islands architecture, 66% real-world Core Web Vitals pass rates, shader-level control with Three.js and TSL: the stack we use when a project outgrows no-code, and when we still say Framer.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/investor-ready-website-what-vcs-look-at-before-series-a" data-morph aria-label={`Read the article: The investor-ready website: what VCs actually look at before a Series A`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Digital Strategy</span></span>
              <span className="hn__date"><span className="hn__pill">Jul 14, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">07 / 08</span>
                <span className="hn__editorial-topic">Digital Strategy</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">The investor-ready website: what VCs actually look at before a Series A</h3>
              <p className="hn__sub">5 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">Your deck gets two minutes of attention. Your website gets the rest of the diligence. What VCs actually check on a startup website before a Series A, backed by Harvard and DocSend research.</p>
              </div>
            </div>
          </a>
        </li>\n        <li className="hn__item" data-hn-item>
          <a className="hn__card" href="/news/why-deeptech-startups-need-a-premium-website" data-morph aria-label={`Read the article: Why deeptech startups need a premium website`}>
            <div className="hn__meta">
              <span className="hn__cat"><span className="hn__pill">Web design</span></span>
              <span className="hn__date"><span className="hn__pill">May 25, 2026</span></span>
            </div>
            <figure className="hn__fig" data-morph-tile>
              <div className="hn__editorial-graphic">
                <span className="hn__editorial-index">08 / 08</span>
                <span className="hn__editorial-topic">Web design</span>
                <div className="hn__editorial-deco" aria-hidden={true} />
              </div>
            </figure>
            <span className="hn__band" aria-hidden={true} />
            <div className="hn__txt">
              <h3 className="hn__title">Why deeptech startups need a premium website</h3>
              <p className="hn__sub">5 min read</p>
              <div className="hn__more">
                <p className="hn__excerpt">A generic website is no longer enough for a deeptech startup. Investor credibility, talent acquisition, market positioning: why web design is an underestimated strategic lever.</p>
              </div>
            </div>
          </a>
        </li>
    </ul>
  </div>
</section>
<section className="voice" data-voice><div className="container voice__head"><p className="eyebrow" data-reveal>Client voices</p><h2 className="voice__h2" data-reveal data-split="words">Our clients speak for themselves.</h2></div><div className="container voice__grid"><div className="voice__panel" style={{ '--bg': 'url(/images/home/voices-bg.webp)', '--bg-sm': 'url(/images/home/voices-bg-sm.webp)' } as React.CSSProperties}><div className="voice__text" data-voice-text><p className="voice__p">Junca works with <em className="voice__em">tech</em> and <em className="voice__em">deeptech</em> companies: founders who build hard things and need a website that makes them obvious.</p><p className="voice__p">We keep part of our year for <em className="voice__em">agencies</em> and creative studios, the projects where we push <em className="voice__em">craft</em>, motion and real-time 3D further.</p><p className="voice__p">We think most tech websites look the same: templates, stock 3D, copy nobody reads. We believe in <em className="voice__em">clarity</em>, <em className="voice__em">character</em> and <em className="voice__em">conversion</em>.</p></div><div className="voice__ctas" data-reveal><a className="voice__btn voice__btn--ink" href="/contact">Start a project<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a><a className="voice__btn" href="/studio">About the studio</a></div></div><ul className="voice__people" data-reveal><li><a className="voice__card" href="/projects/botblox" data-voice-card aria-label="Josh Elijah, CEO, BotBlox Systems: read the testimonial and the case study"><img className="voice__pic" src="/images/clients/josh.webp" alt="Portrait of Josh Elijah" loading="lazy" decoding="async" width="1200" height="1200" /><span className="voice__veil" aria-hidden={true}></span><span className="voice__who"><strong className="voice__name" data-voice-name>Josh Elijah</strong><span className="voice__role" data-voice-role>CEO, BotBlox Systems</span></span><blockquote className="voice__quote"><p data-voice-quote>“This is absolutely what we wanted for our website. They could not have done a better job, my team and I are beyond thrilled. This will not be the last time we work with Jules and Studio Junca.”</p></blockquote><span className="voice__more"><span className="voice__more-txt">Read the case study</span><span className="voice__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li><li><a className="voice__card" href="/projects/hylight" data-voice-card aria-label="Martin Bocken, CEO &amp; co-founder, Hylight: read the testimonial and the case study"><img className="voice__pic" src="/images/clients/martin.webp" alt="Portrait of Martin Bocken" loading="lazy" decoding="async" width="1200" height="1200" /><span className="voice__veil" aria-hidden={true}></span><span className="voice__who"><strong className="voice__name" data-voice-name>Martin Bocken</strong><span className="voice__role" data-voice-role>CEO &amp; co-founder, Hylight</span></span><blockquote className="voice__quote"><p data-voice-quote>“The Junca team immediately understood our technical challenges and our need for clarity. The result is fluid, immersive, and perfectly aligned with our tech positioning.”</p></blockquote><span className="voice__more"><span className="voice__more-txt">Read the case study</span><span className="voice__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li><li><a className="voice__card" href="/projects/skipperndt" data-voice-card aria-label="Luigi Kassir, CEO, Skipper NDT: read the testimonial and the case study"><img className="voice__pic" src="/images/clients/luigi.webp" alt="Portrait of Luigi Kassir" loading="lazy" decoding="async" width="1200" height="1200" /><span className="voice__veil" aria-hidden={true}></span><span className="voice__who"><strong className="voice__name" data-voice-name>Luigi Kassir</strong><span className="voice__role" data-voice-role>CEO, Skipper NDT</span></span><blockquote className="voice__quote"><p data-voice-quote>“The final website perfectly reflects Skipper NDT’s identity. Junca was able to adapt, understand our project in depth, and translate it accurately into the website.”</p></blockquote><span className="voice__more"><span className="voice__more-txt">Read the case study</span><span className="voice__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li><li><a className="voice__card" href="/projects/kestrix" data-voice-card aria-label="Lucy Lyons, CEO, Kestrix: read the testimonial and the case study"><img className="voice__pic" src="/images/clients/lucy.webp" alt="Portrait of Lucy Lyons" loading="lazy" decoding="async" width="1200" height="1200" /><span className="voice__veil" aria-hidden={true}></span><span className="voice__who"><strong className="voice__name" data-voice-name>Lucy Lyons</strong><span className="voice__role" data-voice-role>CEO, Kestrix</span></span><blockquote className="voice__quote"><p data-voice-quote>“Working with Junca was simply delightful. The team is professional, visionary, and creative, and we are extremely satisfied with our output. Would 100% work with Jules and team again.”</p></blockquote><span className="voice__more"><span className="voice__more-txt">Read the case study</span><span className="voice__ic" aria-hidden={true}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></span></a></li></ul></div></section><section className="faqsec page-white"><div className="container"><h2>Got a question? We answer it here.</h2><div className="faqsec__grid"><div className="faqsec__left"><p className="faqsec__keep"><span className="faqsec__dot" aria-hidden={true}></span>Let&#39;s keep in touch</p><a href="/contact" style={{ '--cta-w': '272px' } as React.CSSProperties} className="cta cta--light"><span className="cta__text"><span className="cta__label">Get in touch</span><span className="cta__label cta__label--hover" aria-hidden={true}>Get in touch</span></span><svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div><div className="faq" data-faq><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">What does Junca Studio do?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>Junca Studio is a web, brand and 3D studio for tech and deep tech companies whose technology has matured faster than their brand and website. We close that gap with one team that does everything in-house: positioning and visual identity, website design, development in Framer or in custom code with Astro and Next.js, and real-time 3D built in Blender and WebGL. Clients include Hylight (Y Combinator S23), Kestrix, Skipper NDT and BotBlox.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">How much does a website cost with Junca Studio?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>Every project is priced on its scope, never from a package. As a guide, a website built in Framer typically ranges from $10,000 to $20,000. Projects that bring together a brand identity, a full website and custom 3D usually range from $20,000 to $50,000, and complete programs for a launch or a fundraise go further. If your budget is tight, we phase the work: the essentials first, then 3D and new pages. After a free first call, you get a detailed quote, line by line.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">How long does it take to build a website with Junca Studio?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>A marketing website usually takes 4 to 6 weeks once the brief is approved. Projects that add branding, 3D scenes or custom animation take 8 to 12 weeks. You follow every stage in the Junca client portal, with clear milestones, so you always know what comes next.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">Can I update the website myself after launch?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>Yes. On Framer, your team edits text, images and articles directly in the Framer CMS. On Astro or Next.js, we connect a headless CMS such as Sanity: you publish a page or an article and the site updates within minutes, without touching any code. We train your team at launch and stay available afterwards.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">Which technology do you use: Framer, Astro or Next.js?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>We pick the one that fits your project. Framer is ideal for marketing sites your team wants to edit visually and launch fast. Astro, usually paired with Sanity, suits sites with a lot of content that need very fast loading and 3D in the browser. Next.js suits products with accounts, dashboards or app features. All three produce fast pages that search engines and AI assistants can read, with no plugins to maintain like on WordPress.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">What does Junca Studio offer besides web design?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>Besides web design and UX, we offer four services that work together or on their own: development on Framer, Astro or Next.js; 3D and immersive experiences built with Blender and WebGL; branding and visual identity, from logo to brand guidelines and art direction; and SEO and AI search optimization, so your company shows up on Google and in answers from ChatGPT or Perplexity. Most clients combine two or three of them.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">How does a project with Junca Studio work?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>It starts with a free call to understand your product, your audience and your goals. We then work in the Junca client portal with clear milestones: strategy, art direction, UX and UI design, development, testing and launch. You review copy and designs there, approve each milestone and find every document and deliverable in one place. You talk directly to the people who design and build your site.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">What makes Junca Studio different from other web design agencies?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>Three things. An engineering background: we read the white papers and understand the hardware, data or AI behind your product before designing anything. A track record with technical companies, from Hylight (Y Combinator S23) to Kestrix, Skipper NDT and BotBlox. And 3D and WebGL produced by our own team with Blender, so complex products become tangible. You work directly with the people who design and build your site, with no account manager in between.</p></div></div></details><details className="faq__item"><summary className="faq__q"><h3 className="faq__title">Where is Junca Studio based, and do you work with international clients?</h3><span className="faq__icon" aria-hidden={true}></span></summary><div className="faq__a"><div className="faq__a-inner"><p>Junca Studio is a French studio. We work remotely with tech companies in France, the United Kingdom and the United States, in English or French, from the first call to launch.</p></div></div></details></div></div></div></section><footer className="footer footer--light" id="footer"><div className="container"><div className="footer__top"><p className="footer__headline">GET IN TOUCH.</p><p className="footer__desc">Junca is a French creative web studio for ambitious tech companies. We design and build premium websites on Framer, Astro or Next.js, using motion design and interactive 3D to make complex products clear and easy to buy.</p></div><div className="footer__line"></div><div className="footer__grid"><ul className="footer__socials"><li><a href="https://www.linkedin.com/in/jules-robichon-07153b1aa/" target="_blank" rel="noopener"><span className="footer__soc">LinkedIn</span><svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true} focusable="false" style={{ display: 'inline-block', verticalAlign: '0.02em', flex: 'none' }}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li><li><a href="https://x.com/Junca_Studio" target="_blank" rel="noopener"><span className="footer__soc">X (Twitter)</span><svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true} focusable="false" style={{ display: 'inline-block', verticalAlign: '0.02em', flex: 'none' }}><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li></ul><div className="footer__col"><p className="footer__head">NAVIGATION</p><ul><li><a href="/studio">Studio</a></li><li><a href="/projects">Our projects</a></li><li><a href="/services">Our services</a></li><li><a href="/news">News</a></li><li><a href="/contact">Contact</a></li></ul><p className="footer__head footer__head--latest">LATEST PROJECTS</p><ul><li><a href="/projects/botblox">BotBlox Systems</a></li><li><a href="/projects/hylight">Hylight</a></li><li><a href="/projects/kestrix">Kestrix</a></li><li><a href="/projects/skipperndt">Skipper NDT</a></li></ul></div><div className="footer__col"><p className="footer__head">SERVICES</p><ul><li><a href="/services/websites">Websites</a></li><li><a href="/services/3d-motion">3D &amp; Motion</a></li><li><a href="/services/branding">Brand</a></li><li><a href="/services/fundraising">Fundraising</a></li><li><a href="/services/seo-geo">SEO &amp; GEO</a></li></ul></div><div className="footer__col"><p className="footer__head">CONTACT</p><ul><li><a href="mailto:contact@juncastudio.com">contact@juncastudio.com</a></li><li><a href="https://wa.me/33782336945" target="_blank" rel="noopener">Whatsapp : +33 7 82 33 69 45</a></li></ul><p className="footer__head footer__head--latest">LEGAL</p><ul><li><a href="/legal-notice">Legal notice</a></li><li><a href="/privacy-policy">Privacy policy</a></li></ul></div></div><div className="footer__bottom"><img className="footer__logo" src="/images/logo/junca-wordmark-ink.svg" alt="Junca Studio" width="138" height="35" /><p className="footer__copy">© 2026 Studio Junca All rights reserved.</p><a className="footer__top-link" href="#top" data-back-to-top>BACK TO TOP <span aria-hidden={true}>↑</span></a></div></div></footer>
    </div>
  );
}
