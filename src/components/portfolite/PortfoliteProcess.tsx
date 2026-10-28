'use client';

import React from 'react';

const PROCESS_COLUMNS = [
  {
    label: '01 · Discovery',
    title: 'Commercial and technical roadmaps tailored to your growth goals.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top Main Window Frame */}
        <rect x="1" y="1" width="176" height="84" rx="8" stroke="currentColor" strokeWidth="1.5" />

        {/* Dynamic Resizing Left Panel */}
        <rect className="mg-pane-left" x="10" y="10" width="60" height="66" rx="5" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line x1="18" y1="26" x2="52" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="36" x2="42" y2="36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Dynamic Yielding Right Panel */}
        <rect className="mg-pane-right" x="76" y="10" width="91" height="66" rx="5" stroke="currentColor" strokeWidth="1.2" fill="white" />

        {/* Animated Mouse Cursor Dragging the Seam */}
        <g className="mg-cursor-pane">
          <path
            d="M0 0 L0 15 L4.2 11.5 L7.2 18 L10 16.6 L7 10.2 L12 10.2 Z"
            fill="#18181b"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom Pills with streaming dash animation */}
        <rect x="1" y="96" width="76" height="18" rx="9" stroke="currentColor" strokeWidth="1.4" />
        <line x1="16" y1="105" x2="62" y2="105" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        <rect className="mg-march-ants" x="85" y="96" width="76" height="18" rx="9" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 4" />
        <line
          className="mg-march-ants"
          x1="100"
          y1="105"
          x2="146"
          y2="105"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
  {
    label: '02 · Interface Design',
    title: 'Interactive prototypes and design systems built for high conversion.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Main Outer Canvas Window */}
        <rect x="1" y="1" width="186" height="116" rx="8" stroke="currentColor" strokeWidth="1.5" />

        {/* Left Sidebar */}
        <rect x="10" y="10" width="58" height="98" rx="6" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line x1="18" y1="24" x2="52" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="34" x2="42" y2="34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Component card in sidebar */}
        <rect x="18" y="50" width="30" height="24" rx="4" stroke="currentColor" strokeWidth="1.2" fill="#f4f4f5" />

        {/* Right Canvas: Top Slider Bar Box */}
        <rect x="76" y="10" width="101" height="42" rx="6" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line x1="86" y1="22" x2="118" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Slider track line */}
        <line x1="86" y1="34" x2="167" y2="34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Animated Slider thumb */}
        <circle className="mg-slider-thumb" cx="116" cy="34" r="5" fill="#18181b" />
        {/* Animated Cursor dragging thumb */}
        <g className="mg-slider-cursor">
          <path
            d="M0 0 L0 15 L4.2 11.5 L7.2 18 L10 16.6 L7 10.2 L12 10.2 Z"
            fill="#18181b"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>

        {/* Right Canvas: Bottom Property Block with dynamic bar expansion */}
        <rect x="76" y="60" width="101" height="48" rx="6" stroke="currentColor" strokeWidth="1.2" fill="white" />
        <line className="mg-property-bar" x1="86" y1="74" x2="162" y2="74" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="86" y1="86" x2="140" y2="86" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: '03 · Engineering',
    title: 'High-performance Next.js platforms, custom CRM, and cloud infrastructure.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Center Node Engine Box */}
        <rect x="76" y="38" width="46" height="54" rx="6" stroke="currentColor" strokeWidth="1.5" fill="white" />
        <line x1="84" y1="62" x2="114" y2="62" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="84" y1="70" x2="104" y2="70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Streaming connector buses */}
        <line className="mg-databus" x1="56" y1="34" x2="76" y2="48" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line className="mg-databus" x1="56" y1="92" x2="76" y2="78" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line className="mg-databus" x1="142" y1="34" x2="122" y2="48" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line className="mg-databus" x1="142" y1="92" x2="122" y2="78" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Traveling data packets */}
        <circle className="mg-packet-1" cx="0" cy="0" r="2.5" fill="#E8742C" />
        <circle className="mg-packet-2" cx="0" cy="0" r="2.5" fill="#E8742C" />

        {/* Top Left Satellite Node */}
        <rect x="10" y="10" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="18" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Bottom Left Satellite Node */}
        <rect x="10" y="82" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="18" y1="94" x2="38" y2="94" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="102" x2="30" y2="102" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Top Right Satellite Node */}
        <rect x="142" y="10" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="150" y1="22" x2="170" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="150" y1="30" x2="162" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Bottom Right Satellite Node */}
        <rect x="142" y="82" width="46" height="34" rx="5" stroke="currentColor" strokeWidth="1.3" fill="white" />
        <line x1="150" y1="94" x2="170" y2="94" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="150" y1="102" x2="162" y2="102" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Center Node pulsing ping dot */}
        <circle className="mg-node-ping" cx="122" cy="78" r="3" fill="#18181b" />
      </svg>
    ),
  },
  {
    label: '04 · Growth & Scale',
    title: 'Page-one organic search dominance and compounding lead pipelines.',
    illustration: (
      <svg
        viewBox="0 0 200 130"
        className="w-full max-w-[220px] h-auto text-black select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top Pill / Status Tag with subtle pulse */}
        <rect x="2" y="12" width="80" height="18" rx="9" stroke="currentColor" strokeWidth="1.4" fill="white" />
        <line x1="14" y1="21" x2="70" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Baseline horizontal axis */}
        <line x1="0" y1="98" x2="198" y2="98" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

        {/* Ascending solid plateau curve */}
        <path
          d="M 22 98 C 38 98 46 56 62 56 L 132 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Sequentially pulsing milestone control points */}
        <circle className="mg-milestone-1" cx="62" cy="56" r="3" fill="#18181b" />
        <circle className="mg-milestone-2" cx="98" cy="56" r="3" fill="#18181b" />
        <circle className="mg-milestone-3" cx="132" cy="56" r="3" fill="#E8742C" />

        {/* Descending dashed curve with streaming waterfall animation */}
        <path
          className="mg-waterfall"
          d="M 132 56 C 146 56 154 84 166 98"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* Sparks bursting from active control point */}
        <g className="mg-spark">
          <line x1="124" y1="46" x2="128" y2="48" stroke="#E8742C" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="121" y1="52" x2="125" y2="52" stroke="#E8742C" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="126" y1="42" x2="128" y2="44" stroke="#E8742C" strokeWidth="1.3" strokeLinecap="round" />
        </g>

        {/* Cursor steering the trajectory with interactive wiggle */}
        <g className="mg-trajectory-cursor">
          <path
            d="M0 0 L0 15 L4.2 11.5 L7.2 18 L10 16.6 L7 10.2 L12 10.2 Z"
            fill="#18181b"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
];

