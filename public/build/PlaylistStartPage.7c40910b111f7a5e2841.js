"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3090],{

 "./public/app/features/playlist/PlaylistStartPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "PlaylistStartPage": () => ( PlaylistStartPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _PlaylistSrv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/playlist/PlaylistSrv.ts");

const PlaylistStartPage = _ref => {
  let {
    match
  } = _ref;
  _PlaylistSrv__WEBPACK_IMPORTED_MODULE_0__ .r0.start(parseInt(match.params.id, 10));
  return null;
};
 const __WEBPACK_DEFAULT_EXPORT__ = (PlaylistStartPage);

 })

}]);