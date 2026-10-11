import { fmt, type Content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel, Headline, Missing } from "@/components/ui/Type";

function LinkOrMissing({
  href,
  label,
  missing,
  primary = false,
  external = false,
}: {
  href: string | null;
  label: string;
  /** Placeholder text shown while the link is not provided yet. */
  missing: string;
  primary?: boolean;
  external?: boolean;
}) {
  if (!href) {
    return (
      <span className="inline-flex min-h-[3.25rem] items-center rounded-full border border-dashed border-[var(--line-strong)] px-6">
        <Missing>{missing}</Missing>
      </span>
    );
  }
  return (
    <a
      href={href}
      className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

/** First light: the night ends, the horizon warms, and there is one clear thing to do. */
export function Contact({ c }: { c: Content }) {
  const { contact, ui } = c;
  const missing = (label: string) => fmt(ui.linkMissing, { label });
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 100%, rgba(255,160,77,0.42), rgba(255,138,43,0.12) 45%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[80vh] max-w-[1440px] flex-col items-center justify-center gap-8 px-6 py-28 text-center sm:px-10">
        <Reveal className="flex flex-col items-center gap-6">
          <ChapterLabel>{contact.label}</ChapterLabel>
          <Headline
            id="contact-title"
            content={contact.title}
            className="text-[clamp(3rem,7vw,5.25rem)] leading-[1.02] tracking-[-0.02em] [font-variation-settings:'opsz'_144]"
          />
        </Reveal>
        <Reveal delay={0.15} className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <LinkOrMissing href={contact.resume} label={ui.downloadResume} missing={missing(ui.downloadResume)} primary />
          <LinkOrMissing href={contact.linkedin} label={ui.linkedin} missing={missing(ui.linkedin)} external />
          <LinkOrMissing href={contact.github} label={ui.github} missing={missing(ui.github)} external />
        </Reveal>
        <Reveal delay={0.25}>
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="label text-[15px] tracking-[0.2em] text-italic no-underline">
              {contact.email}
            </a>
          ) : (
            <Missing>{ui.emailMissing}</Missing>
          )}
        </Reveal>
      </div>
    </section>
  );
}
