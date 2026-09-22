import { ArrowRight, MapPin } from 'lucide-react'

const focusAreas = ['Embedded AI', 'Machine Learning', 'Hardware', 'RTL']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,var(--background)_78%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 py-28 md:px-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          Open to relocation
        </div>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Victor Vasanth
          <br />
          <span className="text-muted-foreground">Madana</span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-primary">
          {focusAreas.map((area, i) => (
            <span key={area} className="flex items-center gap-3">
              {i > 0 ? (
                <span className="text-border" aria-hidden="true">
                  /
                </span>
              ) : null}
              {area}
            </span>
          ))}
        </div>

        <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          M.Tech candidate in Embedded and Machine Learning Systems at NIT
          Warangal with experience in applied AI, edge/embedded ML, FPGA
          systems, hardware/CAD, RTL, and AI-agent benchmark evaluation.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://linkedin.com/in/madana-victor-vasanth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          Hyderabad, India
        </div>
      </div>
    </section>
  )
}
