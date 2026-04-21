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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Watch</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">
            Music <span className="text-amber-400">Videos</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Watch the latest visuals from Yo Maps</p>
        </motion.div>

        {/* Budget — Featured Single */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 sm:mb-14 border border-amber-400/40 rounded-xl overflow-hidden bg-gradient-to-br from-amber-400/10 to-zinc-900"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Artwork */}
            <div className="sm:w-48 md:w-56 flex-shrink-0">
              <img
                src="/budget-single.jpg"
                alt="Budget — Yo Maps"
                className="w-full h-48 sm:h-full object-cover"
              />
            </div>
            {/* Info + video */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-amber-400 tracking-widest uppercase text-[10px] mb-1 block">New Single · Vibes on Vibes</span>
                <h3 className="text-2xl sm:text-3xl font-light tracking-wider text-white mb-1">BUDGET</h3>
                <p className="text-gray-400 text-sm">ft. Frank Ro, Dizmo &amp; Kingtec · Prod. by Kingtec</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://youtu.be/d1zKK1K2p6M?si=pKBzmrU_75k4qynX"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm tracking-wider transition-colors rounded-sm"
                >
                  <img src="/youtube-icon.png" alt="YouTube" className="w-4 h-4 object-contain" />
                  Watch on YouTube
                </a>
                <a
                  href="https://open.spotify.com/track/1ulPW7cmYv1dpZeYIVqJo5?si=HXrMHkjmRS6qyvL9q9Nhqw"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm tracking-wider transition-colors rounded-sm"
                >
                  <img src="/spotify-icon.png" alt="Spotify" className="w-4 h-4 object-contain" />
                  Stream on Spotify
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto mb-10">
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
