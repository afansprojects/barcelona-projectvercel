import { CalendarDays, GraduationCap, MapPin, Ticket, Trophy } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="px-6 pt-16 pb-12 md:pt-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-14 md:py-24">
        <p className="text-sm font-medium tracking-wide uppercase opacity-80">
          Established in 1899
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance md:text-6xl">
          Welcome to F C Barcelona
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty opacity-90">
          A Spanish football club participating in LaLiga, proud of the many
          talents produced by our own academy.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#join"
            className="rounded-full bg-primary-foreground px-6 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Book a visit
          </a>
          <a
            href="#about"
            className="rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

const facts = [
  { icon: CalendarDays, title: 'Since 1899', text: 'A football club established in 1899.' },
  { icon: Trophy, title: 'LaLiga', text: 'A Spanish club participating in LaLiga.' },
  {
    icon: GraduationCap,
    title: 'Our academy',
    text: 'We have produced so many talents from our own academy.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we do</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {facts.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl bg-secondary p-8 md:flex-row md:items-center md:p-12">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <MapPin className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            When and where we meet
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-pretty">
            Visit our newly renovated <strong>Spotify Camp Nou</strong> to meet
            our team and experience our legacy.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Join() {
  return (
    <section id="join" className="scroll-mt-20 px-6 py-16 md:pb-24">
      <div className="mx-auto max-w-5xl rounded-3xl border p-8 text-center md:p-14">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
          <Ticket className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">How to join</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Book a visit through our official main support:
        </p>
        <p className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          supportfcbarcelona
        </p>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-8">
      <p className="mx-auto max-w-5xl text-sm text-muted-foreground">
        F C Barcelona &middot; Established in 1899
      </p>
    </footer>
  )
}
