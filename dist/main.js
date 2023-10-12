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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Slider_desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Slider-desktop */ \"./src/js/Slider-desktop.js\");\n/* harmony import */ var _js_Slider_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Slider-mobile */ \"./src/js/Slider-mobile.js\");\n\r\n\r\n\r\nif (window.innerWidth > 1024) {\r\n  Object(_js_Slider_desktop__WEBPACK_IMPORTED_MODULE_0__[\"sliderDesktop\"])();\r\n} else {\r\n  Object(_js_Slider_mobile__WEBPACK_IMPORTED_MODULE_1__[\"sliderMobile\"])();\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Pagination.js":
/*!******************************!*\
  !*** ./src/js/Pagination.js ***!
  \******************************/
/*! exports provided: paginationSLideRight, paginationSLideLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paginationSLideRight\", function() { return paginationSLideRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paginationSLideLeft\", function() { return paginationSLideLeft; });\nfunction paginationSLideRight(){\r\n  let activePagination = document.querySelector('.carousel-pagination__item_active');\r\n  activePagination.classList.toggle('carousel-pagination__item_active');\r\n  activePagination.nextElementSibling.classList.toggle('carousel-pagination__item_active');\r\n}\r\n\r\nfunction paginationSLideLeft (){\r\n  let activePagination = document.querySelector('.carousel-pagination__item_active');\r\n  activePagination.classList.toggle('carousel-pagination__item_active');\r\n  activePagination.previousElementSibling.classList.toggle('carousel-pagination__item_active');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/Pagination.js?");

/***/ }),

/***/ "./src/js/Slider-desktop.js":
/*!**********************************!*\
  !*** ./src/js/Slider-desktop.js ***!
  \**********************************/
/*! exports provided: sliderDesktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliderDesktop\", function() { return sliderDesktop; });\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ \"./src/js/Pagination.js\");\n\r\n\r\n\r\nlet slideRange = 0;\r\nlet imagesCarousel = document.querySelectorAll('.carousel__item');\r\nlet carousel = document.querySelector('.carousel');\r\n\r\nfunction sliderDesktop(){\r\n  for (let i = 0; i <= 2; i++){\r\n    imagesCarousel[i].classList.add('carousel__item_visible');\r\n  }\r\n  for (let i = 3; i < imagesCarousel.length; i++){\r\n    imagesCarousel[i].classList.add('carousel__item_unvisible');\r\n  }\r\n\r\n  imagesCarousel.forEach((element) => {\r\n    element.addEventListener('click', (event) => {\r\n      moveSlider(event);\r\n    })\r\n  })\r\n}\r\n\r\nfunction moveSlider (event){\r\n  let visibleImg = document.querySelectorAll('.carousel__item_visible');\r\n  let index = Array.prototype.indexOf.call(visibleImg, event.target);\r\n  if (index === 2){\r\n    if (event.target.nextElementSibling === null){\r\n      return\r\n    }\r\n    else if (event.target.nextElementSibling.classList.contains('carousel__item_unvisible')){\r\n      slideRange += 475;\r\n\r\n      carousel.style.left = -slideRange + 'px';\r\n\r\n      event.target.nextElementSibling.classList.remove('carousel__item_unvisible');\r\n      event.target.nextElementSibling.classList.add('carousel__item_visible');\r\n      \r\n      visibleImg[0].classList.remove('carousel__item_visible');\r\n      visibleImg[0].classList.add('carousel__item_unvisible');\r\n\r\n      Object(_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"paginationSLideRight\"])();\r\n    }\r\n  }\r\n  else if (index === 0){\r\n    if (event.target.previousElementSibling === null){\r\n      return;\r\n    }\r\n    else if (event.target.previousElementSibling.classList.contains('carousel__item_unvisible')){\r\n      slideRange -= 475;\r\n\r\n      carousel.style.left = -slideRange + 'px';\r\n\r\n      event.target.previousElementSibling.classList.remove('carousel__item_unvisible');\r\n      event.target.previousElementSibling.classList.add('carousel__item_visible');\r\n      \r\n      visibleImg[2].classList.remove('carousel__item_visible');\r\n      visibleImg[2].classList.add('carousel__item_unvisible');\r\n\r\n      Object(_Pagination__WEBPACK_IMPORTED_MODULE_0__[\"paginationSLideLeft\"])();\r\n    }\r\n  }\r\n} \r\n\n\n//# sourceURL=webpack:///./src/js/Slider-desktop.js?");

/***/ }),

/***/ "./src/js/Slider-mobile.js":
/*!*********************************!*\
  !*** ./src/js/Slider-mobile.js ***!
  \*********************************/
/*! exports provided: sliderMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sliderMobile\", function() { return sliderMobile; });\nlet slideRange = 950;\r\nlet carousel = document.querySelector('.carousel');\r\n\r\nfunction sliderMobile(){\r\n  let swipers = document.querySelectorAll('.carousel__swiper');\r\n  let leftSwipe = swipers[0];\r\n  let rightSwipe = swipers[1];\r\n\r\n  leftSwipe.addEventListener('load', () => {\r\n    let svg = leftSwipe.contentDocument;\r\n    svg.addEventListener('click', (event) => {\r\n      swipeLeft();\r\n    });\r\n  });\r\n\r\n  rightSwipe.addEventListener('load', () => {\r\n    let svg = rightSwipe.contentDocument;\r\n    svg.addEventListener('click', (event) => {\r\n      swipeRight()\r\n    })\r\n  })\r\n}\r\n\r\nfunction swipeLeft(){\r\n  if (slideRange >= 950){\r\n    return;\r\n  } else {\r\n    slideRange += 475;\r\n    carousel.style.left = slideRange + 'px';;\r\n  }\r\n}\r\n\r\nfunction swipeRight(){\r\n  if (slideRange <= -950){\r\n    return;\r\n  } else {\r\n    slideRange -= 475;\r\n    carousel.style.left = slideRange + 'px';;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/Slider-mobile.js?");

/***/ })

/******/ });