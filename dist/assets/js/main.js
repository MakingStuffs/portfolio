/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/making-stuffs-queries/making-stuffs-queries.js":
/*!*********************************************************************!*\
  !*** ./node_modules/making-stuffs-queries/making-stuffs-queries.js ***!
  \*********************************************************************/
/*! exports provided: msQuery, msQueryAll, msCreate, msAppend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msQuery\", function() { return msQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msQueryAll\", function() { return msQueryAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msCreate\", function() { return msCreate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msAppend\", function() { return msAppend; });\n\n/**\n * Function to return the first element matching the specified selector, within a specified element.\n * If no element is provided it will default to document.\n * @param selector \n * @param elem \n * @returns HTML node or null if nothing is found.\n */\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar msQuery = function msQuery() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';\n  var elem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  var element = elem.querySelector(selector);\n  return element ? element : null;\n};\n/**\n * Function to return all elements matching the specified selector within a specified element.\n * Default behaviour returns all a elements within the document element.\n * @param selector \n * @param elem \n * @returns HTML node list or null if nothing is found.\n */\n\nvar msQueryAll = function msQueryAll() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'a';\n  var elem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  var nodeList = elem.querySelectorAll(selector);\n  return nodeList[0] ? nodeList : null;\n};\n/**\n * Function to create a new HTML Element according to the provided string.\n * If no elem parameter is provided it will default to a div container.\n * If the elem parameter is provided but is not of the type string returns null.\n * If the params parameter is not of the true object type it will be ignored\n * If the innerHTML object key is provided the newly created element's innerHTML will be set\n * If a param key is provided with an underscore it will be converted to a hyphen\n * \n * @param elem \n * @param params \n * @returns Newly created HTML node\n */\n\nvar msCreate = function msCreate() {\n  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  if (elem && typeof elem !== 'string') return;\n  var elemType = !elem ? 'div' : elem;\n  var newElem = document.createElement(elemType); // Ensure the params parameter is a true object and not an array or a falsey object\n\n  if (_typeof(params) === 'object' && !!params && !Array.isArray(params)) {\n    var attributes = Object.keys(params);\n\n    for (var i = 0; i < attributes.length; i++) {\n      if (attributes[i] === 'innerHTML') {\n        newElem.innerHTML = params[attributes[i]];\n      } else {\n        var attr = attributes[i].replace('_', '-');\n        newElem.setAttribute(attr, params[attributes[i]]);\n      }\n    }\n  }\n\n  return newElem;\n};\n/**\n * Function to append the element(s) passed as the children parameter to the element passed\n * as the parent parameter.\n * If children parameter is empty or it is not one of the types HTML element or Array the \n * function will return.\n * If the parent parameter is not of the type HTML Element the function will return.\n * If no parameter is provided for the parent the children will be appended to the document body.\n * If children is an array and it contains an index which is not of the type HTML Element it will \n * be skipped.\n * Function always returns undefined.\n * @param children \n * @param parent \n * @returns undefined;\n */\n\nvar msAppend = function msAppend() {\n  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;\n  if (!children) return;\n  if (!children instanceof HTMLElement && !Array.isArray(children)) return;\n  if (parent && !parent instanceof HTMLElement) return;\n\n  if (Array.isArray(children)) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (child instanceof HTMLElement) {\n          parent.append(child);\n        } else {\n          continue;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    if (parent.childElementCount === 0) return;\n  } else {\n    parent.appendChild(children);\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/making-stuffs-queries/making-stuffs-queries.js?");

/***/ }),

/***/ "./src/images/favicon.ico":
/*!********************************!*\
  !*** ./src/images/favicon.ico ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/img/favicon.ico\";\n\n//# sourceURL=webpack:///./src/images/favicon.ico?");

/***/ }),

