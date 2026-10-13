const links = [
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Visit' },
  { href: '#join', label: 'Join' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
          >
            FCB
          </span>
          <span>F C Barcelona</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
