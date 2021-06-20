"use strict";
//\\
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var config_1 = require("../config");
var store_1 = require("./__STATE__/store");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Main_1 = require("./Main");
var BrowserApp = function () {
    //
    //GET SERVER-STATE
    var store = store_1.CreateReduxStore(window[config_1.config.SERVER_STATE_WINDOW_KEY]);
    //POST-RENDER EFFECTS
    // useEffect(() => {
    // 	// //remove state
    // 	// delete (window as any)[config.SERVER_STATE_WINDOW_KEY];
    // 	// //remove styles
    // 	// const ssrStyles = document.querySelector("style[data-client-removable-ssr-jss]");
    // 	// ssrStyles&&ssrStyles.remove();
    // }, []);
    //BROWSER RENDER
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Main_1.Main, null))));
};
react_dom_1.default.hydrate(react_1.default.createElement(BrowserApp, null), document.getElementById(config_1.config.ROOT_ELEMENT_ID));
