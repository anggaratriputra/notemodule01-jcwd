const Queue = require("./queue");

const q = new Queue();

// Enqueue some orders
q.addQueue("jono");
q.addQueue("joni");
q.addQueue("jona");
q.addQueue("jonu");
q.addQueue("jone");

q.printQueue(); // Print orders in the queue

// Run process// Run process
const processQueue = async () => {
    console.log("Processing orders...");

    await q.processQueue();

    console.log("All orders processed.");
};

processQueue().then(() => {
    console.log("Queue Done.");
});