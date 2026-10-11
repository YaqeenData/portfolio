/**
 * Arabic resource — the same shape as `site.ts` (enforced by the `Content` type).
 * Written as original Arabic copy, not a translation: Modern Standard Arabic with a
 * contemporary Saudi professional tone, first person, feminine voice.
 * Official names, certification titles and technical terms stay in English where that is
 * how they are used in practice. Links and other shared values come from `site.ts`, so they
 * only ever need editing in one place.
 */
import { site, type Content } from "./site";

export const siteAr: Content = {
  name: "يقين الحلال",
  role: "مهندسة بيانات",
  location: "المملكة العربية السعودية",
  philosophy: ["جمع", "هندسة", "بناء"],

  seo: {
    title: "يقين الحلال | مهندسة بيانات",
    description: "مهندسة بيانات يحرّكها الفضول، تجمع البيانات وتهندسها لتبني منها حلولًا ذات قيمة.",
    siteUrl: site.seo.siteUrl,
  },

  nav: [
    { id: "work", label: "المشاريع" },
    { id: "expertise", label: "المهارات" },
    { id: "path", label: "الرحلة" },
    { id: "contact", label: "تواصل" },
  ],

  // ── Prologue ───────────────────────────────────────────────
  hero: {
    eyebrow: ["يقين الحلال", "مهندسة بيانات"],
    headline: {
      line1: "أُهندس البيانات،",
      line2Lead: "وأبني بها",
      line2Emphasis: "حلولًا جديدة.",
    },
    intro:
      "مهندسة بيانات يحرّكني الفضول؛ أجمع البيانات وأهندسها لأبني منها حلولًا ذات قيمة. تستهويني التحديات المعقدة، وأتعلّم بسرعة، وأستمتع باكتشاف المشكلات التي تستحق أن تُحلّ بالبيانات.",
    primaryCta: { label: "استعرض أعمالي", href: "#work" },
    secondaryCta: { label: "تعرّف عليّ", href: "#curiosity" },
  },

  // ── I · Curiosity ──────────────────────────────────────────
  curiosity: {
    label: "الفضول",
    statement: { lead: "تشدّني المشكلات التي", emphasis: "تستحق حلًا هندسيًا." },
    journey: [
      {
        chapter: "البداية",
        title: "علوم الحاسب",
        place: "جامعة الملك فيصل",
        when: "2019 – 2024",
        line: "هنا بدأ فضولي بالتقنية والبرمجيات، وبفهم الأنظمة المعقدة من الداخل.",
        sketch: "computer",
      },
      {
        chapter: "الاكتشاف",
        title: "متدرّبة في تطوير البرمجيات",
        place: "جامعة الملك فيصل — عمادة تقنية المعلومات",
        when: "2024",
        line: "عرّفتني تجربة بناء البرمجيات على الهندسة في بيئة حقيقية، ومنها اكتشفت شغفي بالبيانات.",
        sketch: "app",
      },
      {
        chapter: "الاستكشاف",
        title: "علم البيانات وتعلّم الآلة",
        place: "أكاديمية طويق",
        when: "يناير – مارس 2025",
        line: "تعلّمت كيف تكشف البيانات الأنماط، وتُبنى عليها التنبؤات، وتُحلّ بها المشكلات المعقدة.",
        sketch: "scatter",
      },
      {
        chapter: "من الفضول إلى التطبيق",
        title: "متدرّبة في هندسة البيانات",
        place: "الهيئة السعودية للتخصصات الصحية",
        when: "أكتوبر 2025 – مايو 2026",
        line: "هنا تحوّل الشغف إلى عمل هندسي فعلي: خطوط بيانات، وواجهات API آمنة، وجودة بيانات، وتكامل بين الأنظمة.",
        sketch: "pipeline",
        prime: true,
      },
      {
        chapter: "التوسّع",
        title: "الحوسبة السحابية وهندسة البيانات",
        place: "الأكاديمية السعودية الرقمية",
        when: "أغسطس – أكتوبر 2026",
        line: "عمّقت خبرتي في البنية السحابية، وتنسيق سير العمل، وبناء خطوط البيانات من المصدر حتى التحليل.",
        sketch: "cloud",
        recognition: "بطلة الأسبوع",
      },
      {
        chapter: "الفضول مستمر",
        title: "التحدي القادم",
        place: "",
        when: "اليوم ←",
        line: "ما زلت أستكشف وأبني، وأبحث دائمًا عن المشكلة التالية التي تستحق الحل.",
        sketch: "curious",
      },
    ],
  },

  // ── II · How I engineer ────────────────────────────────────
  architecture: {
    label: "كيف أبني الأنظمة",
    title: { lead: "كل نظام متكامل", emphasis: "يبدأ بطبقة." },
    orchestration: "Apache Airflow",
    layers: [
      { name: "البرمجة والتطوير", short: "البرمجة", tools: ["Python", "SQL", "Bash / Shell", "Git", "GitHub"] },
      {
        name: "خطوط البيانات وتنسيقها",
        short: "خطوط البيانات",
        tools: ["ETL / ELT", "Apache Airflow", "dbt", "المعالجة الدفعية (Batch)", "بناء خطوط البيانات"],
      },
      {
        name: "قواعد البيانات والتخزين والنمذجة",
        short: "التخزين والنمذجة",
        tools: [
          "PostgreSQL",
          "SQL Server",
          "MySQL",
          "MongoDB",
          "نمذجة البيانات العلائقية",
          "مستودعات البيانات",
          "Medallion Architecture",
          "Object Storage",
        ],
      },
      {
        name: "جودة البيانات ومراقبتها",
        short: "جودة البيانات",
        tools: ["Data Profiling", "التحقق من صحة البيانات", "تنظيف البيانات", "مراقبة الجودة", "Schema Evolution", "Drift Detection"],
      },
      {
        name: "السحابة والبنية التحتية والمعالجة",
        short: "السحابة والمعالجة",
        tools: ["Microsoft Azure", "GCP", "AWS", "Docker", "Docker Compose", "Apache Spark / PySpark", "Apache Kafka"],
      },
      {
        name: "واجهات API والتكامل",
        short: "API والتكامل",
        tools: ["FastAPI", "REST APIs", "WSO2 API Manager", "Web Scraping", "Requests", "Selenium"],
      },
      {
        name: "التحليلات والعمل الجماعي",
        short: "التحليلات والتعاون",
        tools: ["Power BI", "Tableau", "Linear", "Jira", "منهجية Agile"],
      },
    ],
    alsoExperienced: ["علم البيانات", "تعلّم الآلة", "تحليل البيانات", "أنظمة البث اللحظي (Streaming)"],
  },

  // ── III · What I've built ──────────────────────────────────
  work: {
    label: "مشاريع بنيتُها",
    projects: [
      {
        slug: "bayan",
        name: "بيان",
        altName: "Bayan",
        altLang: "en",
        subtitle: "منصة بيانات الأنظمة والقرارات السعودية",
        opening: "الوصول إلى النظام سهل، لكن تتبّع تغيّره عبر الزمن مشكلة مختلفة تمامًا.",
        overview:
          "يحوّل «بيان» المعلومات التنظيمية السعودية إلى بيانات منظّمة تحفظ إصدارات كل نظام، لتسهيل استكشاف الأنظمة وتحليل تطوّرها.",
        visual: "archive",
        accent: "amber",
        flow: ["BOE", "Bronze", "Silver", "Gold", "Power BI"],
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
        facts: [
          {
            label: "السياق",
            value: "مشروع تخرّج جماعي ضمن معسكر هندسة البيانات في الأكاديمية السعودية الرقمية.",
          },
        ],
        stackLabel: "التقنيات",
        stack: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "SeaweedFS", "FastAPI", "Power BI"],
        stackComplete: true,
        caseStudyUrl: site.work.projects[0].caseStudyUrl,
      },
      {
        slug: "sentinel",
        name: "Sentinel",
        subtitle: "مراقبة موثوقية البيانات الصحية",
        opening: "خط البيانات يعمل بلا أخطاء، لكن هل البيانات نفسها سليمة؟",
        overview:
          "يدرس Sentinel كيف يمكن لخط بيانات أن يعمل بنجاح في الظاهر، بينما يمرّر بيانات غير موثوقة دون أن يلاحظ أحد. ويعتمد على سجلات صحية اصطناعية لاختبار جودة البيانات ومراقبتها.",
        visual: "watch",
        accent: "pink",
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
        facts: [
          { label: "دوري", value: "قائدة تقنية ومهندسة بيانات" },
          { label: "السياق", value: "مشروع لمراقبة جودة البيانات، مبني على بيانات صحية اصطناعية." },
        ],
        stackLabel: "مجالات تقنية",
        stack: ["Python", "Synthea", "FHIR", "Cloud Storage", "PostgreSQL", "Streaming", "جودة البيانات"],
        stackComplete: true,
        caseStudyUrl: site.work.projects[1].caseStudyUrl,
      },
      {
        slug: "najm",
        name: "نجم",
        altName: "Najm",
        altLang: "en",
        subtitle: "رصد الحوادث والإبلاغ عنها بالذكاء الاصطناعي",
        opening: "ماذا لو بدأ الإبلاغ عن الحادث قبل أن يتصل أحد؟",
        overview:
          "نموذج أولي للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي، يجمع بين الرؤية الحاسوبية وصور الطائرات المسيّرة وخدمات Backend وتطبيق جوّال.",
        visual: "sky",
        accent: "blue",
        stages: [
          { name: "الالتقاط", detail: "استكشاف استخدام صور الطائرات المسيّرة لجمع معلومات بصرية عن حوادث الطرق." },
          { name: "الرصد", detail: "استخدام YOLOv5m للتعرّف على الأجسام والمشاهد المرتبطة بالحوادث." },
          { name: "الربط", detail: "ربط نموذج الرصد بخدمات Backend مبنية بـ Flask وMySQL." },
          { name: "الإبلاغ", detail: "تطبيق Flutter يعرض سير عمل للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي." },
        ],
        facts: [
          {
            label: "الإنجاز",
            value: "المركز الثالث في مشاريع التخرج بكلية علوم الحاسب وتقنية المعلومات (CCSIT)، جامعة الملك فيصل، 2024",
          },
          { label: "النوع", value: "نموذج أولي أكاديمي (مشروع تخرّج) · نظام نجم للإبلاغ عن الحوادث" },
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
        stackComplete: true,
        caseStudyUrl: site.work.projects[2].caseStudyUrl,
      },
    ],
    leadership: {
      project: "sentinel",
      title: "ما وراء بناء الأنظمة: قيادة الفريق",
      intro: "أقود تطوير Sentinel، وأشارك بنفسي في بنائه الهندسي.",
      engineering: "إدخال البيانات، والتخزين السحابي، وبناء خطوط البيانات، وضمان جودتها، وحل المشكلات التقنية.",
      leading: "تخطيط المشروع، وتنسيق عمل الفريق، وإدارة المهام، والتواصل، واتخاذ القرارات التقنية.",
      converge: "Sentinel",
      abilities: ["القيادة", "المرونة", "حل المشكلات", "التواصل", "العمل الجماعي", "المبادرة"],
    },
    alsoBuilt: ["خطوط ETL / ELT", "تحليل البيانات", "تعلّم الآلة", "واجهات API"],
  },

  // ── IV · The path ──────────────────────────────────────────
  path: {
    label: "المسيرة",
    title: { lead: "محطات من", emphasis: "رحلتي المهنية." },
    experience: [
      {
        role: "متدرّبة في تطوير البرمجيات",
        org: "جامعة الملك فيصل — عمادة تقنية المعلومات",
        dates: "يونيو – سبتمبر 2024",
        place: "الهفوف، المملكة العربية السعودية",
        points: [
          "طوّرت منصة KFU Space باستخدام ASP.NET Core MVC وJavaScript وBootstrap وEntity Framework وSQL Server.",
          "صمّمت هياكل قواعد البيانات، وحافظت على جودة الكود، وعملت مع الفريق عبر Git.",
        ],
      },
      {
        role: "متدرّبة في هندسة البيانات",
        org: "الهيئة السعودية للتخصصات الصحية",
        dates: "أكتوبر 2025 – مايو 2026",
        place: "الرياض، المملكة العربية السعودية",
        points: [
          "طوّرت مسارات لجمع البيانات من واجهات API ومن مواقع الويب الديناميكية باستخدام Requests وSelenium، لدعم التحليلات اللاحقة.",
          "بنيت خطوط ETL وجدولت تشغيلها باستخدام Apache Airflow.",
          "طوّرت واجهات API آمنة باستخدام Python وFastAPI وWSO2 API Manager، لدعم مبادرات مشاركة البيانات ومراقبتها وتحقيق عائد منها.",
        ],
      },
    ],
    credentials: {
      label: "التعليم والتدريب والشهادات",
      education: {
        degree: "بكالوريوس علوم الحاسب",
        school: "جامعة الملك فيصل",
        dates: "سبتمبر 2019 – أغسطس 2024",
        notes: ["المعدل التراكمي 4.31 من 5.00", "مرتبة الشرف الثانية"],
      },
      training: [
        {
          title: "معسكر هندسة البيانات",
          org: "الأكاديمية السعودية الرقمية",
          dates: "أغسطس – أكتوبر 2026",
          recognition: "بطلة الأسبوع",
        },
        {
          title: "معسكر علم البيانات وتعلّم الآلة",
          org: "أكاديمية طويق",
          dates: "يناير – مارس 2025",
        },
      ],
      // Official certification titles stay in English, exactly as issued.
      certifications: site.path.credentials.certifications,
    },
  },

  // ── Epilogue · Beyond the code ─────────────────────────────
  beyond: {
    label: "خارج حدود الكود",
    title: { lead: "لغتان أتحدثهما بطلاقة،", emphasis: "وثلاث أتعلّمها الآن." },
    intro: "أحب أن أتعلّم لغات التواصل بكل أشكالها: الكود، والبيانات، واللغات المنطوقة، ولغة الإشارة.",
    languages: [
      { name: "العربية", status: "fluent" },
      { name: "الإنجليزية", status: "fluent", qualifications: ["IELTS Academic · 7.5", "STEP · 91"] },
      { name: "الإيطالية", status: "learning" },
      { name: "الروسية", status: "learning" },
      { name: "لغة الإشارة العربية", note: "ArSL", status: "learning" },
    ],
  },

  // ── Contact · First light ──────────────────────────────────
  contact: {
    label: "تواصل",
    title: { lead: "لنبنِ حلًا", emphasis: "يبدأ من البيانات." },
    email: site.contact.email,
    linkedin: site.contact.linkedin,
    github: site.contact.github,
    resume: site.contact.resume,
  },

  overview: {
    focus: ["خطوط البيانات", "ETL / ELT", "نمذجة البيانات", "جودة البيانات ومراقبتها", "واجهات API والتكامل"],
    coreStack: site.overview.coreStack,
  },

  ui: {
    numerals: ["١", "٢", "٣", "٤"],
    skipToContent: "انتقل إلى المحتوى",
    skipIntro: "تخطّي المقدمة",
    introRole: "مهندسة بيانات",
    scroll: "مرّر للأسفل",
    primaryNav: "القائمة الرئيسية",
    sectionsNav: "أقسام الصفحة",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    overview: "نظرة سريعة",
    resume: "السيرة الذاتية",
    themeToggle: "التبديل بين الوضعين الليلي والنهاري",
    themeToTwilight: "التبديل إلى الوضع النهاري",
    themeToNight: "التبديل إلى الوضع الليلي",
    language: { current: "عربي", other: "EN", otherLabel: "Read the site in English", group: "اللغة" },
    chapter: "المشروع",
    caseStudy: "اقرأ دراسة الحالة",
    caseStudySoon: "دراسة الحالة · قريبًا",
    architecture: "مسار البيانات",
    then: "ثم",
    alsoBuilt: "بنيتُ أيضًا",
    stageHint: "اختر مرحلة لعرض تفاصيلها",
    stageOf: "المرحلة {n} من {total}",
    stagesLabel: "مراحل العمل في مشروع {project}",
    stageMissing: "تفاصيل المرحلة — قريبًا",
    stackMissing: "التقنيات — قريبًا",
    layerHint: "اختر طبقة لعرض أدواتها",
    layerShowTools: "{layer}: عرض الأدوات",
    orchestratedWith: "التنسيق عبر",
    also: "مجالات أخرى",
    engineering: "الهندسة",
    leadership: "القيادة",
    abilitiesLabel: "مهارات يعتمد عليها هذا الدور",
    nextSection: "التالي: كيف أبني الأنظمة",
    education: "التعليم",
    training: "التدريب المتخصص",
    certifications: "الشهادات الاحترافية",
    issuer: "الجهة المانحة",
    verify: "التحقق",
    opensNewTab: "(يفتح في نافذة جديدة)",
    fluent: "بطلاقة",
    learning: "أتعلّمها",
    downloadResume: "تحميل السيرة الذاتية",
    linkedin: "LinkedIn",
    github: "GitHub",
    linkMissing: "رابط {label}",
    emailMissing: "البريد الإلكتروني",
    backToTop: "العودة إلى الأعلى",
    overviewKicker: "نظرة سريعة · في صفحة واحدة",
    closeOverview: "إغلاق النظرة السريعة",
    focus: "مجالات التركيز",
    coreStack: "التقنيات الأساسية",
    projects: "المشاريع",
    experience: "الخبرة العملية",
    languages: "اللغات",
    learningPrefix: "وأتعلّم",
    credentialsSummary: "الشهادات: {certs} · المعسكرات التدريبية: {camps}",
    jumpToProjects: "انتقل إلى المشاريع",
    cosmos: { collect: "جمع", engineer: "هندسة", build: "بناء", cancer: "السرطان" },
    art: {
      stream: "بيانات FHIR اصطناعية · تحت المراقبة",
      expected: "النطاق المتوقع",
      drift: "انحراف",
      schema: "SCHEMA V2",
      detected: "رُصِد الحادث",
      report: "البلاغ",
    },
  },
};
