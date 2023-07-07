function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);
    console.log(minSum, maxSum);
  }
  

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let inputArr = [];
  
  rl.on('line', (input) => {
    inputArr = input.split(' ').map(Number);
    rl.close();
  });
  
  rl.on('close', () => {
    miniMaxSum(inputArr);
  });
  