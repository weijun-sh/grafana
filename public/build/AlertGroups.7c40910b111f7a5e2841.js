"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2415],{

/***/ "./public/app/features/alerting/unified/AlertGroups.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unified_AlertGroups)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/hooks/useQueryParams.ts
var useQueryParams = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx
var NoAlertManagerWarning = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
// EXTERNAL MODULE: ./public/app/plugins/datasource/alertmanager/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertLabels.tsx
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/CollapseToggle.tsx
var CollapseToggle = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx
var DynamicTableWithGuidelines = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx
var AmAlertStateTag = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var app_types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/access-control.ts
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/misc.ts
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx
var AnnotationDetailsField = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/Authorize.tsx
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx














const AlertDetails = _ref => {
  let {
    alert,
    alertManagerSourceName
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const instancePermissions = (0,access_control/* getInstancesPermissions */.QX)(alertManagerSourceName); // For Grafana Managed alerts the Generator URL redirects to the alert rule edit page, so update permission is required
  // For external alert manager the Generator URL redirects to an external service which we don't control

  const isGrafanaSource = (0,datasource/* isGrafanaRulesSource */.HY)(alertManagerSourceName);
  const isSeeSourceButtonEnabled = isGrafanaSource ? context_srv/* contextSrv.hasPermission */.Vt.hasPermission(app_types/* AccessControlAction.AlertingRuleRead */.bW.AlertingRuleRead) : true;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.actionsRow,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Authorize/* Authorize */.q, {
        actions: [instancePermissions.update, instancePermissions.create],
        fallback: context_srv/* contextSrv.isEditor */.Vt.isEditor,
        children: [alert.status.state === types/* AlertState.Suppressed */.Z9.Suppressed && /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
          href: `${(0,misc/* makeAMLink */.eQ)('/alerting/silences', alertManagerSourceName)}&silenceIds=${alert.status.silencedBy.join(',')}`,
          className: styles.button,
          icon: 'bell',
          size: 'sm',
          children: "Manage silences"
        }), alert.status.state === types/* AlertState.Active */.Z9.Active && /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
          href: (0,misc/* makeLabelBasedSilenceLink */.VN)(alertManagerSourceName, alert.labels),
          className: styles.button,
          icon: 'bell-slash',
          size: 'sm',
          children: "Silence"
        })]
      }), isSeeSourceButtonEnabled && alert.generatorURL && /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
        className: styles.button,
        href: alert.generatorURL,
        icon: 'chart-line',
        size: 'sm',
        children: "See source"
      })]
    }), Object.entries(alert.annotations).map(_ref2 => {
      let [annotationKey, annotationValue] = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(AnnotationDetailsField/* AnnotationDetailsField */.a, {
        annotationKey: annotationKey,
        value: annotationValue
      }, annotationKey);
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.receivers,
      children: ["Receivers:", ' ', alert.receivers.map(_ref3 => {
        let {
          name
        } = _ref3;
        return name;
      }).filter(name => !!name).join(', ')]
    })]
  });
};

