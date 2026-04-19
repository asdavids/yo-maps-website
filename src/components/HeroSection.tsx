import { motion } from 'motion/react';
import { Play, Music2 } from 'lucide-react';

const streamingPlatforms = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.305a.75.75 0 01-1.032.248c-2.826-1.727-6.38-2.117-10.567-1.16a.75.75 0 01-.334-1.463c4.583-1.047 8.515-.596 11.685 1.343a.75.75 0 01.248 1.032zm1.472-3.27a.938.938 0 01-1.29.308c-3.233-1.987-8.163-2.563-11.986-1.403a.937.937 0 01-.543-1.794c4.368-1.323 9.795-.682 13.511 1.599a.938.938 0 01.308 1.29zm.127-3.409C15.37 8.37 9.386 8.163 5.8 9.258a1.125 1.125 0 01-.652-2.152c4.132-1.252 11-1.01 15.34 1.617a1.125 1.125 0 01-1.373 1.793z"/>
      </svg>
    ),
  },
  {
    name: 'Apple Music',
    href: 'https://music.apple.com/zm/artist/yo-maps/1455955222',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a4.967 4.967 0 001.88-2.208c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.598-.003-11.396zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.951-1.4 1.063-.373.066-.747.035-1.117-.066-.674-.195-1.162-.898-1.23-1.574-.07-.698.195-1.275.749-1.695.358-.27.77-.41 1.2-.476.305-.047.612-.085.919-.125.249-.033.373-.157.373-.396V8.24a.34.34 0 00-.27-.335l-4.516-.913a.317.317 0 00-.386.311v7.842c0 .355-.03.706-.156 1.04-.299.784-.88 1.24-1.693 1.378-.377.063-.753.04-1.123-.063-.69-.196-1.14-.86-1.2-1.566-.07-.707.195-1.283.749-1.703.337-.254.714-.404 1.118-.47l.925-.13c.279-.038.397-.162.397-.44V6.31c0-.248.145-.425.382-.472l5.863-1.18c.268-.053.485.12.485.396v5.06z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
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

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
          className="mb-6"
        >
          <Music2 size={52} className="text-amber-400 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-400 tracking-[0.4em] text-xs uppercase mb-4"
        >
          Zambia's Voice of Love
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
              whileHover={{ scale: 1.2, color: '#fbbf24' }}
              className="text-white/40 hover:text-amber-400 transition-colors duration-300"
              title={platform.name}
            >
              {platform.icon}
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
