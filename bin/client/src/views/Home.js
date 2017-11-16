'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _temp = 'dist/img/274f9267.jpg';

var _temp2 = _interopRequireDefault(_temp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = {
  'banner': 'home_banner_3SC',
  'banner_text': 'home_banner_text_2GX',
  'logo_en': 'home_logo_en_3V9',
  'upload_btn': 'home_upload_btn_1aF',
  'content': 'home_content_2FY',
  'list': 'home_list_10o',
  'readmore': 'home_readmore_3xX',
  'footer': 'home_footer_356'
};
var styles = {
  'jinzhe': 'home_jinzhe_Orb'
};

// const tempImg2 = null

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.github.com/repos');

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: Home.banner },
          _react2.default.createElement(
            'p',
            { className: Home.banner_text },
            '\u4E00\u8D77\u521B\u9020\u6709\u8DA3\u7684\u97F32111ds'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/test' },
              _react2.default.createElement(
                'button',
                { className: Home.upload_btn },
                '\u7ACB \u5373 \u521B \u4F5C'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: Home.content },
          _react2.default.createElement(
            'h1',
            null,
            '\u4F5C\u54C1\u5217\u8868'
          ),
          _react2.default.createElement(
            'h2',
            null,
            '\u6211\u4EEC\u63A8\u8350\u4E86\u554A\u554A\u6240\u5927\u6240\u591A\u4E00\u4E9B\u597D\u7684\u4F5C\u54C1\u4F9B\u60A8\u98DF\u7528'
          ),
          _react2.default.createElement(
            'ul',
            { className: Home.list },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { src: _temp2.default }),
              _react2.default.createElement(
                'p',
                null,
                '\u6D4B\u6D4B\u4F60\u7684\u5FCD\u8010\u529B!'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { src: _temp2.default }),
              _react2.default.createElement(
                'p',
                null,
                '\u6D4B\u6D4B\u4F60\u7684\u5FCD\u8010\u529B!'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { src: _temp2.default }),
              _react2.default.createElement(
                'p',
                null,
                '\u6D4B\u6D4B\u4F60\u7684\u5FCD\u8010\u529B!'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { src: _temp2.default }),
              _react2.default.createElement(
                'p',
                null,
                '\u6D4B\u6D4B\u4F60\u7684\u5FCD\u8010\u529B!'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { src: _temp2.default }),
              _react2.default.createElement(
                'p',
                null,
                '\u6D4B\u6D4B\u4F60\u7684\u5FCD\u8010\u529B!'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { src: _temp2.default }),
              _react2.default.createElement(
                'p',
                null,
                '\u6D4B\u6D4B\u4F60\u7684\u5FCD\u8010\u529B!'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: Home.readmore },
            _react2.default.createElement(
              'span',
              null,
              '\u60A8\u4E0D\u6EE1\u610F\uFF1F'
            ),
            _react2.default.createElement(
              'a',
              null,
              '\u6362\u4E00\u6279!'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: Home.footer },
          '\xA92013-2017 TeamMoe@LittleMusic TeamMoe@ListenLite 2017'
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;