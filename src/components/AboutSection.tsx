import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Music } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Music, value: '50M+', label: 'Streams' },
    { icon: Award, value: '12+', label: 'Awards' },
    { icon: Users, value: '1M+', label: 'Fans' },
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571974599782-87624638275e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Yo Maps portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-amber-400/30 rounded-lg -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">
              About the Artist
            </span>

            <h2 className="text-5xl md:text-6xl mb-6 tracking-wide font-light">
              The Journey of
              <span className="block text-amber-400 mt-2">YO MAPS</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Born Martin Musonda Jr. in Lusaka, Zambia, Yo Maps emerged as one of the
              country's most celebrated artists. With a voice that moves the soul and
              lyrics that speak the language of love, he became a defining sound of
              modern Zambian music.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              From intimate studio sessions to packed concert arenas across Africa and
              beyond, his journey is one of passion, perseverance, and purpose. Multiple
              Kwacha Award winner. Every song is a story — and every story is real.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-3xl mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
