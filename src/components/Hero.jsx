import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 text-xs tracking-wide mb-5">
                <Rocket className="h-3.5 w-3.5" /> Available for Senior/Lead Roles
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
                Senior Software Engineer
              </h1>
              <p className="mt-4 text-neutral-300 max-w-2xl text-base sm:text-lg">
                5+ years building high-impact products with JavaScript, React, Angular, Node.js, and Python. I craft scalable systems, elegant UIs, and ship reliably.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 bg-white/5 text-white hover:bg-white/10 transition">
                  Get in touch
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
                <span>JavaScript • TypeScript • React • Angular • Node.js • Python • AWS • Docker</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className=""
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: 'React', v: 5 },
                    { k: 'Angular', v: 4 },
                    { k: 'Node.js', v: 5 },
                    { k: 'Python', v: 4 },
                  ].map((s) => (
                    <div key={s.k} className="">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-neutral-300">{s.k}</span>
                        <span className="text-xs text-neutral-400">{s.v}/5</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400" style={{ width: `${(s.v/5)*100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-sm text-neutral-300">
                  Building smooth experiences and resilient backends with a focus on performance, DX, and scalability.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
