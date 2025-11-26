import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { optimizePrompt, generateTags } from '../../services/geminiService';
import { Wand2, Save, RefreshCw } from 'lucide-react';

export const CreatePrompt: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async () => {
    if (!input.trim()) return;
    setIsOptimizing(true);
    
    // Simulate thinking time for UX
    const optimized = await optimizePrompt(input);
    const generatedTags = await generateTags(optimized);
    
    setOutput(optimized);
    setTags(generatedTags);
    setIsOptimizing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <header>
        <h2 className="text-2xl font-bold text-white mb-2">Prompt Generator</h2>
        <p className="text-slate-400">Transform rough ideas into production-ready system prompts using Gemini 2.5.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 h-[600px]">
        {/* Input Section */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl p-4 flex flex-col focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
            <label className="text-xs font-semibold text-slate-500 uppercase mb-2">Your Idea / Draft</label>
            <textarea
              className="flex-1 bg-transparent resize-none focus:outline-none text-slate-300 placeholder-slate-600 font-mono text-sm leading-relaxed"
              placeholder="e.g. I need a python script to analyze stock data and create a chart..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleOptimize} 
            isLoading={isOptimizing}
            disabled={!input}
            className="w-full"
            icon={<Wand2 className="w-4 h-4" />}
          >
            {isOptimizing ? 'Engineering Prompt...' : 'Magic Optimize'}
          </Button>
        </div>

        {/* Output Section */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-slate-950 border border-indigo-500/30 rounded-xl p-4 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 bg-slate-900/80 rounded-bl-lg border-b border-l border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-xs text-slate-400 hover:text-white" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
            </div>
            
            <label className="text-xs font-semibold text-indigo-400 uppercase mb-2 flex items-center gap-2">
              <Wand2 className="w-3 h-3" /> 
              Optimized Result
            </label>
            
            {output ? (
              <textarea
                className="flex-1 bg-transparent resize-none focus:outline-none text-indigo-100 font-mono text-sm leading-relaxed"
                value={output}
                readOnly
              />
            ) : (
              <div className="flex-1 flex items-center justify-center text-slate-600 text-sm italic">
                AI output will appear here...
              </div>
            )}
            
            {/* Tags */}
            {tags.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20">#{tag}</span>
                    ))}
                </div>
            )}
          </div>
          <Button 
            variant="secondary"
            className="w-full"
            icon={<Save className="w-4 h-4" />}
            disabled={!output}
          >
            Save to Vault
          </Button>
        </div>
      </div>
    </div>
  );
};