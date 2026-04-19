import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const streamingPlatforms = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw', icon: '/spotify-icon.png' },
  { name: 'Apple Music', href: 'https://music.apple.com/zm/artist/yo-maps/1455955222', icon: '/apple-music-icon.png' },
  { name: 'YouTube', href: 'https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL', icon: '/youtube-icon.png' },
  { name: 'Boomplay', href: 'https://www.boomplay.com/artists/4334757', icon: '/boomplay-icon.png' },
];

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src="/yo-maps-hero.png" alt="Yo Maps" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-end z-10 pb-12 px-4">
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row gap-3 mb-8 w-full max-w-xs sm:max-w-none sm:w-auto"
        >
          <button
            className="group flex-1 sm:flex-none px-6 py-3 sm:px-8 sm:py-4 bg-amber-400 text-black tracking-wider hover:bg-amber-500 transition-all duration-300 flex items-center gap-2 justify-center font-medium text-sm sm:text-base"
            onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play size={16} fill="currentColor" />
            LISTEN NOW
          </button>
          <button
            className="flex-1 sm:flex-none px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE
          </button>
        </motion.div>

        {/* Streaming icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-2 mb-3"
        >
          <div className="w-6 h-px bg-white/20"></div>
          <p className="text-white/30 text-[9px] tracking-[0.25em] uppercase mx-2">Stream on</p>
          <div className="w-6 h-px bg-white/20"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-5"
        >
          {streamingPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.08 }}
              whileHover={{ scale: 1.2 }}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              title={platform.name}
            >
              <img src={platform.icon} alt={platform.name} className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
