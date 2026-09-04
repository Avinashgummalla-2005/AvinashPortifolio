import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, Server, Atom, Database, Brain, GitBranch, 
  Layers, Terminal, ExternalLink, Sparkles 
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Server: Server,
  Atom: Atom,
  Database: Database,
  Brain: Brain,
  GitBranch: GitBranch,
  Layers: Layers
};

export default function TechStack({ activeTechFilter, onSelectTech }) {
  const { techStack, projects } = portfolioData;

  return (
    <section id="tech-stack" className="py-14 sm:py-24 relative overflow-hidden bg-[#07070e]/80 border-t border-b border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Stack Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Core Tech Stack & Ecosystem
          </h2>
          <p className="mt-2.5 sm:mt-3 text-gray-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Click or hover on any technology to highlight related personal projects built with that stack.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-6">
          {techStack.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Terminal;
            const isSelected = activeTechFilter === item.id;
            const projectCount = item.associatedProjects.length;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => onSelectTech(isSelected ? null : item.id)}
                className={`cursor-pointer rounded-2xl p-4 sm:p-6 transition-all duration-300 relative border ${
                  isSelected 
                    ? 'bg-gradient-to-b from-purple-900/40 to-cyan-950/50 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.25)]' 
                    : 'bg-[#0d0d18]/90 hover:bg-[#121224] border-white/10 hover:border-cyan-500/40 shadow-lg'
                }`}
              >
                {/* Highlight Badge */}
                {isSelected && (
                  <span className="absolute top-3 right-3 text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500 text-black font-bold">
                    Active
                  </span>
                )}

                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`p-2.5 sm:p-3 rounded-xl ${isSelected ? 'bg-cyan-500 text-black' : 'bg-purple-950/60 text-cyan-400 border border-cyan-500/20'}`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">{item.name}</h3>
                    <span className="text-[11px] sm:text-xs text-purple-400 font-mono">{item.category}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Related Projects Indicator */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-gray-500">
                  <span className="font-mono text-[10px] sm:text-[11px]">
                    {projectCount > 0 ? `${projectCount} Related Project${projectCount > 1 ? 's' : ''}` : 'General Skills'}
                  </span>
                  {projectCount > 0 && (
                    <span className="text-cyan-400 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform text-[11px] sm:text-xs">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Filter Bar if Active */}
        {activeTechFilter && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => onSelectTech(null)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Reset Tech Filter</span>
              <span className="font-mono text-cyan-400">✕</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
