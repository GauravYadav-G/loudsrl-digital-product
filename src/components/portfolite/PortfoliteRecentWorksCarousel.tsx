'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import Link from '../Link';
import type { ProjectData } from './ProjectModal';

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false });

interface ShowcaseCardItem {
  id: string;
  bottomTitle: string;
  mosaicVariant: 'navy' | 'olive' | 'terracotta' | 'mauve' | 'graphite' | 'sand';
  glassWidget: React.ReactNode;
  projectData: ProjectData;
}

/* ─────────────────────────────────────────────────────────────
   TOP SECTION BACKGROUND COLORS
   Matches the authentic Convex-style reference design exactly
   ───────────────────────────────────────────────────────────── */
const VARIANT_TOP_BG: Record<string, string> = {
  navy: 'linear-gradient(180deg, #0A1931 0%, #15376F 100%)',
  olive: '#DFE2CE',
  terracotta: '#FF7632',
  mauve: '#E5D9E2',
  graphite: '#E4E4E4',
  sand: '#EDE6DC',
};

/* ─────────────────────────────────────────────────────────────
   DYNAMIC MOSAIC TILE MAPS (11 Columns × 8 Rows)
   Fast, energetic breathing pixel structure matching reference
   ───────────────────────────────────────────────────────────── */
interface Tile {
  col: number;
  row: number;
  color: string;
}

