import { motion } from 'motion/react';
import { Trophy, Star } from 'lucide-react';

export function AwardsSection() {
  const awards = [
    {
      year: '2019',
      event: 'Kwacha Music Awards',
      label: 'Breakthrough Year',
      wins: ['Best Artist', 'Best Male Newcomer', 'Best Mainstream (Pop) Song', 'Song of the Year'],
    },
    {
      year: '2023',
      event: 'Kwacha Music Awards',
      label: 'Career Peak Sweep',
      wins: ['Song of the Year — Try Again', 'Best Male Artist', 'Best Album of the Year', 'Most Conscious Song', 'Best Pop/Mainstream Song'],
    },
    {
      year: '2024',
      event: 'Kwacha Music Awards',
      label: 'International Recognition',
      wins: ['Best Male Artist', 'Best International Achievement Award'],
    },
  ];

  const highlights = [
    { value: '10+', label: 'Major Awards Won' },
    { value: '5', label: 'Awards in 2023 Alone' },
    { value: '6+', label: 'Years Dominating Charts' },
    { value: '#1', label: 'Most Streamed in Zambia' },
  ];

  return (
    <section id="awards" className="py-16 sm:py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Recognition</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">Awards & <span className="text-amber-400">Achievements</span></h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Consistently recognised as Zambia's finest — year after year</p>
        </motion.div>

        {/* Stat highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-4 border border-amber-400/20 rounded-lg bg-amber-400/5"
            >
              <div className="text-2xl sm:text-3xl text-amber-400 font-light mb-1">{h.value}</div>
              <div className="text-gray-500 text-xs tracking-wider uppercase">{h.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Award cards */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          {awards.map((award, i) => (
            <motion.div key={award.year} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="relative border border-amber-400/25 rounded-lg p-5 sm:p-6 bg-gradient-to-br from-amber-400/8 to-transparent hover:border-amber-400/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl sm:text-4xl font-light text-amber-400">{award.year}</span>
                <Trophy className="text-amber-400/60" size={22} />
              </div>
              <p className="text-white text-sm font-medium mb-1">{award.event}</p>
              <span className="inline-block text-[10px] tracking-widest uppercase text-amber-400/70 bg-amber-400/10 px-2 py-0.5 rounded-full mb-4">{award.label}</span>
              <ul className="space-y-2">
                {award.wins.map((win) => (
                  <li key={win} className="flex items-start gap-2 text-gray-400 text-sm">
                    <Star className="text-amber-400 flex-shrink-0 mt-0.5" size={12} fill="currentColor" />
                    {win}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Timeline note */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-gray-600 text-xs tracking-wider max-w-xl mx-auto"
        >
          Nominated every year since his 2018 breakthrough · Dominating Zambian music for over 6 consecutive years
        </motion.p>
      </div>
    </section>
  );
}
