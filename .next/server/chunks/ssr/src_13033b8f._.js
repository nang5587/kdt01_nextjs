module.exports = {

"[project]/src/UI/TailBall.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TailBall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TailBall({ n }) {
    const bgColor = {
        "n0": "bg-yellow-200",
        "n1": "bg-green-200",
        "n2": "bg-sky-300",
        "n3": "bg-purple-300",
        "n4": "bg-sky-500"
    };
    const num = typeof n === 'string' ? parseInt(n) : n;
    const strNum = "n" + String(Math.floor(num / 10));
    // keyof : strNum은 BgColorT의 key값만 올 수 있으니 해줘야 함
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-16 h-16 ${bgColor[strNum]}
        flex justify-center items-center
        p-10 rounded-full mr-5
        text-3xl text-white font-bold`,
        children: [
            n,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-purple-300"
            }, void 0, false, {
                fileName: "[project]/src/UI/TailBall.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/UI/TailBall.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/UI/TailButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TailButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
        "white": "bg-white text-gray-600 font-bold border-2 border-gray-100",
        "yellow": "bg-yellow-200 text-white",
        "lyellow": "bg-sky-900 text-white"
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
        "gray": "hover:bg-gray-100 text-white",
        "lyellow": "hover:bg-sky-700 text-black"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: `w-full py-2 px-4 text-base
                    flex justify-center items-center
                    ${bgHover[color]} hover:font-bold
                    ${bg[color]} rounded-lg`,
        children: caption
    }, void 0, false, {
        fileName: "[project]/src/UI/TailButton.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/lotto/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Lotto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailBall$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/TailBall.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/TailButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Lotto() {
    const [lottoTags, setLottoTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleLottoNum = ()=>{
        let lottoNum = [];
        while(lottoNum.length < 7){
            const n = Math.floor(Math.random() * 45) + 1; //1~45까지
            //랜덤수를 배열에 넣기
            if (!lottoNum.includes(n)) {
                lottoNum.push(n);
            }
        }
        //마지막 보너스 번호 => 배열임
        const bonus = lottoNum.splice(-1);
        //로또 번호 정렬
        lottoNum.sort((a, b)=>{
            if (typeof a === 'string') a = parseInt(a);
            if (typeof b === 'string') b = parseInt(b);
            return a - b;
        });
        //로또 배열 다시 생성
        lottoNum = [
            ...lottoNum,
            '+',
            ...bonus
        ];
        // setLottoTags = lottoNum; state 변수는 이렇게 못씀
        //TailBall 만들기
        const tm = lottoNum.map((item)=>item === '+' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-16 h-16 text-4xl font-bold mr-5   flex justify-center items-center",
                children: item
            }, item, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 29,
                columnNumber: 72
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailBall$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                n: item
            }, 'n' + item, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 31,
                columnNumber: 43
            }, this));
        setLottoTags(tm);
        console.log(lottoNum);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-11/12 flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center mb-10",
                children: lottoTags
            }, void 0, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    caption: "로또번호생성",
                    color: "lyellow",
                    onClick: handleLottoNum
                }, void 0, false, {
                    fileName: "[project]/src/app/lotto/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/lotto/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_13033b8f._.js.map