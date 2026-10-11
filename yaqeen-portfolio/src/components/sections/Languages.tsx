import { site } from "@/content/site";
import { GlassCard } from "@/components/ui/GlassCard";

/**
 * Languages as streams. Fluent languages are complete streams ending in a node.
 * Languages being learned are open streams: a glowing node with the path still ahead.
 * Every learning node sits at the same point on purpose — this is not a proficiency scale.
 */
export function Languages() {
  return (
    <GlassCard paneClassName="flex flex-col gap-6 p-7 sm:p-8">
      <div className="flex flex-col gap-2">
        <p className="label text-[12px] tracking-[0.32em] text-accent">Beyond engineering</p>
        <h3 className="font-display text-[28px] font-normal text-ink sm:text-[30px]">Languages</h3>
      </div>

      <ul className="flex flex-col gap-5">
        {site.about.languages.map((lang) => {
          const fluent = lang.status === "fluent";
          return (
            <li
              key={lang.name}
              className="grid grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)_auto] items-center gap-x-4 sm:grid-cols-[8.5rem_minmax(0,1fr)_5.5rem]"
            >
              <span className="flex flex-col">
                <span className="font-display text-[19px] text-ink">{lang.name}</span>
                {"note" in lang && lang.note ? <span className="text-[12px] text-ink-3">{lang.note}</span> : null}
              </span>

              <span aria-hidden="true" className="relative h-3.5">
                {fluent ? (
                  <>
                    <span className="absolute left-0 right-1.5 top-1.5 h-0.5 rounded-full bg-gradient-to-r from-transparent to-blue" />
                    <span className="absolute right-0 top-0.5 h-2.5 w-2.5 rounded-full bg-blue shadow-[0_0_12px_var(--blue)]" />
                  </>
                ) : (
                  <>
                    <span className="absolute left-0 top-1.5 h-0.5 w-[45%] rounded-full bg-gradient-to-r from-transparent to-pink" />
                    <span className="absolute left-[45%] right-0 top-1.5 border-t-2 border-dashed border-[var(--dash)]" />
                    <span className="absolute left-[calc(45%-5px)] top-0.5 h-2.5 w-2.5 rounded-full bg-[#FFB15C] shadow-[0_0_14px_#FF8A2B]" />
                  </>
                )}
              </span>

              <span
                className={`label text-right text-[12px] tracking-[0.24em] ${fluent ? "text-ink-3" : "text-accent"}`}
              >
                {fluent ? "Fluent" : "Learning"}
              </span>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
