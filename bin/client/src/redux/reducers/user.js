'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  logined: false
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN':
      return { logined: true };
    case 'LOGOUT':
      return { logined: false };
    default:
      return state;
  }
};

exports.default = userReducer;