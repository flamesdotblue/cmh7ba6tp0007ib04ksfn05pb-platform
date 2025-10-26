import { motion } from 'framer-motion';
import { Code, Cpu, Briefcase, Calendar } from 'lucide-react';

const skills = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Angular', level: 85 },
  { name: 'Node.js / Express', level: 93 },
  { name: 'Python (FastAPI, Flask)', level: 86 },
  { name: 'AWS / Docker / CI-CD', level: 82 },
];

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechNova Inc.',
    period: '2023 — Present',
    points: [
      'Led migration of legacy Angular app to React with microfrontends, improving load time by 38% and developer velocity.',
      'Architected Node.js GraphQL gateway and standardized observability, reducing incident MTTR by 42%.',
      'Mentored 5 engineers; introduced testing strategy that raised coverage from 45% to 80%.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Orbit Systems',
    period: '2021 — 2023',
    points: [
      'Designed event-driven services in Node.js and Python (FastAPI) for analytics pipeline (2B+ events/month).',
      'Built reusable React component library with Storybook and Radix primitives.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'CloudCraft',
    period: '2019 — 2021',
    points: [
      'Developed internal tooling in Angular and Express; automated deployments via GitHub Actions and Docker.',
    ],
  },
];

export default function SkillsExperience() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-neutral-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-400/20"><Code className="h-5 w-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
            </div>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name} className="">
                  <div className="flex items-center justify-between text-sm text-neutral-300 mb-2">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-400" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {['React', 'Angular', 'Node.js', 'Python', 'TypeScript', 'GraphQL'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 inline-flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-400" />{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-400/20"><Briefcase className="h-5 w-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
            </div>
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {experiences.map((e, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{e.role} — <span className="text-neutral-300 font-normal">{e.company}</span></h3>
                    <span className="flex items-center gap-2 text-xs text-neutral-400"><Calendar className="h-3.5 w-3.5" />{e.period}</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-1 text-sm">
                    {e.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
