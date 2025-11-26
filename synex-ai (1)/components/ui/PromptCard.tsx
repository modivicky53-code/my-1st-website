import React, { useState, useRef } from 'react';
import { Prompt } from '../../types';
import { Copy, Heart, Share2, Crown, Bookmark, Cpu, Play, Dna } from 'lucide-react';
import { Button } from './Button';

interface PromptCardProps {
  prompt: Prompt;
  onCopy?: () => void;
  onRun?: (prompt: Prompt) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, onCopy, onRun }) => {
  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  // Hologram Refs
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    if (onCopy) onCopy();
    setTimeout(() => setCopied(false), 2000);
  };

  const getModelColor = (model: string) => {
    switch (model) {
        case 'GPT-4': return 'text-green-400 bg-green-400/10 border-green-400/20';
        case 'Claude': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
        case 'Midjourney': return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
        case 'Gemini': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full w-full"
    >
      {/* Hologram Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.1), transparent 40%)`
        }}
      />
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.4), transparent 40%)`,
            maskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black, transparent)`
        }} 
      />

      {/* Premium Badge */}
      {prompt.isPremium && (
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-amber-500/20 to-transparent p-2 rounded-bl-xl border-b border-l border-amber-500/20 z-10">
          <Crown className="w-4 h-4 text-amber-400" />
        </div>
      )}

      {/* Header */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20 shadow-[0_0_10px_-4px_#6366f1]">
                {prompt.category}
            </span>
            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 ${getModelColor(prompt.model)}`}>
                <Cpu className="w-3 h-3" />
                {prompt.model}
            </span>
            {prompt.dnaPattern && (
                 <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border border-slate-700 bg-slate-800 flex items-center gap-1 text-slate-400 animate-pulse-glow">
                    <Dna className="w-3 h-3" /> DNA
                </span>
            )}
        </div>
        <h3 className="text-lg font-semibold text-slate-100 leading-tight group-hover:text-indigo-400 transition-colors line-clamp-1 font-display tracking-tight">
          {prompt.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">by {prompt.author}</p>
      </div>

      {/* Content Preview */}
      <div className="relative mb-4 flex-1 group/content z-10">
        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed font-mono bg-slate-950/50 p-3 rounded-lg border border-white/5 h-full group-hover/content:border-indigo-500/20 transition-colors">
          {prompt.content}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none" />
        
        {/* Quick Action Overlay */}
        {onRun && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/content:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-[2px] rounded-lg cursor-pointer" onClick={(e) => {e.stopPropagation(); onRun(prompt)}}>
                 <Button size="sm" icon={<Play className="w-3 h-3" />} className="shadow-[0_0_20px_rgba(99,102,241,0.5)] magnetic-btn">
                    Run in Studio
                 </Button>
            </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto relative z-10">
        <div className="flex items-center gap-3">
            <button 
                onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                className={`transition-all hover:scale-110 flex items-center gap-1.5 p-1 -ml-1 rounded-md active:bg-white/5 ${isLiked ? 'text-red-400' : 'text-slate-500 hover:text-red-400'}`}
            >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-400' : ''}`} />
                <span className="text-xs font-medium">{prompt.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
                className={`transition-all hover:scale-110 flex items-center gap-1.5 p-1 rounded-md active:bg-white/5 ${isSaved ? 'text-indigo-400' : 'text-slate-500 hover:text-indigo-400'}`}
            >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-indigo-400' : ''}`} />
                <span className="text-xs font-medium">{prompt.saves + (isSaved ? 1 : 0)}</span>
            </button>
        </div>

        <div className="flex items-center gap-2">
            <Button 
                variant="ghost" 
                size="sm" 
                className={`h-8 px-2 ${copied ? 'text-green-400' : 'text-slate-400'}`}
                onClick={handleCopy}
            >
                {copied ? <span className="text-xs font-bold">Copied</span> : <Copy className="w-3.5 h-3.5" />}
            </Button>
        </div>
      </div>
    </div>
  );
};