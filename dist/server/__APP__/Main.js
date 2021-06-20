"use strict";
//\\
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var react_1 = __importDefault(require("react"));
var react_router_1 = require("react-router");
var __ROUTES__1 = require("./__ROUTES__");
var global_1 = require("./__CSS__/global");
var Main = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(global_1.GlobalStyles, null),
        react_1.default.createElement(react_router_1.Switch, null, __ROUTES__1.ROUTES.map(function (route) {
            return (react_1.default.createElement(react_router_1.Route, { key: route.path, path: route.path, exact: route.exact }, route.component));
        }))));
};
exports.Main = Main;
