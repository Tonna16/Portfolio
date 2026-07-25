import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/portfolio'

export function ProjectsPage() {
  return (
    <section className="page-shell py-20 md:py-28">
      <Reveal>
        <SectionHeader
          description="Chrome extension projects focused on accessibility, reading support, and navigating complex web content."
          eyebrow="Projects"
          title="Software Projects"
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal delay={index * 100} key={project.name}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
