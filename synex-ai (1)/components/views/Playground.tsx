import React from 'react';
import { Play } from 'lucide-react';

export const Playground = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Synex AI Playground
      </h1>
      <p className="text-slate-400 mb-8">
        Yahan aap apna prompt daal sakte hain.
      </p>

      {/* Input aur Button */}
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Apna prompt yahan likhein..."
          className="flex-grow p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150">
          <Play className="w-5 h-5" />
          Generate
        </button>
      </div>

      {/* Result Area */}
      <div className="mt-8 p-6 bg-slate-800 border border-slate-700 rounded-lg h-64 flex items-center justify-center">
        <p className="text-slate-500">
          AI ka response yahan dikhega.
        </p>
      </div>
    </div>
  );
};
