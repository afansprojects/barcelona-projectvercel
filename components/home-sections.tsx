import { CalendarDays, GraduationCap, Mail, MapPin, Trophy } from 'lucide-react'

const JOIN_EMAIL = 'events@fcbarcelona.cat'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy px-6 py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary/70 via-navy to-garnet/70"
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="inline-block rounded-full bg-gold px-4 py-1 font-display text-sm font-bold tracking-widest text-navy uppercase">
          Established in 1899
        </p>
        <h1 className="mt-6 font-display text-6xl leading-none font-extrabold tracking-tight text-balance uppercase md:text-8xl">
          F C Barcelona
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/85">
          A Spanish football club participating in LaLiga, proud of the many
          talents produced by our own academy.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${JOIN_EMAIL}`}
            className="rounded-full bg-gold px-7 py-3 font-display text-lg font-bold tracking-wide text-navy uppercase transition-transform hover:-translate-y-0.5"
          >
            Book a visit
          </a>
          <a
            href="#about"
            className="rounded-full border-2 border-white/40 px-7 py-3 font-display text-lg font-bold tracking-wide uppercase transition-colors hover:bg-white/10"
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl font-extrabold tracking-tight text-navy uppercase md:text-5xl">
      {children}
    </h2>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>What we do</SectionTitle>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {facts.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`rounded-2xl border-t-4 bg-secondary p-6 ${
                i % 2 === 0 ? 'border-primary' : 'border-garnet'
              }`}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-xl text-white ${
                  i % 2 === 0 ? 'bg-primary' : 'bg-garnet'
                }`}
              >
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy uppercase">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-32 bg-white px-6 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-garnet p-8 text-white md:flex-row md:items-center md:p-12">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gold text-navy">
          <MapPin className="size-7" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight uppercase md:text-5xl">
            When and where we meet
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-pretty text-white/90">
            Visit our newly renovated{' '}
            <strong className="text-gold">Spotify Camp Nou</strong> to meet our
            team and experience our legacy.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Join() {
  return (
    <section id="join" className="scroll-mt-32 bg-secondary px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-garnet text-white">
          <Mail className="size-7" aria-hidden="true" />
        </span>
        <div className="mt-6">
          <SectionTitle>How to join</SectionTitle>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-slate-600">
          Book a visit through our official main support by email:
        </p>
        <a
          href={`mailto:${JOIN_EMAIL}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-xl font-bold tracking-wide text-white transition-colors hover:bg-garnet"
        >
          <Mail className="size-5" aria-hidden="true" />
          {JOIN_EMAIL}
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-navy px-6 py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p className="font-display text-base font-bold tracking-wide text-white uppercase">
          F C Barcelona &middot; Established in 1899
        </p>
        <a href={`mailto:${JOIN_EMAIL}`} className="hover:text-gold">
          {JOIN_EMAIL}
        </a>
      </div>
    </footer>
  )
}