/***/ "./src/images/paul-singh.jpeg":
/*!************************************!*\
  !*** ./src/images/paul-singh.jpeg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/img/paul-singh.jpeg\";\n\n//# sourceURL=webpack:///./src/images/paul-singh.jpeg?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/favicon.ico */ \"./src/images/favicon.ico\");\n/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_favicon_ico__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_paul_singh_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/paul-singh.jpeg */ \"./src/images/paul-singh.jpeg\");\n/* harmony import */ var _images_paul_singh_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_paul_singh_jpeg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_template_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/template-functions */ \"./src/js/modules/template-functions.js\");\n/* harmony import */ var _modules_template_functions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_template_functions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_navigation_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation-menu */ \"./src/js/modules/navigation-menu.js\");\n/* harmony import */ var _modules_contact_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/contact-form */ \"./src/js/modules/contact-form.js\");\n/* harmony import */ var _modules_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/intersection-observer */ \"./src/js/modules/intersection-observer.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modals */ \"./src/js/modules/modals.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/contact-form.js":
/*!****************************************!*\
  !*** ./src/js/modules/contact-form.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! making-stuffs-queries */ \"./node_modules/making-stuffs-queries/making-stuffs-queries.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n(function () {\n  var openButtons = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\".contact-open\");\n\n  if (!openButtons[0]) {\n    return;\n  }\n\n  var wrapper = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"#contact-container\");\n\n  if (!wrapper) {\n    return;\n  }\n\n  var form = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"form\", wrapper);\n\n  if (!form) {\n    return;\n  }\n\n  var closeButton = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"#contact-close\", wrapper);\n\n  if (!closeButton) {\n    return;\n  }\n\n  var formClear = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"#home-contact-clear\", wrapper);\n\n  if (!formClear) {\n    return;\n  }\n\n  var shiftDown = false;\n\n  var getRegex = function getRegex(fieldType) {\n    switch (fieldType) {\n      case \"text\":\n        return /^[a-z\\s\\.,-0-9]+$/i;\n\n      case \"tel\":\n        return /^[\\d+-]+$/;\n\n      case \"number\":\n        return /^[\\d]+$/;\n\n      case \"email\":\n        return /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n      default:\n        return /^[a-z\\s\\.,-0-9]+$/i;\n        return;\n    }\n  };\n\n  var validateField = function validateField(input) {\n    var regex = getRegex(input.type);\n    var minLength = input.hasAttribute(\"minlength\") ? input.getAttribute(\"minlength\") : 3;\n    return regex.test(input.value) && input.value >= minLength;\n  };\n\n  var addListenersToFields = function addListenersToFields(form) {\n    var _iterator = _createForOfIteratorHelper(form),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var field = _step.value;\n\n        if (field.tagName.toLowerCase() === \"button\") {\n          continue;\n        }\n\n        if (field.type === \"submit\") {\n          continue;\n        }\n\n        if (field.tagName.toLowerCase() === \"input\" || field.tagName.toLowerCase() === \"textarea\") {\n          field.addEventListener(\"input\", handleInput);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  var getFormFields = function getFormFields(form) {\n    var fieldsArray = [];\n\n    var _iterator2 = _createForOfIteratorHelper(form),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var field = _step2.value;\n        fieldsArray.push(field);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    return fieldsArray;\n  };\n\n  var getCurrentIndex = function getCurrentIndex(fields, currentId) {\n    var returnIndex;\n    fields.forEach(function (field, index) {\n      if (field.id === currentId) {\n        returnIndex = index;\n      }\n    });\n    return returnIndex;\n  };\n\n  var moveFocus = function moveFocus(oldElement, newElement) {\n    oldElement.blur();\n    newElement.focus();\n  };\n\n  var changeField = function changeField(currentIndex) {\n    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"forwards\";\n    var formLength = form.elements.length;\n\n    switch (direction) {\n      case \"forwards\":\n        return currentIndex < formLength - 1 ? moveFocus(form.elements[currentIndex], form.elements[currentIndex + 1]) : moveFocus(form.elements[currentIndex], form.elements[0]);\n\n      case \"backwards\":\n        return currentIndex === 0 ? moveFocus(form.elements[currentIndex], form.elements[form.length - 1]) : moveFocus(form.elements[currentIndex], form.elements[currentIndex - 1]);\n    }\n  };\n\n  var clearValidationClasses = function clearValidationClasses() {\n    var _iterator3 = _createForOfIteratorHelper(form),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var field = _step3.value;\n        field.parentNode.classList.remove(\"valid\");\n        field.parentNode.classList.remove(\"validating\");\n        field.parentNode.classList.remove(\"invalid\");\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n  };\n\n  function handleKeyDown(event) {\n    if (event.keyCode === 16) {\n      shiftDown = true;\n      return;\n    }\n\n    if (event.keyCode === 9) {\n      event.preventDefault();\n      return;\n    }\n  }\n\n  function handleKeyUp(event) {\n    event.preventDefault();\n    var fields = getFormFields(this);\n    var currentIndex = getCurrentIndex(fields, event.target.id);\n\n    switch (event.keyCode) {\n      // enter\n      case 13:\n        return handleFormSubmit.call(this, event);\n      // shift\n\n      case 16:\n        return shiftDown = false;\n      // Tab\n\n      case 9:\n        return shiftDown ? changeField(currentIndex, \"backwards\") : changeField(currentIndex, \"forwards\");\n      // esc\n\n      case 27:\n        return menuToggle(event, true);\n      // left\n\n      case 37:\n        return changeField(currentIndex, \"backwards\");\n      // up\n\n      case 38:\n        return changeField(currentIndex, \"backwards\");\n        break;\n      //right\n\n      case 39:\n        return changeField(currentIndex, \"forwards\");\n      // down\n\n      case 40:\n        return changeField(currentIndex, \"forwards\");\n\n      default:\n        break;\n    }\n  }\n\n  function handleInput(event) {\n    this.parentNode.classList.remove(\"valid\");\n    this.parentNode.classList.remove(\"invalid\");\n    this.parentNode.classList.add(\"validating\");\n  }\n\n  function handleFieldValidation(event) {\n    var isValid = validateField(this);\n    var parent = this.parentNode;\n    parent.classList.remove(\"validating\");\n    return isValid ? (parent.classList.add(\"valid\"), parent.classList.remove(\"invalid\")) : (parent.classList.remove(\"valid\"), parent.classList.add(\"invalid\"));\n  }\n\n  function handleFormSubmit(event) {\n    event.preventDefault();\n\n    var _iterator4 = _createForOfIteratorHelper(form),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var field = _step4.value;\n\n        if (field.type === \"submit\") {\n          return;\n        }\n\n        handleFieldValidation.call(field);\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n  }\n\n  function menuToggle(event) {\n    var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    event.preventDefault();\n\n    if (close || this.classList.contains(\"contact-close\")) {\n      wrapper.setAttribute(\"aria-expanded\", \"false\");\n      wrapper.blur();\n    } else {\n      var associatedMenu = document.querySelector(\"#\".concat(this.dataset.menu));\n\n      if (associatedMenu) {\n        associatedMenu.setAttribute(\"aria-expanded\", \"false\");\n      }\n\n      wrapper.setAttribute(\"aria-expanded\", \"true\");\n      var firstElement = form.elements[0];\n      this.blur();\n\n      form.ontransitionend = function () {\n        form.elements[0].focus();\n        form.ontransitionend = null;\n      };\n    }\n  }\n\n  function handleFormClear(event) {\n    event.preventDefault();\n    clearValidationClasses();\n    form.reset();\n    return;\n  }\n\n  addListenersToFields(form);\n  openButtons.forEach(function (button) {\n    return button.addEventListener(\"click\", menuToggle);\n  });\n  form.addEventListener(\"keyup\", handleKeyUp);\n  form.addEventListener(\"keydown\", handleKeyDown);\n  form.addEventListener(\"submit\", handleFormSubmit);\n  closeButton.addEventListener(\"click\", menuToggle);\n  formClear.addEventListener(\"click\", handleFormClear);\n})();\n\n//# sourceURL=webpack:///./src/js/modules/contact-form.js?");

