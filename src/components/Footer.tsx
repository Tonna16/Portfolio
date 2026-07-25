import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8 text-sm text-[var(--color-muted)]">
      <div className="page-shell flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <p>(c) 2026 {profile.name}. Built with React and TypeScript.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="transition-colors hover:text-[var(--color-text)]" to="/projects">
            Projects
          </Link>
          <a
            className="transition-colors hover:text-[var(--color-text)]"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <a
            className="transition-colors hover:text-[var(--color-text)]"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="transition-colors hover:text-[var(--color-text)]"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
