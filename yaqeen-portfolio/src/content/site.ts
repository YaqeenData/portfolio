/**
 * All portfolio content lives here, separate from the components that present it.
 *
 * Editing rules:
 *  - `null` means "not provided yet". Components render a clearly marked placeholder
 *    instead of inventing anything, so the site never shows unverified claims.
 *  - Replace a `null` with a real value and the placeholder disappears automatically.
 */

export type NavItem = { id: string; index: string; label: string };

export type Language = {
  name: string;
  note?: string;
  status: "fluent" | "learning";
};

export type Experience = {
  role: string;
  organization: string;
  organizationShort?: string;
  dates: string | null;
  /** Bullet points or short paragraphs. `null` until written together. */
  details: string[] | null;
};

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  /** Short words shown along the project's mini pipeline. Taken from the description. */
  flow: [string, string, string, string];
  tagsLabel: string;
  tags: string[];
  /** Set to false to show a "[ stack ]" placeholder chip after the tags. */
  stackComplete: boolean;
  caseStudyUrl: string | null;
};

export type ExpertiseGroup = {
  key: "collect" | "engineer" | "build";
  label: string;
  title: string;
  items: string[];
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

  hero: {
    eyebrow: ["Yaqeen Alhalal", "Data Engineer"] as const,
    headline: {
      line1: "Engineering Data.",
      line2Lead: "Building",
      line2Emphasis: "Possibilities.",
    },
    intro:
      "I'm a Data Engineer driven by curiosity, passionate about collecting and engineering data to build meaningful solutions. I thrive on complex challenges, learn quickly, and love discovering problems worth solving with data.",
    primaryCta: { label: "Explore My Work", href: "#projects" },
    secondaryCta: { label: "About Me", href: "#about" },
  },

  nav: [
    { id: "about", index: "02", label: "About" },
    { id: "experience", index: "03", label: "Experience" },
    { id: "projects", index: "04", label: "Projects" },
    { id: "expertise", index: "05", label: "Expertise" },
    { id: "education", index: "06", label: "Education" },
    { id: "contact", index: "07", label: "Contact" },
  ] satisfies NavItem[],

  about: {
    /** Headline and story are written together later. */
    title: null as string | null,
    story: null as string[] | null,
    languages: [
      { name: "Arabic", status: "fluent" },
      { name: "English", status: "fluent" },
      { name: "Italian", status: "learning" },
      { name: "Russian", status: "learning" },
      { name: "ArSL", note: "Arabic Sign Language", status: "learning" },
    ] satisfies Language[],
  },

  experience: {
    title: null as string | null,
    items: [
      {
        role: "Data Engineering Internship",
        organization: "Saudi Commission for Health Specialists",
        organizationShort: "SCFHS",
        dates: null,
        details: null,
      },
    ] satisfies Experience[],
  },

  projects: {
    title: null as string | null,
    items: [
      {
        slug: "bayan",
        name: "Bayan",
        subtitle: "Saudi Regulations & Decisions Data Hub",
        description:
          "A data engineering project focused on collecting, structuring, versioning, and analyzing Saudi regulatory data.",
        flow: ["Collect", "Structure", "Version", "Analyze"],
        tagsLabel: "Technologies",
        tags: ["Python", "Airflow", "PostgreSQL", "Docker", "Object storage", "APIs", "Power BI"],
        stackComplete: true,
        caseStudyUrl: null,
      },
      {
        slug: "sentinel",
        name: "Sentinel",
        subtitle: "Healthcare Data Observability",
        description:
          "A data engineering project exploring pipeline reliability, data quality, data drift, schema evolution, and streaming healthcare data using synthetic FHIR resources.",
        flow: ["Stream", "Quality", "Drift", "Schema"],
        tagsLabel: "Focus areas",
        tags: ["Pipeline reliability", "Data quality", "Streaming", "Synthetic FHIR"],
        stackComplete: false,
        caseStudyUrl: null,
      },
    ] satisfies Project[],
    additionalWork: ["ETL / ELT pipelines", "Data analytics", "Machine learning", "APIs"],
  },

  expertise: {
    /** Proposed grouping by data-engineering function — adjust freely. */
    groups: [
      {
        key: "collect",
        label: "Collect",
        title: "Ingestion & interfaces",
        items: ["Python", "SQL", "Data ingestion", "REST APIs", "FastAPI", "WSO2 API Manager"],
      },
      {
        key: "engineer",
        label: "Engineer",
        title: "Transformation & orchestration",
        items: ["ETL / ELT", "Data pipelines", "Data transformation", "Data modeling", "Data quality", "Apache Airflow"],
      },
      {
        key: "build",
        label: "Build",
        title: "Storage & platforms",
        items: [
          "PostgreSQL",
          "SQL Server",
          "MySQL",
          "MongoDB",
          "Docker",
          "Git",
          "Microsoft Azure",
          "Google Cloud Platform",
          "AWS",
        ],
      },
    ] satisfies ExpertiseGroup[],
    alsoExperienced: ["Data Science", "Machine Learning", "Data Analytics", "Streaming Systems"],
  },

  education: {
    title: null as string | null,
    degree: { field: "Computer Science", institution: null as string | null, year: null as string | null },
    certifications: null as string[] | null,
    bootcamps: null as string[] | null,
    achievements: null as string[] | null,
  },

  contact: {
    title: null as string | null,
    email: null as string | null,
    linkedin: null as string | null,
    github: null as string | null,
    /** e.g. "/resume.pdf" after adding the file to /public */
    resume: null as string | null,
  },
} as const;
