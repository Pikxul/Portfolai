'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 md:px-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            scale: { duration: 0.3 }
          }}
          className="relative mx-auto mb-10 h-56 w-56 md:h-72 md:w-72 cursor-pointer"
        >
          {/* Radial Glow Effect */}
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-2xl" />
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 shadow-[0_0_60px_rgba(37,99,235,0.6)]">
            <div className="h-full w-full overflow-hidden rounded-full bg-slate-950">
              <Image
                src="/profile.png"
                alt="Mrityunjoy Mondal"
                width={500}
                height={500}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                priority
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  (e.target as any).src = "https://picsum.photos/seed/profile/400/400";
                }}
              />
            </div>
          </div>
          {/* Decorative Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border border-dashed border-blue-500/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-5 rounded-full border border-dotted border-cyan-500/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium tracking-wider text-blue-400 uppercase"
        >
          <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Mrityunjoy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mondal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 text-lg font-medium text-slate-400 md:text-xl lg:text-2xl"
        >
          Software Engineer @ TCS | Full Stack Developer | AI-Powered Web Applications | 2× Azure Certified
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-slate-500 leading-relaxed"
        >
          I build software that scales — and sometimes software that understands human emotion. 
          Specializing in React, Next.js, and Node.js with a focus on performance engineering 
          and modular frontend architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
        >
          <Button
            size="lg"
            onClick={scrollToExperience}
            className="group h-14 rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            View Experience
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-14 rounded-full border-slate-700 bg-transparent px-8 text-base font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
          >
            <a href="/resume" target="_blank">
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center space-x-8 text-slate-500"
        >
          <a href="https://github.com/Pikxul" target="_blank" className="transition-colors hover:text-white">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mrityunjoy-mondal" target="_blank" className="transition-colors hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href="mailto:mrityunjoyop123@gmail.com" className="transition-colors hover:text-white">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-6 justify-center rounded-full border-2 border-slate-800 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-2 w-1 rounded-full bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
};
