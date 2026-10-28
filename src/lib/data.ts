/* ─────────────────────────────────────────────────────────────
   ARKA TECHNOVATION
   Enterprise Digital Products, Engineering & Growth
   Founded and led by Mr. Kranti Parashar
   ───────────────────────────────────────────────────────────── */

export const COMPANY = {
  name: 'ARKA Technovation',
  short: 'ARKA.',
  logo: '/images/logo/arka-logo-black.png',
  logoWhite: '/images/logo/arka-logo-white.png',
  tagline: 'Digital Product Company.',
  legacy: 'ARKA Enterprise Heritage',
  founded: 2016,
  years: 17,
  email: 'info@arkatechnovation.com',
  careers: 'careers@arkatechnovation.com',
  phones: ['+91 92208 26934', '+91 93109 07227', '0120-4200970'],
};

export const OFFICES = [
  { label: 'Corporate Office', city: 'Noida', lines: ['A-82, Sector 63', 'Noida, Uttar Pradesh 201301'], primary: true },
  { label: 'Regional Office', city: 'Kolkata', lines: ['7/1, Marhatta Ditch Lane', 'Kolkata, West Bengal'] },
  { label: 'Regional Office', city: 'Mumbai', lines: ['304, Peninsula Spenta-1', 'Senapati Bapat Marg, Lower Parel'] },
];

export const STATS = [
  { v: 12, s: '+', l: 'Years experience', d: 'Modern advertisement techniques' },
  { v: 1500, s: '+', l: 'Clients served', d: 'India and abroad' },
  { v: 850, s: '+', l: 'Projects executed', d: 'Web · Apps · Films · Campaigns' },
  { v: 600, s: '+', l: 'Manufacturers', d: 'Our deepest specialisation' },
];

/* ── NAVBAR NAVIGATION DATA ── */
export type NavChild = { label: string; to: string; note?: string };
export type NavGroup = { label: string; to: string; children?: NavChild[]; badge?: string };

export const NAV: NavGroup[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services', to: '/services', badge: '10', children: [
      { label: 'SEO & Lead Generation', to: '/services/seo-lead-generation', note: 'Organic search · Keywords · Local SEO' },
      { label: 'Digital Marketing', to: '/services/digital-marketing', note: 'Strategy · Social · Email & WhatsApp' },
      { label: 'Digital Advertising', to: '/services/digital-advertising', note: 'PPC · Programmatic · Geofencing' },
      { label: 'Development', to: '/services/development', note: 'Web · Shopify · CMS · Infrastructure' },
      { label: 'CRM Software', to: '/services/crm-software', note: 'Custom CRM · ERP · SaaS' },
      { label: 'Content Marketing', to: '/services/content-marketing', note: 'Editorial · Motion · Web video' },
      { label: 'Film Making', to: '/services/film-making', note: 'Corporate films · Ad films · Shoots' },
      { label: 'E-Commerce', to: '/services/e-commerce', note: 'Stores · Marketplace · SEO + PPC' },
      { label: 'Analytics & Attribution', to: '/services/analytics-attribution', note: 'Forecasting · Call tracking · Due diligence' },
      { label: 'UX & Interactive', to: '/services/ux-interactive', note: 'Research · UI/UX · Design systems' },
    ],
  },
  { label: 'Who We Are', to: '/who-we-are', children: [
    { label: 'Our Story', to: '/who-we-are#story' },
    { label: 'Leadership', to: '/who-we-are#leadership' },
    { label: 'Community Impact', to: '/who-we-are#impact' },
  ] },
  { label: 'Our Work', to: '/work' },
  { label: 'Careers', to: '/careers' },
  { label: 'Insights', to: '/insights', children: [
    { label: 'Blog', to: '/insights#blog' },
    { label: 'FAQ', to: '/insights#faq' },
  ] },
  { label: 'Contact', to: '/contact' },
];

