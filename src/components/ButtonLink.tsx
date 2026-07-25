import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from '../utils/classNames'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonLinkProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: ButtonVariant
  disabled?: boolean
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-transparent bg-[var(--color-accent)] text-[#071019] shadow-[0_16px_38px_rgb(139_211_255_/_0.2)] hover:border-[var(--color-accent)] hover:bg-transparent hover:text-[var(--color-accent)]',
  secondary:
    'border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-accent)]',
  ghost:
    'border-transparent bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]',
}

const baseClasses =
  'button-transition inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-semibold active:translate-y-0'

export function ButtonLink({
  children,
  to,
  href,
  variant = 'secondary',
  disabled = false,
  className,
}: ButtonLinkProps) {
  const classes = classNames(
    baseClasses,
    disabled
      ? 'cursor-not-allowed border-[var(--color-line)] bg-[var(--color-bg-soft)] text-[var(--color-muted)] opacity-65 hover:translate-y-0'
      : variantClasses[variant],
    className,
  )

  if (disabled) {
    return (
      <span aria-disabled="true" className={classes}>
        {children}
      </span>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    )
  }

  return (
    <Link className={classes} to={to ?? '/'}>
      {children}
    </Link>
  )
}
