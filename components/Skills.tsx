'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Database, Cloud, Settings, Terminal, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    name: "Languages",
    icon: Code,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "Frameworks",
    icon: Layout,
    skills: ["React.js", "Next.js", "Angular", "Node.js", "Express.js", "TailwindCSS"],
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    name: "Data",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Redis", "Prisma ORM"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10"
  },
  {
    name: "Cloud & CI/CD",
    icon: Cloud,
    skills: ["Azure (App Service, Functions, ARM Templates)", "Docker", "GitHub Actions"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    name: "Tools",
    icon: Settings,
    skills: ["Git", "Postman", "Jest", "Webpack", "Chrome DevTools", "Lighthouse", "JIRA"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  },
  {
    name: "Top Skills",
    icon: Cpu,
    skills: ["Retrieval-Augmented Generation (RAG)", "Vertex AI", "Next.js"],
    color: "text-amber-500",
    bgColor: "bg-amber-500/10"
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-slate-950/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Technical <span className="text-blue-500">Arsenal</span></h2>
          <p className="mx-auto max-w-2xl text-slate-500">A comprehensive toolkit for building modern, high-performance digital experiences.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-blue-500/30 hover:bg-slate-900/60"
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.bgColor} ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-slate-800 bg-slate-950/50 text-slate-400 transition-all hover:border-blue-500/50 hover:text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Decorative Glow */}
              <div className={`absolute -right-4 -bottom-4 h-24 w-24 rounded-full ${category.bgColor} blur-3xl opacity-0 transition-opacity group-hover:opacity-100`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