/* ── SERVICES — full taxonomy with sub-services from the source site ── */
export type Sub = { name: string; desc: string };
export type Service = {
  slug: string; title: string; kicker: string; cat: 'Marketing' | 'Technology' | 'Creative';
  short: string; desc: string;
  subs: Sub[]; process: [string, string][];
  stat: string; statLabel: string; deliverables: string[];
  img: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'seo-lead-generation', title: 'SEO & Lead Generation', kicker: 'Organic Search', cat: 'Marketing',
    short: 'Rank on page one, and stay there.',
    desc: 'Search engine optimisation services that establish a genuine online presence and attract qualified prospective customers. We handle keyword research, on-page optimisation, technical health and high-quality link building — plus content and structural SEO so the site stays search-engine friendly as it grows.',
    stat: '+150%', statLabel: 'Organic traffic in 6 months',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Keyword Research', desc: 'Identifying the most fitting keywords to reach your target audience and buying intent.' },
      { name: 'On-Page Optimisation', desc: 'Content, structure, metadata and technical aspects optimised for users and crawlers alike.' },
      { name: 'Link Building', desc: 'High-quality backlinks that build domain authority that lasts beyond an algorithm update.' },
      { name: 'Local SEO', desc: 'Optimising for local search results and the customers in your immediate physical vicinity.' },
      { name: 'Site Optimisation', desc: 'Design, layout, speed and navigation tuned to be more appealing to users and search engines.' },
      { name: 'Page Rankings', desc: 'Monitoring relevance, authority and experience signals against complex ranking algorithms.' },
    ],
    process: [['Audit', 'Full technical, content and backlink audit with a scored action list.'], ['Foundation', 'Fix architecture, schema, speed and indexation before anything else.'], ['Publish', 'Specification and intent pages built to answer real queries.'], ['Compound', 'Links, refreshes and reporting that stack month on month.']],
    deliverables: ['Technical SEO audit', 'Keyword map & intent model', 'On-page optimisation', 'Content calendar', 'Link acquisition', 'Monthly rank & traffic report'],
  },
  {
    slug: 'digital-marketing', title: 'Digital Marketing', kicker: 'Full Funnel', cat: 'Marketing',
    short: 'Promotion across every digital channel.',
    desc: 'Digital marketing promotes products, services and brands through search engines, websites, social media, email and mobile apps. We build the strategy, run the campaigns, and report on the numbers that matter — with a highly skilled team dedicated to customised solutions.',
    stat: '+212%', statLabel: 'Average lead growth',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Digital Strategy', desc: 'Audience, channel and budget planning built around a measurable commercial goal.' },
      { name: 'E-Commerce Social Advertising', desc: 'Catalogue-led social campaigns that move product, not just impressions.' },
      { name: 'Google & Social Ads Campaigns', desc: 'Search, Performance Max and Meta campaigns managed to a target CPA.' },
      { name: 'Email / SMS / WhatsApp Marketing', desc: 'Permission-based, personalised messaging that retains and re-activates customers.' },
      { name: 'Content Marketing', desc: 'Valuable, relevant and consistent content that attracts and retains a defined audience.' },
      { name: 'Social Media Optimisation', desc: 'Profile, content and community systems across Instagram, LinkedIn, YouTube and X.' },
    ],
    process: [['Discover', 'Market, competitor and audience analysis.'], ['Plan', 'Channel mix, funnel model and targets.'], ['Execute', 'Campaign build, creative and launch.'], ['Optimise', 'Weekly iteration against CPA and ROAS.']],
    deliverables: ['Growth strategy document', 'Channel & budget plan', 'Campaign builds', 'Creative assets', 'Landing pages', 'Monthly performance report'],
  },
  {
    slug: 'digital-advertising', title: 'Digital Advertising', kicker: 'Paid Media', cat: 'Marketing',
    short: 'Paid media judged on pipeline, not impressions.',
    desc: 'Pay-per-click and programmatic advertising managed end to end — keyword strategy, ad copy, bidding, and relentless optimisation of spend against return. We also run geofencing and recruiting campaigns for niche audiences.',
    stat: '4.6×', statLabel: 'Average ROAS',
    img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'PPC Management', desc: 'Search and display campaigns with continuous bid and query refinement.' },
      { name: 'Enterprise PPC Management', desc: 'Large-account structures, shared budgets and multi-market governance.' },
      { name: 'Programmatic Advertising', desc: 'Audience-first buying across display, video and audio inventory.' },
      { name: 'Addressable Geofencing', desc: 'Reaching defined premises and events with precision location targeting.' },
      { name: 'Competitor Geofencing', desc: 'Conquesting campaigns served around competitor locations.' },
      { name: 'Employment Recruiting Marketing', desc: 'Candidate-generation campaigns for hard-to-fill roles.' },
    ],
    process: [['Research', 'Keyword, audience and competitor gap analysis.'], ['Build', 'Account structure, ad groups and tracking.'], ['Launch', 'Controlled rollout with clear guardrails.'], ['Scale', 'Reallocate to what returns, cut what does not.']],
    deliverables: ['Account audit & rebuild', 'Ad copy variants', 'Negative keyword library', 'Landing page tests', 'Conversion tracking', 'Spend & return dashboard'],
  },
  {
    slug: 'development', title: 'Development', kicker: 'Digital Experience', cat: 'Technology',
    short: 'Websites and web applications built to last.',
    desc: 'More than twelve years of experience in web design and development: responsive web design, e-commerce, Magento and Shopify builds, CMS development and website maintenance. Our team works across open-source PHP and MySQL as well as Microsoft ASP, .NET and SQL Server.',
    stat: '<1.8s', statLabel: 'Average load time',
    img: 'https://images.pexels.com/photos/7651919/pexels-photo-7651919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Responsive Web Design', desc: 'One codebase, every device — tested on real hardware, not just emulators.' },
      { name: 'E-Commerce Development', desc: 'Catalogue, cart, checkout, payments and order management that scale.' },
      { name: 'Shopify & Magento', desc: 'Store builds, theme customisation and app integration on both platforms.' },
      { name: 'CMS Development', desc: 'Editor-friendly content systems so marketing can publish without a developer.' },
      { name: 'Web Infrastructure', desc: 'Hosting, CDN, backups, monitoring and security hardening.' },
      { name: 'Voice Assistant Interfaces', desc: 'Voice-first front ends and integrations where hands-free matters.' },
    ],
    process: [['Scope', 'Requirements, sitemap and technical specification.'], ['Design', 'UI system and prototypes signed off before build.'], ['Build', 'Staged development with regular demo releases.'], ['Launch', 'QA, performance passes, go-live and support.']],
    deliverables: ['Technical specification', 'Responsive build', 'CMS & training', 'Performance optimisation', 'Security hardening', 'Maintenance retainer'],
  },
  {
    slug: 'crm-software', title: 'CRM Software', kicker: 'Custom Software', cat: 'Technology',
    short: 'A single hub for every customer relationship.',
    desc: 'CRM software is a powerhouse: a hub for customer information that monitors every exchange and surfaces useful insight. It stores contact details, communication history, purchases and preferences in one platform — then automates the repetitive work so your team can offer a genuinely personalised journey.',
    stat: '12h', statLabel: 'Saved per team, weekly',
    img: 'https://images.pexels.com/photos/1181305/pexels-photo-1181305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Custom CRM Development', desc: 'Built around how your business already works, not a generic template.' },
      { name: 'Sales Pipeline Management', desc: 'Stage-wise tracking, lead scoring and forecast visibility for leadership.' },
      { name: 'Marketing Automation', desc: 'Reminder emails, meeting scheduling and nurture journeys on autopilot.' },
      { name: 'ERP & Operations Modules', desc: 'Inventory, billing, approvals and reporting tied to the same data.' },
      { name: 'Integrations', desc: 'Tally, WhatsApp, payment gateways, and your existing tools.' },
      { name: 'Reporting & Analytics', desc: 'Dashboards for sales performance, customer behaviour and campaign success.' },
    ],
    process: [['Map', 'Process walkthrough with the people who do the work.'], ['Architect', 'Data model, roles and integration plan.'], ['Build', 'Milestone delivery with working software each sprint.'], ['Adopt', 'Training, migration and handover with source code.']],
    deliverables: ['Process documentation', 'CRM / ERP platform', 'Role-based dashboards', 'Integrations', 'Data migration', 'Training & source handover'],
  },
  {
    slug: 'content-marketing', title: 'Content Marketing', kicker: 'Editorial & Motion', cat: 'Creative',
    short: 'Content that earns attention and keeps it.',
    desc: 'A strategic approach to creating and distributing valuable, relevant and consistent content to attract and retain a clearly defined audience. From SEO copywriting to motion graphics and web video — one editorial voice across every format.',
    stat: '600+', statLabel: 'Content pieces shipped yearly',
    img: 'https://images.pexels.com/photos/4623358/pexels-photo-4623358.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Content Strategy', desc: 'Topics, formats and cadence mapped to search demand and sales stages.' },
      { name: 'SEO Copywriting', desc: 'Copy written for humans first, structured so search engines understand it.' },
      { name: 'Personalised Web Content', desc: 'Variant content by segment, industry or stage in the journey.' },
      { name: 'Motion Graphics', desc: 'Explainers, lower-thirds, kinetic type and product animations.' },
      { name: 'Web Video Services', desc: 'Scripted, shot and edited video built for the platform it lives on.' },
      { name: 'Voice Search Optimisation', desc: 'Conversational phrasing and structured answers for spoken queries.' },
    ],
    process: [['Research', 'Keyword, competitor and audience content gaps.'], ['Plan', 'Editorial calendar and format mix.'], ['Produce', 'Writing, design, motion and video in-house.'], ['Distribute', 'Publish, promote, measure, refresh.']],
    deliverables: ['Content audit', 'Editorial calendar', 'SEO copywriting', 'Motion graphics', 'Web video', 'Distribution plan'],
  },
  {
    slug: 'film-making', title: 'Film Making', kicker: 'Production House', cat: 'Creative',
    short: 'Corporate films, ad films and product shoots.',
    desc: 'An in-house production crew handling concept, scripting, direction, cinematography, editing, grading and sound. Corporate films, brand videos, product shoots and ad films — from script to screen, without outsourcing the part that matters.',
    stat: '2.1M', statLabel: 'Views on one B2B campaign',
    img: 'https://images.pexels.com/photos/6883811/pexels-photo-6883811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Corporate Films', desc: 'Company profiles, capability films and leadership messages.' },
      { name: 'Ad Films & TVCs', desc: 'Broadcast-ready commercials and performance-led video ads.' },
      { name: 'Product Shoots', desc: 'Studio and location product photography and cinematography.' },
      { name: 'Industrial & Factory Shoots', desc: 'Filmed around running lines, with the right light and safety discipline.' },
      { name: 'Social Reels & Shorts', desc: 'Vertical cuts engineered for retention on Instagram and YouTube.' },
      { name: 'Post Production', desc: 'Editing, colour grading, sound design and motion graphics.' },
    ],
    process: [['Concept', 'Idea, references and a written treatment.'], ['Pre-Production', 'Script, storyboard, schedule and permits.'], ['Shoot', 'Direction, cinematography and sound on location.'], ['Post', 'Edit, grade, sound design and delivery masters.']],
    deliverables: ['Concept & treatment', 'Script & storyboard', 'Shoot direction', 'Edit & colour grade', 'Sound design', 'Cut-downs for social'],
  },
  {
    slug: 'e-commerce', title: 'E-Commerce', kicker: 'Online Retail', cat: 'Technology',
    short: 'Stores built to convert and scale.',
    desc: 'Everything an online retailer needs: storefront design and build, catalogue and inventory management, payment and logistics integration — then the SEO and PPC to bring buyers in, and the analytics to prove what worked.',
    stat: '+60%', statLabel: 'Revenue in 6 months',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Storefront Design & Build', desc: 'Fast, mobile-first storefronts with a conversion-tested checkout.' },
      { name: 'E-Commerce SEO', desc: 'Category, product and faceted-navigation optimisation for organic demand.' },
      { name: 'E-Commerce SEO + PPC', desc: 'Paid and organic working from one keyword and margin model.' },
      { name: 'Marketplace Management', desc: 'Listings, content and advertising on Amazon, Flipkart and beyond.' },
      { name: 'Payment & Logistics', desc: 'Gateways, COD, shipping partners and returns workflows.' },
      { name: 'Retention & Lifecycle', desc: 'Abandoned cart, replenishment and win-back journeys.' },
    ],
    process: [['Audit', 'Catalogue, funnel and unit-economics review.'], ['Rebuild', 'Storefront, checkout and speed work.'], ['Acquire', 'SEO and paid media from one plan.'], ['Retain', 'Lifecycle journeys and repeat-purchase growth.']],
    deliverables: ['Store build or rebuild', 'Catalogue structuring', 'Checkout optimisation', 'E-com SEO programme', 'Paid shopping campaigns', 'Retention automation'],
  },
  {
    slug: 'analytics-attribution', title: 'Analytics & Attribution', kicker: 'Measurement', cat: 'Marketing',
    short: 'Know exactly which channel earned the sale.',
    desc: 'Reporting and forecasting that connects marketing activity to revenue. Channel attribution, call tracking, competitor analysis and digital due diligence — so budget decisions are made on evidence rather than opinion.',
    stat: '100%', statLabel: 'Reporting transparency',
    img: 'https://images.pexels.com/photos/4345109/pexels-photo-4345109.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'Channel Attribution Forecasting', desc: 'Model how each channel contributes, then forecast the next quarter.' },
      { name: 'SEO Reporting & Forecasting', desc: 'Rank, traffic and pipeline projections you can plan around.' },
      { name: 'Web Channel Call Tracking', desc: 'Connect offline calls to the campaigns and keywords that caused them.' },
      { name: 'Channel Partner Pipeline', desc: 'Shared pipeline visibility across distributors and partners.' },
      { name: 'Competitor Analysis', desc: 'Share of voice, keyword gaps and paid-activity monitoring.' },
      { name: 'Digital Due Diligence', desc: 'Independent assessment of digital assets before investment or acquisition.' },
    ],
    process: [['Instrument', 'Tracking plan, events and clean data collection.'], ['Model', 'Attribution logic agreed with finance.'], ['Report', 'One dashboard, one version of the truth.'], ['Advise', 'Quarterly recommendations backed by the numbers.']],
    deliverables: ['Tracking implementation', 'Attribution model', 'Live dashboard', 'Call tracking setup', 'Competitor monitor', 'Quarterly review deck'],
  },
  {
    slug: 'ux-interactive', title: 'UX & Interactive', kicker: 'Product Design', cat: 'Creative',
    short: 'Interfaces designed from evidence, not taste.',
    desc: 'User experience research, interaction design and interface systems. We develop web applications with a systematic approach — planning, designing, implementing and testing for a high-quality experience, with scalability and security considered throughout.',
    stat: '92%', statLabel: 'Task-success in testing',
    img: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    subs: [
      { name: 'UX Research', desc: 'Interviews, task analysis and usability testing with real users.' },
      { name: 'Information Architecture', desc: 'Navigation, taxonomy and content hierarchy that users can predict.' },
      { name: 'Interaction Design', desc: 'Flows, states and micro-interactions specified before build.' },
      { name: 'UI Design', desc: 'Visual language, typography, colour and component design.' },
      { name: 'Design Systems', desc: 'Reusable component libraries documented for engineering.' },
      { name: 'Prototyping & Testing', desc: 'Clickable prototypes tested before a line of production code.' },
    ],
    process: [['Research', 'Users, tasks and current pain points.'], ['Architect', 'Flows, wireframes and structure.'], ['Design', 'Interface and design system.'], ['Validate', 'Prototype testing, iterate, hand over.']],
    deliverables: ['Research findings', 'User flows & wireframes', 'UI design', 'Design system', 'Prototype', 'Developer handover'],
  },
];

