'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from '../Link';
import type { ProjectData } from './ProjectModal';

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false });

interface ShowcaseCardItem {
  id: string;
  bottomTitle: string;
  mosaicVariant: 'terracotta' | 'mauve' | 'graphite' | 'sand' | 'navy' | 'emerald';
  glassWidget: React.ReactNode;
  projectData: ProjectData;
}

/* ─────────────────────────────────────────────────────────────
   DETERMINISTIC MOSAIC TILE MAPS (10 Columns × 7 Rows)
   ───────────────────────────────────────────────────────────── */
interface Tile {
  col: number;
  row: number;
  color: string;
}

const MOSAIC_TILES: Record<string, Tile[]> = {
  terracotta: [
    // Row 0
    { col: 0, row: 0, color: '#3A1407' },
    { col: 1, row: 0, color: '#61210A' },
    { col: 2, row: 0, color: '#8D310C' },
    { col: 3, row: 0, color: '#BD4411' },
    { col: 5, row: 0, color: '#E8742C' },
    { col: 6, row: 0, color: '#8D310C' },
    { col: 7, row: 0, color: '#61210A' },
    { col: 8, row: 0, color: '#3A1407' },
    { col: 9, row: 0, color: '#61210A' },
    // Row 1
    { col: 0, row: 1, color: '#61210A' },
    { col: 1, row: 1, color: '#8D310C' },
    { col: 2, row: 1, color: '#BD4411' },
    { col: 4, row: 1, color: '#E8742C' },
    { col: 7, row: 1, color: '#8D310C' },
    { col: 8, row: 1, color: '#61210A' },
    { col: 9, row: 1, color: '#8D310C' },
    // Row 2
    { col: 0, row: 2, color: '#8D310C' },
    { col: 1, row: 2, color: '#BD4411' },
    { col: 8, row: 2, color: '#BD4411' },
    { col: 9, row: 2, color: '#BD4411' },
    // Row 3
    { col: 0, row: 3, color: '#BD4411' },
    { col: 1, row: 3, color: '#E8742C' },
    { col: 8, row: 3, color: '#E8742C' },
    { col: 9, row: 3, color: '#E8742C' },
    // Row 4
    { col: 0, row: 4, color: '#E8742C' },
    { col: 1, row: 4, color: '#F3985D' },
    { col: 2, row: 4, color: '#F3985D' },
    { col: 7, row: 4, color: '#F3985D' },
    { col: 8, row: 4, color: '#F3985D' },
    { col: 9, row: 4, color: '#F3985D' },
    // Row 5
    { col: 0, row: 5, color: '#F3985D' },
    { col: 1, row: 5, color: '#FABD97' },
    { col: 3, row: 5, color: '#FABD97' },
    { col: 4, row: 5, color: '#FABD97' },
    { col: 5, row: 5, color: '#FABD97' },
    { col: 6, row: 5, color: '#FABD97' },
    { col: 7, row: 5, color: '#FABD97' },
    { col: 8, row: 5, color: '#FABD97' },
    { col: 9, row: 5, color: '#FABD97' },
    // Row 6
    { col: 0, row: 6, color: '#FABD97' },
    { col: 2, row: 6, color: '#FDE6D7' },
    { col: 4, row: 6, color: '#FDE6D7' },
    { col: 6, row: 6, color: '#FDE6D7' },
    { col: 8, row: 6, color: '#FDE6D7' },
  ],
  mauve: [
    // Row 0
    { col: 1, row: 0, color: '#4B3750' },
    { col: 3, row: 0, color: '#6C4F72' },
    { col: 4, row: 0, color: '#4B3750' },
    { col: 6, row: 0, color: '#6C4F72' },
    { col: 7, row: 0, color: '#4B3750' },
    { col: 8, row: 0, color: '#302333' },
    { col: 9, row: 0, color: '#4B3750' },
    // Row 1
    { col: 0, row: 1, color: '#6C4F72' },
    { col: 2, row: 1, color: '#8E6B97' },
    { col: 3, row: 1, color: '#6C4F72' },
    { col: 5, row: 1, color: '#8E6B97' },
    { col: 7, row: 1, color: '#6C4F72' },
    { col: 8, row: 1, color: '#4B3750' },
    // Row 2
    { col: 0, row: 2, color: '#8E6B97' },
    { col: 1, row: 2, color: '#8E6B97' },
    { col: 8, row: 2, color: '#8E6B97' },
    { col: 9, row: 2, color: '#8E6B97' },
    // Row 3
    { col: 0, row: 3, color: '#B28FBD' },
    { col: 9, row: 3, color: '#B28FBD' },
    // Row 4
    { col: 0, row: 4, color: '#B28FBD' },
    { col: 1, row: 4, color: '#CFB5D7' },
    { col: 7, row: 4, color: '#B28FBD' },
    { col: 8, row: 4, color: '#CFB5D7' },
    { col: 9, row: 4, color: '#CFB5D7' },
    // Row 5
    { col: 0, row: 5, color: '#CFB5D7' },
    { col: 1, row: 5, color: '#E7D7EC' },
    { col: 2, row: 5, color: '#E7D7EC' },
    { col: 4, row: 5, color: '#CFB5D7' },
    { col: 6, row: 5, color: '#E7D7EC' },
    { col: 7, row: 5, color: '#E7D7EC' },
    { col: 8, row: 5, color: '#E7D7EC' },
    // Row 6
    { col: 1, row: 6, color: '#F5EDF8' },
    { col: 3, row: 6, color: '#F5EDF8' },
    { col: 5, row: 6, color: '#F5EDF8' },
    { col: 7, row: 6, color: '#F5EDF8' },
  ],
  graphite: [
    // Row 0
    { col: 0, row: 0, color: '#2C2C2E' },
    { col: 1, row: 0, color: '#1C1C1E' },
    { col: 2, row: 0, color: '#2C2C2E' },
    { col: 4, row: 0, color: '#48484A' },
    { col: 5, row: 0, color: '#2C2C2E' },
    { col: 7, row: 0, color: '#2C2C2E' },
    { col: 8, row: 0, color: '#1C1C1E' },
    { col: 9, row: 0, color: '#2C2C2E' },
    // Row 1
    { col: 0, row: 1, color: '#2C2C2E' },
    { col: 1, row: 1, color: '#48484A' },
    { col: 3, row: 1, color: '#48484A' },
    { col: 6, row: 1, color: '#48484A' },
    { col: 8, row: 1, color: '#48484A' },
    { col: 9, row: 1, color: '#48484A' },
    // Row 2
    { col: 0, row: 2, color: '#48484A' },
    { col: 1, row: 2, color: '#636366' },
    { col: 8, row: 2, color: '#636366' },
    { col: 9, row: 2, color: '#636366' },
    // Row 3
    { col: 0, row: 3, color: '#636366' },
    { col: 9, row: 3, color: '#8E8E93' },
    // Row 4
    { col: 0, row: 4, color: '#8E8E93' },
    { col: 1, row: 4, color: '#8E8E93' },
    { col: 8, row: 4, color: '#8E8E93' },
    { col: 9, row: 4, color: '#AEAEB2' },
    // Row 5
    { col: 0, row: 5, color: '#AEAEB2' },
    { col: 1, row: 5, color: '#AEAEB2' },
    { col: 2, row: 5, color: '#AEAEB2' },
    { col: 4, row: 5, color: '#AEAEB2' },
    { col: 5, row: 5, color: '#AEAEB2' },
    { col: 7, row: 5, color: '#AEAEB2' },
    { col: 8, row: 5, color: '#AEAEB2' },
    { col: 9, row: 5, color: '#C7C7CC' },
    // Row 6
    { col: 0, row: 6, color: '#C7C7CC' },
    { col: 2, row: 6, color: '#C7C7CC' },
    { col: 4, row: 6, color: '#E5E5EA' },
    { col: 6, row: 6, color: '#E5E5EA' },
    { col: 8, row: 6, color: '#E5E5EA' },
  ],
  sand: [
    // Row 0
    { col: 0, row: 0, color: '#706253' },
    { col: 1, row: 0, color: '#52473C' },
    { col: 3, row: 0, color: '#706253' },
    { col: 5, row: 0, color: '#52473C' },
    { col: 6, row: 0, color: '#706253' },
    { col: 8, row: 0, color: '#52473C' },
    { col: 9, row: 0, color: '#383129' },
    // Row 1
    { col: 0, row: 1, color: '#706253' },
    { col: 2, row: 1, color: '#91806D' },
    { col: 7, row: 1, color: '#706253' },
    { col: 8, row: 1, color: '#706253' },
    { col: 9, row: 1, color: '#52473C' },
    // Row 2
    { col: 0, row: 2, color: '#91806D' },
    { col: 1, row: 2, color: '#91806D' },
    { col: 8, row: 2, color: '#91806D' },
    { col: 9, row: 2, color: '#91806D' },
    // Row 3
    { col: 0, row: 3, color: '#B3A18E' },
    { col: 8, row: 3, color: '#B3A18E' },
    // Row 4
    { col: 0, row: 4, color: '#B3A18E' },
    { col: 1, row: 4, color: '#CFC0AF' },
    { col: 7, row: 4, color: '#B3A18E' },
    { col: 9, row: 4, color: '#B3A18E' },
    // Row 5
    { col: 0, row: 5, color: '#CFC0AF' },
    { col: 1, row: 5, color: '#CFC0AF' },
    { col: 3, row: 5, color: '#CFC0AF' },
    { col: 5, row: 5, color: '#CFC0AF' },
    { col: 7, row: 5, color: '#CFC0AF' },
    { col: 8, row: 5, color: '#E4D9CC' },
    { col: 9, row: 5, color: '#E4D9CC' },
    // Row 6
    { col: 0, row: 6, color: '#E4D9CC' },
    { col: 2, row: 6, color: '#E4D9CC' },
    { col: 4, row: 6, color: '#F2ECE4' },
    { col: 6, row: 6, color: '#F2ECE4' },
    { col: 8, row: 6, color: '#F2ECE4' },
  ],
  navy: [
    // Row 0
    { col: 0, row: 0, color: '#09152B' },
    { col: 1, row: 0, color: '#0F254E' },
    { col: 2, row: 0, color: '#183B76' },
    { col: 4, row: 0, color: '#183B76' },
    { col: 5, row: 0, color: '#0F254E' },
    { col: 7, row: 0, color: '#0F254E' },
    { col: 8, row: 0, color: '#09152B' },
    { col: 9, row: 0, color: '#0F254E' },
    // Row 1
    { col: 0, row: 1, color: '#0F254E' },
    { col: 1, row: 1, color: '#183B76' },
    { col: 2, row: 1, color: '#1D4ED8' },
    { col: 3, row: 1, color: '#2563EB' },
    { col: 7, row: 1, color: '#1D4ED8' },
    { col: 8, row: 1, color: '#183B76' },
    { col: 9, row: 1, color: '#183B76' },
    // Row 2
    { col: 0, row: 2, color: '#183B76' },
    { col: 1, row: 2, color: '#1D4ED8' },
    { col: 8, row: 2, color: '#2563EB' },
    { col: 9, row: 2, color: '#1D4ED8' },
    // Row 3
    { col: 0, row: 3, color: '#1D4ED8' },
    { col: 9, row: 3, color: '#3B82F6' },
    // Row 4
    { col: 0, row: 4, color: '#2563EB' },
    { col: 1, row: 4, color: '#3B82F6' },
    { col: 8, row: 4, color: '#3B82F6' },
    { col: 9, row: 4, color: '#60A5FA' },
    // Row 5
    { col: 0, row: 5, color: '#3B82F6' },
    { col: 1, row: 5, color: '#60A5FA' },
    { col: 2, row: 5, color: '#60A5FA' },
    { col: 4, row: 5, color: '#60A5FA' },
    { col: 6, row: 5, color: '#60A5FA' },
    { col: 7, row: 5, color: '#93C5FD' },
    { col: 8, row: 5, color: '#93C5FD' },
    { col: 9, row: 5, color: '#93C5FD' },
    // Row 6
    { col: 0, row: 6, color: '#60A5FA' },
    { col: 2, row: 6, color: '#93C5FD' },
    { col: 4, row: 6, color: '#DBEAFE' },
    { col: 6, row: 6, color: '#DBEAFE' },
    { col: 8, row: 6, color: '#DBEAFE' },
  ],
  emerald: [
    // Row 0
    { col: 0, row: 0, color: '#064E3B' },
    { col: 1, row: 0, color: '#043427' },
    { col: 2, row: 0, color: '#064E3B' },
    { col: 4, row: 0, color: '#065F46' },
    { col: 5, row: 0, color: '#064E3B' },
    { col: 7, row: 0, color: '#065F46' },
    { col: 8, row: 0, color: '#064E3B' },
    { col: 9, row: 0, color: '#043427' },
    // Row 1
    { col: 0, row: 1, color: '#064E3B' },
    { col: 1, row: 1, color: '#065F46' },
    { col: 2, row: 1, color: '#047857' },
    { col: 7, row: 1, color: '#047857' },
    { col: 8, row: 1, color: '#065F46' },
    { col: 9, row: 1, color: '#065F46' },
    // Row 2
    { col: 0, row: 2, color: '#065F46' },
    { col: 1, row: 2, color: '#047857' },
    { col: 8, row: 2, color: '#059669' },
    { col: 9, row: 2, color: '#047857' },
    // Row 3
    { col: 0, row: 3, color: '#047857' },
    { col: 9, row: 3, color: '#10B981' },
    // Row 4
    { col: 0, row: 4, color: '#059669' },
    { col: 1, row: 4, color: '#10B981' },
    { col: 8, row: 4, color: '#10B981' },
    { col: 9, row: 4, color: '#34D399' },
    // Row 5
    { col: 0, row: 5, color: '#10B981' },
    { col: 1, row: 5, color: '#34D399' },
    { col: 3, row: 5, color: '#34D399' },
    { col: 5, row: 5, color: '#34D399' },
    { col: 7, row: 5, color: '#6EE7B7' },
    { col: 8, row: 5, color: '#6EE7B7' },
    { col: 9, row: 5, color: '#6EE7B7' },
    // Row 6
    { col: 0, row: 6, color: '#34D399' },
    { col: 2, row: 6, color: '#6EE7B7' },
    { col: 4, row: 6, color: '#A7F3D0' },
    { col: 6, row: 6, color: '#A7F3D0' },
    { col: 8, row: 6, color: '#A7F3D0' },
  ],
};

