"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var useDebounce = function useDebounce(value, delay) {\n        _s1();\n        // State and setters for debounced value\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value), debouncedValue = ref[0], setDebouncedValue = ref[1];\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n            // Update debounced value after delay\n            var handler = setTimeout(function() {\n                setDebouncedValue(value);\n            }, delay);\n            // Cancel the timeout if value changes (also on delay change or unmount)\n            // This is how we prevent debounced value from updating if value is changed ...\n            // .. within the delay period. Timeout gets cleared and restarted.\n            return function() {\n                clearTimeout(handler);\n            };\n        }, [\n            value,\n            delay\n        ] // Only re-call effect if value or delay changes\n        );\n        return debouncedValue;\n    };\n    _s();\n    var _s1 = $RefreshSig$();\n    var videoRef2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var animationVariants = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationVariants2 = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var animationControls2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var statusRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var dynTextRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setTimeout(function() {\n            videoRef2.current.play();\n        }, 500);\n        setTimeout(function() {\n            animationControls2.start(\"hidden\");\n        }, 1200);\n        setTimeout(function() {\n            videoRef2.current.style.display = \"none\";\n        }, 1550);\n        if (router.query.store != undefined) {\n            setStore(router.query.store);\n        } else {\n            setStore(\"RYGB\");\n        }\n    }, [\n        router.isReady\n    ]);\n    var videodivRef2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), store = ref[0], setStore = ref[1];\n    if (false) {}\n    _s1(useDebounce, \"kfN+usT0yMZAzKokmaA06PCI4kk=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/x-icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Feedback - RYGB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),\n                onClick: function() {\n                    return view(\"Dashboard\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    id: \"logo\",\n                    src: \"cornermgr.png\",\n                    width: \"230\",\n                    height: \"230\"\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n                        id: \"text\",\n                        children: \"How was your experience at RYGB?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"stars\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"star.png\"\n                        }, void 0, false, {\n                            fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                initial: \"hidden\",\n                animate: animationControls,\n                variants: animationVariants,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().video),\n                    ref: videoRef,\n                    style: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-intro.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 80\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                initial: \"visible\",\n                animate: animationControls2,\n                variants: animationVariants2,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                ref: videodivRef2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().video),\n                    ref: videoRef2,\n                    style: {\n                        display: \"block\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-outrofaster.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 82\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"UN+EqBP0i0u1aeZ7oGlmG5wADME=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFTRUssdURBQVk7UUFDWEEsdURBQVk7OztBQWJqQkksS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgdmlkZW9SZWYyID0gdXNlUmVmKCk7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFuaW1hdGlvblZhcmlhbnRzID0ge1xuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gIH1cbiAgY29uc3QgYW5pbWF0aW9uVmFyaWFudHMyID0ge1xuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gIH1cbiAgY29uc3QgYW5pbWF0aW9uQ29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgYW5pbWF0aW9uQ29udHJvbHMyID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHN0YXR1c1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZHluVGV4dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB2aWRlb1JlZjIuY3VycmVudC5wbGF5KCk7XG4gICAgfSw1MDApO1xuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBhbmltYXRpb25Db250cm9sczIuc3RhcnQoXCJoaWRkZW5cIilcbiAgICAgIH0sMTIwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdmlkZW9SZWYyLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSwxNTUwKTtcblxuICAgIGlmIChyb3V0ZXIucXVlcnkuc3RvcmUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRTdG9yZShyb3V0ZXIucXVlcnkuc3RvcmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0b3JlKFwiUllHQlwiKVxuICAgIH1cbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgY29uc3QgdmlkZW9kaXZSZWYyID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtzdG9yZSwgc2V0U3RvcmVdID0gdXNlU3RhdGUoXCJcIilcblxuICBpZiAoXCJtbXJlZGJsb2NrNjJAZ21haWwuY29tXCIgPT0gdW5kZWZpbmVkICYmIHJvdXRlci5pc1JlYWR5KSB7XG4gICAgcm91dGVyLnB1c2goJ2h0dHBzOi8vcnlnYi50ZWNoL2FjY291bnRzL3NpZ25pbi9pbmRleC5waHA/cmVkaXJlY3Q9aHR0cHM6Ly9tYW5hZ2VyLnJ5Z2IudGVjaC9kYXNoJylcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheSkge1xuICAgIC8vIFN0YXRlIGFuZCBzZXR0ZXJzIGZvciBkZWJvdW5jZWQgdmFsdWVcbiAgICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgICB1c2VFZmZlY3QoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSBkZWJvdW5jZWQgdmFsdWUgYWZ0ZXIgZGVsYXlcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAvLyBDYW5jZWwgdGhlIHRpbWVvdXQgaWYgdmFsdWUgY2hhbmdlcyAoYWxzbyBvbiBkZWxheSBjaGFuZ2Ugb3IgdW5tb3VudClcbiAgICAgICAgLy8gVGhpcyBpcyBob3cgd2UgcHJldmVudCBkZWJvdW5jZWQgdmFsdWUgZnJvbSB1cGRhdGluZyBpZiB2YWx1ZSBpcyBjaGFuZ2VkIC4uLlxuICAgICAgICAvLyAuLiB3aXRoaW4gdGhlIGRlbGF5IHBlcmlvZC4gVGltZW91dCBnZXRzIGNsZWFyZWQgYW5kIHJlc3RhcnRlZC5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgW3ZhbHVlLCBkZWxheV0gLy8gT25seSByZS1jYWxsIGVmZmVjdCBpZiB2YWx1ZSBvciBkZWxheSBjaGFuZ2VzXG4gICAgKTtcbiAgICByZXR1cm4gZGVib3VuY2VkVmFsdWU7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPHRpdGxlPkZlZWRiYWNrIC0gUllHQjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubG9nb30gb25DbGljaz17KCkgPT4gdmlldyhcIkRhc2hib2FyZFwiKX0+XG4gICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz1cImNvcm5lcm1nci5wbmdcIiB3aWR0aD1cIjIzMFwiIGhlaWdodD1cIjIzMFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IGlkPVwidGV4dFwiPkhvdyB3YXMgeW91ciBleHBlcmllbmNlIGF0IFJZR0I/PC9oMT5cbiAgICAgICAgPGRpdiBpZD1cInN0YXJzXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJzdGFyLnBuZ1wiPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXtcImhpZGRlblwifVxuICAgICAgICBhbmltYXRlPXthbmltYXRpb25Db250cm9sc31cbiAgICAgICAgdmFyaWFudHM9e2FuaW1hdGlvblZhcmlhbnRzfVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMSB9fVxuICAgICAgPlxuICAgICAgICA8dmlkZW8gbXV0ZWQgaWQ9e3N0eWxlcy52aWRlb30gcmVmPXt2aWRlb1JlZn0gc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PHNvdXJjZSBzcmM9XCJhbmltYXRlZGJhY2tncm91bmQtaW50cm8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+PC92aWRlbz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e1widmlzaWJsZVwifVxuICAgICAgICBhbmltYXRlPXthbmltYXRpb25Db250cm9sczJ9XG4gICAgICAgIHZhcmlhbnRzPXthbmltYXRpb25WYXJpYW50czJ9XG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlT3V0XCIsIGR1cmF0aW9uOiAxIH19XG4gICAgICAgIHJlZiA9IHt2aWRlb2RpdlJlZjJ9XG4gICAgICA+XG4gICAgICAgIDx2aWRlbyBtdXRlZCBpZD17c3R5bGVzLnZpZGVvfSByZWY9e3ZpZGVvUmVmMn0gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19Pjxzb3VyY2Ugc3JjPVwiYW5pbWF0ZWRiYWNrZ3JvdW5kLW91dHJvZmFzdGVyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPjwvdmlkZW8+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwiQ29va2llcyIsInN0eWxlcyIsImF4aW9zIiwiSG9tZSIsInVzZURlYm91bmNlIiwidmFsdWUiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInZpZGVvUmVmMiIsInZpZGVvUmVmIiwicm91dGVyIiwiYW5pbWF0aW9uVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsImFuaW1hdGlvblZhcmlhbnRzMiIsImFuaW1hdGlvbkNvbnRyb2xzIiwiYW5pbWF0aW9uQ29udHJvbHMyIiwic3RhdHVzUmVmIiwiZHluVGV4dFJlZiIsImN1cnJlbnQiLCJwbGF5Iiwic3RhcnQiLCJzdHlsZSIsImRpc3BsYXkiLCJxdWVyeSIsInN0b3JlIiwidW5kZWZpbmVkIiwic2V0U3RvcmUiLCJpc1JlYWR5IiwidmlkZW9kaXZSZWYyIiwicHVzaCIsImRpdiIsIm1ldGEiLCJjaGFyU2V0IiwiaHR0cEVxdWl2IiwiY29udGVudCIsIm5hbWUiLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiLCJ0aXRsZSIsImlkIiwibG9nbyIsIm9uQ2xpY2siLCJ2aWV3IiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsImNsYXNzTmFtZSIsInRleHQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsInZpZGVvIiwibXV0ZWQiLCJyZWYiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});