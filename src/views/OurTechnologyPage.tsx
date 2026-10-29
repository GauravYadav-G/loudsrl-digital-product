'use client';

import { useState } from 'react';
import Link from '@/components/Link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Database,
  Share2,
  PhoneCall,
  Users2,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Cloud,
  Layers,
  Code2,
  Lock,
  BarChart3,
  Search,
  Mail,
  Zap,
  Globe,
  TrendingUp,
  FileSearch,
  Target,
  ChevronDown,
  Terminal,
} from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { COMPANY } from '@/lib/data';

type TechCategory = 'All' | 'Data & Analytics' | 'Revenue & CRM' | 'Attribution & Automation' | 'Intelligence & Due Diligence';

export default function OurTechnologyPage() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories: TechCategory[] = [
    'All',
    'Data & Analytics',
    'Revenue & CRM',
    'Attribution & Automation',
    'Intelligence & Due Diligence',
  ];

  const stats = [
    { value: '99.99%', label: 'Platform Availability SLA' },
    { value: '2.5M+', label: 'Daily Telemetry & Attribution Events' },
    { value: '<100ms', label: 'Average Query Execution Latency' },
    { value: '100%', label: 'In-House Noida Engineering Pods' },
  ];

  const platforms = [
    // ─────────────────────────────────────────────────────────────
    // DATA & ANALYTICS
    // ─────────────────────────────────────────────────────────────
    {
      id: 'customer-data-platform',
      category: 'Data & Analytics',
      tag: 'Unified CDP',
      name: 'Customer Data Platform (CDP) & Identity Resolution',
      subtitle: 'First-party cookie resolution, 360-degree buyer profiles, and real-time omnichannel sync',
      desc: 'At ARKA Technovation, we help enterprises make the most of their first-party data. Our AI-powered Customer Data Platform (CDP) integrates more than ten specialized telemetry tools that work in unison to normalize customer interactions across web, email, CRM, and offline channels. In the post-pandemic digital economy and amid third-party cookie deprecation, our persistent CDP database establishes a true single view of your buyer.',
      capabilities: [
        'Collects, cleanses, and unifies fragmented customer interactions from web, apps, and POS into 360° buyer profiles',
        'First-party cookie identity resolution and cross-device visitor tracking without third-party reliance',
        'Real-time behavioral segmentation triggering personalized on-site content and marketing automation journeys',
        'Firmographic B2B enrichment mapping visitor IP addresses to company name, revenue, and location',
      ],
      deliverables: ['CDP schema architecture', 'First-party tracking script setup', 'Cross-channel identity graph', 'Live audience segment sync'],
    },
    {
      id: 'data-warehouse-etl',
      category: 'Data & Analytics',
      tag: 'Data Engineering',
      name: 'Enterprise Data Warehouse & ETL Pipelines',
      subtitle: 'The digital brain of your organization: Single source of truth with automated data pipelines',
      desc: 'Digital enterprise stacks are bursting at the seams with disjointed data. Having a single source of truth for your digital assets is paramount. We engineer centralized cloud data warehouses (BigQuery, Snowflake, PostgreSQL) paired with automated ETL (Extract, Transform, Load) pipelines that pull data from your CRM, email platforms, ERP, and web analytics, execute deep SQL transformations, and make clean business intelligence accessible across your leadership team.',
      capabilities: [
        'Automated ETL pipelines connecting CRM, billing ledgers, web telemetry, and advertising networks',
        'Custom SQL analytics, automated data cleansing, deduplication, and transformation routines',
        'Deep data lake storage designed for complex cohort analysis and predictive customer lifetime value (LTV)',
        'Looker Studio, PowerBI, and custom executive dashboards delivering automated daily performance digests',
      ],
      deliverables: ['Cloud data warehouse provisioning', 'Custom ETL pipeline scripts', 'Data normalization models', 'Executive BI dashboard suite'],
    },
    {
      id: 'seo-reporting-forecasting',
      category: 'Data & Analytics',
      tag: 'Custom Reporting',
      name: 'Advanced SEO Reporting & Attribution Forecasting',
      subtitle: 'Monthly custom telemetry, multi-channel revenue breakdown, and pipeline projections',
      desc: 'Digital marketing is only as strong as its measurement. We deliver advanced, custom telemetry reports that cover everything from organic search traffic and PPC cost-per-lead to phone call attribution and e-commerce transactions. We build custom GA4 events, goals, and Looker dashboards that track exactly which marketing channels and search queries contribute to bottom-line enterprise revenue.',
      capabilities: [
        'Granular traffic and revenue reporting broken down by organic search, paid search, social, and direct channels',
        'Custom GA4 event schemas, conversion goals, and cross-domain tracking implementations',
        'Cost-per-acquisition (CPA) and customer lifetime value (LTV) attribution models',
        'Algorithmic pipeline forecasting predicting next-quarter organic traffic and lead volumes based on historical run rates',
      ],
      deliverables: ['Live Looker Studio dashboard', 'Monthly executive PDF summaries', 'Attribution weight model', 'Quarterly growth forecast deck'],
    },

    // ─────────────────────────────────────────────────────────────
    // REVENUE & CRM
    // ─────────────────────────────────────────────────────────────
    {
      id: 'marketing-cloud-revenue',
      category: 'Revenue & CRM',
      tag: 'Revenue Engine',
      name: 'Marketing Cloud Revenue Platform',
      subtitle: 'Automating, streamlining, and monitoring marketing functions across multi-channel suites',
      desc: 'A Marketing Cloud platform unifies enterprise marketing suites (such as Salesforce Marketing Cloud, Adobe Experience Cloud, Oracle CX, and SAP Marketing Cloud) across channels. While ordinary CRM software is typically focused on relationship records and sales contacts, a Marketing Cloud automates, streamlines, and monitors cross-channel marketing operations. We architect and implement unified marketing clouds integrated with VoIP telephony like RingCentral for end-to-end customer lifecycle management.',
      capabilities: [
        'Cross-channel journey builder coordinating email, SMS, push notifications, and paid retargeting',
        'RingCentral and Twilio VoIP telephony integration for automated call routing, recording, and CRM logging',
        'Clear architectural separation between marketing automation engines and sales CRM pipelines',
        'Real-time revenue attribution connecting initial marketing touches to signed enterprise contracts',
      ],
      deliverables: ['Marketing cloud architecture plan', 'VoIP telephony bridge', 'Cross-channel journey workflows', 'Revenue telemetry dashboard'],
    },
    {
      id: 'lead-management-solutions',
      category: 'Revenue & CRM',
      tag: 'Lead Velocity',
      name: 'Lead Management & Automated Scheduling (CRMROI)',
      subtitle: 'Purpose-built for growing businesses: Instant lead routing, scoring, and automated calendar sync',
      desc: 'Speed to lead determines conversion rates. Our proprietary CRMROI lead management software captures leads across website forms, Google Ads, Meta campaigns, and inbound calls, validates contact data, applies algorithmic scoring rules, and automatically routes prospects to the appropriate regional sales executive. Integrated calendar scheduling eliminates back-and-forth emails, locking in meetings while buyer intent is at its peak.',
      capabilities: [
        'Sub-60-second lead ingestion and automated routing based on geography, deal size, or product category',
        'Dynamic lead scoring combining firmographic data with on-site engagement telemetry',
        'Automated calendar scheduling embedded directly in thank-you pages and email follow-ups',
        'Real-time WhatsApp and SMS sales rep alerts with direct one-click dialer functionality',
      ],
      deliverables: ['CRMROI software deployment', 'Round-robin routing rules', 'Calendar booking integration', 'Sales rep mobile notification setup'],
    },
    {
      id: 'crm-retargeting-tech',
      category: 'Revenue & CRM',
      tag: 'CRM Remarketing',
      name: 'CRM Retargeting & First-Party Remarketing',
      subtitle: 'Syncing offline CRM data, purchase histories, and deal stages with paid advertising networks',
      desc: 'CRM retargeting is fundamentally different from standard web pixel retargeting because it allows you to leverage all the rich historical data stored inside your CRM. We sync offline customer purchase records, quote values, and lifecycle stages with Google Ads Customer Match, Meta Custom Audiences, and LinkedIn Matched Audiences, serving hyper-relevant ads that re-activate past buyers and accelerate stalled pipeline deals.',
      capabilities: [
        'Secure, hashed synchronization of first-party CRM contact records with Google, Meta, and LinkedIn',
        'Audience segmentation by customer lifetime spend, product ownership, and days since last purchase',
        'Exclusion lists preventing ad spend waste on existing satisfied customers or active support tickets',
        'Custom lookalike modeling finding high-value prospects matching your top 10% highest-margin clients',
      ],
      deliverables: ['Hashed API sync pipeline', 'Custom audience segmentation logic', 'Suppression rule matrix', 'Retargeting ROAS reports'],
    },
    {
      id: 'salesforce-dynamics-automation',
      category: 'Revenue & CRM',
      tag: 'Enterprise CRM Sync',
      name: 'Salesforce & Microsoft Dynamics 365 Automation',
      subtitle: 'Eliminating manual admin tasks so sales professionals spend their time closing deals',
      desc: 'Did you know sales professionals today spend only 34 percent of their time actually selling? The remainder is consumed by manual data entry, meeting notes, and status updates. We configure and customize Salesforce and Microsoft Dynamics 365, automating administrative workflows, syncing omnichannel marketing touchpoints, and providing your sales and customer service teams with a shared, real-time view of every customer.',
      capabilities: [
        'Salesforce Sales Cloud, Service Cloud, and Marketing Cloud custom workflow and trigger automation',
        'Microsoft Dynamics 365 Customer Insights and Sales omnichannel journey engineering',
        'Automated stage progression, task generation, quote calculation, and approval routing',
        'Elimination of manual data entry, giving sales reps hours back each week to engage high-value prospects',
      ],
      deliverables: ['CRM workflow audit & roadmap', 'Custom Apex/Power Automate triggers', 'Pipeline stage rules', 'User training & documentation'],
    },

    // ─────────────────────────────────────────────────────────────
    // ATTRIBUTION & AUTOMATION
    // ─────────────────────────────────────────────────────────────
    {
      id: 'call-tracking-telephony',
      category: 'Attribution & Automation',
      tag: 'Dynamic Number Insertion',
      name: 'Web Channel Call Tracking & Telephony Intelligence',
      subtitle: 'Dynamic Number Insertion (DNI) mapping phone leads directly to keywords and sessions',
      desc: 'Website call tracking is a cloud-based SaaS solution operating via Dynamic Number Insertion (DNI). A lightweight JavaScript snippet replaces the static phone numbers on your site with a unique trackable number for each website visitor. When the prospect dials, the system records the call, attributes the exact traffic source, ad group, and search keyword, and forwards the call seamlessly via VoIP to your sales lines.',
      capabilities: [
        'Session-level Dynamic Number Insertion across organic search, Google Ads, Meta, and direct visits',
        'Automatic VoIP call forwarding directly to sales team desk phones or mobile devices',
        'Call recording, automated AI transcription, and keyword sentiment analysis',
        'Direct offline conversion import into Google Ads, unlocking automated Smart Bidding on high-value calls',
      ],
      deliverables: ['DNI script deployment', 'VoIP forwarding pool configuration', 'Call recording & transcription setup', 'Google Ads offline conversion import'],
    },
    {
      id: 'channel-partner-pipeline',
      category: 'Attribution & Automation',
      tag: 'B2B Distribution',
      name: 'Channel Partner Sales Pipeline Management',
      subtitle: 'Multi-tier distributor portals, territorial lead governance, and co-op marketing tracking',
      desc: 'Channel sales distribute products through multiple tiers—direct sales teams, authorized distributors, regional dealers, and third-party retailers. We engineer dedicated channel partner marketing portals that manage lead routing by territory, provide co-op marketing collateral, monitor regional sales velocity, and provide national leadership with consolidated visibility over distributor pipelines.',
      capabilities: [
        'Dedicated dealer portal with deal registration and protected territorial distribution rules',
        'Digital asset management distributing co-op marketing materials, product spec sheets, and video assets',
        'Consolidated national reporting tracking distributor sales performance against regional quotas',
        'Automated conflict prevention ensuring direct sales reps and distributors do not compete on identical accounts',
      ],
      deliverables: ['Channel partner portal build', 'Territory routing configuration', 'Asset library repository', 'Consolidated leadership dashboard'],
    },
    {
      id: 'channel-attribution-forecasting',
      category: 'Attribution & Automation',
      tag: 'Multi-Touch Attribution',
      name: 'Channel Attribution Modeling & Pipeline Forecasting',
      subtitle: 'Making sense of billions of data points to predict sales and optimize marketing budgets',
      desc: 'Modern enterprise buyers interact with dozens of marketing touchpoints before signing a contract. First-click or last-click models fail to capture the full buyer journey. Our multi-touch channel attribution models process billions of data points across paid search, organic content, video, social, and email, calculating the true incremental revenue contribution of each channel and forecasting future sales with statistical confidence.',
      capabilities: [
        'Multi-touch attribution models (Data-Driven, Position-Based, and Time-Decay) calibrated to your sales cycle',
        'Attribution data integration connecting digital touchpoints to final closed-won revenue in your ERP',
        'Predictive sales forecasting algorithms helping leadership allocate next-quarter marketing capital with confidence',
        'Identification of top-performing mid-funnel channels that traditional analytics undervalue',
      ],
      deliverables: ['Attribution modeling framework', 'Data-driven weight calibration', 'Forecast projection algorithms', 'Executive budget allocation guide'],
    },
    {
      id: 'lead-nurture-email-testing',
      category: 'Attribution & Automation',
      tag: 'Lifecycle Automation',
      name: 'Lead Nurture Lifecycle Email Marketing & Design',
      subtitle: 'Intelligent event-driven emails triggered by page visits and custom template engineering',
      desc: 'Enterprise purchasing decisions often take weeks or months. Lead nurturing ensures your brand remains top of mind throughout that evaluation window. We design and execute automated lifecycle email workflows triggered by specific user behaviors—such as visiting a pricing page or downloading a whitepaper. Combined with modern, tested email templates, our campaigns deliver high open rates and consistent pipeline acceleration.',
      highlights: [
        'Behavioral email triggers deploying personalized messages based on specific URLs viewed and documents downloaded',
        'Custom responsive email newsletter templates rigorously tested across 40+ email clients and dark-mode settings',
        'A/B testing of subject lines, sender names, content length, and CTA buttons to maximize click-to-open rates (CTOR)',
        'Automated list hygiene routines removing unengaged subscribers and maintaining 99%+ deliverability rates',
      ],
      deliverables: ['Drip workflow sequence blueprints', 'Bespoke HTML/CSS email templates', 'A/B testing roadmap', 'Deliverability & inbox placement audit'],
    },

    // ─────────────────────────────────────────────────────────────
    // INTELLIGENCE & DUE DILIGENCE
    // ─────────────────────────────────────────────────────────────
    {
      id: 'competitor-analysis-engine',
      category: 'Intelligence & Due Diligence',
      tag: 'Competitive Intelligence',
      name: 'Digital Marketing Competitor Analysis Engine',
      subtitle: 'Reverse-engineering competitor campaigns, keyword bidding, ad spend, and positioning gaps',
      desc: 'If you want to outperform your competitors, you need to understand their strategy. Our competitor analysis services reverse-engineer your industry rivals’ digital presence—uncovering their highest-performing organic search keywords, estimated paid search spend, active social ad creatives, backlink acquisition velocity, and website conversion funnels. We identify their vulnerabilities and build strategies to capture their market share.',
      capabilities: [
        'Comprehensive keyword gap analysis identifying high-converting commercial queries competitors rank for',
        'Reverse-engineering of competitors’ Google Ads copy, landing page designs, and bidding strategies',
        'Backlink profile inspection identifying referring domains, digital PR opportunities, and link velocity',
        'Quarterly competitive benchmarking scorecards tracking your brand’s digital share of voice (SOV)',
      ],
      deliverables: ['Competitor intelligence dossier', 'Keyword conquesting list', 'Ad copy reverse-engineering review', 'Market share gap roadmap'],
    },
    {
      id: 'digital-due-diligence',
      category: 'Intelligence & Due Diligence',
      tag: 'M&A Asset Audit',
      name: 'Digital Due Diligence & M&A Technology Audits',
      subtitle: 'De-risking private equity and enterprise acquisitions with comprehensive digital asset evaluations',
      desc: 'Your next enterprise acquisition does not have to be a gamble. With our digital due diligence services, private equity firms and acquiring corporations receive complete transparency into a target company’s digital status. We evaluate website codebase health, organic search sustainability, paid media unit economics, customer data privacy compliance, digital vendor contracts, and post-acquisition growth potential.',
      capabilities: [
        'Technical website architecture and codebase health audit (security vulnerabilities, technical debt, speed)',
        'Organic search audit evaluating risk of Google algorithmic penalties and unnatural backlink profiles',
        'Paid advertising unit economics review (Customer Acquisition Cost CAC vs Customer Lifetime Value LTV)',
        'Data privacy, GDPR/DPDP compliance review, vendor software commitments, and post-acquisition tech roadmap',
      ],
      deliverables: ['Comprehensive due diligence report', 'Red flag risk summary', 'Post-acquisition 100-day roadmap', 'Asset valuation guidance'],
    },
    {
      id: 'account-based-marketing',
      category: 'Intelligence & Due Diligence',
      tag: 'B2B Enterprise ABM',
      name: 'Account-Based Marketing (ABM) Platforms',
      subtitle: 'Machine learning targeting high-value enterprise accounts with a 91% client retention rate',
      desc: 'For B2B enterprises selling high-ticket solutions, broad consumer marketing is ineffective. Our account-based marketing (ABM) platforms combine artificial intelligence, machine learning, and IP-level targeting to engage decision-makers at specifically named target accounts. We coordinate personalized LinkedIn ads, direct executive mailers, tailored website landing pages, and sales outreach, maintaining a client retention rate of 91 percent.',
      capabilities: [
        'Ideal Customer Profile (ICP) tiering and target account list (TAL) modeling using intent data',
        'IP-level and LinkedIn account-matched advertising delivering custom messaging to buying committees',
        'Dynamic website personalization showing custom landing page hero banners for visiting target accounts',
        'Sales enablement alerts notifying account executives when key stakeholders engage with marketing assets',
      ],
      deliverables: ['Target account matrix', 'Multi-channel ABM campaign builds', 'Personalized landing pages', 'Account engagement scorecards'],
    },
  ];

  const filteredPlatforms =
    activeCategory === 'All'
      ? platforms
      : platforms.filter((p) => p.category === activeCategory);

  const digitalTools = [
    { name: 'Google Analytics 4', cat: 'Analytics', desc: 'Real-time telemetry, custom event schemas, and machine learning user modeling' },
    { name: 'Ahrefs Enterprise', cat: 'SEO Intelligence', desc: 'Backlink indexing, keyword gap analysis, and competitive organic search tracking' },
    { name: 'Google PageSpeed Insights', cat: 'Performance', desc: 'Core Web Vitals monitoring, sub-second LCP tuning, and edge diagnostics' },
    { name: 'BigQuery & SQL ETL', cat: 'Data Warehouse', desc: 'Petabyte-scale data lakes unifying CRM records, advertising spend, and billing' },
    { name: 'Google Trends & SEMrush', cat: 'Market Demand', desc: 'Seasonal query analysis, emerging search intent, and paid ad intelligence' },
    { name: 'Salesforce & Dynamics 365', cat: 'Enterprise CRM', desc: 'Omnichannel customer journey orchestration and automated pipeline scoring' },
    { name: 'Twilio & RingCentral VoIP', cat: 'Telephony', desc: 'Dynamic Number Insertion, automated call routing, and phone lead attribution' },
  ];

  const guides = [
    {
      title: 'What is AI Marketing? Machine Learning, Algorithmic Bidding & Dynamic Personalization',
      cat: 'Artificial Intelligence',
      readTime: '6 min read',
      desc: 'Artificial intelligence (AI) marketing leverages machine learning models, predictive algorithms, and real-time data to produce actionable customer insights. How AI optimizes ad spend, personalizes the buyer journey, and powers predictive deal scoring.',
    },
    {
      title: 'The Modern Customer Data Platform (CDP): Navigating Third-Party Cookie Deprecation',
      cat: 'Data Architecture',
      readTime: '5 min read',
      desc: 'Why the disruption of browser privacy shifts and third-party cookie deprecation makes a first-party CDP essential. How unifying web, email, CRM, and offline interactions delivers a true 360-degree buyer profile.',
    },
    {
      title: 'Data-Driven Marketing & Modern ERP: Unifying Core Operations with Digital Acquisition',
      cat: 'Enterprise Systems',
      readTime: '7 min read',
      desc: 'Moving beyond static annual marketing plans. How connecting ERP software (supply chain, inventory, finance) with digital acquisition pipelines creates an agile, demand-driven enterprise.',
    },
  ];

  const faqs = [
    {
      q: 'What is the key difference between a Customer Data Platform (CDP) and a CRM?',
      a: 'A CRM is primarily designed to manage direct interpersonal relationships—storing contact information, sales rep notes, pipeline stages, and communication history. A Customer Data Platform (CDP) is a marketer-managed data engine that collects, cleanses, and unifies all digital telemetry from website sessions, app clicks, POS purchases, email opens, and advertising interactions into persistent, 360-degree customer profiles that can be shared across other marketing systems in real time.',
    },
    {
      q: 'How does Web Channel Call Tracking work without confusing existing customers?',
      a: 'We use Dynamic Number Insertion (DNI). A small JavaScript snippet on your website swaps the visible phone number only for new incoming web visitors, assigning each visitor a temporary trackable number tied to their specific browsing session. When they dial, our VoIP system instantly identifies the exact Google search keyword or ad campaign that brought them, while seamlessly forwarding the call to your primary sales office number with zero delay.',
    },
    {
      q: 'Why should private equity firms and acquiring corporations conduct Digital Due Diligence?',
      a: 'Digital due diligence eliminates costly surprises prior to an M&A transaction. We audit whether a target company’s organic search traffic is built on sustainable white-hat SEO or risky link schemes vulnerable to Google algorithm penalties, evaluate proprietary codebase maintainability, verify Customer Acquisition Cost (CAC) vs Customer Lifetime Value (LTV), and review GDPR/DPDP data compliance risks.',
    },
    {
      q: 'Can your technology stack integrate with our proprietary legacy on-premise systems?',
      a: 'Yes. Our engineering team builds secure REST and GraphQL middleware APIs, database ETL pipelines, and webhook handlers that securely bridge cloud-based marketing tools and modern web applications with legacy on-premise databases, ERP systems (SAP, Tally, AS400), and custom SQL repositories.',
    },
    {
      q: 'How does CRM retargeting protect customer privacy while delivering high conversion rates?',
      a: 'CRM retargeting uses irreversible cryptographic hashing (SHA-256) to anonymize customer email addresses and phone numbers before matching them against advertising networks like Google Ads and Meta. No raw customer data is exposed, yet your business can serve highly targeted ads exclusively to past buyers or active pipeline prospects.',
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
            <span className="text-solar">Our Technology</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-solar" />
            <span>Enterprise Architecture, Data Science &amp; Revenue Platforms</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.08] max-w-4xl mx-auto">
            Our Technology Stack — Accelerating Digital Transformation.
          </h1>

          <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
            Welcome to {COMPANY.name}, an enterprise leader in software engineering, digital marketing, and visual media. We utilize our world-class engineering knowledge to help businesses reach their full digital potential—deploying proprietary revenue platforms, AI decision systems, customer data platforms (CDP), and cloud ETL pipelines under one roof.
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-black/10 pt-8 max-w-4xl mx-auto">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-black/5 text-left">
                <p className="text-2xl sm:text-4xl font-bold text-black tracking-tight">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1 font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((c) => {
              const count = c === 'All' ? platforms.length : platforms.filter((p) => p.category === c).length;
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
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

      {/* ── Comprehensive Technology Platforms Grid ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPlatforms.map((item, idx) => {
              const aliases: Record<string, string> = {
                'marketing-cloud-revenue': 'revenue-platform',
                'customer-data-platform': 'cdp',
                'crm-retargeting-tech': 'crm-retargeting',
                'call-tracking-telephony': 'call-tracking',
                'channel-partner-pipeline': 'partner-pipeline',
                'salesforce-dynamics-automation': 'marketing-automation',
              };
              const aliasId = aliases[item.id];

              return (
                <motion.div
                  key={item.id}
                  id={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="scroll-mt-28 group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-black/10 hover:border-black/25 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] shadow-sm"
                >
                  {aliasId && (
                    <span id={aliasId} className="absolute -top-28 left-0" aria-hidden="true" />
                  )}
                {/* Top ambient hover glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-radial-gradient from-black/[0.03] to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-solar/10 transition-colors duration-500" />

                <div>
                  {/* Top Bar: Tag & Category */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-600 mb-5">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-solar" />
                      <span className="uppercase tracking-widest font-semibold">{item.tag}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-black/8 text-zinc-700 font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-zinc-900 transition-colors">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wider text-solar font-medium">
                    {item.subtitle}
                  </p>

                  {/* Descriptive Paragraph */}
                  <p className="mt-4 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-6 pt-6 border-t border-black/8 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-medium">
                      Core Architectural Capabilities:
                    </span>
                    {(item.capabilities || []).map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-solar shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables / Scope */}
                  {item.deliverables && (
                    <div className="mt-6 pt-5 border-t border-black/8">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-medium">
                        Standard Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.deliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2.5 py-1 rounded-lg bg-zinc-100 text-xs text-zinc-700 font-normal"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-8 pt-6 border-t border-black/8 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 font-medium">
                    Engineered by ARKA Tech Pods · Sector 63, Noida
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-black group-hover:text-solar transition-colors"
                  >
                    <span>Request Technical Brief</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
      </section>

      {/* ── 7 Industry-Leading Tools Matrix ── */}
      <section className="py-20 sm:py-28 bg-zinc-950 text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              The Technology Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Tools, Frameworks &amp; Telemetry Stack
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              We leverage modern battle-tested technologies engineered for performance, modularity, and enterprise reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalTools.map((tool) => (
              <div
                key={tool.name}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-solar uppercase tracking-wider">{tool.cat}</span>
                    <Terminal className="w-4 h-4 text-zinc-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{tool.name}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security, DevOps & Handover Strip ── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-black/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-solar shrink-0 shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black tracking-tight">Security &amp; Data Privacy</h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  Role-based access control (RBAC), end-to-end data encryption, and GDPR/DPDP-ready database architectures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-solar shrink-0 shadow-sm">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black tracking-tight">Dedicated DevOps in Noida</h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  CI/CD automation pipelines, automated regression suites, containerized Docker microservices, and 24/7 telemetry monitoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-solar shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black tracking-tight">Full Source Handover</h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  100% intellectual property ownership transferred to your enterprise upon project handover. No proprietary lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Educational Guides & Architecture Playbooks ── */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Technical Playbooks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Strategic Guides for Enterprise CTOs &amp; CMOs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group"
            >
              <div>
                <span className="text-xs font-mono text-solar uppercase tracking-wider font-medium block mb-3">
                  {g.cat} · {g.readTime}
                </span>
                <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-zinc-800 transition-colors leading-snug">
                  {g.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {g.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/8 flex items-center gap-1.5 text-xs font-semibold text-black group-hover:text-solar transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Interactive FAQ Accordion ── */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 border-t border-black/10">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Answers on Enterprise Architecture &amp; Data
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
      <section className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-zinc-900 text-white border border-black shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-solar font-semibold">
              Architecture Consultation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Build Your Next Enterprise Platform with ARKA
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Connect directly with our senior software architects at {COMPANY.hq} to review your technical requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-solar text-white hover:bg-orange-600 font-semibold text-sm transition-all shadow-md"
              >
                <span>Speak with an Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-zinc-800 text-white hover:bg-zinc-700 font-semibold text-sm transition-all"
              >
                <span>Call {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PortfoliteFooter />
    </div>
  );
}
