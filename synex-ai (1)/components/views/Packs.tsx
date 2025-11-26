import React from 'react';
import { MOCK_PACKS } from '../../constants';
import { Package, Download, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export const Packs: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <header className="max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">Prompt Packs</h2>
        <p className="text-slate-400 text-lg">Curated collections of high-performance prompts. <br />Hand-picked by Synex engineers for specific workflows.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PACKS.map((pack) => (
            <div key={pack.id} className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
                {/* Cover Art */}
                <div className={`h-48 bg-gradient-to-br ${pack.coverGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className="relative z-10 flex justify-between items-start">
                         <span className="bg-black/30 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wide">
                            {pack.category}
                         </span>
                         {pack.price ? (
                            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                                ${pack.price}
                            </span>
                         ) : (
                            <span className="bg-emerald-500/20 text-emerald-300 backdrop-blur text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                                FREE
                            </span>
                         )}
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white leading-tight mb-1">{pack.title}</h3>
                        <p className="text-white/80 text-sm font-medium">{pack.author}</p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                        {pack.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-6 font-medium">
                        <div className="flex items-center gap-2">
                            <Package className="w-4 h-4" />
                            {pack.promptCount} Prompts
                        </div>
                        <div className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            {pack.downloads.toLocaleString()}
                        </div>
                    </div>

                    <Button className="w-full">
                        Get Pack
                    </Button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
