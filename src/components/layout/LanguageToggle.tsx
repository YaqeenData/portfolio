"use client";

import type { MouseEvent } from "react";
import type { Locale } from "@/content";
import { useContent, usePageInfo } from "@/components/i18n/LocaleProvider";

/**
 * EN / عربي — a single link to the same page in the other language (a project page switches
 * to the same project).
 * The current language is highlighted; the choice is remembered for the next visit, and the
 * visitor lands on the section they were reading (each language is its own page, so the
 * switch is a quick page load; the introduction does not replay within the session).
 * On small phones only the other language's name is shown, to keep the header uncrowded.
 */
export function LanguageToggle() {
  const { locale, alternatePath: href, onHome } = usePageInfo();
  const { ui } = useContent();
  const other: Locale = locale === "en" ? "ar" : "en";

  function go(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    try {
      localStorage.setItem("lang", other);
    } catch {
      /* storage unavailable — the switch still works for this visit */
    }
    // Keep the visitor's place: the last section whose top has passed the upper third.
    let hash = "";
    if (onHome && window.scrollY > 200) {
      const line = window.innerHeight * 0.35;
      for (const section of document.querySelectorAll<HTMLElement>("main section[id]")) {
        if (section.getBoundingClientRect().top <= line) hash = `#${section.id}`;
      }
    }
    // Elsewhere, keep the page's options (e.g. the Project Lab's ?category=).
    window.location.assign(href + (onHome ? hash : window.location.search));
  }

  const en = (
    <span lang="en" className={locale === "en" ? "lang-current" : "lang-other"}>
      EN
    </span>
  );
  const ar = (
    <span lang="ar" className={`lang-ar ${locale === "ar" ? "lang-current" : "lang-other"}`}>
      عربي
    </span>
  );

  return (
    <a
      href={href}
      hrefLang={other}
      lang={other}
      onClick={go}
      aria-label={ui.language.otherLabel}
      dir="ltr"
      className="lang-toggle btn-secondary inline-flex h-[46px] min-w-[46px] shrink-0 items-center justify-center gap-2 rounded-full px-1.5 no-underline sm:px-4"
    >
      {/* Phones: just the language you can switch to. */}
      <span aria-hidden="true" className="sm:hidden">
        {locale === "en" ? ar : en}
      </span>
      {/* Larger screens: both, with the current one highlighted. */}
      <span aria-hidden="true" className="hidden items-center gap-2 sm:inline-flex">
        {en}
        <span className="lang-sep">/</span>
        {ar}
      </span>
    </a>
  );
}
