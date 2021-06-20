//\\

import React from "react";

//pages
import { Home } from "./__PAGES__/home";
import { About } from "./__PAGES__/about";
import { Help } from "./__PAGES__/help";

/** ============= ROUTES =============== */

export const ROUTES = [
	{
		label: "Home",
		path: "/",
		exact: true,
		component: <Home />,
		navigatable: true,
		state_functions: [(params: any) => {}],
	},
	{
		label: "About",
		path: "/about",
		exact: true,
		component: <About />,
		navigatable: true,
		state_functions: [(params: any) => {}],
	},
	{
		label: "Help",
		path: "/help",
		exact: true,
		component: <Help />,
		navigatable: true,
		state_functions: [(params: any) => {}],
	},
	{
		label: "404",
		path: "*",
		exact: false,
		component: () => <div>Page Not Found</div>,
		navigatable: false,
		state_functions: [],
	},
];

/** ============= HELPERS FUNCTIONS =============== */

//used in ssr render module
export const getRoutePaths = (): string[] => {
	return ROUTES.map((route) => route.path);
};
