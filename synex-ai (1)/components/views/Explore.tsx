import React, { useState, useMemo } from 'react';
import { Prompt, PromptCategory, AIModel } from '../../types';
import { PromptCard } from '../ui/PromptCard';
import { Search, Filter, SlidersHorizontal, ChevronDown, Sparkles, Trophy, Clock, Bookmark } from 'lucide-react';

interface ExploreProps {
  prompts: Prompt[];
}

type SortOption = 'trending' | 'newest' | 'top_rated' | 'most_saved';

export const Explore: React.FC<ExploreProps> = ({ prompts }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedModel, setSelectedModel] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('trending');

  const categories = ['All', ...Object.values(PromptCategory)];
  const models: (AIModel | 'All')[] = ['All', 'GPT-4', 'Gemini', 'Claude', 'Midjourney', 'Stable Diffusion'];

  // Advanced Filtering & Sorting Logic
  const processedPrompts = useMemo(() => {
    let result = [...prompts];

    // 1. Search Filter
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.content.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 3. Model Filter
    if (selectedModel !== 'All') {
      result = result.filter(p => p.model === selectedModel);
    }

    // 4. Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'top_rated':
          return b.likes - a.likes;
        case 'most_saved':
          return b.saves - a.saves;
        case 'trending':
        default:
          // Simple trending algorithm: (Likes * 2) + Views + Saves
          const scoreA = (a.likes * 2) + a.views + (a.saves * 3);
          const scoreB = (b.likes * 2) + b.views + (b.saves * 3);
          return scoreB - scoreA;
      }
    });

    return result;
  }, [prompts, search, selectedCategory, selectedModel, sortBy]);

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <div>
            <h2 className="text-3xl font-bold text-white mb-2">Explore Library</h2>
            <p className="text-slate-400">Discover production-ready prompts from top engineers.</p>
        </div>
        
        {/* Hero Search Bar */}
        <div className="relative group max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border border-slate-700 rounded-2xl leading-5 bg-slate-900/80 backdrop-blur text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-xl shadow-black/20"
            placeholder="Search for 'react persona', 'midjourney v6', or 'seo blog'..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
             <span className="text-xs text-slate-600 border border-slate-800 rounded px-2 py-1">CMD+K</span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-20 z-30 bg-[#020617]/95 backdrop-blur-xl border-y border-white/5 py-4 -mx-8 px-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide mask-fade-right">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                  : 'bg-transparent text-slate-400 border-transparent hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters Right Side */}
        <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Model Selector */}
            <div className="relative">
                <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="appearance-none bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors cursor-pointer"
                >
                    {models.map(m => <option key={m} value={m}>Model: {m}</option>)}
                </select>
                <Filter className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Selector */}
            <div className="relative">
                <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors cursor-pointer"
                >
                    <option value="trending">Trending</option>
                    <option value="newest">Newest</option>
                    <option value="top_rated">Most Liked</option>
                    <option value="most_saved">Most Saved</option>
                </select>
                <SlidersHorizontal className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
        </div>
      </div>

      {/* Results Meta */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Showing {processedPrompts.length} results</span>
        <div className="flex items-center gap-4">
            {sortBy === 'trending' && <span className="flex items-center gap-1 text-indigo-400"><Sparkles className="w-3 h-3" /> Trending Algorithm</span>}
            {sortBy === 'newest' && <span className="flex items-center gap-1 text-indigo-400"><Clock className="w-3 h-3" /> Newest First</span>}
            {sortBy === 'top_rated' && <span className="flex items-center gap-1 text-indigo-400"><Trophy className="w-3 h-3" /> Highest Rated</span>}
            {sortBy === 'most_saved' && <span className="flex items-center gap-1 text-indigo-400"><Bookmark className="w-3 h-3" /> Most Saved</span>}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {processedPrompts.map(prompt => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>

      {processedPrompts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4 ring-1 ring-white/10">
            <Search className="w-8 h-8 text-slate-500" />
          </div>
          <h3 className="text-lg font-medium text-white mb-1">No prompts found</h3>
          <p className="text-slate-500 text-sm max-w-xs text-center">
            We couldn't find any prompts matching your filters. Try adjusting your search or category.
          </p>
          <button 
            onClick={() => {setSearch(''); setSelectedCategory('All'); setSelectedModel('All');}}
            className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};