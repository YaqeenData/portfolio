"use client";

import { useEffect, useRef } from "react";
import { fmt } from "@/content";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider";
import { Missing } from "@/components/ui/Type";

/**
 * The recruiter shortcut: everything important on one screen, no story required.
 * Uses the native <dialog> for focus handling and Escape-to-close.
 */
export function Overview({ open, onClose }: { open: boolean; onClose: () => void }) {
  const site = useContent();
  const locale = useLocale();
  const { ui } = site;
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const { overview, work, path, beyond, contact } = site;
  const { education, certifications } = path.credentials;
  const fluent = beyond.languages.filter((l) => l.status === "fluent").map((l) => l.name);
  const learning = beyond.languages.filter((l) => l.status === "learning").map((l) => l.name);

  const links: { label: string; href: string | null; primary?: boolean }[] = [
    { label: ui.downloadResume, href: contact.resume, primary: true },
    { label: ui.linkedin, href: contact.linkedin },
    { label: ui.github, href: contact.github },
  ];

  return (
    <dialog
      ref={ref}
      aria-labelledby="overview-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="overview m-auto w-[min(960px,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[32px] p-0 text-ink"
    >
      <div className="flex flex-col gap-8 p-7 sm:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="label text-[12px] tracking-[0.32em] text-accent">{ui.overviewKicker}</p>
            <h2 id="overview-title" className="mt-2 font-display text-[clamp(2rem,4vw,2.625rem)] font-normal">
              {site.name}
            </h2>
            <p className="mt-1 text-[17px] text-ink-2">
              {site.role} · {site.location}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.closeOverview}
            className="btn-secondary flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full"
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <dl className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <dt className="label text-[12px] tracking-[0.3em] text-label-blue">{ui.focus}</dt>
            <dd className="text-[16px] leading-relaxed">{overview.focus.join(" · ")}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="label text-[12px] tracking-[0.3em] text-label-blue">{ui.coreStack}</dt>
            <dd className="text-[16px] leading-relaxed">{overview.coreStack.join(" · ")}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="label text-[12px] tracking-[0.3em] text-label-blue">{ui.projects}</dt>
            <dd className="flex flex-col gap-1 text-[16px] leading-relaxed">
              {work.projects.map((p) => (
                <a key={p.slug} href={`#${p.slug}`} onClick={onClose} className="no-underline hover:text-accent">
                  <strong className="font-semibold">{p.name}</strong> — {p.subtitle}
                </a>
              ))}
            </dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="label text-[12px] tracking-[0.3em] text-label-blue">{ui.experience}</dt>
            <dd className="flex flex-col gap-1 text-[16px] leading-relaxed">
              {[...path.experience].reverse().map((job) => (
                <span key={job.role}>
                  {job.role} — {job.org.split(" — ")[0]} <span className="text-ink-3">· {job.dates}</span>
                </span>
              ))}
            </dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="label text-[12px] tracking-[0.3em] text-label-blue">{ui.education}</dt>
            <dd className="text-[16px] leading-relaxed">
              {education.degree} — {education.school} · {education.notes[0]}
              <span className="block text-ink-3">{fmt(ui.credentialsSummary, { certs: certifications.length, camps: path.credentials.training.length })}</span>
            </dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="label text-[12px] tracking-[0.3em] text-label-blue">{ui.languages}</dt>
            <dd className="text-[16px] leading-relaxed">
              {fluent.join(locale === "ar" ? "، " : ", ")} · {ui.learningPrefix} {learning.join(locale === "ar" ? "، " : ", ")}
            </dd>
          </div>
        </dl>

        <div className="flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:flex-wrap sm:items-center">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className={`btn btn-sm ${link.primary ? "btn-primary" : "btn-secondary"}`}
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="inline-flex min-h-11 items-center rounded-full border border-dashed border-[var(--line-strong)] px-5">
                <Missing>{fmt(ui.linkMissing, { label: link.label })}</Missing>
              </span>
            ),
          )}
          <a
            href="#work"
            onClick={onClose}
            className="label text-[13px] tracking-[0.24em] text-italic no-underline sm:ms-auto"
          >
            {ui.jumpToProjects}{" "}
            <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
              →
            </span>
          </a>
        </div>
      </div>
    </dialog>
  );
}
