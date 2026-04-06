'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: "Hello! I'm Mrityunjoy's AI assistant. Ask me anything about his skills, experience, or achievements." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        if (res.status === 429) {
          throw new Error("I'm currently rate-limited. Please try again in about a minute.");
        }
        throw new Error(errorData.error || `API error: ${res.status}`);
      }

      const data = await res.json();
      const response = data.text;

      setMessages((prev) => [...prev, { role: 'bot', content: response || "I'm sorry, I couldn't generate a response." }]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : "I'm sorry, I encountered an error. Please try again later.";
      setMessages((prev) => [...prev, { role: 'bot', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What are his skills?",
    "Tell me about his experience",
    "What are his achievements?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-4 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a]/95 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
            style={{ width: '380px', height: '520px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
                  <Sparkles size={16} className="text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0a0f1a] bg-emerald-400" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">AI Assistant</span>
                  <span className="block text-[11px] text-emerald-400/80">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4" style={{ minHeight: 0 }}>
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i === messages.length - 1 ? 0.1 : 0 }}
                    className={cn(
                      "flex gap-2.5",
                      msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    {/* Avatar */}
                    <div className={cn(
                      "mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs",
                      msg.role === 'user'
                        ? "bg-blue-600 text-white"
                        : "bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-400"
                    )}>
                      {msg.role === 'user' ? '👤' : <Bot size={14} />}
                    </div>

                    {/* Bubble */}
                    <div
                      className={cn(
                        "max-w-[75%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                        msg.role === 'user'
                          ? "rounded-tr-md bg-blue-600 text-white"
                          : "rounded-tl-md bg-white/[0.06] text-slate-200 ring-1 ring-white/[0.08]"
                      )}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2.5"
                  >
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-400">
                      <Bot size={14} />
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl rounded-tl-md bg-white/[0.06] px-4 py-3 ring-1 ring-white/[0.08]">
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan-400" />
                      <span className="text-[11px] font-medium tracking-wider text-slate-400">THINKING...</span>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions (only show when just the welcome message) */}
              {messages.length === 1 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => {
                          setInput('');
                          setMessages((prev) => [...prev, { role: 'user', content: q }]);
                          setIsLoading(true);
                          fetch('/api/chat', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ message: q, history: messages }),
                          })
                            .then((r) => r.json())
                            .then((data) => {
                              setMessages((prev) => [...prev, { role: 'bot', content: data.text || data.error || "Sorry, something went wrong." }]);
                            })
                            .catch(() => {
                              setMessages((prev) => [...prev, { role: 'bot', content: "Sorry, I encountered an error." }]);
                            })
                            .finally(() => setIsLoading(false));
                        }, 0);
                      }}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 bg-white/[0.02] px-4 py-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Mrityunjoy..."
                  disabled={isLoading}
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 disabled:opacity-40 disabled:shadow-none"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button - hidden when chat is open */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 transition-shadow hover:shadow-xl hover:shadow-blue-500/40"
        >
          <MessageSquare size={22} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-bold text-slate-900">
            1
          </span>
        </motion.button>
      )}
    </div>
  );
};
