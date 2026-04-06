'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Layers, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Purbodoy WebApp — Travel Booking Platform",
    stack: ["Next.js", "TypeScript", "REST APIs", "Prisma ORM", "PostgreSQL", "TailwindCSS"],
    bullets: [
      "Architected a dual-interface (customer/admin) booking platform using Next.js, TypeScript, and Prisma ORM on PostgreSQL.",
      "Reduced Time to Interactive (TTI) by 30% via Lighthouse audits and optimized rendering strategies."
    ],
    links: [
      { name: "GitHub", url: "https://github.com/Pikxul", icon: Github }
    ],
    status: "In Progress",
    color: "from-blue-600/20 to-cyan-400/20",
    icon: Zap
  },
  {
    title: "PixBus — Online Bus Ticketing Platform",
    stack: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    bullets: [
      "Delivered real-time search and seat selection using Angular and TypeScript for a seamless end-to-end booking experience.",
      "Accelerated frontend performance by 40% through DOM optimization, lazy loading, and efficient API response handling."
    ],
    dates: "July – December 2025",
    links: [
      { name: "GitHub", url: "https://github.com/Pikxul", icon: Github }
    ],
    color: "from-indigo-600/20 to-purple-400/20",
    icon: Layers
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Featured <span className="text-blue-500">Projects</span></h2>
          <p className="mx-auto max-w-2xl text-slate-500">Building scalable, high-performance web applications with modern tech stacks.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition-all hover:border-blue-500/30 hover:bg-slate-900/60"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl text-white"
                >
                  <project.icon size={48} />
                </motion.div>
              </div>

              <div className="flex flex-grow flex-col p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  {project.status && (
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                      {project.status}
                    </Badge>
                  )}
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-slate-800 text-slate-400 border-none">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="mb-8 flex-grow space-y-3">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-500">
                      <Code2 className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:border-blue-500/50 hover:text-white"
                    >
                      <link.icon size={16} />
                      <span>{link.name}</span>
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
