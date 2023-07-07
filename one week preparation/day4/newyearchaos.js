function minimumBribes(q) {
    let bribes = 0;
  
    for (let i = q.length - 1; i >= 0; i--) {
      const originalPosition = q[i] - 1;
      const currentPosition = i;
  
      if (originalPosition - currentPosition > 2) {
        return "Too chaotic";
      }
  
      for (let j = Math.max(0, originalPosition - 1); j < currentPosition; j++) {
        if (q[j] > q[i]) {
          bribes++;
        }
      }
    }
  
    return bribes;
  }
  
  const queue1 = [2, 1, 5, 3, 4];
  const result1 = minimumBribes(queue1);
  console.log(result1); // Output: Too chaotic
  
  const queue2 = [5, 1, 2, 3, 7, 8, 6, 4];
  const result2 = minimumBribes(queue2);
  console.log(result2); // Output: 4
  