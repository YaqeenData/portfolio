import { content, type Locale } from "@/content";
import { homePath } from "@/content/projects";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { Backdrop } from "@/components/layout/Backdrop";
import { Header } from "@/components/layout/Header";

/** A calm 404 in the portfolio's own style, in the visitor's language. */
export function NotFound({ locale }: { locale: Locale }) {
  const { ui } = content[locale];
  return (
    <LocaleProvider locale={locale} alternatePath={homePath(locale === "en" ? "ar" : "en")} onHome={false}>
      <Backdrop />
      <Header />
      <main id="main" className="mx-auto flex min-h-[70vh] max-w-[720px] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <p className="label text-[13px] tracking-[0.34em] text-accent">404</p>
        <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-tight text-ink">{ui.notFoundTitle}</h1>
        <p className="text-[17px] leading-relaxed text-ink-2">{ui.notFoundBody}</p>
        <a href={homePath(locale)} className="btn btn-secondary mt-2">
          {ui.notFoundBack}
        </a>
      </main>
    </LocaleProvider>
  );
}
