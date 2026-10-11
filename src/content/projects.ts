/**
 * Every project lives here — one entry per project, with its English and Arabic text side
 * by side. The homepage gallery, each project page (/projects/<slug> and /ar/projects/<slug>),
 * the previous/next links and the recruiter Overview are all generated from this list.
 *
 * Two kinds of project share this list:
 *  - type: "engineering" — full case study (problem, stages, architecture, contributions…)
 *  - type: "playground"  — a lighter page (inspiration, what I built, what I learned)
 * Every project appears in the Project Lab; `featured: true` also shows it on the homepage.
 *
 * To add a project: add one entry to `projects` below. Nothing else needs editing.
 *  - Optional fields (stages, architecture, metrics, contributions, recognition, resources)
 *    can simply be left out; the page shows only what exists.
 *  - Stages can be any number, not just four.
 *  - Images, videos and slides go in /public/assets/projects/<slug>/ and are referenced as
 *    "/assets/projects/<slug>/file.ext".
 */
import type { Locale } from "./index";

/* ── Types ─────────────────────────────────────────────────── */

export type ProjectStage = {
  name: string;
  /** One or two sentences shown when the stage is selected. */
  detail: string;
};

export type ProjectFact = { label: string; value: string };

/** Filter groups for the homepage gallery. A filter appears only when a project uses it. */
export type CategoryKey =
  | "data-engineering"
  | "data-quality"
  | "data-science"
  | "ai-ml"
  | "analytics"
  | "cloud"
  | "streaming"
  | "software";

/** Shown on cards only when set. Labels live in the site's `ui.status`. */
export type ProjectStatus = "completed" | "in-progress" | "prototype" | "experiment" | "archived";

/** Words every project has, in one language. */
type BaseText = {
  title: string;
  /** Optional name in the other script, shown small beside the title (e.g. Bayan · بيان). */
  altName?: string;
  altLang?: Locale;
  /** Shown on the card, e.g. "Data Architecture / ETL". */
  category: string;
  /** One sentence for the gallery card. */
  summary: string;
};

/** An engineering project's full case study, in one language. */
export type EngineeringText = BaseText & {
  subtitle: string;
  /** The one-line problem that opens the project page. */
  problem: string;
  overview: string;
  /** Role, context, type… shown as label / value pairs under the overview. */
  facts: ProjectFact[];
  /** Optional interactive engineering journey — any number of stages. */
  stages?: ProjectStage[];
  /** Optional evaluation figures with a note on what they measure. */
  metrics?: { label: string; note: string; values: ProjectFact[] };
  /** Optional two-sided contribution story (e.g. Sentinel: engineering + leadership). */
  contributions?: {
    title: string;
    intro: string;
    engineering: string;
    leadership: string;
    abilities: string[];
    converge: string;
  };
  /** Optional: how the system was engineered, in a sentence or two. */
  approach?: string;
  /** Optional short lists. */
  challenges?: string[];
  lessons?: string[];
  stackLabel: string;
  /** The full stack shown on the project page. */
  stack: string[];
};

/** A playground experiment — a lighter page, in one language. */
export type PlaygroundText = BaseText & {
  subtitle?: string;
  /** What inspired the experiment? */
  inspiration: string;
  /** What did I build? */
  built: string;
  /** What did I learn? One sentence or a few short points. */
  learned: string | string[];
};

/** @deprecated name kept for older imports — engineering text. */
export type ProjectText = EngineeringText;

export type ProjectResources = {
  /** An external case study (the project page itself is already the case study). */
  caseStudy?: string;
  demo?: string;
  github?: string;
  /** A Kaggle dataset or notebook. GitHub stays the place for source code. */
  kaggle?: string;
  presentation?: string;
};

/** A picture with alt text in both languages, e.g. "/assets/projects/<slug>/cover.webp". */
export type ProjectImage = { src: string; alt: Record<Locale, string> };