function MosaicCanvas({ variant }: { variant: string }) {
  const tiles = MOSAIC_TILES[variant] || MOSAIC_TILES.terracotta;

  return (
    <svg
      viewBox="0 0 290 205"
      className="w-full h-full object-cover select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {tiles.map((tile, i) => (
        <rect
          key={i}
          x={2.5 + tile.col * 29}
          y={4 + tile.row * 29}
          width={24}
          height={24}
          rx={4}
          fill={tile.color}
        />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   SHOWCASE CARDS DATA (Tailored to ARKA Technovation)
   ───────────────────────────────────────────────────────────── */
const SHOWCASE_CARDS: ShowcaseCardItem[] = [
  {
    id: 'card-live-data',
    bottomTitle: 'Data that stays live',
    mosaicVariant: 'terracotta',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          EDGE CACHE · QUERY
        </div>
        <div className="font-mono text-xs sm:text-[13px] text-zinc-800 leading-snug mb-2 font-medium">
          <span className="text-blue-600">usePipeline</span>
          <span className="text-zinc-600">(</span>
          <span className="text-amber-700">Deal</span>
          <span className="text-zinc-600">, &#123; </span>
          <span className="text-purple-600">status: &quot;converted&quot;</span>
          <span className="text-zinc-600"> &#125;)</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between">
          <span>1,500+ clients</span>
          <span className="text-zinc-400">·</span>
          <span>0.4s edge hit</span>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-1',
      title: 'Precision Engineering Exporter',
      category: 'Manufacturing · SEO & Fast Web',
      image: '/portfolite/proj-1.png',
      client: 'Rajesh Verma, Director',
      year: '2025',
      description:
        'Rebuilt sixty specification pages and headless Next.js catalog that unlocked verified buyer inquiries from Europe and North America.',
      deliverables: ['Intent SEO', 'Fast Web Platform', 'Edge Caching'],
      results: '+300% Organic Traffic',
    },
  },
  {
    id: 'card-scale-uptime',
    bottomTitle: 'Holds up at scale',
    mosaicVariant: 'mauve',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          UPTIME · 365 DAYS
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-1">
          99.98%
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          zero downtime across 850+ deployments
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-2',
      title: 'Enterprise Multi-Branch CRM',
      category: 'Custom ERP & WhatsApp Sync',
      image: '/portfolite/proj-4.jpg',
      client: 'Amit Patel, CEO',
      year: '2025',
      description:
        'High-availability multi-tier cloud ERP with role-based dashboards, automated approval matrices, and real-time Tally accounting sync.',
      deliverables: ['Custom CRM', 'Tally Sync', 'High Availability'],
      results: '99.98% Uptime · 12h Saved Weekly',
    },
  },
  {
    id: 'card-people-systems',
    bottomTitle: 'People and systems',
    mosaicVariant: 'graphite',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          CORE TEAM & ARCHITECTURE
        </div>
        <div className="space-y-2 text-xs sm:text-[13px] text-zinc-800 font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-blue-600 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M0 0 L0 14 L3.8 10.8 L6.5 16 L8.8 14.8 L6.2 9.4 L11 9.4 Z" />
            </svg>
            <span>17+ Years Leadership</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#E8742C] fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M0 0 L0 14 L3.8 10.8 L6.5 16 L8.8 14.8 L6.2 9.4 L11 9.4 Z" />
            </svg>
            <span>In-house Engineers & Growth</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-3',
      title: 'Meridian Healthcare Portal',
      category: 'UX Design & Patient Booking',
      image: '/portfolite/proj-6.png',
      client: 'Sneha Kulkarni, CMO',
      year: '2025',
      description:
        'Direct partnership with in-house design and engineering teams — seamless patient booking experience with zero outsourcing.',
      deliverables: ['Patient Portal', 'Design System', 'Local SEO'],
      results: '3.4× Booking Lift',
    },
  },
  {
    id: 'card-search-domain',
    bottomTitle: 'Search dominance that stays',
    mosaicVariant: 'sand',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          SEARCH DOMAIN
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-zinc-800 font-medium text-[11px] truncate">arkatechnovation.com</span>
            </div>
            <span className="text-zinc-600 text-[10.5px] bg-white/70 px-1.5 py-0.5 rounded border border-black/5 shrink-0">140+ #1</span>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-zinc-800 font-medium text-[11px] truncate">clientportal.enterprise.io</span>
            </div>
            <span className="text-zinc-600 text-[10.5px] bg-white/70 px-1.5 py-0.5 rounded border border-black/5 shrink-0">live</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-4',
      title: 'Industrial Plant Nationwide',
      category: 'Search Engine Domination',
      image: '/portfolite/proj-5.png',
      client: 'Business Head, Industrial Plant',
      year: '2024',
      description:
        'Modular city-page architecture and Google Business Profile optimization across 9 key manufacturing clusters.',
      deliverables: ['Multi-City SEO', 'Technical Schema', 'Lead Capture'],
      results: '140+ #1 Rankings',
    },
  },
  {
    id: 'card-signups-today',
    bottomTitle: 'Real users, day one',
    mosaicVariant: 'navy',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          QUALIFIED LEADS · MONTHLY
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-1">
          1,204
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          +18% organic growth vs last month
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-5',
      title: 'Maison D2C Online Store',
      category: 'E-Commerce · Checkout Rebuild',
      image: '/portfolite/proj-2.png',
      client: 'Priya Sharma, Founder',
      year: '2025',
      description:
        'Headless storefront with 1.4s load time, streamlined checkout funnel, and full-funnel remarketing acquisition.',
      deliverables: ['Headless Storefront', 'Checkout Rebuild', 'Meta Ads'],
      results: '+60% Revenue · 1,204 Leads',
    },
  },
  {
    id: 'card-attribution-roi',
    bottomTitle: 'Compounding revenue',
    mosaicVariant: 'emerald',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          ATTRIBUTION · ROAS
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-1">
          4.6×
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          average ROAS · 2.1M verified views
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-6',
      title: 'Northline Heavy Industries',
      category: 'Corporate Film & TVC',
      image: '/portfolite/proj-3.png',
      client: 'Marketing Head, Northline',
      year: '2024',
      description:
        'Cinematic brand film shot across two manufacturing hubs, distributed with an account-based campaign to 900 institutional buyers.',
      deliverables: ['Brand Film', 'Factory Cinematography', 'Social Cuts'],
      results: '2.1M Views · 4.6× ROAS',
    },
  },
];

