import { content, type Locale } from "@/content";
import { availableResources, type ProjectResources as Resources } from "@/content/projects";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { KaggleIcon } from "@/components/ui/KaggleIcon";

/**
 * Case study, demo, repository, slides — only the ones with a real link. With none, nothing
 * renders (the project page itself already tells the full story).
 */
export function ProjectResources({ resources, locale }: { resources?: Resources; locale: Locale }) {
  const links = availableResources(resources);
  if (!links.length) return null;
  const { ui } = content[locale];
  return (
    <section aria-labelledby="resources-title" className="mx-auto max-w-[1440px] px-6 pb-16 sm:px-10 xl:px-16">
      <h2 id="resources-title" className="label text-[12px] tracking-[0.32em] text-ink-3">
        {ui.resources}
      </h2>
      <ul className="mt-5 flex flex-wrap gap-3">
        {links.map(({ key, href }) => {
          const external = /^https?:\/\//.test(href);
          return (
            <li key={key}>
              <a
                href={href}
                className="btn btn-secondary btn-sm"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {key === "kaggle" ? <KaggleIcon /> : null}
                {ui.resourceLabels[key]}
                <ArrowIcon />
                {external ? <span className="sr-only"> {ui.opensNewTab}</span> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
