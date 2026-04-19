import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export function PressKitDownload() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center mt-16 p-6 sm:p-8 border border-amber-400/25 rounded-lg bg-gradient-to-br from-amber-400/5 to-transparent"
    >
      <FileText className="text-amber-400 mx-auto mb-4" size={32} />
      <h3 className="text-xl sm:text-2xl font-light tracking-wide mb-2">Press Kit</h3>
      <p className="text-gray-400 text-sm sm:text-base mb-6">
        Download the official Yo Maps press kit including bio, awards, discography, streaming links and booking info.
      </p>
      <a
        href="/yo-maps-press-kit.pdf"
        download="Yo-Maps-Press-Kit-2026.pdf"
        className="inline-flex items-center gap-2 px-7 sm:px-10 py-3 sm:py-4 bg-amber-400 text-black tracking-widest hover:bg-amber-500 transition-all duration-300 text-sm font-medium"
      >
        <Download size={16} />
        DOWNLOAD PRESS KIT
      </a>
    </motion.div>
  );
}
