//

import React from "react";
import { Main } from "./Main";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

interface types {
    store: any;
    location: string;
}

export const ServerApp = (props: types) => {
	//

	//SERVER RENDER
	return (
		<Provider store={props.store}>
			<StaticRouter location={props.location}>
				<Main />
			</StaticRouter>
		</Provider>
	);
};
