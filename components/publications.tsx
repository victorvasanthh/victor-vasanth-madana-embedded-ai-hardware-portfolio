import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { FileText, ClipboardCheck, Award } from 'lucide-react'

const publications = [
  {
    venue: 'IEEE ICCIKE 2025',
    title:
      'An Optimized End-to-End AI Pipeline for Dyslexia-Assistive Handwriting Analysis on Raspberry Pi 4.',
  },
  {
    venue: 'IEEE SILCON 2025',
    title:
      'Real-Time Driver Drowsiness Detection for Road Safety using Hybrid YOLOv8 and CNN Approach.',
  },
]

const certifications = [
  { name: 'CMOS Digital VLSI Design', issuer: 'NPTEL — IIT Roorkee' },
  { name: 'Introduction to Internet of Things', issuer: 'NPTEL — IIT Kharagpur' },
]

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <SectionHeading
        index="07"
        title="Publications & Recognition"
        subtitle="Peer-reviewed applied-AI research and technical review contributions."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal
            key={pub.venue}
            as="article"
            delay={i * 90}
            className="flex gap-4 rounded-xl border border-border bg-card p-6"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <span className="inline-flex rounded border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
                {pub.venue}
              </span>
              <p className="mt-3 text-pretty leading-relaxed text-foreground">
                {pub.title}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Reveal className="flex gap-4 rounded-xl border border-border bg-card p-6">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-accent">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              Technical Reviewer, IEEE INDISCON 2025
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Embedded / VLSI domain — reviewed peer AI/embedded systems research
              for technical soundness.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90} className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-2.5">
            <Award className="h-5 w-5 text-accent" />
            <h3 className="font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {cert.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
