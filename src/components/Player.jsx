import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { storyLyricsTimed } from '../data/storyLyricsTimed';
import { scenes } from '../data/scenes';

function getActiveItem(items, currentTime) {
  if (!items.length) {
    return null;
  }

  let active = items[0];
  for (const item of items) {
    if (currentTime >= item.time) {
      active = item;
    } else {
      break;
    }
  }
  return active;
}

export function Player({ audioRef, onEnded }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const rafRef = useRef(0);
  const syncRef = useRef(0);

  const currentLyric = useMemo(() => getActiveItem(storyLyricsTimed, currentTime), [currentTime]);
  const currentScene = useMemo(() => getActiveItem(scenes, currentTime), [currentTime]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const syncTime = () => {
      setCurrentTime(audio.currentTime || 0);
      rafRef.current = window.requestAnimationFrame(syncTime);
    };

    const handleLoaded = () => setIsReady(true);
    const handleCanPlay = () => setIsReady(true);

    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('canplay', handleCanPlay);
    syncRef.current = window.requestAnimationFrame(syncTime);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('canplay', handleCanPlay);
      window.cancelAnimationFrame(syncRef.current);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [audioRef]);

  useEffect(() => {
    if (!currentScene?.image) {
      setImageReady(false);
      return undefined;
    }

    const image = new window.Image();
    image.src = currentScene.image;
    image.onload = () => setImageReady(true);
    image.onerror = () => setImageReady(true);
    return undefined;
  }, [currentScene?.image]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ffc2d5] text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene?.image || 'scene'}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentScene?.image || '/images/1.jpg'})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: imageReady ? 1 : 0.85, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 text-center">
        <div className="max-w-3xl space-y-6 rounded-[2rem] border border-white/10 bg-black/18 px-6 py-10 backdrop-blur-sm sm:px-10 sm:py-12">
          <p className="text-xs uppercase tracking-[0.45em] text-white/70">
            {isReady ? 'Playing memory' : 'Preparing memory'}
          </p>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentLyric?.text || 'lyric'}
              className="font-display text-3xl leading-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {currentLyric?.text || '...'}
            </motion.p>
          </AnimatePresence>

          <div className="mx-auto flex max-w-lg items-center justify-center gap-3 text-sm text-white/80">
            <span className="h-px flex-1 bg-white/25" />
            <span>{Math.floor(currentTime)}s</span>
            <span className="h-px flex-1 bg-white/25" />
          </div>
        </div>
      </div>
    </div>
  );
}
