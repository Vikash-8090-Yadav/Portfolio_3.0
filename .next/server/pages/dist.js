"use strict";
(() => {
var exports = {};
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 3897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
var google_1 = __webpack_require__(5297);
var Hero_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Hero'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var SocialLinks_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/SocialLinks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Skills_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Skills'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Project_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Project'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Contact_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Contact'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Footer_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Footer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var inter = google_1.Inter({
    subsets: [
        "latin"
    ]
});
function Home() {
    return React.createElement("div", {
        className: "bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b]"
    }, React.createElement(Hero_1["default"], null), React.createElement(SocialLinks_1["default"], null), React.createElement(Skills_1["default"], null), React.createElement(Project_1["default"], null), React.createElement(Contact_1["default"], null), React.createElement(Footer_1["default"], null));
}
exports["default"] = Home;


/***/ }),

/***/ 5297:
/***/ ((module) => {

module.exports = require("@next/font/google");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3897));
module.exports = __webpack_exports__;

})();