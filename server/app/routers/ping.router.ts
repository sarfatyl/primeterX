import {Router} from 'express';
import {ApiRoutes} from '../enums/api-routes.enum';
import {PingService} from '../services/ping.service';
import {PingController} from '../controllers/ping.controller';

export class PingRouter {

	router: Router = Router();
	pingService: PingService = new PingService();
	pingController: PingController = new PingController(this.pingService);

	constructor() {
		this.router.get(ApiRoutes.GetVersion, this.pingController.getVersion);
	}

	getRouter(): Router {
		return this.router;
	}

}
