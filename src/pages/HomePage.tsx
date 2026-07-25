import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { StatCard } from '../components/StatCard'
import { homeStats, profile } from '../data/portfolio'

export function HomePage() {
  return (
    <>
      <section className="engineering-grid relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="page-shell grid gap-12 py-20 md:py-28 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <Reveal>
            <div className="max-w-4xl">
              <p className="eyebrow">Incoming Computer Engineering Student</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--color-text)] md:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-6 text-2xl font-medium tracking-tight text-[var(--color-muted-strong)] md:text-3xl">
                {profile.title}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)] md:text-xl md:leading-9">
                {profile.description}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/projects" variant="primary">
                  View Projects
                </ButtonLink>
                <ButtonLink to="/resume">Resume</ButtonLink>
                <ButtonLink to="/contact" variant="ghost">
                  Contact
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal className="hidden md:block" delay={120}>
            <div
              aria-hidden="true"
              className="hero-panel relative min-h-[28rem] overflow-hidden rounded-2xl border border-[var(--color-line)] p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="absolute inset-5 rounded-xl border border-[var(--color-line)]" />
              <div className="relative grid gap-4">
                <div className="flex h-11 items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warn)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-strong)]" />
                  <span className="ml-3 h-2 w-28 rounded-full bg-[var(--color-line)]" />
                </div>
                <div className="grid gap-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)]/55 p-5">
                  <div className="h-3 w-32 rounded-full bg-[var(--color-text)]/85" />
                  <div className="grid gap-2">
                    <div className="h-2 w-full rounded-full bg-[var(--color-line)]" />
                    <div className="h-2 w-11/12 rounded-full bg-[var(--color-line)]" />
                    <div className="h-2 w-3/5 rounded-full bg-[var(--color-line)]" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/80" />
                  <div className="h-24 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/80" />
                  <div className="h-24 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/80" />
                </div>
                <div className="ml-auto h-28 w-3/4 rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-soft)]/80" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Portfolio statistics"
        className="page-shell py-12 md:py-16"
      >
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}
