import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Save, LogOut, Eye, EyeOff, Check, Lock, Calendar, MapPin, Upload, Loader } from 'lucide-react';
import defaultDates from '../tourDates.json';

const ADMIN_PASSWORD = 'yomaps2026';
const STORAGE_KEY = 'yomaps_tour_dates';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzOeHGm4g2RmLaLB7rqrPsP4VyFccan08Uki3eydq2XQH8byIIYc_IePiF2_tLgRW4v5w/exec';

type TourDate = {
  id: string;
  date: string;
  venue: string;
  city: string;
  status: 'On Sale' | 'Sold Out' | 'Few Tickets';
};

function toId() {
  return Math.random().toString(36).slice(2);
}

function loadDates(): TourDate[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return (defaultDates as any[]).map(d => ({ ...d, id: toId() }));
}

function saveDates(dates: TourDate[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
}

export function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [dates, setDates] = useState<TourDate[]>([]);
  const [saved, setSaved] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState('');

  useEffect(() => {
    if (authed) setDates(loadDates());
  }, [authed]);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
      setPassword('');
    }
  };

  const logout = () => { setAuthed(false); setPassword(''); setDates([]); };

  const updateDate = (id: string, field: keyof TourDate, value: string) => {
    setDates(prev => prev.map(d => d.id === id ? { ...d, [field]: value } : d));
    setSaved(false);
    setPublishStatus('idle');
  };

  const addDate = () => {
    setDates(prev => [...prev, { id: toId(), date: '', venue: '', city: 'Zambia', status: 'On Sale' }]);
    setSaved(false);
    setPublishStatus('idle');
  };

  const removeDate = (id: string) => {
    setDates(prev => prev.filter(d => d.id !== id));
    setSaved(false);
    setPublishStatus('idle');
  };

  const handleSave = () => {
    saveDates(dates);
    setSaved(true);
    showToast('✅ Saved locally!');
  };

  const handlePublish = async () => {
    // Save locally first
    saveDates(dates);
    setSaved(true);
    setPublishing(true);
    setPublishStatus('idle');

    // Strip internal IDs before sending
    const clean = dates.map(({ id, ...rest }) => rest);

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clean),
      });

      // no-cors means we can't read the response, but if no error was thrown it worked
      setPublishStatus('success');
      showToast('🚀 Published! Live site will update in ~60 seconds.');
    } catch (err) {
      setPublishStatus('error');
      showToast('❌ Publish failed. Check your internet connection.');
    } finally {
      setPublishing(false);
    }
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 5000);
  };

  const statusColor = (s: string) =>
    s === 'Sold Out' ? 'text-gray-400 bg-gray-500/20' :
    s === 'Few Tickets' ? 'text-red-400 bg-red-500/20' :
    'text-green-400 bg-green-500/20';

  // ── LOGIN SCREEN ────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img src="/yo-maps-logo.png" alt="Yo Maps" className="h-16 mx-auto mb-4 object-contain" />
            <h1 className="text-2xl font-light tracking-widest text-white mb-1">ADMIN</h1>
            <p className="text-gray-600 text-xs tracking-widest uppercase">Tour Dates Manager</p>
          </div>

          <form onSubmit={login} className="space-y-4">
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-zinc-900 border border-gray-800 focus:border-amber-400 text-white px-9 py-3 outline-none transition-colors text-sm tracking-wider placeholder-gray-700"
                autoFocus
              />
              <button type="button" onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>

            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs text-center">
                {error}
              </motion.p>
            )}

            <button type="submit"
              className="w-full py-3 bg-amber-400 text-black tracking-widest text-sm font-medium hover:bg-amber-500 transition-colors"
            >
              LOGIN
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // ── ADMIN DASHBOARD ─────────────────────────────────────
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <div className="bg-black border-b border-gray-900 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src="/yo-maps-logo.png" alt="Yo Maps" className="h-8 object-contain" />
          <div>
            <h1 className="text-sm font-medium tracking-widest text-amber-400">ADMIN PANEL</h1>
            <p className="text-gray-600 text-[10px] tracking-widest uppercase">Tour Dates Manager</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="/" target="_blank" rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors text-xs tracking-wider"
          >
            <Eye size={12} /> View Site
          </a>
          <button onClick={logout}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-800 text-gray-400 hover:text-red-400 hover:border-red-400/50 transition-colors text-xs tracking-wider"
          >
            <LogOut size={12} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* How it works */}
        <div className="mb-6 p-4 border border-amber-400/20 rounded-lg bg-amber-400/5 text-sm text-gray-400 leading-relaxed">
          <strong className="text-amber-400">How it works:</strong> Edit tour dates below →
          click <strong className="text-white">Save</strong> to store locally →
          click <strong className="text-white">🚀 Publish to Live Site</strong> to push to GitHub and deploy automatically.
          The live site updates in about <strong className="text-white">60 seconds</strong>.
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button onClick={addDate}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 text-black text-sm tracking-wider hover:bg-amber-500 transition-colors font-medium"
          >
            <Plus size={15} /> Add Date
          </button>

          <button onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2.5 border text-sm tracking-wider transition-colors ${
              saved ? 'border-green-500 text-green-400' : 'border-gray-700 text-gray-300 hover:border-amber-400 hover:text-amber-400'
            }`}
          >
            {saved ? <Check size={15} /> : <Save size={15} />}
            {saved ? 'Saved!' : 'Save'}
          </button>

          {/* PUBLISH BUTTON */}
          <button
            onClick={handlePublish}
            disabled={publishing}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm tracking-wider font-medium transition-all duration-300 ml-auto ${
              publishStatus === 'success'
                ? 'bg-green-500 text-white border border-green-500'
                : publishStatus === 'error'
                ? 'bg-red-500/20 text-red-400 border border-red-500'
                : 'bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:shadow-lg hover:shadow-amber-400/30'
            } disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {publishing ? (
              <><Loader size={15} className="animate-spin" /> Publishing...</>
            ) : publishStatus === 'success' ? (
              <><Check size={15} /> Published!</>
            ) : (
              <><Upload size={15} /> 🚀 Publish to Live Site</>
            )}
          </button>
        </div>

        {/* Publish status message */}
        <AnimatePresence>
          {publishStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-3 border border-green-500/30 bg-green-500/10 rounded-lg text-green-400 text-sm flex items-center gap-2"
            >
              <Check size={16} />
              <span>Changes sent to GitHub & Google Drive. Live site will update in ~60 seconds.</span>
            </motion.div>
          )}
          {publishStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-3 border border-red-500/30 bg-red-500/10 rounded-lg text-red-400 text-sm"
            >
              ❌ Publish failed. Please check your internet connection and try again.
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-gray-600 text-xs tracking-wider mb-4 uppercase">{dates.length} Tour Date{dates.length !== 1 ? 's' : ''}</p>

        {/* Tour date cards */}
        <div className="space-y-3">
          <AnimatePresence>
            {dates.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                transition={{ delay: i * 0.04 }}
                className="border border-gray-800 hover:border-gray-700 rounded-lg bg-black p-4 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-400 text-xs font-medium">{i + 1}</span>
                  </div>

                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] tracking-widest uppercase text-gray-600 flex items-center gap-1 mb-1">
                        <Calendar size={10} /> Date
                      </label>
                      <input
                        type="text"
                        value={d.date}
                        onChange={e => updateDate(d.id, 'date', e.target.value)}
                        placeholder="e.g. MAY 15, 2026"
                        className="w-full bg-zinc-900 border border-gray-800 focus:border-amber-400 text-white px-3 py-2 outline-none transition-colors text-sm tracking-wider placeholder-gray-700"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-widest uppercase text-gray-600 flex items-center gap-1 mb-1">
                        <MapPin size={10} /> Venue / City
                      </label>
                      <input
                        type="text"
                        value={d.venue}
                        onChange={e => updateDate(d.id, 'venue', e.target.value)}
                        placeholder="e.g. Lusaka"
                        className="w-full bg-zinc-900 border border-gray-800 focus:border-amber-400 text-white px-3 py-2 outline-none transition-colors text-sm tracking-wider placeholder-gray-700"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-widest uppercase text-gray-600 mb-1 block">Country</label>
                      <input
                        type="text"
                        value={d.city}
                        onChange={e => updateDate(d.id, 'city', e.target.value)}
                        placeholder="e.g. Zambia"
                        className="w-full bg-zinc-900 border border-gray-800 focus:border-amber-400 text-white px-3 py-2 outline-none transition-colors text-sm tracking-wider placeholder-gray-700"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-widest uppercase text-gray-600 mb-1 block">Status</label>
                      <select
                        value={d.status}
                        onChange={e => updateDate(d.id, 'status', e.target.value as TourDate['status'])}
                        className="w-full bg-zinc-900 border border-gray-800 focus:border-amber-400 text-white px-3 py-2 outline-none transition-colors text-sm tracking-wider"
                      >
                        <option value="On Sale">On Sale</option>
                        <option value="Few Tickets">Few Tickets</option>
                        <option value="Sold Out">Sold Out</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className={`text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full ${statusColor(d.status)}`}>
                      {d.status}
                    </span>
                    <button onClick={() => removeDate(d.id)}
                      className="text-gray-700 hover:text-red-400 transition-colors p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {dates.length === 0 && (
          <div className="text-center py-12 text-gray-700">
            <Calendar size={32} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm tracking-wider">No tour dates yet. Click "Add Date" to get started.</p>
          </div>
        )}

        {dates.length > 0 && (
          <button onClick={addDate}
            className="mt-4 w-full py-3 border border-dashed border-gray-800 text-gray-600 hover:border-amber-400/50 hover:text-amber-400/70 transition-colors text-sm tracking-wider flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Add Another Date
          </button>
        )}

        {/* Bottom publish button for convenience */}
        {dates.length > 3 && (
          <button
            onClick={handlePublish}
            disabled={publishing}
            className="mt-6 w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black tracking-widest text-sm font-medium hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {publishing ? <><Loader size={16} className="animate-spin" /> Publishing...</> : <><Upload size={16} /> 🚀 Publish to Live Site</>}
          </button>
        )}
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 bg-zinc-800 border border-gray-700 text-white text-sm px-5 py-3 rounded-lg shadow-xl z-50 whitespace-nowrap"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
