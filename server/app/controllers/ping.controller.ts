import {NextFunction, Request, Response} from 'express-serve-static-core';
import {ResponseStatusCodes} from '../enums/response-status-codes.enum';
import {PingService} from '../services/ping.service';

export class PingController {

	pingService: PingService;

	constructor(
		pingService: PingService
	) {
		this.pingService = pingService;
	}

	getVersion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			res.status(ResponseStatusCodes.Ok);
			const version: string = this.pingService.getVersion();
			res.send(version);
			next();
		} catch (error) {
			next(error);
		}
	};

}
