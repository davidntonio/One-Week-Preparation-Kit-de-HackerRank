function diagonalDifference(arr) {
    const n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;
  
    for (let i = 0; i < n; i++) {
      primarySum += arr[i][i]; 
      secondarySum += arr[i][n - 1 - i]; 
    }
  
    return Math.abs(primarySum - secondarySum); 
  }
  
  function main() {
    const n = parseInt(readLine().trim(), 10);
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(readLine().split(' ').map(Number));
    }
    const result = diagonalDifference(arr);
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
  