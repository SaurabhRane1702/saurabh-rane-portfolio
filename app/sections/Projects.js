const projects = [
  {
    id: '01',
    title: 'Floorplan Financing Platform',
    subtitle: 'LTIMindtree · 2023–Present',
    summary:
      'End-to-end inventory funding system for automotive dealers — handling floorplan financing, approval workflows, and vehicle inventory tracking at scale.',
    highlights: [
      'Reduced picklist load time by 30%, eliminating dealer wait-time bottlenecks',
      'Built JWT-secured RESTful APIs via APIGateway for cross-service auth',
      'Deployed microservices on Azure with SSO, App Service & Function Apps',
      'Instrumented Azure Pipeline + GA to track page-load and traffic KPIs',
    ],
    tech: ['.NET Core', 'Angular 12', 'Azure', 'Microservices', 'JWT', 'NUnit', 'KendoUI'],
    accent: '#22d3ee',
    featured: true,
  },
  {
    id: '02',
    title: 'AI-Powered Repo Documentation',
    subtitle: 'LTIMindtree · 2024',
    summary:
      'Developer tooling initiative using OpenAI, GitHub Copilot, and Codex to auto-generate structured documentation — skills files, instructions, and API contracts — directly from codebases.',
    highlights: [
      'Eliminated manual documentation effort across 5+ active repositories',
      'Integrated Copilot Workspace patterns into team PR workflows',
      'Reduced onboarding ramp-time for new engineers by ~40%',
    ],
    tech: ['OpenAI', 'GitHub Copilot', 'Codex', 'Gen AI', 'Azure DevOps'],
    accent: '#06b6d4',
    featured: true,
  },
  {
    id: '03',
    title: 'Conversion Funnel Optimisation',
    subtitle: 'Capgemini · 2021–2022',
    summary:
      'Re-engineered a customer acquisition flow — from UX to backend API layer — achieving a dramatic lift in conversion through hypothesis-driven experimentation and GA event instrumentation.',
    highlights: [
      'Lifted conversion rate from 4% → 27% through iterative A/B testing',
      'Led a 7-person cross-functional team across frontend & backend workstreams',
      'Integrated Teamcity/Octopus CI/CD, cutting release cycle by 50%',
    ],
    tech: ['.NET Core', 'Angular 8', 'VueJS', 'Azure', 'KnockoutJS', 'GA Events'],
    accent: '#0891b2',
    featured: true,
  },
  {
    id: '04',
    title: 'Asset Management Portal',
    subtitle: 'LTIMindtree · 2024',
    summary:
      'Internal asset-tracking tool built on Razor Pages, upgraded with KendoUI components for a significantly improved UX. Covered with NUnit integration tests for regression safety.',
    highlights: [
      'Migrated legacy UI to KendoUI component library',
      'Introduced NUnit test coverage across critical asset workflows',
      'Collaborated with UX team to meet WCAG accessibility guidelines',
    ],
    tech: ['ASP.NET', 'KendoUI', 'Razor Pages', 'NUnit', 'C#'],
    accent: '#0e7490',
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Subtle horizontal rule glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
            02 / Featured Work
          </span>
          <span className="block flex-1 h-px bg-cyan-400/10" />
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
          Systems that <span className="gradient-text italic">move needles</span>
        </h2>
        <p className="reveal reveal-delay-2 text-slate-500 max-w-xl mb-16">
          Selected projects where the engineering directly produced measurable
          business outcomes.
        </p>

        {/* Featured 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${i + 1} group relative border-animated rounded-lg bg-[#0b1628]/70 backdrop-blur-sm p-7 flex flex-col hover:bg-[#0b1628] transition-all duration-300 hover:-translate-y-1`}
              style={{
                '--border-color': project.accent,
              }}
            >
              {/* ID badge */}
              <span className="font-mono text-[10px] text-slate-600 mb-4">
                {project.id}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl text-white mb-1 leading-tight">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-cyan-400/60 mb-4">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.summary}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-cyan-400/60 flex-shrink-0 mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="skill-chip text-[10px] py-0.5 px-2">
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: project.accent }}
              />
            </div>
          ))}
        </div>

        {/* Other projects row */}
        <div className="reveal grid md:grid-cols-2 gap-5">
          {others.map((project) => (
            <div
              key={project.id}
              className="group border border-slate-800 hover:border-cyan-400/20 rounded-lg bg-[#070d1a]/60 p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">{project.title}</h3>
                  <p className="font-mono text-xs text-slate-500">{project.subtitle}</p>
                </div>
                <span className="font-mono text-xs text-slate-700">{project.id}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="skill-chip text-[10px] py-0.5 px-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
