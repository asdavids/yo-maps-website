import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setMoreOpen(false);
  };

  const primaryLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Music', id: 'music' },
    { name: 'Merch', id: 'merch' },
    { name: 'Tour', id: 'tour' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Bookings', id: 'bookings' },
  ];

  const moreLinks = [
    { name: 'About', id: 'about' },
    { name: 'Videos', id: 'videos' },
    { name: 'Awards', id: 'awards' },
    { name: 'Press', id: 'press' },
  ];

  const allLinks = [...primaryLinks, ...moreLinks];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="cursor-pointer flex-shrink-0"
          onClick={() => scrollToSection('home')}
        >
          <img src="/yo-maps-logo.png" alt="Yo Maps" className="h-10 sm:h-12 w-auto object-contain" />
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {primaryLinks.map((link, index) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              onClick={() => scrollToSection(link.id)}
              className="text-xs tracking-wider hover:text-amber-400 transition-colors duration-300 uppercase whitespace-nowrap"
            >
              {link.name}
            </motion.button>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 text-xs tracking-wider hover:text-amber-400 transition-colors duration-300 uppercase"
            >
              More <ChevronDown size={12} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-36 bg-zinc-900/98 border border-gray-800 rounded-lg overflow-hidden shadow-xl backdrop-blur-lg"
                >
                  {moreLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left px-4 py-2.5 text-xs tracking-wider hover:bg-amber-400/10 hover:text-amber-400 transition-colors duration-200 uppercase"
                    >
                      {link.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-4 py-1.5 border border-amber-400 text-amber-400 text-xs tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 uppercase"
            onClick={() => scrollToSection('music')}
          >
            Stream Now
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white z-50 p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/98 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-1"
            >
              <img src="/yo-maps-logo.png" alt="Yo Maps" className="h-16 w-auto object-contain mb-8 opacity-90" />
              {allLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xl tracking-wider py-3 hover:text-amber-400 transition-colors duration-300 uppercase"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('music')}
                className="mt-6 px-8 py-3 border border-amber-400 text-amber-400 tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm uppercase"
              >
                Stream Now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
