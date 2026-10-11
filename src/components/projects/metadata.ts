import type { Metadata } from "next";
import { content, fmt, localeMeta, type Locale } from "@/content";
import { labPath, projectPath, type Project } from "@/content/projects";

/** Title, description, canonical URL and language alternates for one project page. */
export function buildProjectMetadata(locale: Locale, project: Project): Metadata {
  const c = content[locale];
  const t = project.text[locale];
  const title = fmt(c.ui.projectMetaTitle, { project: t.title, name: c.name });
  const description = t.subtitle ? `${t.subtitle} — ${t.summary}` : t.summary;
  return {
    ...(c.seo.siteUrl ? { metadataBase: new URL(c.seo.siteUrl) } : {}),
    title,
    description,
    authors: [{ name: c.name }],
    alternates: {
      canonical: projectPath(locale, project.slug),
      languages: {
        en: projectPath("en", project.slug),
        ar: projectPath("ar", project.slug),
        "x-default": projectPath("en", project.slug),
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: localeMeta[locale].ogLocale,
      ...(project.coverImage ? { images: [project.coverImage.src] } : {}),
    },
    twitter: { card: "summary", title, description },
  };
}

/** Title, description and language alternates for the Project Lab. */
export function buildLabMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const title = fmt(c.ui.lab.metaTitle, { name: c.name });
  const description = c.ui.lab.subtitle;
  return {
    ...(c.seo.siteUrl ? { metadataBase: new URL(c.seo.siteUrl) } : {}),
    title,
    description,
    authors: [{ name: c.name }],
    alternates: {
      canonical: labPath(locale),
      languages: { en: labPath("en"), ar: labPath("ar"), "x-default": labPath("en") },
    },
    openGraph: { title, description, type: "website", locale: localeMeta[locale].ogLocale },
    twitter: { card: "summary", title, description },
  };
}