/* ── WORK ── */
export const WORKS = [
  { name: 'Precision Engineering Co.', sector: 'Manufacturing', year: '2025', services: ['SEO & Lead Generation', 'Development', 'Film Making'], result: '+300%', resultLabel: 'Organic traffic in 9 months',
    img: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A forty-year-old exporter with world-class machinery and a website that ranked for nothing. Buyers in Germany and the UAE could not find them.',
    solution: 'Rebuilt the site around product-line intent, fixed technical foundations, published sixty specification pages and shot a factory film that proved capacity on camera.',
    quote: 'Enquiries did not just grow — they became the right kind of enquiries.', by: 'Rajesh Verma, Director' },
  { name: 'Maison D2C', sector: 'E-Commerce', year: '2025', services: ['E-Commerce', 'Digital Advertising', 'Analytics & Attribution'], result: '+60%', resultLabel: 'Revenue in six months',
    img: 'https://images.pexels.com/photos/7212924/pexels-photo-7212924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Traffic was cheap but conversion was not. A slow theme and a leaky checkout were burning paid budget daily.',
    solution: 'Rebuilt the storefront to a 1.4s budget, restructured the funnel with three tests a month, and shifted spend to full-funnel shopping and remarketing.',
    quote: 'Transparent reporting, real numbers, every month. Sales followed the traffic by sixty percent.', by: 'Priya Sharma, Founder' },
  { name: 'Northline Industries', sector: 'Industrial', year: '2024', services: ['Film Making', 'Content Marketing', 'Digital Advertising'], result: '2.1M', resultLabel: 'Views · 480 qualified leads',
    img: 'https://images.pexels.com/photos/29224578/pexels-photo-29224578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A commodity category where every competitor sounded identical. Sales needed something that made buyers stop and watch.',
    solution: 'A four-minute cinematic brand film shot across two plants, cut into eleven social assets, distributed with an account-based campaign to 900 named buyers.',
    quote: 'The film opened doors our team had been knocking on for two years.', by: 'Marketing Head' },
  { name: 'Enterprise Group CRM', sector: 'Software', year: '2025', services: ['CRM Software', 'UX & Interactive', 'Analytics & Attribution'], result: '12h', resultLabel: 'Saved per team, weekly',
    img: 'https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Six regional offices running three different spreadsheets. Orders were lost, margins invisible, and nobody trusted the numbers.',
    solution: 'A custom CRM with role-based dashboards, automated approvals, Tally and WhatsApp integrations, and a leadership view of live pipeline and margin.',
    quote: 'Support actually picks up the phone. That is rarer than it should be.', by: 'Amit Patel, CEO' },
  { name: 'Industrial Plant Ltd.', sector: 'Manufacturing', year: '2024', services: ['SEO & Lead Generation', 'Development'], result: '140+', resultLabel: 'Keywords on page one',
    img: 'https://images.pexels.com/photos/6937714/pexels-photo-6937714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'Strong offline reputation, invisible online. Dealers were sending buyers to competitors with better pages.',
    solution: 'A modular site with city-page architecture, schema for every product, Google Business optimisation across nine locations, and a technical content calendar.',
    quote: 'Page one for every product line we manufacture.', by: 'Business Head' },
  { name: 'Meridian Healthcare', sector: 'Healthcare', year: '2025', services: ['UX & Interactive', 'Content Marketing', 'Digital Marketing'], result: '3.4×', resultLabel: 'Engagement lift',
    img: 'https://images.pexels.com/photos/8485591/pexels-photo-8485591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    challenge: 'A growing clinic chain with inconsistent branding across six cities and no content engine behind its reputation.',
    solution: 'A complete identity system, a patient-first website with online booking, and an always-on content engine producing thirty original assets a month.',
    quote: 'Creative that looks world-class, strategy that behaves like it.', by: 'Sneha Kulkarni, CMO' },
];

