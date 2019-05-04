import { Observable, Observer, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, share } from 'rxjs/operators';

@Injectable()
export class EventManager {
  observable: Observable<any>;
  observer: Observer<any>;

  constructor(
  ) {
    // init
    this.observable = new Observable((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }

  /**
   * Method to subscribe to an event with callback
   */
  subscribe(eventName: any, callback: any): Subscription {
    const subscriber = this.observable.pipe(
      filter(event => event.name === eventName),
    ).subscribe(callback);

    return subscriber;
  }

  /**
   * Method to broadcast the event to observer
   */
  broadcast(event: any) {
    if (this.observer != null) {
      this.observer.next(event);
    }
  }

  /**
   * Method to unsubscribe the subscription
   */
  destroy(subscriber: Subscription) {
    subscriber.unsubscribe();
  }
}
