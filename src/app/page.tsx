import { Backdrop } from "@/components/layout/Backdrop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Intro } from "@/components/layout/Intro";
import { Hero } from "@/components/hero/Hero";
import { Architecture } from "@/components/sections/Architecture";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";
import { Curiosity } from "@/components/sections/Curiosity";
import { Path } from "@/components/sections/Path";
import { Work } from "@/components/work/Work";

/**
 * One Night, One Stream — the homepage as a journey:
 * Prologue (the sky) → I Curiosity → II How I engineer → III What I've built
 * → IV The path → Beyond the code → Contact (first light).
 * Section volumes alternate on purpose: loud, quiet, precise, loud, quiet, intimate, calm.
 */
export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[100] rounded-full bg-[var(--bg-2)] px-5 py-3 text-xs text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Intro />
      <Backdrop />
      <Header />
      <main id="main">
        <Hero />
        <Curiosity />
        <Architecture />
        <Work />
        <Path />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
