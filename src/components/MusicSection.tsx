import { motion } from 'motion/react';
import { Play, Disc3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicSection() {
  const albums = [
    {
      title: 'VIBES ON VIBES',
      year: '2026',
      image: '/yo-maps-album.jpg',
      tracks: 16,
      feat: 'New Album · Apr 24, 2026',
    },
    {
      title: 'KOMANDO',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1644855640845-ab57a047320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      tracks: 12,
      feat: 'Album of the Year 2022',
    },
    {
      title: 'FINALLY',
      year: '2018',
      image: 'https://images.unsplash.com/photo-1598488035252-042a85bc8e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      tracks: 10,
      feat: 'Breakthrough Album',
    },
  ];

  const topTracks = [
    { no: '01', title: 'Mr & Mrs', feat: 'Yo Maps', duration: '4:10' },
    { no: '02', title: 'Finally', feat: 'feat. Macky 2', duration: '4:12' },
    { no: '03', title: 'So Mone', feat: 'feat. Tay Grin', duration: '3:47' },
    { no: '04', title: 'Try Again', feat: 'feat. Abel Chungu', duration: '3:55' },
    { no: '05', title: 'Confirmation', feat: 'feat. Iyanya', duration: '4:05' },
  ];

  return (
    <section id="music" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">
            Discography
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-wide font-light">
            Latest Releases
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From "Finally" to "Vibes on Vibes" — authentic Zambian sound across Africa and beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 p-6 border border-amber-400/40 rounded-lg bg-gradient-to-r from-amber-400/10 to-transparent text-center"
        >
          <span className="text-amber-400 tracking-widest uppercase text-xs mb-2 block">New Album Dropping</span>
          <h3 className="text-3xl tracking-widest mb-1">VIBES ON VIBES</h3>
          <p className="text-gray-400 text-sm">April 24, 2026 — 16 Tracks featuring Mafikizolo, Rotimi, Harmonize, Stonebwoy and more</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                <ImageWithFallback
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-black"
                  >
                    <Play size={24} fill="currentColor" />
                  </motion.button>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Disc3 className="text-amber-400" size={18} />
                <span className="text-gray-500 text-sm">{album.tracks} Tracks · {album.feat}</span>
              </div>
              <h3 className="text-2xl mb-1 tracking-wider">{album.title}</h3>
              <p className="text-amber-400 text-sm tracking-widest">{album.year}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-2xl tracking-widest mb-8 text-center text-amber-400 uppercase text-sm">
            Top Tracks
          </h3>
          {topTracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex items-center gap-6 py-4 border-b border-gray-800 hover:border-amber-400/40 transition-all duration-300 cursor-pointer"
            >
              <span className="text-gray-600 group-hover:text-amber-400 text-sm w-6 transition-colors">{track.no}</span>
              <div className="flex-1">
                <div className="font-medium group-hover:text-amber-400 transition-colors">{track.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">{track.feat}</div>
              </div>
              <span className="text-gray-500 text-sm">{track.duration}</span>
              <Play size={14} className="text-gray-600 group-hover:text-amber-400 transition-colors opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => window.open('https://www.youtube.com/@YoMapsOfficial', '_blank')}
            className="px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black tracking-widest hover:shadow-2xl hover:shadow-amber-400/40 transition-all duration-300"
          >
            VIEW ALL MUSIC
          </button>
        </motion.div>
      </div>
    </section>
  );
}
