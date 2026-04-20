import { motion } from 'motion/react';
import { Expand } from 'lucide-react';

export function GallerySection() {
  const images = [
    { src: '/gallery-12.jpeg', span: 'col-span-2 row-span-2', alt: 'Yo Maps performing live' },
    { src: '/gallery-4.jpeg',  span: 'col-span-1 row-span-1', alt: 'Yo Maps red leather jacket' },
    { src: '/gallery-9.jpeg',  span: 'col-span-1 row-span-1', alt: 'Yo Maps jumping on stage' },
    { src: '/gallery-2.jpeg',  span: 'col-span-1 row-span-2', alt: 'Yo Maps portrait' },
    { src: '/gallery-3.jpeg',  span: 'col-span-1 row-span-1', alt: 'Yo Maps red varsity jacket' },
    { src: '/gallery-8.jpeg',  span: 'col-span-1 row-span-1', alt: 'Yo Maps on stage' },
    { src: '/gallery-13.webp', span: 'col-span-1 row-span-2', alt: 'Yo Maps on set — Budget video shoot' },
    { src: '/gallery-14.webp', span: 'col-span-1 row-span-1', alt: 'Budget video shoot — camera' },
    { src: '/gallery-15.webp', span: 'col-span-2 row-span-1', alt: 'Budget video shoot — rooftop BTS' },
    { src: '/gallery-11.jpeg', span: 'col-span-1 row-span-2', alt: 'Yo Maps denim fit' },
    { src: '/gallery-5.jpeg',  span: 'col-span-1 row-span-1', alt: 'Fans celebrating' },
    { src: '/gallery-10.jpeg', span: 'col-span-1 row-span-1', alt: 'Crowd reaching for Yo Maps' },
    { src: '/gallery-1.jpeg',  span: 'col-span-1 row-span-2', alt: 'Yo Boy leather jacket' },
    { src: '/gallery-6.jpeg',  span: 'col-span-1 row-span-1', alt: 'Yo Maps with Lamborghini' },
    { src: '/gallery-7.jpeg',  span: 'col-span-1 row-span-1', alt: 'Yo Maps with duffle bag' },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Behind the Scenes</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">Gallery</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Moments from the stage, the studio, and everywhere in between</p>
        </motion.div>

        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-2 sm:hidden">
          {images.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Expand className="text-amber-400" size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: masonry grid */}
        <div className="hidden sm:grid grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}
              className={`${image.span} group relative overflow-hidden rounded-lg cursor-pointer`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Expand className="text-amber-400" size={28} />
              </div>
              <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10 sm:mt-16">
          <a href="https://www.instagram.com/yomapsofficial?igsh=ajgydGhhcXFxbGlw" target="_blank" rel="noreferrer"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 border-2 border-amber-400 text-amber-400 tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm sm:text-base"
          >
            VIEW FULL GALLERY
          </a>
        </motion.div>
      </div>
    </section>
  );
}