const MOSAIC_TILES: Record<string, Tile[]> = {
  navy: [
    // Row 0
    { col: 0, row: 0, color: '#0A1E3F' },
    { col: 1, row: 0, color: '#0F2D5C' },
    { col: 2, row: 0, color: '#163E7B' },
    { col: 4, row: 0, color: '#0A1E3F' },
    { col: 6, row: 0, color: '#0F2D5C' },
    { col: 8, row: 0, color: '#163E7B' },
    { col: 9, row: 0, color: '#0F2D5C' },
    { col: 10, row: 0, color: '#0A1E3F' },
    // Row 1
    { col: 0, row: 1, color: '#0F2D5C' },
    { col: 1, row: 1, color: '#163E7B' },
    { col: 2, row: 1, color: '#1D519D' },
    { col: 8, row: 1, color: '#1D519D' },
    { col: 9, row: 1, color: '#163E7B' },
    { col: 10, row: 1, color: '#0F2D5C' },
    // Row 2
    { col: 0, row: 2, color: '#163E7B' },
    { col: 1, row: 2, color: '#1D519D' },
    { col: 9, row: 2, color: '#1D519D' },
    { col: 10, row: 2, color: '#163E7B' },
    // Row 3
    { col: 0, row: 3, color: '#1D519D' },
    { col: 1, row: 3, color: '#2768C1' },
    { col: 9, row: 3, color: '#2768C1' },
    { col: 10, row: 3, color: '#1D519D' },
    // Row 4
    { col: 0, row: 4, color: '#2768C1' },
    { col: 1, row: 4, color: '#4D8CE4' },
    { col: 2, row: 4, color: '#4D8CE4' },
    { col: 8, row: 4, color: '#4D8CE4' },
    { col: 9, row: 4, color: '#4D8CE4' },
    { col: 10, row: 4, color: '#2768C1' },
    // Row 5
    { col: 0, row: 5, color: '#4D8CE4' },
    { col: 1, row: 5, color: '#85B2F0' },
    { col: 3, row: 5, color: '#4D8CE4' },
    { col: 7, row: 5, color: '#4D8CE4' },
    { col: 9, row: 5, color: '#85B2F0' },
    { col: 10, row: 5, color: '#4D8CE4' },
    // Row 6
    { col: 0, row: 6, color: '#85B2F0' },
    { col: 1, row: 6, color: '#BFD7F8' },
    { col: 2, row: 6, color: '#BFD7F8' },
    { col: 4, row: 6, color: '#85B2F0' },
    { col: 6, row: 6, color: '#85B2F0' },
    { col: 8, row: 6, color: '#BFD7F8' },
    { col: 9, row: 6, color: '#BFD7F8' },
    { col: 10, row: 6, color: '#85B2F0' },
    // Row 7
    { col: 1, row: 7, color: '#E5F0FD' },
    { col: 3, row: 7, color: '#E5F0FD' },
    { col: 5, row: 7, color: '#E5F0FD' },
    { col: 7, row: 7, color: '#E5F0FD' },
    { col: 9, row: 7, color: '#E5F0FD' },
  ],
  olive: [
    // Row 0
    { col: 1, row: 0, color: '#4D5328' },
    { col: 2, row: 0, color: '#656D35' },
    { col: 4, row: 0, color: '#4D5328' },
    { col: 6, row: 0, color: '#4D5328' },
    { col: 8, row: 0, color: '#656D35' },
    { col: 9, row: 0, color: '#4D5328' },
    // Row 1
    { col: 0, row: 1, color: '#4D5328' },
    { col: 1, row: 1, color: '#656D35' },
    { col: 2, row: 1, color: '#7D8742' },
    { col: 8, row: 1, color: '#7D8742' },
    { col: 9, row: 1, color: '#656D35' },
    { col: 10, row: 1, color: '#4D5328' },
    // Row 2
    { col: 0, row: 2, color: '#656D35' },
    { col: 1, row: 2, color: '#7D8742' },
    { col: 9, row: 2, color: '#7D8742' },
    { col: 10, row: 2, color: '#656D35' },
    // Row 3
    { col: 0, row: 3, color: '#7D8742' },
    { col: 1, row: 3, color: '#95A150' },
    { col: 9, row: 3, color: '#95A150' },
    { col: 10, row: 3, color: '#7D8742' },
    // Row 4
    { col: 0, row: 4, color: '#95A150' },
    { col: 1, row: 4, color: '#ADC068' },
    { col: 2, row: 4, color: '#ADC068' },
    { col: 8, row: 4, color: '#ADC068' },
    { col: 9, row: 4, color: '#ADC068' },
    { col: 10, row: 4, color: '#95A150' },
    // Row 5
    { col: 0, row: 5, color: '#ADC068' },
    { col: 1, row: 5, color: '#C7D488' },
    { col: 3, row: 5, color: '#ADC068' },
    { col: 7, row: 5, color: '#ADC068' },
    { col: 9, row: 5, color: '#C7D488' },
    { col: 10, row: 5, color: '#ADC068' },
    // Row 6
    { col: 0, row: 6, color: '#C7D488' },
    { col: 1, row: 6, color: '#DFE8B4' },
    { col: 2, row: 6, color: '#DFE8B4' },
    { col: 4, row: 6, color: '#C7D488' },
    { col: 6, row: 6, color: '#C7D488' },
    { col: 8, row: 6, color: '#DFE8B4' },
    { col: 9, row: 6, color: '#DFE8B4' },
    { col: 10, row: 6, color: '#C7D488' },
    // Row 7
    { col: 1, row: 7, color: '#EEF3D2' },
    { col: 3, row: 7, color: '#EEF3D2' },
    { col: 5, row: 7, color: '#EEF3D2' },
    { col: 7, row: 7, color: '#EEF3D2' },
    { col: 9, row: 7, color: '#EEF3D2' },
  ],
  terracotta: [
    // Top rows have peach & orange accent squares
    { col: 8, row: 0, color: '#FFA875' },
    { col: 9, row: 0, color: '#FFBD96' },
    { col: 9, row: 1, color: '#FFA875' },
    { col: 10, row: 1, color: '#FFBD96' },
    { col: 0, row: 2, color: '#FFA875' },
    { col: 10, row: 2, color: '#FFA875' },
    { col: 0, row: 3, color: '#FFA875' },
    { col: 10, row: 3, color: '#FFA875' },
    // Row 4: Transition to terracotta
    { col: 0, row: 4, color: '#E85D1B' },
    { col: 1, row: 4, color: '#F3985D' },
    { col: 9, row: 4, color: '#F3985D' },
    { col: 10, row: 4, color: '#E85D1B' },
    // Row 5: Deep terracotta & brown anchoring the bottom
    { col: 0, row: 5, color: '#96340B' },
    { col: 1, row: 5, color: '#BD4411' },
    { col: 2, row: 5, color: '#F3985D' },
    { col: 8, row: 5, color: '#F3985D' },
    { col: 9, row: 5, color: '#BD4411' },
    { col: 10, row: 5, color: '#96340B' },
    // Row 6: Dark chocolate & burnt terracotta squares framing the bottom
    { col: 0, row: 6, color: '#5E1F0A' },
    { col: 1, row: 6, color: '#7E2A0A' },
    { col: 2, row: 6, color: '#BD4411' },
    { col: 3, row: 6, color: '#5E1F0A' },
    { col: 4, row: 6, color: '#7E2A0A' },
    { col: 6, row: 6, color: '#5E1F0A' },
    { col: 7, row: 6, color: '#7E2A0A' },
    { col: 8, row: 6, color: '#BD4411' },
    { col: 9, row: 6, color: '#7E2A0A' },
    { col: 10, row: 6, color: '#5E1F0A' },
    // Row 7: Stepping down into base
    { col: 0, row: 7, color: '#E8742C' },
    { col: 1, row: 7, color: '#BD4411' },
    { col: 3, row: 7, color: '#5E1F0A' },
    { col: 5, row: 7, color: '#381407' },
    { col: 7, row: 7, color: '#5E1F0A' },
    { col: 9, row: 7, color: '#BD4411' },
    { col: 10, row: 7, color: '#E8742C' },
  ],
  mauve: [
    // Row 0
    { col: 1, row: 0, color: '#4B3750' },
    { col: 2, row: 0, color: '#6C4F72' },
    { col: 4, row: 0, color: '#4B3750' },
    { col: 6, row: 0, color: '#4B3750' },
    { col: 8, row: 0, color: '#6C4F72' },
    { col: 9, row: 0, color: '#4B3750' },
    // Row 1
    { col: 0, row: 1, color: '#4B3750' },
    { col: 1, row: 1, color: '#6C4F72' },
    { col: 2, row: 1, color: '#8F6F96' },
    { col: 8, row: 1, color: '#8F6F96' },
    { col: 9, row: 1, color: '#6C4F72' },
    { col: 10, row: 1, color: '#4B3750' },
    // Row 2
    { col: 0, row: 2, color: '#6C4F72' },
    { col: 1, row: 2, color: '#8F6F96' },
    { col: 9, row: 2, color: '#8F6F96' },
    { col: 10, row: 2, color: '#6C4F72' },
    // Row 3
    { col: 0, row: 3, color: '#8F6F96' },
    { col: 1, row: 3, color: '#AD8DB3' },
    { col: 9, row: 3, color: '#AD8DB3' },
    { col: 10, row: 3, color: '#8F6F96' },
    // Row 4
    { col: 0, row: 4, color: '#AD8DB3' },
    { col: 1, row: 4, color: '#C8AECF' },
    { col: 2, row: 4, color: '#C8AECF' },
    { col: 8, row: 4, color: '#C8AECF' },
    { col: 9, row: 4, color: '#C8AECF' },
    { col: 10, row: 4, color: '#AD8DB3' },
    // Row 5
    { col: 0, row: 5, color: '#C8AECF' },
    { col: 1, row: 5, color: '#DEC9E4' },
    { col: 3, row: 5, color: '#C8AECF' },
    { col: 7, row: 5, color: '#C8AECF' },
    { col: 9, row: 5, color: '#DEC9E4' },
    { col: 10, row: 5, color: '#C8AECF' },
    // Row 6
    { col: 0, row: 6, color: '#DEC9E4' },
    { col: 1, row: 6, color: '#EEE0F2' },
    { col: 2, row: 6, color: '#EEE0F2' },
    { col: 4, row: 6, color: '#DEC9E4' },
    { col: 6, row: 6, color: '#DEC9E4' },
    { col: 8, row: 6, color: '#EEE0F2' },
    { col: 9, row: 6, color: '#EEE0F2' },
    { col: 10, row: 6, color: '#DEC9E4' },
    // Row 7
    { col: 1, row: 7, color: '#F7EFF9' },
    { col: 3, row: 7, color: '#F7EFF9' },
    { col: 5, row: 7, color: '#F7EFF9' },
    { col: 7, row: 7, color: '#F7EFF9' },
    { col: 9, row: 7, color: '#F7EFF9' },
  ],
  graphite: [
    // Row 0
    { col: 1, row: 0, color: '#2C2C2E' },
    { col: 2, row: 0, color: '#3A3A3C' },
    { col: 4, row: 0, color: '#2C2C2E' },
    { col: 6, row: 0, color: '#2C2C2E' },
    { col: 8, row: 0, color: '#3A3A3C' },
    { col: 9, row: 0, color: '#2C2C2E' },
    // Row 1
    { col: 0, row: 1, color: '#2C2C2E' },
    { col: 1, row: 1, color: '#3A3A3C' },
    { col: 2, row: 1, color: '#48484A' },
    { col: 8, row: 1, color: '#48484A' },
    { col: 9, row: 1, color: '#3A3A3C' },
    { col: 10, row: 1, color: '#2C2C2E' },
    // Row 2
    { col: 0, row: 2, color: '#3A3A3C' },
    { col: 1, row: 2, color: '#48484A' },
    { col: 9, row: 2, color: '#48484A' },
    { col: 10, row: 2, color: '#3A3A3C' },
    // Row 3
    { col: 0, row: 3, color: '#48484A' },
    { col: 1, row: 3, color: '#636366' },
    { col: 9, row: 3, color: '#636366' },
    { col: 10, row: 3, color: '#48484A' },
    // Row 4
    { col: 0, row: 4, color: '#636366' },
    { col: 1, row: 4, color: '#8E8E93' },
    { col: 2, row: 4, color: '#8E8E93' },
    { col: 8, row: 4, color: '#8E8E93' },
    { col: 9, row: 4, color: '#8E8E93' },
    { col: 10, row: 4, color: '#636366' },
    // Row 5
    { col: 0, row: 5, color: '#8E8E93' },
    { col: 1, row: 5, color: '#AEAEB2' },
    { col: 3, row: 5, color: '#8E8E93' },
    { col: 7, row: 5, color: '#8E8E93' },
    { col: 9, row: 5, color: '#AEAEB2' },
    { col: 10, row: 5, color: '#8E8E93' },
    // Row 6
    { col: 0, row: 6, color: '#AEAEB2' },
    { col: 1, row: 6, color: '#C7C7CC' },
    { col: 2, row: 6, color: '#C7C7CC' },
    { col: 4, row: 6, color: '#AEAEB2' },
    { col: 6, row: 6, color: '#AEAEB2' },
    { col: 8, row: 6, color: '#C7C7CC' },
    { col: 9, row: 6, color: '#C7C7CC' },
    { col: 10, row: 6, color: '#AEAEB2' },
    // Row 7
    { col: 1, row: 7, color: '#E5E5EA' },
    { col: 3, row: 7, color: '#E5E5EA' },
    { col: 5, row: 7, color: '#E5E5EA' },
    { col: 7, row: 7, color: '#E5E5EA' },
    { col: 9, row: 7, color: '#E5E5EA' },
  ],
  sand: [
    // Row 0
    { col: 1, row: 0, color: '#4E3A20' },
    { col: 2, row: 0, color: '#6A5230' },
    { col: 4, row: 0, color: '#4E3A20' },
    { col: 6, row: 0, color: '#4E3A20' },
    { col: 8, row: 0, color: '#6A5230' },
    { col: 9, row: 0, color: '#4E3A20' },
    // Row 1
    { col: 0, row: 1, color: '#4E3A20' },
    { col: 1, row: 1, color: '#6A5230' },
    { col: 2, row: 1, color: '#886C45' },
    { col: 8, row: 1, color: '#886C45' },
    { col: 9, row: 1, color: '#6A5230' },
    { col: 10, row: 1, color: '#4E3A20' },
    // Row 2
    { col: 0, row: 2, color: '#6A5230' },
    { col: 1, row: 2, color: '#886C45' },
    { col: 9, row: 2, color: '#886C45' },
    { col: 10, row: 2, color: '#6A5230' },
    // Row 3
    { col: 0, row: 3, color: '#886C45' },
    { col: 1, row: 3, color: '#A98A5E' },
    { col: 9, row: 3, color: '#A98A5E' },
    { col: 10, row: 3, color: '#886C45' },
    // Row 4
    { col: 0, row: 4, color: '#A98A5E' },
    { col: 1, row: 4, color: '#C8AA7F' },
    { col: 2, row: 4, color: '#C8AA7F' },
    { col: 8, row: 4, color: '#C8AA7F' },
    { col: 9, row: 4, color: '#C8AA7F' },
    { col: 10, row: 4, color: '#A98A5E' },
    // Row 5
    { col: 0, row: 5, color: '#C8AA7F' },
    { col: 1, row: 5, color: '#DDC5A2' },
    { col: 3, row: 5, color: '#C8AA7F' },
    { col: 7, row: 5, color: '#C8AA7F' },
    { col: 9, row: 5, color: '#DDC5A2' },
    { col: 10, row: 5, color: '#C8AA7F' },
    // Row 6
    { col: 0, row: 6, color: '#DDC5A2' },
    { col: 1, row: 6, color: '#EDE1CF' },
    { col: 2, row: 6, color: '#EDE1CF' },
    { col: 4, row: 6, color: '#DDC5A2' },
    { col: 6, row: 6, color: '#DDC5A2' },
    { col: 8, row: 6, color: '#EDE1CF' },
    { col: 9, row: 6, color: '#EDE1CF' },
    { col: 10, row: 6, color: '#DDC5A2' },
    // Row 7
    { col: 1, row: 7, color: '#F7F2EA' },
    { col: 3, row: 7, color: '#F7F2EA' },
    { col: 5, row: 7, color: '#F7F2EA' },
    { col: 7, row: 7, color: '#F7F2EA' },
    { col: 9, row: 7, color: '#F7F2EA' },
  ],
};

