'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('./redux/store');

var _store2 = _interopRequireDefault(_store);

var _reactHotLoader = require('react-hot-loader');

var _root = require('./views/root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.__REDUX_DATA__;
delete window.__PRELOADED_STATE__;

var store = (0, _store2.default)(initialState);

var renderIndex = function renderIndex(Component) {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    { warnings: false },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(Component, null)
      )
    )
  ), document.getElementById('root'));
};

renderIndex(_root2.default);

if (module.hot) {
  module.hot.accept('./views/root', function () {
    var NextApp = require('./views/root').default;
    renderIndex(NextApp);
  });
}