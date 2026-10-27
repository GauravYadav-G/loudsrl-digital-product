import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import ProjectModal, { ProjectData } from './ProjectModal';

export default function PortfoliteProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Parallax motion linked to continuous scroll (subtle and butter-smooth)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Staggered parallax offsets applied on outer wrapper
  const scrollYCol1 = useTransform(scrollYProgress, [0, 1], [40, -100]);
  const scrollYCol5 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const scrollYCol6 = useTransform(scrollYProgress, [0, 1], [60, -120]);

  // Col 1 Projects (Left Column)
  const projectsCol1: ProjectData[] = [
    {
      id: 'arka-1',
      title: 'Precision Engineering Co.',
      category: 'Manufacturing · Web & SEO',
      image: '/portfolite/proj-1.png',
      client: 'Rajesh Verma, Director',
      year: '2025',
      description: 'A forty-year-old exporter with world-class machinery rebuilt around product-line intent. Fixed technical foundations, published sixty specification pages, and shot a factory film that proved capacity on camera.',
      deliverables: ['SEO Intent Architecture', 'B2B Web Platform', 'Factory Film', 'Global Export Schema'],
      results: '+300% Organic Traffic in 9 Months',
    },
    {
      id: 'arka-2',
      title: 'Maison D2C Online Store',
      category: 'E-Commerce · Growth',
      image: '/portfolite/proj-2.png',
      client: 'Priya Sharma, Founder',
      year: '2025',
      description: 'Rebuilt storefront to an ultra-fast 1.4s performance budget, restructured the checkout funnel with continuous testing, and shifted paid budget to full-funnel shopping and remarketing.',
      deliverables: ['Headless Storefront', 'Checkout Optimisation', 'Paid Search & Meta Ads', 'Attribution Model'],
      results: '+60% Revenue in 6 Months · 4.6× ROAS',
    },
    {
      id: 'arka-3',
      title: 'Northline Heavy Industries',
      category: 'Corporate Film & Campaigns',
      image: '/portfolite/proj-3.png',
      client: 'Marketing Head, Northline',
      year: '2024',
      description: 'A four-minute cinematic brand film shot across two manufacturing plants, cut into eleven social assets, and distributed with an account-based campaign to 900 named institutional buyers.',
      deliverables: ['Cinematic Brand Film', 'Factory Cinematography', 'Social Cuts', 'Account-Based Distribution'],
      results: '2.1M Views · 480 Qualified Leads',
    },
  ];

  // Col 5 Projects (Center Elevated Column - Framer Flagship)
  const projectsCol5: ProjectData[] = [
    {
      id: 'arka-4',
      title: 'Enterprise Multi-Branch CRM',
      category: 'Enterprise Software & ERP',
      image: '/portfolite/proj-4.jpg',
      client: 'Amit Patel, CEO',
      year: '2025',
      description: 'Replaced six fragmented regional spreadsheets with a bespoke multi-tier CRM with role-based dashboards, automated approval matrices, WhatsApp and Tally accounting integrations, and executive pipeline views.',
      deliverables: ['Custom CRM Architecture', 'Tally & WhatsApp Sync', 'Role-Based Dashboard', 'Mobile Field App'],
      results: '12h Saved Per Team Weekly',
    },
    {
      id: 'arka-5',
      title: 'Industrial Plant Nationwide SEO',
      category: 'Manufacturing · Lead Gen',
      image: '/portfolite/proj-5.png',
      client: 'Business Head, Industrial Plant',
      year: '2024',
      description: 'A modular city-page architecture, product specification schema, Google Business profile optimisation across nine manufacturing zones, and technical intent marketing.',
      deliverables: ['Multi-City Architecture', 'Technical SEO Schema', 'Google Maps Optimisation', 'Lead Capture Engine'],
      results: '140+ Keywords Ranked on Page One',
    },
    {
      id: 'arka-6',
      title: 'Meridian Healthcare Network',
      category: 'UX / UI & Content Engine',
      image: '/portfolite/proj-6.png',
      client: 'Sneha Kulkarni, CMO',
      year: '2025',
      description: 'A patient-first digital ecosystem featuring seamless doctor appointment scheduling, cross-city hospital information architecture, and an always-on content marketing engine producing thirty original assets monthly.',
      deliverables: ['Patient Portal & Booking', 'Healthcare Design System', 'Content Production Engine', 'Local SEO'],
      results: '3.4× Engagement & Booking Lift',
    },
  ];

  // Col 6 Projects (Right Column)
  const projectsCol6: ProjectData[] = [
    {
      id: 'arka-7',
      title: 'BotBlox Robotics Hardware',
      category: 'Hardware & Web Portal',
      image: '/portfolite/proj-7.png',
      client: 'Engineering Team, BotBlox',
      year: '2024',
      description: 'High-performance interactive web experience for autonomous drone and robotics networking hardware, featuring technical datasheets and instant checkout.',
      deliverables: ['Hardware Landing Pages', 'Technical Documentation UI', 'Custom 3D Interactive View', 'Fast Checkout'],
      results: 'Global B2B Developer Adoption',
    },
    {
      id: 'arka-8',
      title: 'Kestrix Thermal AI Systems',
      category: 'AI Software & Dashboard',
      image: '/portfolite/proj-8.png',
      client: 'Product Lead, Kestrix',
      year: '2025',
      description: 'Clean spatial thermal analytics interface, interactive GIS mapping overlays, and building energy retrofitting dashboard built with Next.js and Three.js.',
      deliverables: ['Analytics Dashboard', 'Interactive Heatmap Canvas', 'B2B Sales Portal', 'Framer Prototype'],
      results: 'Major European Municipal Rollout',
    },
    {
      id: 'arka-9',
      title: 'Skipper NDT Maritime Tech',
      category: 'Offshore Tech · 3D Visuals',
      image: '/portfolite/proj-9.png',
      client: 'Managing Director, Skipper NDT',
      year: '2024',
      description: 'Cinematic brand presence and interactive digital showcase for magnetic drone inspection of buried subsea pipelines.',
      deliverables: ['Cinematic Brand Presence', '3D Pipeline Visualisation', 'Multi-Language Architecture', 'Investor Deck'],
      results: 'Premier Maritime Tech Award',
    },
  ];

  const renderProjectCard = (proj: ProjectData, featured = false) => (
    <div
      key={proj.id}
      onClick={() => setSelectedProject(proj)}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all duration-500 cursor-pointer shadow-xl ${
        featured ? 'ring-1 ring-black/15' : ''
      }`}
    >
      {/* Category Pill Tag (Top Left) */}
      <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none flex items-center gap-2">
        <span className="px-2.5 py-1 rounded-full text-[10.5px] font-medium tracking-wide bg-white/85 backdrop-blur-md border border-black/12 text-zinc-800 shadow-sm">
          {proj.category}
        </span>
      </div>

      {/* Result Metric Tag (Top Right) */}
      <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-solar/15 backdrop-blur-md border border-solar/35 text-solar flex items-center gap-1 shadow-sm">
          <TrendingUp className="w-2.5 h-2.5" />
          <span>{proj.results.split(' ')[0]}</span>
        </span>
      </div>

      {/* Image Container with Framer-like Grayscale to Color & Subtle Scale */}
      <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/4.6] overflow-hidden bg-zinc-100">
        <img
          src={proj.image}
          alt={proj.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Subtle Dark Vignette at Bottom for Frosted Pill Contrast */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Permanent Frosted Glass "View Casestudy" Button (Authentic Framer Component) */}
        <div className="absolute bottom-3 sm:bottom-3.5 inset-x-3 sm:inset-x-3.5 z-20">
          <div className="w-full h-10 sm:h-11 rounded-full border border-black/15 bg-white/95 hover:bg-white group-hover:border-black/35 backdrop-blur-md flex items-center justify-center gap-2 text-black text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            <span>View Casestudy</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative pt-0 sm:pt-2 pb-16 sm:pb-24 font-framer bg-white text-black overflow-hidden"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-zinc-200/[0.4] to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-3 sm:px-6">
        {/* Exact Framer Top Mask Gradient Container */}
        <div className="framer-mask-gradient py-2">
          {/* Outer Parallax Flex Columns (Gap 10px-12px exactly like Framer) */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-2.5 sm:gap-3">
            {/* Column 1 (Left Column) */}
            <motion.div
              style={{ y: scrollYCol1 }}
              className="flex-1 w-full"
            >
              <motion.div
                initial={{ opacity: 1, y: -650, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ type: 'spring', stiffness: 50, damping: 30, mass: 1 }}
                className="w-full flex flex-col gap-2.5 sm:gap-3"
              >
                {projectsCol1.map((p) => renderProjectCard(p))}
              </motion.div>
            </motion.div>

            {/* Column 5 (Center Column - Elevated Flagship Scale) */}
            <motion.div
              style={{ y: scrollYCol5 }}
              className="flex-[1.22] w-full z-10"
            >
              <motion.div
                initial={{ opacity: 1, y: -260, scale: 1.6 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ type: 'spring', stiffness: 50, damping: 30, mass: 1 }}
                className="w-full flex flex-col gap-2.5 sm:gap-3"
              >
                {projectsCol5.map((p) => renderProjectCard(p, true))}
              </motion.div>
            </motion.div>

            {/* Column 6 (Right Column) */}
            <motion.div
              style={{ y: scrollYCol6 }}
              className="flex-1 w-full"
            >
              <motion.div
                initial={{ opacity: 1, y: -720, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ type: 'spring', stiffness: 50, damping: 30, mass: 1 }}
                className="w-full flex flex-col gap-2.5 sm:gap-3"
              >
                {projectsCol6.map((p) => renderProjectCard(p))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Centered Action Buttons (Exact Framer Structure) */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() => setSelectedProject(projectsCol5[0])}
            className="px-6 py-2.5 text-xs sm:text-sm text-zinc-600 hover:text-black underline underline-offset-8 transition-colors font-medium"
          >
            All Projects
          </button>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center gap-2 framer-btn-primary shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
