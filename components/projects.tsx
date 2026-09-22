import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { TechTag } from '@/components/tech-tag'
import { Cpu, Sprout, Microscope } from 'lucide-react'

const projects = [
  {
    icon: Cpu,
    title: 'FPGA-Accelerated KNN Architecture',
    platform: 'Xilinx Zynq-7010 • Verilog',
    points: [
      'Designed and verified a hardware KNN accelerator.',
      'Achieved 7000× energy-delay-product gain and 875× speedup over the software baseline.',
    ],
    metrics: [
      { label: 'Energy-Delay Product', value: '7000×' },
      { label: 'Speedup', value: '875×' },
    ],
    tags: ['Zynq-7010', 'Verilog', 'FPGA', 'Hardware Accel'],
  },
  {
    icon: Sprout,
    title: 'Real-Time FPGA Pipeline for Agricultural AI',
    platform: 'Zynq FPGA',
    points: [
      'Built and validated a real-time embedded inference pipeline for crop disease detection under real-world timing and resource constraints.',
    ],
    metrics: [],
    tags: ['Zynq FPGA', 'Real-Time', 'Edge Inference'],
  },
  {
    icon: Microscope,
    title: 'Hybrid Deep Learning for Blood Cell Classification',
    platform: 'NVIDIA Jetson Nano • Python',
    points: [
      'Deployed ResNet-18 + MobileNetV2 on edge hardware.',
      'Verified on-device accuracy and inference latency.',
    ],
    metrics: [],
    tags: ['Jetson Nano', 'ResNet-18', 'MobileNetV2', 'Python'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
      <SectionHeading
        index="04"
        title="Selected Projects"
        subtitle="Hardware acceleration and edge-deployed machine learning across FPGA and embedded platforms."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon
          return (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 90}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-pretty text-lg font-semibold leading-snug text-foreground">
                {project.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs text-primary">
                {project.platform}
              </p>

              <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {project.metrics.length > 0 ? (
                <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-background/60 p-3">
                      <div className="font-mono text-xl font-semibold text-accent">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
