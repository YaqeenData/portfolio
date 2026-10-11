import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel, Headline, Missing } from "@/components/ui/Type";

/** An original seal mark for a certificate — not a provider logo. */
function Seal({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 28 34" className="h-[30px] w-[25px] shrink-0">
      <path d="M8 20 L5 33 L10 29.5 L13 33 L14 22" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round" opacity="0.7" />
      <path d="M20 20 L23 33 L18 29.5 L15 33 L14 22" fill="none" stroke={color} strokeWidth="1.3" strokeLinejoin="round" opacity="0.7" />
      <circle cx="14" cy="13" r="11" style={{ fill: "var(--chip)" }} stroke={color} strokeWidth="1.4" />
      <path d="M14 7.5 l1.6 3.4 3.7 0.4 -2.8 2.5 0.8 3.6 -3.3 -1.9 -3.3 1.9 0.8 -3.6 -2.8 -2.5 3.7 -0.4z" fill={color} />
    </svg>
  );
}

function GroupTitle({ children, tone }: { children: string; tone: string }) {
  return <h4 className={`label text-[12px] tracking-[0.3em] ${tone}`}>{children}</h4>;
}

/** Education, training and certifications: three light groups under the experience stream. */
function Credentials() {
  const { credentials } = site.path;
  const { education, training, certifications } = credentials;
  const sealColors = ["var(--label-blue)", "var(--label-pink)", "var(--label-orange)"];

  return (
    <div className="mt-28 border-t border-line pt-14 sm:mt-36">
      <Reveal>
        <h3 className="label text-[13px] tracking-[0.32em] text-ink-3">{credentials.label}</h3>
      </Reveal>

      <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12">
        <Reveal className="flex flex-col gap-4">
          <GroupTitle tone="text-label-blue">Education</GroupTitle>
          <div className="flex flex-col gap-1.5">
            <p className="font-display text-[24px] leading-tight text-ink">{education.degree}</p>
            <p className="text-[16px] text-ink-2">{education.school}</p>
            <p className="label text-[12px] tracking-[0.22em] text-ink-3">{education.dates}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {education.notes.map((note) => (
              <li key={note} className="label rounded-full border border-[var(--chip-border)] bg-chip px-3 py-1.5 text-[11px] tracking-[0.2em] text-ink-2">
                {note}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          <GroupTitle tone="text-label-pink">Specialized training</GroupTitle>
          <ul className="flex flex-col gap-6">
            {training.map((t) => (
              <li key={t.title} className="flex flex-col gap-1">
                <p className="text-[18px] leading-snug text-ink">{t.title}</p>
                <p className="text-[15px] text-ink-2">{t.org}</p>
                <p className="label text-[12px] tracking-[0.22em] text-ink-3">{t.dates}</p>
                {"recognition" in t && t.recognition ? (
                  <p className="label mt-1.5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--label-orange)] px-3 py-1.5 text-[11px] tracking-[0.2em] text-label-orange">
                    <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 12 12">
                      <path d="M6 0.5 l1.6 3.6 3.9 0.4 -2.9 2.6 0.8 3.9 -3.4 -2 -3.4 2 0.8 -3.9 -2.9 -2.6 3.9 -0.4z" fill="currentColor" />
                    </svg>
                    {t.recognition}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col gap-4">
          <GroupTitle tone="text-label-orange">Certifications</GroupTitle>
          <ul className="flex flex-col gap-4">
            {certifications.map((c, i) => (
              <li key={c.title} className="flex items-start gap-3.5">
                <Seal color={sealColors[i % sealColors.length]} />
                <span className="flex flex-col gap-0.5">
                  <span className="text-[16px] leading-snug text-ink">{c.title}</span>
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {c.issuer ? (
                      <span className="label text-[11px] tracking-[0.22em] text-ink-3">{c.issuer}</span>
                    ) : (
                      <Missing>Issuer</Missing>
                    )}
                    <span className="label text-[11px] tracking-[0.22em] text-ink-3">· {c.year}</span>
                    {c.verifyUrl ? (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label text-[11px] tracking-[0.22em] text-italic no-underline hover:underline"
                      >
                        · Verify<span className="sr-only"> {c.title} (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

/** Experience on one stream: a quiet, scannable line of nodes. */
export function Path() {
  const { path } = site;
  return (
    <section id="path" aria-labelledby="path-title" className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-40 xl:px-40">
      <Reveal className="flex flex-col gap-5">
        <ChapterLabel numeral="IV">{path.label}</ChapterLabel>
        <Headline id="path-title" content={path.title} className="text-[clamp(2.25rem,4vw,2.75rem)]" />
      </Reveal>

      <div className="relative mt-20">
        {/* The stream: vertical on phones, horizontal from large screens up. */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-0 w-0.5 lg:hidden"
          style={{ background: "linear-gradient(180deg, var(--blue) 0 45%, var(--orange) 45% 85%, transparent)" }}
        />
        <span
          aria-hidden="true"
          className="absolute left-0 right-[14%] top-[7px] hidden h-0.5 lg:block"
          style={{ background: "linear-gradient(90deg, transparent, var(--blue) 6% 54%, var(--orange) 54% 100%)" }}
        />
        <span
          aria-hidden="true"
          className="absolute right-0 top-[7px] hidden h-0 w-[14%] border-t-2 border-dashed border-[var(--label-orange)] opacity-50 lg:block"
        />

        <ol className="relative grid gap-14 lg:grid-cols-2 lg:gap-16">
          {path.experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 0.15} className="relative flex flex-col gap-2.5 pl-10 lg:pl-0 lg:pt-12">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-4 w-4 rounded-full"
                style={i === 0 ? { background: "var(--label-blue)" } : { background: "#FFB15C", boxShadow: "0 0 18px #FF8A2B" }}
              />
              <span className={`label text-[12px] tracking-[0.3em] ${i === 0 ? "text-label-blue" : "text-label-orange"}`}>
                {job.dates}
              </span>
              <h3 className="font-display text-[26px] font-normal leading-tight text-ink">{job.role}</h3>
              <p className="text-[16px] leading-snug text-ink-2">{job.org}</p>
              <p className="label text-[11px] tracking-[0.24em] text-ink-3">{job.place}</p>
              <ul className="mt-2 flex max-w-[54ch] flex-col gap-2">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-5 text-[15px] leading-[1.6] text-ink-2">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.75em] h-px w-2.5"
                      style={{ background: i === 0 ? "var(--label-blue)" : "var(--label-orange)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>

      <Credentials />
    </section>
  );
}
