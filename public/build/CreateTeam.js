"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CreateTeam"],{

/***/ "./public/app/features/teams/CreateTeam.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTeam": () => (/* binding */ CreateTeam),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class CreateTeam extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "create", async formModel => {
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/teams', formModel);

      if (result.teamId) {
        await app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.fetchUserPermissions();
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(`/org/teams/edit/${result.teamId}`);
      }
    });
  }

  render() {
    const {
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
          onSubmit: this.create,
          children: ({
            register
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
            label: "New Team",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('name', {
                required: true
              }), {
                id: "team-name",
                width: 60
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
                children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  children: "Email"
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                  content: "This is optional and is primarily used for allowing custom team avatars.",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    name: "info-circle",
                    style: {
                      marginLeft: 6
                    }
                  })
                })]
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('email'), {
                type: "email",
                placeholder: "email@test.com",
                width: 60
              }))
            }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "gf-form-button-row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "submit",
                variant: "primary",
                children: "Create"
              })
            }))]
          })
        })
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'teams')
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(CreateTeam));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVGVhbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZTyxNQUFNZ0IsVUFBTixTQUF5QmYsZ0RBQXpCLENBQThDO0FBQUE7QUFBQTs7QUFBQSxvQ0FDMUMsTUFBT2dCLFNBQVAsSUFBOEI7QUFDckMsWUFBTUMsTUFBTSxHQUFHLE1BQU1mLCtEQUFhLEdBQUdnQixJQUFoQixDQUFxQixZQUFyQixFQUFtQ0YsU0FBbkMsQ0FBckI7O0FBQ0EsVUFBSUMsTUFBTSxDQUFDRSxNQUFYLEVBQW1CO0FBQ2pCLGNBQU1OLDBFQUFBLEVBQU47QUFDQVYsUUFBQUEsa0VBQUEsQ0FBc0IsbUJBQWtCYyxNQUFNLENBQUNFLE1BQU8sRUFBdEQ7QUFDRDtBQUNGLEtBUGtEO0FBQUE7O0FBUW5ERyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBZSxLQUFLQyxLQUExQjtBQUVBLHdCQUNFLHVEQUFDLHFFQUFEO0FBQU0sY0FBUSxFQUFFRCxRQUFoQjtBQUFBLDZCQUNFLHVEQUFDLDhFQUFEO0FBQUEsK0JBQ0UsdURBQUMsNkNBQUQ7QUFBTSxrQkFBUSxFQUFFLEtBQUtFLE1BQXJCO0FBQUEsb0JBQ0csQ0FBQztBQUFFQyxZQUFBQTtBQUFGLFdBQUQsa0JBQ0Msd0RBQUMsaURBQUQ7QUFBVSxpQkFBSyxFQUFDLFVBQWhCO0FBQUEsb0NBQ0UsdURBQUMsOENBQUQ7QUFBTyxtQkFBSyxFQUFDLE1BQWI7QUFBQSxxQ0FDRSx1REFBQyw4Q0FBRCxvQkFBV0EsUUFBUSxDQUFDLE1BQUQsRUFBUztBQUFFQyxnQkFBQUEsUUFBUSxFQUFFO0FBQVosZUFBVCxDQUFuQjtBQUFpRCxrQkFBRSxFQUFDLFdBQXBEO0FBQWdFLHFCQUFLLEVBQUU7QUFBdkU7QUFERixjQURGLGVBSUUsdURBQUMsOENBQUQ7QUFDRSxtQkFBSyxlQUNILHdEQUFDLDhDQUFEO0FBQUEsMERBQ0U7QUFBQTtBQUFBLGtCQURGLGdCQUVFLHVEQUFDLGdEQUFEO0FBQVMseUJBQU8sRUFBQywwRUFBakI7QUFBQSx5Q0FDRSx1REFBQyw2Q0FBRDtBQUFNLHdCQUFJLEVBQUMsYUFBWDtBQUF5Qix5QkFBSyxFQUFFO0FBQUVDLHNCQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUFoQztBQURGLGtCQUZGO0FBQUEsZ0JBRko7QUFBQSxxQ0FVRSx1REFBQyw4Q0FBRCxvQkFBV0YsUUFBUSxDQUFDLE9BQUQsQ0FBbkI7QUFBOEIsb0JBQUksRUFBQyxPQUFuQztBQUEyQywyQkFBVyxFQUFDLGdCQUF2RDtBQUF3RSxxQkFBSyxFQUFFO0FBQS9FO0FBVkYsY0FKRiwrQkFnQkU7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEscUNBQ0UsdURBQUMsK0NBQUQ7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IsdUJBQU8sRUFBQyxTQUE5QjtBQUFBO0FBQUE7QUFERixjQWhCRjtBQUFBO0FBRko7QUFERjtBQURGLE1BREY7QUFnQ0Q7O0FBM0NrRDs7QUE4Q3JELFNBQVNHLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQTRDO0FBQzFDLFNBQU87QUFDTFAsSUFBQUEsUUFBUSxFQUFFVCx3RUFBVyxDQUFDZ0IsS0FBSyxDQUFDQyxRQUFQLEVBQWlCLE9BQWpCO0FBRGhCLEdBQVA7QUFHRDs7QUFFRCxpRUFBZTlCLG9EQUFPLENBQUM0QixlQUFELENBQVAsQ0FBeUJkLFVBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9DcmVhdGVUZWFtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRmllbGQsIElucHV0LCBGaWVsZFNldCwgTGFiZWwsIFRvb2x0aXAsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbn1cblxuaW50ZXJmYWNlIFRlYW1EVE8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUZWFtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjcmVhdGUgPSBhc3luYyAoZm9ybU1vZGVsOiBUZWFtRFRPKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdGVhbXMnLCBmb3JtTW9kZWwpO1xuICAgIGlmIChyZXN1bHQudGVhbUlkKSB7XG4gICAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL29yZy90ZWFtcy9lZGl0LyR7cmVzdWx0LnRlYW1JZH1gKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmNyZWF0ZX0+XG4gICAgICAgICAgICB7KHsgcmVnaXN0ZXIgfSkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9XCJOZXcgVGVhbVwiPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cInRlYW0tbmFtZVwiIHdpZHRoPXs2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIlRoaXMgaXMgb3B0aW9uYWwgYW5kIGlzIHByaW1hcmlseSB1c2VkIGZvciBhbGxvd2luZyBjdXN0b20gdGVhbSBhdmF0YXJzLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImluZm8tY2lyY2xlXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsQHRlc3QuY29tXCIgd2lkdGg9ezYwfSAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndGVhbXMnKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENyZWF0ZVRlYW0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJnZXRCYWNrZW5kU3J2IiwibG9jYXRpb25TZXJ2aWNlIiwiQnV0dG9uIiwiRm9ybSIsIkZpZWxkIiwiSW5wdXQiLCJGaWVsZFNldCIsIkxhYmVsIiwiVG9vbHRpcCIsIkljb24iLCJQYWdlIiwiY29udGV4dFNydiIsImdldE5hdk1vZGVsIiwiQ3JlYXRlVGVhbSIsImZvcm1Nb2RlbCIsInJlc3VsdCIsInBvc3QiLCJ0ZWFtSWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJyZW5kZXIiLCJuYXZNb2RlbCIsInByb3BzIiwiY3JlYXRlIiwicmVnaXN0ZXIiLCJyZXF1aXJlZCIsIm1hcmdpbkxlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==