function countingSort(arr) {
    const frequencyArray = Array.from({ length: 100 }, () => 0);
  
    for (let i = 0; i < arr.length; i++) {
      frequencyArray[arr[i]]++;
    }
  
    return frequencyArray;
  }
  
  function main(input) {
    const n = parseInt(input[0].trim(), 10);
    const arr = input[1].split(' ').map(Number);
    const result = countingSort(arr);
    return result.join(' ');
  }
  
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  let inputString = '';
  let currentLine = 0;
  
  process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
  });
  
  process.stdin.on('end', () => {
    const input = inputString.trim().split('\n');
    const output = main(input);
    process.stdout.write(output);
  });
  