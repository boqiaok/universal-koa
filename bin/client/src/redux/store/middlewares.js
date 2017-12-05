'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sagaMiddleware = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = exports.sagaMiddleware = (0, _reduxSaga2.default)();
var middleWare = void 0;

if (process.env.NODE_ENV === 'production') {
  middleWare = (0, _redux.applyMiddleware)(_reduxThunk2.default, sagaMiddleware);
} else {
  middleWare = (0, _redux.applyMiddleware)(_reduxThunk2.default, sagaMiddleware, _reduxLogger2.default);
}
exports.default = middleWare;