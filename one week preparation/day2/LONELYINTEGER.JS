function findUniqueElement(arr) {
    let uniqueElement = 0;
    for (let i = 0; i < arr.length; i++) {
      uniqueElement ^= arr[i]; 
    }
    return uniqueElement;
  }
  
  function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().split(' ').map(Number);
    const result = findUniqueElement(arr);
    console.log(result);
  }
  

  function readLine() {
    return inputString[currentLine++];
  }
  
  let inputString = [];
  let currentLine = 0;
  
  process.stdin.on('data', inputStdin => {
    inputString = inputStdin.toString().split('\n');
  });
  
  process.stdin.on('end', () => {
    main();
  });
  