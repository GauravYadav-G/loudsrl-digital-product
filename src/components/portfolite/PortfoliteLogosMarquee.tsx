export default function PortfoliteLogosMarquee() {
  const logos = [
    { src: '/portfolite/logo-1-dark.svg', alt: 'Eooks' },
    { src: '/portfolite/logo-2-dark.svg', alt: 'Opal' },
    { src: '/portfolite/logo-3-dark.svg', alt: 'Dune' },
    { src: '/portfolite/logo-4-dark.svg', alt: 'Oasis' },
    { src: '/portfolite/logo-5-dark.svg', alt: 'Asterisk' },
    { src: '/_astro/botblox.DvaCbemV_X1NOB.webp', alt: 'BotBlox Robotics' },
    { src: '/_astro/kestrix.8sH_V8TI_Z1nHs5w.webp', alt: 'Kestrix AI' },
    { src: '/_astro/skipperndt.Cx65QSHU_Z1tHQii.webp', alt: 'Skipper NDT' },
  ];

  return (
    <div className="py-6 sm:py-8 bg-white relative overflow-hidden font-framer select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden flex py-2">
        <div className="animate-marquee flex items-center gap-16 sm:gap-24 opacity-60 hover:opacity-100 transition-opacity will-change-transform">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="h-6 sm:h-7 flex items-center justify-center shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                width={120}
                height={28}
                className="h-full w-auto max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
