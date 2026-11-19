module.exports = [
(()=>{"use strict";return[
"[project]/src/app/(en)/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/metadata.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const dynamicParams = false;
function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sortedProjects"])().map((project)=>({
            slug: project.slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"])(slug);
    return project ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildProjectMetadata"])("en", project) : {};
}
async function Page({ params }) {
    const { slug } = await params;
    const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"])(slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectPage"], {
        locale: "en",
        project: project
    }, void 0, false, {
        fileName: "[project]/src/app/(en)/projects/[slug]/page.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Footer({ c }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mx-auto max-w-[1440px] px-6 pb-10 sm:px-10 xl:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[14px] text-ink-3",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        c.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#top",
                    className: "label text-[13px] tracking-[0.28em] text-ink-2 no-underline hover:text-accent",
                    children: [
                        c.ui.backToTop,
                        " ↑"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/PlaygroundStory.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaygroundStory",
    ()=>PlaygroundStory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Sketches$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Sketches.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$accent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/accent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectIllustration.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
/** Turns the first appearance of each link's text in `body` into an outbound link. */ function withLinks(body, links, className) {
    const link = links?.find((l)=>body.includes(l.text));
    if (!link) return body;
    const at = body.indexOf(link.text);
    const rest = links.filter((l)=>l !== link);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            withLinks(body.slice(0, at), rest, className),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: className,
                children: link.text
            }, void 0, false, {
                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            withLinks(body.slice(at + link.text.length), links, className)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function PlaygroundStory({ project, locale }) {
    const t = project.text[locale];
    const { ui } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const accent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$accent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACCENT"][project.accent];
    const learned = Array.isArray(t.learned) ? t.learned : [
        t.learned
    ];
    const notes = [
        {
            title: ui.playgroundNotes.inspiration,
            body: [
                t.inspiration
            ],
            sketch: "curious"
        },
        {
            title: ui.playgroundNotes.built,
            body: [
                t.built
            ],
            sketch: "computer"
        },
        {
            title: ui.playgroundNotes.learned,
            body: learned,
            sketch: "scatter"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        "aria-labelledby": `${project.slug}-title`,
        className: "relative py-16 sm:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 xl:px-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        className: "flex flex-col gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `label flex flex-wrap gap-x-3 text-[13px] tracking-[0.34em] ${accent.label}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: ui.lab.playground
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "text-ink-4",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    project.status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-ink-3",
                                        children: [
                                            "· ",
                                            ui.projectStatus[project.status]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                        lineNumber: 53,
                                        columnNumber: 31
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: `${project.slug}-title`,
                                className: "font-display text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink",
                                children: t.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            t.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-italic text-[clamp(1.2rem,2vw,1.5rem)] italic text-italic",
                                children: t.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[46ch] text-[17px] leading-[1.7] text-ink-2",
                                children: t.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                lang: "en",
                                className: "flex flex-wrap gap-2",
                                children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "rounded-full border border-[var(--chip-border)] bg-chip px-3 py-1 text-[13px] leading-none text-ink-2",
                                        children: tech
                                    }, tech, false, {
                                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.15,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectIllustration"], {
                            project: project,
                            locale: locale
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mt-16 grid max-w-[1440px] gap-6 px-6 sm:px-10 md:grid-cols-3 xl:px-16",
                children: notes.map((note, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 0.1,
                        className: "lab-note flex flex-col gap-3 rounded-2xl px-6 py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: "w-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Sketches$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SketchSvg"], {
                                    name: note.sketch
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `label text-[12px] tracking-[0.3em] ${accent.label}`,
                                children: note.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            note.body.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16px] leading-relaxed text-ink-2",
                                children: withLinks(note.body[0], t.links, `underline decoration-1 underline-offset-4 hover:text-ink ${accent.label}`)
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col gap-2",
                                children: note.body.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "relative ps-5 text-[15px] leading-[1.6] text-ink-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "absolute start-0 top-[0.75em] h-px w-2.5",
                                                style: {
                                                    background: accent.line
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            item
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, note.title, true, {
                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            project.images?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mx-auto mt-12 grid max-w-[1440px] gap-6 px-6 sm:grid-cols-2 sm:px-10 xl:px-16",
                children: project.images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: image.src,
                            alt: image.alt[locale],
                            loading: "lazy",
                            decoding: "async",
                            className: "h-auto w-full rounded-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this)
                    }, image.src, false, {
                        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/PlaygroundStory.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectArt.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BayanArt",
    ()=>BayanArt,
    "FalconsArt",
    ()=>FalconsArt,
    "NajmArt",
    ()=>NajmArt,
    "RiyadhArt",
    ()=>RiyadhArt,
    "SentinelArt",
    ()=>SentinelArt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
/**
 * Each project gets its own visual world, drawn in SVG so it scales cleanly.
 *  - Bayan, "the archive": loose documents settle into ordered, versioned strata.
 *  - Sentinel, "the watch": a monitored stream where drift and a schema change light up.
 *  - Najm, "the sky": a drone's view of the road, a detection frame, and a report on a phone.
 * These illustrate the ideas in each project's description — not measured results.
 */ const DOCS = [
    [
        28,
        70,
        -16
    ],
    [
        96,
        30,
        12
    ],
    [
        150,
        120,
        -8
    ],
    [
        40,
        190,
        18
    ],
    [
        120,
        230,
        -20
    ],
    [
        186,
        60,
        22
    ],
    [
        70,
        300,
        -6
    ],
    [
        180,
        280,
        10
    ]
];
function BayanArt({ id }) {
    const slabs = [
        0,
        1,
        2,
        3
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 420",
        className: "h-auto w-full",
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#FF8A2B",
                                stopOpacity: "0.28"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#FF8A2B",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-top`,
                        x1: "0",
                        x2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#FFA04D",
                                stopOpacity: "0.85"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#FF8A2B",
                                stopOpacity: "0.25"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "440",
                cy: "230",
                rx: "260",
                ry: "190",
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            DOCS.map(([x, y, r], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "anim-bob",
                    style: {
                        animationDuration: `${6 + i % 4}s`,
                        animationDelay: `${-i * 0.7}s`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `translate(${x} ${y}) rotate(${r} 28 37)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "56",
                                height: "74",
                                rx: "7",
                                style: {
                                    fill: "var(--doc-fill)",
                                    stroke: "var(--doc-stroke)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "9",
                                y: "11",
                                width: "26",
                                height: "4",
                                rx: "2",
                                fill: "#FFB15C",
                                opacity: "0.75"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "9",
                                y: "22",
                                width: "38",
                                height: "3",
                                rx: "1.5",
                                style: {
                                    fill: "var(--doc-line)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "9",
                                y: "30",
                                width: "32",
                                height: "3",
                                rx: "1.5",
                                style: {
                                    fill: "var(--doc-line)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "9",
                                y: "38",
                                width: "36",
                                height: "3",
                                rx: "1.5",
                                style: {
                                    fill: "var(--doc-line)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "9",
                                y: "46",
                                width: "22",
                                height: "3",
                                rx: "1.5",
                                style: {
                                    fill: "var(--doc-line)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 262 210 C 300 210, 318 196, 352 196",
                fill: "none",
                stroke: "#FFA04D",
                strokeWidth: "2",
                strokeDasharray: "4 6",
                className: "anim-flow",
                pathLength: 1000,
                style: {
                    animationDuration: "12s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            slabs.map((i)=>{
                const y = 300 - i * 58;
                const top = i === slabs.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: `${384},${y} ${612},${y} ${590},${y + 40} ${362},${y + 40}`,
                            fill: top ? `url(#${id}-top)` : "rgba(255,177,92,0.12)",
                            stroke: top ? "#FFC596" : "rgba(255,177,92,0.45)",
                            strokeWidth: "1",
                            style: top ? {
                                filter: "drop-shadow(0 0 16px rgba(255,138,43,0.55))"
                            } : undefined
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "394",
                            y: y + 26,
                            fontSize: "12",
                            style: {
                                fontFamily: "var(--font-label)",
                                letterSpacing: "2px",
                                fill: top ? "#2A1206" : "var(--label-orange)"
                            },
                            children: `V${i + 1}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectArt.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function SentinelArt({ id, labels }) {
    const packets = Array.from({
        length: 54
    }, (_, i)=>{
        const x = 40 + i * 11;
        const inDrift = i >= 22 && i <= 30;
        const drift = inDrift ? -40 * Math.sin((i - 22) / 8 * Math.PI) : 0;
        // Rounded: Math.sin can differ in the last digit between the server and the browser,
        // which would make React's hydration see two different drawings.
        const y = Math.round((232 + 15 * Math.sin(i / 3.1) + drift) * 10) / 10;
        return {
            x,
            y,
            inDrift,
            schema: i >= 39
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 660 360",
        className: "h-auto w-full",
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-glass`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                style: {
                                    stopColor: "var(--glass-1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                style: {
                                    stopColor: "var(--glass-2)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: `${id}-clip`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "34",
                            y: "40",
                            width: "592",
                            height: "280"
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#FF7FAE",
                                stopOpacity: "0.22"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#FF7FAE",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "330",
                cy: "190",
                rx: "320",
                ry: "180",
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "20",
                width: "640",
                height: "320",
                rx: "28",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "46",
                cy: "60",
                r: "4",
                fill: "#FF7FAE",
                className: "anim-twinkle",
                style: {
                    animationDuration: "2s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "60",
                y: "64",
                fontSize: "12",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "3px",
                    fill: "var(--ink-2)"
                },
                children: labels.stream
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34",
                y: "200",
                width: "592",
                height: "64",
                style: {
                    fill: "var(--band)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M34 200 H626 M34 264 H626",
                style: {
                    stroke: "var(--line-strong)"
                },
                strokeDasharray: "3 6"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "44",
                y: "292",
                fontSize: "11",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "3px",
                    fill: "var(--ink-3)"
                },
                children: labels.expected
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: `url(#${id}-clip)`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "anim-stream",
                    children: packets.map((p, i)=>p.schema ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: p.x - 3,
                            y: p.y - 3,
                            width: "6",
                            height: "6",
                            rx: "1",
                            fill: "#FFA04D"
                        }, i, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.x,
                            cy: p.y,
                            r: p.inDrift ? 3.6 : 2.6,
                            style: {
                                fill: p.inDrift ? "var(--stream-pink)" : "var(--label-blue)"
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "300",
                y: "168",
                fontSize: "12",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "3px",
                    fill: "var(--label-pink)"
                },
                children: labels.drift
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 466 110 V 316",
                stroke: "#FFB15C",
                strokeOpacity: "0.7",
                strokeDasharray: "4 5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "476",
                y: "122",
                fontSize: "12",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "3px",
                    fill: "var(--label-orange)"
                },
                children: labels.schema
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectArt.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
function NajmArt({ id, labels }) {
    const rotors = [
        [
            128,
            76
        ],
        [
            212,
            76
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 660 360",
        className: "h-auto w-full",
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#6E95FF",
                                stopOpacity: "0.26"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#6E95FF",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-cone`,
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                style: {
                                    stopColor: "var(--label-blue)"
                                },
                                stopOpacity: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                style: {
                                    stopColor: "var(--label-blue)"
                                },
                                stopOpacity: "0.04"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-glass`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                style: {
                                    stopColor: "var(--glass-1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                style: {
                                    stopColor: "var(--glass-2)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "300",
                cy: "200",
                rx: "320",
                ry: "170",
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 336 Q 210 250 452 232",
                fill: "none",
                style: {
                    stroke: "var(--line-strong)"
                },
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M108 360 Q 292 290 460 272",
                fill: "none",
                style: {
                    stroke: "var(--line-strong)"
                },
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 350 Q 250 270 456 252",
                fill: "none",
                style: {
                    stroke: "var(--ink-4)"
                },
                strokeWidth: "1.5",
                strokeDasharray: "10 12",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "rotate(-14 252 284)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "230",
                        y: "274",
                        width: "46",
                        height: "22",
                        rx: "6",
                        style: {
                            fill: "var(--doc-fill)",
                            stroke: "var(--ink-3)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "258",
                        y: "278",
                        width: "12",
                        height: "14",
                        rx: "3",
                        style: {
                            fill: "var(--doc-line)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "rotate(28 306 262)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "284",
                        y: "252",
                        width: "46",
                        height: "22",
                        rx: "6",
                        style: {
                            fill: "var(--doc-fill)",
                            stroke: "var(--ink-3)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "312",
                        y: "256",
                        width: "12",
                        height: "14",
                        rx: "3",
                        style: {
                            fill: "var(--doc-line)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "164,104 176,104 346,232 204,232",
                fill: `url(#${id}-cone)`,
                className: "anim-breathe",
                style: {
                    animationDuration: "6s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "204",
                y: "232",
                width: "142",
                height: "80",
                rx: "6",
                fill: "none",
                style: {
                    stroke: "var(--label-blue)"
                },
                strokeWidth: "1.6",
                strokeDasharray: "6 5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "204",
                y: "214",
                width: "84",
                height: "18",
                rx: "4",
                style: {
                    fill: "var(--label-blue)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "212",
                y: "227",
                fontSize: "11",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "2.5px",
                    fill: "var(--bg)"
                },
                children: labels.detected
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "346",
                cy: "232",
                r: "4",
                fill: "#FFB15C",
                className: "anim-twinkle",
                style: {
                    animationDuration: "2.4s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "anim-bob",
                style: {
                    animationDuration: "5s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M128 76 L212 76",
                        style: {
                            stroke: "var(--ink-2)"
                        },
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    rotors.map(([x, y], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: x,
                                    cy: y - 6,
                                    rx: "22",
                                    ry: "4",
                                    fill: "none",
                                    style: {
                                        stroke: "var(--label-blue)"
                                    },
                                    strokeWidth: "1.4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M${x} ${y} V${y - 6}`,
                                    style: {
                                        stroke: "var(--ink-2)"
                                    },
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "150",
                        y: "70",
                        width: "40",
                        height: "22",
                        rx: "8",
                        style: {
                            fill: "var(--bg-2)",
                            stroke: "var(--ink-2)"
                        },
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "170",
                        cy: "98",
                        r: "5",
                        style: {
                            fill: "var(--label-blue)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "170",
                        cy: "98",
                        r: "2",
                        fill: "#FFFFFF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 350 262 C 420 262, 430 178, 494 178",
                fill: "none",
                stroke: "#FFA04D",
                strokeWidth: "2",
                strokeDasharray: "4 6",
                className: "anim-flow",
                pathLength: 1000,
                style: {
                    animationDuration: "10s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "500",
                y: "62",
                width: "128",
                height: "240",
                rx: "22",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "546",
                y: "72",
                width: "36",
                height: "5",
                rx: "2.5",
                style: {
                    fill: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "516",
                y: "106",
                fontSize: "12",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "3px",
                    fill: "var(--label-orange)"
                },
                children: labels.report
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "516",
                y: "118",
                width: "96",
                height: "62",
                rx: "10",
                style: {
                    fill: "var(--band)",
                    stroke: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M564 134 c-8 0 -12 6 -12 11 c0 8 12 18 12 18 s12 -10 12 -18 c0 -5 -4 -11 -12 -11 z",
                style: {
                    fill: "var(--label-blue)"
                },
                opacity: "0.85"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "564",
                cy: "145",
                r: "4",
                style: {
                    fill: "var(--bg)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "516",
                y: "194",
                width: "80",
                height: "5",
                rx: "2.5",
                style: {
                    fill: "var(--doc-line)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "516",
                y: "208",
                width: "64",
                height: "5",
                rx: "2.5",
                style: {
                    fill: "var(--doc-line)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "516",
                y: "222",
                width: "72",
                height: "5",
                rx: "2.5",
                style: {
                    fill: "var(--doc-line)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "516",
                y: "252",
                width: "96",
                height: "30",
                rx: "15",
                fill: "#FF8A2B",
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "544",
                y: "265",
                width: "40",
                height: "4",
                rx: "2",
                fill: "#2A1206",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectArt.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
/**
 * A peregrine in a stoop, drawn facing right around (0, 0): wings half folded and swept
 * back, hooked beak, yellow cere and eye ring, the dark "moustache" stripe, and a narrow
 * tail. A generic bird, not the team's mark.
 */ function DivingFalcon({ transform }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: transform,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 24 -8 C 8 -22, -16 -32, -46 -36 L -40 -32 L -46 -31 L -38 -27 L -43 -25 C -28 -18, -14 -12, -2 -7 Z",
                style: {
                    fill: "var(--ink-3)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -28 -3 L -66 -7 Q -71 0 -66 7 L -28 4 Z",
                style: {
                    fill: "var(--ink-2)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -60 -6.4 L -66 -7 Q -71 0 -66 7 L -60 6.4 Q -64 0 -60 -6.4 Z",
                style: {
                    fill: "var(--ink-3)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 56 -6 C 46 -12, 28 -13, 10 -11 C -8 -8, -22 -5, -32 -2 L -32 4 C -22 6, -8 9, 10 11 C 28 12, 46 10, 56 6 Z",
                style: {
                    fill: "var(--ink-2)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 30 6 q 3 2 6 0 M 20 7 q 3 2 6 0 M 10 7.5 q 3 2 6 0 M 25 2 q 3 2 6 0 M 15 2.5 q 3 2 6 0",
                fill: "none",
                style: {
                    stroke: "var(--ink-3)"
                },
                strokeWidth: "1",
                strokeLinecap: "round",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 26 2 C 12 18, -14 34, -54 44 L -46 39 L -55 39 L -45 34 L -52 33 L -42 29 C -26 22, -12 14, -2 6 Z",
                style: {
                    fill: "var(--ink-2)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M -20 20 C -30 27, -40 32, -54 44 L -46 39 L -55 39 L -45 34 L -52 33 L -42 29 C -34 26, -27 23, -20 20 Z",
                style: {
                    fill: "var(--ink-3)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 18 6 C 6 16, -10 26, -30 34 M 10 6 C -2 14, -14 20, -26 25",
                fill: "none",
                style: {
                    stroke: "var(--ink-3)"
                },
                strokeWidth: "1",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 40 -10 C 48 -14, 58 -11, 62 -5 C 60 -1, 54 0, 48 -1 C 44 -3, 41 -6, 40 -10 Z",
                style: {
                    fill: "var(--ink-3)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 52 -2 C 51 2, 49 5, 46 7 L 49 7 C 52 5, 54 2, 54 -1 Z",
                style: {
                    fill: "var(--ink-3)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "55",
                cy: "-5",
                r: "2.6",
                style: {
                    fill: "var(--label-orange)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "55.4",
                cy: "-5",
                r: "1.4",
                fill: "#0B1026"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 61 -5 L 64 -4.5 L 63 -1.5 Z",
                style: {
                    fill: "var(--label-orange)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 63.5 -4.6 C 67 -4, 68.4 -1.6, 67 1.6 C 66 0, 64.6 -0.8, 63 -1.4 Z",
                style: {
                    fill: "var(--ink-3)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectArt.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, this);
}
function FalconsArt({ id, labels }) {
    const circumference = 2 * Math.PI * 36;
    const lanes = [
        {
            y: 138,
            label: labels.request,
            color: "var(--label-blue)",
            share: 0.28,
            chips: [
                470,
                520
            ]
        },
        {
            y: 168,
            label: labels.sarcasm,
            color: "var(--label-orange)",
            share: 0.18,
            chips: [
                496
            ]
        },
        {
            y: 198,
            label: labels.abuse,
            color: "var(--stream-pink)",
            share: 0.14,
            chips: [
                530
            ]
        },
        {
            y: 228,
            label: labels.other,
            color: "var(--ink-4)",
            share: 0.4,
            chips: [
                462,
                500,
                530
            ]
        }
    ];
    // Sentiment bar under the video: x from 170 to 390, 3px gaps between segments.
    const sentiment = [
        {
            label: labels.positive,
            color: "#14B26C",
            share: 0.46
        },
        {
            label: labels.neutral,
            color: "var(--ink-4)",
            share: 0.32
        },
        {
            label: labels.negative,
            color: "var(--stream-pink)",
            share: 0.22
        }
    ];
    let barX = 170;
    let offset = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 660 360",
        className: "h-auto w-full",
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#6E95FF",
                                stopOpacity: "0.24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#6E95FF",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-glass`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                style: {
                                    stopColor: "var(--glass-1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                style: {
                                    stopColor: "var(--glass-2)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "330",
                cy: "190",
                rx: "320",
                ry: "170",
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(0 22)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            stroke: "var(--label-blue)"
                        },
                        strokeOpacity: "0.45",
                        strokeLinecap: "round",
                        strokeWidth: "1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M22 18 L 62 50",
                                className: "anim-twinkle",
                                style: {
                                    animationDuration: "3s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M48 6 L 86 36",
                                className: "anim-twinkle",
                                style: {
                                    animationDuration: "3s",
                                    animationDelay: "-1s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 42 L 48 70",
                                className: "anim-twinkle",
                                style: {
                                    animationDuration: "3s",
                                    animationDelay: "-2s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "anim-bob",
                        style: {
                            animationDuration: "5s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DivingFalcon, {
                            transform: "translate(110 70) rotate(36) scale(1.05)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "170",
                        y: "110",
                        width: "220",
                        height: "132",
                        rx: "16",
                        fill: `url(#${id}-glass)`,
                        style: {
                            stroke: "var(--glass-border)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "266,152 266,200 304,176",
                        style: {
                            fill: "var(--stream-pink)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M188 226 H 372",
                        style: {
                            stroke: "var(--line-strong)"
                        },
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M188 226 H 300",
                        style: {
                            stroke: "var(--label-blue)"
                        },
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                        href: "/assets/projects/falcons-analysis/team-falcons-logo.png",
                        x: "348",
                        y: "120",
                        width: "30",
                        height: "36",
                        opacity: "0.95"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    sentiment.map((part)=>{
                        const width = part.share * 220 - 3;
                        const x = barX;
                        barX += part.share * 220;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: x,
                                    y: "256",
                                    width: width,
                                    height: "7",
                                    rx: "3.5",
                                    style: {
                                        fill: part.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: x,
                                    y: "280",
                                    fontSize: "10",
                                    style: {
                                        fontFamily: "var(--font-label)",
                                        letterSpacing: "2px",
                                        fill: part.color
                                    },
                                    children: part.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, part.color, true, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this);
                    }),
                    lanes.map((lane, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M390 ${152 + i * 16} C 404 ${152 + i * 16}, 406 ${lane.y}, 420 ${lane.y} H 552`,
                                    fill: "none",
                                    style: {
                                        stroke: "var(--line-strong)"
                                    },
                                    strokeDasharray: "3 6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "420",
                                    y: lane.y - 9,
                                    fontSize: "11",
                                    style: {
                                        fontFamily: "var(--font-label)",
                                        letterSpacing: "3px",
                                        fill: lane.color
                                    },
                                    children: lane.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                lane.chips.map((x, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        className: "anim-bob",
                                        style: {
                                            animationDuration: `${4 + i + j}s`,
                                            animationDelay: `${-(i + j) * 0.8}s`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: x,
                                            y: lane.y - 7,
                                            width: "22",
                                            height: "14",
                                            rx: "5",
                                            style: {
                                                fill: lane.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this)
                                    }, x, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, lane.y, true, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "rotate(-90 604 186)",
                        fill: "none",
                        strokeWidth: "14",
                        children: lanes.map((lane)=>{
                            const length = lane.share * circumference;
                            const arc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "604",
                                cy: "186",
                                r: "36",
                                style: {
                                    stroke: lane.color
                                },
                                strokeDasharray: `${(length - 3).toFixed(1)} ${(circumference - length + 3).toFixed(1)}`,
                                strokeDashoffset: (-offset).toFixed(1)
                            }, lane.y, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 427,
                                columnNumber: 15
                            }, this);
                            offset += length;
                            return arc;
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectArt.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
/** A map pin centred on (cx, cy) with its point 26px below. */ function pinPath(cx, cy) {
    return `M${cx} ${cy + 26} C ${cx - 6} ${cy + 17}, ${cx - 15} ${cy + 10}, ${cx - 15} ${cy} A 15 15 0 1 1 ${cx + 15} ${cy} C ${cx + 15} ${cy + 10}, ${cx + 6} ${cy + 17}, ${cx} ${cy + 26} Z`;
}
function RiyadhArt({ id, labels }) {
    const ground = 318;
    const stops = [
        {
            x: 430,
            y: 206,
            label: labels.cafe,
            color: "#FFA04D",
            icon: "cup"
        },
        {
            x: 500,
            y: 190,
            label: labels.restaurant,
            color: "var(--stream-pink)",
            icon: "dine"
        },
        {
            x: 594,
            y: 180,
            label: labels.museum,
            color: "var(--label-blue)",
            icon: "museum"
        }
    ];
    const skyline = [
        [
            150,
            252,
            30
        ],
        [
            262,
            232,
            24
        ],
        [
            376,
            262,
            22
        ],
        [
            446,
            240,
            18
        ],
        [
            640,
            266,
            14
        ]
    ];
    const awning = (x, w, y, color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: `M${x - 3} ${y} H ${x + w + 3} V ${y + 8} ${Array.from({
                length: Math.round(w / 10)
            }, (_, k)=>{
                const step = (w + 6) / Math.round(w / 10);
                const right = x + w + 3 - k * step;
                return `Q ${right - step / 2} ${y + 16}, ${right - step} ${y + 8}`;
            }).join(" ")} Z`,
            style: {
                fill: color
            },
            opacity: "0.85"
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectArt.tsx",
            lineNumber: 469,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 660 360",
        className: "h-auto w-full",
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#FF8A2B",
                                stopOpacity: "0.24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#FF8A2B",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-glass`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                style: {
                                    stopColor: "var(--glass-1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                style: {
                                    stopColor: "var(--glass-2)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-globe`,
                        cx: "0.35",
                        cy: "0.35",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#FFE2B8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.55",
                                stopColor: "#FFB15C"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#E0701A"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 494,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "330",
                cy: "170",
                rx: "320",
                ry: "170",
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "604",
                cy: "62",
                r: "20",
                fill: "#FFB15C",
                opacity: "0.9",
                className: "anim-twinkle",
                style: {
                    animationDuration: "6s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "604",
                cy: "62",
                r: "32",
                fill: "none",
                stroke: "#FFB15C",
                strokeOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 501,
                columnNumber: 7
            }, this),
            skyline.map(([x, y, w])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x,
                    y: y,
                    width: w,
                    height: ground - y,
                    rx: "2",
                    style: {
                        fill: "var(--band)",
                        stroke: "var(--line)"
                    }
                }, x, false, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 505,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M200 318 C 202 220, 207 140, 212 78 Q 225 156 238 78 C 243 140, 248 220, 250 318 Z",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                },
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M218 104 H 232",
                style: {
                    stroke: "var(--glass-border)"
                },
                strokeWidth: "2.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 515,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M225 132 V 312 M214 160 L 212 312 M236 160 L 238 312",
                style: {
                    stroke: "var(--line)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "296,318 364,318 330,62",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                },
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "314,318 346,318 330,150",
                fill: "none",
                style: {
                    stroke: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            [
                160,
                200,
                240,
                280
            ].map((y)=>{
                const half = 34 * (y - 62) / 256;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M${330 - half} ${y} H ${330 + half}`,
                    style: {
                        stroke: "var(--line-strong)"
                    }
                }, y, false, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 523,
                    columnNumber: 16
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M330 62 V 26",
                stroke: "#FFC596",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "330",
                cy: "112",
                r: "15",
                fill: `url(#${id}-globe)`,
                className: "anim-breathe",
                style: {
                    filter: "drop-shadow(0 0 14px rgba(255,138,43,0.7))"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "286",
                y: "304",
                width: "88",
                height: "14",
                rx: "3",
                style: {
                    fill: "var(--band)",
                    stroke: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34",
                y: "196",
                width: "80",
                height: ground - 196,
                rx: "5",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2,
                3,
                4
            ].map((row)=>[
                    0,
                    1,
                    2
                ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 46 + col * 20,
                        y: 226 + row * 16,
                        width: "12",
                        height: "8",
                        rx: "1.5",
                        fill: "#FFB15C",
                        opacity: (row + col) % 3 === 0 ? 0.75 : 0.22
                    }, `${row}-${col}`, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "74",
                cy: "210",
                r: "9",
                fill: "#FFA04D"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "74",
                y: "214",
                fontSize: "11",
                textAnchor: "middle",
                style: {
                    fontFamily: "var(--font-label)",
                    fill: "#2A1206"
                },
                children: "H"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "66",
                y: "302",
                width: "16",
                height: "16",
                rx: "2",
                style: {
                    fill: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M131 318 L 133 296 M141 318 L 139 296",
                        style: {
                            stroke: "var(--ink-2)"
                        },
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 560,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M126 298 L 146 298 L 142 268 L 130 268 Z",
                        fill: "#FFA04D"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "136",
                        cy: "259",
                        r: "7.5",
                        style: {
                            fill: "var(--ink-2)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M127 256 Q 136 246 145 256 Z",
                        fill: "#E0701A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M130 274 L 124 292",
                        style: {
                            stroke: "var(--ink-2)"
                        },
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M142 273 L 154 252",
                        style: {
                            stroke: "var(--ink-2)"
                        },
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M154 254 V 212",
                        style: {
                            stroke: "var(--ink-3)"
                        },
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "anim-bob",
                        style: {
                            animationDuration: "3s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "154,212 180,219 154,226",
                            fill: "#FF8A2B"
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "410",
                y: "276",
                width: "44",
                height: ground - 276,
                rx: "3",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 573,
                columnNumber: 7
            }, this),
            awning(410, 44, 276, "#FFA04D"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "426",
                y: "300",
                width: "12",
                height: "18",
                rx: "2",
                style: {
                    fill: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "472",
                y: "264",
                width: "56",
                height: ground - 264,
                rx: "3",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 576,
                columnNumber: 7
            }, this),
            awning(472, 56, 264, "var(--stream-pink)"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "478",
                y: "290",
                width: "18",
                height: "12",
                rx: "2",
                fill: "#FFB15C",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "506",
                y: "294",
                width: "14",
                height: "24",
                rx: "2",
                style: {
                    fill: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "548,262 594,238 640,262",
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "552",
                y: "262",
                width: "84",
                height: ground - 262,
                fill: `url(#${id}-glass)`,
                style: {
                    stroke: "var(--glass-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 581,
                columnNumber: 7
            }, this),
            [
                562,
                582,
                602,
                622
            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x - 3,
                    y: "270",
                    width: "6",
                    height: "40",
                    rx: "1",
                    style: {
                        fill: "var(--label-blue)"
                    },
                    opacity: "0.55"
                }, x, false, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 583,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M548 312 H 640",
                style: {
                    stroke: "var(--line-strong)"
                },
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 585,
                columnNumber: 7
            }, this),
            stops.map((stop, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "anim-bob",
                    style: {
                        animationDuration: `${4 + i}s`,
                        animationDelay: `${-i * 0.9}s`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: pinPath(stop.x, stop.y),
                            style: {
                                fill: stop.color,
                                filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.25))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            stroke: "#FFFFFF",
                            strokeWidth: "1.8",
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: stop.icon === "cup" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x - 7} ${stop.y - 3} H ${stop.x + 4} V ${stop.y + 3} A 4 4 0 0 1 ${stop.x} ${stop.y + 7} H ${stop.x - 3} A 4 4 0 0 1 ${stop.x - 7} ${stop.y + 3} Z`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 593,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x + 4} ${stop.y - 1} H ${stop.x + 6} A 2.5 2.5 0 0 1 ${stop.x + 6} ${stop.y + 4} H ${stop.x + 4}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x - 4} ${stop.y - 7} V ${stop.y - 9} M${stop.x} ${stop.y - 7} V ${stop.y - 10}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 595,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 592,
                                columnNumber: 15
                            }, this) : stop.icon === "dine" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x - 5} ${stop.y - 9} V ${stop.y + 9} M${stop.x - 8} ${stop.y - 9} V ${stop.y - 3} Q ${stop.x - 5} ${stop.y} ${stop.x - 2} ${stop.y - 3} V ${stop.y - 9}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 599,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x + 5} ${stop.y + 9} V ${stop.y - 9} Q ${stop.x + 10} ${stop.y - 4} ${stop.x + 5} ${stop.y + 1}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x - 9} ${stop.y - 3} L ${stop.x} ${stop.y - 9} L ${stop.x + 9} ${stop.y - 3} Z`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 604,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: `M${stop.x - 6} ${stop.y - 1} V ${stop.y + 6} M${stop.x} ${stop.y - 1} V ${stop.y + 6} M${stop.x + 6} ${stop.y - 1} V ${stop.y + 6} M${stop.x - 9} ${stop.y + 8} H ${stop.x + 9}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                        lineNumber: 605,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                                lineNumber: 603,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: stop.x,
                            y: stop.y - 24,
                            fontSize: "10",
                            textAnchor: "middle",
                            style: {
                                fontFamily: "var(--font-label)",
                                letterSpacing: "2px",
                                fill: stop.color
                            },
                            children: stop.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectArt.tsx",
                            lineNumber: 609,
                            columnNumber: 11
                        }, this)
                    ]
                }, stop.label, true, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 588,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: `M20 ${ground} H 650`,
                style: {
                    stroke: "var(--line-strong)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M136 336 H 600",
                fill: "none",
                stroke: "#FFA04D",
                strokeWidth: "2",
                strokeDasharray: "4 6",
                className: "anim-flow",
                pathLength: 1000,
                style: {
                    animationDuration: "14s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "136",
                cy: "336",
                r: "5",
                fill: "#FFA04D"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            stops.map((stop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: stop.x,
                    cy: "336",
                    r: "5",
                    style: {
                        fill: stop.color
                    }
                }, stop.x, false, {
                    fileName: "[project]/src/components/projects/ProjectArt.tsx",
                    lineNumber: 635,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "34",
                y: "354",
                fontSize: "10",
                style: {
                    fontFamily: "var(--font-label)",
                    letterSpacing: "3px",
                    fill: "var(--ink-3)"
                },
                children: labels.route
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectArt.tsx",
                lineNumber: 637,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectArt.tsx",
        lineNumber: 481,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectContributions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectContributions",
    ()=>ProjectContributions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)");
;
;
;
function ProjectContributions({ contributions, locale }) {
    const leadership = contributions;
    const { ui } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const [lead, emphasis] = leadership.title.split(": ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "leadership-title",
        className: "relative mx-auto max-w-[1180px] px-6 pb-20 sm:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "flex flex-col items-center gap-3 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "leadership-title",
                        className: "font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-tight text-ink",
                        children: [
                            lead,
                            ": ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                className: "font-italic font-normal italic text-italic",
                                children: emphasis
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 24,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-[48ch] text-[17px] leading-relaxed text-ink-2",
                        children: leadership.intro
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        className: "glass-pane flex flex-col gap-2 rounded-2xl px-6 py-5 lg:h-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "label text-[13px] tracking-[0.3em] text-label-blue",
                                children: ui.engineering
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16px] leading-relaxed text-ink-2",
                                children: leadership.engineering
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        "aria-label": ui.abilitiesLabel,
                        className: "flex flex-wrap justify-center gap-2 lg:flex-col lg:items-center lg:gap-2.5",
                        children: leadership.abilities.map((ability, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                                as: "li",
                                delay: 0.1 + i * 0.08,
                                className: "thread flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "label rounded-full border border-[var(--label-orange)] bg-chip px-3.5 py-1.5 text-[11px] tracking-[0.22em] text-label-orange",
                                    children: ability
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, ability, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.2,
                        className: "glass-pane flex flex-col gap-2 rounded-2xl px-6 py-5 lg:h-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "label text-[13px] tracking-[0.3em] text-label-pink",
                                children: ui.leadership
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16px] leading-relaxed text-ink-2",
                                children: leadership.leadership
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                variant: "draw",
                className: "mt-2 flex flex-col items-center lg:-mt-11",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        "aria-hidden": "true",
                        focusable: "false",
                        viewBox: "0 0 1000 90",
                        preserveAspectRatio: "none",
                        className: "hidden h-[90px] w-full lg:block rtl:-scale-x-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M210 0 C210 60 500 30 500 88",
                                fill: "none",
                                stroke: "var(--label-blue)",
                                strokeWidth: "1.5",
                                pathLength: 1000
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M790 0 C790 60 500 30 500 88",
                                fill: "none",
                                stroke: "var(--label-pink)",
                                strokeWidth: "1.5",
                                pathLength: 1000
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "h-10 w-px bg-gradient-to-b from-transparent to-[var(--label-orange)] lg:hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label flex flex-col items-center gap-2.5 text-[12px] tracking-[0.32em] text-label-orange",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "h-3 w-3 rounded-full bg-[#FFB15C] shadow-[0_0_14px_#FF8A2B]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            leadership.converge
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectContributions.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectContributions.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectIllustration.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectIllustration",
    ()=>ProjectIllustration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Sketches$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Sketches.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectArt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectArt.tsx [app-rsc] (ecmascript)");
;
;
;
;
function ProjectIllustration({ project, locale, instance = "page" }) {
    if (project.coverImage) {
        return(// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: project.coverImage.src,
            alt: project.coverImage.alt[locale],
            loading: "lazy",
            decoding: "async",
            className: "h-auto w-full rounded-2xl object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this));
    }
    const id = `${project.slug}-${instance}`;
    const labels = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale].ui.art;
    if (project.illustration === "archive") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectArt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BayanArt"], {
        id: id
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
        lineNumber: 34,
        columnNumber: 50
    }, this);
    if (project.illustration === "watch") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectArt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SentinelArt"], {
        id: id,
        labels: labels
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
        lineNumber: 35,
        columnNumber: 48
    }, this);
    if (project.illustration === "sky") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectArt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NajmArt"], {
        id: id,
        labels: labels
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
        lineNumber: 36,
        columnNumber: 46
    }, this);
    if (project.illustration === "dive") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectArt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FalconsArt"], {
        id: id,
        labels: labels
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
        lineNumber: 37,
        columnNumber: 47
    }, this);
    if (project.illustration === "tour") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectArt$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RiyadhArt"], {
        id: id,
        labels: labels
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
        lineNumber: 38,
        columnNumber: 47
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full items-center justify-center py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[min(60%,220px)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Sketches$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SketchSvg"], {
                name: "curious"
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectIllustration.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectNavigation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectNavigation",
    ()=>ProjectNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-rsc] (ecmascript)");
;
;
;
function Arrow({ back = false }) {
    // Points along the reading direction; mirrored on right-to-left pages.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        className: "inline-block rtl:-scale-x-100",
        children: back ? "←" : "→"
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function ProjectNavigation({ slug, locale }) {
    const { ui } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const { previous, next } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["neighbours"])(slug);
    const linkClass = "project-nav-link group flex flex-col gap-1.5 rounded-2xl px-1 py-2 no-underline";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": ui.backToProjects,
        className: "mx-auto max-w-[1440px] px-6 pb-20 sm:px-10 xl:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: previous ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])(locale, previous.slug),
                        className: linkClass,
                        rel: "prev",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label text-[11px] tracking-[0.28em] text-ink-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                                        back: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    ui.previousProject
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-[24px] text-ink",
                                children: previous.text[locale].title
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labPath"])(locale),
                        className: "label inline-flex items-center gap-2 py-2 text-[12px] tracking-[0.3em] text-ink-2 no-underline transition-colors hover:text-accent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                "aria-hidden": "true",
                                focusable: "false",
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "0.5",
                                        y: "0.5",
                                        width: "4.5",
                                        height: "4.5",
                                        rx: "1",
                                        fill: "none",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "7",
                                        y: "0.5",
                                        width: "4.5",
                                        height: "4.5",
                                        rx: "1",
                                        fill: "none",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "0.5",
                                        y: "7",
                                        width: "4.5",
                                        height: "4.5",
                                        rx: "1",
                                        fill: "none",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "7",
                                        y: "7",
                                        width: "4.5",
                                        height: "4.5",
                                        rx: "1",
                                        fill: "none",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            ui.backToProjects
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:text-end",
                    children: next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])(locale, next.slug),
                        className: `${linkClass} sm:items-end`,
                        rel: "next",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label text-[11px] tracking-[0.28em] text-ink-4",
                                children: [
                                    ui.nextProject,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                        lineNumber: 50,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-[24px] text-ink",
                                children: next.text[locale].title
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectNavigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectNotes.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectNotes",
    ()=>ProjectNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)");
;
;
;
function ProjectNotes({ text, locale }) {
    const { ui } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const blocks = [
        text.approach ? {
            title: ui.notes.approach,
            body: [
                text.approach
            ]
        } : null,
        text.challenges?.length ? {
            title: ui.notes.challenges,
            body: text.challenges
        } : null,
        text.lessons?.length ? {
            title: ui.notes.lessons,
            body: text.lessons
        } : null
    ].filter((b)=>b !== null);
    if (!blocks.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": ui.notes.label,
        className: "mx-auto max-w-[1440px] px-6 pb-20 sm:px-10 xl:px-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-3",
            children: blocks.map((block, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: i * 0.1,
                    className: "glass-pane flex flex-col gap-3 rounded-2xl px-6 py-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "label text-[12px] tracking-[0.3em] text-accent",
                            children: block.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectNotes.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        block.body.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[16px] leading-relaxed text-ink-2",
                            children: block.body[0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectNotes.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-2",
                            children: block.body.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "relative ps-5 text-[15px] leading-[1.6] text-ink-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "absolute start-0 top-[0.75em] h-px w-2.5 bg-[var(--label-orange)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectNotes.tsx",
                                            lineNumber: 30,
                                            columnNumber: 21
                                        }, this),
                                        item
                                    ]
                                }, item, true, {
                                    fileName: "[project]/src/components/projects/ProjectNotes.tsx",
                                    lineNumber: 29,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects/ProjectNotes.tsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this)
                    ]
                }, block.title, true, {
                    fileName: "[project]/src/components/projects/ProjectNotes.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/projects/ProjectNotes.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/projects/ProjectNotes.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectPage",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Backdrop$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Backdrop.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectContributions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectContributions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$PlaygroundStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/PlaygroundStory.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectNavigation.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectNotes$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectNotes.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectResources$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectResources.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectStory.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function ProjectPage({ locale, project }) {
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const other = locale === "en" ? "ar" : "en";
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sortedProjects"])().findIndex((p)=>p.slug === project.slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocaleProvider"], {
        locale: locale,
        alternatePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])(other, project.slug),
        onHome: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: "label sr-only z-[100] rounded-full bg-[var(--bg-2)] px-5 py-3 text-xs text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4",
                children: c.ui.skipToContent
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Backdrop$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Backdrop"], {}, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "top",
                        className: "mx-auto max-w-[1440px] px-6 pt-8 sm:px-10 xl:px-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labPath"])(locale),
                            className: "label inline-flex items-center gap-2 text-[12px] tracking-[0.3em] text-ink-3 no-underline transition-colors hover:text-accent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "inline-block rtl:-scale-x-100",
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectPage.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                c.ui.backToProjects
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/projects/ProjectPage.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectPage.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    project.type === "engineering" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectStory"], {
                                project: project,
                                index: index,
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            project.text[locale].contributions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectContributions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectContributions"], {
                                contributions: project.text[locale].contributions,
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectNotes$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectNotes"], {
                                text: project.text[locale],
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectPage.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$PlaygroundStory$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaygroundStory"], {
                        project: project,
                        locale: locale
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectPage.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectResources$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectResources"], {
                        resources: project.resources,
                        locale: locale
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectPage.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectNavigation"], {
                        slug: project.slug,
                        locale: locale
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectPage.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {
                c: c
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectPage.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectPage.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectResources.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectResources",
    ()=>ProjectResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ArrowIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ArrowIcon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$KaggleIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/KaggleIcon.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function ProjectResources({ resources, locale }) {
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["availableResources"])(resources);
    if (!links.length) return null;
    const { ui } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "resources-title",
        className: "mx-auto max-w-[1440px] px-6 pb-16 sm:px-10 xl:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: "resources-title",
                className: "label text-[12px] tracking-[0.32em] text-ink-3",
                children: ui.resources
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectResources.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-5 flex flex-wrap gap-3",
                children: links.map(({ key, href })=>{
                    const external = /^https?:\/\//.test(href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            className: "btn btn-secondary btn-sm",
                            ...external ? {
                                target: "_blank",
                                rel: "noopener noreferrer"
                            } : {},
                            children: [
                                key === "kaggle" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$KaggleIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KaggleIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectResources.tsx",
                                    lineNumber: 29,
                                    columnNumber: 37
                                }, this) : null,
                                ui.resourceLabels[key],
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ArrowIcon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArrowIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/projects/ProjectResources.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this),
                                external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: [
                                        " ",
                                        ui.opensNewTab
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/projects/ProjectResources.tsx",
                                    lineNumber: 32,
                                    columnNumber: 29
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/projects/ProjectResources.tsx",
                            lineNumber: 24,
                            columnNumber: 15
                        }, this)
                    }, key, false, {
                        fileName: "[project]/src/components/projects/ProjectResources.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectResources.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectResources.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/ProjectStages.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectStages",
    ()=>ProjectStages
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProjectStages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProjectStages() from the server but ProjectStages is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/projects/ProjectStages.tsx", "ProjectStages");
}),
"[project]/src/components/projects/ProjectStages.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectStages$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectStages.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectStages$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/projects/ProjectStory.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectStory",
    ()=>ProjectStory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$accent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/accent.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectIllustration.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectStages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectStages.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
/** Medallion tones for a Bronze → Silver → Gold architecture flow. */ const FLOW_TONE = {
    Bronze: "#D9894A",
    Silver: "var(--ink-3)",
    Gold: "#FFB15C"
};
/** A small architecture diagram: source → layers → reporting. Always left to right. */ function Flow({ steps, color, ui }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "flex flex-col items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "label text-[11px] tracking-[0.3em] text-ink-4",
                children: ui.architecture
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                dir: "ltr",
                lang: "en",
                className: "flex flex-wrap items-center justify-center gap-y-2",
                children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center",
                        children: [
                            i > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "mx-1.5 h-px w-4 sm:mx-2 sm:w-7",
                                style: {
                                    background: color,
                                    opacity: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label rounded-full border px-3 py-1.5 text-[11px] tracking-[0.2em] sm:text-[12px]",
                                style: {
                                    borderColor: FLOW_TONE[step] ?? "var(--chip-border)",
                                    color: FLOW_TONE[step] ?? "var(--ink-2)",
                                    background: "var(--chip)"
                                },
                                children: [
                                    i > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: [
                                            ui.then,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 36,
                                        columnNumber: 24
                                    }, this) : null,
                                    step
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step, true, {
                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectStory.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function Metrics({ metrics, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "flex flex-col items-center gap-3 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "label text-[11px] tracking-[0.3em] text-ink-4",
                children: metrics.label
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "flex flex-wrap justify-center gap-x-10 gap-y-3",
                children: metrics.values.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: "label order-2 text-[11px] tracking-[0.24em] text-ink-3",
                                children: m.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "order-1 font-display text-[30px] leading-none",
                                style: {
                                    color
                                },
                                children: m.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.label, true, {
                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-[40ch] text-[13px] leading-snug text-ink-3",
                children: metrics.note
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectStory.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function ProjectStory({ project, index, locale }) {
    const t = project.text[locale];
    const { ui } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const accent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$accent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACCENT"][project.accent];
    const headingId = `${project.slug}-title`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        "aria-labelledby": headingId,
        className: "relative py-16 sm:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-y-0 end-0 w-[70%] blur-[40px]",
                style: {
                    background: `radial-gradient(50% 50% at 65% 50%, ${accent.glow}, transparent)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 xl:px-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `label flex flex-wrap gap-x-3 text-[13px] tracking-[0.34em] ${accent.label}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            ui.chapter,
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$accent$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectNumber"])(index)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "text-ink-4",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: headingId,
                                className: "font-display text-[clamp(4.25rem,9vw,8.75rem)] font-normal leading-[0.9] tracking-[-0.03em] text-ink [font-variation-settings:'opsz'_144]",
                                children: [
                                    t.title,
                                    t.altName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ms-4 inline-block align-middle text-[0.32em] tracking-normal text-ink-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            lang: t.altLang,
                                            dir: t.altLang === "ar" ? "rtl" : "ltr",
                                            children: t.altName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-italic text-[clamp(1.25rem,2vw,1.625rem)] italic text-italic",
                                children: t.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: "max-w-[30ch] border-s-2 ps-5 font-display text-[clamp(1.3rem,1.9vw,1.6rem)] leading-[1.35] text-ink",
                                style: {
                                    borderColor: accent.line
                                },
                                children: t.problem
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-[46ch] text-[17px] leading-[1.7] text-ink-2",
                                children: t.overview
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            t.facts.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "flex flex-col gap-3",
                                children: t.facts.map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: `label text-[11px] tracking-[0.3em] ${accent.label}`,
                                                children: fact.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "max-w-[46ch] text-[15px] leading-snug text-ink-2",
                                                children: fact.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, fact.label, true, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label text-[12px] leading-[1.9] tracking-[0.22em] text-ink-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: [
                                            t.stackLabel,
                                            ": "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    t.stack.join(" · ")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 0.15,
                        className: "flex flex-col gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectIllustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectIllustration"], {
                                project: project,
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            project.architecture?.flow.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Flow, {
                                steps: project.architecture.flow,
                                color: accent.line,
                                ui: ui
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this) : null,
                            t.metrics ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Metrics, {
                                metrics: t.metrics,
                                color: accent.line
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 136,
                                columnNumber: 24
                            }, this) : null,
                            t.stages?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectStages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectStages"], {
                                stages: t.stages,
                                accent: project.accent,
                                project: t.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                                lineNumber: 137,
                                columnNumber: 31
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectStory.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectStory.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectStory.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects/accent.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCENT",
    ()=>ACCENT,
    "projectNumber",
    ()=>projectNumber
]);
const ACCENT = {
    amber: {
        label: "text-label-orange",
        line: "var(--label-orange)",
        glow: "rgba(255,138,43,0.14)"
    },
    pink: {
        label: "text-label-pink",
        line: "var(--label-pink)",
        glow: "rgba(255,127,174,0.12)"
    },
    blue: {
        label: "text-label-blue",
        line: "var(--label-blue)",
        glow: "rgba(110,149,255,0.14)"
    }
};
const projectNumber = (index)=>String(index + 1).padStart(2, "0");
}),
"[project]/src/components/projects/metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildLabMetadata",
    ()=>buildLabMetadata,
    "buildProjectMetadata",
    ()=>buildProjectMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-rsc] (ecmascript)");
;
;
function buildProjectMetadata(locale, project) {
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const t = project.text[locale];
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fmt"])(c.ui.projectMetaTitle, {
        project: t.title,
        name: c.name
    });
    const description = t.subtitle ? `${t.subtitle} — ${t.summary}` : t.summary;
    return {
        ...c.seo.siteUrl ? {
            metadataBase: new URL(c.seo.siteUrl)
        } : {},
        title,
        description,
        authors: [
            {
                name: c.name
            }
        ],
        alternates: {
            canonical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])(locale, project.slug),
            languages: {
                en: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])("en", project.slug),
                ar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])("ar", project.slug),
                "x-default": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectPath"])("en", project.slug)
            }
        },
        openGraph: {
            title,
            description,
            type: "article",
            locale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localeMeta"][locale].ogLocale,
            ...project.coverImage ? {
                images: [
                    project.coverImage.src
                ]
            } : {}
        },
        twitter: {
            card: "summary",
            title,
            description
        }
    };
}
function buildLabMetadata(locale) {
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][locale];
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fmt"])(c.ui.lab.metaTitle, {
        name: c.name
    });
    const description = c.ui.lab.subtitle;
    return {
        ...c.seo.siteUrl ? {
            metadataBase: new URL(c.seo.siteUrl)
        } : {},
        title,
        description,
        authors: [
            {
                name: c.name
            }
        ],
        alternates: {
            canonical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labPath"])(locale),
            languages: {
                en: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labPath"])("en"),
                ar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labPath"])("ar"),
                "x-default": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labPath"])("en")
            }
        },
        openGraph: {
            title,
            description,
            type: "website",
            locale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localeMeta"][locale].ogLocale
        },
        twitter: {
            card: "summary",
            title,
            description
        }
    };
}
}),
"[project]/src/components/sections/Sketches.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Notebook sketches for the About Me timeline — thin, slightly imperfect strokes, as if
 * drawn in an engineer's margin. Every stroke is a <path> so it can draw itself in, and
 * the wobble is seeded so server and client draw exactly the same lines.
 * Purely decorative: always hidden from assistive technology.
 */ __turbopack_context__.s([
    "SKETCHES",
    ()=>SKETCHES,
    "SketchSvg",
    ()=>SketchSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function seeded(seed) {
    let s = seed;
    return ()=>{
        s = s * 16807 % 2147483647;
        return (s - 1) / 2147483646;
    };
}
const f = (n)=>n.toFixed(1);
/** A hand-drawn line: one gentle bow and a tiny overshoot at the end. */ function line(a, b, rand, amp = 1.6) {
    const mx = (a[0] + b[0]) / 2 + (rand() - 0.5) * amp * 2;
    const my = (a[1] + b[1]) / 2 + (rand() - 0.5) * amp * 2;
    const ex = b[0] + (rand() - 0.5) * amp;
    const ey = b[1] + (rand() - 0.5) * amp;
    return `M${f(a[0])} ${f(a[1])} Q${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`;
}
/** A hand-drawn box made of four slightly bowed lines. */ function box(x1, y1, x2, y2, r, tone, w) {
    return [
        {
            d: line([
                x1,
                y1
            ], [
                x2,
                y1
            ], r),
            tone,
            w
        },
        {
            d: line([
                x2,
                y1
            ], [
                x2,
                y2
            ], r),
            tone,
            w
        },
        {
            d: line([
                x2,
                y2
            ], [
                x1,
                y2
            ], r),
            tone,
            w
        },
        {
            d: line([
                x1,
                y2
            ], [
                x1,
                y1
            ], r),
            tone,
            w
        }
    ];
}
/** A hand-drawn ellipse that doesn't quite close — the pen overshoots the start. */ function ellipse(cx, cy, rx, ry, rand, from = 0, sweep = 2.12) {
    const n = 22;
    const pts = [];
    for(let i = 0; i <= n; i++){
        const t = (from + i / n * sweep) * Math.PI;
        const j = 1 + (rand() - 0.5) * 0.06;
        pts.push([
            cx + Math.cos(t) * rx * j,
            cy + Math.sin(t) * ry * j
        ]);
    }
    let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
    for(let i = 1; i < pts.length - 1; i++){
        const mx = (pts[i][0] + pts[i + 1][0]) / 2;
        const my = (pts[i][1] + pts[i + 1][1]) / 2;
        d += ` Q${f(pts[i][0])} ${f(pts[i][1])} ${f(mx)} ${f(my)}`;
    }
    return d;
}
function dot(cx, cy, r = 2) {
    // Rounded so the server and the browser always write identical path data.
    return `M${f(cx - r)} ${f(cy)} a${r} ${r} 0 1 0 ${f(2 * r)} 0 a${r} ${r} 0 1 0 ${f(-2 * r)} 0`;
}
function arrow(a, b, r, tone = "ink") {
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const s = 6;
    const l = [
        b[0] - s * Math.cos(ang - 0.5),
        b[1] - s * Math.sin(ang - 0.5)
    ];
    const rr = [
        b[0] - s * Math.cos(ang + 0.5),
        b[1] - s * Math.sin(ang + 0.5)
    ];
    return [
        {
            d: line(a, b, r, 1.2),
            tone
        },
        {
            d: `M${f(l[0])} ${f(l[1])} L${f(b[0])} ${f(b[1])} L${f(rr[0])} ${f(rr[1])}`,
            tone
        }
    ];
}
function star(cx, cy, r) {
    const k = r * 0.18;
    return `M${cx} ${cy - r} Q${cx + k} ${cy - k} ${cx + r} ${cy} Q${cx + k} ${cy + k} ${cx} ${cy + r} Q${cx - k} ${cy + k} ${cx - r} ${cy} Q${cx - k} ${cy - k} ${cx} ${cy - r}`;
}
function question(x, y, s = 1) {
    return [
        `M${x} ${y} C${x} ${y - 9 * s} ${x + 11 * s} ${y - 10 * s} ${x + 11 * s} ${y - 2 * s} C${x + 11 * s} ${y + 4 * s} ${x + 5 * s} ${y + 4 * s} ${x + 5 * s} ${y + 10 * s}`,
        dot(x + 5 * s, y + 15 * s, 0.9)
    ];
}
function cylinder(cx, top, rx, h, r, tone) {
    return [
        {
            d: ellipse(cx, top, rx, rx * 0.32, r),
            tone
        },
        {
            d: line([
                cx - rx,
                top
            ], [
                cx - rx + 0.5,
                top + h
            ], r, 0.8),
            tone
        },
        {
            d: ellipse(cx, top + h, rx, rx * 0.32, r, 0, 1.05),
            tone
        },
        {
            d: line([
                cx + rx,
                top + h
            ], [
                cx + rx - 0.5,
                top
            ], r, 0.8),
            tone
        },
        {
            d: ellipse(cx, top + h * 0.5, rx, rx * 0.32, r, 0, 1.0),
            tone,
            w: 0.9
        }
    ];
}
/* ── One sketch per milestone ─────────────────────────────── */ /** 01 · A little computer with code on its screen, and a tiny circuit trace. */ function computer() {
    const r = seeded(3);
    return {
        viewBox: "0 0 210 120",
        strokes: [
            ...box(30, 12, 162, 86, r, "blue", 1.4),
            {
                d: "M78 38 L66 49 L78 60",
                tone: "orange",
                w: 1.6
            },
            {
                d: "M92 63 L102 35",
                tone: "pink",
                w: 1.6
            },
            {
                d: "M116 38 L128 49 L116 60",
                tone: "orange",
                w: 1.6
            },
            {
                d: line([
                    96,
                    86
                ], [
                    96,
                    100
                ], r, 0.6),
                tone: "ink"
            },
            {
                d: line([
                    74,
                    101
                ], [
                    120,
                    101
                ], r, 0.8),
                tone: "ink"
            },
            {
                d: line([
                    46,
                    112
                ], [
                    148,
                    112
                ], r, 1),
                tone: "ink",
                w: 1
            },
            {
                d: "M162 46 h14 v-18 h12",
                tone: "ink",
                w: 1
            },
            {
                d: dot(190, 28, 2.4),
                tone: "pink"
            },
            {
                d: "M162 62 h22 v14",
                tone: "ink",
                w: 1
            },
            {
                d: dot(184, 79, 2.4),
                tone: "blue"
            }
        ]
    };
}
/** 02 · A miniature application window connected to a database. */ function app() {
    const r = seeded(11);
    return {
        viewBox: "0 0 210 112",
        strokes: [
            ...box(8, 14, 120, 96, r, "pink", 1.4),
            {
                d: line([
                    8,
                    30
                ], [
                    120,
                    30
                ], r, 0.8),
                tone: "pink",
                w: 1
            },
            {
                d: dot(18, 22, 1.8),
                tone: "orange"
            },
            {
                d: dot(26, 22, 1.8),
                tone: "ink"
            },
            {
                d: dot(34, 22, 1.8),
                tone: "ink"
            },
            {
                d: line([
                    20,
                    46
                ], [
                    82,
                    46
                ], r, 0.6),
                tone: "ink",
                w: 1
            },
            {
                d: line([
                    20,
                    60
                ], [
                    104,
                    60
                ], r, 0.6),
                tone: "ink",
                w: 1
            },
            {
                d: line([
                    20,
                    74
                ], [
                    66,
                    74
                ], r, 0.6),
                tone: "ink",
                w: 1
            },
            {
                d: line([
                    76,
                    72
                ], [
                    104,
                    84
                ], r, 0.4),
                tone: "blue",
                w: 1
            },
            ...arrow([
                124,
                56
            ], [
                150,
                56
            ], r),
            ...cylinder(176, 32, 20, 46, r, "blue")
        ]
    };
}
/** 03 · Scattered points that settle into a recognisable trend. */ function scatter() {
    const r = seeded(23);
    const strokes = [
        {
            d: "M16 8 C15 40 17 80 16 104 C60 103 140 105 196 104",
            tone: "ink"
        }
    ];
    for(let i = 0; i < 16; i++){
        const x = 26 + i * 10.2;
        const y = 96 - Math.pow((x - 20) / 170, 1.5) * 76 + (r() - 0.5) * 22;
        strokes.push({
            d: dot(x, y, 2.2),
            tone: i % 5 === 0 ? "pink" : "blue",
            w: 1.2
        });
    }
    strokes.push({
        d: "M22 98 C70 92 120 68 192 22",
        tone: "orange",
        w: 1.7
    });
    return {
        viewBox: "0 0 210 114",
        strokes
    };
}
/** 04 · A data pipeline: database → API → processing → database. */ function pipeline() {
    const r = seeded(19);
    return {
        viewBox: "0 0 232 100",
        strokes: [
            ...cylinder(22, 26, 18, 46, r, "blue"),
            ...arrow([
                44,
                50
            ], [
                62,
                50
            ], r),
            ...box(68, 32, 110, 68, r, "pink"),
            ...arrow([
                114,
                50
            ], [
                132,
                50
            ], r),
            {
                d: ellipse(150, 50, 15, 15, r),
                tone: "orange",
                w: 1.4
            },
            {
                d: "M150 41 V59 M141 50 H159",
                tone: "orange",
                w: 1.1
            },
            ...arrow([
                168,
                50
            ], [
                186,
                50
            ], r),
            ...cylinder(208, 26, 17, 46, r, "orange")
        ],
        labels: [
            {
                x: 89,
                y: 54,
                text: "API",
                tone: "pink",
                size: 11
            }
        ]
    };
}
/** 05 · A miniature cloud architecture with storage and processing below. */ function cloud() {
    const r = seeded(31);
    return {
        viewBox: "0 0 180 118",
        strokes: [
            {
                d: "M44 52 C30 52 26 40 36 33 C36 19 56 15 64 24 C70 10 98 9 104 24 C114 17 132 24 129 38 C142 40 142 55 127 55 L46 55",
                tone: "blue",
                w: 1.5
            },
            {
                d: line([
                    66,
                    56
                ], [
                    52,
                    80
                ], r, 1),
                tone: "ink",
                w: 1
            },
            {
                d: line([
                    110,
                    56
                ], [
                    122,
                    80
                ], r, 1),
                tone: "ink",
                w: 1
            },
            ...cylinder(48, 84, 15, 24, r, "orange"),
            ...box(104, 82, 142, 110, r, "pink"),
            {
                d: "M112 100 l7 -9 l6 6 l9 -10",
                tone: "pink",
                w: 1.1
            },
            ...arrow([
                66,
                96
            ], [
                98,
                96
            ], r)
        ]
    };
}
/** 06 · A magnifying glass, question marks and a small spark. */ function curious() {
    const r = seeded(43);
    return {
        viewBox: "0 0 190 118",
        strokes: [
            {
                d: ellipse(62, 52, 30, 30, r, 0.1, 2.08),
                tone: "orange",
                w: 1.6
            },
            {
                d: ellipse(62, 52, 21, 21, r, 1.1, 0.4),
                tone: "orange",
                w: 1
            },
            {
                d: line([
                    84,
                    74
                ], [
                    114,
                    106
                ], r, 1),
                tone: "orange",
                w: 2.6
            },
            ...question(120, 30, 1.2).map((d)=>({
                    d,
                    tone: "pink",
                    w: 1.5
                })),
            ...question(156, 56, 0.8).map((d)=>({
                    d,
                    tone: "blue",
                    w: 1.2
                })),
            {
                d: star(168, 20, 10),
                tone: "orange",
                w: 1.3
            },
            {
                d: star(146, 92, 5),
                tone: "blue",
                w: 1.1
            }
        ]
    };
}
const SKETCHES = {
    computer,
    app,
    scatter,
    pipeline,
    cloud,
    curious
};
const TONE = {
    blue: "var(--label-blue)",
    pink: "var(--label-pink)",
    orange: "var(--label-orange)",
    ink: "var(--sketch-ink)"
};
function SketchSvg({ name, className = "" }) {
    const sketch = SKETCHES[name]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: sketch.viewBox,
        className: `sketch h-auto w-full overflow-visible ${className}`,
        "aria-hidden": "true",
        focusable: "false",
        children: [
            sketch.strokes.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: s.d,
                    pathLength: 1000,
                    fill: "none",
                    stroke: TONE[s.tone],
                    strokeWidth: s.w ?? 1.3,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: {
                        transitionDelay: `${0.15 + i * 0.06}s`
                    }
                }, i, false, {
                    fileName: "[project]/src/components/sections/Sketches.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)),
            sketch.labels?.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: l.x,
                    y: l.y,
                    textAnchor: "middle",
                    fontSize: l.size ?? 11,
                    className: "sketch-label",
                    style: {
                        fill: TONE[l.tone],
                        fontFamily: "var(--font-label)",
                        letterSpacing: "1.5px"
                    },
                    children: l.text
                }, l.text, false, {
                    fileName: "[project]/src/components/sections/Sketches.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Sketches.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/ArrowIcon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** A forward arrow; it points the reading direction (mirrored in right-to-left pages). */ __turbopack_context__.s([
    "ArrowIcon",
    ()=>ArrowIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ArrowIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "26",
        height: "12",
        viewBox: "0 0 26 12",
        className: `rtl:-scale-x-100 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 6h23M18 1l5 5-5 5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.6",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ArrowIcon.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ArrowIcon.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/KaggleIcon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A small line-drawn dataset glyph used beside Kaggle links (same stroke style as ArrowIcon).
 * To use Kaggle's official mark instead, swap this path for the one in Kaggle's brand assets.
 */ __turbopack_context__.s([
    "KaggleIcon",
    ()=>KaggleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function KaggleIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "7",
                    cy: "3.2",
                    rx: "5.6",
                    ry: "2.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/KaggleIcon.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1.4 3.2v9.6c0 1.2 2.5 2.2 5.6 2.2s5.6-1 5.6-2.2V3.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/KaggleIcon.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1.4 8c0 1.2 2.5 2.2 5.6 2.2s5.6-1 5.6-2.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/KaggleIcon.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/KaggleIcon.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/KaggleIcon.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Reveal() from the server but Reveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/Reveal.tsx", "Reveal");
}),
"[project]/src/components/ui/Reveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(en)/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(en)/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1v2asnf_gaqui._.js.map