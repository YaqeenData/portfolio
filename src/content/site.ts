/**
 * All portfolio content lives here, separate from the components that present it.
 *
 * This file is the English resource; `site.ar.ts` holds the Arabic one with exactly the same
 * shape (the type checker enforces it). Links and other shared values live only here.
 *
 * Editing rules:
 *  - `null` means "not provided yet". Components render a clearly marked placeholder
 *    instead of inventing anything, so the site never shows unverified claims.
 *  - Replace a `null` with a real value and the placeholder disappears automatically.
 *  - Headlines are split into `lead` + `emphasis`; the emphasis is set in the pink italic.
 */

export type Headline = { lead: string; emphasis: string };

export type NavItem = { id: string; label: string };

export type Language = {
  name: string;
  note?: string;
  status: "fluent" | "learning";
  /** Optional qualifications shown under the language, e.g. test scores. */
  qualifications?: string[];
};

export type Milestone = {
  /** e.g. "The Foundation" */
  chapter: string;
  title: string;
  place: string;
  when: string;
  /** One short sentence. */
  line: string;
  /** Which notebook sketch accompanies the milestone. */
  sketch: "computer" | "app" | "scatter" | "pipeline" | "cloud" | "curious";
  recognition?: string;
  /** The professional data engineering milestone gets a little more emphasis. */
  prime?: boolean;
};

export type ArchitectureLayer = {
  /** Full area name, shown in the layer panel. */
  name: string;
  /** Short name shown beside the plane in the architecture. */
  short: string;
  tools: string[];
};

export type Experience = {
  role: string;
  org: string;
  dates: string;
  place: string;
  points: string[];
};

export type Credential = {
  title: string;
  /** `null` renders a marked placeholder. */
  issuer: string | null;
  year: string;
  /** Leave `null` until a real verification link exists — nothing is shown. */
  verifyUrl: string | null;
};

export type Training = {
  title: string;
  org: string;
  dates: string;
  recognition?: string;
};

