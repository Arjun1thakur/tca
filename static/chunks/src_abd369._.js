(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_abd369._.js", {

"[project]/src/components/unused/DisableInspect.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
'use client';
;
const DisableInspect = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DisableInspect.useEffect": ()=>{
            // Prevent right-click context menu
            const handleContextMenu = {
                "DisableInspect.useEffect.handleContextMenu": (e)=>{
                    e.preventDefault();
                }
            }["DisableInspect.useEffect.handleContextMenu"];
            // Disable specific key combinations
            const ctrlShiftKey = {
                "DisableInspect.useEffect.ctrlShiftKey": (e, keyCode)=>{
                    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
                }
            }["DisableInspect.useEffect.ctrlShiftKey"];
            const handleKeyDown = {
                "DisableInspect.useEffect.handleKeyDown": (e)=>{
                    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + Shift + C, Ctrl + U
                    if (e.keyCode === 123 || // F12
                    ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || ctrlShiftKey(e, 'C') || e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
                        e.preventDefault(); // Prevent the default action
                    }
                }
            }["DisableInspect.useEffect.handleKeyDown"];
            // Add event listeners
            document.addEventListener('contextmenu', handleContextMenu);
            document.addEventListener('keydown', handleKeyDown);
            // Clean up event listeners on component unmount
            return ({
                "DisableInspect.useEffect": ()=>{
                    document.removeEventListener('contextmenu', handleContextMenu);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            })["DisableInspect.useEffect"];
        }
    }["DisableInspect.useEffect"], []);
    return null; // This component doesn't render anything, it just adds event listeners
};
_s(DisableInspect, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DisableInspect;
const __TURBOPACK__default__export__ = DisableInspect;
var _c;
__turbopack_refresh__.register(_c, "DisableInspect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_esm__({
    "app": (()=>app),
    "database": (()=>database),
    "storedb": (()=>storedb)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    databaseURL: ("TURBOPACK compile-time value", "https://tca3rdedition-default-rtdb.firebaseio.com"),
    projectId: ("TURBOPACK compile-time value", "tca3rdedition")
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const storedb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// const analytics = getAnalytics(app);
const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Header = ({ pollIndexNumber })=>{
    function clearUserAndReload() {
        localStorage.removeItem("user");
        window.location.href = window.location.origin + window.location.pathname;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: " flex justify-between 2xl:10% px-[5%] py-7 header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.png",
                    alt: "logo home",
                    className: " 2xl:h-20 h-14"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.jsx",
                    lineNumber: 11,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center xl:gap-10 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        className: "text-[#D9D9C4] 2xl:text-lg text-base opacity-90",
                        children: "Live Feed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 14,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        className: "text-[#D9D9C4] 2xl:text-lg text-base opacity-90",
                        children: "Snap Station"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 20,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        className: "text-[#D9D9C4] 2xl:text-lg text-base opacity-90",
                        children: "Trivia Time"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "",
                        className: "text-[#D9D9C4] 2xl:text-lg text-base opacity-90",
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 32,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#poll",
                        className: "text-[#FF4444] border px-2 pr-4 border-red-500 py-1 rounded-3xl 2xl:text-lg text-base opacity-90 flex gap-2 items-center",
                        children: [
                            " ",
                            pollIndexNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-red-500 animate-pulse text-black rounded-full w-6 h-6 grid place-items-center",
                                children: [
                                    pollIndexNumber,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 41,
                                columnNumber: 38
                            }, this),
                            "Live Polling"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 38,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearUserAndReload,
                        className: "uppercase flex gap-2 2xl:text-lg text-base items-center bg-white text-[#000A32] rounded-3xl py-1 px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "h-6 w-4",
                                src: "/logout.svg",
                                alt: "logout svh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this),
                            " ",
                            "logout"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Hero.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/hls.js/dist/hls.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const Hero = ()=>{
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const hls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                debug: true
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSupported() && videoRef.current) {
                hls.loadSource("https://d208dezl4hi3dy.cloudfront.net/out/v1/ChannelGrp_66570fd77bb17/Channel_678df7c225fc0/non_drm_hls_endpoint_1737357250/index.m3u8");
                hls.attachMedia(videoRef.current);
                hls.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Events.ERROR, {
                    "Hero.useEffect": (err)=>{
                        console.log(err);
                    }
                }["Hero.useEffect"]);
            } else {
                console.log("load");
            }
            return ({
                "Hero.useEffect": ()=>{
                    // cleanup (when component destroyed or when useEffect runs twice on StrictMode)
                    hls.destroy();
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "lg:px-[10%] px-[5%]  section relative z-10 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[-10%] relative heading_",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "smalltext text-center ",
                        children: "Experience the action at"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "bigtext text-center ",
                        children: [
                            "The Conviviality Awards",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/Hero.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            "3rd Edition 2025"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "iframe_div relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/small_ring.png",
                            alt: "ring around live video",
                            className: "w-[400px] h-[400px] absolute right-[-250px] top-[-100px] z-[-1] mix-blend-screen custom-spin iframe_right"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/stars.png",
                            alt: "ring around live video",
                            className: "w-[100vh] h-[100vh] absolute right-[-50vh] top-[0px] z-[-1] mix-blend-screen custom-spin "
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/white_ring_complete.png",
                            alt: "ring around live video",
                            className: "min-w-[60vw] w-[60vw] min-h-[60vw] h-[60vw] absolute left-[-400px] bottom-[-300px] z-[-1] mix-blend-screen custom-spin iframe_right"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/stars.png",
                            alt: "ring around live video",
                            className: "w-[100vh] h-[100vh] absolute left-[-50vh] top-[5vh] z-[-1] mix-blend-screen custom-spin-anti  "
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: videoRef,
                            controls: true,
                            style: {
                                width: "100%",
                                height: "100%",
                                borderRadius: "0"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.jsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "emoji-list border bg-[#0000004D] p-2 rounded-[30px] w-fit relative left-[50%] translate-x-[-50%] translate-y-[-80%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "emoji border rounded-full",
                        "data-emoji": "👍",
                        children: "👍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "emoji border rounded-full",
                        "data-emoji": "❤️",
                        children: "❤️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "emoji border rounded-full",
                        "data-emoji": "🎉",
                        children: "🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.jsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_s(Hero, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_refresh__.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/unused/Selfie.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
// import { FaDownload, FaTimes } from 'react-icons/fa';
const PictureModule = ({ closeSnap })=>{
    _s();
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const frameList = [
        'Filter1.png',
        'Filter2.png',
        'Filter3.png'
    ];
    const changeFrame = (e)=>{
        const imageUrl = e.target.dataset.url;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('.overlay-frame').css('backgroundImage', `url('${imageUrl}')`);
    };
    const saveSelfieCount = async ()=>{
        try {
            const optionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["database"], `selfie`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["update"])(optionRef, {
                capture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
            });
            console.log("Poll submission result updated in Realtime Database.");
        } catch (error) {
            console.error("Error updating poll submission result in Realtime Database: ", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PictureModule.useEffect": ()=>{
            const video = document.getElementById('camera');
            const canvas = document.getElementById('snapshot');
            const output = document.getElementById('output');
            const image_download_popup = document.getElementById('image_download_popup');
            const overlayFrame = document.querySelector('.overlay-frame');
            // Access the device camera
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then({
                "PictureModule.useEffect": (stream)=>{
                    video.srcObject = stream;
                    console.log('Stream:', stream);
                }
            }["PictureModule.useEffect"]).catch({
                "PictureModule.useEffect": (err)=>{
                    console.error('Error accessing the camera:', err);
                }
            }["PictureModule.useEffect"]);
            // Capture the image
            document.getElementById('capture').addEventListener('click', {
                "PictureModule.useEffect": ()=>{
                    const context = canvas.getContext('2d');
                    let aspectRatio = 16 / 9;
                    let targetWidth = 1920;
                    let targetHeight = 1080;
                    if (window.innerWidth < 768) {
                        aspectRatio = 9 / 16;
                        targetWidth = 1080;
                        targetHeight = 1920;
                    }
                    const videoWidth = video.videoWidth;
                    const videoHeight = video.videoHeight;
                    let cropWidth, cropHeight, offsetX, offsetY;
                    if (videoWidth / videoHeight > aspectRatio) {
                        cropHeight = videoHeight;
                        cropWidth = cropHeight * aspectRatio;
                        offsetX = (videoWidth - cropWidth) / 2;
                        offsetY = 0;
                    } else {
                        cropWidth = videoWidth;
                        cropHeight = cropWidth / aspectRatio;
                        offsetX = 0;
                        offsetY = (videoHeight - cropHeight) / 2;
                    }
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    // Flip the canvas horizontally to correct the mirror effect
                    context.translate(canvas.width, 0);
                    context.scale(-1, 1);
                    context.drawImage(video, offsetX, offsetY, cropWidth, cropHeight, 0, 0, targetWidth, targetHeight);
                    // Reset transformations
                    context.setTransform(1, 0, 0, 1, 0, 0);
                    // Draw the selected overlay frame
                    const overlayImage = new Image();
                    overlayImage.src = window.getComputedStyle(overlayFrame).backgroundImage.slice(5, -2);
                    overlayImage.onload = ({
                        "PictureModule.useEffect": function() {
                            context.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
                            // Show the captured image with the frame
                            const dataUrl = canvas.toDataURL('image/png');
                            output.src = dataUrl;
                            document.querySelector('.out_link').href = dataUrl;
                            output.style.display = 'block';
                            image_download_popup.style.display = 'flex';
                        }
                    })["PictureModule.useEffect"];
                }
            }["PictureModule.useEffect"]);
        }
    }["PictureModule.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PictureModule.useEffect": ()=>{
            setTimeout({
                "PictureModule.useEffect": ()=>{
                    const canvas = document.getElementById('snapshot');
                    if (!canvas) {
                        console.error('Canvas not found');
                        return;
                    }
                    const context = canvas.getContext('2d');
                    console.log('Canvas ready:', context);
                }
            }["PictureModule.useEffect"], 500);
        }
    }["PictureModule.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "app",
        className: "relative w-full h-screen mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: closeSnap,
                className: "absolute top-4 right-4 bg-white text-[#000A32] py-2 px-6 rounded-3xl shadow-lg z-30",
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/src/components/unused/Selfie.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "frame-container",
                className: "relative w-full h-screen overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        id: "camera",
                        autoPlay: true,
                        playsInline: true,
                        className: "w-full h-screen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/Selfie.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overlay-frame absolute top-0 left-0 w-full h-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/Selfie.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/unused/Selfie.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/50 fixed bottom-0 w-screen h-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full overflow-x-auto overflow-y-hidden h-28 flex gap-6 items-center justify-center",
                        children: frameList.map((frame, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer min-w-28 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    onClick: changeFrame,
                                    src: frame,
                                    alt: `Frame ${index + 1}`,
                                    width: 100,
                                    height: 100,
                                    "data-url": `/${frame}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/unused/Selfie.jsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/unused/Selfie.jsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/Selfie.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center my-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            id: "capture",
                            className: "bg-white text-[#000A32] py-2 px-6 rounded-3xl shadow-lg",
                            children: "Capture"
                        }, void 0, false, {
                            fileName: "[project]/src/components/unused/Selfie.jsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/Selfie.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/unused/Selfie.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "image_download_popup",
                onClick: (e)=>{
                    const link = document.querySelector('#image_download_popup');
                    link.style.display = 'none';
                },
                className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPopup(false),
                            className: "absolute top-2 right-2 text-gray-600 text-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/components/unused/Selfie.jsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            id: "snapshot",
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/unused/Selfie.jsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            id: "output",
                            alt: "Captured",
                            className: "max-w-full rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/unused/Selfie.jsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "out_link text-white bg-blue-500 px-6 py-3 rounded-md flex items-center gap-2",
                                download: true,
                                href: "",
                                target: "_blank",
                                onClick: (e)=>{
                                    const link = document.querySelector('#image_download_popup');
                                    link.style.display = 'none';
                                    saveSelfieCount();
                                },
                                rel: "noopener noreferrer",
                                children: "Download"
                            }, void 0, false, {
                                fileName: "[project]/src/components/unused/Selfie.jsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/unused/Selfie.jsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/unused/Selfie.jsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/unused/Selfie.jsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/unused/Selfie.jsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
};
_s(PictureModule, "KduQ3VGEqVfFIZDLj/xtOOAuQRI=");
_c = PictureModule;
const __TURBOPACK__default__export__ = PictureModule;
var _c;
__turbopack_refresh__.register(_c, "PictureModule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/snap.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unused$2f$Selfie$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/unused/Selfie.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const Snap = ()=>{
    _s();
    const [openSnap, setOpenSnap] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const closeSnap = ()=>{
        setOpenSnap(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "snap",
                className: "section 2xl:px-[10%] px-[5%] lg:py-[15%] py-28 grid  items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center flex-col sm:items-start items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "smalltext sm:text-left text-center ",
                                children: "Snap, Smile and"
                            }, void 0, false, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "bigtext sm:text-left text-center",
                                children: [
                                    "share your ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/snap.jsx",
                                        lineNumber: 19,
                                        columnNumber: 24
                                    }, this),
                                    " Moment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenSnap(true),
                                className: "uppercase flex gap-2 2xl:text-lg lg:mt-[5%] mt-7 text-base items-center bg-white text-[#000A32] rounded-3xl py-1 px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "h-6 w-4",
                                        src: "/snap.svg",
                                        alt: "img snap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/snap.jsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    "snap"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/snap.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "frame_img flex-1 relative 2xl:h-[500px] xl:h-[400px] h-[340px] sm:translate-x-[5%]  sm:block flex sm:items-start items-center sm:justify-normal justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[50%] -rotate-12 sm:left-[auto] left-[-10%] 2xl:w-[300px] xl:w-[270px] w-[180px] aspect-[9/16] z-0 opacity-0 image_1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/filter1.jpeg",
                                    alt: "img frame",
                                    className: "h-full w-full pointer-events-none object-cover select-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/snap.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[50%] sm:left-[35%] 2xl:w-[300px] xl:w-[270px] w-[180px] aspect-[9/16] z-10 opacity-0 image_2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/filter2.jpeg",
                                    alt: "img frame",
                                    className: "h-full w-full pointer-events-none object-cover select-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/snap.jsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[50%] sm:left-[65%] right-[-10%] rotate-12 2xl:w-[300px] xl:w-[270px] w-[180px] aspect-[9/16] opacity-0 image_3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/filter3.jpeg",
                                    alt: "img frame",
                                    className: "h-full w-full pointer-events-none object-cover select-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/snap.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/white_ring_complete.png",
                                alt: "white snap images",
                                className: "absolute sm:h-[300px] h-[200px] sm:top-[80%] top-[60%] lg:left-[200px] sm:left-[25%] left-[25%] z-[-1] pointer-events-none photo_ke_niche custom-spin-anti"
                            }, void 0, false, {
                                fileName: "[project]/src/components/snap.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/snap.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/snap.jsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            openSnap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed h-screen w-screen inset-0 z-[9999]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unused$2f$Selfie$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    closeSnap: closeSnap
                }, void 0, false, {
                    fileName: "[project]/src/components/snap.jsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/snap.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(Snap, "jNqGtePg8SOgWXw55rWaag9uO+M=");
_c = Snap;
const __TURBOPACK__default__export__ = Snap;
var _c;
__turbopack_refresh__.register(_c, "Snap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/footer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-black 2xl:10% px-[5%] py-20  relative z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-4  gap-8 lg:gap-0 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:block items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "h-[140px] 2lg:h-[160px]",
                            src: "/logo.png",
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/footer.jsx",
                            lineNumber: 8,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 7,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-rows-3 gap-4 mt-8 lg:gap-0 lg:mt-0 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4] text-center lg:text-left",
                                href: "#",
                                children: "Live Feed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4]  text-center lg:text-left",
                                href: "#",
                                children: "Snap Station"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4] text-center lg:text-left",
                                href: "#",
                                children: "Trivia Time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 14,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-rows-3 gap-4 lg:gap-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4] text-center lg:text-left",
                                href: "#",
                                children: "Live Polling"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4] text-center lg:text-left",
                                href: "#",
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 25,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-rows-3 gap-4 lg:gap-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl text-[#d9d9c4] font-bold text-center lg:text-left",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4] flex gap-4 justify-center lg:justify-start",
                                href: "mailto:tca@pernod-richard.com",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "h-5",
                                        src: "/mail.svg",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "tca@pernod-richard.com"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xl text-[#d9d9c4] flex gap-4 justify-center lg:justify-start",
                                href: "callto:+919876543210",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "h-6",
                                        src: "/phone.svg",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    " +91 987 654 3210"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.jsx",
                        lineNumber: 33,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 6,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-10 text-[#565656]",
                children: "All Rights Reserved @ Pernod Ricard 2024"
            }, void 0, false, {
                fileName: "[project]/src/components/footer.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_refresh__.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Trivia.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const Trivia = ()=>{
    _s();
    const [triviaState, setTriviaState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("start");
    const [trivia_list, setTrivia_list] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        correct: 0,
        incorrect: 0
    });
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trivia.useEffect": ()=>{
            const user = getFromLocalStorage("user");
            if (user) {
                setEmail(user.email);
            }
        }
    }["Trivia.useEffect"], []);
    const getFromLocalStorage = (key)=>{
        try {
            const jsonString = localStorage.getItem(key);
            return jsonString ? JSON.parse(jsonString) : null;
        } catch (error) {
            console.error("Error retrieving from localStorage:", error);
            return null;
        }
    };
    const handleOptionSelect = (option)=>{
        setSelectedAnswer(option.text); // Set the selected option
    };
    const handleSubmitAnswer = ()=>{
        if (!selectedAnswer) return; // Do nothing if no option is selected
        setIsAnswered(true); // Mark as answered
        const currentQuestion = trivia_list[currentQuestionIndex];
        const isCorrect = selectedAnswer === currentQuestion.answer;
        setScore((prevScore)=>({
                correct: prevScore.correct + (isCorrect ? 1 : 0),
                incorrect: prevScore.incorrect + (!isCorrect ? 1 : 0)
            }));
    };
    const handleNextQuestion = ()=>{
        setCurrentQuestionIndex((prevIndex)=>prevIndex + 1);
        setSelectedAnswer(null); // Reset selected answer
        setIsAnswered(false); // Reset answered state
    };
    async function saveDataToFirestore(collectionName, data) {
        try {
            const collectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storedb"], collectionName);
            const emailQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(collectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("email", "==", data.email));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(emailQuery);
            if (!querySnapshot.empty) {
                return {
                    success: false,
                    message: "Email already exists"
                };
            }
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(collectionRef, data);
            return {
                success: true,
                id: docRef.id
            };
        } catch (e) {
            console.error("Error adding document: ", e);
            return {
                success: false,
                error: e.message
            };
        }
    }
    const handleQuizSubmit = ()=>{
        saveDataToFirestore("trivia_submissions", {
            email: email,
            correct_answers: score.correct,
            wrong_answers: score.incorrect,
            created_at: new Date().toISOString()
        });
    };
    const currentQuestion = trivia_list[currentQuestionIndex];
    function clearUserAndReload() {
        localStorage.removeItem("user");
        window.location.href = window.location.origin + window.location.pathname;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Trivia.useEffect": ()=>{
            if (!email) return;
            const fetchTriviaData = {
                "Trivia.useEffect.fetchTriviaData": async ()=>{
                    try {
                        const emailQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storedb"], "trivia_submissions"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("email", "==", email));
                        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(emailQuery);
                        if (querySnapshot.empty) {
                            const triviaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["database"], "trivia");
                            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(triviaRef, {
                                "Trivia.useEffect.fetchTriviaData.unsubscribe": (snapshot)=>{
                                    const triviaData = snapshot.val();
                                    if (triviaData) {
                                        const triviaArray = Object.entries(triviaData).map({
                                            "Trivia.useEffect.fetchTriviaData.unsubscribe.triviaArray": ([key, value])=>({
                                                    id: key,
                                                    ...value
                                                })
                                        }["Trivia.useEffect.fetchTriviaData.unsubscribe.triviaArray"]);
                                        setTrivia_list(triviaArray);
                                    }
                                }
                            }["Trivia.useEffect.fetchTriviaData.unsubscribe"]);
                            return ({
                                "Trivia.useEffect.fetchTriviaData": ()=>unsubscribe()
                            })["Trivia.useEffect.fetchTriviaData"];
                        } else {
                            const submissions = querySnapshot.docs.map({
                                "Trivia.useEffect.fetchTriviaData.submissions": (doc)=>({
                                        id: doc.id,
                                        ...doc.data()
                                    })
                            }["Trivia.useEffect.fetchTriviaData.submissions"]);
                            console.log("Submissions:", submissions);
                            setTriviaState("review");
                            setScore({
                                correct: submissions[0].correct_answers,
                                incorrect: submissions[0].wrong_answers
                            });
                        }
                    } catch (error) {
                        console.error("Error fetching trivia data:", error);
                    }
                }
            }["Trivia.useEffect.fetchTriviaData"];
            fetchTriviaData();
        }
    }["Trivia.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "trivia",
        className: "section 2xl:px-[10%] px-[5%] flex w-full justify-center relative z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/small_ring.png",
                alt: "ring around live video",
                className: "lg:w-[400px] w-[50vw] lg:h-[400px] h-[50vw] absolute lg:right-[50px] right-[-25vw] lg:top-auto top-[-20vw] lg:bottom-[-100px] z-[-1] mix-blend-screen custom-spin iframe_right"
            }, void 0, false, {
                fileName: "[project]/src/components/Trivia.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:aspect-[16/9] aspect-[9/16] h-auto lg:w-[75%] w-full bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute h-full w-full flex items-center justify-center overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/gold_ring_complete.png",
                                alt: "gold_ring",
                                className: `golden_ring transition-all duration-200 mix-blend-screen custom-spin ${triviaState == "start" ? "start_active" : ""} ${triviaState == "question" ? "question_active" : ""} ${triviaState == "review" ? "review_active" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/stars.png",
                                alt: "img frame",
                                className: "h-full w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Trivia.jsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute left-0 top-0 h-full w-full flex items-center justify-center flex-col duration-300 ${triviaState == "start" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "bigtext capitalize",
                                children: "trivia time"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "smalltext capitalize",
                                children: "show what you know"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setTriviaState("question");
                                },
                                className: "uppercase cursor-pointer flex gap-2 2xl:text-lg lg:mt-[5%] mt-5 text-base items-center bg-white text-[#000A32] rounded-3xl py-1 px-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "h-6 w-4",
                                        src: "/play.svg",
                                        alt: "img snap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    "let's go"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Trivia.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `questions absolute left-0 top-0 h-full p-4 w-full  flex items-center justify-center gap-4 flex-col duration-300 ${triviaState == "question" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "smalltext ques mt-[50px] text-center",
                                children: currentQuestion && currentQuestion.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "options grid lg:grid-cols-2 grid-cols-1 gap-1",
                                children: currentQuestion && currentQuestion.options.map((option, index)=>{
                                    const isSelected = selectedAnswer === option.text;
                                    const isCorrect = option.text === currentQuestion.answer;
                                    const buttonStyle = isAnswered && isSelected ? {
                                        backgroundColor: isCorrect ? "#376B2C" : "#8E2525"
                                    } : isSelected ? {
                                        background: "linear-gradient(90deg, #D9A47B 0%, #C5A753 50%, #E3C362 100%)"
                                    } : {};
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleOptionSelect(option),
                                        disabled: isAnswered,
                                        style: buttonStyle,
                                        className: "relative bg-[#0A1230] lg:text-[20px] text-base text-white rounded-3xl py-0.5 px-3 min-w-[250px] uppercase  !font-thin",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/border.png",
                                                alt: "border",
                                                className: "absolute top-[-1px] left-[-1px] h-full w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Trivia.jsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this),
                                            option.text
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 204,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "navigation",
                                children: [
                                    !isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmitAnswer,
                                        disabled: !selectedAnswer,
                                        style: {
                                            cursor: !selectedAnswer ? "not-allowed" : "pointer",
                                            opacity: !selectedAnswer ? 0.6 : 1
                                        },
                                        className: "uppercase cursor-pointer flex gap-2 lg:text-[20px] text-base lg:mt-[6%] mt-3  items-center !bg-white !text-[#000A32] rounded-3xl py-1 px-3",
                                        children: [
                                            "Submit",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/arrow.svg",
                                                alt: "arrow icon",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Trivia.jsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    isAnswered && currentQuestionIndex < trivia_list.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNextQuestion,
                                        className: "uppercase cursor-pointer flex gap-2 lg:text-[20px]  lg:mt-[6%] mt-3 text-base items-center !bg-white !text-[#000A32] rounded-3xl py-1 px-3",
                                        children: [
                                            "Next",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/arrow.svg",
                                                alt: "arrow icon",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Trivia.jsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    isAnswered && currentQuestionIndex === trivia_list.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleQuizSubmit();
                                            setTriviaState("review");
                                        },
                                        className: "uppercase cursor-pointer flex gap-2 2xl:text-lg lg:mt-[6%] mt-3 text-base items-center !bg-white !text-[#000A32] rounded-3xl py-1 px-3",
                                        children: [
                                            "Finish",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/arrow.svg",
                                                alt: "arrow icon",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Trivia.jsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Trivia.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `review_answer absolute  left-0 top-0 h-full w-full flex flex-col items-center justify-center duration-300 ${triviaState == "review" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-baseline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "review_answer_ text-[#d9d9c4]",
                                        children: score.correct
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "review_answer___ text-[#d9d9c4]",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "review_answer__ text-white",
                                        children: trivia_list.length ? trivia_list.length : score.correct + score.incorrect
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "review_answer____",
                                children: [
                                    "Total Questions ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Trivia.jsx",
                                        lineNumber: 278,
                                        columnNumber: 29
                                    }, this),
                                    "Answered Correctly"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Trivia.jsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Trivia.jsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Trivia.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Trivia.jsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
};
_s(Trivia, "HguC3gD02rbjtWBlR83TJLYgv0Q=");
_c = Trivia;
const __TURBOPACK__default__export__ = Trivia;
var _c;
__turbopack_refresh__.register(_c, "Trivia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/EventPage.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$snap$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/snap.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trivia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Trivia.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const EventPage = ()=>{
    _s();
    const buttonStyle = {
        background: "linear-gradient(90deg, #D9A47B 0%, #C5A753 50%, #E3C362 100%)"
    };
    const [activePoll, setActivePoll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ispollShow, setIspollShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ispollload, setIspollload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userpolled, setUserpolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pollIndexNumber, setPollIndexNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventPage.useEffect": ()=>{
            const pollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["database"], "poll");
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(pollRef, {
                "EventPage.useEffect.unsubscribe": (snapshot)=>{
                    const pollData = snapshot.val();
                    if (pollData) {
                        const activePoll = Object.entries(pollData).find({
                            "EventPage.useEffect.unsubscribe.activePoll": ([key, value])=>value.isActive
                        }["EventPage.useEffect.unsubscribe.activePoll"]);
                        if (activePoll) {
                            const [id, data] = activePoll;
                            console.log(`Active Poll ID: ${id}`, data);
                            setActivePoll({
                                id,
                                ...data
                            });
                            setPollIndexNumber(data.PollIndex);
                        } else {
                            console.log("No active poll found.");
                            setActivePoll(null);
                            setPollIndexNumber(null);
                        }
                    } else {
                        console.error("No polls found in the database.");
                        setActivePoll(null);
                        setPollIndexNumber(null);
                    }
                }
            }["EventPage.useEffect.unsubscribe"]);
            return ({
                "EventPage.useEffect": ()=>unsubscribe()
            })["EventPage.useEffect"];
        }
    }["EventPage.useEffect"], []);
    const handlePollSelect = async (question, option)=>{
        try {
            const pollSubmissionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storedb"], "poll_submission");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(pollSubmissionRef, {
                question: activePoll.question,
                selectedOption: option.text,
                createdAt: new Date().toISOString(),
                email: email
            });
            console.log("Poll submission saved to Firestore.");
        } catch (error) {
            console.error("Error saving poll submission to Firestore: ", error);
        }
        try {
            const optionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["database"], `poll/${activePoll.id}/submissions`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["update"])(optionRef, {
                [option.text]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
            });
            console.log("Poll submission result updated in Realtime Database.");
        } catch (error) {
            console.error("Error updating poll submission result in Realtime Database: ", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventPage.useEffect": ()=>{
            const user = getFromLocalStorage("user");
            if (user) {
                setEmail(user.email);
            }
        }
    }["EventPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventPage.useEffect": function() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(document).ready({
                "EventPage.useEffect": function() {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".emoji").click({
                        "EventPage.useEffect": function() {
                            const emoji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).data("emoji");
                            const count = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
                            for(let i = 0; i < count; i++){
                                const leftSide = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
                                setTimeout({
                                    "EventPage.useEffect": ()=>{
                                        const $emojiElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("<span></span>").addClass("emoji-item").text(emoji).css('left', `${leftSide * 8}%`);
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".iframe_div").append($emojiElement);
                                        // Remove the emoji after the animation ends
                                        $emojiElement.on("animationend", {
                                            "EventPage.useEffect": function() {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).remove();
                                            }
                                        }["EventPage.useEffect"]);
                                    }
                                }["EventPage.useEffect"], 200);
                            }
                        }
                    }["EventPage.useEffect"]);
                }
            }["EventPage.useEffect"]);
        }
    }["EventPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventPage.useEffect": ()=>{
            if (!activePoll || !email) {
                return; // Exit early if required variables are not available
            }
            const getpollTest = {
                "EventPage.useEffect.getpollTest": async ()=>{
                    const emailPoll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storedb"], "poll_submission"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("email", "==", email), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("question", "==", activePoll.question) // Ensure activePoll.question is defined
                    );
                    try {
                        const querySnapshotPoll = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(emailPoll);
                        // Check if there are any documents that match the query
                        if (!querySnapshotPoll.empty) {
                            setIspollShow(true);
                            querySnapshotPoll.forEach({
                                "EventPage.useEffect.getpollTest": (doc)=>{
                                    const data = doc.data();
                                    // console.log(data.selectedOption);
                                    setUserpolled(data.selectedOption);
                                }
                            }["EventPage.useEffect.getpollTest"]);
                        } else {
                            setIspollShow(false);
                        }
                    } catch (error) {
                        console.error("Error fetching poll submission:", error);
                    } finally{
                        setIspollload(false); // Always reset the loading state
                    }
                }
            }["EventPage.useEffect.getpollTest"];
            // Call the async function
            getpollTest();
        }
    }["EventPage.useEffect"], [
        email,
        activePoll
    ]);
    const getFromLocalStorage = (key)=>{
        try {
            const jsonString = localStorage.getItem(key);
            return jsonString ? JSON.parse(jsonString) : null;
        } catch (error) {
            console.error("Error retrieving from localStorage:", error);
            return null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventPage.useEffect": ()=>{
            // Animation for image_1
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".image_1", {
                top: "-5%",
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: "#snap",
                    start: "top 80%",
                    end: "bottom 60%"
                }
            });
            // Animation for image_2
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".image_2", {
                top: "-20%",
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: "#snap",
                    start: "top 80%",
                    end: "bottom 60%"
                }
            });
            // Animation for image_3
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".image_3", {
                top: "0px",
                opacity: 1,
                duration: 0.5,
                delay: 1,
                scrollTrigger: {
                    trigger: "#snap",
                    start: "top 80%",
                    end: "bottom 60%"
                }
            });
        }
    }["EventPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: "/stars6.mp4",
                id: "video",
                autoPlay: true,
                loop: true,
                muted: true,
                controls: false,
                playsInline: true,
                className: "fixed h-screen w-screen inset-0 saturate-50 hue-rotate-180 object-cover mix-blend-screen pointer-events-none select-none"
            }, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 210,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "layer_back fixed"
            }, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 211,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                pollIndexNumber: pollIndexNumber
            }, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$snap$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trivia$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "poll",
                className: "poll section px-[10%] py-[9%] flex items-center justify-center relative z-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading_section flex flex-col ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "smalltext text-center -translate-x-10",
                                        children: "Have Your Say"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventPage.jsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "bigtext text-center translate-x-10",
                                        children: "Live Polling"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EventPage.jsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EventPage.jsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "option_div flex flex-col gap-2 items-center",
                                children: activePoll && activePoll.question ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "smalltext text-center mt-12 scale-95 max-w-[500px]",
                                            children: activePoll.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EventPage.jsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this),
                                        !ispollload && (!ispollShow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid mt-4  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-[5px]",
                                                children: activePoll.options.map((option)=>{
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            handlePollSelect(activePoll.question, option);
                                                            setIspollShow(true);
                                                        },
                                                        className: "relative bg-[#0A1230] text-[20px] text-white rounded-3xl sm:py-3 sm:px-3 py-1 min-w-[250px] uppercase !font-thin",
                                                        children: [
                                                            option.text,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                alt: "border",
                                                                className: "btn_bg absolute top-[-1px] left-[-1px] h-full w-full sm:min-w-[250px] min-w-[200px] bg-red-200"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EventPage.jsx",
                                                                lineNumber: 252,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, option.text, true, {
                                                        fileName: "[project]/src/components/EventPage.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EventPage.jsx",
                                                lineNumber: 240,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-l border-b h-[400px] w-[100%] min-w-[800px] mt-[50px] pb-[20px] pl-[20px] flex gap-2 items-end",
                                                children: activePoll.options.map((option)=>{
                                                    const totalSubmissions = Object.values(activePoll.submissions || {}).reduce((sum, count)=>sum + count, 0);
                                                    const optionCount = activePoll.submissions?.[option.text] || 0;
                                                    const percentage = totalSubmissions > 0 ? optionCount / totalSubmissions * 100 : 0;
                                                    const barStyle = {
                                                        height: `${percentage}%`,
                                                        background: userpolled === option.text ? "linear-gradient(356deg, #D9A47B 1.78%, #C5A753 50%, #E3C362 98.22%)" : "#5C6A87"
                                                    };
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        title: `${option.text}: ${optionCount} (${percentage.toFixed(1)}%)`,
                                                        style: barStyle,
                                                        className: `relative w-full  min-h-1 rounded-lg bg-gray-200`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-sm absolute top-[-35px]",
                                                            children: option.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EventPage.jsx",
                                                            lineNumber: 291,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, option.text, false, {
                                                        fileName: "[project]/src/components/EventPage.jsx",
                                                        lineNumber: 283,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EventPage.jsx",
                                                lineNumber: 263,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false))
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl w-[350px] text-center",
                                                children: "The live polling will be starting soon!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EventPage.jsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/EventPage.jsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl w-[350px] text-center",
                                                children: "Stay tuned and get ready to participate."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EventPage.jsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EventPage.jsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/src/components/EventPage.jsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EventPage.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/white_ring_complete.png",
                        alt: "ring around live video",
                        className: "sm:w-auto sm:h-[150%] min-w-[80vh] w-[80vh] min-h-80vh h-80vh sm:min-w-0 sm:min-h-0  aspect-square absolute pointer-events-none mix-blend-screen custom-spin iframe_right"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventPage.jsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/small_ring.png",
                        alt: "ring around live video",
                        className: "sm:w-[300px] w-[50vw] h-[50vw] sm:h-[300px] aspect-square sm:left-[-120px] left-[-25vw] sm:bottom-[-150px] bottom-[-25vw] absolute pointer-events-none mix-blend-screen custom-spin iframe_right"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventPage.jsx",
                        lineNumber: 322,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/small_ring.png",
                        alt: "ring around live video",
                        className: "sm:w-[300px] w-[40vw] h-[40vw] sm:h-[300px] aspect-square sm:right-[-180px] right-[-25vw] sm:bottom-[50px] bottom-[ovw] absolute pointer-events-none mix-blend-screen custom-spin iframe_right"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EventPage.jsx",
                        lineNumber: 327,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/EventPage.jsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(EventPage, "u0/WDLZOkmt57PPQ+rKJqM60s/A=");
_c = EventPage;
const __TURBOPACK__default__export__ = EventPage;
var _c;
__turbopack_refresh__.register(_c, "EventPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HomeCount.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const HomeCount = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeCount.useEffect": ()=>{
            const targetDate = new Date("2025-01-23T20:00:00"); // 8:00 PM, 23rd January
            const updateCountdown = {
                "HomeCount.useEffect.updateCountdown": ()=>{
                    const now = new Date();
                    const timeDiff = targetDate - now;
                    if (timeDiff <= 0) {
                        // Countdown complete
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#home_count").html("<h1 class='text-white text-6xl'>Countdown Completed!</h1>");
                        clearInterval(interval);
                        return;
                    }
                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    const minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
                    const seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
                    // Update the HTML
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#days").text(days.toString().padStart(2, "0"));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#hours").text(hours.toString().padStart(2, "0"));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#minutes").text(minutes.toString().padStart(2, "0"));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#seconds").text(seconds.toString().padStart(2, "0"));
                }
            }["HomeCount.useEffect.updateCountdown"];
            // Set interval to update countdown every second
            const interval = setInterval(updateCountdown, 1000);
            // Cleanup interval on component unmount
            return ({
                "HomeCount.useEffect": ()=>clearInterval(interval)
            })["HomeCount.useEffect"];
        }
    }["HomeCount.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeCount.useEffect": ()=>{
            const isMoble = window.matchMedia("(max-width: 1024px)").matches;
            const isDesk = window.matchMedia("(max-width: 640px)").matches;
            console.log(isDesk);
            if (!isDesk) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".white_complete_ring", {
                    duration: 1,
                    scale: 0,
                    opacity: 0.6,
                    x: 500,
                    top: isMoble ? '-30%' : '-55%',
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".gold_complete_ring", {
                    duration: 1,
                    opacity: 0,
                    x: 500,
                    top: isMoble ? '-30%' : '-55%',
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".logo_div", {
                    top: '-30%',
                    scale: isMoble ? 1 : 0.7,
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".intro_head", {
                    top: '-30%',
                    scale: 0.7,
                    opacity: 0,
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".white_start", {
                    top: '-60%',
                    minHeight: '180%',
                    scale: 0.7,
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("#video", {
                    height: '150vh',
                    top: '-50vh',
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".timer", {
                    opacity: 0,
                    duration: 1,
                    delay: 1,
                    top: isMoble ? '20%' : '5%'
                }, {
                    opacity: 1,
                    duration: 1,
                    delay: 2,
                    top: isMoble ? '11%' : '0%',
                    ease: "easeInOut"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".left_bottom_ring", {
                    bottom: '-10vw',
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".right_bottom_ring", {
                    bottom: '0vw',
                    duration: 1,
                    delay: 1
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".white_complete_ring", {
                    duration: 1,
                    opacity: 1,
                    x: 500,
                    top: '-22%',
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".gold_complete_ring", {
                    duration: 1,
                    opacity: 0,
                    x: 500,
                    top: '-22%',
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".logo_div", {
                    top: '-33%',
                    scale: isMoble ? 0.8 : 0.7,
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".intro_head", {
                    top: '-30%',
                    scale: 0.7,
                    opacity: 0,
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(".timer", {
                    opacity: 0,
                    duration: 1,
                    delay: 1,
                    top: '20%'
                }, {
                    opacity: 1,
                    duration: 1,
                    delay: 2,
                    top: '8%',
                    ease: "easeInOut"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".white_start", {
                    top: '-60%',
                    minHeight: '160%',
                    scale: 0.7,
                    duration: 1,
                    delay: 1
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".right_bottom_ring", {
                    // right: '-35%',
                    duration: 1,
                    delay: 2
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".left_bottom_ring", {
                    bottom: '-60vw',
                    left: '0%',
                    duration: 1,
                    delay: 2
                });
            }
        }
    }["HomeCount.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home_count",
            className: "fixed h-screen w-full bg-[#000A32] top-0 left-0 right-0 bottom-0 flex justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: "/stars6.mp4",
                    id: "video",
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    controls: false,
                    playsInline: true,
                    className: "absolute h-screen w-screen inset-0 saturate-50 hue-rotate-180 object-cover mix-blend-screen pointer-events-none select-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 230,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "background",
                    src: "/stars.png",
                    id: "",
                    width: 1920,
                    height: 1080,
                    className: "white_start hidden absolute m-0 border-0 h-full min-w-[150%] min-h-[200%] left-[-25%] top-[-50%] "
                }, void 0, false, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 232,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "background",
                    src: "/white_ring_complete.png",
                    id: "white_complete_ring",
                    width: 1920,
                    height: 1080,
                    className: "white_complete_ring custom-spin absolute m-0 border-0 "
                }, void 0, false, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 240,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "overlay",
                    src: "/gold_ring_complete.png",
                    width: 1920,
                    height: 1080,
                    className: "gold_complete_ring custom-spin-anti duration-[2000] absolute m-0 border-0 h-full mix-blend-screen"
                }, void 0, false, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 248,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute logo_div top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "logo",
                            src: "/logo.png",
                            width: 1920,
                            height: 1080,
                            className: "relative logo_center m-0 border-0 lg:w-auto lg:h-[30%] w-[30%] z-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 259,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "backdrop_ absolute logo_center lg:h-[50%] rounded-full w-[30%] z-[2]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 266,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "intro_head text-white sm:text-4xl text-2xl capitalize z-10 ",
                            children: "A galaxy of Excellence"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 269,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 257,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "timer absolute top-0 left-0 right-0 bottom-0 h-full w-full flex items-center justify-center flex-col gap-8  opacity-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "sm:text-4xl text-2xl text-white capitalize",
                            children: "time till take off"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 275,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center lg:gap-6 sm:gap-5 gap-4 2xl:gap-16 xl:gap-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col   justify-center -mb-[40px] items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "days",
                                            className: "lg:text-8xl text-white font-semibold sm:text-7xl text-5xl",
                                            children: "00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 278,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "uppercase text-white sm:text-xl text-sm",
                                            children: "days"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 279,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 277,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lg:text-6xl sm:text-4xl text-xl text-white",
                                    children: ":"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 281,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col   justify-center -mb-[40px] items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "hours",
                                            className: "lg:text-8xl text-white font-semibold sm:text-7xl text-5xl",
                                            children: "00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 283,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "uppercase text-white sm:text-xl text-sm",
                                            children: "hours"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lg:text-6xl sm:text-4xl text-xl text-white",
                                    children: ":"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 286,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col   justify-center -mb-[40px] items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "minutes",
                                            className: "lg:text-8xl text-white font-semibold sm:text-7xl text-5xl",
                                            children: "00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "uppercase text-white sm:text-xl text-sm",
                                            children: "minutes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 287,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lg:text-6xl sm:text-4xl text-xl text-white",
                                    children: ":"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 291,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col   justify-center -mb-[40px] items-center gap-3 2xl:min-w-[120px] xl:min-w-[112px] min-w-[60px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "seconds",
                                            className: "lg:text-8xl text-white font-semibold sm:text-7xl text-5xl ",
                                            children: "00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 293,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "uppercase text-white sm:text-xl text-sm",
                                            children: "seconds"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomeCount.jsx",
                                            lineNumber: 294,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HomeCount.jsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 276,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute h-full w-full pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/small_ring.png",
                            width: 500,
                            height: 500,
                            alt: "small ring image",
                            className: "custom-spin mix-blend-screen left_bottom_ring absolute border-0 m-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 299,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/small_ring.png",
                            width: 500,
                            height: 500,
                            alt: "small ring image",
                            className: "custom-spin-anti mix-blend-screen right_bottom_ring absolute border-0 m-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/star_without_bg.svg",
                            alt: "small ring",
                            className: "hidden pointer-events-none select-none absolute w-screen h-[70vh] bottom-0 left-[25%] rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomeCount.jsx",
                            lineNumber: 301,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomeCount.jsx",
                    lineNumber: 298,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HomeCount.jsx",
            lineNumber: 229,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
_s(HomeCount, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = HomeCount;
const __TURBOPACK__default__export__ = HomeCount;
var _c;
__turbopack_refresh__.register(_c, "HomeCount");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/unused/LiveEmoticons .jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const LiveEmoticons = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveEmoticons.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(document).ready({
                "LiveEmoticons.useEffect": function() {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".emoji").click({
                        "LiveEmoticons.useEffect": function() {
                            const emoji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).data("emoji");
                            const $emojiElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("<span></span>").addClass("emoji-item").text(emoji);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#wave-container").append($emojiElement);
                            // Remove the emoji after the animation ends
                            $emojiElement.on("animationend", {
                                "LiveEmoticons.useEffect": function() {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).remove();
                                }
                            }["LiveEmoticons.useEffect"]);
                        }
                    }["LiveEmoticons.useEffect"]);
                }
            }["LiveEmoticons.useEffect"]);
        }
    }["LiveEmoticons.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave-container",
                id: "wave-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    width: "100%",
                    height: "200",
                    src: "https://www.youtube.com/embed/bZu_lEMW-CQ?si=R_aBKY0jTqNbZxtN",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    allowFullScreen: true
                }, void 0, false, {
                    fileName: "[project]/src/components/unused/LiveEmoticons .jsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/unused/LiveEmoticons .jsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "emoji-list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "emoji",
                        "data-emoji": "👍",
                        children: "👍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/LiveEmoticons .jsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "emoji",
                        "data-emoji": "❤️",
                        children: "❤️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/LiveEmoticons .jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "emoji",
                        "data-emoji": "🎉",
                        children: "🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/LiveEmoticons .jsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/unused/LiveEmoticons .jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(LiveEmoticons, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LiveEmoticons;
const __TURBOPACK__default__export__ = LiveEmoticons;
var _c;
__turbopack_refresh__.register(_c, "LiveEmoticons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Login.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const Login = ()=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isPopupOpen, setIsPopupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // const[isPopupOpen, setIsPopupOpen] = useState(false);
    function sendEmail() {
        if (!email) {
            alert("Please enter an email address.");
            return;
        }
        const fullEmail = `${email}`; // Construct the full email
        setIsLoading(true);
        localStorage.removeItem('user');
        fetch(`https://login-tyus23bdta-uc.a.run.app/?email=${fullEmail}`, {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(()=>{
            // alert("Verification email sent!");
            setIsPopupOpen(true);
        }).catch((error)=>{
            console.error("Error sending email:", error);
        // alert("Failed to send verification email. Please try again.");
        }).finally(()=>{
            setIsLoading(false);
        });
    }
    const validateInput = (e)=>{
        const value = e.target.value;
        if (value.includes('@')) {
        // setErrorMessage("'@' is not allowed.");
        // Remove the '@' character from the input
        // setInputValue(value.replace(/@/g, ''));
        } else {
        // setErrorMessage('');
        // setInputValue(value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "login",
            className: "login fixed h-screen w-full bg-[#000A32] grid grid-cols-2 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative first",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: 1920,
                            height: 1080,
                            src: "/gold_ring_complete.png",
                            alt: "gold ring",
                            className: "home_gold  mix-blend-screen custom-spin-anti pointer-events-none select-none h-screen w-auto mt-0 border-0 absolute right-[10%] top-[-10vh] bottom-0 min-h-[120vh] min-w-[120vh] !aspect-square"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 62,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "background",
                            src: "/stars.png",
                            id: "",
                            width: 1920,
                            height: 1080,
                            className: "white_start custom-spin pointer-events-none  absolute m-0 border-0 h-full min-w-[190%] min-h-[150%] left-[-65%] sm:top-[-20%] top-[-30%] "
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 63,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-fit w-full lg:h-full h-[70%] 2xl:pl-[15%] flex justify-center items-center flex-col gap-5 p-[5%] ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    className: "m-0 lg:w-[100%] w-[35%] border-0",
                                    width: 500,
                                    height: 500,
                                    alt: "logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Login.jsx",
                                    lineNumber: 72,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white sm:text-3xl text-2xl logo_text",
                                    children: "A Galaxy of Excellence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Login.jsx",
                                    lineNumber: 73,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 71,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Login.jsx",
                    lineNumber: 61,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full flex flex-col gap-6 justify-center lg:items-start items-center p-[5%] sm:mb-0 sm:pb-0 pb-[25%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/star_without_bg.svg",
                            className: "m-0  pointer-events-none select-none absolute right-0 top-0 border-0 w-[60%]",
                            width: 500,
                            height: 500,
                            alt: "star"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 77,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/star_without_bg.svg",
                            className: "m-0  pointer-events-none select-none absolute right-0 bottom-0 rotate-180 border-0 w-[60%]",
                            width: 500,
                            height: 500,
                            alt: "star"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 78,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/small_ring.png",
                            className: "mix-blend-screen custom-spin top_ring_image m-0 pointer-events-none select-none absolute lg:right-0 lg:left-auto left-[-30.5vw] right-auto  border-0 lg:w-[45vh] w-[45vw] lg:h-[45vh] h-[45vw] lg:bottom-[-20vh] bottom-0",
                            width: 500,
                            height: 500,
                            alt: "star"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 79,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/small_ring.png",
                            className: "mix-blend-screen m-0 bottom_ring_image custom-spin-anti pointer-events-none select-none absolute lg:bottom-auto lg:right-[8%] right-[-22.5vw] lg:top-[-22.5vh] top-auto bottom-[-22.5vw] border-0 lg:w-[45vh] w-[45vw] lg:h-[45vh] h-[45vw]",
                            width: 500,
                            height: 500,
                            alt: "star"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 80,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "2xl:text-3xl text-[24px] font-thin text-[#d9d9c4]",
                            children: "Enter Your Email Id"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 81,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex sm:gap-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    onPaste: (e)=>{
                                        e.preventDefault();
                                    },
                                    onChange: (e)=>setEmail(e.target.value),
                                    autoComplete: "off",
                                    value: email,
                                    spellCheck: false,
                                    id: "email",
                                    className: "[all:unset] !focus:border-0 px-1.5 font-thin !text-[#d9d9c4] 2xl:!text-3xl !border-b sm:!text-[24px] !text-[20px] !border-[#5C6A87] lg:!min-w-[350px] sm:min-w-[250px] min-w-[150px] !w-[150px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Login.jsx",
                                    lineNumber: 82,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#5C6A87] sm:text-[24px] text-[20px]",
                                    children: "@permo-ricard.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Login.jsx",
                                    lineNumber: 82,
                                    columnNumber: 418
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 82,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: sendEmail,
                            className: `${isLoading ? 'pointer-events-none' : ''} uppercase cursor-pointer flex gap-2 2xl:!text-2xl  lg:mt-[6%] mt-5 text-base items-center bg-[#d9d9c4] text-[#000A32] rounded-3xl py-1 px-3 `,
                            children: [
                                isLoading ? 'Please wait...' : 'step into the galaxy',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "h-4 w-4",
                                    src: "/arrow.svg",
                                    alt: "img snap"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Login.jsx",
                                    lineNumber: 83,
                                    columnNumber: 297
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Login.jsx",
                            lineNumber: 83,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Login.jsx",
                    lineNumber: 76,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "mail_pop",
                    className: `absolute w-full h-full bg-[#00000050] backdrop-blur-sm  justify-center items-center ${!isPopupOpen ? ' hidden' : 'flex'} `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-[#000A32] p-5 flex flex-col gap-3 items-center justify-center lg:py-[100px] py-20 h-fit lg:px-[100px] sm:w-fit w-full px-8 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-center sm:text-[20px] text-xs ",
                                children: "We have sent you an invitation link at your email address."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sm:text-[34px] text-xl text-[#d9d9c4]",
                                children: email
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/small_ring.png",
                                alt: "small ring",
                                className: "mix-blend-screen small_ring_pop custom-spin pointer-events-none select-none absolute h-[250px] w-[250px] right-[-125px] top-[-125px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/small_ring.png",
                                alt: "small ring",
                                className: "mix-blend-screen small_ring_pop_left custom-spin-anti pointer-events-none select-none absolute h-[250px] w-[250px] left-[-125px] bottom-[-125px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/star_without_bg.svg",
                                alt: "small ring",
                                className: " pointer-events-none select-none absolute h-[300px] w-[70%] right-[-30%] bottom-[-20px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/star_without_bg.svg",
                                alt: "small ring",
                                className: " pointer-events-none select-none absolute h-[400px] w-[800px] right-[-30%] bottom-[-80%]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/star_without_bg.svg",
                                alt: "small ring",
                                className: " pointer-events-none select-none absolute h-[300px] w-[70%] left-[-30%] top-[-40px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Login.jsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Login.jsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Login.jsx",
                    lineNumber: 86,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Login.jsx",
            lineNumber: 60,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
_s(Login, "we2eEgo7HPLrdxk1a2TangZsiag=");
_c = Login;
const __TURBOPACK__default__export__ = Login;
var _c;
__turbopack_refresh__.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/unused/TriviaStepper.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const TriviaStepper = ()=>{
    _s();
    const trivia_list = [
        {
            id: 1,
            question: "Do you prefer working from home?",
            options: [
                {
                    id: 1,
                    text: "Yes"
                },
                {
                    id: 2,
                    text: "can"
                },
                {
                    id: 3,
                    text: "could"
                },
                {
                    id: 4,
                    text: "No"
                }
            ],
            answer: 'No'
        },
        {
            id: 2,
            question: "Do you enjoy team collaboration?",
            options: [
                {
                    id: 1,
                    text: "Yes"
                },
                {
                    id: 2,
                    text: "can"
                },
                {
                    id: 3,
                    text: "could"
                },
                {
                    id: 2,
                    text: "No"
                }
            ],
            answer: 'Yes'
        },
        {
            id: 3,
            question: "Are you satisfied with your current role?",
            options: [
                {
                    id: 1,
                    text: "Yes"
                },
                {
                    id: 2,
                    text: "can"
                },
                {
                    id: 3,
                    text: "could"
                },
                {
                    id: 2,
                    text: "No"
                }
            ],
            answer: 'Yes'
        },
        {
            id: 4,
            question: "Do you prefer coffee over tea?",
            options: [
                {
                    id: 1,
                    text: "Coffee"
                },
                {
                    id: 2,
                    text: "can"
                },
                {
                    id: 3,
                    text: "could"
                },
                {
                    id: 2,
                    text: "Tea"
                }
            ],
            answer: 'Tea'
        }
    ];
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOptionSelect = (option)=>{
        setSelectedAnswer(option.text); // Set the selected option
    };
    const handleSubmitAnswer = ()=>{
        if (!selectedAnswer) return; // Do nothing if no option is selected
        setIsAnswered(true); // Mark as answered
    };
    const handleNextQuestion = ()=>{
        setCurrentQuestionIndex((prevIndex)=>prevIndex + 1);
        setSelectedAnswer(null); // Reset selected answer
        setIsAnswered(false); // Reset answered state
    };
    const handleQuizSubmit = ()=>{
        alert("Quiz completed! Thanks for participating.");
    };
    const currentQuestion = trivia_list[currentQuestionIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "quiz-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "question-count text-black",
                children: [
                    String(currentQuestionIndex + 1).padStart(2, '0'),
                    " / ",
                    String(trivia_list.length).padStart(2, '0')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: currentQuestion.question
            }, void 0, false, {
                fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "options",
                children: currentQuestion.options.map((option)=>{
                    const isSelected = selectedAnswer === option.text;
                    const isCorrect = option.text === currentQuestion.answer;
                    const buttonStyle = isAnswered && isSelected ? {
                        backgroundColor: isCorrect ? 'green' : 'red'
                    } : isSelected ? {
                        backgroundColor: 'lightblue'
                    } : {};
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleOptionSelect(option),
                        disabled: isAnswered,
                        style: buttonStyle,
                        children: option.text
                    }, option.id, false, {
                        fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navigation",
                children: [
                    !isAnswered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmitAnswer,
                        disabled: !selectedAnswer,
                        style: {
                            cursor: !selectedAnswer ? 'not-allowed' : 'pointer',
                            opacity: !selectedAnswer ? 0.6 : 1
                        },
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    isAnswered && currentQuestionIndex < trivia_list.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNextQuestion,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    isAnswered && currentQuestionIndex === trivia_list.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleQuizSubmit,
                        children: "Finish"
                    }, void 0, false, {
                        fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/unused/TriviaStepper.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/unused/TriviaStepper.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s(TriviaStepper, "yRZe1yqU93zyHCVCEFCeETxSnq8=");
_c = TriviaStepper;
const __TURBOPACK__default__export__ = TriviaStepper;
var _c;
__turbopack_refresh__.register(_c, "TriviaStepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unused$2f$DisableInspect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/unused/DisableInspect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EventPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/EventPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeCount$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/HomeCount.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unused$2f$LiveEmoticons__$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/unused/LiveEmoticons .jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Login$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Login.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unused$2f$TriviaStepper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/unused/TriviaStepper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$unused$2f$Selfie$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/unused/Selfie.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
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
const saveToLocalStorage = (key, value)=>{
    try {
        const jsonString = JSON.stringify(value);
        localStorage.setItem(key, jsonString);
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
};
const getFromLocalStorage = (key)=>{
    try {
        const jsonString = localStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : null;
    } catch (error) {
        console.error("Error retrieving from localStorage:", error);
        return null;
    }
};
function Home() {
    _s();
    const [isUserActive, setIsUserActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isloading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchUserData = {
                "Home.useEffect.fetchUserData": async (identifier)=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`https://login-tyus23bdta-uc.a.run.app/?uid=${identifier.uid}`, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        if (response.data) {
                            const { email, uid } = response.data;
                            if (email && uid) {
                                saveToLocalStorage("user", {
                                    email,
                                    uid
                                });
                                setIsUserActive(true);
                            }
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                        setIsUserActive(false);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["Home.useEffect.fetchUserData"];
            if ("TURBOPACK compile-time truthy", 1) {
                const storedUser = getFromLocalStorage("user");
                if (storedUser?.uid) {
                    fetchUserData({
                        uid: storedUser.uid
                    });
                } else {
                    const params = new URLSearchParams(window.location.search);
                    const uid = params.get("uid");
                    if (uid) {
                        fetchUserData({
                            uid
                        });
                    } else {
                        setIsLoading(false);
                    }
                }
            }
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: !isloading && (isUserActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EventPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 84,
            columnNumber: 38
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Login$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 84,
            columnNumber: 54
        }, this))
    }, void 0, false);
}
_s(Home, "wmhsY5FU4o2mzyAY17dPxrUVZQM=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_abd369._.js.map