'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@babel/polyfill');
var moment = require('moment');
var pretty = require('pretty-ms');
var reactDOM = require('react-dom');
var Handlebars = require('handlebars');
var dashupCore = require('@dashup/core');
var dashupUI = require('@dashup/ui');
var ReactSortable = require('react-sortablejs');
var SimpleBar = require('simplebar-react');
var HandlebarsHelpers = require('handlebars-helpers');
var View = require('@dashup/view');
var React = require('react');
var material = require('@mui/material');
var slateReact = require('slate-react');
var slate = require('slate');
var reactBootstrap = require('react-bootstrap');
var styles$1 = require('@mui/material/styles');
var lab = require('@mui/lab');
var reactColor = require('react-color');
var fontAwesomeIconChars = require('font-awesome-icon-chars');
var AdapterMoment = require('@mui/lab/AdapterMoment');
var xDataGridPro = require('@mui/x-data-grid-pro');
var styles = require('@mui/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var pretty__default = /*#__PURE__*/_interopDefaultLegacy(pretty);
var reactDOM__default = /*#__PURE__*/_interopDefaultLegacy(reactDOM);
var Handlebars__default = /*#__PURE__*/_interopDefaultLegacy(Handlebars);
var dashupCore__default = /*#__PURE__*/_interopDefaultLegacy(dashupCore);
var dashupUI__namespace = /*#__PURE__*/_interopNamespace(dashupUI);
var ReactSortable__default = /*#__PURE__*/_interopDefaultLegacy(ReactSortable);
var SimpleBar__default = /*#__PURE__*/_interopDefaultLegacy(SimpleBar);
var HandlebarsHelpers__default = /*#__PURE__*/_interopDefaultLegacy(HandlebarsHelpers);
var View__default = /*#__PURE__*/_interopDefaultLegacy(View);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var AdapterMoment__default = /*#__PURE__*/_interopDefaultLegacy(AdapterMoment);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

// import dependencies

Handlebars__default['default'].registerHelper(HandlebarsHelpers__default['default']());
Handlebars__default['default'].registerHelper('ms', function (amount, extra, options) {
  // check now
  amount = parseInt(amount); // return formatted

  return pretty__default['default'](amount);
});
Handlebars__default['default'].registerHelper('age', function (date, start, options) {
  // date
  var from = new Date(); // check options

  if (start instanceof Date) {
    from = start;
  } // return amount


  return moment__default['default'](from).diff(date, 'years');
});
Handlebars__default['default'].registerHelper('date', function (date, fmt, options) {
  // check now
  if (date === 'now') date = new Date(); // check options

  if (typeof fmt !== 'string') {
    fmt = 'MMMM DD YYYY, LT';
  } // return formatted


  return moment__default['default'](date).format(fmt);
});
Handlebars__default['default'].registerHelper('timezone', function (tz, options) {
  // check now
  var date = new Date(); // return formatted

  return moment__default['default'](date).tz(tz).format('ha z');
});
Handlebars__default['default'].registerHelper('since', function (date, extra, options) {
  // check now
  if (date === 'now') date = new Date(); // check options

  if (typeof extra !== 'boolean') {
    extra = true;
  } // return formatted


  return moment__default['default'](date).fromNow(extra);
});
Handlebars__default['default'].registerHelper('var', function (varName, varValue, options) {
  // set var
  options.data.root[varName] = varValue;
}); // export default

var templates = {}; // create dashup ui

var DashupUIHbs = function DashupUIHbs() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // create template
  if (!templates[props.template]) templates[props.template] = Handlebars__default['default'].compile(props.template || ''); // try/catch

  var html = 'N/A'; // created

  try {
    // run template
    html = templates[props.template](_objectSpread2(_objectSpread2({}, props.data || {}), props.item ? props.item.get() : {}));
  } catch (e) {} // return jsx


  return props.isInline ? /*#__PURE__*/React__default['default'].createElement("span", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React__default['default'].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}; // dashup ui hbs


DashupUIHbs.Handlebars = Handlebars__default['default']; // return logic

// let context

var DashupUIPageBody = function DashupUIPageBody() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return props.children;
}; // export default page menu


var Body = (function (ctx) {

  return DashupUIPageBody;
});

var DashupContext$6 = null; // create menu component

var DashupUIPageMenu = function DashupUIPageMenu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // get active
  var getActive = function getActive(page, dashup) {
    // return actives
    return _toConsumableArray(dashup.get('active') || []).filter(function (a) {
      return a.page === (page === null || page === void 0 ? void 0 : page.get('_id'));
    });
  }; // return JSX


  return /*#__PURE__*/React__default['default'].createElement(DashupContext$6.Consumer, null, function (_ref) {
    var page = _ref.page,
        dashup = _ref.dashup,
        color = _ref.color,
        icon = _ref.icon,
        title = _ref.title;
    // page fab
    var PageFab = styles$1.styled(material.Fab)(function (_ref2) {
      var theme = _ref2.theme;
      // return theme
      return {
        color: theme.palette.getContrastText((color === null || color === void 0 ? void 0 : color.hex) || theme.palette.background["default"]),
        boxShadow: 'none',
        backgroundColor: (color === null || color === void 0 ? void 0 : color.hex) || theme.palette.background["default"],
        '&:hover': {
          backgroundColor: (color === null || color === void 0 ? void 0 : color.hex) || theme.palette.background["default"]
        }
      };
    }); // return styled

    return /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        pt: 2,
        pb: 2,
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
      }
    }, /*#__PURE__*/React__default['default'].createElement(PageFab, {
      size: "medium"
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      icon: (page === null || page === void 0 ? void 0 : page.get('icon')) || icon,
      fixedWidth: true
    })), /*#__PURE__*/React__default['default'].createElement(material.Typography, {
      variant: "h4",
      component: "h1",
      sx: {
        ml: 2
      }
    }, title), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        ml: 'auto'
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      direction: "row",
      spacing: 1,
      sx: {
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.AvatarGroup, {
      max: 4,
      mr: 1
    }, props.presence && !!getActive(page, dashup).length && getActive(page, dashup).map(function (active, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
        title: active.name,
        key: "active-".concat(active.id || active._id)
      }, /*#__PURE__*/React__default['default'].createElement(material.Box, null, /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
        name: active.name,
        image: active.avatar,
        sx: {
          width: 30,
          height: 30
        }
      })));
    })), props.children, props.onShare && page && dashup.can(page, 'manage') && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Share Page"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return props.onShare(e);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "share-alt",
      fixedWidth: true
    }))), props.onConfig && page && dashup.can(page, 'manage') && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Page Settings"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return props.onConfig(e);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "ellipsis-h",
      fixedWidth: true
    }))))));
  });
}; // export default page menu


var Menu$1 = (function (ctx) {
  // use context
  DashupContext$6 = ctx; // return actual component

  return DashupUIPageMenu;
});

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = toggleSelection();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

var DashupUIPageAuditChange = function DashupUIPageAuditChange() {
  var _data, _data$actions;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // use state
  var field = props.getFields(props.forms).find(function (f) {
    return f.uuid === props.change.field;
  });
  var struct = (field === null || field === void 0 ? void 0 : field.type) && props.getFieldStruct(field.type); // check field

  var _useState = React.useState((_data = (struct || {}).data) !== null && _data !== void 0 && (_data$actions = _data.actions) !== null && _data$actions !== void 0 && _data$actions.includes('sanitise') ? null : props.change.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // use effect


  React.useEffect(function () {
    var _data2, _data2$actions;

    // check sanitise
    if (!((_data2 = (struct || {}).data) !== null && _data2 !== void 0 && (_data2$actions = _data2.actions) !== null && _data2$actions !== void 0 && _data2$actions.includes('sanitise'))) return; // sanitise

    props.dashup.action({
      nonce: props.item.get('_id'),
      trail: [],
      type: 'field',
      page: props.page.get('_id'),
      struct: field.type
    }, 'sanitise', field, props.change.value).then(function (_ref) {
      var sanitised = _ref.sanitised;
      // sanitised
      setValue(sanitised);
    });
  }, []); // return jsx

  return !!field && !!(Array.isArray(value || []) ? (value || []).length : value) && /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement("b", {
    className: "d-block"
  }, props.change.label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-overflow"
  }, /*#__PURE__*/React__default['default'].createElement(props.dashup.View, {
    view: "view",
    type: "field",
    size: "sm",
    item: props.item,
    field: field,
    value: value,
    struct: field.type,
    dashup: props.dashup
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-spinner fa-spin"
  })))));
}; // create menu component


var DashupUIPageAudit = function DashupUIPageAudit() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return jsx
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "d-block mb-2 text-sm"
  }, /*#__PURE__*/React__default['default'].createElement("small", {
    className: "text-muted d-block"
  }, moment__default['default'](props.audit.created_at).format('Do MMM, h:mma')), /*#__PURE__*/React__default['default'].createElement("b", null, props.audit.user.name), " set:", /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "ps-3"
  }, props.audit.changes.map(function (change, a) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(DashupUIPageAuditChange, _extends({
      key: "change-".concat(props.audit.id, "-").concat(a)
    }, props, {
      change: change
    }));
  })));
}; // export default page menu

var DashupContext$5 = null; // create menu component

var DashupUIPageItem = function DashupUIPageItem() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // copying
  var _useState = React.useState(props.form),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      audits = _useState4[0],
      setAudits = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      copying = _useState6[0],
      setCopying = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      tagOpen = _useState8[0],
      setTagOpen = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      updated = _useState10[0],
      setUpdated = _useState10[1];

  var _useState11 = React.useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      prevent = _useState12[0],
      setPrevent = _useState12[1];

  var _useState13 = React.useState(true),
      _useState14 = _slicedToArray(_useState13, 2),
      creating = _useState14[0],
      setCreating = _useState14[1];

  var _useState15 = React.useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      removing = _useState16[0],
      setRemoving = _useState16[1];

  var _useState17 = React.useState(null),
      _useState18 = _slicedToArray(_useState17, 2),
      userOpen = _useState18[0],
      setUserOpen = _useState18[1];

  var _useState19 = React.useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      confirming = _useState20[0],
      setConfirming = _useState20[1];

  var _useState21 = React.useState(false),
      _useState22 = _slicedToArray(_useState21, 2),
      submitting = _useState22[0],
      setSubmitting = _useState22[1];

  var _useState23 = React.useState(props.item && props.item.get() || {}),
      _useState24 = _slicedToArray(_useState23, 2),
      actualData = _useState24[0],
      setActualData = _useState24[1]; // use effect


  React.useEffect(function () {
    // set loading
    if (props.item) {
      // set data
      setActualData(props.item && props.item.get() || {});
    } else if (!props.item) {
      // set data
      setActualData({});
    }
  }, [props.item && props.item.toJSON()]); // on copy

  var onCopy = function onCopy(e, page, item) {
    // prevent
    e.preventDefault();
    e.stopPropagation(); // set loading

    setCopying(true); // timeout

    setTimeout(function () {
      return setCopying(false);
    }, 2000); // copy

    copyToClipboard("https://".concat(window.location.host, "/app/").concat(page.get('_id'), "/").concat(item.get('_id')));
  }; // get tag types


  var getTagFields = function getTagFields(data) {
    // check get field
    if (!props.getField && !data.getField) return []; // set types

    var types = typeof props.tag !== 'undefined' ? props.tag : data.page.get('data.tag') || [];
    if (!Array.isArray(types)) types = [types]; // return fields

    return types.map(function (f) {
      return (props.getField || data.getField)(f);
    }).filter(function (f) {
      return f;
    });
  }; // get user types


  var getUserFields = function getUserFields(data) {
    // check get field
    if (!props.getField && !data.getField) return []; // set types

    var types = typeof props.user !== 'undefined' ? props.user : data.page.get('data.user') || [];
    if (!Array.isArray(types)) types = [types]; // return fields

    return types.map(function (f) {
      return (props.getField || data.getField)(f);
    }).filter(function (f) {
      return f;
    });
  }; // get form


  var getForm = function getForm(forms) {
    // found
    var found = forms.find(function (f) {
      return f.get('_id') === form;
    }); // check found

    if (found) return found; // current

    var meta = forms.find(function (f) {
      return f.get('_id') === (props.item && props.item.get('_meta.form'));
    }); // check found

    if (meta) return meta; // return 0

    return forms[0];
  }; // get tags


  var getTags = function getTags(tagField) {
    // tag field
    if (!tagField) return []; // get options

    var options = tagField.options || []; // check options

    if (!options.length) return []; // get value

    var val = props.item.get(tagField.name || tagField.uuid) || []; // set value

    if (!Array.isArray(val)) val = [val].filter(function (v) {
      return v;
    }); // tags

    return options.filter(function (t) {
      // return has tag
      return val.includes(t.value);
    });
  }; // get users


  var getUsers = function getUsers(userField) {
    // check options
    if (!userField) return []; // get value

    var val = props.item.get(userField.name || userField.uuid) || []; // set value

    if (!Array.isArray(val)) val = [val].filter(function (v) {
      return v;
    }); // tags

    return val;
  }; // has tags


  var hasTags = function hasTags(data) {
    // check page
    if (!data.page) return; // tag uuid

    return !!(props.tag || data.page.get('data.tag') || []).length;
  }; // has user


  var hasUser = function hasUser(data) {
    // check page
    if (!data.page) return; // tag uuid

    return !!(props.user || data.page.get('data.user') || []).length;
  }; // set data


  var onData = function onData(data) {
    // set updated
    setUpdated(new Date());
    setActualData(_objectSpread2({}, data));
  }; // on tag


  var onUser = function onUser(field, value) {
    // get tag value
    props.item.set(field.name || field.uuid, value); // set updated

    setUpdated(new Date()); // check id

    if (props.item.get('_id')) {
      props.item.save();
      setUpdated(null);
    }
  }; // on tag


  var onTag = function onTag(field, value) {
    // get tag value
    var tagVal = props.item.get(field.name || field.uuid) || []; // check array

    if (!Array.isArray(tagVal)) tagVal = [tagVal].filter(function (t) {
      return t && typeof t === 'string';
    }); // check includes

    if (tagVal.includes(value)) {
      tagVal = tagVal.filter(function (v) {
        return v !== value;
      });
    } else {
      tagVal.push(value);
    } // set and save


    props.item.set(field.name || field.uuid, field.multiple ? tagVal : tagVal.pop()); // set updated

    setUpdated(new Date()); // check id

    if (props.item.get('_id')) {
      props.item.save();
      setUpdated(null);
    }
  }; // on hide


  var onHide = function onHide() {
    // check updated
    if (updated) {
      // check confirm
      if (confirming) {
        setConfirming(false);
        props.onHide();
      } else {
        setConfirming(true);
      }
    } else {
      // hide immediately
      props.onHide();
    }
  }; // on remove


  var onRemove = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // prevent
              e.preventDefault();
              e.stopPropagation(); // loading remove

              setSubmitting(true); // submit form

              _context.next = 5;
              return props.item.remove();

            case 5:
              // loading remove
              setRemoving(false);
              setSubmitting(false);
              onHide();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onRemove(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // on create


  var onCreate = function onCreate(dashup) {
    // unset for form remove
    setCreating(false);
    setActualData({});
    props.setItem(new dashup.Model({}, dashup));
    setTimeout(function () {
      return setCreating(true);
    }, 200);
  }; // on submit


  var _onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, form, data) {
      var _props$item;

      var creating, result, url, state;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // prevent
              e.preventDefault();
              e.stopPropagation(); // check submitting

              if (!submitting) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              // submitting
              setSubmitting(true); // creating

              creating = !((_props$item = props.item) !== null && _props$item !== void 0 && _props$item.get('_id')); // submit form

              _context2.next = 8;
              return data.dashup.action({
                type: 'page',
                page: data.page.get('_id'),
                form: form.get('_id'),
                model: props.item && props.item.get('_meta.model') || form.get('data.model'),
                struct: 'form'
              }, 'form.submit', _objectSpread2({
                _id: props.item ? props.item.get('_id') : null
              }, actualData));

            case 8:
              result = _context2.sent;
              // set to item
              props.item.set('_id', result._id);
              props.item.set('_meta', result._meta); // set item

              if (creating && result._id && typeof eden !== 'undefined') {
                // url
                url = "/app/".concat(data.page.get('_id'), "/").concat(result._id); // check state

                state = Object.assign({}, {
                  prevent: true
                }, eden.router.history.location.state); // replace history

                eden.router.history.replace({
                  pathname: url
                }, state);
              } // submitting


              setUpdated(null);
              setSubmitting(false);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(); // audits


  React.useEffect(function () {
    // check eden
    if (typeof eden === 'undefined') return; // audits

    var localAudits = audits || []; // check item

    if (!props.item || !props.item.get('_id')) {
      localAudits = [];
      return setAudits([]);
    } // on audits


    var onAudits = function onAudits() {
      var changes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // loop audits
      changes.forEach(function (audit) {
        // new audits
        localAudits = localAudits.filter(function (a) {
          return a.id !== audit.id;
        }); // push new audit

        localAudits.push(audit);
      }); // update audits

      setAudits(_toConsumableArray(localAudits));
    }; // load audits


    eden.dashup.socket.on("audit.".concat(props.item.get('_id')), onAudits);
    eden.dashup.rpc({}, 'audit.subscribe', props.item.get('_id')).then(onAudits); // return unlisten

    return function () {
      eden.dashup.rpc({}, 'audit.unsubscribe', props.item.get('_id'));
      eden.dashup.socket.off("audit.".concat(props.item.get('_id')), onAudits);
    };
  }, [props.item && props.item.get('_id')]); // return JSX

  return /*#__PURE__*/React__default['default'].createElement(DashupContext$5.Consumer, null, function (data) {
    var _props$item2;

    // destruct
    var page = data.page,
        dashup = data.dashup,
        getFieldStruct = data.getFieldStruct,
        getForms = data.getForms,
        getFields = data.getFields; // get forms

    var forms = (props.getForms || getForms)();
    var chosenForm = getForm(forms); // return jsx

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DashupUIModal, {
      open: !!props.show,
      thread: (_props$item2 = props.item) === null || _props$item2 === void 0 ? void 0 : _props$item2.get('_id'),
      dashup: dashup,
      onClose: onHide,
      sidebar: /*#__PURE__*/React__default['default'].createElement(material.Box, {
        flex: 1,
        sx: {
          maxHeight: '40%'
        }
      }, /*#__PURE__*/React__default['default'].createElement(SimpleBar__default['default'], {
        className: "p-relative",
        style: {
          height: '100%'
        }
      }, audits.map(function (audit, i) {
        var _audit$changes;

        // changes
        if (!(audit !== null && audit !== void 0 && (_audit$changes = audit.changes) !== null && _audit$changes !== void 0 && _audit$changes.length)) return null; // return jsx

        return /*#__PURE__*/React__default['default'].createElement(DashupUIPageAudit, {
          key: "audit-".concat(audit.id),
          page: page,
          item: props.item,
          forms: forms,
          audit: audit,
          dashup: dashup,
          getFields: getFields,
          getFieldStruct: getFieldStruct
        });
      })))
    }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, {
      sx: {
        padding: 0
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      flexWrap: "wrap"
    }, !!props.item.get('_id') && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Copy URL"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: copying ? 'primary' : undefined,
      onClick: function onClick(e) {
        return onCopy(e, page, props.item);
      }
    }, copying ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "clipboard-check",
      fontSize: "small"
    }) : /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "clipboard",
      fontSize: "small"
    }))), !!hasTags(data) && getTagFields(data).map(function (type, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.Stack, {
        spacing: 1,
        direction: "row",
        key: "tag-".concat(type.uuid),
        alignItems: "center"
      }, getTags(type).map(function (tag, a) {
        var _tag$color, _window$theme, _window$theme$palette;

        // get color
        var color = (_tag$color = tag.color) === null || _tag$color === void 0 ? void 0 : _tag$color.hex; // return jsx

        return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
          title: "".concat(type.label, ": ").concat(tag.value),
          key: "tag-".concat(type.uuid, "-").concat(tag.value)
        }, /*#__PURE__*/React__default['default'].createElement(material.Chip, {
          sx: {
            color: color && ((_window$theme = window.theme) === null || _window$theme === void 0 ? void 0 : (_window$theme$palette = _window$theme.palette) === null || _window$theme$palette === void 0 ? void 0 : _window$theme$palette.getContrastText(color)),
            backgroundColor: color
          },
          label: tag.label,
          onClick: function onClick(e) {
            return setTagOpen({
              type: type.uuid,
              el: e.target
            });
          },
          onDelete: function onDelete() {}
        }));
      }), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
        title: "Add ".concat(type.label)
      }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
        onClick: function onClick(e) {
          return setTagOpen({
            type: type.uuid,
            el: e.target
          });
        }
      }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        type: "fas",
        icon: "tag",
        fontSize: "small"
      }))), /*#__PURE__*/React__default['default'].createElement(material.Menu, {
        open: (tagOpen === null || tagOpen === void 0 ? void 0 : tagOpen.type) === type.uuid,
        onClose: function onClose() {
          return setTagOpen(null);
        },
        anchorEl: tagOpen === null || tagOpen === void 0 ? void 0 : tagOpen.el,
        MenuListProps: {
          sx: {
            width: 240
          }
        }
      }, /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
        view: "input",
        type: "field",
        struct: type.type,
        dashup: data.dashup,
        field: type,
        value: props.item && props.item.get(type.name || type.uuid),
        onChange: onTag,
        isInline: true,
        autoFocus: true
      })));
    }), !!hasUser(data) && getUserFields(data).map(function (type, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.Stack, {
        spacing: 1,
        direction: "row",
        key: "tag-".concat(type.uuid),
        flexWrap: "wrap",
        alignItems: "center"
      }, getUsers(type).map(function (user, a) {
        // return jsx
        return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
          title: "".concat(type.label, ": ").concat(user.name),
          key: "tag-".concat(type.uuid, "-").concat(user._id || user.id)
        }, /*#__PURE__*/React__default['default'].createElement(material.Chip, {
          label: user.name,
          avatar: /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
            image: user.image || user.avatar,
            name: user.name
          }),
          onClick: function onClick(e) {
            return setUserOpen({
              type: type.uuid,
              el: e.target
            });
          },
          onDelete: function onDelete() {}
        }));
      }), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
        title: "Add ".concat(type.label)
      }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
        onClick: function onClick(e) {
          return setUserOpen({
            type: type.uuid,
            el: e.target
          });
        }
      }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        type: "fas",
        icon: "user-plus",
        fontSize: "small"
      }))), /*#__PURE__*/React__default['default'].createElement(material.Menu, {
        open: (userOpen === null || userOpen === void 0 ? void 0 : userOpen.type) === type.uuid,
        onClose: function onClose() {
          return setUserOpen(null);
        },
        anchorEl: userOpen === null || userOpen === void 0 ? void 0 : userOpen.el,
        MenuListProps: {
          sx: {
            width: 240
          }
        }
      }, /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
        view: "input",
        type: "field",
        struct: "user",
        dashup: data.dashup,
        field: type,
        value: props.item && props.item.get(type.name || type.uuid),
        onChange: onUser,
        isInline: true,
        autoFocus: true
      })));
    }))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1
    }, !!creating && /*#__PURE__*/React__default['default'].createElement(material.Box, {
      py: 2
    }, /*#__PURE__*/React__default['default'].createElement(lab.TabContext, {
      value: chosenForm.get('_id')
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }, /*#__PURE__*/React__default['default'].createElement(lab.TabList, {
      onChange: function onChange(e, v) {
        return setForm(v);
      }
    }, forms.map(function (t, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.Tab, {
        key: "tab-".concat(t.get('_id')),
        value: t.get('_id'),
        label: t.get('name')
      });
    }))), forms.map(function (t, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(lab.TabPanel, {
        key: "tab-".concat(t.get('_id')),
        value: t.get('_id').toLowerCase(),
        sx: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }, /*#__PURE__*/React__default['default'].createElement(DashupUIForm, _extends({}, data, {
        id: page.get('_id'),
        data: actualData,
        fields: t.get('data.fields') || [],
        setData: onData,
        onSubmit: function onSubmit(e) {
          return _onSubmit(e, t, data);
        },
        setPrevent: setPrevent
      })));
    })))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      pt: 2,
      flex: 0
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      sx: {
        width: '100%'
      },
      alignItems: "center"
    }, !!props.item.get('_id') && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Remove Item"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return setRemoving(true);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "trash",
      fontSize: "small"
    }))), !!props.item.get('_id') && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Create New"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return onCreate(dashup);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "plus",
      fontSize: "small"
    }))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1,
      textAlign: "right"
    }, /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "success",
      variant: "contained",
      onClick: function onClick(e) {
        return _onSubmit(e, chosenForm, data);
      },
      disabled: !updated || prevent || submitting,
      loading: submitting
    }, submitting ? 'Submitting...' : 'Submit'))))), /*#__PURE__*/React__default['default'].createElement(material.Dialog, {
      open: !!removing,
      onClose: function onClose() {
        return setRemoving(false);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, null, "Confirm Remove"), /*#__PURE__*/React__default['default'].createElement(material.DialogContent, null, /*#__PURE__*/React__default['default'].createElement(material.DialogContentText, null, "Are you sure you want to remove this item?")), /*#__PURE__*/React__default['default'].createElement(material.DialogActions, null, /*#__PURE__*/React__default['default'].createElement(material.Button, {
      onClick: function onClick() {
        return setRemoving(false);
      }
    }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "error",
      onClick: function onClick(e) {
        return onRemove(e);
      },
      loading: submitting
    }, "Remove"))), /*#__PURE__*/React__default['default'].createElement(material.Dialog, {
      open: !!confirming,
      onClose: function onClose() {
        return setConfirming(false);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, null, "Unsaved Changes"), /*#__PURE__*/React__default['default'].createElement(material.DialogContent, null, /*#__PURE__*/React__default['default'].createElement(material.DialogContentText, null, "You have unsaved changes, closing the modal will clear them.")), /*#__PURE__*/React__default['default'].createElement(material.DialogActions, null, /*#__PURE__*/React__default['default'].createElement(material.Button, {
      onClick: function onClick() {
        return setConfirming(false);
      }
    }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(material.Button, {
      color: "error",
      onClick: function onClick(e) {
        return onHide();
      }
    }, "Continue"))));
  });
}; // export default page menu


var Item = (function (ctx) {
  // use context
  DashupContext$5 = ctx; // return actual component

  return DashupUIPageItem;
});

var loading = false;
var DashupContext$4 = null; // create menu component

var DashupUIPageShare = function DashupUIPageShare() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // use state
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      share = _useState2[0],
      setSharing = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      shares = _useState4[0],
      setShares = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      saving = _useState6[0],
      setSaving = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      prevent = _useState8[0],
      setPrevent = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      copying = _useState10[0],
      setCopying = _useState10[1];

  var _useState11 = React.useState(null),
      _useState12 = _slicedToArray(_useState11, 2),
      removing = _useState12[0],
      setRemoving = _useState12[1]; // get type


  var getType = function getType(struct, page) {
    // map
    return ['Link', 'Marketplace'].filter(function (item) {
      var _struct$data;

      // check item
      if (item === 'Marketplace' && (!(struct !== null && struct !== void 0 && (_struct$data = struct.data) !== null && _struct$data !== void 0 && _struct$data.share) || page.get('link'))) return false; // return true

      return true;
    }).map(function (label) {
      // set value
      var value = label.toLowerCase(); // return value

      return {
        label: label,
        value: value,
        selected: ((share === null || share === void 0 ? void 0 : share.type) || 'link') === value
      };
    });
  }; // on copy


  var onCopy = function onCopy(share) {
    // set copying
    setCopying(share.id); // timeout

    setTimeout(function () {
      return setCopying(null);
    }, 2000); // copy

    copyToClipboard("https://".concat(eden.get('config.domain'), "/share/").concat(share.slug));
  }; // on share


  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, dashup) {
      var result, found;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // loading
              setSaving(true); // get result

              _context.next = 3;
              return eden.router.post("/app/".concat(dashup.get('_id'), "/share/").concat(page.get('_id'), "/").concat(share.id ? "".concat(share.id, "/update") : 'create'), share);

            case 3:
              result = _context.sent;

              // push result
              if (result.success) {
                // find
                found = shares.find(function (s) {
                  return s.id === result.data.id;
                }); // check found

                if (found) {
                  // set to found
                  Object.keys(result.data).forEach(function (key) {
                    // update values
                    found[key] = result.data[key];
                  });
                } else {
                  // push
                  shares.push(result.data);
                }
              } // loading


              setShares(_toConsumableArray(shares));
              setSaving(false);
              setSharing(null);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(); // on remove


  var onRemove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page, dashup) {
      var newShares;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // loading
              setSaving(true); // filter

              newShares = shares.filter(function (s) {
                return s.id !== removing.id;
              }); // get result

              _context2.next = 4;
              return eden.router.post("/app/".concat(dashup.get('_id'), "/share/").concat(page.get('_id'), "/").concat(removing.id, "/remove"));

            case 4:
              // loading
              setShares(_toConsumableArray(newShares));
              setSaving(false);
              setSharing(null);
              setRemoving(null);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onRemove(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(); // set share


  var setShare = function setShare(key, value) {
    // set value
    share[key] = value; // set share

    setSharing(_objectSpread2({}, share));
  }; // get shares


  var getShares = function getShares(dashup, page, share) {
    // accum
    return Object.keys(share).reduce(function (accum, item) {
      // check array
      var ids = page.get(item);
      if (!Array.isArray(ids)) ids = [ids].filter(function (i) {
        return i;
      }); // find page

      ids.forEach(function (id) {
        // check id
        if (!dashup.page(id)) return;
        if (!accum.find(function (p) {
          return p.get('_id') === id;
        })) accum.push(dashup.page(id));
      }); // return accum

      return accum;
    }, []);
  }; // load shares


  var loadShares = function loadShares(page, dashup) {
    // check loading
    if (loading) return; // loading true

    loading = true; // load shares

    eden.router.get("/app/".concat(dashup.get('_id'), "/share/").concat(page.get('_id'), "/list")).then(function (_ref3) {
      var data = _ref3.data;
      // shares
      setShares(data); // loading done

      loading = false;
    });
  }; // return JSX


  return /*#__PURE__*/React__default['default'].createElement(DashupContext$4.Consumer, null, function (_ref4) {
    var _struct$data2, _struct$data2$share;

    var page = _ref4.page,
        guest = _ref4.guest,
        dashup = _ref4.dashup,
        getPageStruct = _ref4.getPageStruct;
    // load shares
    if (!shares && props.show) loadShares(page, dashup); // shares page

    var shareP = guest && guest.page('shares');
    var sForm = shareP && Array.from(guest.get('pages').values()).find(function (p) {
      return p.get('type') === 'form' && p.get('data.model') === shareP.get('_id');
    });
    var sFields = sForm && sForm.get('data.fields');
    var categories = sFields && (sFields || []).find(function (f) {
      return f.name === 'categories';
    }); // get struct

    var struct = page.get('type') && getPageStruct(page.get('type')); // return jsx

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DashupUIModal, {
      open: !!props.show,
      icon: page.get('icon') || struct.icon,
      page: page,
      title: page.get('name') || page.get('_id'),
      dashup: dashup,
      thread: "".concat(page.get('_id')),
      onClose: props.onClose || props.onHide
    }, share ? /*#__PURE__*/React__default['default'].createElement(material.Box, {
      py: 2,
      flex: 1
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1
    }, !!(struct !== null && struct !== void 0 && (_struct$data2 = struct.data) !== null && _struct$data2 !== void 0 && (_struct$data2$share = _struct$data2.share) !== null && _struct$data2$share !== void 0 && _struct$data2$share.pages) && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Alert, {
      severity: "info"
    }, "The following pages will also be shared."), getShares(dashup, page, struct.data.share.pages).map(function (sPage) {
      // get color
      var color = sPage.get('color'); // return jsx

      return /*#__PURE__*/React__default['default'].createElement(material.TextField, {
        key: "share-".concat(sPage.get('_id')),
        label: sPage.get('type'),
        color: color === null || color === void 0 ? void 0 : color.hex,
        value: sPage.get('name'),
        readOnly: true,
        fullWidth: true,
        InputProps: {
          startAdornment: /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
            sx: {
              color: (color === null || color === void 0 ? void 0 : color.hex) && theme.palette.getContrastText(color.hex),
              background: color === null || color === void 0 ? void 0 : color.hex
            }
          }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "plus",
            fixedWidth: true
          })))
        }
      });
    }), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      py: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Divider, null))), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Share Type",
      value: share.type,
      select: true,
      onChange: function onChange(e) {
        var _e$target;

        return setShare('type', (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
      },
      fullWidth: true
    }, getType(struct, page).map(function (option) {
      return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
        key: option.value,
        value: option.value
      }, option.label);
    })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Share Name",
      value: share.name,
      onChange: function onChange(e) {
        var _e$target2;

        return setShare('name', (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
      },
      fullWidth: true
    }), share.type === 'marketplace' && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      py: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Divider, null)), /*#__PURE__*/React__default['default'].createElement(material.Alert, {
      severity: "info"
    }, "Adding this page to the marketplace will make it available for anyone to see once approved."), /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
      type: "field",
      view: "input",
      struct: "image",
      field: {
        uuid: 'image',
        input: 'input',
        label: 'Image'
      },
      item: new dashup.Model(),
      value: share.image,
      dashup: dashup,
      onChange: function onChange(f, val) {
        return setShare('image', val);
      },
      setPrevent: setPrevent
    }), !!categories && /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
      type: "field",
      view: "input",
      struct: "select",
      field: categories,
      item: new dashup.Model(),
      value: share.categories,
      dashup: dashup,
      onChange: function onChange(f, val) {
        return setShare('categories', val);
      }
    }), /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
      type: "field",
      view: "input",
      struct: "textarea",
      field: {
        uuid: 'description',
        label: 'Description'
      },
      item: new dashup.Model(),
      value: share.description,
      dashup: dashup,
      onChange: function onChange(f, val) {
        return setShare('description', val);
      }
    })))) : /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1,
      py: 2
    }, (shares || []).length ? (shares || []).map(function (share, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.TextField, {
        key: "share-".concat(i),
        label: share.type,
        value: share.name,
        readOnly: true,
        fullWidth: true,
        InputProps: {
          startAdornment: /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
            color: copying === share.id ? 'primary' : undefined,
            onClick: function onClick(e) {
              return onCopy(share);
            }
          }, copying === share.id ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "clipboard-check",
            fixedWidth: true
          }) : share.type === 'link' ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "link",
            fixedWidth: true
          }) : /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "shopping-cart",
            fixedWidth: true
          }))),
          endAdornment: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
            color: "error",
            onClick: function onClick(e) {
              return setRemoving(share);
            }
          }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "trash",
            fixedWidth: true
          }))), /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
            onClick: function onClick(e) {
              return setSharing(share);
            }
          }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "ellipsis-h",
            fixedWidth: true
          }))))
        }
      });
    }) : /*#__PURE__*/React__default['default'].createElement(material.Box, {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      alignItems: "center"
    }, "This page has no shares, click below to create one.")), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 0
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      sx: {
        width: '100%'
      },
      alignItems: "center"
    }, !!share && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Remove Share"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: "error",
      onClick: function onClick(e) {
        return setRemoving(true);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "trash",
      fixedWidth: true
    }))), /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      direction: "row",
      spacing: 1,
      flex: 1,
      justifyContent: "end"
    }, !!share && /*#__PURE__*/React__default['default'].createElement(material.Button, {
      onClick: function onClick() {
        return setSharing(null);
      }
    }, "Cancel"), share ? /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "success",
      variant: "contained",
      disabled: prevent || saving,
      loading: saving,
      onClick: function onClick() {
        return onSubmit(page, dashup);
      }
    }, saving ? 'Submitting...' : 'Submit') : /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "success",
      variant: "contained",
      onClick: function onClick() {
        return setSharing({
          type: 'link'
        });
      }
    }, "New Share"))))), /*#__PURE__*/React__default['default'].createElement(material.Dialog, {
      open: !!removing,
      onClose: function onClose() {
        return setRemoving(false);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, null, "Confirm Remove"), /*#__PURE__*/React__default['default'].createElement(material.DialogContent, null, /*#__PURE__*/React__default['default'].createElement(material.DialogContentText, null, "Are you sure you want to remove this share?")), /*#__PURE__*/React__default['default'].createElement(material.DialogActions, null, /*#__PURE__*/React__default['default'].createElement(material.Button, {
      onClick: function onClick() {
        return setRemoving(false);
      }
    }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "error",
      onClick: function onClick(e) {
        return onRemove(page, dashup);
      },
      loading: saving
    }, saving ? 'Removing...' : 'Remove'))));
  });
}; // export default page menu


