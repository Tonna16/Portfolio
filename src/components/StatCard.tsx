type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="surface-card card-transition relative overflow-hidden rounded-xl p-5 sm:p-6">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]/70"
      />
      <p className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </article>
  )
}
