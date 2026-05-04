import { motion } from 'framer-motion';

export function Landing({ onBegin }) {
  return (
    <motion.section
      className="flex min-h-screen items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-2xl rounded-[2rem] border border-white/15 bg-white/10 px-6 py-10 shadow-glow backdrop-blur-md sm:px-10 sm:py-12">
        <p className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Hey Poovy…
          <br />
          I made something for you that I think you&apos;ll love ❤️
        </p>
        <motion.button
          type="button"
          onClick={onBegin}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-semibold tracking-[0.2em] text-pink-500 shadow-lg shadow-black/15 transition"
        >
          Click to Begin
        </motion.button>
      </div>
    </motion.section>
  );
}