var Share = (function (ctx) {
  // use context
  DashupContext$4 = ctx; // return actual component

  return DashupUIPageShare;
});

var DashupContext$3 = null; // global timer

var timer$4; // global debounce

var debounce$4 = function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  // return debounced
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // clear timeout previously
    clearTimeout(timer$4); // create new timeout

    timer$4 = setTimeout(function () {
      return func.apply(void 0, args);
    }, timeout);
  };
}; // create menu component


var DashupUIPageFilter = function DashupUIPageFilter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // state
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tagMenu = _useState4[0],
      setTagMenu = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      sortMenu = _useState6[0],
      setSortMenu = _useState6[1]; // has user


  var hasTags = function hasTags(page) {
    // get user
    if (props.tags) return typeof props.hasTags === 'function' ? props.hasTags() : true; // check page

    return !!(props.tags || page.get('data.tag') || []).length;
  }; // has user


  var hasUser = function hasUser(page) {
    // get user
    if (props.users) return typeof props.hasUser === 'function' ? props.hasUser() : true; // check page

    return !!(props.users || page.get('data.user') || []).length;
  }; // get tags


  var getTags = function getTags(page, fields) {
    // find in page
    return fields.filter(function (f) {
      return (props.tags || page.get('data.tag') || []).includes(f.uuid);
    });
  }; // return JSX


  return /*#__PURE__*/React__default['default'].createElement(DashupContext$3.Consumer, null, function (_ref) {
    var _eden, _eden$user;

    var page = _ref.page,
        dashup = _ref.dashup,
        setUser = _ref.setUser,
        getFields = _ref.getFields,
        getFieldStruct = _ref.getFieldStruct;
    // get fields
    var fields = (props.getFields || getFields)(); // get tags

    var tags = props.onTag && (props.getTags || getTags)(page, fields); // get sort field

    var sortField = page.get('data.sort.field') && fields.find(function (f) {
      return f.uuid === page.get('data.sort.field');
    }); // return jsx

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      mb: 2
    }, !!props.onSearch && /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Search",
      onChange: function onChange(e) {
        return debounce$4(props.onSearch, 500)(e.target.value);
      },
      defaultValue: page.get('data.search') || '',
      InputProps: {
        startAdornment: /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
          type: "fas",
          icon: "search",
          fixedWidth: true
        }))
      }
    }), /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      direction: "row",
      spacing: 1,
      ml: "auto",
      alignItems: "center"
    }, !!hasUser(page) && ((_eden = eden) === null || _eden === void 0 ? void 0 : (_eden$user = _eden.user) === null || _eden$user === void 0 ? void 0 : _eden$user.exists()) && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: page.get('user.filter.me') ? 'Show All' : 'Show Mine'
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: page.get('user.filter.me') ? 'primary' : undefined,
      onClick: function onClick(e) {
        return setUser('filter.me', !page.get('user.filter.me'));
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "user",
      fixedWidth: true
    }))), !!sortField && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "".concat(sortField.label || sortField.name, ": ").concat(page.get('data.sort.way') === 1 ? 'Asc' : 'Desc')
    }, /*#__PURE__*/React__default['default'].createElement(material.Chip, {
      icon: page.get('data.sort.way') === -1 ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        type: "fas",
        icon: "sort-up",
        fixedWidth: true
      }) : page.get('data.sort.way') === 1 ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        type: "fas",
        icon: "sort-down",
        fixedWidth: true
      }) : null,
      label: sortField.label || sortField.name,
      onClick: function onClick(e) {
        return props.onSort({
          field: sortField.uuid
        });
      },
      onDelete: function onDelete(e) {
        return props.onSort({});
      }
    })), !!props.onSort && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Sort View"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: page.get('user.filter.me') ? 'primary' : undefined,
      onClick: function onClick(e) {
        return setSortMenu(e.target);
      }
    }, page.get('data.sort.way') === -1 ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "sort-up",
      fixedWidth: true
    }) : page.get('data.sort.way') === 1 ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "sort-down",
      fixedWidth: true
    }) : /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "sort",
      fixedWidth: true
    }))), /*#__PURE__*/React__default['default'].createElement(material.Menu, {
      open: !!sortMenu,
      onClose: function onClose() {
        return setSortMenu(null);
      },
      anchorEl: sortMenu
    }, fields.map(function (field, i) {
      var _getFieldStruct;

      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
        key: "sort-".concat(field.uuid),
        onClick: function onClick() {
          return !setSortMenu(null) && props.onSort({
            field: field.uuid
          });
        }
      }, /*#__PURE__*/React__default['default'].createElement(material.ListItemIcon, null, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        type: "fas",
        icon: (_getFieldStruct = getFieldStruct(field.type)) === null || _getFieldStruct === void 0 ? void 0 : _getFieldStruct.icon,
        fixedWidth: true
      })), /*#__PURE__*/React__default['default'].createElement(material.ListItemText, null, field.label));
    }), /*#__PURE__*/React__default['default'].createElement(material.Divider, null), /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      key: "sort-created",
      onClick: function onClick() {
        return !setSortMenu(null) && props.onSort({
          field: 'created_at'
        });
      }
    }, "Created At"), /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      key: "sort-updated",
      onClick: function onClick() {
        return !setSortMenu(null) && props.onSort({
          field: 'updated_at'
        });
      }
    }, "Updated at"))), (page.get('user.filter.tags') || []).map(function (tag, i) {
      var _option$color, _option$color2, _option$color3;

      // get field
      var field = tags.find(function (f) {
        return f.uuid === (tag === null || tag === void 0 ? void 0 : tag.field);
      }); // check field

      if (!field) return null; // get option

      var option = (field.options || []).find(function (opt) {
        return opt.value === (tag === null || tag === void 0 ? void 0 : tag.value);
      }) || {}; // jsx

      return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
        key: "filter-".concat(tag === null || tag === void 0 ? void 0 : tag.field, "-").concat(tag === null || tag === void 0 ? void 0 : tag.value),
        title: "".concat(field.label || field.name, ": ").concat(option.label || (tag === null || tag === void 0 ? void 0 : tag.value))
      }, /*#__PURE__*/React__default['default'].createElement(material.Chip, {
        sx: {
          color: ((_option$color = option.color) === null || _option$color === void 0 ? void 0 : _option$color.hex) && theme.palette.getContrastText((_option$color2 = option.color) === null || _option$color2 === void 0 ? void 0 : _option$color2.hex),
          borderColor: (_option$color3 = option.color) === null || _option$color3 === void 0 ? void 0 : _option$color3.hex
        },
        icon: /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
          type: "fas",
          icon: "tag",
          fixedWidth: true
        }),
        label: option.label || (tag === null || tag === void 0 ? void 0 : tag.value),
        onDelete: function onDelete(e) {
          return props.onTag(field, option || tag);
        }
      }));
    }), !!props.onTag && hasTags(page) && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Filter by Tag"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: page.get('user.filter.me') ? 'primary' : undefined,
      onClick: function onClick(e) {
        return setTagMenu(e.target);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "tag",
      fixedWidth: true
    }))), /*#__PURE__*/React__default['default'].createElement(material.Menu, {
      open: !!tagMenu,
      onClose: function onClose() {
        return setTagMenu(null);
      },
      anchorEl: tagMenu
    }, tags.reduce(function (accum, tag, i) {
      // arr
      var arr = []; // push

      if (i !== 0) arr.push( /*#__PURE__*/React__default['default'].createElement(material.Divider, {
        key: "div-".concat(tag.uuid)
      })); // push

      arr.push.apply(arr, _toConsumableArray((tag.options || []).map(function (option, i) {
        // return jsx
        return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
          key: "tag-".concat(tag.uuid, "-").concat(option.value),
          onClick: function onClick() {
            return !setTagMenu(null) && props.onTag(tag, option);
          }
        }, option.label);
      }))); // push

      accum.push.apply(accum, arr);
      return accum;
    }, []))), !!props.onFilter && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Filter View"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: (page.get('user.query') ? page.get('user.query') : '[]').length > 2 || filter ? 'primary' : undefined,
      onClick: function onClick(e) {
        return setFilter(!filter);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "filter",
      fixedWidth: true
    }))))), !!filter && !!props.onFilter && /*#__PURE__*/React__default['default'].createElement(material.Box, {
      mb: 2
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIQuery, {
      page: page,
      label: "Filter",
      query: props.query || page.get('user.query'),
      dashup: dashup,
      fields: fields,
      onChange: props.onFilter,
      isString: props.isString,
      getFieldStruct: getFieldStruct
    })));
  });
}; // export default page menu


var Filter = (function (ctx) {
  // use context
  DashupContext$3 = ctx; // return actual component

  return DashupUIPageFilter;
});

var DashupContext$2 = null; // create menu component

var DashupUIPageConfig = function DashupUIPageConfig() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // tabs
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      icon = _useState4[0],
      setIcon = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      color = _useState6[0],
      setColor = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      colorMenu = _useState8[0],
      setColorMenu = _useState8[1]; // ref


  var colorRef = React.useRef(null); // return JSX

  return /*#__PURE__*/React__default['default'].createElement(DashupContext$2.Consumer, null, function (data) {
    var _struct$data;

    // destruct
    var type = data.type,
        page = data.page,
        dashup = data.dashup,
        setPage = data.setPage,
        getPageStruct = data.getPageStruct; // get struct

    var struct = getPageStruct(); // check struct

    if (!struct) return null; // tabs

    var tabs = ((_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : _struct$data.tabs) || ['Config', 'Connects']; // check tab

    if (!tab) tab = "".concat(tabs[0]).toLowerCase(); // return jsx

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DashupUIModal, {
      open: !!props.show,
      icon: page.get('icon') || (struct === null || struct === void 0 ? void 0 : struct.icon),
      page: page,
      title: page.get('name') || page.get('_id'),
      dashup: dashup,
      thread: "".concat(page.get('_id')),
      onClose: props.onHide || props.onClose
    }, /*#__PURE__*/React__default['default'].createElement(material.Menu, {
      open: !!colorMenu,
      onClose: function onClose() {
        return setColorMenu(null);
      },
      anchorEl: colorRef === null || colorRef === void 0 ? void 0 : colorRef.current
    }, /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      onClick: function onClick(e) {
        return !setIcon(true) && setColorMenu(false);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.ListItemIcon, null, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      icon: page.get('icon') || 'pencil'
    })), /*#__PURE__*/React__default['default'].createElement(material.ListItemText, null, "Change Icon")), /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      onClick: function onClick(e) {
        return !setColor(true) && setColorMenu(false);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.ListItemIcon, null, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "tint"
    })), /*#__PURE__*/React__default['default'].createElement(material.ListItemText, null, "Change Color"))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      pt: 4,
      pb: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Button, {
      ref: colorRef,
      variant: "contained",
      onClick: function onClick() {
        return setColorMenu(true);
      },
      sx: {
        color: page.get('color.hex') && theme.palette.getContrastText(page.get('color.hex')),
        backgroundColor: page.get('color.hex')
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      icon: page.get('icon') || 'pencil',
      fixedWidth: true
    })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Name",
      onChange: function onChange(e) {
        return setPage('name', e.target.value);
      },
      defaultValue: page.get('name'),
      fullWidth: true
    })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      rows: 4,
      label: "Description",
      onChange: function onChange(e) {
        return setPage('description', e.target.value);
      },
      defaultValue: page.get('description'),
      fullWidth: true,
      multiline: true
    }))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      pt: 2,
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }, /*#__PURE__*/React__default['default'].createElement(lab.TabContext, {
      value: tab
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }, /*#__PURE__*/React__default['default'].createElement(lab.TabList, {
      onChange: function onChange(e, v) {
        return setTab(v.toLowerCase());
      }
    }, tabs.map(function (t, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.Tab, {
        key: "tab-".concat(t),
        value: t.toLowerCase(),
        label: t
      });
    }))), tabs.map(function (t, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(lab.TabPanel, {
        key: "tab-".concat(t),
        value: t.toLowerCase(),
        sx: {
          flex: 1,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0
        }
      }, "".concat(tab).toLowerCase() === 'connects' ? /*#__PURE__*/React__default['default'].createElement(DashupUIPage.Connect, {
        page: page,
        dashup: dashup
      }) : props[tab] || /*#__PURE__*/React__default['default'].createElement(View__default['default'], _objectSpread2(_objectSpread2({}, data), {}, {
        type: 'page',
        view: "".concat(tab).toLowerCase(),
        struct: type
      })));
    })))), !!icon && /*#__PURE__*/React__default['default'].createElement(DashupUIIconPicker, {
      target: colorRef,
      show: true,
      icon: page.get('icon'),
      onClose: function onClose() {
        return setIcon(false);
      },
      onChange: function onChange(icon) {
        return setPage('icon', icon);
      }
    }), !!color && /*#__PURE__*/React__default['default'].createElement(DashupUIColor, {
      target: colorRef,
      show: true,
      color: page.get('color.hex') || 'transparent',
      colors: Object.values(colors),
      onClose: function onClose() {
        return setColor(false);
      },
      onChange: function onChange(hex) {
        return setPage('color', hex.hex === 'transparent' ? null : hex);
      }
    }));
  });
}; // export default page menu


var Config$1 = (function (ctx) {
  // use context
  DashupContext$2 = ctx; // return actual component

  return DashupUIPageConfig;
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed$1(_seed_) {
    seed = _seed_;
}

var randomFromSeed = {
    nextValue: getNextValue,
    seed: setSeed$1
};

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

var alphabet_1 = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};

var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

var randomByteBrowser = randomByte;

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

var format_browser = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length);
  var id = '';

  while (true) {
    var bytes = random(step);
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step;
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || '';
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
};

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format_browser(randomByteBrowser, alphabet_1.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

var generate_1 = generate;

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate_1(version);
    str = str + generate_1(clusterWorkerId);
    if (counter > 0) {
        str = str + generate_1(counter);
    }
    str = str + generate_1(seconds);
    return str;
}

var build_1 = build;

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet_1.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

var isValid = isShortId;

var lib = createCommonjsModule(function (module) {





// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet_1.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet_1.characters(newCharacters);
    }

    return alphabet_1.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build_1(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;
});
lib.generate;
lib.seed;
lib.worker;
lib.characters;
lib.isValid;

var shortid = lib;

var DashupContext$1 = null; // global timer

var timer$3; // global debounce

var debounce$3 = function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  // return debounced
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // clear timeout previously
    clearTimeout(timer$3); // create new timeout

    timer$3 = setTimeout(function () {
      return func.apply(void 0, args);
    }, timeout);
  };
}; // create menu component


var DashupUIPageConnect = function DashupUIPageConnect() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // state
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      saving = _useState2[0],
      setSaving = _useState2[1];

  var _useState3 = React.useState(new Date()),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      var setUpdated = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      updating = _useState6[0],
      setUpdating = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      removing = _useState8[0],
      setRemoving = _useState8[1]; // get type


  var getType = function getType(page, available) {
    // get type
    return _toConsumableArray(available).filter(function (connect) {
      return (connect.categories || []).includes(page.get('type'));
    }).map(function (connect) {
      // return value
      return {
        icon: connect.icon,
        value: connect.type,
        label: connect.title,
        selected: connect.type === (updating === null || updating === void 0 ? void 0 : updating.type)
      };
    });
  }; // set connect


  var _setConnect = function setConnect(key, value, _ref) {
    var page = _ref.page,
        setPage = _ref.setPage;
    // set to updating
    updating[key] = value;
    setUpdated(new Date()); // set page

    page.set('connects', _toConsumableArray(page.get('connects'))); // check key

    if (key === 'type') {
      onSubmit(page, setPage);
    }
  }; // on submit


  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, setPage) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // set submitting
              setSaving(true); // set page

              _context.next = 3;
              return setPage('connects', page.get('connects'));

            case 3:
              // set saving
              setSaving(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // set connect


  var onRemove = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page, setPage) {
      var newConnects;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // set submitting
              setSaving(true); // new connects

              newConnects = (page.get('connects') || []).filter(function (c) {
                return c.uuid !== removing.uuid;
              }); // set page

              page.set('connects', newConnects);
              _context2.next = 5;
              return setPage('connects', newConnects);

            case 5:
              // set saving
              setSaving(false); // remove

              setUpdating(null);
              setRemoving(null);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onRemove(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }(); // on create


  var onCreate = function onCreate(page, setPage) {
    // set connect
    var connect = {
      uuid: shortid()
    }; // add to connects

    var connects = page.get('connects') || []; // add connect

    connects.push(connect); // set connects

    page.set('connects', connects); // set connect

    setUpdating(connect);
    debounce$3(setPage, 500)('connects', page.get('connects'));
  }; // use effect


  React.useEffect(function () {
    // page
    var onUpdate = function onUpdate() {
      // check updating
      if (updating) {
        // set values
        var realUpdating = (props.page.get('connects') || []).find(function (c) {
          return c.uuid === updating.uuid;
        }); // set values

        if (realUpdating) setUpdating(realUpdating);
      } // set updated


      setUpdated(new Date());
    }; // on update


    props.page.on('connects', onUpdate); // return done

    return function () {
      // remove listener
      props.page.removeListener('connects', onUpdate);
    };
  }, [props.page && props.page.get('_id'), updating === null || updating === void 0 ? void 0 : updating.uuid]); // return JSX

  return /*#__PURE__*/React__default['default'].createElement(DashupContext$1.Consumer, null, function (data) {
    // destruct
    var page = data.page,
        available = data.available;
        data.dashup;
        var setPage = data.setPage,
        getConnectStruct = data.getConnectStruct; // get connects

    var connects = page.get('connects') || []; // return jsx

    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }, updating ? /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1
    }, /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Connect Type",
      value: updating.type || '',
      select: true,
      onChange: function onChange(e) {
        var _e$target;

        return _setConnect('type', (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value, {
          page: page,
          setPage: setPage
        });
      },
      fullWidth: true
    }, getType(page, available === null || available === void 0 ? void 0 : available.connects).map(function (option) {
      return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
        key: option.value,
        value: option.value
      }, option.label);
    })), !!updating.type && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Connect Name",
      value: updating.name || '',
      onChange: function onChange(e) {
        var _e$target2;

        return _setConnect('name', (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value, {
          page: page,
          setPage: setPage
        });
      },
      fullWidth: true
    }), /*#__PURE__*/React__default['default'].createElement(View__default['default'], _extends({}, data, {
      type: "connect",
      view: "config",
      struct: updating.type,
      connect: updating,
      setConnect: function setConnect(key, value) {
        return _setConnect(key, value, {
          page: page,
          setPage: setPage
        });
      }
    })))) : /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1
    }, (connects || []).length ? connects.map(function (connect, i) {
      var _getConnectStruct;

      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.TextField, {
        key: "connect-".concat(connect.uuid),
        label: ((_getConnectStruct = getConnectStruct(connect.type)) === null || _getConnectStruct === void 0 ? void 0 : _getConnectStruct.title) || 'N/A',
        value: connect.name || connect.uuid,
        readOnly: true,
        fullWidth: true,
        InputProps: {
          startAdornment: /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, null, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "plus",
            fixedWidth: true
          }))),
          endAdornment: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
            color: "error",
            onClick: function onClick(e) {
              return setRemoving(connect);
            }
          }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "trash",
            fixedWidth: true
          }))), /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
            onClick: function onClick(e) {
              return setUpdating(connect);
            }
          }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            type: "fas",
            icon: "pencil",
            fixedWidth: true
          }))))
        }
      });
    }) : /*#__PURE__*/React__default['default'].createElement(material.Box, {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      alignItems: "center"
    }, "This page has no connects, click below to create one.")), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      pt: 2,
      flex: 0
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      sx: {
        width: '100%'
      },
      alignItems: "center"
    }, !!updating && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Remove Connect"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      color: "error",
      onClick: function onClick(e) {
        return setRemoving(updating);
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "trash",
      fixedWidth: true
    }))), /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      direction: "row",
      spacing: 1,
      flex: 1,
      justifyContent: "end"
    }, !!updating && /*#__PURE__*/React__default['default'].createElement(material.Button, {
      onClick: function onClick() {
        return setUpdating(null);
      }
    }, "Cancel"), updating ? /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "success",
      variant: "contained",
      disabled: saving,
      loading: saving,
      onClick: function onClick() {
        return onSubmit(page, setPage);
      }
    }, saving ? 'Submitting...' : 'Submit') : /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "success",
      variant: "contained",
      onClick: function onClick(e) {
        return onCreate(page, setPage);
      }
    }, "New Connect"))))), /*#__PURE__*/React__default['default'].createElement(material.Dialog, {
      open: !!removing,
      onClose: function onClose() {
        return setRemoving(null);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, null, "Confirm Remove"), /*#__PURE__*/React__default['default'].createElement(material.DialogContent, null, /*#__PURE__*/React__default['default'].createElement(material.DialogContentText, null, "Are you sure you want to remove this connect?")), /*#__PURE__*/React__default['default'].createElement(material.DialogActions, null, /*#__PURE__*/React__default['default'].createElement(material.Button, {
      onClick: function onClick() {
        return setRemoving(null);
      }
    }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(lab.LoadingButton, {
      color: "error",
      onClick: function onClick(e) {
        return onRemove(page, setPage);
      },
      loading: saving
    }, saving ? 'Removing...' : 'Remove'))));
  });
}; // export default page menu


var Connect = (function (ctx) {
  // use context
  DashupContext$1 = ctx; // return actual component

  return DashupUIPageConnect;
});

var DashupUIContext$8 = /*#__PURE__*/React.createContext({}); // create page base

var DashupUIPage = function DashupUIPage() {
  var _struct$data;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // set config
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      importing = _useState4[0],
      setImporting = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      defaulted = _useState6[0],
      setDefaulted = _useState6[1]; // get color


  var getColor = function getColor() {
    // return light
    if (!props.page) return; // parent

    var color = props.page.get('color');
    var parent = !props.page.get('parent') || props.page.get('parent') === 'root' ? null : props.dashup.page(props.page.get('parent')); // while

    while (parent && !color) {
      color = parent.get('color');
      parent = !parent.get('parent') || parent.get('parent') === 'root' ? null : props.dashup.page(parent.get('parent'));
    } // return color


    return color;
  }; // get ctx


  var getCtx = function getCtx() {
    // return
    return {
      id: props.page && props.page.get('_id'),
      page: props.page,
      type: props.page && props.page.get('type'),
      icon: props.icon || props.page && props.page.get('icon') || 'pencil fa',
      color: props.color || getColor(),
      title: props.title || props.page && props.page.get('name'),
      guest: props.guest,
      noFit: props.noFit,
      dashup: props.dashup,
      loading: props.loading,
      centered: props.centered,
      available: props.available,
      // on logic
      onSearch: props.onSearch,
      // set methods
      setData: props.setData,
      setUser: props.setUser,
      setPage: props.setPage,
      // get logic
      getField: props.getField,
      getForms: props.getForms,
      getQuery: props.getQuery,
      getModels: props.getModels,
      getFields: props.getFields,
      getStruct: props.getStruct,
      getBlockStruct: props.getBlockStruct,
      getPageStruct: props.getPageStruct,
      getFieldStruct: props.getFieldStruct,
      getActionStruct: props.getActionStruct,
      getConnectStruct: props.getConnectStruct
    };
  }; // update ctx


  var updateCtx = function updateCtx() {
    // set ctx
    setCtx(getCtx());
  }; // create context


  var _useState7 = React.useState(getCtx()),
      _useState8 = _slicedToArray(_useState7, 2),
      ctx = _useState8[0],
      setCtx = _useState8[1]; // add listeners


  React.useEffect(function () {
    // check page
    if (ctx.id !== (props.page && props.page.get('_id'))) {
      // update ctx
      updateCtx();
    } // check page


    if (!props.page) return; // add listeners

    props.page.on('type', updateCtx);
    props.page.on('icon', updateCtx);
    props.page.on('name', updateCtx);
    props.page.on('color', updateCtx);
    props.dashup.on('active', updateCtx); // end effect

    return function () {
      // add listeners
      props.page.removeListener('type', updateCtx);
      props.page.removeListener('icon', updateCtx);
      props.page.removeListener('name', updateCtx);
      props.page.removeListener('color', updateCtx);
      props.dashup.removeListener('active', updateCtx);
    };
  }, [props.page && props.page.get('_id')]); // has all default values

  var missingRequire = function missingRequire() {
    // check required
    var _props$require = props.require,
        require = _props$require === void 0 ? [] : _props$require; // get require


    var filtered = require.filter(function (r) {
      return !props.page.get(r.key);
    }); // missing require


    return filtered.length ? filtered : false;
  }; // struct


  var struct = props.getPageStruct && props.getPageStruct(); // on import

  var onImport = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var _yield$eden$router$po, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // prevent default
              e.preventDefault();
              e.stopPropagation(); // loading

              setImporting(true); // load from url

              _context.next = 5;
              return eden.router.post("/api/".concat(props.dashup.get('_id'), "/page/").concat(props.page.get('_id'), "/default"), {
                "default": struct.data["default"],
                section: props.dashup.get('section') ? props.dashup.get('section').get('_id') : null
              });

            case 5:
              _yield$eden$router$po = _context.sent;
              data = _yield$eden$router$po.data;
              // replace info
              props.dashup.set('pages', data.pages); // exported

              setConfig(false);
              setDefaulted(false);
              setImporting(false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onImport(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // return page


  return /*#__PURE__*/React__default['default'].createElement(DashupUIContext$8.Provider, {
    value: ctx
  }, missingRequire() ? /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    sx: ctx.centered ? {
      height: '100vh'
    } : {}
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIPage.Menu, {
    onConfig: function onConfig(e) {
      return setConfig(true);
    }
  }), struct !== null && struct !== void 0 && (_struct$data = struct.data) !== null && _struct$data !== void 0 && _struct$data["default"] && !defaulted ? /*#__PURE__*/React__default['default'].createElement(DashupUIPage.Config, {
    show: !!(config || missingRequire()),
    onHide: function onHide(e) {
      return !setConfig(false) && setDefaulted(true);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body flex-0"
  }, struct.data["default"].title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-body flex-1"
  }, (struct.data["default"].pages || []).map(function (page, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: "page-".concat(i),
      className: "card card-permission mb-2"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "card-body d-flex align-items-center "
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "btn p-2 btn-sm btn-primary me-2"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fa fa-fw fa-".concat(page.icon || props.getPageStruct(page.type).icon)
    })), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "flex-1"
    }, props.getPageStruct(page.type).title)));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "card-footer d-flex border-top border-secondary py-3"
  }, /*#__PURE__*/React__default['default'].createElement(material.Button, {
    variant: "danger",
    onClick: function onClick(e) {
      return !setConfig(false) && setDefaulted(true);
    }
  }, "Close"), /*#__PURE__*/React__default['default'].createElement(material.Button, {
    variant: "success",
    className: "ms-auto",
    disabled: importing,
    onClick: function onClick(e) {
      return onImport(e);
    }
  }, importing ? 'Importing Default Pages...' : 'Import Default Pages'))) : /*#__PURE__*/React__default['default'].createElement(DashupUIPage.Config, {
    show: config,
    onHide: function onHide(e) {
      return setConfig(false);
    }
  }), missingRequire().map(function (_ref2) {
    var key = _ref2.key,
        label = _ref2.label;
        _ref2.variant;
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Alert, {
      severity: "info",
      onClick: function onClick() {
        return setConfig(true);
      },
      key: "missing-".concat(key),
      sx: {
        cursor: 'pointer'
      }
    }, "Click here to configure the ", /*#__PURE__*/React__default['default'].createElement("b", null, label), " for this page.");
  })) : props.loading ? /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }, /*#__PURE__*/React__default['default'].createElement(material.CircularProgress, null)) : /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }, props.children));
}; // set menu


DashupUIPage.Body = Body();
DashupUIPage.Menu = Menu$1(DashupUIContext$8);
DashupUIPage.Item = Item(DashupUIContext$8);
DashupUIPage.Share = Share(DashupUIContext$8);
DashupUIPage.Filter = Filter(DashupUIContext$8);
DashupUIPage.Config = Config$1(DashupUIContext$8);
DashupUIPage.Connect = Connect(DashupUIContext$8); // export default

var DashupUIIcon = function DashupUIIcon() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // split out
  var split = (props.icon || '').split(' '); // fixed

  var fixed = props.fixedWidth || split.includes('fa-fw'); // let size

  var size = props.type || 'fas';
  ['fat', 'fab', 'fas', 'fa', 'fad'].forEach(function (type) {
    // check includes
    if (split.includes(type)) size = type;
  }); // get icon

  var icon = (split.find(function (s) {
    return ![size, 'fa-fw'].includes(s);
  }) || props["default"] || 'question-circle').replace('fa-', ''); // return icon

  return /*#__PURE__*/React__default['default'].createElement(material.Icon, {
    sx: _objectSpread2(_objectSpread2({}, props.sx), {}, {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    fontSize: props.fontSize
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      fontSize: '65%'
    },
    className: "".concat(size, " fa-").concat(icon).concat(fixed ? ' fa-fw' : '').concat(props.spin ? ' fa-spin' : '')
  }));
}; // export default

var prism = createCommonjsModule(function (module) {
/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /\blang(?:uage)?-([\w-]+)\b/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element && !lang.test(element.className)) {
					element = element.parentElement;
				}
				if (element) {
					return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
				}
				return 'none';
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if (module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof commonjsGlobal !== 'undefined') {
	commonjsGlobal.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': /<!\[CDATA\[[\s\S]*?\]\]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		// eslint-disable-next-line regexp/no-dupe-characters-character-class
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

	/**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */
	function setLanguageClass(element, language) {
		var className = element.className;
		className = className.replace(lang, ' ') + ' language-' + language;
		element.className = className.replace(/\s+/g, ' ').trim();
	}


	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			setLanguageClass(code, language);
			setLanguageClass(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status < 400 && xhr.responseText) {
						// mark as loaded
						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

						// highlight code
						code.textContent = xhr.responseText;
						Prism.highlightElement(code);

					} else {
						// mark as failed
						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

						if (xhr.status >= 400) {
							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
						} else {
							code.textContent = FAILURE_EMPTY_MESSAGE;
						}
					}
				}
			};
			xhr.send(null);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());
});

const word = '[a-fA-F\\d:]';
const b = options => options && options.includeBoundaries ?
	`(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` :
	'';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6seg = '[a-fA-F\\d]{1,4}';
const v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip = options => options && options.exact ?
	v46Exact :
	new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');

ip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');
ip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');

var ipRegex = ip;

