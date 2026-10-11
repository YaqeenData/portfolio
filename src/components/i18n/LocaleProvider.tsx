"use client";

import { createContext, useContext, type ReactNode } from "react";
import { content, type Content, type Locale } from "@/content";

type PageInfo = {
  locale: Locale;
  /** The same page in the other language (used by the language switch). */
  alternatePath: string;
  /** True on the homepage, where section links are plain #anchors. */
  onHome: boolean;
};

const PageContext = createContext<PageInfo>({ locale: "en", alternatePath: "/ar", onHome: true });

/** Makes the page's language available to client components (server components receive `c`). */
export function LocaleProvider({
  locale,
  alternatePath,
  onHome = true,
  children,
}: {
  locale: Locale;
  alternatePath: string;
  onHome?: boolean;
  children: ReactNode;
}) {
  return <PageContext.Provider value={{ locale, alternatePath, onHome }}>{children}</PageContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(PageContext).locale;
}

export function usePageInfo(): PageInfo {
  return useContext(PageContext);
}

/** The current language's content. */
export function useContent(): Content {
  return content[useContext(PageContext).locale];
}
