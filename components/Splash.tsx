'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Splash: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center justify-center"
          >
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-blue-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                MM
              </div>
            </div>
          </motion.div>

          <div className="w-64 overflow-hidden rounded-full bg-slate-900">
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-xs font-mono tracking-widest text-slate-500 uppercase"
          >
            Initializing Portfolio... {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
