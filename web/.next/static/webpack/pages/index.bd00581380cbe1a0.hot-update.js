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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var welcome = function welcome() {\n        var _loop = function(i) {\n            stars[i].style.poisiton = \"absolute\";\n            var anim0 = stars[i].animate({\n                transform: \"translate(-900%, -50%\"\n            });\n            var anim = stars[i].animate({\n                transform: \"translate(0, 0)\"\n            }, {\n                duration: 1000,\n                delay: i * 300\n            });\n            anim.onfinish = function() {\n                stars[i].style.transform = \"translate(0, 0)\";\n            };\n        };\n        var stars = document.getElementsByClassName((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().star));\n        for(var i = 0; i < stars.length; i++)_loop(i);\n    };\n    var useDebounce = function useDebounce(value, delay) {\n        _s1();\n        // State and setters for debounced value\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value), debouncedValue = ref[0], setDebouncedValue = ref[1];\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n            // Update debounced value after delay\n            var handler = setTimeout(function() {\n                setDebouncedValue(value);\n            }, delay);\n            // Cancel the timeout if value changes (also on delay change or unmount)\n            // This is how we prevent debounced value from updating if value is changed ...\n            // .. within the delay period. Timeout gets cleared and restarted.\n            return function() {\n                clearTimeout(handler);\n            };\n        }, [\n            value,\n            delay\n        ] // Only re-call effect if value or delay changes\n        );\n        return debouncedValue;\n    };\n    _s();\n    var _s1 = $RefreshSig$();\n    var videoRef2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var animationVariants = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationVariants2 = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();\n    var animationControls2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setTimeout(function() {\n            videoRef2.current.play();\n        }, 500);\n        setTimeout(function() {\n            animationControls2.start(\"hidden\");\n            welcome();\n        }, 1200);\n        setTimeout(function() {\n            videoRef2.current.style.display = \"none\";\n        }, 1550);\n        if (router.query.store != undefined) {\n            setStore(router.query.store);\n        } else {\n            setStore(\"RYGB\");\n        }\n    }, [\n        router.isReady\n    ]);\n    var videodivRef2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), store = ref[0], setStore = ref[1];\n    if (false) {}\n    _s1(useDebounce, \"kfN+usT0yMZAzKokmaA06PCI4kk=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/x-icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Feedback - RYGB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                onClick: function() {\n                    return view(\"Dashboard\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    id: \"logo\",\n                    src: \"cornermgr.png\",\n                    width: \"230\",\n                    height: \"230\"\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().itemsgrid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().text),\n                        id: \"text\",\n                        children: \"How was your experience at RYGB?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"stars\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().stargrid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().star),\n                                src: \"star.png\",\n                                id: \"star1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().star),\n                                src: \"star.png\",\n                                id: \"star2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().star),\n                                src: \"star.png\",\n                                id: \"star3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().star),\n                                src: \"star.png\",\n                                id: \"star4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().star),\n                                src: \"star.png\",\n                                id: \"star5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                initial: \"hidden\",\n                animate: animationControls,\n                variants: animationVariants,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().video),\n                    ref: videoRef,\n                    style: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-intro.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 80\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                initial: \"visible\",\n                animate: animationControls2,\n                variants: animationVariants2,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                ref: videodivRef2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().video),\n                    ref: videoRef2,\n                    style: {\n                        display: \"block\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-outrofaster.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 82\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"fAl2MZd1rLCxeSlNfXmmthoPmII=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFDLE9BQU87cUJBQUM7OEJBQUUsNEVBQUN1QyxRQUFNO3dCQUFDZixHQUFHLEVBQUMsb0NBQW9DO3dCQUFDUixJQUFJLEVBQUMsV0FBVzs7Ozs7NEJBQUc7Ozs7O3dCQUFROzs7OztvQkFDMUk7Ozs7OztZQUNULENBQ1A7Q0FDRjtHQXZIdUJyRCxJQUFJOztRQUdYVCxrREFBUztRQVNFSyx1REFBWTtRQUNYQSx1REFBWTs7O0FBYmpCSSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB2aWRlb1JlZjIgPSB1c2VSZWYoKTtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYW5pbWF0aW9uVmFyaWFudHMgPSB7XG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgfVxuICBjb25zdCBhbmltYXRpb25WYXJpYW50czIgPSB7XG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgfVxuICBjb25zdCBhbmltYXRpb25Db250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBjb25zdCBhbmltYXRpb25Db250cm9sczIgPSB1c2VBbmltYXRpb24oKTtcbiAgXG4gIGZ1bmN0aW9uIHdlbGNvbWUoKSB7XG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHN0eWxlcy5zdGFyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdGFyc1tpXS5zdHlsZS5wb2lzaXRvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGNvbnN0IGFuaW0wID0gc3RhcnNbaV0uYW5pbWF0ZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtOTAwJSwgLTUwJVwifSlcbiAgICAgIGNvbnN0IGFuaW0gPSBzdGFyc1tpXS5hbmltYXRlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAsIDApXCJ9LCB7ZHVyYXRpb246IDEwMDAsIGRlbGF5OiBpICogMzAwfSk7XG4gICAgICBhbmltLm9uZmluaXNoID0gKCkgPT4ge1xuICAgICAgICBzdGFyc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwLCAwKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgdmlkZW9SZWYyLmN1cnJlbnQucGxheSgpO1xuICAgIH0sNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgYW5pbWF0aW9uQ29udHJvbHMyLnN0YXJ0KFwiaGlkZGVuXCIpXG4gICAgICAgIHdlbGNvbWUoKTtcbiAgICAgIH0sMTIwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdmlkZW9SZWYyLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSwxNTUwKTtcblxuICAgIGlmIChyb3V0ZXIucXVlcnkuc3RvcmUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRTdG9yZShyb3V0ZXIucXVlcnkuc3RvcmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0b3JlKFwiUllHQlwiKVxuICAgIH1cbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XG5cbiAgY29uc3QgdmlkZW9kaXZSZWYyID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtzdG9yZSwgc2V0U3RvcmVdID0gdXNlU3RhdGUoXCJcIilcblxuICBpZiAoXCJtbXJlZGJsb2NrNjJAZ21haWwuY29tXCIgPT0gdW5kZWZpbmVkICYmIHJvdXRlci5pc1JlYWR5KSB7XG4gICAgcm91dGVyLnB1c2goJ2h0dHBzOi8vcnlnYi50ZWNoL2FjY291bnRzL3NpZ25pbi9pbmRleC5waHA/cmVkaXJlY3Q9aHR0cHM6Ly9tYW5hZ2VyLnJ5Z2IudGVjaC9kYXNoJylcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZURlYm91bmNlKHZhbHVlLCBkZWxheSkge1xuICAgIC8vIFN0YXRlIGFuZCBzZXR0ZXJzIGZvciBkZWJvdW5jZWQgdmFsdWVcbiAgICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgICB1c2VFZmZlY3QoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSBkZWJvdW5jZWQgdmFsdWUgYWZ0ZXIgZGVsYXlcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAvLyBDYW5jZWwgdGhlIHRpbWVvdXQgaWYgdmFsdWUgY2hhbmdlcyAoYWxzbyBvbiBkZWxheSBjaGFuZ2Ugb3IgdW5tb3VudClcbiAgICAgICAgLy8gVGhpcyBpcyBob3cgd2UgcHJldmVudCBkZWJvdW5jZWQgdmFsdWUgZnJvbSB1cGRhdGluZyBpZiB2YWx1ZSBpcyBjaGFuZ2VkIC4uLlxuICAgICAgICAvLyAuLiB3aXRoaW4gdGhlIGRlbGF5IHBlcmlvZC4gVGltZW91dCBnZXRzIGNsZWFyZWQgYW5kIHJlc3RhcnRlZC5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgW3ZhbHVlLCBkZWxheV0gLy8gT25seSByZS1jYWxsIGVmZmVjdCBpZiB2YWx1ZSBvciBkZWxheSBjaGFuZ2VzXG4gICAgKTtcbiAgICByZXR1cm4gZGVib3VuY2VkVmFsdWU7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPHRpdGxlPkZlZWRiYWNrIC0gUllHQjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubG9nb30gb25DbGljaz17KCkgPT4gdmlldyhcIkRhc2hib2FyZFwiKX0+XG4gICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz1cImNvcm5lcm1nci5wbmdcIiB3aWR0aD1cIjIzMFwiIGhlaWdodD1cIjIzMFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtc2dyaWR9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gaWQ9XCJ0ZXh0XCI+SG93IHdhcyB5b3VyIGV4cGVyaWVuY2UgYXQgUllHQj88L2gxPlxuICAgICAgICA8ZGl2IGlkPVwic3RhcnNcIiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyZ3JpZH0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5zdGFyfSBzcmM9XCJzdGFyLnBuZ1wiIGlkPVwic3RhcjFcIj48L2ltZz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ9IHNyYz1cInN0YXIucG5nXCIgaWQ9XCJzdGFyMlwiPjwvaW1nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcn0gc3JjPVwic3Rhci5wbmdcIiBpZD1cInN0YXIzXCI+PC9pbWc+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5zdGFyfSBzcmM9XCJzdGFyLnBuZ1wiIGlkPVwic3RhcjRcIj48L2ltZz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ9IHNyYz1cInN0YXIucG5nXCIgaWQ9XCJzdGFyNVwiPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXtcImhpZGRlblwifVxuICAgICAgICBhbmltYXRlPXthbmltYXRpb25Db250cm9sc31cbiAgICAgICAgdmFyaWFudHM9e2FuaW1hdGlvblZhcmlhbnRzfVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMSB9fVxuICAgICAgPlxuICAgICAgICA8dmlkZW8gbXV0ZWQgaWQ9e3N0eWxlcy52aWRlb30gcmVmPXt2aWRlb1JlZn0gc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0+PHNvdXJjZSBzcmM9XCJhbmltYXRlZGJhY2tncm91bmQtaW50cm8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+PC92aWRlbz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e1widmlzaWJsZVwifVxuICAgICAgICBhbmltYXRlPXthbmltYXRpb25Db250cm9sczJ9XG4gICAgICAgIHZhcmlhbnRzPXthbmltYXRpb25WYXJpYW50czJ9XG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlT3V0XCIsIGR1cmF0aW9uOiAxIH19XG4gICAgICAgIHJlZiA9IHt2aWRlb2RpdlJlZjJ9XG4gICAgICA+XG4gICAgICAgIDx2aWRlbyBtdXRlZCBpZD17c3R5bGVzLnZpZGVvfSByZWY9e3ZpZGVvUmVmMn0gc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19Pjxzb3VyY2Ugc3JjPVwiYW5pbWF0ZWRiYWNrZ3JvdW5kLW91dHJvZmFzdGVyLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPjwvdmlkZW8+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwiQ29va2llcyIsInN0eWxlcyIsImF4aW9zIiwiSG9tZSIsIndlbGNvbWUiLCJzdGFycyIsImkiLCJzdHlsZSIsInBvaXNpdG9uIiwiYW5pbTAiLCJhbmltYXRlIiwidHJhbnNmb3JtIiwiYW5pbSIsImR1cmF0aW9uIiwiZGVsYXkiLCJvbmZpbmlzaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0YXIiLCJsZW5ndGgiLCJ1c2VEZWJvdW5jZSIsInZhbHVlIiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwidmlkZW9SZWYyIiwidmlkZW9SZWYiLCJyb3V0ZXIiLCJhbmltYXRpb25WYXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5IiwiaGlkZGVuIiwiYW5pbWF0aW9uVmFyaWFudHMyIiwiYW5pbWF0aW9uQ29udHJvbHMiLCJhbmltYXRpb25Db250cm9sczIiLCJjdXJyZW50IiwicGxheSIsInN0YXJ0IiwiZGlzcGxheSIsInF1ZXJ5Iiwic3RvcmUiLCJ1bmRlZmluZWQiLCJzZXRTdG9yZSIsImlzUmVhZHkiLCJ2aWRlb2RpdlJlZjIiLCJwdXNoIiwiZGl2IiwibWV0YSIsImNoYXJTZXQiLCJodHRwRXF1aXYiLCJjb250ZW50IiwibmFtZSIsImxpbmsiLCJyZWwiLCJ0eXBlIiwiaHJlZiIsInRpdGxlIiwiaWQiLCJsb2dvIiwib25DbGljayIsInZpZXciLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsIml0ZW1zZ3JpZCIsImgxIiwidGV4dCIsInN0YXJncmlkIiwiaW5pdGlhbCIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImVhc2UiLCJ2aWRlbyIsIm11dGVkIiwicmVmIiwic291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});