'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science in Physics (Honours)",
    institution: "University of Calcutta",
    dates: "April 2020 – July 2023",
    location: "Kolkata, West Bengal",
    score: "CGPA: 7.40/10",
    description: "Specialized in Mathematical Physics and Quantum Mechanics. Selected for TCS Ignite program based on academic excellence in Physics and Mathematics."
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-slate-950/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            Educational <span className="text-blue-500">History</span>
          </motion.h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
        </div>

        <div className="grid gap-8 md:grid-cols-1 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-blue-500/50 hover:bg-slate-900"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-slate-300 mt-1">{edu.institution}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} className="text-blue-500" />
                        <span>{edu.dates}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} className="text-blue-500" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div className="mt-4 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">
                      {edu.score}
                    </div>

                    <p className="mt-6 text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
