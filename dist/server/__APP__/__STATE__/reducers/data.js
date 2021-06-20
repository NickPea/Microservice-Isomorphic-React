"use strict";
//\\
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRootReducer = void 0;
var redux_1 = require("redux");
var actions_1 = require("../actions");
var bootReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case actions_1.APP_START:
            return __assign(__assign({}, state), { boot: "initiated" });
        default:
            return state;
    }
};
exports.dataRootReducer = redux_1.combineReducers({ boot: bootReducer });
