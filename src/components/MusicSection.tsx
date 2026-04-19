import { motion } from 'motion/react';
import { Play, Disc3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicSection() {
  const albums = [
    { title: 'VIBES ON VIBES', year: '2026', image: '/yo-maps-album.JPG', tracks: 16, feat: 'New Album · Apr 24, 2026', spotify: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw' },
    { title: 'KOMANDO', year: '2022', image: '/komando.JPG', tracks: 12, feat: 'Album of the Year 2022', spotify: 'https://open.spotify.com/album/1CWwQnaXuorrvpXaaHoAPQ?si=6PvzthX9SkmdYfNN1fjnDw' },
    { title: 'TRY AGAIN', year: '2020', image: '/try-again.jpg', tracks: 12, feat: 'Fan Favourite', spotify: 'https://open.spotify.com/album/4ntGqV2N4yix29JNEXEoCg?si=JRjiWyxPSzmjAPLKHo5KzA' },
  ];

  const topTracks = [
    { no: '01', title: 'So Mone', feat: 'feat. Tay Grin', youtube: 'https://youtu.be/Cu7UZWeRccc?si=kD8W_Pg9eBvf7Zt0' },
    { no: '02', title: 'Try Again', feat: 'feat. Abel Chungu', youtube: 'https://youtu.be/q_3qGYZotyM?si=qDVZoDQw4cXId_63' },
    { no: '03', title: 'Confirmation', feat: 'feat. Iyanya', youtube: 'https://youtu.be/katIossPWoo?si=pKvi__8JzXsO3l76' },
    { no: '04', title: 'Mr & Mrs', feat: 'Yo Maps', youtube: 'https://youtu.be/O_N7NhDjSAw?si=BcrWsbcuRFaNmuNu' },
    { no: '05', title: 'Pick It Up', feat: 'Yo Maps', youtube: 'https://youtu.be/yhdi24skNV8?si=wnglN6HJbVjTg44R' },
  ];

  const tracklist = [
    { no: '01', title: 'NEGATIVE ENERGY', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '02', title: 'BUDGET', feat: 'ft. FRANK RO, DIZMO & KINGTEC', prod: 'PROD BY KINGTEC', spotify: 'https://open.spotify.com/track/1ulPW7cmYv1dpZeYIVqJo5?si=HXrMHkjmRS6qyvL9q9Nhqw' },
    { no: '03', title: 'MY DARLING', feat: 'ft. MAFIKIZOLO', prod: 'PROD BY DJ MEGI' },
    { no: '04', title: 'HELLO', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '05', title: 'TOUCH ME', feat: 'ft. ROTIMI', prod: 'PROD BY KINGTEC' },
    { no: '06', title: 'SANITY', feat: 'ft. INNOS B', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '07', title: 'BAE BAE', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '08', title: 'CONDOM', feat: 'ft. BOBBY EAST', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '09', title: 'AM BEGGING', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '10', title: 'MOSES', feat: 'ft. HARMONIZE', prod: 'PROD BY KINGTEC' },
    { no: '11', title: 'CHAFINA', feat: 'ft. MUZO ALPHONSO', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '12', title: "IT'S OVER", feat: 'ft. MAKHADZI', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '13', title: 'IF YOU LIKE', feat: 'ft. DIGO', prod: 'PROD BY KINGTEC' },
    { no: '14', title: 'CHARLEH', feat: 'ft. STONEBWOY (REMIX)', prod: 'PROD BY KINGTEC & C-MARK' },
    { no: '15', title: '50 DEEP', prod: 'PROD BY KINGTEC' },
    { no: '16', title: 'MIRACLE', prod: 'PROD BY JAZZY BOY & C-MARK · MIXED & MASTERED BY KINGTEC' },
  ];

  return (
    <section id="music" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Discography</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">Latest Releases</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From "Finally" to "Vibes on Vibes" — authentic Zambian sound across Africa and beyond
          </p>
        </motion.div>

        {/* New Album Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12 sm:mb-16 border border-amber-400/40 rounded-lg bg-gradient-to-br from-amber-400/10 to-transparent overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-48 md:w-64 lg:w-80 flex-shrink-0">
              <img src="/yo-maps-album.JPG" alt="Vibes on Vibes" className="w-full h-48 sm:h-full object-cover" />
            </div>
            <div className="flex-1 p-4 sm:p-6 md:p-8">
              <span className="text-amber-400 tracking-widest uppercase text-xs mb-2 block">New Album Dropping</span>
              <h3 className="text-xl sm:text-3xl tracking-widest mb-1">VIBES ON VIBES</h3>
              <p className="text-gray-400 text-sm mb-4 sm:mb-6">April 24, 2026 · 16 Tracks</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {tracklist.map((track) => (
                  <div key={track.no} className="flex items-start gap-2 py-1 border-b border-gray-800/60 group">
                    <span className="text-amber-400/60 text-xs w-5 flex-shrink-0 mt-0.5">{track.no}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <div className="text-xs sm:text-sm font-medium tracking-wide truncate group-hover:text-amber-400 transition-colors">{track.title}</div>
                        {(track as any).spotify && (
                          <a
                            href={(track as any).spotify}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="Stream on Spotify"
                            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                          >
                            <img src="/spotify-icon.png" alt="Spotify" className="w-3 h-3 object-contain" />
                          </a>
                        )}
                      </div>
                      {(track as any).feat && <div className="text-gray-500 text-[10px]">{(track as any).feat}</div>}
                      <div className="text-gray-600 text-[9px] leading-tight">{track.prod}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {albums.map((album, index) => (
            <motion.div key={album.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="group relative">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4 sm:mb-6">
                <ImageWithFallback src={album.image} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400 flex items-center justify-center text-black">
                    <Play size={22} fill="currentColor" />
                  </motion.button>
                  {album.spotify && (
                    <a href={album.spotify} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full hover:bg-black/80 transition-colors">
                      <img src="/spotify-icon.png" alt="Spotify" className="w-4 h-4" />
                      <span className="text-white text-xs tracking-wider">Stream</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Disc3 className="text-amber-400" size={16} />
                <span className="text-gray-500 text-xs sm:text-sm">{album.tracks} Tracks · {album.feat}</span>
              </div>
              <h3 className="text-xl sm:text-2xl mb-1 tracking-wider">{album.title}</h3>
              <p className="text-amber-400 text-sm tracking-widest">{album.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Top Tracks */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-xs tracking-widest mb-6 sm:mb-8 text-center text-amber-400 uppercase">Top Tracks</h3>
          {topTracks.map((track, index) => (
            <motion.a
              key={track.title}
              href={track.youtube}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex items-center gap-4 py-3 sm:py-4 border-b border-gray-800 hover:border-amber-400/40 transition-all duration-300 cursor-pointer"
            >
              <span className="text-gray-600 group-hover:text-amber-400 text-sm w-5 transition-colors">{track.no}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium group-hover:text-amber-400 transition-colors text-sm sm:text-base truncate">{track.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">{track.feat}</div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <img src="/youtube-icon.png" alt="YouTube" className="w-4 h-4 object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-xs tracking-wider text-gray-600 group-hover:text-red-500 hidden sm:block transition-colors">Watch</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <button onClick={() => window.open('https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL', '_blank')}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black tracking-widest hover:shadow-2xl hover:shadow-amber-400/40 transition-all duration-300 text-sm sm:text-base"
          >
            VIEW ALL MUSIC
          </button>
        </motion.div>
      </div>
    </section>
  );
}