export default function PortfoliteRecentWorksCarousel() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mouse drag-to-scroll interaction state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 5) {
      setDragMoved(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleCardClick = (project: ProjectData) => {
    if (dragMoved) return;
    setSelectedProject(project);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] text-black font-framer overflow-hidden border-t border-black/10">
      {/* ── Top Header matching the design reference ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.08]">
              Build incredible digital products, completely scalable.
            </h2>
          </div>

          {/* Right Subtitle & Action */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-6">
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-md lg:text-left">
              From idea to deployed software with compounding search dominance — engineer your digital products with in-house technical architecture and verifiable growth.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors text-sm font-medium shadow-sm hover:shadow"
              >
                <span>Start building</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Desktop Scroll Chevrons */}
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <button
                  onClick={scrollPrev}
                  aria-label="Scroll previous card"
                  className="w-10 h-10 rounded-full border border-black/15 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Scroll next card"
                  className="w-10 h-10 rounded-full border border-black/15 bg-white hover:bg-zinc-100 flex items-center justify-center text-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Overflowing Horizontal Card Deck ── */}
      <div className="relative w-full">
        {/* Soft edge gradient fade masks */}
        <div className="hidden md:block absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-[#FAF9F5] to-transparent z-20 pointer-events-none" />
        <div className="hidden md:block absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-[#FAF9F5] to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="w-full overflow-x-auto scrollbar-none flex gap-5 sm:gap-6 px-4 sm:px-6 lg:px-8 py-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          {SHOWCASE_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.projectData)}
              className="w-[290px] sm:w-[320px] md:w-[340px] shrink-0 rounded-[26px] sm:rounded-[30px] bg-[#EFECE6] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 snap-start border border-black/5 cursor-pointer group"
            >
              {/* Top Visual Area with Mosaic and Floating Frosted Glass Card */}
              <div className="relative w-full h-[240px] sm:h-[250px] rounded-2xl overflow-hidden flex items-center justify-center p-3">
                {/* Mosaic Background Matrix */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <MosaicCanvas variant={card.mosaicVariant} />
                </div>

                {/* Floating Frosted Glass Card */}
                <div className="relative z-10 w-full max-w-[260px] rounded-2xl bg-white/85 backdrop-blur-md p-4 sm:p-5 shadow-[0_14px_30px_rgba(0,0,0,0.08)] border border-white/90 transition-transform duration-300 group-hover:scale-[1.02]">
                  {card.glassWidget}
                </div>
              </div>

              {/* Bottom Title & Action Hint */}
              <div className="mt-6 pt-1 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-black tracking-tight leading-snug">
                  {card.bottomTitle}
                </h3>
                <div className="w-7 h-7 rounded-full border border-black/15 bg-white/80 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center text-zinc-700 shrink-0 ml-2">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
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