export const site = {
  name: "Yaqeen Alhalal",
  role: "Data Engineer",
  location: "Saudi Arabia",
  philosophy: ["Collect", "Engineer", "Build"] as const,

  seo: {
    title: "Yaqeen Alhalal — Data Engineer",
    description:
      "Data Engineer driven by curiosity, passionate about collecting and engineering data to build meaningful solutions.",
    /** Set to the deployed URL (e.g. "https://yaqeen.dev") to enable absolute social-card URLs. */
    siteUrl: null as string | null,
  },

  nav: [
    { id: "projects", label: "Projects" },
    { id: "expertise", label: "Expertise" },
    { id: "path", label: "Path" },
    { id: "contact", label: "Contact" },
  ] satisfies NavItem[],

  // ── Prologue ───────────────────────────────────────────────
  hero: {
    eyebrow: ["Yaqeen Alhalal", "Data Engineer"] as const,
    headline: {
      line1: "Engineering Data.",
      line2Lead: "Building",
      line2Emphasis: "Possibilities.",
    },
    intro:
      "I'm a Data Engineer driven by curiosity, passionate about collecting and engineering data to build meaningful solutions. I thrive on complex challenges, learn quickly, and love discovering problems worth solving with data.",
    primaryCta: { label: "Explore My Projects", href: "#projects" },
    secondaryCta: { label: "About Me", href: "#curiosity" },
  },

  // ── I · Curiosity ──────────────────────────────────────────
  curiosity: {
    label: "Curiosity",
    statement: { lead: "I'm drawn to problems that", emphasis: "need an engineer." } satisfies Headline,
    /** The About Me timeline — one continuous line from first curiosity to today. */
    journey: [
      {
        chapter: "The Foundation",
        title: "Computer Science",
        place: "King Faisal University",
        when: "2019–2024",
        line: "Where my curiosity about technology, software, and understanding complex systems began.",
        sketch: "computer",
      },
      {
        chapter: "The Discovery",
        title: "Software Development Internship",
        place: "King Faisal University — Deanship of Information Technology",
        when: "2024",
        line: "Building software introduced me to real-world engineering and helped me discover my passion for data.",
        sketch: "app",
      },
      {
        chapter: "The Exploration",
        title: "Data Science & Machine Learning Bootcamp",
        place: "Tuwaiq Academy",
        when: "Jan–Mar 2025",
        line: "Exploring how data reveals patterns, powers predictions, and helps solve complex problems.",
        sketch: "scatter",
      },
      {
        chapter: "From Curiosity to Practice",
        title: "Data Engineering Internship",
        place: "Saudi Commission for Health Specialties (SCFHS)",
        when: "Oct 2025–May 2026",
        line: "Where my passion became hands-on engineering through data pipelines, secure APIs, data quality, and integration.",
        sketch: "pipeline",
        prime: true,
      },
      {
        chapter: "The Expansion",
        title: "Data Engineering Bootcamp",
        place: "Saudi Digital Academy",
        when: "Aug–Oct 2026",
        line: "Strengthening my engineering skills through cloud infrastructure, orchestration, and end-to-end pipeline development.",
        sketch: "cloud",
        recognition: "Champion of the Week",
      },
      {
        chapter: "Still Curious",
        title: "The Next Challenge",
        place: "",
        when: "Today →",
        line: "Still exploring, still engineering, and always looking for the next problem worth solving.",
        sketch: "curious",
      },
    ] satisfies Milestone[],
  },

  // ── II · How I engineer ────────────────────────────────────
  architecture: {
    label: "How I engineer",
    title: { lead: "A system,", emphasis: "one layer at a time." } satisfies Headline,
    orchestration: "Apache Airflow",
    /** Listed from the foundation upwards — the order they assemble on screen. */
    layers: [
      { name: "Programming & Development", short: "Programming", tools: ["Python", "SQL", "Bash / Shell", "Git", "GitHub"] },
      {
        name: "Pipelines & Orchestration",
        short: "Pipelines & orchestration",
        tools: ["ETL / ELT", "Apache Airflow", "dbt", "Batch processing", "Pipeline development"],
      },
      {
        name: "Databases, Storage & Modeling",
        short: "Storage & modeling",
        tools: [
          "PostgreSQL",
          "SQL Server",
          "MySQL",
          "MongoDB",
          "Relational data modeling",
          "Data warehousing",
          "Medallion architecture",
          "Object storage",
        ],
      },
      {
        name: "Data Quality & Observability",
        short: "Quality",
        tools: ["Data profiling", "Data validation", "Data cleansing", "Quality monitoring", "Schema evolution", "Drift detection"],
      },
      {
        name: "Cloud, Infrastructure & Processing",
        short: "Cloud & processing",
        tools: ["Microsoft Azure", "GCP", "AWS", "Docker", "Docker Compose", "Apache Spark / PySpark", "Apache Kafka"],
      },
      {
        name: "APIs & Integration",
        short: "APIs & integration",
        tools: ["FastAPI", "REST APIs", "WSO2 API Manager", "Web scraping", "Requests", "Selenium"],
      },
      {
        name: "Analytics & Collaboration",
        short: "Analytics & collaboration",
        tools: ["Power BI", "Tableau", "Linear", "Jira", "Agile workflows"],
      },
    ] satisfies ArchitectureLayer[],
    /** Shown in lower case after "Also:", as in the original design. */
    alsoExperienced: ["data science", "machine learning", "data analytics", "streaming systems"],
  },

  // ── III · What I've built ──────────────────────────────────
  projects: {
    label: "What I've built",
    alsoBuilt: ["ETL / ELT pipelines", "Data analytics", "Machine learning", "APIs"],
  },

  // ── IV · The path ──────────────────────────────────────────
  path: {
    label: "The path",
    title: { lead: "The path", emphasis: "so far." } satisfies Headline,
    /** Oldest first — the stream flows left to right. */
    experience: [
      {
        role: "Software Development Intern",
        org: "King Faisal University — Deanship of Information Technology",
        dates: "Jun 2024 – Sep 2024",
        place: "Hofuf, Saudi Arabia",
        points: [
          "Developed KFU Space using ASP.NET Core MVC, JavaScript, Bootstrap, Entity Framework, and SQL Server.",
          "Designed database structures, maintained code quality, and collaborated using Git.",
        ],
      },
      {
        role: "Data Engineering Intern",
        org: "Saudi Commission for Health Specialties",
        dates: "Oct 2025 – May 2026",
        place: "Riyadh, Saudi Arabia",
        points: [
          "Developed data collection workflows using APIs and dynamic web scraping with Requests and Selenium, supporting downstream analytics.",
          "Built and orchestrated ETL pipelines using Apache Airflow.",
          "Developed secure APIs using Python, FastAPI, and WSO2 API Manager for data sharing, monitoring, and monetization initiatives.",
        ],
      },
    ] satisfies Experience[],
    credentials: {
      label: "Education, training & certifications",
      education: {
        degree: "Bachelor of Computer Science",
        school: "King Faisal University",
        dates: "Sep 2019 – Aug 2024",
        notes: ["GPA 4.31 / 5.00", "Second-Class Honors"],
      },
      training: [
        {
          title: "Data Engineering Bootcamp",
          org: "Saudi Digital Academy",
          dates: "Aug 2026 – Oct 2026",
          recognition: "Champion of the Week",
        },
        {
          title: "Data Science and Machine Learning Bootcamp",
          org: "Tuwaiq Academy",
          dates: "Jan 2025 – Mar 2025",
        },
      ] satisfies Training[],
      certifications: [
        { title: "DataCamp Certified Data Engineer", issuer: "DataCamp", year: "2026", verifyUrl: null },
        { title: "IBM Data Engineering Professional Certificate", issuer: "IBM", year: "2026", verifyUrl: null },
        { title: "Associate Data Engineer in Snowflake", issuer: "DataCamp", year: "2026", verifyUrl: null },
        { title: "Associate Data Engineer in Databricks", issuer: "DataCamp", year: "2026", verifyUrl: null },
        {
          title: "Tableau Business Intelligence Analyst Professional Certificate",
          issuer: "Tableau",
          year: "2025",
          verifyUrl: null,
        },
      ] satisfies Credential[],
    },
  },

  // ── Epilogue · Beyond the code ─────────────────────────────
  beyond: {
    label: "Beyond the code",
    title: { lead: "Two languages I live in.", emphasis: "Three I'm still drawing." } satisfies Headline,
    intro: "I enjoy learning how to communicate, whether it's through code, data, spoken languages, or sign language.",
    languages: [
      { name: "Arabic", status: "fluent" },
      { name: "English", status: "fluent", qualifications: ["IELTS Academic · 7.5", "STEP · 91"] },
      { name: "Italian", status: "learning" },
      { name: "Russian", status: "learning" },
      { name: "ArSL", note: "Arabic Sign Language", status: "learning" },
    ] satisfies Language[],
  },

  // ── Contact · First light ──────────────────────────────────
  contact: {
    label: "Contact",
    title: { lead: "Let's build a", emphasis: "data solution." } satisfies Headline,
    email: "YaqeenAlhalal@outlook.sa",
    linkedin: "https://www.linkedin.com/in/yaqeen-alhalal-8388541a3/",
    github: "https://github.com/YaqeenData",
    /** Your Kaggle profile, e.g. "https://www.kaggle.com/<username>" */
    kaggle: "https://www.kaggle.com/yaqeenalhalal",
    /** e.g. "/resume.pdf" after adding the file to /public */
    resume: "assets/YaqeenAlhalal_DataEngineer.pdf",
  },

  // ── Recruiter overview (one screen, opened from the header) ─
  overview: {
    focus: ["Data pipelines", "ETL / ELT", "Data modeling", "Data quality & observability", "APIs & integration"],
    coreStack: ["Python", "SQL", "Apache Airflow", "dbt", "PostgreSQL", "Docker", "Spark", "Kafka", "FastAPI", "Azure · GCP · AWS"],
  },

  // ── Interface text (buttons, labels, hints, accessibility) ─
  ui: {
    /** Chapter numerals: I · Curiosity … IV · The path. */
    numerals: ["I", "II", "III", "IV"],
    skipToContent: "Skip to content",
    skipIntro: "Skip intro",
    introRole: "A Data Engineer",
    scroll: "Scroll",
    primaryNav: "Primary",
    sectionsNav: "Sections",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    overview: "Overview",
    resume: "Résumé",
    themeToggle: "Switch between night and twilight",
    themeToTwilight: "Switch to twilight",
    themeToNight: "Switch to night",
    /** The language switch shows both names; the current one is highlighted. */
    language: { current: "EN", other: "عربي", otherLabel: "اقرأ الموقع بالعربية", group: "Language" },
    chapter: "Project",
    architecture: "Architecture",
    then: "then",
    alsoBuilt: "Also built",
    stageHint: "Select a stage to explore",
    stageOf: "Stage {n} of {total}",
    stagesLabel: "{project} workflow stages",
    layerHint: "Select a layer to see its tools",
    layerShowTools: "{layer}: show tools",
    orchestratedWith: "Orchestrated with",
    also: "Also",
    engineering: "Engineering",
    leadership: "Leadership",
    abilitiesLabel: "Abilities this project draws on",
    nextSection: "Next · How I engineer",
    education: "Education",
    training: "Specialized training",
    certifications: "Certifications",
    issuer: "Issuer",
    verify: "Verify",
    opensNewTab: "(opens in a new tab)",
    fluent: "Fluent",
    learning: "Learning",
    downloadResume: "Download résumé",
    linkedin: "LinkedIn",
    github: "GitHub",
    kaggle: "Kaggle",
    linkMissing: "{label} link",
    emailMissing: "Email address",
    backToTop: "Back to the sky",
    overviewKicker: "Overview · one screen",
    closeOverview: "Close overview",
    focus: "Focus",
    coreStack: "Core stack",
    projects: "Projects",
    experience: "Experience",
    languages: "Languages",
    learningPrefix: "learning",
    credentialsSummary: "{certs} certifications · {camps} bootcamps",
    jumpToProjects: "Jump to projects",
    /** Project gallery and project pages. */
    exploreProject: "Explore project",
    featured: "Featured",
    filterLabel: "Filter projects by area",
    filterAll: "All",
    backToProjects: "All projects",
    previousProject: "Previous project",
    nextProject: "Next project",
    resources: "Project resources",
    resourceLabels: {
      caseStudy: "Read the case study",
      demo: "Watch the demo",
      github: "GitHub repository",
      kaggle: "View on Kaggle",
      presentation: "View the presentation",
    },
    projectMetaTitle: "{project} — {name}",
    exploreAllProjects: "Explore all projects",
    projectStatus: {
      completed: "Completed",
      "in-progress": "In progress",
      prototype: "Prototype",
      experiment: "Experiment",
      archived: "Archived",
    },
    notes: { label: "Engineering notes", approach: "Approach", challenges: "Challenges", lessons: "Lessons" },
    playgroundNotes: { inspiration: "What sparked it", built: "What I built", learned: "What I learned" },
    /** The Project Lab (/projects). */
    lab: {
      kicker: "The Project Lab",
      title: { lead: "Built with purpose. And sometimes,", emphasis: "just curiosity." },
      subtitle: "From engineering real-world solutions to experimenting with ideas that simply sparked my curiosity.",
      selectorLabel: "Show projects",
      all: "All projects",
      engineering: "Engineering",
      playground: "Playground",
      engineeringTitle: "Engineering projects",
      engineeringIntro: "Professional and academic systems: data engineering, machine learning, software and cloud.",
      playgroundTitle: "The Playground",
      playgroundIntro: "Small experiments, personal challenges and ideas built for the joy of building.",
      emptyTitle: "The Playground is warming up.",
      emptyBody: "Small experiments, side projects and ideas that simply made me curious will land here soon.",
      metaTitle: "The Project Lab — {name}",
    },
    notFoundTitle: "This page isn't here.",
    notFoundBody: "The link may be mistyped, or the project hasn't been published yet.",
    notFoundBack: "Back to the portfolio",
    /** Labels drawn inside the illustrations. */
    cosmos: { collect: "COLLECT", engineer: "ENGINEER", build: "BUILD", cancer: "CANCER" },
    art: {
      stream: "SYNTHETIC FHIR STREAM · WATCHED",
      expected: "EXPECTED RANGE",
      drift: "DRIFT",
      schema: "SCHEMA V2",
      detected: "DETECTED",
      report: "REPORT",
    },
  },
} as const;

/** Fields whose values drive visuals rather than text: kept as exact literals in every language. */
type KeepKeys = "status" | "visual" | "accent" | "sketch";

type Widen<T> = T extends string
  ? string
  : T extends boolean
    ? boolean
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : T extends object
        ? {
            readonly [K in keyof T]: K extends KeepKeys ? T[K] : K extends "altLang" ? "ar" | "en" : Widen<T[K]>;
          }
        : T;

/** The shape every language resource must match. */
export type Content = Widen<typeof site>;

/** Fill "{name}" placeholders in an interface string. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}
