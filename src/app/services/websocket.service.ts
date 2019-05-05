import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }
  private subject: Rx.Subject<MessageEvent>;
  public connect(url): Rx.Subject<any> {
    if (!this.subject) {
      this.subject = this.create(url);
      // console.log('finally connected @@' + url);
    }
    return this.subject;
  }
  private create(url): Rx.Subject<any> {
    const ws = new WebSocket(url);
    const observable = Rx.Observable
      .create((obs) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      });
    return Rx.Subject.create({}, observable);
  }
}