/***/ }),

/***/ "./src/js/modules/intersection-observer.js":
/*!*************************************************!*\
  !*** ./src/js/modules/intersection-observer.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! making-stuffs-queries */ \"./node_modules/making-stuffs-queries/making-stuffs-queries.js\");\n\nvar targets = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\"[intersect]\");\nvar options = {\n  threshold: 0.1,\n  root: null\n};\n\nvar callback = function callback(entries, observer) {\n  entries.forEach(function (entry) {\n    if (entry.isIntersecting) {\n      if (entry.target.classList.contains(\"fade-in\")) {\n        return;\n      }\n\n      entry.target.classList.add(\"fade-in\");\n    }\n  });\n};\n\nvar observer = new IntersectionObserver(callback, options);\ntargets.forEach(function (target) {\n  observer.observe(target);\n});\n\n//# sourceURL=webpack:///./src/js/modules/intersection-observer.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! making-stuffs-queries */ \"./node_modules/making-stuffs-queries/making-stuffs-queries.js\");\n\nvar modalButtons = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\"[data-modal]\");\n\nfunction toggleModal(event) {\n  var modal = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"#\".concat(this.dataset.modal)) || Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"#\".concat(this.getAttribute('aria-controls')));\n\n  if (!modal) {\n    return;\n  }\n\n  var closeButton = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\".stuffs-modal__close\", modal);\n\n  if (!closeButton) {\n    return;\n  }\n\n  if (modal.getAttribute(\"aria-hidden\") === \"true\") {\n    modal.setAttribute(\"aria-hidden\", \"false\");\n    closeButton.addEventListener(\"click\", toggleModal);\n    modal.focus();\n  } else {\n    modal.setAttribute(\"aria-hidden\", \"true\");\n    closeButton.removeEventListener(\"click\", toggleModal);\n    modal.blur();\n  }\n}\n\nmodalButtons.forEach(function (button) {\n  return button.addEventListener(\"click\", toggleModal);\n});\n\n//# sourceURL=webpack:///./src/js/modules/modals.js?");

