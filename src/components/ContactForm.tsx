import { useState } from 'react'

export function ContactForm() {
  const [notice, setNotice] = useState('')

  return (
    <form
      className="surface-card rounded-xl p-5 sm:p-6"
      onSubmit={(event) => {
        event.preventDefault()
        setNotice(
          'This form is not connected to an email backend yet. Please use the email link for now.',
        )
      }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">
            Name
          </span>
          <input
            className="min-h-12 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-4 text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-accent)] focus:bg-[var(--color-surface)]"
            name="name"
            placeholder="Your name"
            type="text"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">
            Email
          </span>
          <input
            className="min-h-12 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-4 text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-accent)] focus:bg-[var(--color-surface)]"
            name="email"
            placeholder="your.email@example.com"
            type="email"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">
            Message
          </span>
          <textarea
            className="min-h-36 resize-y rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-accent)] focus:bg-[var(--color-surface)]"
            name="message"
            placeholder="How can I help?"
          />
        </label>
      </div>

      {notice ? (
        <p className="mt-4 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-soft)] p-3 text-sm text-[var(--color-muted)]">
          {notice}
        </p>
      ) : null}

      <button
        className="button-transition mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-transparent bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[#071019] shadow-[0_16px_38px_rgb(139_211_255_/_0.18)] hover:border-[var(--color-accent)] hover:bg-transparent hover:text-[var(--color-accent)] sm:w-auto"
        type="submit"
      >
        Send Message
      </button>
    </form>
  )
}
