export class Store {
    constructor() {
        if (!Store.instance) {
            this.data = {
                count: 0,
                list: [],
                info: {},
            };
            this.subscribers = new Set();
            this.callbacks = {}
            Store.instance = this;
        }
        return Store.instance;
    }

    subscribe(key, callback) {
        this.callbacks[key] = this.callbacks[key] || [];
        this.callbacks[key].push(callback);
    }

    unsubscribe(key) {
        debugger
        delete this.callbacks[key]
        console.log("d")
    }

    update(key, value) {
        this.data[key] = value;
        if (Object.keys(this.callbacks).length > 0) {
            for (const [key, value] of Object.entries(this.callbacks)) {
                value.forEach((callback) => {
                    callback(this.data);
                });
            }
        }
        return value
    }

    get(key) {
        return this.data[key];
    }
}
