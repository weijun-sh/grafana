(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9782],{

/***/ "./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ seriesVisibilityConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");


const displayOverrideRef = 'hideSeriesFrom';
const isHideSeriesOverride = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isSystemOverrideWithRef)(displayOverrideRef);
function seriesVisibilityConfigFactory(label, mode, fieldConfig, data) {
  const {
    overrides
  } = fieldConfig;
  const displayName = label;
  const currentIndex = overrides.findIndex(isHideSeriesOverride);

  if (currentIndex < 0) {
    if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
      const override = createOverride([displayName]);
      return Object.assign({}, fieldConfig, {
        overrides: [...fieldConfig.overrides, override]
      });
    }

    const displayNames = getDisplayNames(data, displayName);
    const override = createOverride(displayNames);
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, override]
    });
  }

  const overridesCopy = Array.from(overrides);
  const [current] = overridesCopy.splice(currentIndex, 1);

  if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
    const existing = getExistingDisplayNames(current);

    if (existing[0] === displayName && existing.length === 1) {
      return Object.assign({}, fieldConfig, {
        overrides: overridesCopy
      });
    }

    const override = createOverride([displayName]);
    return Object.assign({}, fieldConfig, {
      overrides: [...overridesCopy, override]
    });
  }

  const override = createExtendedOverride(current, displayName);

  if (allFieldsAreExcluded(override, data)) {
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  return Object.assign({}, fieldConfig, {
    overrides: [...overridesCopy, override]
  });
}

function createOverride(names) {
  var _property;

  let mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude;
  let property = arguments.length > 2 ? arguments[2] : undefined;
  property = (_property = property) !== null && _property !== void 0 ? _property : {
    id: 'custom.hideFrom',
    value: {
      viz: true,
      legend: false,
      tooltip: false
    }
  };
  return {
    __systemRef: displayOverrideRef,
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
      options: {
        mode: mode,
        names: names,
        prefix: mode === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude ? 'All except:' : undefined,
        readOnly: true
      }
    },
    properties: [Object.assign({}, property, {
      value: {
        viz: true,
        legend: false,
        tooltip: false
      }
    })]
  };
}

const createExtendedOverride = function (current, displayName) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude;
  const property = current.properties.find(p => p.id === 'custom.hideFrom');
  const existing = getExistingDisplayNames(current);
  const index = existing.findIndex(name => name === displayName);

  if (index < 0) {
    existing.push(displayName);
  } else {
    existing.splice(index, 1);
  }

  return createOverride(existing, mode, property);
};

const getExistingDisplayNames = rule => {
  var _rule$matcher$options;

  const names = (_rule$matcher$options = rule.matcher.options) === null || _rule$matcher$options === void 0 ? void 0 : _rule$matcher$options.names;

  if (!Array.isArray(names)) {
    return [];
  }

  return [...names];
};

const allFieldsAreExcluded = (override, data) => {
  return getExistingDisplayNames(override).length === getDisplayNames(data).length;
};

const getDisplayNames = (data, excludeName) => {
  const unique = new Set();

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        continue;
      }

      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, data);

      if (name === excludeName) {
        continue;
      }

      unique.add(name);
    }
  }

  return Array.from(unique);
};

/***/ }),

/***/ "./public/app/features/explore/Wrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ explore_Wrapper)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/types/explore.ts
var explore = __webpack_require__("./public/app/types/explore.ts");
// EXTERNAL MODULE: ./public/app/core/components/Branding/Branding.tsx
var Branding = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/kbar-virtual-9b2cef4f82/0/cache/kbar-npm-0.1.0-beta.33-287f85404a-545720900a.zip/node_modules/kbar/lib/index.js
var lib = __webpack_require__("./.yarn/__virtual__/kbar-virtual-9b2cef4f82/0/cache/kbar-npm-0.1.0-beta.33-287f85404a-545720900a.zip/node_modules/kbar/lib/index.js");
// EXTERNAL MODULE: ./public/app/features/explore/state/main.ts
var main = __webpack_require__("./public/app/features/explore/state/main.ts");
// EXTERNAL MODULE: ./public/app/features/explore/state/query.ts + 1 modules
var state_query = __webpack_require__("./public/app/features/explore/state/query.ts");
// EXTERNAL MODULE: ./public/app/features/explore/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/explore/state/selectors.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/ExploreActions.tsx






const ExploreActions = _ref => {
  let {
    exploreIdLeft,
    exploreIdRight
  } = _ref;
  const [actions, setActions] = (0,react.useState)([]);
  const {
    query
  } = (0,lib.useKBar)();
  const dispatch = (0,es.useDispatch)();
  const splitted = (0,es.useSelector)(selectors/* isSplit */.p);
  (0,react.useEffect)(() => {
    const exploreSection = {
      name: 'Explore',
      priority: lib.Priority.HIGH + 1
    };
    const actionsArr = [];

    if (splitted) {
      actionsArr.push({
        id: 'explore/run-query-left',
        name: 'Run query (left)',
        keywords: 'query left',
        perform: () => {
          dispatch((0,state_query/* runQueries */.aA)(exploreIdLeft));
        },
        section: exploreSection
      });

      if (exploreIdRight) {
        // we should always have the right exploreId if split
        actionsArr.push({
          id: 'explore/run-query-right',
          name: 'Run query (right)',
          keywords: 'query right',
          perform: () => {
            dispatch((0,state_query/* runQueries */.aA)(exploreIdRight));
          },
          section: exploreSection
        });
        actionsArr.push({
          id: 'explore/split-view-close-left',
          name: 'Close split view left',
          keywords: 'split',
          perform: () => {
            dispatch((0,main/* splitClose */.YV)(exploreIdLeft));
          },
          section: exploreSection
        });
        actionsArr.push({
          id: 'explore/split-view-close-right',
          name: 'Close split view right',
          keywords: 'split',
          perform: () => {
            dispatch((0,main/* splitClose */.YV)(exploreIdRight));
          },
          section: exploreSection
        });
      }
    } else {
      actionsArr.push({
        id: 'explore/run-query',
        name: 'Run query',
        keywords: 'query',
        perform: () => {
          dispatch((0,state_query/* runQueries */.aA)(exploreIdLeft));
        },
        section: exploreSection
      });
      actionsArr.push({
        id: 'explore/split-view-open',
        name: 'Open split view',
        keywords: 'split',
        perform: () => {
          dispatch((0,main/* splitOpen */.bW)());
        },
        section: exploreSection
      });
    }

    setActions(actionsArr);
  }, [exploreIdLeft, exploreIdRight, splitted, query, dispatch]);
  (0,lib.useRegisterActions)(!query ? [] : actions, [actions, query]);
  return null;
};
// EXTERNAL MODULE: ./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/store.ts
var store = __webpack_require__("./public/app/core/store.ts");
// EXTERNAL MODULE: ./public/app/core/utils/explore.ts
var utils_explore = __webpack_require__("./public/app/core/utils/explore.ts");
// EXTERNAL MODULE: ./public/app/features/profile/state/selectors.ts
var state_selectors = __webpack_require__("./public/app/features/profile/state/selectors.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/redux-npm-4.1.2-04cdbe7a08-6a839cee5b.zip/node_modules/redux/es/redux.js
var redux = __webpack_require__("./.yarn/cache/redux-npm-4.1.2-04cdbe7a08-6a839cee5b.zip/node_modules/redux/es/redux.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/Table/types.ts
var types = __webpack_require__("./packages/grafana-ui/src/components/Table/types.ts");
// EXTERNAL MODULE: ./public/app/core/app_events.ts
var app_events = __webpack_require__("./public/app/core/app_events.ts");
// EXTERNAL MODULE: ./public/app/plugins/panel/nodeGraph/utils.ts
var utils = __webpack_require__("./public/app/plugins/panel/nodeGraph/utils.ts");
// EXTERNAL MODULE: ./public/app/types/events.ts
var events = __webpack_require__("./public/app/types/events.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
// EXTERNAL MODULE: ./packages/grafana-schema/src/index.ts + 1 modules
var grafana_schema_src = __webpack_require__("./packages/grafana-schema/src/index.ts");
// EXTERNAL MODULE: ./public/app/plugins/panel/timeseries/config.ts + 2 modules
var config = __webpack_require__("./public/app/plugins/panel/timeseries/config.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts
var SeriesVisibilityConfigFactory = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
// EXTERNAL MODULE: ./.yarn/cache/immer-npm-9.0.12-e8cd7358fa-bcbec6d76d.zip/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__("./.yarn/cache/immer-npm-9.0.12-e8cd7358fa-bcbec6d76d.zip/node_modules/immer/dist/immer.esm.js");
;// CONCATENATED MODULE: ./public/app/features/explore/exploreGraphStyleUtils.ts


function applyGraphStyle(config, style) {
  return (0,immer_esm/* default */.ZP)(config, draft => {
    if (draft.defaults.custom === undefined) {
      draft.defaults.custom = {};
    }

    const {
      custom
    } = draft.defaults;

    if (custom.stacking === undefined) {
      custom.stacking = {
        group: 'A'
      };
    }

    switch (style) {
      case 'lines':
        custom.drawStyle = grafana_schema_src/* GraphDrawStyle.Line */.l8.Line;
        custom.stacking.mode = grafana_schema_src/* StackingMode.None */.o0.None;
        custom.fillOpacity = 0;
        break;

      case 'bars':
        custom.drawStyle = grafana_schema_src/* GraphDrawStyle.Bars */.l8.Bars;
        custom.stacking.mode = grafana_schema_src/* StackingMode.None */.o0.None;
        custom.fillOpacity = 100;
        break;

      case 'points':
        custom.drawStyle = grafana_schema_src/* GraphDrawStyle.Points */.l8.Points;
        custom.stacking.mode = grafana_schema_src/* StackingMode.None */.o0.None;
        custom.fillOpacity = 0;
        break;

      case 'stacked_lines':
        custom.drawStyle = grafana_schema_src/* GraphDrawStyle.Line */.l8.Line;
        custom.stacking.mode = grafana_schema_src/* StackingMode.Normal */.o0.Normal;
        custom.fillOpacity = 100;
        break;

      case 'stacked_bars':
        custom.drawStyle = grafana_schema_src/* GraphDrawStyle.Bars */.l8.Bars;
        custom.stacking.mode = grafana_schema_src/* StackingMode.Normal */.o0.Normal;
        custom.fillOpacity = 100;
        break;

      default:
        {
          // should never happen
          // NOTE: casting to `never` will cause typescript
          // to verify that the switch statement checks every possible
          // enum-value
          const invalidValue = style;
          throw new Error(`Invalid graph-style: ${invalidValue}`);
        }
    }
  });
}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/explore/ExploreGraph.tsx














const MAX_NUMBER_OF_TIME_SERIES = 20;
function ExploreGraph(_ref) {
  let {
    data,
    height,
    width,
    timeZone,
    absoluteRange,
    onChangeTime,
    loadingState,
    annotations,
    onHiddenSeriesChanged,
    splitOpenFn,
    graphStyle,
    tooltipDisplayMode = grafana_schema_src/* TooltipDisplayMode.Single */.f3.Single
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const [showAllTimeSeries, setShowAllTimeSeries] = (0,react.useState)(false);
  const [baseStructureRev, setBaseStructureRev] = (0,react.useState)(1);
  const previousData = (0,usePrevious/* default */.Z)(data);
  const structureChangesRef = (0,react.useRef)(0);

  if (data && previousData && !(0,grafana_data_src.compareArrayValues)(previousData, data, grafana_data_src.compareDataFrameStructures)) {
    structureChangesRef.current++;
  }

  const structureRev = baseStructureRev + structureChangesRef.current;
  const [fieldConfig, setFieldConfig] = (0,react.useState)({
    defaults: {
      color: {
        mode: grafana_data_src.FieldColorModeId.PaletteClassic
      },
      custom: {
        drawStyle: grafana_schema_src/* GraphDrawStyle.Line */.l8.Line,
        fillOpacity: 0,
        pointSize: 5
      }
    },
    overrides: []
  });
  const style = (0,grafana_ui_src.useStyles2)(getStyles);
  const timeRange = {
    from: (0,grafana_data_src.dateTime)(absoluteRange.from),
    to: (0,grafana_data_src.dateTime)(absoluteRange.to),
    raw: {
      from: (0,grafana_data_src.dateTime)(absoluteRange.from),
      to: (0,grafana_data_src.dateTime)(absoluteRange.to)
    }
  };
  const dataWithConfig = (0,react.useMemo)(() => {
    const registry = (0,grafana_data_src.createFieldConfigRegistry)((0,config/* getGraphFieldConfig */.F)(config/* defaultGraphConfig */.r), 'Explore');
    const styledFieldConfig = applyGraphStyle(fieldConfig, graphStyle);
    return (0,grafana_data_src.applyFieldOverrides)({
      fieldConfig: styledFieldConfig,
      data,
      timeZone,
      replaceVariables: value => value,
      // We don't need proper replace here as it is only used in getLinks and we use getFieldLinks
      theme,
      fieldConfigRegistry: registry
    });
  }, [fieldConfig, graphStyle, data, timeZone, theme]);
  (0,react.useEffect)(() => {
    if (onHiddenSeriesChanged) {
      const hiddenFrames = [];
      dataWithConfig.forEach(frame => {
        const allFieldsHidden = frame.fields.map(field => {
          var _field$config, _field$config$custom, _field$config$custom$;

          return (_field$config = field.config) === null || _field$config === void 0 ? void 0 : (_field$config$custom = _field$config.custom) === null || _field$config$custom === void 0 ? void 0 : (_field$config$custom$ = _field$config$custom.hideFrom) === null || _field$config$custom$ === void 0 ? void 0 : _field$config$custom$.viz;
        }).every(lodash.identity);

        if (allFieldsHidden) {
          hiddenFrames.push((0,grafana_data_src.getFrameDisplayName)(frame));
        }
      });
      onHiddenSeriesChanged(hiddenFrames);
    }
  }, [dataWithConfig, onHiddenSeriesChanged]);
  const seriesToShow = showAllTimeSeries ? dataWithConfig : dataWithConfig.slice(0, MAX_NUMBER_OF_TIME_SERIES);
  const panelContext = {
    eventBus: app_events/* default */.Z,
    onSplitOpen: splitOpenFn,

    onToggleSeriesVisibility(label, mode) {
      setBaseStructureRev(r => r + 1);
      setFieldConfig((0,SeriesVisibilityConfigFactory/* seriesVisibilityConfigFactory */.N)(label, mode, fieldConfig, data));
    }

  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.PanelContextProvider, {
    value: panelContext,
    children: [dataWithConfig.length > MAX_NUMBER_OF_TIME_SERIES && !showAllTimeSeries && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)([style.timeSeriesDisclaimer]),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        className: style.disclaimerIcon,
        name: "exclamation-triangle"
      }), `Showing only ${MAX_NUMBER_OF_TIME_SERIES} time series. `, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: (0,emotion_css_esm.cx)([style.showAllTimeSeries]),
        onClick: () => {
          structureChangesRef.current++;
          setShowAllTimeSeries(true);
        },
        children: `Show all ${dataWithConfig.length}`
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.PanelRenderer, {
      data: {
        series: seriesToShow,
        timeRange,
        structureRev,
        state: loadingState,
        annotations
      },
      pluginId: "timeseries",
      title: "",
      width: width,
      height: height,
      onChangeTimeRange: onChangeTime,
      timeZone: timeZone,
      options: {
        tooltip: {
          mode: tooltipDisplayMode,
          sort: grafana_schema_src/* SortOrder.None */.As.None
        },
        legend: {
          displayMode: grafana_schema_src/* LegendDisplayMode.List */.jK.List,
          placement: 'bottom',
          calcs: []
        }
      }
    })]
  });
}

const getStyles = theme => ({
  timeSeriesDisclaimer: emotion_css_esm.css`
    label: time-series-disclaimer;
    width: 300px;
    margin: ${theme.spacing(1)} auto;
    padding: 10px 0;
    border-radius: ${theme.spacing(2)};
    text-align: center;
    background-color: ${theme.colors.background.primary};
  `,
  disclaimerIcon: emotion_css_esm.css`
    label: disclaimer-icon;
    color: ${theme.colors.warning.main};
    margin-right: ${theme.spacing(0.5)};
  `,
  showAllTimeSeries: emotion_css_esm.css`
    label: show-all-time-series;
    cursor: pointer;
    color: ${theme.colors.text.link};
  `
});
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var app_types = __webpack_require__("./public/app/types/index.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/ExploreGraphLabel.tsx






const ALL_GRAPH_STYLE_OPTIONS = app_types/* EXPLORE_GRAPH_STYLES.map */.f0.map(style => ({
  value: style,
  // capital-case it and switch `_` to ` `
  label: style[0].toUpperCase() + style.slice(1).replace(/_/, ' ')
}));
const spacing = (0,emotion_css_esm.css)({
  display: 'flex',
  justifyContent: 'space-between'
});
function ExploreGraphLabel(props) {
  const {
    graphStyle,
    onChangeGraphStyle
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: spacing,
    children: ["Graph", /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
      size: "sm",
      options: ALL_GRAPH_STYLE_OPTIONS,
      value: graphStyle,
      onChange: onChangeGraphStyle
    })]
  });
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/re-resizable-virtual-820bbedce8/0/cache/re-resizable-npm-6.9.5-33d584b1c1-cd82a1baff.zip/node_modules/re-resizable/lib/resizer.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var styles = {
    top: {
        width: '100%',
        height: '10px',
        top: '-5px',
        left: '0px',
        cursor: 'row-resize',
    },
    right: {
        width: '10px',
        height: '100%',
        top: '0px',
        right: '-5px',
        cursor: 'col-resize',
    },
    bottom: {
        width: '100%',
        height: '10px',
        bottom: '-5px',
        left: '0px',
        cursor: 'row-resize',
    },
    left: {
        width: '10px',
        height: '100%',
        top: '0px',
        left: '-5px',
        cursor: 'col-resize',
    },
    topRight: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        cursor: 'ne-resize',
    },
    bottomRight: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: '-10px',
        bottom: '-10px',
        cursor: 'se-resize',
    },
    bottomLeft: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        left: '-10px',
        bottom: '-10px',
        cursor: 'sw-resize',
    },
    topLeft: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        left: '-10px',
        top: '-10px',
        cursor: 'nw-resize',
    },
};
var Resizer = /** @class */ (function (_super) {
    __extends(Resizer, _super);
    function Resizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMouseDown = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        _this.onTouchStart = function (e) {
            _this.props.onResizeStart(e, _this.props.direction);
        };
        return _this;
    }
    Resizer.prototype.render = function () {
        return (react.createElement("div", { className: this.props.className || '', style: __assign(__assign({ position: 'absolute', userSelect: 'none' }, styles[this.props.direction]), (this.props.replaceStyles || {})), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children));
    };
    return Resizer;
}(react.PureComponent));


// EXTERNAL MODULE: ./.yarn/cache/fast-memoize-npm-2.5.2-f42a7c6940-79fa759719.zip/node_modules/fast-memoize/src/index.js
var fast_memoize_src = __webpack_require__("./.yarn/cache/fast-memoize-npm-2.5.2-f42a7c6940-79fa759719.zip/node_modules/fast-memoize/src/index.js");
var src_default = /*#__PURE__*/__webpack_require__.n(fast_memoize_src);
;// CONCATENATED MODULE: ./.yarn/__virtual__/re-resizable-virtual-820bbedce8/0/cache/re-resizable-npm-6.9.5-33d584b1c1-cd82a1baff.zip/node_modules/re-resizable/lib/index.js
var lib_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lib_assign = (undefined && undefined.__assign) || function () {
    lib_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return lib_assign.apply(this, arguments);
};



