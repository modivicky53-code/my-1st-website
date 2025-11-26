import React, { useEffect, useState } from 'react';
import { Search, Compass, Sparkles, User, Package, Zap, LayoutDashboard, X } from 'lucide-react';
import { ViewState } from '../../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewState) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const commands = [
    { id: 'dashboard', label: 'Go to Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, action: () => onNavigate('dashboard') },
    { id: 'explore', label: 'Explore Prompts', icon: <Compass className="w-4 h-4" />, action: () => onNavigate('explore') },
    { id: 'create', label: 'Create Prompt', icon: <Sparkles className="w-4 h-4" />, action: () => onNavigate('create') },
    { id: 'playground', label: 'Open Playground', icon: <Zap className="w-4 h-4" />, action: () => onNavigate('playground') },
    { id: 'packs', label: 'Browse Packs', icon: <Package className="w-4 h-4" />, action: () => onNavigate('packs') },
    { id: 'profile', label: 'View Profile', icon: <User className="w-4 h-4" />, action: () => onNavigate('profile') },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-indigo-500/10 overflow-hidden animate-fade-in transform transition-all">
        <div className="flex items-center px-4 py-3 border-b border-slate-700/50">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            className="flex-1 bg-transparent border-none focus:outline-none text-slate-200 placeholder-slate-500 text-sm h-6"
            placeholder="Type a command or search..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-slate-500 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[300px] overflow-y-auto py-2">
          {filteredCommands.length > 0 ? (
            <div className="px-2 space-y-1">
               <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase">Navigation</div>
              {filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-colors group"
                >
                  <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">{cmd.icon}</span>
                  {cmd.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="px-6 py-8 text-center text-slate-500 text-sm">
              No results found.
            </div>
          )}
        </div>
        
        <div className="bg-slate-950/50 px-4 py-2 border-t border-slate-700/50 flex justify-between items-center text-[10px] text-slate-500">
            <span>Use ↑↓ to navigate</span>
            <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
