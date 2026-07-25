import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const storageKey = 'portfolio-theme'

function getStoredTheme(): Theme | null {
  try {
    return window.localStorage?.getItem(storageKey) === 'light' ? 'light' : null
  } catch {
    return null
  }
}

function setStoredTheme(theme: Theme) {
  try {
    window.localStorage?.setItem(storageKey, theme)
  } catch {
    return
  }
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return getStoredTheme() ?? 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    root.style.colorScheme = theme
    setStoredTheme(theme)
  }, [theme])

  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  }
}
