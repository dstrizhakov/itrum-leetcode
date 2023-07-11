
class Observer<T> {
private observers: ((value: T) => void)[];

constructor() {
  this.observers = [];
}

public subscribe(fn: (data: T) => void) {
  this.observers.push(fn);
}

public notify(data: T) {
  this.observers.forEach(fn => fn(data));
}
}


const observable = new Observer<number>();
observable.subscribe(data => console.log("Observer 1: ", data));
observable.subscribe(data => console.log("Observer 2: ", data));

observable.notify(10); // "Observer 1: 10" and "Observer 2: 10" will be logged to the console
