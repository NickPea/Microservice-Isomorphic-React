//\\

import { combineReducers } from "redux";
import { APP_START } from "../actions";

const bootReducer = (state = {}, action: { type: string; payload: any }) => {
	switch (action.type) {
		case APP_START:
			return { ...state, boot: "initiated" };
		default:
			return state;
	}
};

export const dataRootReducer = combineReducers({ boot: bootReducer });
