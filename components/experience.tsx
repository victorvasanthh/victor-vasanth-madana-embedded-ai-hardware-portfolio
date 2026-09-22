import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { TechTag } from '@/components/tech-tag'
import { CheckCircle2 } from 'lucide-react'

const handshakeProjects = [
  {
    title: 'Constraint-Driven KiCad 8 PCB Repair',
    points: [
      'Designed a reproducible KiCad 8 PCB/CAD benchmark for AI-agent evaluation.',
      'Covered schematic connectivity repair, constrained PCB rerouting, differential-pair geometry, keep-outs, placement dependencies, and DRC/geometry validation.',
      'Built an independent Python semantic verifier, reference solution, Docker/Harbor environment, and deterministic validation pipeline.',
    ],
    metrics: [
      { label: 'Oracle', value: '1.0' },
      { label: 'nop', value: '0.0' },
    ],
    tags: ['KiCad 8', 'Python', 'Docker', 'Harbor', 'DRC'],
  },
  {
    title: 'Streaming-Arbiter SystemVerilog Repair',
    points: [
      'Developed a challenging RTL repair benchmark covering packet atomicity, FIFO buffering, priority arbitration, round-robin fairness, admission control, backpressure, reset behavior, parameterization, and timing.',
      'Implemented independent behavioral and structural verification using Icarus, Verilator, Yosys, and Python.',
      'Supported multiple valid implementations and adversarial negative fixtures.',
    ],
    metrics: [
      { label: 'Pass@2', value: '0/2' },
      { label: 'Pass@5', value: '1/5' },
      { label: 'Infra fails', value: '0' },
    ],
    tags: ['SystemVerilog', 'Verilator', 'Icarus', 'Yosys', 'Python'],
  },
  {
    title: 'Multi-Microphone Audio Processing',
    points: [
      'Contributed to a benchmark covering synchronization, optimization, deterministic verification, and adversarial evaluation.',
      'Reviewed and merged into the official upstream repository.',
    ],
    metrics: [],
    tags: ['DSP', 'Python', 'Deterministic Verification'],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Authoring deterministic, adversarial-tested benchmarks that evaluate AI agents on real hardware, CAD, and RTL engineering tasks."
        />

        {/* Handshake AI — prominent */}
        <Reveal className="rounded-xl border border-primary/30 bg-card p-6 shadow-[0_0_0_1px_var(--primary)/5] md:p-8">
          <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                Featured Role
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
                Handshake AI Solutions, LLC
              </h3>
              <p className="mt-1 text-pretty text-muted-foreground">
                AI Benchmark Contributor — Project Insight / Frontier Bench,
                Hardware Track
              </p>
            </div>
            <span className="w-fit shrink-0 rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              Remote
            </span>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {handshakeProjects.map((project, i) => (
              <Reveal
                key={project.title}
                as="article"
                delay={i * 90}
                className="flex flex-col rounded-lg border border-border bg-background/60 p-5"
              >
                <div className="font-mono text-xs text-muted-foreground">
                  Project {i + 1}
                </div>
                <h4 className="mt-2 text-pretty font-semibold leading-snug text-foreground">
                  {project.title}
                </h4>

                <ul className="mt-4 flex-1 space-y-2.5">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {project.metrics.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-baseline gap-1.5 rounded border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs"
                      >
                        <span className="text-muted-foreground">{m.label}</span>
                        <span className="font-semibold text-accent">{m.value}</span>
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Research experience */}
        <div className="mt-20 md:mt-24">
          <SectionHeading index="03" title="Research Experience" />
        </div>
        <Reveal className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground md:text-xl">
                National Institute of Technology, Calicut
              </h3>
              <p className="mt-1 text-muted-foreground">Research Intern</p>
            </div>
            <span className="w-fit shrink-0 rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              Jun 2021 – Jul 2021
            </span>
          </div>
          <ul className="mt-5 space-y-2.5">
            {[
              'Developed a machine-learning model for cardiovascular disease detection with approximately 90% accuracy.',
              'Deployed the model on embedded hardware for real-time, low-latency inference.',
            ].map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
