'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import ProjectModal, { ProjectData } from './ProjectModal';

export default function PortfoliteRecentWorksCarousel() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const items: ProjectData[] = [
    {
      id: 'recent-1',
      title: 'Precision Engineering Exporter',
      category: 'Manufacturing · SEO & Web',
      image: '/portfolite/proj-1.png',
      client: 'Rajesh Verma, Director',
      year: '2025',
      description: 'Rebuilt sixty specification pages and filmed a factory capacity film that unlocked verified buyer inquiries from Europe and North America.',
      deliverables: ['Intent SEO', 'Fast Web Platform', 'Factory Film'],
      results: '+300% Organic Traffic',
    },
    {
      id: 'recent-2',
      title: 'Maison D2C Online Store',
      category: 'E-Commerce · Checkout Rebuild',
      image: '/portfolite/proj-2.png',
      client: 'Priya Sharma, Founder',
      year: '2025',
      description: 'Headless storefront with 1.4s load time, streamlined checkout funnel, and full-funnel remarketing acquisition.',
      deliverables: ['Headless Storefront', 'Checkout Rebuild', 'Meta Ads'],
      results: '+60% Revenue · 4.6× ROAS',
    },
    {
      id: 'recent-3',
      title: 'Northline Heavy Industries',
      category: 'Corporate Film & TVC',
      image: '/portfolite/proj-3.png',
      client: 'Marketing Head, Northline',
      year: '2024',
      description: 'Cinematic brand film shot across two manufacturing hubs, distributed with an account-based campaign to 900 institutional buyers.',
      deliverables: ['Brand Film', 'Factory Cinematography', 'Social Cuts'],
      results: '2.1M Views · 480 Leads',
    },
    {
      id: 'recent-4',
      title: 'Enterprise Multi-Branch CRM',
      category: 'Custom ERP & WhatsApp Sync',
      image: '/portfolite/proj-4.jpg',
      client: 'Amit Patel, CEO',
      year: '2025',
      description: 'Replaced fragmented regional sheets with a multi-tier CRM with role-based dashboards, automated approval matrices, and Tally accounting sync.',
      deliverables: ['Custom CRM', 'Tally Sync', 'Field Mobile App'],
      results: '12h Saved Per Team Weekly',
    },
    {
      id: 'recent-5',
      title: 'Industrial Plant Nationwide',
      category: 'Search Engine Domination',
      image: '/portfolite/proj-5.png',
      client: 'Business Head, Industrial Plant',
      year: '2024',
      description: 'Modular city-page architecture and Google Business Profile optimization across 9 key manufacturing clusters.',
      deliverables: ['Multi-City SEO', 'Technical Schema', 'Lead Capture'],
      results: '140+ #1 Rankings',
    },
    {
      id: 'recent-6',
      title: 'Meridian Healthcare Portal',
      category: 'UX Design & Patient Booking',
      image: '/portfolite/proj-6.png',
      client: 'Sneha Kulkarni, CMO',
      year: '2025',
      description: 'Seamless patient booking experience and cross-city hospital information architecture with always-on content marketing.',
      deliverables: ['Patient Portal', 'Design System', 'Local SEO'],
      results: '3.4× Booking Lift',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-black font-framer overflow-hidden border-t border-black/10">
      {/* Framer "Recent Works ↙" Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black flex items-center gap-2">
            <span>Recent Works</span>
            <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-zinc-700">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
          </h3>
        </div>

        <p className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
          Continuous Client Deployments
        </p>
      </div>

      {/* Fade masks */}
      <div className="relative">
        <div className="absolute left-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden flex py-4">
          <div className="animate-marquee flex gap-4 sm:gap-6 px-4">
            {[...items, ...items].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(item)}
                className="group relative w-[290px] sm:w-[350px] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-black/10 hover:border-black/30 transition-all duration-500 shadow-xl cursor-pointer"
              >
                <div className="relative aspect-[4/4.8] overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Gradient Scrim for frosted button legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10.5px] font-medium tracking-wide bg-white/85 backdrop-blur-md border border-black/12 text-zinc-800 shadow-sm">
                      {item.category.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Frosted Glass "View Casestudy" Button (Authentic Framer Component) */}
                  <div className="absolute bottom-3.5 inset-x-3.5 z-20">
                    <div className="w-full h-10 rounded-full border border-black/15 bg-white/95 hover:bg-white group-hover:border-black/35 backdrop-blur-md flex items-center justify-center gap-2 text-black text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                      <span>View Casestudy</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
