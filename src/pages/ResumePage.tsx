import { ResumeEmbed } from '../components/ResumeEmbed'
import { SectionHeader } from '../components/SectionHeader'
import { resume } from '../data/portfolio'

export function ResumePage() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeader
        description="Resume PDF embed and download controls will activate when the resume file is provided."
        eyebrow="Resume"
        title="Resume"
      />

      <div className="mt-10">
        <ResumeEmbed fileName={resume.fileName} path={resume.path} />
      </div>
    </section>
  )
}