/* ── TEAM ── */
export const TEAM = [
  { name: 'Kranti', role: 'Founder & Managing Director', focus: 'Strategy · Client Partnerships', initials: 'KR', tint: 'solar' },
  { name: 'Aditi Raghav', role: 'Head of Design', focus: 'UX · Brand Systems', initials: 'AR', tint: 'gold' },
  { name: 'Farhan Qureshi', role: 'Engineering Lead', focus: 'Web · CRM · Cloud', initials: 'FQ', tint: 'cobalt' },
  { name: 'Meera Iyer', role: 'Growth Director', focus: 'SEO · Paid Media', initials: 'MI', tint: 'rust' },
  { name: 'Vikram Sethi', role: 'Film Director', focus: 'Corporate & Ad Films', initials: 'VS', tint: 'solar' },
  { name: 'Nisha Barman', role: 'Account Director', focus: 'Delivery · Client Success', initials: 'NB', tint: 'gold' },
];

export const VALUES = [
  { n: '01', t: 'Do the best', d: 'Our founding belief, carried from the first company. No shortcuts in the work that leaves the building.' },
  { n: '02', t: 'Clarity over clutter', d: 'Minimal interfaces, honest strategy, and reports you can actually read without a translator.' },
  { n: '03', t: 'One team, no outsourcing', d: 'Designers, engineers, marketers and filmmakers in the same room, accountable for the same result.' },
  { n: '04', t: 'Truthful reporting', d: 'You see the dashboard we see — including the campaigns that did not work, every month.' },
];

