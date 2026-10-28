'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
   DYNAMIC MOSAIC TILE MAPS (11 Columns × 8 Rows)
   ───────────────────────────────────────────────────────────── */
interface Tile {
  col: number;
  row: number;
  color: string;
}

const MOSAIC_TILES: Record<string, Tile[]> = {
  terracotta: [
    // Row 0
    { col: 0, row: 0, color: '#381407' },
    { col: 1, row: 0, color: '#5E1F0A' },
    { col: 2, row: 0, color: '#96340B' },
    { col: 3, row: 0, color: '#BD4411' },
    { col: 4, row: 0, color: '#E8742C' },
    { col: 6, row: 0, color: '#E8742C' },
    { col: 7, row: 0, color: '#BD4411' },
    { col: 8, row: 0, color: '#96340B' },
    { col: 9, row: 0, color: '#5E1F0A' },
    { col: 10, row: 0, color: '#381407' },
    // Row 1
    { col: 0, row: 1, color: '#5E1F0A' },
    { col: 1, row: 1, color: '#96340B' },
    { col: 2, row: 1, color: '#BD4411' },
    { col: 3, row: 1, color: '#E8742C' },
    { col: 5, row: 1, color: '#E8742C' },
    { col: 7, row: 1, color: '#E8742C' },
    { col: 8, row: 1, color: '#BD4411' },
    { col: 9, row: 1, color: '#96340B' },
    { col: 10, row: 1, color: '#5E1F0A' },
    // Row 2
    { col: 0, row: 2, color: '#96340B' },
    { col: 1, row: 2, color: '#BD4411' },
    { col: 2, row: 2, color: '#E8742C' },
    { col: 8, row: 2, color: '#E8742C' },
    { col: 9, row: 2, color: '#BD4411' },
    { col: 10, row: 2, color: '#96340B' },
    // Row 3
    { col: 0, row: 3, color: '#BD4411' },
    { col: 1, row: 3, color: '#E8742C' },
    { col: 9, row: 3, color: '#E8742C' },
    { col: 10, row: 3, color: '#BD4411' },
    // Row 4
    { col: 0, row: 4, color: '#E8742C' },
    { col: 1, row: 4, color: '#F3985D' },
    { col: 2, row: 4, color: '#F3985D' },
    { col: 8, row: 4, color: '#F3985D' },
    { col: 9, row: 4, color: '#F3985D' },
    { col: 10, row: 4, color: '#E8742C' },
    // Row 5
    { col: 0, row: 5, color: '#F3985D' },
    { col: 1, row: 5, color: '#FABD97' },
    { col: 2, row: 5, color: '#FABD97' },
    { col: 4, row: 5, color: '#F3985D' },
    { col: 6, row: 5, color: '#F3985D' },
    { col: 8, row: 5, color: '#FABD97' },
    { col: 9, row: 5, color: '#FABD97' },
    { col: 10, row: 5, color: '#F3985D' },
    // Row 6
    { col: 0, row: 6, color: '#FABD97' },
    { col: 1, row: 6, color: '#FDE6D7' },
    { col: 3, row: 6, color: '#FABD97' },
    { col: 5, row: 6, color: '#FABD97' },
    { col: 7, row: 6, color: '#FABD97' },
    { col: 9, row: 6, color: '#FDE6D7' },
    { col: 10, row: 6, color: '#FABD97' },
    // Row 7
    { col: 1, row: 7, color: '#FDE6D7' },
    { col: 3, row: 7, color: '#FDE6D7' },
    { col: 5, row: 7, color: '#FDE6D7' },
    { col: 7, row: 7, color: '#FDE6D7' },
    { col: 9, row: 7, color: '#FDE6D7' },
  ],
  mauve: [
    // Row 0
    { col: 1, row: 0, color: '#4B3750' },
    { col: 2, row: 0, color: '#6C4F72' },
    { col: 4, row: 0, color: '#4B3750' },
    { col: 5, row: 0, color: '#6C4F72' },
    { col: 7, row: 0, color: '#4B3750' },
    { col: 8, row: 0, color: '#302333' },
    { col: 9, row: 0, color: '#4B3750' },
    { col: 10, row: 0, color: '#6C4F72' },
    // Row 1
    { col: 0, row: 1, color: '#6C4F72' },
    { col: 1, row: 1, color: '#8E6B97' },
    { col: 3, row: 1, color: '#6C4F72' },
    { col: 4, row: 1, color: '#8E6B97' },
    { col: 6, row: 1, color: '#6C4F72' },
    { col: 8, row: 1, color: '#8E6B97' },
    { col: 9, row: 1, color: '#4B3750' },
    { col: 10, row: 1, color: '#8E6B97' },
    // Row 2
    { col: 0, row: 2, color: '#8E6B97' },
    { col: 1, row: 2, color: '#8E6B97' },
    { col: 2, row: 2, color: '#B28FBD' },
    { col: 8, row: 2, color: '#B28FBD' },
    { col: 9, row: 2, color: '#8E6B97' },
    { col: 10, row: 2, color: '#8E6B97' },
    // Row 3
    { col: 0, row: 3, color: '#B28FBD' },
    { col: 1, row: 3, color: '#B28FBD' },
    { col: 9, row: 3, color: '#B28FBD' },
    { col: 10, row: 3, color: '#B28FBD' },
    // Row 4
    { col: 0, row: 4, color: '#B28FBD' },
    { col: 1, row: 4, color: '#CFB5D7' },
    { col: 8, row: 4, color: '#CFB5D7' },
    { col: 9, row: 4, color: '#CFB5D7' },
    { col: 10, row: 4, color: '#B28FBD' },
    // Row 5
    { col: 0, row: 5, color: '#CFB5D7' },
    { col: 1, row: 5, color: '#E7D7EC' },
    { col: 3, row: 5, color: '#CFB5D7' },
    { col: 5, row: 5, color: '#CFB5D7' },
    { col: 7, row: 5, color: '#CFB5D7' },
    { col: 9, row: 5, color: '#E7D7EC' },
    { col: 10, row: 5, color: '#CFB5D7' },
    // Row 6
    { col: 0, row: 6, color: '#E7D7EC' },
    { col: 2, row: 6, color: '#E7D7EC' },
    { col: 4, row: 6, color: '#E7D7EC' },
    { col: 6, row: 6, color: '#E7D7EC' },
    { col: 8, row: 6, color: '#E7D7EC' },
    { col: 10, row: 6, color: '#E7D7EC' },
    // Row 7
    { col: 1, row: 7, color: '#F5EDF8' },
    { col: 3, row: 7, color: '#F5EDF8' },
    { col: 5, row: 7, color: '#F5EDF8' },
    { col: 7, row: 7, color: '#F5EDF8' },
    { col: 9, row: 7, color: '#F5EDF8' },
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
    { col: 10, row: 0, color: '#1C1C1E' },
    // Row 1
    { col: 0, row: 1, color: '#2C2C2E' },
    { col: 1, row: 1, color: '#48484A' },
    { col: 3, row: 1, color: '#48484A' },
    { col: 4, row: 1, color: '#636366' },
    { col: 6, row: 1, color: '#48484A' },
    { col: 8, row: 1, color: '#48484A' },
    { col: 9, row: 1, color: '#48484A' },
    { col: 10, row: 1, color: '#2C2C2E' },
    // Row 2
    { col: 0, row: 2, color: '#48484A' },
    { col: 1, row: 2, color: '#636366' },
    { col: 2, row: 2, color: '#8E8E93' },
    { col: 8, row: 2, color: '#8E8E93' },
    { col: 9, row: 2, color: '#636366' },
    { col: 10, row: 2, color: '#48484A' },
    // Row 3
    { col: 0, row: 3, color: '#636366' },
    { col: 1, row: 3, color: '#8E8E93' },
    { col: 9, row: 3, color: '#8E8E93' },
    { col: 10, row: 3, color: '#636366' },
    // Row 4
    { col: 0, row: 4, color: '#8E8E93' },
    { col: 1, row: 4, color: '#AEAEB2' },
    { col: 8, row: 4, color: '#AEAEB2' },
    { col: 9, row: 4, color: '#AEAEB2' },
    { col: 10, row: 4, color: '#8E8E93' },
    // Row 5
    { col: 0, row: 5, color: '#AEAEB2' },
    { col: 1, row: 5, color: '#C7C7CC' },
    { col: 3, row: 5, color: '#AEAEB2' },
    { col: 5, row: 5, color: '#AEAEB2' },
    { col: 7, row: 5, color: '#AEAEB2' },
    { col: 9, row: 5, color: '#C7C7CC' },
    { col: 10, row: 5, color: '#AEAEB2' },
    // Row 6
    { col: 0, row: 6, color: '#C7C7CC' },
    { col: 2, row: 6, color: '#C7C7CC' },
    { col: 4, row: 6, color: '#C7C7CC' },
    { col: 6, row: 6, color: '#C7C7CC' },
    { col: 8, row: 6, color: '#C7C7CC' },
    { col: 10, row: 6, color: '#C7C7CC' },
    // Row 7
    { col: 1, row: 7, color: '#E5E5EA' },
    { col: 3, row: 7, color: '#E5E5EA' },
    { col: 5, row: 7, color: '#E5E5EA' },
    { col: 7, row: 7, color: '#E5E5EA' },
    { col: 9, row: 7, color: '#E5E5EA' },
  ],
  sand: [
    // Row 0
    { col: 0, row: 0, color: '#706253' },
    { col: 1, row: 0, color: '#52473C' },
    { col: 3, row: 0, color: '#706253' },
    { col: 4, row: 0, color: '#52473C' },
    { col: 6, row: 0, color: '#706253' },
    { col: 7, row: 0, color: '#52473C' },
    { col: 8, row: 0, color: '#383129' },
    { col: 9, row: 0, color: '#52473C' },
    { col: 10, row: 0, color: '#706253' },
    // Row 1
    { col: 0, row: 1, color: '#706253' },
    { col: 2, row: 1, color: '#91806D' },
    { col: 3, row: 1, color: '#706253' },
    { col: 5, row: 1, color: '#91806D' },
    { col: 7, row: 1, color: '#706253' },
    { col: 8, row: 1, color: '#91806D' },
    { col: 9, row: 1, color: '#52473C' },
    { col: 10, row: 1, color: '#91806D' },
    // Row 2
    { col: 0, row: 2, color: '#91806D' },
    { col: 1, row: 2, color: '#91806D' },
    { col: 2, row: 2, color: '#B3A18E' },
    { col: 8, row: 2, color: '#B3A18E' },
    { col: 9, row: 2, color: '#91806D' },
    { col: 10, row: 2, color: '#91806D' },
    // Row 3
    { col: 0, row: 3, color: '#B3A18E' },
    { col: 1, row: 3, color: '#B3A18E' },
    { col: 9, row: 3, color: '#B3A18E' },
    { col: 10, row: 3, color: '#B3A18E' },
    // Row 4
    { col: 0, row: 4, color: '#B3A18E' },
    { col: 1, row: 4, color: '#CFC0AF' },
    { col: 8, row: 4, color: '#CFC0AF' },
    { col: 9, row: 4, color: '#CFC0AF' },
    { col: 10, row: 4, color: '#B3A18E' },
    // Row 5
    { col: 0, row: 5, color: '#CFC0AF' },
    { col: 1, row: 5, color: '#E4D9CC' },
    { col: 3, row: 5, color: '#CFC0AF' },
    { col: 5, row: 5, color: '#CFC0AF' },
    { col: 7, row: 5, color: '#CFC0AF' },
    { col: 9, row: 5, color: '#E4D9CC' },
    { col: 10, row: 5, color: '#CFC0AF' },
    // Row 6
    { col: 0, row: 6, color: '#E4D9CC' },
    { col: 2, row: 6, color: '#E4D9CC' },
    { col: 4, row: 6, color: '#E4D9CC' },
    { col: 6, row: 6, color: '#E4D9CC' },
    { col: 8, row: 6, color: '#E4D9CC' },
    { col: 10, row: 6, color: '#E4D9CC' },
    // Row 7
    { col: 1, row: 7, color: '#F2ECE4' },
    { col: 3, row: 7, color: '#F2ECE4' },
    { col: 5, row: 7, color: '#F2ECE4' },
    { col: 7, row: 7, color: '#F2ECE4' },
    { col: 9, row: 7, color: '#F2ECE4' },
  ],
  navy: [
    // Row 0
    { col: 0, row: 0, color: '#081429' },
    { col: 1, row: 0, color: '#0E234B' },
    { col: 2, row: 0, color: '#163974' },
    { col: 4, row: 0, color: '#1D4ED8' },
    { col: 5, row: 0, color: '#0E234B' },
    { col: 6, row: 0, color: '#163974' },
    { col: 7, row: 0, color: '#081429' },
    { col: 8, row: 0, color: '#0E234B' },
    { col: 9, row: 0, color: '#163974' },
    { col: 10, row: 0, color: '#1D4ED8' },
    // Row 1
    { col: 0, row: 1, color: '#0E234B' },
    { col: 1, row: 1, color: '#163974' },
    { col: 2, row: 1, color: '#1D4ED8' },
    { col: 3, row: 1, color: '#2563EB' },
    { col: 5, row: 1, color: '#1D4ED8' },
    { col: 7, row: 1, color: '#2563EB' },
    { col: 8, row: 1, color: '#163974' },
    { col: 9, row: 1, color: '#1D4ED8' },
    { col: 10, row: 1, color: '#2563EB' },
    // Row 2
    { col: 0, row: 2, color: '#163974' },
    { col: 1, row: 2, color: '#1D4ED8' },
    { col: 2, row: 2, color: '#2563EB' },
    { col: 8, row: 2, color: '#2563EB' },
    { col: 9, row: 2, color: '#1D4ED8' },
    { col: 10, row: 2, color: '#163974' },
    // Row 3
    { col: 0, row: 3, color: '#1D4ED8' },
    { col: 1, row: 3, color: '#2563EB' },
    { col: 9, row: 3, color: '#3B82F6' },
    { col: 10, row: 3, color: '#2563EB' },
    // Row 4
    { col: 0, row: 4, color: '#2563EB' },
    { col: 1, row: 4, color: '#3B82F6' },
    { col: 8, row: 4, color: '#3B82F6' },
    { col: 9, row: 4, color: '#60A5FA' },
    { col: 10, row: 4, color: '#3B82F6' },
    // Row 5
    { col: 0, row: 5, color: '#3B82F6' },
    { col: 1, row: 5, color: '#60A5FA' },
    { col: 3, row: 5, color: '#3B82F6' },
    { col: 5, row: 5, color: '#3B82F6' },
    { col: 7, row: 5, color: '#60A5FA' },
    { col: 9, row: 5, color: '#93C5FD' },
    { col: 10, row: 5, color: '#60A5FA' },
    // Row 6
    { col: 0, row: 6, color: '#60A5FA' },
    { col: 2, row: 6, color: '#93C5FD' },
    { col: 4, row: 6, color: '#60A5FA' },
    { col: 6, row: 6, color: '#93C5FD' },
    { col: 8, row: 6, color: '#93C5FD' },
    { col: 10, row: 6, color: '#93C5FD' },
    // Row 7
    { col: 1, row: 7, color: '#DBEAFE' },
    { col: 3, row: 7, color: '#DBEAFE' },
    { col: 5, row: 7, color: '#DBEAFE' },
    { col: 7, row: 7, color: '#DBEAFE' },
    { col: 9, row: 7, color: '#DBEAFE' },
  ],
  emerald: [
    // Row 0
    { col: 0, row: 0, color: '#064E3B' },
    { col: 1, row: 0, color: '#032B20' },
    { col: 2, row: 0, color: '#064E3B' },
    { col: 4, row: 0, color: '#065F46' },
    { col: 5, row: 0, color: '#047857' },
    { col: 7, row: 0, color: '#065F46' },
    { col: 8, row: 0, color: '#064E3B' },
    { col: 9, row: 0, color: '#032B20' },
    { col: 10, row: 0, color: '#065F46' },
    // Row 1
    { col: 0, row: 1, color: '#064E3B' },
    { col: 1, row: 1, color: '#065F46' },
    { col: 2, row: 1, color: '#047857' },
    { col: 3, row: 1, color: '#059669' },
    { col: 6, row: 1, color: '#059669' },
    { col: 7, row: 1, color: '#047857' },
    { col: 8, row: 1, color: '#065F46' },
    { col: 9, row: 1, color: '#047857' },
    { col: 10, row: 1, color: '#059669' },
    // Row 2
    { col: 0, row: 2, color: '#065F46' },
    { col: 1, row: 2, color: '#047857' },
    { col: 2, row: 2, color: '#059669' },
    { col: 8, row: 2, color: '#059669' },
    { col: 9, row: 2, color: '#047857' },
    { col: 10, row: 2, color: '#065F46' },
    // Row 3
    { col: 0, row: 3, color: '#047857' },
    { col: 1, row: 3, color: '#059669' },
    { col: 9, row: 3, color: '#10B981' },
    { col: 10, row: 3, color: '#059669' },
    // Row 4
    { col: 0, row: 4, color: '#059669' },
    { col: 1, row: 4, color: '#10B981' },
    { col: 8, row: 4, color: '#10B981' },
    { col: 9, row: 4, color: '#34D399' },
    { col: 10, row: 4, color: '#10B981' },
    // Row 5
    { col: 0, row: 5, color: '#10B981' },
    { col: 1, row: 5, color: '#34D399' },
    { col: 3, row: 5, color: '#10B981' },
    { col: 5, row: 5, color: '#10B981' },
    { col: 7, row: 5, color: '#34D399' },
    { col: 9, row: 5, color: '#6EE7B7' },
    { col: 10, row: 5, color: '#34D399' },
    // Row 6
    { col: 0, row: 6, color: '#34D399' },
    { col: 2, row: 6, color: '#6EE7B7' },
    { col: 4, row: 6, color: '#34D399' },
    { col: 6, row: 6, color: '#6EE7B7' },
    { col: 8, row: 6, color: '#6EE7B7' },
    { col: 10, row: 6, color: '#6EE7B7' },
    // Row 7
    { col: 1, row: 7, color: '#A7F3D0' },
    { col: 3, row: 7, color: '#A7F3D0' },
    { col: 5, row: 7, color: '#A7F3D0' },
    { col: 7, row: 7, color: '#A7F3D0' },
    { col: 9, row: 7, color: '#A7F3D0' },
  ],
};

