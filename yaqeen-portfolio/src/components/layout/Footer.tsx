import { site } from "@/content/site";

const DOTS = ["bg-blue", "bg-pink", "bg-orange"];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 pb-12 pt-20 sm:px-10 xl:px-16">
      <div className="flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] text-ink-3">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="label flex items-center gap-3 text-[13px] tracking-[0.32em] text-ink-2">
          {site.philosophy.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${DOTS[i]}`} />
              {word}
            </span>
          ))}
        </p>
        <a href="#top" className="label text-[13px] tracking-[0.28em] text-ink-2 no-underline hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
