(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "DTiR":
/*!****************************************!*\
  !*** ./src/components/Dialog/index.js ***!
  \****************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses eval() */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dialog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"PQfD\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"0Wwj\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"4gZk\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n\n\n\nvar Dialog =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inheritsLoose(Dialog, _PureComponent);\n\n  function Dialog(props) {\n    var _this;\n\n    _this = _PureComponent.call(this, props) || this;\n    var doc = window.document;\n    _this.node = doc.createElement('div');\n    doc.body.appendChild(_this.node);\n    return _this;\n  }\n\n  var _proto = Dialog.prototype;\n\n  _proto.render = function render() {\n    return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"createPortal\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"dialog\"\n    }, this.props.children), // 塞进传送门的JSX\n    this.node // 传送门的另一端DOM node\n    );\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    window.document.body.removeChild(this.node);\n  };\n\n  // @ts-ignore\n  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {\n    // @ts-ignore\n    this[key] = eval(code);\n  };\n\n  return Dialog;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"4gZk\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"4gZk\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Dialog, \"Dialog\", \"/Users/hewenxuan/data/work-cli/src/components/Dialog/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/_webpack@4.18.0@webpack/buildin/harmony-module.js */ \"6DrD\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EaWFsb2cvaW5kZXguanM/MGQzOCJdLCJuYW1lcyI6WyJEaWFsb2ciLCJwcm9wcyIsImRvYyIsIndpbmRvdyIsImRvY3VtZW50Iiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07Ozs7O0FBQ25CLGtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQ2xCLHNDQUFNQSxLQUFOO0FBRUEsUUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQW5CO0FBQ0EsVUFBS0MsSUFBTCxHQUFZSCxHQUFHLENBQUNJLGFBQUosQ0FBa0IsS0FBbEIsQ0FBWjtBQUNBSixPQUFHLENBQUNLLElBQUosQ0FBU0MsV0FBVCxDQUFxQixNQUFLSCxJQUExQjtBQUxrQjtBQU1uQjs7OztTQUVESSxNLHFCQUFVO0FBQ1IsV0FBTyw4REFBWSxDQUNqQjtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0csS0FBS1IsS0FBTCxDQUFXUyxRQURkLENBRGlCLEVBR1Q7QUFDUixTQUFLTCxJQUpZLENBSVA7QUFKTyxLQUFuQjtBQU1ELEc7O1NBRURNLG9CLG1DQUF3QjtBQUN0QlIsVUFBTSxDQUFDQyxRQUFQLENBQWdCRyxJQUFoQixDQUFxQkssV0FBckIsQ0FBaUMsS0FBS1AsSUFBdEM7QUFDRCxHOzs7Ozs7Ozs7RUFwQmlDLG1EOzs7Ozs7Ozs7Ozs7OzswQkFBZkwsTSIsImZpbGUiOiJEVGlSLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NyZWF0ZVBvcnRhbH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnRcbiAgICB0aGlzLm5vZGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkb2MuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1wiPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PiwgLy8g5aGe6L+b5Lyg6YCB6Zeo55qESlNYXG4gICAgICB0aGlzLm5vZGUgLy8g5Lyg6YCB6Zeo55qE5Y+m5LiA56uvRE9NIG5vZGVcbiAgICApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///DTiR\n");

/***/ })

}]);