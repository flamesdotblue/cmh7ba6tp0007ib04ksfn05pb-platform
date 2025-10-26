import { motion } from 'framer-motion';
import { Code, Cpu, Briefcase, Calendar, Sparkles, Trophy, Building2, ChevronRight } from 'lucide-react';

const coreSkills = [
  { name: 'React', level: 95 },
  { name: 'Node.js', level: 93 },
  { name: 'TypeScript', level: 90 },
  { name: 'Angular', level: 85 },
  { name: 'Python', level: 86 },
  { name: 'AWS', level: 82 },
];

const toolbelt = [
  'Next.js', 'Vite', 'Zustand', 'Redux Toolkit', 'React Query', 'RxJS', 'GraphQL', 'REST', 'FastAPI', 'Flask', 'Jest', 'Vitest', 'Cypress', 'Storybook', 'Docker', 'Kafka', 'PostgreSQL', 'Redis', 'Tailwind', 'CI/CD'
];

const highlights = [
  { k: 'Perf', v: '+38%', d: 'faster loads' },
  { k: 'MTTR', v: '-42%', d: 'incidents' },
  { k: 'Quality', v: '80%', d: 'test coverage' },
];

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechNova Inc.',
    period: '2023 — Present',
    achievements: [
      'Led React microfrontends migration; 38% faster TTI and improved DX.',
      'Architected Node.js GraphQL gateway with observability and tracing.',
      'Mentored 5 engineers; introduced robust testing and CI gates.',
    ],
    stack: ['React', 'Node.js', 'GraphQL', 'AWS', 'Jest'],
  },
  {
    role: 'Full‑Stack Engineer',
    company: 'Orbit Systems',
    period: '2021 — 2023',
    achievements: [
      'Shipped event‑driven analytics pipeline (2B+ events/mo).',
      'Built component library with Storybook and Radix primitives.',
    ],
    stack: ['Python', 'FastAPI', 'Kafka', 'Postgres', 'React'],
  },
  {
    role: 'Software Engineer',
    company: 'CloudCraft',
    period: '2019 — 2021',
    achievements: [
      'Internal tooling in Angular + Express; automated CI/CD with Actions.',
    ],
    stack: ['Angular', 'Express', 'Docker', 'GitHub Actions'],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-20% 0px' },
  transition: { duration: 0.6 },
};

function RadialMeter({ label, value }) {
  const deg = Math.round((value / 100) * 360);
  const conic = `conic-gradient(rgb(16 185 129) ${deg}deg, rgb(38 38 38) ${deg}deg)`;
  return (
    <div className="group relative p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-emerald-400/30 hover:bg-white/10 transition">
      <div className="mx-auto h-24 w-24 rounded-full grid place-items-center shadow-[inset_0_0_0_8px_rgba(255,255,255,0.04)]" style={{ background: conic }}>
        <span className="text-lg font-semibold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">{value}<span className="text-sm text-neutral-300">%</span></span>
      </div>
      <div className="mt-3 text-center text-sm text-neutral-300">{label}</div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-emerald-400/0 group-hover:ring-emerald-400/30 group-hover:shadow-[0_0_40px_0_rgba(16,185,129,.12)] transition" />
    </div>
  );
}

function StatPill({ title, value, sub }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-white/5 px-4 py-3">
      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-300 grid place-items-center">
        <Trophy className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-neutral-400">{title}</div>
        <div className="text-sm font-medium text-white">{value} <span className="text-neutral-300 font-normal">{sub}</span></div>
      </div>
    </div>
  );
}

function ExperienceItem({ role, company, period, achievements, stack, idx }) {
  return (
    <motion.div {...fadeIn} transition={{ duration: 0.55, delay: idx * 0.05 }} className="relative pl-8">
      <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.15)]" />
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition group">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-white/10">
              <Building2 className="h-4 w-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">{role}</h3>
              <p className="text-sm text-neutral-300">{company}</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-neutral-400"><Calendar className="h-3.5 w-3.5" />{period}</div>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-neutral-300">
          {achievements.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="h-4 w-4 mt-0.5 text-emerald-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-white/10 text-neutral-300">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsExperience() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-neutral-950 to-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.section {...fadeIn}>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-400/20"><Code className="h-5 w-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
              <span className="ml-2 inline-flex items-center gap-1.5 text-emerald-300 text-xs px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20"><Sparkles className="h-3.5 w-3.5" /> modern</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {coreSkills.map((s) => (
                <RadialMeter key={s.name} label={s.name} value={s.level} />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {['Frontend', 'Backend', 'Infra', 'Testing', 'Data', 'DX'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300 inline-flex items-center gap-2">
                  <Cpu className="h-3.5 w-3.5 text-emerald-400" /> {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-300">Toolbelt</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {toolbelt.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-neutral-900/80 border border-white/10 text-neutral-300 hover:border-emerald-400/30 hover:text-white transition">{t}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {highlights.map((h) => (
                <StatPill key={h.k} title={h.k} value={h.v} sub={h.d} />
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-400/20"><Briefcase className="h-5 w-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[8px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent" />
              <div className="space-y-6">
                {experiences.map((e, idx) => (
                  <ExperienceItem key={e.role + idx} idx={idx} {...e} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