const getStyles = theme => ({
  button: emotion_css_esm.css`
    & + & {
      margin-left: ${theme.spacing(1)};
    }
  `,
  actionsRow: emotion_css_esm.css`
    padding: ${theme.spacing(2, 0)} !important;
    border-bottom: 1px solid ${theme.colors.border.medium};
  `,
  receivers: emotion_css_esm.css`
    padding: ${theme.spacing(1, 0)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx











const AlertGroupAlertsTable = _ref => {
  let {
    alerts,
    alertManagerSourceName
  } = _ref;
  const styles = (0,src.useStyles2)(AlertGroupAlertsTable_getStyles);
  const columns = (0,react.useMemo)(() => [{
    id: 'state',
    label: 'State',
    // eslint-disable-next-line react/display-name
    renderCell: _ref2 => {
      let {
        data: alert
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AmAlertStateTag/* AmAlertStateTag */.G, {
          state: alert.status.state
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: styles.duration,
          children: ["for", ' ', (0,grafana_data_src.intervalToAbbreviatedDurationString)({
            start: new Date(alert.startsAt),
            end: new Date(alert.endsAt)
          })]
        })]
      });
    },
    size: '220px'
  }, {
    id: 'labels',
    label: 'Labels',
    // eslint-disable-next-line react/display-name
    renderCell: _ref3 => {
      let {
        data: {
          labels
        }
      } = _ref3;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(AlertLabels/* AlertLabels */.s, {
        className: styles.labels,
        labels: labels
      });
    },
    size: 1
  }], [styles]);
  const items = (0,react.useMemo)(() => alerts.map(alert => ({
    id: alert.fingerprint,
    data: alert
  })), [alerts]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.tableWrapper,
    "data-testid": "alert-group-table",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(DynamicTableWithGuidelines/* DynamicTableWithGuidelines */.F, {
      cols: columns,
      items: items,
      isExpandable: true,
      renderExpandedContent: _ref4 => {
        let {
          data: alert
        } = _ref4;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(AlertDetails, {
          alert: alert,
          alertManagerSourceName: alertManagerSourceName
        });
      }
    })
  });
};

const AlertGroupAlertsTable_getStyles = theme => ({
  tableWrapper: emotion_css_esm.css`
    margin-top: ${theme.spacing(3)};
    ${theme.breakpoints.up('md')} {
      margin-left: ${theme.spacing(4.5)};
    }
  `,
  duration: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
    font-size: ${theme.typography.bodySmall.fontSize};
  `,
  labels: emotion_css_esm.css`
    padding-bottom: 0;
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx
var AlertGroupHeader = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx
var _span;











const AlertGroup = _ref => {
  let {
    alertManagerSourceName,
    group
  } = _ref;
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(true);
  const styles = (0,src.useStyles2)(AlertGroup_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.group,
        "data-testid": "alert-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollapseToggle/* CollapseToggle */.U, {
          isCollapsed: isCollapsed,
          onToggle: () => setIsCollapsed(!isCollapsed),
          "data-testid": "alert-group-collapse-toggle"
        }), Object.keys(group.labels).length ? /*#__PURE__*/(0,jsx_runtime.jsx)(AlertLabels/* AlertLabels */.s, {
          className: styles.headerLabels,
          labels: group.labels
        }) : _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "No grouping"
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(AlertGroupHeader/* AlertGroupHeader */.Z, {
        group: group
      })]
    }), !isCollapsed && /*#__PURE__*/(0,jsx_runtime.jsx)(AlertGroupAlertsTable, {
      alertManagerSourceName: alertManagerSourceName,
      alerts: group.alerts
    })]
  });
};

const AlertGroup_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  headerLabels: emotion_css_esm.css`
    padding-bottom: 0 !important;
    margin-bottom: -${theme.spacing(0.5)};
  `,
  header: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing(1, 1, 1, 0)};
    background-color: ${theme.colors.background.secondary};
    width: 100%;
  `,
  group: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  summary: emotion_css_esm.css``,
  spanElement: emotion_css_esm.css`
    margin-left: ${theme.spacing(0.5)};
  `,
  [types/* AlertState.Active */.Z9.Active]: emotion_css_esm.css`
    color: ${theme.colors.error.main};
  `,
  [types/* AlertState.Suppressed */.Z9.Suppressed]: emotion_css_esm.css`
    color: ${theme.colors.primary.main};
  `,
  [types/* AlertState.Unprocessed */.Z9.Unprocessed]: emotion_css_esm.css`
    color: ${theme.colors.secondary.main};
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertManagerPicker.tsx
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx
var _Label;







const AlertStateFilter = _ref => {
  let {
    onStateFilterChange,
    stateFilter
  } = _ref;
  const styles = (0,src.useStyles2)(AlertStateFilter_getStyles);
  const alertStateOptions = Object.entries(types/* AlertState */.Z9).sort((_ref2, _ref3) => {
    let [labelA] = _ref2;
    let [labelB] = _ref3;
    return labelA < labelB ? -1 : 1;
  }).map(_ref4 => {
    let [label, state] = _ref4;
    return {
      label,
      value: state
    };
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [_Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
      children: "State"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.RadioButtonGroup, {
      options: alertStateOptions,
      value: stateFilter,
      onChange: onStateFilterChange
    })]
  });
};

const AlertStateFilter_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
  `
});
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx
var GroupBy_Label, _Icon;






