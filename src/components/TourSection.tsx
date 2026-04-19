import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket } from 'lucide-react';

export function TourSection() {
  const tourDates = [
    { date: 'MAY 24, 2025', venue: 'Hero\'s Stadium', city: 'Lusaka, Zambia', status: 'On Sale' },
    { date: 'JUN 07, 2025', venue: 'Copperbelt Stadium', city: 'Ndola, Zambia', status: 'On Sale' },
    { date: 'JUL 12, 2025', venue: 'Joburg Arena', city: 'Johannesburg, SA', status: 'Few Tickets' },
    { date: 'AUG 30, 2025', venue: 'O2 Academy Brixton', city: 'London, UK', status: 'Sold Out' },
    { date: 'SEP 14, 2025', venue: 'KICC Grounds', city: 'Nairobi, Kenya', status: 'On Sale' },
  ];

  const statusStyle = (status: string) => {
    if (status === 'Sold Out') return 'bg-gray-500/20 text-gray-400';
    if (status === 'Few Tickets') return 'bg-red-500/20 text-red-400';
    return 'bg-green-500/20 text-green-400';
  };

  return (
    <section id="tour" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-400/8 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 tracking-widest uppercase text-sm mb-4 block">
            Live Performances
          </span>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-wide font-light">
            2025 Tour Dates
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience Yo Maps live — from Lusaka to London, the energy is unmatched
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {tourDates.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-800 hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                <div className="md:col-span-3 flex items-center gap-3">
                  <Calendar className="text-amber-400 flex-shrink-0" size={18} />
                  <span className="tracking-wider text-sm">{show.date}</span>
                </div>
                <div className="md:col-span-5">
                  <div className="mb-1 font-medium">{show.venue}</div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={13} />
                    {show.city}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <span className={`inline-block px-3 py-1 text-xs tracking-wider ${statusStyle(show.status)}`}>
                    {show.status}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: show.status === 'Sold Out' ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={show.status === 'Sold Out'}
                    className={`w-full px-6 py-3 border flex items-center justify-center gap-2 transition-all duration-300 text-sm tracking-wider ${
                      show.status === 'Sold Out'
                        ? 'border-gray-700 text-gray-600 cursor-not-allowed'
                        : 'border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black group-hover:shadow-lg group-hover:shadow-amber-400/30'
                    }`}
                  >
                    <Ticket size={15} />
                    {show.status === 'Sold Out' ? 'SOLD OUT' : 'TICKETS'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center p-8 border border-amber-400/25 rounded-lg bg-gradient-to-br from-amber-400/5 to-transparent"
        >
          <h3 className="text-2xl mb-4 tracking-wide">VIP Experience Package</h3>
          <p className="text-gray-400 mb-6">
            Exclusive meet &amp; greet, premium seating, and signed merchandise — an unforgettable night with Yo Maps
          </p>
          <button className="px-8 py-3 bg-amber-400 text-black tracking-widest hover:bg-amber-500 transition-all duration-300">
            LEARN MORE
          </button>
        </motion.div>
      </div>
    </section>
  );
}
