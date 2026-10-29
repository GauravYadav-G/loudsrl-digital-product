'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  ShieldCheck,
  Zap,
  ArrowRight,
  Search,
  Video,
  Share2,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  MessageSquare,
  ShoppingBag,
  Film,
  Building2,
  ChevronDown,
  PlayCircle,
  TrendingUp,
} from 'lucide-react';
import PortfoliteNav from '../components/portfolite/PortfoliteNav';
import PortfoliteFooter from '../components/portfolite/PortfoliteFooter';
import { COMPANY, PROCESS } from '../lib/data';

type CategoryFilter = 'All' | 'Digital Marketing' | 'Software Development' | 'Search Engine Optimization' | 'Corporate Film Making';

export default function PortfoliteServicesPage() {
  const [selectedCat, setSelectedCat] = useState<CategoryFilter>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Digital Marketing',
    'Software Development',
    'Search Engine Optimization',
    'Corporate Film Making',
  ];

  const disciplines = [
    // ─────────────────────────────────────────────────────────────
    // 1. DIGITAL MARKETING
    // ─────────────────────────────────────────────────────────────
    {
      id: 'social-media-handling',
      category: 'Digital Marketing',
      tag: 'Social Media & SMO',
      title: 'Social Media Handling & Brand Promotion',
      subtitle: 'Strategic SMO, demographic Facebook & Meta advertising, and multi-channel authority',
      desc: 'In today’s business scenario, social media plays a pivotal role in promoting and handling business growth across Facebook, Instagram, LinkedIn, and X. Social Media Optimization (SMO) improves the online visibility and reach of your brand through planned, strategic distribution rather than sporadic updates. Our targeted Facebook ads pinpoint exact geographic and demographic parameters, driving higher engagement and qualified inbound leads at a lower cost of acquisition.',
      highlights: [
        'Strategic Social Media Optimization (SMO) across Meta, LinkedIn, Instagram, and X',
        'Targeted Facebook and Instagram advertising with precise geographic and demographic parameters',
        'Consistent brand voice development, editorial planning, and creative asset production',
        'Community handling, rapid reputation response, and customer conversion funnels',
      ],
      metric: '+240%',
      metricLabel: 'Social Engagement Lift',
    },
    {
      id: 'ecommerce-seo-ppc',
      category: 'Digital Marketing',
      tag: 'Ecommerce Performance',
      title: 'E-Commerce SEO & Shopping PPC Services',
      subtitle: 'Accelerated Mobile Pages (AMP), personalized shopping, and visual image search',
      desc: 'The e-commerce search and paid advertising landscape is constantly evolving. Modern online retail requires three essential technological advantages: Accelerated Mobile Pages (AMP) for sub-second mobile loading prioritized by Google, Personalized Shopping Experiences with tailored recommendations and AI chatbots, and Visual Search integration that allows shoppers to search your catalog using smartphone photos rather than keywords.',
      highlights: [
        'AMP (Accelerated Mobile Pages) open-source framework implementation for lightning mobile checkout',
        'Personalized shopping experiences with automated recommendation engines and chatbot support',
        'Visual search optimization allowing customer image search directly into product catalogs',
        'Google Shopping / PLA (Product Listing Ads) optimization with live pricing and review badges',
      ],
      metric: '+65%',
      metricLabel: 'Mobile Conversion Lift',
    },
    {
      id: 'ecommerce-social-ads',
      category: 'Digital Marketing',
      tag: 'Paid Social Funnels',
      title: 'E-Commerce Social Media Advertising',
      subtitle: 'High-intent catalog ads connecting search demand with social targeting',
      desc: 'Marrying e-commerce search engine marketing with paid social campaigns creates a high-velocity customer acquisition loop. Search marketing captures existing intent when customers look for your products, while targeted social advertising introduces your catalog to high-probability buyers. We optimize product feeds, run dynamic catalog ads, and engineer re-engagement sequences that dramatically lower acquisition costs.',
      highlights: [
        'Dynamic Product Ads (DPA) synced with real-time inventory and pricing catalogs',
        'Omni-channel retargeting sequences re-engaging shoppers who viewed specific SKUs',
        'Creative split-testing of video hooks, carousel carousels, and offer architectures',
        'Direct integration with Shopify Plus, Magento, and custom e-commerce checkouts',
      ],
      metric: '4.8×',
      metricLabel: 'Average Social ROAS',
    },
    {
      id: 'email-sms-whatsapp',
      category: 'Digital Marketing',
      tag: 'Direct Messaging',
      title: 'Email, SMS & WhatsApp Business Marketing',
      subtitle: 'Permission-based text marketing, high-open rate WhatsApp automation, and lifecycle retention',
      desc: 'SMS and WhatsApp marketing represent the highest-engagement communication channels available to modern businesses. With 98% open rates and immediate mobile delivery, automated WhatsApp notifications and targeted SMS campaigns re-activate inactive buyers and drive repeat orders. Combined with intelligent lifecycle email newsletters, we build automated retention workflows that generate predictable recurring revenue.',
      highlights: [
        'Official WhatsApp Business API integration with automated order updates and support flows',
        'Permission-based SMS broadcasts with high-speed delivery gateways and link tracking',
        'Automated lifecycle email journeys for welcome sequences, abandoned carts, and re-orders',
        'Rigorous list hygiene, unsubscribe compliance, and customer segmentation by purchase history',
      ],
      metric: '98%',
      metricLabel: 'WhatsApp Open Rate',
    },
    {
      id: 'google-social-ads',
      category: 'Digital Marketing',
      tag: 'Multi-Channel Media',
      title: 'Google & Social Media Ads Campaigns',
      subtitle: 'Search intent capture paired with demographic social awareness for maximum market share',
      desc: 'Our campaigns are built around the truth that your company is not just a vendor, but an authority. Potential clients search for your services every day on Google, while spending hours discovering brands on social feeds. Our media specialists design coordinated campaigns that capture active search intent on Google Ads while building undeniable familiarity on Meta and LinkedIn, driving down cost per lead across the entire funnel.',
      highlights: [
        'Google Search, Display, and Performance Max (PMax) campaign management',
        'Cross-platform demographic targeting matching ideal customer profiles (ICPs)',
        'Click fraud filtering, negative keyword management, and bid automation',
        'End-to-end multi-touch attribution connecting clicks to bottom-line closed revenue',
      ],
      metric: '-38%',
      metricLabel: 'Cost Per Acquisition',
    },

    // ─────────────────────────────────────────────────────────────
    // 2. SOFTWARE DEVELOPMENT
    // ─────────────────────────────────────────────────────────────
    {
      id: 'custom-crm-software',
      category: 'Software Development',
      tag: 'Cloud CRM',
      title: 'Custom CRM Software Development',
      subtitle: 'Unified sales, marketing, and customer support with 1-to-1 personalized journeys',
      desc: 'A custom CRM connects all your departments—from marketing and sales to customer fulfillment—and unifies notes, deals, phone logs, and metrics into one cohesive system. Built on modern cloud and SaaS architectures, our CRM software gives your team direct real-time client data from any device. We eliminate legacy analog spreadsheets and deliver personalized one-to-one customer journeys that scale infinitely with your business.',
      highlights: [
        'Departmental synchronization: Marketing lead capture, sales pipelines, and support tickets in one hub',
        'Cloud-native SaaS architecture accessible via secure web and mobile applications anywhere',
        'Custom role-based permissions, automated approval hierarchies, and pipeline deal scoring',
        'Seamless integration with WhatsApp API, email servers, VoIP call tracking, and accounting tools',
      ],
      metric: '12h+',
      metricLabel: 'Saved Per Team Weekly',
    },
    {
      id: 'erp-enterprise-solutions',
      category: 'Software Development',
      tag: 'Enterprise ERP',
      title: 'Enterprise Resource Planning (ERP) Solutions',
      subtitle: 'Centralizing finance, HR, global supply chain, and inventory management',
      desc: 'ERP is the operational foundation of modern business, designed to manage and integrate core processes including finance, human resources, supply chain logistics, procurement, and warehouse inventory in a single system. In an increasingly complex global economy, streamlining operations and accessing accurate unified data is mission-critical. Our custom ERP engineering replaces fragmented departmental software with one reliable source of truth.',
      highlights: [
        'End-to-end supply chain tracking, purchase order workflows, and real-time inventory management',
        'Integrated financial ledger, automated invoicing, multi-currency accounting, and tax compliance',
        'HR management modules covering payroll, attendance tracking, and performance scorecards',
        'Custom executive reporting dashboards delivering real-time operational health metrics',
      ],
      metric: '100%',
      metricLabel: 'Data Synchronization',
    },
    {
      id: 'website-development',
      category: 'Software Development',
      tag: 'Full-Stack Web',
      title: 'Bespoke Website & Web Portal Development',
      subtitle: 'Systematic technical engineering using Next.js, React, Node.js, PHP, and Microsoft .NET',
      desc: 'True software advancement requires the systematic application of specialized engineering knowledge to meet explicit commercial goals. We build high-throughput corporate websites, customer portals, and web applications engineered for speed, security, and scalability. Our engineering team possesses deep mastery of open-source stacks (PHP 8, MySQL, Node.js, Next.js 15) and enterprise Microsoft technologies (ASP.NET, C#, SQL Server).',
      highlights: [
        'Modern frontend engineering with Next.js 15, React, TypeScript, and Tailwind CSS',
        'Robust backend architectures across Node.js, Python, PHP, and Microsoft ASP.NET',
        'Database design, indexing, and query optimization on PostgreSQL, MySQL, and Redis',
        'Full REST and GraphQL API development for headless architectures and microservices',
      ],
      metric: '<1.2s',
      metricLabel: 'Average Page Load',
    },
    {
      id: 'lead-management-system',
      category: 'Software Development',
      tag: 'LMS Solutions',
      title: 'Lead Management & Learning Systems (LMS)',
      subtitle: 'Automated lead ingestion, intelligent scoring, routing, and institutional learning platforms',
      desc: 'Our LMS platforms fulfill dual enterprise requirements: high-velocity lead distribution systems that capture, validate, and route sales leads in real time, and enterprise Learning Management Systems for corporate training and certification. We build software that manages administration, tracking, automated reporting, and delivery of training modules to thousands of concurrent users across web and mobile devices.',
      highlights: [
        'Instant multi-channel lead ingestion from website forms, Google Ads, Meta, and phone calls',
        'Algorithmic lead scoring and automated round-robin routing to regional sales executives',
        'Comprehensive corporate learning module management with interactive video lessons and testing',
        'Automated progress tracking, compliance certification, and detailed performance telemetry',
      ],
      metric: '<60s',
      metricLabel: 'Lead Route Velocity',
    },
    {
      id: 'mobile-applications',
      category: 'Software Development',
      tag: 'iOS & Android',
      title: 'Mobile Application Engineering',
      subtitle: 'Native and hybrid mobile apps leveraging cloud backends and device hardware',
      desc: 'Mobile applications connect your business directly to your users wherever they go. With global mobile app downloads reaching hundreds of billions, a well-structured mobile application allows your enterprise to leverage native device features—push notifications, offline storage, biometrics, camera scanning, and geolocation. We engineer secure, intuitive mobile bundles for iOS and Android balanced for speed and cost.',
      highlights: [
        'Cross-platform React Native and native Swift / Kotlin mobile app engineering',
        'Real-time cloud database synchronization and offline-first operational capability',
        'Biometric authentication, secure payment gateway integrations, and instant push notifications',
        'App Store and Google Play Store deployment, review compliance, and ongoing maintenance retainers',
      ],
      metric: '4.9★',
      metricLabel: 'App Store Ratings',
    },

    // ─────────────────────────────────────────────────────────────
    // 3. SEARCH ENGINE OPTIMIZATION
    // ─────────────────────────────────────────────────────────────
    {
      id: 'google-seo-services',
      category: 'Search Engine Optimization',
      tag: 'Google Search Dominance',
      title: 'Google SEO Services & Page-One Ranking',
      subtitle: 'Algorithmic alignment with Google search standards to capture high-intent commercial traffic',
      desc: 'Google handles more than 90 percent of all global searches. Optimizing for Google requires deep understanding of how its crawling spiders interpret page content, structure, image assets, and semantic relationships. Instead of languishing on page three or four, our proven Google SEO frameworks place your enterprise firmly on page one, generating steady streams of organic commercial inquiries and long-term market dominance.',
      highlights: [
        'Comprehensive keyword intent mapping focusing on high-converting transactional queries',
        'Entity-based semantic optimization and structured schema markup for Google rich snippets',
        'Crawl budget optimization, canonicalization, and indexation management across large domains',
        'Continuous algorithmic tracking against Google Core, Helpful Content, and Spam updates',
      ],
      metric: '92%+',
      metricLabel: 'Page-One Keyword Share',
    },
    {
      id: 'search-engine-marketing',
      category: 'Search Engine Optimization',
      tag: 'Paid Search (SEM)',
      title: 'Search Engine Marketing (SEM & PPC)',
      subtitle: 'Keyword bidding, visual Product Listing Ads (PLAs), and high-intent paid conversion',
      desc: 'Search Engine Marketing places your commercial offerings at the top of search result pages precisely when active buyers are searching for solutions. We bid strategically on high-intent search queries across Google and Bing. Our campaigns encompass text ads, call-only formats, and visual Product Listing Ads (PLAs) that showcase product imagery, live prices, and customer reviews right on the search results page.',
      highlights: [
        'Strategic keyword bidding and query management with real-time automated bid adjustments',
        'Google Shopping / PLA management with rich product reviews, shipping annotations, and badges',
        'High-converting landing page development engineered for Quality Score optimization',
        'Transparent budget reporting tracking Cost Per Click (CPC) and Return on Ad Spend (ROAS)',
      ],
      metric: '5.2×',
      metricLabel: 'Campaign ROAS Lift',
    },
    {
      id: 'on-off-page-seo',
      category: 'Search Engine Optimization',
      tag: 'Technical Health',
      title: 'On-Page & Off-Page SEO Architecture',
      subtitle: 'HTML tags, page speed delight, high-authority backlink building, and technical crawl health',
      desc: 'On-page SEO ensures your website is crawlable, understandable, and delightful for human visitors—from optimized HTML headings, meta tags, and URL hierarchies to sub-second load times. Off-page SEO builds the undeniable external authority of your domain through high-quality editorial backlinks, brand mentions, and digital PR that establish lasting search engine trust.',
      highlights: [
        'Meticulous on-page optimization: Title tags, meta descriptions, alt attributes, and clean semantic markup',
        'High-quality authority backlink acquisition through ethical digital PR and guest editorial placements',
        'Complete technical setup: Robots.txt creation, XML sitemap generation, and schema.org integration',
        'Internal link architecture and topical cluster modeling to channel link equity to priority URLs',
      ],
      metric: '85+',
      metricLabel: 'Average Domain Authority',
    },
    {
      id: 'local-seo-services',
      category: 'Search Engine Optimization',
      tag: 'Local Citations',
      title: 'Local SEO & Google Business Optimization',
      subtitle: 'Dominating Google Maps 3-Pack and capturing the 46% of searches with local intent',
      desc: 'With 46 percent of all Google searches seeking products, services, or companies in their local area, local search visibility is a primary revenue engine. We optimize your Google Business Profile (GBP), manage localized citations across 70+ business directories, and implement local schema so your business dominates the Google 3-pack and captures local consumers looking to visit or call immediately.',
      highlights: [
        'Complete Google Business Profile (GBP) audit, claim verification, and weekly optimization',
        'Consistent NAP (Name, Address, Phone) citations across Google, Bing, Justdial, and industry directories',
        'Localized keyword targeting for city, suburb, and industrial territory search queries',
        'Proactive review generation and reputation monitoring to build verified local social proof',
      ],
      metric: '+180%',
      metricLabel: 'Local Inbound Calls',
    },

    // ─────────────────────────────────────────────────────────────
    // 4. CORPORATE FILM MAKING & VIDEO PRODUCTION
    // ─────────────────────────────────────────────────────────────
    {
      id: 'corporate-films-docs',
      category: 'Corporate Film Making',
      tag: 'Brand Cinema',
      title: 'Corporate Films & CSR Documentaries',
      subtitle: 'Cinematic corporate storytelling, leadership vision, and Corporate Social Responsibility films',
      desc: 'Corporate films are the single most efficient medium for enterprises to convey their corporate culture, manufacturing scale, and strategic objectives. Our in-house production crew—including award-winning scriptwriters, cinematographers, directors, and DaVinci colorists—shoots broadcast-grade films with cinema cameras. We also specialize in CSR documentaries highlighting social impact, community development, and sustainable operations.',
      highlights: [
        'Full in-house production crew: Scriptwriter, director, cinematographer, sound engineer, and editor',
        'Shot on high-end 4K/8K cinema camera systems with professional drone aerial cinematography',
        'CSR and sustainability documentaries highlighting community initiatives and employee welfare',
        'Turnkey post-production: Editing, color grading, licensed original score, and motion titles',
      ],
      metric: '8K/4K',
      metricLabel: 'Broadcast Resolution',
    },
    {
      id: 'product-demo-videos',
      category: 'Corporate Film Making',
      tag: 'Conversion Video',
      title: 'Product & Service Demo Videos',
      subtitle: 'Showcasing product USPs on camera to drive the 73% of viewers who purchase after watching',
      desc: 'Video demonstrations help prospective buyers instantly understand the real-world value of your products and software. Studies show that 73 percent of visitors who watch a product video make a purchase, and video content contributes to a 49 percent increase in year-over-year revenue. Rather than expecting buyers to read dense manuals or static spec sheets, our product demo films showcase physical build quality and software UI in action.',
      highlights: [
        'Studio lighting and macro lens capture of physical machinery, industrial components, and consumer products',
        'Slick screen-capture animation and UI walkthroughs for SaaS platforms and software workflows',
        'Clear, benefit-driven scriptwriting highlighting competitive differentiators and real-world results',
        'Optimized video cut-downs tailored for landing pages, trade show displays, and sales reps',
      ],
      metric: '73%',
      metricLabel: 'Viewer Purchase Rate',
    },
    {
      id: 'explainer-videos',
      category: 'Corporate Film Making',
      tag: 'Explainer Animations',
      title: 'High-Impact Explainer Videos',
      subtitle: 'Short, engaging marketing videos boosting landing page conversion rates by up to 144%',
      desc: 'Explainer videos distill complex enterprise technologies, B2B workflows, or specialized products into clear, captivating 60-to-90-second visual narratives. Placed prominently on your home page, landing pages, or product portals, explainer videos have been documented to increase conversion rates by up to 144 percent. We blend live-action cinematography, 2D/3D motion graphics, and professional voiceover talent.',
      highlights: [
        'Psychological script architecture designed to hook attention in the first five seconds',
        'Hybrid animation combining live footage with 2D motion graphics and 3D kinetic typography',
        'Professional studio voiceover recorded in multiple languages for domestic and international markets',
        'Engineered for maximum retention and rapid comprehension on mobile screens',
      ],
      metric: '+144%',
      metricLabel: 'Landing Page Conversion',
    },
    {
      id: 'tv-commercials-analysis',
      category: 'Corporate Film Making',
      tag: 'TVCs & Video Ads',
      title: 'TV Commercial Ads & Performance Video',
      subtitle: 'Broadcast-quality TV commercials paired with multi-touch attribution and data analytics',
      desc: 'In today’s multi-touchpoint media world, TV advertising and digital video must work hand in hand. We write, direct, and produce broadcast-standard television commercials and digital ad films. Furthermore, our data-driven TV ad analysis breaks down siloed marketing data to evaluate how on-air broadcasts drive concurrent spikes in Google search traffic, website visits, and direct lead generation.',
      highlights: [
        'Concept development, storyboard creation, cast auditioning, and location permits handled in-house',
        'Cinema-grade lighting, multi-cam shooting, and sound design meeting national broadcast specs',
        'Data-driven broadcast analysis mapping ad airtimes to organic search and website conversion spikes',
        'Optimized aspect ratio cut-downs (16:9, 9:16 vertical, 1:1) for YouTube, Instagram Reels, and Meta',
      ],
      metric: '100%',
      metricLabel: 'Broadcast Compliant',
    },
    {
      id: 'customer-testimonials-events',
      category: 'Corporate Film Making',
      tag: 'Authentic Proof',
      title: 'Customer Testimonial Videos & Event Coverage',
      subtitle: 'Supercharging word-of-mouth social proof to boost website conversions by 34% or more',
      desc: 'Authentic customer testimonials tap into the most powerful advertising force in business: word of mouth. Case studies prove that placing authentic customer video reviews front and center lifts conversions by over 34 percent. We also provide large-format event video coverage for corporate summits, product launches, factory inaugurations, and trade exhibitions, delivering high-energy event highlight reels.',
      highlights: [
        'On-location filming of real client advocates, capturing unscripted, credible enterprise success stories',
        'Multi-camera coverage of corporate conferences, exhibitions, panel discussions, and keynotes',
        'Fast same-week turnaround for social media event highlight videos and press releases',
        'High-definition audio capture ensuring crystal-clear executive and client sound bites',
      ],
      metric: '+34%',
      metricLabel: 'Conversion Lift on Reviews',
    },
    {
      id: 'training-videos',
      category: 'Corporate Film Making',
      tag: 'Corporate Training',
      title: 'Interactive Corporate Training Videos',
      subtitle: 'Engaging, repeatable video training modules for employees, channel partners, and customers',
      desc: 'Replacing dense paper binders and repetitive in-person onboarding with high-definition training videos saves hundreds of organizational hours. We film interactive instructional videos that guide employees through standard operating procedures (SOPs), machine operations, workplace safety protocols, and customer service standards with clarity and engagement.',
      highlights: [
        'Step-by-step SOP and factory machinery training filmed on-site with running production lines',
        'Interactive chaptering, screen graphics, and text callouts emphasizing critical safety steps',
        'Repeatable digital training assets hosted on your internal LMS or company portal',
        'Dramatically reduced employee onboarding times and consistent operational execution',
      ],
      metric: '65%',
      metricLabel: 'Onboarding Time Saved',
    },
  ];

  const filteredDisciplines =
    selectedCat === 'All'
      ? disciplines
      : disciplines.filter((d) => d.category === selectedCat);

  const capabilities = [
    {
      domain: 'Engineering & Cloud',
      icon: Cpu,
      stack: ['Next.js 15 & React', 'Node.js & Python', 'PostgreSQL & Redis', 'Docker & AWS', 'GraphQL & REST APIs', 'Microservices'],
    },
    {
      domain: 'Search & Attribution',
      icon: Zap,
      stack: ['Technical Crawl Audits', 'Entity & Semantic Schema', 'Dynamic Call Tracking', 'Multi-Touch Attribution', 'Negative Keyword Libraries', 'Local Search Cluster'],
    },
    {
      domain: 'Design & Visual Craft',
      icon: Layers,
      stack: ['Design Tokens & Systems', 'Figma Prototyping', '4K Cinema Workflows', 'DaVinci Color Grading', 'Interactive WebGL', 'Accessible Typography'],
    },
    {
      domain: 'Governance & Security',
      icon: ShieldCheck,
      stack: ['Role-Based Access Control', 'SSL / TLS Hardening', 'Automated Daily Backups', 'Audit Trails & Logs', 'GDPR / DPDP Compliance', '24/7 SLA Guarantee'],
    },
  ];

  const guides = [
    {
      title: 'Modern ERP & Custom CRM Selection Guide for Growing Enterprises',
      cat: 'Software Architecture',
      readTime: '6 min read',
      desc: 'Why off-the-shelf software packages fail complex workflows. An engineering breakdown of custom cloud CRM vs legacy analogue spreadsheets, integrating finance, supply chain, and customer journeys into a single database.',
      linkText: 'Read Architectural Playbook',
    },
    {
      title: 'Why Corporate Film & Video Marketing Outperform Static Copy',
      cat: 'Creative Production',
      readTime: '5 min read',
      desc: 'Analyzing the commercial impact of product demos and explainer videos. How video content drives 82% of internet traffic, achieves 73% purchase intent, and lifts landing page conversion rates by up to 144%.',
      linkText: 'Explore Video Production ROI',
    },
    {
      title: 'The Multi-Channel Growth Flywheel: Aligning Google SEO, Paid Ads & Direct Messaging',
      cat: 'Growth Strategy',
      readTime: '7 min read',
      desc: 'How leading Indian enterprises synthesize Google page-one search rankings with targeted Meta advertising, WhatsApp Business automation, and permission-based SMS campaigns for sustainable market dominance.',
      linkText: 'View Growth Playbook',
    },
  ];

  const faqs = [
    {
      q: 'What makes ARKA Technovation the leading digital marketing and engineering company in Noida?',
      a: 'Unlike traditional agencies that outsource technical tasks or rely on cookie-cutter templates, ARKA Technovation houses software developers, technical SEO engineers, cinematographers, and digital marketing strategists under one roof at our corporate office in Sector 63, Noida. This unified model ensures unbroken accountability, deep technical rigor, and seamless cross-disciplinary execution.',
    },
    {
      q: 'How do you structure custom CRM and ERP development projects?',
      a: 'We follow a structured 6-stage lifecycle: Discovery & Process Mapping, Architecture & Database Design, Agile Two-Week Sprint Development, Integration with external systems (Tally, WhatsApp API, payment gateways), User Acceptance Testing (UAT), and full source code handover with team training. Staged milestone deliverables ensure working software at every step.',
    },
    {
      q: 'What is the typical turnaround time for corporate film and video production?',
      a: 'Depending on the scale and complexity, a high-impact corporate film or product demo video typically takes 3 to 5 weeks from initial script sign-off through location shooting, editing, DaVinci color grading, sound design, and final broadcast delivery. Rapid social video cut-downs and event coverage can be delivered in as little as 48 to 72 hours.',
    },
    {
      q: 'How long does it take to achieve page-one Google rankings with your SEO services?',
      a: 'Technical crawl fixes, schema implementation, and Core Web Vitals speed improvements show indexation gains within 30 to 45 days. High-volume competitive commercial keywords typically achieve page-one rankings within 3 to 6 months through consistent topic cluster publishing and authoritative digital PR backlink acquisition.',
    },
    {
      q: 'Can your team integrate with our existing enterprise IT infrastructure and third-party tools?',
      a: 'Yes. Our developers possess extensive experience integrating custom web portals, CRMs, and ERP systems with third-party APIs including Salesforce, Microsoft Dynamics 365, SAP, Tally, Zoho, RingCentral, Twilio, WhatsApp Business API, and all leading payment gateways.',
    },
    {
      q: 'Do you offer ongoing website maintenance and 24/7 technical support retainers?',
      a: 'Yes. We offer comprehensive web infrastructure and maintenance retainers backed by strict Service Level Agreements (SLAs). Our support packages include 24/7 uptime monitoring, automated weekly cloud backups, security patch application, Core Web Vitals speed audits, and dedicated engineering support hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-solar selection:text-white">
      <PortfoliteNav />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(255,255,255,0)_70%)] pointer-events-none blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-solar">Services &amp; Capabilities</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-solar" />
            <span>Setting the Standard as the Best Digital Marketing &amp; Engineering Company in Noida</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] max-w-4xl mx-auto">
            Comprehensive Capabilities Engineered for Enterprise Scale.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            In the rapidly evolving digital landscape, staying ahead requires constant innovation. {COMPANY.name} stands at the forefront of digital trends—integrating AI in advertising, high-throughput software architectures, page-one search engine dominance, and broadcast cinema production under one roof.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-black/10 pt-8 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
              <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">15+</p>
              <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Years Domain Craft</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
              <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">1,500+</p>
              <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Clients Worldwide</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
              <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">100%</p>
              <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">In-House Noida Team</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
              <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">4.8×</p>
              <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">Average Client ROAS</p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((c) => {
              const count = c === 'All' ? disciplines.length : disciplines.filter((d) => d.category === c).length;
              const active = selectedCat === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                    active
                      ? '!bg-black !text-white shadow-lg shadow-black/20'
                      : '!bg-zinc-100 !text-zinc-700 hover:!text-black hover:!bg-zinc-200 !border !border-black/10'
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      active ? '!bg-white/20 !text-white font-bold' : '!bg-black/10 !text-zinc-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Detailed Services & Capabilities Grid ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredDisciplines.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-black/10 hover:border-black/25 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] shadow-sm"
              >
                {/* Top ambient hover glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-radial-gradient from-black/[0.03] to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-solar/10 transition-colors duration-500" />

                <div>
                  {/* Top Bar: Tag & Metric */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-600 mb-5">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-solar" />
                      <span className="uppercase tracking-widest font-semibold">{item.tag}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-black/8 text-zinc-800 font-medium">
                      {item.metric} <span className="text-zinc-500 font-sans text-[11px]">{item.metricLabel}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-zinc-900 transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-solar font-medium">
                    {item.subtitle}
                  </p>

                  {/* Comprehensive Descriptive Paragraph */}
                  <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Key Highlights / Deliverables */}
                  <div className="mt-6 pt-6 border-t border-black/8 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-medium">
                      Key Highlights &amp; Scope:
                    </span>
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-solar shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-8 pt-6 border-t border-black/8 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-medium">
                    {item.category}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-black group-hover:text-solar transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Capabilities & Engineering Stack Matrix ── */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
                Tech Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Under the hood of every build.
              </h2>
            </div>
            <p className="text-zinc-600 text-sm font-light max-w-md leading-relaxed">
              We never outsource core engineering or use fragile, unmaintainable templates. Every deliverable runs on verified production-tested architecture.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.domain}
                  className="p-6 rounded-2xl bg-white border border-black/10 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-black/10 flex items-center justify-center text-solar mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-black tracking-tight">{cap.domain}</h3>
                    <ul className="mt-4 space-y-2">
                      {cap.stack.map((item) => (
                        <li key={item} className="text-xs text-zinc-600 font-light flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Educational Guides & Strategic Playbooks ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Industry Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Strategic Playbooks for Enterprise Leaders
          </h2>
          <p className="mt-3 text-zinc-600 text-sm font-light leading-relaxed">
            In-depth guides authored by our engineering, SEO, and visual production directors to guide executive decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                  <span className="text-solar uppercase tracking-wider font-medium">{g.cat}</span>
                  <span>{g.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-zinc-800 transition-colors leading-snug">
                  {g.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-1.5 text-xs font-semibold text-black group-hover:text-solar transition-colors">
                <span>{g.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6-Step Delivery Framework ── */}
      <section className="py-16 sm:py-24 bg-zinc-50 border-y border-black/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block mb-2">
              Execution Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
              Six steps. Zero surprises.
            </h2>
            <p className="mt-4 text-zinc-600 text-sm font-light leading-relaxed">
              The same disciplined delivery lifecycle runs across every client engagement, ensuring full code ownership and transparent milestones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step) => (
              <div
                key={step.n}
                className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/20 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-solar">{step.n}</span>
                  <span className="w-2 h-2 rounded-full bg-black/20" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black tracking-tight">{step.t}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Answers to Common Queries
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-black leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-solar' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-600 font-light leading-relaxed border-t border-black/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden border-t border-black/10 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,116,44,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Ready to upgrade your enterprise capabilities?
          </h2>
          <p className="mt-5 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            Schedule a direct technical consultation with our engineering and growth directors in Sector 63, Noida. We will review your current architecture and provide an actionable strategy roadmap.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="site-button px-7 py-3 rounded-full !bg-black !text-white text-sm font-semibold hover:!bg-zinc-800 transition-colors flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              style={{ color: '#FFFFFF', backgroundColor: '#000000' }}
            >
              <span style={{ color: '#FFFFFF' }}>Start a Project</span>
              <ArrowRight className="w-4 h-4 !text-white" style={{ color: '#FFFFFF', stroke: '#FFFFFF' }} />
            </Link>
            <Link
              to="/work"
              className="px-7 py-3 rounded-full bg-zinc-100 border border-black/10 text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Inspect Case Studies
            </Link>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
