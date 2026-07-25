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
    'border-[var(--color-accent)] bg-[var(--color-accent)] text-[#071019] hover:bg-transparent hover:text-[var(--color-accent)]',
  secondary:
    'border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'border-transparent bg-transparent text-[var(--color-muted)] hover:text-[var(--color-text)]',
}

const baseClasses =
  'button-transition inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold'

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
      ? 'cursor-not-allowed border-[var(--color-line)] bg-transparent text-[var(--color-muted)] opacity-60 hover:translate-y-0'
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