export default function PortfoliteProcess() {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 font-framer bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
    >
      {/* ── Background Celestial Orbit Wheel (Subtle, soft glow, positioned behind columns 2, 3, 4) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {/* Soft Warm Ambient Radial Glow Pool behind the wheel */}
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-[5%] w-[550px] sm:w-[750px] h-[450px] sm:h-[550px] blur-[140px] rounded-full opacity-20 bg-[#FF8A00] pointer-events-none"
        />

        {/* Celestial Orbit Wheel Container (Strictly lower region behind the wireframes) */}
        <div className="absolute -bottom-40 sm:-bottom-48 right-[-10%] sm:right-[2%] md:right-[6%] w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] opacity-40 pointer-events-none">
          {/* Rotating Celestial Orbit System */}
          <div className="w-full h-full relative animate-[spin_60s_linear_infinite]">
            {/* Outer Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-zinc-400/30" />

            {/* Middle Orbit Ring */}
            <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-zinc-400/25" />

            {/* Inner Orbit Ring */}
            <div className="absolute inset-32 sm:inset-40 rounded-full border border-zinc-400/20" />

            {/* Orbiting Tech Badges (Matching Image 2: Meta, YouTube, React, Kubernetes, Next.js, Docker) */}
            {/* Meta Badge */}
            <div className="absolute top-[8%] left-[28%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 shadow-md backdrop-blur-sm border border-black/5 flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#0668E1]" fill="currentColor">
                <path d="M12 15.65c-1.4 0-2.48-.95-3.08-2.02l-1.9 2.58C8.17 17.6 9.94 18.5 12 18.5c2.06 0 3.83-.9 4.98-2.29l-1.9-2.58c-.6 1.07-1.68 2.02-3.08 2.02zm8.5-8.4c-1.35-1.57-3.32-2.5-5.5-2.5-2.28 0-4.32 1.03-5.65 2.68C8.02 5.78 5.98 4.75 3.7 4.75c-2.18 0-4.15.93-5.5 2.5-1.4 1.63-2.2 3.9-2.2 6.5s.8 4.87 2.2 6.5c1.35 1.57 3.32 2.5 5.5 2.5 2.28 0 4.32-1.03 5.65-2.68 1.33 1.65 3.37 2.68 5.65 2.68 2.18 0 4.15-.93 5.5-2.5 1.4-1.63 2.2-3.9 2.2-6.5s-.8-4.87-2.2-6.5z" />
              </svg>
            </div>

            {/* YouTube Badge */}
            <div className="absolute bottom-[20%] left-[16%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 shadow-md backdrop-blur-sm border border-black/5 flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#FF0000]" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>

            {/* React Atom Badge */}
            <div className="absolute top-[38%] right-[6%] -translate-x-1/2 -translate-y-1/2 w-15 h-15 rounded-full bg-white/80 shadow-md backdrop-blur-sm border border-black/5 flex items-center justify-center p-3">
              <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </svg>
            </div>

            {/* Kubernetes Helm Badge */}
            <div className="absolute top-[6%] right-[22%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 shadow-md backdrop-blur-sm border border-black/5 flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#326CE5]" fill="currentColor">
                <path d="M12 2.25a.75.75 0 0 0-.375.1l-8.25 4.75a.75.75 0 0 0-.375.65v9.5c0 .27.14.51.375.65l8.25 4.75a.75.75 0 0 0 .75 0l8.25-4.75a.75.75 0 0 0 .375-.65v-9.5a.75.75 0 0 0-.375-.65l-8.25-4.75a.75.75 0 0 0-.375-.1zm0 2.15 6.75 3.89-2.5 1.44a4.5 4.5 0 0 0-2.75-.98v-2.88a1.5 1.5 0 0 0-3 0v2.88c-1.02.16-1.96.52-2.75.98l-2.5-1.44L12 4.4zm-5.25 4.5 2.5 1.44c-.6.82-.98 1.82-.99 2.91h-2.89a1.5 1.5 0 0 0 0 3h2.89c.01 1.09.39 2.09.99 2.91l-2.5 1.44L4.5 16.71v-7.81zm10.5 0 2.25 3.9v7.81l-2.25 3.9-2.5-1.44a4.5 4.5 0 0 0 .99-2.91h2.89a1.5 1.5 0 0 0 0-3h-2.89a4.5 4.5 0 0 0-.99-2.91l2.5-1.44zM12 10.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </div>

            {/* Docker Whale Badge */}
            <div className="absolute bottom-[8%] right-[32%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 shadow-md backdrop-blur-sm border border-black/5 flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#2496ED]" fill="currentColor">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.76 9.89a6.002 6.002 0 00-2.83-2.02l-.63-.22-.39.54c-.9 1.25-2.29 2.02-3.83 2.07H1.14c-.63 0-1.14.51-1.14 1.14 0 5.48 4.09 9.89 9.38 9.89 4.3 0 7.97-2.91 9.07-7.06.67-.18 2.05-.71 3.01-1.77.71-.78 1.14-1.74 1.29-2.58l.01-.01z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Matching Reference (Clean, bold, high contrast) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-3">Our Delivery Process</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
            Engineered for enterprise scale.
          </h2>
          <p className="mt-4 sm:mt-5 text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            From technical architecture to search dominance — every phase of our delivery process turns business requirements into scalable, high-converting digital products.
          </p>
        </div>

        {/* 4-Column Layout Structure Matching Reference (Images 1 & 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-zinc-300/80">
          {PROCESS_COLUMNS.map((col, idx) => {
            const borderClasses = [
              'border-b md:border-b lg:border-b-0 md:border-r lg:border-r',
              'border-b md:border-b lg:border-b-0 md:border-r-0 lg:border-r',
              'border-b md:border-b-0 lg:border-b-0 md:border-r lg:border-r',
              'border-b-0 md:border-b-0 lg:border-b-0 md:border-r-0 lg:border-r-0',
            ][idx];

            return (
              <div
                key={col.label}
                className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] transition-colors duration-300 group hover:bg-white/80 border-zinc-300/80 ${borderClasses}`}
              >
                {/* Top Meta & Headline */}
                <div>
                  <span className="block text-xs sm:text-sm font-normal text-zinc-400 mb-3 tracking-normal">
                    {col.label}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-black tracking-tight leading-[1.32] max-w-[280px]">
                    {col.title}
                  </h3>
                </div>

                {/* Bottom Technical Schematic Wireframe Illustration */}
                <div className="mt-14 sm:mt-20 pt-6 w-full flex items-end justify-start min-h-[130px]">
                  {col.illustration}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
