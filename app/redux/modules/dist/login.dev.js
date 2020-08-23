"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;

var _immutable = require("immutable");

var _reduxFormConstants = require("../constants/reduxFormConstants");

var initialState = {
  usersLogin: (0, _immutable.Map)({
    email: 'thomas@invisionapp.com',
    password: 'thomas',
    remember: true
  })
};
var initialImmutableState = (0, _immutable.fromJS)(initialState);

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _reduxFormConstants.INIT:
      return state;

    default:
      return state;
  }
}