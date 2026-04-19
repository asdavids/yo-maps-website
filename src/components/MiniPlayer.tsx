import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipForward, SkipBack, Music, X, ChevronUp } from 'lucide-react';

const tracks = [
  { title: 'So Mone', feat: 'feat. Tay Grin', youtubeId: 'Cu7UZWeRccc', spotifyUrl: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk' },
  { title: 'Try Again', feat: 'feat. Abel Chungu', youtubeId: 'q_3qGYZotyM', spotifyUrl: 'https://open.spotify.com/album/4ntGqV2N4yix29JNEXEoCg' },
  { title: 'Confirmation', feat: 'feat. Iyanya', youtubeId: 'katIossPWoo', spotifyUrl: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk' },
  { title: 'Mr & Mrs', feat: 'Yo Maps', youtubeId: 'O_N7NhDjSAw', spotifyUrl: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk' },
  { title: 'Pick It Up', feat: 'Yo Maps', youtubeId: 'yhdi24skNV8', spotifyUrl: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk' },
];

export function MiniPlayer() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const track = tracks[trackIndex];

  const next = () => setTrackIndex((i) => (i + 1) % tracks.length);
  const prev = () => setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5, ease: 'backOut' }}
      className="fixed bottom-24 left-4 z-40 w-[calc(100vw-2rem)] max-w-sm sm:left-6 sm:w-80"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-2 rounded-xl overflow-hidden border border-gray-800 bg-zinc-900/95 backdrop-blur-lg shadow-2xl"
          >
            {/* YouTube embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                key={`${trackIndex}-${playing}`}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=${playing ? 1 : 0}&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Track info */}
            <div className="p-3 flex items-center justify-between">
              <div className="min-w-0">
                <div className="text-white text-sm font-medium truncate">{track.title}</div>
                <div className="text-gray-500 text-xs truncate">{track.feat}</div>
              </div>
              <a href={track.spotifyUrl} target="_blank" rel="noreferrer">
                <img src="/spotify-icon.png" alt="Spotify" className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity ml-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player bar */}
      <div className="rounded-xl border border-gray-800 bg-zinc-900/95 backdrop-blur-lg shadow-2xl px-3 py-2.5 flex items-center gap-3">
        {/* Album pulse */}
        <div className="relative flex-shrink-0">
          <div className={`w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center ${playing ? 'animate-pulse' : ''}`}>
            <Music size={14} className="text-amber-400" />
          </div>
        </div>

        {/* Track info */}
        <button onClick={() => setOpen(!open)} className="flex-1 text-left min-w-0">
          <div className="text-white text-xs font-medium truncate">{track.title}</div>
          <div className="text-gray-500 text-[10px] truncate">{track.feat}</div>
        </button>

        {/* Controls */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={prev} className="text-gray-400 hover:text-white transition-colors p-1">
            <SkipBack size={14} />
          </button>
          <button
            onClick={() => { setPlaying(!playing); if (!open) setOpen(true); }}
            className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-black hover:bg-amber-500 transition-colors"
          >
            {playing ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
          </button>
          <button onClick={next} className="text-gray-400 hover:text-white transition-colors p-1">
            <SkipForward size={14} />
          </button>
          <button onClick={() => setOpen(!open)} className="text-gray-600 hover:text-amber-400 transition-colors p-1">
            <ChevronUp size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={() => setDismissed(true)} className="text-gray-600 hover:text-white transition-colors p-1">
            <X size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
