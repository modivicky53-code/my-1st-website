import React, { useState } from 'react';
import { Wand2, Layers, Dna, Play, Sparkles, Copy, Cpu, Gauge } from 'lucide-react';
import { Button } from '../ui/Button';

type StudioTab = 'factory' | 'universal' | 'dna' | 'playground';

export const Studio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StudioTab>('factory');
  const [input, setInput] = useState('');
  const [variations, setVariations] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock Generation for Factory
  const handleFactoryGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
        setVariations([
            "Professional: Act as a Senior Engineer. Provide a robust, secure solution...",
            "Concise: Explain X in 2 sentences using simple vocabulary...",
            "Creative: Write a sci-fi narrative about X featuring neon lights...",
            "Socratic: Guide the user to answer X by asking leading questions..."
        ]);
        setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in space-y-6 h-full flex flex-col">
      <header className="flex justify-between items-center">
        <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                Synex Studio
            </h2>
            <p className="text-slate-400">The advanced creator engine for architectural prompt design.</p>
        </div>
        <div className="flex bg-slate-900 p-1 rounded-xl border border-white/5">
            <TabButton active={activeTab === 'factory'} onClick={() => setActiveTab('factory')} icon={<Layers className="w-4 h-4"/>} label="Factory" />
            <TabButton active={activeTab === 'universal'} onClick={() => setActiveTab('universal')} icon={<Cpu className="w-4 h-4"/>} label="Universal" />
            <TabButton active={activeTab === 'dna'} onClick={() => setActiveTab('dna')} icon={<Dna className="w-4 h-4"/>} label="DNA" />
            <TabButton active={activeTab === 'playground'} onClick={() => setActiveTab('playground')} icon={<Play className="w-4 h-4"/>} label="Test" />
        </div>
      </header>

      {/* Main Studio Area */}
      <div className="flex-1 min-h-[500px] bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        {activeTab === 'factory' && (
            <div className="relative z-10 h-full flex flex-col">
                <div className="text-center mb-10">
                    <h3 className="text-xl font-bold text-white mb-2">Auto-Prompt Factory</h3>
                    <p className="text-sm text-slate-400">Input one idea. Get 4 professional variations instantly.</p>
                </div>
                
                <div className="flex gap-4 mb-8">
                    <input 
                        type="text" 
                        className="flex-1 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all"
                        placeholder="e.g. Write a python script for data analysis..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={handleFactoryGenerate} isLoading={isGenerating} icon={<Wand2 className="w-4 h-4"/>}>
                        Generate Variations
                    </Button>
                </div>

                {/* Carousel Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto">
                    {variations.length > 0 ? variations.map((v, i) => (
                        <div key={i} className="bg-slate-950/50 border border-white/10 rounded-xl p-5 hover:border-indigo-500/30 transition-all group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                                    {['Professional', 'Concise', 'Creative', 'Socratic'][i]}
                                </span>
                                <button className="text-slate-500 hover:text-white transition-colors"><Copy className="w-3 h-3"/></button>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed font-mono">{v}</p>
                        </div>
                    )) : (
                        <div className="col-span-2 flex flex-col items-center justify-center text-slate-600 h-full border border-dashed border-slate-800 rounded-xl">
                            <Layers className="w-12 h-12 mb-4 opacity-20" />
                            <p>Ready to manufacture prompts.</p>
                        </div>
                    )}
                </div>
            </div>
        )}

        {activeTab === 'universal' && (
             <div className="relative z-10 h-full flex flex-col">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Universal AI Mode</h3>
                    <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20">Multi-Model Output</span>
                 </div>
                 <div className="grid grid-cols-3 gap-4 h-full">
                     {['Gemini 2.5', 'GPT-4o', 'Claude 3.5'].map((model, i) => (
                         <div key={model} className="flex flex-col bg-slate-950/50 border border-white/10 rounded-xl overflow-hidden">
                             <div className="p-3 border-b border-white/5 bg-white/5 flex items-center gap-2">
                                 <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-green-400' : 'bg-amber-400'}`} />
                                 <span className="text-xs font-bold text-slate-300">{model}</span>
                             </div>
                             <textarea className="flex-1 bg-transparent p-4 text-xs font-mono text-slate-400 resize-none outline-none" placeholder={`Output for ${model} will appear here...`} readOnly />
                         </div>
                     ))}
                 </div>
             </div>
        )}

        {activeTab === 'dna' && (
            <div className="relative z-10 h-full flex items-center justify-center flex-col">
                <div className="w-64 h-64 relative mb-8">
                    {/* DNA Visualizer Mock */}
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 animate-spin-slow" />
                    <div className="absolute inset-4 rounded-full border-4 border-purple-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
                    <div className="absolute inset-8 rounded-full border-4 border-cyan-500/20 animate-spin-slow" style={{ animationDuration: '6s' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Dna className="w-16 h-16 text-white opacity-50" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Prompt DNA System</h3>
                <p className="text-slate-400 text-center max-w-md">
                    Analyzing semantic structure, sentiment, and token density to generate a unique fingerprint for your prompt.
                </p>
            </div>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
    <button 
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active 
            ? 'bg-indigo-600 text-white shadow-lg' 
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
    >
        {icon}
        {label}
    </button>
);
