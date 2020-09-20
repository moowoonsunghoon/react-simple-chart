"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReactSimpleChart = function ReactSimpleChart(_ref) {
  var x = _ref.x,
      _ref$yRange = _ref.yRange,
      yRange = _ref$yRange === void 0 ? 10 : _ref$yRange,
      datas = _ref.datas;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      valueVisible = _useState2[0],
      setValueVisible = _useState2[1];

  var maxValues = 0;

  var _iterator = _createForOfIteratorHelper(datas),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var data = _step.value;
      if (data.value.length !== x.length) throw new Error("x length and data value length must be the same.");
      maxValues += Math.max.apply(Math, _toConsumableArray(data.value));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var maxValue = maxValues.toString();
  var maxValueDigits = "1";

  for (var i = 0; i < maxValue.length - 1; i++) {
    maxValueDigits += "0";
  }

  var maxY = parseInt(maxValue) / parseInt(maxValueDigits);
  if (maxY % 1 === 0) maxY = (maxY + 1) * parseInt(maxValueDigits);else maxY = Math.ceil(maxY) * parseInt(maxValueDigits);
  var y = [];

  for (var _i2 = 1; _i2 <= yRange; _i2++) {
    y.push(maxY / yRange * _i2);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: 20
    }
  }, datas.map(function (data) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        marginRight: 10
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: 20,
        height: 20,
        backgroundColor: data.color,
        marginRight: 10
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, data.label));
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column-reverse",
      flex: 0
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      width: "100%",
      paddingTop: 10,
      position: "relative",
      top: -7
    }
  }, "0"), y.map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: i,
      style: {
        display: "flex",
        height: "".concat(100 / y.length, "%"),
        borderRight: "1px solid #000",
        width: "100%",
        marginRight: 10
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        position: "relative",
        top: -8
      }
    }, v));
  })), x.map(function (v, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "".concat(100 / x.length, "%")
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "flex-start",
        width: "100%",
        flex: 1,
        position: "relative"
      },
      onMouseOver: function onMouseOver() {
        return setValueVisible(index);
      },
      onMouseLeave: function onMouseLeave() {
        return setValueVisible(null);
      }
    }, y.map(function (v, i) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "flex-end",
          height: "".concat(100 / y.length, "%"),
          borderTop: "1px solid #ababab"
        }
      });
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column-reverse",
        position: "absolute",
        height: "100%",
        width: "50%",
        left: "50%",
        transform: "translateX(-50%)"
      }
    }, datas.map(function (data) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: data.color,
          height: "".concat(data.value[index] / maxY * 100, "%")
        }
      }, valueVisible === index && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          color: "#fff"
        }
      }, data.value[index]));
    }))), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        borderTop: "1px solid #000",
        width: "100%",
        textAlign: "center",
        paddingTop: 10
      }
    }, v));
  })));
};

var _default = ReactSimpleChart;
exports.default = _default;
//# sourceMappingURL=index.js.map