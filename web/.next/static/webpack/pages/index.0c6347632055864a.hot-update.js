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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var rate = function rate(stars) {};\n    var useDebounce = function useDebounce(value, delay) {\n        _s1();\n        // State and setters for debounced value\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value), debouncedValue = ref[0], setDebouncedValue = ref[1];\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n            // Update debounced value after delay\n            var handler = setTimeout(function() {\n                setDebouncedValue(value);\n            }, delay);\n            // Cancel the timeout if value changes (also on delay change or unmount)\n            // This is how we prevent debounced value from updating if value is changed ...\n            // .. within the delay period. Timeout gets cleared and restarted.\n            return function() {\n                clearTimeout(handler);\n            };\n        }, [\n            value,\n            delay\n        ] // Only re-call effect if value or delay changes\n        );\n        return debouncedValue;\n    };\n    _s();\n    var _s1 = $RefreshSig$();\n    var videoRef2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var animationVariants = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationVariants2 = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var animationControls2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    var stars = function welcome1() {\n        var _loop = function(i) {\n            stars[i].style.poisiton = \"absolute\";\n            var anim = stars[i].animate({\n                transform: \"translate(0, 0) rotate(360deg\"\n            }, {\n                duration: 1000,\n                delay: i * 300,\n                ease: \"easeInOut\"\n            });\n            anim.onfinish = function() {\n                stars[i].style.transform = \"translate(0, 0) rotate(360deg)\";\n            };\n        };\n        var stars = document.getElementsByClassName((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().star));\n        for(var i = 0; i < stars.length; i++)_loop(i);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setTimeout(function() {\n            videoRef2.current.play();\n        }, 500);\n        setTimeout(function() {\n            animationControls2.start(\"hidden\");\n            welcome();\n        }, 1200);\n        setTimeout(function() {\n            videoRef2.current.style.display = \"none\";\n        }, 1550);\n        if (router.query.store != undefined) {\n            setStore(router.query.store);\n        } else {\n            setStore(\"RYGB\");\n        }\n    }, [\n        router.isReady\n    ]);\n    var videodivRef2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), store = ref[0], setStore = ref[1];\n    if (false) {}\n    _s1(useDebounce, \"kfN+usT0yMZAzKokmaA06PCI4kk=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/x-icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Feedback - RYGB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),\n                onClick: function() {\n                    return view(\"Dashboard\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    id: \"logo\",\n                    src: \"cornermgr.png\",\n                    width: \"230\",\n                    height: \"230\"\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 99,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().itemsgrid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().text),\n                        id: \"text\",\n                        children: \"How was your experience at RYGB?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"stars\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().stargrid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().star),\n                                src: \"star.png\",\n                                id: \"star1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().star),\n                                src: \"star.png\",\n                                id: \"star2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().star),\n                                src: \"star.png\",\n                                id: \"star3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().star),\n                                src: \"star.png\",\n                                id: \"star4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().star),\n                                src: \"star.png\",\n                                id: \"star5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                initial: \"hidden\",\n                animate: animationControls,\n                variants: animationVariants,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().video),\n                    ref: videoRef,\n                    style: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-intro.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 80\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                initial: \"visible\",\n                animate: animationControls2,\n                variants: animationVariants2,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                ref: videodivRef2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().video),\n                    ref: videoRef2,\n                    style: {\n                        display: \"block\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-outrofaster.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 128,\n                        columnNumber: 82\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"fAl2MZd1rLCxeSlNfXmmthoPmII=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO3FCQUFDOzhCQUFFLDRFQUFDc0MsUUFBTTt3QkFBQ2QsR0FBRyxFQUFDLG9DQUFvQzt3QkFBQ1IsSUFBSSxFQUFDLFdBQVc7Ozs7OzRCQUFHOzs7Ozt3QkFBUTs7Ozs7b0JBQzFJOzs7Ozs7WUFDVCxDQUNQO0NBQ0Y7R0EzSHVCdEQsSUFBSTs7UUFHWFQsa0RBQVM7UUFTRUssdURBQVk7UUFDWEEsdURBQVk7OztBQWJqQkksS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgdmlkZW9SZWYyID0gdXNlUmVmKCk7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFuaW1hdGlvblZhcmlhbnRzID0ge1xuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gIH1cbiAgY29uc3QgYW5pbWF0aW9uVmFyaWFudHMyID0ge1xuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSB9LFxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXG4gIH1cbiAgY29uc3QgYW5pbWF0aW9uQ29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgYW5pbWF0aW9uQ29udHJvbHMyID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHN0YXJzID0gXG4gIFxuICBmdW5jdGlvbiB3ZWxjb21lKCkge1xuICAgIGNvbnN0IHN0YXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzdHlsZXMuc3Rhcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgc3RhcnNbaV0uc3R5bGUucG9pc2l0b24gPSBcImFic29sdXRlXCI7XG4gICAgICBjb25zdCBhbmltID0gc3RhcnNbaV0uYW5pbWF0ZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMzYwZGVnXCJ9LCB7ZHVyYXRpb246IDEwMDAsIGRlbGF5OiBpICogMzAwLCBlYXNlOiBcImVhc2VJbk91dFwifSk7XG4gICAgICBhbmltLm9uZmluaXNoID0gKCkgPT4ge1xuICAgICAgICBzdGFyc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMzYwZGVnKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJhdGUoc3RhcnMpIHtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICB2aWRlb1JlZjIuY3VycmVudC5wbGF5KCk7XG4gICAgfSw1MDApO1xuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBhbmltYXRpb25Db250cm9sczIuc3RhcnQoXCJoaWRkZW5cIilcbiAgICAgICAgd2VsY29tZSgpO1xuICAgICAgfSwxMjAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2aWRlb1JlZjIuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9LDE1NTApO1xuXG4gICAgaWYgKHJvdXRlci5xdWVyeS5zdG9yZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFN0b3JlKHJvdXRlci5xdWVyeS5zdG9yZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RvcmUoXCJSWUdCXCIpXG4gICAgfVxuICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuICBjb25zdCB2aWRlb2RpdlJlZjIgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW3N0b3JlLCBzZXRTdG9yZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGlmIChcIm1tcmVkYmxvY2s2MkBnbWFpbC5jb21cIiA9PSB1bmRlZmluZWQgJiYgcm91dGVyLmlzUmVhZHkpIHtcbiAgICByb3V0ZXIucHVzaCgnaHR0cHM6Ly9yeWdiLnRlY2gvYWNjb3VudHMvc2lnbmluL2luZGV4LnBocD9yZWRpcmVjdD1odHRwczovL21hbmFnZXIucnlnYi50ZWNoL2Rhc2gnKVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gICAgLy8gU3RhdGUgYW5kIHNldHRlcnMgZm9yIGRlYm91bmNlZCB2YWx1ZVxuICAgIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuICAgIHVzZUVmZmVjdChcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIGRlYm91bmNlZCB2YWx1ZSBhZnRlciBkZWxheVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGVib3VuY2VkVmFsdWUodmFsdWUpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgdGltZW91dCBpZiB2YWx1ZSBjaGFuZ2VzIChhbHNvIG9uIGRlbGF5IGNoYW5nZSBvciB1bm1vdW50KVxuICAgICAgICAvLyBUaGlzIGlzIGhvdyB3ZSBwcmV2ZW50IGRlYm91bmNlZCB2YWx1ZSBmcm9tIHVwZGF0aW5nIGlmIHZhbHVlIGlzIGNoYW5nZWQgLi4uXG4gICAgICAgIC8vIC4uIHdpdGhpbiB0aGUgZGVsYXkgcGVyaW9kLiBUaW1lb3V0IGdldHMgY2xlYXJlZCBhbmQgcmVzdGFydGVkLlxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBbdmFsdWUsIGRlbGF5XSAvLyBPbmx5IHJlLWNhbGwgZWZmZWN0IGlmIHZhbHVlIG9yIGRlbGF5IGNoYW5nZXNcbiAgICApO1xuICAgIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8dGl0bGU+RmVlZGJhY2sgLSBSWUdCPC90aXRsZT5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5sb2dvfSBvbkNsaWNrPXsoKSA9PiB2aWV3KFwiRGFzaGJvYXJkXCIpfT5cbiAgICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPVwiY29ybmVybWdyLnBuZ1wiIHdpZHRoPVwiMjMwXCIgaGVpZ2h0PVwiMjMwXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1zZ3JpZH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSBpZD1cInRleHRcIj5Ib3cgd2FzIHlvdXIgZXhwZXJpZW5jZSBhdCBSWUdCPzwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJzdGFyc1wiIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJncmlkfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ9IHNyYz1cInN0YXIucG5nXCIgaWQ9XCJzdGFyMVwiPjwvaW1nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcn0gc3JjPVwic3Rhci5wbmdcIiBpZD1cInN0YXIyXCI+PC9pbWc+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5zdGFyfSBzcmM9XCJzdGFyLnBuZ1wiIGlkPVwic3RhcjNcIj48L2ltZz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ9IHNyYz1cInN0YXIucG5nXCIgaWQ9XCJzdGFyNFwiPjwvaW1nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcn0gc3JjPVwic3Rhci5wbmdcIiBpZD1cInN0YXI1XCI+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e1wiaGlkZGVuXCJ9XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGlvbkNvbnRyb2xzfVxuICAgICAgICB2YXJpYW50cz17YW5pbWF0aW9uVmFyaWFudHN9XG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlT3V0XCIsIGR1cmF0aW9uOiAxIH19XG4gICAgICA+XG4gICAgICAgIDx2aWRlbyBtdXRlZCBpZD17c3R5bGVzLnZpZGVvfSByZWY9e3ZpZGVvUmVmfSBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48c291cmNlIHNyYz1cImFuaW1hdGVkYmFja2dyb3VuZC1pbnRyby5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz48L3ZpZGVvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17XCJ2aXNpYmxlXCJ9XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGlvbkNvbnRyb2xzMn1cbiAgICAgICAgdmFyaWFudHM9e2FuaW1hdGlvblZhcmlhbnRzMn1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VPdXRcIiwgZHVyYXRpb246IDEgfX1cbiAgICAgICAgcmVmID0ge3ZpZGVvZGl2UmVmMn1cbiAgICAgID5cbiAgICAgICAgPHZpZGVvIG11dGVkIGlkPXtzdHlsZXMudmlkZW99IHJlZj17dmlkZW9SZWYyfSBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wifX0+PHNvdXJjZSBzcmM9XCJhbmltYXRlZGJhY2tncm91bmQtb3V0cm9mYXN0ZXIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+PC92aWRlbz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJDb29raWVzIiwic3R5bGVzIiwiYXhpb3MiLCJIb21lIiwicmF0ZSIsInN0YXJzIiwidXNlRGVib3VuY2UiLCJ2YWx1ZSIsImRlbGF5IiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwidmlkZW9SZWYyIiwidmlkZW9SZWYiLCJyb3V0ZXIiLCJhbmltYXRpb25WYXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5IiwiaGlkZGVuIiwiYW5pbWF0aW9uVmFyaWFudHMyIiwiYW5pbWF0aW9uQ29udHJvbHMiLCJhbmltYXRpb25Db250cm9sczIiLCJ3ZWxjb21lIiwiaSIsInN0eWxlIiwicG9pc2l0b24iLCJhbmltIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsImR1cmF0aW9uIiwiZWFzZSIsIm9uZmluaXNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3RhciIsImxlbmd0aCIsImN1cnJlbnQiLCJwbGF5Iiwic3RhcnQiLCJkaXNwbGF5IiwicXVlcnkiLCJzdG9yZSIsInVuZGVmaW5lZCIsInNldFN0b3JlIiwiaXNSZWFkeSIsInZpZGVvZGl2UmVmMiIsInB1c2giLCJkaXYiLCJtZXRhIiwiY2hhclNldCIsImh0dHBFcXVpdiIsImNvbnRlbnQiLCJuYW1lIiwibGluayIsInJlbCIsInR5cGUiLCJocmVmIiwidGl0bGUiLCJpZCIsImxvZ28iLCJvbkNsaWNrIiwidmlldyIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiaXRlbXNncmlkIiwiaDEiLCJ0ZXh0Iiwic3RhcmdyaWQiLCJpbml0aWFsIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwidmlkZW8iLCJtdXRlZCIsInJlZiIsInNvdXJjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});