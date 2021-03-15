module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./api/apiCall.js":
/*!************************!*\
  !*** ./api/apiCall.js ***!
  \************************/
/*! exports provided: apiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCall", function() { return apiCall; });
/* harmony import */ var _configs_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/env */ "./configs/env.js");

const apiCall = async query => {
  const request = await fetch(`${_configs_env__WEBPACK_IMPORTED_MODULE_0__["API_ENDPOINT"]}${_configs_env__WEBPACK_IMPORTED_MODULE_0__["API_KEY"]}&query=${query}`);
  const result = await request.json();
  return result;
};

/***/ }),

/***/ "./components/Autocomplete/Autocomplete.jsx":
/*!**************************************************!*\
  !*** ./components/Autocomplete/Autocomplete.jsx ***!
  \**************************************************/
/*! exports provided: Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Autocomplete/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_apiCall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/apiCall */ "./api/apiCall.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates */ "./components/Autocomplete/templates/index.js");


var _jsxFileName = "D:\\Web\\films-search-react\\components\\Autocomplete\\Autocomplete.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const useFindFilm = filmName => {
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      setQuery(true);
      const result = await Object(_api_apiCall__WEBPACK_IMPORTED_MODULE_4__["apiCall"])(filmName);
      setLoading(false);
      setItems(result.results);
    } catch (error) {
      setItems([]);
      setError(error);
      setLoading(false);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (filmName !== "") {
      const timeout = setTimeout(() => fetchFilms(), 700);
      return () => clearTimeout(timeout);
    }
  }, [filmName]);
  return {
    items,
    loading,
    error,
    query
  };
};

const Autocomplete = props => {
  const {
    templateType,
    filmName
  } = props;
  const {
    items,
    loading,
    error,
    query
  } = useFindFilm(filmName);
  const Template = _templates__WEBPACK_IMPORTED_MODULE_6__[templateType];
  const films = templateType === "Poster" ? items.slice(0, 3) : items;
  const [focus, setFocus] = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["useRoveFocus"])(films.length);

  if (error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.autocompleteStyling,
      children: "An error has occured."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined);
  }

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.autocompleteStyling,
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 12
    }, undefined);
  }

  if (!query) {
    return null;
  }

  if (query && items.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.autocompleteStyling,
      children: "No results"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }, undefined);
  }

  if (query && items.length > 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.autocompleteStyling,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.autocompleteItems, {
          [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.posters]: templateType === "Poster"
        }),
        children: films.map((film, i) => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Template, _objectSpread(_objectSpread({}, film), {}, {
          key: film.id,
          index: i,
          items: films,
          focus: focus === i,
          setFocus: setFocus,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }
        })))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined);
  }
};

/***/ }),

/***/ "./components/Autocomplete/index.js":
/*!******************************************!*\
  !*** ./components/Autocomplete/index.js ***!
  \******************************************/
/*! exports provided: Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete */ "./components/Autocomplete/Autocomplete.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["Autocomplete"]; });



/***/ }),

/***/ "./components/Autocomplete/styles.module.scss":
/*!****************************************************!*\
  !*** ./components/Autocomplete/styles.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "styles_link__1YqOq",
	"autocompleteStyling": "styles_autocompleteStyling__dz7gu",
	"autocompleteItems": "styles_autocompleteItems__g5Bl0",
	"listDiv": "styles_listDiv__2i9In",
	"posters": "styles_posters__2TuUn",
	"postersDiv": "styles_postersDiv__2E43X",
	"filmTitle": "styles_filmTitle__3gDcc",
	"filmYear": "styles_filmYear__15LuV",
	"filmPoster": "styles_filmPoster__2T2Fk",
	"active": "styles_active__10DH1",
	"unactive": "styles_unactive__jbRUL"
};


/***/ }),

/***/ "./components/Autocomplete/templates/List.jsx":
/*!****************************************************!*\
  !*** ./components/Autocomplete/templates/List.jsx ***!
  \****************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.module.scss */ "./components/Autocomplete/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");

var _jsxFileName = "D:\\Web\\films-search-react\\components\\Autocomplete\\templates\\List.jsx";




const List = props => {
  const {
    id,
    title,
    vote_average,
    index,
    focus,
    setFocus
  } = props;
  const rating = vote_average.toFixed(1);
  const itemTitle = `${title} (${rating})`;
  const ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);
  const handleSelect = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](() => {
    setFocus(index);
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["externalURL"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["makeFilmURL"])(id, title));
  }, [index, setFocus]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.listDiv, {
      [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active]: focus
    }),
    onClick: handleSelect,
    onKeyPress: handleSelect,
    tabIndex: focus ? 0 : -1,
    ref: ref,
    children: itemTitle
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Autocomplete/templates/Poster.jsx":
/*!******************************************************!*\
  !*** ./components/Autocomplete/templates/Poster.jsx ***!
  \******************************************************/
