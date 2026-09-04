import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUri = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoUri;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-14 sm:py-24 relative bg-[#050509] text-gray-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-2.5 sm:mt-3 text-gray-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
            Have a project idea, opportunity, or technical inquiry? Reach out directly via email or socials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0e0e1a] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-xl space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Contact Details</h3>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-purple-950 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block">EMAIL ADDRESS</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors truncate block">
                    {personal.email}
                  </span>
                </div>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-950 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block">LINKEDIN PROFILE</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors truncate block">
                    in/avinash-gummalla
                  </span>
                </div>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-gray-900 text-gray-300 group-hover:scale-110 transition-transform shrink-0">
                  <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block">GITHUB REPOSITORIES</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors truncate block">
                    github.com/Avinashgummalla-2005
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-950 text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-gray-500 block">LOCATION</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-200">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0e0e1a] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#050509] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050509] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#050509] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050509] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-xs transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
              >
                <span>Send Message via Email</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Opening mail client... Thank you for reaching out!</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
