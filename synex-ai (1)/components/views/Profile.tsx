import React from 'react';
import { MOCK_USER, MOCK_PROMPTS } from '../../constants';
import { MapPin, Link as LinkIcon, Calendar, Flame, Award, Users } from 'lucide-react';
import { PromptCard } from '../ui/PromptCard';
import { Button } from '../ui/Button';

export const Profile: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Cover Image */}
      <div className="h-48 rounded-2xl bg-gradient-to-r from-slate-800 to-indigo-900 border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      </div>

      {/* Profile Header */}
      <div className="px-8 relative -mt-16 mb-12">
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
            <div className="flex items-end gap-6">
                <img 
                    src={MOCK_USER.avatar} 
                    alt={MOCK_USER.name} 
                    className="w-32 h-32 rounded-2xl border-4 border-[#020617] bg-slate-800 shadow-xl"
                />
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        {MOCK_USER.name}
                        {MOCK_USER.badges.includes('Top Rated') && (
                            <Award className="w-6 h-6 text-amber-400" fill="currentColor" />
                        )}
                    </h1>
                    <p className="text-slate-400 text-lg">{MOCK_USER.handle}</p>
                </div>
            </div>
            
            <div className="flex gap-3 mb-2">
                <Button variant="secondary" size="sm">Edit Profile</Button>
                <Button variant="primary" size="sm">Share</Button>
            </div>
        </div>

        <div className="mt-6 max-w-2xl">
            <p className="text-slate-300 leading-relaxed mb-4">
                {MOCK_USER.bio}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</span>
                <span className="flex items-center gap-2"><LinkIcon className="w-4 h-4" /> github.com/arivera</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Joined Oct 2023</span>
            </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-white mb-1">{MOCK_USER.stats.totalPrompts}</div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Prompts</div>
            </div>
            <div className="bg-slate-900 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-white mb-1">{MOCK_USER.stats.totalLikes.toLocaleString()}</div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Likes</div>
            </div>
            <div className="bg-slate-900 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-white mb-1">{MOCK_USER.followers}</div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Followers</div>
            </div>
             <div className="bg-slate-900 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-amber-500 mb-1 flex items-center justify-center gap-1">
                    <Flame className="w-5 h-5" fill="currentColor" /> {MOCK_USER.stats.streakDays}
                </div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Day Streak</div>
            </div>
      </div>

      {/* Content Tabs */}
      <div className="border-b border-white/5 flex gap-8">
        <button className="py-4 text-sm font-medium text-indigo-400 border-b-2 border-indigo-400">Published Prompts</button>
        <button className="py-4 text-sm font-medium text-slate-500 hover:text-white transition-colors">Saved Collections</button>
        <button className="py-4 text-sm font-medium text-slate-500 hover:text-white transition-colors">About</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PROMPTS.slice(0, 4).map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
      </div>
    </div>
  );
};
