import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/portfolio'

export function ProjectsPage() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeader
        description="Chrome extension projects focused on accessibility, reading support, and navigating complex web content."
        eyebrow="Projects"
        title="Software Projects"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
