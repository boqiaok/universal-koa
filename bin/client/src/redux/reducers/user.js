'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginout = exports.loginin = exports.LOGOUT = exports.LOGIN = undefined;

var _handleActions;

var _reduxActions = require('redux-actions');

var _immutable = require('immutable');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN = exports.LOGIN = 'LOGIN';
var LOGOUT = exports.LOGOUT = 'LOGOUT';

var loginin = exports.loginin = (0, _reduxActions.createAction)(LOGIN);
var loginout = exports.loginout = (0, _reduxActions.createAction)(LOGOUT);

var initialState = (0, _immutable.Map)({
  logined: false
});

var userReducer = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, LOGIN, function (state, _ref) {
  var payload = _ref.payload;

  return state;
}), _defineProperty(_handleActions, LOGOUT, function (state, _ref2) {
  var payload = _ref2.payload;

  return state;
}), _handleActions), initialState);

exports.default = userReducer;