function DynamicMosaicCanvas({ variant }: { variant: string }) {
  const tiles = MOSAIC_TILES[variant] || MOSAIC_TILES.terracotta;

  return (
    <svg
      viewBox="0 0 326 240"
      className="w-full h-full object-cover select-none pointer-events-none"
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
   SHOWCASE CARDS DATA (Generic for Software, Marketing & SEO)
   ───────────────────────────────────────────────────────────── */
const SHOWCASE_CARDS: ShowcaseCardItem[] = [
  {
    id: 'card-live-data',
    bottomTitle: 'Data that stays live',
    mosaicVariant: 'terracotta',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          REALTIME CACHE
        </div>
        <div className="font-mono text-xs sm:text-[13px] text-zinc-800 leading-snug mb-2 font-medium">
          <span className="text-blue-600">usePipeline</span>
          <span className="text-zinc-600">(</span>
          <span className="text-amber-700">Orders</span>
          <span className="text-zinc-600">, &#123; </span>
          <span className="text-purple-600">status: &quot;active&quot;</span>
          <span className="text-zinc-600"> &#125;)</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Edge verified</span>
          </span>
          <span className="text-zinc-400">·</span>
          <span>Live sync</span>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-1',
      title: 'Enterprise Web Platform',
      category: 'Custom Software · Web Engineering',
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
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          SYSTEM ARCHITECTURE
        </div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-1 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
          <span>Continuous Uptime</span>
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          High-availability cloud infrastructure
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-2',
      title: 'Cloud CRM & ERP Integration',
      category: 'Software Development · Cloud Systems',
      image: '/portfolite/proj-4.jpg',
      client: 'Chief Technology Officer',
      year: '2025',
      description:
        'Scalable multi-tier cloud CRM with role-based dashboards, automated approval matrices, and live enterprise sync.',
      deliverables: ['Custom CRM', 'ERP Sync', 'High Availability'],
      results: 'Enterprise Uptime & Efficiency',
    },
  },
  {
    id: 'card-people-systems',
    bottomTitle: 'People and systems',
    mosaicVariant: 'graphite',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          COLLABORATION
        </div>
        <div className="space-y-2 text-xs sm:text-[13px] text-zinc-800 font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-blue-600 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M0 0 L0 14 L3.8 10.8 L6.5 16 L8.8 14.8 L6.2 9.4 L11 9.4 Z" />
            </svg>
            <span>In-house Engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#E8742C] fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M0 0 L0 14 L3.8 10.8 L6.5 16 L8.8 14.8 L6.2 9.4 L11 9.4 Z" />
            </svg>
            <span>Dedicated Growth Team</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-3',
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
    id: 'card-search-domain',
    bottomTitle: 'Search dominance that stays',
    mosaicVariant: 'sand',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-2.5">
          SEARCH & WEB VISIBILITY
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-zinc-800 font-medium text-[11px] truncate">Search Visibility</span>
            </div>
            <span className="text-zinc-600 text-[10.5px] bg-white/70 px-2 py-0.5 rounded border border-black/5 shrink-0">Page 1</span>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-zinc-800 font-medium text-[11px] truncate">Organic Indexing</span>
            </div>
            <span className="text-zinc-600 text-[10.5px] bg-white/70 px-2 py-0.5 rounded border border-black/5 shrink-0">Live</span>
          </div>
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-4',
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
  {
    id: 'card-signups-today',
    bottomTitle: 'Real users, day one',
    mosaicVariant: 'navy',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          GROWTH PIPELINE
        </div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-1">
          Active Demand
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          Continuous inbound buyer traffic
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-5',
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
    id: 'card-attribution-roi',
    bottomTitle: 'Compounding revenue',
    mosaicVariant: 'emerald',
    glassWidget: (
      <div className="text-left w-full">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-1.5">
          ATTRIBUTION & ROI
        </div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-1">
          Profitable Growth
        </div>
        <div className="text-xs text-zinc-500 font-medium">
          Full-funnel attribution and scalable return
        </div>
      </div>
    ),
    projectData: {
      id: 'showcase-6',
      title: 'Industrial Brand Media & Campaign',
      category: 'Content Marketing & Video Production',
      image: '/portfolite/proj-3.png',
      client: 'Marketing Head',
      year: '2024',
      description:
        'Cinematic brand media and account-based digital campaigns tailored to enterprise decision makers.',
      deliverables: ['Brand Film', 'Content Strategy', 'Targeted Distribution'],
      results: 'Qualified Inbound Pipeline',
    },
  },
];

export default function PortfoliteRecentWorksCarousel() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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

        {/* Infinite Rotating Marquee Track */}
        <div className="flex animate-marquee-showcase gap-6 sm:gap-7 w-max will-change-transform">
          {[...SHOWCASE_CARDS, ...SHOWCASE_CARDS].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => setSelectedProject(card.projectData)}
              className="relative w-[310px] sm:w-[340px] h-[450px] sm:h-[470px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#F4F2EE] overflow-hidden flex flex-col justify-between select-none cursor-pointer group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-black/5"
            >
              {/* Upper Area: Dynamic Breathing Pixel Canvas with Centered Floating Glass Card */}
              <div className="relative w-full h-[290px] pt-4 px-3 flex items-center justify-center overflow-hidden">
                {/* Dynamic Background Mosaic */}
                <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                  <DynamicMosaicCanvas variant={card.mosaicVariant} />
                </div>

                {/* Floating Frosted Glass Card in Center */}
                <div className="relative z-10 w-full max-w-[270px] rounded-2xl bg-white/80 backdrop-blur-md p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.07)] border border-white/90 group-hover:bg-white/90 transition-all duration-300 group-hover:scale-[1.02]">
                  {card.glassWidget}
                </div>
              </div>

              {/* Lower Area: Bold bottom title, clean & authentic to reference design */}
              <div className="p-6 sm:p-7 pt-2 pb-6">
                <h3 className="text-xl sm:text-[22px] font-bold text-black tracking-tight leading-[1.25]">
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