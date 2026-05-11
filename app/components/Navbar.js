'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#04080f]/90 backdrop-blur-md border-b border-cyan-400/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="font-mono text-xs text-cyan-400/60 group-hover:text-cyan-400 transition-colors"
            aria-hidden="true"
          >
            &lt;
          </span>
          <span className="font-display text-lg text-slate-200 group-hover:text-white transition-colors">
            SR
          </span>
          <span
            className="font-mono text-xs text-cyan-400/60 group-hover:text-cyan-400 transition-colors"
            aria-hidden="true"
          >
            /&gt;
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:saurabhrane25@gmail.com"
            className="ml-4 font-mono text-xs tracking-wider px-4 py-2 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-200 rounded"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-cyan-400 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[10px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-cyan-400 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-cyan-400 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#04080f]/95 backdrop-blur-md border-b border-cyan-400/10`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-cyan-300 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
