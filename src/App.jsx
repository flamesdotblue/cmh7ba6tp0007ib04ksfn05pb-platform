import { useEffect } from 'react';
import { Github, Mail } from 'lucide-react';
import Hero from './components/Hero';
import SkillsExperience from './components/SkillsExperience';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';

export default function App() {
  useEffect(() => {
    const handler = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 scroll-smooth">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">SSE Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition border border-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition border border-emerald-400/20">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="skills"><SkillsExperience /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><AboutContact /></section>
      </main>

      <footer className="border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Senior Software Engineer Portfolio</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Top</a>
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Hire Me</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
