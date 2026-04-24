import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

function getTimeLeft() {
  const release = new Date('2026-04-24T00:00:00');
  const now = new Date();
  const diff = release.getTime() - now.getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function AlbumCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!timeLeft) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-black via-zinc-900 to-black border-b border-amber-400/30 pt-16 sm:pt-20 pb-4 sm:pb-5 px-4"
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <span className="text-amber-400 tracking-[0.3em] uppercase text-xs sm:text-sm font-medium">🎉 VIBES ON VIBES — OUT NOW</span>
          <div className="flex items-center gap-3">
            <a href="https://open.spotify.com/album/02CdoLMFBQ8jTvFlzvrpYB?si=vTW--7sSRzmGSjhDM8knVA" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs tracking-wider rounded-full hover:bg-green-600 transition-colors"
            >
              <img src="/spotify-icon.png" alt="Spotify" className="w-3.5 h-3.5" /> Stream on Spotify
            </a>
            <a href="https://youtube.com/@yomapsyo3164" target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-amber-400 text-amber-400 text-xs tracking-wider rounded-full hover:bg-amber-400 hover:text-black transition-colors"
            >
              <img src="/youtube-icon.png" alt="YouTube" className="w-3.5 h-3.5" /> Watch on YouTube
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      className="bg-black border-b border-amber-400/20 pt-16 sm:pt-20 pb-4 sm:pb-5 px-4"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
        <div className="text-center sm:text-left">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-[10px] sm:text-xs">New Album</p>
          <p className="text-white font-light tracking-widest text-sm sm:text-base">VIBES ON VIBES</p>
        </div>
        <div className="w-px h-8 bg-amber-400/20 hidden sm:block"></div>
        <div className="flex items-center gap-3 sm:gap-5">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
              <div className="text-center">
                <motion.div key={unit.value} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                  className="text-xl sm:text-3xl font-light text-amber-400 tabular-nums w-8 sm:w-12 text-center"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-gray-600 text-[9px] tracking-widest uppercase mt-0.5">{unit.label}</div>
              </div>
              {i < units.length - 1 && <span className="text-amber-400/30 text-xl font-light mb-3">:</span>}
            </div>
          ))}
        </div>
        <div className="w-px h-8 bg-amber-400/20 hidden sm:block"></div>
        <a href="https://open.spotify.com/album/02CdoLMFBQ8jTvFlzvrpYB?si=vTW--7sSRzmGSjhDM8knVA" target="_blank" rel="noreferrer"
          className="px-4 py-2 border border-amber-400 text-amber-400 text-xs tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 whitespace-nowrap"
        >
          STREAM NOW
        </a>
      </div>
    </motion.div>
  );
}
