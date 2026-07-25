import { ContactForm } from '../components/ContactForm'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/portfolio'

export function ContactPage() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeader
        description="Direct contact links and a clean form interface for future email functionality."
        eyebrow="Contact"
        title="Contact"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <article className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-semibold text-[var(--color-accent)]">
              Email
            </p>
            <a
              className="mt-2 block break-words text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </article>

          <article className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-semibold text-[var(--color-accent)]">
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

          <article className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-semibold text-[var(--color-accent)]">
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
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