export const IMPACT = [
  { t: 'STEM Programme', d: 'Funded digital-skills workshops for students in Noida government schools, run by our engineering team each quarter.' },
  { t: 'Company Values', d: 'Published and reviewed annually — the standards we hold each other to, not a poster on a wall.' },
  { t: 'Equality at Arka', d: 'Structured, audited pay bands and a hiring process measured for bias at every stage.' },
  { t: 'Local Business Support', d: 'Pro-bono digital support each year for small businesses in the sectors around our Noida office.' },
];

/* ── BLOG ── */
export const POSTS = [
  { d: '05', m: 'SEP', y: '2026', tag: 'Marketing', title: 'What is Inbound Marketing and How It Can Help Your Business', excerpt: 'Inbound marketing uses the power of the internet to reach the people who actually matter to your business — and costs less every month it runs.', read: '6 min' },
  { d: '17', m: 'NOV', y: '2025', tag: 'Careers', title: 'What Skills Are Required to Work as an Email Marketing Specialist?', excerpt: 'The email boom is in full swing. As third-party cookies are phased out and customers demand more relevance, these are the skills that matter.', read: '5 min' },
  { d: '23', m: 'AUG', y: '2025', tag: 'Strategy', title: 'Tips For Traditional Digital Marketing — From Start to Finish', excerpt: 'Traditional digital marketing has come a long way in the past few years, with new and improved tools at every stage of the funnel.', read: '8 min' },
  { d: '11', m: 'JUL', y: '2026', tag: 'SEO', title: 'The Six-Month SEO Playbook We Run for Indian Manufacturers', excerpt: 'Site architecture, specification pages, schema and the link strategy that took an exporter from page nine to page one.', read: '7 min' },
  { d: '02', m: 'JUN', y: '2026', tag: 'Film', title: 'Shooting a Factory Without Stopping Production', excerpt: 'Lighting around running machines, sound on a shop floor, and why the second shift is always the better shoot.', read: '4 min' },
  { d: '19', m: 'APR', y: '2026', tag: 'Analytics', title: 'Four Numbers Your Board Should Actually Ask For', excerpt: 'Most marketing reports measure the wrong thing. Here is what to put on the first page instead.', read: '5 min' },
];

