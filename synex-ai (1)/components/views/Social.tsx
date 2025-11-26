import React, { useEffect, useState } from 'react';
import { MOCK_PROMPTS, MOCK_USER } from '../../constants';
import { PromptCard } from '../ui/PromptCard';
import { Network, MessageCircle, UserPlus, Radio } from 'lucide-react';

export const Social: React.FC = () => {
  const [stream, setStream] = useState(MOCK_PROMPTS);

  // Neural Stream Simulation: Injects "new" content dynamically
  useEffect(() => {
    const interval = setInterval(() => {
        // Shift array to simulate dynamic feed
        setStream(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    }, 8000); // Updates every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-fade-in grid grid-cols-12 gap-8">
      {/* Main Feed */}
      <div className="col-span-8 space-y-6">
        <header className="flex items-center justify-between mb-8">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Radio className="w-6 h-6 text-red-500 animate-pulse" />
                    Neural Stream
                </h2>
                <p className="text-slate-400">Real-time feed personalized to your neural architecture.</p>
            </div>
        </header>

        <div className="space-y-6">
            {stream.map((prompt, i) => (
                <div key={`${prompt.id}-${i}`} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <PromptCard prompt={prompt} />
                </div>
            ))}
        </div>
      </div>

      {/* Social Graph Sidebar */}
      <div className="col-span-4 space-y-6">
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5 text-indigo-400" />
                  Your Network
              </h3>
              <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10" />
                              <div>
                                  <div className="text-sm font-bold text-slate-200">Creator {i}</div>
                                  <div className="text-xs text-slate-500">@creator{i}</div>
                              </div>
                          </div>
                          <button className="text-indigo-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                              <UserPlus className="w-4 h-4" />
                          </button>
                      </div>
                  ))}
              </div>
              <button className="w-full mt-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-400 transition-colors">
                  View All Connections
              </button>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <h3 className="text-xl font-bold text-white mb-1">{MOCK_USER.stats.reputationScore}</h3>
                <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider mb-4">Reputation Score</p>
                <div className="w-full bg-slate-900/50 rounded-full h-2 mb-2">
                    <div className="bg-indigo-500 h-2 rounded-full w-[85%]"></div>
                </div>
                <p className="text-[10px] text-slate-400">Top 2% of Creators</p>
          </div>
      </div>
    </div>
  );
};