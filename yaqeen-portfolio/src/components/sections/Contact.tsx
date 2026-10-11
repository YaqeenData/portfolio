import { site } from "@/content/site";
import { Missing } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";

function LinkOrMissing({
  href,
  label,
  variant,
  external = false,
}: {
  href: string | null;
  label: string;
  variant: "primary" | "secondary";
  external?: boolean;
}) {
  if (!href) {
    return (
      <span className="dash-box inline-flex min-h-[3.25rem] items-center rounded-full px-6">
        <Missing>{`${label} link`}</Missing>
      </span>
    );
  }
  return (
    <a
      href={href}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

export function Contact() {
  const { contact } = site;
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1440px] px-6 pt-24 sm:px-10 sm:pt-32 xl:px-16 xl:pt-36">
      <Reveal>
        <div className="glass-pane relative flex flex-col gap-7 overflow-hidden p-8 sm:p-12 xl:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 h-[360px] w-[480px] blur-[30px]"
            style={{ background: "radial-gradient(closest-side, rgba(255,138,43,0.35), rgba(255,138,43,0))" }}
          />
          <div className="relative flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span aria-hidden="true" className="label text-[30px] font-extralight tracking-normal text-blue sm:text-[34px]">
              07
            </span>
            <span className="label text-[13px] font-medium tracking-[0.32em] text-accent sm:text-[14px]">Contact</span>
          </div>
          <h2
            id="contact-title"
            className={`relative font-display text-[34px] font-normal leading-[1.1] sm:text-[52px] ${
              contact.title ? "text-ink" : "placeholder-title"
            }`}
          >
            {contact.title ?? "[ Contact headline — to write together ]"}
          </h2>
          <div className="relative flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <LinkOrMissing href={contact.resume} label="Download résumé" variant="primary" />
            <LinkOrMissing href={contact.linkedin} label="LinkedIn" variant="secondary" external />
            <LinkOrMissing href={contact.github} label="GitHub" variant="secondary" external />
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="label px-2 text-[15px] font-medium tracking-[0.18em] text-italic no-underline"
              >
                {contact.email}
              </a>
            ) : (
              <span className="px-2">
                <Missing>Email address</Missing>
              </span>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
