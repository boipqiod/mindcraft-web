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

/***/ "./src/components/common/SelectionBadge.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/SelectionBadge.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectionBadge: function() { return /* binding */ SelectionBadge; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _types_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/common */ \"./src/types/common.ts\");\n\n\n\nconst SelectionBadge = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        mt: 10,\n        mb: 3,\n        children: props.isSelected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n            boxShadow: \"0px 4px 4px rgba(0, 0, 0, 0.25)\",\n            fontSize: 14,\n            px: 3,\n            borderRadius: 4,\n            bg: _types_common__WEBPACK_IMPORTED_MODULE_1__.colors.key,\n            color: \"white\",\n            fontWeight: \"bold\",\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/gongsangheon/dev/personal/mindcraft-web/src/components/common/SelectionBadge.tsx\",\n            lineNumber: 19,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n            boxShadow: \"0px 4px 4px rgba(0, 0, 0, 0.25)\",\n            cursor: \"pointer\",\n            onClick: props.onClick,\n            transition: \"all 0.3s\",\n            _hover: {\n                color: \"white\",\n                backgroundColor: _types_common__WEBPACK_IMPORTED_MODULE_1__.colors.key\n            },\n            fontSize: 14,\n            px: 3,\n            borderRadius: 4,\n            fontWeight: \"normal\",\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/gongsangheon/dev/personal/mindcraft-web/src/components/common/SelectionBadge.tsx\",\n            lineNumber: 23,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gongsangheon/dev/personal/mindcraft-web/src/components/common/SelectionBadge.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_c = SelectionBadge;\nvar _c;\n$RefreshReg$(_c, \"SelectionBadge\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vU2VsZWN0aW9uQmFkZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUNGO0FBUXJDLE1BQU1HLGlCQUFpQixDQUFDQztJQUUzQixxQkFDSSw4REFBQ0gsaURBQUdBO1FBQ0FJLElBQUk7UUFDSkMsSUFBSTtrQkFHSEYsTUFBTUcsVUFBVSxpQkFDYiw4REFBQ1AsbURBQUtBO1lBQ0ZRLFdBQVc7WUFDWEMsVUFBVTtZQUFJQyxJQUFJO1lBQUdDLGNBQWM7WUFBR0MsSUFBSVYsaURBQU1BLENBQUNXLEdBQUc7WUFBRUMsT0FBTztZQUFTQyxZQUFZO3NCQUNwRlgsTUFBTVksUUFBUTs7Ozs7c0NBQ2hCLDhEQUFDaEIsbURBQUtBO1lBQ0ZRLFdBQVc7WUFDWFMsUUFBUTtZQUNSQyxTQUFTZCxNQUFNYyxPQUFPO1lBQ3RCQyxZQUFZO1lBQ1pDLFFBQVE7Z0JBQ0pOLE9BQU87Z0JBQ1BPLGlCQUFpQm5CLGlEQUFNQSxDQUFDVyxHQUFHO1lBQy9CO1lBQ0FKLFVBQVU7WUFBSUMsSUFBSTtZQUFHQyxjQUFjO1lBQUdJLFlBQVk7c0JBQVlYLE1BQU1ZLFFBQVE7Ozs7Ozs7Ozs7O0FBS2hHLEVBQUM7S0EzQlliIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3Rpb25CYWRnZS50c3g/NWJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWRnZSwgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi8uLi90eXBlcy9jb21tb25cIjtcblxudHlwZSBTZWxlY3Rpb25CYWRnZVByb3BzID0ge1xuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICAgIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uQmFkZ2UgPSAocHJvcHM6IFNlbGVjdGlvbkJhZGdlUHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIG10PXsxMH1cbiAgICAgICAgICAgIG1iPXszfVxuXG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5pc1NlbGVjdGVkID9cbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PXtcIjBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIn1cbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezE0fSBweD17M30gYm9yZGVyUmFkaXVzPXs0fSBiZz17Y29sb3JzLmtleX0gY29sb3I9eyd3aGl0ZSd9IGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxuICAgICAgICAgICAgICAgID57cHJvcHMuY2hpbGRyZW59PC9CYWRnZT4gOlxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c9e1wiMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KVwifVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I9e1wicG9pbnRlclwifVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXtcImFsbCAwLjNzXCJ9XG4gICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmtleSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9ezE0fSBweD17M30gYm9yZGVyUmFkaXVzPXs0fSBmb250V2VpZ2h0PXtcIm5vcm1hbFwifSA+e3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJCYWRnZSIsIkJveCIsImNvbG9ycyIsIlNlbGVjdGlvbkJhZGdlIiwicHJvcHMiLCJtdCIsIm1iIiwiaXNTZWxlY3RlZCIsImJveFNoYWRvdyIsImZvbnRTaXplIiwicHgiLCJib3JkZXJSYWRpdXMiLCJiZyIsImtleSIsImNvbG9yIiwiZm9udFdlaWdodCIsImNoaWxkcmVuIiwiY3Vyc29yIiwib25DbGljayIsInRyYW5zaXRpb24iLCJfaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/SelectionBadge.tsx\n"));

/***/ })

});