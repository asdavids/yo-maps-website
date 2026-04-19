import { motion } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';

export function InstagramSection() {
  // Latest posts represented as static gallery tiles linking to Instagram
  const posts = [
    { id: 1, img: '/gallery-4.jpeg', caption: 'Studio vibes 🎵' },
    { id: 2, img: '/gallery-9.jpeg', caption: 'On stage 🔥' },
    { id: 3, img: '/gallery-2.jpeg', caption: 'The King 👑' },
    { id: 4, img: '/gallery-12.jpeg', caption: 'Live energy 🎤' },
    { id: 5, img: '/gallery-3.jpeg', caption: 'Performance ready' },
    { id: 6, img: '/gallery-11.jpeg', caption: 'Behind the scenes' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-amber-400" size={22} />
            <span className="text-amber-400 tracking-widest uppercase text-sm">Instagram</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-3">
            Follow <span className="text-amber-400">@yomapsofficial</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">Latest moments from Yo Maps</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-3xl mx-auto mb-8">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/yomapsofficial?igsh=ajgydGhhcXFxbGlw"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img src={post.img} alt={post.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="text-white" size={20} />
              </div>
              {/* Instagram gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <a
            href="https://www.instagram.com/yomapsofficial?igsh=ajgydGhhcXFxbGlw"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-gray-700 hover:border-amber-400 text-gray-400 hover:text-white transition-all duration-300 text-sm tracking-wider"
          >
            <Instagram size={16} />
            View on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
