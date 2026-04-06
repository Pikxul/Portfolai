'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    dates: "September 2023 – Present",
    location: "Kolkata, India",
    bullets: [
      "Selected through TCS Ignite — a competitive program exclusively for Physics graduates demonstrating exceptional technical aptitude in a nationwide candidate pool.",
      "Engineered enterprise-scale web applications using React, Angular, and TypeScript with modular UI architectures and robust state management, accelerating feature delivery across distributed teams.",
      "Architected reusable Micro Frontend (MFE) components, decoupling feature development and improving long-term maintainability for multiple product squads.",
      "Optimized client-side rendering pipelines via Chrome DevTools and React Profiler, resolving bottlenecks and boosting page load performance by up to 40%.",
      "Shipped production-ready features integrated with REST APIs and deployed through Azure DevOps CI/CD pipelines within Agile/Scrum cycles, ensuring zero-downtime releases.",
      "Optimized Development Workflows & System Efficiency: Streamlined development processes to enhance team efficiency and minimize repetitive tasks.",
      "Optimized code performance, improving both user experience and system responsiveness.",
      "Feature Development, Defect Resolution & Client Support: Developed dynamic web apps with JavaScript and ReactJs, ensuring responsive design, cross-browser compatibility, and a 25% boost in user engagement.",
      "Integrated PostgreSQL for secure, scalable backend data handling.",
      "Collaboration & Documentation: Provided mentorship to junior developers, fostering skill growth and collaboration.",
      "Documented software methodologies for future projects and collaborated with backend teams using Node.js and Express.js to implement RESTful APIs, improving load times and performance."
    ],
    metrics: ["40% Performance Boost", "25% Engagement Increase", "Zero-Downtime Releases"]
  }
];

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Professional <span className="text-blue-500">Journey</span></h2>
          <div className="mx-auto h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        {/* Impact Highlights Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {experience[0].metrics.map((metric, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-slate-900">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10" />
              <TrendingUp className="mb-4 h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-bold text-white">{metric}</h3>
              <p className="mt-2 text-sm text-slate-500">Measurable impact delivered through technical excellence.</p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border transition-all duration-500",
                expandedIndex === index ? "border-blue-500/30 bg-slate-900/80" : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
              )}
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div 
                className="flex cursor-pointer flex-col p-8 md:flex-row md:items-center md:justify-between"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-400">{exp.company}</p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> {exp.dates}</span>
                      <span className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between md:mt-0">
                  <div className="flex space-x-2">
                    {exp.metrics.slice(0, 2).map((m, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-500/10 text-blue-400 border-none">
                        {m}
                      </Badge>
                    ))}
                  </div>
                  <div className="ml-4 text-slate-500">
                    {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="border-t border-slate-800 p-8 pt-0">
                      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {exp.bullets.map((bullet, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start space-x-3 text-slate-400"
                          >
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                            <span className="text-sm leading-relaxed">{bullet}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
