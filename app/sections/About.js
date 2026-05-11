export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: section label + heading */}
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
                01 / About
              </span>
              <span className="block flex-1 h-px bg-cyan-400/10" />
            </div>

            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Engineer who ships,
              <br />
              <span className="gradient-text italic">and leads</span>
            </h2>

            <p className="reveal reveal-delay-2 text-slate-400 leading-relaxed mb-6">
              I started as a system engineer at Infosys writing .NET MVC services
              and n-tier architectures. A decade later, I architect microservice
              platforms on Azure, integrate AI tooling into developer workflows,
              and lead cross-functional engineering teams at LTIMindtree.
            </p>
            <p className="reveal reveal-delay-3 text-slate-400 leading-relaxed mb-8">
              My edge is translating ambiguous business requirements into
              production-grade systems — whether that means cutting picklist load
              times by 30%, lifting customer conversion from 4% to 27%, or
              wiring OpenAI-powered documentation pipelines that let the team
              ship faster.
            </p>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/saurabh-rane-ssr"
                target="_blank"
                rel="noopener noreferrer"
                className="skill-chip hover:cursor-pointer"
              >
                ↗ LinkedIn
              </a>
              <a
                href="https://github.com/SaurabhRane1702"
                target="_blank"
                rel="noopener noreferrer"
                className="skill-chip hover:cursor-pointer"
              >
                ↗ GitHub
              </a>
              <a
                href="https://www.credly.com/badges/fc02db06-fb0b-46e0-a388-869fb3cf4f8e/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="skill-chip hover:cursor-pointer"
              >
                ↗ Credly Badges
              </a>
            </div>
          </div>

          {/* Right: details card */}
          <div className="reveal reveal-delay-2">
            <div className="border-animated rounded-lg bg-navy-800/60 p-8 backdrop-blur-sm">
              {/* Avatar placeholder with initials */}
              <div className="flex items-center gap-5 mb-8 pb-8 border-b border-slate-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-2xl text-cyan-400">SR</span>
                </div>
                <div>
                  <p className="text-white font-medium">Saurabh Rane</p>
                  <p className="text-slate-400 text-sm">Specialist Product Engineer</p>
                  <p className="text-cyan-400/60 font-mono text-xs mt-1">Mumbai, India</p>
                </div>
              </div>

              {/* Info rows */}
              {[
                { label: 'Current Role', value: 'LTIMindtree · Nov 2023–Present' },
                { label: 'Education', value: 'B.E Computer Engineering · MBA Information Mgmt' },
                { label: 'Certifications', value: 'Azure AZ-204 · GitHub Copilot (2025–2028)' },
                { label: 'Interests', value: 'Tech Gadgets · Swimming · Books' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 py-3 border-b border-slate-800 last:border-0"
                >
                  <span className="font-mono text-xs text-slate-600 uppercase tracking-widest w-28 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-slate-300 text-sm leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
