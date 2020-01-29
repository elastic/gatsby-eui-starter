exports.ids = ["icon.logo_apm-js"];
exports.modules = {

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/logo_apm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/logo_apm.js ***!
  \*************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconLogoApm = function EuiIconLogoApm(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    id: titleId
  }, title) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10 32H7.238C3.793 32 1 28.865 1 24.998V15h9v17z",
    fill: "#F04E98"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "euiIcon__fillNegative",
    d: "M10 32h9V8h-9z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M31 32h-9V0l1.973.024C27.866.072 31 3.731 31 8.228V32z",
    fill: "#07C"
  }));
};

var icon = EuiIconLogoApm;
EuiIconLogoApm.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconLogoApm"
};

/***/ })

};;
//# sourceMappingURL=icon.logo_apm-js.render-page.js.map