/*! exports provided: Poster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return Poster; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.module.scss */ "./components/Autocomplete/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");
/* harmony import */ var _configs_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configs/env */ "./configs/env.js");

var _jsxFileName = "D:\\Web\\films-search-react\\components\\Autocomplete\\templates\\Poster.jsx";





const Poster = props => {
  const {
    id,
    title,
    poster_path,
    release_date,
    index,
    focus,
    setFocus
  } = props;
  const ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);
  const handleSelect = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](() => {
    setFocus(index);
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["externalURL"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["makeFilmURL"])(id, title));
  }, [index, setFocus]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filmDiv, _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.postersDiv, {
      [_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active]: focus
    }),
    onClick: handleSelect,
    onKeyPress: handleSelect,
    tabIndex: focus ? 0 : -1,
    ref: ref,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filmPoster,
      src: poster_path ? `${_configs_env__WEBPACK_IMPORTED_MODULE_5__["IMAGE_PATH"]}${poster_path}` : _configs_env__WEBPACK_IMPORTED_MODULE_5__["NOT_FOUND_IMAGE_PATH"],
      alt: "film_poster"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filmTitle,
      children: `${title} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.filmYear,
      children: release_date ? release_date.slice(0, 4) : "unknown"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Autocomplete/templates/index.js":
/*!****************************************************!*\
  !*** ./components/Autocomplete/templates/index.js ***!
  \****************************************************/
/*! exports provided: List, Poster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./components/Autocomplete/templates/List.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["List"]; });

/* harmony import */ var _Poster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Poster */ "./components/Autocomplete/templates/Poster.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Poster", function() { return _Poster__WEBPACK_IMPORTED_MODULE_1__["Poster"]; });




/***/ }),

/***/ "./components/Footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Footer/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Web\\films-search-react\\components\\Footer\\Footer.jsx";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
      src: "/../public/images/logo.png",
      alt: "logo",
      width: "220px",
      height: "50px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/Footer/Footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });



/***/ }),

/***/ "./components/Footer/styles.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/styles.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"image": "styles_image__1n_hl"
};


/***/ }),

/***/ "./components/Input/Input.jsx":
/*!************************************!*\
  !*** ./components/Input/Input.jsx ***!
  \************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_gg_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-gg/search */ "@iconify/icons-gg/search");
/* harmony import */ var _iconify_icons_gg_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_gg_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Input/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./components/index.js");
/* harmony import */ var _Autocomplete_templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Autocomplete/templates */ "./components/Autocomplete/templates/index.js");

var _jsxFileName = "D:\\Web\\films-search-react\\components\\Input\\Input.jsx";






const templateNames = Object.keys(_Autocomplete_templates__WEBPACK_IMPORTED_MODULE_6__);
const Input = () => {
  const [filmName, setFilmName] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]("");
  const [template, setTemplate] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]("Poster");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container__input,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_iconify_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.iconify,
        icon: _iconify_icons_gg_search__WEBPACK_IMPORTED_MODULE_3___default.a
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.inputOuter,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.query,
          placeholder: "start typing...",
          onChange: event => setFilmName(event.target.value),
          value: filmName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.radio,
          children: templateNames.map(templateName => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: [templateName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.radioInput,
                checked: template === templateName,
                type: "radio",
                onChange: () => setTemplate(templateName),
                name: "type",
                value: templateName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, undefined)
          }, templateName, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(___WEBPACK_IMPORTED_MODULE_5__["Autocomplete"], {
        filmName: filmName,
        templateType: template
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./components/Input/Input.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["Input"]; });



/***/ }),

/***/ "./components/Input/styles.module.scss":
/*!*********************************************!*\
  !*** ./components/Input/styles.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"iconify": "styles_iconify__2mVQu",
	"query": "styles_query__3w_LG",
	"radio": "styles_radio__1-OxL",
	"container": "styles_container__26lIh",
	"container__input": "styles_container__input__q9DYr",
	"radioInput": "styles_radioInput__1I9cT",
	"inputOuter": "styles_inputOuter__1HCuu"
};


/***/ }),

/***/ "./components/Modal/Modal.jsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.jsx ***!
  \************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Modal/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Web\\films-search-react\\components\\Modal\\Modal.jsx";




const Modal = () => {
  const [isClosed, setIsClosed] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    const modalTimeout = setTimeout(() => setIsClosed(false), 700);
    return () => clearTimeout(modalTimeout);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.modal, {
        [_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.closed]: isClosed
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Hi!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["This is ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "SEARCH movies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 19
        }, undefined), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["A live movies search application using external database via API.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), "Choose a film here and get redirected to the TMDb\u2019s website for more information."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => setIsClosed(true),
        children: "GOT IT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: () => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["externalURL"])("https://www.themoviedb.org/"),
        children: "Take me to TMDb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.black, {
        [_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.closed]: isClosed
      }),
      onClick: () => setIsClosed(true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./components/Modal/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



/***/ }),

/***/ "./components/Modal/styles.module.scss":
/*!*********************************************!*\
  !*** ./components/Modal/styles.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "styles_modal__2Qy-V",
	"black": "styles_black__1Bmri",
	"closed": "styles_closed__1MYMv"
};


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Footer, Modal, Input, Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./components/Modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_1__["Modal"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_2__["Input"]; });

/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Autocomplete */ "./components/Autocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_3__["Autocomplete"]; });






/***/ }),

/***/ "./configs/env.js":
/*!************************!*\
  !*** ./configs/env.js ***!
  \************************/
/*! exports provided: IMDB_URL, IMAGE_PATH, NOT_FOUND_IMAGE_PATH, API_ENDPOINT, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMDB_URL", function() { return IMDB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_PATH", function() { return IMAGE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND_IMAGE_PATH", function() { return NOT_FOUND_IMAGE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
const IMDB_URL = "https://www.themoviedb.org/movie/";
const IMAGE_PATH = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
const NOT_FOUND_IMAGE_PATH = "https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?s=612x612";
const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = "35c2658e0e706d145f4d4f7e995e368f";

/***/ }),

/***/ "./layouts/BaseLayout/BaseLayout.jsx":
/*!*******************************************!*\
  !*** ./layouts/BaseLayout/BaseLayout.jsx ***!
  \*******************************************/
/*! exports provided: BaseLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return BaseLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./layouts/BaseLayout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Web\\films-search-react\\layouts\\BaseLayout\\BaseLayout.jsx";




const BaseLayoutMemo = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Input"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

const BaseLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](BaseLayoutMemo);
/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./layouts/BaseLayout/index.js":
/*!*************************************!*\
  !*** ./layouts/BaseLayout/index.js ***!
  \*************************************/
/*! exports provided: BaseLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLayout */ "./layouts/BaseLayout/BaseLayout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["BaseLayout"]; });



/***/ }),

/***/ "./layouts/BaseLayout/styles.module.scss":
/*!***********************************************!*\
  !*** ./layouts/BaseLayout/styles.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./layouts/index.js":
/*!**************************!*\
  !*** ./layouts/index.js ***!
  \**************************/
/*! exports provided: BaseLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseLayout */ "./layouts/BaseLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLayout", function() { return _BaseLayout__WEBPACK_IMPORTED_MODULE_0__["BaseLayout"]; });



/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");

var _jsxFileName = "D:\\Web\\films-search-react\\pages\\index.jsx";




const HomePageMemo = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts__WEBPACK_IMPORTED_MODULE_2__["BaseLayout"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

const HomePage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](HomePageMemo);
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./utils/externalURL.js":
/*!******************************!*\
  !*** ./utils/externalURL.js ***!
  \******************************/
/*! exports provided: externalURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalURL", function() { return externalURL; });
const externalURL = url => {
  return window.location.assign(url);
};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: externalURL, makeFilmURL, useRoveFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./externalURL */ "./utils/externalURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "externalURL", function() { return _externalURL__WEBPACK_IMPORTED_MODULE_0__["externalURL"]; });

/* harmony import */ var _makeFilmURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeFilmURL */ "./utils/makeFilmURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeFilmURL", function() { return _makeFilmURL__WEBPACK_IMPORTED_MODULE_1__["makeFilmURL"]; });

/* harmony import */ var _useRoveFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useRoveFocus */ "./utils/useRoveFocus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRoveFocus", function() { return _useRoveFocus__WEBPACK_IMPORTED_MODULE_2__["useRoveFocus"]; });





/***/ }),

/***/ "./utils/makeFilmURL.js":
/*!******************************!*\
  !*** ./utils/makeFilmURL.js ***!
  \******************************/
/*! exports provided: makeFilmURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFilmURL", function() { return makeFilmURL; });
/* harmony import */ var _configs_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/env */ "./configs/env.js");

const makeFilmURL = (id, title) => {
  const cleanTitle = title.replace(/[^a-zA-Z ]/g, "").replace(/ /g, "-").toLowerCase();
  return `${_configs_env__WEBPACK_IMPORTED_MODULE_0__["IMDB_URL"]}${id}-${cleanTitle}`;
};

/***/ }),

/***/ "./utils/useRoveFocus.js":
/*!*******************************!*\
  !*** ./utils/useRoveFocus.js ***!
  \*******************************/
/*! exports provided: useRoveFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRoveFocus", function() { return useRoveFocus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useRoveFocus = size => {
  const [currentFocus, setCurrentFocus] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(e => {
    if (e.keyCode === 40) {
      // Down arrow
      e.preventDefault();
      setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
    } else if (e.keyCode === 38) {
      // Up arrow
      e.preventDefault();
      setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
    }
  }, [size, currentFocus, setCurrentFocus]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);
  return [currentFocus, setCurrentFocus];
};

/***/ }),

/***/ "@iconify/icons-gg/search":
/*!*******************************************!*\
  !*** external "@iconify/icons-gg/search" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@iconify/icons-gg/search");

/***/ }),

/***/ "@iconify/react":
/*!*********************************!*\
  !*** external "@iconify/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@iconify/react");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGkvYXBpQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0b2NvbXBsZXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0b2NvbXBsZXRlL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dG9jb21wbGV0ZS90ZW1wbGF0ZXMvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUvdGVtcGxhdGVzL1Bvc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdXRvY29tcGxldGUvdGVtcGxhdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQvSW5wdXQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZ3MvZW52LmpzIiwid2VicGFjazovLy8uL2xheW91dHMvQmFzZUxheW91dC9CYXNlTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xheW91dHMvQmFzZUxheW91dC9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9leHRlcm5hbFVSTC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tYWtlRmlsbVVSTC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VSb3ZlRm9jdXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGljb25pZnkvaWNvbnMtZ2cvc2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGljb25pZnkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJhcGlDYWxsIiwicXVlcnkiLCJyZXF1ZXN0IiwiZmV0Y2giLCJBUElfRU5EUE9JTlQiLCJBUElfS0VZIiwicmVzdWx0IiwianNvbiIsInVzZUZpbmRGaWxtIiwiZmlsbU5hbWUiLCJlcnJvciIsInNldEVycm9yIiwiUmVhY3QiLCJzZXRRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXRlbXMiLCJzZXRJdGVtcyIsImZldGNoRmlsbXMiLCJyZXN1bHRzIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJBdXRvY29tcGxldGUiLCJwcm9wcyIsInRlbXBsYXRlVHlwZSIsIlRlbXBsYXRlIiwidGVtcGxhdGVzIiwiZmlsbXMiLCJzbGljZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJ1c2VSb3ZlRm9jdXMiLCJsZW5ndGgiLCJzdHlsZXMiLCJhdXRvY29tcGxldGVTdHlsaW5nIiwiY2xhc3NOYW1lcyIsImF1dG9jb21wbGV0ZUl0ZW1zIiwicG9zdGVycyIsIm1hcCIsImZpbG0iLCJpIiwiaWQiLCJMaXN0IiwidGl0bGUiLCJ2b3RlX2F2ZXJhZ2UiLCJpbmRleCIsInJhdGluZyIsInRvRml4ZWQiLCJpdGVtVGl0bGUiLCJyZWYiLCJjdXJyZW50IiwiaGFuZGxlU2VsZWN0IiwiZXh0ZXJuYWxVUkwiLCJtYWtlRmlsbVVSTCIsImxpc3REaXYiLCJhY3RpdmUiLCJQb3N0ZXIiLCJwb3N0ZXJfcGF0aCIsInJlbGVhc2VfZGF0ZSIsImZpbG1EaXYiLCJwb3N0ZXJzRGl2IiwiZmlsbVBvc3RlciIsIklNQUdFX1BBVEgiLCJOT1RfRk9VTkRfSU1BR0VfUEFUSCIsImZpbG1UaXRsZSIsImZpbG1ZZWFyIiwiRm9vdGVyIiwiaW1hZ2UiLCJ0ZW1wbGF0ZU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsIklucHV0Iiwic2V0RmlsbU5hbWUiLCJ0ZW1wbGF0ZSIsInNldFRlbXBsYXRlIiwiY29udGFpbmVyIiwiY29udGFpbmVyX19pbnB1dCIsImljb25pZnkiLCJzZWFyY2hJY29uIiwiaW5wdXRPdXRlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyYWRpbyIsInRlbXBsYXRlTmFtZSIsInJhZGlvSW5wdXQiLCJNb2RhbCIsImlzQ2xvc2VkIiwic2V0SXNDbG9zZWQiLCJtb2RhbFRpbWVvdXQiLCJtb2RhbCIsImNsb3NlZCIsImJsYWNrIiwiSU1EQl9VUkwiLCJCYXNlTGF5b3V0TWVtbyIsImNoaWxkcmVuIiwiQmFzZUxheW91dCIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwic3JjU2V0Iiwic2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXN0Iiwic3JjIiwicGFyc2VJbnQiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkhvbWVQYWdlTWVtbyIsIkhvbWVQYWdlIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJjbGVhblRpdGxlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2l6ZSIsImN1cnJlbnRGb2N1cyIsInNldEN1cnJlbnRGb2N1cyIsInVzZVN0YXRlIiwiaGFuZGxlS2V5RG93biIsInVzZUNhbGxiYWNrIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxPQUFPLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtBQUN0QyxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLHlEQUFhLEdBQUVDLG9EQUFRLFVBQVNKLEtBQU0sRUFBMUMsQ0FBM0I7QUFDQSxRQUFNSyxNQUFNLEdBQUcsTUFBTUos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Q0FBQ0MsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCO0FBQ0FELE9BQUMsQ0FBQ0UsY0FBRjtBQUNBTixxQkFBZSxDQUFDRCxZQUFZLEtBQUtELElBQUksR0FBRyxDQUF4QixHQUE0QixDQUE1QixHQUFnQ0MsWUFBWSxHQUFHLENBQWhELENBQWY7QUFDRCxLQUpELE1BSU8sSUFBSUssQ0FBQyxDQUFDQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDM0I7QUFDQUQsT0FBQyxDQUFDRSxjQUFGO0FBQ0FOLHFCQUFlLENBQUNELFlBQVksS0FBSyxDQUFqQixHQUFxQkQsSUFBSSxHQUFHLENBQTVCLEdBQWdDQyxZQUFZLEdBQUcsQ0FBaEQsQ0FBZjtBQUNEO0FBQ0YsR0FYbUIsRUFZcEIsQ0FBQ0QsSUFBRCxFQUFPQyxZQUFQLEVBQXFCQyxlQUFyQixDQVpvQixDQUF0QjtBQWVBNU0sOENBQUssQ0FBQ21OLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ1AsYUFBckMsRUFBb0QsS0FBcEQ7QUFDQSxXQUFPLE1BQU07QUFDWE0sY0FBUSxDQUFDRSxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q1IsYUFBeEMsRUFBdUQsS0FBdkQ7QUFDRCxLQUZEO0FBR0QsR0FMRCxFQUtHLENBQUNBLGFBQUQsQ0FMSDtBQU9BLFNBQU8sQ0FBQ0gsWUFBRCxFQUFlQyxlQUFmLENBQVA7QUFDRCxDQTFCTSxDOzs7Ozs7Ozs7OztBQ0ZQLHFEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCB7IEFQSV9FTkRQT0lOVCwgQVBJX0tFWSB9IGZyb20gXCIuLi9jb25maWdzL2VudlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUNhbGwgPSBhc3luYyAocXVlcnkpID0+IHtcclxuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYCR7QVBJX0VORFBPSU5UfSR7QVBJX0tFWX0mcXVlcnk9JHtxdWVyeX1gKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBhcGlDYWxsIH0gZnJvbSBcIi4uLy4uL2FwaS9hcGlDYWxsXCI7XHJcbmltcG9ydCB7IHVzZVJvdmVGb2N1cyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSBcIi4vdGVtcGxhdGVzXCI7XHJcblxyXG5jb25zdCB1c2VGaW5kRmlsbSA9IChmaWxtTmFtZSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEZpbG1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgc2V0UXVlcnkodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUNhbGwoZmlsbU5hbWUpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SXRlbXMocmVzdWx0LnJlc3VsdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0SXRlbXMoW10pO1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZmlsbU5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZmV0Y2hGaWxtcygpLCA3MDApO1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH0sIFtmaWxtTmFtZV0pO1xyXG5cclxuICByZXR1cm4geyBpdGVtcywgbG9hZGluZywgZXJyb3IsIHF1ZXJ5IH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0b2NvbXBsZXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0ZW1wbGF0ZVR5cGUsIGZpbG1OYW1lIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGl0ZW1zLCBsb2FkaW5nLCBlcnJvciwgcXVlcnkgfSA9IHVzZUZpbmRGaWxtKGZpbG1OYW1lKTtcclxuICBjb25zdCBUZW1wbGF0ZSA9IHRlbXBsYXRlc1t0ZW1wbGF0ZVR5cGVdO1xyXG5cclxuICBjb25zdCBmaWxtcyA9IHRlbXBsYXRlVHlwZSA9PT0gXCJQb3N0ZXJcIiA/IGl0ZW1zLnNsaWNlKDAsIDMpIDogaXRlbXM7XHJcbiAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VSb3ZlRm9jdXMoZmlsbXMubGVuZ3RoKTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dG9jb21wbGV0ZVN0eWxpbmd9PkFuIGVycm9yIGhhcyBvY2N1cmVkLjwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRvY29tcGxldGVTdHlsaW5nfT5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFxdWVyeSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAocXVlcnkgJiYgaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRvY29tcGxldGVTdHlsaW5nfT5ObyByZXN1bHRzPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHF1ZXJ5ICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0b2NvbXBsZXRlU3R5bGluZ30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hdXRvY29tcGxldGVJdGVtcywge1xyXG4gICAgICAgICAgICBbc3R5bGVzLnBvc3RlcnNdOiB0ZW1wbGF0ZVR5cGUgPT09IFwiUG9zdGVyXCIsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZmlsbXMubWFwKChmaWxtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgIHsuLi5maWxtfVxyXG4gICAgICAgICAgICAgIGtleT17ZmlsbS5pZH1cclxuICAgICAgICAgICAgICBpbmRleD17aX1cclxuICAgICAgICAgICAgICBpdGVtcz17ZmlsbXN9XHJcbiAgICAgICAgICAgICAgZm9jdXM9e2ZvY3VzID09PSBpfVxyXG4gICAgICAgICAgICAgIHNldEZvY3VzPXtzZXRGb2N1c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL0F1dG9jb21wbGV0ZSc7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua1wiOiBcInN0eWxlc19saW5rX18xWXFPcVwiLFxuXHRcImF1dG9jb21wbGV0ZVN0eWxpbmdcIjogXCJzdHlsZXNfYXV0b2NvbXBsZXRlU3R5bGluZ19fZHo3Z3VcIixcblx0XCJhdXRvY29tcGxldGVJdGVtc1wiOiBcInN0eWxlc19hdXRvY29tcGxldGVJdGVtc19fZzVCbDBcIixcblx0XCJsaXN0RGl2XCI6IFwic3R5bGVzX2xpc3REaXZfXzJpOUluXCIsXG5cdFwicG9zdGVyc1wiOiBcInN0eWxlc19wb3N0ZXJzX18yVHVVblwiLFxuXHRcInBvc3RlcnNEaXZcIjogXCJzdHlsZXNfcG9zdGVyc0Rpdl9fMkU0M1hcIixcblx0XCJmaWxtVGl0bGVcIjogXCJzdHlsZXNfZmlsbVRpdGxlX18zZ0RjY1wiLFxuXHRcImZpbG1ZZWFyXCI6IFwic3R5bGVzX2ZpbG1ZZWFyX18xNUx1VlwiLFxuXHRcImZpbG1Qb3N0ZXJcIjogXCJzdHlsZXNfZmlsbVBvc3Rlcl9fMlQyRmtcIixcblx0XCJhY3RpdmVcIjogXCJzdHlsZXNfYWN0aXZlX18xMERIMVwiLFxuXHRcInVuYWN0aXZlXCI6IFwic3R5bGVzX3VuYWN0aXZlX19qYlJVTFwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgbWFrZUZpbG1VUkwsIGV4dGVybmFsVVJMIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB2b3RlX2F2ZXJhZ2UsIGluZGV4LCBmb2N1cywgc2V0Rm9jdXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJhdGluZyA9IHZvdGVfYXZlcmFnZS50b0ZpeGVkKDEpO1xyXG4gIGNvbnN0IGl0ZW1UaXRsZSA9IGAke3RpdGxlfSAoJHtyYXRpbmd9KWA7XHJcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2ZvY3VzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZvY3VzKGluZGV4KTtcclxuICAgIGV4dGVybmFsVVJMKG1ha2VGaWxtVVJMKGlkLCB0aXRsZSkpO1xyXG4gIH0sIFtpbmRleCwgc2V0Rm9jdXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5saXN0RGl2LCB7XHJcbiAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBmb2N1cyxcclxuICAgICAgfSl9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgb25LZXlQcmVzcz17aGFuZGxlU2VsZWN0fVxyXG4gICAgICB0YWJJbmRleD17Zm9jdXMgPyAwIDogLTF9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgPlxyXG4gICAgICB7aXRlbVRpdGxlfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBtYWtlRmlsbVVSTCwgZXh0ZXJuYWxVUkwgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgSU1BR0VfUEFUSCwgTk9UX0ZPVU5EX0lNQUdFX1BBVEggfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlncy9lbnZcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHRpdGxlLFxyXG4gICAgcG9zdGVyX3BhdGgsXHJcbiAgICByZWxlYXNlX2RhdGUsXHJcbiAgICBpbmRleCxcclxuICAgIGZvY3VzLFxyXG4gICAgc2V0Rm9jdXMsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9LCBbZm9jdXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Rm9jdXMoaW5kZXgpO1xyXG4gICAgZXh0ZXJuYWxVUkwobWFrZUZpbG1VUkwoaWQsIHRpdGxlKSk7XHJcbiAgfSwgW2luZGV4LCBzZXRGb2N1c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbG1EaXYsIHN0eWxlcy5wb3N0ZXJzRGl2LCB7XHJcbiAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiBmb2N1cyxcclxuICAgICAgfSl9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgb25LZXlQcmVzcz17aGFuZGxlU2VsZWN0fVxyXG4gICAgICB0YWJJbmRleD17Zm9jdXMgPyAwIDogLTF9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsbVBvc3Rlcn1cclxuICAgICAgICBzcmM9e3Bvc3Rlcl9wYXRoID8gYCR7SU1BR0VfUEFUSH0ke3Bvc3Rlcl9wYXRofWAgOiBOT1RfRk9VTkRfSU1BR0VfUEFUSH1cclxuICAgICAgICBhbHQ9XCJmaWxtX3Bvc3RlclwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5maWxtVGl0bGV9PntgJHt0aXRsZX0gYH08L2g0PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5maWxtWWVhcn0+XHJcbiAgICAgICAge3JlbGVhc2VfZGF0ZSA/IHJlbGVhc2VfZGF0ZS5zbGljZSgwLCA0KSA6IFwidW5rbm93blwifVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0JztcclxuZXhwb3J0IHsgUG9zdGVyIH0gZnJvbSAnLi9Qb3N0ZXInOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXI9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz1cIi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28ucG5nXCJcclxuICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICB3aWR0aD1cIjIyMHB4XCJcclxuICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgLz5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0Zvb3RlclwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWFnZVwiOiBcInN0eWxlc19pbWFnZV9fMW5faGxcIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XHJcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gXCJAaWNvbmlmeS9pY29ucy1nZy9zZWFyY2hcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgKiBhcyB0ZW1wbGF0ZXMgZnJvbSBcIi4uL0F1dG9jb21wbGV0ZS90ZW1wbGF0ZXNcIjtcclxuXHJcbmNvbnN0IHRlbXBsYXRlTmFtZXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZXMpO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmaWxtTmFtZSwgc2V0RmlsbU5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RlbXBsYXRlLCBzZXRUZW1wbGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlBvc3RlclwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2lucHV0fT5cclxuICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uaWZ5fSBpY29uPXtzZWFyY2hJY29ufSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRPdXRlcn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXVlcnl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3RhcnQgdHlwaW5nLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RmlsbU5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2ZpbG1OYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmFkaW99PlxyXG4gICAgICAgICAgICB7dGVtcGxhdGVOYW1lcy5tYXAoKHRlbXBsYXRlTmFtZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0ZW1wbGF0ZU5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7dGVtcGxhdGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yYWRpb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RlbXBsYXRlID09PSB0ZW1wbGF0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0VGVtcGxhdGUodGVtcGxhdGVOYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RlbXBsYXRlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEF1dG9jb21wbGV0ZSBmaWxtTmFtZT17ZmlsbU5hbWV9IHRlbXBsYXRlVHlwZT17dGVtcGxhdGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9JbnB1dCc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb25pZnlcIjogXCJzdHlsZXNfaWNvbmlmeV9fMm1WUXVcIixcblx0XCJxdWVyeVwiOiBcInN0eWxlc19xdWVyeV9fM3dfTEdcIixcblx0XCJyYWRpb1wiOiBcInN0eWxlc19yYWRpb19fMS1PeExcIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX18yNmxJaFwiLFxuXHRcImNvbnRhaW5lcl9faW5wdXRcIjogXCJzdHlsZXNfY29udGFpbmVyX19pbnB1dF9fcTlEWXJcIixcblx0XCJyYWRpb0lucHV0XCI6IFwic3R5bGVzX3JhZGlvSW5wdXRfXzFJOWNUXCIsXG5cdFwiaW5wdXRPdXRlclwiOiBcInN0eWxlc19pbnB1dE91dGVyX18xSEN1dVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IGV4dGVybmFsVVJMIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzQ2xvc2VkLCBzZXRJc0Nsb3NlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRJc0Nsb3NlZChmYWxzZSksIDcwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KG1vZGFsVGltZW91dCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1vZGFsLCB7IFtzdHlsZXMuY2xvc2VkXTogaXNDbG9zZWQgfSl9PlxyXG4gICAgICAgIDxoMj5IaSE8L2gyPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIFRoaXMgaXMgPHNwYW4+U0VBUkNIIG1vdmllczwvc3Bhbj4uXHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICBBIGxpdmUgbW92aWVzIHNlYXJjaCBhcHBsaWNhdGlvbiB1c2luZyBleHRlcm5hbCBkYXRhYmFzZSB2aWEgQVBJLlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBDaG9vc2UgYSBmaWxtIGhlcmUgYW5kIGdldCByZWRpcmVjdGVkIHRvIHRoZSBUTURi4oCZcyB3ZWJzaXRlIGZvciBtb3JlXHJcbiAgICAgICAgICBpbmZvcm1hdGlvbi5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNDbG9zZWQodHJ1ZSl9PkdPVCBJVDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZXh0ZXJuYWxVUkwoXCJodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy9cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVGFrZSBtZSB0byBUTURiXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5ibGFjaywgeyBbc3R5bGVzLmNsb3NlZF06IGlzQ2xvc2VkIH0pfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2xvc2VkKHRydWUpfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9Nb2RhbCc7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsXCI6IFwic3R5bGVzX21vZGFsX18yUXktVlwiLFxuXHRcImJsYWNrXCI6IFwic3R5bGVzX2JsYWNrX18xQm1yaVwiLFxuXHRcImNsb3NlZFwiOiBcInN0eWxlc19jbG9zZWRfXzFNWU12XCJcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL0Zvb3Rlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTW9kYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lucHV0JztcclxuZXhwb3J0ICogZnJvbSAnLi9BdXRvY29tcGxldGUnOyIsImV4cG9ydCBjb25zdCBJTURCX1VSTCA9IFwiaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvbW92aWUvXCI7XHJcbmV4cG9ydCBjb25zdCBJTUFHRV9QQVRIID0gXCJodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy90L3AvdzYwMF9hbmRfaDkwMF9iZXN0djJcIjtcclxuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF9JTUFHRV9QQVRIID1cclxuICBcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3ZlY3RvcnMvaW50ZXJuZXQtZXJyb3ItcGFnZS1ub3QtZm91bmQtaW4tdmVydGljYWwtb3JpZW50YXRpb24tZm9yLW1vYmlsZS1hLXZlY3Rvci1pZDEyNTI1ODI1NjI/cz02MTJ4NjEyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJX0VORFBPSU5UID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL21vdmllP2FwaV9rZXk9JztcclxuZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSBcIjM1YzI2NThlMGU3MDZkMTQ1ZjRkNGY3ZTk5NWUzNjhmXCI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb290ZXIsIElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEJhc2VMYXlvdXRNZW1vPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQmFzZUxheW91dCA9IFJlYWN0Lm1lbW8oQmFzZUxheW91dE1lbW8pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUxheW91dDtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vQmFzZUxheW91dFwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0KVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHZpc2liaWxpdHk6IGlzVmlzaWJsZSA/ICdpbmhlcml0JyA6ICdoaWRkZW4nLFxuXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBCYXNlTGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgSG9tZVBhZ2VNZW1vID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlTGF5b3V0PlxyXG4gICAgIFxyXG4gICAgICA8TW9kYWwgLz5cclxuXHJcbiAgICA8L0Jhc2VMYXlvdXQ+XHJcbiAgICAgIFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVBhZ2UgPSBSZWFjdC5tZW1vKEhvbWVQYWdlTWVtbyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiZXhwb3J0IGNvbnN0IGV4dGVybmFsVVJMID0gKHVybCkgPT4ge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcclxufSIsImV4cG9ydCAqIGZyb20gXCIuL2V4dGVybmFsVVJMXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL21ha2VGaWxtVVJMXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VzZVJvdmVGb2N1c1wiO1xyXG4iLCJpbXBvcnQge0lNREJfVVJMfSBmcm9tICcuLi9jb25maWdzL2VudidcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlRmlsbVVSTCA9IChpZCwgdGl0bGUpID0+IHtcclxuICAgIGNvbnN0IGNsZWFuVGl0bGUgPSB0aXRsZVxyXG4gICAgICAucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIlwiKVxyXG4gICAgICAucmVwbGFjZSgvIC9nLCBcIi1cIilcclxuICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gYCR7SU1EQl9VUkx9JHtpZH0tJHtjbGVhblRpdGxlfWA7XHJcbiAgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUm92ZUZvY3VzID0gKHNpemUpID0+IHtcclxuICBjb25zdCBbY3VycmVudEZvY3VzLCBzZXRDdXJyZW50Rm9jdXNdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIGUgPT4ge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIERvd24gYXJyb3dcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEZvY3VzKGN1cnJlbnRGb2N1cyA9PT0gc2l6ZSAtIDEgPyAwIDogY3VycmVudEZvY3VzICsgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIC8vIFVwIGFycm93XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEN1cnJlbnRGb2N1cyhjdXJyZW50Rm9jdXMgPT09IDAgPyBzaXplIC0gMSA6IGN1cnJlbnRGb2N1cyAtIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3NpemUsIGN1cnJlbnRGb2N1cywgc2V0Q3VycmVudEZvY3VzXVxyXG4gICk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtoYW5kbGVLZXlEb3duXSk7XHJcblxyXG4gIHJldHVybiBbY3VycmVudEZvY3VzLCBzZXRDdXJyZW50Rm9jdXNdO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpY29uaWZ5L2ljb25zLWdnL3NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaWNvbmlmeS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9