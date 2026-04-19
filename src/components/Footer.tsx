import { Music2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    quick: [
      { name: 'Press Kit', url: '#' },
      { name: 'Merchandise', url: '#' },
      { name: 'Booking Enquiries', url: '#' },
      { name: 'Management', url: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' },
    ],
  };

  const socials = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'Spotify', url: 'https://spotify.com' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="text-amber-400" size={28} />
              <span className="text-2xl tracking-[0.3em] text-amber-400">YO MAPS</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Martin Musonda Jr. — Zambia's Voice of Love. Creating authentic music that
              moves hearts across Africa and the world.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-500 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 text-xs"
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {links.quick.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-500 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-6 text-amber-400">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-500 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {currentYear} Yo Maps — Martin Musonda Jr. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Made with love in Lusaka, Zambia 🇿🇲</p>
        </div>
      </div>
    </footer>
  );
}
