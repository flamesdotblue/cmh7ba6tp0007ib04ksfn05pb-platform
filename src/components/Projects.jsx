import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Real-time Analytics Dashboard',
    tech: ['React', 'Node.js', 'WebSockets', 'Tailwind'],
    desc: 'High-frequency data visualization with streaming updates and virtualized charts.',
    github: 'https://github.com/',
    live: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Microservices Platform',
    tech: ['Node.js', 'Docker', 'Kafka', 'PostgreSQL'],
    desc: 'Event-driven services with centralized observability and CI/CD automation.',
    github: 'https://github.com/',
    live: '#',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System & UI Library',
    tech: ['React', 'TypeScript', 'Radix', 'Storybook'],
    desc: 'Accessible, themeable components powering multiple product surfaces.',
    github: 'https://github.com/',
    live: '#',
    image: 'https://images.unsplash.com/photo-1551281044-8a5d2be0f9b6?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <div className="relative py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
          <p className="text-neutral-400 mt-2 max-w-2xl">A selection of work demonstrating system design, front-end craftsmanship, and production-grade reliability.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt="Project cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-neutral-900 border border-white/10 text-neutral-300">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
