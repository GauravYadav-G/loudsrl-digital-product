import dynamic from 'next/dynamic';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteHero from '../components/portfolite/PortfoliteHero';
import PortfoliteLogosMarquee from '../components/portfolite/PortfoliteLogosMarquee';

// Code-split below-the-fold sections with SSR enabled to preserve full HTML content & SEO indexability
const PortfoliteProjectsGrid = dynamic(() => import('../components/portfolite/PortfoliteProjectsGrid'), {
  ssr: true,
});
const PortfoliteAbout = dynamic(() => import('../components/portfolite/PortfoliteAbout'), {
  ssr: true,
});
const PortfoliteRecentWorksCarousel = dynamic(() => import('../components/portfolite/PortfoliteRecentWorksCarousel'), {
  ssr: true,
});
const PortfoliteProcess = dynamic(() => import('../components/portfolite/PortfoliteProcess'), {
  ssr: true,
});
const ServicesStickySection = dynamic(() => import('../components/home/ServicesStickySection'), {
  ssr: true,
});
const WhyUsSection = dynamic(() => import('../components/home/WhyUsSection'), {
  ssr: true,
});
const LatestNewsSection = dynamic(() => import('../components/home/LatestNewsSection'), {
  ssr: true,
});
const PortfoliteFooter = dynamic(() => import('../components/portfolite/PortfoliteFooter'), {
  ssr: true,
});

export default function PortfoliteHome() {
  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-solar selection:text-white">
      {/* Floating Glassmorphic Top Navbar */}
      <PortfoliteNav />

      {/* Portfolite Hero Section */}
      <PortfoliteHero />

      {/* Marquee of Enterprise & Industrial Clients */}
      <PortfoliteLogosMarquee />

      {/* 3-Column Parallax Featured Case Studies Grid */}
      <PortfoliteProjectsGrid />

      {/* Who We Are: Founded by Kranti Parashar, 17+ Years Heritage */}
      <PortfoliteAbout />

      {/* Recent Works Carousel */}
      <PortfoliteRecentWorksCarousel />

      {/* 3-Stage Delivery Process */}
      <PortfoliteProcess />

      {/* Interactive Sticky Stage Services Section */}
      <ServicesStickySection />

      {/* Why Work With Us: 4-Stage Stacking Cards with Parallax & Opacity Progression */}
      <WhyUsSection />

      {/* Latest News: "Our take on design, technology and what makes a website convert" */}
      <LatestNewsSection />

      {/* Clean Minimalist ARKA Corporate Footer */}
      <PortfoliteFooter />
    </div>
  );
}
