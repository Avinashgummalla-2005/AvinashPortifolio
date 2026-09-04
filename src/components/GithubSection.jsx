import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Star, Code, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function GithubSection() {
  return (
    <section className="py-20 relative z-10 bg-darkSurface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB INTEGRATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Explore My <span className="text-gradient-cyan">Code & Repositories</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Open-source repositories, full-stack backends, and AI models on GitHub.
              </p>
            </div>

            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-95 transition-opacity shadow-lg shadow-purple-500/20 shrink-0"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@Avinash2005</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.projects.map((proj) => (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Code className="w-4 h-4" />
                      <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300">
                        {proj.title}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 text-purple-300 border border-purple-500/30">
                      Public
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {proj.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-cyan-300">{proj.techStack[0]}</span>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
