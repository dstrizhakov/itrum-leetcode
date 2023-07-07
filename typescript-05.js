"use strict";
class EventEmitter {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    emit(event) {
        for (const listener of this.listeners) {
            listener(event);
        }
    }
}
// Usage
const stringEventEmitter = new EventEmitter();
stringEventEmitter.addListener((event) => {
    console.log(`Received event: ${event}`);
});
stringEventEmitter.emit('Hello, World!');
stringEventEmitter.emit('Goodby World!');
