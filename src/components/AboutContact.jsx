import { motion } from 'framer-motion';
import { User, MapPin, Send, Mail } from 'lucide-react';

export default function AboutContact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-400/20"><User className="h-5 w-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              I’m a product-minded engineer who thrives at the intersection of developer experience and user experience. Over the last 5+ years, I’ve led initiatives across frontend architecture, scalable backend services, and cloud infrastructure. My approach emphasizes performance, accessibility, and maintainability, ensuring teams can move fast while staying confident.
            </p>
            <div className="mt-5 flex items-center gap-3 text-neutral-300 text-sm">
              <MapPin className="h-4 w-4 text-emerald-400" /> Remote • Open to relocation
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Performance-first', 'Clean Architecture', 'Observability', 'Accessibility'].map((p) => (
                <span key={p} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300">{p}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-400/20"><Mail className="h-5 w-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
            </div>
            <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Name</label>
                  <input name="name" required placeholder="Jane Doe" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/40" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">Email</label>
                  <input type="email" name="email" required placeholder="jane@email.com" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/40" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-neutral-300 mb-1">Message</label>
                <textarea name="message" required rows={5} placeholder="Tell me about your project or role…" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/40" />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-xs text-neutral-400">I typically respond within 1-2 business days.</p>
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
