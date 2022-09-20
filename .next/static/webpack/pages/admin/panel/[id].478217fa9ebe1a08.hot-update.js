"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/panel/[id]",{

/***/ "./src/pages/admin/panel/[id].js":
/*!***************************************!*\
  !*** ./src/pages/admin/panel/[id].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions_ordersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/ordersAction */ \"./src/actions/ordersAction.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ \"./node_modules/@material-ui/core/esm/Breadcrumbs/index.js\");\n/* harmony import */ var _components_UserDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserDetails */ \"./src/components/UserDetails.js\");\n/* harmony import */ var _components_ItemsComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ItemsComponent */ \"./src/components/ItemsComponent.js\");\n/* harmony import */ var _components_OrdersComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/OrdersComponent */ \"./src/components/OrdersComponent.js\");\n/* harmony import */ var _components_UsersComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UsersComponent */ \"./src/components/UsersComponent.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var _descriptions_links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../descriptions/links */ \"./src/descriptions/links.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  min-height: 50rem;\\n  margin-top: 2rem;\\n  @media screen and (max-width: 1000px) {\\n    flex-direction: column;\\n  }\\n  .left-side {\\n    width: 20%;\\n    display: flex;\\n    flex-direction: Column;\\n    align-items: center;\\n    @media screen and (max-width: 1000px) {\\n      width: 100%;\\n    }\\n    ul {\\n      list-style: none;\\n      li {\\n        padding: 1rem 0;\\n        text-transform: upperCase;\\n      }\\n      .active {\\n        font-weight: bold;\\n      }\\n    }\\n  }\\n  .right-side {\\n    width: 70%;\\n    margin-left: 2rem;\\n    @media screen and (max-width: 1000px) {\\n      margin-left: 0;\\n      width: 100%;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n//styling\n\n//router\n\n\n//actions\n\n//redux\n\n//material ui\n\n//components\n\n\n\n\n//notistack\n\n//data\n\nvar AdminPanel = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    //state\n    var ref = (0,notistack__WEBPACK_IMPORTED_MODULE_11__.useSnackbar)(), enqueueSnackbar = ref.enqueueSnackbar, closeSnackbar = ref.closeSnackbar;\n    var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.user;\n    }).user;\n    var ref1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.orders;\n    }), orders = ref1.orders, numberOfPages = ref1.numberOfPages;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var pathName = router.asPath.split(\"/\")[3];\n    var details = router.asPath.split(\"/\")[4];\n    //users state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userId = ref2[0], setUserId = ref2[1];\n    //useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_actions_ordersAction__WEBPACK_IMPORTED_MODULE_5__.getOrders)());\n    }, [\n        dispatch\n    ]);\n    //handlers\n    var snackbarHandler = function(snackbarMessage, snackVariant) {\n        enqueueSnackbar(snackbarMessage, {\n            variant: snackVariant\n        });\n        closeSnackbar(500);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AdminPanelComponent, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"left-side\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    children: _descriptions_links__WEBPACK_IMPORTED_MODULE_12__.adminLinks.map(function(link) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: link.restriction === user.role && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: link.path,\n                                className: link.name === pathName ? \"link active\" : \"link\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: link.label\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"right-side\",\n                children: [\n                    pathName === \"orders\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_OrdersComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        orderDetails: details,\n                        title: \"Admin panel\",\n                        link: {\n                            label: \"orders\",\n                            path: \"/orders/admin/\"\n                        },\n                        orders: orders,\n                        snackbarHandler: snackbarHandler,\n                        numberOfPages: numberOfPages\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this),\n                    pathName === \"users\" && !details && user.role === \"headAdmin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UsersComponent__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        setUserId: setUserId\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, _this),\n                    details && pathName === \"users\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                \"aria-label\": \"breadcrumb\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Admin panel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/admin/panel/users\",\n                                        className: \"link\",\n                                        children: \"users\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: userId\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_UserDetails__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true),\n                    pathName === \"items\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ItemsComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                        lineNumber: 88,\n                        columnNumber: 34\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lukas\\\\Desktop\\\\Programowanko\\\\Projekty\\\\benzen\\\\client\\\\src\\\\pages\\\\admin\\\\panel\\\\[id].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(AdminPanel, \"+lTmaRa+yH29IsRLl0B7AuggrkY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        notistack__WEBPACK_IMPORTED_MODULE_11__.useSnackbar,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AdminPanel;\nvar AdminPanelComponent = styled_components__WEBPACK_IMPORTED_MODULE_14__[\"default\"].div.withConfig({\n    displayName: \"[id]__AdminPanelComponent\",\n    componentId: \"sc-c12f90e0-0\"\n})(_templateObject());\n_c1 = AdminPanelComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminPanel);\nvar _c, _c1;\n$RefreshReg$(_c, \"AdminPanel\");\n$RefreshReg$(_c1, \"AdminPanelComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9hZG1pbi9wYW5lbC9baWRdLmpzPzVkZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9zdHlsaW5nXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbi8vcm91dGVyXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyBnZXRPcmRlcnMgfSBmcm9tIFwiLi4vLi4vLi4vYWN0aW9ucy9vcmRlcnNBY3Rpb25cIjtcclxuLy9yZWR1eFxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy9tYXRlcmlhbCB1aVxyXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JyZWFkY3J1bWJzXCI7XHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgVXNlckRldGFpbHMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvVXNlckRldGFpbHNcIjtcclxuaW1wb3J0IEl0ZW1zQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0l0ZW1zQ29tcG9uZW50XCI7XHJcbmltcG9ydCBPcmRlcnNDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvT3JkZXJzQ29tcG9uZW50XCI7XHJcbmltcG9ydCBVc2Vyc0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Vc2Vyc0NvbXBvbmVudFwiO1xyXG4vL25vdGlzdGFja1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gXCJub3Rpc3RhY2tcIjtcclxuLy9kYXRhXHJcbmltcG9ydCB7IGFkbWluTGlua3MgfSBmcm9tIFwiLi4vLi4vLi4vZGVzY3JpcHRpb25zL2xpbmtzXCI7XHJcblxyXG5jb25zdCBBZG1pblBhbmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAvL3N0YXRlXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgb3JkZXJzLCBudW1iZXJPZlBhZ2VzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm9yZGVycyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aE5hbWUgPSByb3V0ZXIuYXNQYXRoLnNwbGl0KFwiL1wiKVszXTtcclxuICBjb25zdCBkZXRhaWxzID0gcm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIilbNF07XHJcbiAgLy91c2VycyBzdGF0ZVxyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvL3VzZUVmZmVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRPcmRlcnMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgLy9oYW5kbGVyc1xyXG4gIGNvbnN0IHNuYWNrYmFySGFuZGxlciA9IChzbmFja2Jhck1lc3NhZ2UsIHNuYWNrVmFyaWFudCkgPT4ge1xyXG4gICAgZW5xdWV1ZVNuYWNrYmFyKHNuYWNrYmFyTWVzc2FnZSwgeyB2YXJpYW50OiBzbmFja1ZhcmlhbnQgfSk7XHJcbiAgICBjbG9zZVNuYWNrYmFyKDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBZG1pblBhbmVsQ29tcG9uZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtc2lkZVwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHthZG1pbkxpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtsaW5rLnJlc3RyaWN0aW9uID09PSB1c2VyLnJvbGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5wYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2xpbmsubmFtZSA9PT0gcGF0aE5hbWUgPyBcImxpbmsgYWN0aXZlXCIgOiBcImxpbmtcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGxpPntsaW5rLmxhYmVsfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1zaWRlXCI+XHJcbiAgICAgICAge3BhdGhOYW1lID09PSBcIm9yZGVyc1wiICYmIChcclxuICAgICAgICAgIDxPcmRlcnNDb21wb25lbnRcclxuICAgICAgICAgICAgb3JkZXJEZXRhaWxzPXtkZXRhaWxzfVxyXG4gICAgICAgICAgICB0aXRsZT1cIkFkbWluIHBhbmVsXCJcclxuICAgICAgICAgICAgbGluaz17eyBsYWJlbDogXCJvcmRlcnNcIiwgcGF0aDogXCIvb3JkZXJzL2FkbWluL1wiIH19XHJcbiAgICAgICAgICAgIG9yZGVycz17b3JkZXJzfVxyXG4gICAgICAgICAgICBzbmFja2JhckhhbmRsZXI9e3NuYWNrYmFySGFuZGxlcn1cclxuICAgICAgICAgICAgbnVtYmVyT2ZQYWdlcz17bnVtYmVyT2ZQYWdlc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cGF0aE5hbWUgPT09IFwidXNlcnNcIiAmJiAhZGV0YWlscyAmJiB1c2VyLnJvbGUgPT09IFwiaGVhZEFkbWluXCIgJiYgKFxyXG4gICAgICAgICAgPFVzZXJzQ29tcG9uZW50IHNldFVzZXJJZD17c2V0VXNlcklkfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2RldGFpbHMgJiYgcGF0aE5hbWUgPT09IFwidXNlcnNcIiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYnMgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZG1pbiBwYW5lbDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3BhbmVsL3VzZXJzXCIgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgdXNlcnNcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3VzZXJJZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYnM+XHJcbiAgICAgICAgICAgIDxVc2VyRGV0YWlscyAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cGF0aE5hbWUgPT09IFwiaXRlbXNcIiAmJiA8SXRlbXNDb21wb25lbnQgLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BZG1pblBhbmVsQ29tcG9uZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBZG1pblBhbmVsQ29tcG9uZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubGVmdC1zaWRlIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IENvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyQ2FzZTtcclxuICAgICAgfVxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHQtc2lkZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluUGFuZWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwidXNlUm91dGVyIiwiTGluayIsImdldE9yZGVycyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJCcmVhZGNydW1icyIsIlVzZXJEZXRhaWxzIiwiSXRlbXNDb21wb25lbnQiLCJPcmRlcnNDb21wb25lbnQiLCJVc2Vyc0NvbXBvbmVudCIsInVzZVNuYWNrYmFyIiwiYWRtaW5MaW5rcyIsIkFkbWluUGFuZWwiLCJkaXNwYXRjaCIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJ1c2VyIiwic3RhdGUiLCJvcmRlcnMiLCJudW1iZXJPZlBhZ2VzIiwicm91dGVyIiwicGF0aE5hbWUiLCJhc1BhdGgiLCJzcGxpdCIsImRldGFpbHMiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJzbmFja2JhckhhbmRsZXIiLCJzbmFja2Jhck1lc3NhZ2UiLCJzbmFja1ZhcmlhbnQiLCJ2YXJpYW50IiwiQWRtaW5QYW5lbENvbXBvbmVudCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwibGluayIsInJlc3RyaWN0aW9uIiwicm9sZSIsImhyZWYiLCJwYXRoIiwibmFtZSIsImxpIiwibGFiZWwiLCJvcmRlckRldGFpbHMiLCJ0aXRsZSIsImFyaWEtbGFiZWwiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/admin/panel/[id].js\n"));

/***/ })

});