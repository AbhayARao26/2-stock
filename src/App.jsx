import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Ending } from './components/Ending';
import { FloatingHearts } from './components/FloatingHearts';
import { Landing } from './components/Landing';
import { Loading } from './components/Loading';
import { Player } from './components/Player';

export default function App() {
  const [screen, setScreen] = useState('landing');
  const audioRef = useRef(null);

  const playAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    try {
      audio.currentTime = 0;
      await audio.play();
    } catch {
      // Browser may block autoplay until the user taps the UI again.
    }
  };

  const handleBegin = async () => {
    await playAudio();
    setScreen('loading');
  };

  const handleLoadingDone = () => setScreen('player');
  const handleReplay = async () => {
    await playAudio();
    setScreen('player');
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const handleEnded = () => setScreen('ending');
    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#ffd6e0_0%,#ffc0cb_100%)] font-body">
      <FloatingHearts />
      <audio ref={audioRef} src="/audio/Happy%202%20Years%20Love.mp3" preload="auto" />

      <AnimatePresence mode="wait">
        {screen === 'landing' && <Landing key="landing" onBegin={handleBegin} />}
        {screen === 'loading' && <Loading key="loading" onReady={handleLoadingDone} />}
        {screen === 'player' && <Player key="player" audioRef={audioRef} />}
        {screen === 'ending' && <Ending key="ending" onReplay={handleReplay} />}
      </AnimatePresence>
    </div>
  );
}
