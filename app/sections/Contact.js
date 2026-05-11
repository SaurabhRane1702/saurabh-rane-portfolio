export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
            05 / Contact
          </span>
          <span className="block flex-1 h-px bg-cyan-400/10" />
        </div>

        <div className="max-w-2xl">
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
            Let's build something
            <br />
            <span className="gradient-text italic">remarkable</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 leading-relaxed mb-12">
            Whether you're hiring for a senior engineering role, need a hands-on
            architect for a greenfield project, or want to explore AI-augmented
            team workflows — I'm open to the conversation.
          </p>

          {/* Contact options */}
          <div className="reveal reveal-delay-3 space-y-4">
            {[
              {
                label: 'Email',
                value: 'saurabhrane25@gmail.com',
                href: 'mailto:saurabhrane25@gmail.com',
                icon: '✉',
              },
              {
                label: 'LinkedIn',
                value: 'linkedin.com/in/saurabh-rane-ssr',
                href: 'https://linkedin.com/in/saurabh-rane-ssr',
                icon: '↗',
              },
              {
                label: 'GitHub',
                value: 'github.com/SaurabhRane1702',
                href: 'https://github.com/SaurabhRane1702',
                icon: '◆',
              },
              {
                label: 'Phone',
                value: '+91 9664341549',
                href: 'tel:+919664341549',
                icon: '◎',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 p-5 border border-slate-800 hover:border-cyan-400/30 rounded-lg bg-[#070d1a]/50 hover:bg-[#0b1628]/60 transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded flex items-center justify-center border border-slate-700 group-hover:border-cyan-400/30 text-cyan-400/60 group-hover:text-cyan-400 transition-colors font-mono text-lg flex-shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-slate-300 group-hover:text-white transition-colors text-sm">
                    {item.value}
                  </p>
                </div>
                <span className="ml-auto text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200 font-mono">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
