import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    school: 'National Institute of Technology, Warangal',
    degree: 'M.Tech, Embedded and Machine Learning Systems',
    period: 'Aug 2024 – May 2026 (expected)',
  },
  {
    school: 'TKR College of Engineering & Technology',
    degree: 'B.Tech, Electronics and Communication Engineering',
    period: 'Aug 2019 – Jun 2023',
  },
]

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Embedded C', 'Verilog', 'SystemVerilog', 'SQL'],
  },
  {
    label: 'AI / ML',
    items: [
      'Model deployment & evaluation',
      'CNN',
      'ResNet-18',
      'MobileNetV2',
      'YOLOv8',
      'Edge inference',
      'Benchmark design',
      'Adversarial evaluation',
      'Deterministic verification',
    ],
  },
  {
    label: 'Hardware / EDA',
    items: [
      'NVIDIA Jetson Nano',
      'Raspberry Pi',
      'Xilinx Zynq-7010 FPGA',
      'KiCad 8',
      'Verilator',
      'Icarus Verilog',
      'Yosys',
    ],
  },
  {
    label: 'Tools & Platforms',
    items: ['Docker', 'MATLAB', 'Proteus', 'Embedded Linux', 'Keil', 'Git'],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <SectionHeading index="05" title="Education" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal
              key={edu.school}
              as="article"
              delay={i * 90}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-pretty font-semibold leading-snug text-foreground">
                  {edu.school}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.degree}</p>
                <p className="mt-2 font-mono text-xs text-primary">{edu.period}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <SectionHeading index="06" title="Technical Skills" />
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 70}
              className="bg-card p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
