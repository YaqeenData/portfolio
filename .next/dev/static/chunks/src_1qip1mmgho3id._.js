(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/i18n/LocaleProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useContent",
    ()=>useContent,
    "useLocale",
    ()=>useLocale,
    "usePageInfo",
    ()=>usePageInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const PageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    locale: "en",
    alternatePath: "/ar",
    onHome: true
});
function LocaleProvider({ locale, alternatePath, onHome = true, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContext.Provider, {
        value: {
            locale,
            alternatePath,
            onHome
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/i18n/LocaleProvider.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c = LocaleProvider;
function useLocale() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PageContext).locale;
}
_s(useLocale, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function usePageInfo() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PageContext);
}
_s1(usePageInfo, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useContent() {
    _s2();
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PageContext).locale];
}
_s2(useContent, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "LocaleProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header() {
    _s();
    const site = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const { ui } = site;
    const { locale, onHome } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInfo"])();
    // On the homepage, sections are plain anchors; elsewhere they lead back to the homepage.
    const sectionHref = (id)=>onHome ? `#${id}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homePath"])(locale, `#${id}`);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overviewOpen, setOverviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resumeHref = site.contact.resume ?? sectionHref("contact");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!menuOpen) return;
            function onKey(e) {
                if (e.key === "Escape") {
                    setMenuOpen(false);
                    menuButton.current?.focus();
                }
            }
            window.addEventListener("keydown", onKey);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen
    ]);
    function openOverview() {
        setMenuOpen(false);
        setOverviewOpen(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 border-b border-line bg-[var(--header-bg)] backdrop-blur-xl transition-colors duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3.5 sm:px-10 xl:px-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: onHome ? "#top" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homePath"])(locale),
                                className: "flex flex-col gap-0.5 no-underline",
                                onClick: ()=>setMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-brand-name": true,
                                        className: "brand-name whitespace-nowrap font-display text-[19px] text-ink sm:text-[22px]",
                                        children: site.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label text-[10px] tracking-[0.32em] text-accent sm:text-[11px]",
                                        children: site.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": ui.primaryNav,
                                className: "hidden xl:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex gap-10",
                                    children: site.nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: sectionHref(item.id),
                                                className: "label text-[14px] tracking-[0.24em] text-ink-2 no-underline transition-colors hover:text-accent",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openOverview,
                                        className: "btn btn-secondary btn-sm hidden cursor-pointer md:inline-flex",
                                        children: ui.overview
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: resumeHref,
                                        className: "btn btn-secondary btn-sm hidden sm:inline-flex",
                                        children: ui.resume
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: menuButton,
                                        type: "button",
                                        "aria-expanded": menuOpen,
                                        "aria-controls": "mobile-menu",
                                        "aria-label": menuOpen ? ui.closeMenu : ui.openMenu,
                                        onClick: ()=>setMenuOpen((v)=>!v),
                                        className: "btn-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full xl:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            width: "20",
                                            height: "14",
                                            viewBox: "0 0 20 14",
                                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 1l14 12M17 1L3 13",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 2h18M7 12h12",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        id: "mobile-menu",
                        "aria-label": ui.sectionsNav,
                        hidden: !menuOpen,
                        className: "border-t border-line bg-[var(--header-bg)] px-6 pb-6 backdrop-blur-xl xl:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: site.nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "border-b border-line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: sectionHref(item.id),
                                            onClick: ()=>setMenuOpen(false),
                                            className: "flex items-center justify-between py-4 no-underline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-[24px] text-ink",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "inline-block text-pink rtl:-scale-x-100",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openOverview,
                                        className: "btn btn-secondary w-full cursor-pointer",
                                        children: ui.overview
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: resumeHref,
                                        onClick: ()=>setMenuOpen(false),
                                        className: "btn btn-primary w-full sm:hidden",
                                        children: ui.resume
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overview"], {
                open: overviewOpen,
                onClose: ()=>setOverviewOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Header, "JA4XkIH6qstrtbEzLZYBX79lq4w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInfo"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LanguageToggle() {
    _s();
    const { locale, alternatePath: href, onHome } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInfo"])();
    const { ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const other = locale === "en" ? "ar" : "en";
    function go(e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        try {
            localStorage.setItem("lang", other);
        } catch  {
        /* storage unavailable — the switch still works for this visit */ }
        // Keep the visitor's place: the last section whose top has passed the upper third.
        let hash = "";
        if (onHome && window.scrollY > 200) {
            const line = window.innerHeight * 0.35;
            for (const section of document.querySelectorAll("main section[id]")){
                if (section.getBoundingClientRect().top <= line) hash = `#${section.id}`;
            }
        }
        // Elsewhere, keep the page's options (e.g. the Project Lab's ?category=).
        window.location.assign(href + (onHome ? hash : window.location.search));
    }
    const en = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        lang: "en",
        className: locale === "en" ? "lang-current" : "lang-other",
        children: "EN"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
    const ar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        lang: "ar",
        className: `lang-ar ${locale === "ar" ? "lang-current" : "lang-other"}`,
        children: "عربي"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        hrefLang: other,
        lang: other,
        onClick: go,
        "aria-label": ui.language.otherLabel,
        dir: "ltr",
        className: "lang-toggle btn-secondary inline-flex h-[46px] min-w-[46px] shrink-0 items-center justify-center gap-2 rounded-full px-1.5 no-underline sm:px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "sm:hidden",
                children: locale === "en" ? ar : en
            }, void 0, false, {
                fileName: "[project]/src/components/layout/LanguageToggle.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "hidden items-center gap-2 sm:inline-flex",
                children: [
                    en,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-sep",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    ar
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/LanguageToggle.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "JuNZBCSQlR4ttV/yCX7Oqj8SKrs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInfo"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overview",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Type.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$KaggleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/KaggleIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Overview({ open, onClose }) {
    _s();
    const site = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const { locale, onHome } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInfo"])();
    const { ui } = site;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Overview.useEffect": ()=>{
            const dialog = ref.current;
            if (!dialog) return;
            if (open && !dialog.open) dialog.showModal();
            if (!open && dialog.open) dialog.close();
        }
    }["Overview.useEffect"], [
        open
    ]);
    const { overview, path, beyond, contact } = site;
    const { education, certifications } = path.credentials;
    const fluent = beyond.languages.filter((l)=>l.status === "fluent").map((l)=>l.name);
    const learning = beyond.languages.filter((l)=>l.status === "learning").map((l)=>l.name);
    const links = [
        {
            label: ui.downloadResume,
            href: contact.resume,
            primary: true
        },
        {
            label: ui.linkedin,
            href: contact.linkedin
        },
        {
            label: ui.github,
            href: contact.github
        },
        {
            label: ui.kaggle,
            href: contact.kaggle,
            icon: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: ref,
        "aria-labelledby": "overview-title",
        onClose: onClose,
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        className: "overview m-auto w-[min(960px,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[32px] p-0 text-ink",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-8 p-7 sm:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label text-[12px] tracking-[0.32em] text-accent",
                                    children: ui.overviewKicker
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "overview-title",
                                    className: "mt-2 font-display text-[clamp(2rem,4vw,2.625rem)] font-normal",
                                    children: site.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[17px] text-ink-2",
                                    children: [
                                        site.role,
                                        " · ",
                                        site.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            "aria-label": ui.closeOverview,
                            className: "btn-secondary flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                "aria-hidden": "true",
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 1l12 12M13 1L1 13",
                                    stroke: "currentColor",
                                    strokeWidth: "1.6",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Overview.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Overview.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid gap-x-12 gap-y-7 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.focus
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: overview.focus.join(" · ")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.coreStack
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: overview.coreStack.join(" · ")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.projects
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "flex flex-col gap-1 text-[16px] leading-relaxed",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featuredProjects"])().map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectPath"])(locale, p.slug),
                                            className: "no-underline hover:text-accent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "font-semibold",
                                                    children: p.text[locale].title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                " — ",
                                                p.text[locale].subtitle ?? p.text[locale].summary
                                            ]
                                        }, p.slug, true, {
                                            fileName: "[project]/src/components/layout/Overview.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.experience
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "flex flex-col gap-1 text-[16px] leading-relaxed",
                                    children: [
                                        ...path.experience
                                    ].reverse().map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                job.role,
                                                " — ",
                                                job.org.split(" — ")[0],
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ink-3",
                                                    children: [
                                                        "· ",
                                                        job.dates
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, job.role, true, {
                                            fileName: "[project]/src/components/layout/Overview.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.education
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: [
                                        education.degree,
                                        " — ",
                                        education.school,
                                        " · ",
                                        education.notes[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-ink-3",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(ui.credentialsSummary, {
                                                certs: certifications.length,
                                                camps: path.credentials.training.length
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Overview.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.languages
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: [
                                        fluent.join(locale === "ar" ? "، " : ", "),
                                        " · ",
                                        ui.learningPrefix,
                                        " ",
                                        learning.join(locale === "ar" ? "، " : ", ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Overview.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:flex-wrap sm:items-center",
                    children: [
                        links.map((link)=>link.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: `btn btn-sm ${link.primary ? "btn-primary" : "btn-secondary"}`,
                                children: [
                                    link.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$KaggleIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KaggleIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Overview.tsx",
                                        lineNumber: 124,
                                        columnNumber: 30
                                    }, this) : null,
                                    link.label
                                ]
                            }, link.label, true, {
                                fileName: "[project]/src/components/layout/Overview.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex min-h-11 items-center rounded-full border border-dashed border-[var(--line-strong)] px-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Missing"], {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(ui.linkMissing, {
                                        label: link.label
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this)
                            }, link.label, false, {
                                fileName: "[project]/src/components/layout/Overview.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: onHome ? "#projects" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["homePath"])(locale, "#projects"),
                            onClick: onClose,
                            className: "label text-[13px] tracking-[0.24em] text-italic no-underline sm:ms-auto",
                            children: [
                                ui.jumpToProjects,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "inline-block rtl:-scale-x-100",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Overview.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Overview.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Overview.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Overview, "DH1QoMDd7AxwqjRlLsfJL9GI/Lo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageInfo"]
    ];
});
_c = Overview;
var _c;
__turbopack_context__.k.register(_c, "Overview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle({ size = 46 }) {
    _s();
    const { ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMode(document.documentElement.dataset.theme === "twilight" ? "twilight" : "night");
        }
    }["ThemeToggle.useEffect"], []);
    function toggle() {
        const next = document.documentElement.dataset.theme === "twilight" ? "night" : "twilight";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch  {
        /* storage unavailable — the choice still applies for this visit */ }
        setMode(next);
    }
    const label = mode === null ? ui.themeToggle : mode === "night" ? ui.themeToTwilight : ui.themeToNight;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": label,
        "aria-pressed": mode === null ? undefined : mode === "twilight",
        className: "theme-toggle relative shrink-0 cursor-pointer overflow-hidden rounded-full p-0",
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            viewBox: "0 0 68 68",
            width: size,
            height: size,
            className: "block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "tt-day",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#FFF5EE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.7",
                                    stopColor: "#FFC9A8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFA3BA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "tt-night",
                            cx: "50%",
                            cy: "30%",
                            r: "70%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#1C3478"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#0C1740"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "68",
                    height: "68",
                    fill: "url(#tt-night)",
                    className: "only-night"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "68",
                    height: "68",
                    fill: "url(#tt-day)",
                    className: "only-twilight"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "only-night",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: "22",
                            r: "1.3",
                            fill: "#C9D4FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "14",
                            r: "1.1",
                            fill: "#C9D4FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "54",
                            cy: "30",
                            r: "1.1",
                            fill: "#C9D4FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "34",
                            cy: "45",
                            rx: "16",
                            ry: "5",
                            fill: "#FF8A2B",
                            opacity: "0.35"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "tt-moon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "34",
                            cy: "25",
                            r: "13",
                            fill: "#6E95FF",
                            opacity: "0.18"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M37 15a10 10 0 1 0 6 17a8 8 0 0 1-6-17z",
                            fill: "#EEF2FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "tt-sun",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "34",
                            cy: "25",
                            r: "13",
                            fill: "#FF8A2B",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "34",
                            cy: "25",
                            r: "8.5",
                            fill: "#FF8A2B"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "tt-clouds",
                    fill: "#FFFFFF",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "17",
                            cy: "19",
                            rx: "7",
                            ry: "3.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "14.5",
                            cy: "17.2",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "19",
                            cy: "16",
                            r: "3.7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "49",
                            cy: "34",
                            rx: "8",
                            ry: "3.4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "46",
                            cy: "32",
                            r: "3.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "51",
                            cy: "31",
                            r: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "44",
                    width: "68",
                    height: "24",
                    fill: "#0C1740",
                    className: "only-night"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "44",
                    width: "68",
                    height: "24",
                    fill: "#FFE2D2",
                    className: "only-twilight"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 44h44",
                    stroke: "#6E95FF",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    className: "only-night"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 44h44",
                    stroke: "#1F4FD8",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    className: "only-twilight"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ThemeToggle.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "pNeAjNQsAbjrouEMpRQrRM1SNSM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/KaggleIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A small line-drawn dataset glyph used beside Kaggle links (same stroke style as ArrowIcon).
 * To use Kaggle's official mark instead, swap this path for the one in Kaggle's brand assets.
 */ __turbopack_context__.s([
    "KaggleIcon",
    ()=>KaggleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function KaggleIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "14",
        height: "16",
        viewBox: "0 0 14 16",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "7",
                    cy: "3.2",
                    rx: "5.6",
                    ry: "2.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/KaggleIcon.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1.4 3.2v9.6c0 1.2 2.5 2.2 5.6 2.2s5.6-1 5.6-2.2V3.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/KaggleIcon.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = KaggleIcon;
var _c;
__turbopack_context__.k.register(_c, "KaggleIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Type.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChapterLabel",
    ()=>ChapterLabel,
    "Headline",
    ()=>Headline,
    "Missing",
    ()=>Missing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ChapterLabel({ numeral, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `label text-[13px] font-medium tracking-[0.34em] text-accent sm:text-[14px] ${className}`,
        children: [
            numeral ? `${numeral} · ` : "",
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Type.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ChapterLabel;
function Headline({ content, as: Tag = "h2", id, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: `font-display font-normal text-ink ${className}`,
        children: [
            content.lead,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                className: "font-italic font-normal italic text-italic",
                children: content.emphasis
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Type.tsx",
                lineNumber: 35,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Type.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = Headline;
function Missing({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `label text-[12px] tracking-[0.22em] text-placeholder ${className}`,
        children: [
            "[ ",
            children,
            " ]"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Type.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c2 = Missing;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ChapterLabel");
__turbopack_context__.k.register(_c1, "Headline");
__turbopack_context__.k.register(_c2, "Missing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "content",
    ()=>content,
    "localeMeta",
    ()=>localeMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ar.ts [app-client] (ecmascript)");
;
;
const content = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteAr"]
};
const localeMeta = {
    en: {
        dir: "ltr",
        path: "/",
        ogLocale: "en_US"
    },
    ar: {
        dir: "rtl",
        path: "/ar",
        ogLocale: "ar_SA"
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "availableResources",
    ()=>availableResources,
    "categoryLabels",
    ()=>categoryLabels,
    "featuredProjects",
    ()=>featuredProjects,
    "getProject",
    ()=>getProject,
    "homePath",
    ()=>homePath,
    "labPath",
    ()=>labPath,
    "neighbours",
    ()=>neighbours,
    "projectPath",
    ()=>projectPath,
    "projects",
    ()=>projects,
    "sortedProjects",
    ()=>sortedProjects
]);
const categoryLabels = {
    "data-engineering": {
        en: "Data Engineering",
        ar: "هندسة البيانات"
    },
    "data-quality": {
        en: "Data Quality",
        ar: "جودة البيانات"
    },
    "data-science": {
        en: "Data Science",
        ar: "علم البيانات"
    },
    "ai-ml": {
        en: "AI / ML",
        ar: "الذكاء الاصطناعي"
    },
    analytics: {
        en: "Analytics",
        ar: "التحليلات"
    },
    cloud: {
        en: "Cloud",
        ar: "السحابة"
    },
    streaming: {
        en: "Streaming",
        ar: "البث اللحظي"
    },
    software: {
        en: "Software",
        ar: "البرمجيات"
    }
};
const projects = [
    // ── Engineering ─────────────────────────────────────────────
    {
        slug: "bayan",
        type: "engineering",
        order: 1,
        featured: true,
        spotlight: true,
        categories: [
            "data-engineering"
        ],
        accent: "amber",
        illustration: "archive",
        technologies: [
            "Python",
            "Airflow",
            "PostgreSQL",
            "Docker"
        ],
        architecture: {
            flow: [
                "BOE",
                "Bronze",
                "Silver",
                "Gold",
                "Power BI"
            ]
        },
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
                overview: "Bayan transforms Saudi regulatory information into structured, version-aware datasets to support regulation exploration and historical analysis.",
                facts: [
                    {
                        label: "Context",
                        value: "Collaborative capstone developed during the Saudi Digital Academy Data Engineering Bootcamp."
                    }
                ],
                stages: [
                    {
                        name: "Collect",
                        detail: "Extract regulatory information from the Saudi Bureau of Experts using Python and preserve raw data in S3-compatible object storage."
                    },
                    {
                        name: "Structure",
                        detail: "Transform raw regulations into relational PostgreSQL entities representing laws, chapters, articles, and their relationships."
                    },
                    {
                        name: "Version",
                        detail: "Use dedicated version tables to preserve regulation and article history, ensuring historical traceability."
                    },
                    {
                        name: "Analyze",
                        detail: "Prepare curated regulatory datasets for reporting and exploration through Power BI."
                    }
                ],
                stackLabel: "Stack",
                stack: [
                    "Python",
                    "Apache Airflow",
                    "PostgreSQL",
                    "Docker",
                    "SeaweedFS",
                    "FastAPI",
                    "Power BI"
                ]
            },
            ar: {
                title: "بيان",
                altName: "Bayan",
                altLang: "en",
                subtitle: "منصة بيانات الأنظمة والقرارات السعودية",
                category: "معمارية البيانات / ETL",
                summary: "تحويل الأنظمة السعودية إلى بيانات منظّمة تحفظ إصداراتها، لتحليلٍ يمكن الاعتماد عليه.",
                problem: "الوصول إلى النظام سهل، لكن تتبّع تغيّره عبر الزمن مشكلة مختلفة تمامًا.",
                overview: "يحوّل «بيان» المعلومات التنظيمية السعودية إلى بيانات منظّمة تحفظ إصدارات كل نظام، لتسهيل استكشاف الأنظمة وتحليل تطوّرها.",
                facts: [
                    {
                        label: "السياق",
                        value: "مشروع تخرّج جماعي ضمن معسكر هندسة البيانات في الأكاديمية السعودية الرقمية."
                    }
                ],
                stages: [
                    {
                        name: "الجمع",
                        detail: "استخراج بيانات الأنظمة من هيئة الخبراء بمجلس الوزراء باستخدام Python، وحفظ البيانات الخام كما هي في Object Storage متوافق مع S3."
                    },
                    {
                        name: "الهيكلة",
                        detail: "تحويل النصوص الخام إلى كيانات علائقية في PostgreSQL تمثّل الأنظمة والفصول والمواد والعلاقات بينها."
                    },
                    {
                        name: "الإصدارات",
                        detail: "جداول مخصّصة للإصدارات تحفظ تاريخ كل نظام وكل مادة، فيبقى أي تعديل قابلًا للتتبّع."
                    },
                    {
                        name: "التحليل",
                        detail: "تجهيز مجموعات بيانات منقّحة للتقارير والاستكشاف عبر Power BI."
                    }
                ],
                stackLabel: "التقنيات",
                stack: [
                    "Python",
                    "Apache Airflow",
                    "PostgreSQL",
                    "Docker",
                    "SeaweedFS",
                    "FastAPI",
                    "Power BI"
                ]
            }
        }
    },
    {
        slug: "sentinel",
        type: "engineering",
        order: 2,
        featured: true,
        categories: [
            "data-quality",
            "data-engineering"
        ],
        accent: "pink",
        illustration: "watch",
        technologies: [
            "Python",
            "FHIR",
            "PostgreSQL",
            "Cloud Storage"
        ],
        resources: {},
        text: {
            en: {
                title: "Sentinel",
                subtitle: "Healthcare Data Observability",
                category: "Data Quality / Observability",
                summary: "Exploring how to detect silent data quality failures in healthcare data pipelines.",
                problem: "The pipeline is green. But is the data healthy?",
                overview: "Sentinel explores how data pipelines can run successfully while silently delivering unreliable data, using synthetic healthcare records to investigate data quality and observability.",
                facts: [
                    {
                        label: "My role",
                        value: "Technical Lead & Data Engineer"
                    },
                    {
                        label: "Context",
                        value: "Data engineering observability project built on synthetic healthcare data."
                    }
                ],
                stages: [
                    {
                        name: "Stream",
                        detail: "Generate synthetic healthcare records using Synthea and FHIR, then ingest them into a controlled data pipeline."
                    },
                    {
                        name: "Quality",
                        detail: "Profile incoming records and establish quality baselines for missing values, consistency, and record volumes."
                    },
                    {
                        name: "Drift",
                        detail: "Introduce null spikes, type changes, and volume drops to evaluate data quality detection behavior."
                    },
                    {
                        name: "Schema",
                        detail: "Track structural changes and organize quality metrics, schema history, and detected incidents."
                    }
                ],
                contributions: {
                    title: "Beyond the Pipeline: Leading the Team",
                    intro: "I lead Sentinel's development while contributing directly to its engineering.",
                    engineering: "Data ingestion, cloud storage, pipeline implementation, data quality, and technical problem-solving.",
                    leadership: "Project planning, team coordination, task management, communication, and technical decision-making.",
                    abilities: [
                        "Leadership",
                        "Adaptability",
                        "Problem solving",
                        "Communication",
                        "Collaboration",
                        "Initiative"
                    ],
                    converge: "Sentinel"
                },
                stackLabel: "Technology areas",
                stack: [
                    "Python",
                    "Synthea",
                    "FHIR",
                    "Cloud storage",
                    "PostgreSQL",
                    "Streaming",
                    "Data quality"
                ]
            },
            ar: {
                title: "Sentinel",
                subtitle: "مراقبة موثوقية البيانات الصحية",
                category: "جودة البيانات ومراقبتها",
                summary: "كيف نرصد أعطال جودة البيانات الصامتة في خطوط البيانات الصحية.",
                problem: "خط البيانات يعمل بلا أخطاء، لكن هل البيانات نفسها سليمة؟",
                overview: "يدرس Sentinel كيف يمكن لخط بيانات أن يعمل بنجاح في الظاهر، بينما يمرّر بيانات غير موثوقة دون أن يلاحظ أحد. ويعتمد على سجلات صحية اصطناعية لاختبار جودة البيانات ومراقبتها.",
                facts: [
                    {
                        label: "دوري",
                        value: "قائدة تقنية ومهندسة بيانات"
                    },
                    {
                        label: "السياق",
                        value: "مشروع لمراقبة جودة البيانات، مبني على بيانات صحية اصطناعية."
                    }
                ],
                stages: [
                    {
                        name: "البث",
                        detail: "توليد سجلات صحية اصطناعية بمعيار FHIR باستخدام Synthea، ثم إدخالها في خط بيانات مضبوط."
                    },
                    {
                        name: "الجودة",
                        detail: "تحليل السجلات الواردة، وبناء خط أساس للجودة يشمل القيم المفقودة، والاتساق، وأحجام السجلات."
                    },
                    {
                        name: "الانحراف",
                        detail: "افتعال ارتفاع مفاجئ في القيم الفارغة، وتغيير أنواع البيانات، وانخفاض في الحجم؛ لاختبار قدرة النظام على رصدها."
                    },
                    {
                        name: "المخطط",
                        detail: "تتبّع التغيّرات في بنية البيانات (Schema)، وتنظيم مقاييس الجودة وسجلّ التغييرات والحوادث المرصودة."
                    }
                ],
                contributions: {
                    title: "أبعد من خط البيانات: قيادة الفريق",
                    intro: "أقود تطوير Sentinel، وأشارك بنفسي في بنائه الهندسي.",
                    engineering: "إدخال البيانات، والتخزين السحابي، وبناء خطوط البيانات، وضمان جودتها، وحل المشكلات التقنية.",
                    leadership: "تخطيط المشروع، وتنسيق عمل الفريق، وإدارة المهام، والتواصل، واتخاذ القرارات التقنية.",
                    abilities: [
                        "القيادة",
                        "المرونة",
                        "حل المشكلات",
                        "التواصل",
                        "العمل الجماعي",
                        "المبادرة"
                    ],
                    converge: "Sentinel"
                },
                stackLabel: "مجالات تقنية",
                stack: [
                    "Python",
                    "Synthea",
                    "FHIR",
                    "Cloud Storage",
                    "PostgreSQL",
                    "Streaming",
                    "جودة البيانات"
                ]
            }
        }
    },
    {
        slug: "najm",
        type: "engineering",
        order: 3,
        featured: true,
        status: "prototype",
        categories: [
            "ai-ml",
            "software"
        ],
        accent: "blue",
        illustration: "sky",
        technologies: [
            "Python",
            "YOLOv5m",
            "Flask",
            "Flutter"
        ],
        resources: {},
        text: {
            en: {
                title: "Najm",
                altName: "نجم",
                altLang: "ar",
                subtitle: "AI-Powered Accident Detection & Reporting",
                category: "Computer Vision / AI",
                summary: "An AI-assisted accident reporting prototype combining computer vision, backend services, and a mobile application.",
                problem: "What if accident reporting could begin before anyone makes a call?",
                overview: "An AI-assisted accident reporting prototype combining computer vision, drone imagery, backend services, and a mobile application.",
                facts: [
                    {
                        label: "Recognition",
                        value: "Third Place — CCSIT Graduation Projects, King Faisal University, 2024"
                    },
                    {
                        label: "Type",
                        value: "Academic capstone prototype · Najm Accident Reporting System"
                    }
                ],
                stages: [
                    {
                        name: "Capture",
                        detail: "Explore the use of drone imagery to gather visual information about road incidents."
                    },
                    {
                        name: "Detect",
                        detail: "Use YOLOv5m to identify objects and accident-related scenes through computer vision."
                    },
                    {
                        name: "Integrate",
                        detail: "Connect the detection model to backend services using Flask and MySQL."
                    },
                    {
                        name: "Report",
                        detail: "Use a Flutter application to demonstrate an AI-assisted accident reporting workflow."
                    }
                ],
                metrics: {
                    label: "Overall model evaluation",
                    note: "Overall model metrics across all classes — not accident-class performance.",
                    values: [
                        {
                            label: "Precision",
                            value: "0.772"
                        },
                        {
                            label: "Recall",
                            value: "0.798"
                        },
                        {
                            label: "mAP@50",
                            value: "0.799"
                        }
                    ]
                },
                stackLabel: "Stack",
                stack: [
                    "Python",
                    "YOLOv5m",
                    "Flask",
                    "MySQL",
                    "Flutter",
                    "Computer vision"
                ]
            },
            ar: {
                title: "نجم",
                altName: "Najm",
                altLang: "en",
                subtitle: "رصد الحوادث والإبلاغ عنها بالذكاء الاصطناعي",
                category: "الرؤية الحاسوبية / الذكاء الاصطناعي",
                summary: "نموذج أولي للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي، يجمع بين الرؤية الحاسوبية وخدمات Backend وتطبيق جوّال.",
                problem: "ماذا لو بدأ الإبلاغ عن الحادث قبل أن يتصل أحد؟",
                overview: "نموذج أولي للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي، يجمع بين الرؤية الحاسوبية وصور الطائرات المسيّرة وخدمات Backend وتطبيق جوّال.",
                facts: [
                    {
                        label: "الإنجاز",
                        value: "المركز الثالث في مشاريع التخرج بكلية علوم الحاسب وتقنية المعلومات (CCSIT)، جامعة الملك فيصل، 2024"
                    },
                    {
                        label: "النوع",
                        value: "نموذج أولي أكاديمي (مشروع تخرّج) · نظام نجم للإبلاغ عن الحوادث"
                    }
                ],
                stages: [
                    {
                        name: "الالتقاط",
                        detail: "استكشاف استخدام صور الطائرات المسيّرة لجمع معلومات بصرية عن حوادث الطرق."
                    },
                    {
                        name: "الرصد",
                        detail: "استخدام YOLOv5m للتعرّف على الأجسام والمشاهد المرتبطة بالحوادث."
                    },
                    {
                        name: "الربط",
                        detail: "ربط نموذج الرصد بخدمات Backend مبنية بـ Flask وMySQL."
                    },
                    {
                        name: "الإبلاغ",
                        detail: "تطبيق Flutter يعرض سير عمل للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي."
                    }
                ],
                metrics: {
                    label: "التقييم العام للنموذج",
                    note: "مقاييس عامة للنموذج على جميع الفئات، وليست أداءه في فئة الحوادث تحديدًا.",
                    values: [
                        {
                            label: "Precision",
                            value: "0.772"
                        },
                        {
                            label: "Recall",
                            value: "0.798"
                        },
                        {
                            label: "mAP@50",
                            value: "0.799"
                        }
                    ]
                },
                stackLabel: "التقنيات",
                stack: [
                    "Python",
                    "YOLOv5m",
                    "Flask",
                    "MySQL",
                    "Flutter",
                    "الرؤية الحاسوبية"
                ]
            }
        }
    }
];
function sortedProjects() {
    return [
        ...projects
    ].sort((a, b)=>a.order - b.order);
}
function featuredProjects() {
    return sortedProjects().filter((p)=>p.featured);
}
function labPath(locale) {
    return `${locale === "ar" ? "/ar" : ""}/projects`;
}
function getProject(slug) {
    return projects.find((p)=>p.slug === slug);
}
function projectPath(locale, slug) {
    return `${locale === "ar" ? "/ar" : ""}/projects/${slug}`;
}
function homePath(locale, hash = "") {
    const base = locale === "ar" ? "/ar" : "/";
    return hash ? `${base}${hash}` : base;
}
function neighbours(slug) {
    const list = sortedProjects();
    const i = list.findIndex((p)=>p.slug === slug);
    return {
        previous: i > 0 ? list[i - 1] : undefined,
        next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined
    };
}
function availableResources(resources) {
    const keys = [
        "caseStudy",
        "demo",
        "github",
        "kaggle",
        "presentation"
    ];
    return keys.flatMap((key)=>{
        const href = resources?.[key]?.trim();
        return href ? [
            {
                key,
                href
            }
        ] : [];
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/site.ar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteAr",
    ()=>siteAr
]);
/**
 * Arabic resource — the same shape as `site.ts` (enforced by the `Content` type).
 * Written as original Arabic copy, not a translation: Modern Standard Arabic with a
 * contemporary Saudi professional tone, first person, feminine voice.
 * Official names, certification titles and technical terms stay in English where that is
 * how they are used in practice. Links and other shared values come from `site.ts`, so they
 * only ever need editing in one place.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-client] (ecmascript)");
;
const siteAr = {
    name: "يقين الحلال",
    role: "مهندسة بيانات",
    location: "المملكة العربية السعودية",
    philosophy: [
        "جمع",
        "هندسة",
        "بناء"
    ],
    seo: {
        title: "يقين الحلال | مهندسة بيانات",
        description: "مهندسة بيانات يحرّكها الفضول، تجمع البيانات وتهندسها لتبني منها حلولًا ذات قيمة.",
        siteUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].seo.siteUrl
    },
    nav: [
        {
            id: "projects",
            label: "المشاريع"
        },
        {
            id: "expertise",
            label: "المهارات"
        },
        {
            id: "path",
            label: "المسيرة"
        },
        {
            id: "contact",
            label: "تواصل"
        }
    ],
    // ── Prologue ───────────────────────────────────────────────
    hero: {
        eyebrow: [
            "يقين الحلال",
            "مهندسة بيانات"
        ],
        headline: {
            line1: "أُهندس البيانات،",
            line2Lead: "وأبني بها",
            line2Emphasis: "حلولًا جديدة."
        },
        intro: "مهندسة بيانات يحرّكني الفضول؛ أجمع البيانات وأهندسها لأبني منها حلولًا ذات قيمة. تستهويني التحديات المعقدة، وأتعلّم بسرعة، وأستمتع باكتشاف المشكلات التي تستحق أن تُحلّ بالبيانات.",
        primaryCta: {
            label: "استعرض مشاريعي",
            href: "#projects"
        },
        secondaryCta: {
            label: "تعرّف عليّ",
            href: "#curiosity"
        }
    },
    // ── I · Curiosity ──────────────────────────────────────────
    curiosity: {
        label: "الفضول",
        statement: {
            lead: "تشدّني المشكلات التي",
            emphasis: "تستحق حلًا هندسيًا."
        },
        journey: [
            {
                chapter: "البداية",
                title: "علوم الحاسب",
                place: "جامعة الملك فيصل",
                when: "2019 – 2024",
                line: "هنا بدأ فضولي بالتقنية والبرمجيات، وبفهم الأنظمة المعقدة من الداخل.",
                sketch: "computer"
            },
            {
                chapter: "الاكتشاف",
                title: "متدرّبة في تطوير البرمجيات",
                place: "جامعة الملك فيصل — عمادة تقنية المعلومات",
                when: "2024",
                line: "عرّفتني تجربة بناء البرمجيات على الهندسة في بيئة حقيقية، ومنها اكتشفت شغفي بالبيانات.",
                sketch: "app"
            },
            {
                chapter: "الاستكشاف",
                title: "علم البيانات وتعلّم الآلة",
                place: "أكاديمية طويق",
                when: "يناير – مارس 2025",
                line: "تعلّمت كيف تكشف البيانات الأنماط، وتُبنى عليها التنبؤات، وتُحلّ بها المشكلات المعقدة.",
                sketch: "scatter"
            },
            {
                chapter: "من الفضول إلى التطبيق",
                title: "متدرّبة في هندسة البيانات",
                place: "الهيئة السعودية للتخصصات الصحية",
                when: "أكتوبر 2025 – مايو 2026",
                line: "هنا تحوّل الشغف إلى عمل هندسي فعلي: خطوط بيانات، وواجهات API آمنة، وجودة بيانات، وتكامل بين الأنظمة.",
                sketch: "pipeline",
                prime: true
            },
            {
                chapter: "التوسّع",
                title: "الحوسبة السحابية وهندسة البيانات",
                place: "الأكاديمية السعودية الرقمية",
                when: "أغسطس – أكتوبر 2026",
                line: "عمّقت خبرتي في البنية السحابية، وتنسيق سير العمل، وبناء خطوط البيانات من المصدر حتى التحليل.",
                sketch: "cloud",
                recognition: "بطلة الأسبوع"
            },
            {
                chapter: "الفضول مستمر",
                title: "التحدي القادم",
                place: "",
                when: "اليوم ←",
                line: "ما زلت أستكشف وأبني، وأبحث دائمًا عن المشكلة التالية التي تستحق الحل.",
                sketch: "curious"
            }
        ]
    },
    // ── II · How I engineer ────────────────────────────────────
    architecture: {
        label: "كيف أبني الأنظمة",
        title: {
            lead: "كل نظام متكامل",
            emphasis: "يبدأ بطبقة."
        },
        orchestration: "Apache Airflow",
        layers: [
            {
                name: "البرمجة والتطوير",
                short: "البرمجة",
                tools: [
                    "Python",
                    "SQL",
                    "Bash / Shell",
                    "Git",
                    "GitHub"
                ]
            },
            {
                name: "خطوط البيانات وتنسيقها",
                short: "خطوط البيانات",
                tools: [
                    "ETL / ELT",
                    "Apache Airflow",
                    "dbt",
                    "المعالجة الدفعية (Batch)",
                    "بناء خطوط البيانات"
                ]
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
                    "Object Storage"
                ]
            },
            {
                name: "جودة البيانات ومراقبتها",
                short: "جودة البيانات",
                tools: [
                    "Data Profiling",
                    "التحقق من صحة البيانات",
                    "تنظيف البيانات",
                    "مراقبة الجودة",
                    "Schema Evolution",
                    "Drift Detection"
                ]
            },
            {
                name: "السحابة والبنية التحتية والمعالجة",
                short: "السحابة والمعالجة",
                tools: [
                    "Microsoft Azure",
                    "GCP",
                    "AWS",
                    "Docker",
                    "Docker Compose",
                    "Apache Spark / PySpark",
                    "Apache Kafka"
                ]
            },
            {
                name: "واجهات API والتكامل",
                short: "API والتكامل",
                tools: [
                    "FastAPI",
                    "REST APIs",
                    "WSO2 API Manager",
                    "Web Scraping",
                    "Requests",
                    "Selenium"
                ]
            },
            {
                name: "التحليلات والعمل الجماعي",
                short: "التحليلات والتعاون",
                tools: [
                    "Power BI",
                    "Tableau",
                    "Linear",
                    "Jira",
                    "منهجية Agile"
                ]
            }
        ],
        alsoExperienced: [
            "علم البيانات",
            "تعلّم الآلة",
            "تحليل البيانات",
            "أنظمة البث اللحظي (Streaming)"
        ]
    },
    // ── III · What I've built ──────────────────────────────────
    projects: {
        label: "مشاريع بنيتُها",
        alsoBuilt: [
            "خطوط ETL / ELT",
            "تحليل البيانات",
            "تعلّم الآلة",
            "واجهات API"
        ]
    },
    // ── IV · The path ──────────────────────────────────────────
    path: {
        label: "المسيرة",
        title: {
            lead: "محطات من",
            emphasis: "رحلتي المهنية."
        },
        experience: [
            {
                role: "متدرّبة في تطوير البرمجيات",
                org: "جامعة الملك فيصل — عمادة تقنية المعلومات",
                dates: "يونيو – سبتمبر 2024",
                place: "الهفوف، المملكة العربية السعودية",
                points: [
                    "طوّرت منصة KFU Space باستخدام ASP.NET Core MVC وJavaScript وBootstrap وEntity Framework وSQL Server.",
                    "صمّمت هياكل قواعد البيانات، وحافظت على جودة الكود، وعملت مع الفريق عبر Git."
                ]
            },
            {
                role: "متدرّبة في هندسة البيانات",
                org: "الهيئة السعودية للتخصصات الصحية",
                dates: "أكتوبر 2025 – مايو 2026",
                place: "الرياض، المملكة العربية السعودية",
                points: [
                    "طوّرت مسارات لجمع البيانات من واجهات API ومن مواقع الويب الديناميكية باستخدام Requests وSelenium، لدعم التحليلات اللاحقة.",
                    "بنيت خطوط ETL وجدولت تشغيلها باستخدام Apache Airflow.",
                    "طوّرت واجهات API آمنة باستخدام Python وFastAPI وWSO2 API Manager، لدعم مبادرات مشاركة البيانات ومراقبتها وتحقيق عائد منها."
                ]
            }
        ],
        credentials: {
            label: "التعليم والتدريب والشهادات",
            education: {
                degree: "بكالوريوس علوم الحاسب",
                school: "جامعة الملك فيصل",
                dates: "سبتمبر 2019 – أغسطس 2024",
                notes: [
                    "المعدل التراكمي 4.31 من 5.00",
                    "مرتبة الشرف الثانية"
                ]
            },
            training: [
                {
                    title: "معسكر هندسة البيانات",
                    org: "الأكاديمية السعودية الرقمية",
                    dates: "أغسطس – أكتوبر 2026",
                    recognition: "بطلة الأسبوع"
                },
                {
                    title: "معسكر علم البيانات وتعلّم الآلة",
                    org: "أكاديمية طويق",
                    dates: "يناير – مارس 2025"
                }
            ],
            // Official certification titles stay in English, exactly as issued.
            certifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].path.credentials.certifications
        }
    },
    // ── Epilogue · Beyond the code ─────────────────────────────
    beyond: {
        label: "خارج حدود الكود",
        title: {
            lead: "لغتان أتحدثهما بطلاقة،",
            emphasis: "وثلاث أتعلّمها الآن."
        },
        intro: "أحب أن أتعلّم لغات التواصل بكل أشكالها: الكود، والبيانات، واللغات المنطوقة، ولغة الإشارة.",
        languages: [
            {
                name: "العربية",
                status: "fluent"
            },
            {
                name: "الإنجليزية",
                status: "fluent",
                qualifications: [
                    "IELTS Academic · 7.5",
                    "STEP · 91"
                ]
            },
            {
                name: "الإيطالية",
                status: "learning"
            },
            {
                name: "الروسية",
                status: "learning"
            },
            {
                name: "لغة الإشارة العربية",
                note: "ArSL",
                status: "learning"
            }
        ]
    },
    // ── Contact · First light ──────────────────────────────────
    contact: {
        label: "تواصل",
        title: {
            lead: "لنبنِ حلًا",
            emphasis: "يبدأ من البيانات."
        },
        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.email,
        linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.linkedin,
        github: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.github,
        kaggle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.kaggle,
        resume: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].contact.resume
    },
    overview: {
        focus: [
            "خطوط البيانات",
            "ETL / ELT",
            "نمذجة البيانات",
            "جودة البيانات ومراقبتها",
            "واجهات API والتكامل"
        ],
        coreStack: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].overview.coreStack
    },
    ui: {
        numerals: [
            "١",
            "٢",
            "٣",
            "٤"
        ],
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
        language: {
            current: "عربي",
            other: "EN",
            otherLabel: "Read the site in English",
            group: "اللغة"
        },
        chapter: "المشروع",
        architecture: "مسار البيانات",
        then: "ثم",
        alsoBuilt: "بنيتُ أيضًا",
        stageHint: "اختر مرحلة لعرض تفاصيلها",
        stageOf: "المرحلة {n} من {total}",
        stagesLabel: "مراحل العمل في مشروع {project}",
        layerHint: "اختر طبقة لعرض أدواتها",
        layerShowTools: "{layer}: عرض الأدوات",
        orchestratedWith: "التنسيق عبر",
        also: "مجالات أخرى",
        engineering: "الهندسة",
        leadership: "القيادة",
        abilitiesLabel: "مهارات يعتمد عليها هذا المشروع",
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
        kaggle: "Kaggle",
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
        exploreProject: "استكشف المشروع",
        featured: "مشروع مميّز",
        filterLabel: "تصفية المشاريع حسب المجال",
        filterAll: "الكل",
        backToProjects: "كل المشاريع",
        previousProject: "المشروع السابق",
        nextProject: "المشروع التالي",
        resources: "موارد المشروع",
        resourceLabels: {
            caseStudy: "اقرأ دراسة الحالة",
            demo: "شاهد العرض التوضيحي",
            github: "مستودع GitHub",
            kaggle: "عرض على Kaggle",
            presentation: "اطّلع على العرض التقديمي"
        },
        projectMetaTitle: "{project} | {name}",
        exploreAllProjects: "استكشف كل المشاريع",
        projectStatus: {
            completed: "مكتمل",
            "in-progress": "قيد التطوير",
            prototype: "نموذج أولي",
            experiment: "تجربة",
            archived: "مؤرشف"
        },
        notes: {
            label: "ملاحظات هندسية",
            approach: "المنهجية",
            challenges: "التحديات",
            lessons: "الدروس المستفادة"
        },
        playgroundNotes: {
            inspiration: "ما الذي ألهمني",
            built: "ما الذي بنيته",
            learned: "ما الذي تعلّمته"
        },
        lab: {
            kicker: "مختبر المشاريع",
            title: {
                lead: "مشاريع لهدف. وأخرى بدافع",
                emphasis: "الفضول."
            },
            subtitle: "من بناء حلول هندسية لمشكلات واقعية إلى تجارب بدأت بفكرة أثارت فضولي.",
            selectorLabel: "عرض المشاريع",
            all: "كل المشاريع",
            engineering: "الهندسية",
            playground: "ساحة التجارب",
            engineeringTitle: "المشاريع الهندسية",
            engineeringIntro: "أنظمة مهنية وأكاديمية في هندسة البيانات وتعلّم الآلة والبرمجيات والسحابة.",
            playgroundTitle: "ساحة التجارب",
            playgroundIntro: "تجارب صغيرة وتحديات شخصية وأفكار بنيتها لمتعة البناء.",
            emptyTitle: "ساحة التجارب قيد التجهيز.",
            emptyBody: "تجارب صغيرة ومشاريع جانبية وأفكار أثارت فضولي، ستجد طريقها إلى هنا قريبًا.",
            metaTitle: "مختبر المشاريع | {name}"
        },
        notFoundTitle: "لم نعثر على هذه الصفحة.",
        notFoundBody: "قد يكون الرابط غير صحيح، أو أن المشروع لم يُنشر بعد.",
        notFoundBack: "العودة إلى الصفحة الرئيسية",
        cosmos: {
            collect: "جمع",
            engineer: "هندسة",
            build: "بناء",
            cancer: "السرطان"
        },
        art: {
            stream: "بيانات FHIR اصطناعية · تحت المراقبة",
            expected: "النطاق المتوقع",
            drift: "انحراف",
            schema: "SCHEMA V2",
            detected: "تم الرصد",
            report: "البلاغ"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "fmt",
    ()=>fmt,
    "site",
    ()=>site
]);
const site = {
    name: "Yaqeen Alhalal",
    role: "Data Engineer",
    location: "Saudi Arabia",
    philosophy: [
        "Collect",
        "Engineer",
        "Build"
    ],
    seo: {
        title: "Yaqeen Alhalal | Data Engineer",
        description: "Data Engineer driven by curiosity, passionate about collecting and engineering data to build meaningful solutions.",
        /** Set to the deployed URL (e.g. "https://yaqeen.dev") to enable absolute social-card URLs. */ siteUrl: null
    },
    nav: [
        {
            id: "projects",
            label: "Projects"
        },
        {
            id: "expertise",
            label: "Expertise"
        },
        {
            id: "path",
            label: "Path"
        },
        {
            id: "contact",
            label: "Contact"
        }
    ],
    // ── Prologue ───────────────────────────────────────────────
    hero: {
        eyebrow: [
            "Yaqeen Alhalal",
            "Data Engineer"
        ],
        headline: {
            line1: "Engineering Data.",
            line2Lead: "Building",
            line2Emphasis: "Possibilities."
        },
        intro: "I'm a Data Engineer driven by curiosity, passionate about collecting and engineering data to build meaningful solutions. I thrive on complex challenges, learn quickly, and love discovering problems worth solving with data.",
        primaryCta: {
            label: "Explore My Projects",
            href: "#projects"
        },
        secondaryCta: {
            label: "About Me",
            href: "#curiosity"
        }
    },
    // ── I · Curiosity ──────────────────────────────────────────
    curiosity: {
        label: "Curiosity",
        statement: {
            lead: "I'm drawn to problems that",
            emphasis: "need an engineer."
        },
        /** The About Me timeline — one continuous line from first curiosity to today. */ journey: [
            {
                chapter: "The Foundation",
                title: "Computer Science",
                place: "King Faisal University",
                when: "2019–2024",
                line: "Where my curiosity about technology, software, and understanding complex systems began.",
                sketch: "computer"
            },
            {
                chapter: "The Discovery",
                title: "Software Development Internship",
                place: "King Faisal University — Deanship of Information Technology",
                when: "2024",
                line: "Building software introduced me to real-world engineering and helped me discover my passion for data.",
                sketch: "app"
            },
            {
                chapter: "The Exploration",
                title: "Data Science & Machine Learning Bootcamp",
                place: "Tuwaiq Academy",
                when: "Jan–Mar 2025",
                line: "Exploring how data reveals patterns, powers predictions, and helps solve complex problems.",
                sketch: "scatter"
            },
            {
                chapter: "From Curiosity to Practice",
                title: "Data Engineering Internship",
                place: "Saudi Commission for Health Specialties (SCFHS)",
                when: "Oct 2025–May 2026",
                line: "Where my passion became hands-on engineering through data pipelines, secure APIs, data quality, and integration.",
                sketch: "pipeline",
                prime: true
            },
            {
                chapter: "The Expansion",
                title: "Data Engineering Bootcamp",
                place: "Saudi Digital Academy",
                when: "Aug–Oct 2026",
                line: "Strengthening my engineering skills through cloud infrastructure, orchestration, and end-to-end pipeline development.",
                sketch: "cloud",
                recognition: "Champion of the Week"
            },
            {
                chapter: "Still Curious",
                title: "The Next Challenge",
                place: "",
                when: "Today →",
                line: "Still exploring, still engineering, and always looking for the next problem worth solving.",
                sketch: "curious"
            }
        ]
    },
    // ── II · How I engineer ────────────────────────────────────
    architecture: {
        label: "How I engineer",
        title: {
            lead: "A system,",
            emphasis: "one layer at a time."
        },
        orchestration: "Apache Airflow",
        /** Listed from the foundation upwards — the order they assemble on screen. */ layers: [
            {
                name: "Programming & Development",
                short: "Programming",
                tools: [
                    "Python",
                    "SQL",
                    "Bash / Shell",
                    "Git",
                    "GitHub"
                ]
            },
            {
                name: "Pipelines & Orchestration",
                short: "Pipelines & orchestration",
                tools: [
                    "ETL / ELT",
                    "Apache Airflow",
                    "dbt",
                    "Batch processing",
                    "Pipeline development"
                ]
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
                    "Object storage"
                ]
            },
            {
                name: "Data Quality & Observability",
                short: "Quality",
                tools: [
                    "Data profiling",
                    "Data validation",
                    "Data cleansing",
                    "Quality monitoring",
                    "Schema evolution",
                    "Drift detection"
                ]
            },
            {
                name: "Cloud, Infrastructure & Processing",
                short: "Cloud & processing",
                tools: [
                    "Microsoft Azure",
                    "GCP",
                    "AWS",
                    "Docker",
                    "Docker Compose",
                    "Apache Spark / PySpark",
                    "Apache Kafka"
                ]
            },
            {
                name: "APIs & Integration",
                short: "APIs & integration",
                tools: [
                    "FastAPI",
                    "REST APIs",
                    "WSO2 API Manager",
                    "Web scraping",
                    "Requests",
                    "Selenium"
                ]
            },
            {
                name: "Analytics & Collaboration",
                short: "Analytics & collaboration",
                tools: [
                    "Power BI",
                    "Tableau",
                    "Linear",
                    "Jira",
                    "Agile workflows"
                ]
            }
        ],
        /** Shown in lower case after "Also:", as in the original design. */ alsoExperienced: [
            "data science",
            "machine learning",
            "data analytics",
            "streaming systems"
        ]
    },
    // ── III · What I've built ──────────────────────────────────
    projects: {
        label: "What I've built",
        alsoBuilt: [
            "ETL / ELT pipelines",
            "Data analytics",
            "Machine learning",
            "APIs"
        ]
    },
    // ── IV · The path ──────────────────────────────────────────
    path: {
        label: "The path",
        title: {
            lead: "The path",
            emphasis: "so far."
        },
        /** Oldest first — the stream flows left to right. */ experience: [
            {
                role: "Software Development Intern",
                org: "King Faisal University — Deanship of Information Technology",
                dates: "Jun 2024 – Sep 2024",
                place: "Hofuf, Saudi Arabia",
                points: [
                    "Developed KFU Space using ASP.NET Core MVC, JavaScript, Bootstrap, Entity Framework, and SQL Server.",
                    "Designed database structures, maintained code quality, and collaborated using Git."
                ]
            },
            {
                role: "Data Engineering Intern",
                org: "Saudi Commission for Health Specialties",
                dates: "Oct 2025 – May 2026",
                place: "Riyadh, Saudi Arabia",
                points: [
                    "Developed data collection workflows using APIs and dynamic web scraping with Requests and Selenium, supporting downstream analytics.",
                    "Built and orchestrated ETL pipelines using Apache Airflow.",
                    "Developed secure APIs using Python, FastAPI, and WSO2 API Manager for data sharing, monitoring, and monetization initiatives."
                ]
            }
        ],
        credentials: {
            label: "Education, training & certifications",
            education: {
                degree: "Bachelor of Computer Science",
                school: "King Faisal University",
                dates: "Sep 2019 – Aug 2024",
                notes: [
                    "GPA 4.31 / 5.00",
                    "Second-Class Honors"
                ]
            },
            training: [
                {
                    title: "Data Engineering Bootcamp",
                    org: "Saudi Digital Academy",
                    dates: "Aug 2026 – Oct 2026",
                    recognition: "Champion of the Week"
                },
                {
                    title: "Data Science and Machine Learning Bootcamp",
                    org: "Tuwaiq Academy",
                    dates: "Jan 2025 – Mar 2025"
                }
            ],
            certifications: [
                {
                    title: "DataCamp Certified Data Engineer",
                    issuer: "DataCamp",
                    year: "2026",
                    verifyUrl: null
                },
                {
                    title: "IBM Data Engineering Professional Certificate",
                    issuer: "IBM",
                    year: "2026",
                    verifyUrl: null
                },
                {
                    title: "Associate Data Engineer in Snowflake",
                    issuer: "DataCamp",
                    year: "2026",
                    verifyUrl: null
                },
                {
                    title: "Associate Data Engineer in Databricks",
                    issuer: "DataCamp",
                    year: "2026",
                    verifyUrl: null
                },
                {
                    title: "Tableau Business Intelligence Analyst Professional Certificate",
                    issuer: "Tableau",
                    year: "2025",
                    verifyUrl: null
                }
            ]
        }
    },
    // ── Epilogue · Beyond the code ─────────────────────────────
    beyond: {
        label: "Beyond the code",
        title: {
            lead: "Two languages I live in.",
            emphasis: "Three I'm still drawing."
        },
        intro: "I enjoy learning how to communicate, whether it's through code, data, spoken languages, or sign language.",
        languages: [
            {
                name: "Arabic",
                status: "fluent"
            },
            {
                name: "English",
                status: "fluent",
                qualifications: [
                    "IELTS Academic · 7.5",
                    "STEP · 91"
                ]
            },
            {
                name: "Italian",
                status: "learning"
            },
            {
                name: "Russian",
                status: "learning"
            },
            {
                name: "ArSL",
                note: "Arabic Sign Language",
                status: "learning"
            }
        ]
    },
    // ── Contact · First light ──────────────────────────────────
    contact: {
        label: "Contact",
        title: {
            lead: "Let's build a",
            emphasis: "data solution."
        },
        email: "YaqeenAlhalal@outlook.sa",
        linkedin: "https://www.linkedin.com/in/yaqeen-alhalal-8388541a3/",
        github: "https://github.com/YaqeenData",
        /** Your Kaggle profile, e.g. "https://www.kaggle.com/<username>" */ kaggle: "https://www.kaggle.com/yaqeenalhalal",
        /** e.g. "/resume.pdf" after adding the file to /public */ resume: "assets/YaqeenAlhalal_DataEngineer.pdf"
    },
    // ── Recruiter overview (one screen, opened from the header) ─
    overview: {
        focus: [
            "Data pipelines",
            "ETL / ELT",
            "Data modeling",
            "Data quality & observability",
            "APIs & integration"
        ],
        coreStack: [
            "Python",
            "SQL",
            "Apache Airflow",
            "dbt",
            "PostgreSQL",
            "Docker",
            "Spark",
            "Kafka",
            "FastAPI",
            "Azure · GCP · AWS"
        ]
    },
    // ── Interface text (buttons, labels, hints, accessibility) ─
    ui: {
        /** Chapter numerals: I · Curiosity … IV · The path. */ numerals: [
            "I",
            "II",
            "III",
            "IV"
        ],
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
        /** The language switch shows both names; the current one is highlighted. */ language: {
            current: "EN",
            other: "عربي",
            otherLabel: "اقرأ الموقع بالعربية",
            group: "Language"
        },
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
        /** Project gallery and project pages. */ exploreProject: "Explore project",
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
            presentation: "View the presentation"
        },
        projectMetaTitle: "{project} — {name}",
        exploreAllProjects: "Explore all projects",
        projectStatus: {
            completed: "Completed",
            "in-progress": "In progress",
            prototype: "Prototype",
            experiment: "Experiment",
            archived: "Archived"
        },
        notes: {
            label: "Engineering notes",
            approach: "Approach",
            challenges: "Challenges",
            lessons: "Lessons"
        },
        playgroundNotes: {
            inspiration: "What sparked it",
            built: "What I built",
            learned: "What I learned"
        },
        /** The Project Lab (/projects). */ lab: {
            kicker: "The Project Lab",
            title: {
                lead: "Built with purpose. And sometimes,",
                emphasis: "just curiosity."
            },
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
            metaTitle: "The Project Lab — {name}"
        },
        notFoundTitle: "This page isn't here.",
        notFoundBody: "The link may be mistyped, or the project hasn't been published yet.",
        notFoundBack: "Back to the portfolio",
        /** Labels drawn inside the illustrations. */ cosmos: {
            collect: "COLLECT",
            engineer: "ENGINEER",
            build: "BUILD",
            cancer: "CANCER"
        },
        art: {
            stream: "SYNTHETIC FHIR STREAM · WATCHED",
            expected: "EXPECTED RANGE",
            drift: "DRIFT",
            schema: "SCHEMA V2",
            detected: "DETECTED",
            report: "REPORT"
        }
    }
};
function fmt(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, key)=>String(values[key] ?? ""));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1qip1mmgho3id._.js.map