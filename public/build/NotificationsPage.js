"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsPage"],{

/***/ "./public/app/core/components/AppNotifications/StoredNotificationItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredNotificationItem": () => (/* binding */ StoredNotificationItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const StoredNotificationItem = ({
  title,
  severity = 'error',
  traceId,
  timestamp,
  children,
  onRemove
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme, severity);
  const showTraceId = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tracing && traceId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.icon,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        size: "xl",
        name: (0,_grafana_ui_src_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__.getIconFromSeverity)(severity)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.body,
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: styles.trace,
      children: showTraceId && `Trace ID: ${traceId}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.close,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        "aria-label": "Close alert",
        name: "times",
        onClick: onRemove,
        size: "lg",
        type: "button"
      })
    }), timestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: styles.timestamp,
      children: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(timestamp, {
        addSuffix: true
      })
    })]
  });
};

const getStyles = (theme, severity) => {
  const color = theme.colors[severity];
  const borderRadius = theme.shape.borderRadius();
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateAreas: `
        'icon title close'
        'icon body body'
        'icon trace timestamp'`,
      gap: `0 ${theme.spacing(2)}`,
      background: theme.colors.background.secondary,
      borderRadius: borderRadius
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridArea: 'icon',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2, 3),
      background: color.main,
      color: color.contrastText,
      borderRadius: `${borderRadius} 0 0 ${borderRadius}`
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridArea: 'title',
      alignSelf: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.text.primary
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridArea: 'body',
      maxHeight: '50vh',
      marginRight: theme.spacing(1),
      overflowY: 'auto',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      color: theme.colors.text.secondary
    }),
    trace: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridArea: 'trace',
      justifySelf: 'start',
      alignSelf: 'end',
      paddingBottom: theme.spacing(1),
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    }),
    close: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridArea: 'close',
      display: 'flex',
      justifySelf: 'end',
      padding: theme.spacing(1, 0.5),
      background: 'none'
    }),
    timestamp: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridArea: 'timestamp',
      alignSelf: 'end',
      padding: theme.spacing(1),
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    })
  };
};

/***/ }),

/***/ "./public/app/features/notifications/NotificationsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _StoredNotifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/notifications/StoredNotifications.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;









const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'notifications')
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, undefined);
const NotificationsPage = ({
  navModel
}) => {
  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.persistNotifications) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StoredNotifications__WEBPACK_IMPORTED_MODULE_5__.StoredNotifications, {})
    }))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(NotificationsPage));

/***/ }),

/***/ "./public/app/features/notifications/StoredNotifications.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredNotifications": () => (/* binding */ StoredNotifications)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/AppNotifications/StoredNotificationItem.tsx");
/* harmony import */ var app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;










function StoredNotifications() {
  const dispatch = (0,app_types__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const notifications = (0,app_types__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.selectWarningsAndErrors)(state.appNotifications));
  const lastReadTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,app_types__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.selectLastReadTimestamp)(state.appNotifications)));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.readAllNotifications)(Date.now()));
  });

  const onClearNotification = id => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.clearNotification)(id));
  };

  const clearAllNotifs = () => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.clearAllNotifications)());
  };

  if (notifications.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.noNotifsWrapper,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "bell",
        size: "xxl"
      })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        children: "Notifications you have received will appear here."
      }))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "destructive",
      onClick: clearAllNotifs,
      className: styles.clearAll,
      children: "Clear all notifications"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
      className: styles.list,
      children: notifications.map(notif => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.listItem, {
          [styles.newItem]: notif.timestamp > lastReadTimestamp.current
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_3__.StoredNotificationItem, {
          severity: notif.severity,
          title: notif.title,
          onRemove: () => onClearNotification(notif.id),
          timestamp: notif.timestamp,
          traceId: notif.traceId,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            children: notif.text
          })
        })
      }, notif.id))
    })]
  });
}

function getStyles(theme) {
  return {
    smallText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    }),
    side: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column',
      padding: '3px 6px',
      paddingTop: theme.spacing(1),
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexShrink: 0
    }),
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      listStyle: 'none',
      gap: theme.spacing(1),
      alignItems: 'center',
      position: 'relative'
    }),
    newItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      '&::before': {
        content: '""',
        height: '100%',
        position: 'absolute',
        left: '-7px',
        top: 0,
        background: theme.colors.gradients.brandVertical,
        width: theme.spacing(0.5),
        borderRadius: theme.shape.borderRadius(1)
      }
    }),
    noNotifsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(1)
    }),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2)
    }),
    clearAll: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignSelf: 'flex-end'
    })
  };
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistanceToNow/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLG9FQUFlO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvbnMvU3RvcmVkTm90aWZpY2F0aW9uSXRlbS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9TdG9yZWROb3RpZmljYXRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvZGF0ZS1mbnMtbnBtLTIuMjguMC1jMTljNWFkZDFiLWEwNTE2YjJlNGYuemlwL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9kYXRlLWZucy1ucG0tMi4yOC4wLWMxOWM1YWRkMWItYTA1MTZiMmU0Zi56aXAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVRvTm93L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBJY29uLCBJY29uQnV0dG9uLCBJY29uTmFtZSwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0SWNvbkZyb21TZXZlcml0eSB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL0FsZXJ0L0FsZXJ0JztcblxuZXhwb3J0IHR5cGUgQWxlcnRWYXJpYW50ID0gJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdpbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNldmVyaXR5PzogQWxlcnRWYXJpYW50O1xuICB0aW1lc3RhbXA/OiBudW1iZXI7XG4gIHRyYWNlSWQ/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICBvblJlbW92ZT86IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFN0b3JlZE5vdGlmaWNhdGlvbkl0ZW0gPSAoe1xuICB0aXRsZSxcbiAgc2V2ZXJpdHkgPSAnZXJyb3InLFxuICB0cmFjZUlkLFxuICB0aW1lc3RhbXAsXG4gIGNoaWxkcmVuLFxuICBvblJlbW92ZSxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSwgc2V2ZXJpdHkpO1xuICBjb25zdCBzaG93VHJhY2VJZCA9IGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy50cmFjaW5nICYmIHRyYWNlSWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cbiAgICAgICAgPEljb24gc2l6ZT1cInhsXCIgbmFtZT17Z2V0SWNvbkZyb21TZXZlcml0eShzZXZlcml0eSkgYXMgSWNvbk5hbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudHJhY2V9PntzaG93VHJhY2VJZCAmJiBgVHJhY2UgSUQ6ICR7dHJhY2VJZH1gfTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9PlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2UgYWxlcnRcIiBuYW1lPVwidGltZXNcIiBvbkNsaWNrPXtvblJlbW92ZX0gc2l6ZT1cImxnXCIgdHlwZT1cImJ1dHRvblwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt0aW1lc3RhbXAgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZXN0YW1wfT57Zm9ybWF0RGlzdGFuY2VUb05vdyh0aW1lc3RhbXAsIHsgYWRkU3VmZml4OiB0cnVlIH0pfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIsIHNldmVyaXR5OiBBbGVydFZhcmlhbnQpID0+IHtcbiAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvcnNbc2V2ZXJpdHldO1xuICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKTtcblxuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGNzcyh7XG4gICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnYXV0byAxZnIgYXV0bycsXG4gICAgICBncmlkVGVtcGxhdGVSb3dzOiAnYXV0byAxZnIgYXV0bycsXG4gICAgICBncmlkVGVtcGxhdGVBcmVhczogYFxuICAgICAgICAnaWNvbiB0aXRsZSBjbG9zZSdcbiAgICAgICAgJ2ljb24gYm9keSBib2R5J1xuICAgICAgICAnaWNvbiB0cmFjZSB0aW1lc3RhbXAnYCxcbiAgICAgIGdhcDogYDAgJHt0aGVtZS5zcGFjaW5nKDIpfWAsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnksXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICB9KSxcbiAgICBpY29uOiBjc3Moe1xuICAgICAgZ3JpZEFyZWE6ICdpY29uJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAzKSxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLm1haW4sXG4gICAgICBjb2xvcjogY29sb3IuY29udHJhc3RUZXh0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHtib3JkZXJSYWRpdXN9IDAgMCAke2JvcmRlclJhZGl1c31gLFxuICAgIH0pLFxuICAgIHRpdGxlOiBjc3Moe1xuICAgICAgZ3JpZEFyZWE6ICd0aXRsZScsXG4gICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnksXG4gICAgfSksXG4gICAgYm9keTogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAnYm9keScsXG4gICAgICBtYXhIZWlnaHQ6ICc1MHZoJyxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICAgIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeSxcbiAgICB9KSxcbiAgICB0cmFjZTogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAndHJhY2UnLFxuICAgICAganVzdGlmeVNlbGY6ICdzdGFydCcsXG4gICAgICBhbGlnblNlbGY6ICdlbmQnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTApLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeSxcbiAgICB9KSxcbiAgICBjbG9zZTogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAnY2xvc2UnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeVNlbGY6ICdlbmQnLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAwLjUpLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIH0pLFxuICAgIHRpbWVzdGFtcDogY3NzKHtcbiAgICAgIGdyaWRBcmVhOiAndGltZXN0YW1wJyxcbiAgICAgIGFsaWduU2VsZjogJ2VuZCcsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMCksXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5LFxuICAgIH0pLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBTdG9yZWROb3RpZmljYXRpb25zIH0gZnJvbSAnLi9TdG9yZWROb3RpZmljYXRpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdub3RpZmljYXRpb25zJyksXG59KTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHVuZGVmaW5lZCk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIHt9XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uc1BhZ2UgPSAoeyBuYXZNb2RlbCB9OiBQcm9wcykgPT4ge1xuICBpZiAoIWNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5wZXJzaXN0Tm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxTdG9yZWROb3RpZmljYXRpb25zIC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5vdGlmaWNhdGlvbnNQYWdlKTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdE9uY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTdG9yZWROb3RpZmljYXRpb25JdGVtIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BcHBOb3RpZmljYXRpb25zL1N0b3JlZE5vdGlmaWNhdGlvbkl0ZW0nO1xuaW1wb3J0IHtcbiAgY2xlYXJBbGxOb3RpZmljYXRpb25zLFxuICBjbGVhck5vdGlmaWNhdGlvbixcbiAgcmVhZEFsbE5vdGlmaWNhdGlvbnMsXG4gIHNlbGVjdFdhcm5pbmdzQW5kRXJyb3JzLFxuICBzZWxlY3RMYXN0UmVhZFRpbWVzdGFtcCxcbn0gZnJvbSAnYXBwL2NvcmUvcmVkdWNlcnMvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTdG9yZWROb3RpZmljYXRpb25zKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHNlbGVjdFdhcm5pbmdzQW5kRXJyb3JzKHN0YXRlLmFwcE5vdGlmaWNhdGlvbnMpKTtcbiAgY29uc3QgbGFzdFJlYWRUaW1lc3RhbXAgPSB1c2VSZWYodXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzZWxlY3RMYXN0UmVhZFRpbWVzdGFtcChzdGF0ZS5hcHBOb3RpZmljYXRpb25zKSkpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgdXNlRWZmZWN0T25jZSgoKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVhZEFsbE5vdGlmaWNhdGlvbnMoRGF0ZS5ub3coKSkpO1xuICB9KTtcblxuICBjb25zdCBvbkNsZWFyTm90aWZpY2F0aW9uID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaChjbGVhck5vdGlmaWNhdGlvbihpZCkpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQWxsTm90aWZzID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGNsZWFyQWxsTm90aWZpY2F0aW9ucygpKTtcbiAgfTtcblxuICBpZiAobm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub05vdGlmc1dyYXBwZXJ9PlxuICAgICAgICA8SWNvbiBuYW1lPVwiYmVsbFwiIHNpemU9XCJ4eGxcIiAvPlxuICAgICAgICA8c3Bhbj5Ob3RpZmljYXRpb25zIHlvdSBoYXZlIHJlY2VpdmVkIHdpbGwgYXBwZWFyIGhlcmUuPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17Y2xlYXJBbGxOb3RpZnN9IGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyQWxsfT5cbiAgICAgICAgQ2xlYXIgYWxsIG5vdGlmaWNhdGlvbnNcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmKSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e25vdGlmLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMubGlzdEl0ZW0sIHsgW3N0eWxlcy5uZXdJdGVtXTogbm90aWYudGltZXN0YW1wID4gbGFzdFJlYWRUaW1lc3RhbXAuY3VycmVudCB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3RvcmVkTm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICBzZXZlcml0eT17bm90aWYuc2V2ZXJpdHl9XG4gICAgICAgICAgICAgIHRpdGxlPXtub3RpZi50aXRsZX1cbiAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IG9uQ2xlYXJOb3RpZmljYXRpb24obm90aWYuaWQpfVxuICAgICAgICAgICAgICB0aW1lc3RhbXA9e25vdGlmLnRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgdHJhY2VJZD17bm90aWYudHJhY2VJZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e25vdGlmLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9TdG9yZWROb3RpZmljYXRpb25JdGVtPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgc21hbGxUZXh0OiBjc3Moe1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMCksXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5LFxuICAgIH0pLFxuICAgIHNpZGU6IGNzcyh7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIHBhZGRpbmc6ICczcHggNnB4JyxcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgfSksXG4gICAgbGlzdDogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0pLFxuICAgIGxpc3RJdGVtOiBjc3Moe1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH0pLFxuICAgIG5ld0l0ZW06IGNzcyh7XG4gICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJy03cHgnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmFkaWVudHMuYnJhbmRWZXJ0aWNhbCxcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoMSksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5vTm90aWZzV3JhcHBlcjogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSksXG4gICAgd3JhcHBlcjogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0pLFxuICAgIGNsZWFyQWxsOiBjc3Moe1xuICAgICAgYWxpZ25TZWxmOiAnZmxleC1lbmQnLFxuICAgIH0pLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGlydHlPYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3QoZGlydHlPYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgZGlydHlPYmplY3QpO1xufSIsImltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHMgYCB0byBgZm9ybWF0RGlzdGFuY2VgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3JkcyhcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgbnVsbCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgZGlzdGFuY2VJbldvcmRzIGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHNUb05vdyBgIHRvIGBmb3JtYXREaXN0YW5jZVRvTm93YFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzVG9Ob3cobmV3IERhdGUoMjAxNCwgNiwgMiksIHsgYWRkU3VmZml4OiB0cnVlIH0pXG4gKiAgIC8vPT4gJ2luIDYgbW9udGhzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAqICAgLy89PiAnaW4gNiBtb250aHMnXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBzcGVjaWZpZXMgaWYgbm93IGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgcGFzc2VkIGRhdGVcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDIgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAge2luY2x1ZGVTZWNvbmRzOiB0cnVlfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiBhYm91dCAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiB2YXIgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGRpc3RhbmNlSW5Xb3JkcyhkaXJ0eURhdGUsIERhdGUubm93KCksIGRpcnR5T3B0aW9ucyk7XG59Il0sIm5hbWVzIjpbImNzcyIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJSZWFjdCIsImNvbmZpZyIsIkljb24iLCJJY29uQnV0dG9uIiwidXNlVGhlbWUyIiwiZ2V0SWNvbkZyb21TZXZlcml0eSIsIlN0b3JlZE5vdGlmaWNhdGlvbkl0ZW0iLCJ0aXRsZSIsInNldmVyaXR5IiwidHJhY2VJZCIsInRpbWVzdGFtcCIsImNoaWxkcmVuIiwib25SZW1vdmUiLCJ0aGVtZSIsInN0eWxlcyIsImdldFN0eWxlcyIsInNob3dUcmFjZUlkIiwiZmVhdHVyZVRvZ2dsZXMiLCJ0cmFjaW5nIiwid3JhcHBlciIsImljb24iLCJib2R5IiwidHJhY2UiLCJjbG9zZSIsImFkZFN1ZmZpeCIsImNvbG9yIiwiY29sb3JzIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJncmlkVGVtcGxhdGVBcmVhcyIsImdhcCIsInNwYWNpbmciLCJiYWNrZ3JvdW5kIiwic2Vjb25kYXJ5IiwiZ3JpZEFyZWEiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWFpbiIsImNvbnRyYXN0VGV4dCIsImFsaWduU2VsZiIsImZvbnRXZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodE1lZGl1bSIsInRleHQiLCJwcmltYXJ5IiwibWF4SGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1dyYXAiLCJ3b3JkQnJlYWsiLCJqdXN0aWZ5U2VsZiIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsInB4VG9SZW0iLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiU3RvcmVkTm90aWZpY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImNvbm5lY3RvciIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvbnNQYWdlIiwicGVyc2lzdE5vdGlmaWNhdGlvbnMiLCJjeCIsInVzZVJlZiIsInVzZUVmZmVjdE9uY2UiLCJCdXR0b24iLCJ1c2VTdHlsZXMyIiwiY2xlYXJBbGxOb3RpZmljYXRpb25zIiwiY2xlYXJOb3RpZmljYXRpb24iLCJyZWFkQWxsTm90aWZpY2F0aW9ucyIsInNlbGVjdFdhcm5pbmdzQW5kRXJyb3JzIiwic2VsZWN0TGFzdFJlYWRUaW1lc3RhbXAiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJub3RpZmljYXRpb25zIiwiYXBwTm90aWZpY2F0aW9ucyIsImxhc3RSZWFkVGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIm9uQ2xlYXJOb3RpZmljYXRpb24iLCJpZCIsImNsZWFyQWxsTm90aWZzIiwibGVuZ3RoIiwibm9Ob3RpZnNXcmFwcGVyIiwiY2xlYXJBbGwiLCJsaXN0IiwibWFwIiwibm90aWYiLCJsaXN0SXRlbSIsIm5ld0l0ZW0iLCJjdXJyZW50Iiwic21hbGxUZXh0Iiwic2lkZSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nVG9wIiwiZmxleFNocmluayIsImxpc3RTdHlsZSIsInBvc2l0aW9uIiwiY29udGVudCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJncmFkaWVudHMiLCJicmFuZFZlcnRpY2FsIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9