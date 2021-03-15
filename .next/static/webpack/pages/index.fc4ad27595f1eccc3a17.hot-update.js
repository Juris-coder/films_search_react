webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Autocomplete/Autocomplete.jsx":
/*!**************************************************!*\
  !*** ./components/Autocomplete/Autocomplete.jsx ***!
  \**************************************************/
/*! exports provided: Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Autocomplete/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_apiCall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/apiCall */ "./api/apiCall.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates */ "./components/Autocomplete/templates/index.js");







var _jsxFileName = "D:\\Web\\films-search-react\\components\\Autocomplete\\Autocomplete.jsx",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useFindFilm = function useFindFilm(filmName) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState2 = Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState4 = Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState3, 2),
      query = _React$useState4[0],
      setQuery = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState6 = Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoading = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]),
      _React$useState8 = Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState7, 2),
      items = _React$useState8[0],
      setItems = _React$useState8[1];

  var fetchFilms = /*#__PURE__*/function () {
    var _ref = Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var result;
      return D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              setQuery(true);
              _context.next = 5;
              return Object(_api_apiCall__WEBPACK_IMPORTED_MODULE_8__["apiCall"])(filmName);

            case 5:
              result = _context.sent;
              setLoading(false);
              setItems(result.results);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setItems([]);
              setError(_context.t0);
              setLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchFilms() {
      return _ref.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (filmName !== "") {
      var timeout = setTimeout(function () {
        return fetchFilms();
      }, 700);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [filmName]);
  return {
    items: items,
    loading: loading,
    error: error,
    query: query
  };
};

_s(useFindFilm, "4neQKPr6IHKP/2MvHvWYM8kA+JI=");

var Autocomplete = function Autocomplete(props) {
  _s2();

  var templateType = props.templateType,
      filmName = props.filmName;

  var _useFindFilm = useFindFilm(filmName),
      items = _useFindFilm.items,
      loading = _useFindFilm.loading,
      error = _useFindFilm.error,
      query = _useFindFilm.query;

  var Template = _templates__WEBPACK_IMPORTED_MODULE_10__[templateType];
  var films = templateType === "Poster" ? items.slice(0, 3) : items;

  var _useRoveFocus = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["useRoveFocus"])(films.length),
      _useRoveFocus2 = Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useRoveFocus, 2),
      focus = _useRoveFocus2[0],
      setFocus = _useRoveFocus2[1];

  if (error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocompleteStyling,
      children: "An error has occured."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this);
  }

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocompleteStyling,
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 12
    }, _this);
  }

  if (!query) {
    return null;
  } else if (query && items.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocompleteStyling,
      children: "No results"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }, _this);
  } else if (query && items.length !== 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocompleteStyling,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.autocompleteItems, Object(D_Web_films_search_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.posters, templateType === "Poster")),
        children: films.map(function (film, i) {
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Template, _objectSpread(_objectSpread({}, film), {}, {
            key: film.id,
            index: i,
            items: films,
            focus: focus === i,
            setFocus: setFocus,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }
          }));
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this);
  }
};

_s2(Autocomplete, "idosbLs033djUbpx+ODXLZfa2Cg=", false, function () {
  return [useFindFilm, _utils__WEBPACK_IMPORTED_MODULE_9__["useRoveFocus"]];
});

_c = Autocomplete;

var _c;

