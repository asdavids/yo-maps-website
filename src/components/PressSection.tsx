import { motion } from 'motion/react';

export function PressSection() {
  const quotes = [
    {
      quote: "If you keep working hard, you can achieve anything. You don't need to sound like Drake or Chris Brown — we can take Nyanja-Bemba music to the world.",
      source: 'BBC Africa',
      context: 'Feature Interview',
      tag: 'International',
    },
    {
      quote: "A controversial but honest artist whose music reflects real-life struggles and social realities.",
      source: 'BBC Coverage',
      context: 'Artist Profile',
      tag: 'Press',
    },
    {
      quote: "We are not united as Zambian artists… there is no collaboration to support the industry.",
      source: 'Industry Interview',
      context: 'Zambian Media',
      tag: 'Outspoken',
    },
    {
      quote: "There is no Illuminati or Satanism in the Zambian music industry. The only thing is jealousy.",
      source: 'Facebook Live',
      context: 'Widely Shared',
      tag: 'Viral',
    },
  ];

  const pressLabels = [
    "Zambia's most streamed artist",
    "Hitmaker dominating radio charts",
    "The face of modern Zambian music",
    "One of the biggest male artists of his generation",
    "A household name in Zambian pop music",
    "The most consistent hitmaker in Zambia",
    "One of Zambia's biggest independent music investors",
    "Part of Africa's new export wave of artists",
  ];

  return (
    <section id="press" className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">Media</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 tracking-wide font-light">Press & <span className="text-amber-400">Recognition</span></h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">What the world is saying about Yo Maps</p>
        </motion.div>

        {/* Quote cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto mb-16 sm:mb-20">
          {quotes.map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="border border-gray-800 hover:border-amber-400/40 transition-colors duration-300 rounded-lg p-5 sm:p-6 bg-zinc-950 relative"
            >
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase text-amber-400/60 bg-amber-400/10 px-2 py-0.5 rounded-full">{q.tag}</span>
              <div className="text-4xl text-amber-400/30 font-serif leading-none mb-3">"</div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-4">"{q.quote}"</p>
              <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
                <span className="text-amber-400 text-sm font-medium">{q.source}</span>
                <span className="text-gray-600 text-xs">{q.context}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press label ticker */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase mb-6">As described by press & industry</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {pressLabels.map((label, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 border border-gray-800 text-gray-400 text-xs tracking-wider rounded-full hover:border-amber-400/40 hover:text-amber-400 transition-colors duration-300"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
