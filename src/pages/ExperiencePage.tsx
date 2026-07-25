import { ExperienceItem } from '../components/ExperienceItem'
import { SectionHeader } from '../components/SectionHeader'
import { experienceEntries, serviceEntries } from '../data/portfolio'

export function ExperiencePage() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeader
        description="Engineering, robotics, and service experience with a focus on applied technical work and community contribution."
        eyebrow="Experience"
        title="Experience"
      />

      <div className="mt-10 grid gap-6">
        {experienceEntries.map((entry) => (
          <ExperienceItem entry={entry} key={entry.title} />
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[var(--color-text)]">
          Community Service
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {serviceEntries.map((entry) => (
            <article
              className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
              key={entry.title}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {entry.title}
              </h3>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                {entry.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