$RefreshReg$(_c, "Autocomplete");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUvQXV0b2NvbXBsZXRlLmpzeCJdLCJuYW1lcyI6WyJ1c2VGaW5kRmlsbSIsImZpbG1OYW1lIiwiUmVhY3QiLCJlcnJvciIsInNldEVycm9yIiwicXVlcnkiLCJzZXRRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXRlbXMiLCJzZXRJdGVtcyIsImZldGNoRmlsbXMiLCJhcGlDYWxsIiwicmVzdWx0IiwicmVzdWx0cyIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiQXV0b2NvbXBsZXRlIiwicHJvcHMiLCJ0ZW1wbGF0ZVR5cGUiLCJUZW1wbGF0ZSIsInRlbXBsYXRlcyIsImZpbG1zIiwic2xpY2UiLCJ1c2VSb3ZlRm9jdXMiLCJsZW5ndGgiLCJmb2N1cyIsInNldEZvY3VzIiwic3R5bGVzIiwiYXV0b2NvbXBsZXRlU3R5bGluZyIsImNsYXNzTmFtZXMiLCJhdXRvY29tcGxldGVJdGVtcyIsInBvc3RlcnMiLCJtYXAiLCJmaWxtIiwiaSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFBQTs7QUFBQSx3QkFDTkMsOENBQUEsQ0FBZSxJQUFmLENBRE07QUFBQTtBQUFBLE1BQ3pCQyxLQUR5QjtBQUFBLE1BQ2xCQyxRQURrQjs7QUFBQSx5QkFFTkYsOENBQUEsQ0FBZSxLQUFmLENBRk07QUFBQTtBQUFBLE1BRXpCRyxLQUZ5QjtBQUFBLE1BRWxCQyxRQUZrQjs7QUFBQSx5QkFHRkosOENBQUEsQ0FBZSxLQUFmLENBSEU7QUFBQTtBQUFBLE1BR3pCSyxPQUh5QjtBQUFBLE1BR2hCQyxVQUhnQjs7QUFBQSx5QkFJTk4sOENBQUEsQ0FBZSxFQUFmLENB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aUIsTUFBTixLQUFpQixDQUE5QixFQUFpQztBQUN0Qyx3QkFDRTtBQUFLLGVBQVMsRUFBRUcsMERBQU0sQ0FBQ0MsbUJBQXZCO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFQyxpREFBVSxDQUFDRiwwREFBTSxDQUFDRyxpQkFBUix1SkFDbEJILDBEQUFNLENBQUNJLE9BRFcsRUFDRGIsWUFBWSxLQUFLLFFBRGhCLEVBRHZCO0FBQUEsa0JBS0dHLEtBQUssQ0FBQ1csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLDhCQUNULDREQUFDLFFBQUQsa0NBQ01ELElBRE47QUFFRSxlQUFHLEVBQUVBLElBQUksQ0FBQ0UsRUFGWjtBQUdFLGlCQUFLLEVBQUVELENBSFQ7QUFJRSxpQkFBSyxFQUFFYixLQUpUO0FBS0UsaUJBQUssRUFBRUksS0FBSyxLQUFLUyxDQUxuQjtBQU1FLG9CQUFRLEVBQUVSLFFBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURTO0FBQUEsU0FBVjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFvQkQ7QUFDRixDQTVDTTs7SUFBTVYsWTtVQUU4QmxCLFcsRUFJZnlCLG1EOzs7S0FOZlAsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYzRhZDI3NTk1ZjFlY2NjM2ExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGFwaUNhbGwgfSBmcm9tIFwiLi4vLi4vYXBpL2FwaUNhbGxcIjtcclxuaW1wb3J0IHsgdXNlUm92ZUZvY3VzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCAqIGFzIHRlbXBsYXRlcyBmcm9tIFwiLi90ZW1wbGF0ZXNcIjtcclxuXHJcbmNvbnN0IHVzZUZpbmRGaWxtID0gKGZpbG1OYW1lKSA9PiB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRmlsbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBzZXRRdWVyeSh0cnVlKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpQ2FsbChmaWxtTmFtZSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJdGVtcyhyZXN1bHQucmVzdWx0cyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRJdGVtcyhbXSk7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmaWxtTmFtZSAhPT0gXCJcIikge1xyXG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmZXRjaEZpbG1zKCksIDcwMCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB9XHJcbiAgfSwgW2ZpbG1OYW1lXSk7XHJcblxyXG4gIHJldHVybiB7IGl0ZW1zLCBsb2FkaW5nLCBlcnJvciwgcXVlcnkgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRvY29tcGxldGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRlbXBsYXRlVHlwZSwgZmlsbU5hbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgaXRlbXMsIGxvYWRpbmcsIGVycm9yLCBxdWVyeSB9ID0gdXNlRmluZEZpbG0oZmlsbU5hbWUpO1xyXG4gIGNvbnN0IFRlbXBsYXRlID0gdGVtcGxhdGVzW3RlbXBsYXRlVHlwZV07XHJcblxyXG4gIGNvbnN0IGZpbG1zID0gdGVtcGxhdGVUeXBlID09PSBcIlBvc3RlclwiID8gaXRlbXMuc2xpY2UoMCwgMykgOiBpdGVtcztcclxuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVJvdmVGb2N1cyhmaWxtcy5sZW5ndGgpO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0b2NvbXBsZXRlU3R5bGluZ30+QW4gZXJyb3IgaGFzIG9jY3VyZWQuPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dG9jb21wbGV0ZVN0eWxpbmd9PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2UgaWYgKHF1ZXJ5ICYmIGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0b2NvbXBsZXRlU3R5bGluZ30+Tm8gcmVzdWx0czwvZGl2PjtcclxuICB9IGVsc2UgaWYgKHF1ZXJ5ICYmIGl0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRvY29tcGxldGVTdHlsaW5nfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmF1dG9jb21wbGV0ZUl0ZW1zLCB7XHJcbiAgICAgICAgICAgIFtzdHlsZXMucG9zdGVyc106IHRlbXBsYXRlVHlwZSA9PT0gXCJQb3N0ZXJcIixcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtmaWxtcy5tYXAoKGZpbG0sIGkpID0+IChcclxuICAgICAgICAgICAgPFRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgey4uLmZpbG19XHJcbiAgICAgICAgICAgICAga2V5PXtmaWxtLmlkfVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpfVxyXG4gICAgICAgICAgICAgIGl0ZW1zPXtmaWxtc31cclxuICAgICAgICAgICAgICBmb2N1cz17Zm9jdXMgPT09IGl9XHJcbiAgICAgICAgICAgICAgc2V0Rm9jdXM9e3NldEZvY3VzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=