const GroupBy = _ref => {
  let {
    className,
    groups,
    groupBy,
    onGroupingChange
  } = _ref;
  const labelKeyOptions = (0,lodash.uniq)(groups.flatMap(group => group.alerts).flatMap(_ref2 => {
    let {
      labels
    } = _ref2;
    return Object.keys(labels);
  })).filter(label => !(label.startsWith('__') && label.endsWith('__'))) // Filter out private labels
  .map(key => ({
    label: key,
    value: key
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": 'group-by-container',
    className: className,
    children: [GroupBy_Label || (GroupBy_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
      children: "Custom group by"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.MultiSelect, {
      "aria-label": 'group by label keys',
      value: groupBy,
      placeholder: "Group by",
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
        name: 'tag-alt'
      })),
      onChange: items => {
        onGroupingChange(items.map(_ref3 => {
          let {
            value
          } = _ref3;
          return value;
        }));
      },
      options: labelKeyOptions
    })]
  });
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx
var MatcherFilter = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx













const AlertGroupFilter = _ref => {
  let {
    groups
  } = _ref;
  const [filterKey, setFilterKey] = (0,react.useState)(Math.floor(Math.random() * 100));
  const [queryParams, setQueryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const {
    groupBy = [],
    queryString,
    alertState
  } = (0,misc/* getFiltersFromUrlParams */.lC)(queryParams);
  const matcherFilterKey = `matcher-${filterKey}`;
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('instance');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const styles = (0,src.useStyles2)(AlertGroupFilter_getStyles);

  const clearFilters = () => {
    setQueryParams({
      groupBy: null,
      queryString: null,
      alertState: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };

  const showClearButton = !!(groupBy.length > 0 || queryString || alertState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertManagerPicker/* AlertManagerPicker */.P, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.filterSection,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MatcherFilter/* MatcherFilter */.F, {
        className: styles.filterInput,
        defaultQueryString: queryString,
        onFilterChange: value => setQueryParams({
          queryString: value ? value : null
        })
      }, matcherFilterKey), /*#__PURE__*/(0,jsx_runtime.jsx)(GroupBy, {
        className: styles.filterInput,
        groups: groups,
        groupBy: groupBy,
        onGroupingChange: keys => setQueryParams({
          groupBy: keys.length ? keys.join(',') : null
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(AlertStateFilter, {
        stateFilter: alertState,
        onStateFilterChange: value => setQueryParams({
          alertState: value ? value : null
        })
      }), showClearButton && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        className: styles.clearButton,
        variant: 'secondary',
        icon: "times",
        onClick: clearFilters,
        children: "Clear filters"
      })]
    })]
  });
};

const AlertGroupFilter_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    border-bottom: 1px solid ${theme.colors.border.medium};
    margin-bottom: ${theme.spacing(3)};
  `,
  filterSection: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(3)};
  `,
  filterInput: emotion_css_esm.css`
    width: 340px;
    & + & {
      margin-left: ${theme.spacing(1)};
    }
  `,
  clearButton: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
    margin-top: 19px;
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/alertmanager.ts
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts




