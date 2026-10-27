import React, { useRef, useState, useEffect } from 'react';

interface NewsArticle {
  index: string;
  category: string;
  date: string;
  title: string;
  readTime: string;
  excerpt: string;
  slug: string;
  img: string;
  alt: string;
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    index: '01 / 08',
    category: 'Branding',
    date: 'Oct 15, 2026',
    title: 'Deeptech branding: how to build an identity for invisible technology',
    readTime: '9 min read',
    excerpt: "Your technology is years ahead and your brand looks like everyone else's. A method to build a deeptech identity from your mechanism, a worked example and a one-minute checklist.",
    slug: 'deeptech-branding-identity-for-invisible-technology',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/8c4efb1854fac9a1bb7d27dd7c7adbab945226ca-2000x1125.webp?w=1400&q=80&auto=format',
    alt: 'Deeptech branding: an identity for invisible technology',
  },
  {
    index: '02 / 08',
    category: 'Digital Strategy',
    date: 'Oct 5, 2026',
    title: 'Startup website after a seed round: what to change before Series A',
    readTime: '6 min read',
    excerpt: 'The median gap between seed and Series A is now 616 days. The site that helped you raise was written for investors; here is what to change so it sells, hires and prepares the next round.',
    slug: 'startup-website-after-seed-round',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/817ec85c9f7e7b5441e95ff073f4898771670b9c-2930x1648.webp?w=1400&q=80&auto=format',
    alt: 'Startup website after a seed round',
  },
  {
    index: '03 / 08',
    category: 'Web design',
    date: 'Sep 25, 2026',
    title: 'How to show a hardware product on your website when photos fall short',
    readTime: '7 min read',
    excerpt: 'A photo shows the outside of your hardware. Buyers need the inside, the motion and the proof: five visuals that show them, one honesty rule for renders, and a realistic CAD-to-web timeline.',
    slug: 'how-to-show-a-hardware-product-on-your-website',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/096cfc2bc0c1f499bd5782fc75365e4ef54ba139-3840x2160.webp?w=1400&q=80&auto=format',
    alt: 'How to show a hardware product on your website',
  },
  {
    index: '04 / 08',
    category: 'Web design',
    date: 'Sep 16, 2026',
    title: 'The 12 best deeptech websites in 2026, and why they work',
    readTime: '9 min read',
    excerpt: 'Twelve deeptech sites that won Awwwards Site of the Day, from Vast to Breakthrough Energy, and the four design moves that put them there.',
    slug: 'the-12-best-deeptech-websites-in-2026',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/24d5fe67470fb4e2e8d82a96228a38e693cb9db1-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'The 12 best deeptech websites in 2026',
  },
  {
    index: '05 / 08',
    category: 'UX & Conversion',
    date: 'Aug 4, 2026',
    title: 'How to explain complex technology on a website (without dumbing it down)',
    readTime: '4 min read',
    excerpt: 'Jargon repels even when you define it, and visitors read 25% of your words. The layered-narrative method we use to make deeptech legible, from Hylight to Kestrix.',
    slug: 'how-to-explain-complex-technology-on-a-website',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/4954d62904c23cd1b51d1014dc190000003fe471-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'How to explain complex technology on a website',
  },
  {
    index: '06 / 08',
    category: 'Digital Strategy',
    date: 'Jul 22, 2026',
    title: 'Astro vs Next.js in 2026: which one should you choose for your website?',
    readTime: '11 min read',
    excerpt: 'Islands architecture, 66% real-world Core Web Vitals pass rates, shader-level control with Three.js and TSL: the stack we use when a project outgrows no-code, and when we still say Framer.',
    slug: 'astro-vs-nextjs-stack-for-immersive-websites',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/c2d5feeb2385c376ff72987017b05be6bd192fd2-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'Astro vs Next.js in 2026',
  },
  {
    index: '07 / 08',
    category: 'Digital Strategy',
    date: 'Jul 14, 2026',
    title: 'The investor-ready website: what VCs actually look at before a Series A',
    readTime: '5 min read',
    excerpt: 'Your deck gets two minutes of attention. Your website gets the rest of the diligence. What VCs actually check on a startup website before a Series A, backed by Harvard and DocSend research.',
    slug: 'investor-ready-website-what-vcs-look-at-before-series-a',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/c08e7972a3cc7e1aa1a0ef50197fde17397aed93-3840x2160.png?w=1400&q=80&auto=format',
    alt: 'The investor-ready website',
  },
  {
    index: '08 / 08',
    category: 'Web design',
    date: 'May 25, 2026',
    title: 'Why deeptech startups need a premium website',
    readTime: '5 min read',
    excerpt: 'A generic website is no longer enough for a deeptech startup. Investor credibility, talent acquisition, market positioning: why web design is an underestimated strategic lever.',
    slug: 'why-deeptech-startups-need-a-premium-website',
    img: 'https://cdn.sanity.io/images/j2nbmkw7/production/12f53f88f9d9599d978fadaf5249c08e98ae9058-1920x1080.webp?w=1400&q=80&auto=format',
    alt: 'Why deeptech startups need a premium website',
  },
];

export default function LatestNewsSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanPrev(scrollLeft > 15);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 15);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handlePrev = () => {
    trackRef.current?.scrollBy({ left: -420, behavior: 'smooth' });
  };

  const handleNext = () => {
    trackRef.current?.scrollBy({ left: 420, behavior: 'smooth' });
  };

  return (
    <section className="hn hn--survol" data-hn style={{ background: '#fbfbfb', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container hn__head">
        <div className="hn__headtxt">
          <p className="eyebrow" data-reveal>Latest news</p>
          <h2 className="hn__h2" data-reveal data-split="words">
            Our take on design, technology and what makes a website convert.
          </h2>
          <div className="hn__cta" data-reveal>
            <a href="/news" style={{ '--cta-w': '320px' } as React.CSSProperties} className="cta cta--light">
              <span className="cta__text">
                <span className="cta__label">See all articles</span>
                <span className="cta__label cta__label--hover" aria-hidden={true}>See all articles</span>
              </span>
              <svg className="cta__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hn__nav" data-reveal>
          <button
            className="hn__arrow hn__arrow--prev"
            type="button"
            data-hn-prev
            aria-label="Previous articles"
            onClick={handlePrev}
            disabled={!canPrev}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hn__arrow hn__arrow--next"
            type="button"
            data-hn-next
            aria-label="Next articles"
            onClick={handleNext}
            disabled={!canNext}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hn__strip" data-hn-strip data-reveal>
        <ul className="hn__track" ref={trackRef} data-hn-track>
          {NEWS_ARTICLES.map((article) => (
            <li key={article.slug} className="hn__item" data-hn-item>
              <a
                className="hn__card"
                href={`/news/${article.slug}`}
                data-morph
                aria-label={`Read the article: ${article.title}`}
              >
                <div className="hn__meta">
                  <span className="hn__cat"><span className="hn__pill">{article.category}</span></span>
                  <span className="hn__date"><span className="hn__pill">{article.date}</span></span>
                </div>
                <figure className="hn__fig" data-morph-tile>
                  <img
                    src={article.img}
                    alt={article.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>
                <span className="hn__band" aria-hidden={true} />
                <div className="hn__txt">
                  <h3 className="hn__title">{article.title}</h3>
                  <p className="hn__sub">{article.readTime}</p>
                  <div className="hn__more">
                    <p className="hn__excerpt">{article.excerpt}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
