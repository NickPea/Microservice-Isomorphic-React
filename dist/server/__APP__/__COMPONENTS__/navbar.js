"use strict";
//\\
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __ROUTES__1 = require("../__ROUTES__");
var react_router_dom_1 = require("react-router-dom");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: auto;\n"], ["\n    height: auto;\n"])));
var NavButton = styled_components_1.default(react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: darkred;\n    border-radius: 3px;\n    padding: 10px;\n;\n\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n"], ["\n    background-color: darkred;\n    border-radius: 3px;\n    padding: 10px;\n;\n\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n"])));
var Navbar = function () {
    return (react_1.default.createElement(Wrapper, null, __ROUTES__1.ROUTES.map(function (route) {
        if (route.navigatable) {
            return react_1.default.createElement(NavButton, { to: route.path }, route.label);
        }
    })));
};
exports.Navbar = Navbar;
var templateObject_1, templateObject_2;
