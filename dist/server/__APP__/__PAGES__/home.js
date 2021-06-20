"use strict";
//\\
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var react_1 = __importDefault(require("react"));
var navbar_1 = require("../__COMPONENTS__/navbar");
var page_1 = require("../__COMPONENTS__/page");
var Home = function () {
    return (react_1.default.createElement(page_1.Page, null,
        react_1.default.createElement(navbar_1.Navbar, null),
        react_1.default.createElement("h1", null, "Home"),
        react_1.default.createElement("p", null, "hello")));
};
exports.Home = Home;
