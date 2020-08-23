"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;

var _immutable = require("immutable");

var _menu = _interopRequireDefault(require("dan-api/ui/menu"));

var _uiConstants = require("../constants/uiConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  /* Settings for Themes and layout */
  theme: 'blueCyanTheme',
  direction: 'ltr',
  type: 'light',
  // light or dark
  gradient: true,
  // true or false
  decoration: true,
  // true or false
  bgPosition: 'half',
  // half, header, full
  layout: 'left-sidebar',
  // big-sidebar, left-sidebar, top-navigation, mega-menu

  /* End settings */
  palette: (0, _immutable.List)([{
    name: 'Mint',
    value: 'blueCyanTheme'
  }, {
    name: 'Monochrome',
    value: 'greyTheme'
  }]),
  sidebarOpen: true,
  pageLoaded: false,
  subMenuOpen: []
};

var getMenus = function getMenus(menuArray) {
  return menuArray.map(function (item) {
    if (item.child) {
      return item.child;
    }

    return false;
  });
};

var setNavCollapse = function setNavCollapse(arr, curRoute) {
  var headMenu = 'not found';

  for (var i = 0; i < arr.length; i += 1) {
    for (var j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j].link === curRoute) {
        headMenu = _menu["default"][i].key;
      }
    }
  }

  return headMenu;
};

var initialImmutableState = (0, _immutable.fromJS)(initialState);

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialImmutableState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _uiConstants.TOGGLE_SIDEBAR:
      return state.withMutations(function (mutableState) {
        mutableState.set('sidebarOpen', !state.get('sidebarOpen'));
      });

    case _uiConstants.OPEN_MENU:
      return state.withMutations(function (mutableState) {
        mutableState.set('sidebarOpen', true);
      });

    case _uiConstants.CLOSE_MENU:
      return state.withMutations(function (mutableState) {
        mutableState.set('sidebarOpen', false);
      });

    case _uiConstants.OPEN_SUBMENU:
      return state.withMutations(function (mutableState) {
        // Set initial open parent menu
        var activeParent = setNavCollapse(getMenus(_menu["default"]), action.initialLocation); // Once page loaded will expand the parent menu

        if (action.initialLocation) {
          mutableState.set('subMenuOpen', (0, _immutable.List)([activeParent]));
          return;
        } // Expand / Collapse parent menu


        var menuList = state.get('subMenuOpen');

        if (menuList.indexOf(action.key) > -1) {
          if (action.keyParent) {
            mutableState.set('subMenuOpen', (0, _immutable.List)([action.keyParent]));
          } else {
            mutableState.set('subMenuOpen', (0, _immutable.List)([]));
          }
        } else {
          mutableState.set('subMenuOpen', (0, _immutable.List)([action.key, action.keyParent]));
        }
      });

    case _uiConstants.CHANGE_RANDOM_THEME:
      return state.withMutations(function (mutableState) {
        var paletteArray = state.get('palette').toJS();
        var random = paletteArray[Math.floor(Math.random() * paletteArray.length)];
        mutableState.set('theme', random.value);
      });

    case _uiConstants.CHANGE_THEME:
      return state.withMutations(function (mutableState) {
        mutableState.set('theme', action.theme);
      });

    case _uiConstants.CHANGE_MODE:
      return state.withMutations(function (mutableState) {
        mutableState.set('type', action.mode);
      });

    case _uiConstants.CHANGE_GRADIENT:
      return state.withMutations(function (mutableState) {
        mutableState.set('gradient', action.gradient);
      });

    case _uiConstants.CHANGE_DECO:
      return state.withMutations(function (mutableState) {
        mutableState.set('decoration', action.deco);
      });

    case _uiConstants.CHANGE_BG_POSITION:
      return state.withMutations(function (mutableState) {
        mutableState.set('bgPosition', action.position);
      });

    case _uiConstants.CHANGE_LAYOUT:
      return state.withMutations(function (mutableState) {
        mutableState.set('layout', action.layout);
      });

    case _uiConstants.CHANGE_DIRECTION:
      return state.withMutations(function (mutableState) {
        mutableState.set('direction', action.direction);
      });

    case _uiConstants.LOAD_PAGE:
      return state.withMutations(function (mutableState) {
        mutableState.set('pageLoaded', action.isLoaded);
      });

    default:
      return state;
  }
}