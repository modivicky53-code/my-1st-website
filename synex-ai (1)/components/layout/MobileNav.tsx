import React from 'react';
import { Menu, Search, Bell, Command } from 'lucide-react';
import { MOCK_USER } from '../../constants';

interface MobileNavProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  onProfileClick: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onMenuClick, onSearchClick, onProfileClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-lg border-b border-white/5 px-4 h-16 flex items-center justify-between lg:hidden">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-slate-400 hover:text-white active:scale-95 transition-transform"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Command className="w-3 h-3 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white">Synex</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button 
            onClick={onSearchClick}
            className="p-2 text-slate-400 hover:text-white transition-colors"
        >
            <Search className="w-5 h-5" />
        </button>
        <button 
            onClick={onProfileClick}
            className="relative"
        >
             <img 
                src={MOCK_USER.avatar} 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-white/10" 
             />
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 border-2 border-[#020617] rounded-full"></span>
        </button>
      </div>
    </header>
  );
};