import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const storageKey = 'portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.localStorage.getItem(storageKey) === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    root.style.colorScheme = theme
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  }
}
