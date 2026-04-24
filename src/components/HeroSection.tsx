import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const streamingPlatforms = [
  { name: 'Spotify', href: 'https://open.spotify.com/album/02CdoLMFBQ8jTvFlzvrpYB?si=vTW--7sSRzmGSjhDM8knVA', icon: '/spotify-icon.png' },
  { name: 'Apple Music', href: 'https://music.apple.com/zm/album/vibes-on-vibes/1893808032', icon: '/apple-music-icon.png' },
  { name: 'YouTube', href: 'https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL', icon: '/youtube-icon.png' },
  { name: 'Boomplay', href: 'https://www.boomplay.com/artists/4334757', icon: '/boomplay-icon.png' },
  { name: 'Deezer', href: 'https://www.deezer.com/en/artist/61363442', icon: '/deezer-icon.png' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@yomapsyo?_r=1&_t=ZS-95fwV8hOsQq', icon: null },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.74a4.85 4.85 0 01-1-.05z"/>
  </svg>
);

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: '100svh' }}>
      <div className="absolute inset-0">
        <img src="/yo-maps-hero.jpg" alt="Yo Maps" className="w-full h-full object-cover object-right sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90 sm:from-black/30 sm:via-transparent sm:to-black"></div>
      </div>

      <div className="relative h-full flex flex-col justify-end z-10 px-5 sm:px-6 pb-safe">
        <div className="pb-8 sm:pb-12">
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row gap-3 mb-6 sm:mb-8"
          >
            <a
              href="https://open.spotify.com/album/02CdoLMFBQ8jTvFlzvrpYB?si=vTW--7sSRzmGSjhDM8knVA"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none min-w-0 px-4 py-3 sm:px-8 sm:py-4 bg-amber-400 text-black tracking-wider hover:bg-amber-500 transition-all duration-300 flex items-center gap-2 justify-center font-medium text-sm"
            >
              <Play size={15} fill="currentColor" className="flex-shrink-0" />
              <span className="truncate">LISTEN NOW</span>
            </a>
            <button
              className="flex-1 sm:flex-none min-w-0 px-4 py-3 sm:px-8 sm:py-4 border-2 border-white text-white tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-sm"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE
            </button>
          </motion.div>

          {/* Stream on divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-6 h-px bg-white/20"></div>
            <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mx-2">Stream on</p>
            <div className="w-6 h-px bg-white/20"></div>
          </motion.div>

          {/* Streaming icons — wrap on tiny screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center flex-wrap gap-4 sm:gap-5"
          >
            {streamingPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ scale: 1.2 }}
                className="opacity-50 hover:opacity-100 transition-opacity duration-300 text-white touch-manipulation"
                title={platform.name}
                style={{ minWidth: 24, minHeight: 24 }}
              >
                {platform.icon
                  ? <img src={platform.icon} alt={platform.name} className="w-6 h-6 object-contain" />
                  : <TikTokIcon />
                }
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
