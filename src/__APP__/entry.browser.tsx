//\\

import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import { config } from "../config";
import { CreateReduxStore } from './__STATE__/store'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";


const BrowserApp = () => {
	//

	//GET SERVER-STATE
	const store = CreateReduxStore((window as any)[config.SERVER_STATE_WINDOW_KEY]);
	
	//POST-RENDER EFFECTS
	// useEffect(() => {

	// 	// //remove state
	// 	// delete (window as any)[config.SERVER_STATE_WINDOW_KEY];
		
	// 	// //remove styles
	// 	// const ssrStyles = document.querySelector("style[data-client-removable-ssr-jss]");
	// 	// ssrStyles&&ssrStyles.remove();

	// }, []);

	//BROWSER RENDER
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		</Provider>
	);
};

reactDom.hydrate(<BrowserApp />, document.getElementById(config.ROOT_ELEMENT_ID));
