export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}
