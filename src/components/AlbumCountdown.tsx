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
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="bg-black border-t border-b border-amber-400/30 py-6 text-center">
        <p className="text-amber-400 tracking-widest uppercase text-sm">VIBES ON VIBES — OUT NOW 🎉</p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
                <motion.div
                  key={unit.value}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-light text-amber-400 tabular-nums w-10 sm:w-12 text-center"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-gray-600 text-[9px] sm:text-[10px] tracking-widest uppercase mt-0.5">{unit.label}</div>
              </div>
              {i < units.length - 1 && <span className="text-amber-400/40 text-xl sm:text-2xl font-light mb-3">:</span>}
            </div>
          ))}
        </div>

        <div className="w-px h-8 bg-amber-400/20 hidden sm:block"></div>

        <a
          href="https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-amber-400 text-amber-400 text-xs tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 whitespace-nowrap"
        >
          PRE-SAVE
        </a>
      </div>
    </motion.div>
  );
}
