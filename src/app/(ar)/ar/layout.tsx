import type { ReactNode } from "react";
import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import { RootDocument, buildMetadata, sharedViewport } from "@/components/layout/RootDocument";
import "../../globals.css";

/**
 * Arabic type (loaded only on /ar):
 *  - Alexandria for headings — a variable font, so every weight comes from one file;
 *  - IBM Plex Sans Arabic for body text and labels.
 * Latin words inside Arabic text keep the existing English fonts (see globals.css).
 */
const alexandria = Alexandria({
  subsets: ["arabic"],
  variable: "--font-alexandria",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-ar",
  display: "swap",
});

export const metadata = buildMetadata("ar");
export const viewport = sharedViewport;

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return (
    <RootDocument locale="ar" fontVars={`${alexandria.variable} ${plexArabic.variable}`}>
      {children}
    </RootDocument>
  );
}
