type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="card-transition rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
      <p className="text-3xl font-semibold text-[var(--color-text)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </article>
  )
}
