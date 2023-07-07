function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the number of elements: ', (n) => {
    const arr = [];
  
    const readElement = () => {
      rl.question('Enter an element: ', (element) => {
        arr.push(Number(element));
  
        if (arr.length < n) {
          readElement();
        } else {
          rl.close();
          const sortedArr = bubbleSort(arr);
          console.log('Sorted Array:', sortedArr);
        }
      });
    };
  
    readElement();
  });
  