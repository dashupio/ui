import '@babel/polyfill';
import moment from 'moment';
import pretty from 'pretty-ms';
import ReactDOM from 'react-dom';
import Handlebars from 'handlebars';
import dashupCore from '@dashup/core';
import Select from 'react-select';
import * as dashupUI from '@dashup/ui';
import ReactSortable$1, { ReactSortable } from 'react-sortablejs';
import SimpleBar from 'simplebar-react';
import AsyncSelect from 'react-select/async';
import HandlebarsHelpers from 'handlebars-helpers';
import View from '@dashup/view';
export { default as View } from '@dashup/view';
import * as React from 'react';
import React__default, { useState, useEffect, useRef, createContext, useMemo, useCallback, useContext, useImperativeHandle, useReducer, useLayoutEffect, forwardRef, cloneElement } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import reactIs from 'react-is';
import { withReact, ReactEditor, Slate, Editable } from 'slate-react';
import { createEditor, Text, Transforms, Editor, Range } from 'slate';
import { BlockPicker } from 'react-color';

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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
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

Handlebars.registerHelper(HandlebarsHelpers());
Handlebars.registerHelper('ms', function (amount, extra, options) {
  // check now
  amount = parseInt(amount); // return formatted

  return pretty(amount);
});
Handlebars.registerHelper('age', function (date, start, options) {
  // date
  var from = new Date(); // check options

  if (start instanceof Date) {
    from = start;
  } // return amount


  return moment(from).diff(date, 'years');
});
Handlebars.registerHelper('date', function (date, fmt, options) {
  // check now
  if (date === 'now') date = new Date(); // check options

  if (typeof fmt !== 'string') {
    fmt = 'MMMM DD YYYY, LT';
  } // return formatted


  return moment(date).format(fmt);
});
Handlebars.registerHelper('timezone', function (tz, options) {
  // check now
  var date = new Date(); // return formatted

  return moment(date).tz(tz).format('ha z');
});
Handlebars.registerHelper('since', function (date, extra, options) {
  // check now
  if (date === 'now') date = new Date(); // check options

  if (typeof extra !== 'boolean') {
    extra = true;
  } // return formatted


  return moment(date).fromNow(extra);
});
Handlebars.registerHelper('var', function (varName, varValue, options) {
  // set var
  options.data.root[varName] = varValue;
}); // export default

var templates = {}; // create dashup ui

var DashupUIHbs = function DashupUIHbs() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // create template
  if (!templates[props.template]) templates[props.template] = Handlebars.compile(props.template || ''); // try/catch

  var html = 'N/A'; // created

  try {
    // run template
    html = templates[props.template](_objectSpread2(_objectSpread2({}, props.data || {}), props.item ? props.item.get() : {}));
  } catch (e) {} // return jsx


  return props.isInline ? /*#__PURE__*/React__default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React__default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}; // dashup ui hbs


DashupUIHbs.Handlebars = Handlebars; // return logic

var DashupUIDate = function DashupUIDate() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // week days
  var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var typesOfHour = ['am', 'pm'];
  var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // date

  var date = props.date || new Date(); // set date

  var setDate = function setDate(d) {
    // check change
    if (props.onChange) props.onChange(d);
  }; // get day rows


  var getDayRows = function getDayRows() {
    // get days in month
    var days = [];
    var inMonth = moment(date).daysInMonth(); // shift

    for (var i = 1; i <= inMonth; i++) {
      // add day
      days.push({
        day: moment("".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(i)).format('dddd'),
        date: moment("".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(i)).toDate(),
        number: i
      });
    } // add days as disabled before SOM


    while (days[0].day.toLowerCase() !== 'monday') {
      // get previous day
      var prev = moment(days[0].date).subtract(1, 'day'); // unshift days

      days.unshift({
        day: prev.format('dddd'),
        date: prev.toDate(),
        number: prev.toDate().getDate(),
        disable: true
      });
    } // add days as disabled after EOM


    while (days[days.length - 1].day.toLowerCase() !== 'sunday') {
      // get previous day
      var next = moment(days[days.length - 1].date).add(1, 'day'); // unshift days

      days.push({
        day: next.format('dddd'),
        date: next.toDate(),
        number: next.toDate().getDate(),
        disable: true
      });
    } // chunk into weeks


    var weeks = Array(Math.ceil(days.length / 7)).fill().map(function (_, i) {
      // set weeks
      return days.slice(i * 7, i * 7 + 7);
    }); // return weeks

    return weeks;
  }; // get years


  var getYears = function getYears() {
    // get full year
    var year = parseInt(date.getFullYear()) - 100; // loop years

    var years = []; // push years

    for (var base = year; base < year + 200; base++) {
      years.push(base);
    } // return years


    return years;
  }; // on date


  var onDate = function onDate(e, d) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // set date

    setDate(moment(date).set({
      date: d.getDate(),
      month: d.getMonth()
    }).toDate());
  }; // on prev month


  var onPrev = function onPrev(e) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // set date

    setDate(moment(date).subtract(1, 'month').toDate());
  }; // on next month


  var onNext = function onNext(e) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // set date

    setDate(moment(date).add(1, 'month').toDate());
  }; // on year


  var onYear = function onYear(e) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // set date

    setDate(moment(date).set('year', e.target.value).toDate());
  }; // on month


  var onMonth = function onMonth(e) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // set date

    setDate(moment(date).set('month', e.target.value).toDate());
  }; // on hour


  var onHour = function onHour(e) {
    // pm
    var pm = moment(date).format('a') === 'pm'; // hour

    var hour = pm ? parseInt(e.target.value) + 12 : parseInt(e.target.value); // check pm

    if (pm && hour === 24) hour = 12;
    if (!pm && hour === 12) hour = 0; // prevent default

    setDate(moment(date).set({
      date: date.getDate(),
      hour: hour
    }).toDate());
  }; // on hour


  var onMinute = function onMinute(e) {
    // prevent default
    setDate(moment(date).set({
      minute: parseInt(e.target.value)
    }).toDate());
  }; // on hour


  var onType = function onType(e) {
    // prevent default
    e.preventDefault();
    e.stopPropagation(); // check pm

    var pm = e.target.value === 'pm'; // hour

    var hour = parseInt(moment(date).format('kk')); // value

    var value = pm ? hour <= 12 ? hour + 12 : hour : hour >= 12 ? hour - 12 : hour; // prevent default

    setDate(moment(date).set({
      hour: value === 24 ? 0 : value
    }).toDate());
  }; // return jsx


  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex flex-row"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-light me-2",
    onClick: function onClick(e) {
      return onPrev(e);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-arrow-left"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 me-1"
  }, /*#__PURE__*/React__default.createElement(DashupUIForm.Select, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    value: date.getMonth(),
    onChange: function onChange(e) {
      return onMonth(e);
    }
  }, monthsOfYear.map(function (name, month) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("option", {
      key: "year-".concat(month),
      value: month
    }, name);
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 ms-1"
  }, /*#__PURE__*/React__default.createElement(DashupUIForm.Select, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    value: date.getFullYear(),
    onChange: function onChange(e) {
      return onYear(e);
    }
  }, getYears().map(function (year, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("option", {
      key: "year-".concat(year),
      value: year
    }, year);
  }))), /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-light ms-2",
    onClick: function onClick(e) {
      return onNext(e);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-arrow-right"
  }))), /*#__PURE__*/React__default.createElement("table", {
    className: "table table-sm m-0"
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, weekDays.map(function (day) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("th", {
      key: "th-".concat(day).toLowerCase(),
      className: "p-2"
    }, /*#__PURE__*/React__default.createElement("b", null, day));
  }))), /*#__PURE__*/React__default.createElement("tbody", null, getDayRows().map(function (row, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("tr", {
      key: "row-".concat(i)
    }, row.map(function (day, a) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("td", {
        key: "row-".concat(i, "-").concat(day.number),
        className: "p-0"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-sm w-100 btn-".concat(moment(date).startOf('day').toDate().getTime() === moment(day.date).startOf('day').toDate().getTime() ? 'primary' : moment(day.date).startOf('day').toDate().getTime() === moment().startOf('day').toDate().getTime() ? 'light text-bold text-primary' : 'light', " p-2").concat(day.disable ? ' text-muted' : ''),
        onClick: function onClick(e) {
          return onDate(e, day.date);
        }
      }, day.number));
    }));
  }), /*#__PURE__*/React__default.createElement("tr", null))), !!props.time && /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex flex-row align-items-center mt-3"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex-2 me-1"
  }, /*#__PURE__*/React__default.createElement(DashupUIForm.Control, {
    type: "number",
    min: "1",
    max: "12",
    value: moment(date).format('hh'),
    onChange: function onChange(e) {
      return onHour(e);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "mx-1"
  }, ":"), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-2 ms-1"
  }, /*#__PURE__*/React__default.createElement(DashupUIForm.Control, {
    type: "number",
    min: "0",
    max: "59",
    value: moment(date).format('mm'),
    onChange: function onChange(e) {
      return onMinute(e);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 ms-1"
  }, /*#__PURE__*/React__default.createElement(DashupUIForm.Select, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    value: moment(date).format('a'),
    onChange: function onChange(e) {
      return onType(e);
    }
  }, typesOfHour.map(function (type) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("option", {
      key: "type-".concat(type),
      value: type
    }, type);
  })))));
}; // export date

// import dependencies

var DashupContext$7 = null; // create menu component

var DashupUIPageBody = function DashupUIPageBody() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default.createElement(DashupContext$7.Consumer, null, function (data) {
    // no fit
    var type = data.type || props.type;
    var noFit = data.noFit || props.noFit;
    var centered = data.centered || props.centered; // return jsx

    return /*#__PURE__*/React__default.createElement("div", {
      className: "page-body body-".concat(type || 'normal', " d-flex flex-1").concat(noFit ? '' : '  fit-content')
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex ".concat(noFit ? 'flex-1' : 'w-100 h-100').concat(centered ? ' d-flex align-items-center' : '')
    }, centered ? /*#__PURE__*/React__default.createElement("div", {
      className: "w-100"
    }, props.children) : props.children));
  });
}; // export default page menu


var Body$1 = (function (ctx) {
  // use context
  DashupContext$7 = ctx; // return actual component

  return DashupUIPageBody;
});

var DashupContext$6 = null; // global timer

var timer$5; // global debounce

var debounce$6 = function debounce(func) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  // return debounced
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // clear timeout previously
    clearTimeout(timer$5); // create new timeout

    timer$5 = setTimeout(function () {
      return func.apply(void 0, args);
    }, timeout);
  };
}; // create menu component


var DashupUIPageMenu = function DashupUIPageMenu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // get active
  var getActive = function getActive(page, dashup) {
    // return actives
    return _toConsumableArray(dashup.get('active') || []).filter(function (a) {
      return a.page === page.get('_id') && a.user !== (typeof eden !== 'undefined' && eden.user.exists() && eden.user.get('_id'));
    });
  }; // get short name


  var getName = function getName(user) {
    // get name
    var name = "".concat(user.name || '').trim() || 'N A'; // return name

    return "".concat((name.split(' ')[0] || '')[0] || '').concat((name.split(' ')[1] || '')[0] || '');
  }; // get avatar


  var getAvatar = function getAvatar(user) {
    // return avatar
    return ((((user.avatar || [])[0] || {}).thumbs || {})['1x-sq'] || {}).url;
  }; // return JSX


  return /*#__PURE__*/React__default.createElement(DashupContext$6.Consumer, null, function (_ref) {
    var page = _ref.page,
        dashup = _ref.dashup,
        color = _ref.color,
        icon = _ref.icon,
        title = _ref.title,
        setPage = _ref.setPage;
    // return jsx
    return /*#__PURE__*/React__default.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/React__default.createElement("nav", {
      className: "navbar navbar-section py-0 py-lg-3"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "w-100 w-lg-auto d-none d-lg-flex align-items-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "flex-column flex-0 pr-2"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-lg btn-page me-3",
      type: "button",
      style: {
        color: color !== null && color !== void 0 && color.drk ? '#fff' : color !== null && color !== void 0 && color.hex ? '#000' : null,
        background: (color === null || color === void 0 ? void 0 : color.hex) || colors[color] || color
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa-fw fa-".concat(icon)
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "flex-column flex-1"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex"
    }, page && dashup.can(page, 'manage') ? /*#__PURE__*/React__default.createElement("input", {
      required: true,
      onChange: function onChange(e) {
        return debounce$6(setPage, 200)('name', e.target.value);
      },
      className: "form-control form-control-invisible flex-1",
      placeholder: "Unnamed Page",
      defaultValue: title
    }) : /*#__PURE__*/React__default.createElement("div", {
      className: "form-control form-control-invisible flex-1 d-flex align-items-center",
      placeholder: "Unnamed Page"
    }, title)))), /*#__PURE__*/React__default.createElement("div", {
      id: "page-menu",
      className: "page-menu w-100 d-flex pb-3 pb-lg-0 w-lg-auto d-lg-flex align-items-center justify-content-lg-end collapse navbar-collapse"
    }, props.presence && !!getActive(page, dashup).length && /*#__PURE__*/React__default.createElement("div", {
      className: "me-2 tags"
    }, getActive(page, dashup).map(function (active, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        key: "user-".concat(active.id),
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "".concat(active.name)),
        placement: "bottom"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-sm btn-circle me-1",
        style: {
          backgroundImage: getAvatar(active) ? "url(".concat(getAvatar(active), ")") : null
        }
      }, getAvatar(active) ? '' : getName(active)));
    })), props.children, props.onShare && page && dashup.can(page, 'manage') && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Share Page"),
      placement: "bottom"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-light",
      onClick: function onClick(e) {
        return props.onShare(e);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-share"
    }))), props.onMinimise && page && dashup.can(page, 'manage') && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Minimise Page"),
      placement: "bottom"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-light",
      onClick: function onClick(e) {
        return props.onConfig(e);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-minus"
    }))), props.onConfig && page && dashup.can(page, 'manage') && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Page Settings"),
      placement: "bottom"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-light",
      onClick: function onClick(e) {
        return props.onConfig(e);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-ellipsis-h"
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

function format$1(message) {
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
      message = format$1("message" in options ? options.message : defaultMessage);
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

  var _useState = useState((_data = (struct || {}).data) !== null && _data !== void 0 && (_data$actions = _data.actions) !== null && _data$actions !== void 0 && _data$actions.includes('sanitise') ? null : props.change.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // use effect


  useEffect(function () {
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

  return !!field && !!(Array.isArray(value || []) ? (value || []).length : value) && /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("b", {
    className: "d-block"
  }, props.change.label), /*#__PURE__*/React__default.createElement("div", {
    className: "text-overflow"
  }, /*#__PURE__*/React__default.createElement(props.dashup.View, {
    view: "view",
    type: "field",
    size: "sm",
    item: props.item,
    field: field,
    value: value,
    struct: field.type,
    dashup: props.dashup
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-spinner fa-spin"
  })))));
}; // create menu component


var DashupUIPageAudit = function DashupUIPageAudit() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return jsx
  return /*#__PURE__*/React__default.createElement("div", {
    className: "d-block mb-2 text-sm"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "text-muted d-block"
  }, moment(props.audit.created_at).format('Do MMM, h:mma')), /*#__PURE__*/React__default.createElement("b", null, props.audit.user.name), " set:", /*#__PURE__*/React__default.createElement("ul", {
    className: "ps-3"
  }, props.audit.changes.map(function (change, a) {
    // return jsx
    return /*#__PURE__*/React__default.createElement(DashupUIPageAuditChange, _extends$1({
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
  var _useState = useState(props.form),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      audits = _useState4[0],
      setAudits = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      copying = _useState6[0],
      setCopying = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      tagOpen = _useState8[0],
      setTagOpen = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      updated = _useState10[0],
      setUpdated = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      prevent = _useState12[0],
      setPrevent = _useState12[1];

  var _useState13 = useState(true),
      _useState14 = _slicedToArray(_useState13, 2),
      creating = _useState14[0],
      setCreating = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      removing = _useState16[0],
      setRemoving = _useState16[1];

  var _useState17 = useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      userOpen = _useState18[0],
      setUserOpen = _useState18[1];

  var _useState19 = useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      confirming = _useState20[0],
      setConfirming = _useState20[1];

  var _useState21 = useState(false),
      _useState22 = _slicedToArray(_useState21, 2),
      submitting = _useState22[0],
      setSubmitting = _useState22[1];

  var _useState23 = useState(props.item && props.item.get() || {}),
      _useState24 = _slicedToArray(_useState23, 2),
      actualData = _useState24[0],
      setActualData = _useState24[1]; // refs


  var tagRef = useRef(null);
  var userRef = useRef(null); // use effect

  useEffect(function () {
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
  }; // get short name


  var getName = function getName(user) {
    // get name
    var name = "".concat(user.name || '').trim() || 'N A'; // return name

    return "".concat((name.split(' ')[0] || '')[0] || '').concat((name.split(' ')[1] || '')[0] || '');
  }; // get avatar


  var getAvatar = function getAvatar(user) {
    // return avatar
    return ((((user.avatar || [])[0] || {}).thumbs || {})['1x-sq'] || {}).url;
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
              setSubmitting(false);
              onHide();

            case 7:
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


  useEffect(function () {
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

  return /*#__PURE__*/React__default.createElement(DashupContext$5.Consumer, null, function (data) {
    // destruct
    data.item;
        var page = data.page,
        dashup = data.dashup,
        getPageStruct = data.getPageStruct,
        getFieldStruct = data.getFieldStruct,
        getForms = data.getForms,
        getFields = data.getFields; // get struct

    getPageStruct(); // get forms

    var forms = (props.getForms || getForms)();
    var chosenForm = getForm(forms); // return jsx

    return /*#__PURE__*/React__default.createElement(Modal$1, {
      size: "xl",
      show: props.show,
      onHide: onHide,
      enforceFocus: false
    }, !!props.item && /*#__PURE__*/React__default.createElement(Modal$1.Body, {
      className: "card p-0"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "row g-0"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "col-lg-8 d-flex flex-column has-shadow"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-header py-3 border-bottom border-secondary d-flex"
    }, !!props.item.get('_id') && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Copy URL"),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-link me-3",
      onClick: function onClick(e) {
        return onCopy(e, page, props.item);
      }
    }, copying ? /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-check text-success"
    }) : /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-clipboard-check"
    }))), !!hasTags(data) && /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex ms-0 me-3 tags",
      ref: tagRef
    }, getTagFields(data).map(function (type, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: "tag-".concat(type.uuid)
      }, getTags(type).map(function (tag, a) {
        // return jsx
        return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
          key: "tag-".concat(type.uuid, "-").concat(tag.value),
          overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "".concat(type.label, ": ").concat(tag.value)),
          placement: "top"
        }, /*#__PURE__*/React__default.createElement("button", {
          className: "btn me-1 btn-".concat(tag.color),
          onClick: function onClick() {
            return setTagOpen(type);
          }
        }, tag.label));
      }), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Add ", type.label),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-outline-dark",
        onClick: function onClick() {
          return setTagOpen(type);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-tag"
      }))));
    })), !!hasUser(data) && /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex ms-0 me-3 tags",
      ref: userRef
    }, getUserFields(data).map(function (type, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: "user-".concat(type.uuid)
      }, getUsers(type).map(function (user, a) {
        // return jsx
        return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
          key: "user-".concat(type.uuid, "-").concat(user._id || user.id),
          overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "".concat(type.label, ": ").concat(user.name)),
          placement: "top"
        }, /*#__PURE__*/React__default.createElement("button", {
          className: "btn me-1 btn-circle",
          style: {
            backgroundImage: getAvatar(user) ? "url(".concat(getAvatar(user), ")") : null
          },
          onClick: function onClick() {
            return setUserOpen(type);
          }
        }, getAvatar(user) ? '' : getName(user)));
      }), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Add ", type.label),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-outline-dark",
        onClick: function onClick() {
          return setUserOpen(type);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-plus"
      }))));
    })), !!chosenForm && forms.length > 1 && /*#__PURE__*/React__default.createElement(Dropdown$1, {
      className: "ms-auto",
      align: "right"
    }, /*#__PURE__*/React__default.createElement(Dropdown$1.Toggle, {
      variant: "primary"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa-".concat(chosenForm.get('icon') || 'plus fa', " me-2")
    }), chosenForm.get('name'), /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-caret-down ms-2"
    })), /*#__PURE__*/React__default.createElement(Dropdown$1.Menu, null, forms.map(function (form, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
        key: "form-".concat(form.get('_id')),
        onClick: function onClick(e) {
          return setForm(form.get('_id'));
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa-".concat(form.get('icon') || 'plus fa', " me-2")
      }), form.get('name'));
    })))), removing ? /*#__PURE__*/React__default.createElement("div", {
      className: "card-body bg-white pb-0 flex-1"
    }, "Are you sure you want to remove this item?") : confirming ? /*#__PURE__*/React__default.createElement("div", {
      className: "card-body bg-white pb-0 flex-1"
    }, "You have unsaved data. Are you sure you want to disregard the changes?") : !!chosenForm && /*#__PURE__*/React__default.createElement("div", {
      className: "card-body bg-white pb-0 flex-1"
    }, creating && /*#__PURE__*/React__default.createElement(DashupUIForm, _extends$1({}, data, {
      id: page.get('_id'),
      data: actualData,
      fields: chosenForm.get('data.fields') || [],
      setData: onData,
      onSubmit: function onSubmit(e) {
        return _onSubmit(e, chosenForm, data);
      },
      setPrevent: setPrevent
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "card-footer d-flex border-top border-secondary py-3"
    }, removing ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "me-auto",
      onClick: function onClick(e) {
        return setRemoving(false);
      }
    }, "Cancel"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: "ms-auto",
      onClick: function onClick(e) {
        return onRemove(e);
      }
    }, "Confirm")) : confirming ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "me-auto",
      onClick: function onClick(e) {
        return setConfirming(false);
      }
    }, "Cancel"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: "ms-auto",
      onClick: onHide
    }, "Confirm")) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !!props.item.get('_id') && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: updated ? 'me-auto' : 'me-2',
      onClick: function onClick(e) {
        return setRemoving(true);
      }
    }, "Remove"), !updated && /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "me-auto",
      onClick: function onClick(e) {
        return onCreate(dashup);
      }
    }, "Create New")), /*#__PURE__*/React__default.createElement(Button, {
      variant: "success",
      className: "ms-auto",
      disabled: !updated || prevent || submitting,
      onClick: function onClick(e) {
        return _onSubmit(e, chosenForm, data);
      }
    }, submitting ? 'Submitting...' : 'Submit')))), /*#__PURE__*/React__default.createElement("div", {
      className: "col-lg-4 d-flex flex-column"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "modal-sidebar"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-header d-flex"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-inline-block me-auto"
    }, /*#__PURE__*/React__default.createElement("small", {
      className: "d-block"
    }, "Created At"), /*#__PURE__*/React__default.createElement("div", null, moment(props.item.get('_meta.created_at')).format('Do MMM, h:mma'))), /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: "btn btn-link ms-auto",
      onClick: props.onHide
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-times"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "flex-1 card-audits mh-25 fit-content"
    }, /*#__PURE__*/React__default.createElement(SimpleBar, {
      className: "p-relative"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-body"
    }, audits.map(function (audit, i) {
      var _audit$changes;

      // changes
      if (!(audit !== null && audit !== void 0 && (_audit$changes = audit.changes) !== null && _audit$changes !== void 0 && _audit$changes.length)) return null; // return jsx

      return /*#__PURE__*/React__default.createElement(DashupUIPageAudit, {
        key: "audit-".concat(audit.id),
        page: page,
        item: props.item,
        forms: forms,
        audit: audit,
        dashup: dashup,
        getFields: getFields,
        getFieldStruct: getFieldStruct
      });
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "card-footer chat-sm d-flex flex-column border-top border-secondary h-75 flex-1 py-3"
    }, !!props.item.get('_id') && /*#__PURE__*/React__default.createElement(DashupUIChat, {
      size: "sm",
      dashup: dashup,
      page: page,
      thread: "".concat(props.item.get('_id'))
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex flex-column flex-1"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "flex-1 fit-content"
    }, /*#__PURE__*/React__default.createElement(DashupUIChat.Thread, null)), /*#__PURE__*/React__default.createElement("div", {
      className: "flex-0"
    }, /*#__PURE__*/React__default.createElement(DashupUIChat.Input, null)))))))), /*#__PURE__*/React__default.createElement(Overlay, {
      show: !!tagOpen,
      target: tagRef.current,
      onHide: function onHide() {
        return setTagOpen(false);
      },
      rootClose: true,
      placement: "bottom-start"
    }, /*#__PURE__*/React__default.createElement(Popover$1, {
      className: "dropdown-menu dropdown-menu-edit p-2"
    }, getTagFields(data).map(function (field, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: "tag-".concat(field.uuid)
      }, i !== 0 && /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, null), /*#__PURE__*/React__default.createElement("div", {
        className: "tags"
      }, (field.options || []).map(function (opt, a) {
        // return jsx
        return /*#__PURE__*/React__default.createElement("button", {
          key: "opt-".concat(opt.value),
          onClick: function onClick() {
            return onTag(field, opt.value);
          },
          className: "btn w-100".concat(a !== 0 ? ' mt-2' : '', " btn-").concat(opt.color || 'secondary')
        }, opt.label);
      })));
    }))), /*#__PURE__*/React__default.createElement(Overlay, {
      show: !!userOpen,
      target: userRef.current,
      onHide: function onHide() {
        return setUserOpen(false);
      },
      rootClose: true,
      placement: "bottom-start"
    }, /*#__PURE__*/React__default.createElement(Popover$1, {
      className: "dropdown-menu popover-grid"
    }, /*#__PURE__*/React__default.createElement(View, {
      view: "input",
      type: "field",
      struct: "user",
      dashup: data.dashup,
      field: userOpen,
      value: props.item && props.item.get((userOpen === null || userOpen === void 0 ? void 0 : userOpen.name) || (userOpen === null || userOpen === void 0 ? void 0 : userOpen.uuid)),
      noLabel: true,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      onChange: onUser,
      menuIsOpen: true
    })))));
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
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      share = _useState2[0],
      setSharing = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      shares = _useState4[0],
      setShares = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      saving = _useState6[0],
      setSaving = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      prevent = _useState8[0],
      setPrevent = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      copying = _useState10[0],
      setCopying = _useState10[1];

  var _useState11 = useState(null),
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
              setRemoving(null);

            case 7:
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


  return /*#__PURE__*/React__default.createElement(DashupContext$4.Consumer, null, function (_ref4) {
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

    return /*#__PURE__*/React__default.createElement(Modal$1, {
      show: props.show,
      onHide: props.onHide
    }, /*#__PURE__*/React__default.createElement(Modal$1.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement(Modal$1.Title, null, "Share ", page.get('name'))), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, share ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !!(struct !== null && struct !== void 0 && (_struct$data2 = struct.data) !== null && _struct$data2 !== void 0 && (_struct$data2$share = _struct$data2.share) !== null && _struct$data2$share !== void 0 && _struct$data2$share.pages) && /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("p", null, "The following pages will also be shared:"), /*#__PURE__*/React__default.createElement("div", null, getShares(dashup, page, struct.data.share.pages).map(function (sPage) {
      // get color
      var color = sPage.get('color'); // return jsx

      return /*#__PURE__*/React__default.createElement("div", {
        key: "page-".concat(sPage.get('_id')),
        className: "card card-permission mb-2"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "card-body d-flex align-items-center "
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "btn p-2 btn-sm me-2",
        style: {
          color: color !== null && color !== void 0 && color.drk ? '#fff' : color !== null && color !== void 0 && color.hex ? '#000' : null,
          background: (color === null || color === void 0 ? void 0 : color.hex) || color
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-".concat(sPage.get('icon') || 'pencil')
      })), /*#__PURE__*/React__default.createElement("span", {
        className: "flex-1"
      }, sPage.get('name'))));
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Share Type"), /*#__PURE__*/React__default.createElement(DashupUISelect, {
      options: getType(struct, page),
      value: getType(struct, page).filter(function (v) {
        return v.selected;
      }),
      onChange: function onChange(value) {
        return setShare('type', value === null || value === void 0 ? void 0 : value.value);
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Share Name"), /*#__PURE__*/React__default.createElement("input", {
      className: "form-control",
      type: "text",
      onChange: function onChange(e) {
        return setShare('name', e.target.value);
      },
      defaultValue: share.name
    })), share.type === 'marketplace' && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("hr", null), /*#__PURE__*/React__default.createElement("p", null, "Adding this page to the marketplace will make it available for anyone to see once approved."), /*#__PURE__*/React__default.createElement(View, {
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
    }), !!categories && /*#__PURE__*/React__default.createElement(View, {
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
    }), /*#__PURE__*/React__default.createElement(View, {
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
    }))) : removing ? /*#__PURE__*/React__default.createElement("div", {
      className: "py-5 text-center"
    }, "Are you sure you want to remove this share?") : (shares || []).length ? (shares || []).map(function (share, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "share-".concat(i),
        className: "card card-permission mb-2"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "card-body d-flex align-items-center"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "btn btn-primary me-2"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-".concat(share.type === 'link' ? 'link' : 'tags')
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "flex-1"
      }, share.type === 'link' ? /*#__PURE__*/React__default.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/React__default.createElement("input", {
        className: "form-control",
        readOnly: true,
        value: "/share/".concat(share.slug)
      }), /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-".concat(copying === share.id ? 'success' : 'secondary', " input-group-append"),
        onClick: function onClick(e) {
          return onCopy(share);
        }
      }, copying === share.id ? /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-check"
      }) : /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-clipboard-check"
      }))) : /*#__PURE__*/React__default.createElement("div", {
        className: "share-name"
      }, share.name)), /*#__PURE__*/React__default.createElement(Button, {
        variant: "primary",
        className: "ms-2",
        onClick: function onClick() {
          return setSharing(share);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-ellipsis-h"
      })), /*#__PURE__*/React__default.createElement(Button, {
        variant: "danger",
        className: "ms-2",
        onClick: function onClick() {
          return setRemoving(share);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-trash"
      }))));
    }) : /*#__PURE__*/React__default.createElement("div", {
      className: "py-5 text-center"
    }, "This page has no shares, click below to create one.")), share ? /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "me-auto",
      onClick: function onClick() {
        return setSharing(null);
      }
    }, "Back"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "success",
      disabled: prevent || saving,
      onClick: function onClick() {
        return onSubmit(page, dashup);
      }
    }, prevent ? 'Uploading...' : saving ? 'Submitting...' : 'Submit')) : removing ? /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "me-auto",
      onClick: function onClick() {
        return setRemoving(null);
      }
    }, "Back"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      disabled: saving,
      onClick: function onClick() {
        return onRemove(page, dashup);
      }
    }, saving ? 'Removing...' : 'Remove')) : /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "success",
      onClick: function onClick() {
        return setSharing({
          type: 'link'
        });
      }
    }, "Create Share")));
  });
}; // export default page menu


