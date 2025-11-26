import React, { useState } from 'react';
import { Play, Sparkles, RefreshCw, Save, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';
import { runPrompt, optimizePrompt } from '../../services/geminiService';

export const Playground: React.FC = () => {
  const [prompt, setPrompt] = useState('Write a haiku about artificial intelligence.');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState('Gemini 2.5 Flash');

  const handleRun = async () => {
    setIsLoading(true);
    const result = await runPrompt(prompt, model);
    setResponse(result);
    setIsLoading(false);
  };

  const handleImprove = async () => {
      setIsLoading(true);
      const betterPrompt = await optimizePrompt(prompt);
      setPrompt(betterPrompt);
      setIsLoading(false);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-fade-in">
        <header className="flex items-center justify-between mb-6">
            <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-indigo-400" />
                    Prompt Playground
                </h2>
                <p className="text-slate-400 text-sm">Test, refine, and execute prompts in real-time.</p>
            </div>
            
            <div className="flex items-center gap-3">
                 <select 
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                    <option>Gemini 2.5 Flash</option>
                    <option>Gemini 2.5 Pro</option>
                    <option>GPT-4 (Mock)</option>
                    <option>Claude 3 (Mock)</option>
                </select>
                <Button variant="secondary" icon={<Save className="w-4 h-4"/>}>Save</Button>
            </div>
        </header>

        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
            {/* Input Column */}
            <div className="flex flex-col gap-4">
                <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl flex flex-col overflow-hidden focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
                    <div className="bg-slate-900 px-4 py-2 border-b border-slate-700/50 flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">System Prompt</span>
                        <button 
                            onClick={handleImprove}
                            disabled={isLoading}
                            className="text-xs flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors disabled:opacity-50"
                        >
                            <Sparkles className="w-3 h-3" /> Auto-Improve
                        </button>
                    </div>
                    <textarea 
                        className="flex-1 bg-transparent p-4 resize-none focus:outline-none text-slate-200 font-mono text-sm leading-relaxed"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your prompt instructions here..."
                    />
                </div>
                <Button 
                    onClick={handleRun} 
                    isLoading={isLoading} 
                    className="w-full"
                    size="lg"
                    icon={<Play className="w-4 h-4 fill-white" />}
                >
                    Run Prompt
                </Button>
            </div>

            {/* Output Column */}
            <div className="flex flex-col">
                <div className="flex-1 bg-[#0d1117] border border-slate-800 rounded-xl flex flex-col overflow-hidden relative">
                    <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Model Output</span>
                         {response && (
                            <button 
                                onClick={() => setResponse('')}
                                className="text-slate-500 hover:text-white"
                            >
                                <RefreshCw className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto">
                        {response ? (
                            <div className="prose prose-invert prose-sm max-w-none">
                                <p className="whitespace-pre-wrap font-mono text-slate-300">{response}</p>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-600">
                                <Terminal className="w-8 h-8 mb-3 opacity-20" />
                                <p className="text-sm">Ready to generate.</p>
                            </div>
                        )}
                    </div>

                    {isLoading && (
                        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px] flex items-center justify-center">
                            <div className="flex items-center gap-2 text-indigo-400 bg-slate-900 px-4 py-2 rounded-full shadow-xl border border-white/10">
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                                <span className="text-sm font-medium">Generating...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};
