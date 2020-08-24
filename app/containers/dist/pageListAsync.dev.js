"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parent = exports.ComingSoon = exports.Maintenance = exports.Error = exports.NotFoundDedicated = exports.NotFound = exports.ResetPassword = exports.Register = exports.LoginDedicated = exports.Login = exports.Table = exports.Form = exports.DashboardPage = exports.BlankPage = void 0;

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _Loading = _interopRequireDefault(require("dan-components/Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BlankPage = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Dashboard'));
    });
  },
  loading: _Loading["default"]
});
exports.BlankPage = BlankPage;
var DashboardPage = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Dashboard'));
    });
  },
  loading: _Loading["default"]
});
exports.DashboardPage = DashboardPage;
var Form = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Forms/ReduxForm'));
    });
  },
  loading: _Loading["default"]
});
exports.Form = Form;
var Table = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Table/BasicTable'));
    });
  },
  loading: _Loading["default"]
});
exports.Table = Table;
var Login = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Users/Login'));
    });
  },
  loading: _Loading["default"]
});
exports.Login = Login;
var LoginDedicated = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Standalone/LoginDedicated'));
    });
  },
  loading: _Loading["default"]
});
exports.LoginDedicated = LoginDedicated;
var Register = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Users/Register'));
    });
  },
  loading: _Loading["default"]
});
exports.Register = Register;
var ResetPassword = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Users/ResetPassword'));
    });
  },
  loading: _Loading["default"]
});
exports.ResetPassword = ResetPassword;
var NotFound = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./NotFound/NotFound'));
    });
  },
  loading: _Loading["default"]
});
exports.NotFound = NotFound;
var NotFoundDedicated = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Standalone/NotFoundDedicated'));
    });
  },
  loading: _Loading["default"]
});
exports.NotFoundDedicated = NotFoundDedicated;
var Error = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Error'));
    });
  },
  loading: _Loading["default"]
});
exports.Error = Error;
var Maintenance = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/Maintenance'));
    });
  },
  loading: _Loading["default"]
});
exports.Maintenance = Maintenance;
var ComingSoon = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Pages/ComingSoon'));
    });
  },
  loading: _Loading["default"]
});
exports.ComingSoon = ComingSoon;
var Parent = (0, _reactLoadable["default"])({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./Parent'));
    });
  },
  loading: _Loading["default"]
});
exports.Parent = Parent;