import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server, Database } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050509]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl z-10 my-8 overflow-hidden bg-[#0d0d1a]/95 text-left"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6 pr-10">
            <span className="inline-block px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs mb-3">
              SYSTEM ARCHITECTURE SHOWCASE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs text-cyan-400 font-mono mt-1">{project.subtitle}</p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
            {project.fullDesc}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">
              Key Implementation Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 p-4 rounded-2xl bg-[#050509] border border-white/10">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-400">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Data & Request Flow</span>
            </div>
            <div className="text-xs font-mono text-cyan-300 bg-white/5 p-3 rounded-xl border border-white/5 tracking-tight leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl font-semibold text-xs text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
