import { useTheme } from '../hooks/useTheme'
import { classNames } from '../utils/classNames'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="button-transition group inline-flex h-11 w-[4.25rem] items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] p-1 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)] hover:border-[var(--color-line-strong)]"
      onClick={toggleTheme}
      type="button"
    >
      <span
        aria-hidden="true"
        className={classNames(
          'h-8 w-8 rounded-full border border-[var(--color-line)] bg-[var(--color-text)] shadow-[0_8px_20px_rgb(0_0_0_/_0.18)] transition-transform duration-200 group-hover:border-[var(--color-accent)]',
          isDark ? 'translate-x-6' : 'translate-x-0',
        )}
      />
    </button>
  )
}
