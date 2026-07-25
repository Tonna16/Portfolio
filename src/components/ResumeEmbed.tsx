import { useEffect, useState } from 'react'
import { ButtonLink } from './ButtonLink'

type ResumeEmbedProps = {
  path: string
  fileName: string
}

type ResumeStatus = 'checking' | 'available' | 'missing'

export function ResumeEmbed({ path, fileName }: ResumeEmbedProps) {
  const [status, setStatus] = useState<ResumeStatus>('checking')

  useEffect(() => {
    let isCurrent = true

    fetch(path, { method: 'HEAD' })
      .then((response) => {
        if (isCurrent) {
          setStatus(response.ok ? 'available' : 'missing')
        }
      })
      .catch(() => {
        if (isCurrent) {
          setStatus('missing')
        }
      })

    return () => {
      isCurrent = false
    }
  }, [path])

  if (status === 'checking') {
    return (
      <section className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
        <div className="h-[32rem] animate-pulse rounded-md bg-[var(--color-bg-soft)]" />
      </section>
    )
  }

  if (status === 'missing') {
    return (
      <section className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
        <div className="grid min-h-80 place-items-center rounded-md border border-dashed border-[var(--color-line)] bg-[var(--color-bg-soft)] p-8 text-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              Resume PDF not added yet
            </h2>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              The resume section is ready for the file. Add the PDF as
              public/resume.pdf to enable the embed and download controls.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink disabled>Download Resume</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-4 sm:p-6">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-semibold text-[var(--color-text)]">
          Embedded Resume
        </h2>
        <ButtonLink href={path} variant="primary">
          Download Resume
        </ButtonLink>
      </div>
      <object
        aria-label="Embedded resume PDF"
        className="h-[36rem] w-full rounded-md border border-[var(--color-line)] bg-[var(--color-bg-soft)]"
        data={path}
        type="application/pdf"
      >
        <p className="p-6 text-[var(--color-muted)]">
          Your browser cannot display {fileName}. Use the download button to
          open it.
        </p>
      </object>
    </section>
  )
}
