import React from 'react';
import { MOCK_WORKFLOWS } from '../../constants';
import { Workflow, Play, Plus, ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const Workflows: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Automation Market</h2>
          <p className="text-slate-400">Chain prompts together to build powerful autonomous agents.</p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />}>Build Workflow</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_WORKFLOWS.map((flow) => (
            <div key={flow.id} className="bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 transition-all group hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                            <Workflow className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{flow.title}</h3>
                            <p className="text-xs text-slate-500">by {flow.author}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-lg font-bold text-white">{flow.price === 0 ? 'Free' : `$${flow.price}`}</span>
                    </div>
                </div>

                {/* Flow Visualizer */}
                <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    {flow.steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-slate-300 whitespace-nowrap">
                                {step}
                            </div>
                            {i < flow.steps.length - 1 && <ArrowRight className="w-3 h-3 text-slate-600 flex-shrink-0" />}
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Play className="w-3 h-3" /> {flow.runs} runs</span>
                        <span className="flex items-center gap-1">★ {flow.rating}</span>
                    </div>
                    <Button size="sm" variant="secondary" icon={<Download className="w-3 h-3"/>}>Install</Button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};