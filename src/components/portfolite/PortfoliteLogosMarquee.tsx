'use client';

interface Brand {
  name: string;
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  heightClass: string;
}

const BRANDS: Brand[] = [
  {
    name: 'Dancing Stars',
    url: 'https://dancingstarsllc.com',
    src: '/portfolite/brands/dancingstars.webp',
    alt: 'Dancing Stars LLC',
    width: 298,
    height: 64,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Honey Hut',
    url: 'https://honeyhut.in',
    src: '/portfolite/brands/honeyhut.webp',
    alt: 'Honey Hut Nature’s Products',
    width: 272,
    height: 64,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Hindustan Expellers',
    url: 'https://hindustanexpellers.com',
    src: '/portfolite/brands/hindustanexpellers.webp',
    alt: 'Hindustan Expellers',
    width: 478,
    height: 56,
    heightClass: 'h-6 sm:h-7',
  },
  {
    name: 'Luxa Industries',
    url: 'https://luxaindustries.com',
    src: '/portfolite/brands/luxaindustries.webp',
    alt: 'Luxa Industries',
    width: 141,
    height: 64,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Laxmi Electromech',
    url: 'https://laxmielectromech.com',
    src: '/portfolite/brands/laxmielectromech.webp',
    alt: 'Laxmi Electromech Pvt. Ltd.',
    width: 274,
    height: 64,
    heightClass: 'h-7 sm:h-8',
  },
  {
    name: 'Ambrosia Harvest',
    url: 'https://ambrosiaharvest.in',
    src: '/portfolite/brands/ambrosiaharvest.webp',
    alt: 'Ambrosia Harvest',
    width: 180,
    height: 64,
    heightClass: 'h-7 sm:h-8',
  },
];

export default function PortfoliteLogosMarquee() {
  // 4 sets total = 2 sets per half for seamless 50% loop
  const displayBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section aria-label="Enterprise & Industrial Clients" className="py-7 sm:py-9 bg-white relative overflow-hidden font-framer select-none border-y border-black/[0.04]">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden flex py-1">
        <div className="animate-marquee flex items-center gap-16 sm:gap-24 opacity-85 hover:opacity-100 transition-opacity will-change-transform">
          {displayBrands.map((brand, idx) => (
            <a
              key={`${brand.name}-${idx}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${brand.name} — Visit Website`}
              className="group flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                loading="lazy"
                decoding="async"
                className={`${brand.heightClass} w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
