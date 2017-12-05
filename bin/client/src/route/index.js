'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _home = require('../views/home.js');

var _home2 = _interopRequireDefault(_home);

var _ = require('../views/404.js');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routers = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/test', component: _2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
  )
);

exports.default = Routers;