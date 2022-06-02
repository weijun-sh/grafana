"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[743],{

 "./public/app/features/notifications/NotificationsPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "NotificationsPage": () => ( NotificationsPage),
  "default": () => ( notifications_NotificationsPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var useEffectOnce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var formatDistance = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
var requiredArgs = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");
;



function formatDistanceToNow(dirtyDate, dirtyOptions) {
  (0,requiredArgs.Z)(1, arguments);
  return (0,formatDistance.Z)(dirtyDate, Date.now(), dirtyOptions);
}
var Alert = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;








const StoredNotificationItem = _ref => {
  let {
    title,
    severity = 'error',
    traceId,
    timestamp,
    children,
    onRemove
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getStyles(theme, severity);
  const showTraceId = src.config.featureToggles.tracing && traceId;
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.icon,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        size: "xl",
        name: (0,Alert.j)(severity)
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: title
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.body,
      children: children
    }), (0,jsx_runtime.jsx)("span", {
      className: styles.trace,
      children: showTraceId && `Trace ID: ${traceId}`
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.close,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        "aria-label": "Close alert",
        name: "times",
        onClick: onRemove,
        size: "lg",
        type: "button"
      })
    }), timestamp && (0,jsx_runtime.jsx)("span", {
      className: styles.timestamp,
      children: formatDistanceToNow(timestamp, {
        addSuffix: true
      })
    })]
  });
};

const getStyles = (theme, severity) => {
  const color = theme.colors[severity];
  const borderRadius = theme.shape.borderRadius();
  return {
    wrapper: (0,emotion_css_esm.css)({
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
    icon: (0,emotion_css_esm.css)({
      gridArea: 'icon',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2, 3),
      background: color.main,
      color: color.contrastText,
      borderRadius: `${borderRadius} 0 0 ${borderRadius}`
    }),
    title: (0,emotion_css_esm.css)({
      gridArea: 'title',
      alignSelf: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.colors.text.primary
    }),
    body: (0,emotion_css_esm.css)({
      gridArea: 'body',
      maxHeight: '50vh',
      marginRight: theme.spacing(1),
      overflowY: 'auto',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      color: theme.colors.text.secondary
    }),
    trace: (0,emotion_css_esm.css)({
      gridArea: 'trace',
      justifySelf: 'start',
      alignSelf: 'end',
      paddingBottom: theme.spacing(1),
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    }),
    close: (0,emotion_css_esm.css)({
      gridArea: 'close',
      display: 'flex',
      justifySelf: 'end',
      padding: theme.spacing(1, 0.5),
      background: 'none'
    }),
    timestamp: (0,emotion_css_esm.css)({
      gridArea: 'timestamp',
      alignSelf: 'end',
      padding: theme.spacing(1),
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    })
  };
};
var appNotification = __webpack_require__("./public/app/core/reducers/appNotification.ts");
var types = __webpack_require__("./public/app/types/index.ts");
;
var _Icon, _span;










function StoredNotifications() {
  const dispatch = (0,types.I0)();
  const notifications = (0,types.v9)(state => (0,appNotification.mE)(state.appNotifications));
  const lastReadTimestamp = (0,react.useRef)((0,types.v9)(state => (0,appNotification.Av)(state.appNotifications)));
  const styles = (0,grafana_ui_src.useStyles2)(StoredNotifications_getStyles);
  (0,useEffectOnce.Z)(() => {
    dispatch((0,appNotification.Jk)(Date.now()));
  });

  const onClearNotification = id => {
    dispatch((0,appNotification.hS)(id));
  };

  const clearAllNotifs = () => {
    dispatch((0,appNotification.F6)());
  };

  if (notifications.length === 0) {
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.noNotifsWrapper,
      children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "bell",
        size: "xxl"
      })), _span || (_span = (0,jsx_runtime.jsx)("span", {
        children: "Notifications you have received will appear here."
      }))]
    });
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "destructive",
      onClick: clearAllNotifs,
      className: styles.clearAll,
      children: "Clear all notifications"
    }), (0,jsx_runtime.jsx)("ul", {
      className: styles.list,
      children: notifications.map(notif => (0,jsx_runtime.jsx)("li", {
        className: (0,emotion_css_esm.cx)(styles.listItem, {
          [styles.newItem]: notif.timestamp > lastReadTimestamp.current
        }),
        children: (0,jsx_runtime.jsx)(StoredNotificationItem, {
          severity: notif.severity,
          title: notif.title,
          onRemove: () => onClearNotification(notif.id),
          timestamp: notif.timestamp,
          traceId: notif.traceId,
          children: (0,jsx_runtime.jsx)("span", {
            children: notif.text
          })
        })
      }, notif.id))
    })]
  });
}

function StoredNotifications_getStyles(theme) {
  return {
    smallText: (0,emotion_css_esm.css)({
      fontSize: theme.typography.pxToRem(10),
      color: theme.colors.text.secondary
    }),
    side: (0,emotion_css_esm.css)({
      display: 'flex',
      flexDirection: 'column',
      padding: '3px 6px',
      paddingTop: theme.spacing(1),
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexShrink: 0
    }),
    list: (0,emotion_css_esm.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1)
    }),
    listItem: (0,emotion_css_esm.css)({
      listStyle: 'none',
      gap: theme.spacing(1),
      alignItems: 'center',
      position: 'relative'
    }),
    newItem: (0,emotion_css_esm.css)({
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
    noNotifsWrapper: (0,emotion_css_esm.css)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(1)
    }),
    wrapper: (0,emotion_css_esm.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2)
    }),
    clearAll: (0,emotion_css_esm.css)({
      alignSelf: 'flex-end'
    })
  };
}
;
var _Page$Contents;









const mapStateToProps = state => ({
  navModel: (0,navModel.h)(state.navIndex, 'notifications')
});

const connector = (0,es.connect)(mapStateToProps, undefined);
const NotificationsPage = _ref => {
  let {
    navModel
  } = _ref;

  if (!src.config.featureToggles.persistNotifications) {
    return null;
  }

  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = (0,jsx_runtime.jsx)(Page.Z.Contents, {
      children: (0,jsx_runtime.jsx)(StoredNotifications, {})
    }))
  });
};
 const notifications_NotificationsPage = ((0,es.connect)(mapStateToProps)(NotificationsPage));

 }),

 "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "Z": () => ( formatDistance)
});

var compareAsc = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
var differenceInMonths = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
var differenceInSeconds = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
var en_US = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
var toDate = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
;
function assign_assign(target, dirtyObject) {
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
;

function cloneObject(dirtyObject) {
  return assign_assign({}, dirtyObject);
}
var getTimezoneOffsetInMilliseconds = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
var requiredArgs = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");
;








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,requiredArgs.Z)(2, arguments);
  var locale = options.locale || en_US.Z;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,compareAsc.Z)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = cloneObject(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,toDate.Z)(dirtyBaseDate);
    dateRight = (0,toDate.Z)(dirtyDate);
  } else {
    dateLeft = (0,toDate.Z)(dirtyDate);
    dateRight = (0,toDate.Z)(dirtyBaseDate);
  }

  var seconds = (0,differenceInSeconds.Z)(dateRight, dateLeft);
  var offsetInSeconds = ((0,getTimezoneOffsetInMilliseconds.Z)(dateRight) - (0,getTimezoneOffsetInMilliseconds.Z)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; 

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
    } 

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); 
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); 
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); 
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); 
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); 
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,differenceInMonths.Z)(dateRight, dateLeft); 

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); 
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); 

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); 
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); 
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

 })

}]);