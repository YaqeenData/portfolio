import { Backdrop } from "@/components/layout/Backdrop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileIndex } from "@/components/layout/MobileIndex";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[100] rounded-full bg-[var(--bg-2)] px-5 py-3 text-xs text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Backdrop />
      <Header />
      <main id="main">
        <Hero />
        <MobileIndex />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
