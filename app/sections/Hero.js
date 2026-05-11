'use client';

import { useEffect, useState } from 'react';

const roles = [
  'Full-Stack Architect',
  'Azure Cloud Engineer',
  'AI-Augmented Developer',
  'Team Lead & Mentor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 70);
      setDisplayed(current.slice(0, charIdx + 1));
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setDisplayed(current.slice(0, charIdx - 1));
      }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-400/4 blur-[120px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-cyan-400/20" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r border-t border-cyan-400/20" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l border-b border-cyan-400/20" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r border-b border-cyan-400/20" />

      {/* Floating coordinate tags */}
      <span className="absolute top-28 left-12 font-mono text-[10px] text-cyan-400/20 hidden lg:block">
        x:0.00 y:0.00
      </span>
      <span className="absolute bottom-20 right-12 font-mono text-[10px] text-cyan-400/20 hidden lg:block">
        sys:online
      </span>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Pre-headline */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animation: 'fadeUp 0.6s ease 0.1s forwards', opacity: 0 }}
          >
            <span className="block w-8 h-px bg-cyan-400/60" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-cyan-400/80">
              Available for senior roles
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          {/* Name */}
          <h1
            className="font-display text-6xl md:text-8xl text-white leading-none mb-4"
            style={{ animation: 'fadeUp 0.7s ease 0.2s forwards', opacity: 0 }}
          >
            Saurabh
            <br />
            <span className="gradient-text">Rane</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="flex items-center gap-2 mb-8 h-8"
            style={{ animation: 'fadeUp 0.7s ease 0.35s forwards', opacity: 0 }}
          >
            <span className="font-mono text-cyan-400/50 text-lg">&gt;</span>
            <span className="font-mono text-xl text-slate-300">
              {displayed}
              <span className="animate-[blink_1s_step-end_infinite] text-cyan-400">
                |
              </span>
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{ animation: 'fadeUp 0.7s ease 0.45s forwards', opacity: 0 }}
          >
            10+ years engineering scalable platforms — from{' '}
            <span className="text-slate-200">fintech lending systems</span> to{' '}
            <span className="text-slate-200">AI-powered developer tooling</span>
            . I turn complex business problems into clean, maintainable systems.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s ease 0.55s forwards', opacity: 0 }}
          >
            <a
              href="#projects"
              className="group relative px-6 py-3 bg-cyan-400/10 border border-cyan-400/40 text-cyan-300 font-mono text-sm tracking-wider hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 rounded overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-cyan-400/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-slate-400 font-mono text-sm tracking-wider hover:text-white border border-transparent hover:border-slate-700 transition-all duration-300 rounded"
            >
              Get In Touch →
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-slate-800"
            style={{ animation: 'fadeUp 0.7s ease 0.65s forwards', opacity: 0 }}
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '4', label: 'Companies' },
              { value: '30%', label: 'Perf Gains Delivered' },
              { value: '7×', label: 'Teams Led' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-cyan-400 glow-cyan">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-slate-500 mt-1 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cyan-400/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
