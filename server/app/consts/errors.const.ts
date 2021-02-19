import {ResponseStatusCodes} from '../enums/response-status-codes.enum';

export const InternalServerError = {
	statusCode: ResponseStatusCodes.InternalServerError,
	name: 'InternalServerError',
	message: 'Internal server error.'
};