/** The drawn illustrations that ship with the site. */
export type Illustration = "archive" | "watch" | "sky";

type BaseProject = {
  slug: string;
  /** Order in every gallery (ascending). */
  order: number;
  /** Shown in the homepage gallery. Every project always appears in the Project Lab. */
  featured?: boolean;
  /** Gets the wide card at the top of the homepage gallery. */
  spotlight?: boolean;
  status?: ProjectStatus;
  categories?: CategoryKey[];
  accent: "amber" | "pink" | "blue";
  /** A cover image; takes precedence over `illustration`. */
  coverImage?: ProjectImage;
  /** One of the built-in drawings. Without either, a notebook sketch stands in. */
  illustration?: Illustration;
  /** Three or four tags for the card. */
  technologies: string[];
  resources?: ProjectResources;
};

export type EngineeringProject = BaseProject & {
  type: "engineering";
  /** Optional data-flow diagram, e.g. source → layers → reporting. */
  architecture?: { flow: string[] };
  text: Record<Locale, EngineeringText>;
};

export type PlaygroundProject = BaseProject & {
  type: "playground";
  /** Optional screenshots or photos shown on the page. */
  images?: ProjectImage[];
  text: Record<Locale, PlaygroundText>;
};

export type Project = EngineeringProject | PlaygroundProject;

/** Types used by the Project Lab's category selector. */
export type ProjectType = Project["type"];

export const categoryLabels: Record<CategoryKey, Record<Locale, string>> = {
  "data-engineering": { en: "Data Engineering", ar: "هندسة البيانات" },
  "data-quality": { en: "Data Quality", ar: "جودة البيانات" },
  "data-science": { en: "Data Science", ar: "علم البيانات" },
  "ai-ml": { en: "AI / ML", ar: "الذكاء الاصطناعي" },
  analytics: { en: "Analytics", ar: "التحليلات" },
  cloud: { en: "Cloud", ar: "السحابة" },
  streaming: { en: "Streaming", ar: "البث اللحظي" },
  software: { en: "Software", ar: "البرمجيات" },
};

/* ── Projects ──────────────────────────────────────────────── */

