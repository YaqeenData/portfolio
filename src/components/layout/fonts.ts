import { Albert_Sans, Antonio, Bodoni_Moda, Fraunces } from "next/font/google";

/** The Latin type system, shared by every language. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  axes: ["opsz"],
  style: ["italic"],
  display: "swap",
});

export const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

export const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

/** Applied to <html> so the font variables exist everywhere. */
export const latinFontVars = `${fraunces.variable} ${bodoni.variable} ${antonio.variable} ${albert.variable}`;
