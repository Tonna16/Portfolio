import type { Project } from '../data/portfolio'
import { ButtonLink } from './ButtonLink'

type ProjectCardProps = {
  project: Project
}

function ProjectPreview({ project }: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[var(--color-line)] bg-[var(--color-bg-soft)]">
      <div className="flex h-9 items-center gap-2 border-b border-[var(--color-line)] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warn)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-strong)]" />
        <span className="ml-3 h-3 w-28 rounded-full bg-[var(--color-line)]" />
      </div>
      <div className="engineering-grid min-h-52 p-5">
        <p className="text-xs font-semibold uppercase text-[var(--color-accent)]">
          {project.preview.label}
        </p>
        <div className="mt-5 grid gap-3">
          <div className="h-3 w-28 rounded-full bg-[var(--color-text)]/80" />
          <div className="h-2 w-full max-w-64 rounded-full bg-[var(--color-line)]" />
          <div className="h-2 w-4/5 rounded-full bg-[var(--color-line)]" />
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.preview.features.map((feature) => (
            <span
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]"
              key={feature}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-transition flex h-full flex-col rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col p-2 pt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--color-accent)]">
              {project.role}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
              {project.name}
            </h2>
          </div>
          <span className="w-fit rounded-full border border-[var(--color-line)] px-3 py-1 text-sm text-[var(--color-muted)]">
            {project.stats}
          </span>
        </div>

        <p className="mt-5 flex-1 leading-7 text-[var(--color-muted)]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              className="rounded-full bg-[var(--color-surface-strong)] px-3 py-1 text-xs font-medium text-[var(--color-text)]"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            className="sm:flex-1"
            disabled={!project.githubUrl}
            href={project.githubUrl}
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            className="sm:flex-1"
            disabled={!project.liveDemoUrl}
            href={project.liveDemoUrl}
            variant="ghost"
          >
            Live Demo
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}
