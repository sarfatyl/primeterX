import {ResponseStatusCodes} from '../enums/response-status-codes.enum';

export interface IRwsError {
	name: string;
	message: string;
	statusCode: ResponseStatusCodes
}