var index = [
	"aaa",
	"aarp",
	"abarth",
	"abb",
	"abbott",
	"abbvie",
	"abc",
	"able",
	"abogado",
	"abudhabi",
	"ac",
	"academy",
	"accenture",
	"accountant",
	"accountants",
	"aco",
	"actor",
	"ad",
	"adac",
	"ads",
	"adult",
	"ae",
	"aeg",
	"aero",
	"aetna",
	"af",
	"afamilycompany",
	"afl",
	"africa",
	"ag",
	"agakhan",
	"agency",
	"ai",
	"aig",
	"airbus",
	"airforce",
	"airtel",
	"akdn",
	"al",
	"alfaromeo",
	"alibaba",
	"alipay",
	"allfinanz",
	"allstate",
	"ally",
	"alsace",
	"alstom",
	"am",
	"amazon",
	"americanexpress",
	"americanfamily",
	"amex",
	"amfam",
	"amica",
	"amsterdam",
	"analytics",
	"android",
	"anquan",
	"anz",
	"ao",
	"aol",
	"apartments",
	"app",
	"apple",
	"aq",
	"aquarelle",
	"ar",
	"arab",
	"aramco",
	"archi",
	"army",
	"arpa",
	"art",
	"arte",
	"as",
	"asda",
	"asia",
	"associates",
	"at",
	"athleta",
	"attorney",
	"au",
	"auction",
	"audi",
	"audible",
	"audio",
	"auspost",
	"author",
	"auto",
	"autos",
	"avianca",
	"aw",
	"aws",
	"ax",
	"axa",
	"az",
	"azure",
	"ba",
	"baby",
	"baidu",
	"banamex",
	"bananarepublic",
	"band",
	"bank",
	"bar",
	"barcelona",
	"barclaycard",
	"barclays",
	"barefoot",
	"bargains",
	"baseball",
	"basketball",
	"bauhaus",
	"bayern",
	"bb",
	"bbc",
	"bbt",
	"bbva",
	"bcg",
	"bcn",
	"bd",
	"be",
	"beats",
	"beauty",
	"beer",
	"bentley",
	"berlin",
	"best",
	"bestbuy",
	"bet",
	"bf",
	"bg",
	"bh",
	"bharti",
	"bi",
	"bible",
	"bid",
	"bike",
	"bing",
	"bingo",
	"bio",
	"biz",
	"bj",
	"black",
	"blackfriday",
	"blockbuster",
	"blog",
	"bloomberg",
	"blue",
	"bm",
	"bms",
	"bmw",
	"bn",
	"bnpparibas",
	"bo",
	"boats",
	"boehringer",
	"bofa",
	"bom",
	"bond",
	"boo",
	"book",
	"booking",
	"bosch",
	"bostik",
	"boston",
	"bot",
	"boutique",
	"box",
	"br",
	"bradesco",
	"bridgestone",
	"broadway",
	"broker",
	"brother",
	"brussels",
	"bs",
	"bt",
	"budapest",
	"bugatti",
	"build",
	"builders",
	"business",
	"buy",
	"buzz",
	"bv",
	"bw",
	"by",
	"bz",
	"bzh",
	"ca",
	"cab",
	"cafe",
	"cal",
	"call",
	"calvinklein",
	"cam",
	"camera",
	"camp",
	"cancerresearch",
	"canon",
	"capetown",
	"capital",
	"capitalone",
	"car",
	"caravan",
	"cards",
	"care",
	"career",
	"careers",
	"cars",
	"casa",
	"case",
	"cash",
	"casino",
	"cat",
	"catering",
	"catholic",
	"cba",
	"cbn",
	"cbre",
	"cbs",
	"cc",
	"cd",
	"center",
	"ceo",
	"cern",
	"cf",
	"cfa",
	"cfd",
	"cg",
	"ch",
	"chanel",
	"channel",
	"charity",
	"chase",
	"chat",
	"cheap",
	"chintai",
	"christmas",
	"chrome",
	"church",
	"ci",
	"cipriani",
	"circle",
	"cisco",
	"citadel",
	"citi",
	"citic",
	"city",
	"cityeats",
	"ck",
	"cl",
	"claims",
	"cleaning",
	"click",
	"clinic",
	"clinique",
	"clothing",
	"cloud",
	"club",
	"clubmed",
	"cm",
	"cn",
	"co",
	"coach",
	"codes",
	"coffee",
	"college",
	"cologne",
	"com",
	"comcast",
	"commbank",
	"community",
	"company",
	"compare",
	"computer",
	"comsec",
	"condos",
	"construction",
	"consulting",
	"contact",
	"contractors",
	"cooking",
	"cookingchannel",
	"cool",
	"coop",
	"corsica",
	"country",
	"coupon",
	"coupons",
	"courses",
	"cpa",
	"cr",
	"credit",
	"creditcard",
	"creditunion",
	"cricket",
	"crown",
	"crs",
	"cruise",
	"cruises",
	"csc",
	"cu",
	"cuisinella",
	"cv",
	"cw",
	"cx",
	"cy",
	"cymru",
	"cyou",
	"cz",
	"dabur",
	"dad",
	"dance",
	"data",
	"date",
	"dating",
	"datsun",
	"day",
	"dclk",
	"dds",
	"de",
	"deal",
	"dealer",
	"deals",
	"degree",
	"delivery",
	"dell",
	"deloitte",
	"delta",
	"democrat",
	"dental",
	"dentist",
	"desi",
	"design",
	"dev",
	"dhl",
	"diamonds",
	"diet",
	"digital",
	"direct",
	"directory",
	"discount",
	"discover",
	"dish",
	"diy",
	"dj",
	"dk",
	"dm",
	"dnp",
	"do",
	"docs",
	"doctor",
	"dog",
	"domains",
	"dot",
	"download",
	"drive",
	"dtv",
	"dubai",
	"duck",
	"dunlop",
	"dupont",
	"durban",
	"dvag",
	"dvr",
	"dz",
	"earth",
	"eat",
	"ec",
	"eco",
	"edeka",
	"edu",
	"education",
	"ee",
	"eg",
	"email",
	"emerck",
	"energy",
	"engineer",
	"engineering",
	"enterprises",
	"epson",
	"equipment",
	"er",
	"ericsson",
	"erni",
	"es",
	"esq",
	"estate",
	"et",
	"etisalat",
	"eu",
	"eurovision",
	"eus",
	"events",
	"exchange",
	"expert",
	"exposed",
	"express",
	"extraspace",
	"fage",
	"fail",
	"fairwinds",
	"faith",
	"family",
	"fan",
	"fans",
	"farm",
	"farmers",
	"fashion",
	"fast",
	"fedex",
	"feedback",
	"ferrari",
	"ferrero",
	"fi",
	"fiat",
	"fidelity",
	"fido",
	"film",
	"final",
	"finance",
	"financial",
	"fire",
	"firestone",
	"firmdale",
	"fish",
	"fishing",
	"fit",
	"fitness",
	"fj",
	"fk",
	"flickr",
	"flights",
	"flir",
	"florist",
	"flowers",
	"fly",
	"fm",
	"fo",
	"foo",
	"food",
	"foodnetwork",
	"football",
	"ford",
	"forex",
	"forsale",
	"forum",
	"foundation",
	"fox",
	"fr",
	"free",
	"fresenius",
	"frl",
	"frogans",
	"frontdoor",
	"frontier",
	"ftr",
	"fujitsu",
	"fun",
	"fund",
	"furniture",
	"futbol",
	"fyi",
	"ga",
	"gal",
	"gallery",
	"gallo",
	"gallup",
	"game",
	"games",
	"gap",
	"garden",
	"gay",
	"gb",
	"gbiz",
	"gd",
	"gdn",
	"ge",
	"gea",
	"gent",
	"genting",
	"george",
	"gf",
	"gg",
	"ggee",
	"gh",
	"gi",
	"gift",
	"gifts",
	"gives",
	"giving",
	"gl",
	"glade",
	"glass",
	"gle",
	"global",
	"globo",
	"gm",
	"gmail",
	"gmbh",
	"gmo",
	"gmx",
	"gn",
	"godaddy",
	"gold",
	"goldpoint",
	"golf",
	"goo",
	"goodyear",
	"goog",
	"google",
	"gop",
	"got",
	"gov",
	"gp",
	"gq",
	"gr",
	"grainger",
	"graphics",
	"gratis",
	"green",
	"gripe",
	"grocery",
	"group",
	"gs",
	"gt",
	"gu",
	"guardian",
	"gucci",
	"guge",
	"guide",
	"guitars",
	"guru",
	"gw",
	"gy",
	"hair",
	"hamburg",
	"hangout",
	"haus",
	"hbo",
	"hdfc",
	"hdfcbank",
	"health",
	"healthcare",
	"help",
	"helsinki",
	"here",
	"hermes",
	"hgtv",
	"hiphop",
	"hisamitsu",
	"hitachi",
	"hiv",
	"hk",
	"hkt",
	"hm",
	"hn",
	"hockey",
	"holdings",
	"holiday",
	"homedepot",
	"homegoods",
	"homes",
	"homesense",
	"honda",
	"horse",
	"hospital",
	"host",
	"hosting",
	"hot",
	"hoteles",
	"hotels",
	"hotmail",
	"house",
	"how",
	"hr",
	"hsbc",
	"ht",
	"hu",
	"hughes",
	"hyatt",
	"hyundai",
	"ibm",
	"icbc",
	"ice",
	"icu",
	"id",
	"ie",
	"ieee",
	"ifm",
	"ikano",
	"il",
	"im",
	"imamat",
	"imdb",
	"immo",
	"immobilien",
	"in",
	"inc",
	"industries",
	"infiniti",
	"info",
	"ing",
	"ink",
	"institute",
	"insurance",
	"insure",
	"int",
	"international",
	"intuit",
	"investments",
	"io",
	"ipiranga",
	"iq",
	"ir",
	"irish",
	"is",
	"ismaili",
	"ist",
	"istanbul",
	"it",
	"itau",
	"itv",
	"jaguar",
	"java",
	"jcb",
	"je",
	"jeep",
	"jetzt",
	"jewelry",
	"jio",
	"jll",
	"jm",
	"jmp",
	"jnj",
	"jo",
	"jobs",
	"joburg",
	"jot",
	"joy",
	"jp",
	"jpmorgan",
	"jprs",
	"juegos",
	"juniper",
	"kaufen",
	"kddi",
	"ke",
	"kerryhotels",
	"kerrylogistics",
	"kerryproperties",
	"kfh",
	"kg",
	"kh",
	"ki",
	"kia",
	"kim",
	"kinder",
	"kindle",
	"kitchen",
	"kiwi",
	"km",
	"kn",
	"koeln",
	"komatsu",
	"kosher",
	"kp",
	"kpmg",
	"kpn",
	"kr",
	"krd",
	"kred",
	"kuokgroup",
	"kw",
	"ky",
	"kyoto",
	"kz",
	"la",
	"lacaixa",
	"lamborghini",
	"lamer",
	"lancaster",
	"lancia",
	"land",
	"landrover",
	"lanxess",
	"lasalle",
	"lat",
	"latino",
	"latrobe",
	"law",
	"lawyer",
	"lb",
	"lc",
	"lds",
	"lease",
	"leclerc",
	"lefrak",
	"legal",
	"lego",
	"lexus",
	"lgbt",
	"li",
	"lidl",
	"life",
	"lifeinsurance",
	"lifestyle",
	"lighting",
	"like",
	"lilly",
	"limited",
	"limo",
	"lincoln",
	"linde",
	"link",
	"lipsy",
	"live",
	"living",
	"lixil",
	"lk",
	"llc",
	"llp",
	"loan",
	"loans",
	"locker",
	"locus",
	"loft",
	"lol",
	"london",
	"lotte",
	"lotto",
	"love",
	"lpl",
	"lplfinancial",
	"lr",
	"ls",
	"lt",
	"ltd",
	"ltda",
	"lu",
	"lundbeck",
	"luxe",
	"luxury",
	"lv",
	"ly",
	"ma",
	"macys",
	"madrid",
	"maif",
	"maison",
	"makeup",
	"man",
	"management",
	"mango",
	"map",
	"market",
	"marketing",
	"markets",
	"marriott",
	"marshalls",
	"maserati",
	"mattel",
	"mba",
	"mc",
	"mckinsey",
	"md",
	"me",
	"med",
	"media",
	"meet",
	"melbourne",
	"meme",
	"memorial",
	"men",
	"menu",
	"merckmsd",
	"mg",
	"mh",
	"miami",
	"microsoft",
	"mil",
	"mini",
	"mint",
	"mit",
	"mitsubishi",
	"mk",
	"ml",
	"mlb",
	"mls",
	"mm",
	"mma",
	"mn",
	"mo",
	"mobi",
	"mobile",
	"moda",
	"moe",
	"moi",
	"mom",
	"monash",
	"money",
	"monster",
	"mormon",
	"mortgage",
	"moscow",
	"moto",
	"motorcycles",
	"mov",
	"movie",
	"mp",
	"mq",
	"mr",
	"ms",
	"msd",
	"mt",
	"mtn",
	"mtr",
	"mu",
	"museum",
	"mutual",
	"mv",
	"mw",
	"mx",
	"my",
	"mz",
	"na",
	"nab",
	"nagoya",
	"name",
	"natura",
	"navy",
	"nba",
	"nc",
	"ne",
	"nec",
	"net",
	"netbank",
	"netflix",
	"network",
	"neustar",
	"new",
	"news",
	"next",
	"nextdirect",
	"nexus",
	"nf",
	"nfl",
	"ng",
	"ngo",
	"nhk",
	"ni",
	"nico",
	"nike",
	"nikon",
	"ninja",
	"nissan",
	"nissay",
	"nl",
	"no",
	"nokia",
	"northwesternmutual",
	"norton",
	"now",
	"nowruz",
	"nowtv",
	"np",
	"nr",
	"nra",
	"nrw",
	"ntt",
	"nu",
	"nyc",
	"nz",
	"obi",
	"observer",
	"off",
	"office",
	"okinawa",
	"olayan",
	"olayangroup",
	"oldnavy",
	"ollo",
	"om",
	"omega",
	"one",
	"ong",
	"onl",
	"online",
	"ooo",
	"open",
	"oracle",
	"orange",
	"org",
	"organic",
	"origins",
	"osaka",
	"otsuka",
	"ott",
	"ovh",
	"pa",
	"page",
	"panasonic",
	"paris",
	"pars",
	"partners",
	"parts",
	"party",
	"passagens",
	"pay",
	"pccw",
	"pe",
	"pet",
	"pf",
	"pfizer",
	"pg",
	"ph",
	"pharmacy",
	"phd",
	"philips",
	"phone",
	"photo",
	"photography",
	"photos",
	"physio",
	"pics",
	"pictet",
	"pictures",
	"pid",
	"pin",
	"ping",
	"pink",
	"pioneer",
	"pizza",
	"pk",
	"pl",
	"place",
	"play",
	"playstation",
	"plumbing",
	"plus",
	"pm",
	"pn",
	"pnc",
	"pohl",
	"poker",
	"politie",
	"porn",
	"post",
	"pr",
	"pramerica",
	"praxi",
	"press",
	"prime",
	"pro",
	"prod",
	"productions",
	"prof",
	"progressive",
	"promo",
	"properties",
	"property",
	"protection",
	"pru",
	"prudential",
	"ps",
	"pt",
	"pub",
	"pw",
	"pwc",
	"py",
	"qa",
	"qpon",
	"quebec",
	"quest",
	"qvc",
	"racing",
	"radio",
	"raid",
	"re",
	"read",
	"realestate",
	"realtor",
	"realty",
	"recipes",
	"red",
	"redstone",
	"redumbrella",
	"rehab",
	"reise",
	"reisen",
	"reit",
	"reliance",
	"ren",
	"rent",
	"rentals",
	"repair",
	"report",
	"republican",
	"rest",
	"restaurant",
	"review",
	"reviews",
	"rexroth",
	"rich",
	"richardli",
	"ricoh",
	"ril",
	"rio",
	"rip",
	"rmit",
	"ro",
	"rocher",
	"rocks",
	"rodeo",
	"rogers",
	"room",
	"rs",
	"rsvp",
	"ru",
	"rugby",
	"ruhr",
	"run",
	"rw",
	"rwe",
	"ryukyu",
	"sa",
	"saarland",
	"safe",
	"safety",
	"sakura",
	"sale",
	"salon",
	"samsclub",
	"samsung",
	"sandvik",
	"sandvikcoromant",
	"sanofi",
	"sap",
	"sarl",
	"sas",
	"save",
	"saxo",
	"sb",
	"sbi",
	"sbs",
	"sc",
	"sca",
	"scb",
	"schaeffler",
	"schmidt",
	"scholarships",
	"school",
	"schule",
	"schwarz",
	"science",
	"scjohnson",
	"scot",
	"sd",
	"se",
	"search",
	"seat",
	"secure",
	"security",
	"seek",
	"select",
	"sener",
	"services",
	"ses",
	"seven",
	"sew",
	"sex",
	"sexy",
	"sfr",
	"sg",
	"sh",
	"shangrila",
	"sharp",
	"shaw",
	"shell",
	"shia",
	"shiksha",
	"shoes",
	"shop",
	"shopping",
	"shouji",
	"show",
	"showtime",
	"si",
	"silk",
	"sina",
	"singles",
	"site",
	"sj",
	"sk",
	"ski",
	"skin",
	"sky",
	"skype",
	"sl",
	"sling",
	"sm",
	"smart",
	"smile",
	"sn",
	"sncf",
	"so",
	"soccer",
	"social",
	"softbank",
	"software",
	"sohu",
	"solar",
	"solutions",
	"song",
	"sony",
	"soy",
	"spa",
	"space",
	"sport",
	"spot",
	"sr",
	"srl",
	"ss",
	"st",
	"stada",
	"staples",
	"star",
	"statebank",
	"statefarm",
	"stc",
	"stcgroup",
	"stockholm",
	"storage",
	"store",
	"stream",
	"studio",
	"study",
	"style",
	"su",
	"sucks",
	"supplies",
	"supply",
	"support",
	"surf",
	"surgery",
	"suzuki",
	"sv",
	"swatch",
	"swiftcover",
	"swiss",
	"sx",
	"sy",
	"sydney",
	"systems",
	"sz",
	"tab",
	"taipei",
	"talk",
	"taobao",
	"target",
	"tatamotors",
	"tatar",
	"tattoo",
	"tax",
	"taxi",
	"tc",
	"tci",
	"td",
	"tdk",
	"team",
	"tech",
	"technology",
	"tel",
	"temasek",
	"tennis",
	"teva",
	"tf",
	"tg",
	"th",
	"thd",
	"theater",
	"theatre",
	"tiaa",
	"tickets",
	"tienda",
	"tiffany",
	"tips",
	"tires",
	"tirol",
	"tj",
	"tjmaxx",
	"tjx",
	"tk",
	"tkmaxx",
	"tl",
	"tm",
	"tmall",
	"tn",
	"to",
	"today",
	"tokyo",
	"tools",
	"top",
	"toray",
	"toshiba",
	"total",
	"tours",
	"town",
	"toyota",
	"toys",
	"tr",
	"trade",
	"trading",
	"training",
	"travel",
	"travelchannel",
	"travelers",
	"travelersinsurance",
	"trust",
	"trv",
	"tt",
	"tube",
	"tui",
	"tunes",
	"tushu",
	"tv",
	"tvs",
	"tw",
	"tz",
	"ua",
	"ubank",
	"ubs",
	"ug",
	"uk",
	"unicom",
	"university",
	"uno",
	"uol",
	"ups",
	"us",
	"uy",
	"uz",
	"va",
	"vacations",
	"vana",
	"vanguard",
	"vc",
	"ve",
	"vegas",
	"ventures",
	"verisign",
	"vermögensberater",
	"vermögensberatung",
	"versicherung",
	"vet",
	"vg",
	"vi",
	"viajes",
	"video",
	"vig",
	"viking",
	"villas",
	"vin",
	"vip",
	"virgin",
	"visa",
	"vision",
	"viva",
	"vivo",
	"vlaanderen",
	"vn",
	"vodka",
	"volkswagen",
	"volvo",
	"vote",
	"voting",
	"voto",
	"voyage",
	"vu",
	"vuelos",
	"wales",
	"walmart",
	"walter",
	"wang",
	"wanggou",
	"watch",
	"watches",
	"weather",
	"weatherchannel",
	"webcam",
	"weber",
	"website",
	"wed",
	"wedding",
	"weibo",
	"weir",
	"wf",
	"whoswho",
	"wien",
	"wiki",
	"williamhill",
	"win",
	"windows",
	"wine",
	"winners",
	"wme",
	"wolterskluwer",
	"woodside",
	"work",
	"works",
	"world",
	"wow",
	"ws",
	"wtc",
	"wtf",
	"xbox",
	"xerox",
	"xfinity",
	"xihuan",
	"xin",
	"xxx",
	"xyz",
	"yachts",
	"yahoo",
	"yamaxun",
	"yandex",
	"ye",
	"yodobashi",
	"yoga",
	"yokohama",
	"you",
	"youtube",
	"yt",
	"yun",
	"za",
	"zappos",
	"zara",
	"zero",
	"zip",
	"zm",
	"zone",
	"zuerich",
	"zw",
	"ελ",
	"ευ",
	"бг",
	"бел",
	"дети",
	"ею",
	"католик",
	"ком",
	"мкд",
	"мон",
	"москва",
	"онлайн",
	"орг",
	"рус",
	"рф",
	"сайт",
	"срб",
	"укр",
	"қаз",
	"հայ",
	"ישראל",
	"קום",
	"ابوظبي",
	"اتصالات",
	"ارامكو",
	"الاردن",
	"البحرين",
	"الجزائر",
	"السعودية",
	"العليان",
	"المغرب",
	"امارات",
	"ایران",
	"بارت",
	"بازار",
	"بيتك",
	"بھارت",
	"تونس",
	"سودان",
	"سورية",
	"شبكة",
	"عراق",
	"عرب",
	"عمان",
	"فلسطين",
	"قطر",
	"كاثوليك",
	"كوم",
	"مصر",
	"مليسيا",
	"موريتانيا",
	"موقع",
	"همراه",
	"پاکستان",
	"ڀارت",
	"कॉम",
	"नेट",
	"भारत",
	"भारतम्",
	"भारोत",
	"संगठन",
	"বাংলা",
	"ভারত",
	"ভাৰত",
	"ਭਾਰਤ",
	"ભારત",
	"ଭାରତ",
	"இந்தியா",
	"இலங்கை",
	"சிங்கப்பூர்",
	"భారత్",
	"ಭಾರತ",
	"ഭാരതം",
	"ලංකා",
	"คอม",
	"ไทย",
	"ລາວ",
	"გე",
	"みんな",
	"アマゾン",
	"クラウド",
	"グーグル",
	"コム",
	"ストア",
	"セール",
	"ファッション",
	"ポイント",
	"世界",
	"中信",
	"中国",
	"中國",
	"中文网",
	"亚马逊",
	"企业",
	"佛山",
	"信息",
	"健康",
	"八卦",
	"公司",
	"公益",
	"台湾",
	"台灣",
	"商城",
	"商店",
	"商标",
	"嘉里",
	"嘉里大酒店",
	"在线",
	"大众汽车",
	"大拿",
	"天主教",
	"娱乐",
	"家電",
	"广东",
	"微博",
	"慈善",
	"我爱你",
	"手机",
	"招聘",
	"政务",
	"政府",
	"新加坡",
	"新闻",
	"时尚",
	"書籍",
	"机构",
	"淡马锡",
	"游戏",
	"澳門",
	"点看",
	"移动",
	"组织机构",
	"网址",
	"网店",
	"网站",
	"网络",
	"联通",
	"诺基亚",
	"谷歌",
	"购物",
	"通販",
	"集团",
	"電訊盈科",
	"飞利浦",
	"食品",
	"餐厅",
	"香格里拉",
	"香港",
	"닷넷",
	"닷컴",
	"삼성",
	"한국"
];

var tlds$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index
});

var tlds = getCjsExportFromNamespace(tlds$1);

var urlRegex = options => {
	options = {
		strict: true,
		...options
	};

	const protocol = `(?:(?:[a-z]+:)?//)${options.strict ? '' : '?'}`;
	const auth = '(?:\\S+(?::\\S*)?@)?';
	const ip = ipRegex.v4().source;
	const host = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)';
	const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
	const tld = `(?:\\.${options.strict ? '(?:[a-z\\u00a1-\\uffff]{2,})' : `(?:${tlds.sort((a, b) => b.length - a.length).join('|')})`})\\.?`;
	const port = '(?::\\d{2,5})?';
	const path = '(?:[/?#][^\\s"]*)?';
	const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`;

	return options.exact ? new RegExp(`(?:^${regex}$)`, 'i') : new RegExp(regex, 'ig');
};

var isObj = value => {
	const type = typeof value;
	return value !== null && (type === 'object' || type === 'function');
};

const disallowedKeys = new Set([
	'__proto__',
	'prototype',
	'constructor'
]);

const isValidPath = pathSegments => !pathSegments.some(segment => disallowedKeys.has(segment));

function getPathSegments(path) {
	const pathArray = path.split('.');
	const parts = [];

	for (let i = 0; i < pathArray.length; i++) {
		let p = pathArray[i];

		while (p[p.length - 1] === '\\' && pathArray[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArray[++i];
		}

		parts.push(p);
	}

	if (!isValidPath(parts)) {
		return [];
	}

	return parts;
}

var dotProp = {
	get(object, path, value) {
		if (!isObj(object) || typeof path !== 'string') {
			return value === undefined ? object : value;
		}

		const pathArray = getPathSegments(path);
		if (pathArray.length === 0) {
			return;
		}

		for (let i = 0; i < pathArray.length; i++) {
			object = object[pathArray[i]];

			if (object === undefined || object === null) {
				// `object` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `object` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArray.length - 1) {
					return value;
				}

				break;
			}
		}

		return object === undefined ? value : object;
	},

	set(object, path, value) {
		if (!isObj(object) || typeof path !== 'string') {
			return object;
		}

		const root = object;
		const pathArray = getPathSegments(path);

		for (let i = 0; i < pathArray.length; i++) {
			const p = pathArray[i];

			if (!isObj(object[p])) {
				object[p] = {};
			}

			if (i === pathArray.length - 1) {
				object[p] = value;
			}

			object = object[p];
		}

		return root;
	},

	delete(object, path) {
		if (!isObj(object) || typeof path !== 'string') {
			return false;
		}

		const pathArray = getPathSegments(path);

		for (let i = 0; i < pathArray.length; i++) {
			const p = pathArray[i];

			if (i === pathArray.length - 1) {
				delete object[p];
				return true;
			}

			object = object[p];

			if (!isObj(object)) {
				return false;
			}
		}
	},

	has(object, path) {
		if (!isObj(object) || typeof path !== 'string') {
			return false;
		}

		const pathArray = getPathSegments(path);
		if (pathArray.length === 0) {
			return false;
		}

		// eslint-disable-next-line unicorn/no-for-loop
		for (let i = 0; i < pathArray.length; i++) {
			if (isObj(object)) {
				if (!(pathArray[i] in object)) {
					return false;
				}

				object = object[pathArray[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};

var DashupUIContext$7 = null; // create dashup grid body

var DashupUIChatEmbed = function DashupUIChatEmbed() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // use state
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1]; // get duration


  var getDuration = function getDuration(time) {
    // return duration
    var duration = moment__default['default'].duration(time * 100); // humanize

    return duration.humanize();
  }; // render body


  var renderBody = function renderBody(data) {
    var _props$embed$data, _props$embed$data2, _props$embed$data3, _props$embed$data4, _props$embed$data5, _props$embed$data6, _props$embed$data7, _props$embed$data8, _props$embed$data8$fa, _props$embed$data9, _props$embed$data10, _props$embed$data10$a, _props$embed$data11, _props$embed$data12, _props$embed$data13, _props$embed$data14, _props$embed$data15, _props$embed$data16, _props$embed$data17;

    // return jsx
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "row row-eq-height embed-".concat(props.embed.type)
    }, !props.embed.loading && !!dotProp.get(props.embed, 'data.images.0.url') && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "d-flex align-items-center ".concat(!props.message || !show ? 'col-md-4' : 'col-12 mb-2')
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "embed text-center w-100"
    }, show && !!((_props$embed$data = props.embed.data) !== null && _props$embed$data !== void 0 && _props$embed$data.html) ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ratio ratio-16x9 rounded",
      dangerouslySetInnerHTML: {
        __html: props.embed.data.html
      }
    }) : /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ratio ratio-16x9"
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: (_props$embed$data2 = props.embed.data) === null || _props$embed$data2 === void 0 ? void 0 : _props$embed$data2.url,
      target: "_blank",
      onClick: function onClick(e) {
        return !setShow(true) && e.preventDefault();
      },
      className: "rounded",
      style: {
        backgroundImage: "url(".concat(dotProp.get(props.embed, 'data.images.0.url'))
      }
    })))), !!((_props$embed$data3 = props.embed.data) !== null && _props$embed$data3 !== void 0 && _props$embed$data3.title) && !!((_props$embed$data4 = props.embed.data) !== null && _props$embed$data4 !== void 0 && _props$embed$data4.provider) && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "d-flex align-items-center ".concat(dotProp.get(props.embed, 'data.images.0.url') ? 'col-md-8' : 'col')
    }, props.embed.loading ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "w-100 embed-title"
    }, /*#__PURE__*/React__default['default'].createElement("b", null, "Loading...")) : /*#__PURE__*/React__default['default'].createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "embed-title text-overflow"
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      href: (_props$embed$data5 = props.embed.data) === null || _props$embed$data5 === void 0 ? void 0 : _props$embed$data5.url,
      target: "_blank"
    }, /*#__PURE__*/React__default['default'].createElement("b", {
      className: "d-block"
    }, (_props$embed$data6 = props.embed.data) === null || _props$embed$data6 === void 0 ? void 0 : _props$embed$data6.title))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "embed-meta d-flex align-items-center"
    }, !!((_props$embed$data7 = props.embed.data) !== null && _props$embed$data7 !== void 0 && _props$embed$data7.provider) && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !!((_props$embed$data8 = props.embed.data) !== null && _props$embed$data8 !== void 0 && (_props$embed$data8$fa = _props$embed$data8.favicon) !== null && _props$embed$data8$fa !== void 0 && _props$embed$data8$fa.url) && /*#__PURE__*/React__default['default'].createElement("a", {
      href: props.embed.data.provider.url,
      target: "_blank",
      title: props.embed.data.provider.name
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      className: "icon me-2",
      src: props.embed.data.favicon.url
    })), /*#__PURE__*/React__default['default'].createElement("a", {
      href: props.embed.data.provider.url,
      target: "_blank",
      title: props.embed.data.provider.name
    }, props.embed.data.provider.name)), !!((_props$embed$data9 = props.embed.data) !== null && _props$embed$data9 !== void 0 && _props$embed$data9.provider) && !!((_props$embed$data10 = props.embed.data) !== null && _props$embed$data10 !== void 0 && (_props$embed$data10$a = _props$embed$data10.author) !== null && _props$embed$data10$a !== void 0 && _props$embed$data10$a.name) && /*#__PURE__*/React__default['default'].createElement("span", {
      className: "sep mx-1"
    }, "|"), !!((_props$embed$data11 = props.embed.data) !== null && _props$embed$data11 !== void 0 && _props$embed$data11.author) && /*#__PURE__*/React__default['default'].createElement("a", {
      href: props.embed.data.author.url,
      target: "_blank"
    }, props.embed.data.author.name), !!((_props$embed$data12 = props.embed.data) !== null && _props$embed$data12 !== void 0 && _props$embed$data12.duration) && /*#__PURE__*/React__default['default'].createElement("span", {
      className: "ms-2 text-muted"
    }, getDuration(props.embed.data.duration))))), props.embed.type === 'note' && /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fa fa-fw fa-sticky-note me-2"
    }), " Note"), /*#__PURE__*/React__default['default'].createElement("pre", {
      className: "m-0"
    }, (_props$embed$data13 = props.embed.data) === null || _props$embed$data13 === void 0 ? void 0 : _props$embed$data13.body)), props.embed.type === 'sms' && /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fa fa-fw fa-sms me-2"
    }), " ", (_props$embed$data14 = props.embed.data) === null || _props$embed$data14 === void 0 ? void 0 : _props$embed$data14.title), /*#__PURE__*/React__default['default'].createElement("pre", {
      className: "m-0"
    }, (_props$embed$data15 = props.embed.data) === null || _props$embed$data15 === void 0 ? void 0 : _props$embed$data15.body)), props.embed.type === 'email' && /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "fa fa-fw fa-envelope-open-text me-2"
    }), " ", (_props$embed$data16 = props.embed.data) === null || _props$embed$data16 === void 0 ? void 0 : _props$embed$data16.title), /*#__PURE__*/React__default['default'].createElement("pre", {
      className: "m-0"
    }, (_props$embed$data17 = props.embed.data) === null || _props$embed$data17 === void 0 ? void 0 : _props$embed$data17.body)));
  }; // return jsx


  return props.noChat ? renderBody() : /*#__PURE__*/React__default['default'].createElement(DashupUIContext$7.Consumer, null, function (data) {
    // render body
    return renderBody();
  });
}; // export default page menu


var Embed$2 = (function (ctx) {
  // use context
  DashupUIContext$7 = ctx; // return actual component

  return DashupUIChatEmbed;
});

prism.languages.markdown = prism.languages.extend("markup", {}), prism.languages.insertBefore("markdown", "prolog", {
  blockquote: {
    pattern: /^>(?:[\t ]*>)*/m,
    alias: "punctuation"
  },
  code: [{
    pattern: /^(?: {4}|\t).+/m,
    alias: "keyword"
  }, {
    pattern: /``.+?``|`[^`\n]+`/,
    alias: "keyword"
  }],
  title: [{
    pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
    alias: "important",
    inside: {
      punctuation: /==+$|--+$/
    }
  }, {
    pattern: /(^\s*)#+.+/m,
    lookbehind: !0,
    alias: "important",
    inside: {
      punctuation: /^#+|#+$/
    }
  }],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: "punctuation"
  },
  "url-reference": {
    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: {
        pattern: /^(!?\[)[^\]]+/,
        lookbehind: !0
      },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/
    },
    alias: "url"
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: {
      punctuation: /^\*\*|^__|\*\*$|__$/
    }
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: {
      punctuation: /^[*_]|[*_]$/
    }
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: {
        pattern: /(!?\[)[^\]]+(?=\]$)/,
        lookbehind: !0
      },
      string: {
        pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
      }
    }
  }
}), prism.languages.markdown.bold.inside.url = prism.util.clone(prism.languages.markdown.url), prism.languages.markdown.italic.inside.url = prism.util.clone(prism.languages.markdown.url), prism.languages.markdown.bold.inside.italic = prism.util.clone(prism.languages.markdown.italic), prism.languages.markdown.italic.inside.bold = prism.util.clone(prism.languages.markdown.bold); // prettier-ignore

var Embed$1 = null;
var trigger = null;
var DashupUIContext$6 = null; // create withmentions hook

var withMentions = function withMentions(editor) {
  // is inline
  var isInline = editor.isInline,
      isVoid = editor.isVoid; // add is inline

  editor.isInline = function (element) {
    return element.type === 'mention' ? true : isInline(element);
  }; // add is void


  editor.isVoid = function (element) {
    return element.type === 'mention' ? true : isVoid(element);
  }; // return editor


  return editor;
}; // leaf


var Leaf = function Leaf(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      leaf = _ref.leaf;
  return /*#__PURE__*/React__default['default'].createElement("span", _extends({}, attributes, {
    style: {
      fontStyle: leaf.italic ? 'italic' : null,
      fontWeight: leaf.bold ? 'bold' : null,
      textDecoration: leaf.underlined ? 'underline' : ''
    },
    className: leaf.code ? 'pre' : null
  }), children);
}; // create mention


var Mention = function Mention(_ref2) {
  var _element$mention$colo, _element$mention$colo2, _element$mention$colo3;

  var attributes = _ref2.attributes,
      children = _ref2.children,
      element = _ref2.element;
  // return jsx
  return /*#__PURE__*/React__default['default'].createElement("span", _extends({}, attributes, {
    className: "badge badge-tag".concat(element.mention.color ? '' : ' bg-light text-dark'),
    contentEditable: false,
    style: {
      color: (_element$mention$colo = element.mention.color) !== null && _element$mention$colo !== void 0 && _element$mention$colo.hex ? (_element$mention$colo2 = element.mention.color) !== null && _element$mention$colo2 !== void 0 && _element$mention$colo2.drk ? '#fff' : '#000' : null,
      userSelect: 'none',
      background: (_element$mention$colo3 = element.mention.color) === null || _element$mention$colo3 === void 0 ? void 0 : _element$mention$colo3.hex
    }
  }), element.trigger === '@' ? /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-at me-1"
  }) : element.mention.icon ? /*#__PURE__*/React__default['default'].createElement("i", {
    className: "fa fa-".concat(element.mention.icon, " me-1")
  }) : element.trigger, element.mention.display, children);
}; // create element


var Element$1 = function Element() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return type
  return props.element.type === 'mention' ? /*#__PURE__*/React__default['default'].createElement(Mention, props) : /*#__PURE__*/React__default['default'].createElement("p", props.attributes, props.children);
}; // create embeds


var allEmbeds = {}; // chat input

