import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket } from 'lucide-react';

export function TourSection() {
  const tourDates = [
    { date: 'APR 18, 2026', venue: 'Kolwezi', city: 'Congo DRC', status: 'On Sale' },
    { date: 'APR 25, 2026', venue: 'Livingstone', city: 'Zambia', status: 'On Sale' },
    { date: 'MAY 8, 2026', venue: 'Mufurila', city: 'Zambia', status: 'On Sale' },
    { date: 'MAY 9, 2026', venue: 'Solwezi', city: 'Zambia', status: 'On Sale' },
    { date: 'MAY 23, 2026', venue: 'Lusaka', city: 'Zambia', status: 'On Sale' },
    { date: 'MAY 29, 2026', venue: 'Nakonde', city: 'Zambia', status: 'On Sale' },
    { date: 'MAY 30, 2026', venue: 'Kasama', city: 'Zambia', status: 'On Sale' },
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
            2026 Tour Dates
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience Yo Maps live — the energy is unmatched
          </p>
          <p className="text-gray-500 text-sm mt-4">
            For bookings: <a href="https://wa.me/260972722878" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-green-400 transition-colors">+260972722878</a> // <a href="mailto:oliosrecords2024@gmail.com" className="text-amber-400 hover:underline">oliosrecords2024@gmail.com</a>
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 border border-amber-400 text-amber-400 flex items-center justify-center gap-2 hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm tracking-wider"
                  >
                    <Ticket size={15} />
                    TICKETS
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center p-8 border border-amber-400/25 rounded-lg bg-gradient-to-br from-amber-400/5 to-transparent"
        >
          <h3 className="text-2xl mb-4 tracking-wide">Book Yo Maps</h3>
          <p className="text-gray-400 mb-8">
            For bookings and inquiries, contact Olios Records directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/260972722878"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white tracking-widest hover:bg-green-600 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:oliosrecords2024@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-3 border border-amber-400 text-amber-400 tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
