//\\

//

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appRootReducer } from "./reducers/app";
import { dataRootReducer } from "./reducers/data";
import { uiRootReducer } from "./reducers/ui";

export const CreateReduxStore = (InitialState?: any) => {
	const store = configureStore({
		reducer: combineReducers({
			data: dataRootReducer,
			app: appRootReducer,
			ui: uiRootReducer,
		}),
		preloadedState: InitialState,
		middleware: [],
	});
	return store;
};