var Share = (function (ctx) {
  // use context
  DashupContext$4 = ctx; // return actual component

  return DashupUIPageShare;
});

var DashupContext$3 = null; // global timer

var timer$4; // global debounce

var debounce$5 = function debounce(func) {
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
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1]; // has user


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


  return /*#__PURE__*/React__default.createElement(DashupContext$3.Consumer, null, function (_ref) {
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

    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "page-filter d-flex flex-wrap flex-0 mx--1 expand-lg mb-lg-3 justify-content-end"
    }, !!props.onSearch && /*#__PURE__*/React__default.createElement("div", {
      className: "col-12 col-lg-3 mx-lg-1 mb-3 mb-lg-0"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "input-group input-group-search flex-1"
    }, /*#__PURE__*/React__default.createElement("input", {
      onChange: function onChange(e) {
        return debounce$5(props.onSearch, 500)(e.target.value);
      },
      className: "form-control border-white",
      defaultValue: page.get('data.search') || ''
    }), /*#__PURE__*/React__default.createElement("span", {
      className: "input-group-text text-body bg-white border-white"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-search"
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "d-none d-lg-flex col flex-1"
    }), !!hasUser(page) && ((_eden = eden) === null || _eden === void 0 ? void 0 : (_eden$user = _eden.user) === null || _eden$user === void 0 ? void 0 : _eden$user.exists()) && /*#__PURE__*/React__default.createElement("div", {
      className: "flex-column mx-1 mb-2 mb-lg-0"
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, page.get('user.filter.me') ? 'Show All' : 'Show Mine'),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "btn-group",
      "data-toggle": "tooltip",
      title: "Filter by Mine"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn ms-lg-1 btn-".concat(page.get('user.filter.me') ? 'primary' : 'light'),
      onClick: function onClick(e) {
        return setUser('filter.me', !page.get('user.filter.me'));
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-".concat(page.get('user.filter.me') ? 'user' : 'users', " me-2")
    }), page.get('user.filter.me') ? 'My Items' : 'All Items')))), !!props.onSort && /*#__PURE__*/React__default.createElement("div", {
      className: "flex-row mx-1 mb-2 mb-lg-0"
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, page.get('data.sort') ? "Sorted ".concat(page.get('data.sort.way') === 1 ? 'ascending' : 'descending') : 'Sort By'),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement(DropdownButton, {
      className: "d-inline-block",
      variant: page.get('data.sort') ? 'primary' : 'light',
      title: /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-".concat(page.get('data.sort') ? page.get('data.sort.way') === 1 ? 'sort-up' : 'sort-down' : 'sort')
      })
    }, /*#__PURE__*/React__default.createElement(Dropdown$1.Header, null, "Sort By"), fields.map(function (field, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
        key: "sort-".concat(field.uuid),
        onClick: function onClick() {
          return props.onSort({
            field: field.uuid
          });
        }
      }, field.label);
    }), /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, null), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      key: "sort-created",
      onClick: function onClick() {
        return props.onSort({
          field: 'custom',
          sort: 'created_at'
        });
      }
    }, "Created At"), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      key: "sort-updated",
      onClick: function onClick() {
        return props.onSort({
          field: 'custom',
          sort: 'updated_at'
        });
      }
    }, "Updated at"))), !!page.get('data.sort.sort') && /*#__PURE__*/React__default.createElement(Button, {
      variant: "secondary ms-1",
      onClick: function onClick(e) {
        return props.onSort(page.get('data.sort'));
      }
    }, page.get('data.sort.sort') === 'created_at' ? 'Created At' : '', page.get('data.sort.sort') === 'updated_at' ? 'Updated At' : '', page.get('data.sort.sort') !== 'created_at' && page.get('data.sort.sort') !== 'updated_at' ? page.get('data.sort.sort') : ''), !!sortField && !!page.get('data.sort') && !page.get('data.sort.sort') && /*#__PURE__*/React__default.createElement(Button, {
      variant: "secondary ms-1",
      onClick: function onClick(e) {
        return props.onSort(page.get('data.sort'));
      }
    }, sortField.label)), !!props.onTag && hasTags(page) && /*#__PURE__*/React__default.createElement("div", {
      className: "flex-row mx-1 mb-2 mb-lg-0"
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Filter by Tag"),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement(DropdownButton, {
      className: "d-inline-block",
      variant: (page.get('user.filter.tags') || []).length ? 'primary' : 'light',
      title: /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-tag"
      })
    }, /*#__PURE__*/React__default.createElement(Dropdown$1.Header, null, "Filter by Tag"), tags.map(function (tag, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: "tag-".concat(tag.uuid)
      }, i !== 0 && /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, null), (tag.options || []).map(function (option, i) {
        var _option$color;

        // return jsx
        return /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
          key: "tag-".concat(tag.uuid, "-").concat(option.value),
          onClick: function onClick() {
            return props.onTag(tag, option);
          }
        }, option.color && /*#__PURE__*/React__default.createElement("span", {
          className: "badge me-2",
          style: {
            background: colors[option.color] || ((_option$color = option.color) === null || _option$color === void 0 ? void 0 : _option$color.hex) || option.color
          }
        }, "\xA0"), option.label);
      }));
    }))), (page.get('user.filter.tags') || []).map(function (tag, i) {
      var _option$color2, _option$color3, _option$color4, _option$color5;

      // get field
      var field = tags.find(function (f) {
        return f.uuid === (tag === null || tag === void 0 ? void 0 : tag.field);
      }); // check field

      if (!field) return null; // get option

      var option = (field.options || []).find(function (opt) {
        return opt.value === (tag === null || tag === void 0 ? void 0 : tag.value);
      }) || {}; // jsx

      return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        key: "filter-".concat(tag === null || tag === void 0 ? void 0 : tag.field, "-").concat(tag === null || tag === void 0 ? void 0 : tag.value),
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, field.label || field.name, ": ", option.label || (tag === null || tag === void 0 ? void 0 : tag.value)),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement(Button, {
        style: {
          color: (_option$color2 = option.color) !== null && _option$color2 !== void 0 && _option$color2.hex && (_option$color3 = option.color) !== null && _option$color3 !== void 0 && _option$color3.drk ? '#fff' : '#000',
          background: colors[option.color] || ((_option$color4 = option.color) === null || _option$color4 === void 0 ? void 0 : _option$color4.hex) || option.color,
          borderColor: colors[option.color] || ((_option$color5 = option.color) === null || _option$color5 === void 0 ? void 0 : _option$color5.hex) || option.color
        },
        variant: "",
        onClick: function onClick(e) {
          return props.onTag(field, option || tag);
        },
        className: "ms-1"
      }, option.label || (tag === null || tag === void 0 ? void 0 : tag.value)));
    })), !!props.onFilter && /*#__PURE__*/React__default.createElement("div", {
      className: "flex-row mx-1 mb-2 mb-lg-0",
      onClick: function onClick(e) {
        return setFilter(!filter);
      }
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, filter ? 'Close Filter' : 'Filter View'),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement(Button, {
      variant: (page.get('user.query') ? page.get('user.query') : '[]').length > 2 || filter ? 'primary' : 'light'
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-".concat(filter ? 'times' : 'filter')
    }))))), !!filter && !!props.onFilter && /*#__PURE__*/React__default.createElement("div", {
      className: "flex-0"
    }, /*#__PURE__*/React__default.createElement(DashupUIQuery, {
      page: page,
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
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1]; // return JSX


  return /*#__PURE__*/React__default.createElement(DashupContext$2.Consumer, null, function (data) {
    var _struct$data;

    // destruct
    var type = data.type,
        page = data.page,
        dashup = data.dashup,
        getPageStruct = data.getPageStruct; // get struct

    var struct = getPageStruct(); // check struct

    if (!struct) return null; // tabs

    var tabs = ((_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : _struct$data.tabs) || ['Config', 'Connects']; // check tab

    if (!tab) tab = tabs[0]; // return jsx

    return /*#__PURE__*/React__default.createElement(Modal$1, {
      size: "xl",
      show: !!props.show,
      onHide: props.onHide,
      enforceFocus: false
    }, !!props.show && /*#__PURE__*/React__default.createElement(Modal$1.Body, {
      className: "card p-0"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "row g-0"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "col-lg-8 d-flex flex-column has-shadow"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-header py-3 border-bottom flex-0"
    }, /*#__PURE__*/React__default.createElement("h5", {
      className: "modal-title"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "me-2 fa-fw fa-".concat(page.get('icon') || 'pencil fa')
    }), page.get('name') || page.get('_id')), /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: "btn btn-link ms-auto d-inline d-lg-none",
      onClick: props.onHide
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-times"
    }))), struct && /*#__PURE__*/React__default.createElement("div", {
      className: "card-body flex-0 border-bottom"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "me-2 ".concat(struct.icon, " fa-fw")
    }), struct.title), props.children || /*#__PURE__*/React__default.createElement("div", {
      className: "card-body flex-0 border-bottom"
    }, /*#__PURE__*/React__default.createElement(Tabs, {
      id: "page-config",
      onSelect: function onSelect(k) {
        return setTab(k);
      },
      activeKey: tab
    }, tabs.map(function (tab, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(Tab$1, {
        key: "page-config-".concat(tab),
        eventKey: tab,
        title: "".concat(tab.charAt(0).toUpperCase()).concat(tab.slice(1)),
        className: "pt-4"
      }, "".concat(tab).toLowerCase() === 'connects' ? /*#__PURE__*/React__default.createElement(DashupUIPage.Connect, {
        page: page,
        dashup: dashup
      }) : props[tab] || /*#__PURE__*/React__default.createElement(View, _objectSpread2(_objectSpread2({}, data), {}, {
        type: 'page',
        view: "".concat(tab).toLowerCase(),
        struct: type
      })));
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "col-lg-4 d-flex flex-column"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "modal-sidebar"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-header d-flex"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-inline-block me-auto"
    }, /*#__PURE__*/React__default.createElement("small", {
      className: "d-block"
    }, "Created At"), /*#__PURE__*/React__default.createElement("div", null, moment(page.get('_meta.created')).format('Do MMM, h:mma'))), /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: "btn btn-link ms-auto",
      onClick: props.onHide
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-times"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "card-body flex-1"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "card-footer chat-sm d-flex flex-column border-top border-secondary h-75 py-3"
    }, /*#__PURE__*/React__default.createElement(DashupUIChat, {
      size: "sm",
      dashup: dashup,
      page: page,
      thread: "".concat(page.get('_id'), ".config")
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex flex-column flex-1"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "flex-1 fit-content"
    }, /*#__PURE__*/React__default.createElement(DashupUIChat.Thread, null)), /*#__PURE__*/React__default.createElement("div", {
      className: "flex-0"
    }, /*#__PURE__*/React__default.createElement(DashupUIChat.Input, null))))))))));
  });
}; // export default page menu


var Config$1 = (function (ctx) {
  // use context
  DashupContext$2 = ctx; // return actual component

  return DashupUIPageConfig;
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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

var crypto$1 = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto$1 || !crypto$1.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto$1.getRandomValues(new Uint8Array(size));
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

var debounce$4 = function debounce(func) {
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
  var _useState = useState(new Date()),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setUpdated = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      updating = _useState4[0],
      setUpdating = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      removing = _useState6[0],
      setRemoving = _useState6[1]; // get type


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
    updating[key] = value; // set page

    page.set('connects', _toConsumableArray(page.get('connects')));
    debounce$4(setPage, 500)('connects', page.get('connects'));
    setUpdated(new Date());
  }; // set connect


  var onRemove = function onRemove(page, setPage) {
    // new connects
    var newConnects = (page.get('connects') || []).filter(function (c) {
      return c.uuid !== removing.uuid;
    }); // set page

    page.set('connects', newConnects);
    debounce$4(setPage, 500)('connects', newConnects); // remove

    setUpdating(null);
    setRemoving(null);
  }; // on create


  var onCreate = function onCreate(page, setPage) {
    // set connect
    var connect = {
      uuid: shortid()
    }; // add to connects

    var connects = page.get('connects') || []; // add connect

    connects.push(connect); // set connects

    page.set('connects', connects); // set connect

    setUpdating(connect);
    debounce$4(setPage, 500)('connects', page.get('connects'));
  }; // use effect


  useEffect(function () {
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

  return /*#__PURE__*/React__default.createElement(DashupContext$1.Consumer, null, function (data) {
    // destruct
    var page = data.page,
        available = data.available;
        data.dashup;
        var setPage = data.setPage,
        getConnectStruct = data.getConnectStruct; // get connects

    var connects = page.get('connects') || []; // get struct

    updating ? getConnectStruct(updating) : null; // return jsx

    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "flex-1"
    }, removing ? /*#__PURE__*/React__default.createElement("div", {
      className: "py-5 text-center"
    }, "Are you sure you want to remove this connector?") : updating ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Connect Type"), /*#__PURE__*/React__default.createElement(DashupUISelect, {
      options: getType(page, available === null || available === void 0 ? void 0 : available.connects),
      value: getType(page, available === null || available === void 0 ? void 0 : available.connects).filter(function (c) {
        return c.selected;
      }),
      onChange: function onChange(value) {
        return _setConnect('type', value === null || value === void 0 ? void 0 : value.value, {
          page: page,
          setPage: setPage
        });
      }
    })), !!updating.type && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Connect Name"), /*#__PURE__*/React__default.createElement("input", {
      className: "form-control",
      type: "text",
      onChange: function onChange(e) {
        return _setConnect('name', e.target.value, {
          page: page,
          setPage: setPage
        });
      },
      defaultValue: updating.name
    })), /*#__PURE__*/React__default.createElement(View, _extends$1({}, data, {
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
    })))) : (connects || []).length ? connects.map(function (connect, i) {
      var _getConnectStruct, _getConnectStruct2;

      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "connect-".concat(i),
        className: "card mb-2"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "card-body d-flex align-items-center"
      }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, (_getConnectStruct = getConnectStruct(connect.type)) === null || _getConnectStruct === void 0 ? void 0 : _getConnectStruct.title),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "btn btn-primary me-2"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-".concat((_getConnectStruct2 = getConnectStruct(connect.type)) === null || _getConnectStruct2 === void 0 ? void 0 : _getConnectStruct2.icon)
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: "flex-1"
      }, connect.name || connect.uuid), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Update Connect"),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement(Button, {
        variant: "primary",
        className: "ms-2",
        onClick: function onClick() {
          return setUpdating(connect);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-ellipsis-h"
      }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Remove Connect"),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement(Button, {
        variant: "danger",
        className: "ms-2",
        onClick: function onClick() {
          return setRemoving(connect);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-trash"
      })))));
    }) : /*#__PURE__*/React__default.createElement("div", {
      className: "py-5 text-center"
    }, "This page has no connects, click below to create one.")), /*#__PURE__*/React__default.createElement("div", {
      className: "mt-3 d-flex"
    }, removing ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "me-auto",
      onClick: function onClick(e) {
        return setRemoving(null);
      }
    }, "Cancel"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: "ms-auto",
      onClick: function onClick(e) {
        return onRemove(page, setPage);
      }
    }, "Confirm")) : updating ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: "me-auto",
      onClick: function onClick(e) {
        return setRemoving(updating);
      }
    }, "Remove"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "info",
      className: "ms-auto",
      onClick: function onClick(e) {
        return setUpdating(null);
      }
    }, "Back")) : /*#__PURE__*/React__default.createElement(Button, {
      variant: "success",
      className: "ms-auto",
      onClick: function onClick(e) {
        return onCreate(page, setPage);
      }
    }, "Create Connect")));
  });
}; // export default page menu


var Connect = (function (ctx) {
  // use context
  DashupContext$1 = ctx; // return actual component

  return DashupUIPageConnect;
});

var DashupUIContext$f = /*#__PURE__*/createContext({}); // create page base

var DashupUIPage = function DashupUIPage() {
  var _struct$data;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // set config
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      importing = _useState4[0],
      setImporting = _useState4[1];

  var _useState5 = useState(false),
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


  var _useState7 = useState(getCtx()),
      _useState8 = _slicedToArray(_useState7, 2),
      ctx = _useState8[0],
      setCtx = _useState8[1]; // add listeners


  useEffect(function () {
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


  return /*#__PURE__*/React__default.createElement(DashupUIContext$f.Provider, {
    value: ctx
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "page page-".concat(props.type || props.page && props.page.get('type') || 'default', " flex-1")
  }, missingRequire() ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(DashupUIPage.Menu, {
    onConfig: function onConfig(e) {
      return setConfig(true);
    }
  }), struct !== null && struct !== void 0 && (_struct$data = struct.data) !== null && _struct$data !== void 0 && _struct$data["default"] && !defaulted ? /*#__PURE__*/React__default.createElement(DashupUIPage.Config, {
    show: !!(config || missingRequire()),
    onHide: function onHide(e) {
      return !setConfig(false) && setDefaulted(true);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0"
  }, struct.data["default"].title), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-1"
  }, (struct.data["default"].pages || []).map(function (page, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("div", {
      key: "page-".concat(i),
      className: "card card-permission mb-2"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-body d-flex align-items-center "
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "btn p-2 btn-sm btn-primary me-2"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-".concat(page.icon || props.getPageStruct(page.type).icon)
    })), /*#__PURE__*/React__default.createElement("span", {
      className: "flex-1"
    }, props.getPageStruct(page.type).title)));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "card-footer d-flex border-top border-secondary py-3"
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "danger",
    onClick: function onClick(e) {
      return !setConfig(false) && setDefaulted(true);
    }
  }, "Close"), /*#__PURE__*/React__default.createElement(Button, {
    variant: "success",
    className: "ms-auto",
    disabled: importing,
    onClick: function onClick(e) {
      return onImport(e);
    }
  }, importing ? 'Importing Default Pages...' : 'Import Default Pages'))) : /*#__PURE__*/React__default.createElement(DashupUIPage.Config, {
    show: config,
    onHide: function onHide(e) {
      return setConfig(false);
    }
  }), missingRequire().map(function (_ref2) {
    var key = _ref2.key,
        label = _ref2.label,
        _ref2$variant = _ref2.variant,
        variant = _ref2$variant === void 0 ? 'info' : _ref2$variant;
    // return jsx
    return /*#__PURE__*/React__default.createElement("a", {
      key: "missing-".concat(key),
      href: "#!",
      className: "alert alert-".concat(variant, " mb-3"),
      onClick: function onClick(e) {
        return !setConfig(true) && e.preventDefault();
      }
    }, "Click here to configure the ", /*#__PURE__*/React__default.createElement("b", null, label), " for this page.");
  })) : props.loading ? /*#__PURE__*/React__default.createElement("div", {
    className: "page-body body-".concat(props.type, " d-flex flex-1 align-items-center")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "w-100 text-center"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "h1 fa fa-spinner fa-spin"
  }))) : props.children));
}; // set menu


DashupUIPage.Body = Body$1(DashupUIContext$f);
DashupUIPage.Menu = Menu$1(DashupUIContext$f);
DashupUIPage.Item = Item(DashupUIContext$f);
DashupUIPage.Share = Share(DashupUIContext$f);
DashupUIPage.Filter = Filter(DashupUIContext$f);
DashupUIPage.Config = Config$1(DashupUIContext$f);
DashupUIPage.Connect = Connect(DashupUIContext$f); // export default

var DashupUIContext$e = null; // create dashup grid body

var DashupUIGridBody$1 = function DashupUIGridBody() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // use ref
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      optItem = _useState4[0],
      setItem = _useState4[1]; // on show


  var onShow = function onShow(e, item) {
    // set item
    setItem(show ? null : item);
    setShow(show ? null : e.target);
  }; // return JSX


  return /*#__PURE__*/React__default.createElement(DashupUIContext$e.Consumer, null, function (_ref) {
    var _ref$actions = _ref.actions,
        actions = _ref$actions === void 0 ? [] : _ref$actions,
        _ref$items = _ref.items,
        items = _ref$items === void 0 ? [] : _ref$items,
        canSubmit = _ref.canSubmit,
        _ref$columns = _ref.columns,
        columns = _ref$columns === void 0 ? [] : _ref$columns,
        saving = _ref.saving,
        loading = _ref.loading,
        onRow = _ref.onRow,
        renderField = _ref.renderField,
        fullHeight = _ref.fullHeight;
    return /*#__PURE__*/React__default.createElement("div", {
      className: fullHeight ? 'flex-1 fit-content' : ''
    }, !!(loading || props.loading) && /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex align-items-center bg-secondary-transparent rounded",
      style: {
        zIndex: 5
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "w-100 text-center"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa h1 fa-spinner fa-spin"
    }))), /*#__PURE__*/React__default.createElement(SimpleBar, {
      className: "grid-body p-relative ox-hidden"
    }, (items || []).map(function (item, i) {
      var _document;

      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "grid-row-".concat(item.get('_id')),
        onClick: function onClick(e) {
          return onRow && onRow(e, item);
        },
        className: "grid-row".concat(props.isSelected && props.isSelected(item) ? ' grid-row-selected' : '')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "grid-column grid-column-edit",
        onClick: function onClick(e) {
          return props.onSelect && props.onSelect(item);
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "column-inner"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "column-body"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "form-check"
      }, canSubmit && props.onSelect ? /*#__PURE__*/React__default.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        value: "selected",
        checked: props.isSelected && props.isSelected(item),
        onChange: function onChange(e) {}
      }) : /*#__PURE__*/React__default.createElement("input", {
        className: "form-check-input",
        disabled: true,
        type: "checkbox",
        value: "selected"
      }))))), /*#__PURE__*/React__default.createElement("div", {
        className: "grid-column-scroll"
      }, columns.map(function (column, i) {
        // return jsx
        return /*#__PURE__*/React__default.createElement("div", {
          key: "grid-row-".concat(item.get('_id'), "-").concat(column.id),
          className: "grid-field",
          style: {
            maxWidth: "".concat(column.basis, "%"),
            flexBasis: "".concat(column.basis, "%")
          }
        }, (renderField || props.renderField)(item, column, false, saving));
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "grid-column grid-column-edit"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "column-inner"
      }, canSubmit ? /*#__PURE__*/React__default.createElement("div", {
        className: "column-body"
      }, /*#__PURE__*/React__default.createElement(Button, {
        size: "sm",
        variant: "outline-dark",
        onClick: function onClick(e) {
          return !e.preventDefault() && onShow(e, item);
        }
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-ellipsis-h"
      })), !!show && (optItem === null || optItem === void 0 ? void 0 : optItem.get('_id')) === item.get('_id') && /*#__PURE__*/React__default.createElement(Overlay, {
        show: true,
        target: show,
        onHide: function onHide() {
          return !setShow(null) && setItem(null);
        },
        container: (_document = document) === null || _document === void 0 ? void 0 : _document.body,
        placement: "bottom-end",
        rootClose: true
      }, /*#__PURE__*/React__default.createElement(Popover$1, {
        className: "dropdown-menu"
      }, /*#__PURE__*/React__default.createElement(Dropdown$1.Header, null, "Update Item"), actions.map(function (action, i) {
        // check action
        if (action === 'divider') return /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, {
          key: "action-".concat(item.get('_id'), "-").concat(i)
        }); // return item

        return /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
          key: "action-".concat(item.get('_id'), "-").concat(action.id),
          href: action.href ? action.href(item) : null,
          onClick: action.onClick ? function () {
            return action.onClick(item);
          } : null,
          className: action.variant ? "text-".concat(action.variant) : ''
        }, action.icon && /*#__PURE__*/React__default.createElement("i", {
          className: "fa-".concat(action.icon, " me-2")
        }), action.content);
      })))) : /*#__PURE__*/React__default.createElement("div", {
        className: "column-body"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-sm btn-outline-secondary",
        type: "button"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-ellipsis-h"
      }))))));
    })));
  });
}; // export default page menu


var Body = (function (ctx) {
  // use context
  DashupUIContext$e = ctx; // return actual component

  return DashupUIGridBody$1;
});

var DashupUIContext$d = null; // create dashup grid body