/***/ }),

/***/ "./src/js/modules/navigation-menu.js":
/*!*******************************************!*\
  !*** ./src/js/modules/navigation-menu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! making-stuffs-queries */ \"./node_modules/making-stuffs-queries/making-stuffs-queries.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n(function () {\n  var buttons = [].concat(_toConsumableArray(Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\".stuffs-drawer-menu__button\")), _toConsumableArray(Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\".stuffs-drawer-menu__close\")));\n  var menus = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\".stuffs-drawer-menu\");\n  var shiftDown = false;\n\n  var addListenersToLinks = function addListenersToLinks(menu) {\n    var links = _toConsumableArray(Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\".stuffs-drawer-menu__link\", menu)).map(function (link) {\n      return Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQuery\"])(\"a\", link);\n    });\n\n    links.forEach(function (link) {\n      return link.addEventListener(\"click\", toggle);\n    });\n  };\n\n  var getCurrentIndex = function getCurrentIndex(fields, currentField) {\n    var returnIndex;\n    fields.forEach(function (field, index) {\n      if (field === currentField) {\n        returnIndex = index;\n      }\n    });\n    return returnIndex;\n  };\n\n  var getElementsToTarget = function getElementsToTarget(menu) {\n    var buttons = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\"button\", menu);\n    var links = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\"a\", menu);\n    var inputs = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\"input\", menu);\n    var textAreas = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__[\"msQueryAll\"])(\"textarea\", menu);\n    var elementArray = [];\n\n    if (buttons) {\n      elementArray = [].concat(_toConsumableArray(elementArray), _toConsumableArray(buttons));\n    }\n\n    if (links) {\n      elementArray = [].concat(_toConsumableArray(elementArray), _toConsumableArray(links));\n    }\n\n    if (inputs) {\n      elementArray = [].concat(_toConsumableArray(elementArray), _toConsumableArray(inputs));\n    }\n\n    if (textAreas) {\n      elementArray = [].concat(_toConsumableArray(elementArray), _toConsumableArray(textAreas));\n    }\n\n    return elementArray;\n  };\n\n  var moveFocus = function moveFocus(oldElement, newElement) {\n    oldElement.blur();\n    newElement.focus();\n  };\n\n  var changeField = function changeField(elements, currentIndex) {\n    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"forwards\";\n    var numberOfElements = elements.length;\n\n    switch (direction) {\n      case \"forwards\":\n        return currentIndex < numberOfElements - 1 ? moveFocus(elements[currentIndex], elements[currentIndex + 1]) : moveFocus(elements[currentIndex], elements[0]);\n\n      case \"backwards\":\n        return currentIndex === 0 ? moveFocus(elements[currentIndex], elements[numberOfElements - 1]) : moveFocus(elements[currentIndex], elements[currentIndex - 1]);\n    }\n  };\n\n  var addKeyListeners = function addKeyListeners(target) {\n    var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    if (!callbacks) {\n      return;\n    }\n\n    callbacks.forEach(function (callback) {\n      target.addEventListener(callback.event, callback.handler);\n    });\n  };\n\n  var removeKeyListeners = function removeKeyListeners(target) {\n    var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    if (!callbacks) {\n      return;\n    }\n\n    callbacks.forEach(function (callback) {\n      target.removeEventListener(callback.event, callback.handler);\n    });\n  };\n\n  function handleKeyPress(event) {}\n\n  function handleKeyDown(event) {\n    event.preventDefault();\n\n    if (event.keyCode === 16) {\n      shiftDown = true;\n      return;\n    }\n  }\n\n  function handleKeyUp(event) {\n    event.preventDefault();\n    var elementsToTarget = getElementsToTarget(this);\n    var currentIndex = getCurrentIndex(elementsToTarget, event.target);\n    console.log(currentIndex, elementsToTarget);\n\n    switch (event.keyCode) {\n      // enter\n      case 13:\n        return;\n      // shift\n\n      case 16:\n        return shiftDown = false;\n      // Tab\n\n      case 9:\n        return shiftDown ? changeField(elementsToTarget, currentIndex, \"backwards\") : changeField(elementsToTarget, currentIndex, \"forwards\");\n      // esc\n\n      case 27:\n        return toggle.call(this);\n      // left\n\n      case 37:\n        return changeField(elementsToTarget, currentIndex, \"backwards\");\n      // up\n\n      case 38:\n        return changeField(elementsToTarget, currentIndex, \"backwards\");\n        break;\n      //right\n\n      case 39:\n        return changeField(elementsToTarget, currentIndex, \"forwards\");\n      // down\n\n      case 40:\n        return changeField(elementsToTarget, currentIndex, \"forwards\");\n\n      default:\n        break;\n    }\n  }\n\n  function toggle() {\n    var _this = this;\n\n    if (this === document) return;\n    var associatedMenu = Array.from(menus).find(function (menu) {\n      return menu.id === _this.id || _this.getAttribute(\"aria-controls\");\n    });\n    var callbacksArray = [{\n      event: \"keyup\",\n      handler: handleKeyUp\n    }, {\n      event: \"keydown\",\n      handler: handleKeyDown\n    }];\n\n    var outsideClickListener = function outsideClickListener(event) {\n      if (event.target === associatedMenu) {\n        associatedMenu.onclick = null;\n        toggle.call(_this);\n      }\n    };\n\n    if (associatedMenu.getAttribute(\"aria-expanded\") === \"true\") {\n      associatedMenu.setAttribute(\"aria-expanded\", \"false\");\n      associatedMenu.onclick = null;\n      removeKeyListeners(associatedMenu, callbacksArray);\n      document.removeEventListener(\"click\", toggle);\n      associatedMenu.blur();\n      this.focus();\n      return;\n    } else {\n      associatedMenu.setAttribute(\"aria-expanded\", \"true\");\n      associatedMenu.onclick = outsideClickListener;\n      document.addEventListener(\"click\", toggle);\n      addKeyListeners(associatedMenu, callbacksArray);\n      associatedMenu.focus();\n      this.blur();\n      return;\n    }\n  }\n\n  menus.forEach(function (menu) {\n    addListenersToLinks(menu);\n  });\n  buttons.forEach(function (button) {\n    return button.addEventListener(\"click\", toggle);\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/modules/navigation-menu.js?");

/***/ }),

/***/ "./src/js/modules/template-functions.js":
/*!**********************************************!*\
  !*** ./src/js/modules/template-functions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var vh = window.innerHeight * 0.01;\ndocument.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\nwindow.addEventListener(\"resize\", function () {\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n}, {\n  passive: true\n});\n\n//# sourceURL=webpack:///./src/js/modules/template-functions.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });