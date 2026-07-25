import type { Project } from '../data/portfolio'
import { ButtonLink } from './ButtonLink'

type ProjectCardProps = {
  project: Project
}

function ProjectPreview({ project }: ProjectCardProps) {
  return (
    <div className="group/preview overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-soft)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)]">
      <div className="flex h-10 items-center gap-2 border-b border-[var(--color-line)] bg-[var(--color-surface)]/70 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warn)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-strong)]" />
        <span className="ml-3 h-2.5 w-24 rounded-full bg-[var(--color-line)] sm:w-32" />
      </div>
      <div className="engineering-grid relative min-h-56 overflow-hidden p-5">
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 h-16 w-16 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 transition-transform duration-300 group-hover/preview:translate-y-1"
        />
        <p className="eyebrow relative">
          {project.preview.label}
        </p>
        <div className="relative mt-6 grid max-w-sm gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/80 p-4 shadow-[0_18px_40px_rgb(0_0_0_/_0.16)]">
          <div className="h-3 w-28 rounded-full bg-[var(--color-text)]/85" />
          <div className="grid gap-2">
            <div className="h-2 w-full rounded-full bg-[var(--color-line)]" />
            <div className="h-2 w-5/6 rounded-full bg-[var(--color-line)]" />
            <div className="h-2 w-2/3 rounded-full bg-[var(--color-line)]" />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)]" />
            <div className="h-10 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)]" />
            <div className="h-10 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)]" />
          </div>
        </div>
        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.preview.features.map((feature) => (
            <span
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/85 px-3 py-1 text-xs font-medium text-[var(--color-muted)]"
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
    <article className="surface-card card-transition flex h-full flex-col rounded-2xl p-4">
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col p-2 pt-6 sm:p-3 sm:pt-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow">{project.role}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
              {project.name}
            </h2>
          </div>
          <span className="w-fit rounded-full border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-3 py-1 text-sm text-[var(--color-muted)]">
            {project.stats}
          </span>
        </div>

        <p className="mt-5 flex-1 leading-7 text-[var(--color-muted)]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--color-muted-strong)]"
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
