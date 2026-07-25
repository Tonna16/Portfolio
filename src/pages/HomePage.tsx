import { ButtonLink } from '../components/ButtonLink'
import { StatCard } from '../components/StatCard'
import { homeStats, profile } from '../data/portfolio'

export function HomePage() {
  return (
    <>
      <section className="engineering-grid border-b border-[var(--color-line)]">
        <div className="page-shell py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Incoming Computer Engineering Student
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-[var(--color-text)] md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-2xl font-medium text-[var(--color-text)] md:text-3xl">
              {profile.title}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)] md:text-xl md:leading-9">
              {profile.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/projects" variant="primary">
                View Projects
              </ButtonLink>
              <ButtonLink to="/resume">Resume</ButtonLink>
              <ButtonLink to="/contact" variant="ghost">
                Contact
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Portfolio statistics"
        className="page-shell py-12 md:py-16"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>
    </>
  )
}
