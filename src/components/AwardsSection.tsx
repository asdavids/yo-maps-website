import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Trophy, Star } from 'lucide-react';

function Card3D({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-15deg', '15deg']);
  const glareX = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(springY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovering(false);
  };

  return (
    <div style={{ perspective: '800px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`relative cursor-pointer ${className}`}
      >
        {children}

        {/* Glare effect */}
        {hovering && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(251,191,36,0.15) 0%, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

function StatCard3D({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-12deg', '12deg']);
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      style={{ perspective: '600px' }}
    >
      <motion.div
        ref={ref}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
          scale.set(1.06);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); scale.set(1); }}
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        className="text-center p-4 sm:p-5 border border-amber-400/30 rounded-xl bg-gradient-to-br from-amber-400/10 to-zinc-900 shadow-lg shadow-amber-400/10 cursor-pointer"
      >
        {/* Raised face */}
        <div style={{ transform: 'translateZ(20px)' }}>
          <div className="text-2xl sm:text-3xl text-amber-400 font-light mb-1">{value}</div>
          <div className="text-gray-400 text-xs tracking-wider uppercase">{label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AwardsSection() {
  const awards = [
    {
      year: '2019',
      event: 'Kwacha Music Awards',
      label: 'Breakthrough Year',
      color: 'from-amber-400/15',
      wins: ['Best Artist', 'Best Male Newcomer', 'Best Mainstream (Pop) Song', 'Song of the Year'],
    },
    {
      year: '2023',
      event: 'Kwacha Music Awards',
      label: 'Career Peak — 5 Awards',
      color: 'from-amber-300/20',
      wins: ['Song of the Year — Try Again', 'Best Male Artist', 'Best Album of the Year', 'Most Conscious Song', 'Best Pop/Mainstream Song'],
    },
    {
      year: '2024',
      event: 'Kwacha Music Awards',
      label: 'International Recognition',
      color: 'from-amber-500/15',
      wins: ['Best Male Artist', 'Best International Achievement Award'],
    },
  ];

  const highlights = [
    { value: '10+', label: 'Major Awards Won' },
    { value: '5', label: 'Awards in 2023' },
    { value: '6+', label: 'Years Dominating' },
    { value: '#1', label: 'Most Streamed' },
  ];

  return (
    <section id="awards" className="py-16 sm:py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Recognition</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">
            Awards & <span className="text-amber-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Consistently recognised as Zambia's finest — year after year
          </p>
        </motion.div>

        {/* 3D Stat highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <StatCard3D key={h.label} value={h.value} label={h.label} delay={i * 0.1} />
          ))}
        </div>

        {/* 3D Award cards */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-14">
          {awards.map((award, i) => (
            <motion.div
              key={award.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card3D className="h-full">
                <div
                  className={`h-full border border-amber-400/25 rounded-xl p-5 sm:p-6 bg-gradient-to-br ${award.color} to-zinc-900 shadow-xl shadow-black/40`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Raised trophy icon */}
                  <div className="flex items-center justify-between mb-4" style={{ transform: 'translateZ(30px)' }}>
                    <span className="text-3xl sm:text-4xl font-light text-amber-400">{award.year}</span>
                    <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                      <Trophy className="text-amber-400" size={18} />
                    </div>
                  </div>

                  {/* Raised text */}
                  <div style={{ transform: 'translateZ(20px)' }}>
                    <p className="text-white text-sm font-medium mb-2">{award.event}</p>
                    <span className="inline-block text-[10px] tracking-widest uppercase text-amber-400/80 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full mb-4">
                      {award.label}
                    </span>
                    <ul className="space-y-2">
                      {award.wins.map((win) => (
                        <li key={win} className="flex items-start gap-2 text-gray-400 text-sm">
                          <Star className="text-amber-400 flex-shrink-0 mt-0.5" size={11} fill="currentColor" />
                          {win}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom edge shadow for 3D depth */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 rounded-b-xl"></div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-gray-600 text-xs tracking-wider max-w-xl mx-auto"
        >
          Nominated every year since his 2018 breakthrough · Dominating Zambian music for over 6 consecutive years
        </motion.p>
      </div>
    </section>
  );
}
