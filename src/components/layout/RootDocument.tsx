import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { content, localeMeta, type Locale } from "@/content";
import { latinFontVars } from "./fonts";

export function buildMetadata(locale: Locale): Metadata {
  const c = content[locale];
  return {
    ...(c.seo.siteUrl ? { metadataBase: new URL(c.seo.siteUrl) } : {}),
    title: c.seo.title,
    description: c.seo.description,
    authors: [{ name: c.name }],
    alternates: {
      canonical: localeMeta[locale].path,
      languages: { en: localeMeta.en.path, ar: localeMeta.ar.path, "x-default": localeMeta.en.path },
    },
    openGraph: {
      title: c.seo.title,
      description: c.seo.description,
      type: "website",
      locale: localeMeta[locale].ogLocale,
      alternateLocale: [localeMeta[locale === "en" ? "ar" : "en"].ogLocale],
    },
    twitter: {
      card: "summary",
      title: c.seo.title,
      description: c.seo.description,
    },
  };
}

export const sharedViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070D22" },
    { media: "(prefers-color-scheme: light)", color: "#FFF5EE" },
  ],
};

/**
 * Runs before paint, so there is never a flash of the wrong theme or language:
 *  - mode: the visitor's saved choice, otherwise their system preference (light → twilight/day),
 *    otherwise night;
 *  - marks that JavaScript is available so reveal animations can hide content first;
 *  - skips the introduction if it has already played in this browser session;
 *  - on the English page only: a visitor who chose Arabic before is taken straight to /ar.
 */
function headScript(locale: Locale) {
  const redirect =
    locale === "en"
      ? `try{if(localStorage.getItem('lang')==='ar'&&location.pathname==='/'){location.replace('/ar'+location.hash);}}catch(e){}`
      : "";
  return `(function(){var d=document.documentElement;${redirect}d.classList.add('js');var t=null;try{t=localStorage.getItem('theme');}catch(e){}if(t!=='night'&&t!=='twilight'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'twilight':'night';}d.dataset.theme=t;try{if(sessionStorage.getItem('introSeen'))d.classList.add('intro-skip');}catch(e){}})();`;
}

/** The <html> document for one language — each language is its own root layout. */
export function RootDocument({
  locale,
  fontVars = "",
  children,
}: {
  locale: Locale;
  fontVars?: string;
  children: ReactNode;
}) {
  return (
    <html
      lang={locale}
      dir={localeMeta[locale].dir}
      data-theme="night"
      suppressHydrationWarning
      className={`${latinFontVars} ${fontVars}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: headScript(locale) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
