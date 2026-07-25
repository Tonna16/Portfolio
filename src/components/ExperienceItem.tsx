import type { ExperienceEntry } from '../data/portfolio'

type ExperienceItemProps = {
  entry: ExperienceEntry
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
      <p className="text-sm font-semibold text-[var(--color-accent)]">
        {entry.role}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
        {entry.title}
      </h2>
      <ul className="mt-5 grid gap-3 text-[var(--color-muted)]">
        {entry.details.map((detail) => (
          <li className="flex gap-3 leading-7" key={detail}>
            <span
              aria-hidden="true"
              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
