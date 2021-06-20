"use strict";
//\\
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReduxStore = void 0;
//
var toolkit_1 = require("@reduxjs/toolkit");
var app_1 = require("./reducers/app");
var data_1 = require("./reducers/data");
var ui_1 = require("./reducers/ui");
var CreateReduxStore = function (InitialState) {
    var store = toolkit_1.configureStore({
        reducer: toolkit_1.combineReducers({
            data: data_1.dataRootReducer,
            app: app_1.appRootReducer,
            ui: ui_1.uiRootReducer,
        }),
        preloadedState: InitialState,
        middleware: [],
    });
    return store;
};
exports.CreateReduxStore = CreateReduxStore;
