import { motion } from 'motion/react';

export function VideoSection() {
  const videos = [
    {
      title: 'So Mone',
      feat: 'feat. Tay Grin',
      embedId: 'Cu7UZWeRccc',
    },
    {
      title: 'Try Again',
      feat: 'feat. Abel Chungu',
      embedId: 'q_3qGYZotyM',
    },
    {
      title: 'Pick It Up',
      feat: 'Yo Maps',
      embedId: 'yhdi24skNV8',
    },
  ];

  // Extract YouTube ID from the provided URLs
  // https://youtu.be/yACnOHr5L4Y, https://youtu.be/vDkimmBktms, https://youtu.be/KjOBNrBEebI
  const featuredVideos = [
    { embedId: 'yACnOHr5L4Y', title: 'Featured Video 1' },
    { embedId: 'vDkimmBktms', title: 'Featured Video 2' },
    { embedId: 'KjOBNrBEebI', title: 'Featured Video 3' },
  ];

  return (
    <section id="videos" className="py-16 sm:py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Watch</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">Music <span className="text-amber-400">Videos</span></h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Watch the latest visuals from Yo Maps</p>
        </motion.div>

        {/* Featured videos — 3 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto mb-10">
          {featuredVideos.map((video, i) => (
            <motion.div key={video.embedId} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="rounded-lg overflow-hidden border border-gray-800 hover:border-amber-400/40 transition-colors duration-300"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
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
