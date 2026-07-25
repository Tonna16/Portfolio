import { classNames } from '../utils/classNames'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={classNames(
        'max-w-3xl',
        centered ? 'mx-auto text-center' : undefined,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold leading-tight text-[var(--color-text)] md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
