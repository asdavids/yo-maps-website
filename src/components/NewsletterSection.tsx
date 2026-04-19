import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      // Use mailto as a fallback — opens email client pre-filled
      // For production, replace with a form service like Formspree or EmailJS
      const subject = encodeURIComponent('New Fan Newsletter Signup — Yo Maps');
      const body = encodeURIComponent(`New subscriber: ${email}\n\nPlease add to the Yo Maps fan newsletter list.`);
      window.open(`mailto:oliosrecords2024@gmail.com?subject=${subject}&body=${body}`);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-6">
            <Mail className="text-amber-400" size={22} />
          </div>

          <span className="text-amber-400 tracking-widest uppercase text-xs mb-3 block">Stay Connected</span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-wide mb-3">
            Join the <span className="text-amber-400">Fan List</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8">
            Be the first to hear about new music, tour dates, and exclusive updates from Yo Maps.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-green-400"
            >
              <CheckCircle size={22} />
              <span className="tracking-wider">You're on the list! Check your email.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-zinc-900 border border-gray-700 focus:border-amber-400 text-white placeholder-gray-600 outline-none transition-colors duration-300 text-sm rounded-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-amber-400 text-black tracking-widest hover:bg-amber-500 transition-all duration-300 text-sm font-medium disabled:opacity-60 whitespace-nowrap"
              >
                {status === 'loading' ? 'SENDING...' : 'SUBSCRIBE'}
              </button>
            </form>
          )}

          <p className="text-gray-600 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
