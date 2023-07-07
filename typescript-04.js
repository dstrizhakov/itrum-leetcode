"use strict";
class Observer {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
    }
    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}
const observable = new Observer();
observable.subscribe(data => console.log("Observer 1: ", data));
observable.subscribe(data => console.log("Observer 2: ", data));
observable.notify(10); // "Observer 1: 10" and "Observer 2: 10" will be logged to the console
