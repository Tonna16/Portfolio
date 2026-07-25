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
        <p className="eyebrow mb-4">{eyebrow}</p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl md:leading-[1.05]">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)] md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  )
}
