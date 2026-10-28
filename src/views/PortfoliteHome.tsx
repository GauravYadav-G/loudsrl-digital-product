import dynamic from 'next/dynamic';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteHero from '../components/portfolite/PortfoliteHero';
import PortfoliteLogosMarquee from '../components/portfolite/PortfoliteLogosMarquee';
import PortfoliteProjectsGrid from '../components/portfolite/PortfoliteProjectsGrid';
import PortfoliteAbout from '../components/portfolite/PortfoliteAbout';
import PortfoliteRecentWorksCarousel from '../components/portfolite/PortfoliteRecentWorksCarousel';
import PortfoliteProcess from '../components/portfolite/PortfoliteProcess';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';

// Code-split heavy interactive and particle sections for instant first paint and smooth scrolling
const ServicesStickySection = dynamic(() => import('../components/home/ServicesStickySection'), {
  ssr: true,
});
const WhyUsSection = dynamic(() => import('../components/home/WhyUsSection'), {
  ssr: true,
});
const LatestNewsSection = dynamic(() => import('../components/home/LatestNewsSection'), {
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
