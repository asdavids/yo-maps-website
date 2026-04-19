import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const streamingPlatforms = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw',
    icon: '/spotify-icon.png',
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/zm/artist/yo-maps/1455955222',
    icon: '/apple-music-icon.png',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL',
    icon: '/youtube-icon.png',
  },
  {
    name: 'Boomplay',
    href: 'https://www.boomplay.com/artists/4334757',
    icon: '/boomplay-icon.png',
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/yo-maps-hero.jpg"
          alt="Yo Maps"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="mb-6"
        >
          <img src="/yo-maps-logo.png" alt="Yo Maps" className="w-28 md:w-36 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-400 tracking-[0.4em] text-xs uppercase mb-4"
        >
          International Artist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-7xl md:text-9xl lg:text-[12rem] tracking-[0.15em] mb-4 font-light"
        >
          YO MAPS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 tracking-wider mb-12"
        >
          ARTIST · SONGWRITER · PERFORMER
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-5 mb-10"
        >
          <button
            className="group px-8 py-4 bg-amber-400 text-black tracking-wider hover:bg-amber-500 transition-all duration-300 flex items-center gap-3 justify-center font-medium"
            onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play size={18} className="group-hover:scale-110 transition-transform" fill="currentColor" />
            LISTEN NOW
          </button>
          <button
            className="px-8 py-4 border-2 border-white text-white tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE
          </button>
        </motion.div>

        {/* Streaming platform icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-px bg-white/20"></div>
          <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mx-3">Stream on</p>
          <div className="w-8 h-px bg-white/20"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center gap-6 mt-4"
        >
          {streamingPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              title={platform.name}
            >
              <img src={platform.icon} alt={platform.name} className="w-7 h-7 object-contain" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
