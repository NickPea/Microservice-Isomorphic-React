"use strict";
//\\
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutePaths = exports.ROUTES = void 0;
var react_1 = __importDefault(require("react"));
//pages
var about_1 = require("./__PAGES__/about");
var home_1 = require("./__PAGES__/home");
/** ============= ROUTES =============== */
exports.ROUTES = [
    {
        label: "Home",
        path: "/",
        exact: true,
        component: react_1.default.createElement(home_1.Home, null),
        navigatable: true,
        state_functions: [function (params) { }],
    },
    {
        label: "About",
        path: "/about",
        exact: true,
        component: react_1.default.createElement(about_1.About, null),
        navigatable: true,
        state_functions: [function (params) { }],
    },
    {
        label: "404",
        path: "*",
        exact: false,
        component: function () { return react_1.default.createElement("div", null, "Page Not Found"); },
        navigatable: false,
        state_functions: [],
    },
];
/** ============= HELPERS FUNCTIONS =============== */
//used in ssr render module
var getRoutePaths = function () {
    return exports.ROUTES.map(function (route) { return route.path; });
};
exports.getRoutePaths = getRoutePaths;
