import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import { ExternalLink, Filter, Sparkles, Code, Info } from 'lucide-react';

const filterCategories = ["All", "Web", "AI/ML", "Full Stack"];

export default function Projects({ activeTechFilter, onClearTechFilter }) {
  const { projects, techStack } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const activeTechObj = techStack.find(t => t.id === activeTechFilter);

  const filteredProjects = projects.filter(project => {
    if (activeTechFilter && activeTechObj) {
      if (!activeTechObj.associatedProjects.includes(project.id)) {
        return false;
      }
    }
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-14 sm:py-24 relative bg-[#050509] text-gray-100 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">
            Personal Projects
          </h2>
          <p className="mt-2.5 sm:mt-3 text-gray-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Full-stack web portals, AI tools, and intelligent software solutions designed and built by Avinash.
          </p>
        </motion.div>

        {activeTechFilter && activeTechObj && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between max-w-xl mx-auto"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
              <span className="text-xs text-gray-200">
                Highlighting projects using <strong className="text-cyan-300 font-mono">{activeTechObj.name}</strong>
              </span>
            </div>
            <button
              onClick={onClearTechFilter}
              className="text-xs text-cyan-400 hover:text-white underline font-mono shrink-0"
            >
              Show All
            </button>
          </motion.div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0b0b16] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/9] bg-black/60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b16] via-transparent to-transparent opacity-80" />

                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10 font-mono">
                  {project.category}
                </span>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-400 font-mono mt-0.5 mb-1.5 sm:mb-2">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed font-light line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/5 text-gray-300 font-mono border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>GitHub Repo</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 sm:gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold font-mono"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-sm font-mono">No projects found for the selected filter.</p>
            <button
              onClick={() => { setSelectedCategory("All"); if(onClearTechFilter) onClearTechFilter(); }}
              className="mt-3 text-xs text-cyan-400 underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
