import React, { useState } from 'react';
import { Swords, CheckCircle2 } from 'lucide-react';
import { MOCK_PROMPTS } from '../../constants';

export const Battle: React.FC = () => {
  const [voted, setVoted] = useState<number | null>(null);

  const handleVote = (index: number) => {
    setVoted(index);
    // In a real app, this would fetch the next pair after a delay
    setTimeout(() => {
        setVoted(null);
    }, 2000);
  };

  const p1 = MOCK_PROMPTS[0];
  const p2 = MOCK_PROMPTS[2];

  return (
    <div className="animate-fade-in flex flex-col h-[calc(100vh-8rem)] items-center justify-center">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 mb-4">
            <Swords className="w-6 h-6 text-indigo-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Prompt Arena</h2>
        <p className="text-slate-400">Vote for the prompt that delivers better results.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl items-stretch">
        {/* Card 1 */}
        <div 
            onClick={() => !voted && handleVote(1)}
            className={`flex-1 relative cursor-pointer group transition-all duration-500 transform ${
                voted === 1 
                ? 'scale-105 ring-4 ring-green-500/50' 
                : voted === 2 
                    ? 'opacity-50 scale-95 blur-sm' 
                    : 'hover:scale-[1.02]'
            }`}
        >
            <div className="h-full bg-slate-900 border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden">
                {voted === 1 && (
                    <div className="absolute inset-0 bg-green-500/10 z-10 flex items-center justify-center">
                        <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                    </div>
                )}
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Contender A</div>
                <h3 className="text-xl font-bold text-white mb-4">{p1.title}</h3>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-sm text-slate-400 leading-relaxed flex-1">
                    {p1.content}
                </div>
                 <div className="mt-6 text-center">
                    <span className="inline-block px-6 py-2 rounded-full bg-white/5 text-white font-bold text-sm group-hover:bg-indigo-600 transition-colors">
                        Vote A
                    </span>
                 </div>
            </div>
        </div>

        {/* VS Badge */}
        <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-950 flex items-center justify-center font-black text-white italic z-20">
                VS
            </div>
        </div>

        {/* Card 2 */}
        <div 
             onClick={() => !voted && handleVote(2)}
             className={`flex-1 relative cursor-pointer group transition-all duration-500 transform ${
                voted === 2 
                ? 'scale-105 ring-4 ring-green-500/50' 
                : voted === 1 
                    ? 'opacity-50 scale-95 blur-sm' 
                    : 'hover:scale-[1.02]'
            }`}
        >
             <div className="h-full bg-slate-900 border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden">
                {voted === 2 && (
                    <div className="absolute inset-0 bg-green-500/10 z-10 flex items-center justify-center">
                        <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                    </div>
                )}
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Contender B</div>
                <h3 className="text-xl font-bold text-white mb-4">{p2.title}</h3>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-mono text-sm text-slate-400 leading-relaxed flex-1">
                    {p2.content}
                </div>
                 <div className="mt-6 text-center">
                    <span className="inline-block px-6 py-2 rounded-full bg-white/5 text-white font-bold text-sm group-hover:bg-indigo-600 transition-colors">
                        Vote B
                    </span>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};
