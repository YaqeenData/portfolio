"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Overview } from "./Overview";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const resumeHref = site.contact.resume ?? "#contact";

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function openOverview() {
    setMenuOpen(false);
    setOverviewOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-[var(--header-bg)] backdrop-blur-xl transition-colors duration-700">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3.5 sm:px-10 xl:px-16">
          <a href="#top" className="flex flex-col gap-0.5 no-underline" onClick={() => setMenuOpen(false)}>
            <span data-brand-name className="brand-name font-display text-[19px] text-ink sm:text-[22px]">
              {site.name}
            </span>
            <span className="label text-[10px] tracking-[0.32em] text-accent sm:text-[11px]">{site.role}</span>
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex gap-10">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="label text-[14px] tracking-[0.24em] text-ink-2 no-underline transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button type="button" onClick={openOverview} className="btn btn-secondary btn-sm hidden cursor-pointer md:inline-flex">
              Overview
            </button>
            <a href={resumeHref} className="btn btn-secondary btn-sm hidden sm:inline-flex">
              Résumé
            </a>
            <ThemeToggle />
            <button
              ref={menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="btn-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full xl:hidden"
            >
              <svg aria-hidden="true" width="20" height="14" viewBox="0 0 20 14">
                {menuOpen ? (
                  <path d="M3 1l14 12M17 1L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M1 2h18M7 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Sections"
          hidden={!menuOpen}
          className="border-t border-line bg-[var(--header-bg)] px-6 pb-6 backdrop-blur-xl xl:hidden"
        >
          <ul>
            {site.nav.map((item) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 no-underline"
                >
                  <span className="font-display text-[24px] text-ink">{item.label}</span>
                  <span aria-hidden="true" className="text-pink">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <button type="button" onClick={openOverview} className="btn btn-secondary w-full cursor-pointer">
              Overview
            </button>
            <a href={resumeHref} onClick={() => setMenuOpen(false)} className="btn btn-primary w-full sm:hidden">
              Résumé
            </a>
          </div>
        </nav>
      </header>
      <Overview open={overviewOpen} onClose={() => setOverviewOpen(false)} />
    </>
  );
}
