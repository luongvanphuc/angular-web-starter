import { Subscription } from 'rxjs';

export const unsubscribe = (subscriber: Subscription) => {
  if (subscriber) {
    subscriber.unsubscribe();
  }
};

export const unsubscribeAll = (subscribers: Array<Subscription>) => {
  if (!subscribers) {
    return;
  }

  subscribers.forEach(subscriber => {
    if (subscriber) {
      subscriber.unsubscribe();
    }
  });
};
