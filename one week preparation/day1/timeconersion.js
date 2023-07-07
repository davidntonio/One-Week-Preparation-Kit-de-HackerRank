function timeConversion(s) {
    const isAM = s.includes('AM');
    const timeArr = s.slice(0, 8).split(':');
  
    let hours = parseInt(timeArr[0]);
    const minutes = timeArr[1];
    const seconds = timeArr[2];
  
    if (isAM) {
      if (hours === 12) {
        hours = 0;
      }
    } else {
      if (hours !== 12) {
        hours += 12;
      }
    }
  
    const formattedHours = String(hours).padStart(2, '0');
    return `${formattedHours}:${minutes}:${seconds}`;
  }
  
  // Read input from the console
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let inputTime = '';
  
  rl.on('line', (input) => {
    inputTime = input;
    rl.close();
  });
  
  rl.on('close', () => {
    const convertedTime = timeConversion(inputTime);
    console.log(convertedTime);
  });
  