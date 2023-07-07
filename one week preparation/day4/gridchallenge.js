function gridChallenge(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    for (let i = 0; i < rows; i++) {
      grid[i] = grid[i].split('').sort().join('');
    }
  
    for (let j = 0; j < cols; j++) {
      for (let i = 1; i < rows; i++) {
        if (grid[i][j] < grid[i - 1][j]) {
          return 'NO';
        }
      }
    }
  
    return 'YES';
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let input = [];
  let currentLine = 0;
  
  rl.on('line', (line) => {
    input.push(line);
  });
  
  rl.on('close', () => {
    const t = Number(input[currentLine++]);
  
    for (let i = 0; i < t; i++) {
      const n = Number(input[currentLine++]);
      const grid = [];
  
      for (let j = 0; j < n; j++) {
        grid.push(input[currentLine++]);
      }
  
      const result = gridChallenge(grid);
      console.log(result);
    }
  });
  