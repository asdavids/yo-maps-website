export function Footer() {
  const currentYear = new Date().getFullYear();

  const streamingLinks = [
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/artist/6ctMiUYEAd4cy0CaH355Hk?si=QCHFiyGJSX26VK_Ri8eoiw',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.305a.75.75 0 01-1.032.248c-2.826-1.727-6.38-2.117-10.567-1.16a.75.75 0 01-.334-1.463c4.583-1.047 8.515-.596 11.685 1.343a.75.75 0 01.248 1.032zm1.472-3.27a.938.938 0 01-1.29.308c-3.233-1.987-8.163-2.563-11.986-1.403a.937.937 0 01-.543-1.794c4.368-1.323 9.795-.682 13.511 1.599a.938.938 0 01.308 1.29zm.127-3.409C15.37 8.37 9.386 8.163 5.8 9.258a1.125 1.125 0 01-.652-2.152c4.132-1.252 11-1.01 15.34 1.617a1.125 1.125 0 01-1.373 1.793z"/>
        </svg>
      ),
    },
    {
      name: 'Apple Music',
      href: 'https://music.apple.com/zm/artist/yo-maps/1455955222',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a4.967 4.967 0 001.88-2.208c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.598-.003-11.396zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.951-1.4 1.063-.373.066-.747.035-1.117-.066-.newsroom674-.195-1.162-.898-1.23-1.574-.07-.698.195-1.275.749-1.695.358-.27.77-.41 1.2-.476.305-.047.612-.085.919-.125.249-.033.373-.157.373-.396V8.24a.34.34 0 00-.27-.335l-4.516-.913a.317.317 0 00-.386.311v7.842c0 .355-.03.706-.156 1.04-.299.784-.88 1.24-1.693 1.378-.377.063-.753.04-1.123-.063-.69-.196-1.14-.86-1.2-1.566-.07-.707.195-1.283.749-1.703.337-.254.714-.404 1.118-.47l.925-.13c.279-.038.397-.162.397-.44V6.31c0-.248.145-.425.382-.472l5.863-1.18c.268-.053.485.12.485.396v5.06z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@yomapsyo3164?si=B_iSsVUo0O_8ScfL',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
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
                className="flex items-center gap-2 px-5 py-3 border border-gray-700 hover:border-amber-400 hover:text-amber-400 text-gray-400 transition-all duration-300 text-sm tracking-wider"
              >
                {link.icon}
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