export const projects: Project[] = [
  // ── Engineering ─────────────────────────────────────────────
  {
    slug: "bayan",
    type: "engineering",
    order: 1,
    featured: true,
    spotlight: true,
    categories: ["data-engineering"],
    accent: "amber",
    illustration: "archive",
    technologies: ["Python", "Airflow", "PostgreSQL", "Docker"],
    architecture: { flow: ["BOE", "Bronze", "Silver", "Gold", "Power BI"] },
    resources: {},
    text: {
      en: {
        title: "Bayan",
        altName: "بيان",
        altLang: "ar",
        subtitle: "Saudi Regulations & Decisions Data Hub",
        category: "Data Architecture / ETL",
        summary: "Transforming Saudi regulations into structured, version-aware datasets for reliable analysis.",
        problem: "Finding a regulation is easy. Understanding how it changed over time is a different problem.",
        overview:
          "Bayan transforms Saudi regulatory information into structured, version-aware datasets to support regulation exploration and historical analysis.",
        facts: [
          {
            label: "Context",
            value: "Collaborative capstone developed during the Saudi Digital Academy Data Engineering Bootcamp.",
          },
        ],
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
            detail: "Prepare curated regulatory datasets for reporting and exploration through Power BI.",
          },
        ],
        stackLabel: "Stack",
        stack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "SeaweedFS", "FastAPI", "Power BI"],
      },
      ar: {
        title: "بيان",
        altName: "Bayan",
        altLang: "en",
        subtitle: "منصة بيانات الأنظمة والقرارات السعودية",
        category: "معمارية البيانات / ETL",
        summary: "تحويل الأنظمة السعودية إلى بيانات منظّمة تحفظ إصداراتها، لتحليلٍ يمكن الاعتماد عليه.",
        problem: "الوصول إلى النظام سهل، لكن تتبّع تغيّره عبر الزمن مشكلة مختلفة تمامًا.",
        overview:
          "يحوّل «بيان» المعلومات التنظيمية السعودية إلى بيانات منظّمة تحفظ إصدارات كل نظام، لتسهيل استكشاف الأنظمة وتحليل تطوّرها.",
        facts: [
          {
            label: "السياق",
            value: "مشروع تخرّج جماعي ضمن معسكر هندسة البيانات في الأكاديمية السعودية الرقمية.",
          },
        ],
        stages: [
          {
            name: "الجمع",
            detail:
              "استخراج بيانات الأنظمة من هيئة الخبراء بمجلس الوزراء باستخدام Python، وحفظ البيانات الخام كما هي في Object Storage متوافق مع S3.",
          },
          {
            name: "الهيكلة",
            detail: "تحويل النصوص الخام إلى كيانات علائقية في PostgreSQL تمثّل الأنظمة والفصول والمواد والعلاقات بينها.",
          },
          {
            name: "الإصدارات",
            detail: "جداول مخصّصة للإصدارات تحفظ تاريخ كل نظام وكل مادة، فيبقى أي تعديل قابلًا للتتبّع.",
          },
          {
            name: "التحليل",
            detail: "تجهيز مجموعات بيانات منقّحة للتقارير والاستكشاف عبر Power BI.",
          },
        ],
        stackLabel: "التقنيات",
        stack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "SeaweedFS", "FastAPI", "Power BI"],
      },
    },
  },
  {
    slug: "sentinel",
    type: "engineering",
    order: 2,
    featured: true,
    categories: ["data-quality", "data-engineering"],
    accent: "pink",
    illustration: "watch",
    technologies: ["Python", "FHIR", "PostgreSQL", "Cloud Storage"],
    resources: {},
    text: {
      en: {
        title: "Sentinel",
        subtitle: "Healthcare Data Observability",
        category: "Data Quality / Observability",
        summary: "Exploring how to detect silent data quality failures in healthcare data pipelines.",
        problem: "The pipeline is green. But is the data healthy?",
        overview:
          "Sentinel explores how data pipelines can run successfully while silently delivering unreliable data, using synthetic healthcare records to investigate data quality and observability.",
        facts: [
          { label: "My role", value: "Technical Lead & Data Engineer" },
          { label: "Context", value: "Data engineering observability project built on synthetic healthcare data." },
        ],
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
            detail: "Track structural changes and organize quality metrics, schema history, and detected incidents.",
          },
        ],
        contributions: {
          title: "Beyond the Pipeline: Leading the Team",
          intro: "I lead Sentinel's development while contributing directly to its engineering.",
          engineering: "Data ingestion, cloud storage, pipeline implementation, data quality, and technical problem-solving.",
          leadership: "Project planning, team coordination, task management, communication, and technical decision-making.",
          abilities: ["Leadership", "Adaptability", "Problem solving", "Communication", "Collaboration", "Initiative"],
          converge: "Sentinel",
        },
        stackLabel: "Technology areas",
        stack: ["Python", "Synthea", "FHIR", "Cloud storage", "PostgreSQL", "Streaming", "Data quality"],
      },
      ar: {
        title: "Sentinel",
        subtitle: "مراقبة موثوقية البيانات الصحية",
        category: "جودة البيانات ومراقبتها",
        summary: "كيف نرصد أعطال جودة البيانات الصامتة في خطوط البيانات الصحية.",
        problem: "خط البيانات يعمل بلا أخطاء، لكن هل البيانات نفسها سليمة؟",
        overview:
          "يدرس Sentinel كيف يمكن لخط بيانات أن يعمل بنجاح في الظاهر، بينما يمرّر بيانات غير موثوقة دون أن يلاحظ أحد. ويعتمد على سجلات صحية اصطناعية لاختبار جودة البيانات ومراقبتها.",
        facts: [
          { label: "دوري", value: "قائدة تقنية ومهندسة بيانات" },
          { label: "السياق", value: "مشروع لمراقبة جودة البيانات، مبني على بيانات صحية اصطناعية." },
        ],
        stages: [
          {
            name: "البث",
            detail: "توليد سجلات صحية اصطناعية بمعيار FHIR باستخدام Synthea، ثم إدخالها في خط بيانات مضبوط.",
          },
          {
            name: "الجودة",
            detail: "تحليل السجلات الواردة، وبناء خط أساس للجودة يشمل القيم المفقودة، والاتساق، وأحجام السجلات.",
          },
          {
            name: "الانحراف",
            detail: "افتعال ارتفاع مفاجئ في القيم الفارغة، وتغيير أنواع البيانات، وانخفاض في الحجم؛ لاختبار قدرة النظام على رصدها.",
          },
          {
            name: "المخطط",
            detail: "تتبّع التغيّرات في بنية البيانات (Schema)، وتنظيم مقاييس الجودة وسجلّ التغييرات والحوادث المرصودة.",
          },
        ],
        contributions: {
          title: "أبعد من خط البيانات: قيادة الفريق",
          intro: "أقود تطوير Sentinel، وأشارك بنفسي في بنائه الهندسي.",
          engineering: "إدخال البيانات، والتخزين السحابي، وبناء خطوط البيانات، وضمان جودتها، وحل المشكلات التقنية.",
          leadership: "تخطيط المشروع، وتنسيق عمل الفريق، وإدارة المهام، والتواصل، واتخاذ القرارات التقنية.",
          abilities: ["القيادة", "المرونة", "حل المشكلات", "التواصل", "العمل الجماعي", "المبادرة"],
          converge: "Sentinel",
        },
        stackLabel: "مجالات تقنية",
        stack: ["Python", "Synthea", "FHIR", "Cloud Storage", "PostgreSQL", "Streaming", "جودة البيانات"],
      },
    },
  },
  {
    slug: "najm",
    type: "engineering",
    order: 3,
    featured: true,
    status: "prototype",
    categories: ["ai-ml", "software"],
    accent: "blue",
    illustration: "sky",
    technologies: ["Python", "YOLOv5m", "Flask", "Flutter"],
    resources: {},
    text: {
      en: {
        title: "Najm",
        altName: "نجم",
        altLang: "ar",
        subtitle: "AI-Powered Accident Detection & Reporting",
        category: "Computer Vision / AI",
        summary:
          "An AI-assisted accident reporting prototype combining computer vision, backend services, and a mobile application.",
        problem: "What if accident reporting could begin before anyone makes a call?",
        overview:
          "An AI-assisted accident reporting prototype combining computer vision, drone imagery, backend services, and a mobile application.",
        facts: [
          { label: "Recognition", value: "Third Place — CCSIT Graduation Projects, King Faisal University, 2024" },
          { label: "Type", value: "Academic capstone prototype · Najm Accident Reporting System" },
        ],
        stages: [
          { name: "Capture", detail: "Explore the use of drone imagery to gather visual information about road incidents." },
          { name: "Detect", detail: "Use YOLOv5m to identify objects and accident-related scenes through computer vision." },
          { name: "Integrate", detail: "Connect the detection model to backend services using Flask and MySQL." },
          { name: "Report", detail: "Use a Flutter application to demonstrate an AI-assisted accident reporting workflow." },
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
      },
      ar: {
        title: "نجم",
        altName: "Najm",
        altLang: "en",
        subtitle: "رصد الحوادث والإبلاغ عنها بالذكاء الاصطناعي",
        category: "الرؤية الحاسوبية / الذكاء الاصطناعي",
        summary: "نموذج أولي للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي، يجمع بين الرؤية الحاسوبية وخدمات Backend وتطبيق جوّال.",
        problem: "ماذا لو بدأ الإبلاغ عن الحادث قبل أن يتصل أحد؟",
        overview:
          "نموذج أولي للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي، يجمع بين الرؤية الحاسوبية وصور الطائرات المسيّرة وخدمات Backend وتطبيق جوّال.",
        facts: [
          {
            label: "الإنجاز",
            value: "المركز الثالث في مشاريع التخرج بكلية علوم الحاسب وتقنية المعلومات (CCSIT)، جامعة الملك فيصل، 2024",
          },
          { label: "النوع", value: "نموذج أولي أكاديمي (مشروع تخرّج) · نظام نجم للإبلاغ عن الحوادث" },
        ],
        stages: [
          { name: "الالتقاط", detail: "استكشاف استخدام صور الطائرات المسيّرة لجمع معلومات بصرية عن حوادث الطرق." },
          { name: "الرصد", detail: "استخدام YOLOv5m للتعرّف على الأجسام والمشاهد المرتبطة بالحوادث." },
          { name: "الربط", detail: "ربط نموذج الرصد بخدمات Backend مبنية بـ Flask وMySQL." },
          { name: "الإبلاغ", detail: "تطبيق Flutter يعرض سير عمل للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي." },
        ],
        metrics: {
          label: "التقييم العام للنموذج",
          note: "مقاييس عامة للنموذج على جميع الفئات، وليست أداءه في فئة الحوادث تحديدًا.",
          values: [
            { label: "Precision", value: "0.772" },
            { label: "Recall", value: "0.798" },
            { label: "mAP@50", value: "0.799" },
          ],
        },
        stackLabel: "التقنيات",
        stack: ["Python", "YOLOv5m", "Flask", "MySQL", "Flutter", "الرؤية الحاسوبية"],
      },
    },
  },

  // ── Playground ──────────────────────────────────────────────
  // Small experiments go here with type: "playground". A minimal entry:
  // {
  //   slug: "my-experiment", type: "playground", order: 10, status: "experiment",
  //   accent: "blue", technologies: ["Python", "pandas"],
  //   coverImage: { src: "/assets/projects/my-experiment/cover.webp", alt: { en: "…", ar: "…" } },
  //   resources: { github: "https://github.com/…", demo: "https://…" },
  //   text: {
  //     en: { title: "…", category: "Automation", summary: "…", inspiration: "…", built: "…", learned: "…" },
  //     ar: { title: "…", category: "أتمتة", summary: "…", inspiration: "…", built: "…", learned: "…" },
  //   },
  // },
];

