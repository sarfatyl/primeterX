const axios = require('axios').default;

export class LogsService {

	private axios = axios;

	constructor() {
	}

	async getLogsFromServer() {
		const response = await this.axios({
			url:'https://storage.googleapis.com/pxtask-eng/dummy_data.json',
			method: 'GET',
		});
		return response.data;
	}

	async getLinearData(logs: any) {
		const logsChartLabelsSet = new Set();
		const timesMap = new Map();
		const data = [];
		const logsChartData = [{ data: data, label: 'Page views' }];
		if (logs) {
			for (const log of logs) {
				logsChartLabelsSet.add(log.timestamp);
				if(!timesMap.has(log.timestamp)) {
					timesMap.set(log.timestamp, 0);
				}
				timesMap.set(log.timestamp, timesMap.get(log.timestamp)+1)
			}
		}
		for(let [key,value] of timesMap) {
			data.push(value);
		}
		const logsChartLabels = Array.from(logsChartLabelsSet.keys());
		const lineChartData = logsChartData;
		const lineChartLabels = logsChartLabels;
		const dataToSend = {
			lineChartData,
			lineChartLabels
		}
		return dataToSend;
	}
}
