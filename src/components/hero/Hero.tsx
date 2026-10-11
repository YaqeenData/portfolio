import { site } from "@/content/site";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Cosmos } from "./Cosmos";

export function Hero() {
  const { hero } = site;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Desktop: the universe fills the right of the hero, behind the text edge. */}
      <div className="cosmos-fade-left pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] xl:block">
        <Cosmos
          id="cosmos-wide"
          viewBox="560 0 880 820"
          preserveAspectRatio="xMinYMid slice"
          className="h-full w-full"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col px-6 sm:px-10 xl:min-h-[820px] xl:flex-row xl:items-center xl:px-16">
        {/* Mobile & tablet: the universe sits above the text, cropped around the sun. */}
        <div className="cosmos-fade-edges pointer-events-none -mx-6 sm:mx-auto sm:w-full sm:max-w-[680px] xl:hidden">
          <Cosmos id="cosmos-compact" viewBox="640 30 800 610" labelScale={1.7} className="block h-auto w-full" />
        </div>

        <div className="relative z-10 flex max-w-[780px] flex-col gap-6 pb-20 pt-2 sm:gap-7 xl:py-24">
          <p className="label text-[13px] font-medium tracking-[0.3em] text-accent sm:text-[15px]">
            {hero.eyebrow[0]} <span className="text-ink-4">/</span> {hero.eyebrow[1]}
          </p>

          <h1
            id="hero-title"
            className="font-display text-[clamp(2.25rem,5.2vw,5rem)] font-normal leading-[1.03] tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_144]"
          >
            <span className="block">{hero.headline.line1}</span>
            <span className="block">
              {hero.headline.line2Lead}{" "}
              <em className="font-italic font-normal italic text-italic">{hero.headline.line2Emphasis}</em>
            </span>
          </h1>

          <p className="max-w-[560px] text-[17px] leading-[1.7] text-ink-2 sm:text-[19px]">{hero.intro}</p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <ArrowIcon className="text-[#2A1206]" />
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#curiosity"
        className="label absolute bottom-8 left-16 hidden items-center gap-3.5 text-xs tracking-[0.34em] text-ink-4 no-underline transition-colors hover:text-accent xl:flex"
      >
        <span aria-hidden="true" className="h-9 w-px bg-gradient-to-b from-transparent to-blue" />
        Scroll
      </a>
    </section>
  );
}
