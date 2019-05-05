import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import { map } from 'rxjs/operators';

const DATA_URL = 'ws://stocks.mnet.website';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  public messages: Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.messages = wsService.connect(DATA_URL)
      .pipe(map((response: MessageEvent) => {
        const data = JSON.parse(response.data);
        return data;
      })) as Subject<any>;
  }
}