var DEFAULT_SIZE = {
    width: 'auto',
    height: 'auto',
};
var clamp = src_default()(function (n, min, max) { return Math.max(Math.min(n, max), min); });
var snap = src_default()(function (n, size) { return Math.round(n / size) * size; });
var hasDirection = src_default()(function (dir, target) {
    return new RegExp(dir, 'i').test(target);
});
// INFO: In case of window is a Proxy and does not porxy Events correctly, use isTouchEvent & isMouseEvent to distinguish event type instead of `instanceof`.
var isTouchEvent = function (event) {
    return Boolean(event.touches && event.touches.length);
};
var isMouseEvent = function (event) {
    return Boolean((event.clientX || event.clientX === 0) &&
        (event.clientY || event.clientY === 0));
};
var findClosestSnap = src_default()(function (n, snapArray, snapGap) {
    if (snapGap === void 0) { snapGap = 0; }
    var closestGapIndex = snapArray.reduce(function (prev, curr, index) { return (Math.abs(curr - n) < Math.abs(snapArray[prev] - n) ? index : prev); }, 0);
    var gap = Math.abs(snapArray[closestGapIndex] - n);
    return snapGap === 0 || gap < snapGap ? snapArray[closestGapIndex] : n;
});
var endsWith = src_default()(function (str, searchStr) {
    return str.substr(str.length - searchStr.length, searchStr.length) === searchStr;
});
var getStringSize = src_default()(function (n) {
    n = n.toString();
    if (n === 'auto') {
        return n;
    }
    if (endsWith(n, 'px')) {
        return n;
    }
    if (endsWith(n, '%')) {
        return n;
    }
    if (endsWith(n, 'vh')) {
        return n;
    }
    if (endsWith(n, 'vw')) {
        return n;
    }
    if (endsWith(n, 'vmax')) {
        return n;
    }
    if (endsWith(n, 'vmin')) {
        return n;
    }
    return n + "px";
});
var getPixelSize = function (size, parentSize, innerWidth, innerHeight) {
    if (size && typeof size === 'string') {
        if (endsWith(size, 'px')) {
            return Number(size.replace('px', ''));
        }
        if (endsWith(size, '%')) {
            var ratio = Number(size.replace('%', '')) / 100;
            return parentSize * ratio;
        }
        if (endsWith(size, 'vw')) {
            var ratio = Number(size.replace('vw', '')) / 100;
            return innerWidth * ratio;
        }
        if (endsWith(size, 'vh')) {
            var ratio = Number(size.replace('vh', '')) / 100;
            return innerHeight * ratio;
        }
    }
    return size;
};
var calculateNewMax = src_default()(function (parentSize, innerWidth, innerHeight, maxWidth, maxHeight, minWidth, minHeight) {
    maxWidth = getPixelSize(maxWidth, parentSize.width, innerWidth, innerHeight);
    maxHeight = getPixelSize(maxHeight, parentSize.height, innerWidth, innerHeight);
    minWidth = getPixelSize(minWidth, parentSize.width, innerWidth, innerHeight);
    minHeight = getPixelSize(minHeight, parentSize.height, innerWidth, innerHeight);
    return {
        maxWidth: typeof maxWidth === 'undefined' ? undefined : Number(maxWidth),
        maxHeight: typeof maxHeight === 'undefined' ? undefined : Number(maxHeight),
        minWidth: typeof minWidth === 'undefined' ? undefined : Number(minWidth),
        minHeight: typeof minHeight === 'undefined' ? undefined : Number(minHeight),
    };
});
var definedProps = [
    'as',
    'style',
    'className',
    'grid',
    'snap',
    'bounds',
    'boundsByDirection',
    'size',
    'defaultSize',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'lockAspectRatio',
    'lockAspectRatioExtraWidth',
    'lockAspectRatioExtraHeight',
    'enable',
    'handleStyles',
    'handleClasses',
    'handleWrapperStyle',
    'handleWrapperClass',
    'children',
    'onResizeStart',
    'onResize',
    'onResizeStop',
    'handleComponent',
    'scale',
    'resizeRatio',
    'snapGap',
];
// HACK: This class is used to calculate % size.
var baseClassName = '__resizable_base__';
var Resizable = /** @class */ (function (_super) {
    lib_extends(Resizable, _super);
    function Resizable(props) {
        var _this = _super.call(this, props) || this;
        _this.ratio = 1;
        _this.resizable = null;
        // For parent boundary
        _this.parentLeft = 0;
        _this.parentTop = 0;
        // For boundary
        _this.resizableLeft = 0;
        _this.resizableRight = 0;
        _this.resizableTop = 0;
        _this.resizableBottom = 0;
        // For target boundary
        _this.targetLeft = 0;
        _this.targetTop = 0;
        _this.appendBase = function () {
            if (!_this.resizable || !_this.window) {
                return null;
            }
            var parent = _this.parentNode;
            if (!parent) {
                return null;
            }
            var element = _this.window.document.createElement('div');
            element.style.width = '100%';
            element.style.height = '100%';
            element.style.position = 'absolute';
            element.style.transform = 'scale(0, 0)';
            element.style.left = '0';
            element.style.flex = '0 0 100%';
            if (element.classList) {
                element.classList.add(baseClassName);
            }
            else {
                element.className += baseClassName;
            }
            parent.appendChild(element);
            return element;
        };
        _this.removeBase = function (base) {
            var parent = _this.parentNode;
            if (!parent) {
                return;
            }
            parent.removeChild(base);
        };
        _this.ref = function (c) {
            if (c) {
                _this.resizable = c;
            }
        };
        _this.state = {
            isResizing: false,
            width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined'
                ? 'auto'
                : _this.propsSize && _this.propsSize.width,
            height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined'
                ? 'auto'
                : _this.propsSize && _this.propsSize.height,
            direction: 'right',
            original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
            backgroundStyle: {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                cursor: 'auto',
                opacity: 0,
                position: 'fixed',
                zIndex: 9999,
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
            },
            flexBasis: undefined,
        };
        _this.onResizeStart = _this.onResizeStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Object.defineProperty(Resizable.prototype, "parentNode", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            return this.resizable.parentNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "window", {
        get: function () {
            if (!this.resizable) {
                return null;
            }
            if (!this.resizable.ownerDocument) {
                return null;
            }
            return this.resizable.ownerDocument.defaultView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "propsSize", {
        get: function () {
            return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "size", {
        get: function () {
            var width = 0;
            var height = 0;
            if (this.resizable && this.window) {
                var orgWidth = this.resizable.offsetWidth;
                var orgHeight = this.resizable.offsetHeight;
                // HACK: Set position `relative` to get parent size.
                //       This is because when re-resizable set `absolute`, I can not get base width correctly.
                var orgPosition = this.resizable.style.position;
                if (orgPosition !== 'relative') {
                    this.resizable.style.position = 'relative';
                }
                // INFO: Use original width or height if set auto.
                width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
                height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
                // Restore original position
                this.resizable.style.position = orgPosition;
            }
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Resizable.prototype, "sizeStyle", {
        get: function () {
            var _this = this;
            var size = this.props.size;
            var getSize = function (key) {
                if (typeof _this.state[key] === 'undefined' || _this.state[key] === 'auto') {
                    return 'auto';
                }
                if (_this.propsSize && _this.propsSize[key] && endsWith(_this.propsSize[key].toString(), '%')) {
                    if (endsWith(_this.state[key].toString(), '%')) {
                        return _this.state[key].toString();
                    }
                    var parentSize = _this.getParentSize();
                    var value = Number(_this.state[key].toString().replace('px', ''));
                    var percent = (value / parentSize[key]) * 100;
                    return percent + "%";
                }
                return getStringSize(_this.state[key]);
            };
            var width = size && typeof size.width !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.width)
                : getSize('width');
            var height = size && typeof size.height !== 'undefined' && !this.state.isResizing
                ? getStringSize(size.height)
                : getSize('height');
            return { width: width, height: height };
        },
        enumerable: false,
        configurable: true
    });
    Resizable.prototype.getParentSize = function () {
        if (!this.parentNode) {
            if (!this.window) {
                return { width: 0, height: 0 };
            }
            return { width: this.window.innerWidth, height: this.window.innerHeight };
        }
        var base = this.appendBase();
        if (!base) {
            return { width: 0, height: 0 };
        }
        // INFO: To calculate parent width with flex layout
        var wrapChanged = false;
        var wrap = this.parentNode.style.flexWrap;
        if (wrap !== 'wrap') {
            wrapChanged = true;
            this.parentNode.style.flexWrap = 'wrap';
            // HACK: Use relative to get parent padding size
        }
        base.style.position = 'relative';
        base.style.minWidth = '100%';
        base.style.minHeight = '100%';
        var size = {
            width: base.offsetWidth,
            height: base.offsetHeight,
        };
        if (wrapChanged) {
            this.parentNode.style.flexWrap = wrap;
        }
        this.removeBase(base);
        return size;
    };
    Resizable.prototype.bindEvents = function () {
        if (this.window) {
            this.window.addEventListener('mouseup', this.onMouseUp);
            this.window.addEventListener('mousemove', this.onMouseMove);
            this.window.addEventListener('mouseleave', this.onMouseUp);
            this.window.addEventListener('touchmove', this.onMouseMove, {
                capture: true,
                passive: false,
            });
            this.window.addEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.unbindEvents = function () {
        if (this.window) {
            this.window.removeEventListener('mouseup', this.onMouseUp);
            this.window.removeEventListener('mousemove', this.onMouseMove);
            this.window.removeEventListener('mouseleave', this.onMouseUp);
            this.window.removeEventListener('touchmove', this.onMouseMove, true);
            this.window.removeEventListener('touchend', this.onMouseUp);
        }
    };
    Resizable.prototype.componentDidMount = function () {
        if (!this.resizable || !this.window) {
            return;
        }
        var computedStyle = this.window.getComputedStyle(this.resizable);
        this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: computedStyle.flexBasis !== 'auto' ? computedStyle.flexBasis : undefined,
        });
    };
    Resizable.prototype.componentWillUnmount = function () {
        if (this.window) {
            this.unbindEvents();
        }
    };
    Resizable.prototype.createSizeForCssProperty = function (newSize, kind) {
        var propsSize = this.propsSize && this.propsSize[kind];
        return this.state[kind] === 'auto' &&
            this.state.original[kind] === newSize &&
            (typeof propsSize === 'undefined' || propsSize === 'auto')
            ? 'auto'
            : newSize;
    };
    Resizable.prototype.calculateNewMaxFromBoundary = function (maxWidth, maxHeight) {
        var boundsByDirection = this.props.boundsByDirection;
        var direction = this.state.direction;
        var widthByDirection = boundsByDirection && hasDirection('left', direction);
        var heightByDirection = boundsByDirection && hasDirection('top', direction);
        var boundWidth;
        var boundHeight;
        if (this.props.bounds === 'parent') {
            var parent_1 = this.parentNode;
            if (parent_1) {
                boundWidth = widthByDirection
                    ? this.resizableRight - this.parentLeft
                    : parent_1.offsetWidth + (this.parentLeft - this.resizableLeft);
                boundHeight = heightByDirection
                    ? this.resizableBottom - this.parentTop
                    : parent_1.offsetHeight + (this.parentTop - this.resizableTop);
            }
        }
        else if (this.props.bounds === 'window') {
            if (this.window) {
                boundWidth = widthByDirection ? this.resizableRight : this.window.innerWidth - this.resizableLeft;
                boundHeight = heightByDirection ? this.resizableBottom : this.window.innerHeight - this.resizableTop;
            }
        }
        else if (this.props.bounds) {
            boundWidth = widthByDirection
                ? this.resizableRight - this.targetLeft
                : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft);
            boundHeight = heightByDirection
                ? this.resizableBottom - this.targetTop
                : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop);
        }
        if (boundWidth && Number.isFinite(boundWidth)) {
            maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
        }
        if (boundHeight && Number.isFinite(boundHeight)) {
            maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
        return { maxWidth: maxWidth, maxHeight: maxHeight };
    };
    Resizable.prototype.calculateNewSizeFromDirection = function (clientX, clientY) {
        var scale = this.props.scale || 1;
        var resizeRatio = this.props.resizeRatio || 1;
        var _a = this.state, direction = _a.direction, original = _a.original;
        var _b = this.props, lockAspectRatio = _b.lockAspectRatio, lockAspectRatioExtraHeight = _b.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _b.lockAspectRatioExtraWidth;
        var newWidth = original.width;
        var newHeight = original.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (hasDirection('right', direction)) {
            newWidth = original.width + ((clientX - original.x) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('left', direction)) {
            newWidth = original.width - ((clientX - original.x) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newHeight = (newWidth - extraWidth) / this.ratio + extraHeight;
            }
        }
        if (hasDirection('bottom', direction)) {
            newHeight = original.height + ((clientY - original.y) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        if (hasDirection('top', direction)) {
            newHeight = original.height - ((clientY - original.y) * resizeRatio) / scale;
            if (lockAspectRatio) {
                newWidth = (newHeight - extraHeight) * this.ratio + extraWidth;
            }
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.calculateNewSizeFromAspectRatio = function (newWidth, newHeight, max, min) {
        var _a = this.props, lockAspectRatio = _a.lockAspectRatio, lockAspectRatioExtraHeight = _a.lockAspectRatioExtraHeight, lockAspectRatioExtraWidth = _a.lockAspectRatioExtraWidth;
        var computedMinWidth = typeof min.width === 'undefined' ? 10 : min.width;
        var computedMaxWidth = typeof max.width === 'undefined' || max.width < 0 ? newWidth : max.width;
        var computedMinHeight = typeof min.height === 'undefined' ? 10 : min.height;
        var computedMaxHeight = typeof max.height === 'undefined' || max.height < 0 ? newHeight : max.height;
        var extraHeight = lockAspectRatioExtraHeight || 0;
        var extraWidth = lockAspectRatioExtraWidth || 0;
        if (lockAspectRatio) {
            var extraMinWidth = (computedMinHeight - extraHeight) * this.ratio + extraWidth;
            var extraMaxWidth = (computedMaxHeight - extraHeight) * this.ratio + extraWidth;
            var extraMinHeight = (computedMinWidth - extraWidth) / this.ratio + extraHeight;
            var extraMaxHeight = (computedMaxWidth - extraWidth) / this.ratio + extraHeight;
            var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
            var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
            var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
            var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
            newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
            newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
        }
        else {
            newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
            newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
        }
        return { newWidth: newWidth, newHeight: newHeight };
    };
    Resizable.prototype.setBoundingClientRect = function () {
        // For parent boundary
        if (this.props.bounds === 'parent') {
            var parent_2 = this.parentNode;
            if (parent_2) {
                var parentRect = parent_2.getBoundingClientRect();
                this.parentLeft = parentRect.left;
                this.parentTop = parentRect.top;
            }
        }
        // For target(html element) boundary
        if (this.props.bounds && typeof this.props.bounds !== 'string') {
            var targetRect = this.props.bounds.getBoundingClientRect();
            this.targetLeft = targetRect.left;
            this.targetTop = targetRect.top;
        }
        // For boundary
        if (this.resizable) {
            var _a = this.resizable.getBoundingClientRect(), left = _a.left, top_1 = _a.top, right = _a.right, bottom = _a.bottom;
            this.resizableLeft = left;
            this.resizableRight = right;
            this.resizableTop = top_1;
            this.resizableBottom = bottom;
        }
    };
    Resizable.prototype.onResizeStart = function (event, direction) {
        if (!this.resizable || !this.window) {
            return;
        }
        var clientX = 0;
        var clientY = 0;
        if (event.nativeEvent && isMouseEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.clientX;
            clientY = event.nativeEvent.clientY;
        }
        else if (event.nativeEvent && isTouchEvent(event.nativeEvent)) {
            clientX = event.nativeEvent.touches[0].clientX;
            clientY = event.nativeEvent.touches[0].clientY;
        }
        if (this.props.onResizeStart) {
            if (this.resizable) {
                var startResize = this.props.onResizeStart(event, direction, this.resizable);
                if (startResize === false) {
                    return;
                }
            }
        }
        // Fix #168
        if (this.props.size) {
            if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
                this.setState({ height: this.props.size.height });
            }
            if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
                this.setState({ width: this.props.size.width });
            }
        }
        // For lockAspectRatio case
        this.ratio =
            typeof this.props.lockAspectRatio === 'number' ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var flexBasis;
        var computedStyle = this.window.getComputedStyle(this.resizable);
        if (computedStyle.flexBasis !== 'auto') {
            var parent_3 = this.parentNode;
            if (parent_3) {
                var dir = this.window.getComputedStyle(parent_3).flexDirection;
                this.flexDir = dir.startsWith('row') ? 'row' : 'column';
                flexBasis = computedStyle.flexBasis;
            }
        }
        // For boundary
        this.setBoundingClientRect();
        this.bindEvents();
        var state = {
            original: {
                x: clientX,
                y: clientY,
                width: this.size.width,
                height: this.size.height,
            },
            isResizing: true,
            backgroundStyle: lib_assign(lib_assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(event.target).cursor || 'auto' }),
            direction: direction,
            flexBasis: flexBasis,
        };
        this.setState(state);
    };
    Resizable.prototype.onMouseMove = function (event) {
        if (!this.state.isResizing || !this.resizable || !this.window) {
            return;
        }
        if (this.window.TouchEvent && isTouchEvent(event)) {
            try {
                event.preventDefault();
                event.stopPropagation();
            }
            catch (e) {
                // Ignore on fail
            }
        }
        var _a = this.props, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, minWidth = _a.minWidth, minHeight = _a.minHeight;
        var clientX = isTouchEvent(event) ? event.touches[0].clientX : event.clientX;
        var clientY = isTouchEvent(event) ? event.touches[0].clientY : event.clientY;
        var _b = this.state, direction = _b.direction, original = _b.original, width = _b.width, height = _b.height;
        var parentSize = this.getParentSize();
        var max = calculateNewMax(parentSize, this.window.innerWidth, this.window.innerHeight, maxWidth, maxHeight, minWidth, minHeight);
        maxWidth = max.maxWidth;
        maxHeight = max.maxHeight;
        minWidth = max.minWidth;
        minHeight = max.minHeight;
        // Calculate new size
        var _c = this.calculateNewSizeFromDirection(clientX, clientY), newHeight = _c.newHeight, newWidth = _c.newWidth;
        // Calculate max size from boundary settings
        var boundaryMax = this.calculateNewMaxFromBoundary(maxWidth, maxHeight);
        if (this.props.snap && this.props.snap.x) {
            newWidth = findClosestSnap(newWidth, this.props.snap.x, this.props.snapGap);
        }
        if (this.props.snap && this.props.snap.y) {
            newHeight = findClosestSnap(newHeight, this.props.snap.y, this.props.snapGap);
        }
        // Calculate new size from aspect ratio
        var newSize = this.calculateNewSizeFromAspectRatio(newWidth, newHeight, { width: boundaryMax.maxWidth, height: boundaryMax.maxHeight }, { width: minWidth, height: minHeight });
        newWidth = newSize.newWidth;
        newHeight = newSize.newHeight;
        if (this.props.grid) {
            var newGridWidth = snap(newWidth, this.props.grid[0]);
            var newGridHeight = snap(newHeight, this.props.grid[1]);
            var gap = this.props.snapGap || 0;
            newWidth = gap === 0 || Math.abs(newGridWidth - newWidth) <= gap ? newGridWidth : newWidth;
            newHeight = gap === 0 || Math.abs(newGridHeight - newHeight) <= gap ? newGridHeight : newHeight;
        }
        var delta = {
            width: newWidth - original.width,
            height: newHeight - original.height,
        };
        if (width && typeof width === 'string') {
            if (endsWith(width, '%')) {
                var percent = (newWidth / parentSize.width) * 100;
                newWidth = percent + "%";
            }
            else if (endsWith(width, 'vw')) {
                var vw = (newWidth / this.window.innerWidth) * 100;
                newWidth = vw + "vw";
            }
            else if (endsWith(width, 'vh')) {
                var vh = (newWidth / this.window.innerHeight) * 100;
                newWidth = vh + "vh";
            }
        }
        if (height && typeof height === 'string') {
            if (endsWith(height, '%')) {
                var percent = (newHeight / parentSize.height) * 100;
                newHeight = percent + "%";
            }
            else if (endsWith(height, 'vw')) {
                var vw = (newHeight / this.window.innerWidth) * 100;
                newHeight = vw + "vw";
            }
            else if (endsWith(height, 'vh')) {
                var vh = (newHeight / this.window.innerHeight) * 100;
                newHeight = vh + "vh";
            }
        }
        var newState = {
            width: this.createSizeForCssProperty(newWidth, 'width'),
            height: this.createSizeForCssProperty(newHeight, 'height'),
        };
        if (this.flexDir === 'row') {
            newState.flexBasis = newState.width;
        }
        else if (this.flexDir === 'column') {
            newState.flexBasis = newState.height;
        }
        this.setState(newState);
        if (this.props.onResize) {
            this.props.onResize(event, direction, this.resizable, delta);
        }
    };
    Resizable.prototype.onMouseUp = function (event) {
        var _a = this.state, isResizing = _a.isResizing, direction = _a.direction, original = _a.original;
        if (!isResizing || !this.resizable) {
            return;
        }
        var delta = {
            width: this.size.width - original.width,
            height: this.size.height - original.height,
        };
        if (this.props.onResizeStop) {
            this.props.onResizeStop(event, direction, this.resizable, delta);
        }
        if (this.props.size) {
            this.setState(this.props.size);
        }
        this.unbindEvents();
        this.setState({
            isResizing: false,
            backgroundStyle: lib_assign(lib_assign({}, this.state.backgroundStyle), { cursor: 'auto' }),
        });
    };
    Resizable.prototype.updateSize = function (size) {
        this.setState({ width: size.width, height: size.height });
    };
    Resizable.prototype.renderResizer = function () {
        var _this = this;
        var _a = this.props, enable = _a.enable, handleStyles = _a.handleStyles, handleClasses = _a.handleClasses, handleWrapperStyle = _a.handleWrapperStyle, handleWrapperClass = _a.handleWrapperClass, handleComponent = _a.handleComponent;
        if (!enable) {
            return null;
        }
        var resizers = Object.keys(enable).map(function (dir) {
            if (enable[dir] !== false) {
                return (react.createElement(Resizer, { key: dir, direction: dir, onResizeStart: _this.onResizeStart, replaceStyles: handleStyles && handleStyles[dir], className: handleClasses && handleClasses[dir] }, handleComponent && handleComponent[dir] ? handleComponent[dir] : null));
            }
            return null;
        });
        // #93 Wrap the resize box in span (will not break 100% width/height)
        return (react.createElement("div", { className: handleWrapperClass, style: handleWrapperStyle }, resizers));
    };
    Resizable.prototype.render = function () {
        var _this = this;
        var extendsProps = Object.keys(this.props).reduce(function (acc, key) {
            if (definedProps.indexOf(key) !== -1) {
                return acc;
            }
            acc[key] = _this.props[key];
            return acc;
        }, {});
        var style = lib_assign(lib_assign(lib_assign({ position: 'relative', userSelect: this.state.isResizing ? 'none' : 'auto' }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: 'border-box', flexShrink: 0 });
        if (this.state.flexBasis) {
            style.flexBasis = this.state.flexBasis;
        }
        var Wrapper = this.props.as || 'div';
        return (react.createElement(Wrapper, lib_assign({ ref: this.ref, style: style, className: this.props.className }, extendsProps),
            this.state.isResizing && react.createElement("div", { style: this.state.backgroundStyle }),
            this.props.children,
            this.renderResizer()));
    };
    Resizable.defaultProps = {
        as: 'div',
        onResizeStart: function () { },
        onResize: function () { },
        onResizeStop: function () { },
        enable: {
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
        },
        style: {},
        grid: [1, 1],
        lockAspectRatio: false,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0,
    };
    return Resizable;
}(react.PureComponent));


;// CONCATENATED MODULE: ./public/app/features/explore/ExploreDrawer.tsx
// Libraries


 // Services & Utils

 // Types



const drawerSlide = theme => emotion_css_esm.keyframes`
  0% {
    transform: translateY(${theme.components.horizontalDrawer.defaultHeight}px);
  }

  100% {
    transform: translateY(0px);
  }
`;

const ExploreDrawer_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    container: emotion_css_esm.css`
      position: fixed !important;
      bottom: 0;
      background: ${theme.colors.background.primary};
      border-top: 1px solid ${theme.colors.border.weak};
      margin: ${theme.spacing(0, -2, 0, -2)};
      box-shadow: ${theme.shadows.z3};
      z-index: ${theme.zIndex.sidemenu};
    `,
    drawerActive: emotion_css_esm.css`
      opacity: 1;
      animation: 0.5s ease-out ${drawerSlide(theme)};
    `,
    rzHandle: emotion_css_esm.css`
      background: ${theme.colors.secondary.main};
      transition: 0.3s background ease-in-out;
      position: relative;
      width: 200px !important;
      height: 7px !important;
      left: calc(50% - 100px) !important;
      top: -4px !important;
      cursor: grab;
      border-radius: 4px;
      &:hover {
        background: ${theme.colors.secondary.shade};
      }
    `
  };
});
function ExploreDrawer(props) {
  const {
    width,
    children,
    onResize
  } = props;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = ExploreDrawer_getStyles(theme);
  const drawerWidth = `${width + 31.5}px`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Resizable, {
    className: (0,emotion_css_esm.cx)(styles.container, styles.drawerActive),
    defaultSize: {
      width: drawerWidth,
      height: `${theme.components.horizontalDrawer.defaultHeight}px`
    },
    handleClasses: {
      top: styles.rzHandle
    },
    enable: {
      top: true,
      right: false,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    },
    maxHeight: "100vh",
    maxWidth: drawerWidth,
    minWidth: drawerWidth,
    onResize: onResize,
    children: children
  });
}
// EXTERNAL MODULE: ./public/app/features/inspector/InspectDataTab.tsx + 2 modules
var InspectDataTab = __webpack_require__("./public/app/features/inspector/InspectDataTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/InspectErrorTab.tsx
var InspectErrorTab = __webpack_require__("./public/app/features/inspector/InspectErrorTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/InspectJSONTab.tsx
var InspectJSONTab = __webpack_require__("./public/app/features/inspector/InspectJSONTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/InspectStatsTab.tsx + 1 modules
var InspectStatsTab = __webpack_require__("./public/app/features/inspector/InspectStatsTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/QueryInspector.tsx
var QueryInspector = __webpack_require__("./public/app/features/inspector/QueryInspector.tsx");
;// CONCATENATED MODULE: ./public/app/features/explore/ExploreQueryInspector.tsx











function ExploreQueryInspector(props) {
  var _queryResponse$reques;

  const {
    loading,
    width,
    onClose,
    queryResponse,
    timeZone
  } = props;
  const dataFrames = (queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.series) || [];
  const error = queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.error;
  const statsTab = {
    label: 'Stats',
    value: 'stats',
    icon: 'chart-line',
    content: /*#__PURE__*/(0,jsx_runtime.jsx)(InspectStatsTab/* InspectStatsTab */.f, {
      data: queryResponse,
      timeZone: queryResponse === null || queryResponse === void 0 ? void 0 : (_queryResponse$reques = queryResponse.request) === null || _queryResponse$reques === void 0 ? void 0 : _queryResponse$reques.timezone
    })
  };
  const jsonTab = {
    label: 'JSON',
    value: 'json',
    icon: 'brackets-curly',
    content: /*#__PURE__*/(0,jsx_runtime.jsx)(InspectJSONTab/* InspectJSONTab */.W, {
      data: queryResponse,
      onClose: onClose
    })
  };
  const dataTab = {
    label: 'Data',
    value: 'data',
    icon: 'database',
    content: /*#__PURE__*/(0,jsx_runtime.jsx)(InspectDataTab/* InspectDataTab */.E, {
      data: dataFrames,
      isLoading: loading,
      options: {
        withTransforms: false,
        withFieldConfig: false
      },
      timeZone: timeZone
    })
  };
  const queryTab = {
    label: 'Query',
    value: 'query',
    icon: 'info-circle',
    content: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryInspector/* QueryInspector */.D, {
      data: dataFrames,
      onRefreshQuery: () => props.runQueries(props.exploreId)
    })
  };
  const tabs = [statsTab, queryTab, jsonTab, dataTab];

  if (error) {
    const errorTab = {
      label: 'Error',
      value: 'error',
      icon: 'exclamation-triangle',
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(InspectErrorTab/* InspectErrorTab */.l, {
        error: error
      })
    };
    tabs.push(errorTab);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreDrawer, {
    width: width,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TabbedContainer, {
      tabs: tabs,
      onClose: onClose,
      closeIconTooltip: "Close query inspector"
    })
  });
}

function mapStateToProps(state, _ref) {
  let {
    exploreId
  } = _ref;
  const explore = state.explore;
  const item = explore[exploreId];
  const {
    loading,
    queryResponse
  } = item;
  return {
    loading,
    queryResponse
  };
}

const mapDispatchToProps = {
  runQueries: state_query/* runQueries */.aA
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const explore_ExploreQueryInspector = (connector(ExploreQueryInspector));
// EXTERNAL MODULE: ./public/app/core/utils/shortLinks.ts
var shortLinks = __webpack_require__("./public/app/core/utils/shortLinks.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/DashNav/DashNavButton.tsx
var DashNavButton = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/features/profile/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/profile/state/reducers.ts");
// EXTERNAL MODULE: ./public/app/core/components/TimePicker/TimePickerWithHistory.tsx
var TimePickerWithHistory = __webpack_require__("./public/app/core/components/TimePicker/TimePickerWithHistory.tsx");
// EXTERNAL MODULE: ./public/app/core/utils/timePicker.ts
var timePicker = __webpack_require__("./public/app/core/utils/timePicker.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/TimeSyncButton.tsx




function TimeSyncButton(props) {
  const {
    onClick,
    isSynced
  } = props;

  const syncTimesTooltip = () => {
    const {
      isSynced
    } = props;
    const tooltip = isSynced ? 'Unsync all views' : 'Sync all views to this time range';
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: tooltip
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
    content: syncTimesTooltip,
    placement: "bottom",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      icon: "link",
      variant: isSynced ? 'active' : 'default',
      "aria-label": isSynced ? 'Synced times' : 'Unsynced times',
      onClick: onClick
    })
  });
}
;// CONCATENATED MODULE: ./public/app/features/explore/ExploreTimeControls.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ExploreTimeControls extends react.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onMoveTimePicker", direction => {
      const {
        range,
        onChangeTime,
        timeZone
      } = this.props;
      const {
        from,
        to
      } = (0,timePicker/* getShiftedTimeRange */.e)(direction, range);
      const nextTimeRange = {
        from: (0,grafana_data_src.dateTimeForTimeZone)(timeZone, from),
        to: (0,grafana_data_src.dateTimeForTimeZone)(timeZone, to)
      };
      onChangeTime(nextTimeRange);
    });

    _defineProperty(this, "onMoveForward", () => this.onMoveTimePicker(1));

    _defineProperty(this, "onMoveBack", () => this.onMoveTimePicker(-1));

    _defineProperty(this, "onChangeTimePicker", timeRange => {
      const adjustedFrom = grafana_data_src.dateMath.isMathString(timeRange.raw.from) ? timeRange.raw.from : timeRange.from;
      const adjustedTo = grafana_data_src.dateMath.isMathString(timeRange.raw.to) ? timeRange.raw.to : timeRange.to;
      this.props.onChangeTime({
        from: adjustedFrom,
        to: adjustedTo
      });
    });

    _defineProperty(this, "onZoom", () => {
      const {
        range,
        onChangeTime,
        timeZone
      } = this.props;
      const {
        from,
        to
      } = (0,timePicker/* getZoomedTimeRange */.h)(range, 2);
      const nextTimeRange = {
        from: (0,grafana_data_src.dateTimeForTimeZone)(timeZone, from),
        to: (0,grafana_data_src.dateTimeForTimeZone)(timeZone, to)
      };
      onChangeTime(nextTimeRange);
    });
  }

  render() {
    const {
      range,
      timeZone,
      fiscalYearStartMonth,
      splitted,
      syncedTimes,
      onChangeTimeSync,
      hideText,
      onChangeTimeZone,
      onChangeFiscalYearStartMonth
    } = this.props;
    const timeSyncButton = splitted ? /*#__PURE__*/(0,jsx_runtime.jsx)(TimeSyncButton, {
      onClick: onChangeTimeSync,
      isSynced: syncedTimes
    }) : undefined;
    const timePickerCommonProps = {
      value: range,
      timeZone,
      fiscalYearStartMonth,
      onMoveBackward: this.onMoveBack,
      onMoveForward: this.onMoveForward,
      onZoom: this.onZoom,
      hideText
    };
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TimePickerWithHistory/* TimePickerWithHistory */.a, Object.assign({}, timePickerCommonProps, {
      timeSyncButton: timeSyncButton,
      isSynced: syncedTimes,
      widthOverride: splitted ? window.innerWidth / 2 : undefined,
      onChange: this.onChangeTimePicker,
      onChangeTimeZone: onChangeTimeZone,
      onChangeFiscalYearStartMonth: onChangeFiscalYearStartMonth
    }));
  }

}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js + 3 modules
var CSSTransition = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js");
;// CONCATENATED MODULE: ./public/app/features/explore/LiveTailButton.tsx







function LiveTailButton(props) {
  const {
    start,
    pause,
    resume,
    isLive,
    isPaused,
    stop,
    splitted
  } = props;
  const buttonVariant = isLive && !isPaused ? 'active' : 'default';
  const onClickMain = isLive ? isPaused ? resume : pause : start;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.ButtonGroup, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: isLive && !isPaused ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "Pause the live stream"
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "Start live stream your logs"
      }),
      placement: "bottom",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
        iconOnly: splitted,
        variant: buttonVariant,
        icon: !isLive || isPaused ? 'play' : 'pause',
        onClick: onClickMain,
        children: isLive && isPaused ? 'Paused' : 'Live'
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.Z, {
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 100,
      in: isLive,
      classNames: {
        enter: LiveTailButton_styles.stopButtonEnter,
        enterActive: LiveTailButton_styles.stopButtonEnterActive,
        exit: LiveTailButton_styles.stopButtonExit,
        exitActive: LiveTailButton_styles.stopButtonExitActive
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
        content: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: "Stop and exit the live stream"
        }),
        placement: "bottom",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
          variant: buttonVariant,
          onClick: stop,
          icon: "square-shape"
        })
      })
    })]
  });
}
const LiveTailButton_styles = {
  stopButtonEnter: emotion_css_esm.css`
    label: stopButtonEnter;
    width: 0;
    opacity: 0;
    overflow: hidden;
  `,
  stopButtonEnterActive: emotion_css_esm.css`
    label: stopButtonEnterActive;
    opacity: 1;
    width: 32px;
  `,
  stopButtonExit: emotion_css_esm.css`
    label: stopButtonExit;
    width: 32px;
    opacity: 1;
    overflow: hidden;
  `,
  stopButtonExitActive: emotion_css_esm.css`
    label: stopButtonExitActive;
    opacity: 0;
    width: 0;
  `
};
// EXTERNAL MODULE: ./public/app/features/explore/state/datasource.ts
var datasource = __webpack_require__("./public/app/features/explore/state/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/explore/state/time.ts
var time = __webpack_require__("./public/app/features/explore/state/time.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/useLiveTailControls.ts





/**
 * Hook that gives you all the functions needed to control the live tailing.
 */

function useLiveTailControls(exploreId) {
  const dispatch = (0,es.useDispatch)();
  const pause = (0,react.useCallback)(() => {
    dispatch((0,state_query/* setPausedStateAction */.sQ)({
      exploreId,
      isPaused: true
    }));
  }, [exploreId, dispatch]);
  const resume = (0,react.useCallback)(() => {
    dispatch((0,state_query/* setPausedStateAction */.sQ)({
      exploreId,
      isPaused: false
    }));
  }, [exploreId, dispatch]);
  const stop = (0,react.useCallback)(() => {
    // We need to pause here first because there is transition where we are not live but live logs are still shown
    // to cross fade with the normal view. This will prevent reordering of the logs in the live view during the
    // transition.
    pause(); // TODO referencing this from perspective of refresh picker when there is designated button for it now is not
    //  great. Needs a bit of refactoring.

    dispatch((0,time/* changeRefreshInterval */.oz)(exploreId, grafana_ui_src.RefreshPicker.offOption.value));
    dispatch((0,state_query/* runQueries */.aA)(exploreId));
  }, [exploreId, dispatch, pause]);
  const start = (0,react.useCallback)(() => {
    dispatch((0,time/* changeRefreshInterval */.oz)(exploreId, grafana_ui_src.RefreshPicker.liveOption.value));
  }, [exploreId, dispatch]);
  return {
    pause,
    resume,
    stop,
    start
  };
}

/**
 * If you can't use the hook you can use this as a render prop pattern.
 */
function LiveTailControls(props) {
  const controls = useLiveTailControls(props.exploreId);
  return props.children(controls);
}
;// CONCATENATED MODULE: ./public/app/features/explore/ExploreToolbar.tsx
function ExploreToolbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const AddToDashboard = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 47).then(__webpack_require__.bind(__webpack_require__, "./public/app/features/explore/AddToDashboard/index.tsx")).then(_ref => {
  let {
    AddToDashboard
  } = _ref;
  return {
    default: AddToDashboard
  };
}));

