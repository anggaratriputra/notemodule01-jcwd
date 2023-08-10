class Queue {
    constructor() {
      this.queue = [];
      this.isProcessing = false;
    }
  
    addQueue(order) {
      this.queue.push(order);
    }                                                                                                                                
  
    processQueue = async () => {
      this.isProcessing = true;
  
      while (this.queue.length > 0) {
        const order = this.queue.shift();
        const processingTime = Math.floor(Math.random() * 10) + 1;
  
        console.log(`Processing order: ${order}`);
        await this.delay(processingTime * 1000);
        console.log(`Order ${order} processed in ${processingTime} seconds.`);
      }
  
      this.isProcessing = false;
    };
  
    delay = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
    printQueue = () => {
      console.log("Orders in queue:", this.queue);
    };
  }
  
  module.exports = Queue;
  