var DashupUIChatInput = function DashupUIChatInput() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // editor
  var editor = React.useMemo(function () {
    return withMentions(slateReact.withReact(slate.createEditor()));
  }, []); // empty state

  var emptyState = [{
    type: 'paragraph',
    children: [{
      text: ''
    }]
  }]; // all embeds

  var _useState = React.useState(shortid()),
      _useState2 = _slicedToArray(_useState, 1),
      embedId = _useState2[0]; // set all embeds


  if (!allEmbeds[embedId]) allEmbeds[embedId] = []; // set embeds

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      _long = _useState4[0];
      _useState4[1];

  var _useState5 = React.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      index = _useState6[0],
      setIndex = _useState6[1];

  var _useState7 = React.useState(emptyState),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = React.useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      items = _useState10[0],
      setItems = _useState10[1];

  var _useState11 = React.useState(allEmbeds[embedId]),
      _useState12 = _slicedToArray(_useState11, 2),
      embeds = _useState12[0],
      setEmbeds = _useState12[1];

  var _useState13 = React.useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      mention = _useState14[0],
      setMention = _useState14[1];

  var _useState15 = React.useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      posting = _useState16[0],
      setPosting = _useState16[1];

  var _useState17 = React.useState(null),
      _useState18 = _slicedToArray(_useState17, 2),
      mentionRef = _useState18[0],
      setMentionRef = _useState18[1]; // render methods


  var renderLeaf = React.useCallback(function (props) {
    return /*#__PURE__*/React__default['default'].createElement(Leaf, props);
  }, []);
  var renderElement = React.useCallback(function (props) {
    return /*#__PURE__*/React__default['default'].createElement(Element$1, props);
  }, []); // decorate

  var decorate = React.useCallback(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        node = _ref4[0],
        path = _ref4[1];

    // ranges
    var ranges = []; // is text

    if (!slate.Text.isText(node)) {
      return ranges;
    } // get length


    var getLength = function getLength(token) {
      if (typeof token === 'string') {
        return token.length;
      } else if (typeof token.content === 'string') {
        return token.content.length;
      } else {
        return token.content.reduce(function (l, t) {
          return l + getLength(t);
        }, 0);
      }
    }; // tokens


    var tokens = prism.tokenize(node.text, prism.languages.markdown); // start

    var start = 0; // loop tokens

    var _iterator = _createForOfIteratorHelper(tokens),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var token = _step.value;
        var length = getLength(token);
        var end = start + length;

        if (typeof token !== 'string') {
          var _ranges$push;

          ranges.push((_ranges$push = {}, _defineProperty(_ranges$push, token.type, true), _defineProperty(_ranges$push, "focus", {
            path: path,
            offset: end
          }), _defineProperty(_ranges$push, "anchor", {
            path: path,
            offset: start
          }), _ranges$push));
        } // end


        start = end;
      } // return ranges

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return ranges;
  }, []); // const toText

  var toText = function toText(children) {
    // map children
    return children.map(function (child) {
      // if text
      if (child.text) return child.text;
      if (child.mention) return "".concat(child.trigger, "[").concat(child.mention.display, "](").concat(child.mention.id, ")"); // if children

      if (child.children) return toText(child.children);
    }).join('');
  }; // on send


  var onSend = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, data) {
      var text, newMessage, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // prevent default
              e.preventDefault();
              e.stopPropagation(); // value to string

              text = toText(value || []); // validate

              if (!(posting || _long)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              // set posting
              setPosting(true); // message

              newMessage = {
                by: data.by,
                temp: shortid(),
                embeds: [],
                subject: data.thread,
                message: text
              };
              allEmbeds[embedId] = [];
              setEmbeds(_toConsumableArray(allEmbeds[embedId])); // set embeds

              slate.Transforms.select(editor, slate.Editor.start(editor, [])); // set value

              setValue(emptyState); // on send

              if (!props.onSend) {
                _context.next = 16;
                break;
              }

              _context.next = 14;
              return props.onSend(e, newMessage);

            case 14:
              _context.next = 21;
              break;

            case 16:
              // emit message
              data.onMessage(newMessage); // call join

              _context.next = 19;
              return data.dashup.action({
                type: 'page',
                struct: 'channel'
              }, 'send', newMessage);

            case 19:
              message = _context.sent;

              // check if success
              if (!message && typeof eden !== 'undefined') {
                // alert error message
                eden.alert.error('Failed to send');
              }

            case 21:
              // update
              setPosting(false);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSend(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }(); // load embed


  var loadEmbed = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(d, url) {
      var data, embed;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return d.dashup.action({
                type: 'page',
                struct: 'channel'
              }, 'embed', url);

            case 2:
              data = _context2.sent;

              if (!(!data || !data.type)) {
                _context2.next = 6;
                break;
              }

              // disable embed
              allEmbeds[embedId] = allEmbeds[embedId].filter(function (e) {
                return e.url !== url;
              }); // return update

              return _context2.abrupt("return", setEmbeds(_toConsumableArray(allEmbeds[embedId])));

            case 6:
              // get embed
              embed = allEmbeds[embedId].find(function (e) {
                return e.url === url;
              }); // check embed

              if (embed) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return");

            case 9:
              // set data
              embed.data = data;
              embed.loading = false; // set embeds

              setEmbeds(_toConsumableArray(allEmbeds[embedId]));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function loadEmbed(_x3, _x4) {
      return _ref6.apply(this, arguments);
    };
  }(); // on key down


  var _onKeyDown = function onKeyDown(e, data) {
    // check mention ref
    if (mention && mentionRef) {
      // check mention ref
      if (e.key === 'ArrowUp') {
        // prevent default
        e.preventDefault(); // set index

        setIndex(index === 0 ? 0 : index - 1);
      } else if (e.key === 'ArrowDown') {
        // prevent default
        e.preventDefault(); // set index

        setIndex(index >= items.length - 1 ? index : index + 1);
      } else if (['Tab', 'Enter'].includes(e.key)) {
        // prevent default
        e.preventDefault(); // set index

        onMention(items[index]);
      } else if (e.key === 'Escape') {
        setMention(null);
      }
    } else {
      // check key code
      if (e.keyCode !== 13 || e.shiftKey) return true; // prevent default

      e.preventDefault(); // do on comment

      return onSend(e, data);
    }
  }; // on keyup


  var _onChange = function onChange(data, value) {
    // set value
    setValue(value); // check sending

    if (posting) return; // try/catch

    try {
      // get selection
      var selection = editor.selection; // check selection

      if (selection && slate.Range.isCollapsed(selection)) {
        // get out
        var _Range$edges = slate.Range.edges(selection),
            _Range$edges2 = _slicedToArray(_Range$edges, 1),
            start = _Range$edges2[0];

        var wordBefore = slate.Editor.before(editor, start, {
          unit: 'word'
        });
        var before = wordBefore && slate.Editor.before(editor, wordBefore);
        var beforeRange = before && slate.Editor.range(editor, before, start);
        var beforeText = beforeRange && slate.Editor.string(editor, beforeRange); // check before text

        if (beforeText) {
          var _eden$chat;

          // find match in text
          trigger = (typeof eden === 'undefined' ? [] : ((_eden$chat = eden.chat) === null || _eden$chat === void 0 ? void 0 : _eden$chat.triggers()) || []).find(function (m) {
            // find trigger
            return beforeText.split('')[0] === m.trigger;
          }); // check found

          if (trigger) {
            // search
            trigger.search(beforeText.split('').slice(1).join('')).then(function (items) {
              // set items
              setItems(_toConsumableArray(items).reverse());
              setIndex(items.length - 1);
            }); // mention

            return setMention(beforeRange);
          }
        }
      } // unset


      setMention(null);
    } catch (e) {} // load embeds


    var entries = toText(value).match(urlRegex()) || []; // loop entries

    entries.forEach(function (entry) {
      // get embeds
      if (!allEmbeds[embedId].find(function (e) {
        return e.url === entry;
      })) {
        // set entry
        allEmbeds[embedId].push({
          url: entry,
          data: {},
          loading: loadEmbed(data, entry)
        });
      }
    }); // remove old

    allEmbeds[embedId] = allEmbeds[embedId].filter(function (e) {
      return entries.includes(e.url);
    }); // embeds

    setEmbeds(_toConsumableArray(allEmbeds[embedId]));
  }; // insert mention


  var onMention = function onMention(data) {
    var _trigger;

    // select target
    slate.Transforms.select(editor, mention); // mention

    var insertMention = {
      type: 'mention',
      mention: data,
      trigger: (_trigger = trigger) === null || _trigger === void 0 ? void 0 : _trigger.trigger,
      children: [{
        text: ''
      }]
    }; // set mention

    setMention(null); // insert nodes

    slate.Transforms.insertNodes(editor, insertMention);
    slate.Transforms.move(editor);
  }; // use effect


  React.useEffect(function () {
    // try/catch
    try {
      var _domRange$endContaine;

      // check mention
      if (!mention) {
        // set index
        setIndex(0);
        setMentionRef(null); // check index

        return;
      } // dom range


      var domRange = slateReact.ReactEditor.toDOMRange(editor, mention); // set ref

      setMentionRef(domRange === null || domRange === void 0 ? void 0 : (_domRange$endContaine = domRange.endContainer) === null || _domRange$endContaine === void 0 ? void 0 : _domRange$endContaine.parentNode);
    } catch (e) {}
  }, [mention]); // use effect

  React.useEffect(function () {
    // done
    return function () {
      delete allEmbeds[embedId];
    };
  }, [embedId]); // create body

  var renderBody = function renderBody(data) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !!embeds.length && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "chat-embeds mb-3"
    }, embeds.map(function (embed, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: "embed-".concat(i),
        className: "card card-embed"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React__default['default'].createElement(Embed$1, {
        embed: embed
      })));
    })), /*#__PURE__*/React__default['default'].createElement(material.Paper, null, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      alignItems: "center",
      pr: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1,
      px: 2,
      py: 1
    }, /*#__PURE__*/React__default['default'].createElement(slateReact.Slate, {
      value: value,
      editor: editor,
      onChange: function onChange(v) {
        return _onChange(data, v);
      }
    }, /*#__PURE__*/React__default['default'].createElement(slateReact.Editable, {
      className: "chat-control",
      decorate: decorate,
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e, data);
      },
      renderLeaf: renderLeaf,
      renderElement: renderElement
    }))), /*#__PURE__*/React__default['default'].createElement(material.ToggleButtonGroup, {
      size: "small"
    }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
      value: "image",
      selected: true
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "image",
      fixedWidth: true
    })), /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
      value: "smile",
      selected: true
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "smile",
      fixedWidth: true
    }))), /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
      size: "small",
      value: "send",
      selected: true,
      color: "primary"
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "play",
      fixedWidth: true
    })))));
  };
  /*
  
         <Overlay show={ !!mentionRef } target={ mentionRef } onHide={ () => setMentionRef(null) } rootClose placement="top">
          <Popover className="dropdown-menu show">
            { items.map((item, i) => {
              // return jsx
              return (
                <Dropdown.Item key={ `item-${item.id}` } onClick={ (e) => onMention(item) } active={ index === i }>
                  { item.icon && (
                    <i className={ `fa fa-fw fa-${item.icon} me-2` } />
                  ) }
                  { item.display }
                </Dropdown.Item>
              );
            }) }
          </Popover>
        </Overlay>
        */
  // return jsx


  return props.noChat ? renderBody(props) : /*#__PURE__*/React__default['default'].createElement(DashupUIContext$6.Consumer, null, function (data) {
    // return jsx
    return renderBody(data);
  });
}; // export default page menu


var Input = (function (ctx) {
  // use context
  Embed$1 = Embed$2(ctx);
  DashupUIContext$6 = ctx; // return actual component

  return DashupUIChatInput;
});

