import { motion } from 'framer-motion';

export function Ending({ onReplay }) {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-2xl rounded-[2rem] border border-white/10 bg-black/35 px-6 py-10 text-white shadow-glow backdrop-blur-md sm:px-10"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <p className="font-display text-4xl leading-tight sm:text-5xl">
          Will you keep making memories with me?
        </p>
        <p className="mt-5 text-base text-white/85 sm:text-lg">
          Happy 2 year Anniversary Poorvi ❤️
        </p>
        <motion.button
          type="button"
          onClick={onReplay}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-semibold tracking-[0.2em] text-pink-500 shadow-lg shadow-black/20"
        >
          Replay
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
