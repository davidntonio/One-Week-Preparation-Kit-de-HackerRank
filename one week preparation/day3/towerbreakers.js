'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function towerBreakers(n, m) {
  if (m === 1 || n % 2 === 0) {
    return 2;
  } else {
    return 1;
  }
}

function main() {
  rl.question('Enter the number of test cases: ', (t) => {
    const testCases = [];
    let count = 0;

    function handleTestCaseInput(input) {
      const [n, m] = input.split(' ').map(Number);
      testCases.push([n, m]);
      count++;

      if (count === t) {
        rl.close();
        processTestCases(testCases);
      }
    }

    rl.on('line', handleTestCaseInput);
  });
}

function processTestCases(testCases) {
  for (let i = 0; i < testCases.length; i++) {
    const [n, m] = testCases[i];
    const result = towerBreakers(n, m);
    console.log(result);
  }
}

main();
