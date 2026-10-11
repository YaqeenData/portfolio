/**
 * All portfolio content lives here, separate from the components that present it.
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

export type ProjectStage = {
  name: string;
  /** One or two sentences shown when the stage is selected. `null` until written together. */
  detail: string | null;
};

export type ProjectFact = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  /** Optional Arabic name, shown beside the title. */
  nameAr?: string;
  subtitle: string;
  /** The one-line hook that opens the chapter. */
  opening: string;
  overview: string;
  /** "archive" → Bayan · "watch" → Sentinel · "sky" → Najm's drone-to-report flow. */
  visual: "archive" | "watch" | "sky";
  accent: "amber" | "pink" | "blue";
  /** Optional architecture, drawn as a small flow above the stages. */
  flow?: string[];
  stages: ProjectStage[];
  facts: ProjectFact[];
  /** Optional evaluation figures with a note on what they measure. */
  metrics?: { label: string; note: string; values: ProjectFact[] };
  stackLabel: string;
  stack: string[];
  /** Set to false to show a "[ stack — to add ]" marker after the list. */
  stackComplete: boolean;
  caseStudyUrl: string | null;
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
    { id: "work", label: "Work" },
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
    primaryCta: { label: "Explore My Work", href: "#work" },
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
        title: "Data Science & Machine Learning",
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
        title: "Cloud & Data Engineering",
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
    alsoExperienced: ["Data science", "Machine learning", "Data analytics", "Streaming systems"],
  },

  // ── III · What I've built ──────────────────────────────────
  work: {
    label: "What I've built",
    projects: [
      {
        slug: "bayan",
        name: "Bayan",
        nameAr: "بيان",
        subtitle: "Saudi Regulations & Decisions Data Hub",
        opening: "Finding a regulation is easy. Understanding how it changed over time is a different problem.",
        overview:
          "Bayan transforms Saudi regulatory information into structured, version-aware datasets to support regulation exploration and historical analysis.",
        visual: "archive",
        accent: "amber",
        flow: ["BOE", "Bronze", "Silver", "Gold", "Power BI"],
        stages: [
          {
            name: "Collect",
            detail:
              "Extract regulatory information from the Saudi Bureau of Experts using Python and preserve raw data in S3-compatible object storage.",
          },
          {
            name: "Structure",
            detail:
              "Transform raw regulations into relational PostgreSQL entities representing laws, chapters, articles, and their relationships.",
          },
          {
            name: "Version",
            detail:
              "Use dedicated version tables to preserve regulation and article history, ensuring historical traceability.",
          },
          {
            name: "Analyze",
            detail:
              "Prepare curated regulatory datasets for reporting and exploration through Power BI.",
          },
        ],
        facts: [
          {
            label: "Context",
            value: "Collaborative capstone developed during the Saudi Digital Academy Data Engineering Bootcamp.",
          },
        ],
        stackLabel: "Stack",
        stack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "SeaweedFS", "FastAPI", "Power BI"],
        stackComplete: true,
        caseStudyUrl: null,
      },
      {
        slug: "sentinel",
        name: "Sentinel",
        subtitle: "Healthcare Data Observability",
        opening: "The pipeline is green. But is the data healthy?",
        overview:
          "Sentinel explores how data pipelines can run successfully while silently delivering unreliable data, using synthetic healthcare records to investigate data quality and observability.",
        visual: "watch",
        accent: "pink",
        stages: [
          {
            name: "Stream",
            detail: "Generate synthetic healthcare records using Synthea and FHIR, then ingest them into a controlled data pipeline.",
          },
          {
            name: "Quality",
            detail: "Profile incoming records and establish quality baselines for missing values, consistency, and record volumes.",
          },
          {
            name: "Drift",
            detail: "Introduce null spikes, type changes, and volume drops to evaluate data quality detection behavior.",
          },
          {
            name: "Schema",
            detail:
              "Track structural changes and organize quality metrics, schema history, and detected incidents.",
          },
        ],
        facts: [
          { label: "My role", value: "Technical Lead & Data Engineer" },
          { label: "Context", value: "Data engineering observability project built on synthetic healthcare data." },
        ],
        stackLabel: "Technology areas",
        stack: ["Python", "Synthea", "FHIR", "Cloud storage", "PostgreSQL", "Streaming", "Data quality"],
        stackComplete: true,
        caseStudyUrl: null,
      },
      {
        slug: "najm",
        name: "Najm",
        subtitle: "AI-Powered Accident Detection & Reporting",
        opening: "What if accident reporting could begin before anyone makes a call?",
        overview:
          "An AI-assisted accident reporting prototype combining computer vision, drone imagery, backend services, and a mobile application.",
        visual: "sky",
        accent: "blue",
        stages: [
          { name: "Capture", detail: "Explore the use of drone imagery to gather visual information about road incidents." },
          {
            name: "Detect",
            detail: "Use YOLOv5m to identify objects and accident-related scenes through computer vision.",
          },
          { name: "Integrate", detail: "Connect the detection model to backend services using Flask and MySQL." },
          {
            name: "Report",
            detail: "Use a Flutter application to demonstrate an AI-assisted accident reporting workflow.",
          },
        ],
        facts: [
          { label: "Recognition", value: "Third Place — CCSIT Graduation Projects, King Faisal University, 2024" },
          { label: "Type", value: "Academic capstone prototype · Najm Accident Reporting System" },
        ],
        metrics: {
          label: "Overall model evaluation",
          note: "Overall model metrics across all classes — not accident-class performance.",
          values: [
            { label: "Precision", value: "0.772" },
            { label: "Recall", value: "0.798" },
            { label: "mAP@50", value: "0.799" },
          ],
        },
        stackLabel: "Stack",
        stack: ["Python", "YOLOv5m", "Flask", "MySQL", "Flutter", "Computer vision"],
        stackComplete: true,
        caseStudyUrl: null,
      },
    ] satisfies Project[],
    /** Sentinel's leadership story — soft skills shown through the work, not listed on their own. */
    leadership: {
      project: "sentinel",
      title: "Beyond the Pipeline: Leading the Team",
      intro: "I lead Sentinel's development while contributing directly to its engineering.",
      engineering: "Data ingestion, cloud storage, pipeline implementation, data quality, and technical problem-solving.",
      leading: "Project planning, team coordination, task management, communication, and technical decision-making.",
      converge: "Sentinel",
      abilities: ["Leadership", "Adaptability", "Problem solving", "Communication", "Collaboration", "Initiative"],
    },
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
        { title: "Associate Data Engineer in Snowflake", issuer: null, year: "2026", verifyUrl: null },
        { title: "Associate Data Engineer in Databricks", issuer: null, year: "2026", verifyUrl: null },
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
    /** e.g. "/resume.pdf" after adding the file to /public */
    resume: "assets/YaqeenAlhalal_DataEngineer.pdf",
  },

  // ── Recruiter overview (one screen, opened from the header) ─
  overview: {
    focus: ["Data pipelines", "ETL / ELT", "Data modeling", "Data quality & observability", "APIs & integration"],
    coreStack: ["Python", "SQL", "Apache Airflow", "dbt", "PostgreSQL", "Docker", "Spark", "Kafka", "FastAPI", "Azure · GCP · AWS"],
  },
} as const;
