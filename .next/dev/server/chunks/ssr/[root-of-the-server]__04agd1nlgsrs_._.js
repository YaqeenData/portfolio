module.exports = [
(()=>{"use strict";return[
"[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "useContent",
    ()=>useContent,
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])("en");
function LocaleProvider({ locale, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: locale,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/i18n/LocaleProvider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function useLocale() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
}
function useContent() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["content"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext)];
}
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/LanguageToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Overview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Overview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ThemeToggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const site = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const { ui } = site;
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [overviewOpen, setOverviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resumeHref = site.contact.resume ?? "#contact";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!menuOpen) return;
        function onKey(e) {
            if (e.key === "Escape") {
                setMenuOpen(false);
                menuButton.current?.focus();
            }
        }
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        menuOpen
    ]);
    function openOverview() {
        setMenuOpen(false);
        setOverviewOpen(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 border-b border-line bg-[var(--header-bg)] backdrop-blur-xl transition-colors duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3.5 sm:px-10 xl:px-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#top",
                                className: "flex flex-col gap-0.5 no-underline",
                                onClick: ()=>setMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-brand-name": true,
                                        className: "brand-name whitespace-nowrap font-display text-[19px] text-ink sm:text-[22px]",
                                        children: site.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label text-[10px] tracking-[0.32em] text-accent sm:text-[11px]",
                                        children: site.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": ui.primaryNav,
                                className: "hidden xl:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex gap-10",
                                    children: site.nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${item.id}`,
                                                className: "label text-[14px] tracking-[0.24em] text-ink-2 no-underline transition-colors hover:text-accent",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openOverview,
                                        className: "btn btn-secondary btn-sm hidden cursor-pointer md:inline-flex",
                                        children: ui.overview
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: resumeHref,
                                        className: "btn btn-secondary btn-sm hidden sm:inline-flex",
                                        children: ui.resume
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$LanguageToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: menuButton,
                                        type: "button",
                                        "aria-expanded": menuOpen,
                                        "aria-controls": "mobile-menu",
                                        "aria-label": menuOpen ? ui.closeMenu : ui.openMenu,
                                        onClick: ()=>setMenuOpen((v)=>!v),
                                        className: "btn-secondary flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full xl:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            width: "20",
                                            height: "14",
                                            viewBox: "0 0 20 14",
                                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 1l14 12M17 1L3 13",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 2h18M7 12h12",
                                                stroke: "currentColor",
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        id: "mobile-menu",
                        "aria-label": ui.sectionsNav,
                        hidden: !menuOpen,
                        className: "border-t border-line bg-[var(--header-bg)] px-6 pb-6 backdrop-blur-xl xl:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: site.nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "border-b border-line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${item.id}`,
                                            onClick: ()=>setMenuOpen(false),
                                            className: "flex items-center justify-between py-4 no-underline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-[24px] text-ink",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "inline-block text-pink rtl:-scale-x-100",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openOverview,
                                        className: "btn btn-secondary w-full cursor-pointer",
                                        children: ui.overview
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: resumeHref,
                                        onClick: ()=>setMenuOpen(false),
                                        className: "btn btn-primary w-full sm:hidden",
                                        children: ui.resume
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Overview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overview"], {
                open: overviewOpen,
                onClose: ()=>setOverviewOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Intro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Intro",
    ()=>Intro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
/** Deterministic pseudo-random numbers so the server and client draw the same sky. */ function seeded(seed) {
    let s = seed;
    return ()=>{
        s = s * 16807 % 2147483647;
        return (s - 1) / 2147483646;
    };
}
const STARS = (()=>{
    const rand = seeded(11);
    return Array.from({
        length: 90
    }, (_, i)=>({
            x: rand() * 100,
            y: rand() * 100,
            r: 0.6 + rand() * 1.3,
            o: 0.25 + rand() * 0.55,
            twinkle: i % 6 === 0,
            dur: 3 + rand() * 4,
            delay: -rand() * 6
        }));
})();
/**
 * Shooting stars — each with its own start point, angle, length, speed and rhythm,
 * so they feel occasional and natural rather than repetitive.
 * [left %, top %, angle deg, trail px, travel px, cycle s, delay s]
 */ const SHOOTING = [
    [
        8,
        12,
        22,
        170,
        520,
        7.5,
        0.5
    ],
    [
        62,
        6,
        155,
        140,
        460,
        9.5,
        1.4
    ],
    [
        30,
        4,
        32,
        120,
        380,
        11,
        2.3
    ],
    [
        78,
        22,
        148,
        190,
        560,
        8.5,
        4.2
    ],
    [
        18,
        38,
        18,
        110,
        340,
        12.5,
        6.1
    ]
];
// [top %, scale, duration s, delay s, opacity]
const CLOUDS = [
    [
        14,
        1.1,
        64,
        -10,
        0.95
    ],
    [
        30,
        0.7,
        82,
        -46,
        0.8
    ],
    [
        58,
        1.35,
        72,
        -30,
        0.9
    ],
    [
        74,
        0.85,
        90,
        -70,
        0.75
    ],
    [
        44,
        0.55,
        100,
        -5,
        0.6
    ]
];
/** Sun rays: [angle deg, length (outer radius), half-width at the base]. Long and short alternate. */ const RAYS = Array.from({
    length: 16
}, (_, i)=>[
        i * 22.5,
        i % 2 ? 66 : 92 - (i % 4 === 0 ? 0 : 8),
        i % 2 ? 2.6 : 3.6
    ]);
const HOLD_MS = 2600; // name + title entrance, then a moment to read
const FLIGHT_MS = 1150; // the name travels into the header
const SKIP_FLIGHT_MS = 700;
const REDUCED_MS = 1600; // reduced motion: a still moment, then a simple swap
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
function Intro() {
    const site = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("playing");
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const skyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fadeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const started = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    function finish() {
        document.documentElement.classList.add("intro-finished");
        setPhase("gone");
    }
    function fly(duration) {
        if (started.current) return;
        started.current = true;
        setPhase("flying");
        const name = nameRef.current;
        const target = document.querySelector("[data-brand-name]");
        const sky = skyRef.current;
        if (!name || !target || !sky || typeof name.animate !== "function") {
            finish();
            return;
        }
        // FLIP: measure both ends, then animate a single element between them.
        const from = name.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        if (!from.width || !to.width) {
            finish();
            return;
        }
        const scale = to.width / from.width;
        const dx = to.left - from.left;
        const dy = to.top + to.height / 2 - (from.top + from.height * scale / 2);
        name.style.transformOrigin = "0 0";
        const flight = name.animate([
            {
                transform: "translate(0, 0) scale(1)"
            },
            {
                transform: `translate(${dx}px, ${dy}px) scale(${scale})`
            }
        ], {
            duration,
            easing: EASE,
            fill: "forwards"
        });
        for (const el of fadeRefs.current){
            el.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration: duration * 0.35,
                easing: "ease-out",
                fill: "forwards"
            });
        }
        sky.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], {
            duration: duration * 0.8,
            delay: duration * 0.2,
            easing: "ease-in-out",
            fill: "forwards"
        });
        flight.onfinish = finish;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        if (root.classList.contains("intro-skip")) {
            setPhase("gone");
            return;
        }
        try {
            sessionStorage.setItem("introSeen", "1");
        } catch  {
        /* private mode: the intro will simply play again next visit */ }
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            const t = window.setTimeout(finish, REDUCED_MS);
            return ()=>window.clearTimeout(t);
        }
        let cancelled = false;
        const t = window.setTimeout(()=>{
            // Measure only once the real fonts are in, so the landing spot is exact.
            const ready = document.fonts?.ready ?? Promise.resolve();
            ready.then(()=>{
                if (!cancelled) fly(FLIGHT_MS);
            });
        }, HOLD_MS);
        return ()=>{
            cancelled = true;
            window.clearTimeout(t);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase !== "playing") return;
        const onKey = (e)=>{
            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip();
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    });
    function skip() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            finish();
            return;
        }
        fly(SKIP_FLIGHT_MS);
    }
    if (phase === "gone") return null;
    const addFade = (el)=>{
        if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: `intro fixed inset-0 z-[200] flex items-center justify-center overflow-hidden ${phase === "flying" ? "pointer-events-none" : "cursor-pointer"}`,
        onClick: skip,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: skyRef,
                "aria-hidden": "true",
                className: "intro-sky absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "only-night intro-night absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 h-full w-full",
                                preserveAspectRatio: "none",
                                focusable: "false",
                                children: STARS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: `${s.x}%`,
                                        cy: `${s.y}%`,
                                        r: s.r,
                                        fill: i % 11 === 0 ? "#FFE2C4" : "#C9D4FF",
                                        opacity: s.o,
                                        className: s.twinkle ? "anim-twinkle" : undefined,
                                        style: s.twinkle ? {
                                            animationDuration: `${s.dur}s`,
                                            animationDelay: `${s.delay}s`
                                        } : undefined
                                    }, i, false, {
                                        fileName: "[project]/src/components/layout/Intro.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Intro.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            SHOOTING.map(([left, top, angle, trail, travel, cycle, delay], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shooting-star",
                                    style: {
                                        left: `${left}%`,
                                        top: `${top}%`,
                                        width: trail,
                                        "--angle": `${angle}deg`,
                                        "--travel": `${travel}px`,
                                        animationDuration: `${cycle}s`,
                                        animationDelay: `${delay}s`
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Intro.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "only-twilight intro-day absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "intro-sun",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sun-halo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Intro.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "sun-rays",
                                        viewBox: "-100 -100 200 200",
                                        focusable: "false",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "sun-ray",
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: "0",
                                                    y1: "-30",
                                                    x2: "0",
                                                    y2: "-95",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0",
                                                            stopColor: "#FFC65C",
                                                            stopOpacity: "0.85"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Intro.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "1",
                                                            stopColor: "#FFD98A",
                                                            stopOpacity: "0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Intro.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Intro.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                0,
                                                1
                                            ].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    className: `sun-ray-group sun-ray-group-${group}`,
                                                    children: RAYS.filter((_, i)=>i % 2 === group).map(([angle, length, half])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: `${-half},-31 ${half},-31 0,${-length}`,
                                                            fill: "url(#sun-ray)",
                                                            transform: `rotate(${angle})`
                                                        }, angle, false, {
                                                            fileName: "[project]/src/components/layout/Intro.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this))
                                                }, group, false, {
                                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Intro.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sun-disc"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Intro.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sun-glint"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Intro.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Intro.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            CLOUDS.map(([top, scale, dur, delay, opacity], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "intro-cloud absolute left-0",
                                    style: {
                                        top: `${top}%`,
                                        opacity,
                                        animationDuration: `${dur}s`,
                                        animationDelay: `${delay}s`,
                                        "--cloud-x": `${(i * 23 + 8) % 85}vw`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: 220 * scale,
                                        height: 80 * scale,
                                        viewBox: "0 -10 220 80",
                                        focusable: "false",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            fill: "#FFFFFF",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                    cx: "110",
                                                    cy: "50",
                                                    rx: "100",
                                                    ry: "20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "78",
                                                    cy: "38",
                                                    r: "26"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "120",
                                                    cy: "28",
                                                    r: "32"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "158",
                                                    cy: "42",
                                                    r: "20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Intro.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Intro.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/components/layout/Intro.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Intro.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Intro.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center gap-4 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: nameRef,
                        className: "intro-name whitespace-nowrap font-display text-[clamp(2.6rem,10vw,7.5rem)] font-normal leading-[1.05] text-ink will-change-transform",
                        children: site.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Intro.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: addFade,
                        className: "intro-title font-italic text-[clamp(1.4rem,3.6vw,2.75rem)] italic text-italic",
                        children: site.ui.introRole
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Intro.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: addFade,
                        "aria-hidden": "true",
                        className: "intro-rule mt-3 h-px w-28"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Intro.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Intro.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: addFade,
                type: "button",
                onClick: (e)=>{
                    e.stopPropagation();
                    skip();
                },
                className: "intro-skip-btn label absolute bottom-8 end-6 cursor-pointer rounded-full px-5 py-3 text-[12px] tracking-[0.3em] text-ink-2 sm:end-10",
                children: site.ui.skipIntro
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Intro.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Intro.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/LanguageToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function LanguageToggle() {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const { ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const other = locale === "en" ? "ar" : "en";
    const href = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localeMeta"][other].path;
    function go(e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        try {
            localStorage.setItem("lang", other);
        } catch  {
        /* storage unavailable — the switch still works for this visit */ }
        // Keep the visitor's place: the last section whose top has passed the upper third.
        let hash = "";
        if (window.scrollY > 200) {
            const line = window.innerHeight * 0.35;
            for (const section of document.querySelectorAll("main section[id]")){
                if (section.getBoundingClientRect().top <= line) hash = `#${section.id}`;
            }
        }
        window.location.assign(href + hash);
    }
    const en = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        lang: "en",
        className: locale === "en" ? "lang-current" : "lang-other",
        children: "EN"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
    const ar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        lang: "ar",
        className: `lang-ar ${locale === "ar" ? "lang-current" : "lang-other"}`,
        children: "عربي"
    }, void 0, false, {
        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        hrefLang: other,
        lang: other,
        onClick: go,
        "aria-label": ui.language.otherLabel,
        dir: "ltr",
        className: "lang-toggle btn-secondary inline-flex h-[46px] min-w-[46px] shrink-0 items-center justify-center gap-2 rounded-full px-1.5 no-underline sm:px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "sm:hidden",
                children: locale === "en" ? ar : en
            }, void 0, false, {
                fileName: "[project]/src/components/layout/LanguageToggle.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "hidden items-center gap-2 sm:inline-flex",
                children: [
                    en,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "lang-sep",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    ar
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/LanguageToggle.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/LanguageToggle.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Overview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overview",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Type.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Overview({ open, onClose }) {
    const site = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const { ui } = site;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [
        open
    ]);
    const { overview, work, path, beyond, contact } = site;
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
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: ref,
        "aria-labelledby": "overview-title",
        onClose: onClose,
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        className: "overview m-auto w-[min(960px,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[32px] p-0 text-ink",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-8 p-7 sm:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "label text-[12px] tracking-[0.32em] text-accent",
                                    children: ui.overviewKicker
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "overview-title",
                                    className: "mt-2 font-display text-[clamp(2rem,4vw,2.625rem)] font-normal",
                                    children: site.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[17px] text-ink-2",
                                    children: [
                                        site.role,
                                        " · ",
                                        site.location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            "aria-label": ui.closeOverview,
                            className: "btn-secondary flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                "aria-hidden": "true",
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 1l12 12M13 1L1 13",
                                    stroke: "currentColor",
                                    strokeWidth: "1.6",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Overview.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Overview.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid gap-x-12 gap-y-7 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.focus
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: overview.focus.join(" · ")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.coreStack
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: overview.coreStack.join(" · ")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.projects
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "flex flex-col gap-1 text-[16px] leading-relaxed",
                                    children: work.projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${p.slug}`,
                                            onClick: onClose,
                                            className: "no-underline hover:text-accent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "font-semibold",
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                " — ",
                                                p.subtitle
                                            ]
                                        }, p.slug, true, {
                                            fileName: "[project]/src/components/layout/Overview.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.experience
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "flex flex-col gap-1 text-[16px] leading-relaxed",
                                    children: [
                                        ...path.experience
                                    ].reverse().map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                job.role,
                                                " — ",
                                                job.org.split(" — ")[0],
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ink-3",
                                                    children: [
                                                        "· ",
                                                        job.dates
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, job.role, true, {
                                            fileName: "[project]/src/components/layout/Overview.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.education
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "text-[16px] leading-relaxed",
                                    children: [
                                        education.degree,
                                        " — ",
                                        education.school,
                                        " · ",
                                        education.notes[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-ink-3",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(ui.credentialsSummary, {
                                                certs: certifications.length,
                                                camps: path.credentials.training.length
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Overview.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "label text-[12px] tracking-[0.3em] text-label-blue",
                                    children: ui.languages
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
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
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Overview.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:flex-wrap sm:items-center",
                    children: [
                        links.map((link)=>link.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: `btn btn-sm ${link.primary ? "btn-primary" : "btn-secondary"}`,
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/src/components/layout/Overview.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex min-h-11 items-center rounded-full border border-dashed border-[var(--line-strong)] px-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Missing"], {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(ui.linkMissing, {
                                        label: link.label
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, link.label, false, {
                                fileName: "[project]/src/components/layout/Overview.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#work",
                            onClick: onClose,
                            className: "label text-[13px] tracking-[0.24em] text-italic no-underline sm:ms-auto",
                            children: [
                                ui.jumpToProjects,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "inline-block rtl:-scale-x-100",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Overview.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Overview.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Overview.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Overview.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Overview.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle({ size = 46 }) {
    const { ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMode(document.documentElement.dataset.theme === "twilight" ? "twilight" : "night");
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": label,
        "aria-pressed": mode === null ? undefined : mode === "twilight",
        className: "theme-toggle relative shrink-0 cursor-pointer overflow-hidden rounded-full p-0",
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            focusable: "false",
            viewBox: "0 0 68 68",
            width: size,
            height: size,
            className: "block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "tt-day",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#FFF5EE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.7",
                                    stopColor: "#FFC9A8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                            id: "tt-night",
                            cx: "50%",
                            cy: "30%",
                            r: "70%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#1C3478"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "68",
                    height: "68",
                    fill: "url(#tt-night)",
                    className: "only-night"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "68",
                    height: "68",
                    fill: "url(#tt-day)",
                    className: "only-twilight"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "only-night",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: "22",
                            r: "1.3",
                            fill: "#C9D4FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "14",
                            r: "1.1",
                            fill: "#C9D4FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "54",
                            cy: "30",
                            r: "1.1",
                            fill: "#C9D4FF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "tt-moon",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "tt-sun",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "tt-clouds",
                    fill: "#FFFFFF",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "17",
                            cy: "19",
                            rx: "7",
                            ry: "3.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "14.5",
                            cy: "17.2",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "19",
                            cy: "16",
                            r: "3.7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "49",
                            cy: "34",
                            rx: "8",
                            ry: "3.4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "46",
                            cy: "32",
                            r: "3.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/src/components/sections/Architecture.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Architecture",
    ()=>Architecture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Type.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/** The number of layers is the same in every language. */ const N = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].architecture.layers.length;
// Art geometry (px) inside a 760 × 630 stage.
const SIZE = 300;
const CENTER_X = 540;
const BASE_Y = 520;
const GAP = 60;
const TIP_X = CENTER_X - SIZE * 0.707;
const num = (i)=>String(i + 1).padStart(2, "0");
function labelTone(i) {
    return i < 2 ? "text-label-blue" : i < 4 ? "text-label-pink" : "text-label-orange";
}
function layerTone(i) {
    if (i === 0) return "arch-foundation";
    if (i >= N - 2) return "arch-warm";
    return "";
}
/**
 * Desktop: the section stays on screen while the visitor scrolls, and the architecture
 * assembles one layer at a time. Scrolling is never hijacked — progress simply follows it.
 * Reduced motion (and no JavaScript) shows the system fully assembled.
 */ function Assembly() {
    const { architecture, ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const dir = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localeMeta"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])()].dir;
    const LAYERS = architecture.layers;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(N);
    // The panel follows the newest layer as it assembles; choosing a layer pins it.
    const [picked, setPicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setPicked(null), [
        step
    ]);
    const shown = picked ?? Math.min(step, N) - 1;
    const layer = LAYERS[shown];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let frame = 0;
        const update = ()=>{
            frame = 0;
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
            setStep(Math.min(N, 1 + Math.floor(progress * N)));
        };
        const onScroll = ()=>{
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);
    const state = (i)=>i < step ? "on" : i === step ? "next" : "off";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative hidden xl:block",
        style: {
            height: `${110 + N * 32}vh`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 flex h-screen items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid w-full max-w-[1440px] grid-cols-[340px_minmax(0,1fr)] items-center gap-10 px-16 pt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterLabel"], {
                                    numeral: ui.numerals[1],
                                    children: architecture.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Architecture.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headline"], {
                                    content: architecture.title,
                                    className: "arch-title text-[52px] leading-[1.08]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Architecture.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": "true",
                                            className: "flex gap-2.5",
                                            children: LAYERS.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-2.5 w-2.5 rounded-full border border-[var(--label-orange)] transition-colors duration-500",
                                                    style: {
                                                        background: i < step ? "var(--label-orange)" : "transparent"
                                                    }
                                                }, l.name, false, {
                                                    fileName: "[project]/src/components/sections/Architecture.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Architecture.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "label text-[11px] tracking-[0.28em] text-ink-4",
                                            children: ui.layerHint
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Architecture.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-live": picked !== null ? "polite" : "off",
                                            className: "min-h-[188px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stage-detail glass-pane flex flex-col gap-3 rounded-2xl px-5 py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `label text-[12px] tracking-[0.26em] ${labelTone(shown)}`,
                                                        children: [
                                                            num(shown),
                                                            " / ",
                                                            layer.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "flex flex-wrap gap-1.5",
                                                        children: layer.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "rounded-full border border-[var(--chip-border)] bg-chip px-2.5 py-1 text-[13px] leading-none text-ink-2",
                                                                children: tool
                                                            }, tool, false, {
                                                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, shown, true, {
                                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Architecture.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[15px] leading-relaxed text-ink-3",
                                            children: [
                                                ui.also,
                                                ": ",
                                                architecture.alsoExperienced.join(" · ")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Architecture.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Architecture.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Architecture.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dir: "ltr",
                            className: "relative mx-auto h-[630px] w-[760px]",
                            children: [
                                LAYERS.map((layer, i)=>{
                                    const cy = BASE_Y - i * GAP;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": "true",
                                        "data-state": state(i),
                                        "data-focus": i === shown,
                                        className: `arch-plane ${layerTone(i)}`,
                                        style: {
                                            left: CENTER_X - SIZE / 2,
                                            top: cy - SIZE / 2,
                                            width: SIZE,
                                            height: SIZE
                                        }
                                    }, layer.name, false, {
                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    "data-state": step >= 2 ? "on" : "off",
                                    className: "arch-spine",
                                    style: {
                                        left: CENTER_X - 3,
                                        top: BASE_Y - (N - 1) * GAP - 40,
                                        height: (N - 1) * GAP + 40
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Architecture.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "aria-hidden": "true",
                                    dir: dir,
                                    "data-state": step >= 2 ? "on" : "off",
                                    className: "arch-label-fade label absolute text-[12px] tracking-[0.3em] text-label-orange",
                                    style: {
                                        left: CENTER_X + 26,
                                        top: BASE_Y - (N - 1) * GAP - 52
                                    },
                                    children: [
                                        ui.orchestratedWith,
                                        " ",
                                        architecture.orchestration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Architecture.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                LAYERS.map((layer, i)=>{
                                    const cy = BASE_Y - i * GAP;
                                    const off = state(i) === "off";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-state": state(i),
                                        className: "arch-label-fade",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: off,
                                                "aria-pressed": i === shown,
                                                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(ui.layerShowTools, {
                                                    layer: layer.name
                                                }),
                                                dir: dir,
                                                onClick: ()=>setPicked(i),
                                                "data-focus": i === shown,
                                                className: "arch-label-btn absolute flex items-baseline justify-end gap-3 rounded-lg px-2 py-1.5 text-right",
                                                style: {
                                                    right: 760 - TIP_X + 14,
                                                    top: cy - 17
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label text-[11px] tracking-[0.2em] text-ink-4",
                                                        children: num(i)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `arch-label-name label whitespace-nowrap text-[13px] tracking-[0.26em] ${labelTone(i)}`,
                                                        children: layer.short
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "absolute h-px w-4 bg-[var(--line-strong)]",
                                                style: {
                                                    left: TIP_X - 18,
                                                    top: cy
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, layer.name, true, {
                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Architecture.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Architecture.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "sr-only",
                children: [
                    LAYERS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                l.name,
                                ": ",
                                l.tools.join(", ")
                            ]
                        }, l.name, true, {
                            fileName: "[project]/src/components/sections/Architecture.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            ui.orchestratedWith,
                            " ",
                            architecture.orchestration
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Architecture.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Architecture.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
/** Phones and tablets: the same system as a stack of slabs that surface one by one. */ function Stack() {
    const { architecture, ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const LAYERS = architecture.layers;
    const reversed = [
        ...LAYERS
    ].map((l, i)=>({
            ...l,
            i
        })).reverse();
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Start building once the foundation (layer 01, at the bottom) is in view.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = list.current;
        const foundation = el?.lastElementChild;
        if (!el || !foundation) return;
        if (!("IntersectionObserver" in window)) {
            el.classList.add("is-visible");
            return;
        }
        const io = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                el.classList.add("is-visible");
                io.disconnect();
            }
        }, {
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.6
        });
        io.observe(foundation);
        return ()=>io.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-[1440px] px-6 py-28 sm:px-10 xl:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterLabel"], {
                        numeral: ui.numerals[1],
                        children: architecture.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Architecture.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headline"], {
                        content: architecture.title,
                        className: "text-[clamp(2.25rem,6vw,3.25rem)] leading-[1.08]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Architecture.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                ref: list,
                className: "arch-build mt-14 flex flex-col gap-3",
                children: reversed.map((layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-5",
                        style: {
                            "--build-delay": `${layer.i * 0.16}s`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: `arch-slab mt-1 h-8 w-14 shrink-0 ${layerTone(layer.i)}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col gap-1 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `label text-[13px] tracking-[0.26em] ${labelTone(layer.i)}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ink-4",
                                                children: num(layer.i)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            layer.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[15px] leading-relaxed text-ink-2",
                                        children: layer.tools.join(" · ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Architecture.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Architecture.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, layer.name, true, {
                        fileName: "[project]/src/components/sections/Architecture.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "label mt-6 text-[12px] tracking-[0.3em] text-label-orange",
                children: [
                    ui.orchestratedWith,
                    " ",
                    architecture.orchestration
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-[15px] leading-relaxed text-ink-3",
                children: [
                    ui.also,
                    ": ",
                    architecture.alsoExperienced.join(" · ")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Architecture.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
function Architecture() {
    const { architecture } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "expertise",
        "aria-label": architecture.label,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Assembly, {}, void 0, false, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Stack, {}, void 0, false, {
                fileName: "[project]/src/components/sections/Architecture.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Architecture.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/Sketches.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: sketch.viewBox,
        className: `sketch h-auto w-full overflow-visible ${className}`,
        "aria-hidden": "true",
        focusable: "false",
        children: [
            sketch.strokes.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    lineNumber: 228,
                    columnNumber: 9
                }, this)),
            sketch.labels?.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                    lineNumber: 241,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Sketches.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/Timeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Sketches$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Sketches.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const useIsoLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"] : "TURBOPACK unreachable";
function Timeline() {
    const { curiosity, ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const { journey } = curiosity;
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [geo, setGeo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lit, setLit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(journey.length);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        total: 0,
        len: 0
    });
    // Measure where every node sits and lay one gentle S-curve through them.
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const el = wrap.current;
        if (!el) return;
        const box = el.getBoundingClientRect();
        const nodes = [
            ...el.querySelectorAll("[data-node]")
        ].map((n)=>{
            const r = n.getBoundingClientRect();
            return [
                r.left + r.width / 2 - box.left,
                r.top + r.height / 2 - box.top
            ];
        });
        if (!nodes.length) return;
        const amp = box.width >= 1024 ? 64 : 9;
        let d = `M${nodes[0][0]} 0 L${nodes[0][0]} ${nodes[0][1]}`;
        for(let i = 1; i < nodes.length; i++){
            const [x1, y1] = nodes[i - 1];
            const [x2, y2] = nodes[i];
            const s = i % 2 ? 1 : -1;
            const dy = y2 - y1;
            d += ` C${x1 + s * amp} ${y1 + dy * 0.36} ${x2 + s * amp} ${y2 - dy * 0.36} ${x2} ${y2}`;
        }
        const [lx, ly] = nodes[nodes.length - 1];
        const end = el.querySelector("[data-tail-end]");
        const endY = end ? end.getBoundingClientRect().top - box.top - 14 : box.height;
        const tail = `M${lx} ${ly} L${lx} ${endY}`;
        setGeo({
            d,
            tail,
            w: box.width,
            h: box.height,
            nodeY: nodes.map((n)=>n[1])
        });
    }, []);
    useIsoLayoutEffect(()=>{
        measure();
        const el = wrap.current;
        if (!el || !("ResizeObserver" in window)) return;
        const ro = new ResizeObserver(()=>measure());
        ro.observe(el);
        document.fonts?.ready.then(measure);
        return ()=>ro.disconnect();
    }, [
        measure
    ]);
    // Follow scroll: draw the line up to a reading point a little below the middle of the screen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const path = drawn.current;
        if (!geo || !path) return;
        const total = path.getTotalLength();
        progress.current.total = total;
        path.style.strokeDasharray = `${total}`;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            path.style.strokeDashoffset = "0";
            progress.current.len = total;
            setLit(journey.length);
            return;
        }
        const lengthAtY = (y)=>{
            let lo = 0;
            let hi = total;
            for(let k = 0; k < 18; k++){
                const mid = (lo + hi) / 2;
                if (path.getPointAtLength(mid).y < y) lo = mid;
                else hi = mid;
            }
            return lo;
        };
        let frame = 0;
        const update = ()=>{
            frame = 0;
            const el = wrap.current;
            if (!el) return;
            const y = Math.max(0, Math.min(geo.h, window.innerHeight * 0.66 - el.getBoundingClientRect().top));
            const len = y >= geo.nodeY[geo.nodeY.length - 1] ? total : lengthAtY(y);
            progress.current.len = len;
            path.style.strokeDashoffset = `${total - len}`;
            setLit(geo.nodeY.filter((ny)=>ny <= y + 2).length);
        };
        const onScroll = ()=>{
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [
        geo
    ]);
    // Data particles travel along the completed path — only while the timeline is on screen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const path = drawn.current;
        const el = wrap.current;
        if (!geo || !path || !el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let raf = 0;
        let visible = false;
        const start = performance.now();
        const tick = (now)=>{
            const { len } = progress.current;
            particles.current.forEach((c, i)=>{
                if (!c) return;
                if (len < 60) {
                    c.style.opacity = "0";
                    return;
                }
                const speed = 90; // px per second, so long paths don't make particles race
                const t = ((now - start) / 1000 * speed + i * len / 3) % len;
                const p = path.getPointAtLength(t);
                c.setAttribute("cx", p.x.toFixed(1));
                c.setAttribute("cy", p.y.toFixed(1));
                const edge = Math.min(t, len - t);
                c.style.opacity = `${Math.min(1, edge / 40)}`;
            });
            if (visible) raf = requestAnimationFrame(tick);
        };
        const io = new IntersectionObserver(([entry])=>{
            visible = entry.isIntersecting;
            cancelAnimationFrame(raf);
            if (visible) raf = requestAnimationFrame(tick);
        });
        io.observe(el);
        return ()=>{
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [
        geo
    ]);
    const done = lit >= journey.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrap,
        className: `timeline relative ${geo ? "tl-ready" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "tl-fallback absolute bottom-0 start-[13px] top-0 w-px lg:start-1/2"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Timeline.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            geo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                focusable: "false",
                className: "pointer-events-none absolute left-0 top-0 overflow-visible",
                width: geo.w,
                height: geo.h,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "tl-ink",
                            gradientUnits: "userSpaceOnUse",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: geo.h,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    style: {
                                        stopColor: "var(--blue)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Timeline.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0.55",
                                    style: {
                                        stopColor: "var(--orange)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Timeline.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    style: {
                                        stopColor: "var(--pink)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Timeline.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Timeline.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Timeline.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: geo.d,
                        fill: "none",
                        className: "tl-track",
                        strokeWidth: "1.5",
                        strokeDasharray: "3 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Timeline.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        ref: drawn,
                        d: geo.d,
                        fill: "none",
                        stroke: "url(#tl-ink)",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        className: "tl-drawn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Timeline.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: geo.tail,
                        fill: "none",
                        className: "tl-tail",
                        "data-on": done,
                        strokeWidth: "1.5",
                        strokeDasharray: "3 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Timeline.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            ref: (c)=>{
                                particles.current[i] = c;
                            },
                            r: i === 0 ? 3 : 2.2,
                            className: "tl-particle",
                            style: {
                                opacity: 0
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/sections/Timeline.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Timeline.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "relative",
                children: journey.map((m, i)=>{
                    const textLeft = i % 2 === 0;
                    const on = i < lit;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        "data-lit": on,
                        "data-prime": "prime" in m && m.prime ? true : undefined,
                        className: "tl-item relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-5 pb-20 last:pb-16 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] lg:gap-x-0 lg:pb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-start-1 row-start-1 flex justify-center pt-1.5 lg:col-start-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-node": true,
                                    "aria-hidden": "true",
                                    className: "tl-node relative flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tl-node-ring absolute rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Timeline.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tl-node-core relative block rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Timeline.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Timeline.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Timeline.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `tl-text col-start-2 row-start-1 flex flex-col gap-1.5 ${textLeft ? "lg:col-start-1 lg:items-end lg:pe-4 lg:text-end" : "lg:col-start-3 lg:ps-4"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "tl-kicker label text-[11px] tracking-[0.3em] sm:text-[12px]",
                                        children: [
                                            String(i + 1).padStart(2, "0"),
                                            " · ",
                                            m.chapter
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Timeline.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "tl-title font-display font-normal leading-tight text-ink",
                                        children: m.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Timeline.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label text-[11px] tracking-[0.22em] text-ink-3 sm:text-[12px]",
                                        children: [
                                            m.place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    m.place,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-ink-4",
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Timeline.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 33
                                                    }, this),
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Timeline.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this) : null,
                                            m.when
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Timeline.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-[40ch] pt-1 text-[16px] leading-[1.65] text-ink-2",
                                        children: m.line
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Timeline.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    "recognition" in m && m.recognition ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label mt-1.5 inline-flex w-fit items-center gap-2 text-[11px] tracking-[0.22em] text-label-orange",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                focusable: "false",
                                                width: "11",
                                                height: "11",
                                                viewBox: "0 0 12 12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 0.5 l1.6 3.6 3.9 0.4 -2.9 2.6 0.8 3.9 -3.4 -2 -3.4 2 0.8 -3.9 -2.9 -2.6 3.9 -0.4z",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Timeline.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Timeline.tsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this),
                                            m.recognition
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Timeline.tsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Timeline.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `tl-sketch col-start-2 row-start-2 mt-6 w-full max-w-[200px] lg:row-start-1 lg:mt-0 lg:max-w-[230px] ${textLeft ? "lg:col-start-3 lg:ps-6" : "lg:col-start-1 lg:justify-self-end lg:pe-6"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Sketches$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SketchSvg"], {
                                    name: m.sketch
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Timeline.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Timeline.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m.title, true, {
                        fileName: "[project]/src/components/sections/Timeline.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Timeline.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                "data-tail-end": true,
                href: "#expertise",
                className: "label relative flex w-fit items-center gap-2 ps-[48px] text-[12px] tracking-[0.3em] text-ink-3 no-underline transition-colors hover:text-accent lg:mx-auto lg:ps-0",
                children: [
                    ui.nextSection,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Timeline.tsx",
                        lineNumber: 258,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Timeline.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Timeline.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, as: Tag = "div", className, delay = 0, variant = "rise", id }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        if (!("IntersectionObserver" in window)) {
            el.classList.add("is-visible");
            return;
        }
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            }
        }, {
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.15
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, []);
    const attrs = variant === "draw" ? {
        "data-reveal-draw": ""
    } : variant === "observe" ? {
        "data-observe": ""
    } : {
        "data-reveal": ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        id: id,
        className: className,
        style: delay ? {
            transitionDelay: `${delay}s`
        } : undefined,
        ...attrs,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Reveal.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Type.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChapterLabel",
    ()=>ChapterLabel,
    "Headline",
    ()=>Headline,
    "Missing",
    ()=>Missing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ChapterLabel({ numeral, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function Headline({ content, as: Tag = "h2", id, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        id: id,
        className: `font-display font-normal text-ink ${className}`,
        children: [
            content.lead,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
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
function Missing({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/work/StageStrip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StageStrip",
    ()=>StageStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/i18n/LocaleProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Type.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function StageStrip({ stages, accent, project }) {
    const { ui } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$i18n$2f$LocaleProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const buttons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const current = stages[selected];
    const accentVar = {
        amber: "var(--label-orange)",
        pink: "var(--label-pink)",
        blue: "var(--label-blue)"
    }[accent];
    const detailId = `${project.toLowerCase()}-stage-detail`;
    const last = stages.length - 1;
    const fill = last > 0 ? selected / last * 100 : 0;
    function select(i, focus = false) {
        const next = Math.max(0, Math.min(last, i));
        setSelected(next);
        if (focus) buttons.current[next]?.focus();
    }
    function onKeyDown(e) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            select(selected + 1, true);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            select(selected - 1, true);
        } else if (e.key === "Home") {
            e.preventDefault();
            select(0, true);
        } else if (e.key === "End") {
            e.preventDefault();
            select(last, true);
        }
    }
    const state = (i)=>i === selected ? "active" : i < selected ? "done" : i === selected + 1 ? "next" : "upcoming";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
        variant: "observe",
        className: "stage-strip flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "stage-hint label flex items-center justify-center gap-2 text-[11px] tracking-[0.28em] text-ink-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        "aria-hidden": "true",
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        focusable: "false",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 1.5v8.2l2.2-2 1.6 3.6 1.5-.7-1.6-3.5h3z",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.1",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/work/StageStrip.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/work/StageStrip.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    ui.stageHint
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/work/StageStrip.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dir: "ltr",
                className: "relative",
                style: {
                    "--stage-accent": accentVar
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "stage-track absolute left-[12.5%] right-[12.5%] top-[13px] h-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 border-t-2 border-dashed border-[var(--line-strong)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/work/StageStrip.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "stage-fill absolute left-0 top-0 h-0.5 rounded-full",
                                style: {
                                    width: `${fill}%`,
                                    background: accentVar
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/work/StageStrip.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/work/StageStrip.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "relative grid",
                        style: {
                            gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))`
                        },
                        "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(ui.stagesLabel, {
                            project
                        }),
                        onKeyDown: onKeyDown,
                        children: stages.map((stage, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: (el)=>{
                                        buttons.current[i] = el;
                                    },
                                    type: "button",
                                    "aria-pressed": i === selected,
                                    "aria-controls": detailId,
                                    onClick: ()=>select(i),
                                    "data-state": state(i),
                                    className: "stage-btn flex min-h-11 flex-col items-center gap-3 rounded-xl px-2 pt-1",
                                    style: {
                                        "--stage-delay": `${0.1 + i * 0.12}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "stage-node relative flex h-6 w-6 items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "stage-ring absolute inset-0 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/work/StageStrip.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "stage-core relative block"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/work/StageStrip.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/work/StageStrip.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex flex-col items-center gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "label text-[10px] tracking-[0.2em] text-ink-4",
                                                    children: String(i + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/work/StageStrip.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "stage-name label text-[11px] tracking-[0.24em] sm:text-[12px]",
                                                    children: stage.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/work/StageStrip.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/work/StageStrip.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/work/StageStrip.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, stage.name, false, {
                                fileName: "[project]/src/components/work/StageStrip.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/work/StageStrip.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/work/StageStrip.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: detailId,
                "aria-live": "polite",
                className: "stage-detail glass-pane mx-auto w-full max-w-[420px] rounded-2xl px-6 py-4",
                style: {
                    borderColor: accentVar
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-baseline justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label text-[12px] tracking-[0.26em]",
                                style: {
                                    color: accentVar
                                },
                                children: current.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/work/StageStrip.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "label text-[10px] tracking-[0.22em] text-ink-4",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fmt"])(ui.stageOf, {
                                    n: selected + 1,
                                    total: stages.length
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/work/StageStrip.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/work/StageStrip.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-1.5 text-[15px] leading-relaxed text-ink-2",
                        children: current.detail ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Type$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Missing"], {
                            children: ui.stageMissing
                        }, void 0, false, {
                            fileName: "[project]/src/components/work/StageStrip.tsx",
                            lineNumber: 140,
                            columnNumber: 30
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/work/StageStrip.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, selected, true, {
                fileName: "[project]/src/components/work/StageStrip.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/work/StageStrip.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/content/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "content",
    ()=>content,
    "localeMeta",
    ()=>localeMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ar.ts [app-ssr] (ecmascript)");
;
;
const content = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteAr"]
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
}),
"[project]/src/content/site.ar.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript)");
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
        siteUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].seo.siteUrl
    },
    nav: [
        {
            id: "work",
            label: "المشاريع"
        },
        {
            id: "expertise",
            label: "المهارات"
        },
        {
            id: "path",
            label: "الرحلة"
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
            label: "استعرض أعمالي",
            href: "#work"
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
                overview: "يحوّل «بيان» المعلومات التنظيمية السعودية إلى بيانات منظّمة تحفظ إصدارات كل نظام، لتسهيل استكشاف الأنظمة وتحليل تطوّرها.",
                visual: "archive",
                accent: "amber",
                flow: [
                    "BOE",
                    "Bronze",
                    "Silver",
                    "Gold",
                    "Power BI"
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
                facts: [
                    {
                        label: "السياق",
                        value: "مشروع تخرّج جماعي ضمن معسكر هندسة البيانات في الأكاديمية السعودية الرقمية."
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
                ],
                stackComplete: true,
                caseStudyUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].work.projects[0].caseStudyUrl
            },
            {
                slug: "sentinel",
                name: "Sentinel",
                subtitle: "مراقبة موثوقية البيانات الصحية",
                opening: "خط البيانات يعمل بلا أخطاء، لكن هل البيانات نفسها سليمة؟",
                overview: "يدرس Sentinel كيف يمكن لخط بيانات أن يعمل بنجاح في الظاهر، بينما يمرّر بيانات غير موثوقة دون أن يلاحظ أحد. ويعتمد على سجلات صحية اصطناعية لاختبار جودة البيانات ومراقبتها.",
                visual: "watch",
                accent: "pink",
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
                stackLabel: "مجالات تقنية",
                stack: [
                    "Python",
                    "Synthea",
                    "FHIR",
                    "Cloud Storage",
                    "PostgreSQL",
                    "Streaming",
                    "جودة البيانات"
                ],
                stackComplete: true,
                caseStudyUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].work.projects[1].caseStudyUrl
            },
            {
                slug: "najm",
                name: "نجم",
                altName: "Najm",
                altLang: "en",
                subtitle: "رصد الحوادث والإبلاغ عنها بالذكاء الاصطناعي",
                opening: "ماذا لو بدأ الإبلاغ عن الحادث قبل أن يتصل أحد؟",
                overview: "نموذج أولي للإبلاغ عن الحوادث بمساعدة الذكاء الاصطناعي، يجمع بين الرؤية الحاسوبية وصور الطائرات المسيّرة وخدمات Backend وتطبيق جوّال.",
                visual: "sky",
                accent: "blue",
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
                ],
                stackComplete: true,
                caseStudyUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].work.projects[2].caseStudyUrl
            }
        ],
        leadership: {
            project: "sentinel",
            title: "ما وراء بناء الأنظمة: قيادة الفريق",
            intro: "أقود تطوير Sentinel، وأشارك بنفسي في بنائه الهندسي.",
            engineering: "إدخال البيانات، والتخزين السحابي، وبناء خطوط البيانات، وضمان جودتها، وحل المشكلات التقنية.",
            leading: "تخطيط المشروع، وتنسيق عمل الفريق، وإدارة المهام، والتواصل، واتخاذ القرارات التقنية.",
            converge: "Sentinel",
            abilities: [
                "القيادة",
                "المرونة",
                "حل المشكلات",
                "التواصل",
                "العمل الجماعي",
                "المبادرة"
            ]
        },
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
            certifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].path.credentials.certifications
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
        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].contact.email,
        linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].contact.linkedin,
        github: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].contact.github,
        resume: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].contact.resume
    },
    overview: {
        focus: [
            "خطوط البيانات",
            "ETL / ELT",
            "نمذجة البيانات",
            "جودة البيانات ومراقبتها",
            "واجهات API والتكامل"
        ],
        coreStack: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].overview.coreStack
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
            detected: "رُصِد الحادث",
            report: "البلاغ"
        }
    }
};
}),
"[project]/src/content/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        title: "Yaqeen Alhalal — Data Engineer",
        description: "Data Engineer driven by curiosity, passionate about collecting and engineering data to build meaningful solutions.",
        /** Set to the deployed URL (e.g. "https://yaqeen.dev") to enable absolute social-card URLs. */ siteUrl: null
    },
    nav: [
        {
            id: "work",
            label: "Work"
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
            label: "Explore My Work",
            href: "#work"
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
                title: "Data Science & Machine Learning",
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
                title: "Cloud & Data Engineering",
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
    work: {
        label: "What I've built",
        projects: [
            {
                slug: "bayan",
                name: "Bayan",
                altName: "بيان",
                altLang: "ar",
                subtitle: "Saudi Regulations & Decisions Data Hub",
                opening: "Finding a regulation is easy. Understanding how it changed over time is a different problem.",
                overview: "Bayan transforms Saudi regulatory information into structured, version-aware datasets to support regulation exploration and historical analysis.",
                visual: "archive",
                accent: "amber",
                flow: [
                    "BOE",
                    "Bronze",
                    "Silver",
                    "Gold",
                    "Power BI"
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
                facts: [
                    {
                        label: "Context",
                        value: "Collaborative capstone developed during the Saudi Digital Academy Data Engineering Bootcamp."
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
                ],
                stackComplete: true,
                caseStudyUrl: null
            },
            {
                slug: "sentinel",
                name: "Sentinel",
                subtitle: "Healthcare Data Observability",
                opening: "The pipeline is green. But is the data healthy?",
                overview: "Sentinel explores how data pipelines can run successfully while silently delivering unreliable data, using synthetic healthcare records to investigate data quality and observability.",
                visual: "watch",
                accent: "pink",
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
                stackLabel: "Technology areas",
                stack: [
                    "Python",
                    "Synthea",
                    "FHIR",
                    "Cloud storage",
                    "PostgreSQL",
                    "Streaming",
                    "Data quality"
                ],
                stackComplete: true,
                caseStudyUrl: null
            },
            {
                slug: "najm",
                name: "Najm",
                altName: "نجم",
                altLang: "ar",
                subtitle: "AI-Powered Accident Detection & Reporting",
                opening: "What if accident reporting could begin before anyone makes a call?",
                overview: "An AI-assisted accident reporting prototype combining computer vision, drone imagery, backend services, and a mobile application.",
                visual: "sky",
                accent: "blue",
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
                ],
                stackComplete: true,
                caseStudyUrl: null
            }
        ],
        /** Sentinel's leadership story — soft skills shown through the work, not listed on their own. */ leadership: {
            project: "sentinel",
            title: "Beyond the Pipeline: Leading the Team",
            intro: "I lead Sentinel's development while contributing directly to its engineering.",
            engineering: "Data ingestion, cloud storage, pipeline implementation, data quality, and technical problem-solving.",
            leading: "Project planning, team coordination, task management, communication, and technical decision-making.",
            converge: "Sentinel",
            abilities: [
                "Leadership",
                "Adaptability",
                "Problem solving",
                "Communication",
                "Collaboration",
                "Initiative"
            ]
        },
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
                    issuer: null,
                    year: "2026",
                    verifyUrl: null
                },
                {
                    title: "Associate Data Engineer in Databricks",
                    issuer: null,
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
        chapter: "Chapter",
        caseStudy: "Read the case study",
        caseStudySoon: "Case study · coming soon",
        architecture: "Architecture",
        then: "then",
        alsoBuilt: "Also built",
        stageHint: "Select a stage to explore",
        stageOf: "Stage {n} of {total}",
        stagesLabel: "{project} workflow stages",
        stageMissing: "Stage detail — to write together",
        stackMissing: "Stack — to add",
        layerHint: "Select a layer to see its tools",
        layerShowTools: "{layer}: show tools",
        orchestratedWith: "Orchestrated with",
        also: "Also",
        engineering: "Engineering",
        leadership: "Leadership",
        abilitiesLabel: "Abilities this work draws on",
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
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04agd1nlgsrs_._.js.map