class UnConnectedExploreToolbar extends react.PureComponent {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    ExploreToolbar_defineProperty(this, "onChangeDatasource", async dsSettings => {
      this.props.changeDatasource(this.props.exploreId, dsSettings.uid, {
        importQueries: true
      });
    });

    ExploreToolbar_defineProperty(this, "onRunQuery", function () {
      let loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      const {
        runQueries,
        cancelQueries,
        exploreId
      } = _this.props;

      if (loading) {
        return cancelQueries(exploreId);
      } else {
        return runQueries(exploreId);
      }
    });

    ExploreToolbar_defineProperty(this, "onChangeRefreshInterval", item => {
      const {
        changeRefreshInterval,
        exploreId
      } = this.props;
      changeRefreshInterval(exploreId, item);
    });

    ExploreToolbar_defineProperty(this, "onChangeTimeSync", () => {
      const {
        syncTimes,
        exploreId
      } = this.props;
      syncTimes(exploreId);
    });

    ExploreToolbar_defineProperty(this, "renderRefreshPicker", showSmallTimePicker => {
      const {
        loading,
        refreshInterval,
        isLive
      } = this.props;
      let refreshPickerText = loading ? 'Cancel' : 'Run query';
      let refreshPickerTooltip = undefined;
      let refreshPickerWidth = '108px';

      if (showSmallTimePicker) {
        refreshPickerTooltip = refreshPickerText;
        refreshPickerText = undefined;
        refreshPickerWidth = '35px';
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RefreshPicker, {
        onIntervalChanged: this.onChangeRefreshInterval,
        value: refreshInterval,
        isLoading: loading,
        text: refreshPickerText,
        tooltip: refreshPickerTooltip,
        intervals: (0,TimeSrv/* getTimeSrv */.$t)().getValidIntervals(grafana_ui_src.defaultIntervals),
        isLive: isLive,
        onRefresh: () => this.onRunQuery(loading),
        noIntervalPicker: isLive,
        primary: true,
        width: refreshPickerWidth
      });
    });
  }

  render() {
    const {
      datasourceMissing,
      closeSplit,
      exploreId,
      loading,
      range,
      timeZone,
      fiscalYearStartMonth,
      splitted,
      syncedTimes,
      refreshInterval,
      onChangeTime,
      split,
      hasLiveOption,
      isLive,
      isPaused,
      containerWidth,
      onChangeTimeZone,
      onChangeFiscalYearStartMonth,
      topOfViewRef
    } = this.props;
    const showSmallDataSourcePicker = (splitted ? containerWidth < 700 : containerWidth < 800) || false;
    const showSmallTimePicker = splitted || containerWidth < 1210;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: topOfViewRef,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.PageToolbar, {
        "aria-label": "Explore toolbar",
        title: exploreId === explore/* ExploreId.left */.K.left ? 'Explore' : undefined,
        pageIcon: exploreId === explore/* ExploreId.left */.K.left ? 'compass' : undefined,
        leftItems: [exploreId === explore/* ExploreId.left */.K.left && /*#__PURE__*/(0,jsx_runtime.jsx)(DashNavButton/* DashNavButton */.u, {
          tooltip: "Copy shortened link",
          icon: "share-alt",
          onClick: () => (0,shortLinks/* createAndCopyShortLink */.L)(window.location.href),
          "aria-label": "Copy shortened link"
        }, "share"), !datasourceMissing && /*#__PURE__*/(0,jsx_runtime.jsx)(src.DataSourcePicker, {
          onChange: this.onChangeDatasource,
          current: this.props.datasourceName,
          hideTextValue: showSmallDataSourcePicker,
          width: showSmallDataSourcePicker ? 8 : undefined
        }, `${exploreId}-ds-picker`)].filter(Boolean),
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.ToolbarButtonRow, {
          children: [!splitted ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
            title: "Split",
            onClick: () => split(),
            icon: "columns",
            disabled: isLive,
            children: "Split"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
            title: "Close split pane",
            onClick: () => closeSplit(exploreId),
            icon: "times",
            children: "Close"
          }), src.config.featureToggles.explore2Dashboard && /*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense, {
            fallback: null,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(AddToDashboard, {
              exploreId: exploreId
            })
          }), !isLive && /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreTimeControls, {
            exploreId: exploreId,
            range: range,
            timeZone: timeZone,
            fiscalYearStartMonth: fiscalYearStartMonth,
            onChangeTime: onChangeTime,
            splitted: splitted,
            syncedTimes: syncedTimes,
            onChangeTimeSync: this.onChangeTimeSync,
            hideText: showSmallTimePicker,
            onChangeTimeZone: onChangeTimeZone,
            onChangeFiscalYearStartMonth: onChangeFiscalYearStartMonth
          }), this.renderRefreshPicker(showSmallTimePicker), refreshInterval && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SetInterval, {
            func: this.onRunQuery,
            interval: refreshInterval,
            loading: loading
          }), hasLiveOption && /*#__PURE__*/(0,jsx_runtime.jsx)(LiveTailControls, {
            exploreId: exploreId,
            children: controls => /*#__PURE__*/(0,jsx_runtime.jsx)(LiveTailButton, {
              splitted: splitted,
              isLive: isLive,
              isPaused: isPaused,
              start: controls.start,
              pause: controls.pause,
              resume: controls.resume,
              stop: controls.stop
            })
          })]
        })
      })
    });
  }

}

const ExploreToolbar_mapStateToProps = (state, _ref2) => {
  var _datasourceInstance$m;

  let {
    exploreId
  } = _ref2;
  const {
    syncedTimes
  } = state.explore;
  const exploreItem = state.explore[exploreId];
  const {
    datasourceInstance,
    datasourceMissing,
    range,
    refreshInterval,
    loading,
    isLive,
    isPaused,
    containerWidth
  } = exploreItem;
  const hasLiveOption = !!(datasourceInstance !== null && datasourceInstance !== void 0 && (_datasourceInstance$m = datasourceInstance.meta) !== null && _datasourceInstance$m !== void 0 && _datasourceInstance$m.streaming);
  return {
    datasourceMissing,
    datasourceName: datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name,
    loading,
    range,
    timeZone: (0,state_selectors/* getTimeZone */.Z)(state.user),
    fiscalYearStartMonth: (0,state_selectors/* getFiscalYearStartMonth */.i)(state.user),
    splitted: (0,selectors/* isSplit */.p)(state),
    refreshInterval,
    hasLiveOption,
    isLive,
    isPaused,
    syncedTimes,
    containerWidth
  };
};

const ExploreToolbar_mapDispatchToProps = {
  changeDatasource: datasource/* changeDatasource */.zU,
  changeRefreshInterval: time/* changeRefreshInterval */.oz,
  cancelQueries: state_query/* cancelQueries */.ci,
  runQueries: state_query/* runQueries */.aA,
  closeSplit: main/* splitClose */.YV,
  split: main/* splitOpen */.bW,
  syncTimes: time/* syncTimes */.mG,
  onChangeTimeZone: reducers/* updateTimeZoneForSession */.YT,
  onChangeFiscalYearStartMonth: reducers/* updateFiscalYearStartMonthForSession */.rf
};
const ExploreToolbar_connector = (0,es.connect)(ExploreToolbar_mapStateToProps, ExploreToolbar_mapDispatchToProps);
const ExploreToolbar = ExploreToolbar_connector(UnConnectedExploreToolbar);
// EXTERNAL MODULE: ./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useInterval.js

var useInterval = function (callback, delay) {
    var savedCallback = (0,react.useRef)(function () { });
    (0,react.useEffect)(function () {
        savedCallback.current = callback;
    });
    (0,react.useEffect)(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
/* harmony default export */ const esm_useInterval = (useInterval);

;// CONCATENATED MODULE: ./public/app/features/explore/Time.tsx



const Time = _ref => {
  let {
    timeInMs,
    className,
    humanize
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: `elapsed-time ${className}`,
    children: formatTime(timeInMs, humanize)
  });
};

const formatTime = function (timeInMs) {
  let humanize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const inSeconds = timeInMs / 1000;

  if (!humanize) {
    return `${inSeconds.toFixed(1)}s`;
  }

  const duration = (0,grafana_data_src.toDuration)(inSeconds, 'seconds');
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (hours) {
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  if (minutes) {
    return `${minutes}m ${seconds}s`;
  }

  return `${seconds}s`;
};
;// CONCATENATED MODULE: ./public/app/features/explore/ElapsedTime.tsx




const INTERVAL = 150;
const ElapsedTime = _ref => {
  let {
    resetKey,
    humanize,
    className
  } = _ref;
  const [elapsed, setElapsed] = (0,react.useState)(0); // the current value of elapsed
  // hook that will schedule a interval and then update the elapsed value on every tick.

  esm_useInterval(() => setElapsed(elapsed + INTERVAL), INTERVAL); // this effect will only be run when resetKey changes. This will reset the elapsed to 0.

  (0,react.useEffect)(() => setElapsed(0), [resetKey]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Time, {
    timeInMs: elapsed,
    className: className,
    humanize: humanize
  });
};
;// CONCATENATED MODULE: ./public/app/features/explore/LiveLogs.tsx
var _Icon;

function LiveLogs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LiveLogs_getStyles = theme => ({
  logsRowsLive: emotion_css_esm.css`
    label: logs-rows-live;
    font-family: ${theme.typography.fontFamilyMonospace};
    font-size: ${theme.typography.bodySmall.fontSize};
    display: flex;
    flex-flow: column nowrap;
    height: 60vh;
    overflow-y: scroll;
    :first-child {
      margin-top: auto !important;
    }
  `,
  logsRowFade: emotion_css_esm.css`
    label: logs-row-fresh;
    color: ${theme.colors.text};
    background-color: ${tinycolor_default()(theme.colors.info.transparent).setAlpha(0.25).toString()};
    animation: fade 1s ease-out 1s 1 normal forwards;
    @keyframes fade {
      from {
        background-color: ${tinycolor_default()(theme.colors.info.transparent).setAlpha(0.25).toString()};
      }
      to {
        background-color: transparent;
      }
    }
  `,
  logsRowsIndicator: emotion_css_esm.css`
    font-size: ${theme.typography.h6.fontSize};
    padding-top: ${theme.spacing(1)};
    display: flex;
    align-items: center;
  `,
  button: emotion_css_esm.css`
    margin-right: ${theme.spacing(1)};
  `,
  fullWidth: emotion_css_esm.css`
    width: 100%;
  `
});

class LiveLogs extends react.PureComponent {
  constructor(props) {
    super(props);

    LiveLogs_defineProperty(this, "liveEndDiv", null);

    LiveLogs_defineProperty(this, "scrollContainerRef", /*#__PURE__*/react.createRef());

    LiveLogs_defineProperty(this, "onScroll", event => {
      const {
        isPaused,
        onPause
      } = this.props;
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = event.currentTarget;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      if (distanceFromBottom >= 5 && !isPaused) {
        onPause();
      }
    });

    LiveLogs_defineProperty(this, "rowsToRender", () => {
      const {
        isPaused
      } = this.props;
      let {
        logRowsToRender: rowsToRender = []
      } = this.state;

      if (!isPaused) {
        // A perf optimisation here. Show just 100 rows when streaming and full length when the streaming is paused.
        rowsToRender = rowsToRender.slice(-100);
      }

      return rowsToRender;
    });

    this.state = {
      logRowsToRender: props.logRows
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (!nextProps.isPaused) {
      return {
        // We update what we show only if not paused. We keep any background subscriptions running and keep updating
        // our state, but we do not show the updates, this allows us start again showing correct result after resuming
        // without creating a gap in the log results.
        logRowsToRender: nextProps.logRows
      };
    } else {
      return null;
    }
  }
  /**
   * Handle pausing when user scrolls up so that we stop resetting his position to the bottom when new row arrives.
   * We do not need to throttle it here much, adding new rows should be throttled/buffered itself in the query epics
   * and after you pause we remove the handler and add it after you manually resume, so this should not be fired often.
   */


  render() {
    const {
      theme,
      timeZone,
      onPause,
      onResume,
      isPaused
    } = this.props;
    const styles = LiveLogs_getStyles(theme);
    const {
      logsRow,
      logsRowLocalTime,
      logsRowMessage
    } = (0,grafana_ui_src.getLogRowStyles)(theme);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("table", {
        className: styles.fullWidth,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
          onScroll: isPaused ? undefined : this.onScroll,
          className: (0,emotion_css_esm.cx)(['logs-rows', styles.logsRowsLive]),
          ref: this.scrollContainerRef,
          children: [this.rowsToRender().map(row => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: (0,emotion_css_esm.cx)(logsRow, styles.logsRowFade),
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: (0,emotion_css_esm.cx)(logsRowLocalTime),
                children: (0,grafana_data_src.dateTimeFormat)(row.timeEpochMs, {
                  timeZone
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                className: (0,emotion_css_esm.cx)(logsRowMessage),
                children: row.hasAnsi ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LogMessageAnsi, {
                  value: row.raw
                }) : row.entry
              })]
            }, row.uid);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            ref: element => {
              var _this$scrollContainer;

              this.liveEndDiv = element; // This is triggered on every update so on every new row. It keeps the view scrolled at the bottom by
              // default.
              // As scrollTo is not implemented in JSDOM it needs to be part of the condition

              if (this.liveEndDiv && (_this$scrollContainer = this.scrollContainerRef.current) !== null && _this$scrollContainer !== void 0 && _this$scrollContainer.scrollTo && !isPaused) {
                var _this$scrollContainer2;

                (_this$scrollContainer2 = this.scrollContainerRef.current) === null || _this$scrollContainer2 === void 0 ? void 0 : _this$scrollContainer2.scrollTo(0, this.scrollContainerRef.current.scrollHeight);
              }
            }
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.logsRowsIndicator,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: isPaused ? onResume : onPause,
          className: styles.button,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: isPaused ? 'play' : 'pause'
          }), "\xA0", isPaused ? 'Resume' : 'Pause']
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: this.props.stopLive,
          className: styles.button,
          children: [_Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "square-shape",
            size: "lg",
            type: "mono"
          })), "\xA0 Exit live mode"]
        }), isPaused || /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: ["Last line received: ", /*#__PURE__*/(0,jsx_runtime.jsx)(ElapsedTime, {
            resetKey: this.props.logRows,
            humanize: true
          }), " ago"]
        })]
      })]
    });
  }

}

