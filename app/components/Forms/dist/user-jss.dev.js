"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _cyan = _interopRequireDefault(require("@material-ui/core/colors/cyan"));

var _indigo = _interopRequireDefault(require("@material-ui/core/colors/indigo"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _petal_grey_bg = _interopRequireDefault(require("dan-images/petal_grey_bg.svg"));

var _petal_bg = _interopRequireDefault(require("dan-images/petal_bg.svg"));

var _appStylesJss = require("containers/Templates/appStyles-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

var wrapper = function wrapper(theme, opacity) {
  return {
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: (0, _colorManipulator.fade)(theme.palette.background.paper, opacity),
    backgroundRepeat: 'no-repeat',
    color: theme.palette.text.primary,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };
};

var styles = function styles(theme) {
  var _objectSpread2, _brand, _formWrap, _socmedLogin, _userFormWrap, _notifyForm, _avatar, _aside;

  return {
    root: _objectSpread({}, rootWraper),
    rootFull: _objectSpread({}, rootWraper, {
      height: '100%'
    }),
    container: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }, theme.breakpoints.down('md'), {
      overflow: 'hidden'
    }),
    containerSide: _defineProperty({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%'
    }, theme.breakpoints.down('md'), {
      overflow: 'hidden'
    }),
    paperWrap: _objectSpread({}, wrapper(theme, 1)),
    sideWrap: _objectSpread({}, wrapper(theme, 1), (_objectSpread2 = {
      height: '100%',
      borderRadius: 0
    }, _defineProperty(_objectSpread2, theme.breakpoints.up('md'), {
      width: 480
    }), _defineProperty(_objectSpread2, '& $topBar', {
      marginBottom: theme.spacing(4)
    }), _objectSpread2)),
    fullWrap: _objectSpread({}, wrapper(theme, 0.9), {
      height: '100%',
      borderRadius: 0,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& $topBar': {
        width: '100%'
      }
    }),
    petal: {
      backgroundImage: theme.palette.type === 'dark' ? "url(".concat(_petal_bg["default"], ")") : "url(".concat(_petal_grey_bg["default"], ")")
    },
    icon: {},
    topBar: _defineProperty({
      display: 'flex',
      justifyContent: 'space-between',
      '& $icon': {
        marginRight: theme.spacing(1)
      }
    }, theme.breakpoints.down('sm'), {
      justifyContent: 'center',
      marginBottom: theme.spacing(3),
      '& a': {
        display: 'none'
      }
    }),
    outer: {},
    brand: (_brand = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5px 10px',
      position: 'relative',
      fontSize: 16,
      fontWeight: 500,
      color: theme.palette.text.primary,
      textDecoration: 'none',
      '&$outer': {
        color: theme.palette.common.white
      }
    }, _defineProperty(_brand, theme.breakpoints.down('md'), {
      margin: theme.spacing(2)
    }), _defineProperty(_brand, '& img', {
      width: 30,
      marginRight: 10
    }), _brand),
    formWrap: (_formWrap = {}, _defineProperty(_formWrap, theme.breakpoints.up('sm'), {
      padding: '0 100px'
    }), _defineProperty(_formWrap, theme.breakpoints.up('md'), {
      padding: '0 150px'
    }), _formWrap),
    pageFormWrap: _defineProperty({
      width: '100%',
      margin: "".concat(theme.spacing(2), "px auto")
    }, theme.breakpoints.up('sm'), {
      width: 480
    }),
    pageFormSideWrap: _defineProperty({
      margin: '0 auto'
    }, theme.breakpoints.only('sm'), {
      width: 480
    }),
    formControl: {
      width: '100%',
      marginBottom: theme.spacing(1)
    },
    socmedLogin: (_socmedLogin = {}, _defineProperty(_socmedLogin, theme.breakpoints.up('sm'), {
      padding: '24px 100px 1px'
    }), _defineProperty(_socmedLogin, '& button', {
      padding: '4px 24px'
    }), _socmedLogin),
    socmedSideLogin: _defineProperty({
      padding: '24px 24px 1px',
      margin: '0 auto',
      '& button': {
        padding: '4px 16px',
        margin: "0 ".concat(theme.spacing(1), "px")
      }
    }, theme.breakpoints.only('sm'), {
      width: 480
    }),
    userFormWrap: (_userFormWrap = {
      width: '94%'
    }, _defineProperty(_userFormWrap, theme.breakpoints.up('md'), {
      width: 720
    }), _defineProperty(_userFormWrap, theme.breakpoints.down('sm'), {
      marginBottom: theme.spacing(3)
    }), _userFormWrap),
    sideFormWrap: _defineProperty({
      height: '100%'
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    fullFormWrap: {
      height: '100%',
      width: '100%'
    },
    title: {
      color: theme.palette.primary.main
    },
    subtitle: {
      fontSize: 14
    },
    titleGradient: _defineProperty({
      background: (0, _appStylesJss.gradientBgLight)(theme),
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      paddingBottom: theme.spacing(3),
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }, theme.breakpoints.down('sm'), {
      fontSize: '2.55em'
    }),
    opening: {
      color: theme.palette.common.white,
      width: '100%',
      textAlign: 'center',
      '& h1': _defineProperty({
        display: 'block'
      }, theme.breakpoints.down('md'), {
        fontSize: 32,
        lineHeight: '48px'
      }),
      '& p': _defineProperty({
        color: theme.palette.common.white,
        fontSize: 18
      }, theme.breakpoints.down('md'), {
        fontSize: 14
      })
    },
    label: {},
    btnArea: _defineProperty({
      display: 'flex',
      justifyContent: 'space-around',
      margin: "".concat(theme.spacing(2), "px 0"),
      fontSize: 12,
      '& $label': {
        fontSize: 12,
        '& span': {
          fontSize: 12
        }
      },
      '& button': {
        margin: "0 ".concat(theme.spacing(1), "px")
      }
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    }),
    noMargin: {
      margin: 0
    },
    redBtn: {
      color: _red["default"][500],
      borderColor: _red["default"][500],
      '&:hover': {
        borderColor: _red["default"][700]
      }
    },
    blueBtn: {
      color: _indigo["default"][300],
      borderColor: _indigo["default"][300],
      '&:hover': {
        borderColor: _indigo["default"][500]
      }
    },
    cyanBtn: {
      color: _cyan["default"][500],
      borderColor: _cyan["default"][500],
      '&:hover': {
        borderColor: _cyan["default"][700]
      }
    },
    buttonLink: {
      background: 'none',
      padding: 0,
      textTransform: 'none',
      transition: 'color ease 0.3s',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.875rem',
      '&:hover': {
        background: 'none',
        color: theme.palette.secondary.main
      }
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    footer: {
      textAlign: 'center',
      padding: 5,
      background: theme.palette.grey[100],
      fontSize: 14,
      position: 'relative'
    },
    welcomeWrap: {
      position: 'relative'
    },
    tab: {
      margin: "".concat(theme.spacing(3), "px 0 ").concat(theme.spacing(1), "px")
    },
    link: {
      fontSize: '0.875rem',
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    socmedFull: _defineProperty({
      textAlign: 'center',
      width: '100%',
      margin: "".concat(theme.spacing(3), "px ").concat(theme.spacing(1), "px"),
      '& button': {
        width: '100%',
        display: 'block',
        margin: "0 auto ".concat(theme.spacing(2), "px")
      }
    }, theme.breakpoints.up('sm'), {
      '& button': {
        width: 400
      }
    }),
    lockWrap: _defineProperty({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column'
    }),
    lockForm: {
      display: 'flex',
      alignItems: 'baseline'
    },
    unlockBtn: {
      top: -4
    },
    notifyForm: (_notifyForm = {
      alignItems: 'baseline'
    }, _defineProperty(_notifyForm, theme.breakpoints.down('xs'), {
      '& button': {
        marginTop: theme.spacing(3),
        width: '100%'
      }
    }), _defineProperty(_notifyForm, theme.breakpoints.up('sm'), {
      display: 'flex',
      '& button': {
        width: 'auto'
      }
    }), _notifyForm),
    lockField: {
      marginRight: theme.spacing(1),
      '& label': {
        color: "".concat(theme.palette.common.white, " !important")
      },
      '& label + div': {
        background: (0, _colorManipulator.fade)(theme.palette.primary.light, 0.3),
        border: 'none',
        '& svg': {
          fill: (0, _colorManipulator.fade)(theme.palette.common.white, 0.7)
        }
      }
    },
    avatar: (_avatar = {
      width: 150,
      height: 150
    }, _defineProperty(_avatar, theme.breakpoints.up('lg'), {
      marginRight: theme.spacing(3)
    }), _defineProperty(_avatar, "boxShadow", theme.glow.medium), _avatar),
    userName: _defineProperty({
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium
    }, theme.breakpoints.down('xs'), {
      marginTop: theme.spacing(3),
      textAlign: 'center'
    }),
    hint: {
      padding: theme.spacing(1)
    },
    brandCenter: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing(3)
    },
    centerAdornment: {
      justifyContent: 'center',
      '& > div': {
        width: '100%'
      },
      '& aside': (_aside = {
        top: -10
      }, _defineProperty(_aside, theme.breakpoints.up('sm'), {
        left: 10
      }), _defineProperty(_aside, "position", 'relative'), _aside),
      '& a i': {
        width: 32,
        height: 32
      }
    },
    centerV: {
      justifyContent: 'center'
    },
    optArea: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: "0 ".concat(theme.spacing(0.5), "px")
    }
  };
};

var _default = styles;
exports["default"] = _default;