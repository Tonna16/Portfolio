import { useTheme } from '../hooks/useTheme'
import { classNames } from '../utils/classNames'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="button-transition inline-flex h-11 w-[4.25rem] items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] p-1"
      onClick={toggleTheme}
      type="button"
    >
      <span
        className={classNames(
          'h-8 w-8 rounded-full border border-[var(--color-line)] bg-[var(--color-text)] transition-transform duration-200',
          isDark ? 'translate-x-6' : 'translate-x-0',
        )}
      />
    </button>
  )
}
