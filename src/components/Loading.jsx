import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function Loading({ onReady }) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      onReady();
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [onReady]);

  return (
    <motion.section
      className="flex min-h-screen items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="space-y-5 rounded-[2rem] border border-white/10 bg-black/15 px-8 py-10 text-white shadow-glow backdrop-blur-md">
        <p className="font-display text-3xl sm:text-4xl">Loading 2 years of memories...</p>
        <div className="mx-auto flex items-center justify-center gap-2">
          <span className="loading-dot" />
          <span className="loading-dot" />
          <span className="loading-dot" />
        </div>
      </div>
    </motion.section>
  );
}
