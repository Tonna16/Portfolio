import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigationItems, profile } from '../data/portfolio'
import { classNames } from '../utils/classNames'
import { ThemeToggle } from './ThemeToggle'

function navLinkClass(isActive: boolean) {
  return classNames(
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-[var(--color-surface-strong)] text-[var(--color-text)]'
      : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="page-shell flex min-h-16 items-center justify-between gap-4"
      >
        <Link
          aria-label="Tonna Agburu home"
          className="flex items-center gap-3 rounded-md py-2 font-semibold text-[var(--color-text)]"
          to="/"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] text-sm">
            TA
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) => navLinkClass(isActive)}
              end={item.path === '/'}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="button-transition inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span className="h-0.5 w-5 rounded-full bg-[var(--color-text)]" />
            <span className="h-0.5 w-5 rounded-full bg-[var(--color-text)]" />
            <span className="h-0.5 w-5 rounded-full bg-[var(--color-text)]" />
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-bg)] lg:hidden">
          <div className="page-shell grid gap-1 py-3">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  classNames(navLinkClass(isActive), 'px-0 sm:px-3')
                }
                end={item.path === '/'}
                key={item.path}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
