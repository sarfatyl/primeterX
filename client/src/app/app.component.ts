import {Component} from '@angular/core';
import {LogsService} from "./services/logs.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  logs;
  tableSettings;
  page: number = 0;
  blackListOnly: boolean = false;
  linearChartOptions;

  private _domainFilter: string = '';
  private linearData;
  set domainFilter(value) {
    this._domainFilter = value;
    this.getLogs();
  }

  get domainFilter() {
    return this._domainFilter;
  }

  constructor(private logsService: LogsService) {
    this.getLogs();
    this.getLinearDate();
  }

  private async getLogs() {
    this.logs = await this.logsService.getLogs(this.page, this.blackListOnly, this._domainFilter);
    this.tableSettings = {
      headers: [
        {title: 'Ip', key: 'ip'},
        {title: 'Timestamp', key: 'timestamp'},
        {title: 'Domain', key: 'domain'},
        {title: 'Blacklisted', key: 'blacklisted'},
        {title: 'Event_type', key: 'event_type'}
      ],
      data: this.logs
    }
  }

  filterByBlackList($event) {
    this.blackListOnly = $event.target.checked;
    this.getLogs();
  }

  next() {
    this.page++;
    this.getLogs();
  }

  back() {
    this.page--;
    this.getLogs();
  }

  filterByDomain($event) {
    console.log('$event', $event.target.value);
    this.getLogs()
  }

  private async getLinearDate() {
    this.linearData = await this.logsService.getLinearData();
  }
}
