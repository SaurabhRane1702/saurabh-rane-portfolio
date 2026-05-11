const jobs = [
  {
    company: 'LTIMindtree',
    role: 'Specialist Product Engineer',
    period: 'Nov 2023 – Present',
    duration: '~2 yrs',
    location: 'Mumbai, India',
    description:
      'Leading engineering on a multi-tenant dealer financing platform. Responsible for architecture decisions, Azure infrastructure, and integrating AI tooling into team workflows.',
    bullets: [
      'Architected microservice backend handling floorplan funding for automotive dealers across regions',
      'Cut picklist load time 30% via query optimization and intelligent caching strategy',
      'Introduced OpenAI / GitHub Copilot pipelines for repo-level documentation generation',
      'Configured GA tracking via Azure Pipeline for real-time page-load telemetry',
      'Enabled SSO with Azure AD across App Service and Function App endpoints',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Senior Consultant -> Consultant',
    period: 'Dec 2020 - Oct 2023',
    duration: '~3 yrs',
    location: 'Mumbai, India',
    description:
      'Progressed from Consultant to Senior Consultant, owning full-stack delivery across .NET, Angular, and Vue systems for enterprise clients.',
    bullets: [
      'Drove conversion optimisation experiment that grew rates from 4% to 27% - highest in the product\'s history',
      'Led a 7-engineer team in an agile squad with JIRA, Confluence, and 2-week sprints',
      'Established CI/CD pipelines with Octopus and TeamCity, halving deployment lead time',
      'Introduced MSTest/NUnit coverage, reducing production regressions by ~60%',
    ],
  },
  {
    company: 'Mphasis',
    role: 'Senior Software Developer -> Software Developer',
    period: 'Aug 2018 - Nov 2020',
    duration: '~2.5 yrs',
    location: 'Mumbai, India',
    description:
      'Worked across SQL batch processing and backend systems. Promoted to Senior after leading a team and delivering a critical SSL data migration.',
    bullets: [
      'Authored batch SQL programs handling high-volume financial transaction processing',
      'Created SSL packages for secure data migration across legacy environments',
      'Led a 4-engineer sub-team; instituted Mantis bug-tracking discipline',
    ],
    awards: ['Star Performer (×2)', 'Summit Award — Business Unit'],
  },
  {
    company: 'Infosys',
    role: 'Senior System Engineer -> System Engineer',
    period: 'Sep 2015 - Aug 2018',
    duration: '3 yrs',
    location: 'Mysuru -> Pune, India',
    description:
      'Foundation role building n-tier .NET applications, WCF services, and relational data models for enterprise clients.',
    bullets: [
      'Developed and maintained .NET MVC + WCF service layers for large-scale n-tier applications',
      'Recognised as Tech Champ for engineering excellence during first promotion cycle',
    ],
    awards: ['Tech Champ Award'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyan-400/60 tracking-[0.2em] uppercase">
            03 / Experience
          </span>
          <span className="block flex-1 h-px bg-cyan-400/10" />
        </div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl text-white mb-16 leading-tight">
          A decade of <span className="gradient-text italic">shipping</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          {jobs.map((job, i) => (
            <div
              key={job.company + job.role}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative mb-14 last:mb-0`}
            >
              {/* Dot */}
              <div className="absolute -left-12 top-1 w-5 h-5 rounded-full bg-navy-900 border border-cyan-400/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Card */}
              <div className="border border-slate-800 hover:border-cyan-400/20 rounded-lg bg-[#070d1a]/50 p-7 transition-all duration-300 hover:bg-[#0b1628]/50 group">
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-medium text-lg">{job.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-cyan-400 font-mono text-sm">
                        {job.company}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span className="text-slate-500 text-sm">{job.location}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono text-xs text-slate-400">{job.period}</div>
                    <div className="font-mono text-xs text-slate-600 mt-0.5">
                      {job.duration}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-slate-400">
                      <span className="text-cyan-400/50 flex-shrink-0 mt-0.5">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {job.awards && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {job.awards.map((award) => (
                      <span
                        key={award}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/5 border border-yellow-400/20 rounded text-yellow-400/80 font-mono text-xs"
                      >
                        ★ {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
