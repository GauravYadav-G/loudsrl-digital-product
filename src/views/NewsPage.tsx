'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Clock, Calendar, ChevronRight, Sparkles } from 'lucide-react';
import PortfoliteNav from '@/components/portfolite/PortfoliteNav';
import PortfoliteFooter from '@/components/portfolite/PortfoliteFooter';
import { BLOG_POSTS, getBlogCategories, type BlogPost } from '@/lib/blogs';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => getBlogCategories(), []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-black font-framer selection:bg-[#B84E12] selection:text-white">
      {/* Floating Glassmorphic Top Navbar */}
      <PortfoliteNav />

      {/* Header Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-zinc-200 bg-zinc-50/60 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-[#B84E12] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-zinc-400" />
            <span className="text-zinc-900 font-medium">Latest News & Blog</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EF] text-[#B84E12] border border-[#E8742C]/25 text-xs font-mono font-medium mb-4">
              <Sparkles size={13} />
              <span>Articles & Engineering Notes</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#09090B] leading-[1.08] mb-5">
              Latest News & Engineering Blog
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Our take on design, technology and what makes digital products convert. In-depth case studies, benchmarks, and strategies from the ARKA team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-zinc-400 pointer-events-none" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or author..."
                className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-zinc-200 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-[#B84E12] focus:ring-2 focus:ring-[#B84E12]/10 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-xs font-mono text-zinc-400 hover:text-zinc-700 px-1.5 py-0.5 rounded bg-zinc-100"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer ${active
                      ? 'bg-[#09090B] text-white shadow-sm font-semibold'
                      : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-black'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 max-w-md mx-auto p-8">
            <p className="text-base font-semibold text-zinc-800 mb-2">No matching articles</p>
            <p className="text-sm text-zinc-500 mb-6">
              No demo blogs matched "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 rounded-full bg-[#09090B] text-white text-xs font-mono font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: BlogPost, idx: number) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-zinc-200/80 p-5 sm:p-6 hover:border-zinc-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <Link
                    href={`/news/${post.slug}`}
                    className="block aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/70 mb-5 relative"
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      width={500}
                      height={312}
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[11px] font-mono">
                      {post.category}
                    </span>
                  </Link>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/news/${post.slug}`} className="block">
                    <h3 className="text-lg font-bold tracking-tight text-[#09090B] group-hover:text-[#B84E12] transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-600 font-mono text-[11px]">
                    By {post.author.name}
                  </span>
                  <Link
                    href={`/news/${post.slug}`}
                    className="font-semibold text-zinc-900 group-hover:text-[#B84E12] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <PortfoliteFooter />
    </div>
  );
}