var DashupUIGridBulk$1 = function DashupUIGridBulk() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // remove
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      remove = _useState2[0],
      setRemove = _useState2[1]; // return JSX


  return /*#__PURE__*/React__default.createElement(DashupUIContext$d.Consumer, null, function (_ref) {
    var _props$selected, _props$selected2, _props$selected3, _props$selected4;

    var saving = _ref.saving,
        columns = _ref.columns,
        selected = _ref.selected,
        canSubmit = _ref.canSubmit,
        renderField = _ref.renderField,
        onRemoveBulk = _ref.onRemoveBulk;
    // return jsx
    return canSubmit && (selected !== null && selected !== void 0 && selected.total || (_props$selected = props.selected) !== null && _props$selected !== void 0 && _props$selected.total || 0) ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "grid-bulk"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "mt-3 mb-2"
    }, /*#__PURE__*/React__default.createElement("b", null, ((selected === null || selected === void 0 ? void 0 : selected.total) || ((_props$selected2 = props.selected) === null || _props$selected2 === void 0 ? void 0 : _props$selected2.total) || 0).toLocaleString(), " Items Selected")), /*#__PURE__*/React__default.createElement("div", {
      className: "grid-body"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "grid-row"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column grid-column-add",
      onClick: function onClick(e) {
        return props.onSelect('clear');
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-inner"
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      key: "tooltip-deselect",
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, {
        id: "deselect-tooltip"
      }, "Deselect All"),
      placement: "right"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "form-check"
    }, /*#__PURE__*/React__default.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "selected",
      checked: true,
      onChange: function onChange(e) {}
    }))))), props.item ? /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column-scroll"
    }, columns.map(function (column, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "bulk-row-".concat(column.id),
        className: "grid-field",
        style: {
          maxWidth: "".concat(column.basis, "%"),
          flexBasis: "".concat(column.basis, "%")
        }
      }, (renderField || props.renderField)(props.item, column, selected || props.selected, saving));
    })) : /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column-scroll"
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column grid-column-edit"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-inner align-items-center justify-content-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-body"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-outline-danger",
      onClick: function onClick(e) {
        return setRemove(true);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-trash"
    })))))))), remove && /*#__PURE__*/React__default.createElement(Modal$1, {
      show: true,
      onHide: function onHide(e) {
        return setRemove(null);
      }
    }, /*#__PURE__*/React__default.createElement(Modal$1.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement(Modal$1.Title, null, "Removing ", /*#__PURE__*/React__default.createElement("b", null, ((selected === null || selected === void 0 ? void 0 : selected.total) || ((_props$selected3 = props.selected) === null || _props$selected3 === void 0 ? void 0 : _props$selected3.total) || 0).toLocaleString(), " items"))), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, /*#__PURE__*/React__default.createElement("p", {
      className: "lead"
    }, "Are you sure you want to remove ", /*#__PURE__*/React__default.createElement("b", null, ((selected === null || selected === void 0 ? void 0 : selected.total) || ((_props$selected4 = props.selected) === null || _props$selected4 === void 0 ? void 0 : _props$selected4.total) || 0).toLocaleString()), " items?")), /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "primary",
      onClick: function onClick(e) {
        return !setRemove(null) && e.preventDefault();
      }
    }, "Close"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: "ms-2",
      disabled: saving,
      onClick: function onClick(e) {
        return onRemoveBulk();
      }
    }, saving ? 'Removing...' : 'Confirm')))) : /*#__PURE__*/React__default.createElement("div", null);
  });
}; // export default page menu


var Bulk = (function (ctx) {
  // use context
  DashupUIContext$d = ctx; // return actual component

  return DashupUIGridBulk$1;
});

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4$1(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var DashupUIContext$c = null; // create dashup grid body

var DashupUIGridHeader$1 = function DashupUIGridHeader() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // use state
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      basis = _useState2[0],
      setBasis = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      update = _useState4[0],
      setUpdate = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      rename = _useState6[0],
      setRename = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      remove = _useState8[0],
      setRemove = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      resize = _useState10[0],
      setResize = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showColumn = _useState12[0],
      setShowColumn = _useState12[1]; // header


  var column = useRef(null);
  var header = useRef(null); // fix basis

  var fixBasis = function fixBasis(columns) {
    // original values
    var minWidth = 5; // check columns

    columns.forEach(function (col) {
      // set basis
      if (!col.basis) col.basis = parseFloat((100 / columns.length).toFixed(2));
      if (col.basis < minWidth) col.basis = minWidth;
    }); // total basis

    var totalBasis = columns.reduce(function (accum, col) {
      return accum + col.basis;
    }, 0); // fit into basis properly

    if (totalBasis !== 100) {
      // check columns
      columns.forEach(function (col) {
        // set basis
        col.basis = parseFloat((col.basis / totalBasis * 100).toFixed(2));
      });
    } // return columns


    return columns;
  }; // on add column


  var onAdd = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, _ref) {
      var title, _ref$field, field, _ref$sort, sort, _ref$view, view, columns, setColumns, column;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              title = _ref.title, _ref$field = _ref.field, field = _ref$field === void 0 ? 'custom' : _ref$field, _ref$sort = _ref.sort, sort = _ref$sort === void 0 ? null : _ref$sort, _ref$view = _ref.view, view = _ref$view === void 0 ? null : _ref$view, columns = _ref.columns, setColumns = _ref.setColumns;
              // prevent
              e.preventDefault();
              e.stopPropagation(); // create new column

              column = {
                view: view,
                title: title,
                id: v4$1(),
                sort: sort,
                field: field,
                order: columns.length + 1
              }; // push column

              columns.push(column);
              (props.setColumns || setColumns)(fixBasis(columns)); // set column

              if (field === 'custom') setUpdate(column);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onAdd(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // on remove


  var onRemove = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, column, _ref3) {
      var columns, setColumns;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              columns = _ref3.columns, setColumns = _ref3.setColumns;
              // remove
              (props.setColumns || setColumns)(fixBasis(columns.filter(function (c) {
                return c.id !== column.id;
              })));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onRemove(_x3, _x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }(); // on save


  var onSave = function onSave(e, column, _ref5) {
    var columns = _ref5.columns,
        setColumns = _ref5.setColumns;
    // set columns
    (props.setColumns || setColumns)(fixBasis(columns)); // check rename

    if (rename) setRename(null);
    if (update) setUpdate(null);
  }; // on end


  var _onEnd = function onEnd(e, _ref6) {
    var columns = _ref6.columns,
        setColumns = _ref6.setColumns;
    // item
    var item = e.item,
        target = e.target,
        newIndex = e.newIndex; // get item id

    var id = item.getAttribute('data-column'); // find children

    var children = _toConsumableArray(target.childNodes).map(function (node) {
      // check id
      return node.getAttribute && node.getAttribute('data-column');
    }).filter(function (idX) {
      return idX !== id;
    }); // splice in


    children.splice(newIndex, 0, id); // new columns

    var newColumns = children.map(function (child) {
      return columns.find(function (c) {
        return c.id === child;
      });
    }); // set order

    newColumns.forEach(function (col, i) {
      return col.order = i;
    }); // set columns

    (props.setColumns || setColumns)(fixBasis(newColumns));
  }; // begin resize


  var beginResize = function beginResize(e, i, column, _ref7) {
    var columns = _ref7.columns,
        setColumns = _ref7.setColumns;
    // check target
    if (!e.target.getAttribute('class').includes('column-resize')) return; // original values

    var minWidth = 5;
    var maxWidth = 100 - (columns.length - 1) * minWidth;
    var origPageX = e.pageX;
    var origBasis = column.basis; // set change

    var change = 0; // temp basis

    var tempBasis = columns.reduce(function (accum, col) {
      // add basis
      accum[col.id] = col.basis || minWidth; // return accum

      return accum;
    }, {}); // column moving

    setBasis(tempBasis);
    setResize(column.id); // mouse move

    var mouseMove = function mouseMove(e) {
      // header width
      var headerWidth = header.current.scrollWidth; // update change

      var changeX = origPageX - e.pageX; // check width

      if (!headerWidth || !changeX) return; // check width of change

      change = (parseFloat((changeX / headerWidth * 100).toFixed(2)) || 0) * -1; // no change

      if (i === columns.length - 1 && change < 0) change = 0; // create new basis

      var newBasis = parseFloat((origBasis + change > maxWidth ? maxWidth : origBasis + change).toFixed(2));
      if (newBasis < minWidth) newBasis = minWidth; // remove basis from all others

      var currentR = newBasis - origBasis;
      var currentI = i + 1;
      var currentP = columns[currentI]; // remove max evenly from next column in order

      while (currentP && currentR != 0) {
        // remove from next basis
        var nextB = currentP.basis - currentR > maxWidth ? maxWidth : currentP.basis - currentR;
        if (nextB < minWidth) nextB = minWidth; // set css on other columns

        tempBasis[currentP] = nextB; // remove from current R

        currentR = currentR - (currentP.basis - nextB);
        currentI = currentI + 1;
        currentP = columns[currentI];
      } // update basis


      tempBasis[column.id] = newBasis - currentR; // new basis

      setBasis(_objectSpread2({}, tempBasis));
    }; // mouse end


    var mouseEnd = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // remove listeners
                document.removeEventListener('mouseup', mouseEnd);
                document.removeEventListener('mousemove', mouseMove); // update basis

                columns.forEach(function (column) {
                  // set basis
                  if (tempBasis[column.id]) column.basis = tempBasis[column.id];
                }); // set columns

                _context3.next = 5;
                return (props.setColumns || setColumns)(fixBasis(columns));

              case 5:
                setBasis(null);
                setResize(null);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function mouseEnd(_x6) {
        return _ref8.apply(this, arguments);
      };
    }(); // on mousemove


    document.addEventListener('mouseup', mouseEnd);
    document.addEventListener('mousemove', mouseMove);
  }; // remove jsx


  var removeJsx = function removeJsx(_ref9) {
    var columns = _ref9.columns,
        setColumns = _ref9.setColumns;
    // return jsx
    return remove && /*#__PURE__*/React__default.createElement(Modal$1, {
      show: !!remove,
      onHide: function onHide(e) {
        return setRemove(null);
      }
    }, /*#__PURE__*/React__default.createElement(Modal$1.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement(Modal$1.Title, null, "Removing ", /*#__PURE__*/React__default.createElement("b", null, remove.title))), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, /*#__PURE__*/React__default.createElement("p", {
      className: "lead"
    }, "Are you sure you want to remove ", /*#__PURE__*/React__default.createElement("b", null, remove.title), "?")), /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "primary",
      onClick: function onClick(e) {
        return !setRemove(null) && e.preventDefault();
      }
    }, "Close"), /*#__PURE__*/React__default.createElement(Button, {
      variant: "danger",
      className: "ms-2",
      onClick: function onClick(e) {
        return !setRemove(null) && onRemove(e, remove, {
          columns: columns,
          setColumns: setColumns
        });
      }
    }, "Confirm")));
  }; // update jsx


  var updateJsx = function updateJsx(_ref10) {
    var dashup = _ref10.dashup,
        columns = _ref10.columns,
        setColumns = _ref10.setColumns;
    // return jsx
    return update && /*#__PURE__*/React__default.createElement(Modal$1, {
      show: !!update,
      onHide: function onHide(e) {
        return onSave(e, update, {
          columns: columns,
          setColumns: setColumns
        });
      }
    }, /*#__PURE__*/React__default.createElement(Modal$1.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement(Modal$1.Title, null, "Updating ", /*#__PURE__*/React__default.createElement("b", null, update.title))), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Column Title"), /*#__PURE__*/React__default.createElement("input", {
      className: "form-control",
      defaultValue: update.title,
      onChange: function onChange(e) {
        return update.title = e.target.value;
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Column Sort"), /*#__PURE__*/React__default.createElement("input", {
      className: "form-control",
      defaultValue: update.sort,
      onChange: function onChange(e) {
        return update.sort = e.target.value;
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Column Display"), !!(dashup || props.dashup) && /*#__PURE__*/React__default.createElement(View, {
      type: "field",
      view: "code",
      struct: "code",
      value: update.view,
      dashup: dashup || props.dashup,
      onChange: function onChange(v) {
        return update.view = v;
      }
    }))), /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
      variant: "primary",
      onClick: function onClick(e) {
        return onSave(e, update, {
          columns: columns,
          setColumns: setColumns
        });
      }
    }, "Close")));
  }; // render column


  var renderColumn = function renderColumn(column, i, _ref11) {
    var canAlter = _ref11.canAlter,
        sort = _ref11.sort,
        columns = _ref11.columns,
        setColumns = _ref11.setColumns,
        setSort = _ref11.setSort;
    // return JSX
    return /*#__PURE__*/React__default.createElement("div", {
      key: "colum-header-".concat(column.id),
      "data-column": column.id,
      className: "grid-column grid-column-header".concat(column.id === resize ? ' column-moving' : '').concat(column.id === (rename && rename.id) ? ' active' : ''),
      style: {
        maxWidth: "".concat(basis && basis[column.id] || column.basis, "%"),
        flexBasis: "".concat(basis && basis[column.id] || column.basis, "%")
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-inner"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-body"
    }, column.id === (rename && rename.id) ? /*#__PURE__*/React__default.createElement("input", {
      className: "column-body-inner",
      defaultValue: column.title,
      onChange: function onChange(e) {
        return column.title = e.target.value;
      },
      onBlur: function onBlur(e) {
        return onSave(e, column, {
          columns: columns,
          setColumns: setColumns
        });
      },
      autoFocus: true
    }) : /*#__PURE__*/React__default.createElement("div", {
      className: "column-body-inner".concat(canAlter ? ' moves' : '')
    }, column.title)), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Sort by Column"),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-light column-btn ms-2 me-0".concat(sort.id === column.id ? ' active' : ''),
      onClick: function onClick(e) {
        return setSort(column);
      }
    }, sort.id !== column.id ? /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-arrows-v"
    }) : sort.way === 1 ? /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-arrow-up"
    }) : /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-arrow-down"
    }))), column.id === (rename && rename.id) ? /*#__PURE__*/React__default.createElement("div", {
      className: "btn-group ms-0 me-0"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-light column-btn",
      onClick: function onClick(e) {
        return onSave(e, column, {
          columns: columns,
          setColumns: setColumns
        });
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-check"
    })), /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-light column-btn",
      onClick: function onClick(e) {
        return !setRename(null) && e.preventDefault();
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-times"
    }))) : canAlter && /*#__PURE__*/React__default.createElement(Dropdown$1, {
      className: "btn-group dropdown ms-0 me-0"
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Update Column"),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement(Dropdown$1.Toggle, {
      variant: "light",
      size: "sm",
      className: "column-btn"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-cog"
    }))), /*#__PURE__*/React__default.createElement(Dropdown$1.Menu, null, /*#__PURE__*/React__default.createElement(Dropdown$1.Header, null, "Update Column"), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        return !setRename(column) && e.preventDefault();
      }
    }, "Rename column"), column.field === 'custom' && /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        return !setUpdate(column) && e.preventDefault();
      }
    }, "Update column"), /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, null), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        return !setRemove(column) && e.preventDefault();
      },
      className: "text-danger"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "me-2 fa fa-trash"
    }), "Remove column"))), canAlter && /*#__PURE__*/React__default.createElement("div", {
      className: "column-resize",
      "data-column": column.id,
      onMouseDown: function onMouseDown(e) {
        return beginResize(e, i, column, {
          columns: columns,
          setColumns: setColumns
        });
      }
    })));
  }; // return JSX


  return /*#__PURE__*/React__default.createElement(DashupUIContext$c.Consumer, null, function (_ref12) {
    var _props$selected;

    var sort = _ref12.sort,
        dashup = _ref12.dashup,
        selected = _ref12.selected,
        canAlter = _ref12.canAlter,
        canSubmit = _ref12.canSubmit,
        columns = _ref12.columns,
        available = _ref12.available,
        setSort = _ref12.setSort,
        setColumns = _ref12.setColumns;
    return /*#__PURE__*/React__default.createElement("div", {
      className: "grid-header",
      ref: header
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column grid-column-add",
      onClick: function onClick(e) {
        return props.onSelect && props.onSelect('all');
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-inner"
    }, canSubmit && props.onSelect && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      key: "tooltip-grid",
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, {
        id: "select-all-tooltip"
      }, (selected || props.selected || {}).type === 'all' ? 'Deselect All' : 'Select All'),
      placement: "right"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-body"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "form-check"
    }, /*#__PURE__*/React__default.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      value: "selected",
      checked: ((_props$selected = props.selected) === null || _props$selected === void 0 ? void 0 : _props$selected.type) === 'all',
      onChange: function onChange() {}
    })))))), canAlter ? /*#__PURE__*/React__default.createElement(ReactSortable, {
      list: columns || [],
      onEnd: function onEnd(e) {
        return _onEnd(e, {
          columns: columns,
          setColumns: setColumns
        });
      },
      handle: ".moves",
      setList: function setList() {},
      className: "grid-column-scroll"
    }, (columns || []).map(function (column, i) {
      // return jsx
      return renderColumn(column, i, {
        canAlter: canAlter,
        sort: sort,
        columns: columns,
        setSort: setSort,
        setColumns: setColumns
      });
    })) : /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column-scroll"
    }, (columns || []).map(function (column, i) {
      // return jsx
      return renderColumn(column, i, {
        canAlter: canAlter,
        sort: sort,
        columns: columns,
        setSort: setSort,
        setColumns: setColumns
      });
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "grid-column grid-column-add"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-inner"
    }, canAlter ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      key: "tooltip-column",
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, {
        id: "column-add-tooltip"
      }, "Add Column"),
      placement: "left"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "column-body",
      onClick: function onClick() {
        return setShowColumn(true);
      },
      ref: column
    }, /*#__PURE__*/React__default.createElement(Button, {
      variant: "outline-dark",
      size: "sm",
      id: "grid-column-add"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-columns"
    })))), /*#__PURE__*/React__default.createElement(Overlay, {
      show: showColumn,
      target: column.current,
      onHide: function onHide() {
        return setShowColumn(false);
      },
      rootClose: true,
      placement: "bottom-end"
    }, /*#__PURE__*/React__default.createElement(Popover$1, {
      className: "dropdown-menu dropdown-menu-edit p-0"
    }, /*#__PURE__*/React__default.createElement(Dropdown$1.Header, null, "Add Column"), (available || []).map(function (column, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
        key: "add-column-".concat(column.uuid),
        onClick: function onClick(e) {
          return onAdd(e, {
            field: column.uuid || column.key,
            title: column.label || column.title,
            columns: columns,
            setColumns: setColumns
          });
        }
      }, column.title || column.label);
    }), /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, null), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        return onAdd(e, {
          sort: 'created_at',
          view: '{{date _meta.created_at}}',
          title: 'Created At',
          columns: columns,
          setColumns: setColumns
        });
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-calendar-day me-2"
    }), "Created At"), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        return onAdd(e, {
          sort: 'updated_at',
          view: '{{date _meta.updated_at}}',
          title: 'Updated At',
          columns: columns,
          setColumns: setColumns
        });
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-calendar-alt me-2"
    }), "Updated At"), /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
      onClick: function onClick(e) {
        return onAdd(e, {
          view: '',
          title: 'Custom Column',
          columns: columns,
          setColumns: setColumns
        });
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-function me-2"
    }), "Custom")))) : /*#__PURE__*/React__default.createElement("div", {
      className: "column-body"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-outline-secondary",
      type: "button"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-columns"
    }))))), updateJsx({
      dashup: dashup,
      columns: columns,
      setColumns: setColumns
    }), removeJsx({
      columns: columns,
      setColumns: setColumns
    }));
  });
}; // export default page menu


var Header = (function (ctx) {
  // use context
  DashupUIContext$c = ctx; // return actual component

  return DashupUIGridHeader$1;
});

var r=function(r,t,a){return Math.max(t,Math.min(r,a))},t=function(r,t){for(var a=[],e=r;e<t;)a.push(e),e+=1;return a},a=function(a){var e=a.records,n=a.limit;void 0===n&&(n=10);var i=a.current;void 0===i&&(i=1);var o=a.delta;void 0===o&&(o=1);var v=a.fixed;void 0===v&&(v=1);var d=Math.ceil(Math.max(1,e/n)),u=r(i,1,d),m=1+v,c=d-v,f=Math.min(c-2*o-1,c),h=Math.min(m+2*o+1,c),l=r(u-o,m,f),x=r(u+o,h,c),M=l-v,p=d-v-x+1,s=M>2,b=p>2,g=t(1,r(v+1,1,d+1)),j=t(2===M?l-1:l,2===p?x+2:x+1),k=t(r(d-v+1,2,d+1),d+1),q=r(n*u-n+1,1,e),w=r(n*u,1,e),y=s&&r(u-1-2*o,1,d);return {total:d,current:u,start:g,middle:j,end:k,next:b&&r(u+1+2*o,1,d),prev:y,from:q,to:w}};

var DashupUIContext$b = null; // create dashup grid body

var DashupUIGridFooter$1 = function DashupUIGridFooter() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default.createElement(DashupUIContext$b.Consumer, null, function (_ref) {
    var skip = _ref.skip,
        records = _ref.total,
        limit = _ref.limit,
        setSkip = _ref.setSkip;
    // set current
    var current = Math.floor((skip || 0) / (limit || 25)) + 1; // paginate

    var _pagix = a({
      limit: limit || 25,
      records: records || 0,
      current: current
    }),
        total = _pagix.total,
        start = _pagix.start,
        middle = _pagix.middle,
        end = _pagix.end,
        prev = _pagix.prev,
        next = _pagix.next,
        from = _pagix.from,
        to = _pagix.to; // on page


    var onPage = function onPage(page) {
      // new skip
      var newSkip = (page - 1) * (limit || 25); // skip

      (setSkip || props.setSkip)(newSkip);
    }; // return jsx


    return /*#__PURE__*/React__default.createElement("div", {
      className: "px-2 pt-3"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "col-6 d-flex align-items-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "pagination-stats w-100"
    }, "Showing ", (from || 0).toLocaleString(), " - ", (to || 0).toLocaleString(), " of ", (records || 0).toLocaleString())), /*#__PURE__*/React__default.createElement("div", {
      className: "col-6 d-flex align-items-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/React__default.createElement(Pagination$1, {
      className: "float-end m-0"
    }, /*#__PURE__*/React__default.createElement(Pagination$1.First, {
      disabled: current === 1,
      onClick: function onClick() {
        return onPage(1);
      }
    }), prev && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Pagination$1.Prev, {
      onClick: function onClick() {
        return onPage(current - 1);
      }
    })), [].concat(_toConsumableArray(start), _toConsumableArray(middle), _toConsumableArray(end)).map(function (page) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(Pagination$1.Item, {
        key: "page-".concat(page),
        active: page === current,
        onClick: function onClick() {
          return onPage(page);
        }
      }, page);
    }), next && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Pagination$1.Next, {
      onClick: function onClick() {
        return onPage(current + 1);
      }
    })), /*#__PURE__*/React__default.createElement(Pagination$1.Last, {
      disabled: current === total,
      onClick: function onClick() {
        return onPage(total);
      }
    }))))));
  });
}; // export default page menu


var Footer = (function (ctx) {
  // use context
  DashupUIContext$b = ctx; // return actual component

  return DashupUIGridFooter$1;
});

var DashupUICard = function DashupUICard() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // use state
  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = useState(new Date()),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      var setUpdated = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      tagOpen = _useState6[0],
      setTagOpen = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      userOpen = _useState8[0],
      setUserOpen = _useState8[1]; // refs


  var tagRef = useRef(null);
  var userRef = useRef(null); // add listeners

  useEffect(function () {
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
      color: (_colorTag$color = colorTag.color) !== null && _colorTag$color !== void 0 && _colorTag$color.hex && (_colorTag$color2 = colorTag.color) !== null && _colorTag$color2 !== void 0 && _colorTag$color2.drk ? '#fff' : '#000',
      background: colors[colorTag.color] || ((_colorTag$color3 = colorTag.color) === null || _colorTag$color3 === void 0 ? void 0 : _colorTag$color3.hex) || colorTag.color
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
  }; // get short name


  var getName = function getName(user) {
    // get name
    var name = "".concat(user.name || '').trim() || 'N A'; // return name

    return "".concat((name.split(' ')[0] || '')[0] || '').concat((name.split(' ')[1] || '')[0] || '');
  }; // get avatar


  var getAvatar = function getAvatar(user) {
    // return avatar
    return ((((user.avatar || [])[0] || {}).thumbs || {})['1x-sq'] || {}).url;
  }; // has tags


  var hasTags = function hasTags() {
    // check page
    if (!props.page) return; // tag uuid

    return !!(props.tag || props.page.get('data.tag') || []).length;
  }; // has user


  var hasUser = function hasUser() {
    // check page
    if (!props.page) return; // tag uuid

    return !!(props.user || props.page.get('data.user') || []).length;
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
  }; // users jsx


  var usersJsx = hasUser() && getUserFields().map(function (type, a) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("div", {
      ref: userRef,
      key: "user-".concat(type.uuid)
    }, getUsers(type).map(function (user, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        key: "user-".concat(type.uuid, "-").concat(user.id || user._id),
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "".concat(type.label, ": ").concat(user.name)),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-sm btn-circle me-1",
        style: {
          backgroundImage: getAvatar(user) ? "url(".concat(getAvatar(user), ")") : null
        },
        onClick: function onClick() {
          return setUserOpen(type);
        }
      }, getAvatar(user) ? '' : getName(user)));
    }), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Add ", type.label),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-outline-dark btn-circle",
      id: "user-".concat(props.item.get('_id')),
      onClick: function onClick() {
        return setUserOpen(type);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-plus"
    }))));
  }); // return jsx

  return !props.item || props.item.get('archived') ? null : /*#__PURE__*/React__default.createElement("div", {
    className: "card card-sm card-task".concat(getColor() ? ' has-color' : '').concat(props.size === 'sm' ? ' w-100 h-100 m-0' : ''),
    "data-id": props.item.get('_id'),
    style: _objectSpread2({
      background: props.background
    }, props.style || {}),
    id: "card-".concat(props.item.get('_id'))
  }, getColor() && /*#__PURE__*/React__default.createElement("div", {
    className: "color-strip",
    style: getColor()
  }), props.size !== 'sm' && hasTags() && /*#__PURE__*/React__default.createElement("div", {
    className: "card-header tags p-2 pb-1"
  }, getTagFields().map(function (type, a) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("div", {
      key: "tag-".concat(type.uuid),
      ref: tagRef
    }, getTags(type).map(function (tag, i) {
      var _tag$color, _tag$color2, _tag$color3;

      // hex
      var hex = colors[tag.color] || ((_tag$color = tag.color) === null || _tag$color === void 0 ? void 0 : _tag$color.hex) || tag.color; // return jsx

      return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
        key: "tag-".concat(type.uuid, "-").concat(tag.value),
        overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "".concat(type.label, ": ").concat(tag.label)),
        placement: "top"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "btn btn-sm".concat(colors[tag.color] ? " btn-".concat(tag.color) : '', " me-1"),
        onClick: function onClick() {
          return setTagOpen(true);
        },
        style: {
          color: (_tag$color2 = tag.color) !== null && _tag$color2 !== void 0 && _tag$color2.hex ? (_tag$color3 = tag.color) !== null && _tag$color3 !== void 0 && _tag$color3.drk ? '#fff' : '#000' : null,
          background: hex ? "".concat(hex, "cc") : null
        }
      }, tag.label));
    }), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Add ", type.label),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-outline-dark me-2",
      id: "tag-".concat(props.item.get('_id')),
      onClick: function onClick() {
        return setTagOpen(true);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-tag"
    }))));
  })), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick(e) {
      return props.onClick(props.item);
    },
    className: "card-body py-1 px-2".concat(props.size !== 'sm' && hasTags() ? ' pt-2' : '').concat(props.size === 'sm' ? ' align-items-center' : '')
  }, !!props.repeat && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: props.repeat
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-repeat pe-2"
  })), /*#__PURE__*/React__default.createElement(DashupUIHbs, {
    template: props.template,
    data: props.item ? props.item.toJSON() : {},
    isInline: props.size === 'sm'
  })), props.size !== 'sm' && /*#__PURE__*/React__default.createElement("div", {
    className: "card-footer tags p-2 pt-1"
  }, usersJsx, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Discuss Item"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-".concat(props.item.get('_alert.important') && !props.item.get('_alert.all') ? '' : 'outline-dark').concat(props.item.get('_alert.important') ? 'primary' : '').concat(props.item.get('_alert.all') && !props.item.get('_alert.important') ? 'info' : '', " ms-auto"),
    id: "chat-".concat(props.item.get('_id')),
    onClick: function onClick(e) {
      return props.onItem(props.item);
    }
  }, !!count && /*#__PURE__*/React__default.createElement("span", {
    className: "me-2"
  }, count.toLocaleString()), /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-comments"
  })))), /*#__PURE__*/React__default.createElement(Overlay, {
    show: tagOpen,
    target: tagRef.current,
    onHide: function onHide() {
      return setTagOpen(false);
    },
    rootClose: true,
    placement: "bottom-start"
  }, /*#__PURE__*/React__default.createElement(Popover$1, {
    className: "dropdown-menu dropdown-menu-edit p-2"
  }, getTagFields().map(function (field, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: "tag-".concat(field.uuid)
    }, i !== 0 && /*#__PURE__*/React__default.createElement(Dropdown$1.Divider, null), /*#__PURE__*/React__default.createElement("div", {
      className: "tags"
    }, (field.options || []).map(function (opt, a) {
      var _opt$color, _opt$color2, _opt$color3;

      // return jsx
      return /*#__PURE__*/React__default.createElement("button", {
        key: "opt-".concat(opt.value),
        style: {
          color: ((_opt$color = opt.color) === null || _opt$color === void 0 ? void 0 : _opt$color.hex) && ((_opt$color2 = opt.color) !== null && _opt$color2 !== void 0 && _opt$color2.drk ? '#fff' : '#000'),
          background: colors[opt.color] || ((_opt$color3 = opt.color) === null || _opt$color3 === void 0 ? void 0 : _opt$color3.hex) || opt.color
        },
        onClick: function onClick() {
          return onTag(field, opt.value);
        },
        className: "btn w-100".concat(a !== 0 ? ' mt-2' : '')
      }, opt.label);
    })));
  }))), /*#__PURE__*/React__default.createElement(Overlay, {
    show: !!userOpen,
    target: userRef.current,
    onHide: function onHide() {
      return setUserOpen(false);
    },
    rootClose: true,
    placement: "bottom-start"
  }, /*#__PURE__*/React__default.createElement(Popover$1, {
    className: "dropdown-menu popover-grid"
  }, /*#__PURE__*/React__default.createElement(View, {
    view: "input",
    type: "field",
    struct: "user",
    dashup: props.dashup,
    field: userOpen,
    value: props.item && props.item.get((userOpen === null || userOpen === void 0 ? void 0 : userOpen.name) || (userOpen === null || userOpen === void 0 ? void 0 : userOpen.uuid)),
    noLabel: true,
    onChange: onUser,
    menuIsOpen: true
  }))));
}; // export default

