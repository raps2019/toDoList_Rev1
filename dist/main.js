/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskFactory */ \"./src/modules/taskFactory.js\");\n/* harmony import */ var _modules_listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listFactory */ \"./src/modules/listFactory.js\");\n\r\n\r\n\r\nconsole.log('This should work!!!')\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/listFactory.js":
/*!************************************!*
  !*** ./src/modules/listFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//list Object \r\n\r\n//list Object Prototype\r\nconst listProto = {\r\n    editTitle(newTitle) {\r\n        this.title = newTitle;\r\n    }\r\n}\r\n\r\n//list Object Factory Function\r\nconst listFactory = (title,active) => {\r\n    let list = Object.create(listProto);\r\n\r\n    list.title = title;\r\n    list.id = Date.now().toString();\r\n    list.active = active;\r\n\r\n    return list;\r\n}\r\n\r\n//Add list function (Dont think this is needed)\r\n// const addlist = (listList,title,active) => {\r\n//     listList.push(listFactory(title,active));\r\n// }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listFactory);\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/modules/listFactory.js?");

/***/ }),

/***/ "./src/modules/taskFactory.js":
/*!************************************!*
  !*** ./src/modules/taskFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n//Task Object\r\n\r\n//Task Object Prototype Functions\r\nconst taskProto = {\r\n    editTitle(newTitle) {\r\n        this.title = newTitle;\r\n    },\r\n    editDetails(newDetails) {\r\n        this.details = newDetails;\r\n    },\r\n    editDueDate(newDueDate) {\r\n        this.dueDate = newDueDate;\r\n    },\r\n    editPriority(newPriority) {\r\n        this.priority = newPriority;\r\n    },\r\n    editCategory(newCategory) {\r\n        this.category = newCategory;\r\n    },\r\n    toggleStatus() {\r\n        if (this.completed === false) {\r\n            this.completed = true;\r\n        } else {\r\n            this.completed = false\r\n        }\r\n    },\r\n}\r\n\r\n//Task Factory Function\r\nconst taskFactory = (title,details,dueDate,priority,category,active) => {\r\n\r\n    let task = Object.create(taskProto);\r\n    let completed = false;  \r\n\r\n    task.title = title;\r\n    task.details = details;\r\n    task.dueDate = dueDate;\r\n    task.priority = priority;\r\n    task.category = category;\r\n    task.active = active;\r\n    task.completed = completed;\r\n    task.id = Date.now().toString();\r\n    \r\n    return task;\r\n} \r\n\r\n//Add Task Function (dont think this is need)\r\n// const addTask = (taskList,title,details,dueDate,priority,category) => {\r\n//     taskList.push(taskFactory(title,details,dueDate,priority,category));\r\n// }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/modules/taskFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;