import { site } from "@/content/site";
import { StreamDivider } from "@/components/ui/StreamDivider";

/** On phones, a large tappable index replaces the desktop navigation links. */
export function MobileIndex() {
  return (
    <nav aria-label="Explore sections" className="mx-auto max-w-[1440px] px-6 sm:px-10 xl:hidden">
      <StreamDivider />
      <p className="label pb-3 pt-9 text-xs tracking-[0.32em] text-ink-3">Explore</p>
      <ul>
        {site.nav.map((item, i) => (
          <li key={item.id} className={`border-t border-line ${i === site.nav.length - 1 ? "border-b" : ""}`}>
            <a href={`#${item.id}`} className="group flex items-center gap-4 py-5 no-underline">
              <span aria-hidden="true" className="label w-8 text-[22px] font-extralight tracking-normal text-blue">
                {item.index}
              </span>
              <span className="flex-1 font-display text-[24px] text-ink">
                {item.id === "contact" ? "Contact & résumé" : item.label}
              </span>
              <span aria-hidden="true" className="text-pink transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