const useFilteredAmGroups = groups => {
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const filters = (0,misc/* getFiltersFromUrlParams */.lC)(queryParams);
  const matchers = (0,alertmanager/* parseMatchers */.Zh)(filters.queryString || '');
  return (0,react.useMemo)(() => {
    return groups.reduce((filteredGroup, group) => {
      const alerts = group.alerts.filter(_ref => {
        let {
          labels,
          status
        } = _ref;
        const labelsMatch = (0,alertmanager/* labelsMatchMatchers */.eD)(labels, matchers);
        const filtersMatch = filters.alertState ? status.state === filters.alertState : true;
        return labelsMatch && filtersMatch;
      });

      if (alerts.length > 0) {
        // The ungrouped alerts should be first in the results
        if (Object.keys(group.labels).length === 0) {
          filteredGroup.unshift(Object.assign({}, group, {
            alerts
          }));
        } else {
          filteredGroup.push(Object.assign({}, group, {
            alerts
          }));
        }
      }

      return filteredGroup;
    }, []);
  }, [groups, filters, matchers]);
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts


const useGroupedAlerts = (groups, groupBy) => {
  return (0,react.useMemo)(() => {
    if (groupBy.length === 0) {
      const emptyGroupings = groups.filter(group => Object.keys(group.labels).length === 0);

      if (emptyGroupings.length > 1) {
        // Merges multiple ungrouped grouping
        return groups.reduce((combinedGroups, group) => {
          if (Object.keys(group.labels).length === 0) {
            const noGroupingGroup = combinedGroups.find(_ref => {
              let {
                labels
              } = _ref;
              return Object.keys(labels);
            });

            if (!noGroupingGroup) {
              combinedGroups.push({
                alerts: group.alerts,
                labels: {},
                receiver: {
                  name: 'NONE'
                }
              });
            } else {
              noGroupingGroup.alerts = (0,lodash.uniqBy)([...noGroupingGroup.alerts, ...group.alerts], 'labels');
            }
          } else {
            combinedGroups.push(group);
          }

          return combinedGroups;
        }, []);
      } else {
        return groups;
      }
    }

    const alerts = groups.flatMap(_ref2 => {
      let {
        alerts
      } = _ref2;
      return alerts;
    });
    return alerts.reduce((groupings, alert) => {
      const alertContainsGroupings = groupBy.every(groupByLabel => Object.keys(alert.labels).includes(groupByLabel));

      if (alertContainsGroupings) {
        const existingGrouping = groupings.find(group => {
          return groupBy.every(groupKey => {
            return group.labels[groupKey] === alert.labels[groupKey];
          });
        });

        if (!existingGrouping) {
          const labels = groupBy.reduce((acc, key) => {
            acc = Object.assign({}, acc, {
              [key]: alert.labels[key]
            });
            return acc;
          }, {});
          groupings.push({
            alerts: [alert],
            labels,
            receiver: {
              name: 'NONE'
            }
          });
        } else {
          existingGrouping.alerts.push(alert);
        }
      } else {
        const noGroupingGroup = groupings.find(group => Object.keys(group.labels).length === 0);

        if (!noGroupingGroup) {
          groupings.push({
            alerts: [alert],
            labels: {},
            receiver: {
              name: 'NONE'
            }
          });
        } else {
          noGroupingGroup.alerts.push(alert);
        }
      }

      return groupings;
    }, []);
  }, [groups, groupBy]);
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/AlertGroups.tsx
var _LoadingPlaceholder, _p;






















const AlertGroups = () => {
  var _alertGroups;

  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('instance');
  const [alertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const dispatch = (0,es.useDispatch)();
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const {
    groupBy = []
  } = (0,misc/* getFiltersFromUrlParams */.lC)(queryParams);
  const styles = (0,src.useStyles2)(AlertGroups_getStyles);
  const alertGroups = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amAlertGroups);
  const {
    loading,
    error,
    result: results = []
  } = (_alertGroups = alertGroups[alertManagerSourceName || '']) !== null && _alertGroups !== void 0 ? _alertGroups : redux/* initialAsyncRequestState */.oq;
  const groupedAlerts = useGroupedAlerts(results, groupBy);
  const filteredAlertGroups = useFilteredAmGroups(groupedAlerts);
  (0,react.useEffect)(() => {
    function fetchNotifications() {
      if (alertManagerSourceName) {
        dispatch((0,actions/* fetchAlertGroupsAction */.mS)(alertManagerSourceName));
      }
    }

    fetchNotifications();
    const interval = setInterval(fetchNotifications, constants/* NOTIFICATIONS_POLL_INTERVAL_MS */.iF);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, alertManagerSourceName]);

  if (!alertManagerSourceName) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
      pageId: "groups",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NoAlertManagerWarning/* NoAlertManagerWarning */.I, {
        availableAlertManagers: alertManagers
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "groups",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertGroupFilter, {
      groups: results
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "Loading notifications"
    }))), error && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      title: 'Error loading notifications',
      severity: 'error',
      children: error.message || 'Unknown error'
    }), results && filteredAlertGroups.map((group, index) => {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [(index === 1 && Object.keys(filteredAlertGroups[0].labels).length === 0 || index === 0 && Object.keys(group.labels).length > 0) && /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          className: styles.groupingBanner,
          children: ["Grouped by: ", Object.keys(group.labels).join(', ')]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(AlertGroup, {
          alertManagerSourceName: alertManagerSourceName || '',
          group: group
        })]
      }, `${JSON.stringify(group.labels)}-group-${index}`);
    }), results && !filteredAlertGroups.length && (_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "No results."
    })))]
  });
};

