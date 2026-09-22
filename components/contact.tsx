import { Reveal } from '@/components/reveal'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-card/30"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_30%,var(--background)_80%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-10 bg-primary/50" aria-hidden="true" />
            08 — Contact
            <span className="h-px w-10 bg-primary/50" aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let&apos;s Build Intelligent Embedded Systems
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Open to roles and collaboration in embedded AI, machine learning,
            hardware, and RTL. Open to relocation.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          <a
            href="mailto:victorvasanthh@gmail.com"
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-secondary/50 text-primary transition-colors group-hover:bg-primary/10">
              <Mail className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Email
            </span>
            <span className="break-all text-sm text-foreground">
              victorvasanthh@gmail.com
            </span>
          </a>

          <a
              href="https://linkedin.com/in/madanavictorvasanth"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-secondary/50 text-primary transition-colors group-hover:bg-primary/10">
              <LinkedInIcon className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              LinkedIn
            </span>
            <span className="inline-flex items-center gap-1 text-sm text-foreground">
              madanavictorvasanth
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </span>
          </a>

          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Location
            </span>
            <span className="text-sm text-foreground">Hyderabad, India</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
