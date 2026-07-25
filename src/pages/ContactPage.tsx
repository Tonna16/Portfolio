import { ContactForm } from '../components/ContactForm'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/portfolio'

export function ContactPage() {
  return (
    <section className="page-shell py-20 md:py-28">
      <Reveal>
        <SectionHeader
          description="Direct contact links and a clean form interface for future email functionality."
          eyebrow="Contact"
          title="Contact"
        />
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          <article className="surface-card card-transition rounded-xl p-6">
            <p className="eyebrow">
              Email
            </p>
            <a
              className="mt-2 block break-words text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </article>

          <article className="surface-card card-transition rounded-xl p-6">
            <p className="eyebrow">
              GitHub
            </p>
            <a
              className="mt-2 block break-words text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              {profile.github}
            </a>
          </article>

          <article className="surface-card card-transition rounded-xl p-6">
            <p className="eyebrow">
              LinkedIn
            </p>
            <a
              className="mt-2 block break-words text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              {profile.linkedin}
            </a>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
