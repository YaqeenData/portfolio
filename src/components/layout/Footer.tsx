import type { Content } from "@/content";

export function Footer({ c }: { c: Content }) {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 pb-10 sm:px-10 xl:px-16">
      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] text-ink-3">
          © {new Date().getFullYear()} {c.name}
        </p>
        <a href="#top" className="label text-[13px] tracking-[0.28em] text-ink-2 no-underline hover:text-accent">
          {c.ui.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
