import { ExperienceItem } from '../components/ExperienceItem'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { experienceEntries, serviceEntries } from '../data/portfolio'

export function ExperiencePage() {
  return (
    <section className="page-shell py-20 md:py-28">
      <Reveal>
        <SectionHeader
          description="Engineering, robotics, and service experience with a focus on applied technical work and community contribution."
          eyebrow="Experience"
          title="Experience"
        />
      </Reveal>

      <div className="mt-10 grid gap-6">
        {experienceEntries.map((entry) => (
          <Reveal key={entry.title}>
            <ExperienceItem entry={entry} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
            Community Service
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {serviceEntries.map((entry) => (
              <article
                className="surface-card card-transition rounded-xl p-6"
                key={entry.title}
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  {entry.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">
                  {entry.detail}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </section>
  )
}
