'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, ExternalLink, Github, Box } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const achievements = [
  {
    title: "TCS AI Hackathon 2025 — Champion",
    context: "Crowned Champion from India among 281,000+ associates across 58 countries globally.",
    date: "October 2025",
    links: [
      { name: "GitHub", url: "https://github.com/Pikxul", icon: Github },
      { name: "npm", url: "https://www.npmjs.com/", icon: Box }
    ],
    type: "wins",
    icon: Trophy,
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-500"
  },
  {
    title: "Built EmpathAI",
    context: "An AI-driven SDK for real-time emotion detection via behavioral analytics, published to npm.",
    type: "metrics",
    icon: Star,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500"
  },
  {
    title: "TCS AI Friday Hackathon 2025 — Finalist",
    context: "Developed a Legacy Code Documentation Agent using RAG pipelines and LangChain for enterprise codebase modernization.",
    date: "September 2025",
    type: "leadership",
    icon: Award,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500"
  }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 bg-slate-950/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Global <span className="text-blue-500">Recognition</span></h2>
          <p className="mx-auto max-w-2xl text-slate-500">Recognized for excellence in AI innovation and software engineering on a global stage.</p>
        </motion.div>

        {/* Top 3 Impact Strip */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8 border-y border-slate-800 py-8">
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-black text-blue-500">281K+</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Competitors</span>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-black text-blue-500">58</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Countries</span>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-black text-blue-500">#1</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Champion</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border ${achievement.borderColor} bg-gradient-to-br ${achievement.color} p-8 backdrop-blur-xl transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                <achievement.icon className={`h-8 w-8 ${achievement.iconColor}`} />
              </div>
              
              <div className="flex-grow">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline" className="border-white/20 text-xs font-mono text-white/60 uppercase tracking-widest">
                    {achievement.type}
                  </Badge>
                  {achievement.date && <span className="text-xs font-medium text-white/40">{achievement.date}</span>}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white leading-tight">{achievement.title}</h3>
                <p className="text-slate-300/80 leading-relaxed">{achievement.context}</p>
              </div>

              {achievement.links && (
                <div className="mt-8 flex space-x-4">
                  {achievement.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="flex items-center space-x-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      <link.icon size={16} />
                      <span>{link.name}</span>
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
              
              {/* Spotlight Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
