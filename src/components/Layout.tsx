import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-[#071019]"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Navbar />
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