const LiveLogsWithTheme = (0,grafana_ui_src.withTheme2)(LiveLogs);
// EXTERNAL MODULE: ./public/app/core/logs_model.ts + 1 modules
var logs_model = __webpack_require__("./public/app/core/logs_model.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/Logs/LogRowMessage.tsx + 1 modules
var LogRowMessage = __webpack_require__("./packages/grafana-ui/src/components/Logs/LogRowMessage.tsx");
;// CONCATENATED MODULE: ./public/app/features/explore/MetaInfoText.tsx






const MetaInfoText_getStyles = theme => ({
  metaContainer: emotion_css_esm.css`
    flex: 1;
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing(2)};
    min-width: 30%;
    display: flex;
    flex-wrap: wrap;
  `,
  metaItem: emotion_css_esm.css`
    margin-right: ${theme.spacing(2)};
    margin-top: ${theme.spacing(0.5)};
    display: flex;
    align-items: baseline;

    .logs-meta-item__error {
      color: ${theme.colors.error.text};
    }
  `,
  metaLabel: emotion_css_esm.css`
    margin-right: calc(${theme.spacing(2)} / 2);
    font-size: ${theme.typography.bodySmall.fontSize};
    font-weight: ${theme.typography.fontWeightMedium};
  `,
  metaValue: emotion_css_esm.css`
    font-family: ${theme.typography.fontFamilyMonospace};
    font-size: ${theme.typography.bodySmall.fontSize};
  `
});

const MetaInfoItem = /*#__PURE__*/(0,react.memo)(function MetaInfoItem(props) {
  const style = (0,grafana_ui_src.useStyles2)(MetaInfoText_getStyles);
  const {
    label,
    value
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": "meta-info-text-item",
    className: style.metaItem,
    children: [label && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      className: style.metaLabel,
      children: [label, ":"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: style.metaValue,
      children: value
    })]
  });
});
const MetaInfoText = /*#__PURE__*/(0,react.memo)(function MetaInfoText(props) {
  const style = (0,grafana_ui_src.useStyles2)(MetaInfoText_getStyles);
  const {
    metaItems
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: style.metaContainer,
    "data-testid": "meta-info-text",
    children: metaItems.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(MetaInfoItem, {
      label: item.label,
      value: item.value
    }, `${index}-${item.label}`))
  });
});
;// CONCATENATED MODULE: ./public/app/features/explore/LogsMetaRow.tsx
var LogsMetaRow_Icon;









const LogsMetaRow = /*#__PURE__*/react.memo(_ref => {
  let {
    meta,
    dedupStrategy,
    dedupCount,
    showDetectedFields,
    clearDetectedFields,
    hasUnescapedContent,
    forceEscape,
    onEscapeNewlines,
    logRows
  } = _ref;
  const logsMetaItem = [...meta]; // Add deduplication info

  if (dedupStrategy !== grafana_data_src.LogsDedupStrategy.none) {
    logsMetaItem.push({
      label: 'Dedup count',
      value: dedupCount,
      kind: grafana_data_src.LogsMetaKind.Number
    });
  } // Add info about limit for highlighting


  if (logRows.some(r => r.entry.length > LogRowMessage/* MAX_CHARACTERS */.n)) {
    logsMetaItem.push({
      label: 'Info',
      value: 'Logs with more than 100,000 characters could not be parsed and highlighted',
      kind: grafana_data_src.LogsMetaKind.String
    });
  } // Add detected fields info


  if ((showDetectedFields === null || showDetectedFields === void 0 ? void 0 : showDetectedFields.length) > 0) {
    logsMetaItem.push({
      label: 'Showing only detected fields',
      value: renderMetaItem(showDetectedFields, grafana_data_src.LogsMetaKind.LabelsMap)
    }, {
      label: '',
      value: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        size: "sm",
        onClick: clearDetectedFields,
        children: "Show original line"
      })
    });
  } // Add unescaped content info


  if (hasUnescapedContent) {
    logsMetaItem.push({
      label: 'Your logs might have incorrectly escaped content',
      value: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
        content: "Fix incorrectly escaped newline and tab sequences in log lines. Manually review the results to confirm that the replacements are correct.",
        placement: "right",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
          variant: "secondary",
          size: "sm",
          onClick: onEscapeNewlines,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [forceEscape ? 'Remove escaping' : 'Escape newlines', "\xA0"]
          }), LogsMetaRow_Icon || (LogsMetaRow_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "exclamation-triangle",
            className: "muted",
            size: "sm"
          }))]
        })
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: logsMetaItem && /*#__PURE__*/(0,jsx_runtime.jsx)(MetaInfoText, {
      metaItems: logsMetaItem.map(item => {
        return {
          label: item.label,
          value: 'kind' in item ? renderMetaItem(item.value, item.kind) : item.value
        };
      })
    })
  });
});
LogsMetaRow.displayName = 'LogsMetaRow';

function renderMetaItem(value, kind) {
  if (kind === grafana_data_src.LogsMetaKind.LabelsMap) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "logs-meta-item__labels",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LogLabels, {
        labels: value
      })
    });
  } else if (kind === grafana_data_src.LogsMetaKind.Error) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "logs-meta-item__error",
      children: value
    });
  }

  return value;
}
;// CONCATENATED MODULE: ./public/app/features/explore/LogsNavigationPages.tsx
var _Spinner;







function LogsNavigationPages(_ref) {
  let {
    pages,
    currentPageIndex,
    oldestLogsFirst,
    timeZone,
    loading,
    changeTime
  } = _ref;

  const formatTime = time => {
    return `${(0,grafana_data_src.dateTimeFormat)(time, {
      format: grafana_data_src.systemDateFormats.interval.second,
      timeZone: timeZone
    })}`;
  };

  const createPageContent = (page, index) => {
    if (currentPageIndex === index && loading) {
      return _Spinner || (_Spinner = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {}));
    }

    const topContent = formatTime(oldestLogsFirst ? page.logsRange.from : page.logsRange.to);
    const bottomContent = formatTime(oldestLogsFirst ? page.logsRange.to : page.logsRange.from);
    return `${topContent} — ${bottomContent}`;
  };

  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = LogsNavigationPages_getStyles(theme, loading);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
    autoHide: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.pagesWrapper,
      "data-testid": "logsNavigationPages",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.pagesContainer,
        children: pages.map((page, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "data-testid": `page${index + 1}`,
          className: styles.page,
          onClick: () => !loading && changeTime({
            from: page.queryRange.from,
            to: page.queryRange.to
          }),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: (0,emotion_css_esm.cx)(styles.line, {
              selectedBg: currentPageIndex === index
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: (0,emotion_css_esm.cx)(styles.time, {
              selectedText: currentPageIndex === index
            }),
            children: createPageContent(page, index)
          })]
        }, page.queryRange.to))
      })
    })
  });
}

const LogsNavigationPages_getStyles = (theme, loading) => {
  return {
    pagesWrapper: emotion_css_esm.css`
      height: 100%;
      padding-left: ${theme.spacing(0.5)};
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      &::after {
        content: '';
        display: block;
        background: repeating-linear-gradient(
          135deg,
          ${theme.colors.background.primary},
          ${theme.colors.background.primary} 5px,
          ${theme.colors.background.secondary} 5px,
          ${theme.colors.background.secondary} 15px
        );
        width: 3px;
        height: inherit;
        margin-bottom: 8px;
      }
    `,
    pagesContainer: emotion_css_esm.css`
      display: flex;
      padding: 0;
      flex-direction: column;
    `,
    page: emotion_css_esm.css`
      display: flex;
      margin: ${theme.spacing(2)} 0;
      cursor: ${loading ? 'auto' : 'pointer'};
      white-space: normal;
      .selectedBg {
        background: ${theme.colors.primary.main};
      }
      .selectedText {
        color: ${theme.colors.primary.main};
      }
    `,
    line: emotion_css_esm.css`
      width: 3px;
      height: 100%;
      align-items: center;
      background: ${theme.colors.text.secondary};
    `,
    time: emotion_css_esm.css`
      width: 60px;
      min-height: 80px;
      font-size: ${theme.v1.typography.size.sm};
      padding-left: ${theme.spacing(0.5)};
      display: flex;
      align-items: center;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/explore/LogsNavigation.tsx
var LogsNavigation_Spinner, _Spinner2, LogsNavigation_Icon;










function LogsNavigation(_ref) {
  let {
    absoluteRange,
    logsSortOrder,
    timeZone,
    loading,
    onChangeTime,
    scrollToTopLogs,
    visibleRange,
    queries,
    clearCache,
    addResultsToCache
  } = _ref;
  const [pages, setPages] = (0,react.useState)([]);
  const [currentPageIndex, setCurrentPageIndex] = (0,react.useState)(0); // These refs are to determine, if we want to clear up logs navigation when totally new query is run

  const expectedQueriesRef = (0,react.useRef)();
  const expectedRangeRef = (0,react.useRef)(); // This ref is to store range span for future queres based on firstly selected time range
  // e.g. if last 5 min selected, always run 5 min range

  const rangeSpanRef = (0,react.useRef)(0);
  const oldestLogsFirst = logsSortOrder === grafana_data_src.LogsSortOrder.Ascending;
  const onFirstPage = oldestLogsFirst ? currentPageIndex === pages.length - 1 : currentPageIndex === 0;
  const onLastPage = oldestLogsFirst ? currentPageIndex === 0 : currentPageIndex === pages.length - 1;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = LogsNavigation_getStyles(theme, oldestLogsFirst, loading); // Main effect to set pages and index

  (0,react.useEffect)(() => {
    const newPage = {
      logsRange: visibleRange,
      queryRange: absoluteRange
    };
    let newPages = []; // We want to start new pagination if queries change or if absolute range is different than expected

    if (!(0,lodash.isEqual)(expectedRangeRef.current, absoluteRange) || !(0,lodash.isEqual)(expectedQueriesRef.current, queries)) {
      clearCache();
      setPages([newPage]);
      setCurrentPageIndex(0);
      expectedQueriesRef.current = queries;
      rangeSpanRef.current = absoluteRange.to - absoluteRange.from;
    } else {
      setPages(pages => {
        // Remove duplicates with new query
        newPages = pages.filter(page => !(0,lodash.isEqual)(newPage.queryRange, page.queryRange)); // Sort pages based on logsOrder so they visually align with displayed logs

        newPages = [...newPages, newPage].sort((a, b) => sortPages(a, b, logsSortOrder)); // Set new pages

        return newPages;
      }); // Set current page index

      const index = newPages.findIndex(page => page.queryRange.to === absoluteRange.to);
      setCurrentPageIndex(index);
    }

    addResultsToCache();
  }, [visibleRange, absoluteRange, logsSortOrder, queries, clearCache, addResultsToCache]);
  (0,react.useEffect)(() => {
    clearCache(); // We can't enforce the eslint rule here because we only want to run when component is mounted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTime = _ref2 => {
    let {
      from,
      to
    } = _ref2;
    expectedRangeRef.current = {
      from,
      to
    };
    onChangeTime({
      from,
      to
    });
  };

  const sortPages = (a, b, logsSortOrder) => {
    if (logsSortOrder === grafana_data_src.LogsSortOrder.Ascending) {
      return a.queryRange.to > b.queryRange.to ? 1 : -1;
    }

    return a.queryRange.to > b.queryRange.to ? -1 : 1;
  };

  const olderLogsButton = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
    "data-testid": "olderLogsButton",
    className: styles.navButton,
    variant: "secondary",
    onClick: () => {
      //If we are not on the last page, use next page's range
      if (!onLastPage) {
        const indexChange = oldestLogsFirst ? -1 : 1;
        changeTime({
          from: pages[currentPageIndex + indexChange].queryRange.from,
          to: pages[currentPageIndex + indexChange].queryRange.to
        });
      } else {
        //If we are on the last page, create new range
        changeTime({
          from: visibleRange.from - rangeSpanRef.current,
          to: visibleRange.from
        });
      }
    },
    disabled: loading,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.navButtonContent,
      children: [loading ? LogsNavigation_Spinner || (LogsNavigation_Spinner = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {})) : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: oldestLogsFirst ? 'angle-up' : 'angle-down',
        size: "lg"
      }), "Older logs"]
    })
  });

  const newerLogsButton = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
    "data-testid": "newerLogsButton",
    className: styles.navButton,
    variant: "secondary",
    onClick: () => {
      //If we are not on the first page, use previous page's range
      if (!onFirstPage) {
        const indexChange = oldestLogsFirst ? 1 : -1;
        changeTime({
          from: pages[currentPageIndex + indexChange].queryRange.from,
          to: pages[currentPageIndex + indexChange].queryRange.to
        });
      } //If we are on the first page, button is disabled and we do nothing

    },
    disabled: loading || onFirstPage,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.navButtonContent,
      children: [loading && (_Spinner2 || (_Spinner2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {}))), onFirstPage || loading ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: oldestLogsFirst ? 'angle-down' : 'angle-up',
        size: "lg"
      }), onFirstPage ? 'Start of range' : 'Newer logs']
    })
  });

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.navContainer,
    children: [oldestLogsFirst ? olderLogsButton : newerLogsButton, /*#__PURE__*/(0,jsx_runtime.jsx)(LogsNavigationPages, {
      pages: pages,
      currentPageIndex: currentPageIndex,
      oldestLogsFirst: oldestLogsFirst,
      timeZone: timeZone,
      loading: loading,
      changeTime: changeTime
    }), oldestLogsFirst ? newerLogsButton : olderLogsButton, /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      "data-testid": "scrollToTop",
      className: styles.scrollToTopButton,
      variant: "secondary",
      onClick: scrollToTopLogs,
      title: "Scroll to top",
      children: LogsNavigation_Icon || (LogsNavigation_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "arrow-up",
        size: "lg"
      }))
    })]
  });
}

/* harmony default export */ const explore_LogsNavigation = (/*#__PURE__*/(0,react.memo)(LogsNavigation));

const LogsNavigation_getStyles = (theme, oldestLogsFirst, loading) => {
  return {
    navContainer: emotion_css_esm.css`
      max-height: 95vh;
      display: flex;
      flex-direction: column;
      justify-content: ${oldestLogsFirst ? 'flex-start' : 'space-between'};
      position: sticky;
      top: ${theme.spacing(2)};
      right: 0;
    `,
    navButton: emotion_css_esm.css`
      width: 58px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    `,
    navButtonContent: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      white-space: normal;
    `,
    scrollToTopButton: emotion_css_esm.css`
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: ${theme.spacing(1)};
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/explore/Logs.tsx
function Logs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const SETTINGS_KEYS = {
  showLabels: 'grafana.explore.logs.showLabels',
  showTime: 'grafana.explore.logs.showTime',
  wrapLogMessage: 'grafana.explore.logs.wrapLogMessage',
  prettifyLogMessage: 'grafana.explore.logs.prettifyLogMessage',
  logsSortOrder: 'grafana.explore.logs.sortOrder'
};

class UnthemedLogs extends react.PureComponent {
  constructor() {
    super(...arguments);

    Logs_defineProperty(this, "flipOrderTimer", void 0);

    Logs_defineProperty(this, "cancelFlippingTimer", void 0);

    Logs_defineProperty(this, "topLogsRef", /*#__PURE__*/(0,react.createRef)());

    Logs_defineProperty(this, "state", {
      showLabels: store/* default.getBool */.Z.getBool(SETTINGS_KEYS.showLabels, false),
      showTime: store/* default.getBool */.Z.getBool(SETTINGS_KEYS.showTime, true),
      wrapLogMessage: store/* default.getBool */.Z.getBool(SETTINGS_KEYS.wrapLogMessage, true),
      prettifyLogMessage: store/* default.getBool */.Z.getBool(SETTINGS_KEYS.prettifyLogMessage, false),
      dedupStrategy: grafana_data_src.LogsDedupStrategy.none,
      hiddenLogLevels: [],
      logsSortOrder: store/* default.get */.Z.get(SETTINGS_KEYS.logsSortOrder) || grafana_data_src.LogsSortOrder.Descending,
      isFlipping: false,
      showDetectedFields: [],
      forceEscape: false
    });

    Logs_defineProperty(this, "onChangeLogsSortOrder", () => {
      this.setState({
        isFlipping: true
      }); // we are using setTimeout here to make sure that disabled button is rendered before the rendering of reordered logs

      this.flipOrderTimer = window.setTimeout(() => {
        this.setState(prevState => {
          const newSortOrder = prevState.logsSortOrder === grafana_data_src.LogsSortOrder.Descending ? grafana_data_src.LogsSortOrder.Ascending : grafana_data_src.LogsSortOrder.Descending;
          store/* default.set */.Z.set(SETTINGS_KEYS.logsSortOrder, newSortOrder);
          return {
            logsSortOrder: newSortOrder
          };
        });
      }, 0);
      this.cancelFlippingTimer = window.setTimeout(() => this.setState({
        isFlipping: false
      }), 1000);
    });

    Logs_defineProperty(this, "onEscapeNewlines", () => {
      this.setState(prevState => ({
        forceEscape: !prevState.forceEscape
      }));
    });

    Logs_defineProperty(this, "onChangeDedup", dedupStrategy => {
      this.setState({
        dedupStrategy
      });
    });

    Logs_defineProperty(this, "onChangeLabels", event => {
      const {
        target
      } = event;

      if (target) {
        const showLabels = target.checked;
        this.setState({
          showLabels
        });
        store/* default.set */.Z.set(SETTINGS_KEYS.showLabels, showLabels);
      }
    });

    Logs_defineProperty(this, "onChangeTime", event => {
      const {
        target
      } = event;

      if (target) {
        const showTime = target.checked;
        this.setState({
          showTime
        });
        store/* default.set */.Z.set(SETTINGS_KEYS.showTime, showTime);
      }
    });

    Logs_defineProperty(this, "onChangeWrapLogMessage", event => {
      const {
        target
      } = event;

      if (target) {
        const wrapLogMessage = target.checked;
        this.setState({
          wrapLogMessage
        });
        store/* default.set */.Z.set(SETTINGS_KEYS.wrapLogMessage, wrapLogMessage);
      }
    });

    Logs_defineProperty(this, "onChangePrettifyLogMessage", event => {
      const {
        target
      } = event;

      if (target) {
        const prettifyLogMessage = target.checked;
        this.setState({
          prettifyLogMessage
        });
        store/* default.set */.Z.set(SETTINGS_KEYS.prettifyLogMessage, prettifyLogMessage);
      }
    });

    Logs_defineProperty(this, "onToggleLogLevel", hiddenRawLevels => {
      const hiddenLogLevels = hiddenRawLevels.map(level => grafana_data_src.LogLevel[level]);
      this.setState({
        hiddenLogLevels
      });
    });

    Logs_defineProperty(this, "onClickScan", event => {
      event.preventDefault();

      if (this.props.onStartScanning) {
        this.props.onStartScanning();
      }
    });

    Logs_defineProperty(this, "onClickStopScan", event => {
      event.preventDefault();

      if (this.props.onStopScanning) {
        this.props.onStopScanning();
      }
    });

    Logs_defineProperty(this, "showDetectedField", key => {
      const index = this.state.showDetectedFields.indexOf(key);

      if (index === -1) {
        this.setState(state => {
          return {
            showDetectedFields: state.showDetectedFields.concat(key)
          };
        });
      }
    });

    Logs_defineProperty(this, "hideDetectedField", key => {
      const index = this.state.showDetectedFields.indexOf(key);

      if (index > -1) {
        this.setState(state => {
          return {
            showDetectedFields: state.showDetectedFields.filter(k => key !== k)
          };
        });
      }
    });

    Logs_defineProperty(this, "clearDetectedFields", () => {
      this.setState(state => {
        return {
          showDetectedFields: []
        };
      });
    });

    Logs_defineProperty(this, "checkUnescapedContent", (0,memoize_one_esm/* default */.Z)(logRows => {
      return !!logRows.some(r => r.hasUnescapedContent);
    }));

    Logs_defineProperty(this, "dedupRows", (0,memoize_one_esm/* default */.Z)((logRows, dedupStrategy) => {
      const dedupedRows = (0,logs_model/* dedupLogRows */.UW)(logRows, dedupStrategy);
      const dedupCount = dedupedRows.reduce((sum, row) => row.duplicates ? sum + row.duplicates : sum, 0);
      return {
        dedupedRows,
        dedupCount
      };
    }));

    Logs_defineProperty(this, "filterRows", (0,memoize_one_esm/* default */.Z)((logRows, hiddenLogLevels) => {
      return (0,logs_model/* filterLogLevels */.nu)(logRows, new Set(hiddenLogLevels));
    }));

    Logs_defineProperty(this, "createNavigationRange", (0,memoize_one_esm/* default */.Z)(logRows => {
      if (!logRows || logRows.length === 0) {
        return undefined;
      }

      const firstTimeStamp = logRows[0].timeEpochMs;
      const lastTimeStamp = logRows[logRows.length - 1].timeEpochMs;

      if (lastTimeStamp < firstTimeStamp) {
        return {
          from: lastTimeStamp,
          to: firstTimeStamp
        };
      }

      return {
        from: firstTimeStamp,
        to: lastTimeStamp
      };
    }));

    Logs_defineProperty(this, "scrollToTopLogs", () => {
      var _this$topLogsRef$curr;

      return (_this$topLogsRef$curr = this.topLogsRef.current) === null || _this$topLogsRef$curr === void 0 ? void 0 : _this$topLogsRef$curr.scrollIntoView();
    });
  }

  componentWillUnmount() {
    if (this.flipOrderTimer) {
      window.clearTimeout(this.flipOrderTimer);
    }

    if (this.cancelFlippingTimer) {
      window.clearTimeout(this.cancelFlippingTimer);
    }
  }

  render() {
    const {
      width,
      logRows,
      logsMeta,
      logsSeries,
      visibleRange,
      loading = false,
      loadingState,
      onClickFilterLabel,
      onClickFilterOutLabel,
      timeZone,
      scanning,
      scanRange,
      showContextToggle,
      absoluteRange,
      onChangeTime,
      getFieldLinks,
      theme,
      logsQueries,
      clearCache,
      addResultsToCache,
      exploreId
    } = this.props;
    const {
      showLabels,
      showTime,
      wrapLogMessage,
      prettifyLogMessage,
      dedupStrategy,
      hiddenLogLevels,
      logsSortOrder,
      isFlipping,
      showDetectedFields,
      forceEscape
    } = this.state;
    const styles = Logs_getStyles(theme, wrapLogMessage);
    const hasData = logRows && logRows.length > 0;
    const hasUnescapedContent = this.checkUnescapedContent(logRows);
    const filteredLogs = this.filterRows(logRows, hiddenLogLevels);
    const {
      dedupedRows,
      dedupCount
    } = this.dedupRows(filteredLogs, dedupStrategy);
    const navigationRange = this.createNavigationRange(logRows);
    const scanText = scanRange ? `Scanning ${grafana_data_src.rangeUtil.describeTimeRange(scanRange)}` : 'Scanning...';
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [logsSeries && logsSeries.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.infoText,
          children: "This datasource does not support full-range histograms. The graph is based on the logs seen in the response."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreGraph, {
          graphStyle: "lines",
          data: logsSeries,
          height: 150,
          width: width,
          tooltipDisplayMode: grafana_schema_src/* TooltipDisplayMode.Multi */.f3.Multi,
          absoluteRange: visibleRange || absoluteRange,
          timeZone: timeZone,
          loadingState: loadingState,
          onChangeTime: onChangeTime,
          onHiddenSeriesChanged: this.onToggleLogLevel
        })]
      }) : undefined, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.logOptions,
        ref: this.topLogsRef,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Time",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
              value: showTime,
              onChange: this.onChangeTime,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `show-time_${exploreId}`
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Unique labels",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
              value: showLabels,
              onChange: this.onChangeLabels,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `unique-labels_${exploreId}`
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Wrap lines",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
              value: wrapLogMessage,
              onChange: this.onChangeWrapLogMessage,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `wrap-lines_${exploreId}`
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Prettify JSON",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
              value: prettifyLogMessage,
              onChange: this.onChangePrettifyLogMessage,
              className: styles.horizontalInlineSwitch,
              transparent: true,
              id: `prettify_${exploreId}`
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Dedup",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              options: Object.values(grafana_data_src.LogsDedupStrategy).map(dedupType => ({
                label: (0,lodash.capitalize)(dedupType),
                value: dedupType,
                description: grafana_data_src.LogsDedupDescription[dedupType]
              })),
              value: dedupStrategy,
              onChange: this.onChangeDedup,
              className: styles.radioButtons
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Display results",
            className: styles.horizontalInlineLabel,
            transparent: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              disabled: isFlipping,
              options: [{
                label: 'Newest first',
                value: grafana_data_src.LogsSortOrder.Descending,
                description: 'Show results newest to oldest'
              }, {
                label: 'Oldest first',
                value: grafana_data_src.LogsSortOrder.Ascending,
                description: 'Show results oldest to newest'
              }],
              value: logsSortOrder,
              onChange: this.onChangeLogsSortOrder,
              className: styles.radioButtons
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(LogsMetaRow, {
        logRows: logRows,
        meta: logsMeta || [],
        dedupStrategy: dedupStrategy,
        dedupCount: dedupCount,
        hasUnescapedContent: hasUnescapedContent,
        forceEscape: forceEscape,
        showDetectedFields: showDetectedFields,
        onEscapeNewlines: this.onEscapeNewlines,
        clearDetectedFields: this.clearDetectedFields
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.logsSection,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.logRows,
          "data-testid": "logRows",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LogRows, {
            logRows: logRows,
            deduplicatedRows: dedupedRows,
            dedupStrategy: dedupStrategy,
            getRowContext: this.props.getRowContext,
            onClickFilterLabel: onClickFilterLabel,
            onClickFilterOutLabel: onClickFilterOutLabel,
            showContextToggle: showContextToggle,
            showLabels: showLabels,
            showTime: showTime,
            enableLogDetails: true,
            forceEscape: forceEscape,
            wrapLogMessage: wrapLogMessage,
            prettifyLogMessage: prettifyLogMessage,
            timeZone: timeZone,
            getFieldLinks: getFieldLinks,
            logsSortOrder: logsSortOrder,
            showDetectedFields: showDetectedFields,
            onClickShowDetectedField: this.showDetectedField,
            onClickHideDetectedField: this.hideDetectedField
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(explore_LogsNavigation, {
          logsSortOrder: logsSortOrder,
          visibleRange: navigationRange !== null && navigationRange !== void 0 ? navigationRange : absoluteRange,
          absoluteRange: absoluteRange,
          timeZone: timeZone,
          onChangeTime: onChangeTime,
          loading: loading,
          queries: logsQueries !== null && logsQueries !== void 0 ? logsQueries : [],
          scrollToTopLogs: this.scrollToTopLogs,
          addResultsToCache: addResultsToCache,
          clearCache: clearCache
        })]
      }), !loading && !hasData && !scanning && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.noData,
        children: ["No logs found.", /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          size: "xs",
          fill: "text",
          onClick: this.onClickScan,
          children: "Scan for older logs"
        })]
      }), scanning && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.noData,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: scanText
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          size: "xs",
          fill: "text",
          onClick: this.onClickStopScan,
          children: "Stop scan"
        })]
      })]
    });
  }

}

const Logs = (0,grafana_ui_src.withTheme2)(UnthemedLogs);

const Logs_getStyles = (theme, wrapLogMessage) => {
  return {
    noData: emotion_css_esm.css`
      > * {
        margin-left: 0.5em;
      }
    `,
    logOptions: emotion_css_esm.css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      background-color: ${theme.colors.background.primary};
      padding: ${theme.spacing(1, 2)};
      border-radius: ${theme.shape.borderRadius()};
      margin: ${theme.spacing(2, 0, 1)};
      border: 1px solid ${theme.colors.border.medium};
    `,
    headerButton: emotion_css_esm.css`
      margin: ${theme.spacing(0.5, 0, 0, 1)};
    `,
    horizontalInlineLabel: emotion_css_esm.css`
      > label {
        margin-right: 0;
      }
    `,
    horizontalInlineSwitch: emotion_css_esm.css`
      padding: 0 ${theme.spacing(1)} 0 0;
    `,
    radioButtons: emotion_css_esm.css`
      margin: 0;
    `,
    logsSection: emotion_css_esm.css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,
    logRows: emotion_css_esm.css`
      overflow-x: ${wrapLogMessage ? 'unset' : 'scroll'};
      overflow-y: visible;
      width: 100%;
    `,
    infoText: emotion_css_esm.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.text.secondary};
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/explore/utils/LogsCrossFadeTransition.tsx





const transitionDuration = 500; // We add a bit of delay to the transition as another perf optimisation. As at the start we need to render
// quite a bit of new rows, if we start transition at the same time there can be frame rate drop. This gives time
// for react to first render them and then do the animation.

const transitionDelay = 100;
const LogsCrossFadeTransition_getStyles = (0,memoize_one_esm/* default */.Z)(() => {
  return {
    logsEnter: emotion_css_esm.css`
      label: logsEnter;
      position: absolute;
      opacity: 0;
      height: auto;
      width: 100%;
    `,
    logsEnterActive: emotion_css_esm.css`
      label: logsEnterActive;
      opacity: 1;
      transition: opacity ${transitionDuration}ms ease-out ${transitionDelay}ms;
    `,
    logsExit: emotion_css_esm.css`
      label: logsExit;
      position: absolute;
      opacity: 1;
      height: auto;
      width: 100%;
    `,
    logsExitActive: emotion_css_esm.css`
      label: logsExitActive;
      opacity: 0;
      transition: opacity ${transitionDuration}ms ease-out ${transitionDelay}ms;
    `
  };
});

/**
 * Cross fade transition component that is tied a bit too much to the logs containers so not very useful elsewhere
 * right now.
 */
function LogsCrossFadeTransition(props) {
  const {
    visible,
    children
  } = props;
  const styles = LogsCrossFadeTransition_getStyles();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.Z, {
    in: visible,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: transitionDuration + transitionDelay,
    classNames: {
      enter: styles.logsEnter,
      enterActive: styles.logsEnterActive,
      exit: styles.logsExit,
      exitActive: styles.logsExitActive
    },
    children: children
  });
}
// EXTERNAL MODULE: ./public/app/features/explore/utils/links.ts
var links = __webpack_require__("./public/app/features/explore/utils/links.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/LogsContainer.tsx
function LogsContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















class LogsContainer extends react.PureComponent {
  constructor() {
    super(...arguments);

    LogsContainer_defineProperty(this, "onChangeTime", absoluteRange => {
      const {
        exploreId,
        updateTimeRange
      } = this.props;
      updateTimeRange({
        exploreId,
        absoluteRange
      });
    });

    LogsContainer_defineProperty(this, "getLogRowContext", async (row, options) => {
      const {
        datasourceInstance
      } = this.props;

      if ((0,grafana_data_src.hasLogsContextSupport)(datasourceInstance)) {
        return datasourceInstance.getLogRowContext(row, options);
      }

      return [];
    });

    LogsContainer_defineProperty(this, "showContextToggle", row => {
      const {
        datasourceInstance
      } = this.props;

      if ((0,grafana_data_src.hasLogsContextSupport)(datasourceInstance)) {
        return datasourceInstance.showContextToggle(row);
      }

      return false;
    });

    LogsContainer_defineProperty(this, "getFieldLinks", (field, rowIndex) => {
      const {
        splitOpen: splitOpenFn,
        range
      } = this.props;
      return (0,links/* getFieldLinksForExplore */.a)({
        field,
        rowIndex,
        splitOpenFn,
        range
      });
    });
  }

  render() {
    const {
      loading,
      loadingState,
      logRows,
      logsMeta,
      logsSeries,
      logsQueries,
      onClickFilterLabel,
      onClickFilterOutLabel,
      onStartScanning,
      onStopScanning,
      absoluteRange,
      timeZone,
      visibleRange,
      scanning,
      range,
      width,
      isLive,
      exploreId,
      addResultsToCache,
      clearCache
    } = this.props;

    if (!logRows) {
      return null;
    } // We need to override css overflow of divs in Collapse element to enable sticky Logs navigation


    const styleOverridesForStickyNavigation = emotion_css_esm.css`
      & > div {
        overflow: visible;
        & > div {
          overflow: visible;
        }
      }
    `;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LogsCrossFadeTransition, {
        visible: isLive,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
          label: "Logs",
          loading: false,
          isOpen: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(LiveTailControls, {
            exploreId: exploreId,
            children: controls => /*#__PURE__*/(0,jsx_runtime.jsx)(LiveLogsWithTheme, {
              logRows: logRows,
              timeZone: timeZone,
              stopLive: controls.stop,
              isPaused: this.props.isPaused,
              onPause: controls.pause,
              onResume: controls.resume
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(LogsCrossFadeTransition, {
        visible: !isLive,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
          label: "Logs",
          loading: loading,
          isOpen: true,
          className: styleOverridesForStickyNavigation,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Logs, {
            exploreId: exploreId,
            logRows: logRows,
            logsMeta: logsMeta,
            logsSeries: logsSeries,
            logsQueries: logsQueries,
            width: width,
            loading: loading,
            loadingState: loadingState,
            onChangeTime: this.onChangeTime,
            onClickFilterLabel: onClickFilterLabel,
            onClickFilterOutLabel: onClickFilterOutLabel,
            onStartScanning: onStartScanning,
            onStopScanning: onStopScanning,
            absoluteRange: absoluteRange,
            visibleRange: visibleRange,
            timeZone: timeZone,
            scanning: scanning,
            scanRange: range.raw,
            showContextToggle: this.showContextToggle,
            getRowContext: this.getLogRowContext,
            getFieldLinks: this.getFieldLinks,
            addResultsToCache: () => addResultsToCache(exploreId),
            clearCache: () => clearCache(exploreId)
          })
        })
      })]
    });
  }

}

