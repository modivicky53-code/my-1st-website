import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { Prompt, UserStats } from '../../types';
import { PromptCard } from '../ui/PromptCard';
import { Flame, TrendingUp, BookOpen, Star } from 'lucide-react';

const activityData = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 32 },
  { name: 'Sat', value: 28 },
  { name: 'Sun', value: 45 },
];

interface DashboardProps {
  recentPrompts: Prompt[];
  stats: UserStats;
  onNavigate: (view: any) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ recentPrompts, stats, onNavigate }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-slate-400">Welcome back, Architect. You're on a roll!</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
                 <span className="text-xs text-slate-500 uppercase font-semibold">Daily Streak</span>
                 <div className="flex items-center gap-1.5 text-amber-500 font-bold text-lg">
                    <Flame className="w-5 h-5" fill="currentColor" />
                    {stats.streakDays} Days
                 </div>
            </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900/50 backdrop-blur border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-indigo-500/20 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-slate-400 text-sm font-medium">Total Prompts</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalPrompts}</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-purple-500/20 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Star className="w-5 h-5" />
            </div>
            <span className="text-slate-400 text-sm font-medium">Reputation</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.reputationScore.toLocaleString()}</p>
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-pink-500/20 transition-colors md:col-span-2">
            <div className="flex items-center justify-between mb-2">
                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" /> Activity
                 </div>
                 <span className="text-xs text-green-400">+12% vs last week</span>
            </div>
            <div className="h-16 w-full">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                    <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* For You Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-white">Recommended For You</h3>
                <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 font-bold tracking-wide">
                    AI CURATED
                </span>
            </div>
            <button onClick={() => onNavigate('explore')} className="text-sm text-indigo-400 hover:text-indigo-300">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} onRun={() => onNavigate('playground')} />
          ))}
        </div>
      </div>
    </div>
  );
};
