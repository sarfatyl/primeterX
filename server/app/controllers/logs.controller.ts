import {NextFunction, Request, Response} from 'express-serve-static-core';
import {ResponseStatusCodes} from '../enums/response-status-codes.enum';
import {ExampleDal} from '../dals/example.dal';
import {ExampleService} from '../services/example.service';
import {ExampleModel} from '../models/example.model';
import * as Errors from '../consts/errors.const';
import {LogsService} from "../services/logs.service";

export class LogsController {

	private logsService: LogsService;


	constructor(
		logsService: LogsService
	) {
		this.logsService = logsService;
	}

	getLogs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const blackListOnly = req.query.blackListOnly;
			const amount: number = +req.query.amount;
			const page: number = +req.query.page;
			const domainFilter: string = req.query.domainFilter as string;
			let logs = await this.logsService.getLogsFromServer();
			if (blackListOnly === 'true' || domainFilter) {
				logs = logs.filter((item) => {
					if (blackListOnly === 'true' && item.blacklisted === false) {
						return false;
					}
					if (domainFilter && (item.domain.toLowerCase().indexOf(domainFilter.toLowerCase()) === -1)) {
						return false;
					}
					return true;
				});
			}
			res.status(ResponseStatusCodes.Ok).send(logs.slice(page * amount, (page * amount) + amount));
			next();
		} catch
			(error) {
			next(error);
		}
	}

	getLinearData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			let logs = await this.logsService.getLogsFromServer();
			const dataToSend = await this.logsService.getLinearData(logs);
			res.status(ResponseStatusCodes.Ok).send(dataToSend);
			next();
		} catch
			(error) {
			next(error);
		}
	}


}
