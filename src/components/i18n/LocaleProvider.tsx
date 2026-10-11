"use client";

import { createContext, useContext, type ReactNode } from "react";
import { content, type Content, type Locale } from "@/content";

const LocaleContext = createContext<Locale>("en");

/** Makes the page's language available to client components (server components receive `c`). */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** The current language's content. */
export function useContent(): Content {
  return content[useContext(LocaleContext)];
}
