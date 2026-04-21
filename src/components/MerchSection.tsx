import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const product = {
  name: 'YO MAPS SNAPBACK',
  tagline: 'Official Signed Cap',
  description: 'The official Yo Maps snapback — embroidered YM logo with microphone detail, perforated panels, and personally signed by Yo Maps himself. Limited stock. All signed by Yo Maps.',
  price: 'K450',
  badge: 'ALL SIGNED BY YO MAPS',
  images: [
    { src: '/merch-cap-side.webp', alt: 'Yo Maps cap — side view' },
    { src: '/merch-cap-front.webp', alt: 'Yo Maps cap — front view' },
    { src: '/merch-cap-street.webp', alt: 'Yo Maps cap — street' },
    { src: '/merch-cap-lifestyle.webp', alt: 'Yo Maps cap — lifestyle' },
    { src: '/merch-cap-hand.webp', alt: 'Yo Maps cap — close up' },
  ],
  features: ['Embroidered YM logo', 'Signed by Yo Maps', 'Perforated panels', 'Snapback fit', 'Limited edition'],
  whatsapp: 'https://wa.me/260972722878?text=Hi%2C%20I%20want%20to%20order%20the%20Yo%20Maps%20Snapback%20Cap!',
};

export function MerchSection() {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setActiveImg((i) => (i + 1) % product.images.length);
  const prev = () => setActiveImg((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <section id="merch" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Official Store</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 tracking-wide font-light">
            Yo Maps <span className="text-amber-400">Merch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Wear the brand. Own a piece of Zambia's biggest artist.
          </p>
        </motion.div>

        {/* Product card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Image gallery */}
            <div className="space-y-3">
              {/* Main image */}
              <div
                className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-gray-800 cursor-zoom-in group"
                onClick={() => setLightbox(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={product.images[activeImg].src}
                    alt={product.images[activeImg].alt}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Signed badge */}
                <div className="absolute top-3 left-3 bg-amber-400 text-black text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase">
                  {product.badge}
                </div>

                {/* Arrows */}
                <button onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={16} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImg === i ? 'border-amber-400 scale-105' : 'border-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <span className="text-amber-400 tracking-widest uppercase text-xs mb-2 block">{product.tagline}</span>
                <h3 className="text-3xl sm:text-4xl font-light tracking-widest text-white mb-2">{product.name}</h3>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-light text-amber-400">{product.price}</span>
                  <span className="text-gray-600 text-xs tracking-wider uppercase line-through">K600</span>
                  <span className="text-green-400 text-xs tracking-wider bg-green-400/10 px-2 py-0.5 rounded-full">Limited Stock</span>
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></div>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white tracking-widest transition-all duration-300 text-sm font-medium mb-3 group"
                >
                  <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                  ORDER VIA WHATSAPP
                </a>

                <a
                  href="https://wa.me/260972722878?text=Hi%2C%20I%20want%20to%20enquire%20about%20Yo%20Maps%20merchandise!"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black tracking-widest transition-all duration-300 text-sm"
                >
                  <ShoppingBag size={16} />
                  ENQUIRE ABOUT MORE MERCH
                </a>

                <p className="text-gray-600 text-xs text-center mt-4 tracking-wider">
                  Orders fulfilled via Olios Records · +260 972 722 878
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center px-4"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <motion.img
              key={activeImg}
              src={product.images[activeImg].src}
              alt={product.images[activeImg].alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 flex gap-2">
              {product.images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setActiveImg(i); }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === activeImg ? 'bg-amber-400' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
