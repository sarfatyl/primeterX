import * as dotenv from 'dotenv';
import {resolve} from 'path';

dotenv.config({path: resolve(loadEnv())});
dotenv.load();

function loadEnv(): string {
	let path;
	switch (process.env.NODE_ENV) {
	case 'localhost':
		path = './environments/localhost.env';
		break;
	}
	return path;
}
