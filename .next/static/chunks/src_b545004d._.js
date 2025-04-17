(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/food/FoodCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FoodCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function FoodCard({ obj }) {
    _s();
    const imgs = {
        "광역지원센터": "busan",
        "기초푸드뱅크": "bank",
        "기초푸드마켓": "market"
    };
    const [isShow, setIsShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleShow = ()=>{
        setIsShow(!isShow);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-58  rounded-2xl text-gray-600 bg-white flex justify-start items-start text-left   shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/4 flex justify-center pt-3 pl-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: `/${imgs[obj["구분"]]}.png`,
                    width: 200,
                    height: 200,
                    alt: obj["구분"]
                }, void 0, false, {
                    fileName: "[project]/src/app/food/FoodCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/food/FoodCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-3/4 h-full flex flex-col px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1/5 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-bold",
                            children: obj["사업장명"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/food/FoodCard.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/food/FoodCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1/5 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base font-bold",
                            children: obj["운영주체명"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/food/FoodCard.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/food/FoodCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: obj["사업장 소재지"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/food/FoodCard.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/food/FoodCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1/5 ",
                        onClick: handleShow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "h-11/12 text-xs bg-white shadow-lg shadow-gray-400 border-2 border-gray-200 rounded-md font-bold text-gray-500 flex items-center px-3 py-0.5   cursor-pointer",
                            children: isShow && `연락처(대표번호) : ${obj["연락처(대표번호)"]}, 팩스 : ${obj["팩스번호"]}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/food/FoodCard.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/food/FoodCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/food/FoodCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/food/FoodCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(FoodCard, "vUmtCUv4XQXyrC6y2c4yQYENkTw=");
_c = FoodCard;
var _c;
__turbopack_context__.k.register(_c, "FoodCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/food/fooddata.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"구분\":\"광역지원센터\",\"시군구\":\"부산시\",\"사업장명\":\"부산광역푸드뱅크\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호\",\"연락처(대표번호)\":\"051-791-1377\",\"팩스번호\":\"051-714-3096\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"부산광역시사회복지협의회\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"강서구\",\"사업장명\":\"강서구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 강서구 순아강변길 5(명지동)\",\"연락처(대표번호)\":\"051-271-0560~1\",\"팩스번호\":\"051-271-0562\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"낙동종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"금정구\",\"사업장명\":\"금정구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 금정구 중앙대로2349번길 3(노포동)\",\"연락처(대표번호)\":\"051)508-1998\",\"팩스번호\":\"051)508-6550\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"남광종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"기장군\",\"사업장명\":\"기장군기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산시 기장군 차성로288번길 27, 2층\",\"연락처(대표번호)\":\"051-724-3457\",\"팩스번호\":\"051-724-3459\",\"운영주체 분류\":\"2. 재단법인\",\"운영주체명\":\"대한성공회유지재단\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"남구\",\"사업장명\":\"남구기초푸드뱅크\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 남구 동제당로 258(우암동)\",\"연락처(대표번호)\":\"051)647-3655\",\"팩스번호\":\"051)647-3656\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"남구종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"동구\",\"사업장명\":\"동구기초푸드뱅크\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 동구 안창로 57 동구종합사회복지관(범일동)\",\"연락처(대표번호)\":\"051-633-3367\",\"팩스번호\":\"051-631-3991\",\"운영주체 분류\":\"2. 재단법인\",\"운영주체명\":\"동구종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"동래구\",\"사업장명\":\"동래구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 동래구 시실로107번길 151(명장동)\",\"연락처(대표번호)\":\"051)531-2460\",\"팩스번호\":\"051)524-2107\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"동래종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"부산진구\",\"사업장명\":\"부산진구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 부산진구 당감서로 16(당감동)\",\"연락처(대표번호)\":\"051-896-2320\",\"팩스번호\":\"051-894-2320\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"당감종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"북구\",\"사업장명\":\"북구기초푸드뱅크\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 북구 덕천로 74(덕천동)\",\"연락처(대표번호)\":\"051)331-4674\",\"팩스번호\":\"051)342-9350\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"덕천종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"사상구\",\"사업장명\":\"사상구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 사상구 모라로192번길 20-33(모라3동)\",\"연락처(대표번호)\":\"051)305-4286\",\"팩스번호\":\"051)305-3048\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"백양종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"사하구\",\"사업장명\":\"사하기초푸드뱅크\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 사하구 다송로 59(다대동)\",\"연락처(대표번호)\":\"051)265-9471\",\"팩스번호\":\"051)265-9475\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"두송종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"서구\",\"사업장명\":\"서구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 서구 대영로85번길 42, 1층(동대신동2가)\",\"연락처(대표번호)\":\"051)243-1367\",\"팩스번호\":\"051)243-1366\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"사회복지법인팔복\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"수영구\",\"사업장명\":\"수영구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 수영구 금련로43번길 54(망미동)\",\"연락처(대표번호)\":\"051)755-3367\",\"팩스번호\":\"051)755-2268\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"부산종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"연제구\",\"사업장명\":\"연제구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 연제구 봉수로 179연산동)\",\"연락처(대표번호)\":\"051-863-8360\",\"팩스번호\":\"051-861-2203\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"연제구연산종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"영도구\",\"사업장명\":\"영도구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 영도구 상리로63-16(동삼동)\",\"연락처(대표번호)\":\"051-404-5061\",\"팩스번호\":\"051-404-5062\",\"운영주체 분류\":\"2.재단법인\",\"운영주체명\":\"상리종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"중구\",\"사업장명\":\"중구기초푸드뱅크\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 중구 망양로 309 (대청동4가)\",\"연락처(대표번호)\":\"051)464-3137\",\"팩스번호\":\"051)468-1544\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"중구종합사회복지관\"},{\"구분\":\"기초푸드뱅크\",\"시군구\":\"해운대구\",\"사업장명\":\"해운대기초푸드뱅크\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 해운대구 재반로12번길 16(재송동)\",\"연락처(대표번호)\":\"051-782-5005\",\"팩스번호\":\"0505-877-5101\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"해운대종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"강서구\",\"사업장명\":\"강서구기초푸드마켓\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 강서구 공항로 1207 (대저1동)\",\"연락처(대표번호)\":\"051)711-1378\",\"팩스번호\":\"051)711-1376\",\"운영주체 분류\":\"3.사단법인\",\"운영주체명\":\"사단법인 둥지복지마을\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"금정구\",\"사업장명\":\"금정구기초푸드마켓\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 금정구 중앙대로 1992, 1층(남산동)\",\"연락처(대표번호)\":\"051-911-1377\",\"팩스번호\":\"051-911-1378\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"사회복지법인 선양\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"기장군\",\"사업장명\":\"기장군기초푸드마켓\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 기장군 기장읍 차성남로 28\",\"연락처(대표번호)\":\"051-722-4006\",\"팩스번호\":\"051-722-4016\",\"운영주체 분류\":\"3.사단법인\",\"운영주체명\":\"사단법인 국제청소년복지연맹\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"남구\",\"사업장명\":\"남구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산시 남구 못골로53번길 12-20(대연동)\",\"연락처(대표번호)\":\"051-638-1377\",\"팩스번호\":\"051-638-1378\",\"운영주체 분류\":\"3.사단법인\",\"운영주체명\":\"사단법인 둥지복지마을\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"동구\",\"사업장명\":\"동구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 동구 진성로 68(수정동)\",\"연락처(대표번호)\":\"051)905-1378\",\"팩스번호\":\"051)711-8409\",\"운영주체 분류\":\"8.비영리 민간단체\",\"운영주체명\":\"작은나눔협동조합\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"동래구\",\"사업장명\":\"동래구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산시 동래구 석사북로 59-1(온천동)\",\"연락처(대표번호)\":\"051-506-1377\",\"팩스번호\":\"070-7614-2525\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"동래종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"부산진구\",\"사업장명\":\"부산진구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 부산진구 중앙대로 882(양정동)\",\"연락처(대표번호)\":\"051)853-1377\",\"팩스번호\":\"051)894-2320\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"당감종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"북구\",\"사업장명\":\"북구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 북구 의성로115번길 11  1층(덕천동)\",\"연락처(대표번호)\":\"051)335-8377\",\"팩스번호\":\"051)335-8378\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"덕천종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"사상구\",\"사업장명\":\"사상구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 사상구 동주로 6-9(주례동)\",\"연락처(대표번호)\":\"051)325-1399\",\"팩스번호\":\"051)324-1399\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"백양종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"사하구\",\"사업장명\":\"사하구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 사하구 다대로 544, 진요빌딩 204호(다대동)\",\"연락처(대표번호)\":\"051-262-1377\",\"팩스번호\":\"051-262-1370\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"두송종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"서구\",\"사업장명\":\"서구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 서구 대영로85번길 42, 1층(동대신동2가)\",\"연락처(대표번호)\":\"051)243-1367\",\"팩스번호\":\"051)243-1366\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"사회복지법인팔복\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"수영구\",\"사업장명\":\"수영구기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산시 수영구 연수로249번길 12-18 (망미동)\",\"연락처(대표번호)\":\"051)756-1925\",\"팩스번호\":\"051)756-1926\",\"운영주체 분류\":\"3.사단법인\",\"운영주체명\":\"사단법인 국제청소년복지연맹\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"연제구\",\"사업장명\":\"연제구기초푸드마켓\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산시 연제구 월드컵대로187번길 6(거제동)\",\"연락처(대표번호)\":\"051-714-1378\",\"팩스번호\":\"070-7543-3814\",\"운영주체 분류\":\"3.사단법인\",\"운영주체명\":\"사단법인 둥지복지마을\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"영도구\",\"사업장명\":\"영도구푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 영도구 태종로 514(동삼동)\",\"연락처(대표번호)\":\"051)405-1377\",\"팩스번호\":\"051)405-4377\",\"운영주체 분류\":\"2.재단법인\",\"운영주체명\":\"상리종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"중구\",\"사업장명\":\"중구기초푸드마켓\",\"신고기준\":\"임의\",\"사업장 소재지\":\"부산광역시 중구 중구로184-1(영주동)\",\"연락처(대표번호)\":\"051-464-1388\",\"팩스번호\":\"051-469-1388\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"중구종합사회복지관\"},{\"구분\":\"기초푸드마켓\",\"시군구\":\"해운대구\",\"사업장명\":\"해운대기초푸드마켓\",\"신고기준\":\"당연\",\"사업장 소재지\":\"부산광역시 해운대구 재반로79, 2층(재송동)\",\"연락처(대표번호)\":\"051-781-1373\",\"팩스번호\":\"0505-877-5101\",\"운영주체 분류\":\"1. 사회복지법인\",\"운영주체명\":\"해운대종합사회복지관\"}]"));}}),
"[project]/src/UI/TailButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TailButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TailButton({ caption, color, onClick }) {
    const bg = {
        "blue": "bg-blue-700 text-white",
        "red": "bg-red-700 text-white",
        "emerald": "bg-emerald-800 text-white",
        "orange": "bg-orange-600 text-white",
        "lorange": "bg-orange-300 text-white",
        "lblue": "bg-blue-400 text-white",
        "gray": "bg-gray-100 text-white",
        "white": "bg-white text-gray-600 font-bold",
        "yellow": "bg-yellow-200 text-white"
    };
    const bgHover = {
        "blue": "hover:bg-blue-500 text-white",
        "red": "hover:bg-red-500 text-white",
        "emerald": "hover:bg-emerald-600 text-white",
        "orange": "hover:bg-orange-500 text-white",
        "lorange": "hover:bg-orange-200 text-white",
        "lblue": "hover:bg-blue-700 text-white",
        "yellow": "hover:bg-yellow-400 text-white",
        "white": "hover:bg-white text-gray-600 font-bold",
        "gray": "hover:bg-gray-100 text-white"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: `w-full py-2 px-4 text-base
                    flex justify-center items-center
                    ${bgHover[color]} hover:font-bold
                    ${bg[color]} rounded-lg 
                    `,
        children: caption
    }, void 0, false, {
        fileName: "[project]/src/UI/TailButton.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = TailButton;
var _c;
__turbopack_context__.k.register(_c, "TailButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/food/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FoodMain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$food$2f$FoodCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/food/FoodCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$food$2f$fooddata$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/food/fooddata.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/TailButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FoodMain() {
    _s();
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$food$2f$fooddata$2e$json__$28$json$29$__["default"].map((item)=>item["운영주체 분류"].replace(/ /g, ''));
    category = [
        ...new Set(category)
    ];
    const handleCategory = (c)=>{
        console.log("handleCategory", c);
        let tm = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$food$2f$fooddata$2e$json__$28$json$29$__["default"].filter((item)=>item["운영주체 분류"].replace(/ /g, '') == c);
        setTags(tm.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$food$2f$FoodCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                obj: item
            }, item['사업장명'], false, {
                fileName: "[project]/src/app/food/page.tsx",
                lineNumber: 16,
                columnNumber: 48
            }, this)));
    };
    const bts = category.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-1/5 mx-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                caption: item.split('.')[1],
                color: "lblue",
                onClick: ()=>handleCategory(item)
            }, item, false, {
                fileName: "[project]/src/app/food/page.tsx",
                lineNumber: 21,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/food/page.tsx",
            lineNumber: 20,
            columnNumber: 37
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-11/12 flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-15 flex justify-center items-center mb-10",
                children: bts
            }, void 0, false, {
                fileName: "[project]/src/app/food/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-7 place-items-center",
                children: tags
            }, void 0, false, {
                fileName: "[project]/src/app/food/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/food/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(FoodMain, "DL0uTSUGlGEljgppeJDEmbue1U0=");
_c = FoodMain;
var _c;
__turbopack_context__.k.register(_c, "FoodMain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b545004d._.js.map