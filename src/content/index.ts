import { site, type Content } from "./site";
import { siteAr } from "./site.ar";

export type Locale = "en" | "ar";

/** Every language resource, keyed by locale. English is the default. */
export const content: Record<Locale, Content> = { en: site, ar: siteAr };

export const localeMeta: Record<Locale, { dir: "ltr" | "rtl"; path: string; ogLocale: string }> = {
  en: { dir: "ltr", path: "/", ogLocale: "en_US" },
  ar: { dir: "rtl", path: "/ar", ogLocale: "ar_SA" },
};

export { fmt, type Content } from "./site";
