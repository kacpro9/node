const eventEmitter = require("events");

// const emitter = new eventEmitter();

// emitter.on("message", (msg) => {
//   console.log(`Received message: ${msg}`);
// });

// emitter.emit("message", "Hello, World!");

function printData(data) {
  console.log(`Data received: ${data.data} from ${data.url}`);
}

function confirm() {
  console.log("Data confirmed");
}

class Puller extends eventEmitter {
  constructor(url) {
    super();
    this.url = url;
  }

  pull() {
    this.interval = setInterval(() => {
      this.emit("getData", {
        url: this.url,
        data: "Sample Data",
      });
    }, 1000);
  }
  stop(callback) {
    this.removeListener("getData", callback);
    clearInterval(this.interval);
  }
}

const puller = new Puller("https://example.com");

puller.on("getData", printData);
puller.on("getData", confirm);

puller.pull();

setTimeout(() => {
  puller.stop(printData);
}, 10000);
