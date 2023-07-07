function superDigit(n) {
    if (n < 10) {
      return n;
    }
  
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
  
    return superDigit(sum);
  }
  
  function processData(input) {
    const [n, k] = input.trim().split(' ').map(Number);
    const superDigitValue = superDigit(n * k);
    console.log(superDigitValue);
  }
  
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let _input = '';
  process.stdin.on('data', function (input) {
    _input += input;
  });
  
  process.stdin.on('end', function () {
    processData(_input);
  });
  