var DashupUIContext$a = null; // create dashup grid body

var DashupUIGridGallery$1 = function DashupUIGridGallery() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // get props
  var getProps = function getProps() {
    // new props
    var newProps = _objectSpread2({}, props); // delete


    delete newProps.item;
    delete newProps.view;
    delete newProps.struct; // return props

    return newProps;
  }; // return JSX


  return /*#__PURE__*/React__default.createElement(DashupUIContext$a.Consumer, null, function (_ref) {
    var _ref$items = _ref.items,
        items = _ref$items === void 0 ? [] : _ref$items,
        display = _ref.display,
        loading = _ref.loading;
    return /*#__PURE__*/React__default.createElement("div", {
      className: "grid-body"
    }, loading ? /*#__PURE__*/React__default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-body py-5 text-center"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-spinner fa-spin h1"
    }))) : /*#__PURE__*/React__default.createElement("div", {
      className: "row"
    }, items.map(function (item, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "card-".concat(item.get('_id')),
        className: props.column || 'col-3'
      }, /*#__PURE__*/React__default.createElement(DashupUICard, _extends$1({
        template: props.display || display,
        item: item
      }, getProps())));
    })));
  });
}; // export default page menu


var Gallery = (function (ctx) {
  // use context
  DashupUIContext$a = ctx; // return actual component

  return DashupUIGridGallery$1;
});

var DashupUIContext$9 = null;
var DashupUIGridBody = null;
var DashupUIGridBulk = null;
var DashupUIGridHeader = null;
var DashupUIGridFooter = null;
var DashupUIGridGallery = null; // create dashup grid body

var DashupUIGridGroup = function DashupUIGridGroup() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default.createElement(DashupUIContext$9.Consumer, null, function (_ref) {
    var _React$createElement;

    var dashup = _ref.dashup,
        bulkItem = _ref.bulkItem,
        display = _ref.display,
        loading = _ref.loading,
        renderField = _ref.renderField,
        setSkip = _ref.setSkip,
        setColumns = _ref.setColumns,
        selected = _ref.selected,
        saving = _ref.saving,
        onSelect = _ref.onSelect,
        isSelected = _ref.isSelected,
        fullHeight = _ref.fullHeight;
    return /*#__PURE__*/React__default.createElement("div", {
      className: "dashup-grid-group".concat(fullHeight ? ' d-flex flex-1 flex-column' : '')
    }, props.label && /*#__PURE__*/React__default.createElement("div", {
      className: "group-title"
    }, props.label), /*#__PURE__*/React__default.createElement("div", {
      className: "grid-main".concat(fullHeight ? ' d-flex flex-1 flex-column' : '')
    }, typeof props.display !== 'undefined' ? /*#__PURE__*/React__default.createElement(DashupUIGridGallery, _extends$1({
      display: display || props.display
    }, props)) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(DashupUIGridHeader, {
      dashup: dashup || props.dashup,
      loading: loading || props.loading,
      selected: selected || props.selected,
      onSelect: onSelect || props.onSelect,
      isSelected: isSelected || props.isSelected,
      setColumns: setColumns || props.setColumns
    }), /*#__PURE__*/React__default.createElement(DashupUIGridBody, {
      dashup: dashup || props.dashup,
      loading: loading || props.loading,
      selected: selected || props.selected,
      onSelect: onSelect || props.onSelect,
      isSelected: isSelected || props.isSelected,
      renderField: renderField || props.renderField
    }), /*#__PURE__*/React__default.createElement(DashupUIGridBulk, (_React$createElement = {
      item: bulkItem || props.bulkItem,
      dashup: dashup || props.dashup,
      loading: saving || props.saving
    }, _defineProperty(_React$createElement, "loading", loading || props.loading), _defineProperty(_React$createElement, "selected", selected || props.selected), _defineProperty(_React$createElement, "onSelect", onSelect || props.onSelect), _defineProperty(_React$createElement, "isSelected", isSelected || props.isSelected), _defineProperty(_React$createElement, "renderField", renderField || props.renderField), _React$createElement))), /*#__PURE__*/React__default.createElement(DashupUIGridFooter, {
      setSkip: setSkip || props.setSkip
    })));
  });
}; // export default page menu


var Group = (function (ctx) {
  // use context
  DashupUIContext$9 = ctx;
  DashupUIGridBody = Body(ctx);
  DashupUIGridBulk = Bulk(ctx);
  DashupUIGridHeader = Header(ctx);
  DashupUIGridFooter = Footer(ctx);
  DashupUIGridGallery = Gallery(ctx); // return actual component

  return DashupUIGridGroup;
});

var DashupUIContext$8 = /*#__PURE__*/createContext(); // create page base

var DashupUIGrid = function DashupUIGrid() {
  var _props$sort, _props$sort2, _props$sort3;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // get ctx
  var getCtx = function getCtx(_ref) {
    var _ref$total = _ref.total,
        total = _ref$total === void 0 ? 0 : _ref$total,
        _ref$items = _ref.items,
        items = _ref$items === void 0 ? [] : _ref$items,
        _ref$loading = _ref.loading,
        loading = _ref$loading === void 0 ? false : _ref$loading;
    // return
    return {
      // skip
      total: total,
      items: items,
      loading: loading,
      sort: props.sort || {},
      skip: props.skip || 0,
      limit: props.limit || 25,
      // variables
      dashup: props.dashup,
      saving: props.saving,
      actions: props.actions,
      columns: props.columns,
      selected: props.selected,
      available: props.available,
      // can
      canAlter: props.canAlter,
      canSubmit: props.canSubmit,
      fullHeight: props.fullHeight,
      // set methods
      setSkip: props.setSkip,
      setSort: props.setSort,
      setLimit: props.setLimit,
      setColumns: props.setColumns,
      // event methods
      onRemoveBulk: props.onRemoveBulk,
      // render methods
      renderField: props.renderField
    };
  }; // create context


  var _useState = useState(getCtx({
    total: props.total,
    items: props.items
  })),
      _useState2 = _slicedToArray(_useState, 2),
      ctx = _useState2[0],
      setCtx = _useState2[1]; // use effect


  useEffect(function () {
    // set ctx loading
    setCtx(getCtx({
      items: ctx.items,
      total: ctx.total,
      loading: ctx.loading
    }));
  }, [props.saving, props.columns]); // use effect

  useEffect(function () {
    // set ctx loading
    setCtx(getCtx({
      items: ctx.items,
      total: ctx.total,
      loading: true
    })); // let items

    var items, total; // on update

    var onUpdate = function onUpdate() {
      // set ctx loading
      setCtx(getCtx({
        items: items,
        total: total,
        loading: false
      }));
    }; // load data


    props.loadData().then(function (data) {
      // check listen on items
      if (data.items && data.items.on) {
        // set items
        items = data.items;
        total = data.total; // on update

        data.items.on('update', onUpdate);
      } // check data


      setCtx(getCtx(_objectSpread2(_objectSpread2({}, data), {}, {
        loading: false
      })));
    }); // return remove

    return function () {
      // check items
      if (items && items.removeListener) {
        items.removeListener('update', onUpdate);
        items.deafen();
      }
    };
  }, [props.id, props.skip, props.limit, (_props$sort = props.sort) === null || _props$sort === void 0 ? void 0 : _props$sort.way, ((_props$sort2 = props.sort) === null || _props$sort2 === void 0 ? void 0 : _props$sort2.sort) || ((_props$sort3 = props.sort) === null || _props$sort3 === void 0 ? void 0 : _props$sort3.field), props.reload, props.updated]); // return page

  return /*#__PURE__*/React__default.createElement("div", {
    className: "dashup-grid ".concat(ctx.fullHeight ? 'd-flex flex-1' : 'w-100')
  }, /*#__PURE__*/React__default.createElement(DashupUIContext$8.Provider, {
    value: ctx
  }, props.children));
}; // set menu


DashupUIGrid.Body = Body(DashupUIContext$8);
DashupUIGrid.Bulk = Bulk(DashupUIContext$8);
DashupUIGrid.Group = Group(DashupUIContext$8);
DashupUIGrid.Header = Header(DashupUIContext$8);
DashupUIGrid.Footer = Footer(DashupUIContext$8);
DashupUIGrid.Gallery = Gallery(DashupUIContext$8); // export default

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
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1]; // get duration


  var getDuration = function getDuration(time) {
    // return duration
    var duration = moment.duration(time * 100); // humanize

    return duration.humanize();
  }; // render body


  var renderBody = function renderBody(data) {
    var _props$embed$data, _props$embed$data2, _props$embed$data3, _props$embed$data4, _props$embed$data5, _props$embed$data6, _props$embed$data7, _props$embed$data8, _props$embed$data8$fa, _props$embed$data9, _props$embed$data10, _props$embed$data10$a, _props$embed$data11, _props$embed$data12, _props$embed$data13, _props$embed$data14, _props$embed$data15, _props$embed$data16, _props$embed$data17;

    // return jsx
    return /*#__PURE__*/React__default.createElement("div", {
      className: "row row-eq-height embed-".concat(props.embed.type)
    }, !props.embed.loading && !!dotProp.get(props.embed, 'data.images.0.url') && /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex align-items-center ".concat(!props.message || !show ? 'col-md-4' : 'col-12 mb-2')
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "embed text-center w-100"
    }, show && !!((_props$embed$data = props.embed.data) !== null && _props$embed$data !== void 0 && _props$embed$data.html) ? /*#__PURE__*/React__default.createElement("div", {
      className: "ratio ratio-16x9 rounded",
      dangerouslySetInnerHTML: {
        __html: props.embed.data.html
      }
    }) : /*#__PURE__*/React__default.createElement("div", {
      className: "ratio ratio-16x9"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: (_props$embed$data2 = props.embed.data) === null || _props$embed$data2 === void 0 ? void 0 : _props$embed$data2.url,
      target: "_blank",
      onClick: function onClick(e) {
        return !setShow(true) && e.preventDefault();
      },
      className: "rounded",
      style: {
        backgroundImage: "url(".concat(dotProp.get(props.embed, 'data.images.0.url'))
      }
    })))), !!((_props$embed$data3 = props.embed.data) !== null && _props$embed$data3 !== void 0 && _props$embed$data3.title) && !!((_props$embed$data4 = props.embed.data) !== null && _props$embed$data4 !== void 0 && _props$embed$data4.provider) && /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex align-items-center ".concat(dotProp.get(props.embed, 'data.images.0.url') ? 'col-md-8' : 'col')
    }, props.embed.loading ? /*#__PURE__*/React__default.createElement("div", {
      className: "w-100 embed-title"
    }, /*#__PURE__*/React__default.createElement("b", null, "Loading...")) : /*#__PURE__*/React__default.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "embed-title text-overflow"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: (_props$embed$data5 = props.embed.data) === null || _props$embed$data5 === void 0 ? void 0 : _props$embed$data5.url,
      target: "_blank"
    }, /*#__PURE__*/React__default.createElement("b", {
      className: "d-block"
    }, (_props$embed$data6 = props.embed.data) === null || _props$embed$data6 === void 0 ? void 0 : _props$embed$data6.title))), /*#__PURE__*/React__default.createElement("div", {
      className: "embed-meta d-flex align-items-center"
    }, !!((_props$embed$data7 = props.embed.data) !== null && _props$embed$data7 !== void 0 && _props$embed$data7.provider) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !!((_props$embed$data8 = props.embed.data) !== null && _props$embed$data8 !== void 0 && (_props$embed$data8$fa = _props$embed$data8.favicon) !== null && _props$embed$data8$fa !== void 0 && _props$embed$data8$fa.url) && /*#__PURE__*/React__default.createElement("a", {
      href: props.embed.data.provider.url,
      target: "_blank",
      title: props.embed.data.provider.name
    }, /*#__PURE__*/React__default.createElement("img", {
      className: "icon me-2",
      src: props.embed.data.favicon.url
    })), /*#__PURE__*/React__default.createElement("a", {
      href: props.embed.data.provider.url,
      target: "_blank",
      title: props.embed.data.provider.name
    }, props.embed.data.provider.name)), !!((_props$embed$data9 = props.embed.data) !== null && _props$embed$data9 !== void 0 && _props$embed$data9.provider) && !!((_props$embed$data10 = props.embed.data) !== null && _props$embed$data10 !== void 0 && (_props$embed$data10$a = _props$embed$data10.author) !== null && _props$embed$data10$a !== void 0 && _props$embed$data10$a.name) && /*#__PURE__*/React__default.createElement("span", {
      className: "sep mx-1"
    }, "|"), !!((_props$embed$data11 = props.embed.data) !== null && _props$embed$data11 !== void 0 && _props$embed$data11.author) && /*#__PURE__*/React__default.createElement("a", {
      href: props.embed.data.author.url,
      target: "_blank"
    }, props.embed.data.author.name), !!((_props$embed$data12 = props.embed.data) !== null && _props$embed$data12 !== void 0 && _props$embed$data12.duration) && /*#__PURE__*/React__default.createElement("span", {
      className: "ms-2 text-muted"
    }, getDuration(props.embed.data.duration))))), props.embed.type === 'note' && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-sticky-note me-2"
    }), " Note"), /*#__PURE__*/React__default.createElement("pre", {
      className: "m-0"
    }, (_props$embed$data13 = props.embed.data) === null || _props$embed$data13 === void 0 ? void 0 : _props$embed$data13.body)), props.embed.type === 'sms' && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-sms me-2"
    }), " ", (_props$embed$data14 = props.embed.data) === null || _props$embed$data14 === void 0 ? void 0 : _props$embed$data14.title), /*#__PURE__*/React__default.createElement("pre", {
      className: "m-0"
    }, (_props$embed$data15 = props.embed.data) === null || _props$embed$data15 === void 0 ? void 0 : _props$embed$data15.body)), props.embed.type === 'email' && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-fw fa-envelope-open-text me-2"
    }), " ", (_props$embed$data16 = props.embed.data) === null || _props$embed$data16 === void 0 ? void 0 : _props$embed$data16.title), /*#__PURE__*/React__default.createElement("pre", {
      className: "m-0"
    }, (_props$embed$data17 = props.embed.data) === null || _props$embed$data17 === void 0 ? void 0 : _props$embed$data17.body)));
  }; // return jsx


  return props.noChat ? renderBody() : /*#__PURE__*/React__default.createElement(DashupUIContext$7.Consumer, null, function (data) {
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
  return /*#__PURE__*/React__default.createElement("span", _extends$1({}, attributes, {
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
  return /*#__PURE__*/React__default.createElement("span", _extends$1({}, attributes, {
    className: "badge badge-tag".concat(element.mention.color ? '' : ' bg-light text-dark'),
    contentEditable: false,
    style: {
      color: (_element$mention$colo = element.mention.color) !== null && _element$mention$colo !== void 0 && _element$mention$colo.hex ? (_element$mention$colo2 = element.mention.color) !== null && _element$mention$colo2 !== void 0 && _element$mention$colo2.drk ? '#fff' : '#000' : null,
      userSelect: 'none',
      background: (_element$mention$colo3 = element.mention.color) === null || _element$mention$colo3 === void 0 ? void 0 : _element$mention$colo3.hex
    }
  }), element.trigger === '@' ? /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-at me-1"
  }) : element.mention.icon ? /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-".concat(element.mention.icon, " me-1")
  }) : element.trigger, element.mention.display, children);
}; // create element


var Element$1 = function Element() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return type
  return props.element.type === 'mention' ? /*#__PURE__*/React__default.createElement(Mention, props) : /*#__PURE__*/React__default.createElement("p", props.attributes, props.children);
}; // create embeds


var allEmbeds = {}; // chat input

