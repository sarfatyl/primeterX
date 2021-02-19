import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private httpClient:HttpClient) { }

  async getLogs(page: number, blackListOnly: boolean, domainFilter: string) {
    return this.httpClient.get('http://localhost:8101/logs/', {
      params: {
        blackListOnly: blackListOnly.toString(),
        amount: '10',
        page: page.toString(),
        domainFilter
      }
    }).toPromise();
  }

  async getLinearData() {
    return this.httpClient.get('http://localhost:8101/logs/getLinearData', {
    }).toPromise();
  }

}
