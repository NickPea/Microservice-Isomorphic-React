"use strict";
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSR_React_Renderer = void 0;
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var react_router_dom_1 = require("react-router-dom");
var template_1 = require("./template");
var entry_server_1 = require("../__APP__/entry.server");
var config_1 = require("../config");
var __ROUTES__1 = require("../__APP__/__ROUTES__");
var lodash_1 = require("lodash");
var store_1 = require("../__APP__/__STATE__/store");
var styled_components_1 = require("styled-components");
var SSR_React_Renderer = function (requestUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var RouterMatch, SelectRoute, InitialState, store, state, sheet, render, styles;
    return __generator(this, function (_a) {
        RouterMatch = react_router_dom_1.matchPath(requestUrl, { path: __ROUTES__1.getRoutePaths(), exact: true });
        SelectRoute = __ROUTES__1.ROUTES.find(function (Route) { return Route.path === (RouterMatch === null || RouterMatch === void 0 ? void 0 : RouterMatch.path); });
        InitialState = { data: {}, app: {}, ui: {} };
        if (SelectRoute && SelectRoute.state_functions && !SelectRoute.state_functions.length) {
            SelectRoute.state_functions.forEach(function (state_function) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = lodash_1.merge;
                            _b = [InitialState];
                            return [4 /*yield*/, state_function(RouterMatch === null || RouterMatch === void 0 ? void 0 : RouterMatch.params)];
                        case 1:
                            //main logic
                            InitialState = _a.apply(void 0, _b.concat([_c.sent()]));
                            return [2 /*return*/];
                    }
                });
            }); });
        } //if
        store = store_1.CreateReduxStore(InitialState);
        state = store.getState();
        sheet = new styled_components_1.ServerStyleSheet();
        render = server_1.default.renderToString(sheet.collectStyles(react_1.default.createElement(entry_server_1.ServerApp, { location: requestUrl, store: store })));
        styles = sheet.getStyleTags();
        /**
         * WRAP HTML
         */
        return [2 /*return*/, template_1.template({
                lang: 'en',
                head: "<title>" + config_1.config.APP_NAME + "</title>",
                styles: styles,
                state: state,
                render: render,
                bundle: '/bundle.js'
            })];
    });
}); }; //SSR_React_Render
exports.SSR_React_Renderer = SSR_React_Renderer;