var DashupUIChatInput = function DashupUIChatInput() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // editor
  var editor = useMemo(function () {
    return withMentions(withReact(createEditor()));
  }, []); // empty state

  var emptyState = [{
    type: 'paragraph',
    children: [{
      text: ''
    }]
  }]; // all embeds

  var _useState = useState(shortid()),
      _useState2 = _slicedToArray(_useState, 1),
      embedId = _useState2[0]; // set all embeds


  if (!allEmbeds[embedId]) allEmbeds[embedId] = []; // set embeds

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      _long = _useState4[0];
      _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      index = _useState6[0],
      setIndex = _useState6[1];

  var _useState7 = useState(emptyState),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      items = _useState10[0],
      setItems = _useState10[1];

  var _useState11 = useState(allEmbeds[embedId]),
      _useState12 = _slicedToArray(_useState11, 2),
      embeds = _useState12[0],
      setEmbeds = _useState12[1];

  var _useState13 = useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      mention = _useState14[0],
      setMention = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      posting = _useState16[0],
      setPosting = _useState16[1];

  var _useState17 = useState(null),
      _useState18 = _slicedToArray(_useState17, 2),
      mentionRef = _useState18[0],
      setMentionRef = _useState18[1]; // render methods


  var renderLeaf = useCallback(function (props) {
    return /*#__PURE__*/React__default.createElement(Leaf, props);
  }, []);
  var renderElement = useCallback(function (props) {
    return /*#__PURE__*/React__default.createElement(Element$1, props);
  }, []); // decorate

  var decorate = useCallback(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        node = _ref4[0],
        path = _ref4[1];

    // ranges
    var ranges = []; // is text

    if (!Text.isText(node)) {
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

              Transforms.select(editor, Editor.start(editor, [])); // set value

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

      if (selection && Range.isCollapsed(selection)) {
        // get out
        var _Range$edges = Range.edges(selection),
            _Range$edges2 = _slicedToArray(_Range$edges, 1),
            start = _Range$edges2[0];

        var wordBefore = Editor.before(editor, start, {
          unit: 'word'
        });
        var before = wordBefore && Editor.before(editor, wordBefore);
        var beforeRange = before && Editor.range(editor, before, start);
        var beforeText = beforeRange && Editor.string(editor, beforeRange); // check before text

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
    Transforms.select(editor, mention); // mention

    var insertMention = {
      type: 'mention',
      mention: data,
      trigger: (_trigger = trigger) === null || _trigger === void 0 ? void 0 : _trigger.trigger,
      children: [{
        text: ''
      }]
    }; // set mention

    setMention(null); // insert nodes

    Transforms.insertNodes(editor, insertMention);
    Transforms.move(editor);
  }; // use effect


  useEffect(function () {
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


      var domRange = ReactEditor.toDOMRange(editor, mention); // set ref

      setMentionRef(domRange === null || domRange === void 0 ? void 0 : (_domRange$endContaine = domRange.endContainer) === null || _domRange$endContaine === void 0 ? void 0 : _domRange$endContaine.parentNode);
    } catch (e) {}
  }, [mention]); // use effect

  useEffect(function () {
    // done
    return function () {
      delete allEmbeds[embedId];
    };
  }, [embedId]); // create body

  var renderBody = function renderBody(data) {
    // return jsx
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !!embeds.length && /*#__PURE__*/React__default.createElement("div", {
      className: "chat-embeds mb-3"
    }, embeds.map(function (embed, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "embed-".concat(i),
        className: "card card-embed"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React__default.createElement(Embed$1, {
        embed: embed
      })));
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "chat-group".concat(posting ? ' chat-group-posting' : '').concat(_long ? ' border border-danger' : '')
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "chat-input-wrap"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "flex-1 flex-column"
    }, /*#__PURE__*/React__default.createElement(Slate, {
      value: value,
      editor: editor,
      onChange: function onChange(v) {
        return _onChange(data, v);
      }
    }, /*#__PURE__*/React__default.createElement(Editable, {
      className: "chat-control",
      decorate: decorate,
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e, data);
      },
      renderLeaf: renderLeaf,
      renderElement: renderElement
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "chat-upload"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-".concat(data.size || 'lg'),
      onClick: function onClick(e) {
        return onSend(e, data);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-plus"
    }))))), /*#__PURE__*/React__default.createElement(Overlay, {
      show: !!mentionRef,
      target: mentionRef,
      onHide: function onHide() {
        return setMentionRef(null);
      },
      rootClose: true,
      placement: "top"
    }, /*#__PURE__*/React__default.createElement(Popover$1, {
      className: "dropdown-menu show"
    }, items.map(function (item, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement(Dropdown$1.Item, {
        key: "item-".concat(item.id),
        onClick: function onClick(e) {
          return onMention(item);
        },
        active: index === i
      }, item.icon && /*#__PURE__*/React__default.createElement("i", {
        className: "fa fa-fw fa-".concat(item.icon, " me-2")
      }), item.display);
    }))));
  }; // return jsx


  return props.noChat ? renderBody(props) : /*#__PURE__*/React__default.createElement(DashupUIContext$6.Consumer, null, function (data) {
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
      return /*#__PURE__*/React__default.createElement("code", {
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
      return /*#__PURE__*/React__default.createElement("a", {
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
      return /*#__PURE__*/React__default.createElement("a", {
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
        // page
        var page = node.trigger === '#' ? dashup.page(node.id) : null; // get parent

        var parent = page && (page.get('parent') || 'root') !== 'root' && dashup.page(page.get('parent')); // color

        var color = page && page.get('color') || parent && parent.get('color'); // url

        var url = node.trigger === '#' ? "/app/".concat(node.id) : null; // return jsx

        return /*#__PURE__*/React__default.createElement("a", {
          key: state.key,
          href: url || '#!',
          className: "badge badge-tag".concat(color ? '' : ' bg-light text-dark'),
          contentEditable: false,
          style: {
            color: color !== null && color !== void 0 && color.hex ? color !== null && color !== void 0 && color.drk ? '#fff' : '#000' : null,
            background: color === null || color === void 0 ? void 0 : color.hex
          }
        }, node.trigger === '@' ? /*#__PURE__*/React__default.createElement("i", {
          className: "fad fa-at me-1"
        }) : page && page.get('icon') ? /*#__PURE__*/React__default.createElement("i", {
          className: "fa fa-".concat(page.get('icon'), " me-1")
        }) : node.trigger, node.display);
      }
    }; // parser

    var parser = simpleMarkdown.parserFor(_objectSpread2(_objectSpread2({}, rules), props.rules || {})); // output

    var reactOutput = simpleMarkdown.outputFor(_objectSpread2(_objectSpread2({}, rules), props.rules || {}), 'react'); // return

    return reactOutput(parser(text || '', state), state);
  }; // get short name


  var getName = function getName(user) {
    // get name
    var name = "".concat(user.name || '').trim() || 'N A'; // return name

    return "".concat((name.split(' ')[0] || '')[0] || '').concat((name.split(' ')[1] || '')[0] || '');
  }; // render body


  var renderBody = function renderBody(data) {
    var _props$message5, _props$message5$by, _props$message6, _props$message6$by, _props$message7, _props$message7$by, _props$message8, _props$message8$by, _props$message9, _props$message9$by, _data$dashup;

    // check removed
    if (props.message.removed) return /*#__PURE__*/React__default.createElement("div", null); // return jsx

    return /*#__PURE__*/React__default.createElement("div", {
      className: "message".concat(inThread() ? ' in-thread' : '')
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "message-avatar"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "avatar rounded-circle".concat((_props$message5 = props.message) !== null && _props$message5 !== void 0 && (_props$message5$by = _props$message5.by) !== null && _props$message5$by !== void 0 && _props$message5$by.avatar ? '' : ' bg-secondary'),
      style: {
        backgroundImage: (_props$message6 = props.message) !== null && _props$message6 !== void 0 && (_props$message6$by = _props$message6.by) !== null && _props$message6$by !== void 0 && _props$message6$by.avatar ? "url(".concat(props.message.by.avatar, ")") : null
      }
    }, (_props$message7 = props.message) !== null && _props$message7 !== void 0 && (_props$message7$by = _props$message7.by) !== null && _props$message7$by !== void 0 && _props$message7$by.avatar ? '' : getName(props.message.by))), /*#__PURE__*/React__default.createElement("div", {
      className: "message-body"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "message-by"
    }, !!((_props$message8 = props.message) !== null && _props$message8 !== void 0 && (_props$message8$by = _props$message8.by) !== null && _props$message8$by !== void 0 && _props$message8$by.name) && /*#__PURE__*/React__default.createElement("b", {
      className: "me-2"
    }, props.message.by.name), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, moment(props.message.created_at).format('LL')),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "text-muted"
    }, moment(props.message.created_at).fromNow()))), /*#__PURE__*/React__default.createElement("div", {
      className: "message-content"
    }, parseContent(data.dashup, props.message.parsed || props.message.message)), !!getEmbeds().length && /*#__PURE__*/React__default.createElement("div", {
      className: "mb-2 message-embeds"
    }, getEmbeds().map(function (embed, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "embed-".concat(props.message.id, "-").concat(i),
        className: "mt-2 card".concat(embed.color ? " card-".concat(embed.color) : '')
      }, !!embed.color && /*#__PURE__*/React__default.createElement("div", {
        className: "color-strip bg-".concat(embed.color)
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React__default.createElement(Embed, {
        embed: embed,
        message: props.message,
        noChat: props.noChat
      })));
    }))), (!!data.canAdmin || ((_props$message9 = props.message) === null || _props$message9 === void 0 ? void 0 : (_props$message9$by = _props$message9.by) === null || _props$message9$by === void 0 ? void 0 : _props$message9$by.id) === ((_data$dashup = data.dashup) === null || _data$dashup === void 0 ? void 0 : _data$dashup.get('_meta.user'))) && /*#__PURE__*/React__default.createElement("div", {
      className: "message-hover"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ms-auto"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "btn-group"
    }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Remove Message"),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "btn btn-sm btn-danger",
      onClick: function onClick(e) {
        return data.onRemove(props.message);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-trash"
    }))))))));
  }; // return jsx


  return props.noChat ? renderBody(props) : /*#__PURE__*/React__default.createElement(DashupUIContext$5.Consumer, null, function (data) {
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
  var scrollRef = useRef(null); // scroll down

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


  return /*#__PURE__*/React__default.createElement(DashupUIContext$4.Consumer, null, function (data) {
    // messages
    var messages = props.messages || data.messages || []; // check messages

    if (getKey(messages) !== key) {
      scrollDown();
      setTimeout(scrollDown, 100); // key

      key = getKey(messages);
    } // return jsx


    return /*#__PURE__*/React__default.createElement("div", {
      className: "w-100 h-100"
    }, /*#__PURE__*/React__default.createElement(SimpleBar, {
      ref: scrollRef,
      className: "h-100"
    }, messages.map(function (m, i) {
      // return jsx
      return /*#__PURE__*/React__default.createElement("div", {
        key: "message-".concat(m.id)
      }, /*#__PURE__*/React__default.createElement(Message, {
        prev: messages[i - 1],
        next: messages[i + 1],
        message: m
      }));
    })));
  });
}; // export default page menu


var Thread = (function (ctx) {
  // use context
  Message = Message$1(ctx);
  DashupUIContext$4 = ctx; // return actual component

  return DashupUIChatThread;
});

var DashupUIContext$3 = /*#__PURE__*/createContext(); // create menu component

var DashupUIChat = function DashupUIChat() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  //s tate
  var _useState = useState(props.messages || []),
      _useState2 = _slicedToArray(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      remove = _useState4[0],
      setRemove = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      var setUpdate = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      removing = _useState8[0],
      setRemoving = _useState8[1];

  var _useState9 = useState(null),
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


  var _useState11 = useState(getCtx()),
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


  useEffect(function () {
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

  useEffect(function () {
    // get ctx
    setCtx(getCtx());
  }, [typeof props.messages !== 'undefined' ? props.messages : messages]); // return jsx

  return /*#__PURE__*/React__default.createElement(DashupUIContext$3.Provider, {
    value: ctx
  }, props.children, !!remove && /*#__PURE__*/React__default.createElement(Modal$1, {
    show: true,
    onHide: function onHide(e) {
      return setRemove(null);
    }
  }, /*#__PURE__*/React__default.createElement(Modal$1.Header, {
    closeButton: true
  }, /*#__PURE__*/React__default.createElement(Modal$1.Title, null, "Removing Message")), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, /*#__PURE__*/React__default.createElement("p", {
    className: "lead"
  }, "Are you sure you want to remove this message?")), /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
    variant: "primary",
    onClick: function onClick(e) {
      return !setRemove(null) && e.preventDefault();
    }
  }, "Close"), /*#__PURE__*/React__default.createElement(Button, {
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

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

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

function _objectWithoutPropertiesLoose$9(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var browser = invariant;

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = useRef(propValue !== undefined);

  var _useState = useState(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose$9(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

const ThemeContext = /*#__PURE__*/React.createContext({
  prefixes: {}
});
const {
  Consumer,
  Provider
} = ThemeContext;

function ThemeProvider({
  prefixes = {},
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: { ...prefixes
    },
    dir
  }), [prefixes, dir]);
  return /*#__PURE__*/jsx(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle$2(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$2(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$2(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes$7 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes$7.oneOfType([propTypes$7.number, propTypes$7.shape({
  enter: propTypes$7.number,
  exit: propTypes$7.number,
  appear: propTypes$7.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? propTypes$7.oneOfType([propTypes$7.string, propTypes$7.shape({
  enter: propTypes$7.string,
  exit: propTypes$7.string,
  active: propTypes$7.string
}), propTypes$7.shape({
  enter: propTypes$7.string,
  enterDone: propTypes$7.string,
  enterActive: propTypes$7.string,
  exit: propTypes$7.string,
  exitDone: propTypes$7.string,
  exitActive: propTypes$7.string
})]) : null;

var TransitionGroupContext = React__default.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$9(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: propTypes$7.shape({
    current: typeof Element === 'undefined' ? propTypes$7.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return propTypes$7.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: propTypes$7.oneOfType([propTypes$7.func.isRequired, propTypes$7.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: propTypes$7.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: propTypes$7.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: propTypes$7.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: propTypes$7.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: propTypes$7.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: propTypes$7.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: propTypes$7.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: propTypes$7.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: propTypes$7.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: propTypes$7.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: propTypes$7.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: propTypes$7.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: propTypes$7.func
} : {}; // Name the function so it is clearer in the documentation

function noop$5() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$5,
  onEntering: noop$5,
  onEntered: noop$5,
  onExit: noop$5,
  onExiting: noop$5,
  onExited: noop$5
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/* eslint-disable no-return-assign */
var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function () {
    removeEventListener(node, eventName, handler, options);
  };
}

/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

function parseDuration$1(node) {
  var str = style(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) triggerEvent(element, 'transitionend', true);
  }, duration + padding);
  var remove = listen(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration$1(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

function parseDuration(node, property) {
  const str = style(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = transitionEnd(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

var toFnRef$1 = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs$1(refA, refB) {
  var a = toFnRef$1(refA);
  var b = toFnRef$1(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs$1(refA, refB) {
  return useMemo(function () {
    return mergeRefs$1(refA, refB);
  }, [refA, refB]);
}

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return ReactDOM.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/React__default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = useRef(null);
  const mergedRef = useMergedRefs$1(nodeRef, childRef);

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = useCallback(normalize(onEntered), [onEntered]);
  const handleExit = useCallback(normalize(onExit), [onExit]);
  const handleExiting = useCallback(normalize(onExiting), [onExiting]);
  const handleExited = useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = useCallback(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/jsx(Transition, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/React__default.cloneElement(children, {
      ref: attachRef
    })
  });
});

const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(style(elem, margins[0]), 10) + // @ts-ignore
  parseInt(style(elem, margins[1]), 10);
}

const collapseStyles = {
  [EXITED]: 'collapse',
  [EXITING]: 'collapsing',
  [ENTERING]: 'collapsing',
  [ENTERED]: 'collapse show'
};
const defaultProps$D = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
const Collapse = /*#__PURE__*/React__default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  const handleEnter = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = useMemo(() => createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  /* -- Collapsing -- */

  const handleExit = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = useMemo(() => createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => /*#__PURE__*/React__default.cloneElement(children, { ...innerProps,
      className: classnames(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    })
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps$D;

const context$4 = /*#__PURE__*/React.createContext({});
context$4.displayName = 'AccordionContext';

const AccordionCollapse = /*#__PURE__*/React.forwardRef(({
  as: Component = 'div',
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = useContext(context$4);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-collapse');
  return /*#__PURE__*/jsx(Collapse, {
    ref: ref,
    in: activeEventKey === eventKey,
    ...props,
    className: classnames(className, bsPrefix),
    children: /*#__PURE__*/jsx(Component, {
      children: React.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = 'AccordionCollapse';

const context$3 = /*#__PURE__*/React.createContext({
  eventKey: ''
});
context$3.displayName = 'AccordionItemContext';

const AccordionBody = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-body');
  const {
    eventKey
  } = useContext(context$3);
  return /*#__PURE__*/jsx(AccordionCollapse, {
    eventKey: eventKey,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classnames(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = 'AccordionBody';

function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect
  } = useContext(context$4);
  return e => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    const eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}
const AccordionButton = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-button');
  const {
    eventKey
  } = useContext(context$3);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = useContext(context$4);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": eventKey === activeEventKey,
    className: classnames(className, bsPrefix, eventKey !== activeEventKey && 'collapsed')
  });
});
AccordionButton.displayName = 'AccordionButton';

const AccordionHeader = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'h2',
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-header');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, bsPrefix),
    children: /*#__PURE__*/jsx(AccordionButton, {
      onClick: onClick,
      children: children
    })
  });
});
AccordionHeader.displayName = 'AccordionHeader';

const AccordionItem = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-item');
  const contextValue = useMemo(() => ({
    eventKey
  }), [eventKey]);
  return /*#__PURE__*/jsx(context$3.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classnames(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = 'AccordionItem';

const Accordion = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'accordion');
  const contextValue = useMemo(() => ({
    activeEventKey: activeKey,
    onSelect
  }), [activeKey, onSelect]);
  return /*#__PURE__*/jsx(context$4.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...controlledProps,
      className: classnames(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = 'Accordion';
var Accordion$1 = Object.assign(Accordion, {
  Button: AccordionButton,
  Collapse: AccordionCollapse,
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody
});

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef$1(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

function useEventCallback$1(fn) {
  var ref = useCommittedRef$1(fn);
  return useCallback(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef$1() {
  return useState(null);
}

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

function useEventCallback(fn) {
  var ref = useCommittedRef(fn);
  return useCallback(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = useEventCallback(listener);
  useEffect(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = useCallback(function () {
    return document;
  }, []);
  return useEventListener(documentTarget, event, handler, capture);
}

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted$1() {
  var mounted = useRef(true);
  var isMounted = useRef(function () {
    return mounted.current;
  });
  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = useRef(null);
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

const _excluded$8 = ["as", "disabled"];

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref$1(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref$1(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href: tagName === 'a' && disabled ? undefined : href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button$1 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose$8(_ref, _excluded$8);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/jsx(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button$1.displayName = 'Button';

const _excluded$7 = ["onKeyDown"];

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose$7(_ref, _excluded$7);

  const [buttonProps] = useButtonProps(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = useEventCallback(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/jsx("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/jsx("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';

const defaultProps$C = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, { ...innerProps,
      className: classnames('fade', className, children.props.className, fadeStyles[status])
    })
  });
});
Fade.defaultProps = defaultProps$C;
Fade.displayName = 'Fade';

const propTypes$6 = {
  'aria-label': propTypes$7.string,
  onClick: propTypes$7.func,

  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: propTypes$7.oneOf(['white'])
};
const defaultProps$B = {
  'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/React.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /*#__PURE__*/jsx("button", {
  ref: ref,
  type: "button",
  className: classnames('btn-close', variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes$6;
CloseButton.defaultProps = defaultProps$B;

var divWithClassName = (className => /*#__PURE__*/React.forwardRef((p, ref) => /*#__PURE__*/jsx("div", { ...p,
  ref: ref,
  className: classnames(p.className, className)
})));

var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return /*#__PURE__*/jsx(Tag, {
      ref: ref,
      className: classnames(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

const DivStyledAsH4$1 = divWithClassName('h4');
DivStyledAsH4$1.displayName = 'DivStyledAsH4';
const AlertHeading = createWithBsPrefix('alert-heading', {
  Component: DivStyledAsH4$1
});
const AlertLink = createWithBsPrefix('alert-link', {
  Component: Anchor
});
const defaultProps$A = {
  variant: 'primary',
  show: true,
  transition: Fade,
  closeLabel: 'Close alert'
};
const Alert = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show,
    closeLabel,
    closeVariant,
    className,
    children,
    variant,
    onClose,
    dismissible,
    transition,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: 'onClose'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'alert');
  const handleClose = useEventCallback$1(e => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade : transition;

  const alert = /*#__PURE__*/jsxs("div", {
    role: "alert",
    ...(!Transition ? props : undefined),
    ref: ref,
    className: classnames(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && /*#__PURE__*/jsx(CloseButton, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });

  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/jsx(Transition, {
    unmountOnExit: true,
    ...props,
    ref: undefined,
    in: show,
    children: alert
  });
});
Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps$A;
var Alert$1 = Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading
});

const defaultProps$z = {
  bg: 'primary',
  pill: false
};
const Badge = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  bg,
  pill,
  text,
  className,
  as: Component = 'span',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'badge');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps$z;

const defaultProps$y = {
  active: false,
  linkProps: {}
};
const BreadcrumbItem = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  active,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'li',
  linkAs: LinkComponent = Anchor,
  linkProps,
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(prefix, className, {
      active
    }),
    "aria-current": active ? 'page' : undefined,
    children: active ? children : /*#__PURE__*/jsx(LinkComponent, { ...linkProps,
      href: href,
      title: title,
      target: target,
      children: children
    })
  });
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps$y;

const defaultProps$x = {
  label: 'breadcrumb',
  listProps: {}
};
const Breadcrumb = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  listProps,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'nav',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/jsx(Component, {
    "aria-label": label,
    className: className,
    ref: ref,
    ...props,
    children: /*#__PURE__*/jsx("ol", { ...listProps,
      className: classnames(prefix, listProps == null ? void 0 : listProps.className),
      children: children
    })
  });
});
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps$x;
var Breadcrumb$1 = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem
});

const defaultProps$w = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button = /*#__PURE__*/React.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/jsx(Component, { ...props,
    ...buttonProps,
    ref: ref,
    className: classnames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps$w;

const defaultProps$v = {
  vertical: false,
  role: 'group'
};
const ButtonGroup = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  vertical,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn-group');
  let baseClass = prefix;
  if (vertical) baseClass = `${prefix}-vertical`;
  return /*#__PURE__*/jsx(Component, { ...rest,
    ref: ref,
    className: classnames(className, baseClass, size && `${prefix}-${size}`)
  });
});
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps$v;

const defaultProps$u = {
  role: 'toolbar'
};
const ButtonToolbar = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/jsx("div", { ...props,
    ref: ref,
    className: classnames(className, prefix)
  });
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps$u;

const CardImg = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'card-img');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    className: classnames(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';

const context$2 = /*#__PURE__*/React.createContext(null);
context$2.displayName = 'CardHeaderContext';

var CardColumns = createWithBsPrefix('card-columns');

var CardGroup = createWithBsPrefix('card-group');

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = useRef(true);
  useEffect(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return fn();
  }, deps);
}

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = useRef(true);
  var isMounted = useRef(function () {
    return mounted.current;
  });
  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef$1(value) {
  var valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
}

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount$1(fn) {
  var onUnmount = useUpdatedRef$1(fn);
  useEffect(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = useMounted(); // types are confused between node and web here IDK

  var handleRef = useRef();
  useWillUnmount$1(function () {
    return clearTimeout(handleRef.current);
  });
  return useMemo(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

var CarouselCaption = createWithBsPrefix('carousel-caption');

const CarouselItem = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = classnames(className, useBootstrapPrefix(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = 'CarouselItem';

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  let index = 0;
  return React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  let index = 0;
  React.Children.forEach(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) func(child, index++);
  });
}

const SWIPE_THRESHOLD = 40;
const defaultProps$t = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  indicatorLabels: [],
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/jsx("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/jsx("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }

  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}

const Carousel = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    bsPrefix,
    slide,
    fade,
    controls,
    indicators,
    indicatorLabels,
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval,
    keyboard,
    onKeyDown,
    pause,
    onMouseOver,
    onMouseOut,
    wrap,
    touch,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon,
    prevLabel,
    nextIcon,
    nextLabel,
    variant,
    className,
    children,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeIndex: 'onSelect'
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'carousel');
  const isRTL = useIsRTL();
  const nextDirectionRef = useRef(null);
  const [direction, setDirection] = useState('next');
  const [paused, setPaused] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = useState(activeIndex || 0);

  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
    }

    if (slide) {
      setIsSliding(true);
    }

    setRenderedActiveIndex(activeIndex || 0);
  }

  useEffect(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  forEach(children, (child, index) => {
    ++numChildren;

    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef$1(activeChildInterval);
  const prev = useCallback(event => {
    if (isSliding) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex - 1;

    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    nextDirectionRef.current = 'prev';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  const next = useEventCallback$1(event => {
    if (isSliding) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex + 1;

    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    nextDirectionRef.current = 'next';
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = useRef();
  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    prev,
    next
  })); // This is used in the setInterval, so it should not invalidate.

  const nextWhenVisible = useEventCallback$1(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === 'next' ? 'start' : 'end';
  useUpdateEffect(() => {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = useCallback(node => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = useCallback(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = useCallback(event => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }

          return;

        case 'ArrowRight':
          event.preventDefault();

          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }

          return;
      }
    }

    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = useCallback(event => {
    if (pause === 'hover') {
      setPaused(true);
    }

    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = useCallback(event => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = useCallback(event => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;

    if (pause === 'hover') {
      setPaused(true);
    }

    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = useCallback(event => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }

    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = useCallback(event => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;

      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }

    if (pause === 'hover') {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || undefined);
    }

    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = useRef();
  useEffect(() => {
    var _ref, _activeChildIntervalR;

    if (!shouldPlay) {
      return undefined;
    }

    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = useMemo(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => event => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return /*#__PURE__*/jsxs(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: classnames(className, prefix, slide && 'slide', fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && /*#__PURE__*/jsx("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => /*#__PURE__*/jsx("button", {
        type: "button",
        "data-bs-target": "" // Bootstrap requires this in their css.
        ,
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? 'active' : undefined,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), /*#__PURE__*/jsx("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? /*#__PURE__*/jsx(TransitionWrapper, {
          in: isActive,
          onEnter: isActive ? handleEnter : undefined,
          onEntered: isActive ? handleEntered : undefined,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => /*#__PURE__*/React.cloneElement(child, { ...innerProps,
            className: classnames(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
          })
        }) : /*#__PURE__*/React.cloneElement(child, {
          className: classnames(child.props.className, isActive && 'active')
        });
      })
    }), controls && /*#__PURE__*/jsxs(Fragment, {
      children: [(wrap || activeIndex !== 0) && /*#__PURE__*/jsxs(Anchor, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && /*#__PURE__*/jsx("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/jsxs(Anchor, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && /*#__PURE__*/jsx("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = 'Carousel';
Carousel.defaultProps = defaultProps$t;
var Carousel$1 = Object.assign(Carousel, {
  Caption: CarouselCaption,
  Item: CarouselItem
});

const DEVICE_SIZES$1 = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
  const spans = [];
  const classes = [];
  DEVICE_SIZES$1.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span = true,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classnames(className, ...classes, ...spans)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/jsx(Component, { ...colProps,
    ref: ref,
    className: classnames(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';

var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = useReducer(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

const DropdownContext$1 = /*#__PURE__*/React.createContext(null);

var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

function useSafeState(state) {
  var isMounted = useMounted$1();
  return [state[0], useCallback(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

var round$1 = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = rect.width / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = rect.height / offsetHeight || 1;
    }
  }

  return {
    width: round$1(rect.width / scaleX),
    height: round$1(rect.height / scaleY),
    top: round$1(rect.top / scaleY),
    right: round$1(rect.right / scaleX),
    bottom: round$1(rect.bottom / scaleY),
    left: round$1(rect.left / scaleX),
    x: round$1(rect.left / scaleX),
    y: round$1(rect.top / scaleY)
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains$1(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains$1(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains$1(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$3(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$3(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

// This is b/c the Popper lib is all esm files, and would break in a common js only environment

const createPopper = popperGenerator({
  defaultModifiers: [hide$1, popperOffsets$1, computeStyles$1, eventListeners, offset$1, flip$1, preventOverflow$1, arrow$1]
});

const _excluded$6 = ["enabled", "placement", "strategy", "modifiers"];

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite',
  fn: () => undefined
}; // until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;

    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;

    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
    enabled = true,
    placement = 'bottom',
    strategy = 'absolute',
    modifiers = EMPTY_MODIFIERS
  } = _ref,
      config = _objectWithoutPropertiesLoose$6(_ref, _excluded$6);

  const prevModifiers = useRef(modifiers);
  const popperInstanceRef = useRef();
  const update = useCallback(() => {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = useCallback(() => {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = useSafeState(useState({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = useMemo(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = useMemo(() => {
    if (!dequal(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }

    return prevModifiers.current;
  }, [modifiers]);
  useEffect(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  useEffect(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = createPopper(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

const escapeKeyCode = 27;

const noop$4 = () => {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseRootCloseRef = useRef(false);
  const onClose = onRootClose || noop$4;
  const handleMouseCapture = useCallback(e => {
    const currentTarget = getRefTarget(ref);
    warning_1(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains(currentTarget, e.target);
  }, [ref]);
  const handleMouse = useEventCallback(e => {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  const handleKeyUp = useEventCallback(e => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  useEffect(() => {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    let currentEvent = window.event;
    const doc = ownerDocument(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    const removeMouseCaptureListener = listen(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = listen(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    const removeKeyupListener = listen(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    let mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => listen(el, 'mousemove', noop$4));
    }

    return () => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

function toModifierMap(modifiers) {
  const result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

const _excluded$5 = ["children"];

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const noop$3 = () => {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options = {}) {
  const context = useContext(DropdownContext$1);
  const [arrowElement, attachArrowRef] = useCallbackRef$1();
  const hasShownRef = useRef(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context
  } = options;
  const show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  const handleClose = e => {
    context == null ? void 0 : context.toggle(false, e);
  };

  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context || {};
  const popper = usePopper(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placementOverride || placement || 'bottom-start',
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop$3,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  useRootClose(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
const defaultProps$s = {
  usePopper: true
};

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu$1(_ref) {
  let {
    children
  } = _ref,
      options = _objectWithoutPropertiesLoose$5(_ref, _excluded$5);

  const [props, meta] = useDropdownMenu(options);
  return /*#__PURE__*/jsx(Fragment, {
    children: children(props, meta)
  });
}

DropdownMenu$1.displayName = 'DropdownMenu';
DropdownMenu$1.defaultProps = defaultProps$s;

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0
};

const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/React__default.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);
let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
/** @private */

function useSSRSafeId(defaultId) {
  let ctx = useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
  // provide a warning to hint to the developer to add one.

  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
  }

  return useMemo(() => defaultId || "react-aria" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}

const isRoleMenu = el => {
  var _el$getAttribute;

  return ((_el$getAttribute = el.getAttribute('role')) == null ? void 0 : _el$getAttribute.toLowerCase()) === 'menu';
};

const noop$2 = () => {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  const id = useSSRSafeId();
  const {
    show = false,
    toggle = noop$2,
    setToggle,
    menuElement
  } = useContext(DropdownContext$1) || {};
  const handleClick = useCallback(e => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop$2,
    onClick: handleClick,
    'aria-expanded': !!show
  }; // This is maybe better down in an effect, but
  // the component is going to update anyway when the menu element
  // is set so might return new props.

  if (menuElement && isRoleMenu(menuElement)) {
    props['aria-haspopup'] = true;
  }

  return [props, {
    show,
    toggle
  }];
}

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle$1({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return /*#__PURE__*/jsx(Fragment, {
    children: children(props, meta)
  });
}

DropdownToggle$1.displayName = 'DropdownToggle';

const SelectableContext = /*#__PURE__*/React.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

const NavContext = /*#__PURE__*/React.createContext(null);
NavContext.displayName = 'NavContext';

const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

const _excluded$4 = ["eventKey", "disabled", "onClick", "active", "as"];

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */
function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = useContext(SelectableContext);
  const navContext = useContext(NavContext);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback(event => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(event);

    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    'aria-disabled': disabled || undefined,
    'aria-selected': isActive,
    [dataAttr('dropdown-item')]: ''
  }, {
    isActive
  }];
}
const DropdownItem$1 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = Button$1
  } = _ref,
      props = _objectWithoutPropertiesLoose$4(_ref, _excluded$4);

  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /*#__PURE__*/jsx(Component, Object.assign({}, props, {
    ref: ref
  }, dropdownItemProps));
});
DropdownItem$1.displayName = 'DropdownItem';

function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = useRef(null);
  const attachRef = useCallback(element => {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
 * @displayName Dropdown
 * @public
 */


function Dropdown$2({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr('dropdown-item')}]`,
  focusFirstItemOnShow,
  placement = 'bottom-start',
  children
}) {
  const [show, onToggle] = useUncontrolledProp(rawShow, defaultShow, rawOnToggle); // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set

  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious(show);
  const lastSourceEvent = useRef(null);
  const focusInDropdown = useRef(false);
  const onSelectCtx = useContext(SelectableContext);
  const toggle = useCallback((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, 'select');

    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context = useMemo(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  useEffect(() => {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  useEffect(() => {
    lastSourceEvent.current = null;
  });

  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current) return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  useGlobalListener('keydown', event => {
    var _menuRef$current, _toggleRef$current;

    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    const isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && fromMenu)) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (key === 'Tab' && (!menuRef.current || !show)) {
      return;
    }

    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };

    switch (key) {
      case 'ArrowUp':
        {
          const next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus) next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        addEventListener(document, 'keyup', e => {
          var _menuRef$current2;

          if (e.key === 'Tab' && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;

      case 'Escape':
        if (key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
        }

        onToggle(false, meta);
        break;
    }
  });
  return /*#__PURE__*/jsx(SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/jsx(DropdownContext$1.Provider, {
      value: context,
      children: children
    })
  });
}

Dropdown$2.displayName = 'Dropdown';
Dropdown$2.Menu = DropdownMenu$1;
Dropdown$2.Toggle = DropdownToggle$1;
Dropdown$2.Item = DropdownItem$1;

const DropdownContext = /*#__PURE__*/React.createContext({});
DropdownContext.displayName = 'DropdownContext';

const DropdownItem = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component = Anchor,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-item');
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return /*#__PURE__*/jsx(Component, { ...props,
    ...dropdownItemProps,
    ref: ref,
    className: classnames(className, prefix, meta.isActive && 'active', disabled && 'disabled')
  });
});
DropdownItem.displayName = 'DropdownItem';

var isReactNative = typeof global !== 'undefined' && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

var useIsomorphicEffect = isDOM || isReactNative ? useLayoutEffect : useEffect;

const context$1 = /*#__PURE__*/React.createContext(null);
context$1.displayName = 'InputGroupContext';

const context = /*#__PURE__*/React.createContext(null);
context.displayName = 'NavbarContext';

function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (!(process.env.NODE_ENV !== "production")) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  const warningRef = useCallback(refValue => {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? browser(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. ` + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : browser(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return useMergedRefs$1(warningRef, ref);
}

const alignDirection = propTypes$7.oneOf(['start', 'end']);
const alignPropType = propTypes$7.oneOfType([alignDirection, propTypes$7.shape({
  sm: alignDirection
}), propTypes$7.shape({
  md: alignDirection
}), propTypes$7.shape({
  lg: alignDirection
}), propTypes$7.shape({
  xl: alignDirection
}), propTypes$7.shape({
  xxl: alignDirection
})]);

const defaultProps$r = {
  flip: true
};
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? 'top-end' : 'top-start';
  const topEnd = isRTL ? 'top-start' : 'top-end';
  const bottomStart = isRTL ? 'bottom-end' : 'bottom-start';
  const bottomEnd = isRTL ? 'bottom-start' : 'bottom-end';
  const leftStart = isRTL ? 'right-start' : 'left-start';
  const leftEnd = isRTL ? 'right-end' : 'left-end';
  const rightStart = isRTL ? 'left-start' : 'right-start';
  const rightEnd = isRTL ? 'left-end' : 'right-end';
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === 'up') placement = alignEnd ? topEnd : topStart;else if (dropDirection === 'end') placement = alignEnd ? rightEnd : rightStart;else if (dropDirection === 'start') placement = alignEnd ? leftEnd : leftStart;
  return placement;
}
const DropdownMenu = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = useContext(context);
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-menu');
  const {
    align: contextAlign,
    drop,
    isRTL
  } = useContext(DropdownContext);
  align = align || contextAlign;
  const isInputGroup = useContext(context$1);
  const alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      const keys = Object.keys(align);
      process.env.NODE_ENV !== "production" ? warning_1(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`') : void 0;

      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint]; // .dropdown-menu-end is required for responsively aligning
        // left in addition to align left classes.

        alignEnd = direction === 'start';
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === 'end') {
      alignEnd = true;
    }
  }

  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs$1(useWrappedRefWithWarning(ref, 'DropdownMenu'), menuProps.ref);
  useIsomorphicEffect(() => {
    // Popper's initial position for the menu is incorrect when
    // renderOnMount=true. Need to call update() to correct it.
    if (show) popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;

    menuProps.close = () => toggle == null ? void 0 : toggle(false);

    menuProps.align = align;
  }

  let style = props.style;

  if (popper != null && popper.placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    style = { ...props.style,
      ...menuProps.style
    };
    props['x-placement'] = popper.placement;
  }

  return /*#__PURE__*/jsx(Component, { ...props,
    ...menuProps,
    style: style // Bootstrap css requires this data attrib to style responsive menus.
    ,
    ...((alignClasses.length || isNavbar) && {
      'data-bs-popper': 'static'
    }),
    className: classnames(className, prefix, show && 'show', alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps$r;

const DropdownToggle = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = Button,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle');
  const dropdownContext = useContext(DropdownContext$1);
  const isInputGroup = useContext(context$1);

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs$1(toggleProps.ref, useWrappedRefWithWarning(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/jsx(Component, {
    className: classnames(className, prefix, split && `${prefix}-split`, !!isInputGroup && (dropdownContext == null ? void 0 : dropdownContext.show) && 'show'),
    ...toggleProps,
    ...props
  });
});
DropdownToggle.displayName = 'DropdownToggle';

const DropdownHeader = createWithBsPrefix('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
const DropdownDivider = createWithBsPrefix('dropdown-divider', {
  Component: 'hr',
  defaultProps: {
    role: 'separator'
  }
});
const DropdownItemText = createWithBsPrefix('dropdown-item-text', {
  Component: 'span'
});
const defaultProps$q = {
  navbar: false,
  align: 'start',
  autoClose: true
};
const Dropdown = /*#__PURE__*/React.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop,
    show,
    className,
    align,
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    navbar: _4,
    autoClose,
    ...props
  } = useUncontrolled(pProps, {
    show: 'onToggle'
  });
  const isInputGroup = useContext(context$1);
  const prefix = useBootstrapPrefix(bsPrefix, 'dropdown');
  const isRTL = useIsRTL();

  const isClosingPermitted = source => {
    // autoClose=false only permits close on button click
    if (autoClose === false) return source === 'click'; // autoClose=inside doesn't permit close on rootClose

    if (autoClose === 'inside') return source !== 'rootClose'; // autoClose=outside doesn't permit close on select

    if (autoClose === 'outside') return source !== 'select';
    return true;
  };

  const handleToggle = useEventCallback$1((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== 'keydown' || meta.originalEvent.key === 'Escape')) meta.source = 'rootClose';
    if (isClosingPermitted(meta.source)) onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === 'end';
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = useMemo(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  return /*#__PURE__*/jsx(DropdownContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Dropdown$2, {
      placement: placement,
      show: show,
      onSelect: onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow: focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : /*#__PURE__*/jsx(Component, { ...props,
        ref: ref,
        className: classnames(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'end' && 'dropend', drop === 'start' && 'dropstart')
      })
    })
  });
});
Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = defaultProps$q;
var Dropdown$1 = Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader
});

const propTypes$5 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: propTypes$7.string,

  /** An `href` passed to the Toggle component */
  href: propTypes$7.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: propTypes$7.func,

  /** The content of the non-toggle Button.  */
  title: propTypes$7.node.isRequired,

  /** Disables both Buttons  */
  disabled: propTypes$7.bool,

  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: propTypes$7.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: propTypes$7.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: propTypes$7.string,

  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: propTypes$7.oneOf(['dark']),

  /** @ignore */
  bsPrefix: propTypes$7.string,

  /** @ignore */
  variant: propTypes$7.string,

  /** @ignore */
  size: propTypes$7.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */

const DropdownButton = /*#__PURE__*/React.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  ...props
}, ref) => /*#__PURE__*/jsxs(Dropdown$1, {
  ref: ref,
  ...props,
  children: [/*#__PURE__*/jsx(DropdownToggle, {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), /*#__PURE__*/jsx(DropdownMenu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent,
    variant: menuVariant,
    children: children
  })]
}));
DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = propTypes$5;

const propTypes$4 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: propTypes$7.string,

  /** Display feedback as a tooltip. */
  tooltip: propTypes$7.bool,
  as: propTypes$7.elementType
};
const Feedback = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/jsx(Component, { ...props,
  ref: ref,
  className: classnames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes$4;

const FormContext = /*#__PURE__*/React.createContext({});

const FormCheckInput = /*#__PURE__*/React.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
  return /*#__PURE__*/jsx(Component, { ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';

const FormCheckLabel = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
  return /*#__PURE__*/jsx("label", { ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';

const FormCheck = /*#__PURE__*/React.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = useContext(FormContext);
  const innerFormContext = useMemo(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = label != null && label !== false && !children;

  const input = /*#__PURE__*/jsx(FormCheckInput, { ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });

  return /*#__PURE__*/jsx(FormContext.Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/jsx("div", {
      style: style,
      className: classnames(className, label && bsPrefix, inline && `${bsPrefix}-inline`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/jsxs(Fragment, {
        children: [input, hasLabel && /*#__PURE__*/jsx(FormCheckLabel, {
          title: title,
          children: label
        }), (isValid || isInvalid) && /*#__PURE__*/jsx(Feedback, {
          type: isValid ? 'valid' : 'invalid',
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
var FormCheck$1 = Object.assign(FormCheck, {
  Input: FormCheckInput,
  Label: FormCheckLabel
});

const FormControl = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
  let classes;

  if (plaintext) {
    classes = {
      [`${bsPrefix}-plaintext`]: true
    };
  } else {
    classes = {
      [bsPrefix]: true,
      [`${bsPrefix}-${size}`]: size
    };
  }

  process.env.NODE_ENV !== "production" ? warning_1(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return /*#__PURE__*/jsx(Component, { ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
  });
});
FormControl.displayName = 'FormControl';
var FormControl$1 = Object.assign(FormControl, {
  Feedback
});

var FormFloating = createWithBsPrefix('form-floating');

const FormGroup = /*#__PURE__*/React.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = useMemo(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/jsx(FormContext.Provider, {
    value: context,
    children: /*#__PURE__*/jsx(Component, { ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';

const defaultProps$p = {
  column: false,
  visuallyHidden: false
};
const FormLabel = /*#__PURE__*/React.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column,
  visuallyHidden,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
  process.env.NODE_ENV !== "production" ? warning_1(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/jsx(Col, {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    jsx(Component, {
      ref: ref,
      className: classes,
      htmlFor: htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps$p;

const FormRange = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
  return /*#__PURE__*/jsx("input", { ...props,
    type: "range",
    ref: ref,
    className: classnames(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';

const FormSelect = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = useContext(FormContext);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
  return /*#__PURE__*/jsx("select", { ...props,
    size: htmlSize,
    ref: ref,
    className: classnames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';

const FormText = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return /*#__PURE__*/jsx(Component, { ...props,
    ref: ref,
    className: classnames(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';

const Switch = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/jsx(FormCheck$1, { ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
var Switch$1 = Object.assign(Switch, {
  Input: FormCheck$1.Input,
  Label: FormCheck$1.Label
});

const FloatingLabel = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
  return /*#__PURE__*/jsxs(FormGroup, {
    ref: ref,
    className: classnames(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/jsx("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';

const propTypes$3 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: propTypes$7.any,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: propTypes$7.bool,
  as: propTypes$7.elementType
};
const Form = /*#__PURE__*/React.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/jsx(Component, { ...props,
  ref: ref,
  className: classnames(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes$3;
var Form$1 = Object.assign(Form, {
  Group: FormGroup,
  Control: FormControl$1,
  Floating: FormFloating,
  Check: FormCheck$1,
  Switch: Switch$1,
  Label: FormLabel,
  Text: FormText,
  Range: FormRange,
  Select: FormSelect,
  FloatingLabel
});

const defaultProps$o = {
  fluid: false
};
const Container = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps$o;

const propTypes$2 = {
  /**
   * @default 'img'
   */
  bsPrefix: propTypes$7.string,

  /**
   * Sets image as fluid image.
   */
  fluid: propTypes$7.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: propTypes$7.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: propTypes$7.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: propTypes$7.bool
};
const defaultProps$n = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
const Image = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'img');
  return /*#__PURE__*/jsx("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref,
    ...props,
    className: classnames(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = 'Image';
Image.defaultProps = defaultProps$n;

const defaultProps$m = {
  fluid: true
};
const FigureImage = /*#__PURE__*/React.forwardRef(({
  className,
  ...props
}, ref) => /*#__PURE__*/jsx(Image, {
  ref: ref,
  ...props,
  className: classnames(className, 'figure-img')
}));
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = propTypes$2;
FigureImage.defaultProps = defaultProps$m;

const FigureCaption = createWithBsPrefix('figure-caption', {
  Component: 'figcaption'
});

const Figure = createWithBsPrefix('figure', {
  Component: 'figure'
});
var Figure$1 = Object.assign(Figure, {
  Image: FigureImage,
  Caption: FigureCaption
});

const InputGroupText = createWithBsPrefix('input-group-text', {
  Component: 'span'
});

const InputGroupCheckbox = props => /*#__PURE__*/jsx(InputGroupText, {
  children: /*#__PURE__*/jsx(FormCheckInput, {
    type: "checkbox",
    ...props
  })
});

const InputGroupRadio = props => /*#__PURE__*/jsx(InputGroupText, {
  children: /*#__PURE__*/jsx(FormCheckInput, {
    type: "radio",
    ...props
  })
});

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  size,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'input-group'); // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.

  const contextValue = useMemo(() => ({}), []);
  return /*#__PURE__*/jsx(context$1.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(Component, {
      ref: ref,
      ...props,
      className: classnames(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')
    })
  });
});
InputGroup.displayName = 'InputGroup';
var InputGroup$1 = Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return useMemo(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

const TabContext = /*#__PURE__*/React.createContext(null);

const _excluded$3 = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = useContext(SelectableContext);
  const navContext = useContext(NavContext);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[dataAttr('event-key')] = key;
    props.id = contextControllerId || id;
    props['aria-controls'] = contextControlledId;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = useEventCallback(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem$1 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    as: Component = Button$1,
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose$3(_ref, _excluded$3);

  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[dataAttr('active')] = meta.isActive;
  return /*#__PURE__*/jsx(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem$1.displayName = 'NavItem';

const _excluded$2 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop$1 = () => {};

const EVENT_KEY_ATTR = dataAttr('event-key');
const Nav$2 = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = useRef(false);
  const parentOnSelect = useContext(SelectableContext);
  const tabContext = useContext(TabContext);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = useRef(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs(ref, listNode);
  return /*#__PURE__*/jsx(SelectableContext.Provider, {
    value: handleSelect,
    children: /*#__PURE__*/jsx(NavContext.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop$1,
        getControllerId: getControllerId || noop$1
      },
      children: /*#__PURE__*/jsx(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav$2.displayName = 'Nav';
var BaseNav = Object.assign(Nav$2, {
  Item: NavItem$1
});

const defaultProps$l = {
  variant: undefined,
  active: false,
  disabled: false
};
const ListGroupItem = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  active,
  disabled,
  className,
  variant,
  action,
  as,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'list-group-item');
  const handleClick = useCallback(event => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  }, [disabled, onClick]);

  if (disabled && props.tabIndex === undefined) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/jsx(NavItem$1, {
    ref: ref,
    ...props,
    // eslint-disable-next-line no-nested-ternary
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: classnames(className, bsPrefix, active && 'active', disabled && 'disabled', variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.defaultProps = defaultProps$l;
ListGroupItem.displayName = 'ListGroupItem';

const ListGroup = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = 'div',
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'list-group');
  let horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : `horizontal-${horizontal}`;
  }

  process.env.NODE_ENV !== "production" ? warning_1(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return /*#__PURE__*/jsx(BaseNav, {
    ref: ref,
    ...controlledProps,
    as: as,
    className: classnames(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`)
  });
});
ListGroup.displayName = 'ListGroup';
var ListGroup$1 = Object.assign(ListGroup, {
  Item: ListGroupItem
});

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return useState(null);
}

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = useRef(value);
  valueRef.current = value;
  return valueRef;
}

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = useUpdatedRef(fn);
  useEffect(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/**
 * Get the width of the vertical window scrollbar if it's visible
 */
function getBodyScrollbarWidth() {
  return Math.abs(window.innerWidth - document.documentElement.clientWidth);
}

const OPEN_DATA_ATTRIBUTE = dataAttr('modal-open');
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */

class ModalManager {
  constructor({
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
  }

  getScrollbarWidth() {
    return getBodyScrollbarWidth();
  }

  getElement() {
    return document.body;
  }

  setModalAttributes(_modal) {// For overriding
  }

  removeModalAttributes(_modal) {// For overriding
  }

  setContainerStyle(containerState) {
    const style$1 = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };

    if (containerState.scrollBarWidth) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style$1[paddingProp] = `${parseInt(style(container, paddingProp) || '0', 10) + containerState.scrollBarWidth}px`;
    }

    container.setAttribute(OPEN_DATA_ATTRIBUTE, '');
    style(container, style$1);
  }

  reset() {
    [...this.modals].forEach(m => this.remove(m));
  }

  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }

  add(modal) {
    let modalIdx = this.modals.indexOf(modal);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);

    if (modalIdx !== 0) {
      return modalIdx;
    }

    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }

    return modalIdx;
  }

  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }

    this.removeModalAttributes(modal);
  }

  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }

}

const resolveContainerRef = ref => {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return ownerDocument().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  const [resolvedRef, setRef] = useState(() => resolveContainerRef(ref));

  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  useEffect(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  useEffect(() => {
    const nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

const _excluded$1 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
let manager;

function getManager() {
  if (!manager) manager = new ModalManager();
  return manager;
}

function useModalManager(provided) {
  const modalManager = provided || getManager();
  const modal = useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: useCallback(ref => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: useCallback(ref => {
      modal.current.backdrop = ref;
    }, [])
  });
}

const Modal$2 = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    show = false,
    role = 'dialog',
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    backdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = props => /*#__PURE__*/jsx("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {},
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref,
      rest = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);

  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted$1();
  const prevShow = usePrevious(show);
  const [exited, setExited] = useState(!show);
  const lastFocusRef = useRef(null);
  useImperativeHandle(ref, () => modal, [modal]);

  if (canUseDOM && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = listen(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = listen(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    () => setTimeout(handleEnforceFocus), true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      const currentActiveElement = activeElement(document);

      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  useEffect(() => {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  useEffect(() => {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  }); // --------------------------------

  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback(e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback(e => {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = useRef();
  const removeKeydownListenerRef = useRef();

  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };

  const Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/jsx("div", Object.assign({}, dialogProps, {
    children: /*#__PURE__*/React.cloneElement(children, {
      role: 'document'
    })
  }));

  if (Transition) {
    dialog = /*#__PURE__*/jsx(Transition, {
      appear: true,
      unmountOnExit: true,
      in: !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: dialog
    });
  }

  let backdropElement = null;

  if (backdrop) {
    const BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/jsx(BackdropTransition, {
        appear: true,
        in: !!show,
        children: backdropElement
      });
    }
  }

  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/jsxs(Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal$2.displayName = 'Modal';
var BaseModal = Object.assign(Modal$2, {
  Manager: ModalManager
});

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

class BootstrapModalManager extends ModalManager {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    style(element, {
      [prop]: `${parseFloat(style(element, prop)) + adjust}px`
    });
  }

  restore(prop, element) {
    const value = element.dataset[prop];

    if (value !== undefined) {
      delete element.dataset[prop];
      style(element, {
        [prop]: value
      });
    }
  }

  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, 'modal-open');
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }

  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, 'modal-open');
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    qsa(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
  }

}

let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}

var ModalBody = createWithBsPrefix('modal-body');

const ModalContext = /*#__PURE__*/React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {}

});

const ModalDialog = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === 'string' ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return /*#__PURE__*/jsx("div", { ...props,
    ref: ref,
    className: classnames(dialogClass, className, size && `${bsPrefix}-${size}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: /*#__PURE__*/jsx("div", {
      className: classnames(`${bsPrefix}-content`, contentClassName),
      children: children
    })
  });
});
ModalDialog.displayName = 'ModalDialog';

var ModalFooter = createWithBsPrefix('modal-footer');

const defaultProps$k = {
  closeLabel: 'Close',
  closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/React.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context = useContext(ModalContext);
  const handleClick = useEventCallback$1(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /*#__PURE__*/jsxs("div", {
    ref: ref,
    ...props,
    children: [children, closeButton && /*#__PURE__*/jsx(CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = defaultProps$k;

const defaultProps$j = {
  closeLabel: 'Close',
  closeButton: false
};
const ModalHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header');
  return /*#__PURE__*/jsx(AbstractModalHeader, {
    ref: ref,
    ...props,
    className: classnames(className, bsPrefix)
  });
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps$j;

const DivStyledAsH4 = divWithClassName('h4');
var ModalTitle = createWithBsPrefix('modal-title', {
  Component: DivStyledAsH4
});

const defaultProps$i = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition$1(props) {
  return /*#__PURE__*/jsx(Fade, { ...props,
    timeout: null
  });
}

function BackdropTransition$1(props) {
  return /*#__PURE__*/jsx(Fade, { ...props,
    timeout: null
  });
}
/* eslint-enable no-use-before-define */


const Modal = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  style,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog,
  'aria-labelledby': ariaLabelledby,

  /* BaseModal props */
  show,
  animation,
  backdrop,
  keyboard,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = useState({});
  const [animateStaticModal, setAnimateStaticModal] = useState(false);
  const waitingForMouseUpRef = useRef(false);
  const ignoreBackdropClickRef = useRef(false);
  const removeStaticModalAnimationRef = useRef(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = useMergedRefs$1(ref, setModalRef);
  const handleHide = useEventCallback$1(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, 'modal');
  const modalContext = useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    return getSharedManager({
      isRTL
    });
  }

  function updateDialogStyle(node) {
    if (!canUseDOM) return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : undefined
    });
  }

  const handleWindowResize = useEventCallback$1(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount$1(() => {
    removeEventListener(window, 'resize', handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };

  const handleMouseUp = e => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };

  const handleStaticBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  const handleClick = e => {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide == null ? void 0 : onHide();
  };

  const handleEscapeKeyDown = e => {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in restart ui,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  const handleEnter = (node, isAppearing) => {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };

  const handleExit = node => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };

  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing); // FIXME: This should work even when animation is disabled.

    addEventListener(window, 'resize', handleWindowResize);
  };

  const handleExited = node => {
    if (node) node.style.display = ''; // RHL removes it sometimes

    onExited == null ? void 0 : onExited(node); // FIXME: This should work even when animation is disabled.

    removeEventListener(window, 'resize', handleWindowResize);
  };

  const renderBackdrop = useCallback(backdropProps => /*#__PURE__*/jsx("div", { ...backdropProps,
    className: classnames(`${bsPrefix}-backdrop`, backdropClassName, !animation && 'show')
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = { ...style,
    ...modalStyle
  }; // Sets `display` always block when `animation` is false

  if (!animation) {
    baseModalStyle.display = 'block';
  }

  const renderDialog = dialogProps => /*#__PURE__*/jsx("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: classnames(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`),
    onClick: backdrop ? handleClick : undefined,
    onMouseUp: handleMouseUp,
    "aria-labelledby": ariaLabelledby,
    children: /*#__PURE__*/jsx(Dialog, { ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName,
      children: children
    })
  });

  return /*#__PURE__*/jsx(ModalContext.Provider, {
    value: modalContext,
    children: /*#__PURE__*/jsx(BaseModal, {
      show: show,
      ref: mergedRef,
      backdrop: backdrop,
      container: container,
      keyboard: true // Always set true - see handleEscapeKeyDown
      ,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: onEntered,
      onExit: handleExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition$1 : undefined,
      backdropTransition: animation ? BackdropTransition$1 : undefined,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps$i;
var Modal$1 = Object.assign(Modal, {
  Body: ModalBody,
  Header: ModalHeader,
  Title: ModalTitle,
  Footer: ModalFooter,
  Dialog: ModalDialog,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});

var createChainableTypeChecker_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];
});

unwrapExports(createChainableTypeChecker_1);

var all_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;



var _createChainableTypeChecker2 = _interopRequireDefault(createChainableTypeChecker_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];
});

unwrapExports(all_1);

var NavItem = createWithBsPrefix('nav-item');

const defaultProps$h = {
  disabled: false
};
const NavLink = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'nav-link');
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/jsx(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps$h;

const defaultProps$g = {
  justify: false,
  fill: false
};
const Nav = /*#__PURE__*/React.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = useContext(context);
  const cardHeaderContext = useContext(context$2);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/jsx(BaseNav, {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps$g;
var Nav$1 = Object.assign(Nav, {
  Item: NavItem,
  Link: NavLink
});

const NavbarBrand = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-brand');
  const Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/jsx(Component, { ...props,
    ref: ref,
    className: classnames(className, bsPrefix)
  });
});
NavbarBrand.displayName = 'NavbarBrand';

const NavbarCollapse = /*#__PURE__*/React.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-collapse');
  const context$1 = useContext(context);
  return /*#__PURE__*/jsx(Collapse, {
    in: !!(context$1 && context$1.expanded),
    ...props,
    children: /*#__PURE__*/jsx("div", {
      ref: ref,
      className: bsPrefix,
      children: children
    })
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';

const defaultProps$f = {
  label: 'Toggle navigation'
};
const NavbarToggle = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-toggler');
  const {
    onToggle,
    expanded
  } = useContext(context) || {};
  const handleClick = useEventCallback$1(e => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/jsx(Component, { ...props,
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: classnames(className, bsPrefix, !expanded && 'collapsed'),
    children: children || /*#__PURE__*/jsx("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps$f;

const NavbarText = createWithBsPrefix('navbar-text', {
  Component: 'span'
});
const defaultProps$e = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
const Navbar = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand,
    variant,
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'nav',
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle'
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'navbar');
  const handleCollapse = useCallback((...args) => {
    onSelect == null ? void 0 : onSelect(...args);

    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
  const navbarContext = useMemo(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded
  }), [bsPrefix, expanded, onToggle]);
  return /*#__PURE__*/jsx(context.Provider, {
    value: navbarContext,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: handleCollapse,
      children: /*#__PURE__*/jsx(Component, {
        ref: ref,
        ...controlledProps,
        className: classnames(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.defaultProps = defaultProps$e;
Navbar.displayName = 'Navbar';
var Navbar$1 = Object.assign(Navbar, {
  Brand: NavbarBrand,
  Toggle: NavbarToggle,
  Collapse: NavbarCollapse,
  Text: NavbarText
});

const NavDropdown = /*#__PURE__*/React.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  /* NavItem has no additional logic, it's purely presentational. Can set nav item class here to support "as" */
  const navItemPrefix = useBootstrapPrefix(undefined, 'nav-item');
  return /*#__PURE__*/jsxs(Dropdown$1, {
    ref: ref,
    ...props,
    className: classnames(className, navItemPrefix),
    children: [/*#__PURE__*/jsx(Dropdown$1.Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: NavLink,
      children: title
    }), /*#__PURE__*/jsx(Dropdown$1.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent: rootCloseEvent,
      variant: menuVariant,
      children: children
    })]
  });
});
NavDropdown.displayName = 'NavDropdown';
var NavDropdown$1 = Object.assign(NavDropdown, {
  Item: Dropdown$1.Item,
  ItemText: Dropdown$1.ItemText,
  Divider: Dropdown$1.Divider,
  Header: Dropdown$1.Header
});

var OffcanvasBody = createWithBsPrefix('offcanvas-body');

const defaultProps$d = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const transitionStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
  return /*#__PURE__*/jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, { ...innerProps,
      className: classnames(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = defaultProps$d;
OffcanvasToggling.displayName = 'OffcanvasToggling';

const defaultProps$c = {
  closeLabel: 'Close',
  closeButton: false
};
const OffcanvasHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-header');
  return /*#__PURE__*/jsx(AbstractModalHeader, {
    ref: ref,
    ...props,
    className: classnames(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
OffcanvasHeader.defaultProps = defaultProps$c;

const DivStyledAsH5 = divWithClassName('h5');
var OffcanvasTitle = createWithBsPrefix('offcanvas-title', {
  Component: DivStyledAsH5
});

const defaultProps$b = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: 'start'
};

function DialogTransition(props) {
  return /*#__PURE__*/jsx(OffcanvasToggling, { ...props
  });
}

function BackdropTransition(props) {
  return /*#__PURE__*/jsx(Fade, { ...props
  });
}

const Offcanvas = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  'aria-labelledby': ariaLabelledby,
  placement,

  /* BaseModal props */
  show,
  backdrop,
  keyboard,
  scroll,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const modalManager = useRef();
  const handleHide = useEventCallback$1(onHide);
  bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas');
  const modalContext = useMemo(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;

    if (scroll) {
      // Have to use a different modal manager since the shared
      // one handles overflow.
      if (!modalManager.current) modalManager.current = new BootstrapModalManager({
        handleContainerOverflow: false
      });
      return modalManager.current;
    }

    return getSharedManager();
  }

  const handleEnter = (node, ...args) => {
    if (node) node.style.visibility = 'visible';
    onEnter == null ? void 0 : onEnter(node, ...args);
  };

  const handleExited = (node, ...args) => {
    if (node) node.style.visibility = '';
    onExited == null ? void 0 : onExited(...args);
  };

  const renderBackdrop = useCallback(backdropProps => /*#__PURE__*/jsx("div", { ...backdropProps,
    className: classnames(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);

  const renderDialog = dialogProps => /*#__PURE__*/jsx("div", {
    role: "dialog",
    ...dialogProps,
    ...props,
    className: classnames(className, bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children: children
  });

  return /*#__PURE__*/jsx(ModalContext.Provider, {
    value: modalContext,
    children: /*#__PURE__*/jsx(BaseModal, {
      show: show,
      ref: ref,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus && !scroll,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEnter: handleEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: DialogTransition,
      backdropTransition: BackdropTransition,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Offcanvas.displayName = 'Offcanvas';
Offcanvas.defaultProps = defaultProps$b;
var Offcanvas$1 = Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: OffcanvasHeader,
  Title: OffcanvasTitle
});

/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay$1 = /*#__PURE__*/React.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition
  } = props;
  const [rootElement, attachRef] = useCallbackRef$1();
  const [arrowElement, attachArrowRef] = useCallbackRef$1();
  const mergedRef = useMergedRefs(attachRef, outerRef);
  const container = useWaitForDOMRef(props.container);
  const target = useWaitForDOMRef(props.target);
  const [exited, setExited] = useState(!props.show);
  const popper = usePopper(target, rootElement, mergeOptionsWithPopperConfig({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  const handleHidden = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  const mountOverlay = props.show || Transition && !exited;
  useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });

  if (Transition) {
    const {
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onEntered
    } = props;
    child = /*#__PURE__*/jsx(Transition, {
      in: props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      children: child
    });
  }

  return container ? /*#__PURE__*/ReactDOM.createPortal(child, container) : null;
});
Overlay$1.displayName = 'Overlay';

var PopoverHeader = createWithBsPrefix('popover-header');

var PopoverBody = createWithBsPrefix('popover-body');

function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;

  if (placement === 'left') {
    bsDirection = isRTL ? 'end' : 'start';
  } else if (placement === 'right') {
    bsDirection = isRTL ? 'start' : 'end';
  }

  return bsDirection;
}

const defaultProps$a = {
  placement: 'right'
};
const Popover = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  placement,
  className,
  style,
  children,
  body,
  arrowProps,
  popper: _,
  show: _1,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'popover');
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  return /*#__PURE__*/jsxs("div", {
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: classnames(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/jsx("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? /*#__PURE__*/jsx(PopoverBody, {
      children: children
    }) : children]
  });
});
Popover.defaultProps = defaultProps$a;
var Popover$1 = Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
});

// This applies a custom offset to the overlay if it's a popover.

function useOverlayOffset() {
  const overlayRef = useRef(null);
  const popoverClass = useBootstrapPrefix(undefined, 'popover');
  const offset = useMemo(() => ({
    name: 'offset',
    options: {
      offset: () => {
        if (overlayRef.current && hasClass(overlayRef.current, popoverClass)) {
          return Popover$1.POPPER_OFFSET;
        }

        return [0, 0];
      }
    }
  }), [popoverClass]);
  return [overlayRef, [offset]];
}

const defaultProps$9 = {
  transition: Fade,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;

  props.ref = ref.__wrapped || (ref.__wrapped = r => ref(safeFindDOMNode(r)));

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = r => aRef(safeFindDOMNode(r)));
}

const Overlay = /*#__PURE__*/React.forwardRef(({
  children: overlay,
  transition,
  popperConfig = {},
  ...outerProps
}, outerRef) => {
  const popperRef = useRef({});
  const [ref, modifiers] = useOverlayOffset();
  const mergedRef = useMergedRefs$1(outerRef, ref);
  const actualTransition = transition === true ? Fade : transition || undefined;
  return /*#__PURE__*/jsx(Overlay$1, { ...outerProps,
    ref: mergedRef,
    popperConfig: { ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || [])
    },
    transition: actualTransition,
    children: (overlayProps, {
      arrowProps,
      placement,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;

      wrapRefs(overlayProps, arrowProps);
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false
      });
      if (typeof overlay === 'function') return overlay({ ...overlayProps,
        placement,
        show,
        ...(!transition && show && {
          className: 'show'
        }),
        popper,
        arrowProps
      });
      return /*#__PURE__*/React.cloneElement(overlay, { ...overlayProps,
        placement,
        arrowProps,
        popper,
        className: classnames(overlay.props.className, !transition && show && 'show'),
        style: { ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay.displayName = 'Overlay';
Overlay.defaultProps = defaultProps$9;

function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut( // eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !contains(target, related)) {
    handler(...args);
  }
}

const defaultProps$8 = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger({
  trigger,
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf('auto') !== -1,
  ...props
}) {
  const triggerNodeRef = useRef(null);
  const mergedRef = useMergedRefs$1(triggerNodeRef, children.ref);
  const timeout = useTimeout();
  const hoverStateRef = useRef('');
  const [show, setShow] = useUncontrolledProp(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== 'function' ? React.Children.only(children).props : {};

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const handleShow = useCallback(() => {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(() => {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = useCallback(() => {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(() => {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = useCallback((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = useCallback((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = useCallback((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = useCallback((...args) => {
    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  const handleMouseOut = useCallback((...args) => {
    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
    process.env.NODE_ENV !== "production" ? warning_1(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/jsxs(Fragment, {
    children: [typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/cloneElement(children, triggerProps), /*#__PURE__*/jsx(Overlay, { ...props,
      show: show,
      onHide: handleHide,
      flip: flip,
      placement: placement,
      popperConfig: popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
}

OverlayTrigger.defaultProps = defaultProps$8;

/* eslint-disable react/no-multi-comp */
const defaultProps$7 = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
const PageItem = /*#__PURE__*/React.forwardRef(({
  active,
  disabled,
  className,
  style,
  activeLabel,
  children,
  ...props
}, ref) => {
  const Component = active || disabled ? 'span' : Anchor;
  return /*#__PURE__*/jsx("li", {
    ref: ref,
    style: style,
    className: classnames(className, 'page-item', {
      active,
      disabled
    }),
    children: /*#__PURE__*/jsxs(Component, {
      className: "page-link",
      disabled: disabled,
      ...props,
      children: [children, active && activeLabel && /*#__PURE__*/jsx("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.defaultProps = defaultProps$7;
PageItem.displayName = 'PageItem';

function createButton(name, defaultValue, label = name) {
  function Button({
    children,
    ...props
  }) {
    return /*#__PURE__*/jsxs(PageItem, { ...props,
      children: [/*#__PURE__*/jsx("span", {
        "aria-hidden": "true",
        children: children || defaultValue
      }), /*#__PURE__*/jsx("span", {
        className: "visually-hidden",
        children: label
      })]
    });
  }

  Button.displayName = name;
  return Button;
}

const First = createButton('First', '«');
const Prev = createButton('Prev', '‹', 'Previous');
const Ellipsis = createButton('Ellipsis', '…', 'More');
const Next = createButton('Next', '›');
const Last = createButton('Last', '»');

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
const Pagination = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  size,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'pagination');
  return /*#__PURE__*/jsx("ul", {
    ref: ref,
    ...props,
    className: classnames(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
  });
});
Pagination.displayName = 'Pagination';
var Pagination$1 = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem,
  Next,
  Last
});

function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'placeholder');
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return { ...colProps,
    className: classnames(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)
  };
}

const PlaceholderButton = /*#__PURE__*/React.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return /*#__PURE__*/jsx(Button, { ...placeholderProps,
    ref: ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = 'PlaceholderButton';

const Placeholder = /*#__PURE__*/React.forwardRef(({
  as: Component = 'span',
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return /*#__PURE__*/jsx(Component, { ...placeholderProps,
    ref: ref
  });
});
Placeholder.displayName = 'Placeholder';
var Placeholder$1 = Object.assign(Placeholder, {
  Button: PlaceholderButton
});

const ROUND_PRECISION = 1000;

const defaultProps$6 = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  visuallyHidden: false,
  striped: false
};

function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return /*#__PURE__*/jsx("div", {
    ref: ref,
    ...props,
    role: "progressbar",
    className: classnames(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? /*#__PURE__*/jsx("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}

const ProgressBar = /*#__PURE__*/React.forwardRef(({
  isChild,
  ...props
}, ref) => {
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, 'progress');

  if (isChild) {
    return renderProgressBar(props, ref);
  }

  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return /*#__PURE__*/jsx("div", {
    ref: ref,
    ...wrapperProps,
    className: classnames(className, bsPrefix),
    children: children ? map(children, child => /*#__PURE__*/cloneElement(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = defaultProps$6;

const defaultProps$5 = {
  aspectRatio: '1x1'
};

function toPercent(num) {
  if (num <= 0 || num > 100) return '100%';
  if (num < 1) return `${num * 100}%`;
  return `${num}%`;
}

const Ratio = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio,
  style,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'ratio');
  const isCustomRatio = typeof aspectRatio === 'number';
  return /*#__PURE__*/jsx("div", {
    ref: ref,
    ...props,
    style: { ...style,
      ...(isCustomRatio && {
        '--bs-aspect-ratio': toPercent(aspectRatio)
      })
    },
    className: classnames(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: React.Children.only(children)
  });
});
Ratio.defaultProps = defaultProps$5;

const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const Row = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'row');
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';

const Spinner = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  variant,
  animation,
  size,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'spinner');
  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)
  });
});
Spinner.displayName = 'Spinner';

const propTypes$1 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: propTypes$7.string,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: propTypes$7.string,

  /** An `href` passed to the non-toggle Button */
  href: propTypes$7.string,

  /** An anchor `target` passed to the non-toggle Button */
  target: propTypes$7.string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: propTypes$7.func,

  /** The content of the non-toggle Button.  */
  title: propTypes$7.node.isRequired,

  /** A `type` passed to the non-toggle Button */
  type: propTypes$7.string,

  /** Disables both Buttons  */
  disabled: propTypes$7.bool,

  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: propTypes$7.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: propTypes$7.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: propTypes$7.string,

  /** @ignore */
  bsPrefix: propTypes$7.string,

  /** @ignore */
  variant: propTypes$7.string,

  /** @ignore */
  size: propTypes$7.string
};
const defaultProps$4 = {
  toggleLabel: 'Toggle dropdown',
  type: 'button'
};
/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */

const SplitButton = /*#__PURE__*/React.forwardRef(({
  id,
  bsPrefix,
  size,
  variant,
  title,
  type,
  toggleLabel,
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  ...props
}, ref) => /*#__PURE__*/jsxs(Dropdown$1, {
  ref: ref,
  ...props,
  as: ButtonGroup,
  children: [/*#__PURE__*/jsx(Button, {
    size: size,
    variant: variant,
    disabled: props.disabled,
    bsPrefix: bsPrefix,
    href: href,
    target: target,
    onClick: onClick,
    type: type,
    children: title
  }), /*#__PURE__*/jsx(Dropdown$1.Toggle, {
    split: true,
    id: id,
    size: size,
    variant: variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: /*#__PURE__*/jsx("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), /*#__PURE__*/jsx(Dropdown$1.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent,
    children: children
  })]
}));
SplitButton.propTypes = propTypes$1;
SplitButton.defaultProps = defaultProps$4;
SplitButton.displayName = 'SplitButton';

function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = useRef(inProp);
  useEffect(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

const _excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit"],
      _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
      _excluded3 = ["as"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const context = useContext(TabContext);
  if (!context) return [props, {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit
  }];

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = _objectWithoutPropertiesLoose(context, _excluded2);

  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit
  }];
}
const TabPanel = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
    as: Component = 'div'
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded3);

  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition
  }] = useTabPanel(props); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/jsx(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/jsx(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          role: "tabpanel",
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';

const Tabs$1 = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = useSSRSafeId(userId);
  const generateChildId = useMemo(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = useMemo(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/jsx(TabContext.Provider, {
    value: tabContext,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: onSelect || null,
      children: children
    })
  });
};

Tabs$1.Panel = TabPanel;

function getTabTransitionComponent(transition) {
  if (typeof transition === 'boolean') {
    return transition ? Fade : undefined;
  }

  return transition;
}

const TabContainer = ({
  transition,
  ...props
}) => /*#__PURE__*/jsx(Tabs$1, { ...props,
  transition: getTabTransitionComponent(transition)
});

TabContainer.displayName = 'TabContainer';

var TabContent = createWithBsPrefix('tab-content');

const TabPane = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = NoopTransition
  }] = useTabPanel({ ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, 'tab-pane'); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/jsx(TabContext.Provider, {
    value: null,
    children: /*#__PURE__*/jsx(SelectableContext.Provider, {
      value: null,
      children: /*#__PURE__*/jsx(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/jsx(Component, { ...rest,
          ref: ref,
          className: classnames(className, prefix, isActive && 'active')
        })
      })
    })
  });
});
TabPane.displayName = 'TabPane';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  eventKey: propTypes$7.oneOfType([propTypes$7.string, propTypes$7.number]),

  /**
   * Content for the tab title.
   */
  title: propTypes$7.node.isRequired,

  /**
   * The disabled state of the tab.
   */
  disabled: propTypes$7.bool,

  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: propTypes$7.string
};

const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly'); // Needed otherwise docs error out.
};

Tab.propTypes = propTypes;
var Tab$1 = Object.assign(Tab, {
  Container: TabContainer,
  Content: TabContent,
  Pane: TabPane
});

const Table = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, 'table');
  const classes = classnames(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);

  const table = /*#__PURE__*/jsx("table", { ...props,
    className: classes,
    ref: ref
  });

  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;

    if (typeof responsive === 'string') {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }

    return /*#__PURE__*/jsx("div", {
      className: responsiveClass,
      children: table
    });
  }

  return table;
});

const defaultProps$3 = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, child => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    id
  } = child.props;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/jsx(NavItem, {
    as: "li",
    role: "presentation",
    children: /*#__PURE__*/jsx(NavLink, {
      as: "button",
      type: "button",
      eventKey: eventKey,
      disabled: disabled,
      id: id,
      className: tabClassName,
      children: title
    })
  });
}

const Tabs = props => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter,
    unmountOnExit,
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect'
  });
  return /*#__PURE__*/jsxs(Tabs$1, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    children: [/*#__PURE__*/jsx(Nav$1, { ...controlledProps,
      role: "tablist",
      as: "ul",
      children: map(children, renderTab)
    }), /*#__PURE__*/jsx(TabContent, {
      children: map(children, child => {
        const childProps = { ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        return /*#__PURE__*/jsx(TabPane, { ...childProps
        });
      })
    })]
  });
};

Tabs.defaultProps = defaultProps$3;
Tabs.displayName = 'Tabs';

const ToastContext = /*#__PURE__*/React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {}

});

const defaultProps$2 = {
  closeLabel: 'Close',
  closeButton: true
};
const ToastHeader = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  closeLabel,
  closeVariant,
  closeButton,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast-header');
  const context = useContext(ToastContext);
  const handleClick = useEventCallback$1(e => {
    context == null ? void 0 : context.onClose == null ? void 0 : context.onClose(e);
  });
  return /*#__PURE__*/jsxs("div", {
    ref: ref,
    ...props,
    className: classnames(bsPrefix, className),
    children: [children, closeButton && /*#__PURE__*/jsx(CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick,
      "data-dismiss": "toast"
    })]
  });
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps$2;

var ToastBody = createWithBsPrefix('toast-body');

const Toast = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  transition: Transition = Fade,
  show = true,
  animation = true,
  delay = 5000,
  autohide = false,
  onClose,
  bg,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  const delayRef = useRef(delay);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  const autohideTimeout = useTimeout();
  const autohideToast = !!(autohide && show);
  const autohideFunc = useCallback(() => {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  useEffect(() => {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  const toastContext = useMemo(() => ({
    onClose
  }), [onClose]);
  const hasAnimation = !!(Transition && animation);

  const toast = /*#__PURE__*/jsx("div", { ...props,
    ref: ref,
    className: classnames(bsPrefix, className, bg && `bg-${bg}`, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });

  return /*#__PURE__*/jsx(ToastContext.Provider, {
    value: toastContext,
    children: hasAnimation && Transition ? /*#__PURE__*/jsx(Transition, {
      in: show,
      unmountOnExit: true,
      children: toast
    }) : toast
  });
});
Toast.displayName = 'Toast';
var Toast$1 = Object.assign(Toast, {
  Body: ToastBody,
  Header: ToastHeader
});

const positionClasses = {
  'top-start': 'top-0 start-0',
  'top-center': 'top-0 start-50 translate-middle-x',
  'top-end': 'top-0 end-0',
  'middle-start': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-end': 'top-50 end-0 translate-middle-y',
  'bottom-start': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50 translate-middle-x',
  'bottom-end': 'bottom-0 end-0'
};
const ToastContainer = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  position,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'toast-container');
  return /*#__PURE__*/jsx(Component, {
    ref: ref,
    ...props,
    className: classnames(bsPrefix, position && `position-absolute ${positionClasses[position]}`, className)
  });
});
ToastContainer.displayName = 'ToastContainer';

const noop = () => undefined;

const ToggleButton = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'btn-check');
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx("input", {
      className: bsPrefix,
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || noop,
      id: id
    }), /*#__PURE__*/jsx(Button, { ...props,
      ref: ref,
      className: classnames(className, disabled && 'disabled'),
      type: undefined,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = 'ToggleButton';

const defaultProps$1 = {
  type: 'radio',
  vertical: false
};
const ToggleButtonGroup = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    type,
    name,
    value,
    onChange,
    ...controlledProps
  } = useUncontrolled(props, {
    value: 'onChange'
  });

  const getValues = () => value == null ? [] : [].concat(value);

  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }

    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;

    if (type === 'radio') {
      if (!isActive && onChange) onChange(inputVal, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(n => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };

  !(type !== 'radio' || !!name) ? process.env.NODE_ENV !== "production" ? browser(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : browser(false) : void 0;
  return /*#__PURE__*/jsx(ButtonGroup, { ...controlledProps,
    ref: ref,
    children: map(children, child => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;

      const handler = e => handleToggle(childVal, e);

      return /*#__PURE__*/React.cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: createChainedFunction(childOnChange, handler)
      });
    })
  });
});
ToggleButtonGroup.defaultProps = defaultProps$1;
var ToggleButtonGroup$1 = Object.assign(ToggleButtonGroup, {
  Button: ToggleButton
});

const defaultProps = {
  placement: 'right'
};
const Tooltip = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  placement,
  className,
  style,
  children,
  arrowProps,
  popper: _,
  show: _2,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'tooltip');
  const isRTL = useIsRTL();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);
  return /*#__PURE__*/jsxs("div", {
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: classnames(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/jsx("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /*#__PURE__*/jsx("div", {
      className: `${bsPrefix}-inner`,
      children: children
    })]
  });
});
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';

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

  // state
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1]; // colors


  var colors = ['primary', 'info', 'success', 'warning', 'danger']; // use ref

  var searchRef = useRef(null); // use effect

  useEffect(function () {
    var _searchRef$current;

    // focus on search ref
    (_searchRef$current = searchRef.current) === null || _searchRef$current === void 0 ? void 0 : _searchRef$current.focus();
  }, []);
  return /*#__PURE__*/React__default.createElement(DashupUIContext$2.Consumer, null, function (data) {
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
    }); // return jsx

    return /*#__PURE__*/React__default.createElement(Offcanvas$1, {
      backdrop: false,
      show: props.show,
      onHide: props.onHide
    }, /*#__PURE__*/React__default.createElement(Offcanvas$1.Header, {
      closeButton: true
    }, /*#__PURE__*/React__default.createElement(Offcanvas$1.Title, null, props.title || 'Form Fields')), /*#__PURE__*/React__default.createElement("div", {
      className: "w-100 h-100 d-flex flex-column"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "p-3 lead"
    }, "Drag one of these fields into the form where you need it."), /*#__PURE__*/React__default.createElement("div", {
      className: "p-3"
    }, /*#__PURE__*/React__default.createElement("input", {
      className: "form-control",
      ref: searchRef,
      placeholder: "Filter Fields",
      type: "search",
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      },
      value: search
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "flex-1 fit-content"
    }, /*#__PURE__*/React__default.createElement(SimpleBar, {
      className: "p-3"
    }, /*#__PURE__*/React__default.createElement(ReactSortable, {
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
        })) return /*#__PURE__*/React__default.createElement("div", {
          key: "field-".concat(field.type),
          className: "d-none"
        });
      } // return fields


      return /*#__PURE__*/React__default.createElement("div", {
        key: "field-".concat(field.type),
        className: "card border border-secondary mb-2 cursor-move",
        "data-type": field.type
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "card-body d-flex"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "flex-0"
      }, /*#__PURE__*/React__default.createElement("i", {
        className: "".concat(field.icon, " h4 fa-fw mx-3 my-3").concat(field.color ? " text-".concat(field.color) : '')
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "col d-flex flex-1 align-items-center"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "w-100"
      }, /*#__PURE__*/React__default.createElement("h5", {
        className: "mb-1"
      }, field.title), /*#__PURE__*/React__default.createElement("p", {
        className: "m-0"
      }, field.description))))));
    }))))));
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
  // get field struct
  var struct = props.getFieldStruct(props.field.type); // clean data

  var cleanQuery = function cleanQuery() {
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
  }; // use state


  var _useState = useState(struct !== null && struct !== void 0 && (_struct$data = struct.data) !== null && _struct$data !== void 0 && (_struct$data$actions = _struct$data.actions) !== null && _struct$data$actions !== void 0 && _struct$data$actions.includes('sanitise') ? null : cleanQuery({
    val: (_props$field = props.field) === null || _props$field === void 0 ? void 0 : _props$field["default"]
  }).val),
      _useState2 = _slicedToArray(_useState, 2),
      defaultValue = _useState2[0],
      setDefaultValue = _useState2[1];

  var _useState3 = useState(!defaultValue && !props.value && !!((_props$field2 = props.field) !== null && _props$field2 !== void 0 && _props$field2["default"]) && (struct === null || struct === void 0 ? void 0 : (_struct$data2 = struct.data) === null || _struct$data2 === void 0 ? void 0 : (_struct$data2$actions = _struct$data2.actions) === null || _struct$data2$actions === void 0 ? void 0 : _struct$data2$actions.includes('sanitise'))),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(struct !== null && struct !== void 0 && (_struct$data3 = struct.data) !== null && _struct$data3 !== void 0 && (_struct$data3$actions = _struct$data3.actions) !== null && _struct$data3$actions !== void 0 && _struct$data3$actions.includes('sanitise') ? null : (_props$field3 = props.field) === null || _props$field3 === void 0 ? void 0 : _props$field3["default"]),
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


  var isViewOnly = function isViewOnly(clean) {
    // check value
    if ((props.field.viewOnly || '[]').length <= 2) return false; // try/catch

    try {
      // match
      return !query.query([clean], {
        $and: cleanQuery(JSON.parse(props.field.viewOnly))
      }, query.undot).length;
    } catch (e) {} // return true


    return true;
  }; // is visible


  var isReadOnly = function isReadOnly(clean) {
    // check value
    if ((props.field.readOnly || '[]').length <= 2) return false; // try/catch

    try {
      // match
      return !query.query([clean], {
        $and: cleanQuery(JSON.parse(props.field.readOnly))
      }, query.undot).length;
    } catch (e) {} // return true


    return true;
  }; // check default value


  useEffect(function () {
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

  useEffect(function () {
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
  }, [(_props$field7 = props.field) === null || _props$field7 === void 0 ? void 0 : _props$field7.uuid]); // return jsx

  return !struct ? null : /*#__PURE__*/React__default.createElement("div", {
    className: "dashup-field".concat(isViewOnly(props.clean || {}) ? ' field-hidden' : '').concat(props.updating ? ' field-updating' : '').concat(props.field.col ? ' col' : ''),
    "data-field": props.field.uuid,
    "data-type": props.field.type,
    id: "field-".concat(props.field.uuid).concat(props.iKey ? "-".concat(props.iKey) : '')
  }, props.updating && /*#__PURE__*/React__default.createElement("div", {
    className: "field-hover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "me-2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-info",
    onClick: function onClick(e) {
      return props.onConfig(props.field);
    }
  }, struct.title, " Field"))), /*#__PURE__*/React__default.createElement("div", {
    className: "ms-auto"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, props.field.col ? 'Expand Field' : 'Compress Field'),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: function onClick(e) {
      return onCompress();
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa ".concat(props.field.col ? 'fa-expand-wide' : 'fa-compress-wide')
  }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, props.field["break"] ? 'Remove Break after' : 'Add Break after'),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: function onClick(e) {
      return onBreak();
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa ".concat(props.field["break"] ? 'fa-file' : 'fa-page-break')
  }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Move Field"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "btn btn-sm btn-primary moves"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-arrows-alt"
  }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Field Config"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: function onClick(e) {
      return props.onConfig(props.field);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-ellipsis-h"
  }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Remove Field"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-danger",
    onClick: function onClick(e) {
      return props.onRemove(props.field);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-trash"
  }))))))), loading ? /*#__PURE__*/React__default.createElement("div", {
    className: "text-center py-3"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-spinner fa-spin"
  })) : /*#__PURE__*/React__default.createElement(View, _extends$1({}, props, {
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
  })));
}; // consumer wrapper


var DashupUIFormFieldWrap = function DashupUIFormFieldWrap() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return JSX
  return /*#__PURE__*/React__default.createElement(DashupUIContext$1.Consumer, null, function (data) {
    return /*#__PURE__*/React__default.createElement(DashupUIFormField, _extends$1({}, data, props));
  });
}; // export default page menu


var Field = (function (ctx) {
  // use context
  DashupUIContext$1 = ctx; // return actual component

  return DashupUIFormFieldWrap;
});

var colors = {
  primary: '#3C50E0',
  secondary: '#b4bcc2',
  success: '#1CBE81',
  info: '#5BC0EB',
  body: '#d9e2f1',
  warning: '#EE8434',
  danger: '#FF5670',
  light: '#E8F1FF',
  dark: '#07003B',
  indigo: '#6610f2',
  purple: '#8A54FF',
  pink: '#FFC1C1',
  yellow: '#FDB400',
  teal: '#20c997',
  white: '#fff',
  gray: '#95a5a6',
  'gray-dark': '#415581',
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
  var _props$field, _struct$data, _struct$data$actions, _struct$data2, _struct$data2$actions, _struct$data5, _struct$data6, _field$color, _field$_meta, _field$color2;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // get struct
  var struct = props.getFieldStruct((_props$field = props.field) === null || _props$field === void 0 ? void 0 : _props$field.type); // tabs

  var _useState = useState(!!(props.field.name || '').length),
      _useState2 = _slicedToArray(_useState, 1),
      named = _useState2[0];

  var _useState3 = useState('config'),
      _useState4 = _slicedToArray(_useState3, 2),
      tab = _useState4[0],
      setTab = _useState4[1];

  var _useState5 = useState(props.field),
      _useState6 = _slicedToArray(_useState5, 2),
      field = _useState6[0],
      setData = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      color = _useState8[0],
      setColor = _useState8[1];

  var _useState9 = useState(!props.value && !!(field !== null && field !== void 0 && field["default"]) && (struct === null || struct === void 0 ? void 0 : (_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : (_struct$data$actions = _struct$data.actions) === null || _struct$data$actions === void 0 ? void 0 : _struct$data$actions.includes('sanitise'))),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = useState(struct !== null && struct !== void 0 && (_struct$data2 = struct.data) !== null && _struct$data2 !== void 0 && (_struct$data2$actions = _struct$data2.actions) !== null && _struct$data2$actions !== void 0 && _struct$data2$actions.includes('sanitise') ? null : field === null || field === void 0 ? void 0 : field["default"]),
      _useState12 = _slicedToArray(_useState11, 2),
      defaultValue = _useState12[0],
      setDefaultValue = _useState12[1]; // use ref


  var colorRef = useRef(null);
  var labelRef = useRef(null); // to label

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


  useEffect(function () {
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

  useEffect(function () {
    var _labelRef$current;

    // use effect
    (_labelRef$current = labelRef.current) === null || _labelRef$current === void 0 ? void 0 : _labelRef$current.focus();
  }, []); // tabs

  var tabs = (struct === null || struct === void 0 ? void 0 : (_struct$data5 = struct.data) === null || _struct$data5 === void 0 ? void 0 : _struct$data5.tabs) || ['config']; // return JSX

  return !!field && !!struct && /*#__PURE__*/React__default.createElement(Modal$1, {
    size: "xl",
    show: props.show,
    onHide: props.onHide,
    enforceFocus: false,
    autoFocus: false
  }, /*#__PURE__*/React__default.createElement(Modal$1.Body, {
    className: "card bg-light p-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "row g-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-lg-8 bg-white d-flex flex-column has-shadow"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-header py-3 border-bottom flex-0"
  }, /*#__PURE__*/React__default.createElement("h5", {
    className: "modal-title"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "me-2 ".concat(struct.icon || 'fa fa-align-justify', " fa-fw")
  }), field.label || field.name || "".concat(struct.title, " Field")), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: "btn btn-link ms-auto d-inline d-lg-none",
    onClick: props.onHide
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-times"
  }))), struct && /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0 border-bottom"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "me-2 ".concat(struct.icon || 'fa fa-align-justify', " fa-fw")
  }), struct.title, " Field"), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex mb-3"
  }, !!((_struct$data6 = struct.data) !== null && _struct$data6 !== void 0 && _struct$data6.color) && /*#__PURE__*/React__default.createElement("div", {
    className: "flex-0 me-2"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "form-label"
  }, "Color"), /*#__PURE__*/React__default.createElement("button", {
    ref: colorRef,
    type: "button",
    className: "btn px-3",
    onClick: function onClick() {
      return setColor(true);
    },
    style: {
      background: colors[field.color] || ((_field$color = field.color) === null || _field$color === void 0 ? void 0 : _field$color.hex)
    }
  }, "\xA0")), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 me-2"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "form-label"
  }, "Label"), /*#__PURE__*/React__default.createElement("input", {
    className: "form-control",
    ref: labelRef,
    value: field.label || '',
    onChange: function onChange(e) {
      return onLabel(e);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 ms-2"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "form-label"
  }, "Name"), /*#__PURE__*/React__default.createElement("input", {
    className: "form-control",
    value: field.name || '',
    onChange: function onChange(e) {
      return setField(field, 'name', toName(e.target.value));
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "form-label"
  }, "Placeholder"), /*#__PURE__*/React__default.createElement("input", {
    className: "form-control",
    value: field.placeholder || '',
    onChange: function onChange(e) {
      return setField(field, 'placeholder', e.target.value);
    }
  })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", {
    className: "form-label"
  }, "Help Text"), /*#__PURE__*/React__default.createElement("input", {
    className: "form-control",
    value: field.help || '',
    onChange: function onChange(e) {
      return setField(field, 'help', e.target.value);
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0 border-bottom"
  }, /*#__PURE__*/React__default.createElement(Tabs, {
    id: "page-config",
    onSelect: function onSelect(k) {
      return setTab(k);
    },
    activeKey: "".concat(tab).toLowerCase()
  }, tabs.map(function (tab, i) {
    var _struct$data7, _struct$data8, _struct$data9;

    // return jsx
    return /*#__PURE__*/React__default.createElement(Tab$1, {
      key: "page-config-".concat(tab).toLowerCase(),
      eventKey: "".concat(tab).toLowerCase(),
      title: "".concat(tab.charAt(0).toUpperCase()).concat(tab.slice(1)),
      className: "pt-4"
    }, "".concat(tab).toLowerCase() === 'config' && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, !!(struct !== null && struct !== void 0 && (_struct$data7 = struct.data) !== null && _struct$data7 !== void 0 && _struct$data7.multiple) && /*#__PURE__*/React__default.createElement("div", {
      className: struct !== null && struct !== void 0 && (_struct$data8 = struct.data) !== null && _struct$data8 !== void 0 && _struct$data8["default"] ? 'mb-3' : ''
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Allow Multiple"), /*#__PURE__*/React__default.createElement("select", {
      className: "form-control",
      value: field.multiple ? 'true' : 'false',
      onChange: function onChange(e) {
        return setField(field, 'multiple', e.target.value === 'true');
      }
    }, /*#__PURE__*/React__default.createElement("option", {
      value: "true"
    }, "Yes"), /*#__PURE__*/React__default.createElement("option", {
      value: "false"
    }, "No"))), !!(struct !== null && struct !== void 0 && (_struct$data9 = struct.data) !== null && _struct$data9 !== void 0 && _struct$data9["default"]) && !loading && /*#__PURE__*/React__default.createElement(View, _objectSpread2(_objectSpread2({}, props), {}, {
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
    }))), "".concat(tab).toLowerCase() === 'display' && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Input only When"), /*#__PURE__*/React__default.createElement(DashupUIQuery, {
      isString: true,
      page: props.page,
      query: field.readOnly,
      dashup: props.dashup,
      fields: props.fields,
      onChange: function onChange(val) {
        return setField(field, 'readOnly', val);
      },
      getFieldStruct: props.getFieldStruct
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/React__default.createElement("label", {
      className: "form-label"
    }, "Display only When"), /*#__PURE__*/React__default.createElement(DashupUIQuery, {
      isString: true,
      page: props.page,
      query: field.viewOnly,
      dashup: props.dashup,
      fields: props.fields,
      onChange: function onChange(val) {
        return setField(field, 'viewOnly', val);
      },
      getFieldStruct: props.getFieldStruct
    }))), /*#__PURE__*/React__default.createElement(View, _objectSpread2(_objectSpread2({}, props), {}, {
      type: 'field',
      view: "".concat(tab).toLowerCase(),
      struct: field === null || field === void 0 ? void 0 : field.type
    })));
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-lg-4 d-flex flex-column"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-header bg-transparent d-flex"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-auto"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "d-block"
  }, "Created At"), /*#__PURE__*/React__default.createElement("div", null, moment(((_field$_meta = field._meta) === null || _field$_meta === void 0 ? void 0 : _field$_meta.created) || new Date()).format('Do MMM, h:mma'))), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: "btn btn-link ms-auto",
    onClick: props.onHide
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-times"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-1"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "card-footer chat-sm bg-transparent d-flex flex-column border-top border-secondary h-75 py-3"
  }, /*#__PURE__*/React__default.createElement(DashupUIChat, {
    size: "sm",
    dashup: props.dashup,
    page: props.page,
    thread: "".concat(props.page.get('_id'), ".").concat(field.uuid)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex flex-column flex-1"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 fit-content"
  }, /*#__PURE__*/React__default.createElement(DashupUIChat.Thread, null)), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-0"
  }, /*#__PURE__*/React__default.createElement(DashupUIChat.Input, null)))))))), !!color && /*#__PURE__*/React__default.createElement(DashupUIColor, {
    target: colorRef,
    show: true,
    color: colors[field.color] || ((_field$color2 = field.color) === null || _field$color2 === void 0 ? void 0 : _field$color2.hex) || 'transparent',
    colors: Object.values(colors),
    onHide: function onHide() {
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
  return /*#__PURE__*/React__default.createElement(DashupContext.Consumer, null, function (data) {
    return /*#__PURE__*/React__default.createElement(DashupUIFormConfig, _extends$1({}, data, props));
  });
}; // export default page menu


var Config = (function (ctx) {
  // use context
  DashupContext = ctx; // return actual component

  return DashupUIFormConfigWrap;
});

var DashupUIContext = /*#__PURE__*/createContext(); // global timer

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
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setSaving = _useState2[1];

  var _useState3 = useState(null),
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


  var _useState5 = useState(getCtx()),
      _useState6 = _slicedToArray(_useState5, 2),
      ctx = _useState6[0],
      setCtx = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      menu = _useState8[0],
      setMenu = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      remove = _useState10[0],
      setRemove = _useState10[1]; // use effect


  useEffect(function () {
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


  var removeJsx = remove && /*#__PURE__*/React__default.createElement(Modal$1, {
    show: true,
    onHide: function onHide(e) {
      return setRemove(null);
    }
  }, /*#__PURE__*/React__default.createElement(Modal$1.Header, {
    closeButton: true
  }, /*#__PURE__*/React__default.createElement(Modal$1.Title, null, "Removing ", /*#__PURE__*/React__default.createElement("b", null, remove.label))), /*#__PURE__*/React__default.createElement(Modal$1.Body, null, /*#__PURE__*/React__default.createElement("p", {
    className: "lead m-0"
  }, "Are you sure you want to remove ", /*#__PURE__*/React__default.createElement("b", null, remove.label || remove.name), "?")), /*#__PURE__*/React__default.createElement(Modal$1.Footer, null, /*#__PURE__*/React__default.createElement(Button, {
    variant: "secondary",
    onClick: function onClick(e) {
      return !setRemove(null) && e.preventDefault();
    }
  }, "Close"), /*#__PURE__*/React__default.createElement(Button, {
    variant: "danger",
    className: "ms-auto",
    onClick: function onClick(e) {
      return onRemove(remove);
    }
  }, "Confirm"))); // check wrapper

  var fieldsJsx = getChildren(props.parent).map(function (field, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: field.uuid
    }, /*#__PURE__*/React__default.createElement(DashupUIForm.Field, {
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
    }), field["break"] && /*#__PURE__*/React__default.createElement("div", {
      className: "w-100"
    }));
  }); // form wrapper

  var formJsx = props.updating ? /*#__PURE__*/React__default.createElement(ReactSortable, {
    id: "".concat(props.id, "-").concat(props.parent || 'root'),
    list: getChildren(props.parent),
    group: props.id,
    onEnd: function onEnd(e) {
      return _onEnd(e, props.fields, props.setFields, setSaving, setConfig, setMenu);
    },
    handle: ".moves",
    setList: function setList() {},
    className: "dashup-form".concat(getChildren(props.parent).length ? '' : ' py-3'),
    swapThreshold: 5
  }, fieldsJsx) : /*#__PURE__*/React__default.createElement("div", {
    className: "dashup-form"
  }, fieldsJsx); // return jsx

  return /*#__PURE__*/React__default.createElement(DashupUIContext.Provider, {
    value: ctx
  }, props.adds !== false && props.updating && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Add Field"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "eden-add eden-add-top",
    onClick: function onClick(e) {
      return setMenu(true);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-plus"
  }))), !props.action ? formJsx : /*#__PURE__*/React__default.createElement("form", {
    action: props.action
  }, formJsx), menu && /*#__PURE__*/React__default.createElement(DashupUIForm.Menu, {
    show: true,
    onHide: function onHide() {
      return setMenu(null);
    },
    setField: setField
  }), config && /*#__PURE__*/React__default.createElement(DashupUIForm.Config, {
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
  }), removeJsx, props.adds !== false && props.updating && /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Add Field"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "eden-add eden-add-bottom",
    onClick: function onClick(e) {
      return setMenu(true);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-plus"
  }))));
}; // export bootstrap form


Object.keys(Form$1).forEach(function (key) {
  DashupUIForm[key] = Form$1[key];
}); // create field

DashupUIForm.Menu = Menu(DashupUIContext);
DashupUIForm.Field = Field(DashupUIContext);
DashupUIForm.Config = Config(DashupUIContext); // export default

// import block

var DashupUIColor = function DashupUIColor() {
  var _props$target;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // return jsx
  return /*#__PURE__*/React__default.createElement(Overlay, {
    show: !!props.show,
    target: ((_props$target = props.target) === null || _props$target === void 0 ? void 0 : _props$target.current) || props.target,
    onHide: function onHide() {
      return props.onHide(false);
    },
    rootClose: true,
    placement: props.placement || 'right-start'
  }, /*#__PURE__*/React__default.createElement(Popover$1, {
    className: "bg-transparent",
    arrowProps: {
      ':after': {
        borderRightColor: props.color
      }
    }
  }, /*#__PURE__*/React__default.createElement(BlockPicker, {
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
  })));
}; // export default

var Chart = null; // export default

var DashupUIChart = function DashupUIChart() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create chat
  var _useState = useState(!!Chart),
      _useState2 = _slicedToArray(_useState, 2),
      chart = _useState2[0],
      setChart = _useState2[1]; // use effect


  useEffect(function () {
    // check window
    if (typeof window === 'undefined') return; // require later

    var reqChart = require('react-apexcharts'); // set chart


    Chart = reqChart["default"] || reqChart; // set chart

    setChart(true);
  }, [typeof window !== 'undefined']); // return logic

  return props.series && chart ? /*#__PURE__*/React__default.createElement("div", {
    className: "w-100 h-100"
  }, /*#__PURE__*/React__default.createElement(Chart, _extends$1({
    width: "100%",
    height: "100%"
  }, props))) : /*#__PURE__*/React__default.createElement("div", null);
}; // export default

var DashupUIBlockMenu = function DashupUIBlockMenu() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // selected
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1]; // colors


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
  return /*#__PURE__*/React__default.createElement(Offcanvas$1, {
    show: props.show,
    onHide: props.onHide
  }, /*#__PURE__*/React__default.createElement(Offcanvas$1.Header, {
    closeButton: true
  }, /*#__PURE__*/React__default.createElement(Offcanvas$1.Title, null, props.title || 'Grid Blocks')), /*#__PURE__*/React__default.createElement("div", {
    className: "w-100 h-100 d-flex flex-column"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "p-3 lead"
  }, "Select one of these blocks and click \"Add Block\" to add it to your grid."), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 fit-content"
  }, /*#__PURE__*/React__default.createElement(SimpleBar, {
    className: "p-3"
  }, (props.available || []).map(function (action, i) {
    // return actions
    return /*#__PURE__*/React__default.createElement("a", {
      key: "action-".concat(action.type),
      href: "#!",
      onClick: function onClick(e) {
        return !setSelected(action.type) && e.preventDefault();
      },
      className: "card border border-".concat(selected === action.type ? 'primary text-primary' : 'secondary text-body', " mb-2")
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "flex-0"
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "".concat(action.icon, " h4 fa-fw mx-3 my-3").concat(action.color ? " text-".concat(action.color) : '')
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "col d-flex flex-1 align-items-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/React__default.createElement("h5", {
      className: "mb-1"
    }, action.title), /*#__PURE__*/React__default.createElement("p", {
      className: "m-0"
    }, action.description))))));
  }))), !!selected && /*#__PURE__*/React__default.createElement("div", {
    className: "p-3 flex-0 btn-offcanvas"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-primary btn-lg w-100",
    onClick: function onClick(e) {
      return props.onBlock(selected);
    }
  }, "Add Block"))));
}; // export default page menu

var DashupUIBlockConfig = function DashupUIBlockConfig() {
  var _struct$data, _props$block$color, _props$block$_meta, _props$block;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // tabs
  var _useState = useState('config'),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1]; // refs


  var colorRef = useRef(null); // get struct

  var struct = props.getBlockStruct(props.block.type); // tabs

  var tabs = (struct === null || struct === void 0 ? void 0 : (_struct$data = struct.data) === null || _struct$data === void 0 ? void 0 : _struct$data.tabs) || ['config']; // return JSX

  return !!props.block && !!struct ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Modal$1, {
    size: "xl",
    show: props.show,
    onHide: props.onHide
  }, /*#__PURE__*/React__default.createElement(Modal$1.Body, {
    className: "card bg-light p-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "row g-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "col-lg-8 bg-white d-flex flex-column has-shadow"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-header py-3 border-bottom flex-0"
  }, /*#__PURE__*/React__default.createElement("h5", {
    className: "modal-title"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "me-2 ".concat(struct.icon || 'fa fa-align-justify')
  }), props.block.label || "".concat(struct.title, " Block")), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: "btn btn-link ms-auto d-inline d-lg-none",
    onClick: props.onHide
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-times"
  }))), struct && /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0 border-bottom"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "me-2 ".concat(struct.icon || 'fa fa-align-justify')
  }), struct.title, " Block"), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex flex-row"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex-0 me-3"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "d-block form-label"
  }, "Color"), /*#__PURE__*/React__default.createElement("button", {
    ref: colorRef,
    type: "button",
    className: "btn px-3",
    onClick: function onClick() {
      return setColor(true);
    },
    style: {
      background: colors[props.block.color] || ((_props$block$color = props.block.color) === null || _props$block$color === void 0 ? void 0 : _props$block$color.hex)
    }
  }, "\xA0"))), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React__default.createElement("label", {
    className: "form-label"
  }, "Label"), /*#__PURE__*/React__default.createElement("input", {
    className: "form-control",
    value: props.block.label || '',
    onChange: function onChange(e) {
      return props.setBlock(props.block, 'label', e.target.value, true);
    }
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-0 border-bottom"
  }, /*#__PURE__*/React__default.createElement(Tabs, {
    id: "block-config",
    onSelect: function onSelect(k) {
      return setTab(k);
    },
    activeKey: "".concat(tab).toLowerCase()
  }, tabs.map(function (tab, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement(Tab$1, {
      key: "block-config-".concat(tab).toLowerCase(),
      eventKey: "".concat(tab).toLowerCase(),
      title: "".concat(tab.charAt(0).toUpperCase()).concat(tab.slice(1)),
      className: "pt-4"
    }, /*#__PURE__*/React__default.createElement(View, _objectSpread2(_objectSpread2({}, props), {}, {
      type: 'block',
      view: tab,
      struct: props.block.type
    })));
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "col-lg-4 d-flex flex-column"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-header bg-transparent d-flex"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-auto"
  }, /*#__PURE__*/React__default.createElement("small", {
    className: "d-block"
  }, "Created At"), /*#__PURE__*/React__default.createElement("div", null, moment(((_props$block$_meta = props.block._meta) === null || _props$block$_meta === void 0 ? void 0 : _props$block$_meta.created) || new Date()).format('Do MMM, h:mma'))), /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: "btn btn-link ms-auto",
    onClick: props.onHide
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-times"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "card-body flex-1"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "card-footer chat-sm bg-transparent d-flex flex-column border-top h-75 py-3"
  }, /*#__PURE__*/React__default.createElement(DashupUIChat, {
    size: "sm",
    dashup: props.dashup,
    page: props.page,
    thread: "".concat(props.page.get('_id'), ".").concat(props.block.uuid)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex flex-column flex-1"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1 fit-content"
  }, /*#__PURE__*/React__default.createElement(DashupUIChat.Thread, null)), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-0"
  }, /*#__PURE__*/React__default.createElement(DashupUIChat.Input, null))))))))), !!color && /*#__PURE__*/React__default.createElement(DashupUIColor, {
    target: colorRef,
    show: true,
    color: colors[props.block.color] || ((_props$block = props.block) === null || _props$block === void 0 ? void 0 : _props$block.hex) || 'transparent',
    colors: Object.values(colors),
    onHide: function onHide() {
      return setColor(false);
    },
    onChange: function onChange(hex) {
      return props.setBlock(props.block, 'color', hex.hex === 'transparent' ? null : hex);
    }
  })) : null;
}; // export default page menu

