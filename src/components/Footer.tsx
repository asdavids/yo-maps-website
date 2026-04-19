import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-16">
      <div className="container mx-auto px-6">
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
            <div className="flex flex-col gap-2">
              <a href="https://www.facebook.com/yomapsyo" target="_blank" rel="noreferrer" className="text-gray-500 text-sm hover:text-amber-400 transition-colors">Facebook</a>
              <a href="https://www.instagram.com/yo_maps" target="_blank" rel="noreferrer" className="text-gray-500 text-sm hover:text-amber-400 transition-colors">Instagram</a>
              <a href="https://www.youtube.com/@YoMapsOfficial" target="_blank" rel="noreferrer" className="text-gray-500 text-sm hover:text-amber-400 transition-colors">YouTube</a>
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
