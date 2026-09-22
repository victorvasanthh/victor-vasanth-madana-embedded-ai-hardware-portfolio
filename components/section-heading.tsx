import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span aria-hidden="true">{index}</span>
        <span className="h-px w-10 bg-primary/50" aria-hidden="true" />
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
