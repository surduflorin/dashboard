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
    subtitle: 'Ut a lorem eu odio cursus laoreet.',
    sentences: 'Donec lacus sem, scelerisque sed ligula nec, iaculis porttitor mauris.',
    paragraph: 'Sed rutrum augue libero, id faucibus quam aliquet sed. Phasellus interdum orci quam, volutpat ornare eros rhoncus sed. Donec vestibulum leo a auctor convallis. In dignissim consectetur molestie. Vivamus interdum tempor dui, nec posuere augue consequat sit amet. Suspendisse quis semper quam. Nullam nec neque sem.',
    date: 'Jan 9, 2018'
  }
};
var _default = dummyContents;
exports["default"] = _default;