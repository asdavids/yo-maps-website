import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Expand } from 'lucide-react';

export function GallerySection() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      span: 'col-span-2 row-span-2',
      alt: 'Yo Maps live concert',
    },
    {
      src: 'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      span: 'col-span-1 row-span-1',
      alt: 'Stage lights',
    },
    {
      src: 'https://images.unsplash.com/photo-1598488035252-042a85bc8e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      span: 'col-span-1 row-span-1',
      alt: 'Studio session',
    },
    {
      src: 'https://images.unsplash.com/photo-1571974599782-87624638275e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      span: 'col-span-1 row-span-2',
      alt: 'Yo Maps portrait',
    },
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      span: 'col-span-1 row-span-1',
      alt: 'Performance',
    },
    {
      src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      span: 'col-span-2 row-span-1',
      alt: 'Music production',
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">
            Behind the Scenes
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-wide font-light">Gallery</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Moments from the stage, the studio, and everywhere in between
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${image.span} group relative overflow-hidden rounded-lg cursor-pointer`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Expand className="text-amber-400" size={28} />
              </div>
              <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 border-2 border-amber-400 text-amber-400 tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300">
            VIEW FULL GALLERY
          </button>
        </motion.div>
      </div>
    </section>
  );
}
