import SynexLogo from '../../assets/synex.png'; 👈 Aapki logo file yahan se import ho rahi hai
import React from 'react';
import { ViewState } from '../../types';
import { 
  LayoutDashboard, Compass, Sparkles, LogOut, Flame, Command, 
  Network, ShoppingBag, Database, Workflow, User, Swords 
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onLogout: () => void;
  xp: number;
  level: number;
}

interface NavItemProps {
  item: { id: string; label: string; icon: React.ReactNode };
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, currentView, setView }) => (
  <button
      onClick={() => setView(item.id as ViewState)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group active:scale-[0.98] relative overflow-hidden ${
        currentView === item.id
          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)]'
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {/* Streak Light Effect for active items */}
      {currentView === item.id && (
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
      )}
      
      <span className={`transition-colors duration-200 ${currentView === item.id ? 'text-indigo-400' : 'text-slate-500 group-hover:text-white'}`}>
          {item.icon}
      </span>
      {item.label}
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, onLogout, xp, level }) => {
  const coreNav = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'explore', label: 'Explore', icon: <Compass className="w-4 h-4" /> },
    { id: 'market', label: 'Marketplace', icon: <ShoppingBag className="w-4 h-4" /> },
  ];

  const studioNav = [
    { id: 'studio', label: 'Studio', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'workflows', label: 'Workflows', icon: <Workflow className="w-4 h-4" /> },
    { id: 'vault', label: 'Vault', icon: <Database className="w-4 h-4" /> },
  ];

  const socialNav = [
    { id: 'social', label: 'Neural Stream', icon: <Network className="w-4 h-4" /> },
    { id: 'battle', label: 'Arena', icon: <Swords className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
  ];

  const xpProgress = (xp % 1000) / 10; // Simple mod for progress bar

  return (
    <aside className="w-[280px] h-screen bg-[#020617]/90 backdrop-blur-xl border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      {/* Brand */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          {/* PURANE LOGO/ICON BLOCK KI JAGAH NAYA IMAGE TAG */}
          <div className="relative group">
              <img 
                  src={SynexLogo} 
                  alt="Synex AI Logo" 
                  className="w-8 h-8 rounded-lg shadow-lg relative z-10" 
              />
          </div>
          <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight font-display">
               Synex AI
              </h1>
              <p className="text-[10px] text-indigo-400 tracking-widest uppercase font-bold">OS 4.0</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2 space-y-6 pr-2 custom-scrollbar">
        <nav className="px-3 space-y-1">
            <div className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Core</div>
            {coreNav.map((item) => <NavItem key={item.id} item={item} currentView={currentView} setView={setView} />)}
        </nav>

        <nav className="px-3 space-y-1">
            <div className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Studio Suite</div>
            {studioNav.map((item) => <NavItem key={item.id} item={item} currentView={currentView} setView={setView} />)}
        </nav>

        <nav className="px-3 space-y-1">
            <div className="px-3 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Network</div>
            {socialNav.map((item) => <NavItem key={item.id} item={item} currentView={currentView} setView={setView} />)}
        </nav>
      </div>

      {/* Addiction Engine Footer */}
      <div className="p-4 border-t border-white/5 bg-gradient-to-b from-[#020617] to-[#0f172a]">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-bold">XP Level {level}</span>
            <span className="text-[10px] text-indigo-400 font-mono">{xp} XP</span>
        </div>
        
        {/* XP Bar */}
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-6 overflow-hidden relative group">
            <div 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 h-full rounded-full transition-all duration-1000 relative"
                style={{ width: `${xpProgress}%` }}
            >
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            </div>
            <div className="absolute inset-0 bg-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm"
        >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
