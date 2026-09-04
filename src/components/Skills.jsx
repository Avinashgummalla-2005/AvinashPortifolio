import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { 
  Code2, Coffee, Cpu, Brain, Sparkles, Atom, Server, 
  Layers, GitBranch, Database, Globe, Wrench 
} from 'lucide-react';

const skillIconMap = {
  Code2: Code2,
  Coffee: Coffee,
  Cpu: Cpu,
  Brain: Brain,
  Sparkles: Sparkles,
  Atom: Atom,
  Server: Server,
  Layers: Layers,
  GitBranch: GitBranch,
  Github: GithubIcon,
  Database: Database,
  Globe: Globe
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative bg-[#050509] text-gray-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold block mb-2">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Core programming languages, AI/ML concepts, frameworks, and developer tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, idx) => {
            const IconComp = skillIconMap[skill.icon] || Wrench;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#0b0b16] rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/20">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
