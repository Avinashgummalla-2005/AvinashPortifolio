import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Brain, Cpu, Server, Compass, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Cpu: Cpu,
  Server: Server
};

export default function CurrentlyExploring() {
  const { currentlyExploring } = portfolioData;

  return (
    <section id="currently-exploring" className="py-12 sm:py-20 bg-[#080812] text-gray-100 relative overflow-hidden border-t border-white/5">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
              <span>Continuous Growth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Currently Exploring
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mt-2 md:mt-0 font-light">
            Emerging paradigms and technical domains I am actively building projects in and studying.
          </p>
        </motion.div>

        {/* 3 Explorer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {currentlyExploring.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Brain;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-4 sm:p-6 bg-[#0e0e1c] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-500">
                  <span>ACTIVE FOCUS</span>
                  <span className="text-cyan-400 font-semibold">2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
