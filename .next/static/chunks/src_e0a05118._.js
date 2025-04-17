(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/UI/TailBall.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TailBall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-16 h-16 ${bgColor[strNum]}
        flex justify-center items-center
        p-10 rounded-full mr-5
        text-3xl text-white font-bold`,
        children: [
            n,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = TailBall;
var _c;
__turbopack_context__.k.register(_c, "TailBall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/app/lotto/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Lotto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailBall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/TailBall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/TailButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Lotto() {
    _s();
    const [lottoTags, setLottoTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleLottoNum = ()=>{
        let lottoNum = [];
        while(lottoNum.length < 7){
            let n = Math.floor(Math.random() * 45) + 1; //1~45까지
            //랜덤수를 배열에 넣기
            if (!lottoNum.includes(n)) {
                lottoNum.push(n);
            }
        }
        //마지막 보너스 번호 => 배열임
        let bonus = lottoNum.splice(-1);
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
        let tm = lottoNum.map((item)=>item === '+' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-16 h-16 text-4xl font-bold mr-5   flex justify-center items-center",
                children: item
            }, void 0, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 29,
                columnNumber: 70
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailBall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                n: item
            }, 'n' + item, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 31,
                columnNumber: 43
            }, this));
        setLottoTags(tm);
        console.log(lottoNum);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-11/12 flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center mb-10",
                children: lottoTags
            }, void 0, false, {
                fileName: "[project]/src/app/lotto/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$TailButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    caption: "로또번호생성",
                    color: "lblue",
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
_s(Lotto, "sMg/vbpu8uB7iBzZLdl4X9d44Bc=");
_c = Lotto;
var _c;
__turbopack_context__.k.register(_c, "Lotto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e0a05118._.js.map