const AlertGroups_getStyles = theme => ({
  groupingBanner: emotion_css_esm.css`
    margin: ${theme.spacing(2, 0)};
  `
});

/* harmony default export */ const unified_AlertGroups = (AlertGroups);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = _ref => {
  let {
    children,
    pageId,
    isLoading
  } = _ref;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__/* .getNavModel */ .h)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Contents */ .Z.Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = _ref => {
  let {
    actions,
    children,
    fallback = true
  } = _ref;

  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__/* .contextSrv.hasAccess */ .Vt.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ DynamicTableWithGuidelines)
/* harmony export */ });
/* unused harmony export getStyles */
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DynamicTable, but renders visual guidelines on the left, for larger screen widths
const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__/* .DynamicTable */ .t, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bottomGuideline, styles.guideline)
      })]
    })
  }, props));
};
const getStyles = theme => ({
  relative: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    height: 100%;
  `,
  guideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    left: -19px;
    border-left: 1px solid ${theme.colors.border.medium};
    position: absolute;

    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `,
  topGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 18px;
    border-bottom: 1px solid ${theme.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,
  bottomGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 50%;
    bottom: 0;
  `,
  contentGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,
  headerGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: -25px;
    bottom: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ NoAlertManagerWarning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2, _OtherAlertManagersAv, _NoAlertManagersAvail;









const NoAlertManagersAvailable = () => _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "No Alertmanager found",
  severity: "warning",
  children: "We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."
}));

const OtherAlertManagersAvailable = () => _Alert2 || (_Alert2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "Selected Alertmanager not found. Select a different Alertmanager.",
  severity: "warning",
  children: "Selected Alertmanager no longer exists or you may not have permission to access it."
}));

const NoAlertManagerWarning = _ref => {
  let {
    availableAlertManagers
  } = _ref;
  const [_, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__/* .useAlertManagerSourceName */ .k)(availableAlertManagers);
  const hasOtherAMs = availableAlertManagers.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: hasOtherAMs ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__/* .AlertManagerPicker */ .P, {
        onChange: setAlertManagerSourceName,
        dataSources: availableAlertManagers
      }), _OtherAlertManagersAv || (_OtherAlertManagersAv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OtherAlertManagersAvailable, {}))]
    }) : _NoAlertManagersAvail || (_NoAlertManagersAvail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NoAlertManagersAvailable, {}))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = _ref => {
  let {
    className,
    onFilterChange,
    defaultQueryString,
    queryString
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const handleSearchChange = e => {
    const target = e.target;
    onFilterChange(target.value);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        gap: 0.5,
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          content: _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "Search",
      defaultValue: defaultQueryString,
      value: queryString,
      onChange: handleSearchChange,
      "data-testid": "search-query-input",
      prefix: searchIcon,
      className: styles.inputWidth
    })]
  });
};

const getStyles = theme => ({
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(0.5)};
  `,
  inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 340px;
    flex-grow: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ AmAlertStateTag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const alertStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__/* .AlertState.Active */ .Z9.Active]: 'bad',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__/* .AlertState.Unprocessed */ .Z9.Unprocessed]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__/* .AlertState.Suppressed */ .Z9.Suppressed]: 'info'
};
const AmAlertStateTag = _ref => {
  let {
    state
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__/* .StateTag */ .i, {
    state: alertStateToState[state],
    children: state
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useAlertManagerSourceName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function useIsAlertManagerAvailable(availableAlertManagers) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerName => {
    const availableAlertManagersNames = availableAlertManagers.map(am => am.name);
    return availableAlertManagersNames.includes(alertManagerName);
  }, [availableAlertManagers]);
}
/* This will return am name either from query params or from local storage or a default (grafana).
 * Due to RBAC permissions Grafana Managed Alert manager or external alert managers may not be available
 * In the worst case neihter GMA nor external alert manager is available
 */


function useAlertManagerSourceName(availableAlertManagers) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__/* .useQueryParams */ .K)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"]["delete"] */ .Z["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].set */ .Z.set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC, update];
  }

  return [undefined, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useAlertManagersByPermission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .getAlertManagerDataSourcesByPermission */ .LE)(accessType), [accessType]);
}

/***/ })

}]);