/* ── CAREERS ── */
export const ROLES = [
  { role: 'Senior SEO Executive', team: 'Marketing', type: 'Full-time', place: 'Noida / Hybrid' },
  { role: 'React & Next.js Developer', team: 'Technology', type: 'Full-time', place: 'Noida' },
  { role: 'Video Editor & Colourist', team: 'Creative', type: 'Full-time', place: 'Noida' },
  { role: 'Performance Media Specialist', team: 'Marketing', type: 'Full-time', place: 'Remote (India)' },
  { role: 'UX Designer', team: 'Creative', type: 'Full-time', place: 'Noida / Hybrid' },
  { role: 'Business Development Manager', team: 'Growth', type: 'Full-time', place: 'Noida' },
];

export const FAQS = [
  { q: 'What does Arka Technovation do?', a: 'Ten services across three disciplines: marketing (SEO, digital marketing, digital advertising, content, analytics), technology (web development, CRM software, e-commerce) and creative (film making, UX and interactive design). One in-house team delivers all of it.' },
  { q: 'Who leads ARKA Technovation?', a: 'ARKA Technovation is founded and led by Mr. Kranti Parashar, an eminent leader with over 17 years of experience in enterprise technology, strategic finance, and corporate communication.' },
  { q: 'Where are your offices?', a: 'Our corporate office is at A-82, Sector 63, Noida, Uttar Pradesh. Regional offices operate in Kolkata at 7/1, Marhatta Ditch Lane, and in Mumbai at 304, Peninsula Spenta-1, Senapati Bapat Marg, Lower Parel.' },
  { q: 'How long does a project take?', a: 'A corporate website ships in three to six weeks. E-commerce and mobile apps run eight to sixteen. Custom CRM depends on scope and is planned in milestones. Marketing engines show measurable movement in sixty to ninety days.' },
  { q: 'Do you provide reports after launch?', a: 'Yes. Monthly performance reports, a live dashboard, quarterly strategy reviews and a named account contact. Maintenance, hosting and iteration are available as retainers or per project.' },
  { q: 'What does it cost?', a: 'Focused websites and single campaigns start around ₹1 lakh. Retainers typically run ₹40,000 to ₹2,50,000 per month depending on scope. After the discovery call you receive a written proposal with a fixed number, not a range.' },
];

