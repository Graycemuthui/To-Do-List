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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/actions.js */ \"./src/modules/actions.js\");\n\n\n\n\nconst listItems = document.getElementById('todo-items');\nconst displayList = () => {\n  let listHtml = '';\n  _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((item) => {\n    let boxes = '';\n    let checkMark = '';\n    if (item.completed === true) {\n      boxes = 'checked';\n      checkMark = 'check-mark';\n    }\n    listHtml += `\n               <li id=\"list-${item.index}\">\n            <div class=\"list-wrap\">\n              <div><input id=\"checkbox-${item.index}\" name=\"ch-${item.index}\" type=\"checkbox\" ${boxes}/></div>\n              <div  id= \"text-input\" class=\"text-input\">\n                <input\n                  id=\"task-desc-${item.index}\"\n                  type=\"text\"\n                  class=\"list-item ${checkMark}\"\n                  value=\"${item.description}\"\n                />\n              </div>\n              <div class=\"icons\">\n                <i id=\"trash-${item.index}\" class=\"fa-solid fa-trash hide\"></i>\n                <i id=\"ellipsis-${item.index}\" class=\"fa-solid fa-ellipsis-vertical \"></i>\n              </div>\n            </div>\n          </li>`;\n  });\n  listItems.innerHTML = listHtml;\n\n  // Create event listener for list-item class\n  const allTasks = document.getElementsByClassName('list-item');\n\n  // Create event listener for allTasks\n  for (let i = 0; i < allTasks.length; i += 1) {\n    // get all li\n    const lis = document.getElementsByTagName('li');\n    // create event listner for all li\n    lis[i].addEventListener('mouseover', () => {\n      lis[i].classList.add('list-item-hover');\n      _modules_actions_js__WEBPACK_IMPORTED_MODULE_2__.Actions.showTrash(i);\n    });\n\n    lis[i].addEventListener('mouseout', () => {\n      _modules_actions_js__WEBPACK_IMPORTED_MODULE_2__.Actions.hideTrash(i);\n      lis[i].classList.remove('list-item-hover');\n    });\n\n    allTasks[i].addEventListener('keypress', (event) => {\n      if (event.key === 'Enter') {\n        event.preventDefault();\n        // Get the value of the user-input\n        const { value } = event.target;\n\n        if (_modules_actions_js__WEBPACK_IMPORTED_MODULE_2__.Actions.addTask(value, i)) {\n          // Refresh the task list.\n          displayList();\n        }\n      }\n    });\n\n    // Create an event listener on the trash icon\n    document.getElementById(`trash-${i}`).addEventListener('click', () => {\n      if (_modules_actions_js__WEBPACK_IMPORTED_MODULE_2__.Actions.removeTask(i)) {\n        displayList();\n      }\n    });\n\n    // Let's add an event listener to the checkbox\n    const checkbox = document.getElementById(`checkbox-${i}`);\n    checkbox.addEventListener('click', () => {\n      // add checked class to the input\n      document.querySelector(`#task-desc-${i}`).classList.add('checked-mark');\n\n      if (checkbox.checked) {\n        _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].completed = true;\n      } else {\n        _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].completed = false;\n      }\n      // Update the items in our array\n      localStorage.setItem('tasks', JSON.stringify(_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n      displayList();\n    });\n  }\n};\n\ndisplayList();\n\nconst addList = document.getElementById('addlist');\n\naddList.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    const { value } = addList;\n    // Add value to task array\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push({\n      description: value,\n      completed: false,\n      index: _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length,\n    });\n    // Clear input\n    addList.value = '';\n\n    // Store in local storage\n    localStorage.setItem('tasks', JSON.stringify(_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n    displayList();\n  }\n});\n\n// Create an event listener for the clear all button\nconst clearAll = document.getElementById('clear-all');\nclearAll.addEventListener('click', () => {\n  // Remove al completed tasks\n  const clear = _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter((item) => item.completed === true);\n\n  clear.forEach((item) => {\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(item.index, 1);\n    // reorder the index of the objects in the array\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((item, index) => {\n      item.index = index;\n    });\n  });\n  // Store in local storage\n  localStorage.setItem('tasks', JSON.stringify(_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n  // Refresh the task list.\n  displayList();\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/actions.js":
/*!********************************!*\
  !*** ./src/modules/actions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Actions\": () => (/* binding */ Actions)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n/* eslint-disable */\nclass Actions {\n  static showTrash = (i) => {\n    // show the trash icon and hide the ellipsis icon\n    document.getElementById(`trash-${i}`).classList.remove(\"hide\");\n    document.getElementById(`ellipsis-${i}`).classList.add(\"hide\");\n  };\n\n  static hideTrash = (i) => {\n    // hide the trash icon and show the ellipsis icon\n    document.getElementById(`trash-${i}`).classList.add(\"hide\");\n    document.getElementById(`ellipsis-${i}`).classList.remove(\"hide\");\n  };\n\n  static removeTask = (i) => {\n    // Remove the task from the array\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n    // Reorder the index of tthe objects in the array\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item, index) => {\n      item.index = index;\n    });\n    // Store in local storage\n    localStorage.setItem(\"tasks\", JSON.stringify(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    // Refresh the task list.\n    return true;\n  };\n\n  static addTask = (description, i) => {\n    // Get the value of the user-input\n    // Update the specific tasks in our array\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description = description;\n    // Store in local storage\n    localStorage.setItem(\"tasks\", JSON.stringify(_tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    // Refresh the task list.\n    return true;\n  };\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/actions.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Get tasks from local storage or return empty array.\n\nconst items = localStorage.getItem('tasks') === null\n  ? []\n  : JSON.parse(localStorage.getItem('tasks'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/tasks.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Exo:400,700);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 16px;\\n  line-height: 1.5;\\n}\\n\\n.main-section {\\n  background-color: #fff;\\n  width: 50%;\\n  margin: 8rem auto;\\n  border: 1px solid gainsboro;\\n  text-align: start;\\n  z-index: 900;\\n}\\n\\np {\\n  color: gray;\\n  text-align: start;\\n  margin-left: 0.9rem;\\n}\\n\\n.headline {\\n  border-bottom: 1px solid rgb(231, 219, 219);\\n  color: gray;\\n  margin-top: 1rem;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n.rotate,\\n.arrow {\\n  text-align: end;\\n}\\n\\n.fa-rotate {\\n  padding: 0 0.5rem;\\n  font-size: 0.8rem;\\n}\\n\\n.fa-arrow-left {\\n  padding: 0.9rem 0.5rem;\\n  font-size: 0.7rem;\\n}\\n\\ninput {\\n  width: 100%;\\n  padding: 0.8rem;\\n  background-color: transparent !important;\\n  border: none !important;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n#todo-items li {\\n  list-style-type: none;\\n}\\n\\n.check-mark {\\n  text-decoration: line-through;\\n}\\n\\n.list-item-hover {\\n  background-color: #edac1f;\\n}\\n\\n.list-wrap {\\n  display: grid;\\n  grid-template-columns: repeat(3, 0.5fr 1fr 0.5fr);\\n  align-items: center;\\n  padding: 0.2rem 0;\\n  border-bottom: 1px solid rgb(231, 219, 219);\\n}\\n\\n.text-input {\\n  grid-column: 2/9;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.icons {\\n  text-align: right;\\n  padding-right: 1rem;\\n  color: gray;\\n}\\n\\n.list-section {\\n  border-bottom: 1px solid rgb(231, 219, 219);\\n  color: gray;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n/* CSS animation */\\n\\nbody {\\n  font-family: \\\"Exo\\\", sans-serif;\\n}\\n\\n.context {\\n  width: 100%;\\n  position: absolute;\\n  top: 0;\\n}\\n\\n.context h1 {\\n  text-align: center;\\n  color: #fff;\\n  font-size: 50px;\\n}\\n\\n.area {\\n  background: #4e54c8;\\n  background: linear-gradient(to left, #8f94fb, #4e54c8);\\n  width: 100%;\\n  height: 100vh;\\n  top: 0;\\n  position: absolute;\\n  z-index: -1;\\n}\\n\\n.circles {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n\\n/* stylelint-disable */\\n.circles li {\\n  position: absolute;\\n  display: block;\\n  list-style: none;\\n  width: 20px;\\n  height: 20px;\\n  background: rgba(255, 255, 255, 0.2);\\n  animation: animate 25s linear infinite;\\n  bottom: -150px;\\n}\\n\\n.circles li:nth-child(1) {\\n  left: 25%;\\n  width: 80px;\\n  height: 80px;\\n  animation-delay: 0s;\\n}\\n\\n.circles li:nth-child(2) {\\n  left: 10%;\\n  width: 20px;\\n  height: 20px;\\n  animation-delay: 2s;\\n  animation-duration: 12s;\\n}\\n\\n.circles li:nth-child(3) {\\n  left: 70%;\\n  width: 20px;\\n  height: 20px;\\n  animation-delay: 4s;\\n}\\n\\n.circles li:nth-child(4) {\\n  left: 40%;\\n  width: 60px;\\n  height: 60px;\\n  animation-delay: 0s;\\n  animation-duration: 18s;\\n}\\n\\n.circles li:nth-child(5) {\\n  left: 65%;\\n  width: 20px;\\n  height: 20px;\\n  animation-delay: 0s;\\n}\\n\\n.circles li:nth-child(6) {\\n  left: 75%;\\n  width: 110px;\\n  height: 110px;\\n  animation-delay: 3s;\\n}\\n\\n.circles li:nth-child(7) {\\n  left: 35%;\\n  width: 150px;\\n  height: 150px;\\n  animation-delay: 7s;\\n}\\n\\n.circles li:nth-child(8) {\\n  left: 50%;\\n  width: 25px;\\n  height: 25px;\\n  animation-delay: 15s;\\n  animation-duration: 45s;\\n}\\n\\n.circles li:nth-child(9) {\\n  left: 20%;\\n  width: 15px;\\n  height: 15px;\\n  animation-delay: 2s;\\n  animation-duration: 35s;\\n}\\n\\n.circles li:nth-child(10) {\\n  left: 85%;\\n  width: 150px;\\n  height: 150px;\\n  animation-delay: 0s;\\n  animation-duration: 11s;\\n}\\n\\n/* stylelint-enable */\\n\\n@keyframes animate {\\n  0% {\\n    transform: translateY(0) rotate(0deg);\\n    opacity: 1;\\n    border-radius: 0;\\n  }\\n\\n  100% {\\n    transform: translateY(-1000px) rotate(720deg);\\n    opacity: 0;\\n    border-radius: 50%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
