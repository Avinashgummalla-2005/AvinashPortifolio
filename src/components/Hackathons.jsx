import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Calendar, Sparkles, ChevronLeft, ChevronRight, Maximize2, X, Code, CheckCircle2 } from 'lucide-react';

export default function Hackathons() {
  const { hackathons } = portfolioData;
  const [activeImageIndices, setActiveImageIndices] = useState({
    'quantum-valley': 0,
    'asme': 0
  });
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleNextImage = (hackathonId, totalImages) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [hackathonId]: (prev[hackathonId] + 1) % totalImages
    }));
  };

  const handlePrevImage = (hackathonId, totalImages) => {
    setActiveImageIndices(prev => ({
      ...prev,
      [hackathonId]: (prev[hackathonId] - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#05050a] text-gray-100 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Competitive Hackathons & Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Hackathons & Competitions
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Timeline of competitive hackathons, innovative software prototypes, and technical execution under sprint constraints.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-20">
          {hackathons.map((item, idx) => {
            const currentImgIndex = activeImageIndices[item.id] || 0;
            const currentImg = item.images[currentImgIndex];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 p-[2px] shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                  <div className="w-full h-full bg-[#05050a] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0b0b14]/80 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
                  
                  {/* Left Column: Details (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/50 text-purple-300 border border-purple-500/30 font-mono">
                        {item.badge}
                      </span>
                      <span className="text-xs text-cyan-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        • {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs uppercase font-mono text-gray-400 tracking-wider">Key Highlights</h4>
                      <ul className="space-y-1.5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {item.techUsed.map((tech, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 font-mono border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Gallery Carousel (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/40 border border-white/10 group shadow-lg">
                      <img 
                        src={currentImg.url} 
                        alt={currentImg.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                      {/* Expand Lightbox Button */}
                      <button
                        onClick={() => setLightboxImage(currentImg)}
                        className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100"
                        title="View Fullsize"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* Navigation Arrows */}
                      {item.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handlePrevImage(item.id, item.images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleNextImage(item.id, item.images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Caption overlay */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs text-cyan-300 font-medium truncate">
                          {currentImg.caption}
                        </p>
                      </div>
                    </div>

                    {/* Gallery Thumbnail Dots */}
                    <div className="flex items-center gap-2 mt-3">
                      {item.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => setActiveImageIndices(prev => ({ ...prev, [item.id]: imgIdx }))}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentImgIndex === imgIdx ? 'bg-cyan-400 w-6' : 'bg-gray-600 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={lightboxImage.url} 
                alt={lightboxImage.caption} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl border border-white/10"
              />
              <p className="mt-4 text-center text-sm text-cyan-300 font-mono">
                {lightboxImage.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
