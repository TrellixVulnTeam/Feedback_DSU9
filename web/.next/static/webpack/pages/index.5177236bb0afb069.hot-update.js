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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_redblock6_Documents_GitHub_Feedback_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_redblock6_Documents_GitHub_Feedback_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_redblock6_Documents_GitHub_Feedback_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar navigation = [\n    {\n        name: \"Dashboard\",\n        href: \"#\",\n        current: true\n    },\n    {\n        name: \"Team\",\n        href: \"#\",\n        current: false\n    },\n    {\n        name: \"Projects\",\n        href: \"#\",\n        current: false\n    },\n    {\n        name: \"Calendar\",\n        href: \"#\",\n        current: false\n    }, \n];\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Home() {\n    var useDebounce = function useDebounce(value, delay) {\n        _s1();\n        // State and setters for debounced value\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(value), debouncedValue = ref[0], setDebouncedValue = ref[1];\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n            // Update debounced value after delay\n            var handler = setTimeout(function() {\n                setDebouncedValue(value);\n            }, delay);\n            // Cancel the timeout if value changes (also on delay change or unmount)\n            // This is how we prevent debounced value from updating if value is changed ...\n            // .. within the delay period. Timeout gets cleared and restarted.\n            return function() {\n                clearTimeout(handler);\n            };\n        }, [\n            value,\n            delay\n        ] // Only re-call effect if value or delay changes\n        );\n        return debouncedValue;\n    };\n    _s();\n    var _s1 = $RefreshSig$();\n    var videoRef2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var animationVariants = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationVariants2 = {\n        visible: {\n            opacity: 1\n        },\n        hidden: {\n            opacity: 0\n        }\n    };\n    var animationControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();\n    var animationControls2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();\n    var statusRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var dynTextRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setTimeout(function() {\n            videoRef2.current.play();\n        }, 500);\n        setTimeout(function() {\n            animationControls2.start(\"hidden\");\n        }, 1200);\n        setTimeout(function() {\n            videoRef2.current.style.display = \"none\";\n        }, 1550);\n        window.requestAnimationFrame(welcome);\n        document.getElementById(\"accounts\").style.display = \"none\";\n        if (router.query.view != undefined) {\n            var queryview = router.query.view;\n            if (queryview == \"mgrapps\") {\n                view(\"Applications - Manager\");\n            }\n        }\n        axios__WEBPACK_IMPORTED_MODULE_6___default()({\n            method: \"get\",\n            url: \"https://rygb.tech:8443/getStoreFromEmail?email=\" + \"mmredblock62@gmail.com\"\n        }).then(function(response) {\n            console.log(response.data);\n            var data = response.data;\n            setStore(data.name);\n        }).catch(function(error) {\n            console.log(error);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_6___default()({\n            method: \"get\",\n            url: \"https://rygb.tech:8443/getStatus?email=\" + \"mmredblock62@gmail.com\"\n        }).then(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_redblock6_Documents_GitHub_Feedback_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(response) {\n                var status;\n                return _Users_redblock6_Documents_GitHub_Feedback_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            status = response.data;\n                            if (status === \"Online\") {\n                                statusRef.current.className = \"absolute bottom-0 right--1 inline-block w-5 h-5 bg-green-600 border-4 border-neutral-800 rounded-full\";\n                            } else if (status === \"AFK\") {\n                                statusRef.current.className = \"absolute bottom-0 right--1 inline-block w-5 h-5 bg-yellow-600 border-4 border-neutral-800 rounded-full\";\n                            } else if (status === \"DND\") {\n                                statusRef.current.className = \"absolute bottom-0 right--1 inline-block w-5 h-5 bg-red-600 border-4 border-neutral-800 rounded-full\";\n                            } else if (status === \"Invis\") {\n                                statusRef.current.className = \"absolute bottom-0 right--1 inline-block w-5 h-5 bg-gray-600 border-4 border-neutral-800 rounded-full\";\n                            }\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(response) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    }, [\n        router.isReady\n    ]);\n    var videodivRef2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), store = ref[0], setStore = ref[1];\n    if (false) {}\n    _s1(useDebounce, \"kfN+usT0yMZAzKokmaA06PCI4kk=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/x-icon\",\n                        href: \"favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Feedback - RYGB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                onClick: function() {\n                    return view(\"Dashboard\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    id: \"logo\",\n                    src: \"cornermgr.png\",\n                    width: \"230\",\n                    height: \"230\"\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 125,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().text),\n                id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().dynText),\n                ref: dynTextRef,\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                initial: \"hidden\",\n                animate: animationControls,\n                variants: animationVariants,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().video),\n                    ref: videoRef,\n                    style: {\n                        display: \"none\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-intro.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 80\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                initial: \"visible\",\n                animate: animationControls2,\n                variants: animationVariants2,\n                transition: {\n                    ease: \"easeOut\",\n                    duration: 1\n                },\n                ref: videodivRef2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"video\", {\n                    muted: true,\n                    id: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().video),\n                    ref: videoRef2,\n                    style: {\n                        display: \"block\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"source\", {\n                        src: \"animatedbackground-outrofaster.mp4\",\n                        type: \"video/mp4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                        lineNumber: 146,\n                        columnNumber: 82\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/redblock6/Documents/GitHub/Feedback/web/pages/index.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"UN+EqBP0i0u1aeZ7oGlmG5wADME=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQUs7b0JBQUNDLEtBQUs7b0JBQUNsQixFQUFFLEVBQUV0RSxzRUFBWTtvQkFBRWdGLEdBQUcsRUFBRTNELFFBQVE7b0JBQUVhLEtBQUssRUFBRTt3QkFBQ0MsT0FBTyxFQUFDLE1BQU07cUJBQUM7OEJBQUUsNEVBQUNzRCxRQUFNO3dCQUFDZixHQUFHLEVBQUMsOEJBQThCO3dCQUFDTixJQUFJLEVBQUMsV0FBVzs7Ozs7NEJBQUc7Ozs7O3dCQUFROzs7OztvQkFDbEk7MEJBQ2IsOERBQUN2RSxxREFBVTtnQkFDVG9GLE9BQU8sRUFBRSxTQUFTO2dCQUNsQkMsT0FBTyxFQUFFckQsa0JBQWtCO2dCQUMzQnNELFFBQVEsRUFBRXhELGtCQUFrQjtnQkFDNUJ5RCxVQUFVLEVBQUU7b0JBQUVDLElBQUksRUFBRSxTQUFTO29CQUFFQyxRQUFRLEVBQUUsQ0FBQztpQkFBRTtnQkFDNUNOLEdBQUcsRUFBSXRCLFlBQVk7MEJBRW5CLDRFQUFDNkIsT0FBSztvQkFBQ0MsS0FBSztvQkFBQ2xCLEVBQUUsRUFBRXRFLHNFQUFZO29CQUFFZ0YsR0FBRyxFQUFFNUQsU0FBUztvQkFBRWMsS0FBSyxFQUFFO3dCQUFDQyxPQUFPLEVBQUMsT0FBTztxQkFBQzs4QkFBRSw0RUFBQ3NELFFBQU07d0JBQUNmLEdBQUcsRUFBQyxvQ0FBb0M7d0JBQUNOLElBQUksRUFBQyxXQUFXOzs7Ozs0QkFBRzs7Ozs7d0JBQVE7Ozs7O29CQUMxSTs7Ozs7O1lBQ1QsQ0FDUDtDQUNGO0dBakl1QnpELElBQUk7O1FBR1h2QixrREFBUztRQVNFVSx1REFBWTtRQUNYQSx1REFBWTs7O0FBYmpCYSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBEaXNjbG9zdXJlLCBNZW51LCBUcmFuc2l0aW9uLCBEaWFsb2cgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xuICB7IG5hbWU6ICdEYXNoYm9hcmQnLCBocmVmOiAnIycsIGN1cnJlbnQ6IHRydWUgfSxcbiAgeyBuYW1lOiAnVGVhbScsIGhyZWY6ICcjJywgY3VycmVudDogZmFsc2UgfSxcbiAgeyBuYW1lOiAnUHJvamVjdHMnLCBocmVmOiAnIycsIGN1cnJlbnQ6IGZhbHNlIH0sXG4gIHsgbmFtZTogJ0NhbGVuZGFyJywgaHJlZjogJyMnLCBjdXJyZW50OiBmYWxzZSB9LFxuXVxuXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB2aWRlb1JlZjIgPSB1c2VSZWYoKTtcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYW5pbWF0aW9uVmFyaWFudHMgPSB7XG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgfVxuICBjb25zdCBhbmltYXRpb25WYXJpYW50czIgPSB7XG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgfVxuICBjb25zdCBhbmltYXRpb25Db250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuICBjb25zdCBhbmltYXRpb25Db250cm9sczIgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3Qgc3RhdHVzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBkeW5UZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHZpZGVvUmVmMi5jdXJyZW50LnBsYXkoKTtcbiAgICB9LDUwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIGFuaW1hdGlvbkNvbnRyb2xzMi5zdGFydChcImhpZGRlblwiKVxuICAgICAgfSwxMjAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2aWRlb1JlZjIuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9LDE1NTApO1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh3ZWxjb21lKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgaWYgKHJvdXRlci5xdWVyeS52aWV3ICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcXVlcnl2aWV3ID0gcm91dGVyLnF1ZXJ5LnZpZXc7XG4gICAgICBpZiAocXVlcnl2aWV3ID09IFwibWdyYXBwc1wiKSB7XG4gICAgICAgIHZpZXcoXCJBcHBsaWNhdGlvbnMgLSBNYW5hZ2VyXCIpXG4gICAgICB9XG4gICAgfVxuICBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IFwiaHR0cHM6Ly9yeWdiLnRlY2g6ODQ0My9nZXRTdG9yZUZyb21FbWFpbD9lbWFpbD1cIiArIFwibW1yZWRibG9jazYyQGdtYWlsLmNvbVwiXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgc2V0U3RvcmUoZGF0YS5uYW1lKVxuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfSlcblxuICBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6ICdodHRwczovL3J5Z2IudGVjaDo4NDQzL2dldFN0YXR1cz9lbWFpbD0nICsgXCJtbXJlZGJsb2NrNjJAZ21haWwuY29tXCIsXG4gIH0pLnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgdmFyIHN0YXR1cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgaWYgKHN0YXR1cyA9PT0gXCJPbmxpbmVcIikge1xuICAgICAgc3RhdHVzUmVmLmN1cnJlbnQuY2xhc3NOYW1lID0gXCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0tMSBpbmxpbmUtYmxvY2sgdy01IGgtNSBiZy1ncmVlbi02MDAgYm9yZGVyLTQgYm9yZGVyLW5ldXRyYWwtODAwIHJvdW5kZWQtZnVsbFwiO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcIkFGS1wiKSB7XG4gICAgICBzdGF0dXNSZWYuY3VycmVudC5jbGFzc05hbWUgPSBcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LS0xIGlubGluZS1ibG9jayB3LTUgaC01IGJnLXllbGxvdy02MDAgYm9yZGVyLTQgYm9yZGVyLW5ldXRyYWwtODAwIHJvdW5kZWQtZnVsbFwiO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcIkRORFwiKSB7XG4gICAgICBzdGF0dXNSZWYuY3VycmVudC5jbGFzc05hbWUgPSBcImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LS0xIGlubGluZS1ibG9jayB3LTUgaC01IGJnLXJlZC02MDAgYm9yZGVyLTQgYm9yZGVyLW5ldXRyYWwtODAwIHJvdW5kZWQtZnVsbFwiO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcIkludmlzXCIpIHtcbiAgICAgIHN0YXR1c1JlZi5jdXJyZW50LmNsYXNzTmFtZSA9IFwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtLTEgaW5saW5lLWJsb2NrIHctNSBoLTUgYmctZ3JheS02MDAgYm9yZGVyLTQgYm9yZGVyLW5ldXRyYWwtODAwIHJvdW5kZWQtZnVsbFwiO1xuICAgIH1cbiAgfSk7XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIGNvbnN0IHZpZGVvZGl2UmVmMiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbc3RvcmUsIHNldFN0b3JlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgaWYgKFwibW1yZWRibG9jazYyQGdtYWlsLmNvbVwiID09IHVuZGVmaW5lZCAmJiByb3V0ZXIuaXNSZWFkeSkge1xuICAgIHJvdXRlci5wdXNoKCdodHRwczovL3J5Z2IudGVjaC9hY2NvdW50cy9zaWduaW4vaW5kZXgucGhwP3JlZGlyZWN0PWh0dHBzOi8vbWFuYWdlci5yeWdiLnRlY2gvZGFzaCcpXG4gIH1cblxuICBmdW5jdGlvbiB1c2VEZWJvdW5jZSh2YWx1ZSwgZGVsYXkpIHtcbiAgICAvLyBTdGF0ZSBhbmQgc2V0dGVycyBmb3IgZGVib3VuY2VkIHZhbHVlXG4gICAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gICAgdXNlRWZmZWN0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBVcGRhdGUgZGVib3VuY2VkIHZhbHVlIGFmdGVyIGRlbGF5XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSB0aW1lb3V0IGlmIHZhbHVlIGNoYW5nZXMgKGFsc28gb24gZGVsYXkgY2hhbmdlIG9yIHVubW91bnQpXG4gICAgICAgIC8vIFRoaXMgaXMgaG93IHdlIHByZXZlbnQgZGVib3VuY2VkIHZhbHVlIGZyb20gdXBkYXRpbmcgaWYgdmFsdWUgaXMgY2hhbmdlZCAuLi5cbiAgICAgICAgLy8gLi4gd2l0aGluIHRoZSBkZWxheSBwZXJpb2QuIFRpbWVvdXQgZ2V0cyBjbGVhcmVkIGFuZCByZXN0YXJ0ZWQuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIFt2YWx1ZSwgZGVsYXldIC8vIE9ubHkgcmUtY2FsbCBlZmZlY3QgaWYgdmFsdWUgb3IgZGVsYXkgY2hhbmdlc1xuICAgICk7XG4gICAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDx0aXRsZT5GZWVkYmFjayAtIFJZR0I8L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD17c3R5bGVzLmxvZ299IG9uQ2xpY2s9eygpID0+IHZpZXcoXCJEYXNoYm9hcmRcIil9PlxuICAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9XCJjb3JuZXJtZ3IucG5nXCIgd2lkdGg9XCIyMzBcIiBoZWlnaHQ9XCIyMzBcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gaWQ9e3N0eWxlcy5keW5UZXh0fSByZWY9e2R5blRleHRSZWZ9PlxuICAgICAgICBEYXNoYm9hcmRcbiAgICAgIDwvaDE+XG4gICAgICBcbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e1wiaGlkZGVuXCJ9XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGlvbkNvbnRyb2xzfVxuICAgICAgICB2YXJpYW50cz17YW5pbWF0aW9uVmFyaWFudHN9XG4gICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlT3V0XCIsIGR1cmF0aW9uOiAxIH19XG4gICAgICA+XG4gICAgICAgIDx2aWRlbyBtdXRlZCBpZD17c3R5bGVzLnZpZGVvfSByZWY9e3ZpZGVvUmVmfSBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fT48c291cmNlIHNyYz1cImFuaW1hdGVkYmFja2dyb3VuZC1pbnRyby5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz48L3ZpZGVvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17XCJ2aXNpYmxlXCJ9XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGlvbkNvbnRyb2xzMn1cbiAgICAgICAgdmFyaWFudHM9e2FuaW1hdGlvblZhcmlhbnRzMn1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBlYXNlOiBcImVhc2VPdXRcIiwgZHVyYXRpb246IDEgfX1cbiAgICAgICAgcmVmID0ge3ZpZGVvZGl2UmVmMn1cbiAgICAgID5cbiAgICAgICAgPHZpZGVvIG11dGVkIGlkPXtzdHlsZXMudmlkZW99IHJlZj17dmlkZW9SZWYyfSBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wifX0+PHNvdXJjZSBzcmM9XCJhbmltYXRlZGJhY2tncm91bmQtb3V0cm9mYXN0ZXIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+PC92aWRlbz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwiRGlzY2xvc3VyZSIsIk1lbnUiLCJUcmFuc2l0aW9uIiwiRGlhbG9nIiwiRnJhZ21lbnQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkNvb2tpZXMiLCJzdHlsZXMiLCJheGlvcyIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsImN1cnJlbnQiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiSG9tZSIsInVzZURlYm91bmNlIiwidmFsdWUiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInZpZGVvUmVmMiIsInZpZGVvUmVmIiwicm91dGVyIiwiYW5pbWF0aW9uVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsImFuaW1hdGlvblZhcmlhbnRzMiIsImFuaW1hdGlvbkNvbnRyb2xzIiwiYW5pbWF0aW9uQ29udHJvbHMyIiwic3RhdHVzUmVmIiwiZHluVGV4dFJlZiIsInBsYXkiLCJzdGFydCIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlbGNvbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicXVlcnkiLCJ2aWV3IiwidW5kZWZpbmVkIiwicXVlcnl2aWV3IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZXRTdG9yZSIsImNhdGNoIiwiZXJyb3IiLCJzdGF0dXMiLCJjbGFzc05hbWUiLCJpc1JlYWR5IiwidmlkZW9kaXZSZWYyIiwic3RvcmUiLCJwdXNoIiwiZGl2IiwibWV0YSIsImNoYXJTZXQiLCJodHRwRXF1aXYiLCJjb250ZW50IiwibGluayIsInJlbCIsInR5cGUiLCJ0aXRsZSIsImlkIiwibG9nbyIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwidGV4dCIsImR5blRleHQiLCJyZWYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsInZpZGVvIiwibXV0ZWQiLCJzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});