/* ── Helpers ───────────────────────────────────────────────── */

/** All projects in gallery order. */
export function sortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** The projects shown on the homepage (featured), in order. */
export function featuredProjects(): Project[] {
  return sortedProjects().filter((p) => p.featured);
}

/** The Project Lab: /projects or /ar/projects. */
export function labPath(locale: Locale): string {
  return `${locale === "ar" ? "/ar" : ""}/projects`;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** The project's page in a language: /projects/<slug> or /ar/projects/<slug>. */
export function projectPath(locale: Locale, slug: string): string {
  return `${locale === "ar" ? "/ar" : ""}/projects/${slug}`;
}

/** The homepage of a language, optionally at a section: "/", "/#projects", "/ar#projects". */
export function homePath(locale: Locale, hash = ""): string {
  const base = locale === "ar" ? "/ar" : "/";
  return hash ? `${base}${hash}` : base;
}

/** The neighbours of a project in gallery order (no wrap-around). */
export function neighbours(slug: string): { previous?: Project; next?: Project } {
  const list = sortedProjects();
  const i = list.findIndex((p) => p.slug === slug);
  return { previous: i > 0 ? list[i - 1] : undefined, next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined };
}

/** Only links that are actually configured — empty values never render a button. */
export function availableResources(resources: ProjectResources | undefined) {
  const keys = ["caseStudy", "demo", "github", "kaggle", "presentation"] as const;
  return keys.flatMap((key) => {
    const href = resources?.[key]?.trim();
    return href ? [{ key, href }] : [];
  });
}
