# Project assets

One folder per project, named after its `slug` in `src/content/projects.ts`:

    public/assets/projects/<slug>/cover.webp      → illustration: { src: "/assets/projects/<slug>/cover.webp", alt: { en, ar } }
    public/assets/projects/<slug>/demo.mp4        → resources.demo: "/assets/projects/<slug>/demo.mp4"
    public/assets/projects/<slug>/slides.pdf      → resources.presentation: "/assets/projects/<slug>/slides.pdf"

Bayan, Sentinel and Najm use built-in drawn illustrations, so their folders are empty for now.