function LogsContainer_mapStateToProps(state, _ref) {
  let {
    exploreId
  } = _ref;
  const explore = state.explore; // @ts-ignore

  const item = explore[exploreId];
  const {
    logsResult,
    loading,
    scanning,
    datasourceInstance,
    isLive,
    isPaused,
    range,
    absoluteRange,
    logsVolumeDataProvider,
    logsVolumeData
  } = item;
  const timeZone = (0,state_selectors/* getTimeZone */.Z)(state.user);
  return {
    loading,
    logRows: logsResult === null || logsResult === void 0 ? void 0 : logsResult.rows,
    logsMeta: logsResult === null || logsResult === void 0 ? void 0 : logsResult.meta,
    logsSeries: logsResult === null || logsResult === void 0 ? void 0 : logsResult.series,
    logsQueries: logsResult === null || logsResult === void 0 ? void 0 : logsResult.queries,
    visibleRange: logsResult === null || logsResult === void 0 ? void 0 : logsResult.visibleRange,
    scanning,
    timeZone,
    datasourceInstance,
    isLive,
    isPaused,
    range,
    absoluteRange,
    logsVolumeDataProvider,
    logsVolumeData
  };
}

const LogsContainer_mapDispatchToProps = {
  updateTimeRange: time/* updateTimeRange */.cD,
  splitOpen: main/* splitOpen */.bW,
  addResultsToCache: state_query/* addResultsToCache */.K8,
  clearCache: state_query/* clearCache */.LK
};
const LogsContainer_connector = (0,es.connect)(LogsContainer_mapStateToProps, LogsContainer_mapDispatchToProps);
/* harmony default export */ const explore_LogsContainer = (LogsContainer_connector(LogsContainer));
;// CONCATENATED MODULE: ./public/app/features/explore/LogsVolumePanel.tsx
var _span, _span2;








const SHORT_ERROR_MESSAGE_LIMIT = 100;

function ErrorAlert(props) {
  var _props$error$data;

  const [isOpen, setIsOpen] = (0,react.useState)(false); // generic get-error-message-logic, taken from
  // /public/app/features/explore/ErrorContainer.tsx

  const message = props.error.message || ((_props$error$data = props.error.data) === null || _props$error$data === void 0 ? void 0 : _props$error$data.message) || '';
  const showButton = !isOpen && message.length > SHORT_ERROR_MESSAGE_LIMIT;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
    title: "Failed to load log volume for this query",
    severity: "warning",
    children: showButton ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "secondary",
      size: "xs",
      onClick: () => {
        setIsOpen(true);
      },
      children: "Show details"
    }) : message
  });
}

function LogsVolumePanel(props) {
  const {
    width,
    logsVolumeData,
    absoluteRange,
    timeZone,
    splitOpen,
    onUpdateTimeRange,
    onLoadLogsVolume
  } = props;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = (0,grafana_ui_src.useStyles2)(LogsVolumePanel_getStyles);
  const spacing = parseInt(theme.spacing(2).slice(0, -2), 10);
  const height = 150;
  let LogsVolumePanelContent;

  if (!logsVolumeData) {
    return null;
  } else if (logsVolumeData !== null && logsVolumeData !== void 0 && logsVolumeData.error) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorAlert, {
      error: logsVolumeData === null || logsVolumeData === void 0 ? void 0 : logsVolumeData.error
    });
  } else if ((logsVolumeData === null || logsVolumeData === void 0 ? void 0 : logsVolumeData.state) === grafana_data_src.LoadingState.Loading) {
    LogsVolumePanelContent = _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Log volume is loading..."
    }));
  } else if (logsVolumeData !== null && logsVolumeData !== void 0 && logsVolumeData.data) {
    if (logsVolumeData.data.length > 0) {
      LogsVolumePanelContent = /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreGraph, {
        graphStyle: "lines",
        loadingState: grafana_data_src.LoadingState.Done,
        data: logsVolumeData.data,
        height: height,
        width: width - spacing,
        absoluteRange: absoluteRange,
        onChangeTime: onUpdateTimeRange,
        timeZone: timeZone,
        splitOpenFn: splitOpen,
        tooltipDisplayMode: grafana_ui_src.TooltipDisplayMode.Multi
      });
    } else {
      LogsVolumePanelContent = _span2 || (_span2 = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "No volume data."
      }));
    }
  }

  const zoomRatio = logsLevelZoomRatio(logsVolumeData, absoluteRange);
  let zoomLevelInfo;

  if (zoomRatio !== undefined && zoomRatio < 1) {
    zoomLevelInfo = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Reload log volume",
      transparent: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        size: "xs",
        icon: "sync",
        variant: "secondary",
        onClick: onLoadLogsVolume,
        id: "reload-volume"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Collapse, {
    label: "Log volume",
    isOpen: true,
    loading: (logsVolumeData === null || logsVolumeData === void 0 ? void 0 : logsVolumeData.state) === grafana_data_src.LoadingState.Loading,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        height
      },
      className: styles.contentContainer,
      children: LogsVolumePanelContent
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.zoomInfoContainer,
      children: zoomLevelInfo
    })]
  });
}

const LogsVolumePanel_getStyles = () => {
  return {
    zoomInfoContainer: emotion_css_esm.css`
      display: flex;
      justify-content: end;
      position: absolute;
      right: 5px;
      top: 5px;
    `,
    contentContainer: emotion_css_esm.css`
      display: flex;
      align-items: center;
      justify-content: center;
    `
  };
};

function logsLevelZoomRatio(logsVolumeData, selectedTimeRange) {
  var _logsVolumeData$data$, _logsVolumeData$data$2;

  const dataRange = logsVolumeData && logsVolumeData.data[0] && ((_logsVolumeData$data$ = logsVolumeData.data[0].meta) === null || _logsVolumeData$data$ === void 0 ? void 0 : (_logsVolumeData$data$2 = _logsVolumeData$data$.custom) === null || _logsVolumeData$data$2 === void 0 ? void 0 : _logsVolumeData$data$2.absoluteRange);
  return dataRange ? (selectedTimeRange.from - selectedTimeRange.to) / (dataRange.from - dataRange.to) : undefined;
}
;// CONCATENATED MODULE: ./public/app/features/explore/NoData.tsx





const NoData = () => {
  const css = (0,grafana_ui_src.useStyles2)(NoData_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-testid": "explore-no-data",
      className: (0,emotion_css_esm.cx)([css.wrapper, 'panel-container']),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: (0,emotion_css_esm.cx)([css.message]),
        children: 'No data'
      })
    })
  });
};

