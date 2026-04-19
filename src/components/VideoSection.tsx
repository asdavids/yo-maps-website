import { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

function YouTubeFacade({ embedId, title }: { embedId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full cursor-pointer group"
      style={{ paddingBottom: '56.25%' }}
      onClick={() => setLoaded(true)}
    >
      <img
        src={thumb}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg transition-colors duration-200"
        >
          <Play size={22} fill="white" className="text-white ml-1" />
        </motion.div>
      </div>
    </div>
  );
}

export function VideoSection() {
  const videos = [
    { embedId: 'yACnOHr5L4Y', title: 'Yo Maps — Featured Video' },
    { embedId: 'vDkimmBktms', title: 'Yo Maps — Featured Video 2' },
    { embedId: 'KjOBNrBEebI', title: 'Yo Maps — Featured Video 3' },
  ];

  return (
    <section id="videos" className="py-16 sm:py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Watch</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">
            Music <span className="text-amber-400">Videos</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Watch the latest visuals from Yo Maps</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-10">
          {videos.map((video, i) => (
            <motion.div key={video.embedId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-lg overflow-hidden border border-gray-800 hover:border-amber-400/40 transition-colors duration-300"
            >
              <YouTubeFacade embedId={video.embedId} title={video.title} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10 sm:mt-12">
          <a href="https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black tracking-widest hover:shadow-2xl hover:shadow-amber-400/40 transition-all duration-300 text-sm sm:text-base"
          >
            <img src="/youtube-icon.png" alt="YouTube" className="w-5 h-5 object-contain" />
            VIEW ALL VIDEOS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
