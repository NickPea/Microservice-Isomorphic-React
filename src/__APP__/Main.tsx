//\\

import React from "react";
import { Route, Switch } from "react-router";
import { ROUTES } from "./__ROUTES__";

/**
 * Styles
 * - import order determines precedence
 */
import { NormalizeCSS } from "./__CSS__/normalize"; 
import { GlobalCSS } from "./__CSS__/global";



export const Main = () => {
	return (
		<React.Fragment>
			<NormalizeCSS />
			<GlobalCSS />
			<Switch>
				{ROUTES.map((route) => {
					return (
						<Route key={route.path} path={route.path} exact={route.exact}>
							{route.component}
						</Route>
					);
				})}
			</Switch>
		</React.Fragment>
	);
};
