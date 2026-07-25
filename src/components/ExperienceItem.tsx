import type { ExperienceEntry } from '../data/portfolio'

type ExperienceItemProps = {
  entry: ExperienceEntry
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article className="surface-card card-transition rounded-xl p-6 sm:p-7">
      <p className="eyebrow">
        {entry.role}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
        {entry.title}
      </h2>
      <ul className="mt-5 grid gap-3 text-[var(--color-muted)]">
        {entry.details.map((detail) => (
          <li className="flex gap-3 leading-7" key={detail}>
            <span
              aria-hidden="true"
              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_4px_rgb(139_211_255_/_0.09)]"
            />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
