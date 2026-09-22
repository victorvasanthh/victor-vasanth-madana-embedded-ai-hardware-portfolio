import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const highlights = [
  { value: '2', label: 'IEEE-published applied-AI papers' },
  { value: '3', label: 'AI-agent benchmark contributions' },
  { value: '875×', label: 'FPGA speedup over software baseline' },
  { value: '~90%', label: 'Accuracy on cardiovascular detection model' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <SectionHeading index="01" title="Professional Summary" />

      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <Reveal className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            M.Tech candidate in Embedded and Machine Learning Systems at{' '}
            <span className="text-foreground">NIT Warangal</span> with two
            IEEE-published applied-AI papers and hands-on benchmark authoring for
            AI-agent evaluation at Handshake AI.
          </p>
          <p>
            Skilled in deploying ML models including{' '}
            <span className="text-foreground">
              CNN, ResNet-18, MobileNetV2, and YOLOv8
            </span>{' '}
            on edge and embedded hardware including Jetson Nano, Raspberry Pi,
            and Zynq FPGA, and in building deterministic, adversarial-tested
            evaluation pipelines with Docker, Python, KiCad, and RTL toolchains.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {highlights.map((item) => (
              <div key={item.label} className="bg-card p-5">
                <dt className="font-mono text-2xl font-semibold text-primary md:text-3xl">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