function DynamicMosaicCanvas({ variant }: { variant: string }) {
  const tiles = MOSAIC_TILES[variant] || MOSAIC_TILES.terracotta;

  return (
    <svg
      viewBox="0 0 326 240"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {tiles.map((tile, i) => {
        const animClass =
          i % 4 === 0
            ? 'mg-pixel-1'
            : i % 4 === 1
            ? 'mg-pixel-2'
            : i % 4 === 2
            ? 'mg-pixel-3'
            : 'mg-pixel-4';

        return (
          <rect
            key={i}
            x={4 + tile.col * 29}
            y={4 + tile.row * 29}
            width={25}
            height={25}
            rx={4}
            fill={tile.color}
            className={animClass}
          />
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   SHOWCASE CARDS DATA
   Exact 1:1 match to the design reference:
   1. Navy: Real-time sync / Signups
   2. Olive: Ship in seconds (DEPLOY)
   3. Terracotta: Data that stays live (QUERY)
   4. Mauve: Holds up at scale (UPTIME · 90 DAYS)
   5. Graphite: People and agents (TEAM)
   6. Sand: Your address (DOMAIN)
   ───────────────────────────────────────────────────────────── */
const SHOWCASE_CARDS: ShowcaseCardItem[] = [
  {
    id: 'card-real-users',
    bottomTitle: 'Real users, day one',
    mosaicVariant: 'navy',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          SIGNUPS · TODAY
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 my-1 leading-none">
          1,204
        </div>
        <div className="text-xs text-emerald-600 font-medium flex items-center gap-1">
          <span>+18% vs yesterday</span>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-users',
      title: 'D2C E-Commerce Growth Platform',
      category: 'E-Commerce · Digital Marketing',
      image: '/portfolite/proj-2.png',
      client: 'Brand Founder',
      year: '2025',
      description:
        'Fast mobile-first storefront, streamlined checkout funnel, and full-funnel digital marketing campaigns.',
      deliverables: ['E-Commerce Storefront', 'Checkout Rebuild', 'Performance Marketing'],
      results: 'Compounding Revenue & Leads',
    },
  },
  {
    id: 'card-deploy',
    bottomTitle: 'Ship in seconds',
    mosaicVariant: 'olive',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          DEPLOY
        </div>
        <div className="space-y-2 text-xs sm:text-[13px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>production</span>
            </span>
            <span className="text-zinc-500 font-normal">38 s</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border border-zinc-700 shrink-0" />
              <span>preview · pr-214</span>
            </span>
            <span className="text-zinc-500 font-normal">ready</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-deploy',
      title: 'Automated CI/CD Platform',
      category: 'Cloud Engineering · Instant Deploys',
      image: '/portfolite/proj-1.png',
      client: 'Engineering Team',
      year: '2025',
      description:
        'Continuous delivery and zero-downtime deployment pipeline for enterprise web and mobile applications.',
      deliverables: ['Automated CI/CD', 'Edge Verification', 'Instant Rollbacks'],
      results: '38s Global Deployments',
    },
  },
  {
    id: 'card-live-data',
    bottomTitle: 'Data that stays live',
    mosaicVariant: 'terracotta',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          QUERY
        </div>
        <div className="font-mono text-xs sm:text-[12.5px] text-zinc-800 leading-snug mb-2 font-medium">
          <span className="text-blue-600">useQuery</span>
          <span className="text-zinc-600">(</span>
          <span className="text-blue-600">Order</span>
          <span className="text-zinc-600">, &#123; </span>
          <span className="text-blue-600">status</span>
          <span className="text-zinc-600">: </span>
          <span className="text-blue-600">&quot;paid&quot;</span>
          <span className="text-zinc-600"> &#125;)</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-500">
          1,204 rows · from cache
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-query',
      title: 'Enterprise Web Platform',
      category: 'Custom Software · Edge Query',
      image: '/portfolite/proj-1.png',
      client: 'Engineering Director',
      year: '2025',
      description:
        'Headless Next.js architecture, real-time edge catalog, and high-performance search infrastructure.',
      deliverables: ['Web Architecture', 'Edge Caching', 'Performance Optimization'],
      results: 'Verified High Conversion',
    },
  },
  {
    id: 'card-scale-uptime',
    bottomTitle: 'Holds up at scale',
    mosaicVariant: 'mauve',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1">
          UPTIME · 90 DAYS
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 my-1 leading-none">
          99.98%
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          no incidents
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-uptime',
      title: 'Cloud CRM & ERP Integration',
      category: 'Software Development · Cloud Systems',
      image: '/portfolite/proj-4.jpg',
      client: 'Chief Technology Officer',
      year: '2025',
      description:
        'Scalable multi-tier cloud CRM with role-based dashboards, automated approval matrices, and live enterprise sync.',
      deliverables: ['Custom CRM', 'ERP Sync', 'High Availability'],
      results: '99.98% Verified Uptime',
    },
  },
  {
    id: 'card-people-systems',
    bottomTitle: 'People and agents',
    mosaicVariant: 'graphite',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          TEAM
        </div>
        <div className="space-y-2 text-xs sm:text-[13px] text-zinc-800 font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-blue-500 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M0 0 L0 14 L3.8 10.8 L6.5 16 L8.8 14.8 L6.2 9.4 L11 9.4 Z" />
            </svg>
            <span>4 people</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-orange-500 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M0 0 L0 14 L3.8 10.8 L6.5 16 L8.8 14.8 L6.2 9.4 L11 9.4 Z" />
            </svg>
            <span>2 Operators</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-team',
      title: 'Healthcare Experience Portal',
      category: 'UI/UX Design & Engineering',
      image: '/portfolite/proj-6.png',
      client: 'Product Head',
      year: '2025',
      description:
        'Direct partnership with in-house design and engineering teams — seamless user experience and modern design system.',
      deliverables: ['Patient Portal', 'Design System', 'User Research'],
      results: 'Measurable Engagement Lift',
    },
  },
  {
    id: 'card-your-address',
    bottomTitle: 'Your address',
    mosaicVariant: 'sand',
    glassWidget: (
      <div className="text-left w-full select-none">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          DOMAIN
        </div>
        <div className="space-y-2 text-xs sm:text-[13px] font-mono">
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>acme.com</span>
            </span>
            <span className="text-zinc-400 font-normal text-[11px]">live</span>
          </div>
          <div className="flex items-center justify-between text-zinc-800 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full border border-zinc-700 shrink-0" />
              <span>app.acme.com</span>
            </span>
            <span className="text-zinc-400 font-normal text-[11px]">live</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-domain',
      title: 'Organic Search Architecture',
      category: 'Search Engine Optimization',
      image: '/portfolite/proj-5.png',
      client: 'Growth Director',
      year: '2024',
      description:
        'Modular technical architecture and Google Business Profile optimization across key target regions.',
      deliverables: ['Technical SEO', 'Schema Markup', 'Keyword Strategy'],
      results: 'Page-One Organic Dominance',
    },
  },
];

export default function PortfoliteRecentWorksCarousel() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section
      id="works"
      className="py-24 sm:py-32 font-framer bg-[#FAF9F5] text-black border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16">
        {/* Header matching reference layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
              Build incredible digital products, completely scalable.
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start lg:items-end gap-5">
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed lg:text-right">
              From idea to deployed software with compounding search dominance — engineer your digital products with in-house technical architecture and verifiable growth.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm"
              >
                <span>Start building</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Overflowing Horizontal Marquee with Wide Side Blur (Continuous Infinite Auto-Rotation) ── */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Side Blur Gradient Mask */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-56 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent z-20 pointer-events-none" />

        {/* Right Side Blur Gradient Mask */}
        <div className="absolute right-0 inset-y-0 w-24 sm:w-56 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent z-20 pointer-events-none" />

        {/* Infinite Rotating Marquee Track: all cards strictly 340px width × 470px height */}
        <div className="flex animate-marquee-showcase gap-6 sm:gap-7 w-max will-change-transform">
          {[...SHOWCASE_CARDS, ...SHOWCASE_CARDS].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => setSelectedProject(card.projectData)}
              className="relative w-[310px] sm:w-[340px] h-[460px] sm:h-[480px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#EFECE6] overflow-hidden flex flex-col justify-between select-none cursor-pointer group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-black/5"
            >
              {/* Upper Area: Dynamic Breathing Pixel Canvas with Centered Floating Glass Card */}
              <div
                className="relative w-full h-[350px] sm:h-[365px] flex items-center justify-center overflow-hidden"
                style={{ background: VARIANT_TOP_BG[card.mosaicVariant] }}
              >
                {/* 1. Dynamic Background Pixel Grid Structure */}
                <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                  <DynamicMosaicCanvas variant={card.mosaicVariant} />
                </div>

                {/* 2. Floating Frosted Glass Card in Center matching reference exactly */}
                <div className="relative z-10 w-[240px] sm:w-[260px] rounded-2xl bg-white/85 backdrop-blur-md p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-white/90 group-hover:scale-[1.02] group-hover:bg-white/95 transition-all duration-300">
                  {card.glassWidget}
                </div>
              </div>

              {/* Lower Area: Bold bottom title, clean & authentic to reference design */}
              <div className="flex-1 p-6 sm:p-7 pt-4 pb-6 flex items-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-black tracking-tight leading-[1.2]">
                  {card.bottomTitle}
                </h3>
              </div>
            </div>
          ))}
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
