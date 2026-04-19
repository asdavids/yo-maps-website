export function Footer() {
  const currentYear = new Date().getFullYear();

  const streamingLinks = [
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw',
      icon: '/spotify-icon.png',
    },
    {
      name: 'Apple Music',
      href: 'https://music.apple.com/zm/artist/yo-maps/1455955222',
      icon: '/apple-music-icon.png',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL',
      icon: '/youtube-icon.png',
    },
    {
      name: 'Boomplay',
      href: 'https://www.boomplay.com/artists/4334757',
      icon: '/boomplay-icon.png',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/yomapsofficial?igsh=ajgydGhhcXFxbGlw',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/186WUN7jxX/?mibextid=wwXIfr',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 py-16">
      <div className="container mx-auto px-6">

        {/* Streaming Links — prioritised */}
        <div className="mb-12 text-center">
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-6">Stream Yo Maps</p>
          <div className="flex flex-wrap justify-center gap-4">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-gray-700 hover:border-amber-400 transition-all duration-300 text-sm tracking-wider text-gray-400 hover:text-white"
              >
                <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain" />
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-amber-400 tracking-widest uppercase text-sm mb-4">Yo Maps</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elton Mulenga — Zambia's most celebrated artist. Afro Pop, Afro Soul, R&B and Zam Rock.
            </p>
          </div>
          <div>
            <h3 className="text-amber-400 tracking-widest uppercase text-sm mb-4">Bookings</h3>
            <p className="text-gray-500 text-sm">+260972722878</p>
            <p className="text-gray-500 text-sm">oliosrecords2024@gmail.com</p>
          </div>
          <div>
            <h3 className="text-amber-400 tracking-widest uppercase text-sm mb-4">Follow</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-amber-400 transition-colors"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {currentYear} Yo Maps — Elton Mulenga. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Made with love in Lusaka, Zambia 🇿🇲</p>
        </div>
      </div>
    </footer>
  );
}
