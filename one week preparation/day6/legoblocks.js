function legoBlocks(n, m) {
    const MOD = 1000000007;
    const memo = new Map();
  
    function countWays(h, w) {
      if (h <= 0 || w <= 0) {
        return 0;
      }
  
      if (h === 1 && w === 1) {
        return 1;
      }
  
      if (memo.has(`${h},${w}`)) {
        return memo.get(`${h},${w}`);
      }
  
      let ways = 0;
      for (let cut = 1; cut <= w; cut++) {
        const upperHeight = h;
        const lowerHeight = h;
        const upperWidth = cut;
        const lowerWidth = w - cut;
        ways += countWays(upperHeight, upperWidth) * countWays(lowerHeight, lowerWidth);
  
        const leftHeight = h;
        const rightHeight = h;
        const leftWidth = cut;
        const rightWidth = w - cut;
        ways += countWays(leftHeight, leftWidth) * countWays(rightHeight, rightWidth);
      }
  
      ways %= MOD;
      memo.set(`${h},${w}`, ways);
      return ways;
    }
  
    return countWays(n, m);
  }
  
  function main() {
    const t = parseInt(readLine().trim(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
      const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
      const n = parseInt(firstMultipleInput[0], 10);
      const m = parseInt(firstMultipleInput[1], 10);
      const result = legoBlocks(n, m);
      console.log(result);
    }
  }
  