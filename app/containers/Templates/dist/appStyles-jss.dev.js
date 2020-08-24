"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.gradientBgDark = exports.gradientBgLight = void 0;

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _petal_bg = _interopRequireDefault(require("dan-images/petal_bg.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gradientBgLight = function gradientBgLight(theme) {
  return "linear-gradient(-45deg, ".concat(theme.palette.primary.main, " 0%, ").concat(theme.palette.primary.main, " 33%, ").concat(theme.palette.secondary.main, " 100%);");
};

exports.gradientBgLight = gradientBgLight;

var gradientBgDark = function gradientBgDark(theme) {
  return "linear-gradient(-45deg, ".concat((0, _colorManipulator.darken)(theme.palette.primary.main, 0.4), " 0%, ").concat((0, _colorManipulator.darken)(theme.palette.primary.main, 0.4), " 33%, ").concat((0, _colorManipulator.darken)(theme.palette.secondary.main, 0.4), " 100%);");
};

exports.gradientBgDark = gradientBgDark;
var appFrame = {
  display: 'flex',
  width: '100%',
  minHeight: '100%',
  zIndex: 1
};

var styles = function styles(theme) {
  var _appFrameSlider, _pageTitle;

  return {
    root: {
      width: '100%',
      marginTop: 0,
      zIndex: 1,
      overflow: 'auto'
    },
    blogWrap: {
      color: theme.palette.text.primary,
      position: 'relative'
    },
    appFrameInner: _objectSpread({
      color: theme.palette.text.primary
    }, appFrame),
    appFrameOuter: _objectSpread({
      color: theme.palette.text.primary
    }, appFrame),
    appFrameLanding: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background["default"],
      minHeight: 1000
    },
    appFrameSlider: (_appFrameSlider = {
      display: 'flex',
      width: '100%',
      height: '100%',
      color: theme.palette.text.primary
    }, _defineProperty(_appFrameSlider, theme.breakpoints.up('lg'), {
      position: 'absolute',
      overflow: 'hidden'
    }), _defineProperty(_appFrameSlider, "backgroundColor", theme.palette.background["default"]), _appFrameSlider),
    topNav: {
      flexDirection: 'column'
    },
    sideNav: {
      flexDirection: 'row'
    },
    content: _defineProperty({
      width: '100%',
      padding: theme.spacing(2),
      minHeight: '100%',
      overflow: 'hidden'
    }, theme.breakpoints.down('md'), {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }),
    petal: {
      background: "url(".concat(_petal_bg["default"], ") no-repeat"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '100%',
      position: 'fixed'
    },
    outerContent: {
      width: '100%',
      backgroundSize: 'cover',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bgWrap: {
      position: 'fixed',
      background: theme.palette.background["default"],
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    },
    headerBg: {},
    halfBg: {},
    fullBg: {},
    bgbar: {
      backgroundAttachment: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      '&$headerBg': {
        height: 64
      },
      '&$halfBg': {
        height: 400
      },
      '&$fullBg': {
        height: '100%'
      }
    },
    gradientBg: {
      backgroundImage: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
      backgroundAttachment: 'fixed'
    },
    solidBg: {
      backgroundColor: theme.palette.type === 'dark' ? (0, _colorManipulator.darken)(theme.palette.primary.main, 0.4) : theme.palette.primary.main
    },
    decorationWave: _defineProperty({
      width: '100%',
      height: 'auto',
      position: 'absolute',
      left: -2,
      bottom: -32,
      transform: 'scale(1.1,0.8)',
      transformOrigin: 'bottom'
    }, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    decorationPetal: {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      left: 0,
      top: 0
    },
    sidebarLayout: {},
    topbarLayout: {},
    mainWrap: {
      height: '100%',
      position: 'relative',
      '& > div': {
        willChange: 'inherit !important' // hack for floating form issue when expaded

      },
      '&$sidebarLayout': {
        paddingTop: theme.spacing(8)
      },
      '&$topbarLayout': {
        width: '100%',
        marginTop: theme.spacing(3)
      }
    },
    preloader: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      background: 'transparent',
      height: 3
    },
    materialBg: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      opacity: 0.5
    },
    contentPaddingLeft: {
      paddingLeft: theme.spacing(10)
    },
    contentPaddingLeftBig: {
      paddingLeft: theme.spacing(2)
    },
    contentPaddingRight: {
      paddingRight: theme.spacing(10)
    },
    hideApp: {
      display: 'none'
    },
    circularProgress: {
      position: 'fixed',
      top: 'calc(50% - 45px)',
      left: 'calc(50% - 45px)'
    },
    brand: {
      height: 54,
      display: 'flex',
      padding: '10px 10px 5px',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      '& img': {
        width: 20
      },
      '& h3': {
        margin: 0,
        fontSize: 16,
        fontWeight: 500,
        paddingLeft: 10,
        color: theme.palette.common.white
      }
    },
    light: {},
    pageTitle: (_pageTitle = {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(3)
    }, _defineProperty(_pageTitle, theme.breakpoints.up('lg'), {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }), _defineProperty(_pageTitle, '& h4', _defineProperty({
      fontWeight: 700,
      textTransform: 'capitalize'
    }, theme.breakpoints.down('md'), {
      marginBottom: theme.spacing(3)
    })), _pageTitle),
    darkTitle: {
      color: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark
    },
    lightTitle: {
      color: theme.palette.common.white
    }
  };
};

var _default = styles;
exports["default"] = _default;