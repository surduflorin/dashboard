"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _avatars = _interopRequireDefault(require("../images/avatars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dummyContents = {
  user: {
    name: 'Thomas Schneider',
    title: 'Photographer',
    avatar: _avatars["default"][6],
    status: 'online',
    email: 'thomas@invisionapp.com'
  },
  text: {
    title: 'Lorem ipsum',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    sentences: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '20 August 2020'
  }
};
var _default = dummyContents;
exports["default"] = _default;