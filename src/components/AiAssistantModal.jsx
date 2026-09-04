import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const presetPrompts = [
  "What technologies does Avinash use?",
  "Show me his projects",
  "Tell me about HireHub",
  "How can I contact Avinash?"
];

export default function AiAssistantModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I am AVINASH.AI, an interactive assistant trained strictly on Avinash Gummalla's resume and engineering portfolio. How can I assist your review today?"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  if (!isOpen) return null;

  const handleAskQuery = (query) => {
    if (!query.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: query };
    const lowerQuery = query.toLowerCase();

    // Find best match in portfolioData.aiAssistantKnowledge
    let match = portfolioData.aiAssistantKnowledge.find((item) =>
      item.keywords.some((kw) => lowerQuery.includes(kw))
    );

    let answerText = match
      ? match.answer
      : "Avinash Gummalla is an Artificial Intelligence & Machine Learning undergraduate (BE AI&ML, 2023-2027) skilled in Django, React, PostgreSQL, and AI integrations (Gemini API & ML). Feel free to ask about his projects (HireHub, Krishi AI, DOC-SPOT) or contact details!";

    const aiMsg = { sender: 'ai', text: answerText };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInputQuery('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-4 sm:p-6 pointer-events-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050509]/70 backdrop-blur-sm"
        />

        {/* Floating Assistant Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-lg glass-panel rounded-3xl p-5 sm:p-6 border border-purple-500/40 shadow-2xl z-10 bg-[#0B0F19]/95 text-left flex flex-col h-[520px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-md">
                <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                  <span>AVINASH.AI</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    RESUME AGENT
                  </span>
                </h3>
                <p className="text-[11px] text-gray-400 font-mono">
                  Strict Authoritative Portfolio Knowledge Base
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Transcript Area */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3.5 pr-1">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-950 border border-purple-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed font-light ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-none'
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-none font-mono whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Preset Prompts Chips */}
          <div className="py-2 flex gap-1.5 overflow-x-auto shrink-0 border-t border-white/10">
            {presetPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleAskQuery(prompt)}
                className="px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAskQuery(inputQuery);
            }}
            className="pt-2 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about skills, projects, degree..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-xs transition-all font-mono"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
