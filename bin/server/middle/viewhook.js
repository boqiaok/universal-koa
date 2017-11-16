'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Iso = require('../../client/src/Iso');

var _Iso2 = _interopRequireDefault(_Iso);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../config');
var log4js = require('./logger');
var logger = log4js.getLogger('app');

function renderHtml(content, data, common) {
  return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charSet=\'utf-8\'/>\n      <meta httpEquiv=\'X-UA-Compatible\' content=\'IE=edge\'/>\n      <meta name=\'renderer\' content=\'webkit\'/>\n      <meta name=\'keywords\' content=\'demo\'/>\n      <meta name=\'description\' content=\'demo\'/>\n      <meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'/>\n      <link rel="stylesheet" href=' + (common.css || '/') + ' rel="stylesheet">\n    </head>\n    <body>\n      <div id="root"><div>' + content + '</div></div>\n    <script>\n    window.__REDUX_DATA__ = ' + (0, _stringify2.default)(data) + ';\n    </script>\n    <script src="dist/dll/vendor.dll.js"></script>\n    \n    <script src=' + common.js + '></script>\n    </body>\n    </html>\n  ';
}
// <script src="${common.publicPath}dist/js/index.js"></script>
function viewhook(ctx) {
  var render = _server2.default.renderToString;
  var location = {
    pathname: ctx.path
  };
  var json = {};
  logger.info(process);
  logger.info(process.env);
  logger.info(process.env.NODE_ENV);
  var IS_DEV = process.env.NODE_ENV === 'development';
  var fileName = IS_DEV ? '/config/assets.json' : '/config/assets.prod.json';
  var text = _fs2.default.readFileSync(_path2.default.join(process.cwd(), fileName), 'utf-8');
  (0, _assign2.default)(json, JSON.parse(text));
  var markup = render(_react2.default.createElement(_Iso2.default, { initialState: {}, location: location }));
  logger.error(markup);
  ctx.type = 'html';

  ctx.body = renderHtml(markup, {}, json.index);
}

module.exports = viewhook;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(logger, 'logger', 'server/middle/viewhook.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', 'server/middle/viewhook.js');

  __REACT_HOT_LOADER__.register(viewhook, 'viewhook', 'server/middle/viewhook.js');
}();

;