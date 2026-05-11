const skillGroups = [
  {
    category: 'Backend & Core',
    icon: '⬡',
    skills: ['.NET Core', 'ASP.NET MVC', 'C#', 'WCF', 'Web API', 'Microservices', 'RESTful APIs', 'JWT Auth'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['Angular 12', 'JavaScript', 'TypeScript', 'VueJS', 'KnockoutJS', 'KendoUI', 'Blazor', 'LESS/CSS'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '◇',
    skills: ['Azure', 'Azure Functions', 'App Service', 'Azure DevOps', 'API Gateway', 'SSO / Azure AD', 'AWS', 'CI/CD'],
  },
  {
    category: 'AI & Tooling',
    icon: '◎',
    skills: ['OpenAI API', 'GitHub Copilot', 'Codex', 'Gen AI', 'Prompt Engineering'],
  },
  {
    category: 'Data & Testing',
    icon: '▣',
    skills: ['SQL', 'NUnit', 'MSTest', 'Unit Testing', 'GA Analytics', 'JIRA', 'Confluence'],
  },
  {
    category: 'Architecture & Methods',
    icon: '◉',
    skills: ['Microservices', 'N-Tier Architecture', 'Agile / Scrum', 'Code Review', 'Team Leadership', 'System Design'],
  },
];

const certs = [
  {
    name: 'GitHub Copilot',
    issuer: 'GitHub',
    validity: 'Jun 2025 – Dec 2028',
    url: 'https://www.credly.com/badges/fc02db06-fb0b-46e0-a388-869fb3cf4f8e/public_url',
  },
  {
    name: 'Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft',
    validity: 'Nov 2021 – Oct 2023',
    url: null,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
            04 / Skills
          </span>
          <span className="block flex-1 h-px bg-cyan-400/10" />
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
          Full-stack,{' '}
          <span className="gradient-text italic">cloud-native</span>
        </h2>
        <p className="reveal reveal-delay-2 text-slate-500 max-w-xl mb-16">
          A decade of hands-on breadth — from SQL batch jobs to AI-augmented
          developer workflows.
        </p>

        {/* Skill groups */}
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} border border-slate-800 hover:border-cyan-400/20 rounded-lg bg-[#070d1a]/60 p-6 transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-cyan-400/60 text-sm">{group.icon}</span>
                <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal">
          <h3 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-5">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between gap-4 border border-slate-800 rounded-lg bg-[#070d1a]/40 px-6 py-4 hover:border-cyan-400/20 transition-colors"
              >
                <div>
                  <p className="text-white text-sm font-medium">{cert.name}</p>
                  <p className="font-mono text-xs text-slate-500 mt-1">
                    {cert.issuer} · {cert.validity}
                  </p>
                </div>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400/60 hover:text-cyan-400 font-mono text-xs transition-colors flex-shrink-0"
                  >
                    ↗ Verify
                  </a>
                ) : (
                  <span className="text-slate-700 font-mono text-xs flex-shrink-0">
                    Expired
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
