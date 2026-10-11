import type { ReactNode } from "react";
import { RootDocument, buildMetadata, sharedViewport } from "@/components/layout/RootDocument";
import "../globals.css";

export const metadata = buildMetadata("en");
export const viewport = sharedViewport;

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
