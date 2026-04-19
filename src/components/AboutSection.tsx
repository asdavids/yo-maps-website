import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Music } from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Music, value: '250M+', label: 'Streams' },
    { icon: Award, value: '10+', label: 'Awards' },
    { icon: Users, value: '5M+', label: 'Fans' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/the_journey.JPG"
                alt="The Journey of Yo Maps"
                loading="lazy" className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-2/3 h-2/3 border-2 border-amber-400/30 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 lg:mt-0"
          >
            <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">About the Artist</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wide font-light">
              The Journey of
              <span className="block text-amber-400 mt-2">YO MAPS</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Born Elton Mulenga on November 29, 1994, in Kasama, Zambia, Yo Maps grew up on the Copperbelt and later moved to Kabwe where his music career began. With a golden voice and deeply emotional lyrics, he became the defining sound of modern Zambian music.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              He launched his career in 2016 with "Njikata Kuboko" and broke through nationally in 2018 with the smash hit "Finally" featuring Macky 2. Since then he has won multiple Ngoma Awards including Song of the Year, Outstanding Musician of the Year, and Album of the Year.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-3xl mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
