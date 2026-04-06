'use client';

import React from 'react';
import { Splash } from '@/components/Splash';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Chatbot } from '@/components/Chatbot';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative">
      <Splash />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Experience />
          <Education />
          <Achievements />
          <Projects />
          <Skills />
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950/80 py-12 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-white">MM<span className="text-blue-500">.</span></h3>
                <p className="text-slate-500">Building the future of web applications with AI and modern technologies.</p>
              </div>
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
                <ul className="space-y-4 text-slate-500">
                  <li className="flex items-center space-x-3">
                    <Mail size={18} className="text-blue-500" />
                    <span>mrityunjoyop123@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone size={18} className="text-blue-500" />
                    <span>+91-6290268745</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin size={18} className="text-blue-500" />
                    <span>Kolkata, West Bengal, India</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Social</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Pikxul" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/mrityunjoy-mondal" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-slate-900 pt-8 text-center text-sm text-slate-600">
              <p>© {new Date().getFullYear()} Mrityunjoy Mondal. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <Chatbot />
    </main>
  );
}
