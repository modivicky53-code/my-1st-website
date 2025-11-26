import React from 'react';
import { Button } from '../ui/Button';
import { Blob } from '../ui/Blob';
import { ArrowRight, Zap, Shield, Globe, Sparkles, Cpu, Layers, Terminal, ChevronRight, PlayCircle, Github, Twitter, Linkedin, Disc } from 'lucide-react';

interface LandingProps {
  onEnterApp: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden selection:bg-indigo-500/30 font-sans relative perspective-1000">
      
      {/* Aurora Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Blob color="bg-indigo-600" size="w-[50vw] h-[50vw]" className="-top-[10%] -left-[10%]" />
        <Blob color="bg-cyan-600" size="w-[40vw] h-[40vw]" className="bottom-0 right-0" delay="2s" />
        <Blob color="bg-purple-600" size="w-[30vw] h-[30vw]" className="top-[40%] left-[30%]" delay="4s" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={onEnterApp}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow animate-pulse-glow">
               <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-glow transition-all">
              Synex<span className="text-slate-400">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Engine', 'Pricing', 'Manifesto'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onEnterApp} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Log in
            </button>
            <Button onClick={onEnterApp} variant="liquid" className="shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          
          {/* Holographic Badge */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-indigo-500/30 transition-colors cursor-pointer group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide group-hover:text-white transition-colors">
                PROMPTVAULT 2.0 IS LIVE
              </span>
              <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="animate-slide-up max-w-5xl mx-auto font-display text-7xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 drop-shadow-2xl">
            The OS for <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300 animate-shimmer bg-[length:200%_auto]">
              High-Velocity AI
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="animate-slide-up max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-12" style={{ animationDelay: '0.2s' }}>
            Store, engineer, and deploy production-grade prompts. 
            Synex aligns your team’s AI workflow into a single, intelligent workspace.
          </p>
          
          {/* CTAs */}
          <div className="animate-slide-up flex items-center gap-6" style={{ animationDelay: '0.3s' }}>
            <Button 
                onClick={onEnterApp}
                size="lg" 
                className="px-8 py-6 text-lg rounded-xl shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] magnetic-btn"
                icon={<Zap className="w-5 h-5 fill-white" />}
            >
              Start Building Free
            </Button>
            <button 
              onClick={onEnterApp}
              className="px-8 py-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-lg transition-all backdrop-blur-sm flex items-center gap-2 group"
            >
              <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              Watch Demo
            </button>
          </div>

          {/* 3D Interface Preview */}
          <div className="animate-fade-in-up mt-24 relative w-full max-w-6xl mx-auto perspective-1000 group" style={{ animationDelay: '0.5s' }}>
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/5 to-transparent blur-3xl -z-10 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
            
            <div className="relative rounded-2xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl overflow-hidden transform rotate-x-12 transition-transform duration-700 ease-out hover:rotate-x-0 hover:scale-[1.02]">
              {/* Fake Window Header */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="mx-auto text-[10px] font-mono text-slate-500 uppercase tracking-widest">Synex Studio • v2.4.0</div>
              </div>

              {/* Fake UI Content */}
              <div className="p-1 min-h-[600px] bg-[#020617] relative">
                <div className="grid grid-cols-12 gap-1 h-full">
                  <div className="col-span-2 border-r border-white/5 p-4 space-y-4">
                     <div className="h-8 w-8 bg-indigo-500/20 rounded-lg mb-8 animate-pulse" />
                     <div className="h-2 w-20 bg-slate-800 rounded" />
                     <div className="h-2 w-16 bg-slate-800 rounded" />
                     <div className="h-2 w-24 bg-slate-800 rounded" />
                  </div>
                  <div className="col-span-10 p-10">
                    <div className="flex justify-between items-center mb-10">
                        <div className="space-y-2">
                            <div className="h-8 w-64 bg-slate-800/50 rounded animate-pulse" />
                            <div className="h-4 w-96 bg-slate-800/30 rounded" />
                        </div>
                        <div className="h-10 w-32 bg-indigo-600/20 rounded border border-indigo-500/30" />
                    </div>
                    {/* Code Block Visual */}
                    <div className="w-full h-64 rounded-xl border border-white/5 bg-slate-900/50 p-6 font-mono text-sm text-slate-400 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
                        <span className="text-purple-400">const</span> <span className="text-yellow-200">generatePrompt</span> = <span className="text-cyan-300">async</span> (input) {'=>'} {'{'}
                        <br />
                        &nbsp;&nbsp;<span className="text-slate-500">// AI Optimization Layer</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-purple-400">const</span> optimized = <span className="text-cyan-300">await</span> gemini.<span className="text-blue-300">refine</span>(input);
                        <br />
                        &nbsp;&nbsp;<span className="text-purple-400">return</span> optimized.data;
                        <br />
                        {'}'}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                             <div className="h-6 w-16 bg-white/5 rounded" />
                             <div className="h-6 w-6 bg-green-500/20 rounded-full animate-bounce" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Bento) */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <h2 className="text-5xl font-bold mb-6 font-display tracking-tight">Everything you need to <br/><span className="text-indigo-400">tame the models.</span></h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="col-span-2 rounded-3xl bg-[#0f172a]/40 border border-white/5 p-10 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                        <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Global Prompt Repository</h3>
                    <p className="text-slate-400 max-w-md">Access a library of 10,000+ vetted prompts. Filter by model, use-case, or performance rating to find the perfect starting point.</p>
                </div>
            </div>

            {/* Tall Card */}
            <div className="row-span-2 rounded-3xl bg-[#0f172a]/40 border border-white/5 p-10 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Instant Optimization</h3>
                    <p className="text-slate-400 mb-8">One-click refinement using Gemini 2.5 Flash.</p>
                 </div>
            </div>

            {/* Small Card 1 */}
            <div className="rounded-3xl bg-[#0f172a]/40 border border-white/5 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                    <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Vault</h3>
                <p className="text-sm text-slate-400">Bank-grade encryption for your proprietary IP.</p>
            </div>

            {/* Small Card 2 */}
            <div className="rounded-3xl bg-[#0f172a]/40 border border-white/5 p-8 relative overflow-hidden group hover:border-pink-500/30 transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                    <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">Version Control</h3>
                <p className="text-sm text-slate-400">History tracking and diff-view.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* CTA Block */}
            <div className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-24">
                <div>
                    <h2 className="text-4xl font-display font-bold text-white mb-2 tracking-tight">Ready to architect intelligence?</h2>
                    <p className="text-slate-400 text-lg">Join the operating system for the next era of AI.</p>
                </div>
                <div className="flex gap-4">
                     <Button onClick={onEnterApp} size="lg" className="rounded-full px-8 h-14 text-lg">Start Building Free</Button>
                </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-24">
                {/* Brand */}
                <div className="col-span-2 md:col-span-4">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                            <Terminal className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-white">
                            Synex<span className="text-slate-500">AI</span>
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                        Architecting the intelligence layer. Store, refine, and deploy production-grade prompts with the precision of code.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white text-slate-400 transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white text-slate-400 transition-colors"><Github className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white text-slate-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
                    </div>
                </div>

                {/* Columns */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="font-bold text-white mb-6">Product</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Synex Studio</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Neural Stream</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Knowledge Vault</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Marketplace</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Workflows</a></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-2">
                     <h4 className="font-bold text-white mb-6">Resources</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Prompt Guide</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">System Status</a></li>
                    </ul>
                </div>

                 <div className="col-span-1 md:col-span-2">
                     <h4 className="font-bold text-white mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Manifesto</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Brand Assets</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                 <div className="col-span-1 md:col-span-2">
                     <h4 className="font-bold text-white mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookies</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-600">
                <p>© 2025 Synex Technologies Inc. All rights reserved.</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-slate-500">Systems Normal</span>
                    </span>
                    <p className="hidden md:block">Built for the architects of the next era.</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};
