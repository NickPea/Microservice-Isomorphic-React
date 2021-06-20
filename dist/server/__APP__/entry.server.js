"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
var react_1 = __importDefault(require("react"));
var Main_1 = require("./Main");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var ServerApp = function (props) {
    //
    //SERVER RENDER
    return (react_1.default.createElement(react_redux_1.Provider, { store: props.store },
        react_1.default.createElement(react_router_dom_1.StaticRouter, { location: props.location },
            react_1.default.createElement(Main_1.Main, null))));
};
exports.ServerApp = ServerApp;
