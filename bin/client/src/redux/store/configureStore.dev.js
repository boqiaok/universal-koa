'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _immutable = require('immutable');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _saga = require('../saga');

var _saga2 = _interopRequireDefault(_saga);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var enhancer = composeEnhancers(_middlewares2.default);

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = (0, _redux.createStore)(_reducers2.default, (0, _immutable.fromJS)(initialState), enhancer);
  _middlewares.sagaMiddleware.run(_saga2.default);

  if (module.hot) {
    module.hot.accept('../reducers', function () {
      var nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}