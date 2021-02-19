import {Router} from 'express';
import {LogsService} from "../services/logs.service";
import {LogsController} from "../controllers/logs.controller";
import {ApiRoutes} from "../enums/api-routes.enum";


export class LogsRouter {

	router: Router = Router();
	logsService = new LogsService();
	logsController = new LogsController(
		this.logsService
	);

	constructor() {
		this.router.get(ApiRoutes.GetLogs, this.logsController.getLogs);
		this.router.get(ApiRoutes.GetLinearData, this.logsController.getLinearData);
	}

	getRouter(): Router {
		return this.router;
	}

}
