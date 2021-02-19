import {NextFunction, Request, Response} from 'express-serve-static-core';
import {ResponseStatusCodes} from '../enums/response-status-codes.enum';
import {ExampleDal} from '../dals/example.dal';
import {ExampleService} from '../services/example.service';
import {ExampleModel} from '../models/example.model';
import * as Errors from '../consts/errors.const';

export class ExampleController {

	private exampleDal: ExampleDal;
	private exampleService: ExampleService;

	constructor(
		exampleDal: ExampleDal,
		exampleService: ExampleService
	) {
		this.exampleDal = exampleDal;
		this.exampleService = exampleService;
	}

	getExample = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			let example: ExampleModel = this.exampleService.getExampleById(id);
			res.status(ResponseStatusCodes.Ok).send(example);
			next();
		} catch (error) {
			next(error);
		}
	};

}
