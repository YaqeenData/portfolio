import { content, type Locale } from "@/content";
import { labPath } from "@/content/projects";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { Backdrop } from "@/components/layout/Backdrop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SketchSvg } from "@/components/sections/Sketches";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel, Headline } from "@/components/ui/Type";
import { LabGallery } from "./LabGallery";

/**
 * The Project Lab (/projects, /ar/projects): every project — engineering projects and playground
 * experiments — on one page. Uses the site's header, sky, type and cards unchanged.
 */
export function ProjectLab({ locale }: { locale: Locale }) {
  const c = content[locale];
  const { lab } = c.ui;
  const other: Locale = locale === "en" ? "ar" : "en";

  return (
    <LocaleProvider locale={locale} alternatePath={labPath(other)} onHome={false}>
      <a
        href="#main"
        className="label sr-only z-[100] rounded-full bg-[var(--bg-2)] px-5 py-3 text-xs text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {c.ui.skipToContent}
      </a>
      <Backdrop />
      <Header />
      <main id="main">
        <header id="top" className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-12 pt-20 sm:px-10 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_320px] xl:px-16">
          <Reveal className="flex flex-col gap-6">
            <ChapterLabel>{lab.kicker}</ChapterLabel>
            <Headline
              as="h1"
              content={lab.title}
              className="max-w-[18ch] text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.02em] [font-variation-settings:'opsz'_144]"
            />
            <p className="max-w-[52ch] text-[17px] leading-[1.7] text-ink-2 sm:text-[19px]">{lab.subtitle}</p>
          </Reveal>
          {/* Two sides of the lab, as notebook sketches: purpose and curiosity. */}
          <Reveal variant="draw" className="hidden flex-col items-center gap-6 lg:flex" >
            <div aria-hidden="true" className="w-full">
              <SketchSvg name="pipeline" />
            </div>
            <span aria-hidden="true" className="font-italic text-[28px] italic text-italic">
              &amp;
            </span>
            <div aria-hidden="true" className="w-[70%]">
              <SketchSvg name="curious" />
            </div>
          </Reveal>
        </header>
        <LabGallery />
      </main>
      <Footer c={c} />
    </LocaleProvider>
  );
}
