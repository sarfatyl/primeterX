import express = require('express');
import bodyParser = require('body-parser');
import {ApiRoutes} from './enums/api-routes.enum';
import {ExampleRouter} from './routers/example.router';
import {PingRouter} from './routers/ping.router';
import {LogsRouter} from './routers/logs.router';

var cors = require('cors');

class App {

	public app: express.Application = express();

	constructor() {
		this.config();
		this.setRouters();

	}

	private config(): void {
		// middleware creator
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({extended: false}));
		// serving static files
		this.app.use(express.static('public'));
		this.app.use(cors())
		/**
		 * middleware which will print the following details to the console for each incoming request:
		 * The requesting client’s IP
		 * Current time.
		 */
		this.app.use((req, res, next) => {
			var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
			console.log(`Client IP: ${ip} Current time: ${Date.now()}`);
			next();
		})
	}

	private setRouters(): void {
		this.app.use(ApiRoutes.Ping, new PingRouter().getRouter());
		this.app.use(ApiRoutes.Example, new ExampleRouter().getRouter());
		this.app.use(ApiRoutes.Logs, new LogsRouter().getRouter());
	}


}

export default new App().app;
