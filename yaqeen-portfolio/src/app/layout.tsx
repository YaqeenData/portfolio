import type { Metadata, Viewport } from "next";
import { Albert_Sans, Antonio, Bodoni_Moda, Fraunces } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  axes: ["opsz"],
  style: ["italic"],
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  ...(site.seo.siteUrl ? { metadataBase: new URL(site.seo.siteUrl) } : {}),
  title: site.seo.title,
  description: site.seo.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070D22" },
    { media: "(prefers-color-scheme: light)", color: "#FFF5EE" },
  ],
};

/**
 * Runs before paint: applies the visitor's saved mode (night is the default world)
 * and marks that JavaScript is available so reveal animations can hide content first.
 */
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');d.dataset.theme=t==='twilight'?'twilight':'night';}catch(e){d.dataset.theme='night';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="night"
      suppressHydrationWarning
      className={`${fraunces.variable} ${bodoni.variable} ${antonio.variable} ${albert.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
