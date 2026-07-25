import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigationItems, profile } from '../data/portfolio'
import { classNames } from '../utils/classNames'
import { ThemeToggle } from './ThemeToggle'

function navLinkClass(isActive: boolean) {
  return classNames(
    'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-[var(--color-surface-strong)] text-[var(--color-text)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)]'
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
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/82 shadow-[0_1px_0_rgb(255_255_255_/_0.03)] backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="page-shell flex min-h-18 items-center justify-between gap-4"
      >
        <Link
          aria-label="Tonna Agburu home"
          className="group flex items-center gap-3 rounded-lg py-2 font-semibold text-[var(--color-text)]"
          to="/"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] text-sm shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] transition-colors group-hover:border-[var(--color-accent)]">
            TA
          </span>
          <span className="hidden text-sm sm:inline">{profile.name}</span>
        </Link>

        <div className="surface-card hidden items-center gap-1 rounded-full p-1 lg:flex">
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
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="button-transition inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)] hover:border-[var(--color-accent)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span
              className={classNames(
                'h-0.5 w-5 rounded-full bg-[var(--color-text)] transition-transform',
                isOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={classNames(
                'h-0.5 w-5 rounded-full bg-[var(--color-text)] transition-opacity',
                isOpen && 'opacity-0',
              )}
            />
            <span
              className={classNames(
                'h-0.5 w-5 rounded-full bg-[var(--color-text)] transition-transform',
                isOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          className="mobile-panel border-t border-[var(--color-line)] bg-[var(--color-bg)]/96 backdrop-blur-xl lg:hidden"
          id="mobile-navigation"
        >
          <div className="page-shell grid gap-1 py-3">
            {navigationItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  classNames(navLinkClass(isActive), 'rounded-lg px-4 py-3')
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