var DashupUIBlock = function DashupUIBlock() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // struct
  var struct = props.getBlockStruct && props.getBlockStruct(props.block.type); // return jsx

  return /*#__PURE__*/React__default.createElement("div", {
    className: "dashup-block w-100 h-100".concat(props.updating ? ' block-updating' : '')
  }, props.updating && /*#__PURE__*/React__default.createElement("div", {
    className: "block-hover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "me-2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-info",
    onClick: function onClick(e) {
      return props.onConfig(props.block);
    }
  }, props.block.label || (struct === null || struct === void 0 ? void 0 : struct.title)))), /*#__PURE__*/React__default.createElement("div", {
    className: "ms-auto"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Block Config"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: function onClick(e) {
      return props.onConfig(props.block);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-ellipsis-h"
  }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Clone Block"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: function onClick(e) {
      return props.onClone(props.block);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-clone"
  }))), /*#__PURE__*/React__default.createElement(OverlayTrigger, {
    overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Remove Block"),
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-danger",
    onClick: function onClick(e) {
      return props.onRemove(props.block);
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-trash"
  }))))))), /*#__PURE__*/React__default.createElement(View, _extends$1({
    type: "block",
    view: "view",
    struct: props.block.type
  }, props)));
}; // set children blocks


DashupUIBlock.Menu = DashupUIBlockMenu;
DashupUIBlock.Config = DashupUIBlockConfig; // export default

