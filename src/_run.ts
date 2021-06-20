//\\

import { config } from "./config";
import express from "express";
import path from 'path'
import chalk from 'chalk';
import { SSR_React_Renderer } from "./ssr/render";
const app = express();

/** ===============ISOMORPHIC REACT================== */

//CLIENT (SPA) REACT
app.use(express.static(path.join(__dirname, "../public")));

//SERVER (SSR) REACT
app.use( '*', async (req, res, next) => {
	res.send(await SSR_React_Renderer(req.originalUrl));
});

/** ================================= */

app.listen(config.PORT, () => {
	console.log(chalk.bgGray("\n                                "));
	console.log(chalk.yellow.bgGray(" ======== APP RUNNING ========= "));
	console.log(chalk.yellow.bgGray(` Server listening on port: ${config.PORT} `));
	console.log(chalk.bgGray("                                \n"));

});