export const TESTIMONIALS_LITE = [
  { quote: 'They rebuilt our digital presence end-to-end — website, SEO and film. Enquiries did not just grow, they became the right kind of enquiries.', name: 'Rajesh Verma', role: 'Director, Precision Engineering · Delhi NCR', metric: '+300% traffic' },
  { quote: 'Transparent reporting, real numbers, every month. Our organic traffic rose 150% in six months and sales followed by sixty percent.', name: 'Priya Sharma', role: 'Founder, Maison D2C · Mumbai', metric: '4.6× ROAS' },
  { quote: 'One team for software, marketing and film. Our CRM saves each team hours every week — and support actually picks up the phone.', name: 'Amit Patel', role: 'CEO, Industrial Solutions · Ahmedabad', metric: '12h saved / week' },
  { quote: 'Creative that looks world-class and strategy that behaves like it. That combination is rare, and it is why we have stayed for years.', name: 'Sneha Kulkarni', role: 'CMO, Meridian Healthcare · Bengaluru', metric: '3.4× engagement' },
];

export const CLIENTS = ['PRECISION ENGINEERING', 'MAISON D2C', 'NORTHLINE INDUSTRIES', 'MERIDIAN HEALTHCARE', 'ENTERPRISE GROUP', 'INDUSTRIAL PLANT LTD', 'ATLAS LOGISTICS', 'VEDA EDUCATION', 'ORBIT REALTY', 'SURAKSHA STEEL', 'KAVYA FOODS', 'ZENITH AUTOMOTIVE'];

export const PROCESS = [
  { n: '01', t: 'Discover', d: 'A free audit and an honest diagnosis of where growth is hiding.' },
  { n: '02', t: 'Define', d: 'Strategy, scope, timelines and the metrics that define success.' },
  { n: '03', t: 'Design', d: 'Brand, interface and film concepts, refined until unmistakable.' },
  { n: '04', t: 'Develop', d: 'Web, app and software built in-house for speed and scale.' },
  { n: '05', t: 'Deploy', d: 'QA, launch, go-live support and team training.' },
  { n: '06', t: 'Grow', d: 'SEO, media and content, iterated and reported every month.' },
];
