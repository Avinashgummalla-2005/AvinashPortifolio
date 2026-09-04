import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030307] text-gray-400 py-12 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-lg font-bold text-white tracking-wide">
            Avinash Gummalla
          </h3>
          <p className="text-xs font-mono text-cyan-400">
            Personal AI & ML Developer Portfolio
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/5 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/5 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/5 transition-colors"
          >
            <MailIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600 font-mono">
        © {new Date().getFullYear()} Avinash Gummalla. Built for personal developer presentation.
      </div>
    </footer>
  );
}
