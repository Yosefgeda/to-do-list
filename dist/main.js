/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(192, 187, 187);\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin-top: 10%;\\r\\n  margin-left: 20%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: white;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.header-refresh {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n  border-bottom: 1px solid rgb(129, 126, 126);\\r\\n}\\r\\n\\r\\n.header-refresh h1 {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.input-field {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid rgb(129, 126, 126);\\r\\n  padding-right: 20px;\\r\\n}\\r\\n\\r\\n.input-field input {\\r\\n  border: none;\\r\\n  padding: 20px;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.submit-btn {\\r\\n  width: 15px;\\r\\n  height: 15px;\\r\\n}\\r\\n\\r\\n.submit-btn:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-lists {\\r\\n  margin-top: 3%;\\r\\n  display: flex;\\r\\n  justify-content: start;\\r\\n  gap: 5px;\\r\\n  border-bottom: 1px solid rgb(129, 126, 126);\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.todo-paragraph {\\r\\n  width: 60%;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.delete-btn {\\r\\n  margin-left: auto;\\r\\n  width: 15px;\\r\\n  height: 15px;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.delete-btn:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.icon-holder {\\r\\n  margin-left: auto;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n  padding-right: 10px;\\r\\n}\\r\\n\\r\\n.edit-btn {\\r\\n  width: 15px;\\r\\n  height: 15px;\\r\\n}\\r\\n\\r\\n.edit-btn:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  border: none;\\r\\n  padding: 20px;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  font-weight: bold;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.clear-all:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.check-parag {\\r\\n  display: flex;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _arrows_rotate_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrows-rotate-solid.svg */ \"./src/arrows-rotate-solid.svg\");\n/* harmony import */ var _download_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.svg */ \"./src/download.svg\");\n/* harmony import */ var _trash_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash-solid.svg */ \"./src/trash-solid.svg\");\n/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.svg */ \"./src/edit.svg\");\n/* harmony import */ var _modules_innerHtml_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/innerHtml.js */ \"./src/modules/innerHtml.js\");\n/* harmony import */ var _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/todoClass.js */ \"./src/modules/todoClass.js\");\n\n\n\n\n\n\n\n\n\n\n_modules_innerHtml_js__WEBPACK_IMPORTED_MODULE_5__.innerHtmlHolder(_arrows_rotate_solid_svg__WEBPACK_IMPORTED_MODULE_1__, _download_svg__WEBPACK_IMPORTED_MODULE_2__);\nconst addListBtn = document.querySelector('.add-list-btn');\nconst inputValue = document.querySelector('.input-field-add');\n\nconst clearAll = document.querySelector('.clear-all');\n\nconst displayTodo = () => {\n  const displayTodo = _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.list.map((item) => `\n    <div class='todo-lists' id=${item.id}>\n        <div class='check-parag'>\n           <input type=\"checkbox\" class='check-box' data-id=${item.id} ${item.completed}>\n            <p class='todo-paragraph'>${item.description}</p>\n        </div>\n            \n      \n        <div class=\"icon-holder\" >\n          <span class='edit-btn-span' ><img src='${_edit_svg__WEBPACK_IMPORTED_MODULE_4__}' class='edit-btn' data-id=${item.id}></span>\n          <img src='${_trash_solid_svg__WEBPACK_IMPORTED_MODULE_3__}' class='delete-btn' data-id=${item.id}>\n          \n        </div>\n    </div>\n `);\n\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.generatedList.innerHTML = (displayTodo).join('');\n};\n\ndisplayTodo();\n\nlet id;\naddListBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (inputValue.value !== '') {\n    id = Math.floor(Math.random() * 10000);\n    let n;\n    const listObj = new _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.ListObj(inputValue.value, false, n, id);\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.list.push(listObj);\n    inputValue.value = '';\n    displayTodo();\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.removeTodo();\n    for (let i = 0; i < _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.list.length; i += 1) {\n      n = i + 1;\n      _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.list[i].index = n;\n    }\n    _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.addToStorage(_modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.list);\n  }\n});\n\n_modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.generatedList.addEventListener('click', _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.deleteDone);\nclearAll.addEventListener('click', () => {\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.clear();\n  displayTodo();\n\n  // checkBox.parentElement.innerHTML = '';\n});\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  displayTodo();\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.removeTodo();\n  _modules_todoClass_js__WEBPACK_IMPORTED_MODULE_6__.editBtn();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/innerHtml.js":
/*!**********************************!*\
  !*** ./src/modules/innerHtml.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"innerHtmlHolder\": () => (/* binding */ innerHtmlHolder)\n/* harmony export */ });\nconst addList = document.querySelector('.list-perm');\n\nconst innerHtmlHolder = (Arrows, Download) => {\n  addList.innerHTML = `\n      <div class=\"header-refresh\">\n          <h1>Today's To Do</h1>\n          <img class=\"submit-btn\" src='${Arrows}' />\n      </div>\n    \n      <div class=\"input-field\">\n          <input class=\"input-field-add\" type=\"text\" placeholder=\"Add your list...\"> \n          <img class=\"submit-btn add-list-btn\" src='${Download}' />\n      </div>\n`;\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/innerHtml.js?");

/***/ }),

/***/ "./src/modules/todoClass.js":
/*!**********************************!*\
  !*** ./src/modules/todoClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListObj\": () => (/* binding */ ListObj),\n/* harmony export */   \"addToStorage\": () => (/* binding */ addToStorage),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"deleteDone\": () => (/* binding */ deleteDone),\n/* harmony export */   \"editBtn\": () => (/* binding */ editBtn),\n/* harmony export */   \"generatedList\": () => (/* binding */ generatedList),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"removeTodArray\": () => (/* binding */ removeTodArray),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo)\n/* harmony export */ });\n/* eslint-disable */\r\nlet list = [];\r\nclass ListObj {\r\n  constructor(description, completed, index, id) {\r\n    this.description = description,\r\n    this.completed = completed,\r\n    this.index = index,\r\n    this.id = id;\r\n  }\r\n}\r\n\r\nconst generatedList = document.querySelector('.generated-list');\r\n\r\n\r\nconst addToStorage = () => {\r\n  const storage = localStorage.setItem('todos', JSON.stringify(list));\r\n  return storage;\r\n};\r\n\r\nconst removeTodArray = (id) => {\r\n  list = list.filter((item) => item.id !== +id);\r\n  addToStorage(list);\r\n};\r\n\r\nconst removeTodo = () => {\r\n  generatedList.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('delete-btn')) {\r\n      e.target.parentElement.parentElement.remove();\r\n      \r\n      const deleteBtn = e.target.dataset.id;\r\n      removeTodArray(deleteBtn);\r\n    }\r\n    \r\n  });\r\n};\r\n\r\n\r\n\r\nconst getStorage = () => {\r\n  const storage = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));\r\n  return storage;\r\n};\r\n\r\nlist = getStorage();\r\n\r\nconst editBtn = () => {\r\n    let changeIcon = true;\r\n    generatedList.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('edit-btn')) {\r\n          let value = e.target.parentElement.parentElement.parentElement.childNodes[3];\r\n          const btnId = e.target.dataset.id;\r\n          if(changeIcon) {\r\n            value.setAttribute('contenteditable', 'true');\r\n            value.focus();\r\n            e.target.parentElement.innerHTML = `<button>Save</button>`;\r\n          } else {           \r\n            value.removeAttribute('contenteditable');\r\n            const newList = list.findIndex((item) => item.id === +btnId);\r\n            list[newList].description = value.textContent;\r\n            addToStorage(list);\r\n          }\r\n        }\r\n        changeIcon = !changeIcon;\r\n      });\r\n        \r\n\r\n}\r\n\r\nconst deleteDone = (e) => {\r\n  const checked = e.target.closest('.check-box');\r\n  if(!checked) return;\r\n  const cleared = parseInt(checked.getAttribute('data-id'), 10);\r\n  const task = JSON.parse(localStorage.getItem('todos')) || [];\r\n  const find = task.find((todo) => todo.id === cleared);\r\n  find.completed = !find.completed;\r\n \r\n  localStorage.setItem('todos', JSON.stringify(task));\r\n};\r\n\r\n\r\n\r\n\r\nconst clear = (e) => {\r\n  const set = JSON.parse(localStorage.getItem('todos')) || [];\r\n  const notDone = set.filter((list) => !list.completed);\r\n  \r\n\r\n  if (notDone.length === 0){\r\n    generatedList.style.display = 'none';\r\n  }\r\n  \r\n  const todoLists = document.querySelector('.todo-lists');\r\n\r\n  for (let i = 0; i < set.length; i++){\r\n    \r\n    if(set[i].completed === true){\r\n      //n = document.getElementById(`${set[i].id}`);\r\n      \r\n      console.log(set[i])\r\n    }\r\n  }\r\n\r\n\r\n  set.length = 0;\r\n  let i = 1;\r\n  notDone.forEach((element) => {\r\n    element.index = i;\r\n    i += 1;\r\n  });\r\n  set.push(...notDone);\r\n\r\n  localStorage.setItem('todos', JSON.stringify(set));\r\n  \r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/todoClass.js?");

/***/ }),

/***/ "./src/arrows-rotate-solid.svg":
/*!*************************************!*\
  !*** ./src/arrows-rotate-solid.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2271ce9a561d6a772021.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/arrows-rotate-solid.svg?");

/***/ }),

/***/ "./src/download.svg":
/*!**************************!*\
  !*** ./src/download.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ae447886d326dbbf9f8.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/download.svg?");

/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9556c1328c5d037ad9e1.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/edit.svg?");

/***/ }),

/***/ "./src/trash-solid.svg":
/*!*****************************!*\
  !*** ./src/trash-solid.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"321d985cbeb9c91f04ec.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/trash-solid.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;