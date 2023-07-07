function cookies(k, A) {
    let operations = 0;
    const minHeap = new MinHeap();
  
    for (let i = 0; i < A.length; i++) {
      minHeap.insert(A[i]);
    }
  
    while (minHeap.peek() !== null && minHeap.peek() < k) {
      if (minHeap.size() < 2) {
        return -1;
      }
  
      const sweetness1 = minHeap.extractMin();
      const sweetness2 = minHeap.extractMin();
      const newSweetness = sweetness1 + 2 * sweetness2;
  
      minHeap.insert(newSweetness);
      operations++;
    }
  
    return operations;
  }
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }
  
    bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        this.bubbleUp(parentIndex);
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
  
      return minValue;
    }
  
    bubbleDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        this.bubbleDown(smallestIndex);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  }
  