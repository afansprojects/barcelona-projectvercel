const links = [
  { href: '#about', label: 'What we do' },
  { href: '#visit', label: 'Visit' },
  { href: '#join', label: 'How to join' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <a
            href="#visit"
            className="rounded-full bg-primary/40 px-4 py-1.5 font-display text-sm font-bold tracking-wide uppercase"
          >
            {'Visit Spotify Camp Nou '}
            <span className="text-gold">Book a visit</span>
          </a>
        </div>
      </div>
      <div className="bg-white text-navy shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-11 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-r from-primary from-50% to-garnet to-50% font-display text-sm font-extrabold text-white"
            >
              FCB
            </span>
            <span className="font-display text-xl font-extrabold tracking-wide uppercase">
              F C Barcelona
            </span>
          </a>
          <nav aria-label="Main">
            <ul className="flex items-center gap-1 sm:gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-2 py-2 font-display text-sm font-bold tracking-wide uppercase transition-colors hover:text-garnet sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div aria-hidden="true" className="flex h-2">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-garnet" />
      </div>
    </header>
  )
}