var DashupUISelect = function DashupUISelect() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // el
  var El = Select; // use async

  if (props.async) El = AsyncSelect; // custom option

  var Option = function Option(_ref) {
    var data = _ref.data,
        isDisabled = _ref.isDisabled,
        isSelected = _ref.isSelected,
        innerProps = _ref.innerProps,
        innerRef = _ref.innerRef;
    // return jsx
    return !isDisabled ? /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, data.label),
      placement: "left"
    }, /*#__PURE__*/React__default.createElement(Dropdown$1.Item, _extends$1({
      className: "d-flex align-items-center",
      active: isSelected,
      ref: innerRef
    }, innerProps), !!data.icon && /*#__PURE__*/React__default.createElement("i", {
      className: "".concat(data.icon, " fa-fw me-2")
    }), /*#__PURE__*/React__default.createElement("span", {
      className: "text-overflow"
    }, data.label))) : null;
  }; // return jsx


  return /*#__PURE__*/React__default.createElement(El, _extends$1({}, props, {
    styles: _objectSpread2(_objectSpread2({}, props.styles || {}), {}, {
      // Fixes the overlapping problem of the component
      menu: function menu(provided) {
        return _objectSpread2(_objectSpread2({}, provided), {}, {
          zIndex: 999999
        });
      },
      menuPortal: function menuPortal(base) {
        return _objectSpread2(_objectSpread2({}, base), {}, {
          zIndex: 999999
        });
      }
    }),
    theme: props.theme ? props.theme : function (theme) {
      // return theme
      return _objectSpread2(_objectSpread2({}, theme), {}, {
        colors: _objectSpread2(_objectSpread2({}, theme.colors), {}, {
          danger: 'var(--bs-danger)',
          primary: 'var(--bs-primary)',
          neutral0: 'var(--bs-white)',
          neutral10: 'var(--bs-secondary)',
          neutral20: 'var(--bs-secondary)',
          neutral70: 'var(--bs-dark)',
          neutral80: 'var(--bs-dark)',
          neutral90: 'var(--bs-body)',
          primary75: 'var(--bs-primary-light)',
          primary25: 'var(--bs-primary-transparent)',
          dangerLight: 'var(--bs-danger-light)'
        }),
        spacing: {
          baseUnit: 3,
          menuGutter: 5,
          controlHeight: 'var(--bs-input-height)'
        }
      });
    },
    components: props.components || {
      Option: Option
    }
  }));
}; // export default

