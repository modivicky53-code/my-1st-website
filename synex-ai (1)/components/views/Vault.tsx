import React from 'react';
import { MOCK_VAULT_DOCS } from '../../constants';
import { Upload, FileText, MessageSquare, Search, MoreVertical } from 'lucide-react';
import { Button } from '../ui/Button';

export const Vault: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6 h-full flex flex-col">
       <header className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Knowledge Vault</h2>
          <p className="text-slate-400">Secure RAG storage. Upload documents and chat with your data.</p>
        </div>
        <Button icon={<Upload className="w-4 h-4" />}>Upload File</Button>
      </header>

      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
          {/* File List */}
          <div className="col-span-8 bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/5 flex items-center gap-4">
                  <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" placeholder="Search documents..." className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50" />
                  </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {MOCK_VAULT_DOCS.map(doc => (
                      <div key={doc.id} className="flex items-center p-4 bg-slate-950/30 hover:bg-slate-950/80 border border-white/5 rounded-xl group transition-all cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mr-4">
                              <FileText className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                              <h4 className="text-slate-200 font-medium text-sm mb-1">{doc.name}</h4>
                              <p className="text-xs text-slate-500">{doc.size} • {doc.uploadDate}</p>
                          </div>
                          {doc.aiSummary && (
                              <div className="hidden md:block px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20 mr-4">
                                  Processed
                              </div>
                          )}
                          <button className="text-slate-500 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                  ))}
              </div>
          </div>

          {/* Chat Panel */}
          <div className="col-span-4 bg-slate-900 border border-white/5 rounded-2xl flex flex-col overflow-hidden">
              <div className="p-4 border-b border-white/5 bg-white/5">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-indigo-400" />
                      Ask AI
                  </h3>
              </div>
              <div className="flex-1 p-4 text-center flex flex-col items-center justify-center text-slate-500">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                      <Search className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-sm px-8">Select a document to start analyzing insights instantly.</p>
              </div>
              <div className="p-4 border-t border-white/5">
                  <input type="text" placeholder="Ask a question..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50" disabled />
              </div>
          </div>
      </div>
    </div>
  );
};