const NoData_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    label: no-data-card;
    padding: ${theme.spacing(3)};
    background: ${theme.colors.background.primary};
    border-radius: ${theme.shape.borderRadius(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  `,
  message: emotion_css_esm.css`
    font-size: ${theme.typography.h2.fontSize};
    padding: ${theme.spacing(4)};
    color: ${theme.colors.text.disabled};
  `
});
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/NoDataSourceCallToAction.tsx
var NoDataSourceCallToAction_Icon, _a;









const NoDataSourceCallToAction = () => {
  const theme = (0,grafana_ui_src.useTheme2)();
  const canCreateDataSource = core/* contextSrv.hasPermission */.Vt.hasPermission(app_types/* AccessControlAction.DataSourcesCreate */.bW.DataSourcesCreate) && core/* contextSrv.hasPermission */.Vt.hasPermission(app_types/* AccessControlAction.DataSourcesWrite */.bW.DataSourcesWrite);
  const message = 'Explore requires at least one data source. Once you have added a data source, you can query it here.';

  const footer = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [NoDataSourceCallToAction_Icon || (NoDataSourceCallToAction_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: "rocket"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: " ProTip: You can also define data sources through configuration files. "
    }), _a || (_a = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      href: "http://docs.grafana.org/administration/provisioning/#datasources?utm_source=explore",
      target: "_blank",
      rel: "noreferrer",
      className: "text-link",
      children: "Learn more"
    }))]
  });

  const ctaElement = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
    size: "lg",
    href: "datasources/new",
    icon: "database",
    disabled: !canCreateDataSource,
    children: "Add data source"
  });

  const cardClassName = emotion_css_esm.css`
    max-width: ${theme.breakpoints.values.lg}px;
    margin-top: ${theme.spacing(2)};
    align-self: center;
  `;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CallToActionCard, {
    callToActionElement: ctaElement,
    className: cardClassName,
    footer: footer,
    message: message
  });
};
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js
var useToggle = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js");
// EXTERNAL MODULE: ./public/app/plugins/panel/nodeGraph/NodeGraph.tsx + 15 modules
var NodeGraph = __webpack_require__("./public/app/plugins/panel/nodeGraph/NodeGraph.tsx");
;// CONCATENATED MODULE: ./public/app/plugins/panel/nodeGraph/index.ts

// EXTERNAL MODULE: ./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts
var useCategorizeFrames = __webpack_require__("./public/app/plugins/panel/nodeGraph/useCategorizeFrames.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/NodeGraphContainer.tsx
var _Badge;














const NodeGraphContainer_getStyles = theme => ({
  warningText: emotion_css_esm.css`
    label: warningText;
    font-size: ${theme.typography.bodySmall.fontSize};
    color: ${theme.colors.text.secondary};
  `
});

function UnconnectedNodeGraphContainer(props) {
  var _nodes$;

  const {
    dataFrames,
    range,
    splitOpen,
    withTraceView
  } = props;
  const getLinks = (0,links/* useLinks */.u)(range, splitOpen);
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = (0,grafana_ui_src.useStyles2)(NodeGraphContainer_getStyles); // This is implicit dependency that is needed for links to work. At some point when replacing variables in the link
  // it requires field to have a display property which is added by the overrides even though we don't add any field
  // overrides in explore.

  const frames = (0,grafana_data_src.applyFieldOverrides)({
    fieldConfig: {
      defaults: {},
      overrides: []
    },
    data: dataFrames,
    // We don't need proper replace here as it is only used in getLinks and we use getFieldLinks
    replaceVariables: value => value,
    theme
  });
  const {
    nodes
  } = (0,useCategorizeFrames/* useCategorizeFrames */.Y)(frames);
  const [open, toggleOpen] = (0,useToggle/* default */.Z)(false);
  const countWarning = withTraceView && ((_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : _nodes$.length) > 1000 ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
    className: styles.warningText,
    children: [" (", nodes[0].length, " nodes, can be slow to load)"]
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
    label: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      children: ["Node graph", countWarning, ' ', _Badge || (_Badge = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
        text: 'Beta',
        color: 'blue',
        icon: 'rocket',
        tooltip: 'This visualization is in beta'
      }))]
    }),
    collapsible: withTraceView // We allow collapsing this only when it is shown together with trace view.
    ,
    isOpen: withTraceView ? open : true,
    onToggle: withTraceView ? () => toggleOpen() : undefined,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        height: withTraceView ? 500 : 600
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NodeGraph/* NodeGraph */.E, {
        dataFrames: frames,
        getLinks: getLinks
      })
    })
  });
}

function NodeGraphContainer_mapStateToProps(state, _ref) {
  let {
    exploreId
  } = _ref;
  return {
    range: state.explore[exploreId].range
  };
}

const NodeGraphContainer_mapDispatchToProps = {
  splitOpen: main/* splitOpen */.bW
};
const NodeGraphContainer_connector = (0,es.connect)(NodeGraphContainer_mapStateToProps, NodeGraphContainer_mapDispatchToProps);
const NodeGraphContainer = NodeGraphContainer_connector(UnconnectedNodeGraphContainer);
// EXTERNAL MODULE: ./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js + 1 modules
var reselect_es = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
// EXTERNAL MODULE: ./public/app/core/utils/query.ts
var utils_query = __webpack_require__("./public/app/core/utils/query.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/datasource_srv.ts
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
// EXTERNAL MODULE: ./public/app/features/query/components/QueryEditorRows.tsx
var QueryEditorRows = __webpack_require__("./public/app/features/query/components/QueryEditorRows.tsx");
;// CONCATENATED MODULE: ./public/app/features/explore/QueryRows.tsx











const makeSelectors = exploreId => {
  const exploreItemSelector = (0,selectors/* getExploreItemSelector */.F)(exploreId);
  return {
    getQueries: (0,reselect_es/* createSelector */.P1)(exploreItemSelector, s => s.queries),
    getQueryResponse: (0,reselect_es/* createSelector */.P1)(exploreItemSelector, s => s.queryResponse),
    getHistory: (0,reselect_es/* createSelector */.P1)(exploreItemSelector, s => s.history),
    getEventBridge: (0,reselect_es/* createSelector */.P1)(exploreItemSelector, s => s.eventBridge),
    getDatasourceInstanceSettings: (0,reselect_es/* createSelector */.P1)(exploreItemSelector, s => {
      var _datasourceInstance;

      return (0,datasource_srv/* getDatasourceSrv */.ak)().getInstanceSettings((_datasourceInstance = s.datasourceInstance) === null || _datasourceInstance === void 0 ? void 0 : _datasourceInstance.uid);
    })
  };
};

const QueryRows = _ref => {
  let {
    exploreId
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const {
    getQueries,
    getDatasourceInstanceSettings,
    getQueryResponse,
    getHistory,
    getEventBridge
  } = (0,react.useMemo)(() => makeSelectors(exploreId), [exploreId]);
  const queries = (0,es.useSelector)(getQueries);
  const dsSettings = (0,es.useSelector)(getDatasourceInstanceSettings);
  const queryResponse = (0,es.useSelector)(getQueryResponse);
  const history = (0,es.useSelector)(getHistory);
  const eventBridge = (0,es.useSelector)(getEventBridge);
  const onRunQueries = (0,react.useCallback)(() => {
    dispatch((0,state_query/* runQueries */.aA)(exploreId));
  }, [dispatch, exploreId]);
  const onChange = (0,react.useCallback)(newQueries => {
    dispatch((0,state_query/* changeQueriesAction */.PM)({
      queries: newQueries,
      exploreId
    })); // if we are removing a query we want to run the remaining ones

    if (newQueries.length < queries.length) {
      onRunQueries();
    }
  }, [dispatch, exploreId, onRunQueries, queries]);
  const onAddQuery = (0,react.useCallback)(query => {
    onChange([...queries, Object.assign({}, query, {
      refId: (0,utils_query/* getNextRefIdChar */.Hs)(queries)
    })]);
  }, [onChange, queries]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(QueryEditorRows/* QueryEditorRows */.l, {
    dsSettings: dsSettings,
    queries: queries,
    onQueriesChange: onChange,
    onAddQuery: onAddQuery,
    onRunQueries: onRunQueries,
    data: queryResponse,
    app: grafana_data_src.CoreApp.Explore,
    history: history,
    eventBus: eventBridge
  });
};
// EXTERNAL MODULE: ./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/Transition.js + 2 modules
var Transition = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/Transition.js");
;// CONCATENATED MODULE: ./public/app/core/components/Animations/FadeIn.tsx



const FadeIn = props => {
  const defaultStyle = {
    transition: `opacity ${props.duration}ms linear`,
    opacity: 0
  };
  const transitionStyles = {
    exited: {
      opacity: 0,
      display: 'none'
    },
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1
    },
    exiting: {
      opacity: 0
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Transition/* default */.ZP, {
    in: props.in,
    timeout: props.duration,
    unmountOnExit: props.unmountOnExit || false,
    onExited: props.onExited,
    children: state => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: Object.assign({}, defaultStyle, transitionStyles[state]),
      children: props.children
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/explore/ErrorContainer.tsx




const ErrorContainer = props => {
  var _queryError$data;

  const {
    queryError
  } = props;
  const showError = queryError ? true : false;
  const duration = showError ? 100 : 10;
  const title = queryError ? 'Query error' : 'Unknown error';
  const message = (queryError === null || queryError === void 0 ? void 0 : queryError.message) || (queryError === null || queryError === void 0 ? void 0 : (_queryError$data = queryError.data) === null || _queryError$data === void 0 ? void 0 : _queryError$data.message) || null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FadeIn, {
    in: showError,
    duration: duration,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "error",
      title: title,
      topSpacing: 2,
      children: message
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/explore/ResponseErrorContainer.tsx





function ResponseErrorContainer(props) {
  const queryResponse = (0,es.useSelector)(state => {
    var _state$explore$props$;

    return (_state$explore$props$ = state.explore[props.exploreId]) === null || _state$explore$props$ === void 0 ? void 0 : _state$explore$props$.queryResponse;
  });
  const queryError = (queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.state) === grafana_data_src.LoadingState.Error ? queryResponse === null || queryResponse === void 0 ? void 0 : queryResponse.error : undefined; // Errors with ref ids are shown below the corresponding query

  if (queryError !== null && queryError !== void 0 && queryError.refId) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorContainer, {
    queryError: queryError
  });
}
// EXTERNAL MODULE: ./public/app/features/explore/state/history.ts
var state_history = __webpack_require__("./public/app/features/explore/state/history.ts");
// EXTERNAL MODULE: ./public/app/core/utils/richHistory.ts + 1 modules
var richHistory = __webpack_require__("./public/app/core/utils/richHistory.ts");
// EXTERNAL MODULE: ./public/app/core/actions/index.ts
var actions = __webpack_require__("./public/app/core/actions/index.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/store/store.ts
var store_store = __webpack_require__("./public/app/store/store.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/RichHistory/RichHistoryCard.tsx



















function RichHistoryCard_mapStateToProps(state, _ref) {
  let {
    exploreId
  } = _ref;
  const explore = state.explore;
  const {
    datasourceInstance
  } = explore[exploreId];
  return {
    exploreId,
    datasourceInstance
  };
}

const RichHistoryCard_mapDispatchToProps = {
  changeDatasource: datasource/* changeDatasource */.zU,
  deleteHistoryItem: state_history/* deleteHistoryItem */.NV,
  commentHistoryItem: state_history/* commentHistoryItem */.Ff,
  starHistoryItem: state_history/* starHistoryItem */.ev,
  setQueries: state_query/* setQueries */.KO
};
const RichHistoryCard_connector = (0,es.connect)(RichHistoryCard_mapStateToProps, RichHistoryCard_mapDispatchToProps);
const RichHistoryCard_getStyles = (0,grafana_ui_src.stylesFactory)((theme, isRemoved) => {
  /* Hard-coded value so all buttons and icons on right side of card are aligned */
  const rigtColumnWidth = '240px';
  const rigtColumnContentWidth = '170px';
  /* If datasource was removed, card will have inactive color */

  const cardColor = theme.colors.bg2;
  return {
    queryCard: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      border: 1px solid ${theme.colors.border1};
      margin: ${theme.spacing.sm} 0;
      background-color: ${cardColor};
      border-radius: ${theme.border.radius.sm};
      .starred {
        color: ${theme.palette.orange};
      }
    `,
    cardRow: emotion_css_esm.css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacing.sm};
      border-bottom: none;
      :first-of-type {
        border-bottom: 1px solid ${theme.colors.border1};
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
      }
      img {
        height: ${theme.typography.size.base};
        max-width: ${theme.typography.size.base};
        margin-right: ${theme.spacing.sm};
      }
    `,
    datasourceContainer: emotion_css_esm.css`
      display: flex;
      align-items: center;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.semibold};
    `,
    queryActionButtons: emotion_css_esm.css`
      max-width: ${rigtColumnContentWidth};
      display: flex;
      justify-content: flex-end;
      font-size: ${theme.typography.size.base};
      button {
        margin-left: ${theme.spacing.sm};
      }
    `,
    queryContainer: emotion_css_esm.css`
      font-weight: ${theme.typography.weight.semibold};
      width: calc(100% - ${rigtColumnWidth});
    `,
    queryRow: emotion_css_esm.css`
      border-top: 1px solid ${theme.colors.border1};
      word-break: break-all;
      padding: 4px 2px;
      :first-child {
        border-top: none;
        padding: 0 0 4px 0;
      }
    `,
    updateCommentContainer: emotion_css_esm.css`
      width: calc(100% + ${rigtColumnWidth});
      margin-top: ${theme.spacing.sm};
    `,
    comment: emotion_css_esm.css`
      overflow-wrap: break-word;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.regular};
      margin-top: ${theme.spacing.xs};
    `,
    commentButtonRow: emotion_css_esm.css`
      > * {
        margin-right: ${theme.spacing.sm};
      }
    `,
    textArea: emotion_css_esm.css`
      width: 100%;
    `,
    runButton: emotion_css_esm.css`
      max-width: ${rigtColumnContentWidth};
      display: flex;
      justify-content: flex-end;
      button {
        height: auto;
        padding: ${theme.spacing.xs} ${theme.spacing.md};
        line-height: 1.4;
        span {
          white-space: normal !important;
        }
      }
    `
  };
});
function RichHistoryCard(props) {
  var _query$comment;

  const {
    query,
    dsImg,
    isRemoved,
    commentHistoryItem,
    starHistoryItem,
    deleteHistoryItem,
    changeDatasource,
    exploreId,
    datasourceInstance,
    setQueries
  } = props;
  const [activeUpdateComment, setActiveUpdateComment] = (0,react.useState)(false);
  const [comment, setComment] = (0,react.useState)(query.comment);
  const [queryDsInstance, setQueryDsInstance] = (0,react.useState)(undefined);
  (0,react.useEffect)(() => {
    const getQueryDsInstance = async () => {
      const ds = await (0,src.getDataSourceSrv)().get(query.datasourceName);
      setQueryDsInstance(ds);
    };

    getQueryDsInstance();
  }, [query.datasourceName]);
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = RichHistoryCard_getStyles(theme, isRemoved);

  const onRunQuery = async () => {
    const queriesToRun = query.queries;

    if (query.datasourceName !== (datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name)) {
      await changeDatasource(exploreId, query.datasourceName, {
        importQueries: true
      });
      setQueries(exploreId, queriesToRun);
    } else {
      setQueries(exploreId, queriesToRun);
    }
  };

  const onCopyQuery = () => {
    const queriesToCopy = query.queries.map(q => (0,richHistory/* createQueryText */.OH)(q, queryDsInstance)).join('\n');
    (0,utils_explore/* copyStringToClipboard */.n9)(queriesToCopy);
    (0,store_store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createSuccessNotification */.AT)('Query copied to clipboard')));
  };

  const onCreateShortLink = async () => {
    const link = (0,richHistory/* createUrlFromRichHistory */.t2)(query);
    await (0,shortLinks/* createAndCopyShortLink */.L)(link);
  };

  const onDeleteQuery = () => {
    // For starred queries, we want confirmation. For non-starred, we don't.
    if (query.starred) {
      app_events/* default.publish */.Z.publish(new events/* ShowConfirmModalEvent */.VJ({
        title: 'Delete',
        text: 'Are you sure you want to permanently delete your starred query?',
        yesText: 'Delete',
        icon: 'trash-alt',
        onConfirm: () => {
          deleteHistoryItem(query.id);
          (0,store_store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createSuccessNotification */.AT)('Query deleted')));
        }
      }));
    } else {
      deleteHistoryItem(query.id);
      (0,store_store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createSuccessNotification */.AT)('Query deleted')));
    }
  };

  const onStarrQuery = () => {
    starHistoryItem(query.id, !query.starred);
  };

  const toggleActiveUpdateComment = () => setActiveUpdateComment(!activeUpdateComment);

  const onUpdateComment = () => {
    commentHistoryItem(query.id, comment);
    setActiveUpdateComment(false);
  };

  const onCancelUpdateComment = () => {
    setActiveUpdateComment(false);
    setComment(query.comment);
  };

  const onKeyDown = keyEvent => {
    if (keyEvent.key === 'Enter' && (keyEvent.shiftKey || keyEvent.ctrlKey)) {
      onUpdateComment();
    }

    if (keyEvent.key === 'Escape') {
      onCancelUpdateComment();
    }
  };

  const updateComment = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.updateCommentContainer,
    "aria-label": comment ? 'Update comment form' : 'Add comment form',
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TextArea, {
      value: comment,
      placeholder: comment ? undefined : 'An optional description of what the query does.',
      onChange: e => setComment(e.currentTarget.value),
      className: styles.textArea
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.commentButtonRow,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        onClick: onUpdateComment,
        "aria-label": "Submit button",
        children: "Save comment"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        onClick: onCancelUpdateComment,
        children: "Cancel"
      })]
    })]
  });

  const queryActionButtons = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.queryActionButtons,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      name: "comment-alt",
      onClick: toggleActiveUpdateComment,
      title: ((_query$comment = query.comment) === null || _query$comment === void 0 ? void 0 : _query$comment.length) > 0 ? 'Edit comment' : 'Add comment'
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      name: "copy",
      onClick: onCopyQuery,
      title: "Copy query to clipboard"
    }), !isRemoved && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      name: "share-alt",
      onClick: onCreateShortLink,
      title: "Copy shortened link to clipboard"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      name: "trash-alt",
      title: 'Delete query',
      onClick: onDeleteQuery
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      name: query.starred ? 'favorite' : 'star',
      iconType: query.starred ? 'mono' : 'default',
      onClick: onStarrQuery,
      title: query.starred ? 'Unstar query' : 'Star query'
    })]
  });

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.queryCard,
    onKeyDown: onKeyDown,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.cardRow,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.datasourceContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: dsImg,
          "aria-label": "Data source icon"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-label": "Data source name",
          children: isRemoved ? 'Data source does not exist anymore' : query.datasourceName
        })]
      }), queryActionButtons]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)(styles.cardRow),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.queryContainer,
        children: [query.queries.map((q, i) => {
          const queryText = (0,richHistory/* createQueryText */.OH)(q, queryDsInstance);
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            "aria-label": "Query text",
            className: styles.queryRow,
            children: queryText
          }, `${q}-${i}`);
        }), !activeUpdateComment && query.comment && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-label": "Query comment",
          className: styles.comment,
          children: query.comment
        }), activeUpdateComment && updateComment]
      }), !activeUpdateComment && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.runButton,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onRunQuery,
          disabled: isRemoved,
          children: (datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name) === query.datasourceName ? 'Run query' : 'Switch data source and run query'
        })
      })]
    })]
  });
}
/* harmony default export */ const RichHistory_RichHistoryCard = (RichHistoryCard_connector(RichHistoryCard));
;// CONCATENATED MODULE: ./public/app/features/explore/RichHistory/RichHistoryQueriesTab.tsx
var RichHistoryQueriesTab_span, _div;









const RichHistoryQueriesTab_getStyles = (0,grafana_ui_src.stylesFactory)((theme, height) => {
  const bgColor = theme.isLight ? theme.palette.gray5 : theme.palette.dark4;
  /* 134px is based on the width of the Query history tabs bar, so the content is aligned to right side of the tab */

  const cardWidth = '100% - 134px';
  const sliderHeight = `${height - 180}px`;
  return {
    container: emotion_css_esm.css`
      display: flex;
      .label-slider {
        font-size: ${theme.typography.size.sm};
        &:last-of-type {
          margin-top: ${theme.spacing.lg};
        }
        &:first-of-type {
          font-weight: ${theme.typography.weight.semibold};
          margin-bottom: ${theme.spacing.md};
        }
      }
    `,
    containerContent: emotion_css_esm.css`
      width: calc(${cardWidth});
    `,
    containerSlider: emotion_css_esm.css`
      width: 129px;
      margin-right: ${theme.spacing.sm};
      .slider {
        bottom: 10px;
        height: ${sliderHeight};
        width: 129px;
        padding: ${theme.spacing.sm} 0;
      }
    `,
    slider: emotion_css_esm.css`
      position: fixed;
    `,
    selectors: emotion_css_esm.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,
    filterInput: emotion_css_esm.css`
      margin-bottom: ${theme.spacing.sm};
    `,
    multiselect: emotion_css_esm.css`
      width: 100%;
      margin-bottom: ${theme.spacing.sm};
      .gf-form-select-box__multi-value {
        background-color: ${bgColor};
        padding: ${theme.spacing.xxs} ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.sm};
        border-radius: ${theme.border.radius.sm};
      }
    `,
    sort: emotion_css_esm.css`
      width: 170px;
    `,
    sessionName: emotion_css_esm.css`
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: ${theme.spacing.lg};
      h4 {
        margin: 0 10px 0 0;
      }
    `,
    heading: emotion_css_esm.css`
      font-size: ${theme.typography.heading.h4};
      margin: ${theme.spacing.md} ${theme.spacing.xxs} ${theme.spacing.sm} ${theme.spacing.xxs};
    `,
    footer: emotion_css_esm.css`
      height: 60px;
      margin: ${theme.spacing.lg} auto;
      display: flex;
      justify-content: center;
      font-weight: ${theme.typography.weight.light};
      font-size: ${theme.typography.size.sm};
      a {
        font-weight: ${theme.typography.weight.semibold};
        margin-left: ${theme.spacing.xxs};
      }
    `,
    queries: emotion_css_esm.css`
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.weight.regular};
      margin-left: ${theme.spacing.xs};
    `
  };
});
function RichHistoryQueriesTab(props) {
  const {
    queries,
    richHistorySearchFilters,
    updateFilters,
    clearRichHistoryResults,
    richHistorySettings,
    exploreId,
    height,
    activeDatasourceInstance
  } = props;
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = RichHistoryQueriesTab_getStyles(theme, height);
  const listOfDatasources = (0,richHistory/* createDatasourcesList */.DR)();
  (0,react.useEffect)(() => {
    const datasourceFilters = richHistorySettings.activeDatasourceOnly && activeDatasourceInstance ? [activeDatasourceInstance] : richHistorySettings.lastUsedDatasourceFilters;
    const filters = {
      search: '',
      sortOrder: richHistory/* SortOrder.Descending */.As.Descending,
      datasourceFilters,
      from: 0,
      to: richHistorySettings.retentionPeriod,
      starred: false
    };
    updateFilters(filters);
    return () => {
      clearRichHistoryResults();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!richHistorySearchFilters) {
    return RichHistoryQueriesTab_span || (RichHistoryQueriesTab_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Loading..."
    }));
  }
  /* mappedQueriesToHeadings is an object where query headings (stringified dates/data sources)
   * are keys and arrays with queries that belong to that headings are values.
   */


  const mappedQueriesToHeadings = (0,richHistory/* mapQueriesToHeadings */.k4)(queries, richHistorySearchFilters.sortOrder);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.containerSlider,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.slider,
        children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "label-slider",
          children: "Filter history"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "label-slider",
          children: (0,richHistory/* mapNumbertoTimeInSlider */.bQ)(richHistorySearchFilters.from)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "slider",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RangeSlider, {
            tooltipAlwaysVisible: false,
            min: 0,
            max: richHistorySettings.retentionPeriod,
            value: [richHistorySearchFilters.from, richHistorySearchFilters.to],
            orientation: "vertical",
            formatTooltipResult: richHistory/* mapNumbertoTimeInSlider */.bQ,
            reverse: true,
            onAfterChange: value => {
              updateFilters({
                from: value[0],
                to: value[1]
              });
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "label-slider",
          children: (0,richHistory/* mapNumbertoTimeInSlider */.bQ)(richHistorySearchFilters.to)
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.containerContent,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.selectors,
        children: [!richHistorySettings.activeDatasourceOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
          className: styles.multiselect,
          options: listOfDatasources.map(ds => {
            return {
              value: ds.name,
              label: ds.name
            };
          }),
          value: richHistorySearchFilters.datasourceFilters,
          placeholder: "Filter queries for data sources(s)",
          "aria-label": "Filter queries for data sources(s)",
          onChange: options => {
            updateFilters({
              datasourceFilters: options.map(option => option.value)
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.filterInput,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
            placeholder: "Search queries",
            value: richHistorySearchFilters.search,
            onChange: search => updateFilters({
              search
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-label": "Sort queries",
          className: styles.sort,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            value: sortOrderOptions.filter(order => order.value === richHistorySearchFilters.sortOrder),
            options: sortOrderOptions,
            placeholder: "Sort queries by",
            onChange: e => updateFilters({
              sortOrder: e.value
            })
          })
        })]
      }), Object.keys(mappedQueriesToHeadings).map(heading => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: styles.heading,
            children: [heading, " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              className: styles.queries,
              children: [mappedQueriesToHeadings[heading].length, " queries"]
            })]
          }), mappedQueriesToHeadings[heading].map(q => {
            const idx = listOfDatasources.findIndex(d => d.name === q.datasourceName);
            return /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistory_RichHistoryCard, {
              query: q,
              exploreId: exploreId,
              dsImg: idx === -1 ? 'public/img/icn-datasource.svg' : listOfDatasources[idx].imgUrl,
              isRemoved: idx === -1
            }, q.id);
          })]
        }, heading);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.footer,
        children: "The history is local to your browser and is not shared with others."
      })]
    })]
  });
}
// EXTERNAL MODULE: ./public/app/core/history/RichHistoryLocalStorage.ts + 2 modules
var RichHistoryLocalStorage = __webpack_require__("./public/app/core/history/RichHistoryLocalStorage.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/RichHistory/RichHistorySettingsTab.tsx











const RichHistorySettingsTab_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    container: emotion_css_esm.css`
      font-size: ${theme.typography.size.sm};
      .space-between {
        margin-bottom: ${theme.spacing.lg};
      }
    `,
    input: emotion_css_esm.css`
      max-width: 200px;
    `
  };
});
const retentionPeriodOptions = [{
  value: 2,
  label: '2 days'
}, {
  value: 5,
  label: '5 days'
}, {
  value: 7,
  label: '1 week'
}, {
  value: 14,
  label: '2 weeks'
}];
function RichHistorySettingsTab(props) {
  const {
    retentionPeriod,
    starredTabAsFirstTab,
    activeDatasourceOnly,
    onChangeRetentionPeriod,
    toggleStarredTabAsFirstTab,
    toggleactiveDatasourceOnly,
    deleteRichHistory
  } = props;
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = RichHistorySettingsTab_getStyles(theme);
  const selectedOption = retentionPeriodOptions.find(v => v.value === retentionPeriod);

  const onDelete = () => {
    app_events/* default.publish */.Z.publish(new events/* ShowConfirmModalEvent */.VJ({
      title: 'Delete',
      text: 'Are you sure you want to permanently delete your query history?',
      yesText: 'Delete',
      icon: 'trash-alt',
      onConfirm: () => {
        deleteRichHistory();
        (0,store_store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createSuccessNotification */.AT)('Query history deleted')));
      }
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "History time span",
      description: `Select the period of time for which Grafana will save your query history. Up to ${RichHistoryLocalStorage/* MAX_HISTORY_ITEMS */.H6} entries will be stored.`,
      className: "space-between",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.input,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          value: selectedOption,
          options: retentionPeriodOptions,
          onChange: onChangeRetentionPeriod
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Change the default active tab from \u201CQuery history\u201D to \u201CStarred\u201D",
      className: "space-between",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
        id: "explore-query-history-settings-default-active-tab",
        value: starredTabAsFirstTab,
        onChange: toggleStarredTabAsFirstTab
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Only show queries for data source currently active in Explore",
      className: "space-between",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
        id: "explore-query-history-settings-data-source-behavior",
        value: activeDatasourceOnly,
        onChange: toggleactiveDatasourceOnly
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: emotion_css_esm.css`
          font-weight: ${theme.typography.weight.bold};
        `,
      children: "Clear query history"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: emotion_css_esm.css`
          margin-bottom: ${theme.spacing.sm};
        `,
      children: "Delete all of your query history, permanently."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "destructive",
      onClick: onDelete,
      children: "Clear query history"
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/features/explore/RichHistory/RichHistoryStarredTab.tsx
var RichHistoryStarredTab_span;









const RichHistoryStarredTab_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  const bgColor = theme.isLight ? theme.palette.gray5 : theme.palette.dark4;
  return {
    container: emotion_css_esm.css`
      display: flex;
    `,
    containerContent: emotion_css_esm.css`
      width: 100%;
    `,
    selectors: emotion_css_esm.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,
    multiselect: emotion_css_esm.css`
      width: 100%;
      margin-bottom: ${theme.spacing.sm};
      .gf-form-select-box__multi-value {
        background-color: ${bgColor};
        padding: ${theme.spacing.xxs} ${theme.spacing.xs} ${theme.spacing.xxs} ${theme.spacing.sm};
        border-radius: ${theme.border.radius.sm};
      }
    `,
    filterInput: emotion_css_esm.css`
      margin-bottom: ${theme.spacing.sm};
    `,
    sort: emotion_css_esm.css`
      width: 170px;
    `,
    footer: emotion_css_esm.css`
      height: 60px;
      margin-top: ${theme.spacing.lg};
      display: flex;
      justify-content: center;
      font-weight: ${theme.typography.weight.light};
      font-size: ${theme.typography.size.sm};
      a {
        font-weight: ${theme.typography.weight.semibold};
        margin-left: ${theme.spacing.xxs};
      }
    `
  };
});
function RichHistoryStarredTab(props) {
  const {
    updateFilters,
    clearRichHistoryResults,
    activeDatasourceInstance,
    richHistorySettings,
    queries,
    richHistorySearchFilters,
    exploreId
  } = props;
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = RichHistoryStarredTab_getStyles(theme);
  const listOfDatasources = (0,richHistory/* createDatasourcesList */.DR)();
  (0,react.useEffect)(() => {
    const datasourceFilters = richHistorySettings.activeDatasourceOnly && activeDatasourceInstance ? [activeDatasourceInstance] : richHistorySettings.lastUsedDatasourceFilters;
    const filters = {
      search: '',
      sortOrder: richHistory/* SortOrder.Descending */.As.Descending,
      datasourceFilters,
      from: 0,
      to: richHistorySettings.retentionPeriod,
      starred: true
    };
    updateFilters(filters);
    return () => {
      clearRichHistoryResults();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!richHistorySearchFilters) {
    return RichHistoryStarredTab_span || (RichHistoryStarredTab_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Loading..."
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.containerContent,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.selectors,
        children: [!richHistorySettings.activeDatasourceOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
          className: styles.multiselect,
          options: listOfDatasources.map(ds => {
            return {
              value: ds.name,
              label: ds.name
            };
          }),
          value: richHistorySearchFilters.datasourceFilters,
          placeholder: "Filter queries for data sources(s)",
          "aria-label": "Filter queries for data sources(s)",
          onChange: options => {
            updateFilters({
              datasourceFilters: options.map(option => option.value)
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.filterInput,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
            placeholder: "Search queries",
            value: richHistorySearchFilters.search,
            onChange: search => updateFilters({
              search
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-label": "Sort queries",
          className: styles.sort,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            value: sortOrderOptions.filter(order => order.value === richHistorySearchFilters.sortOrder),
            options: sortOrderOptions,
            placeholder: "Sort queries by",
            onChange: e => updateFilters({
              sortOrder: e.value
            })
          })
        })]
      }), queries.map(q => {
        const idx = listOfDatasources.findIndex(d => d.name === q.datasourceName);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistory_RichHistoryCard, {
          query: q,
          exploreId: exploreId,
          dsImg: idx === -1 ? 'public/img/icn-datasource.svg' : listOfDatasources[idx].imgUrl,
          isRemoved: idx === -1
        }, q.id);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.footer,
        children: "The history is local to your browser and is not shared with others."
      })]
    })
  });
}
;// CONCATENATED MODULE: ./public/app/features/explore/RichHistory/RichHistory.tsx
function RichHistory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









let Tabs;

(function (Tabs) {
  Tabs["RichHistory"] = "Query history";
  Tabs["Starred"] = "Starred";
  Tabs["Settings"] = "Settings";
})(Tabs || (Tabs = {}));

const sortOrderOptions = [{
  label: 'Newest first',
  value: richHistory/* SortOrder.Descending */.As.Descending
}, {
  label: 'Oldest first',
  value: richHistory/* SortOrder.Ascending */.As.Ascending
}, {
  label: 'Data source A-Z',
  value: richHistory/* SortOrder.DatasourceAZ */.As.DatasourceAZ
}, {
  label: 'Data source Z-A',
  value: richHistory/* SortOrder.DatasourceZA */.As.DatasourceZA
}];

class UnThemedRichHistory extends react.PureComponent {
  constructor() {
    super(...arguments);

    RichHistory_defineProperty(this, "updateSettings", settingsToUpdate => {
      this.props.updateHistorySettings(Object.assign({}, this.props.richHistorySettings, settingsToUpdate));
    });

    RichHistory_defineProperty(this, "updateFilters", filtersToUpdate => {
      const filters = Object.assign({}, this.props.richHistorySearchFilters, filtersToUpdate);
      this.props.updateHistorySearchFilters(this.props.exploreId, filters);
      this.loadRichHistory();
    });

    RichHistory_defineProperty(this, "clearResults", () => {
      this.props.clearRichHistoryResults(this.props.exploreId);
    });

    RichHistory_defineProperty(this, "loadRichHistory", (0,lodash.debounce)(() => {
      this.props.loadRichHistory(this.props.exploreId);
    }, 300));

    RichHistory_defineProperty(this, "onChangeRetentionPeriod", retentionPeriod => {
      if (retentionPeriod.value !== undefined) {
        this.updateSettings({
          retentionPeriod: retentionPeriod.value
        });
      }
    });

    RichHistory_defineProperty(this, "toggleStarredTabAsFirstTab", () => this.updateSettings({
      starredTabAsFirstTab: !this.props.richHistorySettings.starredTabAsFirstTab
    }));

    RichHistory_defineProperty(this, "toggleActiveDatasourceOnly", () => this.updateSettings({
      activeDatasourceOnly: !this.props.richHistorySettings.activeDatasourceOnly
    }));
  }

  render() {
    const {
      richHistory,
      height,
      exploreId,
      deleteRichHistory,
      onClose,
      firstTab,
      activeDatasourceInstance
    } = this.props;
    const QueriesTab = {
      label: 'Query history',
      value: Tabs.RichHistory,
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistoryQueriesTab, {
        queries: richHistory,
        updateFilters: this.updateFilters,
        clearRichHistoryResults: () => this.props.clearRichHistoryResults(this.props.exploreId),
        activeDatasourceInstance: activeDatasourceInstance,
        richHistorySettings: this.props.richHistorySettings,
        richHistorySearchFilters: this.props.richHistorySearchFilters,
        exploreId: exploreId,
        height: height
      }),
      icon: 'history'
    };
    const StarredTab = {
      label: 'Starred',
      value: Tabs.Starred,
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistoryStarredTab, {
        queries: richHistory,
        activeDatasourceInstance: activeDatasourceInstance,
        updateFilters: this.updateFilters,
        clearRichHistoryResults: () => this.props.clearRichHistoryResults(this.props.exploreId),
        richHistorySettings: this.props.richHistorySettings,
        richHistorySearchFilters: this.props.richHistorySearchFilters,
        exploreId: exploreId
      }),
      icon: 'star'
    };
    const SettingsTab = {
      label: 'Settings',
      value: Tabs.Settings,
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistorySettingsTab, {
        retentionPeriod: this.props.richHistorySettings.retentionPeriod,
        starredTabAsFirstTab: this.props.richHistorySettings.starredTabAsFirstTab,
        activeDatasourceOnly: this.props.richHistorySettings.activeDatasourceOnly,
        onChangeRetentionPeriod: this.onChangeRetentionPeriod,
        toggleStarredTabAsFirstTab: this.toggleStarredTabAsFirstTab,
        toggleactiveDatasourceOnly: this.toggleActiveDatasourceOnly,
        deleteRichHistory: deleteRichHistory
      }),
      icon: 'sliders-v-alt'
    };
    let tabs = [QueriesTab, StarredTab, SettingsTab];
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TabbedContainer, {
      tabs: tabs,
      onClose: onClose,
      defaultTab: firstTab,
      closeIconTooltip: "Close query history"
    });
  }

}

const RichHistory = (0,grafana_ui_src.withTheme)(UnThemedRichHistory);
;// CONCATENATED MODULE: ./public/app/features/explore/RichHistory/RichHistoryContainer.tsx
var RichHistoryContainer_span;

// Libraries


 // Types

// Components, enums


 //Actions



function RichHistoryContainer_mapStateToProps(state, _ref) {
  let {
    exploreId
  } = _ref;
  const explore = state.explore; // @ts-ignore

  const item = explore[exploreId];
  const richHistorySearchFilters = item.richHistorySearchFilters;
  const richHistorySettings = explore.richHistorySettings;
  const {
    datasourceInstance
  } = item;
  const firstTab = richHistorySettings !== null && richHistorySettings !== void 0 && richHistorySettings.starredTabAsFirstTab ? Tabs.Starred : Tabs.RichHistory;
  const {
    richHistory
  } = item;
  return {
    richHistory,
    firstTab,
    activeDatasourceInstance: datasourceInstance === null || datasourceInstance === void 0 ? void 0 : datasourceInstance.name,
    richHistorySettings,
    richHistorySearchFilters
  };
}

const RichHistoryContainer_mapDispatchToProps = {
  initRichHistory: state_history/* initRichHistory */.sO,
  loadRichHistory: state_history/* loadRichHistory */.TV,
  clearRichHistoryResults: state_history/* clearRichHistoryResults */.Cs,
  updateHistorySettings: state_history/* updateHistorySettings */.ch,
  updateHistorySearchFilters: state_history/* updateHistorySearchFilters */.KZ,
  deleteRichHistory: state_history/* deleteRichHistory */.ik
};
const RichHistoryContainer_connector = (0,es.connect)(RichHistoryContainer_mapStateToProps, RichHistoryContainer_mapDispatchToProps);
function RichHistoryContainer(props) {
  const theme = (0,grafana_ui_src.useTheme2)();
  const [height, setHeight] = (0,react.useState)(theme.components.horizontalDrawer.defaultHeight);
  const {
    richHistory,
    width,
    firstTab,
    activeDatasourceInstance,
    exploreId,
    deleteRichHistory,
    initRichHistory,
    loadRichHistory,
    clearRichHistoryResults,
    richHistorySettings,
    updateHistorySettings,
    richHistorySearchFilters,
    updateHistorySearchFilters,
    onClose
  } = props;
  (0,react.useEffect)(() => {
    initRichHistory();
  }, [initRichHistory]);

  if (!richHistorySettings) {
    return RichHistoryContainer_span || (RichHistoryContainer_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "Loading..."
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreDrawer, {
    width: width,
    onResize: (_e, _dir, ref) => {
      setHeight(Number(ref.style.height.slice(0, -2)));
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistory, {
      richHistory: richHistory,
      firstTab: firstTab,
      activeDatasourceInstance: activeDatasourceInstance,
      exploreId: exploreId,
      onClose: onClose,
      height: height,
      deleteRichHistory: deleteRichHistory,
      richHistorySettings: richHistorySettings,
      richHistorySearchFilters: richHistorySearchFilters,
      updateHistorySettings: updateHistorySettings,
      updateHistorySearchFilters: updateHistorySearchFilters,
      loadRichHistory: loadRichHistory,
      clearRichHistoryResults: clearRichHistoryResults
    })
  });
}
/* harmony default export */ const RichHistory_RichHistoryContainer = (RichHistoryContainer_connector(RichHistoryContainer));
;// CONCATENATED MODULE: ./public/app/features/explore/SecondaryActions.tsx






const SecondaryActions_getStyles = theme => {
  return {
    containerMargin: emotion_css_esm.css`
      margin-top: ${theme.spacing(2)};
    `
  };
};

function SecondaryActions(props) {
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = SecondaryActions_getStyles(theme);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.containerMargin,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      children: [!props.addQueryRowButtonHidden && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        "aria-label": "Add row button",
        onClick: props.onClickAddQueryRowButton,
        disabled: props.addQueryRowButtonDisabled,
        icon: "plus",
        children: "Add query"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        "aria-label": "Rich history button",
        className: (0,emotion_css_esm.cx)({
          ['explore-active-button']: props.richHistoryButtonActive
        }),
        onClick: props.onClickRichHistoryButton,
        icon: "history",
        children: "Query history"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        "aria-label": "Query inspector button",
        className: (0,emotion_css_esm.cx)({
          ['explore-active-button']: props.queryInspectorButtonActive
        }),
        onClick: props.onClickQueryInspectorButton,
        icon: "info-circle",
        children: "Inspector"
      })]
    })
  });
}
// EXTERNAL MODULE: ./public/app/core/config.ts
var core_config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/constants.ts
var constants = __webpack_require__("./public/app/core/constants.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/TableContainer.tsx











function TableContainer_mapStateToProps(state, _ref) {
  let {
    exploreId
  } = _ref;
  const explore = state.explore; // @ts-ignore

  const item = explore[exploreId];
  const {
    loading: loadingInState,
    tableResult,
    range
  } = item;
  const loading = tableResult && tableResult.length > 0 ? false : loadingInState;
  return {
    loading,
    tableResult,
    range
  };
}

const TableContainer_mapDispatchToProps = {
  splitOpen: main/* splitOpen */.bW
};
const TableContainer_connector = (0,es.connect)(TableContainer_mapStateToProps, TableContainer_mapDispatchToProps);
class TableContainer extends react.PureComponent {
  getTableHeight() {
    const {
      tableResult
    } = this.props;

    if (!tableResult || tableResult.length === 0) {
      return 200;
    } // tries to estimate table height


    return Math.max(Math.min(600, tableResult.length * 35) + 35);
  }

  render() {
    var _dataFrame, _dataFrame2;

    const {
      loading,
      onCellFilterAdded,
      tableResult,
      width,
      splitOpen,
      range,
      ariaLabel,
      timeZone
    } = this.props;
    const height = this.getTableHeight();
    const tableWidth = width - core_config/* config.theme.panelPadding */.vc.theme.panelPadding * 2 - constants/* PANEL_BORDER */.QO;
    let dataFrame = tableResult;

    if ((_dataFrame = dataFrame) !== null && _dataFrame !== void 0 && _dataFrame.length) {
      dataFrame = (0,grafana_data_src.applyFieldOverrides)({
        data: [dataFrame],
        timeZone,
        theme: core_config/* config.theme2 */.vc.theme2,
        replaceVariables: v => v,
        fieldConfig: {
          defaults: {},
          overrides: []
        }
      })[0]; // Bit of code smell here. We need to add links here to the frame modifying the frame on every render.
      // Should work fine in essence but still not the ideal way to pass props. In logs container we do this
      // differently and sidestep this getLinks API on a dataframe

      for (const field of dataFrame.fields) {
        field.getLinks = config => {
          return (0,links/* getFieldLinksForExplore */.a)({
            field,
            rowIndex: config.valueRowIndex,
            splitOpenFn: splitOpen,
            range,
            dataFrame: dataFrame
          });
        };
      }
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
      label: "Table",
      loading: loading,
      isOpen: true,
      children: (_dataFrame2 = dataFrame) !== null && _dataFrame2 !== void 0 && _dataFrame2.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Table, {
        ariaLabel: ariaLabel,
        data: dataFrame,
        width: tableWidth,
        height: height,
        onCellFilterAdded: onCellFilterAdded
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(MetaInfoText, {
        metaItems: [{
          value: '0 series returned'
        }]
      })
    });
  }

}
/* harmony default export */ const explore_TableContainer = (TableContainer_connector(TableContainer));
// EXTERNAL MODULE: ./packages/jaeger-ui-components/src/TracePageHeader/TracePageSearchBar.tsx + 2 modules
var TracePageSearchBar = __webpack_require__("./packages/jaeger-ui-components/src/TracePageHeader/TracePageSearchBar.tsx");
// EXTERNAL MODULE: ./packages/jaeger-ui-components/src/TraceTimelineViewer/VirtualizedTraceView.tsx + 21 modules
var VirtualizedTraceView = __webpack_require__("./packages/jaeger-ui-components/src/TraceTimelineViewer/VirtualizedTraceView.tsx");
// EXTERNAL MODULE: ./public/app/features/explore/TraceView/TraceView.tsx + 5 modules
var TraceView = __webpack_require__("./public/app/features/explore/TraceView/TraceView.tsx");
// EXTERNAL MODULE: ./public/app/features/explore/TraceView/useSearch.ts
var useSearch = __webpack_require__("./public/app/features/explore/TraceView/useSearch.ts");
// EXTERNAL MODULE: ./public/app/features/explore/TraceView/utils/transform.ts
var transform = __webpack_require__("./public/app/features/explore/TraceView/utils/transform.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/TraceView/TraceViewContainer.tsx











function TraceViewContainer(props) {
  // At this point we only show single trace
  const frame = props.dataFrames[0];
  const {
    dataFrames,
    splitOpenFn,
    exploreId,
    scrollElement,
    topOfViewRef,
    queryResponse
  } = props;
  const traceProp = (0,react.useMemo)(() => (0,transform/* transformDataFrames */.N)(frame), [frame]);
  const {
    search,
    setSearch,
    spanFindMatches
  } = (0,useSearch/* useSearch */.R)(traceProp === null || traceProp === void 0 ? void 0 : traceProp.spans);
  const [focusedSpanIdForSearch, setFocusedSpanIdForSearch] = (0,react.useState)('');
  const [searchBarSuffix, setSearchBarSuffix] = (0,react.useState)('');
  const datasource = (0,es.useSelector)(state => {
    var _state$explore$dataso, _state$explore;

    return (_state$explore$dataso = (_state$explore = state.explore[props.exploreId]) === null || _state$explore === void 0 ? void 0 : _state$explore.datasourceInstance) !== null && _state$explore$dataso !== void 0 ? _state$explore$dataso : undefined;
  });

  if (!traceProp) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TracePageSearchBar/* default */.Z, {
      navigable: true,
      searchValue: search,
      setSearch: setSearch,
      spanFindMatches: spanFindMatches,
      searchBarSuffix: searchBarSuffix,
      setSearchBarSuffix: setSearchBarSuffix,
      focusedSpanIdForSearch: focusedSpanIdForSearch,
      setFocusedSpanIdForSearch: setFocusedSpanIdForSearch
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
      label: "Trace View",
      isOpen: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TraceView/* TraceView */.m, {
        exploreId: exploreId,
        dataFrames: dataFrames,
        splitOpenFn: splitOpenFn,
        scrollElement: scrollElement,
        traceProp: traceProp,
        spanFindMatches: spanFindMatches,
        search: search,
        focusedSpanIdForSearch: focusedSpanIdForSearch,
        queryResponse: queryResponse,
        datasource: datasource,
        topOfViewRef: topOfViewRef,
        topOfViewRefType: VirtualizedTraceView/* TopOfViewRefType.Explore */.l4.Explore
      })
    })]
  });
}
// EXTERNAL MODULE: ./public/app/features/explore/state/explorePane.ts
var explorePane = __webpack_require__("./public/app/features/explore/state/explorePane.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/Explore.tsx
var Explore_div, _NoData;

function Explore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































const Explore_getStyles = theme => {
  return {
    exploreMain: emotion_css_esm.css`
      label: exploreMain;
      // Is needed for some transition animations to work.
      position: relative;
      margin-top: 21px;
    `,
    button: emotion_css_esm.css`
      label: button;
      margin: 1em 4px 0 0;
    `,
    queryContainer: emotion_css_esm.css`
      label: queryContainer;
      // Need to override normal css class and don't want to count on ordering of the classes in html.
      height: auto !important;
      flex: unset !important;
      display: unset !important;
      padding: ${theme.spacing(1)};
    `
  };
};

var Explore_ExploreDrawer;

(function (ExploreDrawer) {
  ExploreDrawer[ExploreDrawer["RichHistory"] = 0] = "RichHistory";
  ExploreDrawer[ExploreDrawer["QueryInspector"] = 1] = "QueryInspector";
})(Explore_ExploreDrawer || (Explore_ExploreDrawer = {}));

/**
 * Explore provides an area for quick query iteration for a given datasource.
 * Once a datasource is selected it populates the query section at the top.
 * When queries are run, their results are being displayed in the main section.
 * The datasource determines what kind of query editor it brings, and what kind
 * of results viewers it supports. The state is managed entirely in Redux.
 *
 * SPLIT VIEW
 *
 * Explore can have two Explore areas side-by-side. This is handled in `Wrapper.tsx`.
 * Since there can be multiple Explores (e.g., left and right) each action needs
 * the `exploreId` as first parameter so that the reducer knows which Explore state
 * is affected.
 *
 * DATASOURCE REQUESTS
 *
 * A click on Run Query creates transactions for all DataQueries for all expanded
 * result viewers. New runs are discarding previous runs. Upon completion a transaction
 * saves the result. The result viewers construct their data from the currently existing
 * transactions.
 *
 * The result viewers determine some of the query options sent to the datasource, e.g.,
 * `format`, to indicate eventual transformations by the datasources' result transformers.
 */
class Explore extends react.PureComponent {
  constructor(props) {
    super(props);

    Explore_defineProperty(this, "scrollElement", void 0);

    Explore_defineProperty(this, "absoluteTimeUnsubsciber", void 0);

    Explore_defineProperty(this, "topOfViewRef", /*#__PURE__*/(0,react.createRef)());

    Explore_defineProperty(this, "onChangeTime", rawRange => {
      const {
        updateTimeRange,
        exploreId
      } = this.props;
      updateTimeRange({
        exploreId,
        rawRange
      });
    });

    Explore_defineProperty(this, "onClickExample", query => {
      this.props.setQueries(this.props.exploreId, [query]);
    });

    Explore_defineProperty(this, "onCellFilterAdded", filter => {
      const {
        value,
        key,
        operator
      } = filter;

      if (operator === types/* FILTER_FOR_OPERATOR */.PT) {
        this.onClickFilterLabel(key, value);
      }

      if (operator === types/* FILTER_OUT_OPERATOR */.tE) {
        this.onClickFilterOutLabel(key, value);
      }
    });

    Explore_defineProperty(this, "onClickFilterLabel", (key, value) => {
      this.onModifyQueries({
        type: 'ADD_FILTER',
        key,
        value
      });
    });

    Explore_defineProperty(this, "onClickFilterOutLabel", (key, value) => {
      this.onModifyQueries({
        type: 'ADD_FILTER_OUT',
        key,
        value
      });
    });

    Explore_defineProperty(this, "onClickAddQueryRowButton", () => {
      const {
        exploreId,
        queryKeys
      } = this.props;
      this.props.addQueryRow(exploreId, queryKeys.length);
    });

    Explore_defineProperty(this, "onMakeAbsoluteTime", () => {
      const {
        makeAbsoluteTime
      } = this.props;
      makeAbsoluteTime();
    });

    Explore_defineProperty(this, "onModifyQueries", (action, index) => {
      const {
        datasourceInstance
      } = this.props;

      if (datasourceInstance !== null && datasourceInstance !== void 0 && datasourceInstance.modifyQuery) {
        const modifier = (queries, modification) => datasourceInstance.modifyQuery(queries, modification);

        this.props.modifyQueries(this.props.exploreId, action, modifier, index);
      }
    });

    Explore_defineProperty(this, "onResize", size => {
      this.props.changeSize(this.props.exploreId, size);
    });

    Explore_defineProperty(this, "onStartScanning", () => {
      // Scanner will trigger a query
      this.props.scanStart(this.props.exploreId);
    });

    Explore_defineProperty(this, "onStopScanning", () => {
      this.props.scanStopAction({
        exploreId: this.props.exploreId
      });
    });

    Explore_defineProperty(this, "onUpdateTimeRange", absoluteRange => {
      const {
        exploreId,
        updateTimeRange
      } = this.props;
      updateTimeRange({
        exploreId,
        absoluteRange
      });
    });

    Explore_defineProperty(this, "onChangeGraphStyle", graphStyle => {
      const {
        exploreId,
        changeGraphStyle
      } = this.props;
      changeGraphStyle(exploreId, graphStyle);
    });

    Explore_defineProperty(this, "toggleShowRichHistory", () => {
      this.setState(state => {
        return {
          openDrawer: state.openDrawer === Explore_ExploreDrawer.RichHistory ? undefined : Explore_ExploreDrawer.RichHistory
        };
      });
    });

    Explore_defineProperty(this, "toggleShowQueryInspector", () => {
      this.setState(state => {
        return {
          openDrawer: state.openDrawer === Explore_ExploreDrawer.QueryInspector ? undefined : Explore_ExploreDrawer.QueryInspector
        };
      });
    });

    Explore_defineProperty(this, "memoizedGetNodeGraphDataFrames", (0,memoize_one_esm/* default */.Z)(utils/* getNodeGraphDataFrames */.Ee));

    this.state = {
      openDrawer: undefined
    };
  }

  componentDidMount() {
    this.absoluteTimeUnsubsciber = app_events/* default.subscribe */.Z.subscribe(events/* AbsoluteTimeEvent */.QI, this.onMakeAbsoluteTime);
  }

  componentWillUnmount() {
    var _this$absoluteTimeUns;

    (_this$absoluteTimeUns = this.absoluteTimeUnsubsciber) === null || _this$absoluteTimeUns === void 0 ? void 0 : _this$absoluteTimeUns.unsubscribe();
  }

  renderEmptyState() {
    return Explore_div || (Explore_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "explore-container",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NoDataSourceCallToAction, {})
    }));
  }

  renderNoData() {
    return _NoData || (_NoData = /*#__PURE__*/(0,jsx_runtime.jsx)(NoData, {}));
  }

  renderGraphPanel(width) {
    const {
      graphResult,
      absoluteRange,
      timeZone,
      splitOpen,
      queryResponse,
      loading,
      theme,
      graphStyle
    } = this.props;
    const spacing = parseInt(theme.spacing(2).slice(0, -2), 10);

    const label = /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreGraphLabel, {
      graphStyle: graphStyle,
      onChangeGraphStyle: this.onChangeGraphStyle
    });

    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Collapse, {
      label: label,
      loading: loading,
      isOpen: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExploreGraph, {
        graphStyle: graphStyle,
        data: graphResult,
        height: 400,
        width: width - spacing,
        absoluteRange: absoluteRange,
        onChangeTime: this.onUpdateTimeRange,
        timeZone: timeZone,
        annotations: queryResponse.annotations,
        splitOpenFn: splitOpen,
        loadingState: queryResponse.state
      })
    });
  }

  renderLogsVolume(width) {
    const {
      logsVolumeData,
      exploreId,
      loadLogsVolumeData,
      absoluteRange,
      timeZone,
      splitOpen
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(LogsVolumePanel, {
      absoluteRange: absoluteRange,
      width: width,
      logsVolumeData: logsVolumeData,
      onUpdateTimeRange: this.onUpdateTimeRange,
      timeZone: timeZone,
      splitOpen: splitOpen,
      onLoadLogsVolume: () => loadLogsVolumeData(exploreId)
    });
  }

  renderTablePanel(width) {
    const {
      exploreId,
      datasourceInstance,
      timeZone
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(explore_TableContainer, {
      ariaLabel: grafana_e2e_selectors_src/* selectors.pages.Explore.General.table */.wl.pages.Explore.General.table,
      width: width,
      exploreId: exploreId,
      onCellFilterAdded: datasourceInstance !== null && datasourceInstance !== void 0 && datasourceInstance.modifyQuery ? this.onCellFilterAdded : undefined,
      timeZone: timeZone
    });
  }

  renderLogsPanel(width) {
    const {
      exploreId,
      syncedTimes,
      theme,
      queryResponse
    } = this.props;
    const spacing = parseInt(theme.spacing(2).slice(0, -2), 10);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(explore_LogsContainer, {
      exploreId: exploreId,
      loadingState: queryResponse.state,
      syncedTimes: syncedTimes,
      width: width - spacing,
      onClickFilterLabel: this.onClickFilterLabel,
      onClickFilterOutLabel: this.onClickFilterOutLabel,
      onStartScanning: this.onStartScanning,
      onStopScanning: this.onStopScanning
    });
  }

  renderNodeGraphPanel() {
    const {
      exploreId,
      showTrace,
      queryResponse
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(NodeGraphContainer, {
      dataFrames: this.memoizedGetNodeGraphDataFrames(queryResponse.series),
      exploreId: exploreId,
      withTraceView: showTrace
    });
  }

  renderTraceViewPanel() {
    const {
      queryResponse,
      splitOpen,
      exploreId
    } = this.props;
    const dataFrames = queryResponse.series.filter(series => {
      var _series$meta;

      return ((_series$meta = series.meta) === null || _series$meta === void 0 ? void 0 : _series$meta.preferredVisualisationType) === 'trace';
    });
    return (// If there is no data (like 404) we show a separate error so no need to show anything here
      dataFrames.length && /*#__PURE__*/(0,jsx_runtime.jsx)(TraceViewContainer, {
        exploreId: exploreId,
        dataFrames: dataFrames,
        splitOpenFn: splitOpen,
        scrollElement: this.scrollElement,
        queryResponse: queryResponse,
        topOfViewRef: this.topOfViewRef
      })
    );
  }

  render() {
    const {
      datasourceInstance,
      datasourceMissing,
      exploreId,
      graphResult,
      queryResponse,
      isLive,
      theme,
      showMetrics,
      showTable,
      showLogs,
      showTrace,
      showNodeGraph,
      timeZone
    } = this.props;
    const {
      openDrawer
    } = this.state;
    const styles = Explore_getStyles(theme);
    const showPanels = queryResponse && queryResponse.state !== grafana_data_src.LoadingState.NotStarted;
    const showRichHistory = openDrawer === Explore_ExploreDrawer.RichHistory;
    const showQueryInspector = openDrawer === Explore_ExploreDrawer.QueryInspector;
    const showNoData = queryResponse.state === grafana_data_src.LoadingState.Done && [queryResponse.logsFrames, queryResponse.graphFrames, queryResponse.nodeGraphFrames, queryResponse.tableFrames, queryResponse.traceFrames].every(e => e.length === 0);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.CustomScrollbar, {
      testId: grafana_e2e_selectors_src/* selectors.pages.Explore.General.scrollView */.wl.pages.Explore.General.scrollView,
      autoHeightMin: '100%',
      scrollRefCallback: scrollElement => this.scrollElement = scrollElement || undefined,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExploreToolbar, {
        exploreId: exploreId,
        onChangeTime: this.onChangeTime,
        topOfViewRef: this.topOfViewRef
      }), datasourceMissing ? this.renderEmptyState() : null, datasourceInstance && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "explore-container",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (0,emotion_css_esm.cx)('panel-container', styles.queryContainer),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(QueryRows, {
            exploreId: exploreId
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SecondaryActions, {
            addQueryRowButtonDisabled: isLive // We cannot show multiple traces at the same time right now so we do not show add query button.
            //TODO:unification
            ,
            addQueryRowButtonHidden: false,
            richHistoryButtonActive: showRichHistory,
            queryInspectorButtonActive: showQueryInspector,
            onClickAddQueryRowButton: this.onClickAddQueryRowButton,
            onClickRichHistoryButton: this.toggleShowRichHistory,
            onClickQueryInspectorButton: this.toggleShowQueryInspector
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponseErrorContainer, {
            exploreId: exploreId
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.Z, {
          onResize: this.onResize,
          disableHeight: true,
          children: _ref => {
            let {
              width
            } = _ref;

            if (width === 0) {
              return null;
            }

            return /*#__PURE__*/(0,jsx_runtime.jsx)("main", {
              className: (0,emotion_css_esm.cx)(styles.exploreMain),
              style: {
                width
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.ErrorBoundaryAlert, {
                children: [showPanels && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [showMetrics && graphResult && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderGraphPanel(width)
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderLogsVolume(width)
                  }), showTable && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderTablePanel(width)
                  }), showLogs && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderLogsPanel(width)
                  }), showNodeGraph && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderNodeGraphPanel()
                  }), showTrace && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderTraceViewPanel()
                  }), showNoData && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
                    children: this.renderNoData()
                  })]
                }), showRichHistory && /*#__PURE__*/(0,jsx_runtime.jsx)(RichHistory_RichHistoryContainer, {
                  width: width,
                  exploreId: exploreId,
                  onClose: this.toggleShowRichHistory
                }), showQueryInspector && /*#__PURE__*/(0,jsx_runtime.jsx)(explore_ExploreQueryInspector, {
                  exploreId: exploreId,
                  width: width,
                  onClose: this.toggleShowQueryInspector,
                  timeZone: timeZone
                })]
              })
            });
          }
        })]
      })]
    });
  }

}

function Explore_mapStateToProps(state, _ref2) {
  let {
    exploreId
  } = _ref2;
  const explore = state.explore;
  const {
    syncedTimes
  } = explore;
  const item = explore[exploreId];
  const timeZone = (0,state_selectors/* getTimeZone */.Z)(state.user);
  const {
    datasourceInstance,
    datasourceMissing,
    queryKeys,
    isLive,
    graphResult,
    logsVolumeData,
    logsResult,
    showLogs,
    showMetrics,
    showTable,
    showTrace,
    absoluteRange,
    queryResponse,
    showNodeGraph,
    loading,
    graphStyle
  } = item;
  return {
    datasourceInstance,
    datasourceMissing,
    queryKeys,
    isLive,
    graphResult,
    logsVolumeData,
    logsResult: logsResult !== null && logsResult !== void 0 ? logsResult : undefined,
    absoluteRange,
    queryResponse,
    syncedTimes,
    timeZone,
    showLogs,
    showMetrics,
    showTable,
    showTrace,
    showNodeGraph,
    loading,
    graphStyle
  };
}

const Explore_mapDispatchToProps = {
  changeSize: explorePane/* changeSize */.qN,
  changeGraphStyle: explorePane/* changeGraphStyle */.Rl,
  modifyQueries: state_query/* modifyQueries */.sK,
  scanStart: state_query/* scanStart */.EA,
  scanStopAction: state_query/* scanStopAction */.P4,
  setQueries: state_query/* setQueries */.KO,
  updateTimeRange: time/* updateTimeRange */.cD,
  makeAbsoluteTime: time/* makeAbsoluteTime */.F9,
  loadLogsVolumeData: state_query/* loadLogsVolumeData */.QH,
  addQueryRow: state_query/* addQueryRow */.CS,
  splitOpen: main/* splitOpen */.bW
};
const Explore_connector = (0,es.connect)(Explore_mapStateToProps, Explore_mapDispatchToProps);
/* harmony default export */ const explore_Explore = ((0,redux.compose)(Explore_connector, grafana_ui_src.withTheme2)(Explore));
;// CONCATENATED MODULE: ./public/app/features/explore/ExplorePaneContainer.tsx
function ExplorePaneContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/**
 * This component is responsible for handling initialization of an Explore pane and triggering synchronization
 * of state based on URL changes and preventing any infinite loops.
 */
class ExplorePaneContainerUnconnected extends react.PureComponent {
  constructor(props) {
    super(props);

    ExplorePaneContainer_defineProperty(this, "el", void 0);

    ExplorePaneContainer_defineProperty(this, "exploreEvents", void 0);

    ExplorePaneContainer_defineProperty(this, "refreshExplore", prevUrlQuery => {
      const {
        exploreId,
        urlQuery
      } = this.props; // Update state from url only if it changed and only if the change wasn't initialised by redux to prevent any loops

      if (urlQuery !== prevUrlQuery && urlQuery !== main/* lastSavedUrl */.IS[exploreId]) {
        this.props.refreshExplore(exploreId, urlQuery);
      }
    });

    ExplorePaneContainer_defineProperty(this, "getRef", el => {
      this.el = el;
    });

    this.exploreEvents = new grafana_data_src.EventBusSrv();
    this.state = {
      openDrawer: undefined
    };
  }

  componentDidMount() {
    var _this$el$offsetWidth, _this$el;

    const {
      initialized,
      exploreId,
      initialDatasource,
      initialQueries,
      initialRange,
      panelsState
    } = this.props;
    const width = (_this$el$offsetWidth = (_this$el = this.el) === null || _this$el === void 0 ? void 0 : _this$el.offsetWidth) !== null && _this$el$offsetWidth !== void 0 ? _this$el$offsetWidth : 0; // initialize the whole explore first time we mount and if browser history contains a change in datasource

    if (!initialized) {
      this.props.initializeExplore(exploreId, initialDatasource, initialQueries, initialRange, width, this.exploreEvents, panelsState);
    }
  }

  componentWillUnmount() {
    this.exploreEvents.removeAllListeners();
    this.props.cleanupPaneAction({
      exploreId: this.props.exploreId
    });
  }

  componentDidUpdate(prevProps) {
    this.refreshExplore(prevProps.urlQuery);
  }

  render() {
    const exploreClass = this.props.split ? 'explore explore-split' : 'explore';
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: exploreClass,
      ref: this.getRef,
      "data-testid": grafana_e2e_selectors_src/* selectors.pages.Explore.General.container */.wl.pages.Explore.General.container,
      children: this.props.initialized && /*#__PURE__*/(0,jsx_runtime.jsx)(explore_Explore, {
        exploreId: this.props.exploreId
      })
    });
  }

}

const ensureQueriesMemoized = (0,memoize_one_esm/* default */.Z)(utils_explore/* ensureQueries */.Z8);
const getTimeRangeFromUrlMemoized = (0,memoize_one_esm/* default */.Z)(utils_explore/* getTimeRangeFromUrl */.vP);

function ExplorePaneContainer_mapStateToProps(state, props) {
  var _state$explore$props$;

  const urlState = (0,utils_explore/* parseUrlState */.J5)(props.urlQuery);
  const timeZone = (0,state_selectors/* getTimeZone */.Z)(state.user);
  const fiscalYearStartMonth = (0,state_selectors/* getFiscalYearStartMonth */.i)(state.user);
  const {
    datasource,
    queries,
    range: urlRange,
    panelsState
  } = urlState || {};
  const initialDatasource = datasource || store/* default.get */.Z.get((0,utils_explore/* lastUsedDatasourceKeyForOrgId */.I$)(state.user.orgId));
  const initialQueries = ensureQueriesMemoized(queries);
  const initialRange = urlRange ? getTimeRangeFromUrlMemoized(urlRange, timeZone, fiscalYearStartMonth) : (0,utils_explore/* getTimeRange */.OQ)(timeZone, utils_explore/* DEFAULT_RANGE */.UI, fiscalYearStartMonth);
  return {
    initialized: (_state$explore$props$ = state.explore[props.exploreId]) === null || _state$explore$props$ === void 0 ? void 0 : _state$explore$props$.initialized,
    initialDatasource,
    initialQueries,
    initialRange,
    panelsState
  };
}

const ExplorePaneContainer_mapDispatchToProps = {
  initializeExplore: explorePane/* initializeExplore */.CK,
  refreshExplore: explorePane/* refreshExplore */.Om,
  cleanupPaneAction: main/* cleanupPaneAction */.Jt
};
const ExplorePaneContainer_connector = (0,es.connect)(ExplorePaneContainer_mapStateToProps, ExplorePaneContainer_mapDispatchToProps);
const ExplorePaneContainer = ExplorePaneContainer_connector(ExplorePaneContainerUnconnected);
;// CONCATENATED MODULE: ./public/app/features/explore/Wrapper.tsx













const Wrapper_mapStateToProps = state => {
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'explore'),
    exploreState: state.explore
  };
};

const Wrapper_mapDispatchToProps = {
  resetExploreAction: main/* resetExploreAction */.WK,
  richHistoryUpdatedAction: main/* richHistoryUpdatedAction */.ZU
};
const Wrapper_connector = (0,es.connect)(Wrapper_mapStateToProps, Wrapper_mapDispatchToProps);

class WrapperUnconnected extends react.PureComponent {
  componentWillUnmount() {
    this.props.resetExploreAction({});
  }

  componentDidMount() {
    main/* lastSavedUrl.left */.IS.left = undefined;
    main/* lastSavedUrl.right */.IS.right = undefined; // timeSrv (which is used internally) on init reads `from` and `to` param from the URL and updates itself
    // using those value regardless of what is passed to the init method.
    // The updated value is then used by Explore to get the range for each pane.
    // This means that if `from` and `to` parameters are present in the URL,
    // it would be impossible to change the time range in Explore.
    // We are only doing this on mount for 2 reasons:
    // 1: Doing it on update means we'll enter a render loop.
    // 2: when parsing time in Explore (before feeding it to timeSrv) we make sure `from` is before `to` inside
    //    each pane state in order to not trigger un URL update from timeSrv.

    const searchParams = src.locationService.getSearchObject();

    if (searchParams.from || searchParams.to) {
      src.locationService.partial({
        from: undefined,
        to: undefined
      }, true);
    }
  }

  componentDidUpdate(prevProps) {
    var _this$props$exploreSt, _this$props$exploreSt2, _this$props$exploreSt3, _this$props$exploreSt4;

    const {
      left,
      right
    } = this.props.queryParams;
    const hasSplit = Boolean(left) && Boolean(right);
    const datasourceTitle = hasSplit ? `${(_this$props$exploreSt = this.props.exploreState.left.datasourceInstance) === null || _this$props$exploreSt === void 0 ? void 0 : _this$props$exploreSt.name} | ${(_this$props$exploreSt2 = this.props.exploreState.right) === null || _this$props$exploreSt2 === void 0 ? void 0 : (_this$props$exploreSt3 = _this$props$exploreSt2.datasourceInstance) === null || _this$props$exploreSt3 === void 0 ? void 0 : _this$props$exploreSt3.name}` : `${(_this$props$exploreSt4 = this.props.exploreState.left.datasourceInstance) === null || _this$props$exploreSt4 === void 0 ? void 0 : _this$props$exploreSt4.name}`;
    const documentTitle = `${this.props.navModel.main.text} - ${datasourceTitle} - ${Branding/* Branding.AppTitle */.c.AppTitle}`;
    document.title = documentTitle;
  }

  render() {
    const {
      left,
      right
    } = this.props.queryParams;
    const hasSplit = Boolean(left) && Boolean(right);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "page-scrollbar-wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ExploreActions, {
        exploreIdLeft: explore/* ExploreId.left */.K.left,
        exploreIdRight: explore/* ExploreId.right */.K.right
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "explore-wrapper",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
          style: "page",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExplorePaneContainer, {
            split: hasSplit,
            exploreId: explore/* ExploreId.left */.K.left,
            urlQuery: left
          })
        }), hasSplit && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ErrorBoundaryAlert, {
          style: "page",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ExplorePaneContainer, {
            split: hasSplit,
            exploreId: explore/* ExploreId.right */.K.right,
            urlQuery: right
          })
        })]
      })]
    });
  }

}

const Wrapper = Wrapper_connector(WrapperUnconnected);
/* harmony default export */ const explore_Wrapper = (Wrapper);

/***/ }),

/***/ "./public/app/features/explore/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getExploreItemSelector),
/* harmony export */   "p": () => (/* binding */ isSplit)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const isSplit = state => Boolean(state.explore[app_types__WEBPACK_IMPORTED_MODULE_0__/* .ExploreId.left */ .Kd.left] && state.explore[app_types__WEBPACK_IMPORTED_MODULE_0__/* .ExploreId.right */ .Kd.right]);
const getExploreItemSelector = exploreId => state => state.explore[exploreId];

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "./.yarn/cache/fast-memoize-npm-2.5.2-f42a7c6940-79fa759719.zip/node_modules/fast-memoize/src/index.js":
/***/ ((module) => {

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3)
  var cacheKey = serializer(args)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null)
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
}

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value
}

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
}

//
// API
//

module.exports = memoize
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
}


/***/ }),

/***/ "./.yarn/cache/immer-npm-9.0.12-e8cd7358fa-bcbec6d76d.zip/node_modules/immer/dist/immer.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ })

}]);