'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutable = require('redux-immutable');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxImmutable.combineReducers)({
  user: _user2.default
});