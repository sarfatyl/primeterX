const pjson = require('../../package.json');

export class PingService {

	getVersion(): string {
		return pjson.version;
	}

}
