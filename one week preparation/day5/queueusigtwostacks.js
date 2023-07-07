class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  
    front() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2[this.stack2.length - 1];
    }
  }
  
  function processData(input) {
    const queries = input.split('\n').slice(1);
    const queue = new Queue();
  
    for (let i = 0; i < queries.length; i++) {
      const [queryType, value] = queries[i].split(' ');
  
      if (queryType === '1') {
        queue.enqueue(parseInt(value));
      } else if (queryType === '2') {
        queue.dequeue();
      } else if (queryType === '3') {
        console.log(queue.front());
      }
    }
  }
  
  processData(`3
  1 14
  3
  3`);
  