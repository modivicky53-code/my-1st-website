import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Landing } from './components/views/Landing';
import { Dashboard } from './components/views/Dashboard';
import { Explore } from './components/views/Explore';
import { CreatePrompt } from './components/views/CreatePrompt';
import { Profile } from './components/views/Profile';
import { Packs } from './components/views/Packs';
import { Playground } from './components/views/Playground';
import { Battle } from './components/views/Battle';
import { Studio } from './components/views/Studio';
import { Workflows } from './components/views/Workflows';
import { Vault } from './components/views/Vault';
import { Social } from './components/views/Social';
import { Market } from './components/views/Market';
import { CommandPalette } from './components/ui/CommandPalette';
import { MOCK_PROMPTS, MOCK_USER, MOCK_NOTIFICATIONS } from './constants';
import { ViewState } from './types';
import { Bell, User, Search, Volume2, VolumeX } from 'lucide-react';
import { Button } from './components/ui/Button';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // XP & Addiction Engine State
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(12);
  const [showLevelUp, setShowLevelUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            setIsCommandOpen(prev => !prev);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Ambient Audio Engine
  useEffect(() => {
    if (audioEnabled) {
        if (!audioRef.current) {
            audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/10/05/audio_6862eb9c02.mp3'); // Deep space ambience
            audioRef.current.loop = true;
            audioRef.current.volume = 0.2;
        }
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
    } else {
        audioRef.current?.pause();
    }
  }, [audioEnabled]);

  const handleAction = (xpAmount: number) => {
      setXp(prev => {
          const next = prev + xpAmount;
          if (Math.floor(next / 1000) > Math.floor(prev / 1000)) {
              setLevel(l => l + 1);
              setShowLevelUp(true);
              setTimeout(() => setShowLevelUp(false), 3000);
          }
          return next;
      });
  };

  const handleLogin = () => {
    handleAction(100);
    setView('dashboard');
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-[#020617] flex items-center justify-center">
        <div className="relative flex h-8 w-8">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
        </div>
      </div>
    );
  }

  if (view === 'landing') {
    return <Landing onEnterApp={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <CommandPalette 
        isOpen={isCommandOpen} 
        onClose={() => setIsCommandOpen(false)} 
        onNavigate={(v) => setView(v)}
      />
      
      {/* Level Up Overlay */}
      {showLevelUp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-[2px] rounded-2xl animate-pop">
                  <div className="bg-slate-900 px-10 py-6 rounded-2xl flex flex-col items-center shadow-2xl shadow-amber-500/50">
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-amber-600 mb-2">LEVEL UP!</div>
                      <div className="text-xl text-white font-bold">Level {level}</div>
                  </div>
              </div>
              <div className="absolute inset-0 bg-black/20 animate-flash" />
          </div>
      )}

      <Sidebar 
        currentView={view} 
        setView={setView} 
        onLogout={() => setView('landing')} 
        xp={xp}
        level={level}
      />
      
      {/* Main Content Area */}
      <main className="ml-[280px] p-8 min-h-screen relative">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8 sticky top-0 z-40 py-4 -my-4 bg-[#020617]/80 backdrop-blur-lg border-b border-white/5 px-8 -mx-8">
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <span>Synex AI</span> 
                <span className="text-slate-700">/</span> 
                <span className="text-white capitalize bg-slate-800/50 px-2 py-0.5 rounded border border-white/5 shadow-sm">{view}</span>
            </div>
            
            <div className="flex items-center gap-4">
                {/* Audio Toggle */}
                <button onClick={() => setAudioEnabled(!audioEnabled)} className="text-slate-500 hover:text-white transition-colors">
                    {audioEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Search Trigger */}
                <button 
                    onClick={() => setIsCommandOpen(true)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-400 hover:border-indigo-500/50 hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                >
                    <Search className="w-3 h-3" />
                    <span>Search Synex OS...</span>
                    <span className="ml-2 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-[10px]">⌘K</span>
                </button>

                {/* Notifications */}
                <div className="relative">
                    <button 
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="p-2 text-slate-400 hover:text-white transition-colors relative hover:bg-white/5 rounded-full"
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#020617] animate-pulse"></span>
                    </button>
                    
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
                            <div className="p-3 border-b border-slate-800 bg-slate-950/50 font-semibold text-sm">Notifications</div>
                            <div className="max-h-64 overflow-y-auto">
                                {MOCK_NOTIFICATIONS.map(n => (
                                    <div key={n.id} className="p-3 hover:bg-white/5 border-b border-white/5 last:border-0 cursor-pointer">
                                        <p className="text-sm text-slate-300">{n.message}</p>
                                        <p className="text-xs text-slate-500 mt-1">{n.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <button 
                    onClick={() => setView('profile')}
                    className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center border border-white/10 shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform"
                >
                    <User className="w-4 h-4 text-white" />
                </button>
            </div>
        </header>

        {/* View Router */}
        <div className="max-w-7xl mx-auto">
            {view === 'dashboard' && <Dashboard recentPrompts={MOCK_PROMPTS.slice(0, 3)} stats={MOCK_USER.stats} onNavigate={setView} />}
            {view === 'explore' && <Explore prompts={MOCK_PROMPTS} />}
            {view === 'create' && <CreatePrompt />}
            {view === 'profile' && <Profile />}
            {view === 'packs' && <Packs />}
            {view === 'playground' && <Playground />}
            {view === 'battle' && <Battle />}
            {view === 'studio' && <Studio />}
            {view === 'workflows' && <Workflows />}
            {view === 'vault' && <Vault />}
            {view === 'social' && <Social />}
            {view === 'market' && <Market />}
            {view === 'library' && (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/5">
                        <User className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Library Empty</h3>
                    <p className="text-slate-500 max-w-sm">You haven't saved any prompts yet. Visit the Generator to create your first masterpiece.</p>
                </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default App;