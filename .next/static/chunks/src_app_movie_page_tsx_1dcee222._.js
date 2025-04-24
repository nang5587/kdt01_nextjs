(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/movie/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BoxOffice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
// import mv from "../assets/mvimg.png"
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function BoxOffice() {
    _s();
    //ref
    const refDt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    //화면에 랜더링 될 상태 변수
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [botton, setBotton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [ndt, setnDt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const getYesterday = ()=>{
        const dt = new Date();
        dt.setDate(dt.getDate() - 1);
        //년도
        const year = dt.getFullYear();
        //월
        const month = String(dt.getMonth() + 1).padStart(2, '0');
        // month = month < 10 ? '0' + month : month ;
        //일 
        const day = String(dt.getDate()).padStart(2, '0');
        return year + '-' + month + '-' + day;
    };
    //일일 박스 오피스 정보 가져오기
    const getFetchData = async ()=>{
        const mvApiKey = ("TURBOPACK compile-time value", "a0f17ab458a55cb486b67e5064ff9960");
        const tmdt = ndt.replaceAll('-', '');
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        url = `${url}key=${mvApiKey}&targetDt=${tmdt}`;
        console.log("url", url);
        // console.log(refDt.current.value);
        // console.log(url)
        const resp = await fetch(url);
        const data = await resp.json();
        const boxList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList);
        const tm = boxList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                onClick: ()=>handleClick(item),
                className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200   hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer hover:font-bold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: " px-6 p-4 text-center",
                        children: item.rank
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 71,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: " px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                        children: item.movieNm
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 74,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: " px-6 py-4 text-right",
                        children: parseInt(item.salesAmt).toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 77,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: " px-6 py-4 text-right",
                        children: parseInt(item.audiCnt).toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 80,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: " px-6 py-4 text-right",
                        children: parseInt(item.salesAcc).toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 83,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: " px-6 py-4 text-right",
                        children: parseInt(item.audiAcc).toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 86,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "w-full px-6 py-4 text-center inline-flex justify-center items-center",
                        children: [
                            parseInt(item.rankInten) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowUp"], {}, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 104
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/movie/page.tsx",
                                lineNumber: 90,
                                columnNumber: 73
                            }, this) : parseInt(item.rankInten) < 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowDown"], {}, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 108
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/movie/page.tsx",
                                lineNumber: 91,
                                columnNumber: 76
                            }, this) : '',
                            " ",
                            item.rankInten == "0" ? '-' : Math.abs(parseInt(item.rankInten))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 89,
                        columnNumber: 39
                    }, this)
                ]
            }, item.movieCd, true, {
                fileName: "[project]/src/app/movie/page.tsx",
                lineNumber: 68,
                columnNumber: 48
            }, this));
        setTags(tm);
    };
    const handleClick = (item)=>{
        const bt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: "border-b bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 p-4 text-center font-bold text-black",
                colSpan: 7,
                children: [
                    "[",
                    item.rankOldAndNew,
                    " ",
                    item.openDt,
                    "] ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-600",
                        children: item.movieNm
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 100,
                        columnNumber: 56
                    }, this),
                    ",   상영한 스크린 수: ",
                    item.scrnCnt,
                    ",   상영횟수: ",
                    item.showCnt
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/movie/page.tsx",
                lineNumber: 99,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/movie/page.tsx",
            lineNumber: 98,
            columnNumber: 34
        }, this);
        setBotton(bt);
    };
    const dateChng = ()=>{
        if (!refDt.current) return;
        setnDt(refDt.current?.value);
        setBotton('');
    };
    //컴포넌트가 실행 시 한 번 fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoxOffice.useEffect": ()=>{
            setnDt(getYesterday());
            if (refDt.current) refDt.current.max = getYesterday();
        }
    }["BoxOffice.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoxOffice.useEffect": ()=>{
            if (!ndt) return;
            if (refDt.current) refDt.current.value = ndt;
            getFetchData();
        }
    }["BoxOffice.useEffect"], [
        ndt
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-11/12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-left ml-5 text-gray-700 flex flex-row justify-start items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/mvimg.png",
                            width: 50,
                            height: 50,
                            alt: "mvimg",
                            className: "tilt-animation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/movie/page.tsx",
                            lineNumber: 130,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    " Box Office"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/movie/page.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end items-center font-bold text-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    ref: refDt,
                    onChange: dateChng,
                    className: "mb-5 mx-5 px-4 py-1 bg-white border border-gray-200 rounded-lg shadow-sm    focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/app/movie/page.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/movie/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "w-20 font-bold px-6 py-3 text-center",
                                    children: "순위"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "min-w-auto px-6 py-3 text-center",
                                    children: "영화명"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "min-w-auto px-6 py-3 text-center w-1/7",
                                    children: "매출액"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "min-w-auto  px-6 py-3 text-center w-1/7",
                                    children: "관객수"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "min-w-auto  px-6 py-3 text-center w-1/7",
                                    children: "누적 매출액"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "min-w-auto  px-6 py-3 text-center w-1/7",
                                    children: "누적 관객수"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "min-w-auto  px-6 py-3 text-center w-24",
                                    children: "증감율"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/movie/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/movie/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: tags
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                        children: botton
                    }, void 0, false, {
                        fileName: "[project]/src/app/movie/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/movie/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/movie/page.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(BoxOffice, "Tdwb4u+n5yRVarLVCZB6s7XUycA=");
_c = BoxOffice;
var _c;
__turbopack_context__.k.register(_c, "BoxOffice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_movie_page_tsx_1dcee222._.js.map