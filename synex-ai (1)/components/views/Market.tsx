import React from 'react';
import { MOCK_MARKET_ITEMS } from '../../constants';
import { ShoppingBag, Star, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const Market: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Synex Market</h2>
          <p className="text-slate-400">Premium assets, workflows, and coaching from top architects.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="secondary">My Purchases</Button>
            <Button>Become a Seller</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_MARKET_ITEMS.map(item => (
              <div key={item.id} className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all group hover:translate-y-[-4px]">
                  <div className="h-40 bg-slate-800 relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute top-4 left-4">
                           <span className="bg-black/50 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase">
                               {item.type}
                           </span>
                      </div>
                  </div>
                  <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                          <h3 className="font-bold text-lg text-white leading-tight">{item.title}</h3>
                          <span className="font-mono text-indigo-400 font-bold">${item.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
                          <span>by {item.author}</span>
                          <span className="flex items-center gap-1 text-amber-400"><Star className="w-3 h-3 fill-amber-400"/> {item.rating}</span>
                      </div>
                      <Button className="w-full" variant="outline">View Details</Button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};