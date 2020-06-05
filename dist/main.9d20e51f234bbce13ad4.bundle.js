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
/*! no static exports found */
/***/ (function(module, exports) {

var url = new URL('http://cors-test.appspot.com/test');
var xhrGet = new XMLHttpRequest();
var xhrPost = new XMLHttpRequest();
var xhrWeird = new XMLHttpRequest();
var text1 = document.querySelector('.get');
var text2 = document.querySelector('.post');
var text3 = document.querySelector('.weird');

function htmlRequest(request, typeRequest, text) {
  request.open(typeRequest, url, true);
  request.send();

  request.onload = function () {
    console.log("\u0421\u0442\u0430\u0442\u0443\u0441: ".concat(request.status, ", ").concat(request.statusText, ", ").concat(request.response, ", ").concat(request.readyState));

    if (request.status === 200 && request.readyState === 4) {
      text.style.color = 'green';
      text.style.fontStyle = 'bold';
      text.textContent = 'OK';
    }
  };

  request.onerror = function () {
    text.style.color = 'red';
    text.style.fontStyle = 'bold';
    text.textContent = 'Failed';
  };
}

htmlRequest(xhrGet, 'GET', text1);
htmlRequest(xhrPost, 'POST', text2);
htmlRequest(xhrWeird, 'WEIRD', text3);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybCIsIlVSTCIsInhockdldCIsIlhNTEh0dHBSZXF1ZXN0IiwieGhyUG9zdCIsInhocldlaXJkIiwidGV4dDEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0MiIsInRleHQzIiwiaHRtbFJlcXVlc3QiLCJyZXF1ZXN0IiwidHlwZVJlcXVlc3QiLCJ0ZXh0Iiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwicmVhZHlTdGF0ZSIsInN0eWxlIiwiY29sb3IiLCJmb250U3R5bGUiLCJ0ZXh0Q29udGVudCIsIm9uZXJyb3IiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsR0FBSixDQUFRLG1DQUFSLENBQVo7QUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsY0FBSixFQUFmO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLElBQUlELGNBQUosRUFBaEI7QUFDQSxJQUFNRSxRQUFRLEdBQUcsSUFBSUYsY0FBSixFQUFqQjtBQUVBLElBQU1HLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsSUFBTUUsS0FBSyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFHQSxTQUFTRyxXQUFULENBQXFCQyxPQUFyQixFQUE4QkMsV0FBOUIsRUFBMkNDLElBQTNDLEVBQWdEO0FBRTlDRixTQUFPLENBQUNHLElBQVIsQ0FBYUYsV0FBYixFQUEwQmIsR0FBMUIsRUFBK0IsSUFBL0I7QUFDQVksU0FBTyxDQUFDSSxJQUFSOztBQUVBSixTQUFPLENBQUNLLE1BQVIsR0FBaUIsWUFBVztBQUMxQkMsV0FBTyxDQUFDQyxHQUFSLGlEQUF1QlAsT0FBTyxDQUFDUSxNQUEvQixlQUEwQ1IsT0FBTyxDQUFDUyxVQUFsRCxlQUFpRVQsT0FBTyxDQUFDVSxRQUF6RSxlQUFzRlYsT0FBTyxDQUFDVyxVQUE5Rjs7QUFDQSxRQUFJWCxPQUFPLENBQUNRLE1BQVIsS0FBbUIsR0FBbkIsSUFBMEJSLE9BQU8sQ0FBQ1csVUFBUixLQUF1QixDQUFyRCxFQUF3RDtBQUN0RFQsVUFBSSxDQUFDVSxLQUFMLENBQVdDLEtBQVgsR0FBbUIsT0FBbkI7QUFDQVgsVUFBSSxDQUFDVSxLQUFMLENBQVdFLFNBQVgsR0FBdUIsTUFBdkI7QUFDQVosVUFBSSxDQUFDYSxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRixHQVBEOztBQVNBZixTQUFPLENBQUNnQixPQUFSLEdBQWtCLFlBQVc7QUFDM0JkLFFBQUksQ0FBQ1UsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQW5CO0FBQ0FYLFFBQUksQ0FBQ1UsS0FBTCxDQUFXRSxTQUFYLEdBQXVCLE1BQXZCO0FBQ0FaLFFBQUksQ0FBQ2EsV0FBTCxHQUFtQixRQUFuQjtBQUNELEdBSkQ7QUFLRDs7QUFFRGhCLFdBQVcsQ0FBQ1QsTUFBRCxFQUFRLEtBQVIsRUFBY0ksS0FBZCxDQUFYO0FBQ0FLLFdBQVcsQ0FBQ1AsT0FBRCxFQUFTLE1BQVQsRUFBZ0JLLEtBQWhCLENBQVg7QUFDQUUsV0FBVyxDQUFDTixRQUFELEVBQVUsT0FBVixFQUFrQkssS0FBbEIsQ0FBWCxDIiwiZmlsZSI6Im1haW4uOWQyMGU1MWYyMzRiYmNlMTNhZDQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCB1cmwgPSBuZXcgVVJMKCdodHRwOi8vY29ycy10ZXN0LmFwcHNwb3QuY29tL3Rlc3QnKTtcbmNvbnN0IHhockdldCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuY29uc3QgeGhyUG9zdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuY29uc3QgeGhyV2VpcmQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuY29uc3QgdGV4dDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0Jyk7XG5jb25zdCB0ZXh0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0Jyk7XG5jb25zdCB0ZXh0MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWlyZCcpO1xuXG5cbmZ1bmN0aW9uIGh0bWxSZXF1ZXN0KHJlcXVlc3QsIHR5cGVSZXF1ZXN0LCB0ZXh0KXtcblxuICByZXF1ZXN0Lm9wZW4odHlwZVJlcXVlc3QsIHVybCwgdHJ1ZSk7XG4gIHJlcXVlc3Quc2VuZCgpO1xuXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coYNCh0YLQsNGC0YPRgTogJHtyZXF1ZXN0LnN0YXR1c30sICR7cmVxdWVzdC5zdGF0dXNUZXh0fSwgJHtyZXF1ZXN0LnJlc3BvbnNlfSwgJHtyZXF1ZXN0LnJlYWR5U3RhdGV9YCk7XG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDAgJiYgcmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcbiAgICAgIHRleHQuc3R5bGUuZm9udFN0eWxlID0gJ2JvbGQnO1xuICAgICAgdGV4dC50ZXh0Q29udGVudCA9ICdPSyc7XG4gICAgfVxuICB9O1xuXG4gIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHRleHQuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB0ZXh0LnN0eWxlLmZvbnRTdHlsZSA9ICdib2xkJztcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0ZhaWxlZCc7XG4gIH07XG59XG5cbmh0bWxSZXF1ZXN0KHhockdldCwnR0VUJyx0ZXh0MSk7XG5odG1sUmVxdWVzdCh4aHJQb3N0LCdQT1NUJyx0ZXh0Mik7XG5odG1sUmVxdWVzdCh4aHJXZWlyZCwnV0VJUkQnLHRleHQzKTsiXSwic291cmNlUm9vdCI6IiJ9