import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

export function AboutPage() {
  return (
    <section className="page-shell py-20 md:py-28">
      <Reveal>
        <SectionHeader
          description="A concise professional introduction focused on computer engineering, software, and technology that helps people."
          eyebrow="About"
          title="Professional Introduction"
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="surface-card mt-10 max-w-3xl space-y-6 rounded-xl p-6 text-lg leading-8 text-[var(--color-muted)] sm:p-7">
          <p>
            I am an incoming Computer Engineering student at Santa Fe College
            through the Gator Engineering at Santa Fe program.
          </p>
          <p>
            I am interested in software development, accessibility technology,
            cybersecurity, and computer engineering.
          </p>
          <p>
            I enjoy understanding how technology works and building solutions that
            help people.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