var DashupUIQueryRule = function DashupUIQueryRule() {
  var _props$operators$op, _getSub, _getBottom, _getSub2, _getBottom2;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // key
  var _useState = useState(Object.keys(props.value)[0]),
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
  }; // return jsx


  return /*#__PURE__*/React__default.createElement("div", {
    className: "card card-sm border-secondary mt-2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-body p-2 d-flex align-items-center"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-white me-2"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-fw fa-bars"
  })), parts.map(function (p, i) {
    // get part field
    var prev = i > 0 && props.fields[parts[i - 1]];
    var field = props.fields[p]; // check field

    if (!field && i > 0) return null; // return jsx

    return /*#__PURE__*/React__default.createElement("div", {
      key: "part-".concat(i),
      className: "d-inline-block me-2 select-inline"
    }, /*#__PURE__*/React__default.createElement(DashupUISelect, {
      value: field ? {
        value: field.name || field.uuid,
        label: field.label
      } : null,
      options: Object.values(props.fields || {}).filter(function (f) {
        // check prev
        if (prev) return f.parent === prev.uuid; // root only

        return (f.parent || 'root') === 'root';
      }).map(function (field) {
        // return value
        return {
          icon: field.icon,
          label: field.label,
          value: field.name || field.uuid
        };
      }),
      onChange: function onChange(val) {
        return onPart(i, val === null || val === void 0 ? void 0 : val.value);
      },
      placeholder: "Select Field"
    }));
  }), hasChildren() && /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-2 select-inline"
  }, /*#__PURE__*/React__default.createElement(DashupUISelect, {
    value: null,
    options: getChildren(getBottom()).map(function (field) {
      // return value
      return {
        icon: field.icon,
        label: field.label,
        value: field.name || field.uuid
      };
    }),
    onChange: function onChange(val) {
      var _field$subs2;

      // check value
      var field = props.fields[val === null || val === void 0 ? void 0 : val.value]; // field

      if (!field) return; // default sub

      var defaultSub = (_field$subs2 = field.subs) === null || _field$subs2 === void 0 ? void 0 : _field$subs2.find(function (s) {
        return s["default"];
      }); // on part

      if (defaultSub) {
        onPart(parts.length + 1, val === null || val === void 0 ? void 0 : val.value, defaultSub.key);
      } else {
        onPart(parts.length, val === null || val === void 0 ? void 0 : val.value);
      }
    },
    placeholder: "Select Field"
  })), hasSubs() && /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-2 select-inline"
  }, /*#__PURE__*/React__default.createElement(DashupUISelect, {
    value: getSub(),
    options: getBottom().subs.map(function (sub) {
      // return value
      return {
        icon: sub.icon,
        label: sub.label,
        value: sub.key
      };
    }),
    onChange: function onChange(val) {
      return onPart(parts.length - (getSub() && getSub().key === parts[parts.length - 1] ? 1 : 0), val === null || val === void 0 ? void 0 : val.value);
    },
    placeholder: "Select Sub Field"
  })), !!getOps().length && /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-2 select-inline"
  }, /*#__PURE__*/React__default.createElement(DashupUISelect, {
    value: op ? {
      value: op,
      label: (_props$operators$op = props.operators[op]) === null || _props$operators$op === void 0 ? void 0 : _props$operators$op.title
    } : null,
    options: Object.keys(props.operators || {}).map(function (key, i) {
      // check null
      if (!getOps().includes(key)) return; // return value

      return {
        label: props.operators[key].title,
        value: key
      };
    }).filter(function (o) {
      return o;
    }),
    onChange: function onChange(val) {
      return onOp(val === null || val === void 0 ? void 0 : val.value);
    },
    placeholder: "Select Operator"
  })), !!(op && getBottom()) && /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-2 select-inline mw-25"
  }, /*#__PURE__*/React__default.createElement(View, {
    view: "input",
    type: "field",
    page: props.page,
    dashup: props.dashup,
    struct: op === '$exists' ? 'boolean' : ((_getSub = getSub()) === null || _getSub === void 0 ? void 0 : _getSub.type) || ((_getBottom = getBottom()) === null || _getBottom === void 0 ? void 0 : _getBottom.type),
    noLabel: true,
    field: _objectSpread2(_objectSpread2(_objectSpread2({}, getBottom()), getSub() || {}), {}, {
      label: ((_getSub2 = getSub()) === null || _getSub2 === void 0 ? void 0 : _getSub2.label) || ((_getBottom2 = getBottom()) === null || _getBottom2 === void 0 ? void 0 : _getBottom2.label),
      multiple: ['$in', '$nin'].includes(op)
    }),
    value: ((props.value || {})[key] || {})[op],
    onChange: function onChange(f, val) {
      return onValue(val);
    }
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-danger ms-auto",
    onClick: function onClick(e) {
      return !props.onRemove() && e.preventDefault();
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-fw fa-trash"
  }))));
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


  return /*#__PURE__*/React__default.createElement("div", {
    className: "dashup-query-group card mt-2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-header p-2 d-flex"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-white me-2"
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-fw fa-bars"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "d-inline-block me-auto select-inline"
  }, /*#__PURE__*/React__default.createElement(DashupUISelect, {
    value: {
      value: props.operator,
      label: props.groups[props.operator].title
    },
    options: Object.keys(props.groups || {}).map(function (op, i) {
      // return value
      return {
        label: props.groups[op].title,
        value: op
      };
    }),
    onChange: function onChange(val) {
      return setOperator(val === null || val === void 0 ? void 0 : val.value);
    }
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "btn ms-auto btn-success",
    onClick: function onClick(e) {
      return !props.setValue(_defineProperty({}, op, [].concat(_toConsumableArray(props.value[op]), [{
        $eq: {}
      }]))) && e.preventDefault();
    }
  }, "Add Rule"), /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-danger ms-2",
    onClick: function onClick(e) {
      return !props.onRemove() && e.preventDefault();
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa fa-fw fa-trash"
  }))), !!(props.value[op] || []).length && /*#__PURE__*/React__default.createElement("div", {
    className: "card-body p-2 pt-0"
  }, (props.value[op] || []).map(function (val, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement("div", {
      className: "ms-3 rule-inner",
      key: "rule-".concat(i)
    }, /*#__PURE__*/React__default.createElement(DashupUIQueryRule, {
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
  })));
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


  var _useState = useState(query),
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


  return /*#__PURE__*/React__default.createElement("div", {
    className: "dashup-query mb-3"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "text-end"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick(e) {
      return !setTree([].concat(_toConsumableArray(tree), [{
        $eq: {}
      }])) && e.preventDefault();
    }
  }, "Add Rule"), /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick(e) {
      return !setTree([].concat(_toConsumableArray(tree), [{
        $and: []
      }])) && e.preventDefault();
    }
  }, "Add Group"))), tree.map(function (group, i) {
    // get key
    var key = Object.keys(group)[0]; // get el

    var SubEl = DashupUIQueryRule; // check includes

    if (groups[key]) {
      SubEl = DashupUIQueryGroup;
    } // return jsx


    return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
      key: "query-".concat(i)
    }, /*#__PURE__*/React__default.createElement(SubEl, {
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
  }));
}; // rule/group


DashupUIQuery.Rule = DashupUIQueryRule;
DashupUIQuery.Group = DashupUIQueryGroup; // export default

var DashupUIPermission = function DashupUIPermission() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // get pages
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

  var color = props.page.get('color'); // return jsx

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    className: "card card-permission bg-white mb-2"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-body d-flex align-items-center "
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "btn btn-sm btn-page".concat(colors[color] ? " btn-".concat(color) : '', " me-2"),
    type: "button",
    style: {
      color: color !== null && color !== void 0 && color.drk ? '#fff' : color !== null && color !== void 0 && color.hex ? '#000' : null,
      background: (color === null || color === void 0 ? void 0 : color.hex) || colors[color] || color
    }
  }, /*#__PURE__*/React__default.createElement("i", {
    className: "fa-fw fa-".concat(getIcon())
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "flex-1"
  }, props.page.get('name')), /*#__PURE__*/React__default.createElement("div", {
    className: "ms-auto"
  }, buttons.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        title = _ref2[0],
        icon = _ref2[1];

    // set value
    var type = title.toLowerCase(); // color

    var color = props.hasAcl(props.page, type) ? 'success' : 'secondary'; // return jsx

    return /*#__PURE__*/React__default.createElement(OverlayTrigger, {
      key: "btn-".concat(title),
      overlay: /*#__PURE__*/React__default.createElement(Tooltip, null, "Can ", title),
      placement: "top"
    }, /*#__PURE__*/React__default.createElement(Button, {
      variant: color,
      className: "ms-2",
      onClick: function onClick() {
        return onToggle(type);
      }
    }, /*#__PURE__*/React__default.createElement("i", {
      className: "fa fa-".concat(icon)
    })));
  })))), !!getPages(props.page) && /*#__PURE__*/React__default.createElement("div", {
    className: "ps-3"
  }, getPages(props.page).map(function (child, i) {
    // return jsx
    return /*#__PURE__*/React__default.createElement(DashupUIPermission, {
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

View.setDefaults({
  moment: moment,
  handlebars: Handlebars,
  'pretty-ms': pretty,
  'react-dom': ReactDOM,
  '@dashup/ui': dashupUI,
  '@dashup/core': dashupCore,
  'react-select': Select,
  'simplebar-react': SimpleBar,
  'react-sortablejs': ReactSortable$1,
  'react-select/async': AsyncSelect,
  'handlebars-helpers': HandlebarsHelpers
}); // create library

export { Accordion$1 as Accordion, AccordionButton, AccordionCollapse, context$4 as AccordionContext, Alert$1 as Alert, Anchor, Badge, DashupUIBlock as Block, Breadcrumb$1 as Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, DashupUICard as Card, CardColumns, CardGroup, CardImg, Carousel$1 as Carousel, CarouselItem, DashupUIChart as Chart, DashupUIChat as Chat, CloseButton, Col, Collapse, DashupUIColor as Color, Container, DashupUIDate as Date, Dropdown$1 as Dropdown, DropdownButton, Fade, Figure$1 as Figure, FloatingLabel, DashupUIForm as Form, FormCheck$1 as FormCheck, FormControl$1 as FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, DashupUIGrid as Grid, DashupUIHbs as Hbs, Image, InputGroup$1 as InputGroup, ListGroup$1 as ListGroup, ListGroupItem, Modal$1 as Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle, Nav$1 as Nav, NavDropdown$1 as NavDropdown, NavItem, NavLink, Navbar$1 as Navbar, NavbarBrand, Offcanvas$1 as Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, DashupUIPage as Page, PageItem, Pagination$1 as Pagination, DashupUIPermission as Permission, Placeholder$1 as Placeholder, PlaceholderButton, Popover$1 as Popover, PopoverBody, PopoverHeader, ProgressBar, DashupUIQuery as Query, Ratio, Row, DashupUISelect as Select, Spinner, SplitButton, Tab$1 as Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast$1 as Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup$1 as ToggleButtonGroup, Tooltip, colors, useAccordionButton };