var simpleMarkdown = createCommonjsModule(function (module, exports) {
(function (global, factory) {
module.exports = factory() ;
}(commonjsGlobal, (function () {
/* @flow */
/* @ts-check */

/**
 * Simple-Markdown
 * ===============
 *
 * Simple-Markdown's primary goal is to be easy to adapt. It aims
 * to be compliant with John Gruber's [Markdown Syntax page][1],
 * but compatiblity with other markdown implementations' edge-cases
 * will be sacrificed where it conflicts with simplicity or
 * extensibility.
 *
 * If your goal is to simply embed a standard markdown implementation
 * in your website, simple-markdown is probably not the best library
 * for you (although it should work). But if you have struggled to
 * customize an existing library to meet your needs, simple-markdown
 * might be able to help.
 *
 * Many of the regexes and original logic has been adapted from
 * the wonderful [marked.js](https://github.com/chjj/marked)
 *
 * LICENSE (MIT):
 * New code copyright (c) 2014-2019 Khan Academy & Aria Buckles.
 *
 * Portions adapted from marked.js copyright (c) 2011-2014
 * Christopher Jeffrey (https://github.com/chjj/).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// Typescript language & simple-markdown.d.ts references:
/// <reference lib="ES2018" />
/// <reference path="../simple-markdown.d.ts" />

/*::
// Flow Type Definitions:

type Capture =
    Array<string> & {index: number} |
    Array<string> & {index?: number};

type Attr = string | number | boolean | null | void;

type SingleASTNode = {
    type: string,
    [string]: any,
};

type UnTypedASTNode = {
    [string]: any
};

type ASTNode = SingleASTNode | Array<SingleASTNode>;

type State = {
    key?: string | number | void,
    inline?: ?boolean,
    [string]: any,
};

type ReactElement = React$Element<any>;
type ReactElements = React$Node;

type MatchFunction = { regex?: RegExp } & (
    source: string,
    state: State,
    prevCapture: string
) => ?Capture;

type Parser = (
    source: string,
    state?: ?State
) => Array<SingleASTNode>;

type ParseFunction = (
    capture: Capture,
    nestedParse: Parser,
    state: State,
) => (UnTypedASTNode | ASTNode);

type SingleNodeParseFunction = (
    capture: Capture,
    nestedParse: Parser,
    state: State,
) => UnTypedASTNode;

type Output<Result> = (
    node: ASTNode,
    state?: ?State
) => Result;

type NodeOutput<Result> = (
    node: SingleASTNode,
    nestedOutput: Output<Result>,
    state: State
) => Result;

type ArrayNodeOutput<Result> = (
    node: Array<SingleASTNode>,
    nestedOutput: Output<Result>,
    state: State
) => Result;

type ReactOutput = Output<ReactElements>;
type ReactNodeOutput = NodeOutput<ReactElements>;
type HtmlOutput = Output<string>;
type HtmlNodeOutput = NodeOutput<string>;

type ParserRule = {
    +order: number,
    +match: MatchFunction,
    +quality?: (capture: Capture, state: State, prevCapture: string) => number,
    +parse: ParseFunction,
};

type SingleNodeParserRule = {
    +order: number,
    +match: MatchFunction,
    +quality?: (capture: Capture, state: State, prevCapture: string) => number,
    +parse: SingleNodeParseFunction,
};

type ReactOutputRule = {
    // we allow null because some rules are never output results, and that's
    // legal as long as no parsers return an AST node matching that rule.
    // We don't use ? because this makes it be explicitly defined as either
    // a valid function or null, so it can't be forgotten.
    +react: ReactNodeOutput | null,
};

type HtmlOutputRule = {
    +html: HtmlNodeOutput | null,
};

type ArrayRule = {
    +react?: ArrayNodeOutput<ReactElements>,
    +html?: ArrayNodeOutput<string>,
    +[string]: ArrayNodeOutput<any>,
};

type ParserRules = {
    +Array?: ArrayRule,
    +[type: string]: ParserRule,
};

type OutputRules<Rule> = {
    +Array?: ArrayRule,
    +[type: string]: Rule
};
type Rules<OutputRule> = {
    +Array?: ArrayRule,
    +[type: string]: ParserRule & OutputRule,
};
type ReactRules = {
    +Array?: {
        +react: ArrayNodeOutput<ReactElements>,
    },
    +[type: string]: ParserRule & ReactOutputRule,
};
type HtmlRules = {
    +Array?: {
        +html: ArrayNodeOutput<string>,
    },
    +[type: string]: ParserRule & HtmlOutputRule,
};

// We want to clarify our defaultRules types a little bit more so clients can
// reuse defaultRules built-ins. So we make some stronger guarantess when
// we can:
type NonNullReactOutputRule = {
    +react: ReactNodeOutput,
};
type ElementReactOutputRule = {
    +react: NodeOutput<ReactElement>,
};
type TextReactOutputRule = {
    +react: NodeOutput<string>,
};
type NonNullHtmlOutputRule = {
    +html: HtmlNodeOutput,
};

type DefaultInRule = SingleNodeParserRule & ReactOutputRule & HtmlOutputRule;
type TextInOutRule = SingleNodeParserRule & TextReactOutputRule & NonNullHtmlOutputRule;
type LenientInOutRule = SingleNodeParserRule & NonNullReactOutputRule & NonNullHtmlOutputRule;
type DefaultInOutRule = SingleNodeParserRule & ElementReactOutputRule & NonNullHtmlOutputRule;

type DefaultRules = {
    +Array: {
        +react: ArrayNodeOutput<ReactElements>,
        +html: ArrayNodeOutput<string>
    },
    +heading: DefaultInOutRule,
    +nptable: DefaultInRule,
    +lheading: DefaultInRule,
    +hr: DefaultInOutRule,
    +codeBlock: DefaultInOutRule,
    +fence: DefaultInRule,
    +blockQuote: DefaultInOutRule,
    +list: DefaultInOutRule,
    +def: LenientInOutRule,
    +table: DefaultInOutRule,
    +tableSeparator: DefaultInRule,
    +newline: TextInOutRule,
    +paragraph: DefaultInOutRule,
    +escape: DefaultInRule,
    +autolink: DefaultInRule,
    +mailto: DefaultInRule,
    +url: DefaultInRule,
    +link: DefaultInOutRule,
    +image: DefaultInOutRule,
    +reflink: DefaultInRule,
    +refimage: DefaultInRule,
    +em: DefaultInOutRule,
    +strong: DefaultInOutRule,
    +u: DefaultInOutRule,
    +del: DefaultInOutRule,
    +inlineCode: DefaultInOutRule,
    +br: DefaultInOutRule,
    +text: TextInOutRule,
};

type RefNode = {
    type: string,
    content?: ASTNode,
    target?: string,
    title?: string,
    alt?: string,
};

// End Flow Definitions
*/

var CR_NEWLINE_R = /\r\n?/g;
var TAB_R = /\t/g;
var FORMFEED_R = /\f/g;

/**
 * Turn various whitespace into easy-to-process whitespace
 * @param {string} source
 * @returns {string}
 */
var preprocess = function(source /* : string */) {
    return source.replace(CR_NEWLINE_R, '\n')
            .replace(FORMFEED_R, '')
            .replace(TAB_R, '    ');
};

/**
 * @param {SimpleMarkdown.OptionalState} givenState
 * @param {SimpleMarkdown.OptionalState} defaultState
 * @returns {SimpleMarkdown.State}
 */
var populateInitialState = function(
    givenState /* : ?State */,
    defaultState /* : ?State */
) /* : State */{
    var state /* : State */ = givenState || {};
    if (defaultState != null) {
        for (var prop in defaultState) {
            if (Object.prototype.hasOwnProperty.call(defaultState, prop)) {
                state[prop] = defaultState[prop];
            }
        }
    }
    return state;
};

/**
 * Creates a parser for a given set of rules, with the precedence
 * specified as a list of rules.
 *
 * @param {SimpleMarkdown.ParserRules} rules
 *     an object containing
 *     rule type -> {match, order, parse} objects
 *     (lower order is higher precedence)
 * @param {SimpleMarkdown.OptionalState} [defaultState]
 *
 * @returns {SimpleMarkdown.Parser}
 *     The resulting parse function, with the following parameters:
 *     @source: the input source string to be parsed
 *     @state: an optional object to be threaded through parse
 *         calls. Allows clients to add stateful operations to
 *         parsing, such as keeping track of how many levels deep
 *         some nesting is. For an example use-case, see passage-ref
 *         parsing in src/widgets/passage/passage-markdown.jsx
 */
var parserFor = function(rules /*: ParserRules */, defaultState /*: ?State */) {
    // Sorts rules in order of increasing order, then
    // ascending rule name in case of ties.
    var ruleList = Object.keys(rules).filter(function(type) {
        var rule = rules[type];
        if (rule == null || rule.match == null) {
            return false;
        }
        var order = rule.order;
        if ((typeof order !== 'number' || !isFinite(order)) &&
                typeof console !== 'undefined') {
            console.warn(
                "simple-markdown: Invalid order for rule `" + type + "`: " +
                String(order)
            );
        }
        return true;
    });

    ruleList.sort(function(typeA, typeB) {
        var ruleA /* : ParserRule */ = /** @type {SimpleMarkdown.ParserRule} */ (rules[typeA] /*:: :any */);
        var ruleB /* : ParserRule */ = /** @type {SimpleMarkdown.ParserRule} */ (rules[typeB] /*:: :any */);
        var orderA = ruleA.order;
        var orderB = ruleB.order;

        // First sort based on increasing order
        if (orderA !== orderB) {
            return orderA - orderB;
        }

        var secondaryOrderA = ruleA.quality ? 0 : 1;
        var secondaryOrderB = ruleB.quality ? 0 : 1;

        if (secondaryOrderA !== secondaryOrderB) {
            return secondaryOrderA - secondaryOrderB;

        // Then based on increasing unicode lexicographic ordering
        } else if (typeA < typeB) {
            return -1;
        } else if (typeA > typeB) {
            return 1;

        } else {
            // Rules should never have the same name,
            // but this is provided for completeness.
            return 0;
        }
    });

    /** @type {SimpleMarkdown.State} */
    var latestState;
    /** @type {SimpleMarkdown.Parser} */
    var nestedParse = function(source /* : string */, state /* : ?State */) {
        /** @type Array<SimpleMarkdown.SingleASTNode> */
        var result = [];
        state = state || latestState;
        latestState = state;
        while (source) {
            // store the best match, it's rule, and quality:
            var ruleType = null;
            var rule = null;
            var capture = null;
            var quality = NaN;

            // loop control variables:
            var i = 0;
            var currRuleType = ruleList[0];
            var currRule /* : ParserRule */ = /** @type {SimpleMarkdown.ParserRule} */ ( rules[currRuleType] /*:: :any */ );

            do {
                var currOrder = currRule.order;
                var prevCaptureStr = state.prevCapture == null ? "" : state.prevCapture[0];
                var currCapture = currRule.match(source, state, prevCaptureStr);

                if (currCapture) {
                    var currQuality = currRule.quality ? currRule.quality(
                        currCapture,
                        state,
                        prevCaptureStr
                    ) : 0;
                    // This should always be true the first time because
                    // the initial quality is NaN (that's why there's the
                    // condition negation).
                    if (!(currQuality <= quality)) {
                        ruleType = currRuleType;
                        rule = currRule;
                        capture = currCapture;
                        quality = currQuality;
                    }
                }

                // Move on to the next item.
                // Note that this makes `currRule` be the next item
                i++;
                currRuleType = ruleList[i];
                currRule = /*::((*/ /** @type {SimpleMarkdown.ParserRule} */ (rules[currRuleType]) /*:: : any) : ParserRule)*/;

            } while (
                // keep looping while we're still within the ruleList
                currRule && (
                    // if we don't have a match yet, continue
                    !capture || (
                        // or if we have a match, but the next rule is
                        // at the same order, and has a quality measurement
                        // functions, then this rule must have a quality
                        // measurement function (since they are sorted before
                        // those without), and we need to check if there is
                        // a better quality match
                        currRule.order === currOrder &&
                        currRule.quality
                    )
                )
            );

            // TODO(aria): Write tests for these
            if (rule == null || capture == null /*:: || ruleType == null */) {
                throw new Error(
                    "Could not find a matching rule for the below " +
                    "content. The rule with highest `order` should " +
                    "always match content provided to it. Check " +
                    "the definition of `match` for '" +
                    ruleList[ruleList.length - 1] +
                    "'. It seems to not match the following source:\n" +
                    source
                );
            }
            if (capture.index) { // If present and non-zero, i.e. a non-^ regexp result:
                throw new Error(
                    "`match` must return a capture starting at index 0 " +
                    "(the current parse index). Did you forget a ^ at the " +
                    "start of the RegExp?"
                );
            }

            var parsed = rule.parse(capture, nestedParse, state);
            // We maintain the same object here so that rules can
            // store references to the objects they return and
            // modify them later. (oops sorry! but this adds a lot
            // of power--see reflinks.)
            if (Array.isArray(parsed)) {
                Array.prototype.push.apply(result, parsed);
            } else {
                // We also let rules override the default type of
                // their parsed node if they would like to, so that
                // there can be a single output function for all links,
                // even if there are several rules to parse them.
                if (parsed.type == null) {
                    parsed.type = ruleType;
                }
                result.push(/** @type {SimpleMarkdown.SingleASTNode} */ (parsed));
            }

            state.prevCapture = capture;
            source = source.substring(state.prevCapture[0].length);
        }
        return result;
    };

    /** @type {SimpleMarkdown.Parser} */
    var outerParse = function(source /* : string */, state /* : ?State */) {
        latestState = populateInitialState(state, defaultState);
        if (!latestState.inline && !latestState.disableAutoBlockNewlines) {
            source = source + "\n\n";
        }
        // We store the previous capture so that match functions can
        // use some limited amount of lookbehind. Lists use this to
        // ensure they don't match arbitrary '- ' or '* ' in inline
        // text (see the list rule for more information). This stores
        // the full regex capture object, if there is one.
        latestState.prevCapture = null;
        return nestedParse(preprocess(source), latestState);
    };
    return outerParse;
};

// Creates a match function for an inline scoped element from a regex
/** @type {(regex: RegExp) => SimpleMarkdown.MatchFunction} */
var inlineRegex = function(regex /* : RegExp */) {
    /** @type {SimpleMarkdown.MatchFunction} */
    var match /* : MatchFunction */ = function(source, state) {
        if (state.inline) {
            return regex.exec(source);
        } else {
            return null;
        }
    };
    match.regex = regex;
    return match;
};

// Creates a match function for a block scoped element from a regex
/** @type {(regex: RegExp) => SimpleMarkdown.MatchFunction} */
var blockRegex = function(regex /* : RegExp */) {
    /** @type {SimpleMarkdown.MatchFunction} */
    var match /* : MatchFunction */ = function(source, state) {
        if (state.inline) {
            return null;
        } else {
            return regex.exec(source);
        }
    };
    match.regex = regex;
    return match;
};

// Creates a match function from a regex, ignoring block/inline scope
/** @type {(regex: RegExp) => SimpleMarkdown.MatchFunction} */
var anyScopeRegex = function(regex /* : RegExp */) {
    /** @type {SimpleMarkdown.MatchFunction} */
    var match /* : MatchFunction */ = function(source, state) {
        return regex.exec(source);
    };
    match.regex = regex;
    return match;
};

var TYPE_SYMBOL =
    (typeof Symbol === 'function' && Symbol.for &&
     Symbol.for('react.element')) ||
    0xeac7;

/**
 * @param {string} type
 * @param {string | number | null | undefined} key
 * @param {Object<string, any>} props
 * @returns {SimpleMarkdown.ReactElement}
 */
var reactElement = function(
    type /* : string */,
    key /* : string | number | null | void */,
    props /* : { [string]: any } */
) /* : ReactElement */ {
    var element /* : ReactElement */ = /** @type {SimpleMarkdown.ReactElement} */ ({
        $$typeof: TYPE_SYMBOL,
        type: type,
        key: key == null ? undefined : key,
        ref: null,
        props: props,
        _owner: null
    } /* : any */);
    return element;
};

/** Returns a closed HTML tag.
 * @param {string} tagName - Name of HTML tag (eg. "em" or "a")
 * @param {string} content - Inner content of tag
 * @param {{ [attr: string]: SimpleMarkdown.Attr }} [attributes] - Optional extra attributes of tag as an object of key-value pairs
 *   eg. { "href": "http://google.com" }. Falsey attributes are filtered out.
 * @param {boolean} [isClosed] - boolean that controls whether tag is closed or not (eg. img tags).
 *   defaults to true
 */
var htmlTag = function(
    tagName /* : string */,
    content /* : string */,
    attributes /* : ?{[any]: ?Attr} */,
    isClosed /* : ?boolean */
) {
    attributes = attributes || {};
    isClosed = typeof isClosed !== 'undefined' ? isClosed : true;

    var attributeString = "";
    for (var attr in attributes) {
        var attribute = attributes[attr];
        // Removes falsey attributes
        if (Object.prototype.hasOwnProperty.call(attributes, attr) &&
                attribute) {
            attributeString += " " +
                sanitizeText(attr) + '="' +
                sanitizeText(attribute) + '"';
        }
    }

    var unclosedTag = "<" + tagName + attributeString + ">";

    if (isClosed) {
        return unclosedTag + content + "</" + tagName + ">";
    } else {
        return unclosedTag;
    }
};

var EMPTY_PROPS = {};

/**
 * @param {string | null | undefined} url - url to sanitize
 * @returns {string | null} - url if safe, or null if a safe url could not be made
 */
var sanitizeUrl = function(url /* : ?string */) {
    if (url == null) {
        return null;
    }
    try {
        var prot = decodeURIComponent(url)
            .replace(/[^A-Za-z0-9/:]/g, '')
            .toLowerCase();
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return null;
        }
    } catch (e) {
        // decodeURIComponent sometimes throws a URIError
        // See `decodeURIComponent('a%AFc');`
        // http://stackoverflow.com/questions/9064536/javascript-decodeuricomponent-malformed-uri-exception
        return null;
    }
    return url;
};

var SANITIZE_TEXT_R = /[<>&"']/g;
/** @type {any} */
var SANITIZE_TEXT_CODES = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    "`": '&#96;'
};
/**
 * @param {SimpleMarkdown.Attr} text
 * @returns {string}
 */
var sanitizeText = function(text /* : Attr */) {
    return String(text).replace(SANITIZE_TEXT_R, function(chr) {
        return SANITIZE_TEXT_CODES[chr];
    });
};

var UNESCAPE_URL_R = /\\([^0-9A-Za-z\s])/g;

/**
 * @param {string} rawUrlString
 * @returns {string}
 */
var unescapeUrl = function(rawUrlString /* : string */) {
    return rawUrlString.replace(UNESCAPE_URL_R, "$1");
};

/**
 * Parse some content with the parser `parse`, with state.inline
 * set to true. Useful for block elements; not generally necessary
 * to be used by inline elements (where state.inline is already true.
 *
 * @param {SimpleMarkdown.Parser} parse
 * @param {string} content
 * @param {SimpleMarkdown.State} state
 * @returns {SimpleMarkdown.ASTNode}
 */
var parseInline = function(parse, content, state) {
    var isCurrentlyInline = state.inline || false;
    state.inline = true;
    var result = parse(content, state);
    state.inline = isCurrentlyInline;
    return result;
};
/**
 * @param {SimpleMarkdown.Parser} parse
 * @param {string} content
 * @param {SimpleMarkdown.State} state
 * @returns {SimpleMarkdown.ASTNode}
 */
var parseBlock = function(parse, content, state) {
    var isCurrentlyInline = state.inline || false;
    state.inline = false;
    var result = parse(content + "\n\n", state);
    state.inline = isCurrentlyInline;
    return result;
};

/**
 * @param {SimpleMarkdown.Capture} capture
 * @param {SimpleMarkdown.Parser} parse
 * @param {SimpleMarkdown.State} state
 * @returns {SimpleMarkdown.UnTypedASTNode}
 */
var parseCaptureInline = function(capture, parse, state) {
    return {
        content: parseInline(parse, capture[1], state)
    };
};
/**
 * @returns {SimpleMarkdown.UnTypedASTNode}
 */
var ignoreCapture = function() { return {}; };

// recognize a `*` `-`, `+`, `1.`, `2.`... list bullet
var LIST_BULLET = "(?:[*+-]|\\d+\\.)";
// recognize the start of a list item:
// leading space plus a bullet plus a space (`   * `)
var LIST_ITEM_PREFIX = "( *)(" + LIST_BULLET + ") +";
var LIST_ITEM_PREFIX_R = new RegExp("^" + LIST_ITEM_PREFIX);
// recognize an individual list item:
//  * hi
//    this is part of the same item
//
//    as is this, which is a new paragraph in the same item
//
//  * but this is not part of the same item
var LIST_ITEM_R = new RegExp(
    LIST_ITEM_PREFIX +
    "[^\\n]*(?:\\n" +
    "(?!\\1" + LIST_BULLET + " )[^\\n]*)*(\n|$)",
    "gm"
);
var BLOCK_END_R = /\n{2,}$/;
var INLINE_CODE_ESCAPE_BACKTICKS_R = /^ (?= *`)|(` *) $/g;
// recognize the end of a paragraph block inside a list item:
// two or more newlines at end end of the item
var LIST_BLOCK_END_R = BLOCK_END_R;
var LIST_ITEM_END_R = / *\n+$/;
// check whether a list item has paragraphs: if it does,
// we leave the newlines at the end
var LIST_R = new RegExp(
    "^( *)(" + LIST_BULLET + ") " +
    "[\\s\\S]+?(?:\n{2,}(?! )" +
    "(?!\\1" + LIST_BULLET + " )\\n*" +
    // the \\s*$ here is so that we can parse the inside of nested
    // lists, where our content might end before we receive two `\n`s
    "|\\s*\n*$)"
);
var LIST_LOOKBEHIND_R = /(?:^|\n)( *)$/;

var TABLES = (function() {
    var TABLE_ROW_SEPARATOR_TRIM = /^ *\| *| *\| *$/g;
    var TABLE_CELL_END_TRIM = / *$/;
    var TABLE_RIGHT_ALIGN = /^ *-+: *$/;
    var TABLE_CENTER_ALIGN = /^ *:-+: *$/;
    var TABLE_LEFT_ALIGN = /^ *:-+ *$/;

    /**
     * @param {string} alignCapture
     * @returns {SimpleMarkdown.TableAlignment}
     */
    var parseTableAlignCapture = function(alignCapture) {
        if (TABLE_RIGHT_ALIGN.test(alignCapture)) {
            return "right";
        } else if (TABLE_CENTER_ALIGN.test(alignCapture)) {
            return "center";
        } else if (TABLE_LEFT_ALIGN.test(alignCapture)) {
            return "left";
        } else {
            return null;
        }
    };

    /**
     * @param {string} source
     * @param {SimpleMarkdown.Parser} parse
     * @param {SimpleMarkdown.State} state
     * @param {boolean} trimEndSeparators
     * @returns {Array<SimpleMarkdown.TableAlignment>}
     */
    var parseTableAlign = function(source, parse, state, trimEndSeparators) {
        if (trimEndSeparators) {
            source = source.replace(TABLE_ROW_SEPARATOR_TRIM, "");
        }
        var alignText = source.trim().split("|");
        return alignText.map(parseTableAlignCapture);
    };

    /**
     * @param {string} source
     * @param {SimpleMarkdown.Parser} parse
     * @param {SimpleMarkdown.State} state
     * @param {boolean} trimEndSeparators
     * @returns {SimpleMarkdown.SingleASTNode[][]}
     */
    var parseTableRow = function(source, parse, state, trimEndSeparators) {
        var prevInTable = state.inTable;
        state.inTable = true;
        var tableRow = parse(source.trim(), state);
        state.inTable = prevInTable;

        /** @type {SimpleMarkdown.SingleASTNode[][]} */
        var cells = [[]];
        tableRow.forEach(function(node, i) {
            if (node.type === 'tableSeparator') {
                // Filter out empty table separators at the start/end:
                if (!trimEndSeparators || i !== 0 && i !== tableRow.length - 1) {
                    // Split the current row:
                    cells.push([]);
                }
            } else {
                if (node.type === 'text' && (
                    tableRow[i + 1] == null ||
                    tableRow[i + 1].type === 'tableSeparator'
                )) {
                    node.content = node.content.replace(TABLE_CELL_END_TRIM, "");
                }
                cells[cells.length - 1].push(node);
            }
        });

        return cells;
    };

    /**
     * @param {string} source
     * @param {SimpleMarkdown.Parser} parse
     * @param {SimpleMarkdown.State} state
     * @param {boolean} trimEndSeparators
     * @returns {SimpleMarkdown.ASTNode[][]}
     */
    var parseTableCells = function(source, parse, state, trimEndSeparators) {
        var rowsText = source.trim().split("\n");

        return rowsText.map(function(rowText) {
            return parseTableRow(rowText, parse, state, trimEndSeparators);
        });
    };

    /**
     * @param {boolean} trimEndSeparators
     * @returns {SimpleMarkdown.SingleNodeParseFunction}
     */
    var parseTable = function(trimEndSeparators) {
        /** @type {SimpleMarkdown.SingleNodeParseFunction} */
        return function(capture, parse, state) {
            state.inline = true;
            var header = parseTableRow(capture[1], parse, state, trimEndSeparators);
            var align = parseTableAlign(capture[2], parse, state, trimEndSeparators);
            var cells = parseTableCells(capture[3], parse, state, trimEndSeparators);
            state.inline = false;

            return {
                type: "table",
                header: header,
                align: align,
                cells: cells
            };
        };
    };

    return {
        parseTable: parseTable(true),
        parseNpTable: parseTable(false),
        TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
        NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
    };
})();

var LINK_INSIDE = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*";
var LINK_HREF_AND_TITLE =
        "\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";
var AUTOLINK_MAILTO_CHECK_R = /mailto:/i;

/**
 * @param {SimpleMarkdown.Capture} capture
 * @param {SimpleMarkdown.State} state
 * @param {SimpleMarkdown.RefNode} refNode
 * @returns {SimpleMarkdown.RefNode}
 */
var parseRef = function(capture, state, refNode /* : RefNode */) {
    var ref = (capture[2] || capture[1])
        .replace(/\s+/g, ' ')
        .toLowerCase();

    // We store information about previously seen defs on
    // state._defs (_ to deconflict with client-defined
    // state). If the def for this reflink/refimage has
    // already been seen, we can use its target/source
    // and title here:
    if (state._defs && state._defs[ref]) {
        var def = state._defs[ref];
        // `refNode` can be a link or an image. Both use
        // target and title properties.
        refNode.target = def.target;
        refNode.title = def.title;
    }

    // In case we haven't seen our def yet (or if someone
    // overwrites that def later on), we add this node
    // to the list of ref nodes for that def. Then, when
    // we find the def, we can modify this link/image AST
    // node :).
    // I'm sorry.
    state._refs = state._refs || {};
    state._refs[ref] = state._refs[ref] || [];
    state._refs[ref].push(refNode);

    return refNode;
};

var currOrder = 0;
/** @type {SimpleMarkdown.DefaultRules} */
var defaultRules /* : DefaultRules */ = {
    Array: {
        react: function(arr, output, state) {
            var oldKey = state.key;
            var result /* : Array<ReactElements> */ = [];

            // map output over the ast, except group any text
            // nodes together into a single string output.
            for (var i = 0, key = 0; i < arr.length; i++, key++) {
                // `key` is our numerical `state.key`, which we increment for
                // every output node, but don't change for joined text nodes.
                // (i, however, must change for joined text nodes)
                state.key = '' + i;

                var node = arr[i];
                if (node.type === 'text') {
                    node = { type: 'text', content: node.content };
                    for (; i + 1 < arr.length && arr[i + 1].type === 'text'; i++) {
                        node.content += arr[i + 1].content;
                    }
                }

                result.push(output(node, state));
            }

            state.key = oldKey;
            return result;
        },
        html: function(arr, output, state) {
            var result = "";

            // map output over the ast, except group any text
            // nodes together into a single string output.
            for (var i = 0; i < arr.length; i++) {

                var node = arr[i];
                if (node.type === 'text') {
                    node = { type: 'text', content: node.content };
                    for (; i + 1 < arr.length && arr[i + 1].type === 'text'; i++) {
                        node.content += arr[i + 1].content;
                    }
                }

                result += output(node, state);
            }
            return result;
        }
    },
    heading: {
        order: currOrder++,
        match: blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
        parse: function(capture, parse, state) {
            return {
                level: capture[1].length,
                content: parseInline(parse, capture[2].trim(), state)
            };
        },
        react: function(node, output, state) {
            return reactElement(
                'h' + node.level,
                state.key,
                {
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("h" + node.level, output(node.content, state));
        }
    },
    nptable: {
        order: currOrder++,
        match: blockRegex(TABLES.NPTABLE_REGEX),
        parse: TABLES.parseNpTable,
        react: null,
        html: null
    },
    lheading: {
        order: currOrder++,
        match: blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
        parse: function(capture, parse, state) {
            return {
                type: "heading",
                level: capture[2] === '=' ? 1 : 2,
                content: parseInline(parse, capture[1], state)
            };
        },
        react: null,
        html: null
    },
    hr: {
        order: currOrder++,
        match: blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/),
        parse: ignoreCapture,
        react: function(node, output, state) {
            return reactElement(
                'hr',
                state.key,
                EMPTY_PROPS
            );
        },
        html: function(node, output, state) {
            return "<hr>";
        }
    },
    codeBlock: {
        order: currOrder++,
        match: blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
        parse: function(capture, parse, state) {
            var content = capture[0]
                .replace(/^    /gm, '')
                .replace(/\n+$/, '');
            return {
                lang: undefined,
                content: content
            };
        },
        react: function(node, output, state) {
            var className = node.lang ?
                "markdown-code-" + node.lang :
                undefined;

            return reactElement(
                'pre',
                state.key,
                {
                    children: reactElement(
                        'code',
                        null,
                        {
                            className: className,
                            children: node.content
                        }
                    )
                }
            );
        },
        html: function(node, output, state) {
            var className = node.lang ?
                "markdown-code-" + node.lang :
                undefined;

            var codeBlock = htmlTag("code", sanitizeText(node.content), {
                class: className
            });
            return htmlTag("pre", codeBlock);
        }
    },
    fence: {
        order: currOrder++,
        match: blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
        parse: function(capture, parse, state) {
            return {
                type: "codeBlock",
                lang: capture[2] || undefined,
                content: capture[3]
            };
        },
        react: null,
        html: null
    },
    blockQuote: {
        order: currOrder++,
        match: blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
        parse: function(capture, parse, state) {
            var content = capture[0].replace(/^ *> ?/gm, '');
            return {
                content: parse(content, state)
            };
        },
        react: function(node, output, state) {
            return reactElement(
                'blockquote',
                state.key,
                {
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("blockquote", output(node.content, state));
        }
    },
    list: {
        order: currOrder++,
        match: function(source, state) {
            // We only want to break into a list if we are at the start of a
            // line. This is to avoid parsing "hi * there" with "* there"
            // becoming a part of a list.
            // You might wonder, "but that's inline, so of course it wouldn't
            // start a list?". You would be correct! Except that some of our
            // lists can be inline, because they might be inside another list,
            // in which case we can parse with inline scope, but need to allow
            // nested lists inside this inline scope.
            var prevCaptureStr = state.prevCapture == null ? "" : state.prevCapture[0];
            var isStartOfLineCapture = LIST_LOOKBEHIND_R.exec(prevCaptureStr);
            var isListBlock = state._list || !state.inline;

            if (isStartOfLineCapture && isListBlock) {
                source = isStartOfLineCapture[1] + source;
                return LIST_R.exec(source);
            } else {
                return null;
            }
        },
        parse: function(capture, parse, state) {
            var bullet = capture[2];
            var ordered = bullet.length > 1;
            var start = ordered ? +bullet : undefined;
            var items = /** @type {string[]} */ (
                capture[0]
                    .replace(LIST_BLOCK_END_R, "\n")
                    .match(LIST_ITEM_R)
            );

            // We know this will match here, because of how the regexes are
            // defined
            /*:: items = ((items : any) : Array<string>) */

            var lastItemWasAParagraph = false;
            var itemContent = items.map(function(/** @type {string} */ item, /** @type {number} */ i) {
                // We need to see how far indented this item is:
                var prefixCapture = LIST_ITEM_PREFIX_R.exec(item);
                var space = prefixCapture ? prefixCapture[0].length : 0;
                // And then we construct a regex to "unindent" the subsequent
                // lines of the items by that amount:
                var spaceRegex = new RegExp("^ {1," + space + "}", "gm");

                // Before processing the item, we need a couple things
                var content = item
                         // remove indents on trailing lines:
                        .replace(spaceRegex, '')
                         // remove the bullet:
                        .replace(LIST_ITEM_PREFIX_R, '');

                // I'm not sur4 why this is necessary again?
                /*:: items = ((items : any) : Array<string>) */

                // Handling "loose" lists, like:
                //
                //  * this is wrapped in a paragraph
                //
                //  * as is this
                //
                //  * as is this
                var isLastItem = (i === items.length - 1);
                var containsBlocks = content.indexOf("\n\n") !== -1;

                // Any element in a list is a block if it contains multiple
                // newlines. The last element in the list can also be a block
                // if the previous item in the list was a block (this is
                // because non-last items in the list can end with \n\n, but
                // the last item can't, so we just "inherit" this property
                // from our previous element).
                var thisItemIsAParagraph = containsBlocks ||
                        (isLastItem && lastItemWasAParagraph);
                lastItemWasAParagraph = thisItemIsAParagraph;

                // backup our state for restoration afterwards. We're going to
                // want to set state._list to true, and state.inline depending
                // on our list's looseness.
                var oldStateInline = state.inline;
                var oldStateList = state._list;
                state._list = true;

                // Parse inline if we're in a tight list, or block if we're in
                // a loose list.
                var adjustedContent;
                if (thisItemIsAParagraph) {
                    state.inline = false;
                    adjustedContent = content.replace(LIST_ITEM_END_R, "\n\n");
                } else {
                    state.inline = true;
                    adjustedContent = content.replace(LIST_ITEM_END_R, "");
                }

                var result = parse(adjustedContent, state);

                // Restore our state before returning
                state.inline = oldStateInline;
                state._list = oldStateList;
                return result;
            });

            return {
                ordered: ordered,
                start: start,
                items: itemContent
            };
        },
        react: function(node, output, state) {
            var ListWrapper = node.ordered ? "ol" : "ul";

            return reactElement(
                ListWrapper,
                state.key,
                {
                    start: node.start,
                    children: node.items.map(function(
                        /** @type {SimpleMarkdown.ASTNode} */ item,
                        /** @type {number} */ i
                    ) {
                        return reactElement(
                            'li',
                            '' + i,
                            {
                                children: output(item, state)
                            }
                        );
                    })
                }
            );
        },
        html: function(node, output, state) {
            var listItems = node.items.map(function(/** @type {SimpleMarkdown.ASTNode} */ item) {
                return htmlTag("li", output(item, state));
            }).join("");

            var listTag = node.ordered ? "ol" : "ul";
            var attributes = {
                start: node.start
            };
            return htmlTag(listTag, listItems, attributes);
        }
    },
    def: {
        order: currOrder++,
        // TODO(aria): This will match without a blank line before the next
        // block element, which is inconsistent with most of the rest of
        // simple-markdown.
        match: blockRegex(
            /^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/
        ),
        parse: function(capture, parse, state) {
            var def = capture[1]
                .replace(/\s+/g, ' ')
                .toLowerCase();
            var target = capture[2];
            var title = capture[3];

            // Look for previous links/images using this def
            // If any links/images using this def have already been declared,
            // they will have added themselves to the state._refs[def] list
            // (_ to deconflict with client-defined state). We look through
            // that list of reflinks for this def, and modify those AST nodes
            // with our newly found information now.
            // Sorry :(.
            if (state._refs && state._refs[def]) {
                // `refNode` can be a link or an image
                state._refs[def].forEach(function(/** @type {SimpleMarkdown.RefNode} */ refNode) {
                    refNode.target = target;
                    refNode.title = title;
                });
            }

            // Add this def to our map of defs for any future links/images
            // In case we haven't found any or all of the refs referring to
            // this def yet, we add our def to the table of known defs, so
            // that future reflinks can modify themselves appropriately with
            // this information.
            state._defs = state._defs || {};
            state._defs[def] = {
                target: target,
                title: title,
            };

            // return the relevant parsed information
            // for debugging only.
            return {
                def: def,
                target: target,
                title: title,
            };
        },
        react: function() { return null; },
        html: function() { return ""; }
    },
    table: {
        order: currOrder++,
        match: blockRegex(TABLES.TABLE_REGEX),
        parse: TABLES.parseTable,
        react: function(node, output, state) {
            /**
             * @param {number} colIndex
             * @returns {{ [attr: string]: SimpleMarkdown.Attr }}
             */
            var getStyle = function(colIndex) {
                return node.align[colIndex] == null ? {} : {
                    textAlign: node.align[colIndex]
                };
            };

            var headers = node.header.map(function(
                /** @type {SimpleMarkdown.ASTNode} */ content,
                /** @type {number} */ i
            ) {
                return reactElement(
                    'th',
                    '' + i,
                    {
                        style: getStyle(i),
                        scope: 'col',
                        children: output(content, state)
                    }
                );
            });

            var rows = node.cells.map(function(
                    /** @type {SimpleMarkdown.ASTNode[]} */ row,
                    /** @type {number} */ r
            ) {
                return reactElement(
                    'tr',
                    '' + r,
                    {
                        children: row.map(function(
                            /** @type {SimpleMarkdown.ASTNode} */ content,
                            /** @type {number} */ c
                        ) {
                            return reactElement(
                                'td',
                                '' + c,
                                {
                                    style: getStyle(c),
                                    children: output(content, state)
                                }
                            );
                        })
                    }
                );
            });

            return reactElement(
                'table',
                state.key,
                {
                    children: [reactElement(
                        'thead',
                        'thead',
                        {
                            children: reactElement(
                                'tr',
                                null,
                                {
                                    children: headers
                                }
                            )
                        }
                    ), reactElement(
                        'tbody',
                        'tbody',
                        {
                            children: rows
                        }
                    )]
                }
            );
        },
        html: function(node, output, state) {
            /**
             * @param {number} colIndex
             * @returns {string}
             */
            var getStyle = function(colIndex) {
                return node.align[colIndex] == null ? "" :
                    "text-align:" + node.align[colIndex] + ";";
            };

            var headers = node.header.map(function(
                /** @type {SimpleMarkdown.ASTNode} */ content,
                /** @type {number} */ i
            ) {
                return htmlTag("th", output(content, state),
                    { style: getStyle(i), scope: "col" });
            }).join("");

            var rows = node.cells.map(function(/** @type {SimpleMarkdown.ASTNode[]} */ row) {
                var cols = row.map(function(
                    /** @type {SimpleMarkdown.ASTNode} */ content,
                    /** @type {number} */ c
                ) {
                    return htmlTag("td", output(content, state),
                        { style: getStyle(c) });
                }).join("");

                return htmlTag("tr", cols);
            }).join("");

            var thead = htmlTag("thead", htmlTag("tr", headers));
            var tbody = htmlTag("tbody", rows);

            return htmlTag("table", thead + tbody);
        }
    },
    newline: {
        order: currOrder++,
        match: blockRegex(/^(?:\n *)*\n/),
        parse: ignoreCapture,
        react: function(node, output, state) { return "\n"; },
        html: function(node, output, state) { return "\n"; }
    },
    paragraph: {
        order: currOrder++,
        match: blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
        parse: parseCaptureInline,
        react: function(node, output, state) {
            return reactElement(
                'div',
                state.key,
                {
                    className: 'paragraph',
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            var attributes = {
                class: 'paragraph'
            };
            return htmlTag("div", output(node.content, state), attributes);
        }
    },
    escape: {
        order: currOrder++,
        // We don't allow escaping numbers, letters, or spaces here so that
        // backslashes used in plain text still get rendered. But allowing
        // escaping anything else provides a very flexible escape mechanism,
        // regardless of how this grammar is extended.
        match: inlineRegex(/^\\([^0-9A-Za-z\s])/),
        parse: function(capture, parse, state) {
            return {
                type: "text",
                content: capture[1]
            };
        },
        react: null,
        html: null
    },
    tableSeparator: {
        order: currOrder++,
        match: function(source, state) {
            if (!state.inTable) {
                return null;
            }
            return /^ *\| */.exec(source);
        },
        parse: function() {
            return { type: 'tableSeparator' };
        },
        // These shouldn't be reached, but in case they are, be reasonable:
        react: function() { return ' | '; },
        html: function() { return ' &vert; '; },
    },
    autolink: {
        order: currOrder++,
        match: inlineRegex(/^<([^: >]+:\/[^ >]+)>/),
        parse: function(capture, parse, state) {
            return {
                type: "link",
                content: [{
                    type: "text",
                    content: capture[1]
                }],
                target: capture[1]
            };
        },
        react: null,
        html: null
    },
    mailto: {
        order: currOrder++,
        match: inlineRegex(/^<([^ >]+@[^ >]+)>/),
        parse: function(capture, parse, state) {
            var address = capture[1];
            var target = capture[1];

            // Check for a `mailto:` already existing in the link:
            if (!AUTOLINK_MAILTO_CHECK_R.test(target)) {
                target = "mailto:" + target;
            }

            return {
                type: "link",
                content: [{
                    type: "text",
                    content: address
                }],
                target: target
            };
        },
        react: null,
        html: null
    },
    url: {
        order: currOrder++,
        match: inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
        parse: function(capture, parse, state) {
            return {
                type: "link",
                content: [{
                    type: "text",
                    content: capture[1]
                }],
                target: capture[1],
                title: undefined
            };
        },
        react: null,
        html: null
    },
    link: {
        order: currOrder++,
        match: inlineRegex(new RegExp(
            "^\\[(" + LINK_INSIDE + ")\\]\\(" + LINK_HREF_AND_TITLE + "\\)"
        )),
        parse: function(capture, parse, state) {
            var link ={
                content: parse(capture[1], state),
                target: unescapeUrl(capture[2]),
                title: capture[3]
            };
            return link;
        },
        react: function(node, output, state) {
            return reactElement(
                'a',
                state.key,
                {
                    href: sanitizeUrl(node.target),
                    title: node.title,
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            var attributes = {
                href: sanitizeUrl(node.target),
                title: node.title
            };

            return htmlTag("a", output(node.content, state), attributes);
        }
    },
    image: {
        order: currOrder++,
        match: inlineRegex(new RegExp(
            "^!\\[(" + LINK_INSIDE + ")\\]\\(" + LINK_HREF_AND_TITLE + "\\)"
        )),
        parse: function(capture, parse, state) {
            var image = {
                alt: capture[1],
                target: unescapeUrl(capture[2]),
                title: capture[3]
            };
            return image;
        },
        react: function(node, output, state) {
            return reactElement(
                'img',
                state.key,
                {
                    src: sanitizeUrl(node.target),
                    alt: node.alt,
                    title: node.title
                }
            );
        },
        html: function(node, output, state) {
            var attributes = {
                src: sanitizeUrl(node.target),
                alt: node.alt,
                title: node.title
            };

            return htmlTag("img", "", attributes, false);
        }
    },
    reflink: {
        order: currOrder++,
        match: inlineRegex(new RegExp(
            // The first [part] of the link
            "^\\[(" + LINK_INSIDE + ")\\]" +
            // The [ref] target of the link
            "\\s*\\[([^\\]]*)\\]"
        )),
        parse: function(capture, parse, state) {
            return parseRef(capture, state, {
                type: "link",
                content: parse(capture[1], state)
            });
        },
        react: null,
        html: null
    },
    refimage: {
        order: currOrder++,
        match: inlineRegex(new RegExp(
            // The first [part] of the link
            "^!\\[(" + LINK_INSIDE + ")\\]" +
            // The [ref] target of the link
            "\\s*\\[([^\\]]*)\\]"
        )),
        parse: function(capture, parse, state) {
            return parseRef(capture, state, {
                type: "image",
                alt: capture[1]
            });
        },
        react: null,
        html: null
    },
    em: {
        order: currOrder /* same as strong/u */,
        match: inlineRegex(
            new RegExp(
                // only match _s surrounding words.
                "^\\b_" +
                "((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_" +
                "\\b" +
                // Or match *s:
                "|" +
                // Only match *s that are followed by a non-space:
                "^\\*(?=\\S)(" +
                // Match at least one of:
                "(?:" +
                  //  - `**`: so that bolds inside italics don't close the
                  //          italics
                  "\\*\\*|" +
                  //  - escape sequence: so escaped *s don't close us
                  "\\\\[\\s\\S]|" +
                  //  - whitespace: followed by a non-* (we don't
                  //          want ' *' to close an italics--it might
                  //          start a list)
                  "\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|" +
                  //  - non-whitespace, non-*, non-backslash characters
                  "[^\\s\\*\\\\]" +
                ")+?" +
                // followed by a non-space, non-* then *
                ")\\*(?!\\*)"
            )
        ),
        quality: function(capture) {
            // precedence by length, `em` wins ties:
            return capture[0].length + 0.2;
        },
        parse: function(capture, parse, state) {
            return {
                content: parse(capture[2] || capture[1], state)
            };
        },
        react: function(node, output, state) {
            return reactElement(
                'em',
                state.key,
                {
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("em", output(node.content, state));
        }
    },
    strong: {
        order: currOrder /* same as em */,
        match: inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
        quality: function(capture) {
            // precedence by length, wins ties vs `u`:
            return capture[0].length + 0.1;
        },
        parse: parseCaptureInline,
        react: function(node, output, state) {
            return reactElement(
                'strong',
                state.key,
                {
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("strong", output(node.content, state));
        }
    },
    u: {
        order: currOrder++ /* same as em&strong; increment for next rule */,
        match: inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
        quality: function(capture) {
            // precedence by length, loses all ties
            return capture[0].length;
        },
        parse: parseCaptureInline,
        react: function(node, output, state) {
            return reactElement(
                'u',
                state.key,
                {
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("u", output(node.content, state));
        }
    },
    del: {
        order: currOrder++,
        match: inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),
        parse: parseCaptureInline,
        react: function(node, output, state) {
            return reactElement(
                'del',
                state.key,
                {
                    children: output(node.content, state)
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("del", output(node.content, state));
        }
    },
    inlineCode: {
        order: currOrder++,
        match: inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/),
        parse: function(capture, parse, state) {
            return {
                content: capture[2].replace(INLINE_CODE_ESCAPE_BACKTICKS_R, "$1")
            };
        },
        react: function(node, output, state) {
            return reactElement(
                'code',
                state.key,
                {
                    children: node.content
                }
            );
        },
        html: function(node, output, state) {
            return htmlTag("code", sanitizeText(node.content));
        }
    },
    br: {
        order: currOrder++,
        match: anyScopeRegex(/^ {2,}\n/),
        parse: ignoreCapture,
        react: function(node, output, state) {
            return reactElement(
                'br',
                state.key,
                EMPTY_PROPS
            );
        },
        html: function(node, output, state) {
            return "<br>";
        }
    },
    text: {
        order: currOrder++,
        // Here we look for anything followed by non-symbols,
        // double newlines, or double-space-newlines
        // We break on any symbol characters so that this grammar
        // is easy to extend without needing to modify this regex
        match: anyScopeRegex(
            /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/
        ),
        parse: function(capture, parse, state) {
            return {
                content: capture[0]
            };
        },
        react: function(node, output, state) {
            return node.content;
        },
        html: function(node, output, state) {
            return sanitizeText(node.content);
        }
    }
};

/** (deprecated)
 * @param {any} rules
 * @param {any} property
 * @returns {any}
 */
var ruleOutput = function/* :: <Rule : Object> */(
    rules /* : OutputRules<Rule> */,
    property /* : $Keys<Rule> */
) {
    if (!property && typeof console !== "undefined") {
        console.warn("simple-markdown ruleOutput should take 'react' or " +
            "'html' as the second argument."
        );
    }

    /** @type {SimpleMarkdown.NodeOutput<any>} */
    var nestedRuleOutput /* : NodeOutput<any> */ = function(
        ast /* : SingleASTNode */,
        outputFunc /* : Output<any> */,
        state /* : State */
    ) {
        return rules[ast.type][property](ast, outputFunc, state);
    };
    return nestedRuleOutput;
};

/** (deprecated)
 * @param {any} outputFunc
 * @returns {any}
 */
var reactFor = function(outputFunc /* : ReactNodeOutput */) /* : ReactOutput */ {
    /** @type {SimpleMarkdown.ReactOutput} */
    var nestedOutput /* : ReactOutput */ = function(ast, state) {
        state = state || {};
        if (Array.isArray(ast)) {
            var oldKey = state.key;
            var result /* : Array<ReactElements> */ = [];

            // map nestedOutput over the ast, except group any text
            // nodes together into a single string output.
            var lastResult = null;
            for (var i = 0; i < ast.length; i++) {
                state.key = '' + i;
                var nodeOut = nestedOutput(ast[i], state);
                if (typeof nodeOut === "string" && typeof lastResult === "string") {
                    lastResult = lastResult + nodeOut;
                    result[result.length - 1] = lastResult;
                } else {
                    result.push(nodeOut);
                    lastResult = nodeOut;
                }
            }

            state.key = oldKey;
            return result;
        } else {
            return outputFunc(ast, nestedOutput, state);
        }
    };
    return nestedOutput;
};

/** (deprecated)
 * @param {any} outputFunc
 * @returns {any}
 */
var htmlFor = function(outputFunc /* : HtmlNodeOutput */) /* : HtmlOutput */ {
    /** @type {SimpleMarkdown.HtmlOutput} */
    var nestedOutput /* : HtmlOutput */ = function(ast, state) {
        state = state || {};
        if (Array.isArray(ast)) {
            return ast.map(function(node) {
                return nestedOutput(node, state);
            }).join("");
        } else {
            return outputFunc(ast, nestedOutput, state);
        }
    };
    return nestedOutput;
};

/**
 * @type {SimpleMarkdown.OutputFor}
 */
var outputFor = function/* :: <Rule : Object> */(
    rules /* : OutputRules<Rule> */,
    property /* : $Keys<Rule> */,
    defaultState /* : ?State */
) {
    if (!property) {
        throw new Error('simple-markdown: outputFor: `property` must be ' +
            'defined. ' +
            'if you just upgraded, you probably need to replace `outputFor` ' +
            'with `reactFor`'
        );
    }

    /** @type {SimpleMarkdown.State} */
    var latestState;
    /** @type {SimpleMarkdown.ArrayRule} */
    var arrayRule = rules.Array || defaultRules.Array;

    // Tricks to convince tsc that this var is not null:
    var arrayRuleCheck = arrayRule[property];
    if (!arrayRuleCheck) {
        throw new Error('simple-markdown: outputFor: to join nodes of type `' +
            property + '` you must provide an `Array:` joiner rule with that type, ' +
            'Please see the docs for details on specifying an Array rule.'
        );
    }
    var arrayRuleOutput = arrayRuleCheck;

    /** @type {SimpleMarkdown.Output<any>} */
    var nestedOutput /* : Output<any> */ = function(ast, state) {
        state = state || latestState;
        latestState = state;
        if (Array.isArray(ast)) {
            return arrayRuleOutput(ast, nestedOutput, state);
        } else {
            return rules[ast.type][property](ast, nestedOutput, state);
        }
    };

    /** @type {SimpleMarkdown.Output<any>} */
    var outerOutput = function(ast, state) {
        latestState = populateInitialState(state, defaultState);
        return nestedOutput(ast, latestState);
    };
    return outerOutput;
};

var defaultRawParse = parserFor(defaultRules);
/**
 * @param {string} source
 * @param {SimpleMarkdown.OptionalState} [state]
 * @returns {Array<SimpleMarkdown.SingleASTNode>}
 */
var defaultBlockParse = function(source, state) {
    state = state || {};
    state.inline = false;
    return defaultRawParse(source, state);
};
/**
 * @param {string} source
 * @param {SimpleMarkdown.OptionalState} [state]
 * @returns {Array<SimpleMarkdown.SingleASTNode>}
 */
var defaultInlineParse = function(source, state) {
    state = state || {};
    state.inline = true;
    return defaultRawParse(source, state);
};
/**
 * @param {string} source
 * @param {SimpleMarkdown.OptionalState} [state]
 * @returns {Array<SimpleMarkdown.SingleASTNode>}
 */
var defaultImplicitParse = function(source, state) {
    var isBlock = BLOCK_END_R.test(source);
    state = state || {};
    state.inline = !isBlock;
    return defaultRawParse(source, state);
};

/** @type {SimpleMarkdown.ReactOutput} */
var defaultReactOutput /* : ReactOutput */ = outputFor(defaultRules, "react");
/** @type {SimpleMarkdown.HtmlOutput} */
var defaultHtmlOutput /* : HtmlOutput */ = outputFor(defaultRules, "html");

/**
 * @param {string} source
 * @param {SimpleMarkdown.OptionalState} [state]
 * @returns {SimpleMarkdown.ReactElements}
 */
var markdownToReact = function(source, state) /* : ReactElements */ {
    return defaultReactOutput(defaultBlockParse(source, state), state);
};
/**
 * @param {string} source
 * @param {SimpleMarkdown.OptionalState} [state]
 * @returns {string}
 */
var markdownToHtml = function(source, state) /* : string */ {
    return defaultHtmlOutput(defaultBlockParse(source, state), state);
};

/**
 * @param {SimpleMarkdown.ReactMarkdownProps} props
 * @returns {SimpleMarkdown.ReactElement}
 */
var ReactMarkdown = function(props) {
    /** @type {Object} */
    var divProps = {};

    for (var prop in props) {
        if (prop !== 'source' &&
            Object.prototype.hasOwnProperty.call(props, prop)
        ) {
            divProps[prop] = props[prop];
        }
    }
    divProps.children = markdownToReact(props.source);

    return reactElement(
        'div',
        null,
        divProps
    );
};


/*:: // Flow exports:
type Exports = {
    +defaultRules: DefaultRules,
    +parserFor: (rules: ParserRules, defaultState?: ?State) => Parser,
    +outputFor: <Rule : Object>(rules: OutputRules<Rule>, param: $Keys<Rule>, defaultState?: ?State) => Output<any>,

    +ruleOutput: <Rule : Object>(rules: OutputRules<Rule>, param: $Keys<Rule>) => NodeOutput<any>,
    +reactFor: (ReactNodeOutput) => ReactOutput,
    +htmlFor: (HtmlNodeOutput) => HtmlOutput,

    +inlineRegex: (regex: RegExp) => MatchFunction,
    +blockRegex: (regex: RegExp) => MatchFunction,
    +anyScopeRegex: (regex: RegExp) => MatchFunction,
    +parseInline: (parse: Parser, content: string, state: State) => ASTNode,
    +parseBlock: (parse: Parser, content: string, state: State) => ASTNode,

    +markdownToReact: (source: string, state?: ?State) => ReactElements,
    +markdownToHtml: (source: string, state?: ?State) => string,
    +ReactMarkdown: (props: { source: string, [string]: any }) => ReactElement,

    +defaultRawParse: (source: string, state?: ?State) => Array<SingleASTNode>,
    +defaultBlockParse: (source: string, state?: ?State) => Array<SingleASTNode>,
    +defaultInlineParse: (source: string, state?: ?State) => Array<SingleASTNode>,
    +defaultImplicitParse: (source: string, state?: ?State) => Array<SingleASTNode>,

    +defaultReactOutput: ReactOutput,
    +defaultHtmlOutput: HtmlOutput,

    +preprocess: (source: string) => string,
    +sanitizeText: (text: Attr) => string,
    +sanitizeUrl: (url: ?string) => ?string,
    +unescapeUrl: (url: string) => string,
    +htmlTag: (tagName: string, content: string, attributes: ?{ [any]: ?Attr }, isClosed: ?boolean) => string,
    +reactElement: (type: string, key: string | null, props: { [string]: any }) => ReactElement,
};

export type {
    // Hopefully you shouldn't have to use these, but they're here if you need!
    // Top-level API:
    State,
    Parser,
    Output,
    ReactOutput,
    HtmlOutput,

    // Most of the following types should be considered experimental and
    // subject to change or change names. Again, they shouldn't be necessary,
    // but if they are I'd love to hear how so I can better support them!

    // Individual Rule fields:
    Capture,
    MatchFunction,
    ParseFunction,
    NodeOutput,
    ArrayNodeOutput,
    ReactNodeOutput,

    // Single rules:
    ParserRule,
    ReactOutputRule,
    HtmlOutputRule,

    // Sets of rules:
    ParserRules,
    OutputRules,
    Rules,
    ReactRules,
    HtmlRules,
};
*/

var SimpleMarkdown /* : Exports */ = {
    defaultRules: defaultRules,
    parserFor: parserFor,
    outputFor: outputFor,

    inlineRegex: inlineRegex,
    blockRegex: blockRegex,
    anyScopeRegex: anyScopeRegex,
    parseInline: parseInline,
    parseBlock: parseBlock,

    // default wrappers:
    markdownToReact: markdownToReact,
    markdownToHtml: markdownToHtml,
    ReactMarkdown: ReactMarkdown,

    defaultBlockParse: defaultBlockParse,
    defaultInlineParse: defaultInlineParse,
    defaultImplicitParse: defaultImplicitParse,

    defaultReactOutput: defaultReactOutput,
    defaultHtmlOutput: defaultHtmlOutput,

    preprocess: preprocess,
    sanitizeText: sanitizeText,
    sanitizeUrl: sanitizeUrl,
    unescapeUrl: unescapeUrl,
    htmlTag: htmlTag,
    reactElement: reactElement,

    // deprecated:
    defaultRawParse: defaultRawParse,
    ruleOutput: ruleOutput,
    reactFor: reactFor,
    htmlFor: htmlFor,

    defaultParse: function() {
        if (typeof console !== 'undefined') {
            console.warn('defaultParse is deprecated, please use `defaultImplicitParse`');
        }
        return defaultImplicitParse.apply(null, /** @type {any} */ (arguments));
    },
    defaultOutput: function() {
        if (typeof console !== 'undefined') {
            console.warn('defaultOutput is deprecated, please use `defaultReactOutput`');
        }
        return defaultReactOutput.apply(null, /** @type {any} */ (arguments));
    }
};

return SimpleMarkdown;

})));
});

var rules = {
  // default rules
  u: simpleMarkdown.defaultRules.u,
  em: simpleMarkdown.defaultRules.em,
  text: simpleMarkdown.defaultRules.text,
  strong: simpleMarkdown.defaultRules.strong,
  escape: simpleMarkdown.defaultRules.escape,
  newline: simpleMarkdown.defaultRules.newline,
  inlineCode: simpleMarkdown.defaultRules.inlineCode,
  blockQuote: simpleMarkdown.defaultRules.blockQuote,
  // fix code block
  codeBlock: _objectSpread2(_objectSpread2({}, simpleMarkdown.defaultRules.codeBlock), {}, {
    match: simpleMarkdown.inlineRegex(/^```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/i),
    parse: function parse(capture, _parse, state) {
      return {
        lang: (capture[2] || '').trim(),
        content: capture[3] || '',
        inQuote: state.inQuote || false
      };
    },
    react: function react(node, output, state) {
      return /*#__PURE__*/React__default['default'].createElement("code", {
        key: state.key
      }, node.content);
    }
  }),
  // fix link
  autolink: _objectSpread2(_objectSpread2({}, simpleMarkdown.defaultRules.autolink), {}, {
    parse: function parse(capture) {
      return {
        content: [{
          type: 'text',
          content: capture[1]
        }],
        target: capture[1]
      };
    },
    react: function react(node, output, state) {
      return /*#__PURE__*/React__default['default'].createElement("a", {
        href: simpleMarkdown.sanitizeUrl(node.target),
        target: node.target.includes('//') && !node.target.includes('dashup.dev') ? '_BLANK' : null,
        key: state.key
      }, output(node.content, state));
    }
  }),
  // fix url
  url: _objectSpread2(_objectSpread2({}, simpleMarkdown.defaultRules.url), {}, {
    parse: function parse(capture) {
      return {
        content: [{
          type: 'text',
          content: capture[1]
        }],
        target: capture[1]
      };
    },
    react: function react(node, output, state) {
      return /*#__PURE__*/React__default['default'].createElement("a", {
        href: simpleMarkdown.sanitizeUrl(node.target),
        target: node.target.includes('//') && !node.target.includes('dashup.dev') ? '_BLANK' : null,
        key: state.key
      }, output(node.content, state));
    }
  }),
  // fix line break
  br: _objectSpread2(_objectSpread2({}, simpleMarkdown.defaultRules.br), {}, {
    match: simpleMarkdown.anyScopeRegex(/^\n/)
  }),
  // fix strike
  strike: _objectSpread2(_objectSpread2({}, simpleMarkdown.defaultRules.del), {}, {
    match: simpleMarkdown.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
  })
}; // default rules

var Embed = null;
var DashupUIContext$5 = null; // create dashup grid body

var DashupUIChatMessage = function DashupUIChatMessage() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // get embeds
  var getEmbeds = function getEmbeds() {
    var _props$message;

    // return embeds
    return (((_props$message = props.message) === null || _props$message === void 0 ? void 0 : _props$message.embeds) || []).filter(function (e) {
      return e && e.data && e.type;
    });
  }; // in thread


  var inThread = function inThread() {
    var _props$message2, _props$message2$by, _props$prev, _props$prev$by, _props$message3, _props$message3$by, _props$message4, _props$message4$by, _props$prev2, _props$prev2$by;

    // return in thread
    return ((_props$message2 = props.message) === null || _props$message2 === void 0 ? void 0 : (_props$message2$by = _props$message2.by) === null || _props$message2$by === void 0 ? void 0 : _props$message2$by.id) === ((_props$prev = props.prev) === null || _props$prev === void 0 ? void 0 : (_props$prev$by = _props$prev.by) === null || _props$prev$by === void 0 ? void 0 : _props$prev$by.id) || !((_props$message3 = props.message) !== null && _props$message3 !== void 0 && (_props$message3$by = _props$message3.by) !== null && _props$message3$by !== void 0 && _props$message3$by.id) && ((_props$message4 = props.message) === null || _props$message4 === void 0 ? void 0 : (_props$message4$by = _props$message4.by) === null || _props$message4$by === void 0 ? void 0 : _props$message4$by.name) === ((_props$prev2 = props.prev) === null || _props$prev2 === void 0 ? void 0 : (_props$prev2$by = _props$prev2.by) === null || _props$prev2$by === void 0 ? void 0 : _props$prev2$by.name);
  }; // parse content


  var parseContent = function parseContent(dashup) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    // state
    var state = {
      inline: true,
      inQuote: false
    }; // add rules

    rules.tags = {
      order: simpleMarkdown.defaultRules.strong.order,
      match: function match(source) {
        return /^[@#]\[([^\]]+)\]\(([^\)]+)\)/.exec(source);
      },
      parse: function parse(capture, _parse, state) {
        // get capture
        var _capture = _slicedToArray(capture, 3),
            replace = _capture[0],
            display = _capture[1],
            id = _capture[2]; // return tag


        return {
          id: id,
          display: display,
          replace: replace,
          trigger: replace[0]
        };
      },
      react: function react(node, output, state) {
        var _color, _color2, _color3;

        // page
        var page = node.trigger === '#' ? dashup.page(node.id) : null; // let color

        var color = page === null || page === void 0 ? void 0 : page.get('color');
        var parent = page && (page.get('parent') || 'root') !== 'root' && dashup.page(page.get('parent')); // get parentmost color

        while (parent && !color) {
          var _parent;

          // get new parent
          parent = parent && (parent.get('parent') || 'root') !== 'root' && dashup.page(parent.get('parent'));
          color = (_parent = parent) === null || _parent === void 0 ? void 0 : _parent.get('color');
        } // url


        var url = node.trigger === '#' ? "/app/".concat(node.id) : null; // return jsx

        return /*#__PURE__*/React__default['default'].createElement(material.Chip, {
          sx: {
            mx: .5,
            color: ((_color = color) === null || _color === void 0 ? void 0 : _color.hex) && theme.palette.getContrastText(color.hex),
            cursor: 'pointer',
            backgroundColor: (_color2 = color) === null || _color2 === void 0 ? void 0 : _color2.hex
          },
          key: state.key,
          size: "small",
          label: node.display,
          avatar: /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
            name: node.display,
            bgColor: (_color3 = color) === null || _color3 === void 0 ? void 0 : _color3.hex
          }, !!(page !== null && page !== void 0 && page.get('icon')) && /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
            icon: page.get('icon')
          })),
          onClick: function onClick() {
            return url && eden.router.go(url);
          },
          contentEditable: false
        });
      }
    }; // parser

    var parser = simpleMarkdown.parserFor(_objectSpread2(_objectSpread2({}, rules), props.rules || {})); // output

    var reactOutput = simpleMarkdown.outputFor(_objectSpread2(_objectSpread2({}, rules), props.rules || {}), 'react'); // return

    return reactOutput(parser(text || '', state), state);
  }; // render body


  var renderBody = function renderBody(data) {
    var _props$message5, _props$message5$by, _props$message6, _props$message6$by;

    // check removed
    if (props.message.removed) return /*#__PURE__*/React__default['default'].createElement(material.Box, null); // return jsx

    return /*#__PURE__*/React__default['default'].createElement(material.Box, {
      mt: inThread() ? 0 : props.size === 'sm' ? 1 : 1.5
    }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 2,
      direction: "row"
    }, inThread() ? /*#__PURE__*/React__default['default'].createElement(material.Box, {
      minWidth: data.size === 'sm' ? 25 : 40
    }) : /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
      src: (_props$message5 = props.message) === null || _props$message5 === void 0 ? void 0 : (_props$message5$by = _props$message5.by) === null || _props$message5$by === void 0 ? void 0 : _props$message5$by.avatar,
      name: (_props$message6 = props.message) === null || _props$message6 === void 0 ? void 0 : (_props$message6$by = _props$message6.by) === null || _props$message6$by === void 0 ? void 0 : _props$message6$by.name,
      sx: {
        width: data.size === 'sm' ? 25 : 40
      }
    }), /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: .5
    }, !inThread() && /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      alignItems: "center"
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        fontWeight: 'bold'
      }
    }, props.message.by.name), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: moment__default['default'](props.message.created_at).format('LL')
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      fontSize: "small"
    }, moment__default['default'](props.message.created_at).fromNow()))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap"
    }, parseContent(data.dashup, props.message.parsed || props.message.message)), !!getEmbeds().length && /*#__PURE__*/React__default['default'].createElement(material.Box, null, getEmbeds().map(function (embed, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(Embed, {
        embed: embed,
        message: props.message,
        noChat: props.noChat
      });
    })))));
  }; // return jsx


  return props.noChat ? renderBody(props) : /*#__PURE__*/React__default['default'].createElement(DashupUIContext$5.Consumer, null, function (data) {
    // render body
    return renderBody(data);
  });
}; // export default page menu


var Message$1 = (function (ctx) {
  // use context
  Embed = Embed$2(ctx);
  DashupUIContext$5 = ctx; // return actual component

  return DashupUIChatMessage;
});

var Message = null;
var DashupUIContext$4 = null; // key

var key = null; // create dashup grid body

var DashupUIChatThread = function DashupUIChatThread() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // scroll ref
  var scrollRef = React.useRef(null); // scroll down

  var scrollDown = function scrollDown() {
    var _scrollRef$current;

    // scroll down
    if (!scrollRef.current) return; // get element

    var scrollElement = (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.getScrollElement(); // check element

    if (!scrollElement) return; // scroll down

    scrollElement.scrollTop = scrollElement.scrollHeight;
  }; // key


  var getKey = function getKey() {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // return key
    return messages.map(function (m) {
      return m.id || m.temp;
    }).join(':');
  }; // return jsx


  return /*#__PURE__*/React__default['default'].createElement(DashupUIContext$4.Consumer, null, function (data) {
    // messages
    var messages = props.messages || data.messages || []; // check messages

    if (getKey(messages) !== key) {
      scrollDown();
      setTimeout(scrollDown, 100); // key

      key = getKey(messages);
    } // return jsx


    return /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1,
      position: "relative"
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }, /*#__PURE__*/React__default['default'].createElement(SimpleBar__default['default'], {
      ref: scrollRef,
      style: {
        width: '100%',
        height: '100%'
      }
    }, messages.map(function (m, i) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(Message, {
        key: "message-".concat(m.temp || m.id),
        prev: messages[i - 1],
        next: messages[i + 1],
        message: m
      });
    }))));
  });
}; // export default page menu


var Thread = (function (ctx) {
  // use context
  Message = Message$1(ctx);
  DashupUIContext$4 = ctx; // return actual component

  return DashupUIChatThread;
});

var DashupUIContext$3 = /*#__PURE__*/React.createContext(); // create menu component

var DashupUIChat = function DashupUIChat() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  //s tate
  var _useState = React.useState(props.messages || []),
      _useState2 = _slicedToArray(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      remove = _useState4[0],
      setRemove = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      var setUpdate = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      removing = _useState8[0],
      setRemoving = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      listening = _useState10[0],
      setListening = _useState10[1]; // get messages


  var getMessages = function getMessages() {
    // return messages
    return Array.from((props.messages || messages).values()).sort(function (a, b) {
      // sort
      if (new Date(a.created_at) > new Date(b.created_at)) return 1;
      if (new Date(a.created_at) < new Date(b.created_at)) return -1; // return 0

      return 0;
    });
  }; // get ctx


  var getCtx = function getCtx() {
    var _eden, _eden$user, _eden2, _eden2$user, _eden3, _eden3$user, _props$dashup;

    // return
    return {
      // by
      by: typeof eden !== 'undefined' ? {
        id: (_eden = eden) === null || _eden === void 0 ? void 0 : (_eden$user = _eden.user) === null || _eden$user === void 0 ? void 0 : _eden$user.get('id'),
        name: (_eden2 = eden) === null || _eden2 === void 0 ? void 0 : (_eden2$user = _eden2.user) === null || _eden2$user === void 0 ? void 0 : _eden2$user.get('name'),
        avatar: (_eden3 = eden) === null || _eden3 === void 0 ? void 0 : (_eden3$user = _eden3.user) === null || _eden3$user === void 0 ? void 0 : _eden3$user.get('avatar.0.thumbs.1x-sq.url')
      } : null,
      // variables
      dashup: props.dashup,
      thread: props.thread,
      // chat
      messages: getMessages(),
      onUpdate: setUpdate,
      onRemove: setRemove,
      onMessage: function onMessage(m) {
        return onMessages([m]);
      },
      canAdmin: props.canAdmin || props.page && ((_props$dashup = props.dashup) === null || _props$dashup === void 0 ? void 0 : _props$dashup.can(props.page, 'manage'))
    };
  }; // create context


  var _useState11 = React.useState(getCtx()),
      _useState12 = _slicedToArray(_useState11, 2),
      ctx = _useState12[0],
      setCtx = _useState12[1]; // on messages


  var onMessages = function onMessages() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // loop
    list.forEach(function (message) {
      // get found
      var found = messages.find(function (m) {
        return m.id === message.id || m.temp && m.temp === message.temp;
      }); // check messages

      if (found) {
        // set value
        Object.keys(message).forEach(function (k) {
          return found[k] = message[k];
        });
      } else {
        // set message
        messages.push(message);
      }
    }); // set messages

    setMessages(_toConsumableArray(messages));
  }; // remove message


  var onRemove = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // send remove
              setRemoving(true); // listen

              _context.next = 3;
              return props.dashup.action({
                type: 'page',
                page: props.page && props.page.get('_id'),
                struct: 'channel'
              }, 'remove', props.thread, remove.id);

            case 3:
              // send remove
              setRemove(null);
              setRemoving(false);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onRemove(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // on remove


  var onRemoveMessage = function onRemoveMessage() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // remove found
    messages = messages.filter(function (m) {
      return !list.find(function (r) {
        return r.id === m.id;
      });
    }); // set messages

    setMessages(_toConsumableArray(messages));
  }; // use effect


  React.useEffect(function () {
    // check messages
    if (typeof props.messages !== 'undefined') return; // add event listener

    props.dashup.socket.on("messages.".concat(props.thread), onMessages);
    props.dashup.socket.on("messages.".concat(props.thread, ".remove"), onRemoveMessage); // thread

    if (listening !== props.thread) {
      // listen
      props.dashup.action({
        type: 'page',
        page: props.page && props.page.get('_id'),
        struct: 'channel'
      }, 'listen', props.thread).then(onMessages); // set listening

      setListening(true);
    } // return unlisten


    return function () {
      // add event listener
      props.dashup.socket.removeListener("messages.".concat(props.thread), onMessages);
      props.dashup.socket.removeListener("messages.".concat(props.thread, ".remove"), onRemoveMessage);
    };
  }, [props.thread]); // messages effect

  React.useEffect(function () {
    // get ctx
    setCtx(getCtx());
  }, [typeof props.messages !== 'undefined' ? props.messages : messages]); // return jsx

  return /*#__PURE__*/React__default['default'].createElement(DashupUIContext$3.Provider, {
    value: ctx
  }, props.children, !!remove && /*#__PURE__*/React__default['default'].createElement(DashupUIModal, {
    show: true,
    onHide: function onHide(e) {
      return setRemove(null);
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIModal.Header, {
    closeButton: true
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIModal.Title, null, "Removing Message")), /*#__PURE__*/React__default['default'].createElement(DashupUIModal.Body, null, /*#__PURE__*/React__default['default'].createElement("p", {
    className: "lead"
  }, "Are you sure you want to remove this message?")), /*#__PURE__*/React__default['default'].createElement(DashupUIModal.Footer, null, /*#__PURE__*/React__default['default'].createElement(material.Button, {
    variant: "primary",
    onClick: function onClick(e) {
      return !setRemove(null) && e.preventDefault();
    }
  }, "Close"), /*#__PURE__*/React__default['default'].createElement(material.Button, {
    variant: "danger",
    className: "ms-2",
    disabled: removing,
    onClick: function onClick(e) {
      return onRemove(e);
    }
  }, removing ? 'Removing...' : 'Confirm'))));
}; // create field


DashupUIChat.Input = Input(DashupUIContext$3);
DashupUIChat.Embed = Embed$2(DashupUIContext$3);
DashupUIChat.Thread = Thread(DashupUIContext$3);
DashupUIChat.Message = Message$1(DashupUIContext$3); // export default

var toString = Object.prototype.toString;

var kindOf = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

const valueOf = Symbol.prototype.valueOf;


function clone(val, deep) {
  switch (kindOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : (/\w+$/.exec(val) || void 0);
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

var shallowClone = clone;

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isobject = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isObjectObject(o) {
  return isobject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

var isPlainObject = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/**
 * Module dependenices
 */





function cloneDeep(val, instanceClone) {
  switch (kindOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return shallowClone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

var cloneDeep_1 = cloneDeep;

var _onEnd = /*#__PURE__*/(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, fields, setFields, setSaving, setConfig, setMenu) {
    var to, item, newIndex, parent, id, create, type, children, newFields, allFields, _loop, _i, _arr;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // item
            to = e.to, item = e.item, newIndex = e.newIndex; // get parent

            parent = to.getAttribute('id').split('-').slice(1).join('-'); // get item id

            id = item.getAttribute('data-field');
            create = false;
            type = item.getAttribute('data-type'); // check id/type

            if (!(!id && !type)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            // add field if it doesn't exist
            if (!id && type) {
              // set id
              id = shortid();
              create = true;
              fields.push({
                type: type,
                uuid: id,
                parent: parent
              });
            } // find children


            children = _toConsumableArray(to.childNodes).map(function (node) {
              // check id
              return node.getAttribute && node.getAttribute('data-field');
            }).filter(function (idX) {
              return idX !== id;
            }); // splice in

            children.splice(newIndex, 0, id); // new columns

            newFields = children.map(function (child) {
              return fields.find(function (c) {
                return c.uuid === child;
              });
            }).filter(function (f) {
              return f;
            }); // set order

            newFields.forEach(function (field, i) {
              field.order = i;
              field.parent = parent;
            }); // loading

            setSaving(true); // all fields

            allFields = []; // loop

            _loop = function _loop() {
              var field = _arr[_i];
              // check has
              if (!allFields.find(function (f) {
                return f.uuid === field.uuid;
              })) allFields.push(field);
            };

            for (_i = 0, _arr = [].concat(_toConsumableArray(newFields), _toConsumableArray(fields)); _i < _arr.length; _i++) {
              _loop();
            } // set page


            _context.next = 18;
            return setFields(allFields);

          case 18:
            // loading
            setSaving(false); // show config

            if (create) {
              if (setMenu) setMenu(false);
              setConfig(fields.find(function (f) {
                return f.uuid === id;
              }));
            }

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
})();

var DashupUIContext$2 = null; // create dashup grid body

var DashupUIFormMenu = function DashupUIFormMenu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // theme
  var theme = styles$1.useTheme(); // state

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1]; // colors


  var colors = ['primary', 'info', 'success', 'warning', 'danger']; // use ref

  var searchRef = React.useRef(null); // use effect

  React.useEffect(function () {
    var _searchRef$current;

    // focus on search ref
    (_searchRef$current = searchRef.current) === null || _searchRef$current === void 0 ? void 0 : _searchRef$current.focus();
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(DashupUIContext$2.Consumer, null, function (data) {
    // available
    data.available.sort(function (a, b) {
      // return sort
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }).forEach(function (item, i) {
      // i
      var t = i; // while

      while (t > colors.length - 1) {
        t = t - colors.length;
      } // color


      item.color = item.color || colors[t];
    });
    return /*#__PURE__*/React__default['default'].createElement(material.Drawer, {
      open: props.open || props.show,
      anchor: "left",
      onClose: props.onClose || props.onHide,
      hideBackdrop: true,
      ModalProps: {
        sx: {
          right: 'auto'
        }
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      px: 3,
      py: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      maxWidth: 360
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      mb: 1
    }, /*#__PURE__*/React__default['default'].createElement(material.Typography, {
      variant: "h5"
    }, props.title || 'Form Fields'), /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: props.onClose || props.onHide,
      sx: {
        ml: 'auto'
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "times"
    }))), /*#__PURE__*/React__default['default'].createElement(material.Typography, {
      gutterBottom: true
    }, "Drag one of these fields into the form where you need it."), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      label: "Search",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      },
      fullWidth: true,
      placeholder: "Filter Fields"
    }), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      my: 2
    }, /*#__PURE__*/React__default['default'].createElement(material.Divider, null)), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      flex: 1,
      position: "relative"
    }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }, /*#__PURE__*/React__default['default'].createElement(SimpleBar__default['default'], {
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React__default['default'].createElement(ReactSortable.ReactSortable, {
      id: "".concat(data.id, "-menu"),
      list: data.available.sort(function (a, b) {
        // return sort
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      }),
      group: data.id,
      onEnd: function onEnd(e) {
        return _onEnd(e, data.fields, data.setFields, data.onSaving, data.onConfig, props.onHide);
      },
      setList: function setList() {}
    }, (data.available || []).sort(function (a, b) {
      // return sort
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }).map(function (field, i) {
      // search
      if (search && search.length) {
        // search string
        var str = "".concat(field.type, " ").concat(field.title, " ").concat(field.description).toLowerCase(); // check search

        if (search.toLowerCase().split(' ').filter(function (t) {
          return t.length;
        }).find(function (tag) {
          // find in value
          return !str.includes(tag);
        })) return null;
      } // return jsx


      return /*#__PURE__*/React__default['default'].createElement(material.Card, {
        variant: "outlined",
        key: "field-".concat(field.type),
        sx: {
          mb: 2,
          cursor: 'move'
        },
        "data-type": field.type
      }, /*#__PURE__*/React__default['default'].createElement(material.CardHeader, {
        avatar: /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
          bgColor: dotProp.get(theme.palette, "".concat(field.color, ".main"))
        }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
          type: "fas",
          icon: field.icon
        })),
        title: field.title,
        subheader: field.description
      }), /*#__PURE__*/React__default['default'].createElement(material.Box, null));
    }).filter(function (i) {
      return i;
    })))))));
  });
}; // export default page menu


var Menu = (function (ctx) {
  // use context
  DashupUIContext$2 = ctx; // return actual component

  return DashupUIFormMenu;
});

var query = createCommonjsModule(function (module) {
(function () {
  function objectify(a) {
    var rows = [];
    for (var key in a) {
      var o = {};
      o[key] = a[key];
      rows.push(o);
    }
    return rows;
  }

  function notNA(val) {
    return val !== '' && val !== undefined && val !== null
  }

  function _get(row, key, getter) {
    if (typeof key == 'number') return key;
    else if (getter) return getter(row, key)
    else return row[key]
  }

// polyfill, since String.startsWith is part of ECMAScript 6,
  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function (searchString, position) {
        position = position || 0;
        return this.lastIndexOf(searchString, position) === position;
      }
    });
  }

// polyfill, since String.endsWith is part of ECMAScript 6,
  if (!String.prototype.endsWith) {
    Object.defineProperty(String.prototype, 'endsWith', {
      value: function (searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
          position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      }
    });
  }

  // should turn this function around so it works more like this
  //
  // var truth = Query(q).satisfies(obj)

  var Query = {

    satisfies: function (row, constraints, getter) {
      if (typeof constraints === 'string') return this.Query(constraints, getter)(row)
      else return Query.lhs._rowsatisfies(row, constraints, getter);
    },

    Query: function (constraints, getter) {
      return function (row) {
        return Query.lhs._rowsatisfies(row, constraints, getter);
      }
    },

    join: function (left_rows, right_rows, left_key, right_key) {

      return left_rows;
    },

    query: function (rows, constraints, getter) {
      if (typeof getter == 'string') {
        var method = getter;
        getter = function (obj, key) {
          return obj[method](key);
        };
      }
      var filter = new Query.Query(constraints, getter);
      return rows.filter(filter);
    },

    lhs: { // queries that are not yet referenced to a particular attribute, e.g. {$not: {likes: 0}}

      // test whether a row satisfies a constraints hash,
      _rowsatisfies: function (row, constraints, getter) {
        for (var key in constraints) {
          if (this[key]) {
            if (!this[key](row, constraints[key], getter)) return false;
          }
          else {
            var val = (getter ? getter(row, key) : row[key]);
            var res = this.rhs._satisfies(val, constraints[key], row, getter);
            if (!res) return false;
          }
        }
        return true;
      },


      /**
       * Custom extension that returns true iff the number of given constraints satisfied by this row equals a given number.
       * This can be used to test logic of the form "Exactly N of the following statements are true"
       * @param row
       * @param condition
       * @param getter
       * @returns {*}
       */
      $count: function (row, condition, getter) {

        var res = condition.$constraints.map(function (c) {
          return Query.satisfies(row, c, getter);
        }).filter(function (v) {
          return v
        }).length;
        return this.rhs._satisfies(res, condition.$constraint)
      },

      /**
       * Custom extension that returns true iff all values in an array are equal (ignoring empty string, null and undefined).
       * This can be used to test if a survey respondent gave all the same answer to a particular set of questions.
       *
       * @method $same
       * @param row
       * @param condition
       * @param getter
       * @returns {boolean}
       */

      $same: function (row, condition, getter) {
        if (Array.isArray(condition)) {
          var vals = condition
              .map(function (key) {
                return (getter ? getter(row, key) : row[key])
              })
              .filter(notNA);

          if (vals.length == 0) return true;
          for (var i = 0; i < vals.length; i++) {
            if (vals[i] != vals[0]) return false
          }
          return true
        }
        throw new Error("$same requires array value ")
      },

      $not: function (row, constraint, getter) {
        return !this._rowsatisfies(row, constraint, getter);
      },

      $or: function (row, constraint, getter) {
        if (!Array.isArray(constraint)) {
          constraint = objectify(constraint);
        }
        for (var i = 0; i < constraint.length; i++) {
          if (this._rowsatisfies(row, constraint[i], getter)) return true;
        }
        return false;
      },

      $and: function (row, constraint, getter) {
        if (!Array.isArray(constraint)) {
          constraint = objectify(constraint);
        }

        for (var i = 0; i < constraint.length; i++) {
          if (!this._rowsatisfies(row, constraint[i], getter)) return false;
        }
        return true;
      },

      $nor: function (row, constraint, getter) {
        return !this.$or(row, constraint, getter)
      },

      $where: function (row, fnDef) {
        throw new Error("$where constraints no longer supported")
        // var fn
        // if (typeof fnDef === 'function') fn = fnDef;
        // else if (typeof fnDef == 'string') {
        //   fn = new Function(
        //       "row", "process", "module", "exports", "__dirname", "__filename", "require", "console", "setImmediate", "setTimeout", "setInterval", "global", "WebAssembly",
        //       fnDef
        //   )
        // }
        // else fn = _.identity
        // var res = fn.call(row)
        // return res;
      },

      $expr: function (row, expr, getter) {
        var result = true;

        for (var key in expr) {
          if (this.rhs[key]) {
            var parts = expr[key];
            var constraint = parts[0];
            var aggrexp = parts[1];

            var operation = Object.keys(aggrexp)[0];
            var operands = aggrexp[operation];
            var value = this.agg[operation](row, operands, getter);
            result = result && this.rhs[key](value, constraint);

          }
        }
        return result;
      },

      /**
       * Partial implementation of MongoDB aggregate expressions
       */
      agg: {
        $sum: function (row, operands, getter) {
          var sum = 0;
          for (var i = 0; i < operands.length; i++) {
            var key = operands[i];
            var val = _get(row, key, getter);
            if (val == +val) {
              sum += +val;
            }
          }
          return sum;
        },

        $min: function (row, operands, getter) {
          var min = +Infinity;
          for (var i = 0; i < operands.length; i++) {
            var key = operands[i];
            var val = _get(row, key, getter);
            if (val == +val) val = +val;
            if (val < min) {
              min = val;
            }
          }
          return min;
        },

        $max: function (row, operands, getter) {
          var max = -Infinity;
          for (var i = 0; i < operands.length; i++) {
            var key = operands[i];
            var val = _get(row, key, getter);
            if (val == +val) val = +val;
            if (val > max) {
              max = val;
            }
          }
          return max;
        },

        $divide: function (row, operands, getter) {
          var num = _get(row, operands[0], getter);
          var den = _get(row, operands[1], getter);
          return num / den
        },

        $same: function (row, condition, getter) {
          if (Array.isArray(condition)) {
            var vals = condition
                .map(function (key) {
                  return (getter ? getter(row, key) : row[key])
                })
                .filter(notNA);

            if (vals.length == 0) return true;
            for (var i = 0; i < vals.length; i++) {
              if (vals[i] != vals[0]) return false
            }
            return true
          }
          throw new Error("$same requires array value ")
        },
      },

      rhs: {  // queries that reference a particular attribute, e.g. {likes: {$gt: 10}}

        $cb: function (value, constraint) {
          return constraint(value)
        },

        // test whether a single value matches a particular constraint
        _satisfies: function (value, constraint, row, getter) {
          if (constraint === value)  return true;
          if (typeof value === 'string') {
            if (((value[0] === '[' ) || (value[0] === '{') )) {
              try {
                value = JSON.parse(value);
              }
              catch (e) {
              }
            }
          }
          if (constraint instanceof RegExp)  return this.$regex(value, constraint);
          else if (Array.isArray(constraint))  return this.$in(value, constraint);
          else if (constraint && typeof constraint === 'object') {
            if (constraint instanceof Date) return this.$eq(value, constraint.getTime())
            else if (constraint.$regex) return this.$regex(value, new RegExp(constraint.$regex, constraint.$options))
            else if (constraint instanceof RegExp) return this.$regex(value, constraint)
            else {
              for (var key in constraint) {
                if (!this[key])  return this.$eq(value, constraint, row, getter)
                else if (!this[key](value, constraint[key], row, getter))  return false;
              }
              return true;
            }
          }
          else if (constraint === '' || constraint === null || constraint === undefined)  return this.$null(value);
          else if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++)
              if (this.$eq(value[i], constraint)) return true;
            return false;
          }

          else return this.$eq(value, constraint, row, getter);
        },


        $eq: function (value, constraint) {
          if (value === constraint) return true;
          else if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++)
              if (this.$eq(value[i], constraint)) return true;
            return false;
          }
          else if (constraint === null || constraint === undefined || constraint === '') {
            return this.$null(value);
          }
          else if (value === null || value === '' || value === undefined) return false; //we know from above the constraint is not null
          else if (value instanceof Date) {

            if (constraint instanceof Date) {
              return value.getTime() == constraint.getTime();
            }
            else if (typeof constraint == 'number') {
              return value.getTime() == constraint;
            }
            else if (typeof constraint == 'string') return value.getTime() == (new Date(constraint)).getTime()
          }
          else {
            return value == constraint
          }

        },


        $exists: function (value, constraint) {
          return (value != undefined) == (constraint && true);
        },

        $deepEquals: function (value, constraint) {
          if (typeof _ == 'undefined' || typeof _.isEqual == 'undefined') {
            return JSON.stringify(value) == JSON.stringify(constraint); //
          }
          else {
            return _.isEqual(value, constraint);
          }
        },

        $not: function (values, constraint) {
          return !this._satisfies(values, constraint);

        },

        $ne: function (values, constraint) {
          return !this._satisfies(values, constraint);
        },

        $nor: function (values, constraint) {
          return !this.$or(values, constraint);
        },

        $and: function (values, constraint) {

          if (!Array.isArray(constraint)) {
            throw new Error("Logic $and takes array of constraint objects");
          }
          for (var i = 0; i < constraint.length; i++) {
            var res = this._satisfies(values, constraint[i]);
            if (!res) return false;
          }
          return true;
        },

        // Identical to $in, but allows for different semantics
        $or: function (values, constraint) {

          if (!Array.isArray(values)) {
            values = [values];
          }

          for (var v = 0; v < values.length; v++) {
            for (var i = 0; i < constraint.length; i++) {
              if (this._satisfies(values[v], constraint[i])) {
                return true;
              }
            }
          }

          return false;
        },

        /**
         * returns true if all of the values in the array are null
         * @param values
         * @returns {boolean}
         */
        $null: function (values) {
          if (values === '' || values === null || values === undefined) {
            return true;
          }
          else if (Array.isArray(values)) {
            if (values.length == 0) return true;
            for (var v = 0; v < values.length; v++) {
              if (!this.$null(values[v])) {
                return false;
              }
            }
            return true;
          }
          else return false;
        },


        /**
         * returns true if any of the values are keys of the constraint
         * @param values
         * @param constraint
         * @returns {boolean}
         */
        $in: function (values, constraint) {
          if (!Array.isArray(constraint)) throw new Error("$in requires an array operand");
          var result = false;
          if (!Array.isArray(values)) {
            values = [values];
          }
          for (var v = 0; v < values.length; v++) {
            var val = values[v];
            for (var i = 0; i < constraint.length; i++) {
              if (constraint.indexOf(val) >= 0 || this._satisfies(val, constraint[i])) {
                result = true;
                break;
              }
            }
          }

          return result;
        },

        $likeI: function (values, constraint) {
          return values.toLowerCase().indexOf(constraint) >= 0;
        },

        $like: function (values, constraint) {
          return values.indexOf(constraint) >= 0;
        },

        $startsWith: function (values, constraint) {
          if (!values) return false;
          return values.startsWith(constraint);
        },

        $endsWith: function (values, constraint) {
          if (!values) return false;
          return values.endsWith(constraint);
        },

        $elemMatch: function (values, constraint) {
          for (var i = 0; i < values.length; i++) {
            if (Query.lhs._rowsatisfies(values[i], constraint)) return true;
          }
          return false;
        },

        $contains: function (values, constraint) {
          return values.indexOf(constraint) >= 0;
        },

        $nin: function (values, constraint) {
          return !this.$in(values, constraint);
        },

        $regex: function (values, constraint) {

          if (Array.isArray(values)) {
            for (var i = 0; i < values.length; i++) {
              //see https://stackoverflow.com/questions/3891641/regex-test-only-works-every-other-time
              if ((new RegExp(constraint)).test(values[i])) {
                return true;
              }
            }
          }
          else return constraint.test(values);
        },

        $gte: function (values, ref) {

          if (Array.isArray(values)) {
            var self = this;
            return values.every(function (v) {
              return self.$gte(v, ref)
            })
          }

          return !this.$null(values) && values >= this.resolve(ref)
        },

        $gt: function (values, ref) {
          if (Array.isArray(values)) {
            var self = this;
            return values.every(function (v) {
              return self.$gt(v, ref)
            })
          }
          return !this.$null(values) && values > this.resolve(ref);
        },

        $lt: function (values, ref) {
          if (Array.isArray(values)) {
            var self = this;
            return values.every(function (v) {
              return self.$lt(v, ref)
            })
          }
          return !this.$null(values) && values < this.resolve(ref);
        },

        $lte: function (values, ref) {
          if (Array.isArray(values)) {
            var self = this;
            return values.every(function (v) {
              return self.$lte(v, ref)
            })
          }
          return !this.$null(values) && values <= this.resolve(ref);
        },


        $before: function (values, ref) {
          if (typeof ref === 'string') ref = Date.parse(ref);
          if (typeof values === 'string') values = Date.parse(values);
          return this.$lte(values, ref)
        },

        $after: function (values, ref) {
          if (typeof ref === 'string') ref = Date.parse(ref);
          if (typeof values === 'string') values = Date.parse(values);

          return this.$gte(values, ref)
        },

        $type: function (values, ref) {
          return typeof values == ref;
        },

        $all: function (values, ref) {
          throw new Error("$all not implemented")
        },

        $size: function (values, ref) {
          return (typeof values == 'object' && (values.length == ref || Object.keys(values).length == ref) );
        },

        $mod: function (values, ref) {
          return values % ref[0] == ref[1]
        },
        $equal: function () {
          return this.$eq(arguments);
        },
        $between: function (values, ref) {
          return this._satisfies(values, {$gt: ref[0], $lt: ref[1]})
        },
        resolve: function (ref) {
          if (typeof ref === 'object') {
            if (ref["$date"]) return Date.parse(ref["$date"])
          }
          return ref;
        }
      }
    }
  };

  // Provide means to parse dot notation for deep Mongo queries, optional for performance
  Query.undot = function (obj, key) {
    var keys = key.split('.'), sub = obj;
    for (var i = 0; i < keys.length; i++) {
      sub = sub[keys[i]];
    }
    return sub;
  };

  // dot notation for deep Mongo queries including arrays, optional for performance
  Query.undotArray = function (obj, key) {
    var keys = key.split('.'), sub = obj;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (Array.isArray(sub)) {
        var intKey = parseInt(key);
        if (!isNaN(intKey)) {
          // Array key was a number e.g some.path.5
          sub = sub[intKey];
        } else {
          // Prop name was not a number
          if (Array.isArray(sub[0])) {
            // Array of arrays - flatten
            sub = sub.reduce(function (result, element) {
              return result.concat(element);
            }, []);
          }
          // must be a prop name from object within the array
          sub = sub.map(function (value) {
            // Recursive to handle multiple nested arrays
            return Query.undotArray(value, key);
          });
        }
      } else {
        sub = sub[key];
      }
    }
    return sub;
  };

  Query.lhs.rhs.$equal = Query.lhs.rhs.$eq;
  Query.lhs.rhs.$any = Query.lhs.rhs.$or;
  Query.lhs.rhs.$all = Query.lhs.rhs.$and;

  Query.valueSatisfiesConstraint = function (value, constraint) {
    return this.lhs.rhs._satisfies(value, constraint)
  };

  // PSV 2020-05-15 Removed per PR#1
  // Array.prototype.query = function (q) {
  //   return Query.query(this, q);
  // }

  //This allows a query object with regex values to be serialized to JSON
  //http://stackoverflow.com/questions/12075927/serialization-of-regexp
  //However, it doesn't solve the problem of parsing them back to regex on input
  RegExp.prototype.toJSON = RegExp.prototype.toString;

  module.exports = Query;

  return Query;
})();
});

var DashupUIContext$1 = null; // create dashup grid body

var DashupUIFormField = function DashupUIFormField() {
  var _struct$data, _struct$data$actions, _props$field, _props$field2, _struct$data2, _struct$data2$actions, _struct$data3, _struct$data3$actions, _props$field3, _props$field7;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // theme
  var theme = styles$1.useTheme(); // get field struct

  var struct = props.getFieldStruct(props.field.type); // clean data

  var cleanQuery = React.useCallback(function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // keys
    Object.keys(obj).map(function (key) {
      // val
      var val = obj[key]; // check key

      if (key.includes('.') && Array.isArray(dotProp.get(props.clean || {}, key.split('.')[0]))) {
        // make elemmatch
        return obj = _defineProperty({}, key.split('.')[0], {
          $elemMatch: _defineProperty({}, key.split('.')[1], val)
        });
      } // check key


      if (key === '$inc') {
        obj = {
          $likeI: val
        };
      }

      if (key === '$eq') return obj = val; // check key

      if (val && typeof val === 'string' && val.includes('{{')) {
        try {
          // compile template
          var tmpl = DashupUIHbs.Handlebars.compile(val); // return actual value

          obj[key] = tmpl(props.clean || {});
        } catch (e) {
          // check value
          obj[key] = '';
        }
      } // check obj


      if (val && val instanceof Object) {
        obj[key] = cleanQuery(val);
      }
    }); // return obj

    return obj;
  }, [JSON.stringify(props.clean)]); // use state

  var _useState = React.useState(struct !== null && struct !== void 0 && (_struct$data = struct.data) !== null && _struct$data !== void 0 && (_struct$data$actions = _struct$data.actions) !== null && _struct$data$actions !== void 0 && _struct$data$actions.includes('sanitise') ? null : cleanQuery({
    val: (_props$field = props.field) === null || _props$field === void 0 ? void 0 : _props$field["default"]
  }).val),
      _useState2 = _slicedToArray(_useState, 2),
      defaultValue = _useState2[0],
      setDefaultValue = _useState2[1];

  var _useState3 = React.useState(!defaultValue && !props.value && !!((_props$field2 = props.field) !== null && _props$field2 !== void 0 && _props$field2["default"]) && (struct === null || struct === void 0 ? void 0 : (_struct$data2 = struct.data) === null || _struct$data2 === void 0 ? void 0 : (_struct$data2$actions = _struct$data2.actions) === null || _struct$data2$actions === void 0 ? void 0 : _struct$data2$actions.includes('sanitise'))),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = React.useState(struct !== null && struct !== void 0 && (_struct$data3 = struct.data) !== null && _struct$data3 !== void 0 && (_struct$data3$actions = _struct$data3.actions) !== null && _struct$data3$actions !== void 0 && _struct$data3$actions.includes('sanitise') ? null : (_props$field3 = props.field) === null || _props$field3 === void 0 ? void 0 : _props$field3["default"]),
      _useState6 = _slicedToArray(_useState5, 2),
      actualDefaultValue = _useState6[0],
      setActualDefaultValue = _useState6[1]; // on break


  var onBreak = function onBreak(e) {
    // set field
    props.setField(props.field, 'break', !props.field["break"]);
  }; // on compress


  var onCompress = function onCompress(e) {
    // set field
    props.setField(props.field, 'col', !props.field.col);
  }; // is visible


  var isViewOnly = React.useCallback(function (clean) {
    // check value
    if ((props.field.viewOnly || '[]').length <= 2) return false; // try/catch

    try {
      // match
      return !query.query([clean], {
        $and: cleanQuery(JSON.parse(props.field.viewOnly))
      }, query.undot).length;
    } catch (e) {} // return true


    return true;
  }, [props.field.viewOnly, JSON.stringify(props.clean)]); // is visible

  var isReadOnly = React.useCallback(function (clean) {
    // check value
    if ((props.field.readOnly || '[]').length <= 2) return false; // try/catch

    try {
      // match
      return !query.query([clean], {
        $and: cleanQuery(JSON.parse(props.field.readOnly))
      }, query.undot).length;
    } catch (e) {} // return true


    return true;
  }, [props.field.readOnly, JSON.stringify(props.clean)]); // check default value

  React.useEffect(function () {
    var _props$field4;

    // check struct actions
    if (props.value) return;
    if (!actualDefaultValue) return;
    if (typeof ((_props$field4 = props.field) === null || _props$field4 === void 0 ? void 0 : _props$field4["default"]) === 'undefined') return; // new default value

    var newDefaultValue = cleanQuery({
      val: actualDefaultValue
    }).val; // check value

    if (JSON.stringify(defaultValue) === JSON.stringify(newDefaultValue)) return; // set value

    setLoading(true);
    setDefaultValue(newDefaultValue); // timeout

    setTimeout(function () {
      return setLoading(false);
    }, 100);
  }, [JSON.stringify(props.clean)]); // check default value

  React.useEffect(function () {
    var _props$field5, _struct$data4, _struct$data4$actions, _props$field6;

    // check struct actions
    if (defaultValue) return setLoading(false);
    if (typeof ((_props$field5 = props.field) === null || _props$field5 === void 0 ? void 0 : _props$field5["default"]) === 'undefined') return setLoading(false);
    if (!(struct !== null && struct !== void 0 && (_struct$data4 = struct.data) !== null && _struct$data4 !== void 0 && (_struct$data4$actions = _struct$data4.actions) !== null && _struct$data4$actions !== void 0 && _struct$data4$actions.includes('sanitise'))) return setLoading(false); // loading default

    setLoading(true); // load value

    props.dashup.action({
      type: 'field',
      page: props.page.get('_id'),
      struct: struct === null || struct === void 0 ? void 0 : struct.type
    }, 'sanitise', props.field, (_props$field6 = props.field) === null || _props$field6 === void 0 ? void 0 : _props$field6["default"]).then(function (data) {
      // check data
      if (!data || !data.sanitised) return setLoading(false); // set value

      setDefaultValue(cleanQuery({
        val: data.sanitised
      }).val);
      setActualDefaultValue(data.sanitised); // loading default

      setLoading(false);
    });
  }, [(_props$field7 = props.field) === null || _props$field7 === void 0 ? void 0 : _props$field7.uuid]); // button sx

  var buttonSx = {
    paddingLeft: 1,
    paddingRight: 1
  }; // return jsx

  return !struct ? null : /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      width: props.col ? 'auto' : '100%',
      display: isViewOnly(props.clean || {}) && !props.updating ? 'none' : 'block',
      position: 'relative',
      '&:hover > .updating': {
        display: 'flex'
      }
    },
    "data-field": props.field.uuid,
    "data-type": props.field.type,
    id: "field-".concat(props.field.uuid).concat(props.iKey ? "-".concat(props.iKey) : '')
  }, props.updating && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      top: 2,
      left: -5,
      right: -5,
      bottom: -1,
      zIndex: 0,
      display: 'none',
      opacity: 0.25,
      position: 'absolute',
      borderRadius: 2,
      backgroundColor: 'primary.main'
    },
    className: "updating"
  }), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      right: 2,
      zIndex: 1,
      bottom: '100%',
      padding: 1,
      display: 'none',
      position: 'absolute',
      alignItems: 'center',
      borderRadius: 2,
      flexDirection: 'row',
      justifyContent: 'end',
      backgroundColor: theme.palette.mode === 'dark' ? 'darker.main' : 'lighter.main'
    },
    className: "updating"
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    selected: true,
    color: "primary",
    size: "small",
    value: "title",
    sx: {
      paddingLeft: 3,
      paddingRight: 3
    }
  }, struct.title, " Field"), /*#__PURE__*/React__default['default'].createElement(material.ToggleButtonGroup, {
    size: "small",
    color: "primary",
    value: [].concat(_toConsumableArray(props.field.col ? ['compress'] : []), _toConsumableArray(props.field["break"] ? ['break'] : []))
  }, /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: props.field.col ? 'Expand Field' : 'Compress Field'
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "compress",
    onClick: function onClick(e) {
      return onCompress();
    },
    sx: buttonSx
  }, props.field.col ? /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "window-maximize",
    fontSize: "small"
  }) : /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "window-minimize",
    fontSize: "small"
  }))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: props.field["break"] ? 'Remove Break after' : 'Add Break after'
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "break",
    onClick: function onClick(e) {
      return onBreak();
    },
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "line-height",
    fontSize: "small"
  }))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Move Field"
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "move",
    onClick: function onClick(e) {
      return onBreak();
    },
    className: "moves",
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "grip-vertical",
    fontSize: "small"
  }))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Field Config"
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "config",
    onClick: function onClick(e) {
      return props.onConfig(props.field);
    },
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "ellipsis-h",
    fontSize: "small"
  })))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Remove Field"
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "trash",
    size: "small",
    onClick: function onClick(e) {
      return props.onRemove(props.field);
    },
    selected: true,
    color: "error",
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "trash",
    fontSize: "small"
  })))))), loading ? /*#__PURE__*/React__default['default'].createElement(material.CircularProgress, null) : /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      opacity: isViewOnly(props.clean || {}) ? .5 : 1
    }
  }, /*#__PURE__*/React__default['default'].createElement(View__default['default'], _extends({}, props, {
    view: "input",
    type: "field",
    dashup: props.dashup || props.dashup,
    struct: props.field.type,
    field: props.field,
    value: props.value || defaultValue,
    onChange: props.onChange || props.onChange,
    onConfig: props.onConfig || props.onConfig,
    readOnly: isReadOnly(props.clean || {}),
    setPrevent: props.setPrevent || props.setPrevent
  }))));
}; // consumer wrapper


var DashupUIFormFieldWrap = function DashupUIFormFieldWrap() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default['default'].createElement(DashupUIContext$1.Consumer, null, function (data) {
    return /*#__PURE__*/React__default['default'].createElement(DashupUIFormField, _extends({}, data, props));
  });
}; // export default page menu


var Field = (function (ctx) {
  // use context
  DashupUIContext$1 = ctx; // return actual component

  return DashupUIFormFieldWrap;
});

var colors = {
  primary: '#3C50E0',
  secondary: '#FFE102',
  info: '#5BC0EB',
  error: '#FF5670',
  success: '#1CBE81',
  warning: '#EE8434',
  dark: '#21222D',
  darker: '#13151B',
  light: '#d9e2f1',
  lighter: '#fff',
  transparent: 'transparent'
};

var DashupContext = null; // global timer

var timer$2; // global debounce

var debounce$2 = function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  // return debounced
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // clear timeout previously
    clearTimeout(timer$2); // create new timeout

    timer$2 = setTimeout(function () {
      return func.apply(void 0, args);
    }, timeout);
  };
}; // create menu component


var DashupUIFormConfig = function DashupUIFormConfig() {
  var _props$field, _struct$data, _struct$data$actions, _struct$data2, _struct$data2$actions, _struct$data5, _field$color, _field$color2, _field$color3, _field$color4;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // get struct
  var struct = props.getFieldStruct((_props$field = props.field) === null || _props$field === void 0 ? void 0 : _props$field.type); // tabs

  var _useState = React.useState(!!(props.field.name || '').length),
      _useState2 = _slicedToArray(_useState, 1),
      named = _useState2[0];

  var _useState3 = React.useState('config'),
      _useState4 = _slicedToArray(_useState3, 2),
      tab = _useState4[0],
      setTab = _useState4[1];

  var _useState5 = React.useState(props.field),
      _useState6 = _slicedToArray(_useState5, 2),
      field = _useState6[0],
      setData = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      color = _useState8[0],
      setColor = _useState8[1];

  var _useState9 = React.useState(!props.value && !!(field !== null && field !== void 0 && field["default"]) && (struct === null || struct === void 0 ? void 0 : (_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : (_struct$data$actions = _struct$data.actions) === null || _struct$data$actions === void 0 ? void 0 : _struct$data$actions.includes('sanitise'))),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = React.useState(struct !== null && struct !== void 0 && (_struct$data2 = struct.data) !== null && _struct$data2 !== void 0 && (_struct$data2$actions = _struct$data2.actions) !== null && _struct$data2$actions !== void 0 && _struct$data2$actions.includes('sanitise') ? null : field === null || field === void 0 ? void 0 : field["default"]),
      _useState12 = _slicedToArray(_useState11, 2),
      defaultValue = _useState12[0],
      setDefaultValue = _useState12[1]; // use ref


  var colorRef = React.useRef(null);
  var labelRef = React.useRef(null); // to label

  var toName = function toName(text) {
    // return cammelcase
    return text.replace(/[\W_]+/g, ' ') // remove non alpha numeric
    .replace(/^[0-9]+/g, '') // remove leadingnumbers
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      // uppercase words
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, ''); // remove spaces
  }; // set field


  var setField = function setField(field, key, value) {
    // check object
    var obj = _defineProperty({}, key, value); // check type


    if (_typeof(key) === 'object') obj = key; // set values

    Object.keys(obj).forEach(function (key) {
      field[key] = obj[key];
    }); // save

    setData(_objectSpread2({}, field)); // save

    debounce$2(props.setField, 200)(field, field);
  }; // on label


  var onLabel = function onLabel(e) {
    // opts
    var opts = {
      label: e.target.value
    }; // name

    var name = toName(e.target.value); // if name includes

    if (!field.name || !named) {
      opts.name = name;
    } // set field


    setField(field, opts);
  }; // on default


  var onDefault = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(val) {
      var _struct$data3, _struct$data3$actions;

      var _yield$props$dashup$a, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // set default
              setDefaultValue(val); // check submit

              if (!(struct !== null && struct !== void 0 && (_struct$data3 = struct.data) !== null && _struct$data3 !== void 0 && (_struct$data3$actions = _struct$data3.actions) !== null && _struct$data3$actions !== void 0 && _struct$data3$actions.includes('submit'))) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return props.dashup.action({
                type: 'field',
                page: props.page.get('_id'),
                struct: struct === null || struct === void 0 ? void 0 : struct.type
              }, 'submit', field, val);

            case 4:
              _yield$props$dashup$a = _context.sent;
              value = _yield$props$dashup$a.value;
              // set val
              val = value;

            case 7:
              // set field
              setField(field, 'default', val);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onDefault(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // check default value


  React.useEffect(function () {
    var _struct$data4, _struct$data4$actions;

    // check struct actions
    if (typeof (field === null || field === void 0 ? void 0 : field["default"]) === 'undefined') return setLoading(false);
    if (!(struct !== null && struct !== void 0 && (_struct$data4 = struct.data) !== null && _struct$data4 !== void 0 && (_struct$data4$actions = _struct$data4.actions) !== null && _struct$data4$actions !== void 0 && _struct$data4$actions.includes('sanitise'))) return setLoading(false); // loading

    setLoading(true); // load value

    props.dashup.action({
      type: 'field',
      page: props.page.get('_id'),
      struct: struct === null || struct === void 0 ? void 0 : struct.type
    }, 'sanitise', field, field === null || field === void 0 ? void 0 : field["default"]).then(function (data) {
      // check data
      if (!data || !data.sanitised) return setLoading(false); // set value

      setDefaultValue(data.sanitised); // loading default

      setLoading(false);
    });
  }, [field === null || field === void 0 ? void 0 : field.type, field === null || field === void 0 ? void 0 : field.uuid]); // use effect

  React.useEffect(function () {
    var _labelRef$current;

    // use effect
    (_labelRef$current = labelRef.current) === null || _labelRef$current === void 0 ? void 0 : _labelRef$current.focus();
  }, []); // tabs

  var tabs = (struct === null || struct === void 0 ? void 0 : (_struct$data5 = struct.data) === null || _struct$data5 === void 0 ? void 0 : _struct$data5.tabs) || ['config']; // return modal

  return !!(field && struct) && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DashupUIModal, {
    show: props.show,
    icon: struct.icon || 'fa fa-align-justify',
    title: "".concat(struct.title, " Block"),
    dashup: props.dashup,
    thread: field.uuid,
    onClose: props.onClose || props.onHide
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    pt: 4,
    pb: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Button, {
    ref: colorRef,
    variant: "contained",
    onClick: function onClick() {
      return setColor(true);
    },
    sx: {
      color: ((_field$color = field.color) === null || _field$color === void 0 ? void 0 : _field$color.hex) && theme.palette.getContrastText((_field$color2 = field.color) === null || _field$color2 === void 0 ? void 0 : _field$color2.hex),
      backgroundColor: (_field$color3 = field.color) === null || _field$color3 === void 0 ? void 0 : _field$color3.hex
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "tint"
  })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    ref: labelRef,
    value: field.label || '',
    label: "Label",
    onChange: function onChange(e) {
      return onLabel(e);
    },
    fullWidth: true
  }), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    value: field.name || '',
    label: "Name",
    onChange: function onChange(e) {
      return setField(field, 'name', toName(e.target.value));
    },
    fullWidth: true
  })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    value: field.placeholder || '',
    label: "Placeholder",
    fullWidth: true,
    onChange: function onChange(e) {
      return setField(field, 'placeholder', e.target.value);
    }
  }), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    value: field.help || '',
    label: "Help Text",
    fullWidth: true,
    onChange: function onChange(e) {
      return setField(field, 'help', e.target.value);
    }
  }))), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1
  }, /*#__PURE__*/React__default['default'].createElement(lab.TabContext, {
    value: tab
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/React__default['default'].createElement(lab.TabList, {
    onChange: function onChange(e, v) {
      return setTab(v.toLowerCase());
    }
  }, tabs.map(function (t, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Tab, {
      key: "tab-".concat(t),
      value: t.toLowerCase(),
      label: t
    });
  }))), tabs.map(function (t, i) {
    var _struct$data6, _struct$data7;

    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(lab.TabPanel, {
      key: "tab-".concat(t),
      value: t.toLowerCase(),
      sx: {
        paddingLeft: 0,
        paddingRight: 0
      }
    }, "".concat(t).toLowerCase() === 'display' && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Box, {
      mb: 2
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIQuery, {
      isString: true,
      page: props.page,
      label: "Read Only When",
      query: field.readOnly,
      dashup: props.dashup,
      fields: props.fields,
      onChange: function onChange(val) {
        return setField(field, 'readOnly', val);
      },
      getFieldStruct: props.getFieldStruct
    })), /*#__PURE__*/React__default['default'].createElement(material.Box, {
      mb: 2
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIQuery, {
      isString: true,
      page: props.page,
      label: "Display only When",
      query: field.viewOnly,
      dashup: props.dashup,
      fields: props.fields,
      onChange: function onChange(val) {
        return setField(field, 'viewOnly', val);
      },
      getFieldStruct: props.getFieldStruct
    }))), /*#__PURE__*/React__default['default'].createElement(View__default['default'], _objectSpread2(_objectSpread2({}, props), {}, {
      type: 'field',
      view: "".concat(t).toLowerCase(),
      struct: field === null || field === void 0 ? void 0 : field.type
    })), "".concat(t).toLowerCase() === 'config' && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !!(struct !== null && struct !== void 0 && (_struct$data6 = struct.data) !== null && _struct$data6 !== void 0 && _struct$data6.multiple) && /*#__PURE__*/React__default['default'].createElement(material.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(material.FormControlLabel, {
      control: /*#__PURE__*/React__default['default'].createElement(material.Switch, {
        checked: !!field.multiple,
        onChange: function onChange(e) {
          return setField(field, 'multiple', e.target.checked);
        }
      }),
      label: "Allow Multiple"
    })), !!(struct !== null && struct !== void 0 && (_struct$data7 = struct.data) !== null && _struct$data7 !== void 0 && _struct$data7["default"]) && !loading && /*#__PURE__*/React__default['default'].createElement(View__default['default'], _objectSpread2(_objectSpread2({}, props), {}, {
      type: 'field',
      view: 'input',
      field: _objectSpread2(_objectSpread2({}, field), {}, {
        label: 'Default Value'
      }),
      value: defaultValue,
      struct: field === null || field === void 0 ? void 0 : field.type,
      onChange: function onChange(field, val) {
        return onDefault(val);
      }
    }))));
  })))), !!color && /*#__PURE__*/React__default['default'].createElement(DashupUIColor, {
    target: colorRef,
    show: true,
    color: (_field$color4 = field.color) === null || _field$color4 === void 0 ? void 0 : _field$color4.hex,
    colors: Object.values(colors),
    onClose: function onClose() {
      return setColor(false);
    },
    onChange: function onChange(hex) {
      return setField(field, 'color', hex.hex === 'transparent' ? null : hex);
    }
  }));
}; // consumer wrapper


var DashupUIFormConfigWrap = function DashupUIFormConfigWrap() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default['default'].createElement(DashupContext.Consumer, null, function (data) {
    return /*#__PURE__*/React__default['default'].createElement(DashupUIFormConfig, _extends({}, data, props));
  });
}; // export default page menu


var Config = (function (ctx) {
  // use context
  DashupContext = ctx; // return actual component

  return DashupUIFormConfigWrap;
});

var DashupUIContext = /*#__PURE__*/React.createContext(); // global timer

var timer$1; // global debounce

var debounce$1 = function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  // return debounced
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // clear timeout previously
    clearTimeout(timer$1); // create new timeout

    timer$1 = setTimeout(function () {
      return func.apply(void 0, args);
    }, timeout);
  };
}; // create menu component


var DashupUIForm = function DashupUIForm() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // set saving
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setSaving = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      config = _useState4[0],
      setConfig = _useState4[1]; // clean data


  var cleanData = function cleanData() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // cleaned
    var cleanedObj = cloneDeep_1(obj); // keys

    Object.keys(cleanedObj).map(function (key) {
      // val
      var val = cleanedObj[key]; // fix value

      if (val && val.id) val = val.id;
      if (val && typeof val.get === 'function') val = val.get('_id');
      if (Array.isArray(val)) val = val.map(function (v) {
        return typeof (v === null || v === void 0 ? void 0 : v.get) === 'function' ? v.get('_id') : (v === null || v === void 0 ? void 0 : v.id) || v;
      }); // set value

      cleanedObj[key] = val; // check obj

      if (val && val instanceof Object && !(val instanceof Date)) {
        cleanedObj[key] = cleanData(val);
      }
    }); // return obj

    return cleanedObj;
  }; // get ctx


  var getCtx = function getCtx() {
    // return
    return {
      onConfig: setConfig,
      onSaving: setSaving,
      // variables
      id: props.id,
      data: props.data,
      page: props.page,
      clean: props.clean || cleanData(props.data),
      fields: props.fields,
      dashup: props.dashup,
      updating: props.updating,
      available: props.available,
      setFields: props.setFields,
      setPrevent: props.setPrevent,
      getFieldStruct: props.getFieldStruct
    };
  }; // create context


  var _useState5 = React.useState(getCtx()),
      _useState6 = _slicedToArray(_useState5, 2),
      ctx = _useState6[0],
      setCtx = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      menu = _useState8[0],
      setMenu = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      remove = _useState10[0],
      setRemove = _useState10[1]; // use effect


  React.useEffect(function () {
    setCtx(getCtx());
  }, [props.updating, props.fields, props.data, JSON.stringify(props.clean)]); // set page

  var setField = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(field, key, value, prevent) {
      var updates, actualField;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // updates
              updates = _defineProperty({}, key, value); // find field

              actualField = (props.fields || []).find(function (f) {
                return f.uuid === field.uuid;
              }); // fix obj

              if (_typeof(key) === 'object') {
                updates = key;
                prevent = value;
              } // loading


              setSaving(true); // set to field

              Object.keys(updates).forEach(function (k) {
                actualField[k] = updates[k];
              }); // set page

              _context.next = 7;
              return props.setFields(props.fields || [], prevent);

            case 7:
              // loading
              setSaving(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setField(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }(); // on change


  var onChange = function onChange(field, value) {
    // set value
    props.data[field.name || field.uuid] = value; // on data

    debounce$1(props.setData, 200)(props.data);
  }; // on remove


  var onRemove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(field) {
      var newFields;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // new columns
              newFields = (props.fields || []).filter(function (f) {
                return f.uuid !== field.uuid;
              }); // loading

              setRemove(null);
              setSaving(true); // set page

              _context2.next = 5;
              return props.setFields(newFields);

            case 5:
              // loading
              setSaving(false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onRemove(_x5) {
      return _ref2.apply(this, arguments);
    };
  }(); // on hide config


  var onHideConfig = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // set config
              setConfig(null);
              setSaving(true); // set page

              _context3.next = 4;
              return props.setFields(_toConsumableArray(props.fields));

            case 4:
              // loading
              setSaving(false);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onHideConfig() {
      return _ref3.apply(this, arguments);
    };
  }(); // get fields


  var getChildren = function getChildren() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';
    // return filtered
    return (props.fields || []).filter(function (f) {
      return (f.parent || 'root') === parent;
    }).sort(function (a, b) {
      // return ordered
      var oA = a.order || 0;
      var bA = b.order || 0; // return order

      if (oA > bA) return 1;
      if (bA > oA) return -1;
      return 0;
    });
  }; // remove jsx


  var removeJsx = /*#__PURE__*/React__default['default'].createElement(material.Dialog, {
    open: !!remove,
    onClose: function onClose() {
      return setRemove(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, null, "Removing ", /*#__PURE__*/React__default['default'].createElement("b", null, remove === null || remove === void 0 ? void 0 : remove.label)), /*#__PURE__*/React__default['default'].createElement(material.DialogContent, null, /*#__PURE__*/React__default['default'].createElement(material.DialogContentText, null, "Are you sure you want to remove ", /*#__PURE__*/React__default['default'].createElement("b", null, (remove === null || remove === void 0 ? void 0 : remove.label) || (remove === null || remove === void 0 ? void 0 : remove.name)), "?")), /*#__PURE__*/React__default['default'].createElement(material.DialogActions, null, /*#__PURE__*/React__default['default'].createElement(material.Button, {
    onClick: function onClick() {
      return setRemove(false);
    }
  }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(material.Button, {
    variant: "contained",
    color: "error",
    onClick: function onClick(e) {
      return onRemove(remove);
    }
  }, "Confirm"))); // check wrapper

  var fieldsJsx = getChildren(props.parent).map(function (field, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: field.uuid
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIForm.Field, {
      iKey: props.iKey,
      field: field,
      value: (ctx.data || {})[field.name || field.uuid],
      dashup: props.dashup,
      onConfig: setConfig,
      onRemove: setRemove,
      setField: setField,
      onChange: onChange,
      getForms: props.getForms,
      getField: props.getField,
      getFields: props.getFields
    }), field["break"] && /*#__PURE__*/React__default['default'].createElement(material.Box, {
      sx: {
        width: '100%'
      }
    }));
  }); // form wrapper

  var formJsx = props.updating ? /*#__PURE__*/React__default['default'].createElement(ReactSortable.ReactSortable, {
    id: "".concat(props.id, "-").concat(props.parent || 'root'),
    list: getChildren(props.parent),
    group: props.id,
    onEnd: function onEnd(e) {
      return _onEnd(e, props.fields, props.setFields, setSaving, setConfig, setMenu);
    },
    handle: ".moves",
    style: {
      paddingTop: getChildren(props.parent).length ? 0 : 15,
      paddingBottom: getChildren(props.parent).length ? 0 : 15
    },
    setList: function setList() {},
    swapThreshold: 5
  }, fieldsJsx) : /*#__PURE__*/React__default['default'].createElement(material.Box, null, fieldsJsx); // return jsx

  return /*#__PURE__*/React__default['default'].createElement(DashupUIContext.Provider, {
    value: ctx
  }, props.adds !== false && props.updating && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Add Field"
  }, /*#__PURE__*/React__default['default'].createElement(material.Fab, {
    onClick: function onClick(e) {
      return setMenu(true);
    },
    color: "primary",
    sx: {
      top: 0,
      left: '50%',
      zIndex: 10,
      position: 'absolute',
      transform: 'translateX(-50%) translateY(-50%)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "plus"
  }))), !props.action ? formJsx : /*#__PURE__*/React__default['default'].createElement("form", {
    action: props.action
  }, formJsx), menu && /*#__PURE__*/React__default['default'].createElement(DashupUIForm.Menu, {
    show: true,
    onHide: function onHide() {
      return setMenu(null);
    },
    setField: setField
  }), config && /*#__PURE__*/React__default['default'].createElement(DashupUIForm.Config, {
    show: !!config,
    field: config,
    fields: props.fields,
    onHide: function onHide() {
      return onHideConfig();
    },
    getForms: props.getForms,
    getField: props.getField,
    setField: setField,
    getFields: props.getFields,
    getChildren: getChildren
  }), removeJsx, props.adds !== false && props.updating && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Add Field"
  }, /*#__PURE__*/React__default['default'].createElement(material.Fab, {
    onClick: function onClick(e) {
      return setMenu(true);
    },
    color: "primary",
    sx: {
      left: '50%',
      bottom: 0,
      zIndex: 10,
      position: 'absolute',
      transform: 'translateX(-50%) translateY(50%)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "plus"
  }))));
}; // export bootstrap form


Object.keys(reactBootstrap.Form).forEach(function (key) {
  DashupUIForm[key] = reactBootstrap.Form[key];
}); // create field

DashupUIForm.Menu = Menu(DashupUIContext);
DashupUIForm.Field = Field(DashupUIContext);
DashupUIForm.Config = Config(DashupUIContext); // export default

var DashupUIItem = function DashupUIItem() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // theme
  var theme = styles$1.useTheme(); // use state

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = React.useState(new Date()),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      var setUpdated = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      tagOpen = _useState6[0],
      setTagOpen = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      userOpen = _useState8[0],
      setUserOpen = _useState8[1]; // add listeners


  React.useEffect(function () {
    // check page
    if (!props.page) return; // on update

    var onUpdate = function onUpdate() {
      // updated
      setUpdated(new Date());
    }; // on update


    props.dashup.action({
      type: 'page',
      struct: 'channel'
    }, 'count', props.item.get('_id')).then(setCount);
    props.dashup.socket.on("count.".concat(props.item.get('_id')), setCount); // on update

    props.item.on('update', onUpdate); // return unlisten

    return function () {
      // off
      props.item.removeListener('update', onUpdate);
      props.dashup.socket.off("count.".concat(props.item.get('_id')), setCount);
    };
  }, [props.item && props.item.get('_id'), props.page && props.page.get('_id')]); // get color

  var getColor = function getColor() {
    var _colorTag$color, _colorTag$color2, _colorTag$color3;

    // color tag
    var colorTag = hasTags() && getTags(getTagFields().find(function (t) {
      return getTags(t).length;
    }))[0]; // get color

    return colorTag !== null && colorTag !== void 0 && colorTag.color ? {
      color: ((_colorTag$color = colorTag.color) === null || _colorTag$color === void 0 ? void 0 : _colorTag$color.hex) && theme.palette.getContrastText((_colorTag$color2 = colorTag.color) === null || _colorTag$color2 === void 0 ? void 0 : _colorTag$color2.hex),
      backgroundColor: (_colorTag$color3 = colorTag.color) === null || _colorTag$color3 === void 0 ? void 0 : _colorTag$color3.hex
    } : null;
  }; // get tag types


  var getTagFields = function getTagFields() {
    // check get field
    if (!props.getField) return []; // set types

    var types = typeof props.tag !== 'undefined' ? props.tag : props.page.get('data.tag') || [];
    if (!Array.isArray(types)) types = [types]; // return fields

    return types.map(function (f) {
      return props.getField(f);
    }).filter(function (f) {
      return f;
    });
  }; // get user types


  var getUserFields = function getUserFields() {
    // check get field
    if (!props.getField) return []; // set types

    var types = typeof props.user !== 'undefined' ? props.user : props.page.get('data.user') || [];
    if (!Array.isArray(types)) types = [types]; // return fields

    return types.map(function (f) {
      return props.getField(f);
    }).filter(function (f) {
      return f;
    });
  }; // get tags


  var getTags = function getTags(tagField) {
    // tag field
    if (!tagField) return []; // get options

    var options = tagField.options || []; // check options

    if (!options.length) return []; // get value

    var val = props.item.get(tagField.name || tagField.uuid) || []; // set value

    if (!Array.isArray(val)) val = [val].filter(function (v) {
      return v;
    }); // tags

    return options.filter(function (t) {
      // return has tag
      return val.includes(t.value);
    });
  }; // get users


  var getUsers = function getUsers(userField) {
    // check options
    if (!userField) return []; // get value

    var val = props.item.get(userField.name || userField.uuid) || []; // set value

    if (!Array.isArray(val)) val = [val].filter(function (v) {
      return v;
    }); // tags

    return val;
  }; // has tags


  var hasTags = function hasTags() {
    // check page
    if (!props.page) return; // tag uuid

    return !!(props.tag || props.page.get('data.tag') || []).length;
  }; // on tag


  var onUser = function onUser(field, value) {
    // get tag value
    props.item.set(field.name || field.uuid, value);
    props.item.save();
  }; // on tag


  var onTag = function onTag(field, value) {
    // get tag value
    var tagVal = props.item.get(field.name || field.uuid) || []; // check array

    if (!Array.isArray(tagVal)) tagVal = [tagVal].filter(function (t) {
      return t && typeof t === 'string';
    }); // check includes

    if (tagVal.includes(value)) {
      tagVal = tagVal.filter(function (v) {
        return v !== value;
      });
    } else {
      tagVal.push(value);
    } // set and save


    props.item.set(field.name || field.uuid, field.multiple ? tagVal : tagVal.pop());
    props.item.save();
  }; // return jsx


  return !props.item || props.item.get('archived') ? null : /*#__PURE__*/React__default['default'].createElement(material.Card, {
    className: "DuiItemCard",
    variant: props.variant,
    sx: {
      color: props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
      borderColor: !props.variant && (getColor() || {}).backgroundColor,
      borderLeftWidth: (getColor() || {}).backgroundColor && !props.variant ? 3 : undefined,
      borderLeftStyle: 'solid',
      backgroundColor: props.color
    }
  }, !!hasTags() && /*#__PURE__*/React__default['default'].createElement(material.CardContent, {
    sx: {
      pb: 0,
      color: props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color))
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    spacing: 1,
    direction: "row",
    flexWrap: "wrap"
  }, getTagFields().map(function (type, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      key: "tag-".concat(type.uuid),
      alignItems: "center"
    }, getTags(type).map(function (tag, a) {
      var _tag$color, _theme$palette;

      // get color
      var color = (_tag$color = tag.color) === null || _tag$color === void 0 ? void 0 : _tag$color.hex; // return jsx

      return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
        title: "".concat(type.label, ": ").concat(tag.value),
        key: "tag-".concat(type.uuid, "-").concat(tag.value)
      }, /*#__PURE__*/React__default['default'].createElement(material.Chip, {
        sx: {
          color: color && ((_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : _theme$palette.getContrastText(color)),
          backgroundColor: color
        },
        size: "small",
        label: tag.label,
        onClick: function onClick(e) {
          return setTagOpen({
            type: type.uuid,
            el: e.target
          });
        },
        onDelete: function onDelete() {}
      }));
    }), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Add ".concat(type.label)
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return setTagOpen({
          type: type.uuid,
          el: e.target
        });
      },
      size: "small"
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "tag",
      fontSize: "small"
    }))), /*#__PURE__*/React__default['default'].createElement(material.Menu, {
      open: (tagOpen === null || tagOpen === void 0 ? void 0 : tagOpen.type) === type.uuid,
      onClose: function onClose() {
        return setTagOpen(null);
      },
      anchorEl: tagOpen === null || tagOpen === void 0 ? void 0 : tagOpen.el,
      MenuListProps: {
        sx: {
          width: 240
        }
      }
    }, /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
      view: "input",
      type: "field",
      struct: type.type,
      dashup: props.dashup,
      field: type,
      value: props.item && props.item.get(type.name || type.uuid),
      onChange: onTag,
      isInline: true,
      autoFocus: true
    })));
  }))), /*#__PURE__*/React__default['default'].createElement(material.CardContent, {
    onClick: function onClick(e) {
      return props.onClick(props.item);
    },
    sx: {
      color: props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
      cursor: 'pointer'
    }
  }, !!props.repeat && /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: props.repeat
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "repeat"
  })), /*#__PURE__*/React__default['default'].createElement(DashupUIHbs, {
    template: props.template,
    data: props.item ? props.item.toJSON() : {},
    isInline: props.size === 'sm'
  })), /*#__PURE__*/React__default['default'].createElement(material.CardContent, {
    sx: {
      pt: 0,
      color: props.color && theme.palette.getContrastText(dotProp.get(theme.palette, props.color)),
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
  }, getUserFields().map(function (type, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Stack, {
      spacing: 1,
      direction: "row",
      key: "tag-".concat(type.uuid),
      alignItems: "center"
    }, getUsers(type).map(function (user, a) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
        title: "".concat(type.label, ": ").concat(user.name),
        key: "tag-".concat(type.uuid, "-").concat(user._id || user.id)
      }, /*#__PURE__*/React__default['default'].createElement(material.Chip, {
        size: "small",
        label: user.name,
        avatar: /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
          image: user.image || user.avatar,
          name: user.name
        }),
        onClick: function onClick(e) {
          return setUserOpen({
            type: type.uuid,
            el: e.target
          });
        },
        onDelete: function onDelete() {}
      }));
    }), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Add ".concat(type.label)
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return setUserOpen({
          type: type.uuid,
          el: e.target
        });
      },
      size: "small"
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "user-plus",
      fontSize: "small"
    }))), /*#__PURE__*/React__default['default'].createElement(material.Menu, {
      open: (userOpen === null || userOpen === void 0 ? void 0 : userOpen.type) === type.uuid,
      onClose: function onClose() {
        return setUserOpen(null);
      },
      anchorEl: userOpen === null || userOpen === void 0 ? void 0 : userOpen.el,
      MenuListProps: {
        sx: {
          width: 240
        }
      }
    }, /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
      view: "input",
      type: "field",
      struct: "user",
      dashup: props.dashup,
      field: type,
      value: props.item && props.item.get(type.name || type.uuid),
      onChange: onUser,
      isInline: true,
      autoFocus: true
    })));
  }), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    ml: "auto"
  }, /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Discuss Item"
  }, /*#__PURE__*/React__default['default'].createElement(material.Badge, {
    badgeContent: props.item.get('_alert.all') || count,
    color: props.item.get('_alert.important') ? 'primary' : props.item.get('_alert.all') ? 'info' : undefined
  }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
    size: "small",
    color: props.item.get('_alert.important') ? 'primary' : props.item.get('_alert.all') ? 'info' : undefined,
    onClick: function onClick(e) {
      return props.onClick(props.item);
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "comments"
  })))))), /*#__PURE__*/React__default['default'].createElement(material.Box, null));
}; // export default

// import dependencies

var DashupUIModal = function DashupUIModal() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default['default'].createElement(material.Dialog, {
    open: !!props.show || !!props.open,
    onClose: props.onClose,
    maxWidth: "lg",
    fullWidth: true
  }, /*#__PURE__*/React__default['default'].createElement(material.DialogContent, {
    sx: {
      padding: 0,
      backgroundColor: 'body.main'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1,
    sx: {
      display: 'flex',
      minHeight: '75vh',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Paper, {
    sx: {
      flex: 1,
      maxWidth: '66%',
      borderRadius: 0
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    p: 2,
    flex: 1,
    sx: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, !!props.title && /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, {
    sx: {
      padding: 0
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, !!props.icon && /*#__PURE__*/React__default['default'].createElement(material.Box, {
    mr: 2
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    icon: props.icon,
    fixedWidth: true
  })), props.title, !!props.headerButtons && /*#__PURE__*/React__default['default'].createElement(material.Box, {
    ml: "auto"
  }, props.headerButtons))), props.children)), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      display: 'flex',
      maxWidth: '34%',
      flexDirection: 'column',
      backgroundColor: 'background.default'
    },
    p: 2,
    flex: 1
  }, /*#__PURE__*/React__default['default'].createElement(material.DialogTitle, {
    sx: {
      padding: 0
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1,
    textAlign: "right"
  }, /*#__PURE__*/React__default['default'].createElement("small", null, moment__default['default'](props.created || new Date()).format('Do MMM, h:mma'))))), props.sidebar, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIChat, {
    size: "sm",
    dashup: props.dashup,
    page: props.page,
    thread: props.thread
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    spacing: 2,
    sx: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIChat.Thread, null)), /*#__PURE__*/React__default['default'].createElement(DashupUIChat.Input, null))))))));
}; // export default page menu

// import block

var DashupUIColor = function DashupUIColor() {
  var _props$target;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return jsx
  return /*#__PURE__*/React__default['default'].createElement(material.Popover, {
    open: !!props.show,
    onClose: function onClose() {
      return props.onClose(false);
    },
    anchorEl: ((_props$target = props.target) === null || _props$target === void 0 ? void 0 : _props$target.current) || props.target,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }, /*#__PURE__*/React__default['default'].createElement(reactColor.BlockPicker, {
    triangle: "hide",
    colors: props.colors,
    color: props.color,
    onChangeComplete: function onChangeComplete(color) {
      return props.onChange({
        hex: color.hex,
        hsl: color.hsl,
        drk: color.hsl.l < .4
      });
    }
  }));
}; // export default

var Chart = null; // export default

var DashupUIChart = function DashupUIChart() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create chat
  var _useState = React.useState(!!Chart),
      _useState2 = _slicedToArray(_useState, 2),
      chart = _useState2[0],
      setChart = _useState2[1]; // use effect


  React.useEffect(function () {
    // check window
    if (typeof window === 'undefined') return; // require later

    var reqChart = require('react-apexcharts'); // set chart


    Chart = reqChart["default"] || reqChart; // set chart

    setChart(true);
  }, [typeof window !== 'undefined']); // return logic

  return props.series && chart ? /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      width: '100%',
      height: '100%',
      '& .apexcharts-tooltip.apexcharts-theme-light': {
        boxShadow: 1,
        borderWidth: 0,
        backgroundColor: 'background.paper'
      },
      '& .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title': {
        borderWidth: 0,
        backgroundColor: 'background.paper'
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement(Chart, _extends({
    width: "100%",
    height: "100%"
  }, props))) : /*#__PURE__*/React__default['default'].createElement(material.Box, null);
}; // export default

var DashupUIBlockMenu = function DashupUIBlockMenu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // theme
  var theme = styles$1.useTheme(); // selected

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1]; // colors


  var colors = ['primary', 'info', 'success', 'warning', 'danger']; // available

  props.available.sort(function (a, b) {
    // return sort
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }).forEach(function (item, i) {
    // i
    var t = i; // while

    while (t > colors.length - 1) {
      t = t - colors.length;
    } // color


    item.color = item.color || colors[t];
  });
  return /*#__PURE__*/React__default['default'].createElement(material.Drawer, {
    open: props.open || props.show,
    anchor: "left",
    onClose: props.onClose || props.onHide
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    px: 3,
    py: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 360
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    mb: 1
  }, /*#__PURE__*/React__default['default'].createElement(material.Typography, {
    variant: "h5"
  }, props.title || 'Grid Blocks'), /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
    onClick: props.onClose || props.onHide,
    sx: {
      ml: 'auto'
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "times"
  }))), /*#__PURE__*/React__default['default'].createElement(material.Typography, {
    gutterBottom: true
  }, "Select one of these blocks and click \"Add Block\" to add it to your grid."), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    label: "Search",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    fullWidth: true,
    placeholder: "Filter Fields"
  }), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    my: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Divider, null)), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    flex: 1,
    position: "relative"
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, /*#__PURE__*/React__default['default'].createElement(SimpleBar__default['default'], {
    style: {
      width: '100%',
      height: '100%'
    }
  }, (props.available || []).sort(function (a, b) {
    // return sort
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }).map(function (block, i) {
    // search
    if (search && search.length) {
      // search string
      var str = "".concat(block.type, " ").concat(block.title, " ").concat(block.description).toLowerCase(); // check search

      if (search.toLowerCase().split(' ').filter(function (t) {
        return t.length;
      }).find(function (tag) {
        // find in value
        return !str.includes(tag);
      })) return null;
    } // return jsx


    return /*#__PURE__*/React__default['default'].createElement(material.Card, {
      variant: "outlined",
      key: "block-".concat(block.type),
      sx: {
        mb: 2,
        color: block.type === selected ? theme.palette.getContrastText(theme.palette.primary.main) : undefined,
        cursor: 'pointer',
        backgroundColor: block.type === selected ? 'primary.light' : undefined
      },
      onClick: function onClick(e) {
        return setSelected(block.type);
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.CardHeader, {
      sx: {
        color: block.type === selected ? theme.palette.getContrastText(theme.palette.primary.main) : undefined
      },
      avatar: /*#__PURE__*/React__default['default'].createElement(DashupAvatar, {
        bgColor: block.type === selected ? 'primary.main' : block.color && dotProp.get(theme.palette, "".concat(block.color, ".main"))
      }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        type: "fas",
        icon: block.icon
      })),
      title: block.title,
      subheader: block.description
    }), /*#__PURE__*/React__default['default'].createElement(material.Box, null));
  }).filter(function (i) {
    return i;
  })))), !!selected && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    my: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Divider, null)), /*#__PURE__*/React__default['default'].createElement(material.Button, {
    color: "primary",
    size: "large",
    variant: "contained",
    fullWidth: true,
    onClick: function onClick(e) {
      props.onBlock(selected);
      (props.onClose || props.onHide)();
    }
  }, "Add Block"))));
}; // export default page menu

var DashupUIBlockConfig = function DashupUIBlockConfig() {
  var _struct$data, _props$block$color, _props$block$color2, _props$block$color3, _props$block;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // theme
  var theme = styles$1.useTheme(); // tabs

  var _useState = React.useState('config'),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1]; // refs


  var colorRef = React.useRef(null); // get struct

  var struct = props.getBlockStruct(props.block.type); // tabs

  var tabs = (struct === null || struct === void 0 ? void 0 : (_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : _struct$data.tabs) || ['config']; // return JSX

  return !!props.block && !!struct ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DashupUIModal, {
    show: props.show,
    icon: struct.icon || 'fa fa-align-justify',
    title: "".concat(struct.title, " Block"),
    dashup: props.dashup,
    thread: props.block.uuid,
    onClose: props.onClose || props.onHide
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    pt: 4,
    pb: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.Button, {
    ref: colorRef,
    variant: "contained",
    onClick: function onClick() {
      return setColor(true);
    },
    sx: {
      color: ((_props$block$color = props.block.color) === null || _props$block$color === void 0 ? void 0 : _props$block$color.hex) && theme.palette.getContrastText((_props$block$color2 = props.block.color) === null || _props$block$color2 === void 0 ? void 0 : _props$block$color2.hex),
      backgroundColor: (_props$block$color3 = props.block.color) === null || _props$block$color3 === void 0 ? void 0 : _props$block$color3.hex
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "tint"
  })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    value: props.block.name || '',
    label: "Name",
    onChange: function onChange(e) {
      return props.setBlock(props.block, 'name', e.target.value);
    },
    fullWidth: true
  })))), /*#__PURE__*/React__default['default'].createElement(lab.TabContext, {
    value: tab
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      mb: 2
    }
  }, /*#__PURE__*/React__default['default'].createElement(lab.TabList, {
    onChange: function onChange(e, v) {
      return setTab(v.toLowerCase());
    }
  }, tabs.map(function (t, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Tab, {
      key: "tab-".concat(t),
      value: t.toLowerCase(),
      label: t
    });
  })))), /*#__PURE__*/React__default['default'].createElement(View__default['default'], _objectSpread2(_objectSpread2({}, props), {}, {
    type: 'block',
    view: tab,
    struct: props.block.type
  }))), !!color && /*#__PURE__*/React__default['default'].createElement(DashupUIColor, {
    target: colorRef,
    show: true,
    color: (_props$block = props.block) === null || _props$block === void 0 ? void 0 : _props$block.hex,
    colors: Object.values(colors),
    onClose: function onClose() {
      return setColor(false);
    },
    onChange: function onChange(hex) {
      return props.setBlock(props.block, 'color', hex.hex === 'transparent' ? null : hex);
    }
  })) : null;
}; // export default page menu

var DashupUIBlock = function DashupUIBlock() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // set theme
  var theme = styles$1.useTheme(); // struct

  var struct = props.getBlockStruct && props.getBlockStruct(props.block.type); // button sx

  var buttonSx = {
    paddingLeft: 1,
    paddingRight: 1
  }; // return jsx

  return /*#__PURE__*/React__default['default'].createElement(material.Box, {
    width: "100%",
    height: "100%",
    display: "flex",
    position: "relative",
    sx: {
      '&:hover > .updating': {
        display: 'flex'
      }
    }
  }, !!props.updating && /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: {
      right: 2,
      zIndex: 1,
      bottom: '100%',
      padding: 1,
      display: 'none',
      position: 'absolute',
      alignItems: 'center',
      borderRadius: 2,
      flexDirection: 'row',
      justifyContent: 'end',
      backgroundColor: theme.palette.mode === 'dark' ? 'darker.main' : 'lighter.main'
    },
    className: "updating"
  }, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    selected: true,
    color: "primary",
    size: "small",
    value: "title",
    sx: {
      paddingLeft: 3,
      paddingRight: 3
    }
  }, struct === null || struct === void 0 ? void 0 : struct.title, " Block"), /*#__PURE__*/React__default['default'].createElement(material.ToggleButtonGroup, {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Clone Field"
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "clone",
    onClick: function onClick(e) {
      return props.onClone(props.block);
    },
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "clone",
    fontSize: "small"
  }))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Field Config"
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "config",
    onClick: function onClick(e) {
      return props.onConfig(props.block);
    },
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "ellipsis-h",
    fontSize: "small"
  })))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
    title: "Remove Block"
  }, /*#__PURE__*/React__default['default'].createElement(material.ToggleButton, {
    value: "trash",
    size: "small",
    onClick: function onClick(e) {
      return props.onRemove(props.block);
    },
    selected: true,
    color: "error",
    sx: buttonSx
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "trash",
    fontSize: "small"
  }))))), /*#__PURE__*/React__default['default'].createElement(View__default['default'], _extends({
    type: "block",
    view: "view",
    struct: props.block.type
  }, props)));
}; // set children blocks


DashupUIBlock.Menu = DashupUIBlockMenu;
DashupUIBlock.Config = DashupUIBlockConfig; // export default

var DashupUIQueryRule = function DashupUIQueryRule() {
  var _field, _field2, _getSub, _getSub2, _getBottom, _getSub3, _getBottom2;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // key
  var _useState = React.useState(Object.keys(props.value)[0]),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1]; // get parts


  var op = key && Object.keys(Object.values(props.value || {})[0])[0];
  var parts = key.split('..').join('.').split('.').filter(function (p) {
    return p.length;
  }); // set value

  var onOp = function onOp(val) {
    // data value
    var dataValue = ((props.value || {})[key] || {})[op] || null; // get current key

    props.setValue(_defineProperty({}, key, _defineProperty({}, val, dataValue)));
  }; // on part


  var onPart = function onPart(i, key, sub) {
    // set parts
    parts[i] = key; // sub

    if (sub) parts[i + 1] = sub; // new parts

    var newParts = parts.slice(0, i + (sub ? 2 : 1)).filter(function (p) {
      return p && p.length;
    }); // data value

    var dataValue = (props.value || {})[key] || {
      $eq: null
    }; // check value

    setKey(newParts.join('.')); // get current key

    props.setValue(_defineProperty({}, newParts.join('.'), dataValue));
  }; // on value


  var onValue = function onValue(val) {
    // fix value
    if (val && val.id) val = val.id;
    if (val && typeof val.get === 'function') val = val.get('_id');
    if (Array.isArray(val)) val = val.map(function (v) {
      return typeof (v === null || v === void 0 ? void 0 : v.get) === 'function' ? v.get('_id') : (v === null || v === void 0 ? void 0 : v.id) || v;
    });
    if (!['$in', '$nin'].includes(op) && Array.isArray(val)) val = val[0]; // data value

    props.setValue(_defineProperty({}, key, _defineProperty({}, op, val)));
  }; // get bottom


  var getBottom = function getBottom() {
    // get last part
    var lastPart = parts[parts.length - 1]; // previous last part

    if (!props.fields[lastPart]) {
      lastPart = parts[parts.length - 2];
    } // get field


    return props.fields[lastPart];
  }; // get children


  var getChildren = function getChildren(field) {
    // return values
    return Object.values(props.fields).filter(function (f) {
      return f.parent && field.uuid && f.parent === field.uuid;
    });
  }; // get sub


  var getSub = function getSub() {
    // get bottom
    var field = getBottom(); // bottom

    if (!field) return; // get subs

    var subs = field.subs || []; // find

    return subs.find(function (s) {
      return s.key === parts[parts.length - 1];
    }) || subs.find(function (s) {
      return s["default"];
    });
  }; // has subs


  var hasSubs = function hasSubs() {
    var _field$subs;

    // field
    var field = getBottom(); // check field

    if (!field) return; // has subs

    return !!((_field$subs = field.subs) !== null && _field$subs !== void 0 && _field$subs.length);
  }; // has children


  var hasChildren = function hasChildren() {
    // field
    var field = getBottom(); // check field

    if (!field) return; // children

    var children = getChildren(field); // return children

    return !!children.length;
  };
  /**
   * get opts
   */


  var getOps = function getOps() {
    // get bottom
    var sub = getSub(); // check sub

    if (sub) return sub.operators || []; // field

    var field = getBottom(); // check field

    if (!field) return []; // operators

    return field.operators || [];
  }; // width


  var sx = {
    maxWidth: '25%',
    minWidth: '25%'
  }; // return jsx

  return /*#__PURE__*/React__default['default'].createElement(material.Card, {
    variant: "outlined",
    sx: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.CardContent, null, /*#__PURE__*/React__default['default'].createElement(material.Stack, {
    direction: "row",
    spacing: 1,
    sx: {
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, null, /*#__PURE__*/React__default['default'].createElement(material.IconButton, null, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "bars"
  }))), parts.map(function (p, i) {
    // get part field
    var prev = i > 0 && props.fields[parts[i - 1]];
    var field = props.fields[p]; // check field

    if (!field && i > 0) return null; // return jsx

    return /*#__PURE__*/React__default['default'].createElement(material.TextField, {
      sx: sx,
      key: "field-".concat((field === null || field === void 0 ? void 0 : field.uuid) || i),
      label: "Select Field",
      value: (field === null || field === void 0 ? void 0 : field.name) || (field === null || field === void 0 ? void 0 : field.uuid) || '',
      margin: "none",
      select: true,
      onChange: function onChange(e) {
        return onPart(i, e.target.value);
      }
    }, Object.values(props.fields || {}).filter(function (f) {
      // check prev
      if (prev) return f.parent === prev.uuid; // root only

      return (f.parent || 'root') === 'root';
    }).map(function (field) {
      // return jsx
      return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
        key: field.uuid,
        value: field.name || field.uuid
      }, field.label || field.uuid);
    }));
  }), hasChildren() && /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    sx: sx,
    label: "Select Field",
    margin: "none",
    value: ((_field = field) === null || _field === void 0 ? void 0 : _field.name) || ((_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.uuid) || '',
    select: true,
    onChange: function onChange(e) {
      var _field$subs2;

      // get value
      var val = e.target.value; // check value

      var field = props.fields[val]; // field

      if (!field) return; // default sub

      var defaultSub = (_field$subs2 = field.subs) === null || _field$subs2 === void 0 ? void 0 : _field$subs2.find(function (s) {
        return s["default"];
      }); // on part

      if (defaultSub) {
        onPart(parts.length + 1, val, defaultSub.key);
      } else {
        onPart(parts.length, val);
      }
    }
  }, getChildren(getBottom()).map(function (field) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      key: field.uuid,
      value: field.name || field.uuid
    }, field.label || field.uuid);
  })), hasSubs() && /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    sx: sx,
    label: "Select Sub Field",
    value: (_getSub = getSub()) === null || _getSub === void 0 ? void 0 : _getSub.key,
    margin: "none",
    select: true,
    onChange: function onChange(e) {
      return onPart(parts.length - (getSub() && getSub().key === parts[parts.length - 1] ? 1 : 0), e.target.value);
    }
  }, getBottom().subs.map(function (field) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      key: field.key,
      value: field.key
    }, field.label || field.key);
  })), !!getOps().length && /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    sx: sx,
    label: "Select Operator",
    value: op,
    margin: "none",
    select: true,
    onChange: function onChange(e) {
      return onOp(e.target.value);
    }
  }, Object.keys(props.operators || {}).map(function (key, i) {
    // check null
    if (!getOps().includes(key)) return null; // return value

    return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      key: key,
      value: key
    }, props.operators[key].title);
  })), !!(op && getBottom()) && /*#__PURE__*/React__default['default'].createElement(material.Box, {
    sx: sx
  }, /*#__PURE__*/React__default['default'].createElement(View__default['default'], {
    page: props.page,
    view: "input",
    type: "field",
    margin: "none",
    dashup: props.dashup,
    struct: op === '$exists' ? 'boolean' : ((_getSub2 = getSub()) === null || _getSub2 === void 0 ? void 0 : _getSub2.type) || ((_getBottom = getBottom()) === null || _getBottom === void 0 ? void 0 : _getBottom.type),
    noLabel: true,
    field: _objectSpread2(_objectSpread2(_objectSpread2({}, getBottom()), getSub() || {}), {}, {
      label: ((_getSub3 = getSub()) === null || _getSub3 === void 0 ? void 0 : _getSub3.label) || ((_getBottom2 = getBottom()) === null || _getBottom2 === void 0 ? void 0 : _getBottom2.label),
      multiple: ['$in', '$nin'].includes(op)
    }),
    value: ((props.value || {})[key] || {})[op],
    onChange: function onChange(f, val) {
      return onValue(val);
    }
  })), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    ml: "auto"
  }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
    color: "error",
    onClick: function onClick(e) {
      return props.onRemove();
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "trash"
  }))))), /*#__PURE__*/React__default['default'].createElement(material.Box, null));
}; // export default

var DashupUIQueryGroup = function DashupUIQueryGroup() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // op
  var op = Object.keys(props.value || {})[0]; // operator

  var setOperator = function setOperator(val) {
    // op
    var dv = props.value[op] || []; // check value

    props.setValue(_defineProperty({}, val, dv));
  }; // set value


  var _setValue = function setValue(i, val) {
    // op
    var dv = props.value[op] || []; // value

    dv[i] = val; // check value

    props.setValue(_defineProperty({}, op, dv));
  }; // on remove


  var _onRemove = function onRemove(i) {
    // op
    var dv = props.value[op] || []; // remove

    dv.splice(i, 1); // remove

    props.setValue(_defineProperty({}, op, dv));
  }; // return jsx


  return /*#__PURE__*/React__default['default'].createElement(material.Card, {
    variant: "outlined",
    sx: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.CardContent, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "bars"
  })), /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    size: "small",
    value: props.operator || '',
    label: "Operator",
    margin: "none",
    select: true,
    onChange: function onChange(e) {
      return setOperator(e.target.value);
    }
  }, Object.keys(props.groups || {}).map(function (op) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.MenuItem, {
      key: op,
      value: op
    }, props.groups[op].title);
  })), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    ml: "auto"
  }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
    onClick: function onClick(e) {
      return !props.setValue(_defineProperty({}, op, [].concat(_toConsumableArray(props.value[op]), [{
        $eq: {}
      }]))) && e.preventDefault();
    }
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "plus"
  })), /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
    onClick: function onClick(e) {
      return props.onRemove();
    },
    color: "error"
  }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
    type: "fas",
    icon: "trash"
  })))), !!(props.value[op] || []).length && /*#__PURE__*/React__default['default'].createElement(material.CardContent, null, (props.value[op] || []).map(function (val, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Box, {
      ml: 2,
      key: "rule-".concat(i)
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIQueryRule, {
      page: props.page,
      value: val,
      fields: props.fields,
      groups: props.groups,
      dashup: props.dashup,
      onRemove: function onRemove() {
        return _onRemove(i);
      },
      setValue: function setValue(val) {
        return _setValue(i, val);
      },
      operators: props.operators
    }));
  })), /*#__PURE__*/React__default['default'].createElement(material.Box, null));
}; // export default

var operators = {
  $eq: {
    fn: 'eq',
    title: 'Equals',
    symbol: '=='
  },
  $ne: {
    fn: 'ne',
    title: 'Doesn\'t Equal',
    symbol: '!='
  },
  $gt: {
    fn: 'gt',
    title: 'Greater than',
    symbol: '>'
  },
  $gte: {
    fn: 'gte',
    title: 'Greater than or Equal to',
    symbol: '>='
  },
  $in: {
    "in": 'in',
    title: 'Includes',
    symbol: 'in'
  },
  $nin: {
    fn: 'nin',
    title: 'Does not Include',
    symbol: 'nin'
  },
  $lt: {
    fn: 'lt',
    title: 'Less than',
    symbol: '<'
  },
  $lte: {
    fn: 'lte',
    title: 'Less than or Equal to',
    symbol: '<='
  },
  $inc: {
    fn: 'inc',
    title: 'Contains',
    symbol: '~='
  },
  $ninc: {
    fn: 'ninc',
    title: 'Does not Contain',
    symbol: '!~='
  },
  $exists: {
    fn: 'exists',
    title: 'Exists',
    symbol: '!!'
  }
}; // groups

var groups = {
  $and: {
    title: 'And',
    symbol: 'and'
  },
  $or: {
    title: 'Or',
    symbol: 'or'
  },
  $not: {
    title: 'Not',
    symbol: 'not'
  },
  $nor: {
    title: 'Not or',
    symbol: 'nor'
  }
}; // global timer

var timer; // global debounce

var debounce = function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  // return debounced
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // clear timeout previously
    clearTimeout(timer); // create new timeout

    timer = setTimeout(function () {
      return func.apply(void 0, args);
    }, timeout);
  };
}; // create menu component


var DashupUIQuery = function DashupUIQuery() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // query
  var query = props.query || []; // check string

  if (props.isString) {
    try {
      query = JSON.parse(query);
    } catch (e) {}
  } // use state


  var _useState = React.useState(query),
      _useState2 = _slicedToArray(_useState, 2),
      tree = _useState2[0],
      setTree = _useState2[1]; // get fields


  var getFields = function getFields() {
    // return nothing yet
    return (props.fields || []).reduce(function (accum, field) {
      var _struct$data, _struct$data2;

      // struct
      var struct = props.getFieldStruct(field.type); // field

      accum[field.name || field.uuid] = _objectSpread2(_objectSpread2({}, field), {}, {
        subs: (struct === null || struct === void 0 ? void 0 : (_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : _struct$data.subs) || null,
        icon: struct === null || struct === void 0 ? void 0 : struct.icon,
        operators: (struct === null || struct === void 0 ? void 0 : (_struct$data2 = struct.data) === null || _struct$data2 === void 0 ? void 0 : _struct$data2.operators) || ['$eq']
      }); // return accum

      return accum;
    }, {});
  }; // on change


  var onChange = function onChange(val) {
    // update
    setTree(_toConsumableArray(val)); // run props

    debounce(props.onChange)(props.isString ? JSON.stringify(val) : val);
  }; // on remove


  var _onRemove = function onRemove(i) {
    // remove
    tree.splice(i, 1); // on change

    onChange(tree);
  }; // set query


  var _setValue = function setValue(i, value) {
    // set value
    tree[i] = value; // on change

    onChange(tree);
  }; // return jsx


  return /*#__PURE__*/React__default['default'].createElement(material.Card, {
    variant: "outlined",
    sx: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.CardHeader, {
    title: props.label,
    action: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Add Rule"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return !setTree([].concat(_toConsumableArray(tree), [{
          $eq: {}
        }])) && e.preventDefault();
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "plus"
    }))), /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
      title: "Add Rule Group"
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return !setTree([].concat(_toConsumableArray(tree), [{
          $and: []
        }])) && e.preventDefault();
      }
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      type: "fas",
      icon: "object-group"
    }))))
  }), !!(tree || []).length && /*#__PURE__*/React__default['default'].createElement(material.CardContent, null, tree.map(function (group, i) {
    // get key
    var key = Object.keys(group)[0]; // get el

    var SubEl = DashupUIQueryRule; // check includes

    if (groups[key]) {
      SubEl = DashupUIQueryGroup;
    } // return jsx


    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: "query-".concat(i)
    }, /*#__PURE__*/React__default['default'].createElement(SubEl, {
      page: props.page,
      value: group,
      groups: groups,
      fields: getFields(),
      dashup: props.dashup,
      operator: key,
      onRemove: function onRemove() {
        return _onRemove(i);
      },
      setValue: function setValue(val) {
        return _setValue(i, val);
      },
      operators: operators
    }));
  })), /*#__PURE__*/React__default['default'].createElement(material.Box, null));
}; // rule/group


DashupUIQuery.Rule = DashupUIQueryRule;
DashupUIQuery.Group = DashupUIQueryGroup; // export default

var DashupAvatar = function DashupAvatar() {
  var _theme$palette;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // get image thumb
  var name = props.name || '';
  var thumb = !props.image ? props.src : dotProp.get(props, 'image.thumbs.2x-sq.url') || dotProp.get(props, 'image.0.thumbs.2x-sq.url'); // string to color

  var stringToColor = function stringToColor(string) {
    var hash = 0;
    var i;
    /* eslint-disable no-bitwise */

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    var color = '#';

    for (i = 0; i < 3; i += 1) {
      var value = hash >> i * 8 & 0xff;
      color += "00".concat(value.toString(16)).substr(-2);
    }
    /* eslint-enable no-bitwise */


    return color;
  }; // string avatar


  var stringAvatar = function stringAvatar() {
    // return
    return {
      children: (name || '').length ? "".concat((name.split(' ')[0] || [])[0] || '').concat((name.split(' ')[1] || [])[0] || '').toUpperCase() : null
    };
  }; // color


  var color = props.bgColor || !!(name || '').length && stringToColor(name); // get sx

  var sx = _objectSpread2({
    color: color && ((_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : _theme$palette.getContrastText(dotProp.get(theme.palette, color) || color)),
    backgroundColor: color
  }, props.sx);

  var goodProps = _objectSpread2({}, props); // delete bgColor


  delete goodProps.bgColor; // check children

  if (props.children) {
    // return original
    return /*#__PURE__*/React__default['default'].createElement(material.Avatar, _extends({}, goodProps, {
      sx: sx
    }));
  } // return value


  return thumb ? /*#__PURE__*/React__default['default'].createElement(material.Avatar, _extends({}, goodProps, {
    sx: sx,
    alt: name,
    src: thumb
  })) : /*#__PURE__*/React__default['default'].createElement(material.Avatar, _extends({}, goodProps, {
    sx: sx
  }, stringAvatar()));
}; // export default

var DashupUIIconPicker = function DashupUIIconPicker() {
  var _props$target;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // use state
  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1]; // get icons


  var getIcons = function getIcons() {
    // return icons
    return (fontAwesomeIconChars.solid || []).filter(function (icon) {
      // icon
      return search && search.length ? icon.name.includes("".concat(search).toLowerCase()) : true;
    }).slice(0, 4 * 10);
  }; // on icon


  var onIcon = function onIcon(e, name) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // run super

    if (props.onChange) props.onChange(name);
  }; // return jsx


  return /*#__PURE__*/React__default['default'].createElement(material.Popover, {
    open: !!props.show,
    onClose: function onClose() {
      return props.onClose(false);
    },
    anchorEl: ((_props$target = props.target) === null || _props$target === void 0 ? void 0 : _props$target.current) || props.target,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Box, {
    p: 2
  }, /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    label: "Search",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  })), /*#__PURE__*/React__default['default'].createElement(material.Box, {
    width: 240,
    height: 360
  }, /*#__PURE__*/React__default['default'].createElement(SimpleBar__default['default'], {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React__default['default'].createElement(material.Grid, {
    container: true,
    spacing: 1
  }, getIcons().map(function (icon) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(material.Grid, {
      key: icon.name,
      item: true,
      xs: 3,
      sx: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
      onClick: function onClick(e) {
        return onIcon(e, icon.name);
      },
      color: props.icon && props.icon.split(' ')[0] === icon.name ? 'primary' : undefined
    }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
      icon: icon.name
    })));
  })))));
}; // export default

var DashupUIPermission = function DashupUIPermission() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // theme
  var theme = styles$1.useTheme(); // get pages

  var getPages = function getPages(page) {
    // set page
    if (!page) page = props.page; // return items

    return Array.from(props.dashup.get('pages').values()).filter(function (item) {
      return !item.get('archived') && item.get('parent') === page.get('_id');
    }).sort(function (a, b) {
      // get order
      if (a.get('order') > b.get('order')) return 1;
      if (a.get('order') < b.get('order')) return -1; // return no change

      return 0;
    });
  }; // get icon


  var getIcon = function getIcon() {
    // pencil
    return props.page.get('icon') || 'pencil fa';
  }; // on toggle


  var onToggle = function onToggle(type) {
    // update
    if (props.hasAcl(props.page, type)) {
      // remove
      props.removeAcl(props.page, type);
    } else {
      // add
      props.addAcl(props.page, type);
    }
  }; // buttons


  var buttons = [['View', 'eye'], ['Submit', 'pencil'], ['Manage', 'cog']]; // color

  var color = props.page.get('color'); // no archived

  if (props.page.get('_meta.archived')) return null; // return jsx

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(material.TextField, {
    label: '',
    value: props.page.get('name'),
    fullWidth: true,
    InputProps: {
      readOnly: true,
      startAdornment: /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
        sx: {
          color: (color === null || color === void 0 ? void 0 : color.hex) && theme.palette.getContrastText(color.hex),
          background: color === null || color === void 0 ? void 0 : color.hex
        }
      }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
        icon: getIcon(),
        fixedWidth: true
      }))),
      endAdornment: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, buttons.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            title = _ref2[0],
            icon = _ref2[1];

        // set value
        var type = title.toLowerCase(); // color

        var color = props.hasAcl(props.page, type) ? 'success' : undefined; // return jsx

        return /*#__PURE__*/React__default['default'].createElement(material.Tooltip, {
          key: "btn-".concat(title),
          title: "Can ".concat(title)
        }, /*#__PURE__*/React__default['default'].createElement(material.InputAdornment, {
          position: "end"
        }, /*#__PURE__*/React__default['default'].createElement(material.IconButton, {
          sx: {
            color: color && theme.palette.getContrastText(theme.palette[color].main),
            backgroundColor: color && "".concat(color, ".main")
          },
          onClick: function onClick() {
            return onToggle(type);
          }
        }, /*#__PURE__*/React__default['default'].createElement(DashupUIIcon, {
          type: "fas",
          icon: icon,
          fixedWidth: true
        }))));
      }))
    }
  }), !!getPages(props.page) && /*#__PURE__*/React__default['default'].createElement(material.Box, {
    pl: 2
  }, getPages(props.page).map(function (child, i) {
    // return jsx
    return /*#__PURE__*/React__default['default'].createElement(DashupUIPermission, {
      key: "child-".concat(child.get('_id')),
      page: child,
      dashup: props.dashup,
      hasAcl: props.hasAcl,
      addAcl: props.addAcl,
      removeAcl: props.removeAcl
    });
  })));
}; // export default

// regenerator

View__default['default'].setDefaults({
  moment: moment__default['default'],
  handlebars: Handlebars__default['default'],
  'pretty-ms': pretty__default['default'],
  'react-dom': reactDOM__default['default'],
  '@dashup/ui': dashupUI__namespace,
  '@dashup/core': dashupCore__default['default'],
  'simplebar-react': SimpleBar__default['default'],
  'react-sortablejs': ReactSortable__default['default'],
  'handlebars-helpers': HandlebarsHelpers__default['default']
}); // create library

xDataGridPro.LicenseInfo.setLicenseKey('85d894fd9df3d68884c23e17ff9072d0T1JERVI6MzEwMjAsRVhQSVJZPTE2NjU5ODY1OTYwMDAsS0VZVkVSU0lPTj0x'); // export mui extra

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function () {
    return View__default['default'];
  }
});
Object.defineProperty(exports, 'alpha', {
  enumerable: true,
  get: function () {
    return styles$1.alpha;
  }
});
Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () {
    return styles$1.styled;
  }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () {
    return styles$1.useTheme;
  }
});
Object.defineProperty(exports, 'DatePicker', {
  enumerable: true,
  get: function () {
    return lab.DatePicker;
  }
});
Object.defineProperty(exports, 'DateTimePicker', {
  enumerable: true,
  get: function () {
    return lab.DateTimePicker;
  }
});
Object.defineProperty(exports, 'LoadingButton', {
  enumerable: true,
  get: function () {
    return lab.LoadingButton;
  }
});
Object.defineProperty(exports, 'LocalizationProvider', {
  enumerable: true,
  get: function () {
    return lab.LocalizationProvider;
  }
});
Object.defineProperty(exports, 'TabContext', {
  enumerable: true,
  get: function () {
    return lab.TabContext;
  }
});
Object.defineProperty(exports, 'TabList', {
  enumerable: true,
  get: function () {
    return lab.TabList;
  }
});
Object.defineProperty(exports, 'TabPanel', {
  enumerable: true,
  get: function () {
    return lab.TabPanel;
  }
});
Object.defineProperty(exports, 'TimePicker', {
  enumerable: true,
  get: function () {
    return lab.TimePicker;
  }
});
Object.defineProperty(exports, 'AdapterMoment', {
  enumerable: true,
  get: function () {
    return AdapterMoment__default['default'];
  }
});
Object.defineProperty(exports, 'DataGrid', {
  enumerable: true,
  get: function () {
    return xDataGridPro.DataGridPro;
  }
});
Object.defineProperty(exports, 'GridActionsCellItem', {
  enumerable: true,
  get: function () {
    return xDataGridPro.GridActionsCellItem;
  }
});
Object.defineProperty(exports, 'withStyles', {
  enumerable: true,
  get: function () {
    return styles.withStyles;
  }
});
exports.Avatar = DashupAvatar;
exports.Block = DashupUIBlock;
exports.Chart = DashupUIChart;
exports.Chat = DashupUIChat;
exports.Color = DashupUIColor;
exports.Form = DashupUIForm;
exports.Hbs = DashupUIHbs;
exports.Icon = DashupUIIcon;
exports.IconPicker = DashupUIIconPicker;
exports.Item = DashupUIItem;
exports.Modal = DashupUIModal;
exports.Page = DashupUIPage;
exports.Permission = DashupUIPermission;
exports.Query = DashupUIQuery;
exports.colors = colors;
Object.keys(material).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return material[k];
    }
  });
});
