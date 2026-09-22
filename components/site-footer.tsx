export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 md:flex-row md:px-8">
        <div className="text-center md:text-left">
          <div className="font-mono text-sm font-medium text-foreground">
            Victor Vasanth Madana
          </div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">
            Embedded AI • Hardware • RTL • Machine Learning
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Hyderabad, India
        </div>
      </div>
    </footer>
  )
}
