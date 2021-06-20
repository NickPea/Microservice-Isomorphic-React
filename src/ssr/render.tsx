//

import React from "react";
import reactDomServer from "react-dom/server";
import { matchPath } from "react-router-dom";
import { template } from "./template";
import { ServerApp } from "../__APP__/entry.server";
import { config } from "../config";
import { getRoutePaths, ROUTES } from "../__APP__/__ROUTES__";
import {merge} from 'lodash'
import { CreateReduxStore } from "../__APP__/__STATE__/store";
import { ServerStyleSheet } from 'styled-components'



export const SSR_React_Renderer = async (requestUrl: string) => {

	/**
	 * MATCH ROUTE
	 * -- always matches if '*' route path is set ---
	 */
	const RouterMatch = matchPath(requestUrl, { path: getRoutePaths(), exact: true })
	const SelectRoute = ROUTES.find(Route => { return Route.path === RouterMatch?.path });

	/**
	 * SET STATE
	 */
	let InitialState = {data: {}, app: {}, ui: {}};
	if (SelectRoute && SelectRoute.state_functions && !SelectRoute.state_functions.length) {
		SelectRoute.state_functions.forEach( async (state_function) => {
			//main logic
			InitialState = merge(InitialState, await state_function(RouterMatch?.params))
		});
	}//if
	const store = CreateReduxStore(InitialState);
	const state = store.getState();
	
	/**
	 * RENDER APP
	 * 		&&
	 * EXTRACT STYLES
	 */	 
	const sheet = new ServerStyleSheet()
	const render = reactDomServer.renderToString(sheet.collectStyles(<ServerApp location={requestUrl} store={store} />))
	const styles = sheet.getStyleTags();

	/**
	 * WRAP HTML 
	 */
	return template({
		lang: 'en',
		head: `<title>${config.APP_NAME}</title>`,
		styles: styles,
		state: state,
		render: render,
		bundle: '/bundle.js'
	});

}//SSR_React_Render