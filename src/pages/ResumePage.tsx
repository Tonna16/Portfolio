import { Reveal } from '../components/Reveal'
import { ResumeEmbed } from '../components/ResumeEmbed'
import { SectionHeader } from '../components/SectionHeader'
import { resume } from '../data/portfolio'

export function ResumePage() {
  return (
    <section className="page-shell py-20 md:py-28">
      <Reveal>
        <SectionHeader
          description="Resume PDF embed and download controls will activate when the resume file is provided."
          eyebrow="Resume"
          title="Resume"
        />
      </Reveal>

      <Reveal className="mt-10" delay={100}>
        <ResumeEmbed fileName={resume.fileName} path={resume.path} />
      </Reveal>
    </section>
  )
}
